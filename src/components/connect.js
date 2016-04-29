import { Component, PropTypes, createElement } from 'react';
import invariant from 'invariant';
import hoistStatics from 'hoist-non-react-statics';
import R from 'ramda';

import createClassName from '../utils/createClassName';
import shallowEqual from '../utils/shallowEqual';

const mergeDefaultsWithProps = (props, defaults) => ({
  ...defaults,
  ...props
});

/**
 * Picks values of utils from the props that are passed to the component.
 *
 * @param  {object} props [description]
 * @param  {object} utils [description]
 * @return {object}
 */
const shallowPickUtilsFromProps = (props, utils) => R.pick(R.keys(utils), props);

const getClassNamesFromPropType = R.curry((utils, propType, values) => {
  return R.values(R.pick(values, R.prop(propType, utils)));
});

const computeUtilsClassNames = utils => R.compose(
  R.chain(R.apply(getClassNamesFromPropType(utils))),
  R.toPairs,
  R.map(R.ifElse(R.isArrayLike, R.identity, R.of))
);

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// Helps track hot reloading.
let nextVersion = 0;

export default function connect(options = {}) {

  const {
    withRef = false,
    pickUtilsFromProps = shallowPickUtilsFromProps,
    refName = 'wrappedInstance',
    utils = {},
    defaults = {}
  } = options;

  // Helps track hot reloading.
  const version = nextVersion++;

  return function wrapWithCssUtils(WrappedComponent) {
    class Connect extends Component {

      shouldComponentUpdate() {
        return this.havePropsChanged;
      }

      constructor(props, context) {
        super(props, context);

        this.version = version;

        /**
         * TODO: this.utils needs to be uptated if props.utils or context.utils
         *       changes.
         */
        this.utils = {
          ...(props.utils || context.utils),
          ...utils
        };

        invariant(this.utils,
          `Could not find "utils" in either the context or ` +
          `props of "${this.constructor.displayName}". ` +
          `Either wrap the root component in a <Provider>, ` +
          `or explicitly pass "utils" as a prop to "${this.constructor.displayName}".`
        );

        this.clearCache();
      }

      componentWillReceiveProps(nextProps) {
        if (!shallowEqual(nextProps, this.props)) {
          this.havePropsChanged = true;
        }
      }

      componentWillUnmount() {
        this.clearCache();
      }

      updateClassNamesIfNeeded() {
        const nextUtilsProps = pickUtilsFromProps(this.props, this.utils);

        if (this.utilsProps && shallowEqual(nextUtilsProps, this.utilsProps)) {
          return false;
        }

        const {className: propClassName} = this.props;
        const mergedUtilsProps = mergeDefaultsWithProps(nextUtilsProps, defaults);
        const utilsClassNames = computeUtilsClassNames(this.utils)(mergedUtilsProps);
        const className = createClassName(utilsClassNames, propClassName);

        this.utilsProps = nextUtilsProps;
        this.className = className;

        return true;
      }

      updateMergedProps() {
        const {className, ...rest} = this.props;

        this.mergedProps = {
          className: this.className,
          ...rest
        };
      }

      clearCache() {
        this.utilsProps = null;
        this.mergedProps = null;
        this.className = null;
        this.havePropsChanged = true;
        this.renderedElement = null;
      }

      render() {
        const {
          havePropsChanged,
          renderedElement
        } = this;

        this.havePropsChanged = false;

        let haveClassNamesChanged = this.updateClassNamesIfNeeded();

        let haveMergedPropsChanged = true;

        if (
          haveClassNamesChanged ||
          havePropsChanged
        ) {
          this.updateMergedProps()
        } else {
          haveMergedPropsChanged = false
        }

        if (!haveMergedPropsChanged && renderedElement) {
          return renderedElement;
        }

        if (withRef) {
          this.renderedElement = createElement(WrappedComponent, {
            ...this.mergedProps,
            ref: refName
          });
        } else {
          this.renderedElement = createElement(WrappedComponent,
            this.mergedProps
          );
        }

        return this.renderedElement;
      }
    }

    Connect.displayName = `CssUtils(${getDisplayName(WrappedComponent)})`;
    Connect.WrappedComponent = WrappedComponent;
    Connect.contextTypes = {
      utils: PropTypes.object.isRequired
    }
    Connect.propTypes = {
      className: PropTypes.string
    };

    if (process.env.NODE_ENV !== 'production') {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        if (this.version === version) {
          return;
        }

        // We are hot reloading!
        this.version = version;
        this.clearCache();
      }
    }

    return hoistStatics(Connect, WrappedComponent)

    return Connect;
  };
}

import React, {PropTypes, Component} from 'react';
import {connect as connectCSSUtils} from 'react-css-utils';

@connectCSSUtils()
export default class View extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    element: PropTypes.node
  };

  static defaultProps = {
    element: 'div',
  };

  render() {
    const {element: Element, children, className: propClassName, ...other} = this.props;

    return (
      <Element
        className={propClassName}
        {...other}>
        {children}
      </Element>
    );
  }
}

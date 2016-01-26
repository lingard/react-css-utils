import expect from 'expect';
import React, { PropTypes, Component } from 'react';
import TestUtils from 'react-addons-test-utils';
import { Provider } from '../../src/index';

describe('React', () => {
  describe('Provider', () => {
    class Child extends Component {

      render() {
        return <div />;
      }
    }

    Child.contextTypes = {
      utils: PropTypes.object.isRequired
    };

    it('should enforce a single child', () => {
      const utils = {};

      // Ignore propTypes warnings
      const propTypes = Provider.propTypes;

      Provider.propTypes = {}

      try {
        expect(() => TestUtils.renderIntoDocument(
          <Provider utils={utils}>
            <div />
          </Provider>
        )).toNotThrow();

        expect(() => TestUtils.renderIntoDocument(
          <Provider utils={utils}>
          </Provider>
        )).toThrow(/exactly one child/);

        expect(() => TestUtils.renderIntoDocument(
          <Provider utils={utils}>
            <div />
            <div />
          </Provider>
        )).toThrow(/exactly one child/)
      } finally {
        Provider.propTypes = propTypes;
      }
    });

    it('should add the utils to the child context', () => {
      const utils = {};

      const spy = expect.spyOn(console, 'error');
      const tree = TestUtils.renderIntoDocument(
        <Provider utils={utils}>
          <Child />
        </Provider>
      );
      spy.destroy();
      expect(spy.calls.length).toBe(0);

      const child = TestUtils.findRenderedComponentWithType(tree, Child);
      expect(child.context.utils).toBe(utils);
    });

  });
});
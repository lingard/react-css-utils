import React, {PropTypes, Component} from 'react';
import {connect as connectCSSUtils} from 'react-css-utils';

@connectCSSUtils(
  {
  },
  {
    fontWeight: 'normal',
    fontSize: 'inherit',
    color: 'base'
  }
)
export default class Text extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    element: PropTypes.node
  };

  static defaultProps = {
    element: 'p',
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

import React, {PropTypes, Component, Children} from 'react';
import {provider as CSSUtilsProvider} from 'react-css-utils';

import styles from './Theme.css';

import {defaultTheme, darkTheme} from '../styles/themes';

const THEMES = {
  defaultTheme,
  // use default themes values as fallbacks for the dark theme. 
  darkTheme: {
    color: {
      ...defaultTheme.color,
      ...darkTheme.color
    },
    background: {
      ...defaultTheme.background,
      ...darkTheme.background,
    },
    borderColor: {
      ...defaultTheme.borderColor,
      ...darkTheme.borderColor,
    },
    fill: {
      ...defaultTheme.fill,
      ...darkTheme.fill,
    }
  }
};

export default class Theme extends Component {

  static propTypes = {
    theme: PropTypes.oneOf(['default', 'dark']),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    element: PropTypes.node
  };

  static contextTypes = {
    utils: PropTypes.object.isRequired
  };

  static childContextTypes = {
    utils: PropTypes.object.isRequired
  };

  static defaultProps = {
    theme: 'default'
  };

  getChildContext() {
    return { utils: this.utils };
  }

  constructor(props, context) {
    super(props, context);

    const {utils} = context;
    const theme = THEMES[`${props.theme}Theme`];

    this.utils = {
      ...utils,
      ...theme
    };
  }

  render() {
    let { children } = this.props;

    return Children.only(children);
  }

  // render() {
  //   let { children, theme } = this.props;

  //   return (
  //     <div className={styles[theme]}>
  //       {children}
  //     </div>
  //   );
  // }
}

import React, {PropTypes, Component} from 'react';

import View from './View';

import styles from './Navbar.css';

export default class Text extends Component {
  render() {
    return (
      <View className={styles.base} {...this.props} />
    );
  }
}

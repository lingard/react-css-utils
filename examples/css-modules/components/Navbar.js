import React, {PropTypes, Component} from 'react';

import View from './View';

import styles from './Navbar.css';

export default class Text extends Component {
  render() {
    return (
      <View
        className={styles.base}
        flex={['no-shrink', 'justify-between', 'align-items-center']}
        {...this.props} />
    );
  }
}

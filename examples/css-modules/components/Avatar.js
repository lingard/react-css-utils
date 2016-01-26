import React, {PropTypes, Component} from 'react';

import createClassName from '../utils/createClassName';
import View from './View';

import styles from './Avatar.css';

export default class Text extends Component {

  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
  };

  static defaultProps = {
    imageUrl: 'http://placehold.it/32x32',
    size: 'medium'
  };

  render() {
    const {imageUrl, size, ...other} = this.props;

    const style = {
      backgroundImage: `url(${imageUrl})`
    };

    return (
      <View
        className={createClassName(
          styles.base,
          styles[size]
        )}
        style={style}
        {...other} />
    );
  }
}

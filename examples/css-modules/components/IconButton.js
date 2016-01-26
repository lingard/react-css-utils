import React, {PropTypes, Component} from 'react';

import createClassName from '../utils/createClassName';
import View from './View';
import Icon from './Icon';

import styles from './IconButton.css';

export default class IconButton extends Component {

  static propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    size: 'medium'
  };

  render() {
    const {size, className, name, ...other} = this.props;

    return (
      <View
        element='button'
        display='flex'
        flex={['justify-center', 'align-items-center']}
        className={createClassName(
          styles.base,
          styles[size],
          className
        )}
        {...other}
        >
        <Icon name={name} />
      </View>
    );
  }

}

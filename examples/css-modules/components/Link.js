import React, {PropTypes, Component} from 'react';

import createClassName from '../utils/createClassName';
import Text from './Text';

import styles from './Link.css';

export default class Link extends Component {

  static propTypes = {
    to: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired
  };

  render() {
    const {className, ...other} = this.props;

    return (
      <Text
        element='a'
        className={createClassName(
          styles.base,
          className
        )}
        {...other}>

        {this.props.children}
      </Text>
    );
  }

}

import React, {Component, PropTypes} from 'react';
import {connect as connectCSSUtils} from 'react-css-utils';
import * as MaterialIcons from 'react-icons/lib/md';

import View from './View';

@connectCSSUtils({}, {})
export default class Icon extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    fill: PropTypes.string.isRequired
  };

  static defaultProps = {
    fill: 'base'
  };

  render() {
    const {name, ...other} = this.props;
    
    const Component = MaterialIcons[name];

    return (
      <View display='flex' {...other}>
        <Component size='20' />
      </View>
    );
  }
}
import React, {PropTypes, Component} from 'react';

import View from '../View';

import Email from './Email';

export default class EmailList extends Component {

  static propTypes = {
    emails: PropTypes.array.isRequired
  };

  render() {
    const {emails} = this.props;

    const emailNodes = emails.map((email, idx) => <Email email={email} key={idx} />);

    return (
      <View>
        {emailNodes}
      </View>
    );
  }
}

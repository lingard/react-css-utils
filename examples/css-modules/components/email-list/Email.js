import React, {PropTypes, Component} from 'react';

import View from '../View';
import Text from '../Text';
import Avatar from '../Avatar';

export default class Email extends Component {

  static propTypes = {
    email: PropTypes.object.isRequired
  };

  render() {
    const {email} = this.props;

    return (
      <View
        display='flex'
        padding='a-m'
        fontSize='small'
        border={['solid', 'b-s']}
        background='base'
        borderColor={['base']}>

        <View margin='r-m'>
          <Avatar imageUrl={email.actor.imageUrl} />
        </View>

        <View>
          <View display='flex' flex={['justify-between']}>
            <Text>{email.actor.name}</Text>
            <Text>10 minutes ago</Text>
          </View>

          <Text fontWeight='bold'>{email.title}</Text>
          <Text>{email.message}</Text>
        </View>
      </View>
    );
  }
}

import React, {Component} from 'react';

import View from './View';
import Text from './Text';
import Theme from './Theme';

import styles from './Sidebar.css';

export default class Sidebar extends Component {
  render() {
    return (
      <Theme theme='dark'>
        <View 
          className={styles.base}
          display='flex'
          flex={['col', 'justify-between', 'no-shrink']} 
          background='base'>

          <View padding='a-l'>
            <View element='ul' margin='b-m'>
              <View
                element='li'
                display='flex'
                flex={['justify-between', 'align-items-end']}
                margin='b-xs'>
                <Text fontSize='medium'>Inbox</Text>
                <Text fontSize='xsmall'>32</Text>
              </View>
              <View element='li' margin='b-xs'><Text fontSize='medium'>Starred</Text></View>
              <View element='li' margin='b-xs'><Text fontSize='medium'>Drafts</Text></View>
              <View element='li' margin='b-xs'><Text fontSize='medium'>Sent mail</Text></View>
              <View element='li' margin='b-xs'><Text fontSize='medium'>Trash</Text></View>
            </View>

            <View element='ul'>
              <View element='li'><Text fontSize='small'>Drafts</Text></View>
              <View element='li'><Text fontSize='small'>Notes</Text></View>
              <View element='li'><Text fontSize='small'>Personal</Text></View>
            </View>
          </View>

          <View
            display='flex'
            flex={['align-items-center']}
            padding={['x-m', 'y-s']}
            background='brand-dark'>

            <View
              margin='r-s'
              padding='a-s'
              background='base' />

            <Text fontSize='small'>john@doe.com</Text>
          </View>
        </View>
      </Theme>
    );
  }
}

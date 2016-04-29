import React, {Component} from 'react';

import View from './View';
import Text from './Text';
import Link from './Link';
import Avatar from './Avatar';
import IconButton from './IconButton';
import Navbar from './Navbar';
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

          <View>

            <Navbar
              display='flex'
              padding={['l-m', 'r-s']}
              background='brand-dark'>

              <Text fontSize='small' fontWeight='bold'>mail.</Text>

              <View>
                <IconButton name='MdSettings' />
              </View>

            </Navbar>

            <View padding='a-l'>
              <View element='ul' margin='b-m'>
                <View
                  element='li'
                  display='flex'
                  flex={['justify-between', 'align-items-end']}
                  margin='b-xs'>

                  <Link fontSize='medium'>Inbox</Link>

                  <Text fontSize='xsmall'>32</Text>

                </View>

                <View element='li' margin='b-xs'><Link fontSize='medium' color='muted'>Starred</Link></View>
                <View element='li' margin='b-xs'><Link fontSize='medium' color='muted'>Drafts</Link></View>
                <View element='li' margin='b-xs'><Link fontSize='medium' color='muted'>Sent mail</Link></View>
                <View element='li' margin='b-xs'><Link fontSize='medium' color='muted'>Trash</Link></View>
              </View>

              <View element='ul'>
                <View element='li'><Link fontSize='small'>Drafts</Link></View>
                <View element='li'><Link fontSize='small'>Notes</Link></View>
                <View element='li'><Link fontSize='small'>Personal</Link></View>
              </View>
            </View>

          </View>

          <View
            display='flex'
            flex={['align-items-center']}
            padding={['x-m', 'y-s']}
            background='emphasized'>

            <Avatar size='small' margin='r-s' />

            <Text fontSize='small'>john@doe.com</Text>
          </View>
        </View>
      </Theme>
    );
  }
}

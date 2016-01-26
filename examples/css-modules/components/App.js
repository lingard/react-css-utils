import React, {Component} from 'react';

import View from './View';
import Text from './Text';
import Link from './Link';
import IconButton from './IconButton';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import EmailList from './email-list';

// import emails from '../data/emails';
// 
const emails = [
  {
    id: 1,
    title: 'Purus Adipiscing Consectetur Egestas',
    message: `Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`,
    actor: {
      name: 'John Doe',
      email: 'john@doe.com',
      imageUrl: 'http://api.adorable.io/avatars/278/abott@adorable.io.png'
    }
  },
  {
    id: 2,
    title: 'Purus Adipiscing Consectetur Egestas',
    message: `Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`,
    actor: {
      name: 'John Doe',
      email: 'john@doe.com',
      imageUrl: 'http://api.adorable.io/avatars/278/a@adorable.io.png'
    }
  },
  {
    id: 3,
    title: 'Purus Adipiscing Consectetur Egestas',
    message: `Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`,
    actor: {
      name: 'John Doe',
      email: 'john@doe.com',
      imageUrl: 'http://api.adorable.io/avatars/278/efef@adorable.io.png'
    }
  },
  {
    id: 4,
    title: 'Purus Adipiscing Consectetur Egestas',
    message: `Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`,
    actor: {
      name: 'John Doe',
      email: 'john@doe.com',
      imageUrl: 'http://api.adorable.io/avatars/278/ads@adorable.io.png'
    }
  },
  {
    id: 5,
    title: 'Purus Adipiscing Consectetur Egestas',
    message: `Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`,
    actor: {
      name: 'John Doe',
      email: 'john@doe.com',
      imageUrl: 'http://api.adorable.io/avatars/278/gr@adorable.io.png'
    }
  },
  {
    id: 6,
    title: 'Purus Adipiscing Consectetur Egestas',
    message: `Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`,
    actor: {
      name: 'John Doe',
      email: 'john@doe.com',
      imageUrl: 'http://api.adorable.io/avatars/278/bt@adorable.io.png'
    }
  },
  {
    id: 7,
    title: 'Purus Adipiscing Consectetur Egestas',
    message: `Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`,
    actor: {
      name: 'John Doe',
      email: 'john@doe.com',
      imageUrl: 'http://api.adorable.io/avatars/278/ref@adorable.io.png'
    }
  },
  {
    id: 8,
    title: 'Purus Adipiscing Consectetur Egestas',
    message: `Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`,
    actor: {
      name: 'John Doe',
      email: 'john@doe.com',
      imageUrl: 'http://api.adorable.io/avatars/278/ggre@adorable.io.png'
    }
  }
];

export default class App extends Component {
  render() {
    return (
      <View size='fill' display='flex' overflow='hidden'>
        <Sidebar />
        <View size='fill'>
          <View 
            display='flex'
            size='fill'>
           
            <View
              display='flex'
              flex={['col']}
              size='width-1-of-3' 
              background='muted'>

              <Navbar 
                display='flex'
                flex={['justify-between', 'align-items-center']}
                padding='x-xs'
                border={['solid', 'b-s']}
                borderColor={['base']}>

                <View>
                  <IconButton name='MdSort' />
                </View>

                <Text fontSize='small'>Inbox</Text>
              
                <View>
                  <IconButton name='MdSearch' />
                </View>
              
              </Navbar>

              <View flex={['grow-1']} overflow={['x-hidden', 'y-scroll']} >
                <EmailList emails={emails} />
              </View>

            </View>

            <View
              display='flex'
              flex={['col']}
              size='width-2-of-3' 
              background='muted'
              border={['solid', 'l-s']}
              borderColor={['base']}>

              <Navbar 
                display='flex'
                flex={['justify-between']}
                padding={['x-s']}
                border={['solid', 'b-s']}
                borderColor={['base']}>

                <View display='flex'>
                  <IconButton name='MdDelete' />
                  <IconButton name='MdReply' />
                  <IconButton name='MdReplyAll' />
                  <IconButton name='MdArrowForward' />
                </View>
              </Navbar>

              <View
                flex={['grow-1']}
                overflow={['x-hidden', 'y-scroll']}
                padding='a-xl'>

                  <View display='flex'>
                    <IconButton name='MdStar' size='small' margin='r-xs' />
                    <Text fontSize='small'><Link fontWeight='semibold'>John Doe</Link> to <Link fontWeight='semibold'>Jane Doe</Link></Text>
                  </View>

                  <Text fontSize='xlarge' margin='b-m'>Hello how are you doing?</Text>
                  <Text margin='b-s'>Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</Text>

                  <Text>Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.

  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui.

  Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui.</Text>

              </View>
            </View>

          </View>
        </View>
      </View>
    );
  }
}
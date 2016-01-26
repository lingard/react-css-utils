import React, {Component} from 'react';

import View from './View';
import Text from './Text';

import Sidebar from './Sidebar';

export default class App extends Component {
  render() {
    return (
      <View size='fill' display='flex' >
        <Sidebar />
        <View size='fill'>
          <View 
            display='flex'
            size='fill'>
           
            <View 
              size='width-1-of-3' 
              borderRadius='base'
              background='muted'>

              <View 
                display='flex'
                flex={['justify-center']}
                padding={['x-m', 'y-s']}
                border={['solid', 'b-s']}
                borderColor={['base']}>

                <Text fontSize='small'>Inbox</Text>
              </View>

              <View 
                padding='a-m'
                border={['solid', 'b-s']}
                borderColor={['base']}>

                <View display='flex' flex={['justify-between']}>
                  <Text>John Doe</Text>
                  <Text>10 minutes ago</Text>
                </View>

                <Text fontWeight='bold'>Hello there</Text>
                <Text>Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum.</Text>
              </View>

              <View 
                padding='a-m'
                border={['solid', 'b-s']}
                borderColor={['base']}>

                <View display='flex' flex={['justify-between']}>
                  <Text>John Doe</Text>
                  <Text>10 minutes ago</Text>
                </View>

                <Text fontWeight='bold'>Hello there</Text>
                <Text>Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum.</Text>
              </View>

              <View 
                padding='a-m'
                border={['solid', 'b-s']}
                borderColor={['base']}>

                <View display='flex' flex={['justify-between']}>
                  <Text>John Doe</Text>
                  <Text>10 minutes ago</Text>
                </View>

                <Text fontWeight='bold'>Hello there</Text>
                <Text>Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum.</Text>
              </View>

              <View 
                padding='a-m'
                border={['solid', 'b-s']}
                borderColor={['base']}>

                <View display='flex' flex={['justify-between']}>
                  <Text>John Doe</Text>
                  <Text>10 minutes ago</Text>
                </View>

                <Text fontWeight='bold'>Hello there</Text>
                <Text>Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum.</Text>
              </View>
            </View>

            <View 
              size='width-2-of-3' 
              background='muted'
              border={['solid', 'l-s']}
              borderColor={['base']}>


              <View 
                display='flex'
                flex={['justify-between']}
                padding={['x-m', 'y-s']}
                border={['solid', 'b-s']}
                borderColor={['base']}>

                <Text fontSize='small'>Reply</Text>
              </View>

              <View padding='a-xl'>
                <Text fontSize='large'>Hello how are you doing?</Text>
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
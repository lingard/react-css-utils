# React css utils
Makes usage of global css utilities easier while using react. Preferably used with css modules.

*At the moment the implementation and the API is heavily inspired/stolen by react-redux, this will change as soon as there is a more clear vision on what this library is supposed to do.*

## Usage

Add the provider to the root of your rendering context.

```javascript

  import {provider as CSSUtilsProvider} from 'react-css-modules';
  import utils from './styles/utils';

  const targetEl = document.getElementById('root')

  ReactDOM.render(
    <CSSUtilsProvider utils={utils}>
        <App />
    </CSSUtilsProvider>,
    targetEl
  )

```

Add the connect hoc function to one your components


```javascript

  import {connect as connectCSSUtils} from 'react-css-modules';

  @connectCSSUtils()
  export default View extends React.Component {
    render() {
      return (
        <div className={this.props.className}>
          {this.props.children}
        </div>
      );
    }
  }

``` 

Use the component

```javascript

  export default App extends React.Component {
    render() {
      return (
        <View padding='a-m'>
          ...
        </View>
      );
    }
  }

```

## Todo

- [ ] Allow passing options to the connect function, whitelist/blacklist of utils
- [ ] Allow passing utils directly to the connect function if you don't want to use context to provide the utils.
- [ ] Remove dependency on ramda
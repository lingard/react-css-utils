import { Component, PropTypes, Children } from 'react';

let didWarnAboutReceivingStore = false
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }

  didWarnAboutReceivingStore = true
  console.error( // eslint-disable-line no-console
    '<Provider> does not support changing `utils` on the fly.'
  )
}

class Provider extends Component {
  getChildContext() {
    return { utils: this.utils };
  }

  constructor(props, context) {
    super(props, context);

    this.utils = props.utils;
  }

  componentWillReceiveProps(nextProps) {
    const { utils } = this;
    const { utils: nextUtils } = nextProps;

    if (utils !== nextUtils) {
      warnAboutReceivingUtils();
    }
  }

  render() {
    let { children } = this.props;

    return Children.only(children);
  }
}

Provider.propTypes = {
  utils: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
}
Provider.childContextTypes = {
  utils: PropTypes.object.isRequired
}

module.exports = Provider;
import {Component, PropTypes, Children} from 'react';

class Provider extends Component {
  getChildContext() {
    return {utils: this.utils};
  }

  constructor(props, context) {
    super(props, context);

    this.utils = props.utils;
  }

  componentWillReceiveProps(nextProps) {
    const {utils} = nextProps;

    this.utils = utils;
  }

  render() {
    let {children} = this.props;

    return Children.only(children);
  }
}

Provider.propTypes = {
  utils: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

Provider.childContextTypes = {
  utils: PropTypes.object.isRequired
};

module.exports = Provider;
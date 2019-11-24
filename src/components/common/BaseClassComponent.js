import Taro, { Component } from '@tarojs/taro'
import { is } from 'immutable';

class ImmutableBaseComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const thisProps = this.props || {};
    const thisState = this.state || {};
    nextState = nextState || {};
    nextProps = nextProps || {};

    if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
      Object.keys(thisState).length !== Object.keys(nextState).length) {
      return true;
    }
    for (const key in nextProps) {
      if (!is(thisProps[key], nextProps[key])) {
        return true;
      }
    }
    for (const key in nextState) {
      if (!is(thisState[key], nextState[key])) {
        return true;
      }
    }
    return false;
  }
}

export default ImmutableBaseComponent;

import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import Immutable from 'immutable';
import propTypes from 'prop-types';
import BaseFunctionComponent from '../common/BaseFunctionComponent';
import Sbutton from './button';
import store from '../../store';
import todo from '../../control/todo';
import { i18n, lan } from '../../unit/const';
import './index.less';

const touchEventCatch = {}; // 对于手机操作, 触发了touchstart, 将作出记录

const handleTouchStart = (key) => {
  touchEventCatch[key] = true;
  todo[key].down(store);
}

const handleTouchEnd = (key) => {
  todo[key].up(store);
}

const Keyboard = ({ keyboard = Immutable.Map({}) }) => {
  return (
    <View
      className='keyboard'
      style={{ marginTop: '60rpx' }}
    >
      <Sbutton
        color='blue'
        size='s1'
        top='0rpx'
        left='374rpx'
        label={i18n.rotation[lan]}
        arrow='translate(0, 63rpx)'
        position
        active={keyboard.get('rotate')}
        onTouchstart={() => handleTouchStart('rotate')}
        onTouchend={() => handleTouchEnd('rotate')}
      />
      <Sbutton
        color='blue'
        size='s1'
        top='180rpx'
        left='374rpx'
        label={i18n.down[lan]}
        arrow='translate(0,-70rpx) rotate(180deg)'
        active={keyboard.get('down')}
        onTouchstart={() => handleTouchStart('down')}
        onTouchend={() => handleTouchEnd('down')}
      />
      <Sbutton
        color='blue'
        size='s1'
        top='90rpx'
        left='284rpx'
        label={i18n.left[lan]}
        arrow='translate(60rpx, -12rpx) rotate(270deg)'
        active={keyboard.get('left')}
        onTouchstart={() => handleTouchStart('left')}
        onTouchend={() => handleTouchEnd('left')}
      />
      <Sbutton
        color='blue'
        size='s1'
        top='90rpx'
        left='464rpx'
        label={i18n.right[lan]}
        arrow='translate(-60rpx, -12rpx) rotate(90deg)'
        active={keyboard.get('right')}
        onTouchstart={() => handleTouchStart('right')}
        onTouchend={() => handleTouchEnd('right')}
      />
      <Sbutton
        color='blue'
        size='s0'
        top='100rpx'
        left='52rpx'
        label={`${i18n.drop[lan]} (SPACE)`}
        active={keyboard.get('drop')}
        onTouchstart={() => handleTouchStart('space')}
        onTouchend={() => handleTouchEnd('space')}
      />
      <Sbutton
        color='red'
        size='s2'
        top='0rpx'
        left='196rpx'
        label={`${i18n.reset[lan]}(R)`}
        active={keyboard.get('reset')}
        onTouchstart={() => handleTouchStart('r')}
        onTouchend={() => handleTouchEnd('r')}
      />
      <Sbutton
        color='green'
        size='s2'
        top='0rpx'
        left='106rpx'
        label={`${i18n.sound[lan]}(S)`}
        active={keyboard.get('music')}
        onTouchstart={() => handleTouchStart('s')}
        onTouchend={() => handleTouchEnd('s')}
      />
      <Sbutton
        color='green'
        size='s2'
        top='0rpx'
        left='16rpx'
        label={`${i18n.pause[lan]}(P)`}
        active={keyboard.get('pause')}
        onTouchstart={() => handleTouchStart('p')}
        onTouchend={() => handleTouchEnd('p')}
      />
    </View>
  );
}

Keyboard.propTypes = {
  keyboard: propTypes.object.isRequired,
};

export default BaseFunctionComponent(Keyboard);
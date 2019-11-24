import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import cn from 'classnames';
import propTypes from 'prop-types';
import BaseFunctionComponent from '../../common/BaseFunctionComponent';
import './index.less';

const style = {
  blue: 'blue',
  green: 'green',
  red: 'red',
  s0: 's0',
  s1: 's1',
  s2: 's2',
  position: 'position'
}
const Sbutton = ({ active, color, size, top, left, label, position, arrow }) => {
  return (
    <View
      className={cn({ 'button': true, [style[color]]: true, [style[size]]: true })}
      style={{ top, left }}
      ontouchstart={() => this.props.onTouchstart()}
      ontouchend={() => this.props.onTouchend()}

    >
      <View className={cn({ 'active': active, 'i': true })} />
      { size === 's1' && <Text style={{ transform: `${arrow} scale(1,2)` }} className='em' /> }
      <View className={cn({ [style.position]: position, 'span': true })}>{label}</View>
    </View>
  );
}

Sbutton.propTypes = {
  color: propTypes.string.isRequired,
  size: propTypes.string.isRequired,
  top: propTypes.string.isRequired,
  left: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  position: propTypes.bool,
  arrow: propTypes.string,
  active: propTypes.bool.isRequired,
};

export default BaseFunctionComponent(Sbutton);
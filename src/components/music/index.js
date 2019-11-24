import Taro from '@tarojs/taro'
import { View } from '@tarojs/components';
import cn from 'classnames';
import propTypes from 'prop-types';
import BaseFunctionComponent from '../common/BaseFunctionComponent';
import './index.less';

const style = {
  music: 'music',
  c: 'c'
}

const Music =() => {
  return (
    <View className={cn( { bg: true, [style.music]: true, [style.c]: !this.props.data } )} />
  );
}

Music.propTypes = {
  data: propTypes.bool.isRequired,
};

export default BaseFunctionComponent(Music);

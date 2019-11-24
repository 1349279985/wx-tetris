import Taro from '@tarojs/taro'
import cn from 'classnames';
import { View, Text } from '@tarojs/components';
import BaseFunctionComponent from '../common/BaseFunctionComponent';
import { i18n, lan } from '../../unit/const';
import './index.less';

const Decorate = () =>  {
    return (
      <View className='decorate'>
        <View className='topBorder'>
          <Text className={cn(['l', 'mr', 'span'])} style={{ width: '40rpx' }} />
          <Text className={cn(['l', 'mr', 'span'])} />
          <Text className={cn(['l', 'mr', 'span'])} />
          <Text className={cn(['l', 'mr', 'span'])} />
          <Text className={cn(['l', 'mr', 'span'])} />
          <Text className={cn(['r', 'ml', 'span'])} style={{ width: '40rpx' }} />
          <Text className={cn(['r', 'ml', 'span'])} />
          <Text className={cn(['r', 'ml', 'span'])} />
          <Text className={cn(['r', 'ml', 'span'])} />
          <Text className={cn(['r', 'ml', 'span'])} />
        </View>
        <View className='h1'>{i18n.title[lan]}</View>
        <View className='view'>
          <Text className='c' />
          <View className='clear' />
          <Text className='c' />
          <Text className='c' />
          <View className='clear' />
          <Text className='em' />
          <Text className='c' />
          <View className='p' />
          <Text className='em' />
          <Text className='c' />
          <View className='clear' />
          <Text className='c' />
          <Text className='c' />
          <View className='clear' />
          <Text className='em' />
          <Text className='c' />
          <View className='p' />
          <Text className='c' />
          <Text className='c' />
          <Text className='c' />
          <Text className='c' />
          <View className='p' />
          <Text className='c' />
          <View className='clear' />
          <Text className='c' />
          <Text className='c' />
          <View className='clear' />
          <Text className='c' />
          <View className='p' />
          <Text className='c' />
          <Text className='c' />
          <View className='clear' />
          <Text className='c' />
          <View className='clear' />
          <Text className='c' />
          <View className='p' />
          <Text className='em' />
          <Text className='c' />
          <View className='clear' />
          <Text className='em' />
          <Text className='c' />
          <View className='clear' />
          <Text className='em' />
          <Text className='c' />
          <View className='clear' />
          <Text className='em' />
          <Text className='c' />
        </View>
        <View className={cn(['view', 'l'])}>
          <Text className='em' />
          <Text className='c' />
          <View className='clear' />
          <Text className='c' />
          <Text className='c' />
          <View className='clear' />
          <Text className='c' />
          <View className='p' />
          <Text className='c' />
          <View className='clear' />
          <Text className='c' />
          <Text className='c' />
          <View className='clear' />
          <Text className='c' />
          <View className='p' />
          <Text className='c' />
          <Text className='c' />
          <Text className='c' />
          <Text className='c' />
          <View className='p' />
          <Text className='em' />
          <Text className='c' />
          <View className='clear' />
          <Text className='c' />
          <Text className='c' />
          <View className='clear' />
          <Text className='em' />
          <Text className='c' />
          <View className='p' />
          <Text className='c' />
          <Text className='c' />
          <View className='clear' />
          <Text className='em' />
          <Text className='c' />
          <View className='clear' />
          <Text className='em' />
          <Text className='c' />
          <View className='p' />
          <Text className='c' />
          <View className='clear' />
          <Text className='c' />
          <View className='clear' />
          <Text className='c' />
          <View className='clear' />
          <Text className='c' />
        </View>
      </View>
    );
}
export default BaseFunctionComponent(Decorate);

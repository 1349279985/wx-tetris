import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components';
import cn from 'classnames';
import propTypes from 'prop-types';
import BaseFunctionComponent from '../common/BaseFunctionComponent';
import './index.less';

const formate = (num) => (
  num < 10 ? `0${num}`.split('') : `${num}`.split('')
);

// 自定义和Hook，更新多个变量
const useNumberInfo = (initTimeCount = false, initTimes = new Date()) => {
  const [time_count, setTimeCount] = useState(initTimeCount);
  const [times, setTimes] = useState(initTimes);
  const setNumberInfo = (numberInfo) => {
    setTimeCount(numberInfo.time_count);
    setTimes(numberInfo.times);
  }
  return [{ time_count, times }, setNumberInfo];
}

const Number = ({ time, number }) => {
  const [numberInfo, setNumberInfo] = useNumberInfo();
  useEffect(() => {
    if (!time) return;
    const clock = () => {
      const count = +Number.timeInterval;
      Number.timeInterval = setTimeout(() => {
        setNumberInfo({ times: new Date(), time_count: count })
        clock();
      }, 1000);
    }
    clock();
    return () => {
      if (!time) return;
      clearTimeout(Number.timeInterval);
    }
  }, [time, setNumberInfo]);

  if (time) { // 右下角时钟
    const now = numberInfo.times;
    const hour = formate(now.getHours());
    const min = formate(now.getMinutes());
    const sec = now.getSeconds() % 2;
    const t = hour.concat(sec ? 'd' : 'd_c', min);
    return (
      <View className='number'>
      {
        t.map((e, k) => (
          <View key={k}><Text className={cn(['bg', `s_${e}`])} /></View>
        ))
      }
    </View>
    );
  }

  const num = String(number || 0).split('');
  for (let i = 0, len = 6 - num.length; i < len; i++) {
    num.unshift('n');
  }
  return (
      <View className='number'>
      {
        num.map((e, k) => (
          <View key={k}><Text className={cn(['bg', `s_${e}`])} /></View>
        ))
      }
    </View>
  );
}

Number.statics = {
  timeInterval: null,
};

Number.propTypes = {
  number: propTypes.number,
  time: propTypes.bool,
};

export default BaseFunctionComponent(Number);
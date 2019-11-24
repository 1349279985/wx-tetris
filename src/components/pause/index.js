import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import cn from 'classnames';
import propTypes from 'prop-types';
import BaseFunctionComponent from '../common/BaseFunctionComponent';
import './index.less';

const style = {
  pause: 'pause',
  c: 'c'
}

const setShake = (bool, setPause) => {
  if (bool && !Pause.timeout) { // 闪烁
    Pause.timeout = setInterval(() => setPause(), 250);
  }
  if (!bool && Pause.timeout) { // 停止闪烁
    clearInterval(Pause.timeout);
    setPause(false)
    Pause.timeout = null;
  }
}

const usePause = (initStatus) => {
  const [showPause, setShowPause] = useState(initStatus);
  const setPause = (status) => {
    if (status !== undefined) {
      setShowPause(status)
    } else {
      setShowPause(!showPause)
    }
  };
  return [showPause, setPause];
}

const Pause = ({ data = false }) => {
  const [showPause, setPause] = usePause(false);
  useEffect(() => {
    setShake(data, setPause);
  }, [data, setPause])
  return (
    <View className='pause-container'>
      <View className={cn( { bg: true, [style.pause]: true, [style.c]: showPause } )} />
    </View>
  );
}

Pause.statics = {
  timeout: null,
};

Pause.propTypes = {
  data: propTypes.bool.isRequired,
};

export default BaseFunctionComponent(Pause);

import Taro, { useState, useEffect } from '@tarojs/taro';
import propTypes from 'prop-types';
import { View } from '@tarojs/components';
import BaseFunctionComponent from '../common/BaseFunctionComponent';
import Number from '../number';
import { i18n, lan } from '../../unit/const';
import './index.less';

const DF = i18n.point[lan];
const ZDF = i18n.highestScore[lan];
const SLDF = i18n.lastRound[lan];

// 自定义和Hook，更新多个变量
const usePointInfo = (initLabel = '', initNumber = 0) => {
  const [label, setLabel] = useState(initLabel);
  const [number, setNumber] = useState(initNumber);
  const setPointInfo = (pointInfo) => {
    setLabel(pointInfo.label);
    setNumber(pointInfo.number);
  }
  return [{label, number}, setPointInfo];
}

const onChange = (cur, point, max, setPointInfo) => {
  clearInterval(Point.timeout);
  if (cur) { // 在游戏进行中
    setPointInfo({ label: point >= max ? ZDF : DF, number: point })
  } else { // 游戏未开始
    const toggle = () => { // 最高分与上轮得分交替出现
      setPointInfo({ label: SLDF, number: point });
      Point.timeout = setTimeout(() => {
        setPointInfo({ label: ZDF, number: max });
        Point.timeout = setTimeout(toggle, 3000);
      }, 3000);
    };

    if (point !== 0) { // 如果为上轮没玩, 也不用提示了
      toggle();
    } else {
      setPointInfo({ label: ZDF, number: max });
    }
  }
}

const Point = ({ cur, point, max }) => {
  const [pointInfo, setPointInfo] = usePointInfo();
  useEffect(() => {
    onChange(cur, point, max, setPointInfo);
  }, [cur, point, max, setPointInfo]);
  return (
    <View>
      <View className='p'>{ pointInfo.label }</View>
      <Number number={pointInfo.number} />
    </View>
  )
}

Point.statics = {
  timeout: null,
};

Point.propTypes = {
  cur: propTypes.bool,
  max: propTypes.number,
  point: propTypes.number,
};

export default BaseFunctionComponent(Point);


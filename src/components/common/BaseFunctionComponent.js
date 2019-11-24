import Taro from '@tarojs/taro'
import { is, fromJS } from 'immutable';

const depEqual = (prevProps, nextProps) => {
  prevProps = prevProps || {};
  nextProps = nextProps || {};

  if (Object.keys(prevProps).length !== Object.keys(nextProps).length) {
    return false;
  }
  for (const key in nextProps) {
    let prevProp = prevProps[key];
    let nextProp = nextProps[key];
    // 判断是否是 Immutable 类型的变量，不是则做一层转换
    // 当然建议传入 props 的变量都是 Immutable 类型的，以省去转化开销这一步
    if ((prevProp && !prevProp.size) || (nextProp && !nextProp.size)) {
      prevProp = fromJS(prevProp);
      nextProp = fromJS(nextProp);
    }
    if (!is(prevProp, nextProp)) {
      return false;
    }
  }
  return true;
};

const MemoBaseComponent = funcComponent => Taro.memo(funcComponent, depEqual);

export default MemoBaseComponent;

import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import cn from 'classnames';
import propTypes from 'prop-types';
import BaseFunctionComponent from '../common/BaseFunctionComponent';
import { blockShape } from '../../unit/const';
import './index.less';

const xy = { // 方块在下一个中的坐标
  I: [1, 0],
  L: [0, 0],
  J: [0, 0],
  Z: [0, 0],
  S: [0, 0],
  O: [0, 1],
  T: [0, 0],
};

const empty = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const build = (type, setBlock) => {
  const shape = blockShape[type] || [];
  const block = empty.map(e => ([...e]));
  shape.forEach((m, k1) => {
    m.forEach((n, k2) => {
      if (n) {
        block[k1 + xy[type][0]][k2 + xy[type][1]] = 1;
      }
    });
  });
  setBlock(block)
}

const Next = ({ data }) => {
  const [block, setBlock] = useState(empty);
  useEffect(() => {
    build(data, setBlock);
  }, [data, setBlock])
  return (
    <View className='next'>
      {
        block.map((arr, k1) => (
          <View key={String(k1)}>
            {
              arr.map((e, k2) => (
                <Text className={cn([e > 0 ? 'c' : '', 'b'])} key={String(k2)} />
              ))
            }
          </View>
        ))
      }
    </View>
  );
}

Next.propTypes = {
  data: propTypes.string,
};

export default BaseFunctionComponent(Next);

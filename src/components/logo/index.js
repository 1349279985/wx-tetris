import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components';
import cn from 'classnames';
import propTypes from 'prop-types';
import BaseFunctionComponent from '../common/BaseFunctionComponent';
import { i18n, lan } from '../../unit/const';
import './index.less';

const styles = {
  r1: 'r1',
  r2: 'r2',
  r3: 'r3',
  r4: 'r4',
  l1: 'l1',
  l2: 'l2',
  l3: 'l3',
  l4: 'l4',
}

const animate = (cur,reset, setStyle, setDisplay ) => {
  clearTimeout(Logo.timeout);
  setStyle(styles.r1);
  setDisplay('none')
  if (cur || reset) {
    setDisplay('none')
    return;
  }

  let m = 'r'; // 方向
  let count = 0;

  const set = (func, delay) => {
    if (!func) return;
    Logo.timeout = setTimeout(func, delay);
  };

  const show = (func) => { // 显示
    set(() => {
      setDisplay('block')
      if (func) func();
    }, 150);
  };

  const hide = (func) => { // 隐藏
    set(() => {
      setDisplay('none')
      if (func) func();
    }, 150);
  };

  const eyes = (func, delay1, delay2) => { // 龙在眨眼睛
    set(() => {
      setStyle(styles[m + 2]);
      set(() => {
        setStyle(styles[m + 1]);
        if (func) func();
      }, delay2);
    }, delay1);
  };

  const run = (func) => { // 开始跑步啦！
    set(() => {
      setStyle(styles[m + 4]);
      set(() => {
        setStyle(styles[m + 3]);
        count++;
        if (count === 10 || count === 20 || count === 30) m = m === 'r' ? 'l' : 'r';
        if (count < 40) {
          run(func);
          return;
        }
        setStyle(styles[m + 1]);
        if (func) set(func, 4000);
      }, 100);
    }, 100);
  };

  const dra = () => {
    count = 0;
    eyes(() => {
      eyes(() => {
        eyes(() => {
          setStyle(styles[m + 2]);
          run(dra);
        }, 150, 150);
      }, 150, 150);
    }, 1000, 1500);
  };

  show(() => { // 忽隐忽现
    hide(() => {
      show(() => {
        hide(() => {
          show(() => {
            dra(); // 开始运动
          });
        });
      });
    });
  });
}

const Logo = ({ cur, reset }) => {
  const [style, setStyle] = useState(styles.r1);
  const [display, setDisplay] = useState('none');
  useEffect(() => {
    animate(cur, reset, setStyle, setDisplay);
  }, [cur, reset]);
  return (
    <View className='logo' style={{ display: display }}>
      <View className={cn({ bg: true, 'dragon': true, [style]: true })} />
      <View className='p'>{i18n.titleCenter[lan]}</View>
    </View>
  );
}

Logo.propTypes = {
  cur: propTypes.bool,
  reset: propTypes.bool,
};
Logo.statics = {
  timeout: null,
};

export default BaseFunctionComponent(Logo);

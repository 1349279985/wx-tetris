/* eslint-disable react/react-in-jsx-scope */
import { View, Text } from '@tarojs/components';
import { List } from 'immutable';
import classnames from 'classnames';
import propTypes from 'prop-types';
import BaseClassComponent from '../common/BaseClassComponent';
import { isClear } from '../../unit/';
import { fillLine, blankLine } from '../../unit/const';
import states from '../../control/states';
import './index.less';

const t = setTimeout;
export default class Matrix extends BaseClassComponent {
  state = {
    clearLines: false,
    animateColor: 2,
    isOver: false,
    overState: List([]),
  };
  componentWillReceiveProps(nextProps) {
    const clears = isClear(nextProps.matrix);
    const overs = nextProps.reset;
    this.setState({
      clearLines: clears,
      isOver: overs,
    });
    if (clears && !this.state.clearLines) {
      this.clearAnimate(clears);
    }
    if (!clears && overs && !this.state.isOver) {
      this.over(nextProps);
    }
  }
  getResult(props = this.props) {
    const cur = props.cur;
    const shape = cur && cur.shape;
    const xy = cur && cur.xy;

    let matrix = props.matrix;
    const clearLines = this.state.clearLines;
    if (clearLines) {
      const animateColor = this.state.animateColor;
      clearLines.forEach((index) => {
        matrix = matrix.set(index, List([
          animateColor,
          animateColor,
          animateColor,
          animateColor,
          animateColor,
          animateColor,
          animateColor,
          animateColor,
          animateColor,
          animateColor,
        ]));
      });
    } else if (shape) {
      shape.forEach((m, k1) => (
        m.forEach((n, k2) => {
          if (n && xy.get(0) + k1 >= 0) { // 竖坐标可以为负
            let line = matrix.get(xy.get(0) + k1);
            let color;
            if (line.get(xy.get(1) + k2) === 1 && !clearLines) { // 矩阵与方块重合
              color = 2;
            } else {
              color = 1;
            }
            line = line.set(xy.get(1) + k2, color);
            matrix = matrix.set(xy.get(0) + k1, line);
          }
        })
      ));
    }
    return matrix;
  }
  clearAnimate() {
    const anima = (callback) => {
      t(() => {
        this.setState({
          animateColor: 0,
        });
        t(() => {
          this.setState({
            animateColor: 2,
          });
          if (typeof callback === 'function') {
            callback();
          }
        }, 100);
      }, 100);
    };
    anima(() => {
      anima(() => {
        anima(() => {
          t(() => {
            states.clearLines(this.props.matrix, this.state.clearLines);
          }, 100);
        });
      });
    });
  }
  over(nextProps) {
    let overState = this.getResult(nextProps);
    this.setState({
      overState,
    });

    const exLine = (index) => {
      if (index <= 19) {
        overState = overState.set(19 - index, List(fillLine));
      } else if (index >= 20 && index <= 39) {
        overState = overState.set(index - 20, List(blankLine));
      } else {
        states.overEnd();
        return;
      }
      this.setState({
        overState,
      });
    };

    for (let i = 0; i <= 40; i++) {
      t(exLine.bind(null, i), 40 * (i + 1));
    }
  }
  render() {
    let matrix = List([]);
    if (this.state.isOver) {
      matrix = this.state.overState;
    } else {
      matrix = this.getResult() || List([]);
    }
    matrix = matrix.toJS()
    return (
      <View className='matrix'>
      {
          matrix.map((p, pIndex) => (
            <View key={pIndex} className='p'>
              {
                p.map((e, eIndex) => <Text
                  className={classnames({
                    c: e === 1,
                    d: e === 2,
                    b: true
                  })}
                  key={eIndex}
                />)
              }
            </View>
          ))
      }
      </View>
    );
  }
}

Matrix.propTypes = {
  matrix: propTypes.object.isRequired,
  cur: propTypes.object,
  reset: propTypes.bool.isRequired,
};

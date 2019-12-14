import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import propTypes from 'prop-types';
import classnames from 'classnames';
import Decorate from '../../components/decorate';
import Matrix from '../../components/matrix';
import Logo from '../../components/logo';
import Number from '../../components/number';
import Next from '../../components/next';
import Music from '../../components/music';
import Pause from '../../components/pause';
import Point from '../../components/point';
import Keyboard from '../../components/keyboard';
import { i18n, lan } from '../../unit/const';
import './index.less';

@connect((state) => ({
  pause: state.get('pause'),
  music: state.get('music'),
  matrix: state.get('matrix'),
  next: state.get('next'),
  cur: state.get('cur'),
  speedStart: state.get('speedStart'),
  speedRun: state.get('speedRun'),
  startLines: state.get('startLines'),
  clearLines: state.get('clearLines'),
  points: state.get('points'),
  max: state.get('max'),
  reset: state.get('reset'),
  drop: state.get('drop'),
  keyboard: state.get('keyboard'),
}))
class Index extends Component {

  config = {
    disableScroll: true,
  }

  render () {
    return (
      <View className='app'>
        <View className={classnames({ 'rect': true, 'drop': this.props.drop })}>
          <Decorate />
          <View className='screen'>
            <View className='panel'>
              <Matrix
                matrix={this.props.matrix}
                cur={this.props.cur}
                reset={this.props.reset}
              />
              <Logo cur={!!this.props.cur} reset={this.props.reset} />
              <View className='state'>
                <Point cur={!!this.props.cur} point={this.props.points} max={this.props.max} />
                <View className='p'>{this.props.cur ? i18n.cleans[lan] : i18n.startLine[lan]}</View>
                <Number number={this.props.cur ? this.props.clearLines : this.props.startLines} />
                <View className='p'>{i18n.level[lan]}</View>
                <Number
                  number={this.props.cur ? this.props.speedRun : this.props.speedStart}
                  length={1}
                />
                <View className='p'>{i18n.next[lan]}</View>
                <Next data={this.props.next} />
                <View className='bottom'>
                  <Music data={this.props.music} />
                  <Pause data={this.props.pause} />
                  <Number time />
                </View>
              </View>
            </View>
          </View>
        </View>
        <Keyboard keyboard={this.props.keyboard} />
      </View>
    )
  }
}

Index.propTypes = {
  music: propTypes.bool.isRequired,
  pause: propTypes.bool.isRequired,
  matrix: propTypes.object.isRequired,
  next: propTypes.string.isRequired,
  cur: propTypes.object,
  dispatch: propTypes.func.isRequired,
  speedStart: propTypes.number.isRequired,
  speedRun: propTypes.number.isRequired,
  startLines: propTypes.number.isRequired,
  clearLines: propTypes.number.isRequired,
  points: propTypes.number.isRequired,
  max: propTypes.number.isRequired,
  reset: propTypes.bool.isRequired,
  drop: propTypes.bool.isRequired,
  keyboard: propTypes.object.isRequired,
};

export default Index

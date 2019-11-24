import Taro from '@tarojs/taro'
// import store from '../store';

// export const music = {};

const music = {};

// let timer_fall = null;

(() => {
  // 使用 Taro.createInnerAudioContext 获取 audio 上下文 context
  // const context = Taro.createInnerAudioContext();
  // context.obeyMuteSwitch = false;
  // context.src = 'https://fdfs.xmcdn.com/group69/M01/0D/F2/wKgMb13WvRni_AcXAAE-5JiIKVY590.m4a';
  // // context.play();
  // context.onPlay(() => {
  //   console.log('开始播放')
  // })
  // context.onError((res) => {
  //   console.log(`errMsg: ${res.errMsg}`)
  //   console.log(`errCode: ${res.errCode}`)
  // })
  // context.onStop((res) => {
  //   console.log(`onStop: ${res}`);
  // })
  // context.onEnded((res) => {
  //   console.log(`onEnded: ${res}`);
  // })
  
  // music.killStart = () => { // 游戏开始的音乐只播放一次
  //   music.start = () => {};
  // };

  // music.start = () => { // 游戏开始
  //   music.killStart();
  //   if (!store.getState().get('music')) {
  //     return;
  //   }
  //   const startTime = 3.722;
  //   const duration = 3.633;
  //   context.seek(startTime);
  //   context.play();
  //   let timer_start = setTimeout(() => {
  //     context.stop();
  //     if (timer_start) timer_start = null;
  //   }, duration * 1000);
  // };

  // music.clear = () => { // 消除方块
  //   if (!store.getState().get('music')) {
  //     return;
  //   }
  //   context.seek(0, 0, 0.7675);
  // };

  // music.fall = () => { // 立即下落
  //   if (!store.getState().get('music')) {
  //     return;
  //   }
  //   if (timer_fall) timer_fall = null;
  //   const startTime = 1.2558;
  //   const duration = 0.3546;
  //   context.seek(startTime);
  //   context.play();
  //   timer_fall = setTimeout(() => {
  //     context.stop();
  //     if (timer_fall) timer_fall = null;
  //   }, duration * 1000);
  // };

  // music.gameover = () => { // 游戏结束
  //   if (!store.getState().get('music')) {
  //     return;
  //   }
  //   const startTime = 8.128;
  //   const duration = 1.144;
  //   context.seek(startTime);
  //   context.play();
  //   timer_over = setTimeout(() => {
  //     context.stop();
  //     if (timer_over) timer_over = null;
  //   }, duration * 1000);
  // };

  // music.rotate = () => { // 旋转
  //   if (!store.getState().get('music')) {
  //     return;
  //   }
  //   const startTime = 2.257;
  //   const duration = 0.281;
  //   context.seek(startTime);
  //   context.play();
  //   let timer_rotate = setTimeout(() => {
  //     context.stop();
  //     if (timer_rotate) timer_rotate = null;
  //   }, duration * 1000);
  //   // context.seek(0, 2.2471, 0.0807);
  // };

  // music.move = () => { // 移动
  //   if (!store.getState().get('music')) {
  //     return;
  //   }
  //   const startTime = 2.909;
  //   const duration = 0.24;
  //   context.seek(startTime);
  //   context.play();
  //   let timer_move = setTimeout(() => {
  //     context.stop();
  //     if (timer_move) timer_move = null;
  //   }, duration * 1000);
  //   // context.seek(0, 2.9088, 0.1437);
  // };
})();

// eslint-disable-next-line import/no-commonjs
module.exports = {
  music
}
## 项目介绍

经典俄罗斯方块已经有了 [Vue版](https://github.com/Binaryify/vue-tetris) 和 [React版](https://github.com/chvin/react-tetris)，如今微信小程序很火爆，查了查并没有微信小程序版本，所以临时起意做一个小程序版本，保留原汁原味的经典味道。项目之初在 类Vue 的 [mpvue](https://github.com/Meituan-Dianping/mpvue) 和 类React 的 [Taro](https://github.com/NervJS/taro) 之间抉择；对比了两者，mpvue 最近基本没维护了，而 Taro 紧跟 着 React 的更新，有着和 `React16` 基本一致的特性，再加上团队的技术栈收敛，新项目都采用 React，同时个人也是偏好 React，嘿嘿，所以最终就选用了 Taro 来做。

## 针对 React 版的优化

其实游戏的介绍在 [React版](https://github.com/chvin/react-tetris) 已经有了详尽的介绍，这里就不再赘述啦～，想提到的几点就是

1. 小程序宿主环境和 Web 不大一样，所以就没有 `window` 或者 `document` 这类元素啦，代码中我将相关的代码做了改写，同时原逻辑中兼容 PC 端的内容我也做了删减
2. 原项目中使用了 `shouldComponentUpdate` 做组件优化，每个组件都写了一遍 `shouldComponentUpdate` 的判别逻辑，我觉着还是可以统一化的，于是乎封装统一的父类组件并重写其中的 `shouldComponentUpdate` 逻辑，在 `compoment/common/BaseClassComponent` 中，读者完全可以将该段逻辑用在自己的项目，实现组件的防重复渲染
3. React16 分别在 `2018/10` 和 `2019/02` 发布了 `React.memo` 以及 `Hooks` 特性，这对于函数组件来说无疑是重大的特性，使其支持组件 state 以及生命周期钩子，并且能优化函数组件，因此我将该特性引入并对项目的UI层做了重写，看起来代码会更加简约，如果想学习最新的 React 这些特性在项目中的应用，不妨拷贝下来本地运行下；其次，针对 memo 这一点，我也将其做了统一封装放在了 `compoment/common/BaseFunctionComponent` 中，同样适用于你的 React 项目
4. 数据持久化这一点，依然和原项目保持一致，使用 `Immutable`，这应该是 React + Redux 时的最佳方案了吧


## 项目启动

项目采用 Taro 中的 React + Redux 版

### 安装依赖包

``` bash
npm install or yarn install

```

### 项目运行

在 `project.config.json` 中配置自己的 `appid`，并在微信开发者工具导入项目

``` js
// 开发环境
dev:weapp

// 生产环境
build:weapp

```
于是乎就有了效果

## 项目效果

![微信效果图](https://p0.meituan.net/travelcube/f2307e1979221e994e519a29a63ff52e2380401.gif)

## 后续待办计划

1. 由于 在小程序中对于音频的处理并不向 Web 那样精细，小程序中如果向播放音频中的某一段，需要自己实现播放区间的控制，而 Web 可以轻松通过 start 来实现，这一块还需要研究下，如果有童鞋感兴趣，可以提PR秀出你的代码，我会非常期待
2. 如今 JS 发展越来越壮大，它的升级版 `Typescript` 赋予了它静态类型检查等等特性，使得它的维护性更好，所以后期我会加入 Typescript 使得项目可读性更高，也更易维护
3. 完整的项目离不开`单元测试`，为了使得项目更具工程化，后期会引入单元测试对功能模块、UI层做一些测试，这样项目也更具可读性了。

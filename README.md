# react-parabola-animation
一个简单通用的 React 抛物线动画
[demo](https://codesandbox.io/embed/moyy2n9v5p)

# Usage
```js
import { parabola } from "./parabola"

...

onAnimate = () => {
  const config = {
    ballWrapper: this.$wrapper, //小球的父容器
    origin: this.$origin, //动画起点DOM
    target: this.$target, //动画目标DOM
    time: 600, //[可选]持续时间
    a: 0.02, //[可选]抛物线参数
    callback: this.updateLocation, //回调函数
    finish: animationDone, //[可选]动画完成执行函数
    offset: 8 //[可选]动画尺寸
  }
  parabola(config)
}
  
...
```

# parabola方法简易试图

![GitHub set up-w200](http://ocpsim59s.bkt.clouddn.com/parabola.png)

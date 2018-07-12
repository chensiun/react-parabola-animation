/**
 * 抛物线动画函数
 * @param ballWrapper 小球的父容器
 * @param origin 动画起点DOM
 * @param target 动画目标DOM
 * @param time 持续时间
 * @param a 抛物线参数
 * @param offset 动画尺寸
 * @param callback 回调
 */

export function parabola(config) {
  const {
    ballWrapper,
    origin,
    target,
    time = 1000,
    a = 0.004,
    callback,
    finish,
    offset = 0
  } =
    config || {};
  const ballWrapperDimension = ballWrapper.getBoundingClientRect();
  const originDimension = origin.getBoundingClientRect();
  const targetDimension = target.getBoundingClientRect();
  const x1 = originDimension.left + 0.5 * originDimension.width;
  const y1 = originDimension.top + 0.5 * originDimension.height;
  const x2 = targetDimension.left + 0.5 * targetDimension.width;
  const y2 = targetDimension.top + 0.5 * targetDimension.height;
  const diffx = x2 - x1;
  const diffy = y2 - y1;
  const speedx = diffx / time;
  const b = (diffy - a * diffx * diffx) / diffx;

  const refPoint_x = x1 - ballWrapperDimension.left - 0.5 * offset;
  const refPoint_y = y1 - ballWrapperDimension.top - 0.5 * offset;

  const start = Date.now();
  const timer = setInterval(() => {
    if (Date.now() - start > time) {
      finish();
      clearInterval(timer);
      return;
    }

    const x = speedx * (Date.now() - start);
    const y = a * x * x + b * x;
    callback && callback(refPoint_x + x, refPoint_y + y);
  }, 15);
}

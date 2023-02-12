"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/weex-animation/index.ts
var animation = uni.requireNativePlugin("animation");
var animationTransition = (ref, options, duration = 0, delay = 0, needLayout = false, timingFunction = "linear") => {
  return new Promise((resolve, _) => {
    animation.transition(ref, {
      styles: {
        ...options
      },
      duration,
      delay,
      needLayout,
      timingFunction
    }, () => {
      resolve(null);
    });
  });
};
var animationTransitionSpin = async (ref, deg, duration) => {
  return await animationTransition(ref, {
    transform: `rotate(${deg})`
  }, duration, 0, false, "linear");
};
var useSpin = async (ref, loop = false) => {
  await animationTransitionSpin(ref, 0, 0);
  await animationTransitionSpin(ref, 360, 46e3);
  if (loop)
    useSpin(ref, loop);
};
var animationTransitionPulse = async (ref, opacity) => {
  return await animationTransition(ref, {
    opacity
  }, 1e3, 0, false, "cubic-bezier(0.4, 0, 0.6, 1)");
};
var usePulse = async (ref, loop = false) => {
  await animationTransitionPulse(ref, 0.5);
  await animationTransitionPulse(ref, 1);
  if (loop)
    usePulse(ref, loop);
};
var animationTransitionBounce = async (ref, y, timingFunction) => {
  return await animationTransition(ref, {
    transform: `translateY(${y})`
  }, 500, 0, false, timingFunction);
};
var useBounce = async (ref, loop = false) => {
  await animationTransitionBounce(ref, "-25%", "cubic-bezier(0.8, 0, 1, 1)");
  await animationTransitionBounce(ref, "0", "cubic-bezier(0, 0, 0.2, 1)");
  if (loop)
    useBounce(ref, loop);
};
var animationTransitionHeartbeat = async (ref, scale) => {
  return await animationTransition(ref, {
    transform: `scale(${scale})`
  }, 500, 0, false);
};
var useHeartbeat = async (ref, loop = false) => {
  await animationTransitionHeartbeat(ref, 1.1);
  await animationTransitionHeartbeat(ref, 1);
  if (loop)
    useHeartbeat(ref, loop);
};
var animationTransitionShake = async (ref, x) => {
  return await animationTransition(ref, {
    transform: `translateX(${x})`
  }, 50, 0, false, "ease-out");
};
var useShake = async (ref, loop = false) => {
  await animationTransitionShake(ref, "-8px");
  await animationTransitionShake(ref, "7px");
  await animationTransitionShake(ref, "-6px");
  await animationTransitionShake(ref, "5px");
  await animationTransitionShake(ref, "-4px");
  await animationTransitionShake(ref, "3px");
  await animationTransitionShake(ref, "-2px");
  await animationTransitionShake(ref, "1px");
  if (loop)
    setTimeout(() => {
      useShake(ref, loop);
    });
};







exports.animationTransition = animationTransition; exports.useBounce = useBounce; exports.useHeartbeat = useHeartbeat; exports.usePulse = usePulse; exports.useShake = useShake; exports.useSpin = useSpin;

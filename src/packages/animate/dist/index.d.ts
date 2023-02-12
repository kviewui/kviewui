import { Ref } from 'vue';

declare const animationTransition: (ref: Ref, options: KuiNamespace.AnimationTransitionStylesOptions, duration?: number, delay?: number, needLayout?: boolean, timingFunction?: string) => Promise<any>;
declare const useSpin: (ref: Ref, loop?: boolean) => Promise<void>;
declare const usePulse: (ref: Ref, loop?: boolean) => Promise<void>;
declare const useBounce: (ref: Ref, loop?: boolean) => Promise<void>;
declare const useHeartbeat: (ref: Ref, loop?: boolean) => Promise<void>;
declare const useShake: (ref: Ref, loop?: boolean) => Promise<void>;

export { animationTransition, useBounce, useHeartbeat, usePulse, useShake, useSpin };

import {
  animation,
  animate,
  keyframes,
  style,
  AnimationOptions,
  AnimationTransitionMetadata,
  transition,
  useAnimation,
  trigger
} from '@angular/animations';
import { DEFAULT_DURATION } from './default-values';

// Base animations
export function slideX(a: string, b: string) {
  return animation(
    animate(
      '{{ duration }} {{ delay }}',
      keyframes([
        style({
          transform: 'translate3d({{ a }}, 0, 0)',
          offset: 0
        }),
        style({
          transform: 'translate3d({{ b }}, 0, 0)',
          offset: 1
        })
      ])
    ),
    { params: { duration: DEFAULT_DURATION, delay: '0s', a, b } }
  );
}

export function slideY(a: string, b: string) {
  return animation(
    animate(
      '{{ duration }} {{ delay }}',
      keyframes([
        style({
          transform: 'translate3d(0, {{ a }}, 0)',
          offset: 0
        }),
        style({
          transform: 'translate3d(0, {{ b }}, 0)',
          offset: 1
        })
      ])
    ),
    { params: { duration: DEFAULT_DURATION, delay: '0s', a, b } }
  );
}

// Animations
export const slideInDown = slideY('100%', '0');
export const slideInLeft = slideX('-100%', '0');
export const slideInRight = slideX('100%', '0');
export const slideInUp = slideY('-100%', '0');
export const slideOutDown = slideY('0', '100%');
export const slideOutLeft = slideX('0', '-100%');
export const slideOutRight = slideX('0', '100%');
export const slideOutUp = slideY('0', '-100%');

// Transitions
export function slideInDownOnEnter(options?: AnimationOptions) {
  return transition(':enter', [useAnimation(slideInDown, options)]);
}

export function slideInUpOnEnter(options?: AnimationOptions) {
  return transition(':enter', [useAnimation(slideInUp, options)]);
}

// Triggers
export function slideInDownOnEnterTrigger(options?: AnimationOptions) {
  return trigger('slideInDownOnEnter', [slideInDownOnEnter(options)]);
}

export function slideInUpOnEnterTrigger(options?: AnimationOptions) {
  return trigger('slideInUpOnEnter', [slideInUpOnEnter(options)]);
}

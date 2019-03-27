import {
  animate,
  animation,
  keyframes,
  style,
  transition,
  trigger,
  useAnimation,
  AnimationTransitionMetadata,
  AnimationTriggerMetadata,
  AnimationOptions
} from '@angular/animations';
import { DEFAULT_DURATION } from './default-values';

// Base animations

/**
 * Fades in X from a to b
 * @param a Point a
 * @param b Point b
 */
export function fadeInX(a: string, b: string) {
  return animation(
    animate(
      '{{ duration }} {{ delay }}',
      keyframes([
        style({
          offset: 0,
          opacity: 0,
          transform: 'translate3d({{ a }}, 0, 0)'
        }),
        style({
          offset: 1,
          opacity: 1,
          transform: 'translate3d({{ b }}, 0, 0)'
        })
      ])
    ),
    { params: { duration: DEFAULT_DURATION, delay: '0s', a, b } }
  );
}

/**
 * Fades in Y from a to b
 * @param a Point a
 * @param b Point b
 */
export function fadeInY(a: string, b: string) {
  return animation(
    animate(
      '{{ duration }} {{ delay }}',
      keyframes([
        style({
          opacity: 0,
          transform: 'translate3d(0, {{ a }}, 0)',
          offset: 0
        }),
        style({
          opacity: 1,
          transform: 'translate3d(0, {{ b }}, 0)',
          offset: 1
        })
      ])
    ),
    { params: { duration: DEFAULT_DURATION, delay: '0s', a, b } }
  );
}

/**
 * Fades out in X from a to b.
 * @param a Point a
 * @param b Point b
 */
export function fadeOutX(a: string, b: string) {
  return animation(
    animate(
      '{{ duration }} {{ delay }}',
      keyframes([
        style({
          opacity: 1,
          transform: 'translate3d({{ a }}, 0, 0)',
          offset: 0
        }),
        style({
          opacity: 0,
          transform: 'translate3d({{ b }}, 0, 0)',
          offset: 1
        })
      ])
    ),
    { params: { duration: DEFAULT_DURATION, delay: '0s', a, b } }
  );
}

/**
 * Fades out in Y from a to b.
 * @param a
 * @param b
 */
export function fadeOutY(a: string, b: string) {
  return animation(
    animate(
      '{{ duration }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 1,
          transform: 'translate3d(0, {{ a }}, 0)',
          offset: 0
        }),
        style({
          opacity: 0,
          transform: 'translate3d(0, {{ b }}, 0)',
          offset: 1
        })
      ])
    ),
    { params: { duration: DEFAULT_DURATION, delay: '0s', a, b } }
  );
}

// Animations
export const fadeIn = fadeInX('0', '0');
export const fadeInDown = fadeInY('-100%', '0');
export const fadeInUp = fadeInY('100%', '0');
export const fadeInLeft = fadeInX('-100%', '0');
export const fadeInRight = fadeInX('100%', '0');

export const fadeOut = fadeOutX('0', '0');
export const fadeOutDown = fadeOutY('-100%', '0');
export const fadeOutUp = fadeOutY('100%', '0');
export const fadeOutLeft = fadeOutX('0', '-100%');
export const fadeOutRight = fadeOutX('100%', '0');

// Transitions
export function fadeInDownOnEnter(options?: AnimationOptions) {
  return transition(':enter', [useAnimation(fadeInDown, options)]);
}

export function fadeInLeftOnEnter(options?: AnimationOptions) {
  return transition(':enter', [useAnimation(fadeInLeft, options)]);
}

export function fadeInUpOnEnter(options?: AnimationOptions) {
  return transition(':enter', [useAnimation(fadeInUp, options)]);
}

//Triggers
export function fadeInDownOnEnterTrigger(options?: AnimationOptions) {
  return trigger('fadeInDownOnEnter', [fadeInDownOnEnter(options)]);
}

export function fadeInLeftOnEnterTrigger(options?: AnimationOptions) {
  return trigger('fadeInLeftOnEnter', [fadeInLeftOnEnter(options)]);
}

export function fadeInUpOnEnterTrigger(options?: AnimationOptions) {
  return trigger('fadeInUpOnEnter', [fadeInUpOnEnter(options)]);
}

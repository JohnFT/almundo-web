import {
  animation,
  style,
  animate,
  keyframes,
  trigger,
  transition,
  useAnimation,
  AnimationOptions
} from '@angular/animations';
import { DEFAULT_DURATION } from './default-values';

// Base Animations

export function flipIn(rotateX: string, rotateY: string) {
  return animation(
    [
      style({ 'backface-visibility': 'visible' }),
      animate(
        '{{ duration }} {{ delay }} ease-in',
        keyframes([
          style({
            opacity: 0,
            transform:
              'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
            offset: 0
          }),
          style({
            opacity: 1,
            transform:
              'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
            offset: 0.4
          }),
          style({
            transform:
              'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 10deg)',
            offset: 0.6
          }),
          style({
            transform:
              'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -5deg)',
            offset: 0.8
          }),
          style({
            transform: 'perspective(400px) rotate3d(0, 0, 0, 0)',
            offset: 1
          })
        ])
      )
    ],
    { params: { duration: DEFAULT_DURATION, delay: '0s', rotateX, rotateY } }
  );
}

export function flipOut(rotateX: string, rotateY: string) {
  return animation(
    [
      style({ 'backface-visibility': 'visible' }),
      animate(
        '{{ duration }} {{ delay }}',
        keyframes([
          style({
            transform: 'perspective(400px)',
            offset: 0
          }),
          style({
            opacity: 1,
            transform:
              'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
            offset: 0.3
          }),
          style({
            opacity: 0,
            transform:
              'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
            offset: 1
          })
        ])
      )
    ],
    { params: { duration: DEFAULT_DURATION, delay: '0s', rotateX, rotateY } }
  );
}

// Animations
export const flip = animation(
  [
    style({ 'backface-visibility': 'visible' }),
    animate(
      '{{ duration }} {{ delay }} ease-out',
      keyframes([
        style({
          transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)',
          offset: 0
        }),
        style({
          transform:
            'perspective(400px) scale3d(1.5, 1.5, 1.5) rotate3d(0, 1, 0, -190deg)',
          offset: 0.4
        }),
        style({
          transform:
            'perspective(400px) scale3d(1.5, 1.5, 1.5) rotate3d(0, 1, 0, -170deg)',
          offset: 0.5
        }),
        style({
          transform: 'perspective(400px) scale3d(.95, .95, .95)',
          offset: 0.8
        }),
        style({
          transform: 'perspective(400px)',
          offset: 1
        })
      ])
    )
  ],
  {
    params: { duration: DEFAULT_DURATION, delay: '0s' }
  }
);

export const flipInX = flipIn('1', '0');
export const flipInY = flipIn('0', '1');
export const flipOutX = flipOut('1', '0');
export const flipOutY = flipOut('0', '1');

// Transitions
export function flipInXOnEnter(options?: AnimationOptions) {
  return transition(':enter', [useAnimation(flipInX, options)]);
}

export function flipOutXOnLeave(options?: AnimationOptions) {
  return transition(':leave', [useAnimation(flipOutX, options)]);
}

// Triggers
export function flipXOnEnterOnLeaveTrigger(options?: AnimationOptions) {
  return trigger('flipXOnEnterOnLeave', [
    flipInXOnEnter(options),
    flipOutXOnLeave(options)
  ]);
}

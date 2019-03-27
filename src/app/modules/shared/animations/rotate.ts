import { animation, animate, keyframes, style } from '@angular/animations';
import { DEFAULT_DURATION } from './default-values';

// Base Animations
export function rotateInDirection(origin: string, degrees: string) {
  return animation(
    animate(
      '{{ duration }} {{ delay }}',
      keyframes([
        style({
          'transform-origin': '{{ origin }}',
          opacity: 0,
          transform: 'rotate3d(0, 0, 1, {{ degrees }})',
          offset: 0
        }),
        style({
          'transform-origin': '{{ origin }}',
          opacity: 1,
          transform: 'none',
          offset: 1
        })
      ])
    ),
    {
      params: { duration: DEFAULT_DURATION, delay: '0s', origin, degrees }
    }
  );
}

export function rotateOutDirection(origin: string, degrees: string) {
  return animation(
    animate(
      '{{ duration }} {{ delay }}',
      keyframes([
        style({
          'transform-origin': '{{ origin }}',
          opacity: 1,
          transform: 'none',
          offset: 0
        }),
        style({
          'transform-origin': '{{ origin }}',
          opacity: 0,
          transform: 'rotate3d(0, 0, 1, {{ degrees }})',
          offset: 1
        })
      ])
    ),
    {
      params: { duration: DEFAULT_DURATION, delay: '0s', origin, degrees }
    }
  );
}

// Animations
export const rotateIn = rotateInDirection('center', '-200deg');
export const rotateInDownLeft = rotateInDirection('left bottom', '-45deg');
export const rotateInDownRight = rotateInDirection('right bottom', '45deg');
export const rotateInUpLeft = rotateInDirection('left bottom', '45deg');
export const rotateInUpRight = rotateInDirection('right bottom', '-90deg');
export const rotateOut = rotateOutDirection('center', '200deg');
export const rotateOutDownLeft = rotateOutDirection('left bottom', '45deg');
export const rotateOutDownRight = rotateOutDirection('right bottom', '-45deg');
export const rotateOutUpLeft = rotateOutDirection('left bottom', '-45deg');
export const rotateOutUpRight = rotateOutDirection('right bottom', '90deg');

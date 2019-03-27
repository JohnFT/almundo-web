import { DEFAULT_DURATION } from './default-values';
import { animation, style, animate, keyframes } from '@angular/animations';

// Animations
export const hinge = animation(
  [
    style({ 'transform-origin': 'top left' }),
    animate(
      '{{ duration }} {{ delay }} ease-in-out',
      keyframes([
        style({
          transform: 'rotate3d(0, 0, 1, 80deg)',
          offset: 0.2
        }),
        style({
          transform: 'rotate3d(0, 0, 1, 60deg)',
          offset: 0.4
        }),
        style({
          transform: 'rotate3d(0, 0, 1, 80deg)',
          offset: 0.6
        }),
        style({
          opacity: 1,
          transform: 'rotate3d(0, 0, 1, 60deg)',
          offset: 0.8
        }),
        style({
          opacity: 0,
          transform: 'translate3d(0, 700px, 0)',
          offset: 1
        })
      ])
    )
  ],
  {
    params: { duration: DEFAULT_DURATION, delay: '0s' }
  }
);

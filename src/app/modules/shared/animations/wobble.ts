import { animation, animate, keyframes, style } from '@angular/animations';
import { DEFAULT_DURATION } from './default-values';

// Animations
export const wobble = animation(
  animate(
    '{{ duration }} {{ delay }}',
    keyframes([
      style({ transform: 'none', offset: 0 }),
      style({
        transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',
        offset: 0.15
      }),
      style({
        transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)',
        offset: 0.3
      }),
      style({
        transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)',
        offset: 0.45
      }),
      style({
        transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',
        offset: 0.6
      }),
      style({
        transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',
        offset: 0.75
      }),
      style({ transform: 'none', offset: 1 })
    ])
  ),
  { params: { duration: DEFAULT_DURATION, delay: '0s' } }
);

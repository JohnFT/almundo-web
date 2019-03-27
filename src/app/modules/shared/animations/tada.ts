import { animation, animate, keyframes, style } from '@angular/animations';
import { DEFAULT_DURATION } from './default-values';

// Animations
export const tada = animation(
  animate(
    '{{ duration }} {{ delay }}',
    keyframes([
      style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
      style({
        transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)',
        offset: 0.1
      }),
      style({
        transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)',
        offset: 0.2
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.3
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
        offset: 0.4
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.5
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
        offset: 0.6
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.7
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
        offset: 0.8
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.9
      }),
      style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
    ])
  ),
  { params: { duration: DEFAULT_DURATION, delay: '0s' } }
);

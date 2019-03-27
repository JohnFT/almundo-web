import { animation, animate, keyframes, style } from '@angular/animations';
import { DEFAULT_DURATION } from './default-values';

// Animations
export const jello = animation(
  animate(
    '{{ duration }} {{ delay }}',
    keyframes([
      style({ transform: 'none', offset: 0 }),
      style({ transform: 'none', offset: 0.11 }),
      style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.22 }),
      style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.33 }),
      style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.44 }),
      style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.55 }),
      style({
        transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
        offset: 0.66
      }),
      style({
        transform: 'skewX(0.390625deg) skewY(0.390625deg)',
        offset: 0.77
      }),
      style({
        transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
        offset: 0.88
      }),
      style({ transform: 'none', offset: 1 })
    ])
  ),
  { params: { duration: DEFAULT_DURATION, delay: '0s' } }
);

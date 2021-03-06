import { animation, animate, keyframes, style } from '@angular/animations';
import { DEFAULT_DURATION } from './default-values';

// Animations
export const swing = animation(
  animate(
    '{{ duration }} {{ delay }}',
    keyframes([
      style({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2 }),
      style({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4 }),
      style({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6 }),
      style({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8 }),
      style({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
    ])
  ),
  { params: { duration: DEFAULT_DURATION, delay: '0s' } }
);

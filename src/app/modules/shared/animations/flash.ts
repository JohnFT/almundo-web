import { animation, animate, keyframes, style } from '@angular/animations';
import { DEFAULT_DURATION } from './default-values';

// Animations
export const flash = animation(
  animate(
    '{{ duration }} {{ delay }}',
    keyframes([
      style({ opacity: 1 }),
      style({ opacity: 0 }),
      style({ opacity: 1 }),
      style({ opacity: 0 }),
      style({ opacity: 1 })
    ])
  ),
  { params: { duration: DEFAULT_DURATION, delay: '0s' } }
);

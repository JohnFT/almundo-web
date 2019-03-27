import { animation, animate, keyframes, style } from '@angular/animations';
import { DEFAULT_DURATION } from './default-values';

export const pulse = animation(
  animate(
    '{{ duration }} {{ delay }}',
    keyframes([
      style({ transform: 'scale3d(1, 1, 1)' }),
      style({ transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})' }),
      style({ transform: 'scale3d(1, 1, 1)' })
    ])
  ),
  { params: { scale: 1.25, duration: DEFAULT_DURATION, delay: '0s' } }
);

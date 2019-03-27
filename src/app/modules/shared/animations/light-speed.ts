import { animation, animate, keyframes, style } from '@angular/animations';
import { DEFAULT_DURATION } from './default-values';

// Animations
export const lightSpeedIn = animation(
  animate(
    '{{ duration }} {{ delay }}',
    keyframes([
      style({
        opacity: 0,
        transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
        offset: 0
      }),
      style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0) skewX(0)',
        offset: 1
      })
    ])
  ),
  {
    params: { duration: DEFAULT_DURATION, delay: '0s' }
  }
);

export const lightSpeedOut = animation(
  animate(
    '{{ duration }} {{ delay }} ease-out',
    keyframes([
      style({
        opacity: 1,
        offset: 0
      }),
      style({
        opacity: 0,
        transform: 'translate3d(100%, 0, 0) skewX(30deg)',
        offset: 1
      })
    ])
  ),
  {
    params: { duration: DEFAULT_DURATION, delay: '0s' }
  }
);

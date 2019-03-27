import { animation, animate, keyframes, style } from '@angular/animations';
import { DEFAULT_DURATION } from './default-values';

// Animations
export const rollIn = animation(
  [
    animate(
      '{{ duration }} {{ delay }}',
      keyframes([
        style({
          opacity: 0,
          transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)',
          offset: 0
        }),
        style({
          opacity: 1,
          transform: 'none',
          offset: 1
        })
      ])
    )
  ],
  {
    params: { duration: DEFAULT_DURATION, delay: '0s' }
  }
);

export const rollOut = animation(
  [
    animate(
      '{{ duration }} {{ delay }}',
      keyframes([
        style({
          opacity: 1,
          offset: 0
        }),
        style({
          opacity: 0,
          transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)',
          offset: 1
        })
      ])
    )
  ],
  {
    params: { duration: DEFAULT_DURATION, delay: '0s' }
  }
);

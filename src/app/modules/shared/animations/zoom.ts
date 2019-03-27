import { animation, animate, keyframes, style } from '@angular/animations';
import { DEFAULT_DURATION } from './default-values';

// Base animations

export function zoomInX(a: string, b: string) {
  return animation(
    animate(
      '{{ duration }} {{ delay }} cubic-bezier(0.550, 0.055, 0.675, 0.190)',
      keyframes([
        style({
          opacity: 0,
          transform: `scale3d(.1, .1, .1) translate3d({{ a }}, 0, 0)`,
          offset: 0
        }),
        style({
          opacity: 1,
          transform: `scale3d(.475, .475, .475) translate3d({{ b }}, 0, 0)`,
          offset: 0.6
        })
      ])
    ),
    { params: { duration: DEFAULT_DURATION, delay: '0s', a, b } }
  );
}

export function zoomInY(a: string, b: string) {
  return animation(
    animate(
      '{{ duration }} {{ delay }} cubic-bezier(0.550, 0.055, 0.675, 0.190)',
      keyframes([
        style({
          opacity: 0,
          transform: `scale3d(.1, .1, .1) translate3d(0, {{ a }}, 0)`,
          offset: 0
        }),
        style({
          opacity: 1,
          transform: `scale3d(.475, .475, .475) translate3d(0, {{ b }}, 0)`,
          offset: 0.6
        })
      ])
    ),
    { params: { duration: DEFAULT_DURATION, delay: '0s', a, b } }
  );
}

export function zoomOutX(a: string, b: string) {
  return animation(
    animate(
      '{{ duration }} {{ delay }} cubic-bezier(0.550, 0.055, 0.675, 0.190)',
      keyframes([
        style({
          opacity: 1,
          transform: `scale3d(.475, .475, .475) translate3d({{ a }}, 0, 0)`,
          offset: 0.4
        }),
        style({
          opacity: 0,
          transform: `scale3d(.1, .1, .1) translate3d({{ b }}, 0, 0)`,
          offset: 1
        })
      ])
    ),
    { params: { duration: DEFAULT_DURATION, delay: '0s', a, b } }
  );
}

export function zoomOutY(a: string, b: string) {
  return animation(
    animate(
      '{{ duration }} {{ delay }} cubic-bezier(0.550, 0.055, 0.675, 0.190)',
      keyframes([
        style({
          opacity: 1,
          transform: `scale3d(.475, .475, .475) translate3d(0, {{ a }}, 0)`,
          offset: 0.4
        }),
        style({
          opacity: 0,
          transform: `scale3d(.1, .1, .1) translate3d(0, {{ b }}, 0)`,
          offset: 1
        })
      ])
    ),
    { params: { duration: DEFAULT_DURATION, delay: '0s', a, b } }
  );
}

// Animations
export const zoomIn = animation(
  [
    animate(
      '{{ duration }} {{ delay }}',
      keyframes([
        style({
          opacity: 0,
          transform: 'scale3d(.3, .3, .3)',
          offset: 0
        }),
        style({
          opacity: 1,
          transform: 'scale3d(1, 1, 1)',
          offset: 0.5
        })
      ])
    )
  ],
  {
    params: { duration: DEFAULT_DURATION, delay: '0s' }
  }
);

export const zoomInDown = zoomInY('-1000px', '10px');
export const zoomInUp = zoomInY('1000px', '-10px');
export const zoomInLeft = zoomInX('-1000px', '10px');
export const zoomInRight = zoomInX('1000px', '-10px');

export const zoomOut = animation(
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
          transform: 'scale3d(.3, .3, .3)',
          offset: 0.5
        }),
        style({
          opacity: 0,
          offset: 1
        })
      ])
    )
  ],
  {
    params: { duration: DEFAULT_DURATION, delay: '0s' }
  }
);

export const zoomOutDown = zoomOutY('-60px', '2000px');
export const zoomOutUp = zoomOutY('60px', '-2000px');
export const zoomOutLeft = zoomOutX('42px', '-2000px');
export const zoomOutRight = zoomOutX('-42px', '2000px');

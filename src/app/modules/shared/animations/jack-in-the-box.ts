import {
  animate,
  animation,
  keyframes,
  style,
  transition,
  trigger,
  useAnimation,
  AnimationOptions,
  AnimationTransitionMetadata,
  AnimationTriggerMetadata
} from '@angular/animations';
import { DEFAULT_DURATION } from './default-values';

export let jackInTheBoxAnimation = animation(
  [
    animate(
      '{{ duration }} {{ delay }}',
      keyframes([
        style({
          opacity: 0,
          transform: 'scale(0.1) rotate(30deg)',
          'transform-origin': 'center bottom',
          offset: 0
        }),
        style({
          opacity: 0.5,
          transform: 'rotate(-10deg)',
          offset: 0.5
        }),
        style({
          opacity: 0.7,
          transform: 'rotate(3deg)',
          offset: 0.7
        }),
        style({
          opacity: 1,
          transform: 'scale(1)',
          offset: 1
        })
      ])
    )
  ],
  {
    params: { duration: DEFAULT_DURATION, delay: '0s' }
  }
);

// Transitions
export function jackInTheBoxOnEnter(
  options?: AnimationOptions
): AnimationTransitionMetadata {
  return transition(':enter', [useAnimation(jackInTheBoxAnimation, options)]);
}

//Triggers
export function jackInTheBoxOnEnterTrigger(
  options?: AnimationOptions
): AnimationTriggerMetadata {
  return trigger('jackInTheBoxOnEnter', [jackInTheBoxOnEnter(options)]);
}

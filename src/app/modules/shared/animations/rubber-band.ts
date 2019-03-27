import {
  animation,
  animate,
  keyframes,
  style,
  transition,
  useAnimation,
  AnimationOptions,
  AnimationTransitionMetadata,
  AnimationTriggerMetadata,
  trigger
} from '@angular/animations';
import { DEFAULT_DURATION } from './default-values';

// Animations
export const rubberBand = animation(
  animate(
    '{{ duration }} {{ delay }}',
    keyframes([
      style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
      style({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 }),
      style({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 }),
      style({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 }),
      style({ transform: 'scale3d(.95, 1.05, 1)', offset: 0.65 }),
      style({ transform: 'scale3d(1.05, .95, 1)', offset: 0.75 }),
      style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
    ])
  ),
  { params: { duration: DEFAULT_DURATION, delay: '0s' } }
);

// Transitions
export function rubberBandOnEnter(
  options?: AnimationOptions
): AnimationTransitionMetadata {
  return transition(':enter', [useAnimation(rubberBand, options)]);
}

//Triggers
export function rubberBandOnEnterTrigger(
  options?: AnimationOptions
): AnimationTriggerMetadata {
  return trigger('rubberBandOnEnter', [rubberBandOnEnter(options)]);
}

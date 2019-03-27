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

//Animations
export const shake = animation(
  animate(
    '{{ duration }} {{ delay }}',
    keyframes([
      style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.1 }),
      style({ transform: 'translate3d(10px, 0, 0)', offset: 0.2 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.3 }),
      style({ transform: 'translate3d(10px, 0, 0)', offset: 0.4 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.5 }),
      style({ transform: 'translate3d(10px, 0, 0)', offset: 0.6 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.7 }),
      style({ transform: 'translate3d(10px, 0, 0)', offset: 0.8 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.9 }),
      style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
    ])
  ),
  { params: { duration: DEFAULT_DURATION, delay: '0s' } }
);

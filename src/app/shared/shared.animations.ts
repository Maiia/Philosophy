import {trigger, animate, style, transition, state, keyframes} from '@angular/animations';

const scaleAnimation = trigger('scaleAnimation', [
  state('small', style({
    transform: 'scale(1)',
  })),
  state('large', style({
    transform: 'scale(1.2)',
  })),
  transition('small <=> large', animate('300ms ease-in', style({
    transform: 'translateY(-1px)'
  }))),
]);

const multiChanges = trigger('multiChanges', [
  transition('hidden => shown', animate('500ms ease-in', keyframes([
    style({opacity: 1, transform: 'translateY(75px)', offset: 0}),
    style({opacity: 1, transform: 'translateY(-12px)',  offset: 0.3}),
    style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
  ]))),
  transition('shown => hidden', animate('500ms ease-in', keyframes([
    style({opacity: 1, transform: 'translateY(75px)', offset: 0}),
    style({opacity: 1, transform: 'translateY(-12px)',  offset: 0.3}),
    style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
  ])))
]);

const twoStates = trigger('twoStates', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateY(-12px)',
    visibility: 'hidden'
  })),
  state('shown', style({
    opacity: 1,
    transform: 'translateY(0px)',
    visibility: 'visible'
  })),
  transition('hidden => shown',
    animate('400ms ease-in')
  )
]);

const dirDir = trigger('dirDir', [
  transition('change1 <=> change2', animate('.4s ease-in', keyframes([
    style({transform: 'translateX(-20px)', offset: 0}),
    style({transform: 'translateX(18px)',  offset: 0.3}),
    style({transform: 'translateX(-16px)', offset: 0.4}),
    style({transform: 'translateX(14px)',  offset: 0.5}),
    style({transform: 'translateX(-12px)', offset: 0.6}),
    style({transform: 'translateX(10px)',  offset: 0.7}),
    style({transform: 'translateX(-8px)',  offset: 0.8}),
    style({transform: 'translateX(6px)',   offset: 0.9}),
    style({transform: 'translateX(0px)',   offset: 1.0})
  ])))
]);



export {scaleAnimation, multiChanges, twoStates, dirDir};

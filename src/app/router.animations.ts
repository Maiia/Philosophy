import {trigger, animate, style, group, query, transition, keyframes} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({position: 'fixed', width: '100vw', height: '100vh', zIndex: 100, background: '#19191b'})
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateY(100px)' }),
        animate('2s ease-in-out',
          keyframes([
            style({transform: 'translateY(75px)', offset: 0}),
            style({transform: 'translateY(-25px)', offset: 0.5}),
            style({transform: 'translateY(0)', offset: 1.0})
          ])
      )], { optional: true }),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))
      ], { optional: true }),
    ])
  ])
]);

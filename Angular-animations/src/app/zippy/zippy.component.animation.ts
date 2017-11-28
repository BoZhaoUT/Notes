import { trigger, state, transition, style, animate, keyframes, animation, useAnimation } from '@angular/animations';


export const expandCollapse = trigger('expandCollapse', [
    // collpased is a custom state
    state('collapsed', style({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
    })),

    // these effects will be undone automatically
    // state('expanded', style({
    //   // angular will compute the height at rum time
    //   height: '*',
    //   padding: '*',
    //   // no longer hide child components
    //   overflow: 'auto'
    // })),

    // this is an example of multi-step animation
    transition('collapsed => expanded', [
        animate('0.3s ease-out', style({
        height: '*',
        paddingTop: '*',
        paddingBottom: '*'
        })),

        animate('1s', style({ opacity: 1}))
    ]),

    transition('expanded => collapsed', [
        animate('0.3s ease-in')
    ])
]);

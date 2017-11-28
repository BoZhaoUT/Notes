import { trigger, state, transition, style, animate, keyframes, animation, useAnimation } from '@angular/animations';

export let bounceOutLeftAnimation = animation(
    // animate('0.5s ease-in', style({ transform: 'translateX(-100%)'}))
    // offset determines the order of keyframes
    animate('0.5s ease-in', keyframes([
        style({ offset: 0.2,
            opacity: 1,
            transform: 'translateX(20px)'
        }),
        style({
            offset: 1,
            opacity: 0,
            // translateX equivalent to translate3d(-100%, 0, 0)
            transform: 'translateX(-100%)'
        })
    ]))
)

export let fadeInAnimation = animation([
    style({ opacity: 0}),
    animate('{{ duration }} {{ easing }}')
], {
    // default values of animate
    params: {
        duration: '2s',
        easing: 'ease-out'
    }
});

// animations: https://www.w3.org/TR/css3-transitions/#animatable-properties
// more animations: https://daneden.github.io/animate.css/
export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    // from void state to default state and from default to void
    transition(':enter', [ // enter: void => *
        useAnimation(fadeInAnimation)
    ]),

    transition(':leave', [ // leave * => void
        // effects under animate will be apply in 2 seconds
        // animate by default will undo effects in style
        animate(1000)
        // equivalent to
        // animate(2000, style({ opacity: 1}))
    ])
]);


// make custom curve
// http://cubic-bezier.com/

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translatexX(-10px)'}),
        animate(500)
    ]),

    transition(':leave', [
        useAnimation(bounceOutLeftAnimation)
    ])
]);

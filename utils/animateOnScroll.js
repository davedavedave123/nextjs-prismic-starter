import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const DEFAULTS = {
  y: 70,
  opacity: 0,
  duration: 1.5,
  ease: 'power4.easeInOut',
};

export default function animateOnScroll(elm, options, scrollTriggerOptions) {
  gsap.registerPlugin(ScrollTrigger);

  const elms = gsap.utils.toArray('.anim-up');

  // For any animation delays add it like this data-animdelay={0.2}
  elms.forEach(elm => {
    gsap.from(elm, {
      scrollTrigger: {
        trigger: elm,
        start: 'top bottom',
        markers: false,
        toggleActions: 'play none none reset',
        ...scrollTriggerOptions,
      },
      ...DEFAULTS,
      delay: elm.dataset.animdelay,
      ...options,
    });
  });

  const elmCheck = gsap.utils.toArray('.anim-card');
  console.log('elmCheck delay', elmCheck[0]?.dataset?.animdelay);

  const parallaxElms = gsap.utils.toArray('.parallax');

  parallaxElms.forEach(elm => {
    gsap.from(elm, {
      scrollTrigger: {
        trigger: elm,
        start: `top bottom`,
        end: 'bottom top',
        markers: false,
        toggleActions: 'play none none reset',
        scrub: true,
        ...scrollTriggerOptions,
      },
      ease: 'power4.easeInOut',
      y: -500,
      ...options,
    });
  });
}

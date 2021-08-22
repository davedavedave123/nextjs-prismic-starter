import { gsap } from 'gsap';

const DURATION = 0.4;

const DEFAULTS = { duration: DURATION, ease: 'power4.easeInOut' };
// const DEFAULTS = { duration: DURATION, ease: 'none' };

const getCurrentRefs = refs => {
  if (Array.isArray(refs)) return refs.map(ref => ref.current);
  return refs.current;
};

export default function animate(elm, tweens) {
  const from = {};
  const to = {};
  let elms = getCurrentRefs(elm);

  // if(Array.isArray(elm)) elms = getCurrentRefs()

  Object.entries(tweens).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      from[key] = value[0];
      to[key] = value[1];
    } else {
      to[key] = value;
    }
  });

  if (elm?.current) gsap.fromTo(elms, { ...from }, { ...to, ...DEFAULTS });
}

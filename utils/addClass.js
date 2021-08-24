import { gsap } from 'gsap';

export default function addClass() {
  const elms = gsap.utils.toArray('.myhover');

  // const arr = ['one', 'two', '--three', 'four'];

  // Take the class that starts with -- like --button-hovered and then toggle button-hovered on hover, or on active
  // To be used best with gsap animations
  elms.forEach(elm => {
    // const tags = elm.classList.map(item => item.slice(0, 2));

    // const index = tags.indexOf('--');

    // elm.classList[index] = elm.classList[index].slice(2);
    const elmArr = elm.classList.value.split(' ');
    elmArr.push('SomeotherClass');

    console.log('CLASS LIST:', elmArr);
    console.log('CLASS LIST AGAIN:', elmArr.join(' '));
    elm.classList.value = elmArr.join(' ');
  });
}

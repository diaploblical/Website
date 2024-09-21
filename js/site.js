

(window.setScroll = () => document.body.style.setProperty('--scroll', scrollY / innerHeight))();
['scroll', 'resize'].forEach(e => addEventListener(e, setScroll));

const bg = document.querySelector('#background');
const scrollStyle = getComputedStyle(document.body);

addEventListener('touchstart', () => bg.style.setProperty('--multiplier', '0'));
addEventListener('mousemove', ({ clientX, clientY }) => {
  bg.style.setProperty('--backgroundX', `${20 * (clientX - innerWidth / 2) / innerWidth}px`);
  bg.style.setProperty('--backgroundY', `${20 * (clientY - innerHeight / 2) / innerHeight}px`);
});

['mouseenter', 'mouseleave'].forEach(e => document.addEventListener(e, () => {
    if (e === 'mouseleave') bg.removeAttribute('style');
    bg.style.transition = 'transform .1s linear';
    setTimeout(() => bg.style.transition = '', 100);
}));

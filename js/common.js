const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const preventDefaultAnchor = () => {
    const $links = getAll('a[href="#"]');
    $links.forEach((link) => link.addEventListener('click', (e) => e.preventDefault()));
};

const topBar = () => {
    const $top = get('.top');
    const $header = get('#header');
    window.addEventListener('scroll', (e) => {
        //window.scrollY , window.pageYOffset
        // console.log(window.scrollY);
        ty = window.scrollY;
        if (ty > 200) {
            $top.classList.add('on');
        } else {
            $top.classList.remove('on');
        }
        if (ty > 200) {
            $header.classList.add('on');
        } else {
            $header.classList.remove('on');
        }
    });
};

const navi = () => {
    const $gnbli = getAll('#header .nav .gnb li');
};
const familySite = () => {};

const comInit = () => {
    navi();
    topBar();
};

(() => {
    preventDefaultAnchor();
    comInit();
})();

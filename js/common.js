const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const preventDefaultAnchor = () => {
    const $links = getAll('a[href="#"]');
    $links.forEach((link) => link.addEventListener('click', (e) => e.preventDefault()));
};

const topBar = () => {
    const $top = get('.top');
    window.addEventListener('scroll', (e) => {
        //window.scrollY , window.pageYOffset
        // console.log(window.scrollY);
        ty = window.scrollY;
        if (ty > 300) {
            $top.classList.add('on');
        } else {
            $top.classList.remove('on');
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

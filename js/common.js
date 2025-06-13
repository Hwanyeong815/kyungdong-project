const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const preventDefaultAnchor = () => {
    const $links = getAll('a[href="#"]');
    $links.forEach((link) => link.addEventListener('click', (e) => e.preventDefault()));
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const topBar = () => {
    const $top = get('.top');
    const $header = get('#header');
    // top버튼이 스크롤 할 때 나타나도록
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
    $top.addEventListener('click', (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

const navi = () => {
    const $gnbli = getAll('#header .nav .gnb > li');
    const $nav = get('#header .nav');
    const $navBar = get('#header .nav-bg');

    $gnbli.forEach((itemLi) => {
        itemLi.addEventListener('mouseenter', (e) => {
            $nav.classList.add('on');
            $navBar.classList.add('on');
        });
    });
    $nav.addEventListener('mouseleave', (e) => {
        $nav.classList.remove('on');
        $navBar.classList.remove('on');
    });
};
const familySite = () => {};

const siteMap = () => {
    // 사이트맵이 햄버거 메뉴 눌렀을 때 나타나도록
    const $sitemap = get('.sitemap');
    const $allmenu = get('.all-menu');
    const $close = get('.close');
    const $bg = get('.bg');

    $allmenu.addEventListener('click', (e) => {
        $sitemap.classList.add('on');
        $bg.classList.add('on');
    });
    $close.addEventListener('click', (e) => {
        $bg.classList.remove('on');
        $sitemap.classList.remove('on');
    });
    $bg.addEventListener('click', (e) => {
        $bg.classList.remove('on');
        $sitemap.classList.remove('on');
    });
};

const comInit = () => {
    navi();
    topBar();
    siteMap();
};

(() => {
    preventDefaultAnchor();
    comInit();
})();

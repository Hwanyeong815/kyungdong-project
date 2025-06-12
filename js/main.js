//비주얼배너
const mainBanner = () => {};
//이벤트배너
const eventBanner = () => {};

const menuBar = () => {
    const $menu = get('.menu');

    window.addEventListener('scroll', (e) => {
        //window.scrollY , window.pageYOffset
        // console.log(window.scrollY);
        ty = window.scrollY;
        if (ty > 300) {
            $menu.classList.add('on');
        } else {
            $menu.classList.remove('on');
        }
    });
};

//합치기
const mainInit = () => {
    mainBanner();
    eventBanner();
    menuBar();
};

(() => {
    mainInit();
})();

//비주얼배너
const mainBanner = () => {};
//이벤트배너
const eventBanner = () => {};

const sectionPage = () => {
    const $con1 = get('.main .con1');
    const $con2 = get('.main .con2');
    const $con3 = get('.main .con3');
    const $con4 = get('.main .con4');
    // console.log($con1.offsetTop);
    // 스크롤 높이 1080
    // console.log($con2.offsetTop);
    // 스크롤 높이 2105
    // console.log($con3.offsetTop);
    // 스크롤 높이 3157
    // console.log($con4.offsetTop);
    // 스크롤 높이 4237
    window.scrollTo({ top: $con2.offTop, behavior: 'smooth' });
};

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
    sectionPage();
};

(() => {
    mainInit();
})();

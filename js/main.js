//비주얼배너
const mainBanner = () => {};
//이벤트배너
const eventBanner = () => {};

// const sectionPage1 = () => {
//     const $con0 = get('#mainVisual');
//     const $con1 = get('.main .con1');
//     const $con2 = get('.main .con2');
//     const $con3 = get('.main .con3');
//     const $con4 = get('.main .con4');
//     const $menulis = getAll('.menu li');

//     // console.log($con4.offsetTop);
//     // window.scrollTo({ top: $con2.offsetTop, behavior: 'smooth' });
//     $menulis[0].addEventListener('click', (e) => {
//         ty = $con0.offsetTop;
//         window.scrollTo({ top: ty, behavior: 'smooth' });
//     });
//     $menulis[1].addEventListener('click', (e) => {
//         ty = $con1.offsetTop;
//         window.scrollTo({ top: ty, behavior: 'smooth' });
//     });
//     $menulis[2].addEventListener('click', (e) => {
//         ty = $con2.offsetTop;
//         window.scrollTo({ top: ty, behavior: 'smooth' });
//     });
//     $menulis[3].addEventListener('click', (e) => {
//         ty = $con3.offsetTop;
//         window.scrollTo({ top: ty, behavior: 'smooth' });
//     });
//     $menulis[4].addEventListener('click', (e) => {
//         ty = $con4.offsetTop;
//         window.scrollTo({ top: ty, behavior: 'smooth' });
//     });
// };

const sectionPage = () => {
    const $con0 = get('#mainVisual');
    const $cons = getAll('.main .con');
    // console.log($cons[1].offsetTop);
    const posY = [];
    posY.push($con0.offsetTop);
    $cons.forEach((item) => {
        posY.push(item.offsetTop);
    });
    console.log(posY);

    const $menulis = getAll('.menu li');

    $menulis.forEach((itemLi, idx) => {
        itemLi.addEventListener('click', (e) => {
            window.scrollTo({ top: posY[idx], behavior: 'smooth' });

            $menulis.forEach((item) => item.classList.remove('on'));
            itemLi.classList.add('on');
        });
    });
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

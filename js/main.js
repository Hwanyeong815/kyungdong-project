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

// 우측에 따라오는 서브메뉴를 눌렀을때 이동하기
const sectionPage = () => {
    const $con0 = get('#mainVisual');
    const $cons = getAll('.main .con');
    // console.log($cons[1].offsetTop);
    const posY = [];
    // posY에 메인비쥬얼 위치 넣고
    posY.push($con0.offsetTop);
    // 나머지 con들의 스크롤높이값 넣기
    $cons.forEach((item) => {
        posY.push(item.offsetTop);
    });
    console.log(posY);

    const $menulis = getAll('.menu li');

    $menulis.forEach((itemLi, idx) => {
        itemLi.addEventListener('click', (e) => {
            window.scrollTo({ top: posY[idx], behavior: 'smooth' });

            // 클릭했을 때 나머지 원은 사라지고, 클릭한 건 나타나고
            $menulis.forEach((item) => item.classList.remove('on'));
            itemLi.classList.add('on');
        });
    });
};

const menuBar = () => {
    const $menu = get('.menu');
    const $con0 = get('#mainVisual');
    const $cons = getAll('.main .con');
    const posY = [];
    posY.push($con0.offsetTop);
    $cons.forEach((item) => {
        posY.push(item.offsetTop);
    });
    let ty = 0;
    const $menulis = getAll('.menu li');
    $menulis.forEach((itemLi, idx) => {
        itemLi.addEventListener('click', (e) => {
            window.scrollTo({ top: posY[idx], behavior: 'smooth' });
            //모두떼기 -> forEach
            // 페이지마다 원 붙히는 방법1
            // $menulis.forEach((item) => item.classList.remove('on'));
            // itemLi.classList.add('on');
        });
    });
    window.addEventListener('scroll', (e) => {
        ty = window.scrollY;
        // 페이지마다 원 붙히는 방법3
        for (let i = 0; i < $menulis.length; i++) {
            if (ty >= posY[i]) {
                $menulis.forEach((item) => item.classList.remove('on'));
                $menulis[i].classList.add('on');
            }
        }

        //  페이지마다 원 붙히는방법2
        // window.addEventListener('scroll', (e) => {
        //     ty = window.scrollY;

        //     if (ty >= posY[0]) {
        //         $menulis.forEach((item) => item.classList.remove('on'));
        //         $menulis[0].classList.add('on');
        //     }
        //     if (ty >= posY[1]) {
        //         $menulis.forEach((item) => item.classList.remove('on'));
        //         $menulis[1].classList.add('on');
        //     }
        //     if (ty >= posY[2]) {
        //         $menulis.forEach((item) => item.classList.remove('on'));
        //         $menulis[2].classList.add('on');
        //     }
        //     if (ty >= posY[3]) {
        //         $menulis.forEach((item) => item.classList.remove('on'));
        //         $menulis[3].classList.add('on');
        //     }
        //     if (ty >= posY[4]) {
        //         $menulis.forEach((item) => item.classList.remove('on'));
        //         $menulis[4].classList.add('on');
        //     }

        if (ty > 400) {
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

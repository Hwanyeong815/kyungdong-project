const mainBanner = () => {
    const $bannerli = getAll('#mainVisual .mainBanner li');
    const $prev = get('#mainVisual .prev');
    const $next = get('#mainVisual .next');
    let current = 0, //현재번호
        old = 0, // 과거 - 이미 끝난번호
        size = 100, // 100% 처리
        totalImage = $bannerli.length,
        timer = null,
        interval = 5000;
    $next.addEventListener('click', (e) => {
        current++;
        if (current > totalImage - 1) current = 0;
        banner();
    });
    $prev.addEventListener('click', (e) => {
        current--;
        if (current < 0) current = totalImage - 1;
        banner();
    });
    //공통
    const banner = () => {
        // 현재는 0의 위치로
        $bannerli[current].style.left = `0px`;
        $bannerli[current].style.zIndex = 10;
        $bannerli[current].classList.add('on');
        // 과거는 -100%로 이동하기
        $bannerli[old].style.left = `-${size}%`;
        $bannerli[old].style.zIndex = 1;
        $bannerli[old].classList.remove('on');
        lastBanner(old);
        old = current; //이미끝난 배너는 과거로 설정
    };

    const lastBanner = (z) => {
        setTimeout(() => {
            // 맨앞으로 이동
            $bannerli[z].style.left = `${size}%`;
        }, 400); // transition 시간동일
    };
};

const eventBanner = () => {};

const sectionPage = () => {
    const $con0 = get('#mainVisual');
    const $cons = getAll('.main .con');
    const posY = [];
    posY.push($con0.offsetTop);
    $cons.forEach((item) => {
        posY.push(item.offsetTop);
    });
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
    const $con0 = get('#mainVisual');
    const $cons = getAll('.main .con');
    const posY = [];
    posY.push($con0.offsetTop);
    $cons.forEach((item) => {
        posY.push(item.offsetTop);
    });
    let ty = 0;

    //
    $cons.forEach((item) => {
        posY.push(item.offsetTop);
    });
    posY[posY.length - 1] = posY[posY.length - 1] - 300;
    //

    const $menulis = getAll('.menu li');
    $menulis.forEach((itemLi, idx) => {
        itemLi.addEventListener('click', (e) => {
            window.scrollTo({ top: posY[idx], behavior: 'smooth' });
        });
    });
    window.addEventListener('scroll', (e) => {
        ty = window.scrollY;

        for (let i = 0; i < $menulis.length; i++) {
            if (ty >= posY[i]) {
                $menulis.forEach((item) => item.classList.remove('on'));
                $menulis[i].classList.add('on');
            }
        }
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

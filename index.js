function countDownBg(seconds) {
    var intervalId = setInterval(function () {
        seconds--;
        if (seconds === 0) {
            clearInterval(intervalId);
            console.log("Hết giờ!");
            document.getElementById('background-effect').innerHTML = ''
            document.getElementById('background-effect').classList.add('bg-section-disable')
        } else {
            console.log(seconds + " giây còn lại");
        }
    }, 1000);
}

function countDownHeader(seconds) {
    var intervalId = setInterval(function () {
        seconds--;
        if (seconds === 0) {
            clearInterval(intervalId);
            console.log("Hết giờ!");
            document.getElementById('header').style.display = "flex";
            document.getElementById('background-effect').style.display = "none";
        } else {
            console.log(seconds + " giây còn lại");
        }
    }, 1000);
}

function countDownMain(seconds) {
    var intervalId = setInterval(function () {
        seconds--;
        if (seconds === 0) {
            clearInterval(intervalId);
            console.log("Hết giờ!");
            let main = document.getElementById('circle-effect')
            console.log(main.children[0]);
            console.log(main.children.length);
            for (let i = 0; i < main.children.length; i++) {
                if(i == 1) {
                    main.children[i].classList.add("main-circle-active-2");
                }
                else {
                    main.children[i].classList.add("main-circle-active");
                }
            }
        } else {
            console.log(seconds + " giây còn lại");
        }
    }, 1000);
}

function countDownMainCircleOut(seconds) {
    var intervalId = setInterval(function () {
        seconds--;
        if (seconds === 0) {
            clearInterval(intervalId);
            console.log("Hết giờ!");
            document.getElementById('main-circle-out').classList.add('main-circle-out')
        } else {
            console.log(seconds + " giây còn lại");
        }
    }, 1000);
}

function countDownImageEffect(seconds) {
    var intervalId = setInterval(function () {
        seconds--;
        if (seconds === 0) {
            clearInterval(intervalId);
            console.log("Hết giờ!");
            document.getElementById('image-effect').classList.add('image-effect-active')
        } else {
            console.log(seconds + " giây còn lại");
        }
    }, 1000);
}

countDownBg(5)
countDownHeader(6)
countDownMain(6)
countDownMainCircleOut(16)
countDownImageEffect(18)



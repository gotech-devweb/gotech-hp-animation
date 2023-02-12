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
                if (i != 0 && i != 2 && i != 3) {
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

function countDownLogoEffect(seconds) {
    var intervalId = setInterval(function () {
        seconds--;
        if (seconds === 0) {
            clearInterval(intervalId);
            console.log("Hết giờ!");
            let main = document.getElementById('circle-effect')
            main.classList.add("main-logo-active")
        } else {
            console.log(seconds + " giây còn lại");
        }
    }, 1000);
}

function countDownBallEffect(seconds) {
    var intervalId = setInterval(function () {
        seconds--;
        if (seconds === 0) {
            clearInterval(intervalId);
            console.log("Hết giờ!");
            let main = document.getElementById('main-frame-2')
            main.style.opacity = 1
            document.getElementById("ball-effect").classList.add("ball-effect-active")
        } else {
            console.log(seconds + " giây còn lại");
        }
    }, 1000);
}

function countDownBgFrame2(seconds) {
    var intervalId = setInterval(function () {
        seconds--;
        if (seconds === 0) {
            clearInterval(intervalId);
            console.log("Hết giờ!");
            let main = document.getElementById('main-frame-2')
            main.classList.add("main-bg-active")
        } else {
            console.log(seconds + " giây còn lại");
        }
    }, 1000);
}

function countDownArrowEffect(seconds) {
    var intervalId = setInterval(function () {
        seconds--;
        if (seconds === 0) {
            clearInterval(intervalId);
            console.log("Hết giờ!");
            let main = document.getElementById('arrow-effect')
            for (let i = 0; i < 7; i++) {
                let img = document.createElement('img');
                img.src = getRandomImageSrc()
                img.classList.add(getRandomClass())
                main.appendChild(img)
            }
        } else {
            console.log(seconds + " giây còn lại");
        }
    }, 1000);
    setTimeout(()=>{
        let main = document.getElementById('arrow-effect')
        main.innerHTML = ""
    }, 3000)
}

function getRandomImageSrc() {
    let imageSources = ["./images/arrow-orange.png", "./images/arrow-blue.png", "./images/arrow-pastel.png", "./images/arrow-pink.png"]
    var randomIndex = Math.floor(Math.random() * imageSources.length);
    return imageSources[randomIndex];
}

function getRandomClass() {
    let imageSources = ["arrow-item", "arrow-item-2", "arrow-item-3", "arrow-item-4", "arrow-item-5"]
    var randomIndex = Math.floor(Math.random() * imageSources.length);
    return imageSources[randomIndex];
}

countDownBg(5)
countDownHeader(6)
countDownMain(6)
// countDownMainCircleOut(16)
countDownImageEffect(18)
countDownLogoEffect(26)
countDownBallEffect(31)
countDownBgFrame2(34)
countDownArrowEffect(36)
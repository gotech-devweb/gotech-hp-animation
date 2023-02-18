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
            document.getElementById('image-effect').classList.add('image-effect-out')
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
    setTimeout(() => {
        let main = document.getElementById('arrow-effect')
        main.innerHTML = ""
    }, 1000)
}

function countDownDiagonal(seconds) {
    var intervalId = setInterval(function () {
        seconds--;
        if (seconds === 0) {
            clearInterval(intervalId);
            console.log("Hết giờ!");
            let main = document.getElementById('diagonal-effect')
            for (let i = 0; i < main.children.length; i++) {
                main.children[i].classList.add("diagonal-active");
            }
        } else {
            console.log(seconds + " giây còn lại");
        }
    }, 1000);
}

function countDownShowText(seconds) {
    var intervalId = setInterval(function () {
        seconds--;
        if (seconds === 0) {
            clearInterval(intervalId);
            console.log("Hết giờ!");
            // document.getElementById('text-effect').classList.add("text-effect-show")
            document.getElementById('main').innerHTML = '<section id="text-effect" class="container"><div class="circles"><div class="circle-wrapper"><div class="circle"></div><div class="text">Business</div></div><div class="circle-wrapper"><div class="circle"></div><div class="text"><span>×</span> Technology  <span>×</span></div></div><div class="circle-wrapper"><div class="circle"></div><div class="text">Design</div></div></div></section>';
        } else {
            console.log(seconds + " giây còn lại");
        }
    }, 1000);
}

function countDownCirleEffect(seconds) {
    var intervalId = setInterval(function () {
        seconds--;
        if (seconds === 0) {
            clearInterval(intervalId);
            console.log("Hết giờ!");
            let main = document.querySelectorAll('.circle')
            console.log(main.length);
            for (let i = 0; i < main.length; i++) {
                main[i].classList.add('circle-active')
            }            
        } else {
            console.log(seconds + " giây còn lại");
        }
    }, 1000);
}

function countDownHideCirlce(seconds) {
    var intervalId = setInterval(function () {
        seconds--;
        if (seconds === 0) {
            clearInterval(intervalId);
            console.log("Hết giờ!");
            let main = document.querySelectorAll('.circle')
            console.log(main.length);
            for (let i = 0; i < main.length; i++) {
                if(i == 1) {
                    main[1].classList.add('scaleX');
                } else {
                    main[i].classList.add('image-effect-out')
                }                
            }            
        } else {
            console.log(seconds + " giây còn lại");
        }
    }, 1000);
}

function countDownCirleEffect(seconds) {
    var intervalId = setInterval(function () {
        seconds--;
        if (seconds === 0) {
            clearInterval(intervalId);
            console.log("Hết giờ!");
            let main = document.querySelectorAll('.text')
            console.log(main.length);
            for (let i = 0; i < main.length; i++) {
                main[i].classList.add('text-active')
            }
        } else {
            console.log(seconds + " giây còn lại");
        }
    }, 1000);
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
countDownImageEffect(12)
countDownLogoEffect(13)
countDownDiagonal(15)
countDownBallEffect(15)
countDownBgFrame2(17)
countDownArrowEffect(18)
countDownShowText(21)
countDownHideCirlce(22)
countDownCirleEffect(24)
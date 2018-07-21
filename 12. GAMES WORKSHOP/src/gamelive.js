(function app() {

    const goodPlaneSpeed = 10;
    let badPlaneSpeed = 2;

    let resources = 2;

    let theGoodPlane = document.getElementById('cat');
    theGoodPlane.onload = onResourceLoad;

    let theBadPlane = document.getElementById('mouse');
    theBadPlane.onload = onResourceLoad;

    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let goodPlane = {
        x: 400,
        y: 300
    };
    let badPlane = {
        x: 100,
        y: 100,
        dirX: true,
        dirY: true
    };
    let distance = 0;
    let countOfCrashes = 0;


    let keysPressed = {};

    window.addEventListener("keydown", keyboardHandler);
    window.addEventListener("keyup", keyboardHandler);

    function keyboardHandler(event) {
        if (event.type === 'keydown') {
            keysPressed[event.code] = true;
        } else {
            delete keysPressed[event.code];
        }

    }

    function main() {
        for (let key in keysPressed) {
            switch (key) {
                case 'ArrowLeft':
                    goodPlane.x -= goodPlaneSpeed;
                    if (goodPlane.x <= 0) {
                        goodPlane.x = 0;
                    }
                    break;
                case 'ArrowRight':
                    goodPlane.x += goodPlaneSpeed;
                    if (goodPlane.x >= 800) {
                        goodPlane.x = 800;
                    }
                    break;
                case 'ArrowUp':
                    goodPlane.y -= goodPlaneSpeed;
                    if (goodPlane.y <= 0) {
                        goodPlane.y = 0;
                    }
                    break;
                case 'ArrowDown':
                    goodPlane.y += goodPlaneSpeed;
                    if (goodPlane.y >= 600) {
                        goodPlane.y = 600;
                    }
            }
        }

        moveMouse();

        draw();

        detectCollision();

        requestAnimationFrame(main);
    }

    function draw() {
        ctx.clearRect(0, 0, 800, 600);
        ctx.drawImage(theBadPlane, badPlane.x - theBadPlane.width / 2, badPlane.y - theBadPlane.height / 2);
        ctx.drawImage(theGoodPlane, goodPlane.x - theGoodPlane.width / 2, goodPlane.y - theGoodPlane.height / 2);
        ctx.fillText(`Crashes count: ${countOfCrashes}`, 25, 50);
    }

    function moveMouse() {
        if (badPlane.dirX) {
            badPlane.x += badPlaneSpeed;
            if (badPlane.x >= 770) {
                badPlane.dirX = false;
            }
        } else {
            badPlane.x -= badPlaneSpeed;
            if (badPlane.x <= 30) {
                badPlane.dirX = true;
            }
        }
        if (badPlane.dirY) {
            badPlane.y += badPlaneSpeed;
            if (badPlane.y >= 570) {
                badPlane.dirY = false;
            }
        } else {
            badPlane.y -= badPlaneSpeed;
            if (badPlane.y <= 30) {
                badPlane.dirY = true;
            }
        }
    }

    function detectCollision() {
        distance = Math.sqrt((goodPlane.x - badPlane.x) ** 2 + (goodPlane.y - badPlane.y) ** 2);

        if (distance <= 100) {
            countOfCrashes++;
            badPlane.x = Math.random() * 800;
            badPlane.y = Math.random() * 600;
        }

        if (countOfCrashes >= 3) {
            countOfCrashes = 0;
            badPlaneSpeed++;
        }
    }

    function onResourceLoad() {
        resources--;

        if (resources === 0) {
            main();
        }
    }

    main();
})();
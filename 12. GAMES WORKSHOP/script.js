<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Canvas Demo</title>
</head>

<body>
<canvas width="800" height="600" style="border: 5px solid orange" id="canvas">Canvas not supported</canvas>
<button type="button" id="drawBtn" onClick="drawBar()">Draw</button>
<img src="boat.jpg" style="display: none;" id="img" />
<script>
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    function drawBar() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(100, 100, 410, 25);
        ctx.fillStyle = 'white';
        ctx.fillRect(105, 105, 400, 15);
        ctx.fillSyle = 'blue';

        let timer = setInterval(bit, 500);
        let progress = 0;

        function bit() {
            ctx.fillRect(107 + progress * 40, 107, 36, 11);
            progress++;
            if (progress === 10) {
                clearInterval(timer);
            }
        }
    }


    function makeBtn() {
        ctx.beginPath();
        ctx.arc(220, 20, 20, Math.PI * 3 / 2, Math.PI / 2, false);
        ctx.lineTo(20, 40);
        ctx.arc(20, 20, 20, Math.PI / 2, Math.PI * 3 / 2, false);
        ctx.closePath();
        ctx.stroke();

        ctx.font = "24px monospace";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText("Submit", 120, 20);
        ctx.fillStyle = 'black';
    }


    function cls() {
        ctx.clearRect(0, 0, 800, 600);
    }

    function res() {
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.lineCap = 'butt';
    }

    function grid() {
        ctx.save();

        ctx.strokeStyle = 'grey';
        ctx.lineWidth = 0.25;
        for (let row = 0; row < 60; row++) {
            if (row % 5 == 0) ctx.lineWidth = 0.5;
            if (row % 10 == 0) ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, row * 10);
            ctx.lineTo(800, row * 10);
            ctx.stroke();
            if (row % 5 == 0) ctx.lineWidth = 0.25;
        }
        for (let col = 0; col < 80; col++) {
            if (col % 5 == 0) ctx.lineWidth = 0.5;
            if (col % 10 == 0) ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(col * 10, 0);
            ctx.lineTo(col * 10, 600);
            ctx.stroke();
            if (col % 5 == 0) ctx.lineWidth = 0.25;
        }

        ctx.restore();
    }

    function drawCheckerboard() {
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                if ((row + col) % 2 == 0) {
                    let x = 25 + col * 50;
                    let y = 25 + row * 50;
                    ctx.fillRect(x, y, 50, 50);
                }
            }
        }

    }
</script>
</body>

</html>
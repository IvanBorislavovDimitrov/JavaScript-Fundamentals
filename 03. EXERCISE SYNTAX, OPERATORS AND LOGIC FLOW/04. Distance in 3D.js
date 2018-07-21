function distanceIn3D(info) {
    let x1 = info[0];
    let y1 = info[1];
    let z1 = info[2];
    let x2 = info[3];
    let y2 = info[4];
    let z2 = info[5];

    console.log(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2)));
}

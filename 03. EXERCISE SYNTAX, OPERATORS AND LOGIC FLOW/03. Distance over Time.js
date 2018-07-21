function distanceOverTime(info) {
    let v1 = info[0] / 3600 * 1000;
    let v2 = info[1] / 3600 * 1000;
    let time = info[2];

    let v1Distance = v1 * time;
    let v2Distance = v2 * time;

    console.log((Math.abs(v1Distance - v2Distance)));
}

distanceOverTime([11, 10, 120]);
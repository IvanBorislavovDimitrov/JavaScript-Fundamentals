'use strict';

function findShortestDistance([x1, y1, x2, y2, x3, y3]) {
    let path = "";
    let bestDistance = 0;
    let currentDistance;

    // 1 -> 2 -> 3
    bestDistance = getDistance(x1, y1, x2, y2) + getDistance(x2, y2, x3, y3);
    path = "1->2->3: " + bestDistance;

    // 1 -> 3 -> 2
    currentDistance = getDistance(x1, y1, x3, y3) + getDistance(x3, y3, x2, y2);
    if (currentDistance < bestDistance) {
        bestDistance = currentDistance;
        path = "1->3->2: " + bestDistance;
    }

    // 2 -> 1 -> 3
    currentDistance = getDistance(x2, y2, x1, y1) + getDistance(x1, y1, x3, y3);
    if (currentDistance < bestDistance) {
        bestDistance = currentDistance;
        path = "2->1->3: " + bestDistance;
    }

    // 2 -> 3 -> 1
    currentDistance = getDistance(x2, y2, x3, y3) + getDistance(x3, y3, x1, y1);
    if (currentDistance < bestDistance) {
        bestDistance = currentDistance;
        path = "2->3->1: " + bestDistance;
    }

    // 3 -> 1 -> 2
    currentDistance = getDistance(x3, y3, x1, y1) + getDistance(x1, y1, x2, y2);
    if (currentDistance < bestDistance) {
        bestDistance = currentDistance;
        path = "3->1->2: " + bestDistance;
    }

    // 3 -> 2 -> 1
    currentDistance = getDistance(x3, y3, x2, y2) + getDistance(x2, y2, x1, y1);
    if (currentDistance < bestDistance) {
        bestDistance = currentDistance;
        path = "3->2->1: " + bestDistance;
    }

    return path;

    function getDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + (Math.pow(y2 -y1, 2)));
    }
}

console.log(findShortestDistance([-1, -2, 3.5, 0, 0, 2]));
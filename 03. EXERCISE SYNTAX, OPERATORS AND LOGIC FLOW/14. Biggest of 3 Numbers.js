'use strict';

function biggestOfThreeNumbers(nums) {
    nums.sort((x1, x2) => x1 - x2);

    console.log(nums[nums.length - 1]);
}

biggestOfThreeNumbers([130,
    5,
    99]);
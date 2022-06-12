// const twoSum = function (nums, target) {
//   var result = [];
//   var done = false;

//   while (!done) {
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//           result.push(i);
//           result.push(j);
//           done = true;
//         }
//         done = true;
//       }
//       done = true;
//     }
//   }
//   return result;
// };

// var nums = [2, 7, 11, 13, 15];
// var target = 9;

const twoSum = function(nums, target) {
  let map = {};
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
    // console.log(map);
  }

  for (let i = 0; i < nums.length; i++) {
    let goal = target - nums[i];
    // console.log(map[goal]);
    if (map.hasOwnProperty(goal) && map[goal] !== i) {
      result.push(i);
      result.push(map[goal]);
      break;
    }
  }
  return result
}

// twoSum(nums, target);
module.exports = twoSum


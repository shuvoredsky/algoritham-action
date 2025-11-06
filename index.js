// const dataCache = new Map()

// const expensiveTask = (id)=>{
//     console.log('ran the expensive task for: ', id)
//     return{id: id, data: `some data for id: ${id}`, timestamp: new Date().getTime()}
// }

// const getData = (id)=>{
//     if(dataCache.has(id)){
// return ;
//     }

//     const data = expensiveTask(id)
//    dataCache.set(id, data)
//    return data;
// }

// console.log(getData(123))

// console.log(dataCache)



// const USER_COUNT = 50000;
// let userA = [];
// let userB = [];

// const createUser = (id)=>({
//     id: `user_${id}`, name: `User ${id}`
// })

// for (let i = 0; i<USER_COUNT; i++){
//     userA.push(createUser(i));
//     userB.push(createUser(i + 25000))
// }
// // console.log(userA)
// // console.log(userB)

// const commonFriendsSlow =(userA, userB)=>{
//     const startTime = performance.now()
//     const commonFriendsSlow = []
//     userA.forEach(userA=>{
//         userB.forEach(userB=>{
//             if(userA.id ===userB.id){
//                 commonFriendsSlow.push(userB)
//             }
//         })
//     })
//     const endTime = performance.now()
// return {count: commonFriendsSlow.length, timeTookToFinish: endTime - startTime}
// }

// //  console.log(commonFriendsSlow(userA, userB))

//  const commonFriendsFast = (userA, userB) => {
//   const startTime = performance.now();
//   const commonFriendsFast = [];

//   const idListA = new Set(userA.map((user) => user.id));
// //   console.log(idListA);

//   userB.forEach((user) => {
//     if (idListA.has(user.id)) {
//       commonFriendsFast.push(user);
//     }
//   });

//   const endTime = performance.now();
//   return {
//     count: commonFriendsFast.length,
//     timeTookToFinish: endTime - startTime,
//     data: commonFriendsFast
//   };
// };

// // console.log(commonFriendsSlow(userA, userB))
// console.log(commonFriendsFast(userA, userB));


// Two sum

  const twoSum = (arr, target)=>{
    const numbMap = new Map()
    for(let i = 0; i<arr.length; i++){
      const currentNumber = arr[i]
      const complement = target - currentNumber;

      console.log('Current Number', currentNumber)
      console.log('Complement', complement)

      if(numbMap.has(complement)){
        return [numbMap.get(complement), i]
      }
      numbMap.set(currentNumber, i)
      console.log(numbMap)
    }

    return undefined;
  }

  console.log(twoSum([2, 11, 7, 15], 9))
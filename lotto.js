/*
1부터 45까지의 숫자 중, 6개를 '비복원추출'한다.
> [1, 3, 5, 11, 25, 32]
(힌트) lodash 활용하면 간단히 가능
*/

const _ = require('lodash')



const getLotto = function() {
    const winner = [1, 15, 19, 23, 28, 42]
    const lotto = _.sortBy(_.sampleSize(_.range(1, 46), 6))
    
    const cnt = _.intersection(lotto, winner).length

    let rank = ''
    if (cnt == 6) {
        rank = '1등입니다.'
    } else if (cnt == 5) {
        rank = '3등입니다.'
    } else if (cnt == 4) {
        rank = '4등입니다.'
    } else if (cnt == 3) {
        rank = '5등입니다.'
    }
    console.log(cnt + ', ' + rank)
}
// let cnt = 0

// lotto.forEach(function(num) {
//     if (winner.includes(num)) {
//         cnt += 1;
//     }
// })

/* 
winner 와 lotto를 비교하여,
몇 개가 일치하는지, 몇 등인지 출력
> 6, 1등
> 5, 3등
> 4, 4등
> 3, 5등
*/

/* 10000번을 돌려서 5등이 몇 번 나오는지 */

let n = 0
while (n < 1000) {
    getLotto()
}
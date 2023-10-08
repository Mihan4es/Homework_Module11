export function countDown(num) {
    let countDownNumber = '';
    for (let i = num; i > 0; i--) {
        countDownNumber += i;
    }
    return countDownNumber;
}
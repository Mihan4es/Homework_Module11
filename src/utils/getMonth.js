export const getMonth = (n) => {
    let monthNumber = n;
    if (monthNumber == 1) {
        return monthNumber = 'January';
    } else if (monthNumber == 2) {
        return monthNumber = 'February';
    } else if (monthNumber == 3) {
        return monthNumber = 'March';
    } else if (monthNumber == 4) {
        return monthNumber = 'April';
    } else if (monthNumber == 5) {
        return monthNumber = 'May';
    } else if (monthNumber == 6) {
        return monthNumber = 'June';
    } else if (monthNumber == 7) {
        return monthNumber = 'July';
    } else if (monthNumber == 8) {
        return monthNumber = 'August';
    } else if (monthNumber == 9) {
        return monthNumber = 'September';
    } else if (monthNumber == 10) {
        return monthNumber = 'October';
    } else if (monthNumber == 11) {
        return monthNumber = 'November';
    } else if (monthNumber == 12) {
        return monthNumber = 'December';
    } else {
        return monthNumber = 'Not a month';
    }
}
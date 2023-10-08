import { getMonth } from '../../utils/getMonth.js'

describe('test for getMonth function', () => {
    it('should show name of the month', () => {
        expect(getMonth(2)).toBe('February'); // pass
        expect(getMonth(13)).toBe('Not a month'); // pass
        expect(getMonth(0)).toBe('February'); // fail
    });
})
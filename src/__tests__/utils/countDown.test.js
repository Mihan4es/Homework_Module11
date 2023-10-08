import { countDown } from '../../utils/countDown.js'

describe('test for countDown function', () => {
    it('should count down with numbers not equal 0', () => {
        expect(countDown(9)).toBe("987654321"); // pass
    }),
        it('should count down with numbers equal 0', () => {
            expect(countDown(0)).toBe("0"); // fail, for correct should be ""
        });
})
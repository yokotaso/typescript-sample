
import {sumOf} from './add';

describe("sumOf", () => {
    it("returns string of sum of two number", () => {
        expect(sumOf(1, 2).toString()).toBe("3")
    })
});
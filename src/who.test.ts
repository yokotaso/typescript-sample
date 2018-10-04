import {getWho} from './who';

describe("getWho", () => {
    it("should return name", () => {
        expect(getWho("test")).toEqual({name: "test"});
    })
});
import { getNextDays } from "./getNextDays"

describe("getNextDays", () => {
    it("given a function, it should return the next 5 days", () => {
        //Execute the test
        const days = getNextDays();
        // console.log(days)
        expect(days.length).toBe(5);
    })
});
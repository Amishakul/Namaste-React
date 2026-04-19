import { sum } from "../sum"

test("sum function should calculate the sum of 2 numbers", ()=>{
    const result = sum(3,4)

    // Assertion
    expect(result).toBe(7);
});

// first arrgument is the defination of the test case and 2nd arrgument is an call back function.
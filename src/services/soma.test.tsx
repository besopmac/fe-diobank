import { soma } from "./soma";

describe("soma", () => {
  it("should sum 1 plus number sent", () => {
    const value = soma(1);
    expect(value).toBe(2);
  })
})
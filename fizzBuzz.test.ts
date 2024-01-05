import { fizzBuzz } from "./fizzBuzz";

describe("fizzBuzz", () => {
  it("returns fizz if num divided by only 3", () => {
    const result = fizzBuzz(12);

    expect(result).toBe("fizz");
  });

  it("returns buzz if only num divided by 5", () => {
    const result = fizzBuzz(20);

    expect(result).toBe("buzz");
  });

  it("returns fizzBuzz if num divided by 3 and 5", () => {
    const result = fizzBuzz(30);

    expect(result).toBe("fizzBuzz");
  });
});

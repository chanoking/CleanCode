import { greeter } from "./greeter";

describe("greeter", () => {
  test("helloworld given default should return 'Hello world!", () => {
    // Arrange
    const expected = "hello world!";
    const sut = greeter();

    // Act
    const actual = sut.helloWorld();

    // Assert
    expect(actual).toBe(expected);
  });

  test("helloPerson given empty name should return 'Hello !", () => {
    // Arrange
    const expected = "Hello !";
    const input = "";

    const sut = greeter();

    // Act
    const actual = sut.helloPerson(input);

    // Assert
    expect(actual).toBe(expected);
  });

  test("helloPerson given name of Peter should return 'Hello Peter!", () => {
    // Arrange
    const expected = "Hello Peter!";
    const input = "Peter";

    const sut = greeter();

    // Act
    const actual = sut.helloPerson(input);

    // Assert
    expect(actual).toBe(expected);
  });
});

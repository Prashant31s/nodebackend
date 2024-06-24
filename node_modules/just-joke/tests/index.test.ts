import { getJoke } from "../src";

describe("joke api test", () => {
  test("random joke", async () => {
    const joke = await getJoke();
    const result = typeof joke === "string";
    expect(result).toBeTruthy();
  });
  test("random food joke", async () => {
    const jokeAboutFood = await getJoke("food");
    const result = typeof jokeAboutFood === "string";
    expect(result).toBeTruthy();
  });
});

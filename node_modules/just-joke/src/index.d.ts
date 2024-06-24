import constants = require("./constants");

declare module "just-joke" {
  type categoryType = (typeof constants.CATEGORIES)[number];
  /**
Get a random joke including chuck norris api [Api link](https://api.chucknorris.io/)

@param undefined - Get a random joke
@param category - Get a random joke from category
@returns A random joke string

@example
```
import { getJoke, category } from "just-joke";
import { CATEGORIES } from 'src/constants';

// Get a random joke
const joke = getJoke();

// Get a random joke, using category
const targetJoke = getJoke(category[0]);
```
*/
  export const getJoke: (category?: categoryType) => Promise<any>;
}

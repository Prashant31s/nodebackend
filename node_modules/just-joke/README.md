# just-joke

This is a simple package that just get a random api, including chuck norris joke

<br>

## User Guide

Using the npm package manager

```
npm i -D just-joke
```

<br>

Using case

```js
import { getJoke, category } from "just-joke";

// Get a random joke
const joke = getJoke();

// Get a random joke, using category
const targetJoke = getJoke(category[0]);
```

<br>

## Api Reference

https://api.chucknorris.io/

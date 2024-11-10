![Computer Science | HashMap](assets/banner.png)

![Make & Leave Project](https://img.shields.io/badge/Make%20%26%20Leave-Project-blue?style=for-the-badge)

# About

A demonstration of what hash maps can do using JavaScript.

# Installation

```bash
npm install @tekksunn/cs-hashmap
```

## Features

The hashmap includes the following methods:

- **set(key, value):** Adds a new key-value pair or updates the value if the key already exists.
- **get(key):** Retrieves the value for the specified key, returning null if the key doesn’t exist.
- **has(key):** Checks if a specific key exists in the map.
- **remove(key):** Removes a key-value pair, if the key exists, and returns true; otherwise, returns false.
- **length():** Returns the number of key-value pairs in the map.
- **clear():** Removes all entries from the map.
- **keys():** Returns an array of all keys in the map.
- **values():** Returns an array of all values in the map.
- **entries():** Returns an array of key-value pairs, each represented as [key, value].

## Usage

To use the `HashMap` in your project, import it and create a new instance:

```javascript
import HashMap from "@tekksunn/cs-hashmap";

const map = new HashMap();
map.set("name", "Alice");
console.log(map.get("name")); // Output: "Alice"
console.log(map.has("name")); // Output: true
map.remove("name");
console.log(map.has("name")); // Output: false
```

## Contributing

Feel free to fork this project and create a pull request if you'd like to contribute. Please make sure to write tests for any new features you add.

## License

This project is open source and available under the [MIT License](LICENSE).

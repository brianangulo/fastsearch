# fastsearch
## Super basic single element array or string searching

fastsearch is a lightway package providing to a very simple and easy way to do single element searches on arrays or strings

## Features

- Takes in an array or string plus a single element key and spits out the index of matched key or false if not found.

## Tech

- [node.js] - js for all
- [typescript] - better intellisense among other advantages

## Installation

fastsearch requires [Node.js](https://nodejs.org/) v10+ to run.

```
npm i

```
Add type module to package.json

```
"type": "module"

```

## Usage
```
import { find, bruteFind } from "fastsearch";

//It takes in arrays or string and performs single element searches. But depending on implementation more can be done.
const array: any[] = [1,2,3,4,5,6];
const string: string= "my little turtle";

//Very fast binary search based algorithm returns index of matched key
find(array, 2) || find(string, "y");  // 1

//Slower sequential search based algorithm also returns index for matched key
bruteFind(array, 2) || bruteFind(string, "y");

```
## Contributions

There are plans to add a C++ add on to handle larger data sets and improved speed. But feel free to make pull requests if you would like
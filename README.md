# readergata-plugin-typings

<!--- [![npm (scoped)](https://img.shields.io/npm/v/@infogata/readergata-plugin-typings)](https://www.npmjs.com/package/@infogata/readergata-plugin-typings) -->

Types for [readergata](https://gitlab.com/elijahgreen/readergata) plugins.

## Installation

```sh
npm i --save-dev @infogata/readergata-plugin-typings
```

## Usage

Configure _tsconfig.json_

```js
{
  "compilerOptions": {
    "typeRoots": [
      "./node_modules/@types",
      "./node_modules/@infogata"
    ]
  }
}
```

or

Import in script

```js
import "@infogata/readergata-plugin-typings";
```

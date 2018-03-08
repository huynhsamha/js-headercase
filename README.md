# js-titlecase

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

JavaScript titlecase string. Use for both node.js and browser


## Installation

`$ npm install --save js-titlecase`

or

`$ yarn add js-titlecase`

## Usage

#### Node.JS

```js
const toTitleCase = require('js-titlecase');

console.log(toTitleCase('string')); // => String
console.log(toTitleCase('camelCase')); // => Camel Case
console.log(toTitleCase('param-case')); // => Param Case
console.log(toTitleCase('PascalCase')); // => Pascal Case
console.log(toTitleCase('UPPER_CASE')); // => Upper Case
console.log(toTitleCase('snake_case')); // => Snake Case
console.log(toTitleCase('sentence case')); // => Sentence Case
console.log(toTitleCase('Title Case')); // => Title Case
console.log(toTitleCase('dot.case')); // => // Dot Case

console.log(toTitleCase('')); // => ''
console.log(toTitleCase(null)); // => ''
console.log(toTitleCase(undefined)); // => ''

console.log(toTitleCase('Abc ___ 123 ___ xYz')); // => Abc 123 X Yz
console.log(toTitleCase('123__abc  ... ?// {#} def 12')); // => 123 Abc Def 12
console.log(toTitleCase('	tab space ??? ________')); // => Tab Space
console.log(toTitleCase('___?||123  abc|| 123..123')); // => 123 Abc 123 123
console.log(toTitleCase('!@#$%  {}|":;" ABC XyZ G123H')); // => Abc Xy z G123h
console.log(toTitleCase(' ^&* #DEFine x: 15 + ==')); // => Define X 15
console.log(toTitleCase('123456789')); // => 123456789
```

#### Browser
##### 1. NPM Package
```html
<script src="./node_modules/js-titlecase/dist/js-titlecase.js"></script>
<!-- Or use minified -->
<script src="./node_modules/js-titlecase/dist/js-titlecase.min.js"></script>
```
##### 2. Download from source
```html
<script src="path/to/js-titlecase"></script>
```
##### Usage
```html
<script>
	console.log(toTitleCase('string')); // => String
	console.log(toTitleCase('camelCase')); // => Camel Case
	console.log(toTitleCase('param-case')); // => Param Case
	console.log(toTitleCase('PascalCase')); // => Pascal Case
	console.log(toTitleCase('UPPER_CASE')); // => Upper Case
	console.log(toTitleCase('snake_case')); // => Snake Case
	console.log(toTitleCase('sentence case')); // => Sentence Case
	console.log(toTitleCase('Title Case')); // => Title Case
	console.log(toTitleCase('dot.case')); // => // Dot Case

	console.log(toTitleCase('')); // => ''
	console.log(toTitleCase(null)); // => ''
	console.log(toTitleCase(undefined)); // => ''

	console.log(toTitleCase('Abc ___ 123 ___ xYz')); // => Abc 123 X Yz
	console.log(toTitleCase('123__abc  ... ?// {#} def 12')); // => 123 Abc Def 12
	console.log(toTitleCase('	tab space ??? ________')); // => Tab Space
	console.log(toTitleCase('___?||123  abc|| 123..123')); // => 123 Abc 123 123
	console.log(toTitleCase('!@#$%  {}|":;" ABC XyZ G123H')); // => Abc Xy z G123h
	console.log(toTitleCase(' ^&* #DEFine x: 15 + ==')); // => Define X 15
	console.log(toTitleCase('123456789')); // => 123456789
</script>
```

## API

### totitlecase(str)

Returns a new string which is titlecase format of str.


## Related
+ [js-camelcase](https://github.com/huynhsamha/js-camelcase)
+ [js-snakecase](https://github.com/huynhsamha/js-snakecase)
+ [js-pascalcase](https://github.com/huynhsamha/js-pascalcase)
+ [js-dotcase](https://github.com/huynhsamha/js-dotcase)
+ [js-textcase](https://github.com/huynhsamha/js-textcase)
+ [js-sentencecase](https://github.com/huynhsamha/js-sentencecase)


[npm-image]: https://img.shields.io/npm/v/js-titlecase.svg?style=flat
[npm-url]: https://www.npmjs.com/package/js-titlecase
[downloads-image]: https://img.shields.io/npm/dm/js-titlecase.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/js-titlecase

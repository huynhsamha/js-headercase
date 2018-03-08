const toTitleCase = require('../index');

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

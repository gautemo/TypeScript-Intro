"use strict";
const buildName = (firstName, lastName) => {
    return lastName ? `${firstName} ${lastName}` : firstName;
};
const myName = buildName('Gaute', 'Meek Olsen');
const noldus = buildName('Noldus');
/* Functional programming */
function func(method) {
    method();
    return method;
}
const sayHi = func(() => console.log('Hi'));
sayHi(); //sayHi is called insided func and afterwards

"use strict";
const buildName = (firstName, lastName) => {
    return lastName ? `${firstName} ${lastName}` : firstName;
};
const myName = buildName('Gaute', 'Meek Olsen');
const noldus = buildName('Noldus');

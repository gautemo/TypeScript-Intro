"use strict";
const text = 'hello';
const text2 = 'hey'; //This also works because type is inferred
const number = 123;
const bool = true;
const array = [];
const array2 = [];
const tuple = [12, 'yes', false];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
})(Color || (Color = {}));
;
const color = Color.Blue;
const anything = 'whatever';
const method = () => console.log('do');
let nothing;
nothing = undefined;
let nothing2 = null;
const neverMethod = () => {
    while (true)
        ;
    console.log('never reached');
};
const obj = { attr1: true, attr2: false };

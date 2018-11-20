"use strict";
const doSomething = (opt) => {
    console.log(opt.autodelete);
};
const opt = {
    size: 1,
    autodelete: true,
    more: 'I can add more'
};
doSomething(opt);

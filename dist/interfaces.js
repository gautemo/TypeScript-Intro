"use strict";
const doSomething = (opt) => {
    console.log(opt.autodelete);
};
const opt = {
    size: 1,
    autodelete: true
};
doSomething(opt);

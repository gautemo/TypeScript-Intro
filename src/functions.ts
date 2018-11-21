const buildName = (firstName: string, lastName?: string) => {
    return lastName ? `${firstName} ${lastName}` : firstName;
};

const myName = buildName('Gaute', 'Meek Olsen');
const noldus = buildName('Noldus');

/* Functional programming */
function func(method: Function):Function{
    method();
    return method;
}

const sayHi = func(() => console.log('Hi'));
sayHi(); //sayHi is called insided func and afterwards
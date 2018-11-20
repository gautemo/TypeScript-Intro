interface Options {
    size: number;
    readonly autodelete: boolean;
    title?: string;
}

const doSomething = (opt: Options) => {
    console.log(opt.autodelete);
}

const opt = {
    size: 1,
    autodelete: true,
    more: 'I can add more'
}

doSomething(opt);
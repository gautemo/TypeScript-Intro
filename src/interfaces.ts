interface Options {
    size: number;
    readonly autodelete: boolean;
    title?: string;
}

const doSomething = (opt: Options) => {
    console.log(opt.autodelete);
}

const opt: Options = {
    size: 1,
    autodelete: true
}

doSomething(opt);
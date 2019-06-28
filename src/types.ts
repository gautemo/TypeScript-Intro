const text: string = 'hello';
const text2 = 'hey'; //This also works because type is inferred

const number: number = 123;

const bool: boolean = true;

const array: string[] = [];
const array2: Array<string> = [];

const tuple: [number, string, boolean] = [12, 'yes', false];

enum Color { Red, Blue };
const color: Color = Color.Blue;

const anything: any = 'whatever';

const method = (): void => console.log('do');

let nothing: undefined;
nothing = undefined;
let nothing2: null = null;

const neverMethod = (): never => {
    while (true);
    console.log('never reached');
}

const obj: object = { attr1: true, attr2: false };

//combining types
let both: string | number = 5;
both = 'changed';
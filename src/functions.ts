const buildName = (firstName: string, lastName?: string) => {
    return lastName ? `${firstName} ${lastName}` : firstName;
};

const myName = buildName('Gaute', 'Meek Olsen');
const noldus = buildName('Noldus');
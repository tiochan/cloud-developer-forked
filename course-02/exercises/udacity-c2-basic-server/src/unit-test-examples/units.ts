// Super Simple Unit Functions

export const add = (a: number, b: number) => {
    return a + b;
    }

export const divide = (a: number, b: number) => {
    if(b === 0) { throw new Error('div by 0') }

    return a / b;
    }

// @TODO try creating a method "concat" to concatenate two strings
// it should take two string paramaters.
// it should return one string combining the two strings.
// it should throw an error if either of the strings are empty.
// ensure your function is exported.

export const concat = (first: string, second: string) => {

    if ( first.length === 0 || second.length === 0 ) {
        throw new Error('parameters can not be empty');
    }

    // Checking ways to concatenate vars in typescript:
    // return first + second;
    // return `${first}${second}`;
    return first.concat(second);
}
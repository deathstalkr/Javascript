//export const capitaliseString = str => str.toUpperCase()

//export default function subtract(x, y) {return x - y}

const capitaliseString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export { capitaliseString }

export const foo = "bar"
export const bar = "foo"
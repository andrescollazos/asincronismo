const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 2000)
            : reject(new Error('Test error'))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something)
}

console.log('Before')
console.log(doSomething())
console.log('After')

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync()
        console.log(something)
    } catch (error) {
        console.error(error)
    }
}

console.log('Before 1')
console.log(anotherFunction())
console.log('After 1')
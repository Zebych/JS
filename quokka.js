/*function finalGrade(exam, projects) {
    if (exam > 90 | projects > 10) {
        return 100
    }
    if (exam > 75 | projects >= 5) {
        return 90
    }
    if (exam > 50 | projects >= 2) {
        return 75
    }
    return 0
}

console.log(finalGrade(4, 3))*/

//Проверка есть ли на каждую открывающуюся скобку закрывающаяся
/*function bracketFunc(str) {
    const stack = []
    let obj = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for (let i = 0; i < str.length; i++) {
        const bracket = str[i]
        if (bracket === '(' || bracket === '{' || bracket === '[') {
            stack.push(bracket)
        } else {
            const lastEl = stack.pop()
            if (bracket === obj[lastEl]) {
                return false
            }
        }
    }
    if (!stack.length) return false
    return true
}

console.log(bracketFunc('()()()()()(){}[]['))*/

// избавиться от дублированных чисел в массиве-вывести только те что не дублируются
/*const arr = [1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9]

function withoutRepeat(array) {
    const testValue = []
    const obj = {}
    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i]
        if (!(currentItem in obj)) {
            obj[currentItem] = 1
        } else {
            obj[currentItem] += 1
        }
    }
    const keys = Object.keys(obj)
    keys.forEach(key => {
        if (obj[key] === 1) {
            testValue.push(key)
        }
    })
    return testValue
}

console.log(withoutRepeat(arr))*/




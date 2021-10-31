// 1 Number
// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3
//
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)// максимальное число с которым работает js
// console.log('Math.pow 53', Math.pow(2, 53) - 1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)//минимальное число с которым работает js
// console.log('MAX_VALUE', Number.MAX_VALUE)// максимальное значение с которым работает js
// console.log('MIN_VALUE', Number.MIN_VALUE)//минимальное значение с которым работает js
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)//положительное значение бесконечности
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)//отрицательное значение бесконечности
// console.log('2 / 0', 2 / 0)
// console.log(Number.NaN) // Not A Number
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))
//
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2)//преобразование строки в целое число
// console.log(parseInt(stringInt) + 2)//преобразование строки в целое число
// console.log(Number(stringInt) + 2)//преобразование строки в целое число
// console.log(+stringInt + 2)//преобразование строки в целое число
// console.log(parseFloat(stringFloat) + 2)//преобразование строки в дробное число
// console.log(+stringFloat + 2)

// console.log(0.4 + 0.2) // 0.6
// console.log(+(0.4 + 0.2).toFixed(1))// обрезает дробное дробное число до указанного количества значение после запятой
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// 2 BigInt// отсекает все значения после запятой,n- означает что тип значения принадлежит BigInt
// console.log(90071992547409919999999n - 9007199254740991999999n)
// console.log(-90071992547409919999999n)
// console.log(90071992547409919999999.23231n) // error

// console.log(10n - 4) // error
// console.log(parseInt(10n) - 4)// преобразует 10n в тип данных number
// console.log(10n - BigInt(4))// преобразует число 4 в тип данных BigInt
// console.log(5n / 2n) // =2n т.к. после деления отсекаются все значения после запятой

// 3 Math
// console.log(Math.E)
// console.log(Math.PI)
//
// console.log(Math.sqrt(25))// выводит корень из 25=>5
// console.log(Math.pow(5, 3))// возводит 5 в 3 степень =>125
// console.log(Math.abs(-42))//меняет знак на противоположное значение -42=>42
// console.log(Math.max(42, 12, 23, 11, 422))// находит максимальное значение из пережанных
// console.log(Math.min(42, 12, 23, 11, 422))// находит минимальное значение из пережанных
// console.log(Math.floor(4.9))//округляет значение в меньшую сторону 4.9=>4
// console.log(Math.ceil(4.9))//округляет значение в большую сторону 4.9=>5
// console.log(Math.round(4.4))//возвращает число, округлённое к ближайшему целому. 4.4=>4
// console.log(Math.trunc(4.9))//возвращает целую часть числа путём удаления всех дробных знаков 4.9=>4
// console.log(Math.random())//возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1)

// 4 Example
function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)// возвращает целое рандомное число в диапазоне от 10 до 42 включительно
}

console.log(getRandomBetween(10, 42))
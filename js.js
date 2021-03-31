// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// let arrNum = [22, 33, 60, 71, 66];
// let arrString = ['Hello', 'Girl', 'Tomato', 'Grass', 'Water']
// let diff = [66, 'hi', true, 'water', 13]
// console.log(arrNum)
// console.log(arrString)
// console.log(diff)
//
//

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


// let home = []
//     home[0] = 'kitchen';
//     home[1] = 7;
//     home[2] = 'bed';
//     home[3] = 'chill';


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//   document.write('<div> My name is Nikita </div>')
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div> My name' + [i] + 'is Nikita </div>')
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0
//
// while (i < 20) {
//
//     document.write('<div> <h1> Hello world </h1> </div>')
//
//     i++
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0
//
//     while (i < 20) {
//
//     document.write(('<div> <h1> Hello' + [i] + 'world </h1> </div>'))
//     i++
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numbers = [27, 12, 23, 67, 45, 33, 8, 90, 77, 30]
// for (let i = 0; i < 10; i++) {
// console.log(numbers)
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let wordsString = ['Banana, Sun, Watermelon, Grass, Water, Sand, Tea, Cup, Shirts, Money']
// for (let i = 0; i < 10; i++) {
//
//     console.log(wordsString)
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let mix = ['like,song', 23, true, 'table, fish, mother', 99, 11, 66]
//     for (i = 0; i < 10; i++) {
//         console.log(mix)
//     }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let all = ['earth, house', true, false, 211, 999, true, 'video, cherry', false]
// for (let i = 0; i < all.length; i++) {
//     if (typeof all[i] === "boolean")
//         console.log(all [i])
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let differentNum = ['keyboard', 34, true, 'rabbit, dog', false, true, 84, false, 31]
// for (let i = 0; i < differentNum.length; i++) {
//     if (typeof differentNum[i] === "number")
//     console.log(differentNum [i])
// }


// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let differentStr = [34, 49, 'phone, highlight,', true, 55, 'apple', false, 441, 'pillow']
// for (let i = 0; i < differentStr.length; i++)
//     if (typeof differentStr[i] === 'string')
//     console.log(differentStr [i])


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let anothMix = []
// anothMix[0] = 'Hi'
// anothMix[1] = 'Paper'
// anothMix[2] = true
// anothMix[3] = 'rabbit'
// anothMix[4] = 44
// anothMix[5] = 'ice-cream'
// anothMix[6] = 666
// anothMix[7] = 'green'
// anothMix[8] = false
// anothMix[9] = true
// anothMix[10] = 111
//     for (let i = 0; i < 10; i++) {
//         console.log(anothMix)
//     }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i<10; i++) {
//     console.log('step : ', i)
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i<100; i++) {
//     console.log('step : ', i)
//     document.write(`step : ${i} <br>`)
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i<200; i = i + 2) {
//     console.log('step : ', i)
//     document.write(`step : ${i} <br>`)
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i <100; i++) {
//     if (i % 2 === 0) {
//         console.log('step : ', i)
//         document.write(`step : ${i} <br>`);
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 1; i <100; i+=2) {
//         console.log('step : ', i)
//         document.write(`step : ${i} <br>`);
//     }


// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let array = ['a', 'b', 'c']
// for (let i = 1; i <= 3; i++) {
//         array.push(i)
// }
// console.log(array)


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1]

// let array = [1, 2, 3,]
// let revArray = array.reverse();
// console.log(revArray)


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let array = [1, 2, 3]
// for (let i = 4; i <=6; i++) {
//     array.push(i)
// }
// console.log(array);


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let array = [1, 2, 3]
// for (let i = 6; i >=4; i--) {
//     array.unshift(i)
// }
// console.log(array)


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// const string = ['js', 'css', 'jq']
// console.log(string);
// const one = string.shift();
// console.log('one',one)
// console.log('string',string)


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// const string = ['js', 'css', 'jq']
// console.log(string);
// const one = string.pop();
// console.log('one',one)
// console.log('string',string)


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

// const numb = [1, 2, 3, 4, 5];
// console.log(numb.slice(3))


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2]

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.slice(0,2))


// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5]. ************************************************************************************************

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(start3:, deleteCount:0, items: 'a', 'b',' c');
// console.log(numbers);


// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']*************************************************************************************



// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними

// const array = [27, 12, 23, 67, 45, 33, 8, 90, 77, 30];
// for (let i = 0; i < array.length; i++) {
//     if (array[i]%2 === 0){
//         console.log(array[i])
//     }
//
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// const array = [27, 12, 23, 67, 45, 33, 8, 90, 77, 30];
// let newArray = []
//
// for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i])
// }
// console.log(newArray);


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// const array = [27, 12, 23, 67, 45, 33, 8, 90, 77, 30];
// let newArray = []
//
// for (let i = 0; i < array.length; i++) {
//     newArray[i]=(array[i])
// }
// console.log(newArray);


// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1. перебрати його циклом while

// let numbers = [2,17,13,6,22,31,45,66,100,-18]
// while (i = 0) {
//     i < 10; i++
// }
// console.log(numbers)

// 2. перебрати його циклом for

 //let numbers = [2,17,13,6,22,31,45,66,100,-18]
 //for (let i = 0; i < 10; i++) {
     //console.log(numbers)
 //}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let numbers = [2,17,13,6,22,31,45,66,100,-18]
// let i = 1
// while (i < numbers.length) {
//     console.log(i)
//     i += 2
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let numbers = [2,17,13,6,22,31,45,66,100,-18]
// for (i = 1; i < 10; i+=2);
// console.log(i)

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let numbers = [2,17,13,6,22,31,45,66,100,-18]
// let i = 0;
// while (i <numbers.length) {
//     if (numbers [i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let arr = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = 0; i < arr.length; i++)
// {
//     if ((arr[i] % 2) === 0)
//     {
//         console.log(arr[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// const array = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = 0; i < array.length; i++) {
//     if (array[i]%3 === 0){
//     array[i] = 'okten'
//     }
// }
// console.log(array)

// 8. вивести масив в зворотньому порядку.

// let array = [2,17,13,6,22,31,45,66,100,-18];
// a = array.reverse();
// console.log(a);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)



// let numbers = [2,17,13,6,22,31,45,66,100,-18]
// for (let i = numbers.length-1; i >= 0; i--) {
//     console.log(numbers[i])
// }


// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

// let array1 = []
// let array2 = []
// for (let i = 0; i < 50; i++) {
//     i % 2 === 0 ? array1[i] = i : array2[i] = i
// }
// console.log(array1);
console.log(array2);
//
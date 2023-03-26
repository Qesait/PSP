// Задание 5 (3 уровень)
// Напишите функцию sort, которая будет сортировать буквы в словах по алфавиту, 
// а потом получившиеся слова в предложении — тоже. 
// Первую букву каждого слова она сделает прописной, остальные — строчными


function sortWordsAndLetters(str) {
    return str.split(' ')
      .map(word => word.split('').map(chr => chr.toLowerCase()).sort().join(''))
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .sort()
      .join(' ');
  }
  
console.log(sortWordsAndLetters('Lorem ipsum dolor sit amet'));

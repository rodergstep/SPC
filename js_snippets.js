Window:
DOM (document...)
BOM (navigator, screen, location, frames, history, XMLHttpRequest)
Javascript (Object, Array, Function...)
_________________________________________________________________
Випадкове ціле число від min до max включно:
var rand = min + Math.floor(Math.random() * (max + 1 - min));
_______________________________________________________________
Перевірка на число:
function isNumeric(n) {
 return !isNaN(parseFloat(n)) && isFinite(n)
}
________________________________________________________________
Повністю клонувати масив:
for (var i = 0; i < arr.length; i++) arr2[i] = arr[i];
_________________________________________________________________
Сортування масиву чисел:
function compareNumeric(a, b) {
 return a - b;
}
__________________________________________________________________
Видалити елементи з масиву за певної умови:
for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (val < a || val > b) {
      arr.splice(i--, 1);
    }
  }
__________________________________________________________________
Випадовий порядок у масиві:
function sorting() {
    return Math.random() - 0.5;
}
__________________________________________________________________
Пошук найбільш раннього журналу в масиві:
function Journal(date) {
  this.date = date;

  this.formatDate = function(date) {
    return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
  };

  this.getTitle = function() {
    return "Выпуск от " + this.formatDate(this.date);
  };

}

Journal.compare = function(journalA, journalB) {
  return journalA.date - journalB.date;
};

// использование:
var journals = [
  new Journal(new Date(2012, 1, 1)),
  new Journal(new Date(2012, 0, 1)),
  new Journal(new Date(2011, 11, 1))
];

function findMin(journals) {
  var min = 0;
  for (var i = 0; i < journals.length; i++) {
    // используем статический метод
    if (Journal.compare(journals[min], journals[i]) > 0) min = i;
  }
  return journals[min];
}

alert( findMin(journals).getTitle() );
_________________________________________________________________
Функція, що перевіряє тип:
function getClass(obj) {
  return {}.toString.call(obj).slice(8, -1);
}
_________________________________________________________________
Просунута техніка для відловлювання помилок:
function ReadError(message, cause) {
  this.message = message;
  this.cause = cause;
  this.name = 'ReadError';
  this.stack = cause.stack;
}

function readData() {
  var data = '{ bad data }';

  try {
    // ...
    JSON.parse(data);
    // ...
  } catch (e) {
    // ...
    if (e.name == 'URIError') {
      throw new ReadError("Ошибка в URI", e);
    } else if (e.name == 'SyntaxError') {
      throw new ReadError("Синтаксическая ошибка в данных", e);
    } else {
      throw e; // пробрасываем
    }
  }
}

try {
  readData();
} catch (e) {
  if (e.name == 'ReadError') {
    alert( e.message );
    alert( e.cause ); // оригинальная ошибка-причина
  } else {
    throw e;
  }
}
______________________________________________________________

Семейство методов для вставки HTML/элемента/текста в произвольное место документа:

elem.insertAdjacentHTML(where, html)
elem.insertAdjacentElement(where, node)
elem.insertAdjacentText(where, text)

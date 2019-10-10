//Важно! Методы по ДЗ С1.8 описаны внизу под номерами 6 и 7.

//Функция jQuery (селектор, контекст) предназначена для выполнения поиска элементов в DOM-дереве
// на основании селектора, указанного в качестве первого аргумента.
function jQuery (selector, context = document){
    //метод Array.from(), который создает массив из объекта NodeList.
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
}

//Так как мы получаем всегда массив элементов, то нам надо написать функцию, которая будет перебирать
// элементы и работать с каждым из них.
//на вход функцию и вызвать ее для каждого элемента, передав в функцию this, который будет указывать на элемент
jQuery.prototype.each = function (fn){
    //Первый аргумент метода call()  — указатель на this элемента, а второй и третий — аргументы, с которыми
    // будет вызываться наша функция fn.call().
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

//1.метод, который вешает обработчик на наши элементы.
jQuery.prototype.click = function(fn){
    //Перебрали все элементы и для каждого добавили обработчик клика.
	this.each(element => element.addEventListener('click', fn))
	return this
}
//2. Метод hide() скрывает все выбранные элементы из DOM (указанный элемент и всех его потомков).
jQuery.prototype.hide = function(){
	this.each(element => element.style.display = 'none')
  return this;
}
//3. Метод show() показывает все выбранные элементы из DOM (указанный элемент и всех его потомков).
jQuery.prototype.show = function(){
	this.each(element => element.style.display = '')
  return this;
}
//4. Метод remove() удаляет все выбранные элементы из DOM (указанный элемент и всех его потомков).
jQuery.prototype.remove = function(){
    this.each(element => element.remove())
    return this;
}

//5. Метод class() меняет название класса у выбранного элемента
jQuery.prototype.class = function(name){
	this.each(element => element.className = name)
    return this;
}

//6. html() возвращает(не задан параметр при вызове функции) или изменяет html-содержимое всех выбранных элементов
jQuery.prototype.HTML=function (newHTML) {
    if (newHTML) {
        this.each(element => element.innerHTML=newHTML)
        return this
    }
    else {
        return this
    }
}

//7. Метод text() возвращает (не задан параметр при вызове функции) или изменяет текстовое содержимое выбранных элементов.
jQuery.prototype.Text=function (newText) {
    if (newText) {
        this.each(element => element.innerText=newText)
        return this
    }
    else {
        return this
    }
}



const $ = (e) => new jQuery(e);

//$('h1').HTML('<h1><i>пр</i></h1>') //Раскоментировать для проверки метода HTML()
//$('h1').Text("rere") //Раскоментировать для проверки метода Text()





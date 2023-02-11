let innInput = document.querySelector('#INN')
let innCheck = document.querySelector('#innCheck')
let innResult = document.querySelector('.innResult')

let regExp = /^\d{14}$/

innCheck.onclick = () => {
    if (regExp.test(innInput.value)){
        innResult.innerHTML = 'OK'
        innResult.style.color = 'green'
}   else {
        innResult.innerHTML = 'NOT'
        innResult.style.color = 'red'
}
}
// let box = document.querySelector('.box')
// let block = document.querySelector('.block')
let box = 0

    // box.onclick = function() {
    //   let start = Date.now();
    //
    //   let timer = setInterval(function() {
    //     let timePassed = Date.now() - start;
    //
    //     box.style.left = timePassed / 5 + 'px';
    //
    //     if (timePassed > 2000) clearInterval(timer);
    //
    //   }, 20);
    // }

function recursionAnimation(){
    box = box +1;
    if (box>450) return;
    document.querySelector('.box').style.left = box + 'px';
    animation();
}
function animation(){
    setTimeout(recursionAnimation,10)
}
animation()
//2) используя рекурсию необходимо заставить блок двигаться по странице.
// Создайте один большой блок и один маленький внутри него. Задайте большому блоку position: relative, а малому absolute.
// И изменяйте параметр позиции малого блока (.style.left=${переменная}px).
//Большому блоку задайте высоту и ширину в 500px, А маленькому 50px на 50px
// Нужно чтобы маленький блок подвинулся слева на право внутри большого блока и остановился.
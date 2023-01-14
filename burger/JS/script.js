
var button = document.querySelector('#cheeseburger');
var remove_button = document.querySelector('#cheeseburgerClear');
var cat = document.querySelector('#cat');


button.addEventListener('click', () => {
//    デバッグ用
    console.log('click');

//    バーガーを生成する
    var cheeseburger = document.createElement('div');
    cheeseburger.classList.add('cheeseburger');
    cat.appendChild(cheeseburger);

//    バーガーが一つ以上ある場合バーガーを削除するボタン生成
    var cheeseburgers = document.getElementsByClassName('cheeseburger');
//  デバッグ用
    console.log("バーガーが追加されました、数：" + cheeseburgers.length + "個");
    if(cheeseburgers.length <= 1) {
	remove_button.style.display = "inline-block";
    }

});


remove_button.addEventListener('click', () => {
//  デバッグ用
    console.log('clicked');

//  バーガーを削除する
    var cheeseburgers = document.getElementsByClassName('cheeseburger');
    cheeseburgers[0].classList.remove('cheeseburger');
    console.log("バーガーが減りました、数：" + cheeseburgers.length + "個");

//    バーガーがなくなったら削除ボタンをなくす
    if(cheeseburgers.length == 0) {
	//  デバッグ用
	remove_button.style.display = "none";
	console.log('バーガーがなくなりました');
    }
});

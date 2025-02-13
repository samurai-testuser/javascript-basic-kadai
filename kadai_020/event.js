// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {

    // 新しくtxt要素を作成し、定数に代入する
    const txt = document.createElement('txt');

    // 作成したtxt要素にテキストを追加する
    txt.textContent = 'ボタンをクリックしました';
    
    // text要素の文章を書き換える
    document.getElementById('text').textContent=txt.textContent;
});
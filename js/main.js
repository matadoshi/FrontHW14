let score=document.getElementById('score');
function decrease(){
    let num=score.textContent;
    num--;
    score.textContent=num;
}
function reset(){
    score.textContent=0;
}
function increase(){
    let num=score.textContent;
    num++;
    score.textContent=num;
}
//실시간 디지털 시곋
function startTIme(){
    let today1 = new Date();
    let h = today1.getHours();
    let m = today1.getMinutes();
    let s = today1.getSeconds();

    h = checkNum(h);
    m = checkNum(m);
    s = checkNum(s);
    document.getElementById('clock').innerHTML=h+':'+m+':'+s;
    let t = setTimeout(startTIme,500);

    function checkNum(i ){
        if(i<10){
            i = '0'+i;
        }
        return i;
    }
    //함수 실행하기
    
}
startTIme();
    //다크모드 함수
    let n = 1;
    function dark_mode(){
        if(n==1){
            document.bgColor='#333';
            
            document.fgColor='#fff';
            n=0;
            
        }
        else{
            document.bgColor='#fff';
            document.fgColor='#000';
            n=1;
        }
    }

    //이벤트
    const d_btn = document.querySelector('#dark_btn');
    d_btn.addEventListener('click',function(){
       
        dark_mode();
        
    });
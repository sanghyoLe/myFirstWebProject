    var num1 = Math.ceil(Math.random()*9);
    var num2 = Math.ceil(Math.random()*9);
    var Solution = num1 * num2;
    var anwser = document.createElement('div');
    anwser.textContent= String(num1) + '곱하기' + String(num2) + '= ?';
    document.body.append(anwser);
    var 폼 = document.createElement('form');
    document.body.append(폼);
    var 입력창 = document.createElement('input');
    폼.append(입력창);
    var 버튼 = document.createElement('button');
    버튼.textContent = '입력!';
    폼.append(버튼);
    var 결과창 =document.createElement('div');
    document.body.append(결과창);
    폼.addEventListener('submit',function(이벤트){
        이벤트.preventDefault();
    if(Solution === Number(입력창.value)){
        결과창.textContent = '딩동댕';
        num1 = Math.ceil(Math.random()*9);
        num2 = Math.ceil(Math.random()*9);
        Solution = num1 * num2;
        anwser.textContent= String(num1) + '곱하기' + String(num2) + '= ?';
        입력창.value ='';
        입력창.focus();   
    }
    else{
        결과창.textContent ='땡'    
        입력창.value ='';
        입력창.focus();}
    })

    
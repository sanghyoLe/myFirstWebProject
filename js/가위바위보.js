var 이미지좌표 = '0';
var 가위바위보 = {
    바위: '0',
    가위: '-135px',
    보: '-275px'
};

function 컴퓨터의선택(이미지좌표) {
     return Object.entries(가위바위보).find(function(v) {
        return v[1] === 이미지좌표;
    })[0];    
}

var 인터벌;
 function 인터벌메이커(){
     인터벌 = setInterval(() => {
    if(이미지좌표 === 가위바위보.바위) {
        이미지좌표 = 가위바위보.가위;}
    else if (이미지좌표 === 가위바위보.가위){ 
        이미지좌표 = 가위바위보.보;
    }else{
        이미지좌표 = 가위바위보.바위;
    }
    document.querySelector('#computer').style.background =
    'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)'+ 이미지좌표 +' 0';
    }, 100);
 }
    인터벌메이커();
    var 점수표 ={
        가위:1,
        바위:0,
        보:-1
    };
    
    var 내선택 = document.createElement('h1');
    document.body.append(내선택);
    var 컴퓨터선택 = document.createElement('h1');
    document.body.append(컴퓨터선택);
    var 결과 = document.createElement('h1');
    document.body.append(결과);
    document.querySelectorAll('.btn').forEach(function(btn){
        btn.addEventListener('click',function(){
            clearInterval(인터벌);
            setTimeout(function(){
              인터벌메이커();
            },1000);
            
            var 나의선택 = this.textContent;
            var 승패 = 점수표[나의선택] - 점수표[컴퓨터의선택(이미지좌표)];
            if(승패 ===0)
            결과.style.color = 'green';
            else if(승패 === -1 || 승패 === 2)
            결과.style.color = 'blue';
            else
            결과.style.color = 'red';
            if(승패 === 0){
            내선택.textContent = '나의선택: ' + 나의선택;
            컴퓨터선택.textContent ='컴퓨터의선택 : ' + 컴퓨터의선택(이미지좌표); 
            결과.textContent = '비겼습니다';
            }else if(승패 === -1 || 승패 === 2){
            내선택.textContent = '나의선택: ' + 나의선택;
            컴퓨터선택.textContent ='컴퓨터의선택 : ' + 컴퓨터의선택(이미지좌표);
            결과.textContent = '이겼습니다';
            }else{
            내선택.textContent = '나의선택: ' + 나의선택;
            컴퓨터선택.textContent ='컴퓨터의선택 : ' + 컴퓨터의선택(이미지좌표);
            결과.textContent = '졌습니다';}
           
          
        });
    });
    
// //가위 : 1, 바위 :0, 보: -1
// 나 \컴퓨터   가위 바위 보
//        가위 1 1  1 0  1 -1
//        바위 0 1  0 0  0 -1
//        보  -1 1 -1 0 -1 -1
var 바디 = document.body;
var 테이블 = document.createElement('table');
var 줄들 = [];
var 칸들 = [];
var 턴 ='X';
var 결과 = document.createElement('h1');

바디.appendChild(결과);
function 결과체크(몇줄,몇칸) { 
   var 승리여부 = false;
if (
칸들[몇줄][0].textContent === 턴 &&
칸들[몇줄][1].textContent === 턴 && 
칸들[몇줄][2].textContent === 턴){
승리여부 = true;
}
//세로줄 검사
if(칸들[0][몇칸].textContent === 턴 &&
칸들[1][몇칸].textContent === 턴 &&
칸들[2][몇칸].textContent === 턴
) { 
승리여부 = true;
}
//대각선 검사
if(칸들[0][0].textContent === 턴 &&
   칸들[1][1].textContent === 턴 &&
   칸들[2][2].textContent === 턴 ){
    승리여부 =true;
}
if(칸들[0][2].textContent === 턴 &&
   칸들[1][1].textContent === 턴 &&
   칸들[2][0].textContent === 턴 ){
    승리여부 =true; 
}
return 승리여부;
};
function 초기화(무승부){
    if(무승부){
    결과.textContent= '무승부';
    }else {   
    결과.textContent = 턴  + '님의 승리';}
       //초기화 코드
        
        setTimeout(function(){
        칸들.forEach(function (줄) {
          줄.forEach(function (칸) {
                칸.textContent ='';
        });
        });
        턴 = 'X';
    },1000);
   
};
var 비동기콜백 = function(이벤트){
    if(턴 === 'O'){
        return;
    }
    var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
    var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
    if(칸들[몇줄][몇칸].textContent !== ''){
       }else{ //빈 칸이면
       칸들[몇줄][몇칸].textContent = 턴;
       //세칸 다 채워졌나?
        var 승리여부 = 결과체크(몇줄,몇칸);}
        // 모든 칸 다 채워 졌는지 검사
        var 후보칸 = [];
        칸들.forEach(function(줄){
            줄.forEach(function(칸){
                후보칸.push(칸);
            });
        });   
        후보칸 = 후보칸.filter(function (칸) { return !칸.textContent});
if(승리여부){
   초기화(false);
    }else if(후보칸.length === 0){
     초기화(true);
    }else{ // 다 안찼으면
        if(턴 ==='X'){ 
        턴 ='O';
        }
        setTimeout(function(){
           
            
            var 선택칸 = 후보칸[Math.floor(Math.random() * 후보칸.length)]; 
            선택칸.textContent = 턴;
            var 몇줄 = 줄들.indexOf(선택칸.parentNode);
            var 몇칸 = 칸들[몇줄].indexOf(선택칸);
            var 승리여부 = 결과체크(몇줄,몇칸);

            
            if(승리여부){
                초기화();}
            턴 ='X';
         },1000);
        
        }
    };

for(var i=1;i<=3;i += 1)
{
    var 줄 = document.createElement('tr');
    줄들.push(줄);
    칸들.push([]);
    for(var j=1;j<=3;j += 1){
        var 칸 = document.createElement('td');
        칸.addEventListener('click',비동기콜백);
        칸들[i - 1].push(칸);
        줄.appendChild(칸);
    }
    테이블.appendChild(줄);
}
바디.appendChild(테이블);
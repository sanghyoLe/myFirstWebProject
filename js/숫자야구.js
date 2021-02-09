var 바디 = document.body
var 숫자후보;
var 숫자배열;
var 답모음 = [];
var 답;
function 숫자뽑기() {
    숫자후보= [1,2,3,4,5,6,7,8,9];
    숫자배열 = [];
for(var i =0 ; i< 4 ; i += 1 ){
    var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9-i)),1)[0];
    숫자배열.push(뽑은것);}
}
    숫자뽑기();
var 결과 = document.createElement('h1');
바디.append(결과);
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
폼.append(입력창);
입력창.maxLength = 4;
입력창.type = 'text';
var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
폼.append(버튼);
    var 틀린횟수 =0;
    var 입력한값 = document.createElement('h1');
    document.body.append(입력한값);
    
    폼.addEventListener('submit',function(이벤트){ // 엔터 입력
        이벤트.preventDefault();
        답 = 입력창.value;
        답모음.push(답);
        입력한값.textContent = '입력한 값 : ' + 답모음;

        if(답 === 숫자배열.join('')) {
            결과.textContent='홈런!  새로운 숫자로 다시 시작합니다!';
            입력창.value = '';
            입력창.focus(); 
            틀린횟수 =0;
            숫자뽑기();
            답모음 =[];
          
        }
        else{ // 답 X
        var 답배열 = 답.split('');
        var 스트라이크 = 0;
        var 볼  =0;
        틀린횟수 += 1;
            if(틀린횟수 > 10 ){
            결과.textContent = '10번 넘게 틀려서 실패! 답은:' + 숫자배열.join(',') +'입니다!';
            입력창.value='';
            입력창.focus();
            숫자뽑기();
            틀린횟수=0;
            답모음 =[];
            }
            else{
                
                for ( var i = 0; i< 4;i +=1){
                    if(Number(답배열[i])===숫자배열[i]){
                        스트라이크 += 1;
                    } else if(숫자배열.indexOf(Number(답배열[i])) > -1 )
                    볼 += 1;
                }
                결과.textContent =스트라이크 + '스트라이크' + 볼 + '볼입니다';
                입력창.value ='';
                입력창.focus();             
    
            }}    
  
    
    });

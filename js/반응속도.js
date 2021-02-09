var 스크린 = document.querySelector('#screen');
var 결과 = document.createElement('h1');
document.body.append(결과);
var 시작시간;
var 끝시간;
var 기록 = [];
var 타임아웃;
스크린.addEventListener('click', function () {

    if (스크린.classList.contains('waiting')) { //현재 준비 상태 파악
        스크린.classList.remove('waiting');
        스크린.classList.add('ready');
        스크린.textContent = '초록색이 되면 클릭하세요.';
        타임아웃 = setTimeout(function () {
            시작시간 = new Date();
            스크린.click();
        }, Math.ceil(Math.random() * 1000) + 2000);
    } else if (스크린.classList.contains('ready')) {
        if (!시작시간) {
            clearTimeout(타임아웃);
            스크린.classList.remove('ready');
            스크린.classList.add('waiting');
            스크린.textContent = '너무 성급하시군요!';
        } else {
            스크린.classList.remove('ready');
            스크린.classList.add('now');
            스크린.textContent = '클릭하세요!';
        }
    } else if (스크린.classList.contains('now')) {
        끝시간 = new Date();
        console.log((끝시간 - 시작시간) / 1000, 'ms');
        기록.push((끝시간 - 시작시간) / 1000);
        시작시간 = null;
        끝시간 = null;
        결과.textContent = 기록 + '초';
        기록 = [];
        스크린.classList.remove('now');
        스크린.classList.add('waiting');
        스크린.textContent = '클릭해서 시작하세요.';
    }
});
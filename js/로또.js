var button = document.getElementById("button");
var 후보군 = Array(45).fill().map(function (요소, 인덱스) {
    return 인덱스 + 1;
});
var 셔플 = [];
while (후보군.length > 0) {
    var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
    셔플.push(이동값);
}
var 보너스 = 셔플[셔플.length - 1];
var 당첨숫자들 = 셔플
    .slice(0, 6)
    .sort(function (p, c) {
        return p - c;
    });
var 결과창 = document.querySelector('#결과창');

function 공색칠하기(숫자, 결과창) {
    var 공 = document.createElement('div');
    공.textContent = 숫자;
    공.style.display = 'inline-block';
    공.style.border = '1px solid black';
    공.style.webkitBorderRadius = '25px';
    공.style.width = '50px';
    공.style.height = '50px';
    공.style.textAlign = 'center';
    공.style.marginRight = '10px';
    공.className = '공아이디' + 숫자;
    공.style.fontSize = '35px';
    공.style.fontFamily = 'sanf-sarif';
    var 배경색;
    if (숫자 <= 10) {
        배경색 = 'red';
    } else if (숫자 <= 20) {
        배경색 = 'orange';
    } else if (숫자 <= 30) {
        배경색 = 'yellow';
    } else if (숫자 <= 40) {
        배경색 = 'blue';
    } else {
        배경색 = 'green';
    }



    공.style.background = 배경색;
    결과창.appendChild(공);
}


for (var i = 0; i < 당첨숫자들.length; i++) {
    (function 완료(j) {
        setTimeout(function () {
            공색칠하기(당첨숫자들[j], 결과창);
        }, (1000 * j) + 1000);
    })(i);

}
setTimeout(function 비동기콜백함수() {
    var 칸 = document.querySelector('#보너스');
    공색칠하기(보너스, 칸);
}, 7000);
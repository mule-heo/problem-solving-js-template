// 한 줄짜리 입력받기 - 한 줄만 받아오기가 아닙니다.
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

// 한 줄에 공백으로 구분된 데이터 입력받기
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

// 여러 줄 입력받기
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 행렬 입력받기
// 데이터에 공백이 없으면 split 인자를 빈 문자열로 변경하세요. (예: 10101)
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
.map(line => line.split(' ')); 

// 데이터를 숫자로 매핑하기. 상황에 따라 위의 입력 받아오기에 체이닝하세요.
input.map(Number);
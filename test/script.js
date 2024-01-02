const fs = require('fs');
const result = fs.readFileSync('code/debug.txt').toString().trim().split('\n');
const answer = fs.readFileSync('code/expected-output.txt').toString().trim().split('\n');

// answer가 빈 문자열인 경우
if (answer.length === 1 && answer[0] === ""){
  console.error("기대되는 출력이 없습니다.");
  console.error("code/expected-output.txt에 예상 결과를 입력해 주세요.");
  return;
}

if (result.length !== answer.length){
  if (result.length < answer.length){
    console.error('기대되는 결과보다 적은 결과가 반환되었습니다.')
  } else {
    console.error('기대되는 결과보다 많은 결과가 반환되었습니다.')
  }
  return;
}

const testResult = [];
let passed = 0;
for (let i = 0; i < answer.length; i++){
  if (answer[i] !== result[i]){
    testResult.push(`× ${result[i]}`);
  } else {
    testResult.push(`√ ${result[i]}`);
    passed++;
  }
}

console.log(`test ${passed === answer.length ? 'passed √' : 'failed ×'}`);
console.log(testResult.join('\n'));
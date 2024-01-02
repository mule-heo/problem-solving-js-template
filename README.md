# problem-solving-js-template

로컬 환경에서 알고리즘 문제를 해결하는 것을 목적으로 합니다.

입력부터 출력까지 직접 수행해야 하는 [Baekjoon Online Judge](https://www.acmicpc.net/)의 스타일을 고려하였습니다.

[프로그래머스](https://school.programmers.co.kr/learn/challenges?order=recent), [LeetCode](https://leetcode.com/problemset/)와 같이 함수를 완성한 뒤 반환된 값으로 정답 여부를 판별하는 방식은 고려되지 않았습니다.

<br>

# 디렉토리

## `code`

- `input.txt`: 코드 실행에 사용될 입력을 저장하는 파일입니다. 해결하고자 하는 문제의 입력을 복사하여 붙여넣은 뒤 저장합니다.
- `script.js`: 실제 실행될 코드입니다. BOJ 코드 제출에 사용되는 코드와 동일한 형태로 작성합니다.
- `debug.txt`: 코드 실행 과정에서 출력된 내용이 저장되는 파일입니다. (`console.log`)
- `expected-output.txt`: 코드 실행 후 기대되는 출력을 저장하는 파일로써, 스크립트 실행 결과를 테스트하는 데에 사용됩니다. `npm run test` 명령어를 사용하고자 하는 경우, 해결하려는 문제의 출력을 복사하여 붙여넣은 뒤 저장합니다.

## `template`

- `input.js`: 입력 가져오기와 관련된 코드를 몇 줄 적어 놓았습니다.

## `test`

- `script.js`: `code` 디렉토리의 `debug.txt`, `expected-output.txt`를 비교하여 테스트합니다.

<br>

# 실행 명령어

## `npm run start`

`code/input.txt`로부터 입력을 받아 `code/script.js` 파일을 실행합니다.

스크립트 실행 결과는 터미널에 그대로 출력됩니다.

## `npm run debug`

`npm run start`와 동일한 동작을 수행합니다.

단, 스크립트 실행 결과는 터미널에 출력되지 않고 `code/debug.txt`에 저장됩니다.

## `npm run test`

> 이 명령어를 실행하기 전에 먼저 예상 출력을 `code/expected-output.txt`에 저장하여야 합니다.

`npm run debug`를 먼저 수행하여 `code/debug.txt`를 생성합니다.

이후 `test/script.js`를 실행하여 `code/debug.txt`, `code/expected-output.txt` 두 파일의 내용을 비교합니다.

결과의 비교는 두 파일로부터 각각 입력을 받고 줄 단위로 비교하는 방식으로 진행됩니다.
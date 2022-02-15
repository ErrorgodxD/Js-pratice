const pi = 3.14159265358979  // pi라는 변수와 3.14의 숫자데이터가 할당되어 있음
console.log(pi)

const str = pi.toFixed(2) // 숫자데이터에서 사용할수 있는 method인 toFixed를 사용 
//toFixed라는 method실행된 결과가 str이라는 변수에 할당됨 뒤에 (2)는 몇번째 자리까지인지 인수로 명시 가능 
console.log(str) // 3.14만 출력됨
console.log(typeof str) // 데이터의 타입 확인  string이라는 문자데이터 출력 toFixed라는 메소드가 실행되면 문자데이터가 반환이 된다. 그래서 변수를 str로 지정해준것



// parseInt, parseFloat은 Js에서 제공하는 전역함수들 (숫자와 관련된 대표적인 함수), parse는 분석, int는 integer 정수를 의미 
const integer = parseInt(str)  // 숫자를 추출해서 정수로 반환됨 3만 출력
const float = parseFloat(str) // parseFloat은 소숫점 자리의 숫자도 유지하면서 문자데이터>숫자데이터로 변환해줌 3.14 출력
console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)  // integer 와 float의 데이터 타입 확인
// 숫자가 들어있는 문자 데이터를 숫자로 변환해서 사용해야 할땐 parseInt, parseFloat을 사용한다
// 소숫점 자리 포함해서 사용할 경우는 parseFloat, 정수 부분만 사용시에는 parseInt를 사용한다..
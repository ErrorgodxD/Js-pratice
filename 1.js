const str = 'error10901@gmail.com'
// 정규표현식 (RegExp)

console.log(str.match(/.+(?=@)/))   // match는 일치 시켜서 출력시키는 것

// /.+(?=@)/)  >> @기호: 앞쪽 문자 일치.  .은 한글자를 의미 +는 그 한글자들 중에 최대한 많이 일치 시키겠다 라는 의미

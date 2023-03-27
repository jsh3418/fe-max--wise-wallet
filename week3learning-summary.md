# 3주차 학습 정리

## Canvas와 SVG

canvas와 svg는 모두 웹에서 그래픽을 그리기 위한 기술이다.

### Canvas

- HTML5에 추가된 태그이다.
- 자바스크립트를 사용하여 그래픽을 그리는 기술이다.
- 비트맵 기반의 그래픽을 그리기 때문에, 픽셀 단위로 그려 고해상도의 그래픽을 그리는 데 적합하다.

### SVG

- XML 기반의 벡터 그래픽을 그리는 기술이다.
- 벡터 기반의 그래픽을 그리기 떄문에, 크기가 조절되어도 품질이 유지되며, 줌이나 확대 기능도 제공한다.
- SVG는 HTML 문서 안에 포함될 수 있고, CSS와 JS로 제어할 수 있어서 그래픽을 수정하거나 인터렉션하는 기능을 구현할 수 있다.

따라서, Canvas는 고해상도의 그래픽을 그리는 데 적합하고, SVG는 크기가 조절되거나 인터렉션하는 그래픽을 그리는 데 적합하다.

## 데이터 시각화

데이터 시각화(data visualization)는 데이터 분석 결과를 쉽게 이해할 수 있도록 시각적으로 표현하고 전달되는 과정을 말한다.

데이터 시각화의 목적은 도표(graph)라는 수단을 통해 정보를 명확하고 효과적으로 전달하는 것이다.

예를 들어 데이터 대시보드, 차트, 그래프, 기타 시각적 표현이 있다.

## 애니메이션

CSS3 애니메이션은 요소에 적용되는 CSS 스타일을 다른 CSS 스타일로 부드럽게 전환시켜 준다.

애니메이션은 애니메이션을 나타내는 CSS 스타일과 애니메이션의 중간 상태를 나타내는 키프레임들로 이루어진다.

### 애니메이션의 장점

- 자바스크립트를 모르더라도 간단하게 애니메이션을 만들 수 있다.
- 자바스크립트를 이용한 애니메이션은 잘 만들어졌더라도 성능이 좋지 못할때가 있다. CSS 애니메이션은 frame-skipping 같은 여러 기술을 이용하여 최대한 부드럽게 렌더링된다.
- 브라우저는 애니메이션의 성능을 효율적으로 최적화할 수 있다. 예를 들어 현재 안보이는 엘리먼트에 대한 애니메이션은 업데이트 주기를 줄여 부하를 최소화할 수 있다.

## **스코프(Scope)와 클로저(Closure)**

### 스코프

- 스코프는 변수와 함수가 접근 가능한 범위를 나타내는 개념이다.
- 자바스크립트엔 전역 스코프(Global Scope), 지역 스코프(Local Scope)가 있다.
- ES6부터 블록을 스코프로 취급되기 시작했다.
  - 지역 스코프 안의 변수값은 밖에서 접근할 수 없다.
  - 또한, ES6에서 [모듈](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)을 도입하면서 또 다른 스코프를 제공하게 되었다.

### 클로저

- 클로저는 함수와 함수가 선언된 렉시컬 스코프(Lexical Scope)로 인해 생성되는 개념이다.
- 클로저는 함수 내부에서 정의된 변수와 함수가 외부에서 호출되어 사용할 때, 렉시컬 스코프 체인(lexical scope chain)을 통해 해당 변수와 함수를 참조하도록 한다.

\*렉시컬 스코프: 함수가 선언될 때의 스코프를 의미한다. 즉, 함수가 선언된 위치에 따라 해당 함수의 스코프가 결정된다.

\*스코프 체인: 자바스크립트 엔진은 식별자를 찾을 때 일단 자신이 속한 스코프에서 찾고 그 스코프에 식별자가 없으면 상위 스코프에서 다시 찾아 나간다. 이를 스코프 체인이라고 한다.

- 클로저 스코프 체인에는 지역 범위(Local Scope), 외부 함수 범위(Outer Functions Scope), 전역 범위(Global Scope)가 있다.

### 클로저 예시

```jsx
function makeAdder(x) {
  var y = 1;
  return function (z) {
    y = 100;
    return x + y + z;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
// 클로저에 x와 y의 환경이 저장됨

console.log(add5(2)); // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
// 함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
```

이 예시를 보면 makeAdder는 함수를 만들어내는 공장(클래스와 비슷?)이다.

## REF

[코딩교육 티씨피스쿨](http://www.tcpschool.com/html/html5_graphic_canvasVsSvg)

[animation - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/animation)

[CSS 애니메이션 사용하기 - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

[클로저 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures#실용적인_클로저)

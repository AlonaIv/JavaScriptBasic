'number' + 23 + 32
//'number23' + 32 
//'nunber2332'

41 + 1 + 'number'
//42 + 'number'
//'42number'

null + 1
// 1

'five' + + 'two'
// 'five' + NaN
// 'fiveNaN'

2 && 7
//7

+'40' + +'2';
//40 + 2
//42

'10' - 5 === 6;
//5 === 6
//false

true + false
//1 + 0
//1

'4px' - 3
//NaN

'4' - 3
//1

'2' + 3 ** 2;
//'2' + 9
//'29'

12 / '6'
//12 / 6
//2

23 + 42 + 'number'
//65 + 'number'
//'65number'

'10' + (5 === 6);
//'10' + false
//'10false'

'number' + 15 + 3
//'number15' + 3
//'number153'

undefined + 1;
//NaN

'true' == true
//NaN == 1
//false

false == 'false'
//0 == NaN
//false

null == ''
//false

3 ** (9 / 3);
//3 ** 3
//27

!!'false' == !!'true'
//!!true == !!true
//!false == !false
//true == true
//true

0 || '0' && 1
//0 || 1
//1

1 < 2 < 3
// true < 3
// true

'foo'+ + +'bar'
//'foo' + + NaN
//'foo' + NaN
//'fooNaN'

3 ** 2 / 3;
//9 / 3
//3

1 < 2 > 3
//true > 3
//false

(+null == false) < 1;
// (0 === false) < 1
// true < 1
// false

false && true || true
// false || true
// true

false && (true || true);
// false && true
// false

(+null == false) < 1 ** 5;
// (0 == false) < 1**5
// true < 1
// false
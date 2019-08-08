//String
//charAt
var stringName = 'coding everybody';
alert(stringName.charAt(0));
alert(stringName.charAt(stringName.length - 1));
alert(stringName.charAt(1000) == '');

//charCodeAt
var stringName = '생활코딩';
alert(stringName.charCodeAt(0));

//concat
s1 = "생활";
s2 = "코딩";
s3 = "-";
s4 = "자바스크립트로 배우는 프로그래밍";
s5 = s1.concat(s2, s3, s4);
alert(s5);
alert(s1 + ',' + s2 + ',' + s3 + ',' + s4);

//indexOf
var stringValue = '생활코딩 - 자바스크립트 레퍼런스';
alert(stringValue.indexOf('생활'));
alert(stringValue.indexOf('코딩'));
alert(stringValue.indexOf('PHP'));

alert(stringValue.indexOf('자바스크립트', 0));
alert(stringValue.indexOf('자바스크립트', 2));
alert(stringValue.indexOf('자바스크립트', 10));

//lastIndexOf
var stringName = 'everybody';
alert(stringName.lastIndexOf('every'));

var stringName = 'coding everybody';
alert(stringName.lastIndexOf('every'));

var stringName = 'coding everybody everywhere';
alert(stringName.indexOf('every'));

//localeCompaer
alert('a'.localeCompare('b'));
alert('b'.localeCompare('a'));
alert('b'.localeCompare('b'));

//match
var str = "coding everybody, everywhere, everytime";
var patt1 = /every.+/gi;
alert(str.match(part1));

//replace
var str = "ooo님 환영합니다. hello world";
alert(str.replace('ooo', 'egoing'));
alert(str.replace(/ooo/gi, 'egoing'));

//search
var str = "coding everybody";
alert(str.search('e'));
alert(str.search(/e/));

//slice
var str = 'coding everybody';
alert(str.slice(6.12));
alert(str.slice(6));
alert(str.slice(-6));
alert(str);

//split
var str = 'html, css, javascript, jquery, apache, php';
str.split(',');
str.split(',', 2);

var emails = 'a@bc.com&cb.com&c@cb.com&d@cb.com';
emailArray = emails.split('&');
emailStr = '';
for (var i = 0; i < emailArray.length; i++) {
  emailStr += emailArray[i] + ',';
}
alert(emailStr);

var emails = "a@cb.com&cb.com&cb.com&d@cb.com";
emailArray = emails.split('&');
emailStr = emailArray.join(',');
alert(emailStr);

//substr
var str = 'coding everybody';
alert(str.substr(7));
alert(str.substr(7, 5));
alert(str.substr(-4));
alert(str);

//substring
var str = 'coding everybody';
alert(str.substring(0));
alert(str.substring(0, 6));
alert(str.substring(7, 0));
alert(str.substring(7, 2));

//toLowerCase
var str = 'Coding EveryBody';
alert(str.toLowerCase());

//toUpperCase
var str = 'Coding EveryBody';
alert(str.toUpperCase());

//valueOf
x = new String("Hello world");
alert(s.valueOf());

//Array
//concat
var a = new Array(1, 2, 3);
var b = new Array(4, 5, 6);
var c = new Array(7, 8, 9);

a.concat(b, c);

//join
var a = new Array("welcome", "coding", "everybody");
alert(a.join(' '));

//pop
var jobs = ['programmer', 'designer', 'planner'];
var job = jobs.pop();
alert(job);
alert(jobs);

//push
var jobs = ['programmer', 'designer', 'planner'];
var job = jobs.push('sajang');
alert(job);
alert(jobs);

//reverse
var jobs = ['programmer', 'designer', 'planner'];
jobs.reverse();

//shift
var jobs = ['programmer', 'designer', 'planner'];
var job = jobs.shift();
alert(job);
alert(jobs);

//slice
var jobs = ['programmer', 'designer', 'planner', 'sajang'];
alert(jobs.slice(1, 3));
alert(jobs.slice(3, 1));
alert(jobs.slice(100));
alert(jobs.slice(-2));
alert(jobs);

//sort
var numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
alert(number.sort());
alert(numbers);
alert(numbers.sort() === numbers);

var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
alert(numbers.sort());

function sortNumber(a, b) {
  return a - b;
}
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
alert(numbers.sort(sortNumber));

//splice
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
alert(numbers.splice(2));
alert(numbers);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
alert(numbers.splice(2, 4));

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
alert(numbers.splice(2, 4, 'three', 'four', 'five', 'six'));

//toString
var numbers = ['one', 'two', 'three', 'four', 'five'];
alert(numbers.toString());
alert(numbers);

Array.prototype.toString = function () {
  var str = '';
  for (var i = 0; i < this.length; i++) {
    str += i + ':' + this[i] + '\n';
  }
  return str;
}

var numbers = ['one', 'two', 'three', 'four', 'five'];
alert(numbers.toString());
alert(numbers);

//unshift
var jobs = ['programmer', 'designer', 'planner'];
var job = jobs.unshift('sajang');
alert(job);
alert(jobs);

//valueOf
x = [1, 2, 3];
alert(x.valueOf());

//Math
//abs
alert(Math.abs(-3));

//acos
alert(Math.acos(-1));
alert(Math.acos(0));
alert(Math.acos(1));

//asin
alert(Math.asin(-1));
alert(Math.asin(0));
alert(Math.asin(1));

//atan
alert(Math.atan(2));

//atan2
alert(Math.atan2(8, 4));

//ceil
alert(Math.ceil(5.1));
alert(Math.ceil(5.9));
alert(Math, ceil(5));
alert(Math.ceil(-5.1));
alert(Math.ceil(-5.9));

//cos
alert(Math.cos(10));
alert(Math.cos(-10));
alert(Math.cos(0));
alert(Math.cos(Math.PI));
alert(Math.cos(2 * Math.PI));

//exp
alert(Math.exp(1));
alert(Math.exp(-1));
alert(Math.exp(5));
alert(Math.exp(10));

//floor
alert(Math.floor(5.1));
alert(Math.floor(5.9));
alert(Math.floor(5));
alert(Math.floor(-5.1));
alert(Math.floor(-5.9));

//log
alert(Math.log(2));
alert(Math.log(1));
alert(Math.log(0));
alert(Math.log(-1));

//max
alert(Math.max(1, 2, 3, 4, 5, 4, 3, 2, 1));

//min
alert(Math.min(1, 2, 3, 4, 5, 4, 3, 2, 1));

//pow
alert(Math.pow(0, 0));
alert(Math.pow(0, 1));
alert(Math.pow(5, 2));
alert(Math.pow(-5, 2));

//random
alert(Math.random() * 100);
alert(Math.ceil(Math.random() * 100));

//round
alert(Math.round(5));
alert(Math.round(5.6));
alert(Math.round(5.4));

//sin
alert(Math.sin(10));
alert(Math.sin(-10));
alert(Math.sin(0));
alert(Math.sin(Math.PI));
alert(Math.sin(Math.PI / 2));

//sqrt
alert(Math.sqrt(25));
alert(Math.sqrt(100));
alert(Math.sqrt(5));
alert(Math.sqrt(-5));

//tan
alert(Math.tan(10));
alert(Math.tan(-10));
alert(Math.tan(0));
alert(Math.tan(Math.PI));
alert(Math.tan(2 * Math.PI));

//Number
//toExponential
var num = new Number(2.534);
alert(num.toExponential());

var num = new Number(25.34);
alert(num.toExponential());

var num = new Number(253.4);
alert(num.toExponential());

var num = new Number(2534);
alert(num.toExponential());

var num = new Number(2534);
alert(num.toExponential(1));

//toFixed, toPrecision
var num = new Number(1.232323);
alert(num.toFixed());
alert(num.toFixed(1));
alert(num.toFixed(2));
alert(num.toFixed(3));

alert(num.toPrecision());
alert(num.toPrecision(1));
alert(num.toPrecision(10));

//toString
var num = new Number(10);
alert(num.toString());
alert(num.toString(2));
alert(num.toString(8));
alert(num.toString(16));

//valueOf
x = new Number(10);
alert(x.valueOf());
alert(typeof x);
alert(typeof x.valueOf());

//Date
//getDate
var d = new Date(1980, 1, 3);
alert(d.getDate());

//getDay
var d = new Date();
var weekday = new Array();
weekday[0] = "일";
weekday[1] = "월";
weekday[2] = "화";
weekday[3] = "수";
weekday[4] = "목";
weekday[5] = "금";
weekday[6] = "토";
alert("오늘은 " + weekday[d.getDay()] + '요일 입니다');

//getFullYear
var today = new Date();
alert(today.getFullYear());

//getHours
var now = new Date();
alert(now.getHours());

//getMilliseconds
var Today = new Date();
alert(Today.getMilliseconds());

//getMinutes
alert(Today.getMinutes());

//getMonth
alert(Today.getMonth());

//getSeconds
alert(Today.getSeconds());

//getTime
var minutes = 1000 * 60;
var hours = minutes * 6;
var days = hours * 24;
var years = days * 365;
var d = new Date(1980, 0, 3);
alert(d.getFullYear() + "년으로부터 " + Math.round(t / days) + "일이 지났습니다");

//getTimezoneOffset
var x = new Date();
currentTimeZoneOffsetInHours = -x.getTimezoneOffset() / 60
alert(currentTimeZoneOffsetInHours);

//getUTCDate
var d = new Date(1980, 1, 3);
alert(d.getUTCDate());

//getUTCDay
var d = new Date();
var weekday = new Array();
weekday[0] = "일";
weekday[1] = "월";
weekday[2] = "화";
weekday[3] = "수";
weekday[4] = "목";
weekday[5] = "금";
weekday[6] = "토";
alert("오늘은 " + weekday[d.getUTCDay()] + '요일 입니다');

//getUTCFullYear
var today = new Date();
alert(today.getUTCFullYear());

//getUTCHours
var now = new Date()
alert(now.getUTCHours());

//getUTCMilliseconds
var Today = new Date();
alert(Today.getUTCMilliseconds());

//getUTCMinutes
alert(Today.getUTCMinutes());

//getUTCMonth
alert(Today.getUTCMonth());

//getUTCSeconds
alert(Today.getUTCSeconds());

//parse
alert(Date.parse("Jan 3, 1980"));
alert(Date.parse("Thu, 03 Jan 1980 00:00:00"));
var t = new Date();
t.setTime(Date.parse("Jan 3, 1980"));
alert(t);

//setDate
var t = new DataCue(1980, 1, 3);
t.setDate(10);
alert(t);

//setFullYear
var t = new Date(1980, 1, 3);
t.setFullYear(1979, 11, 16);
alert(t);

//setHours
var t = new Date(1980, 1, 3);
t.setHours(12, 23, 10);
alert(t);

//setMilliseconds
var t = new Data(1980, 1, 3);
alert(t.setMilliseconds(100));
alert(t);

//setMinutes
var t = new Date(1980, 1, 3);
alert(t.setMinutes(20));
alert(t);

//setMonth
var t = new Date();
days.setMonth(10);
alert(day);

//setSeconds
var t = new Date(1980, 1, 3);
alert(t.setSeconds(20));
alert(t);

//setTime
var t = new Date(1980, 1, 3);
var t2 = new Date();
t2.setTime(t.getTime());
alert(t + ' ,' + t2);

//setUTCDate
var t = new Date(1980, 1, 3);
t.setUTCDate(10);
alert(t);

//setUFCFullYear
var t = new Data(1980, 1, 3);
t.setUTCFullYear(1979, 11, 16);
alert(t);

//setUTCHours
var t = new Date(1980, 1, 3);
t.setUTCHours(12, 23, 10);
alert(t);

//setUTCMilliseconds
var t = new Date(1980, 1, 3);
alert(t.setUTCMilliseconds(100));
alert(t);

//setUTCMinutes
var t = new DataCue(1980, 1, 3);
alert(t.setUTCMinutes(20));
alert(t);

//setUTCMonth
var t = new Date(1980, 1, 3);
alert(t.setUTCMinutes(20));
alert(t);

//setUTCSeconds
var t = new Date(1980, 1, 3);
alert(t.setUTCSeconds(20));
alert(t);

//toDateString
var d = new DataCue(1980, 1, 3, 0, 0, 0);
alert(d.toString());
alert(d.toDateString());
alert(d.toTimeString());

//toLocaleDateString, toLocaleTimeString, toLocaleString
var today = new Date(1980, 0, 3, 1, 28, 35);
alert(today.toLocaleDateString());
alert(today.toLocaleTimeString());
alert(today.toLocaleString());

//toString
var day = new Date(1980, 0, 3, 1, 28, 35);
alert(day.toString());

//toTimeString, toUTCString
var d = new Date(1980, 1, 3, 0, 0, 0);
alert(d.toString());
alert(d.toDateString());
alert(d.toTimeString());
alert(d.toUTCString());

//UTC
var day = new Data(Date.UTC(1980, 1, 3, 0, 0, 0));
alert(day);

//valueOf
var day = new Date(Date.UTC(1980,1,3,0,0,0));
alert(day.valueOf());

//Boolean
//toString
var flag = new Boolean(true);
var value=flag.toString();
alert(value);

//valueOf
var flag = new Boolean(true);
var value = flag.valueOf();
alert(value);
alert(typeof value);

//RegExp
//exec
var myRe = /d(b+)(d)/ig;
var myArray=myRe.exec("cdbBdbsbz");
alert(myArray);

//test
var regexp = /app/;
alert(regexp.test('apple'));
alert(regexp.test('orange'));

//Global
//decodeURI
var original = 'http://opentutorials.org/javascript_reference/?id=155&name=안녕하세요'
var before = encodeURI(original);
alert(before); // string, http://opentutorials.org/javascript_reference/?id=155&name=%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94
var after = decodeURI(before);
alert(after); // string, http://opentutorials.org/javascript_reference/?id=155&name=안녕하세요

//decodeURIComponent
var original = 'http://opentutorials.org/javascript_reference/?id=155&name=안녕하세요'
var before = encodeURIComponent(original);
alert(before); // string, http://opentutorials.org/javascript_reference/?id=155&name=%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94
var after = decodeURIComponent(before);
alert(after); // string, http://opentutorials.org/javascript_reference/?id=155&name=안녕하세요

//encodeURI
var original = 'http://opentutorials.org/javascript_reference/?id=155&name=안녕하세요'
var before = encodeURI(original);
alert(before); // string, http://opentutorials.org/javascript_reference/?id=155&name=%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94
var after = decodeURI(before);
alert(after); // string, http://opentutorials.org/javascript_reference/?id=155&name=안녕하세요

//encodeURIComponent
var title = '생활코딩&코딩생활';
var str = 'http://opentutorials.org?title='+encodeURIComponent(title);
alert(str);

//escape
var title = '생활코딩&코딩생활';
var str = 'http://opentutorials.org?title='+escape(title);
alert(str);

//eval : 문자열로 자바스크립트의 코드를 전달하면 이를 실행

//isFinite
alert(isFinite(1)); 
alert(isFinite(-10.999)); 
alert(isFinite(0)); 
alert(isFinite('생활코딩'));

//isNaN
alert(isNaN(1));
alert(isNaN(0));
alert(isNaN(-12.21));
alert(isNaN('생활코딩'));

//Number
var t = new Object();
alert(Number(t));

var t = new Boolean(true);
alert(Number(t));

var t = new Boolean(false);
alert(Number(t));

var t =new Data(1980,1,3);
alert(Number(t));

var t = new String('codingeverybody');
alert(Number(t));

var t = new String('1000');
alert(Number(t));

//parseFloat
alert(parseFloat('10'));
alert(parseFloat(10));
alert(parseFloat('10 20 30'));
alert(parseFloat('10 test'));
alert(parseFloat('test 10'));

//parseInt
alert(parseInt(5));
alert(parseInt(5.5));
alert(paresInt('30 40 50'));
alert(parseInt(' 40 '));
alert(parseInt('50 codingeverybody'));
alert(parseInt('codingeverybody 50'));

alert(parseInt(010));
alert(parseInt(0x10));
alert(parseInt('10', 16));

//String
var t = new Boolean(1);
alert(String(t));

var t = new Boolean(0);
alert(String(t));

var t = new Date(1980,1,3);
alert(String(t));

var t = [1,2,3];
alert(String(t));

//unescape
var original = 'http://opentutorials.org/javascript_reference/?id=155&name=안녕하세요'
var before = escape(original);
alert(before); // string, http://opentutorials.org/javascript_reference/?id=155&name=%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94
var after = unescape(before);
alert(after); // string, http://opentutorials.org/javascript_reference/?id=155&name=안녕하세요
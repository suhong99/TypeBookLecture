var a = 'a';

function logA(a = 'a') {
  var b = 10;
  return b;
}

interface Dropdown<T> {
  value: T;
  title: string;
}
var items: Dropdown<number> = {
  value: 10,
  title: 'a',
};

interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}
// 예시 확인
var detailItems: DetailedDropdown<number> = {
  value: 'hi',
  title: 'a',
  description: 'b',
  tag: 'c',
};

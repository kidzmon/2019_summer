function outter() {
  var title = 'coding everybody';
  return function () {
    alert(title);
  }
}
inner = outter();
inner();

function factory_movie(title) {
  return {
    get_title: function () {
      return title;
    },
    set_title: function (_title) {
      title = _title
    }
  }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

alert(ghost.get_title());
alert(matrix.get_title());

ghost.set_title('공각기동대');

alert(ghost.get_title());
alert(matrix.get_title());

var arr = []
for (var i = 0; i < 5; i++) {
  arr[i] = function (id) {
    return function () {
      return id;
    };
  }(i);
}
for (var index in arr) {
  console.log(arr[index]());
}
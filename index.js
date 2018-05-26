function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

const rankedclass = document.querySelectorAll('.ranked-list')

function increaseRankBy(n) {
  rankedclass[0].children[0].innerHTML = parseInt(rankedclass[0].children[0].innerHTML) + n;
  rankedclass[0].children[1].innerHTML = parseInt(rankedclass[0].children[1].innerHTML) + n;
  rankedclass[1].children[0].innerHTML = parseInt(rankedclass[1].children[0].innerHTML) + n;
  rankedclass[1].children[1].innerHTML = parseInt(rankedclass[1].children[1].innerHTML) + n;
  rankedclass[1].children[2].innerHTML = parseInt(rankedclass[1].children[2].innerHTML) + n;
}



/*
for (var i = 0; i < list.children.length; i += 1) {
  var x = list.children[i]
  x.innerHTML = parseInt(x.innerHTML) + n;
}

*/

function deepestChild() {
  document.querySelector('#grand-node div div div div').innerHTML
}
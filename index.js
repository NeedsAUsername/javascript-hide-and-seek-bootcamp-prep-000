function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

const rankedclass = document.querySelectorAll('.ranked-list')

/*
function increaseRankBy(n) {
  rankedclass[0].children[0].innerHTML = parseInt(rankedclass[0].children[0].innerHTML) + n;
  rankedclass[0].children[1].innerHTML = parseInt(rankedclass[0].children[1].innerHTML) + n;
  rankedclass[1].children[0].innerHTML = parseInt(rankedclass[1].children[0].innerHTML) + n;
  rankedclass[1].children[1].innerHTML = parseInt(rankedclass[1].children[1].innerHTML) + n;
  rankedclass[1].children[2].innerHTML = parseInt(rankedclass[1].children[2].innerHTML) + n;
}
*/


function increaseRankBy(n) {
  var first = rankedclass[0]
  var second = rankedclass[1]
  for (let i = 0; i < first.children.length; i += 1) {
    first.children[i].innerHTML = parseInt(first.children[i].innerHTML) + n;
  }
  for (let i = 0; i < second.children.length; i += 1) {
    second.children[i].innerHTML = parseInt(second.children[i].innerHTML) + n;
  }
}

/*
for (var i = 0; i < list.children.length; i += 1) {
  var x = list.children[i]
  x.innerHTML = parseInt(x.innerHTML) + n;
}

*/

function deepestChild() {
 return document.querySelector('#grand-node div div div div')
}
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {
  var parentClass = 'MainContent-issue';
  var parentClassIsOpen = parentClass + ' is-open';
  var parentClassIsAnimating = parentClass + ' is-animating';
  var parentClassIsAnimatingOpen = parentClass + ' is-open is-animating';
  var transDur = 200;
  var findAncestor = function findAncestor(elem) {
    var ancestorClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : parentClass;

    while ((elem = elem.parentNode) && elem.className !== ancestorClass) {}
    return elem;
  };
  var ancestorIsAnimating = function ancestorIsAnimating(elem, className) {
    elem.setAttribute('class', className);
  };

  var mores = window.document.querySelectorAll('.MainContent-more');
  var lesses = window.document.querySelectorAll('.MainContent-less');

  [].concat(_toConsumableArray(mores)).forEach(function (more) {
    more.addEventListener("click", function (evt) {
      ancestorIsAnimating(findAncestor(evt.target, parentClass), parentClassIsAnimating);

      setTimeout(function () {
        findAncestor(evt.target, parentClassIsAnimating).setAttribute('class', parentClassIsOpen);
      }, transDur);
    });
  });

  [].concat(_toConsumableArray(lesses)).forEach(function (less) {
    less.addEventListener("click", function (evt) {
      ancestorIsAnimating(findAncestor(evt.target, parentClassIsOpen), parentClassIsAnimatingOpen);

      setTimeout(function () {
        findAncestor(evt.target, parentClassIsAnimatingOpen).setAttribute('class', parentClass);
      }, transDur);
    });
  });
})();
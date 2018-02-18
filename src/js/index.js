(() => {
  const parentClass = 'MainContent-issue';
  const parentClassIsOpen = `${parentClass} is-open`;
  const parentClassIsAnimating = `${parentClass} is-animating`;
  const parentClassIsAnimatingOpen = `${parentClass} is-open is-animating`;
  const transDur = 200;
  const findAncestor = (elem, ancestorClass = parentClass) => {
    while ((elem = elem.parentNode) && (elem.className !== ancestorClass));
    return elem;
  };
  const ancestorIsAnimating = (elem, className) => {
    elem.setAttribute('class', className);
  };

  let mores = window.document.querySelectorAll('.MainContent-more');
  let lesses = window.document.querySelectorAll('.MainContent-less');

  [...mores].forEach(more => {
    more.addEventListener("click", evt => {
      ancestorIsAnimating(findAncestor(evt.target, parentClass), parentClassIsAnimating);
      
      setTimeout(
        () => {
          findAncestor(evt.target, parentClassIsAnimating).setAttribute('class', parentClassIsOpen);
        },
        transDur
      );
    });
  });

  [...lesses].forEach(less => {
    less.addEventListener("click", evt => {
      ancestorIsAnimating(findAncestor(evt.target, parentClassIsOpen), parentClassIsAnimatingOpen);
      
      setTimeout(
        () => {
          findAncestor(evt.target, parentClassIsAnimatingOpen).setAttribute('class', parentClass);
        },
        transDur
      );
    });
  });
})();
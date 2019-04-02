console.log(
  '%c     %c    %c    %c   PRESS F5 or ∂ (ALT + D) to debug while dev tools is open   %c    %c    %c     ',
  'background-color: orange;',
  'background-color: gold;',
  'background-color: yellow;',
  'background-color: lightyellow; font-weight: bold',
  'background-color: yellow;',
  'background-color: gold;',
  'background-color: orange;',
);

document.addEventListener('keydown', e => {
  // alt + D (at least on my computer)
  if (e.code === 'F5' || e.key === '∂') {
    debugger;
  }
});

console.log(
  '%c ⏱️ PRESS F5 or ∂ (ALT + D) to debug while dev tools is open ⏱️ ',
  'padding: 0 48px; font-weight: bold; background: linear-gradient(90deg, gold, lightyellow 8%, lightyellow 92%, gold);',
);

document.addEventListener('keydown', e => {
  // alt + D (at least on my computer)
  if (e.code === 'F5' || e.key === '∂') {
    debugger;
  }
});

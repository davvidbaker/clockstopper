console.log(
  '%c ⏱️ PRESS F5 or ∂ (ALT + D) to debug while dev tools is open ⏱️ ',
  'padding: 0 48px; font-weight: bold; background: linear-gradient(90deg, gold, lightyellow 8%, lightyellow 92%, gold);'
);
const listener = e => {
  // alt + D (at least on my computer)
  if (e.code === 'F5' || e.key === '∂') {
    debugger;
  }
};

document.addEventListener('keydown', listener);

/* 💁 should use a mutation observer to detect iframes, but it wasn't working in the storybook I was testing on... unsure why... */
setTimeout(() => {
  for (let i of document.querySelectorAll('iframe')) {
    i.contentDocument.addEventListener('keydown', listener);
  }
}, 3000);

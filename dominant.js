const SCRIPTS = require('./scripts');

function characterScript(code) {
  for (const script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      return script;
    }
  }
  return null;
}

function dominantDirection(text) {
  const counts = { ltr: 0, rtl: 0, ttb: 0 };
  for (let i = 0; i < text.length; i++) {
    let key = characterScript(text.charCodeAt(i));
    if (key) {
      key = key.direction;
      counts[key]++;
    }
  }

  if (counts.ltr >= counts.rtl && counts.ltr >= counts.ttb) {
    return 'ltr';
  }
  if (counts.ltr > counts.rtl) {
    return 'ttb';
  }
  return 'rtl';
}

console.log(dominantDirection('Hello!'));
// → ltr
console.log(dominantDirection('Hey, مساء الخير'));
// → rtl

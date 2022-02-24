module.exports = function check(str, bracketsConfig) {
  // create array with open brackets
  const openBrackets = [];
  //create array with pair brackets
  const pairBrackets = new Object();

  bracketsConfig.forEach( item => {
    // add pair brackets to array
    pairBrackets[item[1]] = item[0];
    // add open brackets to array
    openBrackets.push(item[0]);
  })

  // create stack
  let stack = [];

  // check every symbol
  for(let i = 0; i < str.length; i++) {
    let currentElement = str[i];

    // check the same brackets
    if (pairBrackets[currentElement] === currentElement && stack[stack.length - 1] === currentElement) {
      stack.pop();
      continue;
    }
    
    // check the ordinary brackets
    if (openBrackets.includes(currentElement)) {
      stack.push(currentElement);
    } else {
      if (stack.length === 0) {
        console.log('false');
        return false;
      }

      let topElement = stack[stack.length - 1];

      if (pairBrackets[currentElement] === topElement) {
        stack.pop();
      } else {
        console.log('false');
        return false;
      }
    }
  }

  return stack.length === 0;
}

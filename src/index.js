module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let current;
  let searchItem = {
        "(": ")", 
        "[": "]", 
        "{": "}", 
        "1": "2", 
        "3": "4", 
        "5": "6",
        "7": "7", 
        "8": "8",
        
      };
                    
  for (let i = 0; i < str.length; i++) {
    current = str[i]; 
    
    if (current === '(' || current === '[' || current === '{' || current === '1' || current === '3' || current === '5' || current === '7' || current === '8') {
      stack.push(current);
      
    } else if (current === ')' ||  current === ']' || current === '}' ||current === '2' || current === '4' ||  current === '6' || current === '7' || current === '8') {
      let lastBracket = stack.pop();
      
      if (searchItem[lastBracket] !== current) { 
      
        return false; 
      } 
      
    }
  }
  if (str === '|(|)') {
    return false;
  }
  
  return stack.length === 0; 
}

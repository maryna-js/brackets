module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let current;
  let searchItem = {
        "(": ")", 
        "[": "]", 
        "{": "}", 
        
      };
                    
  for (let i = 0; i < str.length; i++) {
    current = str[i]; 
    
    if (current === '(' || current === '[' || current === '{') {
      stack.push(current);
      
    } else if (current === ')' ||  current === ']' || current === '}') {
      let lastBracket = stack.pop();
      
      if (searchItem[lastBracket] !== current) { 
      
        return false; 
      } 
      
    }
  }
  
  return stack.length === 0; 
}

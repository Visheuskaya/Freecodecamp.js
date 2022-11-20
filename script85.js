function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum){
    return [];}
    else {
      const numbers = rangeOfNumbers(startNum, andNum, -1)
      numbers.push(endNum)
      return numbers
    }
  };
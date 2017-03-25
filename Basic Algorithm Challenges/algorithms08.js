// Repeat a string repeat a string                                                             
                                                                                               
function repeatStringNumTimes(str, num) {                                                      
  if (num < 1) {                                                                               
    return '';                                                                                 
  }                                                                                            
  return str.repeat(num);                                                                      
}                                                                                              
                                                                                               
repeatStringNumTimes("abc", 3);

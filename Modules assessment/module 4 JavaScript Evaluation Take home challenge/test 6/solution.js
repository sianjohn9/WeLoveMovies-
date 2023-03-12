function filterAnswersByType(studentAnswer){
  let answerType = []; 
  for(let i = 0; i < studentAnswer.length; i++){ 
    if(studentAnswer[i].isEssayQuestion === true){ 
      answerType.push(studentAnswer[i]);
    }
  }
  return answerType; 
}
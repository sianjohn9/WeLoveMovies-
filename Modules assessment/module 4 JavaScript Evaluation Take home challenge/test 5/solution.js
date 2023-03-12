function countCorrectAnswers(studentAnswers){
  let correctAnswers = 0; 
  for(let i = 0; i < studentAnswers.length; i++){ 
    if(studentAnswers[i].isCorrect === true){
      correctAnswers++; 
    }
  }
  return correctAnswers 
}
function checkForPlagiarism(answers, snippetOfText){
  for(let i = 0; i < answers.length; i++){
    if(answers[i].isEssayQuestion === true){
      if(answers[i].response.includes(snippetOfText)){
        return true
      }
    }
  }
  return false
}
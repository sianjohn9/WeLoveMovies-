function findAnswer(studentAnswers, question) {
  for (let i = 0; i < studentAnswers.length; i++) {
    let answer = studentAnswers[i];
    if (answer.question === question) {
      return answer
    }
  }
}



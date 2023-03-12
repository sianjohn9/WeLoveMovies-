var chai = require('chai'),
    expect = chai.expect;

const sampleAnswers = [
  {
    question: 'What is the phase where chromosomes line up in mitosis?',
    response: 'Metaphase',
    isCorrect: true,
    isEssayQuestion: false
  },
  {
    question: 'What anatomical structure connects the stomach to the mouth?',
    response: 'Esophagus',
    isCorrect: true,
    isEssayQuestion: false
  },
  {
    question: 'What are lysosomes?',
    response: 'A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules.',
    isCorrect: true,
    isEssayQuestion: true
  },
  {
    question: 'True or False: Prostaglandins can only constrict blood vessels.',
    response: 'True',
    isCorrect: false,
    isEssayQuestion: false
  }
];

const studentAnswers = [
  {
    question: 'What is RNA transcription?',
    response: "Transcription is the first of several steps of DNA based gene expression in which a particular segment of DNA is copied into RNA by the enzyme RNA polymerase. Both DNA and RNA are nucleic acids, which use base pairs of nucleotides as a complementary language.",
    isCorrect: true,
    isEssayQuestion: true
  },
  {
    question: 'RNA is double stranded?',
    response: "Yes",
    isCorrect: false,
    isEssayQuestion: false
  },
  {
    question: 'Viruses have RNA or DNA?',
    response: 'RNA',
    isCorrect: true,
    isEssayQuestion: false
  },
  {
    question: 'What do you want to do for spring break?',
    response: 'Get out of the house',
    isCorrect: true,
    isEssayQuestion: true
  },
  {
    question: 'What is the phase where chromosomes line up in mitosis?',
    response: 'Anaphase',
    isCorrect: false,
    isEssayQuestion: false
  },
  {
    question: 'What anatomical structure connects the stomach to the mouth?',
    response: 'Esophagus',
    isCorrect: true,
    isEssayQuestion: false
  },
  {
    question: 'What are lysosomes?',
    response: 'A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules.',
    isCorrect: true,
    isEssayQuestion: true
  },
  {
    question: 'True or False: Prostaglandins can only constrict blood vessels.',
    response: 'True',
    isCorrect: false,
    isEssayQuestion: false
  }
];

describe("filterAnswersByType", () => {
  it('returns the essay questions from the sample quiz', () => {
    expect(filterAnswersByType(sampleAnswers)).to.eql([
    {
    question: 'What are lysosomes?',
    response: 'A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules.',
    isCorrect: true,
    isEssayQuestion: true
  }
  ])
  })
  
  it('returns the essay questions from a different array', () => {
    expect(filterAnswersByType(studentAnswers)).to.eql([
      {"question":"What is RNA transcription?","response":"Transcription is the first of several steps of DNA based gene expression in which a particular segment of DNA is copied into RNA by the enzyme RNA polymerase. Both DNA and RNA are nucleic acids, which use base pairs of nucleotides as a complementary language.","isCorrect":true,"isEssayQuestion":true},
      {"question":"What do you want to do for spring break?","response":"Get out of the house","isCorrect":true,"isEssayQuestion":true},
      {"question":"What are lysosomes?","response":"A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules.","isCorrect":true,"isEssayQuestion":true}
    ])
  })
  
  it('returns an empty array if passed in an empty array', () => {
    expect(filterAnswersByType([])).to.eql([])
  })
})
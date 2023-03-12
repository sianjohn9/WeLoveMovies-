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

describe("checkForPlagiarism", () => {
  it('returns true for the snippet in the example', () => {
    expect(
      checkForPlagiarism(sampleAnswers, 'spherical vesicles that contain hydrolytic enzymes')
    ).to.eql(true)
 })
  
  it('returns false for a snippet that does not appear in the answers', () => {
    expect(
      checkForPlagiarism(sampleAnswers, 'this string does not appear in the responses' )
    ).to.eql(false)
  })
    
  it('returns false if the only match is for a non-essay question', () => {
    expect(
      checkForPlagiarism(sampleAnswers, 'Metaphase')
    ).to.eql(false)
  })

  it('returns true if text is included in essay and non-essay answer responses', () => {
    expect(checkForPlagiarism(studentAnswers, "RNA")).to.eql(true)
  })
  
  it('returns false if passed in an empty array', () => {
    expect(checkForPlagiarism([], "")).to.eql(false)
  })
})
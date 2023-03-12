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

describe("findAnswer", () => {
  it('returns the prostaglandins answer when passed that question', () => {
    expect(
      findAnswer(sampleAnswers, "True or False: Prostaglandins can only constrict blood vessels." )
    ).to.eql({
      question: 'True or False: Prostaglandins can only constrict blood vessels.',
      response: 'True',
      isCorrect: false,
      isEssayQuestion: false
  })
 })
  
  it('returns the anatomical structure answer when passed that question', () => {
    expect(
      findAnswer(sampleAnswers, 'What anatomical structure connects the stomach to the mouth?' )
    ).to.eql(
      {
        question: 'What anatomical structure connects the stomach to the mouth?',
        response: 'Esophagus',
        isCorrect: true,
        isEssayQuestion: false
      }
    )
  })
    
  it('returns the rna transcription answer when passed that question and a different array', () => {
    expect(
      findAnswer(studentAnswers, 'What is RNA transcription?')
    ).to.eql(
      {
    question: 'What is RNA transcription?',
    response: "Transcription is the first of several steps of DNA based gene expression in which a particular segment of DNA is copied into RNA by the enzyme RNA polymerase. Both DNA and RNA are nucleic acids, which use base pairs of nucleotides as a complementary language.",
    isCorrect: true,
    isEssayQuestion: true
  })
  })

  it('returns undefined if passed a question that does not match any of the answers in the array', () => {
    expect(findAnswer(sampleAnswers, "What color is the planet Pluto?")).to.eql(undefined)
  })
  
  it('returns undefined if passed in an empty array', () => {
    expect(findAnswer([], "")).to.eql(undefined)
  })
  
  it('returs the first matching answer if multiple answers match the question', () => {
    let answersWithDuplicates = [
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
      question: 'Viruses have RNA or DNA?',
      response: 'IDK',
      isCorrect: false,
      isEssayQuestion: false
    }]
    expect(findAnswer(answersWithDuplicates, "Viruses have RNA or DNA?")).to.eql(answersWithDuplicates[1])
  })
})
require('../script.js');


describe("Seen a Thousand Things", () => {
  it("should lowercase the text in the song title 'Seen a Thousand Things'", () => {
    let songTitle = "Seen a Thousand Things"
    expect(setSongTitle(songTitle)).toMatch("seen a thousand things");
  })
})


describe("We're all Light", () => {
  it("should remove the apostrophe and lowercase the text in the song title 'We're all light'", () => {
    let songTitle = "We're all light"
    expect(setSongTitle(songTitle)).toMatch("were all light");
  })
})
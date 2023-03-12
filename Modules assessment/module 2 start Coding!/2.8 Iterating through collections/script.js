/*
  Diego's titles aren't showing up on the page. He needs to format the track titles to be inserted correctly into the HTML. Use a `for` loop to update each of the track titles to have a '<p>' before the track name and a '</p>' after the track name. For example, "Sunshine Peak" should be "<p>Sunshine Peak</p>" after being updated.
*/

let trackTitles = [
  "Sunshine Peak",
  "We're All Light",
  "Bring the Light",
  "Dancing through the Light",
  "Cold Light Generation",
  "Ray of Light",
  "The Inner Light",
];
//////////////////////////////////////////////////////
// Do not change anything above here.
//////////////////////////////////////////////////////

// Un-comment and complete the code below:

// for(){
for(let i = 0; i < trackTitles.length; i++){
  trackTitles[i] = "<p>" + trackTitles[i] + "</p>" }


//////////////////////////////////////////////////////
// Do not change anything below here.
//////////////////////////////////////////////////////
run(trackTitles);


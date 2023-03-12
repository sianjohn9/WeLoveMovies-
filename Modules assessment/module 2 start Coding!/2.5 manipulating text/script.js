// Diego has lyrics for two songs he wants to display on his website. The first is "Seen a Thousand Things" and the other is "We're All Light". The song titles are stored in the database in lowercase text and without punctuation. So to find the right lyrics, you need to transform the `songTitle` variable to match what is stored in the database. Can you use your knowledge of string methods to 1) lowercase the `songTitle` variable and 2) remove all apostrophes from `songTitle`?


// let songTitle = document.getElementById("song-title").value;

let setSongTitle = (songTitle) => { 
/////////////////////////////////////////////////////////////////////////////////////////////////
// Write your code to update the songTitle variable below to be lowercased and remove apostrophes
////////////////////////////////////////////////////////////////////////////////////////////////
    songTitle = songTitle.replace("'", "");
    songTitle = songTitle.toLowerCase();
  
  
////////////////////////////////
// Don't modify anything below here
//////////////////////////////// 
  return songTitle
}

global.setSongTitle = setSongTitle
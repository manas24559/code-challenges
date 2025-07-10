function songDecoder(songs) {
  return songs
    .split("WUB")
    .filter((song) => song.trim())
    .join(" ");
}

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));
// songDecoder(“WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB”)
// => WE ARE THE CHAMPIONS MY FRIEND

let chirpChirp = function (number, word){
  if (word === undefined){
    word = 'chirp';
  }
  if(number === 1){
    return word;
  }
  console.log(word);
  return chirpChirp(--number, word) + ' ' + word;

};

console.log(chirpChirp(10, 'yo'));

module.exports = chirpChirp;
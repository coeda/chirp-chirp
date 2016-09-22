let chirpChirpModule = require('../chirp-chirp.js');
let Chai = require('chai');
let expect = Chai.expect;
let chirpChirp = chirpChirpModule;

  describe('chirpChirp recursive', () => {
    it('should return a string', () => {
      expect(chirpChirp(3)).to.equal('chirp chirp chirp');
    });
});

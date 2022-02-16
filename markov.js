/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   * 
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null]
   *  }
   * 
   * */

  getChains() {
    // TODO: implement this!
    let chains = new Map();
    this.words.push(null);
    for (let i = 0; i < this.words.length - 1; i++) {

      if (this.words[i] == null) {
        break;
      }

      if (chains.get(this.words[i])) {
        chains.get(this.words[i]).push(this.words[i + 1]);
      } else {
        chains.set(this.words[i], [this.words[i + 1]]);
      }

    }
    //chains.set(this.words[this.words.length-1], [null]);
    return chains;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!
    let word;
    let text = "";
    let key;

    for (let k of this.chains.keys()) {
      text += k;
      key = k;
      word = k;
      break;
    }

    while (word != null)  {

      let words = this.chains.get(key);

      let idx = Math.floor(Math.random() * words.length);

      word = words[idx]

      if (word === null) return text;

      text += (" " + word)
      key = word

    }

  }
}

let testText = "The cat in the hat was written by Dr.Seuss. My cat is in the other room.";

const catInHatMachine = new MarkovMachine(testText);
catInHatMachine.getText();

module.exports = { MarkovMachine };
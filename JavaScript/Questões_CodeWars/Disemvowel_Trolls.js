function disemvowel(str) {
    const vowels = 'aeiou';
    const uper_vowels = 'AEIOU'
    var out = '';

    for (let index = 0; index < str.length; index++) {
        const element = str[index];

        if (!(vowels.includes(element)) && !(uper_vowels.includes(element))) {
            out = out.concat(element)
        }
    
    }
    return out;
  }

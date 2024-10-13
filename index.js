class Formatter {
  //add static methods here
  static capitalize(string){
    return string.split('')[0].toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  }
  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return str.split(' ').map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else if (exceptions.includes(word.toLowerCase())) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }).join(' ');
  }
}
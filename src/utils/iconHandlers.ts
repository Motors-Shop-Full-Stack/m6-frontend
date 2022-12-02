function shuffle(array: any[]) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

export const handleBackgroundColor = (colors: React.MutableRefObject<string[]>) => {
    const shuffled = shuffle(colors.current)
    const randomColor = shuffled[0]
    const filteredColors = colors.current.filter(item => {
      return item !== randomColor
    })
    colors.current = filteredColors
    console.log(colors.current)
    return randomColor
}
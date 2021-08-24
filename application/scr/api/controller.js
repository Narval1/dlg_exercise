export const removeDuplicate = (req, res) => {
  // gets the phrase and remove any blank space in the beginning or in the end
  const phrase = req.params.phrase.trim()

  if (!phrase) return res.json({ error: 'blank phrase' })

  const array = phrase.split(' ')
  const newPhrase = array.filter((element, index) => array.indexOf(element) === index)

  res.json({ result: newPhrase.join(' ') })
}

export const changeVowals = (req, res) => {
  // body validations
  if (!req.body.letter.trim() && !req.body.phrase.trim()) return res.json({ error: 'empty body' })
  if (!req.body.phrase.trim()) return res.json({ error: 'blank sentence' })
  if (!req.body.letter.trim()) return res.json({ error: 'inform the desired letter' })

  // gets the phrase and the letter without blank spaces in the beginning or in the end
  const phrase = req.body.phrase.trim()
  const letter = req.body.letter.trim()

  // check if the the letter is a character
  if (letter.length > 1) return res.json({ error: 'enter only one character' })

  // change all vowels
  const newPhrase = phrase.replace(/[aeiou]/ig, letter)

  res.send({ result: newPhrase })
}

export default {
  removeDuplicate,
  changeVowals
}

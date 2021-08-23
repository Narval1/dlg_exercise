import { BadRequestError } from 'restify-errors'

export const removeDuplicate = (req, res, next) => {
  // gets the phrase and remove any blank space in the beginning or in the end
  const phrase = req.params.phrase.trim()

  if (!phrase) return next(new BadRequestError('blank phrase'))

  const array = phrase.split(' ')
  const newPhrase = array.filter((element, index) => array.indexOf(element) === index)

  res.json({ result: newPhrase.join(' ') })
}

export const changeVowals = (req, res, next) => {
  // body validations
  if (!req.body.letter.trim() && !req.body.phrase.trim()) return next(new BadRequestError('empty body'))
  if (!req.body.phrase.trim()) return next(new BadRequestError('blank sentence'))
  if (!req.body.letter.trim()) return next(new BadRequestError('inform the desired letter'))

  // gets the phrase and the letter without blank spaces in the beginning or in the end
  const phrase = req.body.phrase.trim().split('')
  const letter = req.body.letter.trim()

  // check if the the letter is a character
  if (letter.length > 1) return next(new BadRequestError('enter only one character'))

  // change all vowels
  for (const i in phrase) {
    if (phrase[i] === 'a' || phrase[i] === 'e' || phrase[i] === 'i' || phrase[i] === 'o' || phrase[i] === 'u') {
      phrase[i] = letter
    }
  }

  res.send({ result: phrase.join('') })
}

export default {
  removeDuplicate,
  changeVowals
}

export const emptyBodyValidator = (req, res, next) => {
  if (!req.body.phrase && !req.body.letter) return res.json({ error: 'body is undefined' })
  if (!req.body.phrase) return res.json({ error: 'phrase field undefined' })
  if (!req.body.letter) return res.json({ error: 'letter field undefined' })
  if (!req.body.letter.trim() && !req.body.phrase.trim()) return res.json({ error: 'empty body' })
  if (!req.body.phrase.trim()) return res.json({ error: 'blank sentence' })
  if (!req.body.letter.trim()) return res.json({ error: 'inform the desired letter' })

  next()
}

export default emptyBodyValidator

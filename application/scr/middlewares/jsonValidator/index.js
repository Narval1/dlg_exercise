export const jsonValidator = (req, res, next) => {
  if (req.headers['content-type'] !== 'application/json') return res.json({ error: 'use JSON format' })

  next()
}

export default jsonValidator

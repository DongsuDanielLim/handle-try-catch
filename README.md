### Install

```
npm install handle-try-catch --save
```

### Example
```
const wrap = require('handle-try-catch')
router.get('/', wrap(async (req, res, next) => {
  ...do somthing
  // next()
  res.status(200).send('success!')
}))

router.get('/', wrap(async (req, res, next) => {
  ...do somthing
  throw new Error()
}))

router.use((err, req, res, next) => {
  ... do error handling
})
```


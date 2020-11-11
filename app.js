const express = require('express')
const exphbs = require('express-handlebars')
const handlebars = require('handlebars')
const bodyParser = require('body-parser')
const rubbishTalkGenerator = require('./rubbishtalk_generator')
const app = express()
const port = 3000


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

handlebars.registerHelper('ifChecked', function (career, target, options) {
  if (career === target) {
    return options.fn(this);
  }
  return options.inverse(this);
});


app.get('/', (req, res) => {
  res.render('index')
})



app.post('/', (req, res) => {
  const career = req.body.career
  const rubbish = rubbishTalkGenerator(career)
  res.render('index', { career, rubbish })
})

app.listen(port, () => {
  console.log(`Express app is listening on port ${port}.`)
})

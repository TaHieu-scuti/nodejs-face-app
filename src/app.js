const path = require('path');
const express = require('express');
const hbs = require('hbs');

console.log(__dirname)

const app = express();
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, './components/views')
const viewErrorPath = path.join(__dirname, './components/views/errors')
const partialsPath = path.join(__dirname, './components/partials')


app.set('view engine', 'hbs')
app.set('views', [viewPath, viewErrorPath])
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Face App'
  })
})

app.get('*', (req, res) => {
  res.render('404')
});

app.listen(port, () => {
  console.log('server is up' + port)
})
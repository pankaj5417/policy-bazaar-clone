const jsonServer = require('json-server');
const app = jsonServer.create();
//const path = require('path');
//const express = require('express');
const middlewares = jsonServer.defaults({static:'build'});
const router = jsonServer.router('db.json');
const port = process.env.PORT || 8000;

app.use(middlewares);
app.use(jsonServer.rewriter({'/api/*':'/$1'}))

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });



//app.use(middlewares)
app.use(router)
app.listen(port, () => {
  console.log('JSON Server is running')
})
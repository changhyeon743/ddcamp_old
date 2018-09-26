module.exports = auth;

/* GET users listing. */
function auth(app) {
  app.get('/',(req,res) => {
    res.send('200')
  })
}

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


module.exports = index;

function index(app) {
  app.get('/inde',(req,res) => {
    res.send('200')
  })
}

/* GET home page. */
// router.get('/index', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

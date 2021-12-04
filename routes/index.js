var express = require('express');
var router = express.Router();
var path = require('path')
/* GET home page. */
router.get('/', function(req, res, next) {
  // const fi = path.join(__dirname,'../public', 'cta.kml')
  const fi = path.join(__dirname,'../public', 'london-polygons.kml')
try{
  res.sendFile(fi);
}catch (e) {
  console.log('err', e.message);
}
});

module.exports = router;

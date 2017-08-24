var formidable = require('formidable');
/**
 * GET /
 */
exports.profileGet = function(req, res) { 
  res.render('profile', {
    title: 'Profile',
  });
};

exports.profilePost = function(req,res) {
    var form = new formidable.IncomingForm();
    console.log('form:', form);
    form.parse(req, function(err, fields, file){
      if(err) {
        return res.redirect(303, '/error');
      } else {
        console.log('Received File');
      }
      console.log(file);
      res.redirect(303, '/thankyou');
    });
};

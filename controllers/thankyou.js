/**
 * GET /
 */
exports.thankyou = function(req, res) {
  res.render('thankyou', {
    title: 'Thank You'
  });
};

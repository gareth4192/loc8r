module.exports.homeList = function(req, res, next) {
  res.render('index', { title: 'Home' });
};

module.exports.locationInfo = function(req, res, next) {
  res.render('index', { title: 'Location info' });
};

module.exports.addReview = function(req, res, next) {
  res.render('index', { title: 'Add review' });
};

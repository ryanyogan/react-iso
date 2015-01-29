var React    = require('react/addons');
var ReactApp = React.createFactory(require('../components/ReactApp').ReactApp);

module.exports = function(app) {
  app.get('/', function(req, res) {
    var reactHtml = React.renderToString(ReactApp({}));
    res.render('index.ejs', {reactOutput: reactHtml});
  });
};

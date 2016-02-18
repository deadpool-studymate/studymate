var morgan      = require('morgan'), // used for logging incoming request
    bodyParser  = require('body-parser');
    helpers     = require('./helpers.js'); // our custom middleware


module.exports = function (app, express) {
  var userRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));

  app.use('/api/users', userRouter); // use user router for all user request

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

  
};

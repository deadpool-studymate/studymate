module.exports = function (app, express) {
  var userRouter = express.Router();
  
  app.use('/', express.static(__dirname + '/../../client'));

  app.use('/api/users', userRouter);

  require('../users/userRoutes.js')(userRouter);
};

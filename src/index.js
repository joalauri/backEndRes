const { test } = require('./class.creation');
const { app,serverHttp }= require('./server')

test()

serverHttp.listen(app.get('port'), () => {
      console.log('server running on port', `http://127.0.0.1:${app.get('port') }` )
  });



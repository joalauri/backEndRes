const { app,serverHttp }= require('./server')


serverHttp.listen(app.get('port'), () => {
      console.log('server running on port', `http://127.0.0.1:${app.get('port') }` )
  });



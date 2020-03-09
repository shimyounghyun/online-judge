const Koa = require('koa');
const Router = require('koa-router');

const fs = require('fs');
const https = require('https');
const http = require('http');
const cors = require('koa2-cors');
const options = {
	key: fs.readFileSync('./keys/private.pem'),
	cert: fs.readFileSync('./keys/public.pem')
}

const app = new Koa();
const router = new Router();
const exec = require('child_process').exec;

router.get('/judge-all-list', async (ctx, next) =>{
	exec("/bin/sh test_list.sh", (error, stdout, stderr) => {
		if(error !== null){
			console.log('exec error: '+error);
		}
		
	});
	ctx.body = stdout;
});

app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());
https.createServer(options, app.callback()).listen(4000, function(){
	console.log("server is listening on port 4000");
});
//http.createServer(app.callback()).listen(5000);

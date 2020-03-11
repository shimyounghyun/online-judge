const Koa = require('koa');
const Router = require('koa-router');

const fs = require('fs');
const https = require('https');
const http = require('http');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-bodyparser');

const options = {
	key: fs.readFileSync('./keys/private.pem'),
	cert: fs.readFileSync('./keys/public.pem')
}

const app = new Koa();
app.use(compress());
app.use(bodyParser());
app.use(cors({
	origin : '*'
}));

const router = new Router();
const execSync = require('child_process').execSync;

router.get('/', (ctx) =>{
	ctx.body = 'Hi';	
});

router.get('/judge-all-list', async (ctx, next) =>{
	ctx.body = execSync('/bin/bash name_arr.sh').toString();
});

router.get('/write/:func_name', async (ctx, next) => {
	const {func_name} = ctx.params;
	console.log('/write/',func_name+' 진입');
	let data = '{"error":1}';
	try{
		data = execSync('/bin/sh funcset.sh '+func_name).toString();
	}catch(e){
		console.log(e);
	}
	ctx.body = data;
});

router.post('/:func_name', async (ctx, next)=> {
	const {func_name} = ctx.params;
	const {content} = ctx.request.body;
	fs.writeFileSync(func_name+".c", content, (err) =>{
		if (err){
			console.log(err);
		}
	});
	let data = '{"error":1}';
	try{
		data = execSync('/bin/bash grademe.sh '+func_name).toString();	
	}catch(e){
		console.log(e.error);
	}
	ctx.body = data; 		
});


app.use(router.routes()).use(router.allowedMethods());
//https.createServer(options, app.callback()).listen(4000, function(){
//	console.log("server is listening on port 4000");
//});
 app.listen(4000);
// http.createServer(app.callback()).listen(4000);

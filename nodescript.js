const express=require('express');
const bodyParser=require('body-parser');
const html=express();
html.use(express.static(__dirname))
// html.get('/', (req,res)=>{
// 	res.send('getting root');//used to get root dir in browsewr
// 	});
// html.get('/profile',(req,res)=>{
// 	res.send('getting profile');//used to get /profile dir in browswr
// });
console.log(__dirname)
html.listen(3000);
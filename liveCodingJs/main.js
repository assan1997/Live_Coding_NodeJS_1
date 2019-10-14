require('babel-register');

const express = require('express');

const app =express();

const PORT = 3000;
app.set('View','engine','ejs');

app.use(express.static('public'));

const links = {
    'gallery':'/',
    'about':'/about',
    'blog':'/blog',
    'menu':'/menu',
    'contact':'/contact',
    'reservation':'/reservation'
}
app.get('/',(req,res)=>{
    res.render('pages/index.ejs',{links:links})
});
app.get('/about',(req,res)=>{
    res.render('pages/about.ejs',{links:links})
})
app.get('/blog',(req,res)=>{
    res.render('pages/blog.ejs',{links:links})
})
app.get('/blog-detail',(req,res)=>{
    res.render('pages/blog-detail.ejs')
})
app.get('/menu',(req,res)=>{
    res.render('pages/menu.ejs',{links:links})
})
app.get('/gallery',(req,res)=>{
    res.render('pages/gallery.ejs',{links:links})
})
app.get('/contact',(req,res)=>{
    res.render('pages/contact.ejs',{links:links})
})
app.get('/reservation',(req,res)=>{
    res.render('pages/reservation.ejs',{links:links})
})
app.listen(PORT,()=>{
    console.log(`Started on port ${PORT}`)
});
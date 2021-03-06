var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var db = require("./db/db");
var request = require("request");
var Product = require("./models/products");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/*request('http://internal.ats-digital.com:30000/products?size=100', function (error, response, resProducts) {
    if (!error && response.statusCode == 200) {
        for (const product of JSON.parse(resProducts).products) {
            const prod = new Product({
                productName: product.productName,
                color: product.color,
                category: product.category,
                price: product.price,
                description: product.description,
                tag: product.tag,
                productMaterial: product.productMaterial,
                imageUrl: product.imageUrl,
                createdAt: product.createdAt,
                reviews: product.reviews
            });
            console.log(prod);
            prod.save();

        }
    };
});*/


app.use('/', productsRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

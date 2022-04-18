var express = require('express');
var router = express.Router();



let products = [
  {
    no: 1,
    name: "Galaxy M52 5G",
    category: "Mobile",
    Price: "$2499",
    Image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-m526bzkhinu/gallery/in-galaxy-m52-5g-m526-sm-m526bzkhinu-514958328?$2052_1641_PNG$"
  },

  {
    no: 2,
    name: "Galaxy Z Fold3 5G",
    category: "Mobile",
    Price: "$14999",
    Image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-f926bzsdinu/gallery/in-galaxy-z-fold3-f926-5g-396759-sm-f926bzsdinu-522779012?$PD_GALLERY_L_JPG$"
  },
  {
    no: 3,
    name: "Galaxy S22",
    category: "Mobile",
    Price: "$7299",
    Image: "https://images.samsung.com/is/image/samsung/p6pim/in/2202/gallery/in-galaxy-s22-s901-412948-sm-s901ezgdinu-530964621?$PD_GALLERY_L_JPG$"
  },
  {
    no: 4,
    name: "Galaxy S22 Ultra",
    category: "Mobile",
    Price: "$11899",
    Image: "https://images.samsung.com/is/image/samsung/p6pim/in/2202/gallery/in-galaxy-s22-ultra-s908-413016-sm-s908edrhinu-530969148?$PD_GALLERY_L_JPG$"
  },


  {
    no: 5,
    name: "Galaxy Book2 Pro",
    category: "Laptops",
    Price: "₹ 114990.00",
    Image: "https://images.samsung.com/is/image/samsung/assets/in/in-galaxy-book2-360_new.png?$N_96_PNG$"
  },

  {
    no: 6,
    name: "Galaxy Book2 360",
    category: "Laptops",
    Price: "₹ 99990.00",
    Image: "https://images.samsung.com/is/image/samsung/assets/in/in-galaxy-book2-360_new.png?$N_96_PNG$"
  },
  {
    no: 7,
    name: "Galaxy Book2 360",
    category: "Laptops",
    Price: "₹ 105990.00",
    Image: "https://images.samsung.com/is/image/samsung/assets/in/in-galaxy-book2-360_new.png?$N_96_PNG$"
  },
  {
    no: 8,
    name: "Galaxy Book2 Go",
    category: "Laptops",
    Price: "₹ 124990.00",
    Image: "https://images.samsung.com/is/image/samsung/assets/in/in-galaxy-book2-360_new.png?$N_96_PNG$"
  },
]

/* GET home page. */
router.get('/', function (req, res) {
  res.header('Cache-control', 'no-cache,private, no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');
  if (req.session.login) {
    res.render('home', { products })
  }
  else {
    res.render('login', { 'value': req.session.loginError });
    req.session.loginError = false

  }

});

//login to home page
router.post('/login', function (req, res, next) {
  res.header('Cache-control', 'no-cache,private, no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');
  const Email = "muhammedishan1997@gmail.com"
  const Password = "12345"
  if (req.body.email == Email && req.body.password == Password) {
    req.session.user = req.body;
    req.session.login = true;
    res.redirect('/home');
  } else {
    req.session.loginError = true;
    res.redirect('/login');
  }
});
//login to homepage end

router.get('/table', function (req, res) {
  res.render('table', { products })
})
router.get('/list', function (req, res) {
  res.render('list', { products })
})

router.get('/login', function (req, res) {
  res.render('login')
})

router.get('/home', function (req, res, next) {
  res.render('home', { products });
});


module.exports = router;

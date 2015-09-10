Router.configure({
  layoutTemplate: 'layout',
  
  // yieldRegions: {
  //   'footer': {to: 'footer'},
  //   'menu': {to: 'menu'}
  // }
});


Router.route('/', function () {
  this.render('home');
});

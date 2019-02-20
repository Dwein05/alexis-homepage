import user from './user'

const hello = (name) => { return `hello ${name}`; };

console.log(hello(user))

$('.menu__icon').on('click', function(){
  $('body').toggleClass('open');
});
const cavesa = document.getElementById('header');
const mas = document.getElementById('mls');

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 300){
    header.style.backgroundColor = '#036';
    header.style.height = '80px';
    mls.style.display = 'none';
  } else{
    header.style.backgroundColor = '#299684';
    header.style.height = '100px';
     mls.style.display = 'block';
  }
});

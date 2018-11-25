const panels = document.querySelectorAll('.panel');

function toggleOpen(){
  this.classList.toggle('open');
}

function toggleActive(e) {
  // console.log(e.propertyName);
  if (e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
 }
}

panels.forEach(function(panel){
  panel.addEventListener('click', toggleOpen);
});

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

// モーデル記述
window.addEventListener('load', function(){
  const buttons = document.querySelectorAll('.btn');
  const modal = document.getElementsByClassName('modal');
  const back = document.querySelectorAll('.back');

  buttons[0].addEventListener('click', function(){
    modal[0].style.display="block";
  })
 back[0].addEventListener('click', function(){
  modal[0].style.display='none';
});
});



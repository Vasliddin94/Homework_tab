function Positive() {
  let a=document.querySelector('.indicator');
  a.innerHTML='<p>Postive</p>'
  let pos=document.querySelector('#pos')
  pos.style.color='black'
  let neg=document.querySelector('#neg')
  neg.style.color='#e3e1e1'
  let neu=document.querySelector('#neu')
  neu.style.color='#e3e1e1'
  let box=document.querySelector('.box')
  box.style.backgroundColor='#88B04B'
}

function Negative() {
  let a=document.querySelector('.indicator');
  a.innerHTML='<p>Negative</p>'
  let pos=document.querySelector('#pos')
  pos.style.color='#e3e1e1'
  let neg=document.querySelector('#neg')
  neg.style.color='black'
  let neu=document.querySelector('#neu')
  neu.style.color='#e3e1e1'
  let box=document.querySelector('.box')
  box.style.backgroundColor='#dd4124'
}

function Neutral() {
  let a=document.querySelector('.indicator');
  a.innerHTML='<p>Neutral</p>'
  let neu=document.querySelector('#neu')
  neu.style.color='black'
  let neg=document.querySelector('#neg')
  neg.style.color='#e3e1e1'
  let pos=document.querySelector('#pos')
  pos.style.color='#e3e1e1'
  let box=document.querySelector('.box')
  box.style.backgroundColor='#DFCFBE'
}

function Change() {
  let input=document.querySelector('#inp').value;
  if (input=='1') {
    Positive();
  }
  else if (input=='2') {
    Negative();
  }
  else if (input=='3') {
    Neutral();
  }
  else {
    alert('1 dan 3 gacha sonlardan birini kiriting')
  }
}

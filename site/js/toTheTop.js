setTimeout(toTheTop,7000);
function toTheTop(){
  // console.log(window.scrollY);
  let display='flex';
  if(scrollY<100){
    display='none';
  }
    let arrowTop=document.createElement('div');
    arrowTop.style.cssText=`
    display:${display};
    position:fixed;
    bottom:27px;
    right:27px;
    font-size:37px;
    z-index:999;
    `;
    arrowTop.innerHTML=`🔝`;
    arrowTop.setAttribute('id','toTheTop');
    document.querySelector('body').append(arrowTop);
  document.getElementById('toTheTop').addEventListener('click',()=>{
      window.scrollTo(0,0);
  });
  window.addEventListener('scroll',()=>{
    // console.log(window.scrollY);

    if(window.scrollY==0){
      document.querySelector('#toTheTop').style.cssText=`display:none;`;
    }else if(window.scrollY<300){
      document.getElementById('toTheTop').style.cssText=`
      display:none;
      `;
    }else if(window.scrollY>300){
      document.getElementById('toTheTop').style.cssText=`
      display:flex;
      position:fixed;
      bottom:27px;
      right:27px;
      font-size:37px;
      z-index:97;
      `;
    }else{
      // console.log('else');
    }

  });
};

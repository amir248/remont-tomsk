// window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
  const siteState={};
  siteState.submittingTheForm=true;
    let telForm=document.querySelector('#tel').value;
    let nameForm=document.querySelector('#name').value;
    function touchMove(event) {
      // console.log(document.querySelectorAll('.range_box input').value);
      if(this.value == 100){
        if(siteState.submittingTheForm==true){
          // console.log("data range 100!!!!!!!");
          // if()
          let formData = new FormData(document.forms.formOk);
          let xhr = new XMLHttpRequest();
          xhr.open('POST', 'https://remont-tomsk.ru/site/php/form.php');
          xhr.send(formData);
          siteState.submittingTheForm=false;
          setTimeout(()=>{
            document.querySelector('#messages').innerHTML=`<h3 style="color:red;font-size:17px;text-shadow:black 1px 1px;">Ваше сообщение успешно<br> отправлено!</h3>`;
            document.formOk.reset();
            setTimeout(()=>{
              document.querySelector('#messages > h3:nth-child(1)').remove();
              document.formOk.reset();

              //   stateSite.phoneNumberIsNumber=false;
            },5700);
            // document.location.reload();
          },170);
          setTimeout(()=>{
            window.location.href="https://remont-tomsk.ru/thank/";
          },1333);
        }else if(siteState.submittingTheForm==false){
          setTimeout(()=>{
            document.querySelector('#messages').innerHTML=`<h3 style="color:red;font-size:17px;text-shadow:black 1px 1px;">Ваше сообщение уже было <br> отправлено!</h3>`;
            document.formOk.reset();
            setTimeout(()=>{
              document.querySelector('#messages > h3:nth-child(1)').remove();
              document.formOk.reset();

              //   stateSite.phoneNumberIsNumber=false;
            },5700);
            // document.location.reload();
          },170);
        }
        
        }else{
          // console.log('ELSE')
        }
          // this.closest('.range_box').querySelector('.rangeValue').innerHTML = this.value;
        }
        setTimeout(()=>{
            document.querySelector('#range').addEventListener('touchmove', touchMove);
            document.querySelector('#range').addEventListener('mousemove', touchMove);
        },300);
    },777);
    

//   });

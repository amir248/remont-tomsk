setTimeout(()=>{
  // console.log('It\'s modal Window');
  const siteState={};
  function first(){
    document.querySelector('#contactUsClick').addEventListener('click', ()=>{
      // console.log('modalWindow');
      siteState.submittingTheFormFooter=true;
      let modalWindowOpen=document.createElement('section');
      modalWindowOpen.style.cssText=`
      display:flex;
      position:fixed;
      justify-content:center;
      align-items:center;
      top:0;
      height:100vh;
      width:100%;
      max-width:100%;
      background:rgba(205,205,205,0.5);
      z-index:99;
      // filter: blur(4px);
      `;
      modalWindowOpen.setAttribute('id','modalWindowID');
      document.querySelector('body').style.cssText="overflow:hidden";
      document.querySelector('body').append(modalWindowOpen);
      let communistBox=document.createElement('form');
      communistBox.style.cssText=`
      margin-top:35px;
      font-size:22px;
      display:flex;
      justify-content:space-around;
      align-items:center;
      width:100%;
      max-width:350px;
      height:350px;
      background:white;
      flex-direction:column;
      border-radius:7px;
      `;
      communistBox.setAttribute('method','POST');
      communistBox.setAttribute('name','formFooter');

      if(window.location=='https://remont-tomsk.ru/'){
        communistBox.setAttribute('action','site/php/form.php');

      }else{
        // communistBox.setAttribute('action','../site/php/form.php');
        communistBox.setAttribute('action','http://localhost:3000/site/php/formOld.php');

      }
      communistBox.innerHTML=`Обратный звонок`;
      document.querySelector('#modalWindowID').append(communistBox);
      let inputName=document.createElement('input');
      inputName.style.cssText=`
      margin-top:0px;
      width:170px;
      height:40px;
      border:1px solid black;
      border-radius:7px;
      `;
      // let closeWindow=document.createElement('p');
      // closeWindow.style.cssText=``
      document.querySelector('#modalWindowID > form:nth-child(1)').append(inputName);
      let inputTel=document.createElement('input');
      inputTel.style.cssText=`
      width:170px;
      height:40px;
      border:1px solid black;
      border-radius:7px;
      `;
      document.querySelector('#modalWindowID > form:nth-child(1) > input:nth-child(1)').placeholder='Имя';
      document.querySelector('#modalWindowID > form:nth-child(1) > input:nth-child(1)').setAttribute('name','nameFooter');

      document.querySelector('#modalWindowID > form:nth-child(1)').append(inputTel);
      document.querySelector('#modalWindowID > form:nth-child(1) > input:nth-child(2)').placeholder=`Номер телефона`;
      document.querySelector('#modalWindowID > form:nth-child(1) > input:nth-child(2)').setAttribute('name','telFooter');

      let div=document.createElement('div');
      div.classList.add('range_box');
      document.querySelector('#modalWindowID > form:nth-child(1)').append(div);

      let inputButton=document.createElement('input');
      inputButton.style.cssText=`
      width:170px;
      height:40px;
      border:1px solid black;
      border-radius:7px;
      background:blue;
      color:white;
      font-size:22px;
      // margin-bottom:35px;
      `;
      // inputButton.innerHTML=`Отправить`;
      inputButton.setAttribute('type','range');
      inputButton.setAttribute('name','button');
      inputButton.setAttribute('value','0');
      inputButton.setAttribute('min','0');
      inputButton.setAttribute('max','100');
      inputButton.setAttribute('id','rangeFooter');
      document.querySelector('#modalWindowID > form:nth-child(1) > div').append(inputButton);

      let alert7=document.createElement('h5');
      alert7.innerHTML=`Для отправки данных перетащите ползунок вправо`;
      document.querySelector('#modalWindowID > form:nth-child(1)').append(alert7);

      let closeWindow = document.createElement("p");
      closeWindow.innerHTML=`X`;
      closeWindow.style.cssText=`color:red;`;
      closeWindow.setAttribute('id','close');
      document.querySelector('#modalWindowID > form:nth-child(1)').append(closeWindow);
      let messagesFooter=document.createElement('span');
      messagesFooter.setAttribute('id','messagesFooter');


      document.querySelector('#close').addEventListener('click',()=>{
        document.querySelector('body').style.cssText=`overflow:auto`;
        document.querySelector('#modalWindowID').remove();
      })
    });

  }//first()



  // const siteState={};
  // siteState.submittingTheFormFooter=true;
  function goForm(){
    if(document.querySelector('#telFooter')!=null){
      let telForm=document.querySelector('#telFooter').value;
    }
    if(document.querySelector('#nameFooter')!=null){
      let nameForm=document.querySelector('#nameFooter').value;
    }
    function touchMove(event) {
      console.log(document.querySelector('#rangeFooter').value);
      if(this.value == 100){
        if(siteState.submittingTheFormFooter==true){
          console.log("data range 100!!!!!!!");
          // if()
          let formData = new FormData(document.forms.formFooter);
          let xhr = new XMLHttpRequest();
          xhr.open('POST', 'http://localhost:3000/site/php/formOld.php');
          xhr.send(formData);
          siteState.submittingTheFormFooter=false;
          setTimeout(()=>{
            document.querySelector('#modalWindowID > form:nth-child(1) > h5:nth-child(4)').innerHTML=`<h3 style="color:red;font-size:17px;text-shadow:black 1px 1px;">Ваше сообщение успешно<br> отправлено!</h3>`;
            document.formFooter.reset();
            setTimeout(()=>{
              document.querySelector('body').style.cssText=`overflow:auto`;
              document.querySelector('#modalWindowID').remove();
              // document.querySelector('#modalWindowID > form:nth-child(1) > h5:nth-child(4)').remove();
              // document.formFooter.reset();

              //   stateSite.phoneNumberIsNumber=false;
            },700);
            // document.location.reload();
          },170);
        }else if(siteState.submittingTheFormFooter==false){
          setTimeout(()=>{
            if(document.querySelector('#modalWindowID > form:nth-child(1) > h5:nth-child(4)')!=null){
              document.querySelector('#modalWindowID > form:nth-child(1) > h5:nth-child(4)').innerHTML=`<h3 style="color:red;font-size:17px;text-shadow:black 1px 1px;">Ваше сообщение уже было <br> отправлено!</h3>`;
              document.formFooter.reset();
            }
            setTimeout(()=>{
              // document.querySelector('#messagesFooter > h3:nth-child(1)').remove();
              // document.formFooter.reset();
              document.querySelector('body').style.cssText=`overflow:auto`;
              if(document.querySelector('#modalWindow')!=null){
                document.querySelector('#modalWindowID').remove();
              }
              //   stateSite.phoneNumberIsNumber=false;
            },700);
            // document.location.reload();
          },170);
        }

      }else{
        console.log('ELSE')
      }
      // this.closest('.range_box').querySelector('.rangeValue').innerHTML = this.value;
    }
    setTimeout(()=>{
      if(document.querySelector('#rangeFooter')!=null){
        document.querySelector('#rangeFooter').addEventListener('touchmove', touchMove);
        document.querySelector('#rangeFooter').addEventListener('mousemove', touchMove);
      }
    },700);

  };//goForm();
  document.querySelector('#contactUsClick').addEventListener('click', ()=>{
    window.location.href='https://wa.clck.bar/79528808007';
  });

},5700);
// window.addEventListener('DOMContentLoaded',()=>{
//   console.log('contentLoaded');
// });

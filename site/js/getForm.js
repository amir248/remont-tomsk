setTimeout(()=>{

  const stateSite={
    formName:document.querySelector('#name').value,
    formTel: document.querySelector('#tel').value,
    phoneNumberIsNumber: false
  }
  let telForm=document.querySelector('#tel').value;
  let nameForm=document.querySelector('#name').value;
  document.querySelector('#tel').addEventListener('input',()=>{
    pattern="^\+7[1-9]{10}$";
    stateSite.formTel;
    // console.log(stateSite.formTel);
    // console.log(document.querySelector('#tel').value);
    let str=document.querySelector('#tel').value;
    let result = str.match(/^\+7[1-9]{10}$/);
    // console.log(result.length);
    if(result===null){
      // console.log('firt stateSite TWo');
      stateSite.phoneNumberIsNumber=false;
    }else if(result.length==1){
      // console.log('firt stateSite RESULT.length');
      stateSite.phoneNumberIsNumber=true;
    }else{
      // console.log("ELSE phoneNumberIsNumber");
      stateSite.phoneNumberIsNumber=false;
    }
  });
  function notRefresh(){
    function emptyOrNot(){
      if(document.querySelector('#name').value==''||document.querySelector('#tel').value==''){
        stateSite.formNotEmpty=false;
      }else{
        stateSite.formNotEmpty=true;
      }
    }

    document.querySelector('#notRef').addEventListener('click',()=>{
      emptyOrNot();
      validationForm();
    });//addeventListener
    document.querySelector('#importantForm').addEventListener('input',()=>{
      emptyOrNot();

    });
    function validationForm(){
      let formData = new FormData(document.forms.formOk);
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://remont-tomsk.ru/site/php/form.php');
      xhr.send(formData);
      setTimeout(()=>{
        document.querySelector('#messages').innerHTML=``;
        // <h3 style="color:red;font-size:17px;text-shadow:black 1px 1px;">Ваше сообщение успешно<br> отправлено!</h3>
        document.formOk.reset();
        setTimeout(()=>{
          document.querySelector('#messages > h3:nth-child(1)').remove();
          document.formOk.reset();

          stateSite.phoneNumberIsNumber=false;
        },5700);
        // document.location.reload();
      },170);
      // if(stateSite.formNotEmpty==true){
      //   if(stateSite.phoneNumberIsNumber==false){
      //     document.querySelector('#messages').innerHTML=`<h3 style="color:red;font-size:17px;text-shadow:black 1px 1px;">Заполните номер <br> одними цифрами!</h3>`;
      //     // document.formOk.reset();
      //     setTimeout(()=>{
      //       document.querySelector('#messages > h3:nth-child(1)').remove();
      //     },5700);
      //     console.log(phoneNumberIsNumber);
      //   }else{
      //
      //   }
      // }else if(stateSite.formNotEmpty==false){
      //   document.querySelector('#messages').innerHTML=`<h3 style="color:red;font-size:17px;text-shadow:black 1px 1px;">Заполните все поля <br> формы Корректно!</h3>`;
      //   // document.formOk.reset();
      //   setTimeout(()=>{
      //     document.querySelector('#messages > h3:nth-child(1)').remove();
      //
      //   },5700);
      // }else{
      //   console.log('else '+phoneNumberIsNumber);
      // }
    }//validationForm
  };
  notRefresh();
},3733);




// let telForm=document.querySelector('#importantForm > input:nth-child(3)').value;
// let nameForm=document.querySelector('#importantForm > input:nth-child(2)').value;
//
// function notRefresh(){
//   const myHeaders = new Headers();
//   myHeaders.append("tel", "tel");
//   myHeaders.append("name", "name");
//
//   const formdata = new FormData();
//   formdata.append("tel", `${telForm}`);
//   formdata.append("name", `${nameForm}`);
//
//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: formdata,
//     redirect: "follow"
//   };
// // https://gaa.iao.ru/remont_tomsk/public_html/site/php/form.php
//   fetch("/site/php/form.php", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));
//   document.querySelector('#importantForm').addEventListener('submit', (event)=>{
//     event.preventDefault();
//     let goPost= {
//       name: 'name',
//       tel: 'tel'
//     }
//   });
// };

const stateUsing={
  countClick:'0'
}
document.addEventListener('DOMContentLoaded',  ()=>{
  // console.log('menu INCLUDE');

  stateUsing.countClick+0;
  if(window.innerWidth>700){
    // console.log(window.innerWidth+"__"+window.innerHeight+ "__"+window.scrollY);
  }else{
    // console.log(window.innerWidth + " < 700px");
    setTimeout(()=>{

      let menuList=document.querySelector('.logo > nav');
      menuList.addEventListener('click',()=>{
        stateUsing.countClick++;
        // console.log('click '+stateUsing.countClick);
        if(stateUsing.countClick==1){
          function whatIsScrollY(){

            if(window.scrollY!==0){
              window.scrollTo(0, 0);
            }
          }//whatIsScrollY
          whatIsScrollY();
          menuOpen();

        }else if(stateUsing.countClick==2){

          menuClose();
        }// addEventListener  menuLIst IF ELSE
      });
    },3370);
  }
});



   function menuOpen(){
      console.log(window.scrollY);
      setTimeout(()=>{
        document.querySelector('.logo > nav > span:nth-child(1)').style.cssText=`
        transform: rotate(35deg);
        transition: all 1s ease-out;
        margin-top: 0;
        margin-bottom: 0;
        `;
        document.querySelector('.logo > nav > span:nth-child(2)').style.cssText=`
        display:none;
        transition: all 1s ease-out;
        `;
        document.querySelector('.logo > nav > span:nth-child(3)').style.cssText=`
        transform: rotate(-35deg);
        transition: all 1s ease-out;
        margin-bottom: 0;
        margin-top: 0;
        `;
        document.querySelector('.logo > nav').style.cssText=`
        height: 35px;
        transition: all 1s ease-out;
        `;

        let listOfSections=document.createElement('div');
        listOfSections.setAttribute('id','menusH');
        listOfSections.style.cssText=`
        opacity:0;
        width:100%;
        height:0;
        // position:absolute;
        // top:0;
        transition: all 3s ease-out;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;

        `;
        document.querySelector('body').style.cssText=`
        overflow:hidden;
        `;
        document.querySelector('.logo > nav').style.cssText=`
        top:0;
        position:fixed;
        transition: all 3s ease-out;
        `;
        setTimeout(()=>{
          listOfSections.style.cssText=`
          opacity:1;
          background:#4e8eca;
          transition: all 1s ease-out;
          position:relative;
          top:0;
          height:100vh;
          // x-index:0;
          display:flex;
          transition: all 1s ease-out;
          justify-content:center;
          align-items:center;
          flex-direction:column;
          `;
        },270);
        document.querySelector('body').prepend(listOfSections);
        // document.querySelector('#menusH').style.cssText=`
        //   `
        setTimeout(()=>{
          document.querySelector('#menusH').innerHTML=`
          <ul>
          <a href="/">
          <li>Главная</li>
          </a>
          <!-- <a href="/remont-kvartir/">
            <li>Ремонт квартир</li>
          </a> -->
          <!-- <a href="/nashi-proekty/">
          <li>Ремонт офисов</li>
          </a> -->
          <!-- <a href="/remont-domov/">
          <li>Ремонт квартир, домов и коттеджей</li>
          </a> -->
          <!-- <a href="/poryadok-rabot/">
          <li>Ремонт для бизнеса</li>
          </a> -->
          <a href="/remont-vann-i-sanuzlov-2/">
          <li>Ремонт ванной комнаты и санузла</li>
          </a>
          <a href="/uslugi/">
          <li>Услуги</li>
          </a>
          <a href="/prajs-list/">
          <li>Прайс-лист</li>
          </a>
          <a href="/portfolio/">
          <li>Портфолио</li>
          </a>
          <a href="https://wa.me/79528808007">
          <li>Написать в ватсап</li>
          </a>
          </ul>
          `;

        },300);
        setTimeout(()=>{
          if(document.querySelector('#menusH')!='null'){
            document.querySelector("#menusH > ul").addEventListener('click',()=>{
              stateUsing.countClick=0;
              document.querySelector('body').style.cssText=`overflow:auto`;
              menuClose();
              // console.log('CL');
            });
          }
        },570);

      },100);
    }//menuOpen

    function menuClose(){
      console.log('statu'+ stateUsing.countClick);
      document.querySelector('#menusH').innerHTML=`<span style='font-size:175px;'>👋</span>`;
      setTimeout(()=>{
        document.querySelector('#menusH')=`
        opacity:1;
        background:#4e8eca;
        transition: all 3s ease-out;
        position:relative;
        top:0;
        height:100vh;
        display:flex;
        transition: all 3s ease-out;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        `;
      },33);
      document.querySelector('#menusH').style.cssText=`
        opacity:0;
        background:transparent;
        transition: all 1s ease-out;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        height:0;
position:relative;
        transition: all 1s ease-out;

      `;
      document.querySelector('.logo > nav > span:nth-child(1)').style.cssText=`
      transform: rotate(0deg);
      margin-bottom: 3px;
      margin-top:3px;
      transition: all 3s ease-out;
      `;
      document.querySelector('.logo > nav > span:nth-child(2)').style.cssText=`
      display:block;
      transition: all 3s ease-out;
      `;
      document.querySelector('.logo > nav > span:nth-child(3)').style.cssText=`
      transform: rotate(0deg);
      transition: all 1s ease-out;
      margin-bottom: 7px;
      margin-top: 3px;
      `;
      document.querySelector('.logo > nav').style.cssText=`
      height:37px;
      transition: all 1s ease-out;
      `;

      stateUsing.countClick=0;
      setTimeout(()=>{

      document.querySelector('body').style.cssText=`
      overflow:hidden;
      `;
      document.getElementById('menusH').remove();
      document.querySelector('body').style.cssText=`overflow:auto`;
    },700);
    };//menuClose

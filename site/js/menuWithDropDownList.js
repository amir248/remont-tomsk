const stateUsing={
  countClick:'0',
  countClickOnDropDownMenu:'0'
}
document.addEventListener('DOMContentLoaded', async ()=>{
  // console.log('menu INCLUDE');
  stateUsing.countClick+0;
  let promise=new Promise((resolve, reject)=>{
    if(window.innerWidth>700){
      // console.log(window.innerWidth+"__"+window.innerHeight+ "__"+window.scrollY);
    }else{
      // console.log(window.innerWidth + " < 700px");
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
          setTimeout(()=>{
            menuClose();
          },770);
        }// addEventListener  menuLIst IF ELSE
      });
    };//ELSE
  });//Promise
  let result=await promise;
});


  function onClickMenuList(){
                  // document.querySelector('#hover').addEventListener('click',()=>{
                  //   if(window.innerWidth<700){
                  //     menuClose();
                  //   }
                  //   setTimeout(()=>{
                  //     // window.location.href='/portfolio/';
                  //     window.location.href="/uslugi/";
                  //   },530);
                  // });
                  document.querySelector('#bathroomAndToiletRemovation').addEventListener('click',()=>{
                    if(window.innerWidth<700){
                      menuClose();
                    }
                    setTimeout(()=>{
                      // window.location.href='/portfolio/';
                      window.location.href="/remont-vann-i-sanuzlov-2/";
                    },530);
                  });
                  document.querySelector('#stretchCeiling').addEventListener('click',()=>{
                    if(window.innerWidth<700){
                      menuClose();
                    }
                    setTimeout(()=>{
                      window.location.href="/uslugi/stretchCeiling/";
                    },530);
                  });
                  document.querySelector('#decorativePlaster').addEventListener('click',()=>{
                    if(window.innerWidth<700){
                      menuClose();
                    }
                    setTimeout(()=>{
                      window.location.href="/uslugi/decorativePlaster/";
                    },530)
                  });
                  document.querySelector('#furnitureMaking').addEventListener('click',()=>{
                    if(window.innerWidth<700){
                      menuClose();
                    }
                    setTimeout(()=>{
                      window.location.href="/uslugi/furniture-making/";
                    },530)
                  });
                  document.querySelector('#dismantlingWorks').addEventListener('click',()=>{
                    if(window.innerWidth<700){
                      menuClose();
                    }
                    setTimeout(()=>{
                      window.location.href="/uslugi/dismantlingWorks/";
                    },530)
                  });
                  document.querySelector('#doorInstallation').addEventListener('click',()=>{
                    if(window.innerWidth<700){
                      menuClose();
                    }
                    setTimeout(()=>{
                      window.location.href="/uslugi/door-installation/";
                    },530)
                  });
                  document.querySelector('#plumbingWork').addEventListener('click',()=>{
                    if(window.innerWidth<700){
                      menuClose();
                    }
                    setTimeout(()=>{
                      window.location.href="/uslugi/plumbingWork/";
                    },530)
                  });
                  document.querySelector('#electricInstallationWork').addEventListener('click',()=>{
                    if(window.innerWidth<700){
                      menuClose();
                    }
                    setTimeout(()=>{
                      window.location.href="/uslugi/electricInstallationWork/";
                    },530)
                  });
                  document.querySelector('#turnkeyRedevelopment').addEventListener('click',()=>{
                    if(window.innerWidth<700){
                      menuClose();
                    }
                    setTimeout(()=>{
                      window.location.href="/uslugi/turnkeyRedevelopment/";
                    },530)
                  });
                  document.querySelector('#plasticWindows').addEventListener('click',()=>{
                    if(window.innerWidth<700){
                      menuClose();
                    }
                    setTimeout(()=>{
                      window.location.href="/uslugi/plastic-windows/";
                    },530)
                  });
                  document.querySelector('#weldingWork').addEventListener('click',()=>{
                    if(window.innerWidth<700){
                      menuClose();
                    }
                    setTimeout(()=>{
                      window.location.href="/uslugi/welding-work/";
                    },530)
                  });


                  // document.querySelector('#remont-vann-i-sanuzlov-2').addEventListener('click',()=>{
                  //   setTimeout(()=>{
                  //     window.location.href='prajs-list/';
                  //   },330);
                  // });
                  if(window.innerWidth<700){
                    setTimeout(()=>{


                    },300);
                  }
  }//onClickMenuList();

   function menuOpen(){
      // console.log(window.scrollY);
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
          <div id="home">
            <li>Главная</li>
          </div>
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

          <!-- <div id="remont-vann-i-sanuzlov-2">
            <li>Ремонт ванной комнаты и санузла</li>
          </div> -->

          <!-- <div id="stretchCeiling">
            <li>Натяжные потолки</li>
          </div> -->

          <!-- <a href="/uslugi/">
          <li>Услуги</li>
          </a> -->
          <div id="uslugi">
            <li class="arrow">Услуги</li>
            <span id='dropListOk'></span>
          </div>
          <div id="prajs-list">
            <li>Прайс-лист</li>
          </div>
          <div id="portfolio">
            <li>Портфолио</li>
          </div>
          <div id="whatsApp">
            <li>Написать в ватсап</li>
          </div>
          </ul>
          `;
          setTimeout(()=>{
            if(document.querySelector('#menusH')!=null){
              document.querySelector("#menusH > ul > div > li").addEventListener('click',()=>{
                stateUsing.countClick=0;
                document.querySelector('body').style.cssText=`overflow:auto`;
                menuClose();
                // console.log('CL');
              });
            }
            document.querySelector('#home').addEventListener('click',()=>{
              menuClose();
              setTimeout(()=>{
                window.location.href='https://remont-tomsk.ru/';
              },330);
            });
            // document.querySelector('#stretchCeiling').addEventListener('click',()=>{
            //   if(window.innerWidth<700){
            //   }
            //     menuClose();
            //   setTimeout(()=>{
            //     window.location.href="/200/stretchCeiling/";
            //   },330);
            // });
            // document.querySelector('#remont-vann-i-sanuzlov-2').addEventListener('click',()=>{
              //   menuClose();
              //   setTimeout(()=>{
                //     window.location.href='/remont-vann-i-sanuzlov-2/';
                //   },330);
                // });
                document.querySelector('#prajs-list').addEventListener('click',()=>{
                  menuClose();
                  setTimeout(()=>{
                    window.location.href='/prajs-list/';
                  },330);
                });
                document.querySelector('#portfolio').addEventListener('click',()=>{
                  menuClose();
                  setTimeout(()=>{
                    window.location.href='/portfolio/';
                  },330);
                });
                document.querySelector('#whatsApp').addEventListener('click',()=>{
                  menuClose();
                  setTimeout(()=>{
                    window.location.href='https://wa.me/79528808007';
                  },330);
                });
          },300);


          document.querySelector('#uslugi').addEventListener('click',()=>{
            stateUsing.countClickOnDropDownMenu++;

            if(stateUsing.countClickOnDropDownMenu==1){
              let dropDownList=document.createElement('ul');
              dropDownList.style.cssText=`
              opacity:0;
              color:#e3e365;
              text-shadow:1px 1px black;
              list-style-type:none;
              text-decoration: none;
              transition: all 1s ease-out;
              `;
              dropDownList.setAttribute('id','dropList');
              dropDownList.innerHTML=`<li id="bathroomAndToiletRemovation">Ремонт ванной и туалета</li>
              <li id="stretchCeiling">Натяжные потолки</li>
              <li id="decorativePlaster">Декоративная штукатурка</li>
              <li id='furnitureMaking'>Изготовление мебели</li>
              <li id="dismantlingWorks">Демонтажные работы</li>
              <li id="plumbingWork">Сантехнические работы</li>
              <li id="electricInstallationWork">Электромонтажные работы</li>
              <li id="turnkeyRedevelopment">Перепланировка под ключ</li>
              <li id='doorInstallation'>Установка дверей</li>
              <li id='plasticWindows'>Пластиковые окна</li>
              <li id='weldingWork'>Сварочные работы</li>`;
              document.querySelector('#uslugi > span').append(dropDownList);

              setTimeout(()=>{
                document.querySelector('#uslugi > .arrow').style.cssText=`
                opacity:1;
                background:#4e8eca;
                transition: all 1s ease-out;
                `;
                document.querySelector('#dropList').style.cssText=`
                opacity: 1;
                color: rgb(227, 227, 101);
                text-shadow: black 1px 1px;
                list-style-type: none;
                text-decoration: none;
                transition: all 1s ease-out;
                `;
              document.querySelector('.arrow').style.setProperty('--position-arrow','rotate(-90deg)');
              },300);
              onClickMenuList();
            }else if(stateUsing.countClickOnDropDownMenu==2){
              document.querySelector('#dropList').remove();
              stateUsing.countClickOnDropDownMenu=0;
              document.querySelector('.arrow').style.setProperty('--position-arrow','rotate(90deg)');
            }else if(stateUsing.countClickOnDropDownMenu>=2){
              let dropDownList=document.createElement('ul');
              dropDownList.style.cssText=`
              opacity:0;
              color:#e3e365;
              text-shadow:1px 1px black;
              list-style-type:none;
              text-decoration: none;
              transition: all 1s ease-out;
              `;
              dropDownList.setAttribute('id','dropList');
              dropDownList.innerHTML=`<li id="bathroomAndToiletRemovation">Ремонт ванной и туалета</li>
              <li id="stretchCeiling">Натяжные потолки</li>
              <li id="decorativePlaster">Декоративная штукатурка</li>
              <li id='furnitureMaking'>Изготовление мебели</li>
              <li id="dismantlingWorks">Демонтажные работы</li>
              <li id="plumbingWork">Сантехнические работы</li>
              <li id="electricInstallationWork">Электромонтажные работы</li>
              <li id="turnkeyRedevelopment">Перепланировка под ключ</li>
              <li id='doorInstallation'>Установка дверей</li>
              <li id='plasticWindows'>Пластиковые окна</li>
              <li id='weldingWork'>Сварочные работы</li>`;
              document.querySelector('#uslugi > span').append(dropDownList);

              setTimeout(()=>{
                document.querySelector('#uslugi > .arrow').style.cssText=`
                opacity:1;
                background:#4e8eca;
                transition: all 1s ease-out;
                `;
                document.querySelector('#dropList').style.cssText=`
                opacity: 1;
                color: rgb(227, 227, 101);
                text-shadow: black 1px 1px;
                list-style-type: none;
                text-decoration: none;
                transition: all 1s ease-out;
                `;
              document.querySelector('.arrow').style.setProperty('--position-arrow','rotate(-90deg)');
              },300);
              onClickMenuList();
              stateUsing.countClickOnDropDownMenu=1;
            }else{
              // console.log('Else '+ stateUsing.countClickOnDropDownMenu);
              document.querySelector('#dropList').remove();
              stateUsing.countClickOnDropDownMenu=0;
              document.querySelector('.arrow').style.setProperty('--position-arrow','rotate(90deg)');
            }
              // window.location.href='remont-vann-i-sanuzlov-2';
          });

        },100);

      },100);
    }//menuOpen

    function menuClose(){
      // console.log('statu'+ stateUsing.countClick);
      document.querySelector('#menusH').innerHTML=`<span style='font-size:175px;'>👋</span>`;
      setTimeout(()=>{
        document.querySelector('#menusH')=`
        opacity:1;
        background:#4e8eca;
        position:relative;
        top:0;
        height:100vh;
        display:flex;
        transition: all 1s ease-out;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        `;
        // document.querySelector('.arrow').style.cssText=`
        //   height:100%;
        //   transition: all 1s ease-out;
        // `;
      },300);
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


// it's decstope
setTimeout(()=>{
  onClickMenuList();

  document.querySelector('#hover').addEventListener('mouseover',()=>{
    document.querySelector('#hover').style.cssText=`
      border-radius:7px;
      background: #379990;
    `;
    document.querySelector('#services').style.cssText=`
    display:flex;
    position:absolute;
    margin-top:70px;
    justify-content:center;
    align-items:center;
    width:300px;
    // height:100%;
    flex-direction:column;
    background:#379990;
    z-index:1;
    border-radius:7px;
    color:#e3e365;
    text-shadow:1px 1px black;
    `;
  });
  document.querySelector('#services').addEventListener('mouseover',()=>{
    document.querySelector('#hover').style.cssText=`
      border-radius:7px;
      background:#379990;
    `;
    document.querySelector('#services').style.cssText=`
    display:flex;
    position:absolute;
    margin-top:70px;
    justify-content:center;
    align-items:center;
    width:300px;
    // height:100%;
    flex-direction:column;
    background:#379990;
    z-index:1;
    border-radius:7px;
    color:#e3e365;
    text-shadow:1px 1px black;
    `;
  });
  document.querySelector('#hover').addEventListener('mouseout',()=>{
    document.querySelector('#services').style.cssText=`
    display:none;

    `;
    document.querySelector('#hover').style.cssText=`
background: none;
    `;
  });
  document.querySelector('#services').addEventListener('mouseout',()=>{
    document.querySelector('#services').style.cssText=`
    display:none;

    `;
    document.querySelector('#hover').style.cssText=`
      background: none;
    `;
});
},700);

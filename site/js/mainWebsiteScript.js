function first(){
    return new Promise((resolve)=>{
        function oKiDoki(){
            console.log('first <br> This script was the first in the script queue');
        }
        setTimeout(()=>{
            resolve(oKiDoki());
        },0)
    });
};//it's first function
function second(){
    return new Promise((resolve)=>{
        function yesGoTo(){
            console.log('second <br> This script was the second in the script queue');
        }
        setTimeout(()=>{
            resolve(yesGoTo());
        },0)
    })
}

function includeHtml(){
    return new Promise((resolve)=>{
        function including(){
            const includ=document.createElement('script');
            includ.src="https://remont-tomsk.ru/site/js/includeHTML.js";///home/amir/git/remont-tomsk.ru/public_html/site/js/includeHTML.js
            document.querySelector('body').append(includ);
        }
        setTimeout(()=>{
            resolve(including());
        },0)
    });
};// includeHtml
function modalWindow(){
    return new Promise((resolve)=>{
        function newWindow(){
            const window=document.createElement('script');
            window.src="https://remont-tomsk.ru/site/js/modalWindow.js";
            document.querySelector('body').append(window);
        }
        setTimeout(()=>{
            resolve(newWindow());
        });
    },3000);
};//modalWindow
function calc(){
    return new Promise((resolve)=>{
        function oKcalc(){
                const calco=document.createElement('script');
                calco.src="https://remont-tomsk.ru/site/js/calculator.js";
                document.querySelector('body').append(calco);
        }
        setTimeout(()=>{
            resolve(oKcalc());
        },0);
    });
};//calc
function dropDownList(){
    return new Promise((resolve)=>{
        function listBist(){
            const dropListOk=document.createElement('script');
            dropListOk.src="https://remont-tomsk.ru/site/js/newsMenuThatOpenEasy.js";
            // dropListOk.src="../site/js/newsMenuThatOpenEasy.js";
            document.querySelector('body').append(dropListOk);
        }
        setTimeout(()=>{
            resolve(listBist());
        },0);
    });
}//dropDownList
function buttonToGoToTheTop(){
    return new Promise((resolve)=>{
        function yesItsTop(){
            const goToTop=document.createElement('script');
            goToTop.src="https://remont-tomsk.ru/site/js/toTheTop.js";
            document.querySelector('body').append(goToTop);
        }
        setTimeout(()=>{
            resolve(yesItsTop());
        },0);
    })
};//buttonToGoToTheTop
function swiper(){
    return new Promise((resolve)=>{
        function yesSwiper(){
            const swiperBox=document.createElement('script');
            swiperBox.src="https://remont-tomsk.ru/site/js/swiper-bundle.min.js";
            document.querySelector('body').append(swiperBox);
        }
        setTimeout(()=>{
            resolve(yesSwiper());
        },0);
    })
};//swiper
function humanOrNot(){
    return new Promise((resolve)=>{
        function yesHuman(){
            const humans=document.createElement('script');
            humans.src="https://remont-tomsk.ru/site/js/humanOrNot.js";
            document.querySelector('body').append(humans);
        }
        setTimeout(()=>{
            resolve(yesHuman());
        },0);
    });
};//humanOrNot
function enlargeGallary(){
    return new Promise((resolve)=>{
        function scriptToDocument(){
            const gallaryScript=document.createElement('script');
            gallaryScript.src="https://remont-tomsk.ru/site/js/enlargeImageInGallery.js";
            document.querySelector('body').append(gallaryScript);
        }
        setTimeout(()=>{
            resolve(scriptToDocument());
        },0);
    });
};//enlargeGallary
function whatsAppToMessages(){
    return new Promise((resolve)=>{
        // That article was here https://verstaem.online/blog/otpravka-soobshheniya-s-sajta-v-whatsapp/
        function goMeessages(){
            const form = document.querySelector('.form');
            const number = '+79528808007';
            // const number = '+79528885656';
            function sendToWhatsapp( phone) {
                let messages='Здравствуйте! Нам нужен ремонт ...'
                // let messages=document.querySelector("#textMessages").value;

            // text = encodeURIComponent(text);
            let url = `https://wa.me/${number}?text=${messages}`;
            window.open(url);
            }
            form.addEventListener('submit', (e) => {
            e.preventDefault();
            // const text = e.currentTarget.querySelector('input').value;
            sendToWhatsapp( number);
            });
        }
        setTimeout(()=>{
            window.onload = ()=>{
                document.querySelector('#messagesWhatsApp > button:nth-child(1)').removeAttribute("disabled");
            }
            resolve(goMeessages());

        },1);
    })
};//whatsAppToMessages;
window.addEventListener('DOMContentLoaded',mainFunction);
async function mainFunction(){
    await includeHtml();
    await dropDownList();
    await whatsAppToMessages();
    await calc();
    await swiper();
    // await humanOrNot();
    // await enlargeGallary();
    await modalWindow();
    await buttonToGoToTheTop();
    // await first();
    // await second();
}
    
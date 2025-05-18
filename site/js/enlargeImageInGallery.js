// .mySwiper > swiper-slide:nth-child(1) > picture:nth-child(1) > img:nth-child(1)
setTimeout(()=>{
    let enlarge=document.createElement('span');
    enlarge.innerHTML='🔍';
    enlarge.setAttribute('id','jsGalleryEnlarge');
    enlarge.style.cssText=`z-index:1;font-size:57px;opacity:0.7;position:absolute;display:flex;justify-content:center;align-items:center;right: 7%;top: 7%;`;
    document.querySelector('#jsGallery').prepend(enlarge);

    let plus=document.createElement('span');
    plus.innerHTML='+';
    plus.setAttribute('id',"pl");
    plus.style.cssText=`position:absolute;font-size:15px;top:15px;left:15px;`;
    document.querySelector('#jsGallery > span').prepend(plus);
    let countClickToPhoto=+0;
    document.querySelector('#jsGalleryEnlarge').addEventListener('click',()=>{
        countClickToPhoto++;
        if(countClickToPhoto==1){
            document.querySelector('#pl').innerHTML=`-`;
            // console.log('oK!!!')
            // document.querySelector('.swiper-slide-active > picture > img').style.cssText='width:100%;height:100%;position:fixed;top:0;display:block;object-fit:cover;';
            let bigIMG=document.createElement('img');
            // console.log(document.querySelector('.swiper-slide-active > picture > img').src);
            let imgToDo=document.querySelector('.swiper-slide-active > picture > img').src;
            bigIMG.setAttribute('src',imgToDo);
            bigIMG.setAttribute('id','toBigPhoto');
            bigIMG.style.cssText='position:fixed;top:0;width:100%;max-width:1300px;height:100vh;display:block;z-index:98;object-fit:cover;object-position: center 50%;';
            document.querySelector('main').append(bigIMG);
            document.querySelector('body').style.overflow="hidden";
        }else if(countClickToPhoto==2){
            document.querySelector('#toBigPhoto').remove();
            document.querySelector('#pl').innerHTML=`+`;
            countClickToPhoto=0;
            document.querySelector('body').style.overflow="auto";
        }
        

    });
},2777);


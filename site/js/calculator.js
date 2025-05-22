setTimeout(()=>{
    let selectValue=document.getElementById("calculator");

    function returnPrice(){
      let getValue=document.getElementById("calculator").value;
      let square=document.querySelector("#squares").value;
      function oK(x){
        return x*square;
      }
      let x=+0;
      if(getValue=='value1'){
        // console.log(getValue + square);
        x =1500;
        document.querySelector('#priceCalc').value=`${oK(x)}`;
      }else if(getValue=='value2'){
        // console.log(getValue );
        x =2000;
        document.querySelector('#priceCalc').value=`${oK(x)}`;

      }else if(getValue=='value3'){
        // console.log(getValue );
        x =2500;
        document.querySelector('#priceCalc').value=`${oK(x)}`;

      }else if(getValue=='value4'){
        // console.log(getValue );
        x =5000;
        document.querySelector('#priceCalc').value=`${oK(x)}`;

      }else{
        // console.log('notGEtValue');
      }
    }

    selectValue.addEventListener('change',()=>{
      returnPrice();
    });
    // change square
    let squareChange=document.getElementById("squares");
    squareChange.addEventListener('change',()=>{
      // console.log(document.querySelector("#squares").value);
      returnPrice();
    });
  },3400);

// console.log('Clac include');


  
        const form = document.querySelector('.form');
        const number = '+79528808007';
        // const number = '+79528885656';
        function sendToWhatsapp( phone) {
            let messages='Здравствуйте! Срочно нужен ремонт ...'
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
 
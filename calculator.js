let display = document.getElementById('display');

let bottons = Array.from(document.getElementsByClassName('botton'));


bottons.map(botton =>{
    botton.addEventListener('click',(e) =>{
        switch(e.target.innerText){
            case 'C':
                display.innerText='';
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;
            case '=':
                try{
                    display.innerText=eval(display.innerText);
                } catch{
                    display.innerText='Error!';
                }
                display.innerText= eval(display.innerText);
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})

let inputBox=document.getElementById('inputBox')
let buttons=document.querySelectorAll('.button')
let string=''
buttons.forEach(element=>
    element.addEventListener('click',doOpr))

function doOpr(b){
    if( b.currentTarget.innerText == '='){
        string=String(eval(string))
        inputBox.value=string
    }
    else if(b.currentTarget.innerText == 'AC'){
        string=''
        inputBox.value=string
    }
    else if(b.currentTarget.innerText == 'DEL'){
        string=string.substring(0,string.length-1)
        inputBox.value=string
    }
    else if(b.currentTarget.id == 'plusMinus'){
        string=String(-eval(string))
        inputBox.value=string
    }
    else{
            string+=b.currentTarget.innerText
            inputBox.value=string        
    }  
}
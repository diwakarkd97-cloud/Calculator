
const display = document.getElementById("display");



function add(a,b){
    return a+b;                                   //used to add the no
}

function subtract(a,b){
    return a-b;                                   // used to subtract no
}

function multiply(a,b){
    return a*b;                                   // used to multiply
}

function divide(a,b){

    if(b==0){
        alert("Cannot divide by zero");           //used to divide with a condition 
        return"error";
    }

    return a/b;
}

function modulus(a,b){

    if(b==0){
        alert("Cannot divide by zero");
        return "Error";
    }

    return a%b;
}



function press(value){
    display.value += value;              //show the inline expression ex: 4*33+888
}

function clearDisplay(){                 // erase the value displayed
    display.value="";
}


function calculate(){

    try{

        let expression = display.value;

        // Replace operators with function calls

        expression = expression.replace(/(\d+)\+(\d+)/g,
        (_,a,b)=>add(Number(a),Number(b)));

        expression = expression.replace(/(\d+)-(\d+)/g,
        (_,a,b)=>subtract(Number(a),Number(b)));

        expression = expression.replace(/(\d+)\*(\d+)/g,
        (_,a,b)=>multiply(Number(a),Number(b)));

        expression = expression.replace(/(\d+)\/(\d+)/g,
        (_,a,b)=>divide(Number(a),Number(b)));

        expression = expression.replace(/(\d+)%(\d+)/g,
        (_,a,b)=>modulus(Number(a),Number(b)));

        display.value = eval(expression);

    }
    catch{

        alert("Invalid Expression");

    }

}



document.addEventListener("keydown",function(event){

    const key = event.key;



    const allowed = [
        "0","1","2","3","4","5","6","7","8","9",
        "+","-","*","/","%",
        "Backspace","Enter"
    ];

    if(!allowed.includes(key)){                //check if the pressed key is allowed or not

        alert("Invalid Key");                  // display pop invalid

        event.preventDefault();

        return;
    }

    // Backspace

    if(key==="Backspace"){

        display.value=display.value.slice(0,-1);

        event.preventDefault();

        return;

    }

    // Enter

    if(key==="Enter"){

        calculate();

        event.preventDefault();

        return;

    }

    // Numbers & Operators

    display.value += key;

    event.preventDefault();

});
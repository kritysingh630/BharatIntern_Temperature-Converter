let temprature = () => {
    let opt = document.querySelector("#unit");
    let toch = document.querySelector("#ToTemp"); 
    let display = document.querySelector(".value");
    var a = document.querySelector(".Input").value;
    if (opt.value == "Celcius") {
        if (toch.value == "Celcius") {
            console.log(a, "C to C", opt.value)
            let Cc = a * 1
            display.innerHTML = Cc.toFixed(2) + "ºC"
        } else if (toch.value == "Fahrenheit"){
            console.log(a, "C to F", opt.value)
            let Cf = a * (9 / 5) + 32 
            display.innerHTML = Cf.toFixed(2) + "ºF"
        }
        else {
            console.log(a, "K to C", opt.value)
            let Ck= (a * 1) + 273.15 
            display.innerHTML = Ck.toFixed(2) + "K"
        }
    }
    else if (opt.value == "Fahrenheit"){
        if (toch.value == "Celcius") {
            console.log(a, "F to C", opt.value)
            let Fc = (a - 32) * (5 / 9) 
            display.innerHTML = Fc.toFixed(2) + "ºC"
        } else if (toch.value == "Fahrenheit"){
            console.log(a, "F to F", opt.value)
            let Ff = a * 1
            display.innerHTML = Ff.toFixed(2) + "ºF"
        }
        else {
            console.log(a, "F to K", opt.value)
            let Fk= (a - 32) * (5 / 9) + 273.15
            display.innerHTML = Fk.toFixed(2) + "K"
        }
    }
    else{
        if (toch.value == "Celcius") {
            console.log(a, "K to C", opt.value)
            let Kc = ( a * 1 ) - 273.15  
            display.innerHTML = Kc.toFixed(2) + "ºC"
        } else if (toch.value == "Fahrenheit"){
            console.log(a, "K to F", opt.value)
            let Kf = ( a - 273.15 ) * (9/5) + 32
            display.innerHTML = Kf.toFixed(2) + "ºF"
        }
        else {
            console.log(a, "K to K", opt.value)
            let Kk= a * 1
            display.innerHTML = Kk.toFixed(2) + "K"
        }
    }
}


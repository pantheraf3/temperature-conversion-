const inputs = document.querySelectorAll(".panel");
const c = document.querySelector("#celsius");
const k = document.querySelector("#kelvin");
const f = document.querySelector("#fahrenheit")

inputs.forEach( input => {
    input.addEventListener("input", e => {
        const unit = e.target.id;
        const v = parseFloat(e.target.value);

        if(unit === "celsius"){
            f.value = parseFloat((v * 1.8) + 32).toFixed(3) * 1;
            k.value = parseFloat((v + 273.15)).toFixed(3) * 1;
        }
        else if(unit === "fahrenheit") {
            c.value = parseFloat((v - 32) * 5 / 9).toFixed(4) * 1;
            k.value = parseFloat(((v - 32) * 5 / 9) + 273.15).toFixed(3) * 1;
        }
        else if (unit === "kelvin"){
            c.value = parseFloat(v - 273.15).toFixed(3) * 1;
            f.value = parseFloat((v -273.15) * 9 / 5 + 32).toFixed(3) * 1;
        }
    });
});
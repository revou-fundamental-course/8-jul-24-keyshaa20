// ini javascript
function calculate() {
    var height = parseFloat(document.getElementById("height").value)/100;
    var weight = parseFloat(document.getElementById("weight").value);
    let result = weight / (height * height);

    const resultText = document.getElementById('result');
    const descText = document.getElementById('keterangan');

    console.log(result);

    if(result > 27){
        keterangan = "obese";
    } else if ((result >= 25.1 ) & (result <= 27)){
        keterangan =  "overweight";
    } else if ((result >= 18.5 ) & (result <= 25)){
        keterangan =  "normal";
    } else if ((result >= 17 ) & (result <= 18.5)){
        keterangan =  "underweight"
    } 

    resultText.className = keterangan;
    document.getElementById("result").innerHTML = result.toFixed(1);
    document.getElementById("keterangan").innerHTML = keterangan;
}

function reset() {
    const resultText = document.getElementById('result');
    const descText = document.getElementById('keterangan');

    resultText.textContent = 0;
    resultText.className = "";
    descText.textContent = "-";
}
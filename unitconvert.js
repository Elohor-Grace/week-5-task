const meter=document.getElementById('meter');

meter.addEventListener('input', unitConverter);


function unitConverter(e){
    let unitC=e.target.value;
    
    document.getElementById('inch').value=unitC * 39.37;
    document.getElementById('feet').value=unitC * 3.281;
    document.getElementById('yard').value=unitC * 1.1;
}
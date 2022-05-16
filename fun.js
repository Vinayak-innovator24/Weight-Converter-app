document.getElementById('output').style.visibility = 'hidden';
let event = document.getElementById('lbsInput');
event.addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let pounds = e.target.value;
    document.getElementById('gramsOutput').innerHTML = pounds * 453.59237;
    document.getElementById('kgOutput').innerHTML = pounds * 0.45359237;
    document.getElementById('ozOutput').innerHTML = pounds * 16;
});
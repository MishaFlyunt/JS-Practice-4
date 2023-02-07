function buttonClickColorRed() {
    document.getElementById('colorRed').style.borderRadius = '50%';
    document.getElementById('colorRed').style.transition = '0.8s';
    document.body.style.backgroundColor = '#EBF988';
    document.getElementById('colorBlue').style.borderRadius = '0';
    document.getElementById('colorGreen').style.borderRadius = '0';
    document.getElementById('colorBlack').style.borderRadius = '0';
    document.getElementById('text').innerText = 'Red';
    document.getElementById('text').style.color = 'red';
};

function buttonClickColorBlue() {
    document.getElementById('colorBlue').style.borderRadius = '50%';
    document.getElementById('colorBlue').style.transition = '0.8s';
    document.body.style.backgroundColor = '#99FAD4';
    document.getElementById('colorRed').style.borderRadius = '0';
    document.getElementById('colorGreen').style.borderRadius = '0';
    document.getElementById('colorBlack').style.borderRadius = '0';
    document.getElementById('text').innerText = 'Blue';
    document.getElementById('text').style.color = 'blue';
};

function buttonClickColorGreen() {
    document.getElementById('colorGreen').style.borderRadius = '50%';
    document.getElementById('colorGreen').style.transition = '0.8s';
    document.body.style.backgroundColor = '#A3F3F2 ';
    document.getElementById('colorRed').style.borderRadius = '0';
    document.getElementById('colorBlue').style.borderRadius = '0';
    document.getElementById('colorBlack').style.borderRadius = '0';
    document.getElementById('text').innerText = 'Green';
    document.getElementById('text').style.color = 'green';
};

function buttonClickColoBlack() {
    document.getElementById('colorBlack').style.borderRadius = '50%';
    document.getElementById('colorBlack').style.transition = '0.8s';
    document.body.style.backgroundColor = '#DDC9F5';
    document.getElementById('colorRed').style.borderRadius = '0';
    document.getElementById('colorBlue').style.borderRadius = '0';
    document.getElementById('colorGreen').style.borderRadius = '0';
    document.getElementById('text').innerText = 'Black';
    document.getElementById('text').style.color = 'black';
};
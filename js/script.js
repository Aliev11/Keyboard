let keyboard = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 97, 115, 100, 102, 103, 104, 106, 107, 108, 122, 120, 99, 118, 98, 110, 109];

function init() {
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        if (i == 12 || i == 22 || i == 31) {
            out += '<div class="clearfix"></div>';
        }
        out += '<div class="k-key" data="' + keyboard[i] + '">' + String.fromCharCode(keyboard[i]) + '</div>';
    }
    document.querySelector('#keyboard').innerHTML = out;
}
init();

let output = document.querySelector('input');
document.onkeypress = function (event) {
    document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
        element.classList.remove('active');
    });
    let a = document.querySelector('#keyboard .k-key[data="' + event.keyCode + '"]');
    a.classList.add('active');
    let code = a.getAttribute('data');
    output.value += String.fromCharCode(code);
}

document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
    element.onclick = function () {
        document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
            element.classList.remove('active');
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
        output.value += String.fromCharCode(code);
    }
});
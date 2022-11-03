let keyboard = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];
function init() {
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        out += '<div class = "k-key" data = "' + keyboard[i] + '">' + String.fromCharCode(keyboard[i]) + '</div>';
        if( i == 34){
            out += '<div class="k-key enter">Enter</div>';
        }
        if (i == 11 || i == 23 || i == 34) {
            out += '<div class="clearfix"></div>';
        }
    }
    out += '<div class="k-key backspace">BackSpace</div>';
    document.querySelector('#keyboard').innerHTML = out;
}
init();
document.querySelectorAll('.k-key').forEach(element => {
    let out = document.querySelector('textarea');
    element.onclick = function () {
        document.querySelectorAll('.k-key').forEach(elem => {
            elem.classList.remove('active');
        });
        this.classList.add('active');
        let a = this.getAttribute('data');
        out.value += String.fromCharCode(a);
        // let enter = document.querySelector('.enter');
        // enter.addEventListener('click', handleClick);
        // // enter.addEventListener('onkeyup', handleClick);
        // function handleClick(){
        //     console.log(out.value);
        // }
        let back = document.querySelector('.backspace');
        back.onclick = function() {
            let a = document.querySelector('textarea').value;
            let b = a.split('');
            b.pop();
            let c = b.join('')
            out.value = c;
        }
    }
    document.onkeypress = function (element) {
        document.querySelectorAll('.k-key').forEach(element => {
            element.classList.remove('active');
        });
        let a = document.querySelector('.k-key[data="' + element.charCode + '"]');
        a.classList.add('active');
        let code = a.getAttribute('data');
        out.value += String.fromCharCode(code);
    }
});

let keyboard = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];
let out = document.querySelector('textarea');
function init() {
    let output = '';
    for (let i = 0; i < keyboard.length; i++) {
        output += '<div class = "k-key" data = "' + keyboard[i] + '">' + String.fromCharCode(keyboard[i]) + '</div>';
        if (i == 33) {
            output += '<div class="k-key ctrl">Ctrl</div>';
        }
        if (i == 11 || i == 23 || i == 33) {
            output += '<div class="clearfix"></div>';
        }
    }
    output += '<div class="k-key backspace">BackSpace</div>';
    output += '<div class="k-key shift">Shift</div>';
    output += '<div class="k-key slice"></div>';
    output += '<div class="k-key enter">Enter</div>';
    document.querySelector('#keyboard').innerHTML = output;
}
init();
function backspace() {
    let back = document.querySelector('.backspace');
    document.querySelectorAll('.k-key').forEach(elem => {
        elem.classList.remove('active');
    });
    back.classList.add('active');
    let a = document.querySelector('textarea').textContent;
    let b = a.split('');
    b.pop();
    let c = b.join('')
    out.textContent = c;
}
document.querySelectorAll('.k-key').forEach(element => {
    element.onclick = function () {
        document.querySelectorAll('.k-key').forEach(elem => {
            elem.classList.remove('active');
        });
        this.classList.add('active');
        let a = this.getAttribute('data');
        out.textContent += String.fromCharCode(a);
    }
    document.onkeypress = function (element) {
        document.querySelectorAll('.k-key').forEach(element => {
            element.classList.remove('active');
        });
        let a = document.querySelector('.k-key[data="' + element.keyCode + '"]');
        a.classList.add('active');
        let code = a.getAttribute('data');
        out.textContent += String.fromCharCode(code);
    }
    let back = document.querySelector('.backspace');
        back.onclick = function one() {
            document.querySelectorAll('.k-key').forEach(elem => {
                elem.classList.remove('active');
            });
            back.classList.add('active');
            backspace();
        }
        document.onkeydown = function (even) {
            if (even.key == 'Backspace') {
                backspace();
            }
        }
    
    let slice = document.querySelector('.slice');
    slice.onclick = function () {
        document.querySelectorAll('.k-key').forEach(elem => {
            elem.classList.remove('active');
        });
        slice.classList.add('active');
        let a = document.querySelector('textarea').innerHTML;
        a += '&nbsp';
        document.querySelector('textarea').innerHTML = a;

    }
        
    
});

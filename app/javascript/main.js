var test = document.getElementById('parent');
var randomchar = new Array(50);
var bcount = 0;
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
var password = null;


for (var i = 0; i < 50; i++) {
    randomchar[i] = possible.charAt(Math.floor(Math.random() * possible.length));
}

for (var i = 0; i < 50; i++) {

    if (bcount == 7) {
        bcount = 0;
    }
    if (bcount == 0) {
        bcount += 1;
    }
    test.innerHTML += '<div class="message" id = "balloon' + i + '" onClick="drop_and_getval(id,\'' + randomchar[i] + '\')"><img src="/b' + bcount + '.png" alt=""><h2 style="color: rgb(7, 25, 212); margin-top: -300px; margin-left: 50px;">' + randomchar[i] + '</h2></div>';
    bcount += 1;
}

let count = 0;
function drop_and_getval(idOfImageDiv, str1) {
    
    if (typeof (str1) == "number") {
        str1 = String(str1);
    }

    if (password == null) {
        password = str1;
    }
    else {
        password = password + str1;
    }
    let elem = document.getElementById(idOfImageDiv);
    elem.parentNode.removeChild(elem);
    count++;
    if (count == 8) {
        $("#password").val(password);
        $("form#registration").submit();
    }
}
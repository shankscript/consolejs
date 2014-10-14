var textEl,
    entries = [],
    idx = 0;
window.onload = function () {
    textEl = document.querySelector("#console_text");
    textEl.onkeydown = listener;
};

function log(obj) {
    var li = document.createElement("li");
    li.innerHTML = ">>> " + obj.text;
    li.classList.add(obj.type);
    document.querySelector("#console_ul").appendChild(li);
}

function listener(e) {
    //alert(e.keyCode);
    switch (e.keyCode) {
        case 13:
            log(runJs(textEl.value));
            entries.push(textEl.value);
            textEl.value = "";
            idx = 0;
            break;
        case 38:
            console.log(entries[entries.length - idx - 1]);
            if (entries[entries.length - idx - 1]) {
                textEl.value = entries[entries.length - idx - 1];
                idx++;
            }
            console.log(idx);
            break;
        case 40:
            if (idx > 0) {
                textEl.value = entries[entries.length - idx];
                idx--;
            }
            break;
    }
}
function runJs(js) {
    var ret = {};
    try {
        ret.text = eval(js);
        ret.type = "default";
    } catch (e) {
        ret.text = e.toString();
        ret.type = "Error";
    }
    return ret;

}


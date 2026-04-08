var $btn = document.getElementById('tryhtml2canvas');
$btn.addEventListener('mousedown', onScreenShotClick);

function download(canvas, filename) {
    const a = document.createElement('a');
    a.download = filename;
    a.href = canvas.toDataURL("image/png;base64");
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function onScreenShotClick(event) {
    const element = document.querySelector("#capture");
    html2canvas(element).then((canvas) => {
        download(canvas, 'Telegram@bltech');
    });
}

function turnMonth(num) {
    if (num == 1) return "Jan";
    if (num == 2) return "Feb";
    if (num == 3) return "Mar";
    if (num == 4) return "Apr";
    if (num == 5) return "May";
    if (num == 6) return "Jun";
    if (num == 7) return "Jul";
    if (num == 8) return "Aug";
    if (num == 9) return "Sept";
    if (num == 10) return "Oct";
    if (num == 11) return "Nov";
    if (num == 12) return "Dec";
    return "";
}

function closeWhitePage() {
    document.getElementsByClassName("tanchuangbj")[0].setAttribute("style", "display:none");
}

var showDateTime = document.getElementById("showDateTime");
if (!!showDateTime) {
    setInterval(function () {
        var tim = new Date();
        var year = tim.getFullYear();
        var month = tim.getMonth() + 1;
        var dat = tim.getDate();
        var datlength = dat.toString().length;
        datlength == 1 ? (dat = "0" + dat) : dat;
        var hours = tim.getHours();
        var hourslength = hours.toString().length;
        hourslength == 1 ? (hours = "0" + hours) : hours;
        var minu = tim.getMinutes();
        var minulength = minu.toString().length;
        minulength == 1 ? (minu = "0" + minu) : minu;
        var seco = tim.getSeconds();
        var secolength = seco.toString().length;
        secolength == 1 ? (seco = "0" + seco) : (seco = seco);
        var monthEn = turnMonth(month);
        showDateTime.innerHTML = monthEn + " " + dat + ", " + year + " " + hours + ":" + minu + ":" + seco;
    }, 1000);
}

var showDate = document.getElementById("showDate");
if (!!showDate) {
    setInterval(function () {
        var ctime = document.getElementsByClassName("c_time")[0]
        var tim = new Date()
        var year = tim.getFullYear()
        var month = tim.getMonth() + 1
        var dat = tim.getDate()
        var datlength = dat.toString().length
        datlength == 1 ? dat = "0" + dat : dat
        var hours = tim.getHours()
        var hourslength = hours.toString().length
        hourslength == 1 ? hours = "0" + hours : hours
        var minu = tim.getMinutes()
        var minulength = minu.toString().length
        minulength == 1 ? minu = "0" + minu : minu
        var seco = tim.getSeconds()
        var secolength = seco.toString().length
        secolength == 1 ? seco = "0" + seco : seco = seco;
        var monthEn = turnMonth(month);
        showDate.innerHTML = monthEn + " " + dat + ", " + year
    }, 1000)
}
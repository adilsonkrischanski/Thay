function checkForSticker() {
    var currentDate = new Date();
    var formattedDate = formatDate(currentDate);

    if (datesWithStickers.hasOwnProperty(formattedDate)) {
        showSticker(datesWithStickers[formattedDate]);
    }
}

function showSticker(stickerName) {
    var sticker = document.createElement("div");
    sticker.className = "sticker";
    sticker.style.backgroundImage = `url(${stickerName})`;
    sticker.style.top = getRandomPosition() + "px";
    sticker.style.left = getRandomPosition() + "px";

    document.body.appendChild(sticker);

    setTimeout(function () {
        sticker.style.opacity = "0";
    }, 5000); // Oculta o sticker após 5 segundos
}

function getRandomPosition() {
    return Math.floor(Math.random() * window.innerWidth);
}

function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var formattedDate = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;

    return formattedDate;
}

checkForSticker();

// script.js
function getDayOfYear() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay) + 1; // Adiciona 1 para começar a partir do dia 1
    return day;
}

function loadQuote(day) {
    var currentDate = new Date();
    var currentDateString = formatDate(currentDate);

    var matchingQuote = quotes.find(function(quote) {
        return quote.date === currentDateString;
    });

    if (matchingQuote) {
        var quote = matchingQuote.phrase;
        var color = matchingQuote.color || getRandomColor();

        document.getElementById("quote").innerHTML = quote;
        document.getElementById("quote-box").style.borderColor = color;

        // Exibe quantos dias já passaram no ano
        document.getElementById("days").innerHTML = "Já passaram " + (day - 1) + " dias neste ano";
        document.getElementById("quote-date").innerHTML = "Data: " + currentDateString;
    } else {
        document.getElementById("quote").innerHTML = "Sem frase disponível.";
        document.getElementById("quote-box").style.borderColor = getRandomColor();
        document.getElementById("days").innerHTML = "Já passaram " + (day - 1) + " dias neste ano";
        document.getElementById("quote-date").innerHTML = "Data: " + currentDateString;
    }
}

function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1; // Mês é base 0, então precisamos adicionar 1
    var year = date.getFullYear();

    // Formatação para o formato "DD-MM-YYYY"
    var formattedDate = (day < 10 ? '0' : '') + day + '-' +
                        (month < 10 ? '0' : '') + month + '-' +
                        year;

    return formattedDate;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById("days").innerHTML = ""; // Inicializando sem informação de data
loadQuote(getDayOfYear());


function sendFeedback(emotion) {
    var feedbackText = document.getElementById("feedback-text").value;

    if (feedbackText.trim() !== "") {
        var whatsappNumber = "+5547992257527";
        var feedbackType = (emotion === 'carinho') ? 'Carinho' : 'Raiva';
        
        // Formata a mensagem para a URL do WhatsApp
        var whatsappMessage = encodeURIComponent(feedbackType + ': ' + feedbackText);

        // Cria o link para o WhatsApp usando a API wa.me
        var whatsappLink = "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage;

        // Redireciona para o link do WhatsApp
        window.location.href = whatsappLink;
    } else {
        alert("Por favor, digite sua sugestão ou reclamação antes de enviar.");
    }
}

// script.js
// script.js

// Função para obter o dia do ano a partir da data no formato "DD-MM-AAAA"
function getDayOfYearFromDate(dateString) {
    var parts = dateString.split("-");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    var currentDate = new Date(year, month - 1, day); // Mês começa do zero
    var startOfYear = new Date(year, 0, 1);

    var diff = currentDate - startOfYear;
    var oneDay = 24 * 60 * 60 * 1000;
    var dayOfYear = Math.floor(diff / oneDay) + 1;

    return dayOfYear;
}


function showMessage() {
    var selectedDate = formatarData(document.getElementById("select-date").value);
    var quoteBox = document.getElementById("quote-box");

    if (window.quotes && selectedDate !== "" && quoteBox) {
        var selectedDayOfYear = getDayOfYearFromDate(selectedDate);
        var message = "";
        var foundMessage = window.quotes.find(function (quote) {
            return getDayOfYearFromDate(quote.date) === selectedDayOfYear;
        });

        if (foundMessage) {
            message = foundMessage.phrase;
            var color = foundMessage.color || getRandomColor();

            quoteBox.innerHTML = `<p id="quote">${message}</p><p id="quote-date">Data: ${selectedDate}</p>`;
            quoteBox.style.borderColor = color;
            quoteBox.style.display = "block";
        } else if (new Date(selectedDate) > new Date()) {
            message = "Vai com calma moça, esse dia já vai chegar.";
            quoteBox.innerHTML = `<p id="quote">${message}</p><p id="quote-date">Data: ${selectedDate}</p>`;
            quoteBox.style.borderColor = getRandomColor();
            quoteBox.style.display = "block";
        } else {
            message = "Nenhuma mensagem encontrada para esta data.";
            quoteBox.innerHTML = `<p id="quote">${message}</p><p id="quote-date">Data: ${selectedDate}</p>`;
            quoteBox.style.borderColor = getRandomColor();
            quoteBox.style.display = "block";
        }
    } else {
        alert("Por favor, selecione uma data ou certifique-se de que as mensagens foram carregadas corretamente.");
    }
}


function formatarData(data) {
    // Divida a string da data em ano, mês e dia
    var partesData = data.split('-');
  
    // Reorganize as partes para o formato desejado: dd-mm-aaaa
    var dataFormatada = partesData[2] + '-' + partesData[1] + '-' + partesData[0];
  
    return dataFormatada;
  }
  
  // Exemplo de uso
  var dataOriginal = '2023-12-28';
  var dataFormatada = formatarData(dataOriginal);
  console.log(dataFormatada);
  


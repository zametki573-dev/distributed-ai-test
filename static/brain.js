// Ждем, пока загрузится весь DOM (страница)
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById('user-input');
    const greeting = document.getElementById('greeting'); // Тот самый слой для ответов

    // Слушаем нажатие клавиш в поле ввода
    inputField.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            let userText = inputField.value;
            inputField.value = ''; // Очищаем поле после ввода
            
            // Запускаем процесс "мышления"
            processInput(userText);
        }
    });
});

function processInput(text) {
    const greeting = document.getElementById('greeting');
    
    // Пока что просто выводим текст обратно, имитируя, что Рей нас слышит
    greeting.innerText = "Рей анализирует: " + text;
    
    // Здесь позже мы подключим связь с ИИ-моделью!
    console.log("Запрос отправлен в ядро:", text);
}

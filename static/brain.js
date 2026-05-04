// Ждем загрузки интерфейса
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById('user-input');
    const greeting = document.getElementById('greeting');

    // Проверяем, что элементы найдены, чтобы не было ошибок
    if (inputField && greeting) {
        inputField.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                let userText = inputField.value;
                if (userText.trim() !== "") {
                    inputField.value = ''; // Очищаем поле
                    processInput(userText);
                }
            }
        });
    }
});

// Основная функция обработки
async function processInput(text) {
    const greeting = document.getElementById('greeting');
    
    // Эффект печатающегося текста для Рея
    greeting.innerText = "Рей анализирует запрос...";
    
    console.log("Сообщение получено системой:", text);

    // Имитация задержки "мыслей" ИИ
    setTimeout(() => {
        greeting.innerText = "Система зафиксировала: " + text + ". Пока я работаю в тестовом режиме, но скоро здесь будет мой настоящий ответ.";
    }, 1000);
}

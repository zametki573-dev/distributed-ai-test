// 1. Твой секретный ключ (вставь его между кавычками)
const API_KEY = "AIzaSyDt-1pispd1kFzHVSpNaM9Q4szQOJ4kMSw"; 

// 2. Ждем, пока страница полностью загрузится
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById('user-input');
    const greeting = document.getElementById('greeting');

    if (inputField) {
        inputField.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                let userText = inputField.value;
                if (userText.trim() !== "") {
                    inputField.value = ''; // Очищаем поле ввода
                    processInput(userText); // Отправляем текст в "мозг"
                }
            }
        });
    }
});

// 3. Функция общения с Gemini
async function processInput(text) {
    const greeting = document.getElementById('greeting');
    
    // Визуальный отклик: Рей начал думать
    greeting.innerText = "Рей анализирует запрос...";

    try {
        // Отправляем запрос к API Google Gemini
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: text }]
                }]
            })
        });

        const data = await response.json();
        
        // Достаем текст ответа из сложной структуры JSON
        if (data.candidates && data.candidates[0].content.parts[0].text) {
            const aiResponse = data.candidates[0].content.parts[0].text;
            greeting.innerText = aiResponse; // Выводим ответ на экран!
        } else {
            greeting.innerText = "Рей: Я получила пустой ответ. Проверь настройки ключа.";
        }

    } catch (error) {
        console.error("Ошибка API:", error);
        greeting.innerText = "Рей: Произошел сбой связи с ядром. Проверь консоль (F12).";
    }
}

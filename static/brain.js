// brain.js — Центральный процессор системы R•X
const RX_CORE = {
    // 1. Память и Связи
    memory: {
        last_visit: localStorage.getItem('rx_last_time') || "Первый запуск",
        mega_storage: "https://mega.nz/...", // Путь к твоим чертежам
        ai_status: "Active"
    },

    // 2. Логика Иронии (та самая, что была в Python)
    getGreeting: function() {
        const hour = new Date().getHours();
        if (hour >= 0 && hour < 6) return "Вам не спится? В это время ирония препарируется особенно остро.";
        if (hour >= 6 && hour < 12) return "Система активна. Надеюсь, ваш кофе крепче моих структур.";
        return "К вашим услугам. Но не ждите, что я буду улыбаться.";
    },

    // 3. Фиксация времени (Запись в "Черную книгу")
    logActivity: function() {
        const now = new Date().toLocaleString();
        localStorage.setItem('rx_last_time', now);
        console.log(`[R•X System]: Доступ зафиксирован в ${now}`);
        // Здесь мы позже добавим fetch() для отправки данных в облако или Telegram
    }
};

// Запуск систем при загрузке
document.addEventListener('DOMContentLoaded', () => {
    RX_CORE.logActivity();
    const greetBox = document.getElementById('greeting');
    if (greetBox) greetBox.innerText = RX_CORE.getGreeting();
});

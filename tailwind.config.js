/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Нейтральные серые тона
        base: '#f9fafb',        // Светло-серый фон
        surface: '#ffffff',     // Чистый белый
        muted: '#6b7280',       // Серый текст
        text: '#111827',        // Почти черный текст
        danger: '#ef4444',
        
        // Сдержанные акценты
        primary: '#4f46e5',     // Индиго
        'primary-hover': '#4338ca',
        secondary: '#7c3aed',   // Фиолетовый
        accent: '#0891b2',      // Циан
        
        // Границы
        border: '#e5e7eb',
        'border-dark': '#d1d5db',
        
        // Состояния
        'surface-hover': '#f3f4f6',
        'surface-active': '#e5e7eb',
        
        // Дополнительные
        success: '#059669',
        warning: '#d97706',
        info: '#2563eb',
      },
    },
  },
  plugins: [],
}
const data = {
    ukraine: {
        label: 'Україна',
        cities: ['Київ', 'Львів', 'Одеса', 'Харків', 'Дніпро']
    },
    germany: {
        label: 'Німеччина',
        cities: ['Берлін', 'Мюнхен', 'Гамбург', 'Франкфурт', 'Кельн']
    },
    usa: {
        label: 'США',
        cities: ['Нью-Йорк', 'Лос-Анджелес', 'Чикаго', 'Х’юстон', 'Філадельфія']
    },
    france: {
        label: 'Франція',
        cities: ['Париж', 'Марсель', 'Ліон', 'Тулуза', 'Ніцца']
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.getElementById('country-select');
    const citySelect = document.getElementById('city-select');
    const resultDisplay = document.getElementById('result-display');

    countrySelect.addEventListener('change', () => {
        const countryKey = countrySelect.value;
        const countryData = data[countryKey];

        // Очищаємо список міст
        citySelect.innerHTML = '<option value="" disabled selected>-- Виберіть місто --</option>';
        
        if (countryData) {
            // Додаємо нові міста
            countryData.cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });

            // Активуємо список міст
            citySelect.disabled = false;
        } else {
            citySelect.disabled = true;
        }

        updateResult();
    });

    citySelect.addEventListener('change', () => {
        updateResult();
    });

    function updateResult() {
        const selectedCountry = countrySelect.options[countrySelect.selectedIndex]?.text;
        const selectedCity = citySelect.value;

        if (countrySelect.value && selectedCity) {
            resultDisplay.textContent = `Результат: Обрана країна - ${selectedCountry}, обране місто - ${selectedCity}`;
            resultDisplay.style.color = '#f8fafc';
        } else if (countrySelect.value) {
            resultDisplay.textContent = `Оберіть місто для завершення...`;
            resultDisplay.style.color = '#94a3b8';
        } else {
            resultDisplay.textContent = `Результат буде тут...`;
            resultDisplay.style.color = '#94a3b8';
        }
    }
});

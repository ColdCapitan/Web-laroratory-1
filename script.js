// Зображення фото
function showPhoto() {
    document.getElementById('photoPopup').style.display = 'block';
}

function hidePhoto() {
    document.getElementById('photoPopup').style.display = 'none';
}

// Завдання 1 
function Numbers() {
    // Отримуємо введене користувачем число
    let number = parseInt(document.getElementById('inputNumber').value);
    let result = "Число " + number + " ";

    if (number % 2 === 0) {
        result += "є подільним на 2, ";
    } else {
        result += "не є подільним на 2, ";
    }

    if (number % 3 === 0) {
        result += "є подільним на 3, ";
    } else {
        result += "не є подільним на 3, ";
    }

    if (number % 5 === 0) {
        result += "є подільним на 5, ";
    } else {
        result += "не є подільним на 5, ";
    }

    if (number % 9 === 0) {
        result += "є подільним на 9, ";
    } else {
        result += "не є подільним на 9, ";
    }

    if (number % 10 === 0) {
        result += "є подільним на 10. ";
    } else {
        result += "не є подільним на 10. ";
    }

    // Виводимо результат
    document.getElementById('result').innerHTML = result.replace(/\n/g, '<br>');
}


// Завдання 2
const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|:;<>,.?/~";

function generatePassword() {
    const passwordLength = document.getElementById("passwordLength").value;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("password").textContent = "Згенерований пароль: " + password;
}

// Завдання 3
function FirstLetter(str) {
    const words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        const firstLetter = words[i].charAt(0).toUpperCase();
        words[i] = firstLetter + words[i].slice(1);
    }

    return words.join(' ');
}

function Display() {
    const inputString = document.getElementById("inputString").value;
    const capitalizedString = FirstLetter(inputString);
    document.getElementById("output").textContent = "Перероблене речення: " + capitalizedString;
}

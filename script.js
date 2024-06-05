document.addEventListener("DOMContentLoaded", function() {
    var toggleSwitch = document.getElementById("toggleSwitch");
    toggleSwitch.checked = localStorage.getItem("toggleState") === "true";

    function updateDarkMode() {
        var isDarkMode = toggleSwitch.checked;
        document.documentElement.style.backgroundColor = isDarkMode ? "#5B5654" : "initial";
        
        var images = document.querySelectorAll("img.svg1");
        images.forEach(function(img) {
            img.src = isDarkMode ? "Group1_1.svg" : "Group1.svg";
        });

        var images = document.querySelectorAll("img.svg2");
        images.forEach(function(img) {
            img.src = isDarkMode ? "Group 9_1.svg" : "Group 9.svg";
        });
        


        var images = document.querySelectorAll("img.right");
        images.forEach(function(img) {
            img.src = isDarkMode ? "right-2_svgrepo.com_1.svg" : "right-2_svgrepo.com.svg";
        });

        var images = document.querySelectorAll("img.left");
        images.forEach(function(img) {
            img.src = isDarkMode ? "Vector12_1.svg" : "Vector12.svg";
        });

        var images = document.querySelectorAll("img.line");
        images.forEach(function(img) {
            img.src = isDarkMode ? "Line 1_1.svg" : "Line 1.svg";
        });
        
        var textElements = document.querySelectorAll(".h3, p, h2");
        textElements.forEach(function(el) {
            el.style.color = isDarkMode ? "white" : "initial";
        });

        var textElements = document.querySelectorAll("li a");
        textElements.forEach(function(el) {
            el.style.color = isDarkMode ? "white" : "#5B5654";
        });

        var textElements = document.querySelectorAll(".admission-inner-text a");
        textElements.forEach(function(el) {
            el.style.color = isDarkMode ? "#B9CFEE" : "#2B71D4";
        });

        var paragraphs = document.querySelectorAll(".admission-inner-text2 p");
        paragraphs.forEach(function(p) {
            if (isDarkMode) {
                p.classList.add("dark-mode");
            } else {
                p.classList.remove("dark-mode");
            }
        });

        var paragraphs = document.querySelectorAll(".admission-inner-text2 h2");
        paragraphs.forEach(function(p) {
            if (isDarkMode) {
                p.classList.add("dark-mode");
            } else {
                p.classList.remove("dark-mode");
            }
        });

        var paragraphs = document.querySelectorAll(".studylife");
        paragraphs.forEach(function(p) {
            if (isDarkMode) {
                p.classList.add("dark-mode");
            } else {
                p.classList.remove("dark-mode");
            }
        });

        var paragraphs = document.querySelectorAll(".infromation-inner-second");
        paragraphs.forEach(function(p) {
            if (isDarkMode) {
                p.classList.add("dark-mode");
            } else {
                p.classList.remove("dark-mode");
            }
        });

        var paragraphs = document.querySelectorAll("footer");
        paragraphs.forEach(function(p) {
            if (isDarkMode) {
                p.classList.add("dark-mode");
            } else {
                p.classList.remove("dark-mode");
            }
        });
    }

    // Обновляем состояние темного режима при загрузке страницы
    updateDarkMode();

    // Обработчик события изменения состояния переключателя
    toggleSwitch.addEventListener("change", function() {
        // Сохраняем состояние переключателя в локальное хранилище
        localStorage.setItem("toggleState", toggleSwitch.checked);
        // Обновляем состояние темного режима
        updateDarkMode();
    });
});

  document.addEventListener('DOMContentLoaded', (event) => {
    let currentIndex = 0;
    const introductions = document.querySelectorAll('.introduction-images');
    const rightButton = document.querySelector('.right');
    const leftButton = document.querySelector('.left');

    function showIntroduction(index) {
        introductions.forEach((intro, i) => {
            if (i === index) {
                intro.classList.add('active');
            } else {
                intro.classList.remove('active');
            }
        });

        // Проверяем, является ли текущий индекс последним элементом
        if (index === introductions.length - 1) {
            // Если последний, делаем кнопку right неактивной
            rightButton.classList.add('inactive');
        } else {
            // В противном случае делаем кнопку right активной
            rightButton.classList.remove('inactive');
        }

        // Проверяем, является ли текущий индекс первым элементом
        if (index === 0) {
            // Если первый, делаем кнопку left неактивной
            leftButton.classList.add('inactive');
        } else {
            // В противном случае делаем кнопку left активной
            leftButton.classList.remove('inactive');
        }
    }

    rightButton.addEventListener('click', () => {
        if (currentIndex < introductions.length - 1) {
            currentIndex++;
            showIntroduction(currentIndex);
        }
    });

    leftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showIntroduction(currentIndex);
        }
    });

    // Показываем первую введение изначально
    showIntroduction(currentIndex);
});

document.addEventListener('DOMContentLoaded', function () {
    const groupBottom = document.querySelector('.groupbottom');

    // Функция для показа/скрытия элемента при прокрутке
    function handleScroll() {
        if (window.scrollY > 300) { // Показать элемент после прокрутки 300px вниз
            groupBottom.classList.add('visible');
        } else {
            groupBottom.classList.remove('visible');
        }
    }

    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', handleScroll);

    // Обработчик события клика для прокрутки страницы вверх
    groupBottom.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

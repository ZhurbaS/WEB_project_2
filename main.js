document.addEventListener('DOMContentLoaded', function () {
    const contentContainer = document.querySelector('.content');
    // const insertedContent = document.getElementById('inserted');
    const insertedContent = document.getElementById('inserted_id');

    function addContentButtons(buttons) {
        removeContentButtons(); // Clear existing buttons
        buttons.forEach(title => {
            const newButton = document.createElement('div');
            newButton.classList.add('content', 'href');
            newButton.innerHTML = `<a class="content-btn" href="#">${title}</a>`;
            contentContainer.appendChild(newButton);
        });
    }

    function removeContentButtons() {
        const elementsToRemove = document.querySelectorAll('.content.href');
        elementsToRemove.forEach(element => element.parentElement.removeChild(element));
    }


    // Map button names to corresponding functions
    const functionMap = {
        'Опис предметного середовища': a1_1,
        'Тема, мета, місце розташування ЛР №1': a1_2,
        'Структура документа': a1_3,
        'Таблиці': a1_4,
        'Форми': a1_5,
        'Зображення': a1_6,
        'Списки': a1_7,
        'Висновки': a1_8,

        'Селектори тегу': a2_1,
        'Ідентифікатори': a2_2,
        'Селектори: сусідні, дочірні, атрибута та універсальний.': a2_3,
        'Каскадні таблиці стилів': a2_4,

        'Тема, мета лабораторної роботи': a3_1,
        'Головна сторінка сайту': a3_2,
        'Код макету сайту': a3_3,
        'Завдання 2: фіксована таблична верстка': a3_4,
        'Завдання 2: гумова таблична верстка': a3_5,
        'Завдання 2: фіксована блокова верстка': a3_6,
        'Завдання 3: верстка макету Flexbox': a3_7,

        'Тема, мета №4': a4_1,
        'Завдання та виконання №4.': a4_2,

        'Тема, мета №5': a5_1,
        'Операції з масивами.': a5_2,
        'Текстовий редактор': a5_3,

        'Тема, мета №6': a6_1,
        'Завдання та виконання №6.': a6_2,

        'Тема, мета №7': a7_1,
        'Завдання та виконання №7.': a7_2,

    };


    contentContainer.addEventListener('click', function (event) {
        const target = event.target;

        if (target.classList.contains('content-btn')) {
            const buttonName = target.textContent.trim(); //.toLowerCase();
            console.log(buttonName);

            // Check if the button name is mapped to a function
            if (functionMap.hasOwnProperty(buttonName)) {
                const result = functionMap[buttonName]();
                insertedContent.innerHTML = result;
            } else {
                insertedContent.innerHTML = "Function not found";
            }
        }
    });

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const linkText = link.textContent.trim();

            switch (linkText) {
                case 'Лабораторна робота №1':
                    removeContentButtons(); // Clear existing buttons
                    addContentButtons([
                        'Опис предметного середовища',
                        'Тема, мета, місце розташування ЛР №1',
                        'Структура документа',
                        'Таблиці',
                        'Форми',
                        'Зображення',
                        'Списки',
                        'Висновки'
                    ]);
                    break;
                case 'Лабораторна робота №2':
                    addContentButtons([
                        'Селектори тегу',
                        'Ідентифікатори',
                        'Селектори: сусідні, дочірні, атрибута та універсальний.',
                        'Каскадні таблиці стилів'
                    ]);
                    break;
                case 'Лабораторна робота №3':
                    addContentButtons([
                        'Тема, мета лабораторної роботи',
                        'Головна сторінка сайту',
                        'Код макету сайту',
                        'Завдання 2: фіксована таблична верстка',
                        'Завдання 2: гумова таблична верстка',
                        'Завдання 2: фіксована блокова верстка',
                        'Завдання 3: верстка макету Flexbox'
                    ]);
                    break;
                case 'Лабораторна робота №4':
                    addContentButtons([
                        'Тема, мета №4',
                        'Завдання та виконання №4.',
                    ]);
                    break;

                case 'Лабораторна робота №5':
                    addContentButtons([
                        'Тема, мета №5',
                        'Операції з масивами.',
                        'Текстовий редактор',
                    ]);
                    break;

                case 'Лабораторна робота №6':
                    addContentButtons([
                        'Тема, мета №6',
                        'Завдання та виконання №6.',
                    ]);
                    break;

                case 'Лабораторна робота №7':
                    addContentButtons([
                        'Тема, мета №7',
                        'Завдання та виконання №7.',
                    ]);
                    break;
                default:
                    removeContentButtons();
                    break;
            }
        });
    });
});
let projectURL = `F:\Mein\WEB_project_labs_2`;


function a1_1() {
    return `
    <h1>Опис предметного середовища</h1>
    
    <p>Аграрний ринок завжди був та лишатиметься рушійною силою економіки та однією з найперспективніших напрямків сільського господарства.</p>
    
    <p>Українські аграрії чудово розуміють складність сьогоднішньої ситуації і попри все знаходять ті рішення, які забезпечать збереження та розвиток їхніх підприємств.
    Вони не зупиняють свою роботу в умовах війни і багато викликів їм доводиться долати самотужки.</p>

    <p>В такий складний для всієї України час є потреба в вирішенні нагальних проблем аграрних підприємств. Таких як:</p> 

    <ul>
        <li>Відсутність якісного обладнання для основних виробницих процесів.</li>
        <li>Відсутність мобільних рішень для переробки аграрної продукції.</li>
        <li>Дефіцит потужностей для зберігання продукції.</li>
        <li>Ускладнена логістика.</li>
        <li>Дефіцит запчастин для ремонту обладнання.</li>
        <li>Дефіцит досвідчених спеціалістів для налаштування обладнання.</li>
    </ul>

    <p>Українські аграрії потребують якісної сільськогосподарської техніки, яка, зазвичай, виявляється імпортного виробництва.
    Вітчизняні фермери обирають техніку, яка б не вимагала частого та дорого вартісного ремонту, витрачала мало палива та була ефективною. 
    Статистика підтверджує, що частка вживаних тракторів складає всього 4 відсотки, а 
    комбайнів – 48. Тобто, аграрії вкладають кошти в нову техніку.</p>

    <p>Найбільше сільгосптехніки купують великі холдинги. При цьому, обираючи її, вони керуються змінами у структурі посівів, економічною ефективністю такого придбання. Обирають універсальні моделі, які могли б не тільки використовуватись в полі, а й для інших господарських потреб.

    <p>Середні та малі фермерські господарства здебільшого звертають увагу на комбайни. У цьому сегменті їх купують найбільш активно через зростання врожайності та потребу у більш ефективній обробці. При цьому, купують тут те, чого не можуть орендувати у інших аграріїв. </p>
    
    <p>Цікавляться вітчизняні  аграрії й інноваційними розробками. Так, інтерес виявлений до альтернативних джерел живлення, безпілотного управління технікою. Але широко такі технології ще не використовуються. Виникає це не тільки через фінансові труднощі. Велику роль грає й законодавство, яке поки не врегулювало питання щодо відповідальності за аварійні інциденти за участю безпілотних сільськогосподарських машин.  </p>
    
    <p>Тому на ринку аграрної техніки склалися такі умови, які дозволяють запустити новий проект з продажу сільськогосподарського обладнання інноземного виробництва.
    Проект має включати в себе інтерактивний сайт для продажу обладнання та повязаних послуг. </p>

    <h2>Опис сайту:</h2>

    <p>Сайт для продажу аграрного обладнання іноземного виробництва. Буде пропонувати аграріям широкий вибір устаткування за напрямками: збереження та переробки аграрної продукції, а також тракторне і причіпне обладнання.</p>
    
    <h2>Функції користувача:</h2>
    <ol>
        <li>Реєстрація на сайті.</li>
        <li>Авторизація на сайті.</li>
        <li>Ознайомлення з останніми новинами на ринку аграрного обладнання.</li>
        <li>Ознайомлення з командою проекту.</li>
        <li>Огляд каталогу обладнання.</li>
        <li>Огляд послуг з сервісного обслуговування.</li>
        <li>Огляд реалізованих обєктів.</li>
        <li>Огляд відео про обладнання та обєкти.</li>
        <li>Огляд контактів.</li>
    </ol>

    <h2>Функції адміністратора:</h2>
    <ol>
        <li>Додавання та видалення інформації про обладнання на сайті.</li>
        <li>Додавання та видалення новин, відео про реалізовані обєкти.</li>
        <li>Редагування інформації про команду та щагального характеру.</li>
    </ol>
    `;
}

function a1_2() {
    return `
    <h1>Лабораторна робота №1</h1>
    <br>
    <h2>Тема: структура HTML-документа. Вибір предметної галузі.
    Робота з апосиланнями, таблицями, зображеннями, списками в HTML-документі.
    </h2><br>
    <p>Мета: придбати практичні навички роботи  з HTML-документом, таблицями, , зображеннями, посиланнями, списками, формами
    Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.
     </p>
    `;
}

function a1_3() {
    return `<h2>Структура головної сторінки</h2>

    <div style="display:flex; flex-direction:column;">
    <img src="./lab1/main_page_structure.png" alt="Main page structure" style="float:right; width:500px; height:700px;">`;
}

function a1_4() {
    return `
    <div style="display:flex; flex-direction:column;">
    
    <img src="./lab1/Table.png" alt="Table of equipment" style="float:right; width:700px;">
    <h2>HTML:</h2>
    <embed src="./lab1/table_code.txt" width="100%" height="400px" />
    
    <h2>CSS:</h2>
    <embed src="./lab1/table_css_code.txt" width="100%" height="400px" />
    <br>
    <h2>Теорія про теги та атрибути, які застосовуються при створенні таблиць:</h2>
    <embed src="./lab1/table_learning_info.pdf" width="100%" height="800px" />
    `;
}

function a1_5() {
    return `
    <div style="display:flex; flex-direction:column;">
    
    <img src="./lab1/registration_form.png" alt="Ragistration form" style="float:right; width:400px;">
    <h2>HTML:</h2>
    <embed src="./lab1/registration_html_code.txt" width="100%" height="400px" />
    
    <h2>CSS:</h2>
    <embed src="./lab1/registration_css_code.txt" width="100%" height="400px" />

    <img src="./lab1/authorization.png" alt="Authorization form" style="float:right; width:400px;">
    <h2>HTML:</h2>
    <embed src="./lab1/authorization_html_code.txt" width="100%" height="300px" />
    
    <h2>CSS:</h2>
    <embed src="./lab1/authorization_css_code.txt" width="100%" height="400px" />

    <h2>Теорія про теги та атрибути, які застосовуються при створенні форм:</h2>
    <embed src="./lab1/forms.pdf" width="100%" height="800px" />
    `;
}

function a1_6() {
    return `
    <div style="display:flex; flex-direction:column;">
    
    <img src="./lab1/img_main_1.png" alt="Silo plant on the field" style="float:right; width:700px;">
    <h2>HTML:</h2>
    <embed src="./lab1/img_html_code.txt" width="100%" height="100px" />
    <h2>CSS:</h2>
    <embed src="./lab1/img_css_code.txt" width="100%" height="300px" />
    
    <img src="./lab1/img_equipment_1.png" alt="Silo plant on the field" style="float:right; width:700px;">
    <h2>HTML:</h2>
    <embed src="./lab1/img_composition_html_code.txt" width="100%" height="200px" />
    <h2>CSS:</h2>
    <embed src="./lab1/img_composition_css_code.txt" width="100%" height="400px" />

    <h2>Теорія про теги та атрибути, які застосовуються при створенні зображень:</h2>
    <embed src="./lab1/img_learning_info.pdf" width="100%" height="800px" />
    `;
}

function a1_7() {
    return `
    <div style="display:flex; flex-direction:column;">
    
    <img src="./lab1/list1.png" alt="Ragistration form" style="float:right; width:600px;">
    <h2>HTML:</h2>
    <embed src="./lab1/list_html_code.txt" width="100%" height="100px" />
    
    <h2>CSS:</h2>
    <embed src="./lab1/list_css_code.txt" width="100%" height="100px" />
    <h2>Теорія про теги та атрибути, які застосовуються при створенні зображень:</h2>
    <embed src="./lab1/list_learning_info.pdf" width="100%" height="800px" />
    `;
}

function a1_8() {
    return `
    <h2>Висновки:</h2>
    <p>Після виконання Лабораторної роботи №1 ми навчилися:</p>
    <ul>
        <li>Створювати в HTML документі таблиці.</li> 
        <li>Стилізувати таблиці.</li>
        <li>Створювати в HTML документ форми.</li> 
        <li>Стилізувати форми.</li>
        <li>Вставляти в HTML документ зображення.</li>
        <li>Стилізувати зображення.</li>
        <li>Створювати в HTML документ ненумеровані списки.</li>
        <li>Стилізувати ненумеровані списки.</li>
    </ul>

    <p>Були здобуті практичні навички з використання тегів та їх стилізації. </p>
    
    <p>Також був створений шаблон Звітного документу та головна сторінка веб-сайту згідно завдання. </p>
    `;
}

function a2_1() {
    // return img too and text too
    return `<h1>Селектори тегу</h1>
    <embed src="./lab2/tag_css_code.txt" width="100%" height="250px" />
    
    <h2>Селектори класу:</h2>
    <h2>HTML:</h2>
    <embed src="./lab2/class_html_code.txt" width="100%" height="600px" />
    <h2>CSS:</h2>
    <embed src="./lab2/class_css_code.txt" width="100%" height="600px" />
    `;
}

function a2_2() {
    return `<h1>Ідентифікатор</h1><br>
    <h2>HTML:</h2>
    <embed src="./lab2/identifier_html_code.txt" width="100%" height="100px" />
    <h2>CSS:</h2>
    <embed src="./lab2/identifier_css_code.txt" width="100%" height="300px" />
    `;
}

function a2_3() {
    return `<div style="display:flex; flex-direction:column;">
    <h2>Сусідні селектори:</h2>
    <embed src="./lab2/neighbour_selectors_html.png" alt="Neighbour selectors html code" style="float:right; width:600px;"><br>
    <embed src="./lab2/neighbour_selectors_html2.png" alt="Neighbour selectors html code" style="float:right; width:900px;"><br>
    <h2>Контекстний та дочірній селектор:</h2>
    <embed src="./lab2/context_selector_html1.png" alt="Neighbour selectors html code" style="float:right; width:600px;"><br>
    <embed src="./lab2/context_selector_html2.png" alt="Neighbour selectors html code" style="float:right; width:900px;"><br>
    <embed src="./lab2/context_selector_page.png" alt="Neighbour selectors html code" style="float:right; width:400px;"><br>
    
    <h2>Cелектор атрибута:</h2>
    <embed src="./lab2/attribute_selector_html.png" alt="Neighbour selectors html code" style="float:right; width:600px;"><br>
    <embed src="./lab2/attribute_selector_html2.png" alt="Neighbour selectors html code" style="float:right; width:900px;"><br>
    <embed src="./lab2/attribute_selector_page.png" alt="Neighbour selectors html code" style="float:right; width:900px;"><br>

    <h2>Універсальний селектор:</h2>
    <embed src="./lab2/universal_selector_css.png" alt="Neighbour selectors html code" style="float:right; width:600px;"><br>
    `;
}

function a2_4() {
    return `<div style="display:flex; flex-direction:column;">
    <h2>Оформлення списків за допомогою CSS:</h2>
        
    <img src="./lab2/list1.png" alt="Ragistration form" style="float:right; width:600px;">
    <h2>HTML:</h2>
    <embed src="./lab2/list_html_code.txt" width="100%" height="150px" />
    <h2>CSS:</h2>
    <embed src="./lab1/list_css_code.txt" width="100%" height="100px" />

    <h2>Оформлення кольору та фону за допомогою CSS:</h2>
    

    <h2>Універсальний селектор:</h2>
    <embed src="./lab2/universal_selector_css.png" alt="Neighbour selectors html code" style="float:right; width:600px;"><br>
    
    <h2>Властивості кольору та фону:</h2>
    <embed src="./lab2/background_color_css_1.png" alt="Neighbour selectors html code" style="float:right; width:600px;"><br>
    <embed src="./lab2/background_color_css_2.png" alt="Neighbour selectors html code" style="float:right; width:600px;"><br>
    <embed src="./lab2/background_color_css_3.png" alt="Neighbour selectors html code" style="float:right; width:600px;"><br>
    <embed src="./lab2/background_color_css_4.png" alt="Neighbour selectors html code" style="float:right; width:600px;"><br>

    <h2>Зовнішні та внутрішні відступи:</h2>
    <embed src="./lab2/margin_css_1.png" alt="Neighbour selectors html code" style="float:right; width:600px;"><br>
    <embed src="./lab2/margin_css_2.png" alt="Neighbour selectors html code" style="float:right; width:400px;"><br>
    `;
}

function a3_1() {
    return `<h1>ЛАБОРАТОРНА РОБОТА №3</h1><br>
 
 <h2>Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА.  ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.</h2>
 
<h4>Мета: 
⎯	придбати практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок
⎯	придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX.</h4> `;
}

function a3_2() {
    return `
<h1>Скріншот головної сторінки сайту</h1>

<div style="display:flex; flex-direction:column;">
<img src="./lab3/main_page_structure.png" alt="main page" style="float:right;width:500px;height:600px;">
<h2>HTML код головної сторінки:</h2>
    <embed src="./lab3/main_page_html.txt" width="700px" height="300px" />
`;
}

function a3_3() {
    return `
    <h1>HTML код головної сторінки:</h1>
    <embed src="./lab3/main_page_html.txt" width="800px" height="500px" />
`;
}

function a3_4() {
    return `
    
    <h1>Фіксована таблична верстка</h1>

    <div style="display:flex; flex-direction:column;">
    <h3>Скріншот виконаного завдання (4 варіант згідно завдання):</h3>
    <img src="./lab3/lab3_fixed_table.png" alt="lab3_fixed_table" style="float:left;width:500px;height:600px;"><br><br>
    <h3>HTML код завдання:</h3>
    <embed src="./lab3/lab3_fixed_table.pdf" width="100%" height="800px" />
    <h3>CSS код завдання:</h3>
    <embed src="./lab3/lab3_fixed_table_style.pdf" width="100%" height="800px" />

    <h3>2 спосіб виконання:</h3>
    <img src="./lab3/lab3_fixed_table_2.png" alt="lab3_fixed_table" style="float:left;width:500px;height:600px;"><br><br>
    <h3>HTML код:</h3>
    <embed src="./lab3/lab3_fixed_table_2.pdf" width="100%" height="800px" />
    <h3>CSS код завдання:</h3>
    <embed src="./lab3/lab3_fixed_table_style_2.pdf" width="100%" height="800px" />
    </div>
    `;
}

function a3_5() {
    return `
    
    <h1>Гумова таблична верстка</h1>

    <div style="display:flex; flex-direction:column;">
    <h3>Скріншот виконаного завдання (4 варіант згідно завдання):</h3>
    <img src="./lab3/lab3_flextable.png" alt="lab3_fixed_table" style="float:left;width:500px;height:600px;"><br><br>
    <h3>HTML код завдання:</h3>
    <embed src="./lab3/lab3_flextable.pdf" width="100%" height="800px" />
    <h3>CSS код завдання:</h3>
    <embed src="./lab3/lab3_flextable_style.pdf" width="100%" height="800px" />

    </div>
    `;
}

function a3_6() {
    return `
    
    <h1>Фіксована блокова верстка</h1>

    <div style="display:flex; flex-direction:column;">
    <h3>Скріншот виконаного завдання (4+1 варіант згідно завдання):</h3>
    <img src="./lab3/lab3_fixed_box.png" alt="lab3_fixed_table" style="float:left;width:500px;height:600px;"><br><br>
    <h3>HTML код завдання:</h3>
    <embed src="./lab3/lab3_fixed_box.pdf" width="100%" height="800px" />
    <h3>CSS код завдання:</h3>
    <embed src="./lab3/lab3_fixed_box_style.pdf" width="100%" height="800px" />

    </div>
    `;
}

function a3_7() {
    return `
    
    <h1>Верстка макету Flexbox</h1>

    <div style="display:flex; flex-direction:column;">
    <h3>Скріншот макету завдання:</h3>
    <img src="./lab3/lab3_page_muster.png" alt="lab3_fixed_table" style="float:left;width:500px;height:600px;"><br><br>
    
    <h3>Скріншот виконаного завдання:</h3>
    <img src="./lab3/lab3_flexbox_page.png" alt="lab3_fixed_table" style="float:left;width:500px;height:700px;"><br><br>
    <h3>HTML код завдання:</h3>
    <embed src="./lab3/lab3_flexbox_page.pdf" width="100%" height="800px" />
    <h3>CSS код завдання:</h3>
    <embed src="./lab3/lab3_flexbox_page_style.pdf" width="100%" height="800px" />

    </div>
    `;
}

function a4_1() {
    return `<h1>ЛАБОРАТОРНА РОБОТА №4</h1><br>
    <h2>Тема:  АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST.</h2><br>
    <p>Мета: Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції. Метатег viewport. Інструменти розробника. Стратегія Mobile First.</p>
    `;
}

function a4_2() {
    return `
    <h3>2.	Використовуючі медіа-запити та СSS- правила, для вибраних вами брейкпоінтів, виконати 
    адаптивну верстку для:</h3>
    <ul>
        <li>Десктопної версії.</li> 
        <li>Планшетної версії.</li>
        <li>Мобільної версії.</li>
    </ul>
    <br><br>
    <h3>Результат виконання: </h3>
    
    <div>
    <embed src="./lab4/page.html" width="100%" height="1000px">
    </div>
    <br><br>
    <h3>Медіа-запити: </h3>
    <embed src="./lab4/css_media_requests.pdf" width="100%" height="800px" />
    `;
}




function a5_1() {
    return `<h1>ЛАБОРАТОРНА РОБОТА №5</h1><br>
    <h2>Тема:  ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ. 
    ВИКОРИСТАННЯ МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT.</h2><br>
    <p>Мета: придбати практичні навички роботи з масивами у js-сценаріях.  Реалізація програм засобами мови JAVASCRIPT</p>
    `;
}


function a5_2() {
    return `
    <h3>Завдання:</h3>
    <div style="display:flex; flex-direction:column;">
    <img src="./lab5/array_task.png" alt="array_task" style="float:left;width:600px;height:300px;"><br><br>
    
    <div>
    <h3>JS код завдання:</h3>
    <embed src="./lab5/lab4_1.js" width="100%" height="400px" /><br><br>

    <h3>Результат:</h3>
    <embed src="./lab5/results.txt" width="100%" height="400px" />
    </div>
    `;
}


function a5_3() {
    return `
    <h3>Завдання:</h3>
    <img src="./lab5/text_editor/text_editor_task.png" alt="array_task" style="float:left;width:700px;height:200px;"><br><br>
    

    <div>
    <embed src="./lab5/text_editor/text_editor.html" width="100%" height="500px" />
    <h3>HTML код завдання:</h3>
    <embed src="./lab5/text_editor/text_editor.pdf" width="100%" height="800px" />
    <h3>CSS код завдання:</h3>
    <embed src="./lab5/text_editor/text_editor_style.pdf" width="100%" height="800px" />
    <h3>JS код завдання:</h3>
    <embed src="./lab5/text_editor/text_editor_js.js" width="100%" height="400px" />
    </div>
    `;
}

function a6_1() {
    return `<h1>ЛАБОРАТОРНА РОБОТА №6</h1><br>
    <h2>Тема:  ОБ'ЄКТ. МЕТОДИ ОБ'ЄКТА. МАСИВ ОБ'ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ. 
    CALLBACK. СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ.</h2><br>
    <p>Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта. 
    Callback. Стрілочні функції. Стрілочні функції як колбеки. Реалізація програм засовами 
    мови JAVASCRIPT.
    </p><br>
    `;
}

function a6_2() {
    return `
        
    <h3>Завдання:</h3>
    <p>Студенти, які мають парні номери за списком групи виконують №варіантів: 2 ,4, 6, 8, 9,10.
    </p> <br>

    <div style="display:flex; flex-direction:column;">

    <h3>Виконання завдання №2:</h3>
    <img src="./lab6/images/task2.png" alt="js_task2" 
    style="float:left;width:700px;height:300px;"><br><br>
    <p>Код:</p><br>
    <img src="./lab6/images/task2code.png" alt="js_task2code" 
    style="float:left;width:700px;height:800px;"><br><br>
    <p>Тест 1:</p><br>
    <img src="./lab6/images/task2test1.png" alt="js_task2test1" 
    style="float:left;width:700px;height:50px;"><br><br>
    <p>Тест 2:</p><br>
    <img src="./lab6/images/task2test2.png" alt="js_task2test2" 
    style="float:left;width:700px;height:70px;"><br><br>
    
    <h3>Виконання завдання №4:</h3>
    <img src="./lab6/images/task4.png" alt="js_task4" 
    style="float:left;width:700px;height:340px;"><br><br>
    <p>Код:</p><br>
    <img src="./lab6/images/task4code.png" alt="js_task4code" 
    style="float:left;width:700px;height:700px;"><br><br>
    <p>Тест 1:</p><br>
    <img src="./lab6/images/task4test1.png" alt="js_task4test1" 
    style="float:left;width:700px;height:70px;"><br><br>
    
    <h3>Виконання завдання №6:</h3>
    <img src="./lab6/images/task6.png" alt="js_task6" 
    style="float:left;width:700px;height:280px;"><br><br>
    <p>Код:</p><br>
    <img src="./lab6/images/task6code.png" alt="js_task6code" 
    style="float:left;width:700px;height:600px;"><br><br>
    <p>Тест 1:</p><br>
    <img src="./lab6/images/task6test1.png" alt="js_task6test1" 
    style="float:left;width:700px;height:150px;"><br><br>
    
    <h3>Виконання завдання №8:</h3>
    <img src="./lab6/images/task8.png" alt="js_task8" 
    style="float:left;width:700px;height:300px;"><br><br>
    <p>Код:</p><br>
    <img src="./lab6/images/task8code.png" alt="js_task8code" 
    style="float:left;width:700px;height:800px;"><br><br>
    <p>Тест 1:</p><br>
    <img src="./lab6/images/task8test1.png" alt="js_task8test1" 
    style="float:left;width:700px;height:80px;"><br><br>
    <p>Тест 2:</p><br>
    <img src="./lab6/images/task8test2.png" alt="js_task8test2" 
    style="float:left;width:700px;height:80px;"><br><br>
    <p>Тест 1:</p><br>
    <img src="./lab6/images/task8test3.png" alt="js_task8test3" 
    style="float:left;width:700px;height:80px;"><br><br>

    <h3>Виконання завдання №9:</h3>
    <img src="./lab6/images/task9.png" alt="js_task9" 
    style="float:left;width:700px;height:300px;"><br><br>
    <p>Код:</p><br>
    <img src="./lab6/images/task9code.png" alt="js_task9code" 
    style="float:left;width:700px;height:700px;"><br><br>
    <p>Тест 1:</p><br>
    <img src="./lab6/images/task9test1.png" alt="js_task9test1" 
    style="float:left;width:700px;height:100px;"><br><br>

    <h3>Виконання завдання №10:</h3>
    <img src="./lab6/images/task10.png" alt="js_task10" 
    style="float:left;width:700px;height:200px;"><br><br>
    <p>Код:</p><br>
    <img src="./lab6/images/task10code.png" alt="js_task10code" 
    style="float:left;width:700px;height:850px;"><br><br>
    <p>Тест 1:</p><br>
    <img src="./lab6/images/task10test1.png" alt="js_task10test1" 
    style="float:left;width:700px;height:100px;"><br><br>
    <p>Тест 2:</p><br>
    <img src="./lab6/images/task10test2.png" alt="js_task10test2" 
    style="float:left;width:700px;height:100px;"><br><br>
    <p>Тест 3:</p><br>
    <img src="./lab6/images/task10test3.png" alt="js_task10test3" 
    style="float:left;width:700px;height:100px;"><br><br>

    <div>
    <embed src="./lab6/lab6.html" width="100%" height="600px">
    </div>
    `;
}

function a7_1() {
    return `<h1>ЛАБОРАТОРНА РОБОТА №7</h1><br>
    <h2>Тема:  КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. 
    ДЕЛЕГУВАННЯ ПОДІЙ. THROTTLE. МОДУЛЬНОСТЬ КОДУ.</h2><br>
    <p>Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта. 
    Callback. Стрілочні функції. Стрілочні функції як колбеки. 
    Реалізація програм засовами мови JAVASCRIPT.
    </p><br>
    `;
}

function a7_2() {
    return `
    
    <h3>Завдання:</h3>
    <p>Студенти, які мають парні номери за списком групи виконують №варіантів: 2 ,4, 6, 7, 8, 9,10.
    </p> <br>

    <div style="display:flex; flex-direction:column;">

    <h3>Виконання завдання №2:</h3>
    <img src="./lab7/images/task2.png" alt="js_task2" 
    style="float:left;width:700px;height:400px;"><br><br>
    <p>Код:</p><br>
    <img src="./lab7/images/task2code.png" alt="js_task2code" 
    style="float:left;width:700px;height:400px;"><br><br>
    <p>Тест 1:</p><br>
    <img src="./lab7/images/task2test1.png" alt="js_task2test1" 
    style="float:left;width:700px;height:100px;"><br><br>
    <p>Тест 2:</p><br>
    <img src="./lab7/images/task2test2.png" alt="js_task2test2" 
    style="float:left;width:700px;height:100px;"><br><br>
    
    <h3>Виконання завдання №4:</h3>
    <img src="./lab7/images/task4.png" alt="js_task4" 
    style="float:left;width:700px;height:800px;"><br><br>
    <p>Код:</p><br>
    <img src="./lab7/images/task4code.png" alt="js_task4code" 
    style="float:left;width:700px;height:800px;"><br><br>
    <p>Тест 1:</p><br>
    <img src="./lab7/images/task4test1.png" alt="js_task4test1" 
    style="float:left;width:300px;height:250px;"><br><br>
    <p>Тест 2:</p><br>
    <img src="./lab7/images/task4test2.png" alt="js_task4test2" 
    style="float:left;width:350px;height:150px;"><br><br>
    <p>Тест 3:</p><br>
    <img src="./lab7/images/task4test3.png" alt="js_task4test3" 
    style="float:left;width:300px;height:400px;"><br><br>
    
    <h3>Виконання завдання №6:</h3>
    <img src="./lab7/images/task6.png" alt="js_task6" 
    style="float:left;width:700px;height:700px;"><br><br>
    <p>Код:</p><br>
    <img src="./lab7/images/task6code.png" alt="js_task6code" 
    style="float:left;width:700px;height:350px;"><br><br>
    <p>Тест 1:</p><br>
    <img src="./lab7/images/task6test1.png" alt="js_task6test1" 
    style="float:left;width:200px;height:300px;"><br><br>
    <p>Тест 2:</p><br>
    <img src="./lab7/images/task6test2.png" alt="js_task6test2" 
    style="float:left;width:200px;height:300px;"><br><br>
    <p>Тест 3:</p><br>
    <img src="./lab7/images/task6test3.png" alt="js_task6test3" 
    style="float:left;width:200px;height:300px;"><br><br>
    
    <h3>Виконання завдання №7:</h3>
    
    <div><embed src="./lab7/images/task7.pdf" width="100%" height="800px"></div>
    <p>Код:</p><br>
    <img src="./lab7/images/task7code.png" alt="js_task7code" 
    style="float:left;width:700px;height:250px;"><br><br>
    <p>Тест 1:</p><br>
    <img src="./lab7/images/task7test1.png" alt="js_task7test1" 
    style="float:left;width:500px;height:200px;"><br><br>

    <h3>Виконання завдання №8:</h3>
    
    <div><embed src="./lab7/images/task8.pdf" width="100%" height="800px"></div>
    <p>Код:</p><br>
    <img src="./lab7/images/task8code.png" alt="js_task7code" 
    style="float:left;width:700px;height:700px;"><br><br>
    <p>Тест 1:</p><br>
    <img src="./lab7/images/task8test1.png" alt="js_task7test1" 
    style="float:left;width:400px;height:140px;"><br><br>
    
    <h3>Виконання завдання №9:</h3>
    <div><embed src="./lab7/images/task9.pdf" width="100%" height="800px"></div>
    <p>Код:</p><br>
    <img src="./lab7/images/task9code.png" alt="js_task9code" 
    style="float:left;width:700px;height:650px;"><br><br>
    <p>Тест 1:</p><br>
    <img src="./lab7/images/task9test1.png" alt="js_task9test1" 
    style="float:left;width:400px;height:130px;"><br><br>
    <p>Тест 2:</p><br>
    <img src="./lab7/images/task9test2.png" alt="js_task9test2" 
    style="float:left;width:400px;height:130px;"><br><br>
    <p>Тест 3:</p><br>
    <img src="./lab7/images/task9test3.png" alt="js_task9test3" 
    style="float:left;width:400px;height:130px;"><br><br>

    <h3>Виконання завдання №10:</h3>
    <div><embed src="./lab7/images/task10.pdf" width="100%" height="800px"></div>
    <p>Код:</p><br>
    <img src="./lab7/images/task10code.png" alt="js_task10code" 
    style="float:left;width:700px;height:850px;"><br><br>
    <p>Тест 1:</p><br>
    <img src="./lab7/images/task10test1.png" alt="js_task10test1" 
    style="float:left;width:400px;height:350px;"><br><br>
    <p>Тест 2:</p><br>
    <img src="./lab7/images/task10test2.png" alt="js_task10test2" 
    style="float:left;width:400px;height:600px;"><br><br>
    <p>Тест 3:</p><br>
    <img src="./lab7/images/task10test3.png" alt="js_task10test3" 
    style="float:left;width:400px;height:80px;"><br><br>

    <div>
    <embed src="./lab7/report.html" width="100%" height="600px">
    </div>
    `;
}
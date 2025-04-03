const servicesList = [
    {
        id: 1,
        img: "./services/link.svg",
        title: "Веб разработка",
        text: "Разработка сайтов под ключ, вёрстка по макету, разработка интернет магазинов, блогов и др.",
    },
    {
        id: 2,
        img: "./services/bot_small.svg",
        title: "Разработка ботов",
        text: "Разработка ботов обратной связи, реферальных систем, опросов, автоматизации задач и др.",
    },
    {
        id: 3,
        img: "./services/parser.svg",
        title: "Написание парсеров",
        text: "Сбор данных с сайтов, реализация скриптов для автоматизации и др.",
    },
    {
        id: 4,
        img: "./services/server.svg",
        title: "Разработка сервера",
        text: "Разработка серверов, API, работа с базами данных и др.",
    }
];

//recent work tabs btn list
const buttonList = [
    { id: 1, type: "all", text: "все" },
    { id: 2, type: "web", text: "веб" },
    { id: 3, type: "bots", text: "боты" },
    { id: 4, type: "parsers", text: "парсеры" }
];

//portfolio projects list
const projectsList = [
    {
        id: 1,
        title: "Сайт курса",
        description: "Сайт продажи курса по программированию",
        data: {
            img: "./projects/course/course_project.png",
            link: "https://course-site-alpha.vercel.app",
            github: "https://github.com/tired-proger/course_site",
            technologies: [
                "React", "Swiper", "Sass"
            ],
            features: [
                "Прогресс прокрутки страницы", "Спойлеры", "Слайдер", "Masonry сетка"
            ],
            imgList: [
                "./projects/course/course_project.png",
                "./projects/course/course2.png",
                "./projects/course/course4.png"
            ]
        }
    },
    {
        id: 2,
        title: "Сайт со странами",
        description: "Сайт с информацией о странах",
        data: {
            img: "./projects/country/country_project.png",
            link: "https://country-app-sage.vercel.app",
            github: "https://github.com/tired-proger/country-app",
            technologies: [
                "React", "Redux", "Sass", "Redux Thunk", "React Router Dom", "React Select"
            ],
            features: [
                "Смена темы приложения", "Поиск конкретной страны", "Фильтрация стран", "Пагинация"
            ],
            imgList: [
                "./projects/country/country_project.png",
                "./projects/country/country2.png",
                "./projects/country/country3.png"
            ]
        }
    },
    {
        id: 3,
        title: "Сайт расчёта майнинга",
        description: "Сайт на тематику криптовалюты",
        data: {
            img: "./projects/crypto/crypto_project.png",
            link: "https://tired-proger.github.io/crypto-site/",
            github: "https://github.com/tired-proger/crypto-site",
            technologies: [
                "Pug", "Sass", "JavaScript"
            ],
            features: [
                "Адаптивность", "Работа с API", "Калькулятор"
            ],
            imgList: [
                "./projects/crypto/crypto_project.png",
                "./projects/crypto/crypto2.png",
                "./projects/crypto/crypto3.png"
            ]
        }
    },
    {
        id: 4,
        title: "Игровой тест",
        description: "Тест по сериалу Скибиди Туалеты",
        data: {
            img: "./projects/test/test_project.png",
            link: "https://skibidi-test-mu.vercel.app",
            github: "https://github.com/tired-proger/skibidi-test",
            technologies: [
                "React", "TypeScript", "React Router Dom", "Framer Motion", "Sass", "React Confetti"
            ],
            features: [
                "Анимации появлений", "Логика определения персонажа", "Ленивая подгрузка изображений"
            ],
            imgList: [
                "./projects/test/test_project.png",
                "./projects/test/test2.png",
                "./projects/test/test3.png"
            ]
        }
    }
];

//available extensions for adding file
const availableExtensions = [".jpg", ".jpeg", ".webm", ".png", ".docx", ".doc", ".txt", ".pdf", ".xlsx", ".xls", ".csv", "ppt", ".pptx", 
    ".rar", ".zip", ".css", ".html", ".js", ".jsx", ".ts", ".tsx"];

export {
    servicesList,
    buttonList,
    projectsList,
    availableExtensions
};
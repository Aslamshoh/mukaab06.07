/* ─── PRIVACY MODAL ─── */
const PM = {
    ru: {
        pmLabel: 'Документ',
        pmTitle: 'Политика конфиденциальности',
        privacyLink: 'Политика конфиденциальности',
        body: `
<style>
#pmBody h2{font-size:15px;font-weight:700;color:#fff;margin:26px 0 10px;padding-left:14px;border-left:2px solid #c8a96e;}
#pmBody h2:first-child{margin-top:0;}
#pmBody p{font-size:13px;color:rgba(255,255,255,.65);line-height:1.85;margin-bottom:10px;}
#pmBody ul{margin:8px 0 14px 0;list-style:none;}
#pmBody ul li{font-size:13px;color:rgba(255,255,255,.62);padding:6px 0 6px 18px;position:relative;border-bottom:1px solid rgba(255,255,255,.04);line-height:1.6;}
#pmBody ul li:last-child{border-bottom:none;}
#pmBody ul li::before{content:'—';position:absolute;left:0;color:#c8a96e;font-size:11px;top:8px;}
#pmBody strong{color:#fff;font-weight:600;}
#pmBody .pm-contacts{padding:20px;border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.02);margin:18px 0 10px;border-radius:4px;}
#pmBody .pm-contacts p{margin-bottom:6px;}
#pmBody .pm-footer{margin-top:24px;padding-top:16px;border-top:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;font-size:12px;color:rgba(255,255,255,.35);}
#pmBody .pm-badge{background:rgba(200,169,110,.1);border:1px solid rgba(200,169,110,.2);color:#c8a96e;padding:4px 14px;font-size:11px;font-weight:600;letter-spacing:.06em;}
</style>
navCta:'Написать',
<p><strong>ООО «Мукааб»</strong> (далее — Оператор) уделяет большое значение защите персональных данных пользователей. Настоящая Политика конфиденциальности определяет порядок обработки и меры по обеспечению безопасности информации, предоставленной посетителями сайта <strong>mukaab.by</strong>.</p>
<h2>1. Общие положения</h2>
<p>Настоящая Политика конфиденциальности составлена в соответствии с требованиями законодательства Республики Беларусь и определяет обязательства Оператора по неразглашению и обеспечению режима защиты персональных данных, которые пользователь предоставляет при взаимодействии с сайтом.</p>
<p>Оператор уважает право на неприкосновенность частной жизни и обеспечивает сохранность информации, полученной от посетителей.</p>
<h2>2. Основные понятия</h2>
<ul>
<li><strong>Персональные данные</strong> — любая информация, относящаяся к прямо или косвенно определенному физическому лицу (ФИО, телефон, email и другие).</li>
<li><strong>Обработка персональных данных</strong> — любое действие (сбор, запись, систематизация, накопление, хранение, уточнение, использование, передача, блокирование, удаление, уничтожение).</li>
<li><strong>Пользователь</strong> — лицо, которое использует сайт <strong>mukaab.by</strong> и добровольно предоставляет свои персональные данные.</li>
</ul>
<h2>3. Персональные данные, которые мы собираем</h2>
<p>Оператор может обрабатывать следующие персональные данные пользователей:</p>
<ul>
  
<li>имя и фамилия;</li>
<li>номер телефона;</li>
<li>адрес электронной почты;</li>
<li>ссылки на социальные сети (при указании);</li>
<li>фотографии (если пользователь добровольно передает);</li>
<li>иные данные, переданные добровольно: <strong>мессенджеры, должность, компания</strong>.</li>
</ul>
<p>Кроме того, автоматически собираются технические данные: IP-адрес, сведения о браузере, cookies, информация о действиях на сайте.</p>
<h2>4. Цели обработки данных</h2>
<ul>
<li>обработка заявок и обратной связи;</li>
<li>предоставление информации об услугах и продуктах;</li>
<li>подготовка коммерческих предложений;</li>
<li>улучшение работы сайта, анализ пользовательского опыта;</li>
<li>маркетинговые и рекламные коммуникации (с согласия пользователя).</li>
</ul>
<h2>5. Правовые основания обработки</h2>
<ul>
<li>согласие пользователя на обработку персональных данных;</li>
<li>заключение и исполнение договора, стороной которого является пользователь;</li>
<li>требования, установленные законодательством Республики Беларусь.</li>
</ul>
<h2>6. Условия обработки и передачи данных</h2>
<p><strong>6.1.</strong> Оператор не передает персональные данные третьим лицам без явного согласия пользователя, за исключением случаев, прямо предусмотренных законом.</p>
<p><strong>6.2.</strong> Персональные данные могут передаваться сервисам аналитики, CRM-системам, а также подрядчикам, обеспечивающим работу сайта: <strong>Яндекс.Метрика, Google Analytics, CRM-система, сервисы email-рассылок</strong>.</p>
<p><strong>6.3.</strong> При трансграничной передаче данных Оператор обеспечивает их защиту в соответствии с законодательством РБ и международными стандартами.</p>
<h2>7. Срок хранения данных</h2>
<p>Персональные данные хранятся <strong>не дольше 3 лет с момента последнего взаимодействия либо до момента отзыва согласия пользователем</strong>. После этого данные подлежат уничтожению или обезличиванию.</p>
<h2>8. Права пользователя</h2>
<ul>
<li>получать информацию, касающуюся обработки его персональных данных;</li>
<li>требовать уточнения, блокирования или уничтожения своих данных;</li>
<li>отозвать согласие на обработку персональных данных в любое время;</li>
<li>обратиться с запросом об ограничении обработки.</li>
</ul>
<p>Для реализации своих прав пользователь может направить запрос на: <strong>privacy@mukaab.by</strong>.</p>
<h2>9. Cookies и аналитика</h2>
<p><strong>Сайт использует cookies для корректной работы, аналитики и персонализации.</strong> Пользователь может отключить cookies в настройках браузера. Отключение cookies может повлиять на функциональность сайта.</p>
<p>Cookie-файлы не содержат персональные данные и используются для сбора обезличенной статистики.</p>
<h2>10. Защита персональных данных</h2>
<p>Оператор принимает организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, копирования, распространения.</p>
<h2>11. Изменение Политики конфиденциальности</h2>
<p>Оператор вправе вносить изменения в настоящую Политику. Актуальная версия всегда доступна на сайте <strong>mukaab.by</strong>.</p>
<div class="pm-contacts">
<p><strong>12. Контактные данные Оператора</strong></p>
<p>ООО «Мукааб»</p>
<p>Email: <strong>privacy@mukaab.by</strong></p>
<p>г. Минск, ул. Мележа 1, офис 405</p>
</div>
<div class="pm-footer">
<span class="pm-badge">Действующая редакция</span>
<span>© ООО «Мукааб», все права защищены</span>
</div>`
    },
    en: {
        pmLabel: 'Document',
        pmTitle: 'Privacy Policy',
        privacyLink: 'Privacy Policy',
        body: `
<style>
#pmBody h2{font-size:15px;font-weight:700;color:#fff;margin:26px 0 10px;padding-left:14px;border-left:2px solid #c8a96e;}
#pmBody h2:first-child{margin-top:0;}
#pmBody p{font-size:13px;color:rgba(255,255,255,.65);line-height:1.85;margin-bottom:10px;}
#pmBody ul{margin:8px 0 14px 0;list-style:none;}
#pmBody ul li{font-size:13px;color:rgba(255,255,255,.62);padding:6px 0 6px 18px;position:relative;border-bottom:1px solid rgba(255,255,255,.04);line-height:1.6;}
#pmBody ul li:last-child{border-bottom:none;}
#pmBody ul li::before{content:'—';position:absolute;left:0;color:#c8a96e;font-size:11px;top:8px;}
#pmBody strong{color:#fff;font-weight:600;}
#pmBody .pm-contacts{padding:20px;border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.02);margin:18px 0 10px;border-radius:4px;}
#pmBody .pm-contacts p{margin-bottom:6px;}
#pmBody .pm-footer{margin-top:24px;padding-top:16px;border-top:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;font-size:12px;color:rgba(255,255,255,.35);}
#pmBody .pm-badge{background:rgba(200,169,110,.1);border:1px solid rgba(200,169,110,.2);color:#c8a96e;padding:4px 14px;font-size:11px;font-weight:600;letter-spacing:.06em;}
</style>
navCta:'Contact Us',
<p><strong>Mukaab LLC</strong> (hereinafter — the Operator) places great importance on the protection of users' personal data. This Privacy Policy defines the procedure for processing and measures to ensure the security of information provided by visitors to the site <strong>mukaab.by</strong>.</p>
<h2>1. General Provisions</h2>
<p>This Privacy Policy is drawn up in accordance with the requirements of the legislation of the Republic of Belarus and defines the Operator's obligations regarding non-disclosure and ensuring the protection of personal data that the user provides when interacting with the site.</p>
<p>The Operator respects the right to privacy and ensures the safety of information received from visitors.</p>
<h2>2. Basic Concepts</h2>
<ul>
<li><strong>Personal data</strong> — any information relating directly or indirectly to a specific individual (full name, phone number, email, etc.).</li>
<li><strong>Processing of personal data</strong> — any action (collection, recording, systematization, accumulation, storage, clarification, use, transfer, blocking, deletion, destruction).</li>
<li><strong>User</strong> — a person who uses the site <strong>mukaab.by</strong> and voluntarily provides their personal data.</li>
</ul>
<h2>3. Personal Data We Collect</h2>
<p>The Operator may process the following personal data of users:</p>
<ul>
<li>first and last name;</li>
<li>phone number;</li>
<li>email address;</li>
<li>links to social networks (if specified);</li>
<li>photos (if voluntarily provided by the user);</li>
<li>other data provided voluntarily: <strong>messengers, position, company</strong>.</li>
</ul>
<p>In addition, technical data is automatically collected: IP address, browser information, cookies, information about actions on the site.</p>
<h2>4. Purposes of Data Processing</h2>
<ul>
<li>processing requests and feedback;</li>
<li>providing information about services and products;</li>
<li>preparation of commercial offers;</li>
<li>improving site performance, analyzing user experience;</li>
<li>marketing and advertising communications (with user consent).</li>
</ul>
<h2>5. Legal Basis for Processing</h2>
<ul>
<li>user consent to the processing of personal data;</li>
<li>conclusion and execution of an agreement to which the user is a party;</li>
<li>requirements established by the legislation of the Republic of Belarus.</li>
</ul>
<h2>6. Conditions for Processing and Transfer of Data</h2>
<p><strong>6.1.</strong> The Operator does not transfer personal data to third parties without the user's explicit consent, except in cases expressly provided for by law.</p>
<p><strong>6.2.</strong> Personal data may be transferred to analytics services, CRM systems, as well as contractors: <strong>Yandex.Metrica, Google Analytics, CRM system, email services</strong>.</p>
<p><strong>6.3.</strong> In case of cross-border transfer, the Operator ensures data protection in accordance with the legislation of the Republic of Belarus and international standards.</p>
<h2>7. Data Retention Period</h2>
<p>Personal data is stored <strong>no longer than 3 years from the moment of last interaction or until the user withdraws consent</strong>. After that, the data is subject to destruction or anonymization.</p>
<h2>8. User Rights</h2>
<ul>
<li>receive information regarding the processing of their personal data;</li>
<li>require clarification, blocking or destruction of their data;</li>
<li>withdraw consent to the processing of personal data at any time;</li>
<li>submit a request to restrict processing.</li>
</ul>
<p>To exercise their rights, the user can send a request to: <strong>privacy@mukaab.by</strong>.</p>
<h2>9. Cookies and Analytics</h2>
<p><strong>The site uses cookies for correct operation, analytics and personalization.</strong> The user can disable cookies in the browser settings. Disabling cookies may affect site functionality.</p>
<p>Cookie files do not contain personal data and are used to collect anonymized statistics.</p>
<h2>10. Protection of Personal Data</h2>
<p>The Operator takes organizational and technical measures to protect personal data from unauthorized or accidental access, destruction, modification, copying, distribution.</p>
<h2>11. Changes to the Privacy Policy</h2>
<p>The Operator has the right to make changes to this Policy. The current version is always available on the website <strong>mukaab.by</strong>.</p>
<div class="pm-contacts">
<p><strong>12. Operator's Contact Details</strong></p>
<p>Mukaab LLC</p>
<p>Email: <strong>privacy@mukaab.by</strong></p>
<p>Minsk, Melezh St. 1, office 405</p>
</div>
<div class="pm-footer">
<span class="pm-badge">Current version</span>
<span>© Mukaab LLC, all rights reserved</span>
</div>`
    }
};

function toggleContacts(){

    document
    .getElementById("contactMenu")
    .classList
    .toggle("active");

}

document.addEventListener("click",(e)=>{

    const dropdown=document.querySelector(".contact-dropdown");

    const menu=document.getElementById("contactMenu");

    if(!dropdown.contains(e.target)){

        menu.classList.remove("active");

    }

});

function openPrivacy() {
    const overlay = document.getElementById('privacyOverlay');
    const modal   = document.getElementById('privacyModal');
    document.getElementById('pmBody').innerHTML = PM[lang].body;
    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
    modal.style.transform = 'translateY(0) scale(1)';
    document.body.style.overflow = 'hidden';
}

function closePrivacy() {
    const overlay = document.getElementById('privacyOverlay');
    const modal   = document.getElementById('privacyModal');
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
    modal.style.transform = 'translateY(24px) scale(.97)';
    document.body.style.overflow = '';
}

document.getElementById('privacyOverlay').addEventListener('click', function(e) {
    if (e.target === this) closePrivacy();
});

document.addEventListener('keydown', e => { if (e.key === 'Escape') closePrivacy(); });

/* ─── i18n ─── */
const T = {
    ru: {
        nav1:'Главная', nav2:'Интерьеры', nav3:'Авторский надзор', nav4:'Услуги', nav5m:'Портфолио',
        navCta:'Написать нам',
        back: 'Назад к услугам',
        title: 'Авторский надзор',
        subtitle: 'Полный цикл создания жилых и общественных зданий: от идеи до сдачи ключей.',
        sec1: 'Архитектурное проектирование',
        sec2: '3D-визуализация',
        sec3: 'Индивидуальные изделия из металла',
        perhour: '/ час',
        persqm: '/ м²',
        permonth: '/ месяц',
        perobj: '/ объект',
        c1h: 'Консультация архитектора',
        c1a: 'Анализ участка и его особенностей',
        c1b: 'Посадка дома на рельеф',
        c1c: 'Выбор технологии строительства',
        c1d: 'Рекомендации по материалам',
        c2h: 'Эскизный проект',
        c2a: 'Планировки всех этажей',
        c2b: 'Концепция фасадов',
        c2c: 'Привязка к местности',
        c2d: 'Генеральный план участка',
        c3h: 'Архитектурно-строительный проект (АР + КР)',
        c3desc: 'Полный рабочий пакет документации для строительства:',
        c3a: 'Архитектурные чертежи (планы, фасады, разрезы)',
        c3b: 'Конструктив — фундаменты, стены, кровля',
        c3c: 'Узлы и детали',
        c3d: 'Спецификации материалов',
        c3e: 'Инженерные разделы (водоснабжение, канализация)',
        c3f: 'Электроснабжение и освещение',
        c3g: 'Отопление и вентиляция',
        c3h2: 'Смета (по запросу)',
        c4h: 'Авторский надзор и управление строительством',
        c4a: 'Техническое сопровождение',
        c4b: 'Контроль качества работ на объекте',
        c4c: 'Ведение графика строительства',
        c4d: 'Коммуникация с подрядчиком',
        c4note: 'от 350$ / месяц',
        v1h: 'Визуализация экстерьера',
        v1a: 'Детальная проработка фасадов',
        v1b: 'Дневное и вечернее освещение',
        v1c: 'Благоустройство территории',
        v1d: 'Несколько ракурсов',
        v2h: 'Визуализация интерьера',
        v2a: 'Фотореалистичные рендеры',
        v2b: 'Подбор реальных текстур и мебели',
        v2c: 'Итерации правок включены',
        v2d: 'Форматы JPG / PNG / TIFF',
        v3h: '3D-моделирование объектов и МАФ',
        v3a: 'Мебель и элементы декора',
        v3b: 'Лестницы и ограждения',
        v3c: 'Малые архитектурные формы',
        v3note: 'от 100$ за объект',
        v4h: 'Видео-облёты и панорамы 360°',
        v4price: 'По запросу',
        v4a: 'Анимированные видео-облёты фасадов и территории',
        v4b: 'Интерактивные панорамы 360° для виртуального тура',
        v4c: 'Стоимость рассчитывается индивидуально по ТЗ',
        m0h: 'Материалы',
        m1d: 'Сталь Кортен — эффект благородной ржавчины. Не требует покраски, устойчива к атмосферным воздействиям.',
        m2n: 'Нержавеющая сталь',
        m2d: 'Полированная, шлифованная или матовая отделка. Долговечность и элегантность.',
        m3n: 'Сталь с полимерным покрытием',
        m3d: 'Любые цвета по каталогу RAL. Устойчивое порошковое покрытие для улицы и интерьера.',
        ms1h: 'Услуги металлообработки',
        ms1a: 'Разработка чертежей КМ/КМД для лазерной резки и гибки',
        ms1b: 'Изготовление лестниц и ограждений',
        ms1c: 'Производство фасадных панелей',
        ms1d: 'Малые архитектурные формы (МАФ) и арт-объекты',
        ms2h: 'Стоимость',
        ms2sub: '/ эскиз',
        ms2a: 'Расчёт по ТЗ или готовым чертежам',
        ms2b: 'Серийное и единичное производство',
        ms2c: 'Доставка и монтаж на объекте',
        ms2note: 'от 50$ за эскиз изделия',
        ctah: 'Обсудим ваш проект?',
        ctap: 'Оставьте заявку — свяжемся в течение часа',
        ctabtn: 'Оставить заявку',
        footsub: 'Premium Architecture Studio'
    },
    en: {
        nav1:'Home', nav2:'Interiors', nav3:'Authors supervision', nav4:'Services', nav5m:'Portfolio',
        navCta:'Contact Us',
        back: 'Back to services',
        title: 'Authors supervision',
        subtitle: 'Full cycle of residential and commercial building creation: from idea to key handover.',
        sec1: 'Architectural Design',
        sec2: '3D Visualisation',
        sec3: 'Custom Metal Works',
        perhour: '/ hour',
        persqm: '/ m²',
        permonth: '/ month',
        perobj: '/ object',
        c1h: 'Architect Consultation',
        c1a: 'Site analysis and conditions',
        c1b: 'House placement on the terrain',
        c1c: 'Construction technology selection',
        c1d: 'Material recommendations',
        c2h: 'Sketch Project',
        c2a: 'Floor plans for all levels',
        c2b: 'Facade concept',
        c2c: 'Site positioning',
        c2d: 'General site plan',
        c3h: 'Architectural & Structural Project (AR + SR)',
        c3desc: 'Full working documentation package for construction:',
        c3a: 'Architectural drawings (plans, facades, sections)',
        c3b: 'Structure — foundations, walls, roof',
        c3c: 'Nodes and details',
        c3d: 'Material specifications',
        c3e: 'Engineering sections (water supply, sewage)',
        c3f: 'Power supply and lighting',
        c3g: 'Heating and ventilation',
        c3h2: 'Cost estimate (on request)',
        c4h: 'Author\'s Supervision & Construction Management',
        c4a: 'Technical support',
        c4b: 'Quality control on site',
        c4c: 'Construction schedule management',
        c4d: 'Contractor communication',
        c4note: 'from $350 / month',
        v1h: 'Exterior Visualisation',
        v1a: 'Detailed facade rendering',
        v1b: 'Day and evening lighting',
        v1c: 'Landscape and territory',
        v1d: 'Multiple viewpoints',
        v2h: 'Interior Visualisation',
        v2a: 'Photorealistic renders',
        v2b: 'Real textures and furniture selection',
        v2c: 'Revision rounds included',
        v2d: 'JPG / PNG / TIFF formats',
        v3h: '3D Object Modelling & Small Forms',
        v3a: 'Furniture and decor elements',
        v3b: 'Stairs and railings',
        v3c: 'Small architectural forms',
        v3note: 'from $100 per object',
        v4h: 'Video Flythroughs & 360° Panoramas',
        v4price: 'On request',
        v4a: 'Animated video flythroughs of facades and territory',
        v4b: 'Interactive 360° panoramas for virtual tours',
        v4c: 'Price calculated individually per brief',
        m0h: 'Materials',
        m1d: 'Corten steel — noble rust effect. No paint required, weather resistant.',
        m2n: 'Stainless steel',
        m2d: 'Polished, brushed, or matte finish. Durability and elegance.',
        m3n: 'Powder-coated steel',
        m3d: 'Any RAL colour. Durable coating for outdoor and interior use.',
        ms1h: 'Metal Fabrication Services',
        ms1a: 'KM/KMD drawings for laser cutting and bending',
        ms1b: 'Stairs and railings manufacture',
        ms1c: 'Facade panel production',
        ms1d: 'Small architectural forms and art objects',
        ms2h: 'Pricing',
        ms2sub: '/ sketch',
        ms2a: 'Calculated per brief or ready drawings',
        ms2b: 'Serial and single-unit production',
        ms2c: 'Delivery and on-site installation',
        ms2note: 'from $50 per product sketch',
        ctah: 'Shall we discuss your project?',
        ctap: "Leave a request — we'll respond within the hour",
        ctabtn: 'Send a request',
        footsub: 'Premium Architecture Studio'
    }
};

let lang = 'ru';

function toggleMenu() {
    const menu   = document.getElementById('mobileMenu');
    const burger = document.getElementById('burger');
    const open   = menu.classList.toggle('open');
    burger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
}

// close menu on link click
document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.remove('open');
        document.getElementById('burger').classList.remove('open');
        document.body.style.overflow = '';
    });
});

function setLang(l) {
    lang = l;
    // desktop buttons
    document.getElementById('btn-ru').classList.toggle('active', l === 'ru');
    document.getElementById('btn-en').classList.toggle('active', l === 'en');
    // mobile buttons
    document.getElementById('mob-btn-ru').classList.toggle('active', l === 'ru');
    document.getElementById('mob-btn-en').classList.toggle('active', l === 'en');

    // main i18n
    const merged = Object.assign({}, T[l], PM[l]);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (merged[k] !== undefined) el.innerHTML = merged[k];
    });

    // if modal is open — re-render body in new language
    const overlay = document.getElementById('privacyOverlay');
    if (overlay && overlay.style.visibility === 'visible') {
        document.getElementById('pmBody').innerHTML = PM[l].body;
    }

    localStorage.setItem('lang', l);
}

window.addEventListener('scroll', () => {
    const nb = document.getElementById('navbar');
    if (window.scrollY > 40) {
        nb.classList.add('scrolled');
    } else {
        nb.classList.remove('scrolled');
    }
});
function toggleMobileContacts(){

    document
    .getElementById("mobileContactMenu")
    .classList
    .toggle("active");

}

const saved = localStorage.getItem('lang');
if (saved) setLang(saved);

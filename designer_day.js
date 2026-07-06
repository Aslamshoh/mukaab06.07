/* ─── PRIVACY ─── */
const PM = {
    ru: {
        pmLabel:'Документ', pmTitle:'Политика конфиденциальности', privacyLink:'Политика конфиденциальности',
        body:`<style>
#pmBody h2{font-size:15px;font-weight:700;color:#fff;margin:26px 0 10px;padding-left:14px;border-left:2px solid #c8a96e;}
#pmBody h2:first-child{margin-top:0;}
#pmBody p{font-size:13px;color:rgba(255,255,255,.65);line-height:1.85;margin-bottom:10px;}
#pmBody ul{margin:8px 0 14px 0;list-style:none;}
#pmBody ul li{font-size:13px;color:rgba(255,255,255,.62);padding:6px 0 6px 18px;position:relative;border-bottom:1px solid rgba(255,255,255,.04);line-height:1.6;}
#pmBody ul li:last-child{border-bottom:none;}
#pmBody ul li::before{content:'—';position:absolute;left:0;color:#c8a96e;font-size:11px;top:8px;}
#pmBody strong{color:#fff;font-weight:600;}
#pmBody .pm-contacts{padding:20px;border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.02);margin:18px 0 10px;}
#pmBody .pm-contacts p{margin-bottom:6px;}
#pmBody .pm-footer{margin-top:24px;padding-top:16px;border-top:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;font-size:12px;color:rgba(255,255,255,.35);}
#pmBody .pm-badge{background:rgba(200,169,110,.1);border:1px solid rgba(200,169,110,.2);color:#c8a96e;padding:4px 14px;font-size:11px;font-weight:600;letter-spacing:.06em;}
</style>
<p><strong>ООО «Мукааб»</strong> уделяет большое значение защите персональных данных. Настоящая Политика определяет порядок обработки информации, предоставленной посетителями сайта <strong>mukaab.by</strong>.</p>
<h2>1. Общие положения</h2>
<p>Политика составлена в соответствии с законодательством Республики Беларусь.</p>
<h2>2. Персональные данные, которые мы собираем</h2>
<ul><li>имя и фамилия;</li><li>номер телефона;</li><li>адрес электронной почты;</li><li>иные данные, переданные добровольно.</li></ul>
<h2>3. Цели обработки данных</h2>
<ul><li>обработка заявок и обратной связи;</li><li>предоставление информации об услугах;</li><li>подготовка коммерческих предложений.</li></ul>
<div class="pm-contacts"><p><strong>Контактные данные Оператора</strong></p><p>ООО «Мукааб»</p><p>Email: <strong>privacy@mukaab.by</strong></p><p>г. Минск, ул. Мележа 1, офис 405</p></div>
<div class="pm-footer"><span class="pm-badge">Действующая редакция</span><span>© ООО «Мукааб», все права защищены</span></div>`
    },
    en: {
        pmLabel:'Document', pmTitle:'Privacy Policy', privacyLink:'Privacy Policy',
        body:`<style>
#pmBody h2{font-size:15px;font-weight:700;color:#fff;margin:26px 0 10px;padding-left:14px;border-left:2px solid #c8a96e;}
#pmBody h2:first-child{margin-top:0;}
#pmBody p{font-size:13px;color:rgba(255,255,255,.65);line-height:1.85;margin-bottom:10px;}
#pmBody ul{margin:8px 0 14px 0;list-style:none;}
#pmBody ul li{font-size:13px;color:rgba(255,255,255,.62);padding:6px 0 6px 18px;position:relative;border-bottom:1px solid rgba(255,255,255,.04);line-height:1.6;}
#pmBody ul li:last-child{border-bottom:none;}
#pmBody ul li::before{content:'—';position:absolute;left:0;color:#c8a96e;font-size:11px;top:8px;}
#pmBody strong{color:#fff;font-weight:600;}
#pmBody .pm-contacts{padding:20px;border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.02);margin:18px 0 10px;}
#pmBody .pm-contacts p{margin-bottom:6px;}
#pmBody .pm-footer{margin-top:24px;padding-top:16px;border-top:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;font-size:12px;color:rgba(255,255,255,.35);}
#pmBody .pm-badge{background:rgba(200,169,110,.1);border:1px solid rgba(200,169,110,.2);color:#c8a96e;padding:4px 14px;font-size:11px;font-weight:600;letter-spacing:.06em;}
</style>
<p><strong>Mukaab LLC</strong> places great importance on the protection of users' personal data. This Privacy Policy governs information provided by visitors to <strong>mukaab.by</strong>.</p>
<h2>1. General Provisions</h2>
<p>This Policy complies with the legislation of the Republic of Belarus.</p>
<h2>2. Personal Data We Collect</h2>
<ul><li>first and last name;</li><li>phone number;</li><li>email address;</li><li>other data provided voluntarily.</li></ul>
<h2>3. Purposes of Processing</h2>
<ul><li>handling requests and feedback;</li><li>providing service information;</li><li>preparing commercial proposals.</li></ul>
<div class="pm-contacts"><p><strong>Operator Contact Details</strong></p><p>Mukaab LLC</p><p>Email: <strong>privacy@mukaab.by</strong></p><p>Minsk, Melezh St. 1, office 405</p></div>
<div class="pm-footer"><span class="pm-badge">Current version</span><span>© Mukaab LLC, all rights reserved</span></div>`
    }
};

/* ─── i18n ─── */
const T = {
    ru: {
        nav1:'Главная', nav2:'Интерьеры', nav3:'Архитектура', nav4:'Услуги', nav5m:'Портфолио',
        navCta:'Написать нам',
        heroLabel:'Услуги',
        title:'День с дизайнером',
        subtitle:'Личная консультация и выезд дизайнера — решаем задачи вашего интерьера за один насыщенный день.',

        sec1:'Что входит в день',
        s1h:'Утро — диагностика пространства',
        s1time:'3 часа', s1unit:'/ блок',
        s1a:'Выезд на объект и осмотр помещений',
        s1b:'Анализ планировки и зонирования',
        s1c:'Разбор ошибок текущего интерьера',
        s1d:'Обсуждение задач и пожеланий заказчика',

        s2h:'День — шоурумы и материалы',
        s2time:'4 часа', s2unit:'/ блок',
        s2a:'Совместный подбор отделочных материалов',
        s2b:'Визит в шоурумы мебели и освещения',
        s2c:'Помощь с цветом, фактурами и сочетаниями',
        s2d:'Ориентировочные бюджеты по позициям',

        s3h:'Полный день с дизайнером',
        s3price:'450$', s3unit:'/ день',
        s3note:'Транспортные расходы включены',
        s3desc:'8 часов личной работы с дизайнером — от первого осмотра до готового плана действий:',
        s3a:'Выезд на объект и диагностика',
        s3b:'Разбор планировки и зонирования',
        s3c:'Совместный шопинг в шоурумах',
        s3d:'Подбор материалов, мебели, декора',
        s3e:'Составление концепции интерьера',
        s3f:'Рекомендации по подрядчикам',
        s3g:'Предварительная смета по итогам',
        s3h2:'Итоговый отчёт с фото и референсами',

        sec_price:'Тарифы',
        p1h:'Онлайн-консультация', p1price:'90$', p1unit:'/ 1,5 часа',
        p1a:'Видеозвонок с дизайнером',
        p1b:'Разбор планов, фото и вопросов',
        p1c:'Список рекомендаций после встречи',

        p2h:'Полдня с дизайнером', p2price:'250$', p2unit:'/ 4 часа',
        p2a:'Выезд на объект или шоурум',
        p2b:'Консультация на месте',
        p2c:'Краткое резюме по итогам',
        p2d:'Подходит для одной конкретной задачи',

        p3h:'Полный день', p3price:'450$', p3unit:'/ 8 часов',
        p3a:'Выезд + шоурумы + концепция',
        p3b:'Подбор материалов и мебели',
        p3c:'Итоговый отчёт с референсами',
        p3d:'Предварительная смета по объекту',
        p3note:'Максимальный результат за один день',

        sec2:'Как проходит день',
        steps_h:'Программа дня с дизайнером',
        step1:'Встреча на объекте, осмотр и знакомство',
        step2:'Анализ планировки и разбор задач',
        step3:'Поездка в шоурумы материалов и мебели',
        step4:'Подбор декора, текстиля, освещения',
        step5:'Составление концепции и сметы',
        step6:'Итоговое обсуждение и передача материалов',

        sec3:'Кому подходит',
        obj_h:'Для каких ситуаций',
        obj1:'Ремонт с нуля — нужен старт',
        obj2:'Косметическое обновление интерьера',
        obj3:'Покупка квартиры — оценка потенциала',
        obj4:'Тупик в процессе ремонта',
        obj5:'Подбор мебели и предметов интерьера',
        obj6:'Коммерческое помещение под брендинг',

        rep_h:'Что вы получаете',
        rep1:'Чёткое понимание концепции интерьера',
        rep2:'Список материалов и поставщиков',
        rep3:'Фотоотчёт с референсами и пометками',
        rep4:'Предварительный бюджет по позициям',
        rep_note:'Всё в одном файле после встречи',

        res_h:'Результат',
        res_text:'После одного дня у вас будет <strong>чёткий план действий</strong>, понимание бюджета и уверенность в выборе. Вы больше не тратите время на хаотичный поиск — дизайнер структурирует ваш запрос и даёт <strong>конкретные решения под ваш объект</strong>.',

        ctah:'Забронировать день с дизайнером?',
        ctap:'Оставьте заявку — свяжемся в течение часа',
        ctabtn:'Оставить заявку',
        footsub:'Premium Design Studio'
    },
    en: {
        nav1:'Home', nav2:'Interiors', nav3:'Architecture', nav4:'Services', nav5m:'Portfolio',
        navCta:'Contact Us',
        heroLabel:'Services',
        title:'A Day with a Designer',
        subtitle:'Personal consultation and a site visit — we solve your interior challenges in one intensive day.',

        sec1:'What the Day Includes',
        s1h:'Morning — Space Diagnosis',
        s1time:'3 hours', s1unit:'/ block',
        s1a:'Site visit and room walkthrough',
        s1b:'Layout and zoning analysis',
        s1c:'Review of existing interior issues',
        s1d:'Discussion of goals and wishes',

        s2h:'Afternoon — Showrooms & Materials',
        s2time:'4 hours', s2unit:'/ block',
        s2a:'Joint selection of finishing materials',
        s2b:'Visits to furniture and lighting showrooms',
        s2c:'Colour, texture and combination advice',
        s2d:'Indicative budgets per category',

        s3h:'Full Day with a Designer',
        s3price:'$450', s3unit:'/ day',
        s3note:'Transport costs included',
        s3desc:'8 hours of personal work with a designer — from first walkthrough to a ready action plan:',
        s3a:'Site visit and diagnosis',
        s3b:'Layout and zoning review',
        s3c:'Joint showroom shopping',
        s3d:'Selection of materials, furniture, décor',
        s3e:'Interior concept development',
        s3f:'Contractor recommendations',
        s3g:'Preliminary cost estimate',
        s3h2:'Final report with photos and references',

        sec_price:'Pricing',
        p1h:'Online Consultation', p1price:'$90', p1unit:'/ 1.5 hrs',
        p1a:'Video call with the designer',
        p1b:'Review of plans, photos and questions',
        p1c:'Written recommendations after the session',

        p2h:'Half Day with a Designer', p2price:'$250', p2unit:'/ 4 hours',
        p2a:'Site visit or showroom trip',
        p2b:'On-site consultation',
        p2c:'Brief summary after the session',
        p2d:'Ideal for one specific task',

        p3h:'Full Day', p3price:'$450', p3unit:'/ 8 hours',
        p3a:'Site + showrooms + concept',
        p3b:'Materials and furniture selection',
        p3c:'Final report with references',
        p3d:'Preliminary project estimate',
        p3note:'Maximum result in a single day',

        sec2:'How the Day Works',
        steps_h:'Day Programme',
        step1:'Meet at the site, walkthrough and briefing',
        step2:'Layout analysis and task breakdown',
        step3:'Trip to materials and furniture showrooms',
        step4:'Selection of décor, textiles and lighting',
        step5:'Concept development and cost estimate',
        step6:'Final debrief and handover of materials',

        sec3:'Who It Is For',
        obj_h:'Ideal Situations',
        obj1:'Starting a renovation from scratch',
        obj2:'Cosmetic interior refresh',
        obj3:'New flat purchase — assessing potential',
        obj4:'Stuck mid-renovation',
        obj5:'Furniture and accessory selection',
        obj6:'Commercial space branding',

        rep_h:'What You Receive',
        rep1:'Clear interior concept direction',
        rep2:'List of materials and suppliers',
        rep3:'Photo report with references and notes',
        rep4:'Preliminary budget breakdown',
        rep_note:'Everything in one file after the meeting',

        res_h:'Outcome',
        res_text:'After one day you will have a <strong>clear action plan</strong>, a realistic budget and confidence in your choices. No more time wasted on scattered searches — the designer structures your brief and delivers <strong>specific solutions for your space</strong>.',

        ctah:'Book a Day with a Designer?',
        ctap:"Leave a request — we'll respond within the hour",
        ctabtn:'Send a request',
        footsub:'Premium Design Studio'
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

document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.remove('open');
        document.getElementById('burger').classList.remove('open');
        document.body.style.overflow = '';
    });
});

function setLang(l) {
    lang = l;
    document.getElementById('btn-ru').classList.toggle('active', l === 'ru');
    document.getElementById('btn-en').classList.toggle('active', l === 'en');
    document.getElementById('mob-btn-ru').classList.toggle('active', l === 'ru');
    document.getElementById('mob-btn-en').classList.toggle('active', l === 'en');

    const merged = Object.assign({}, T[l], PM[l]);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (merged[k] !== undefined) el.innerHTML = merged[k];
    });

    const overlay = document.getElementById('privacyOverlay');
    if (overlay && overlay.style.visibility === 'visible') {
        document.getElementById('pmBody').innerHTML = PM[l].body;
    }

    localStorage.setItem('lang', l);
}

function toggleContacts() {
    document.getElementById('contactMenu').classList.toggle('active');
}

document.addEventListener('click', (e) => {
    const dropdown = document.querySelector('.contact-dropdown');
    const menu = document.getElementById('contactMenu');
    if (!dropdown.contains(e.target)) menu.classList.remove('active');
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

function toggleMobileContacts() {
    document.getElementById('mobileContactMenu').classList.toggle('active');
}

window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

const saved = localStorage.getItem('lang');
if (saved) setLang(saved);

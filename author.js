/* ─── PRIVACY MODAL ─── */
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
#pmBody .pm-contacts{padding:20px;border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.02);margin:18px 0 10px;border-radius:4px;}
#pmBody .pm-contacts p{margin-bottom:6px;}
#pmBody .pm-footer{margin-top:24px;padding-top:16px;border-top:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;font-size:12px;color:rgba(255,255,255,.35);}
#pmBody .pm-badge{background:rgba(200,169,110,.1);border:1px solid rgba(200,169,110,.2);color:#c8a96e;padding:4px 14px;font-size:11px;font-weight:600;letter-spacing:.06em;}
</style>
<p><strong>ООО «Мукааб»</strong> уделяет большое значение защите персональных данных пользователей. Настоящая Политика конфиденциальности определяет порядок обработки информации, предоставленной посетителями сайта <strong>mukaab.by</strong>.</p>
<h2>1. Общие положения</h2>
<p>Политика составлена в соответствии с законодательством Республики Беларусь. Оператор уважает право на неприкосновенность частной жизни и обеспечивает сохранность информации, полученной от посетителей.</p>
<h2>2. Персональные данные, которые мы собираем</h2>
<ul>
<li>имя и фамилия;</li>
<li>номер телефона;</li>
<li>адрес электронной почты;</li>
<li>иные данные, переданные добровольно.</li>
</ul>
<h2>3. Цели обработки данных</h2>
<ul>
<li>обработка заявок и обратной связи;</li>
<li>предоставление информации об услугах;</li>
<li>подготовка коммерческих предложений;</li>
<li>улучшение работы сайта, анализ пользовательского опыта.</li>
</ul>
<div class="pm-contacts">
<p><strong>Контактные данные Оператора</strong></p>
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
#pmBody .pm-contacts{padding:20px;border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.02);margin:18px 0 10px;border-radius:4px;}
#pmBody .pm-contacts p{margin-bottom:6px;}
#pmBody .pm-footer{margin-top:24px;padding-top:16px;border-top:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;font-size:12px;color:rgba(255,255,255,.35);}
#pmBody .pm-badge{background:rgba(200,169,110,.1);border:1px solid rgba(200,169,110,.2);color:#c8a96e;padding:4px 14px;font-size:11px;font-weight:600;letter-spacing:.06em;}
</style>
<p><strong>Mukaab LLC</strong> places great importance on the protection of users' personal data. This Privacy Policy defines the procedure for processing information provided by visitors to <strong>mukaab.by</strong>.</p>
<h2>1. General Provisions</h2>
<p>This Policy is drawn up in accordance with the requirements of the legislation of the Republic of Belarus.</p>
<h2>2. Personal Data We Collect</h2>
<ul>
<li>first and last name;</li>
<li>phone number;</li>
<li>email address;</li>
<li>other data provided voluntarily.</li>
</ul>
<h2>3. Purposes of Data Processing</h2>
<ul>
<li>processing requests and feedback;</li>
<li>providing information about services;</li>
<li>preparation of commercial offers;</li>
<li>improving site performance.</li>
</ul>
<div class="pm-contacts">
<p><strong>Operator's Contact Details</strong></p>
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

/* ─── i18n ─── */
const T = {
    ru: {
        nav1:'Главная', nav2:'Интерьеры', nav3:'Архитектура', nav4:'Услуги', nav5m:'Портфолио',
        navCta:'Написать нам',
        heroLabel:'Услуги',
        title:'Авторский надзор',
        subtitle:'Профессиональное сопровождение проекта на всех этапах реализации — от первого выезда до финальной приёмки.',
        sec1:'Контроль и соответствие',
        sec2:'Этапы работы',
        sec3:'Где применяется',
        s1h:'Выезды на объект',
        s1a:'Регулярные плановые визиты',
        s1b:'Контроль соответствия работ проекту',
        s1c:'Проверка качества выполнения',
        s1d:'Контроль применения материалов',
        s2h:'Рабочая документация',
        s2a:'Внесение корректировок по факту',
        s2b:'Оперативное решение проектных вопросов',
        s2c:'Согласование изменений с заказчиком',
        s2d:'Актуализация чертежей и спецификаций',
        s3h:'Полное сопровождение объекта',
        s3desc:'Комплексный авторский надзор от начала строительства до финальной сдачи объекта:',
        s3a:'Регулярные выезды на объект',
        s3b:'Контроль всех строительных работ',
        s3c:'Консультации подрядчиков и строителей',
        s3d:'Координация смежных специалистов',
        s3e:'Фото- и видеоотчёты о ходе работ',
        s3f:'Участие в приёмке выполненных работ',
        s3g:'Контроль сроков выполнения работ',
        s3h2:'Сопровождение до завершения строительства',
        steps_h:'Как проходит авторский надзор',
        step1:'Знакомство с проектом и подрядчиками',
        step2:'Составление графика выездов на объект',
        step3:'Регулярный контроль хода строительства',
        step4:'Фиксация замечаний и внесение корректировок',
        step5:'Координация и решение проектных вопросов',
        step6:'Финальная приёмка и закрытие объекта',
        obj_h:'Типы объектов',
        obj1:'Частные дома и виллы',
        obj2:'Квартиры и апартаменты',
        obj3:'Коммерческие объекты',
        obj4:'Рестораны и кафе',
        obj5:'Офисные помещения',
        obj6:'Гостиничные комплексы',
        rep_h:'Отчётность заказчику',
        rep1:'Фотофиксация каждого выезда',
        rep2:'Видеоотчёты о ходе строительства',
        rep3:'Письменные замечания подрядчикам',
        rep4:'Сводные акты по итогам проверок',
        rep_note:'Прозрачность на каждом этапе',
        res_h:'Результат',
        res_text:'Гарантия того, что реализованный объект будет полностью соответствовать <strong>архитектурной концепции</strong>, проектной документации и <strong>стандартам качества</strong>. Вы получаете объект именно таким, каким он был задуман — без отступлений от проекта и скрытых дефектов.',
        ctah:'Обсудим ваш проект?',
        ctap:'Оставьте заявку — свяжемся в течение часа',
        ctabtn:'Оставить заявку',
        footsub:'Premium Architecture Studio'
    },
    en: {
        nav1:'Home', nav2:'Interiors', nav3:'Architecture', nav4:'Services', nav5m:'Portfolio',
        navCta:'Contact Us',
        heroLabel:'Services',
        title:'Construction Supervision',
        subtitle:'Professional project management at every stage of realisation — from the first site visit to final sign-off.',
        sec1:'Control & Compliance',
        sec2:'How We Work',
        sec3:'Applications',
        s1h:'Site Visits',
        s1a:'Regular scheduled inspections',
        s1b:'Compliance with approved drawings',
        s1c:'Quality control of workmanship',
        s1d:'Verification of specified materials',
        s2h:'Working Documentation',
        s2a:'On-site corrections and amendments',
        s2b:'Prompt resolution of design queries',
        s2c:'Change approval with the client',
        s2d:'Drawing and specification updates',
        s3h:'Full Project Supervision',
        s3desc:'Comprehensive construction supervision from groundbreaking to final handover:',
        s3a:'Regular site visits',
        s3b:'Control of all construction works',
        s3c:'Advice to contractors and builders',
        s3d:'Coordination of specialist trades',
        s3e:'Photo and video progress reports',
        s3f:'Participation in works sign-off',
        s3g:'Monitoring of programme and deadlines',
        s3h2:'Support until construction completion',
        steps_h:'Supervision Process',
        step1:'Project and contractor briefing',
        step2:'Scheduling site visits',
        step3:'Ongoing construction monitoring',
        step4:'Recording issues and implementing corrections',
        step5:'Coordination and resolution of design matters',
        step6:'Final inspection and project close-out',
        obj_h:'Project Types',
        obj1:'Private houses and villas',
        obj2:'Apartments and serviced units',
        obj3:'Commercial properties',
        obj4:'Restaurants and cafés',
        obj5:'Office spaces',
        obj6:'Hotel complexes',
        rep_h:'Client Reporting',
        rep1:'Photo documentation of every visit',
        rep2:'Video progress updates',
        rep3:'Written notices to contractors',
        rep4:'Summary inspection reports',
        rep_note:'Full transparency at every stage',
        res_h:'Outcome',
        res_text:'A guarantee that the completed project fully conforms to the <strong>architectural concept</strong>, project documentation and <strong>quality standards</strong>. You receive the building exactly as designed — with no deviations and no hidden defects.',
        ctah:'Shall we discuss your project?',
        ctap:"Leave a request — we'll respond within the hour",
        ctabtn:'Send a request',
        footsub:'Premium Architecture Studio'
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

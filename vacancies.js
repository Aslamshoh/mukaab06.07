/* ─── i18n ─── */
const T = {
    ru: {
        nav1:'Главная', nav2:'Интерьеры', nav3:'Архитектура', nav4:'Услуги', nav5m:'Портфолио',
        navCta:'Написать нам',
        heroLabel:'Команда', title:'Вакансии',
        subtitle:'Ищем талантливых людей, которые разделяют нашу страсть к архитектуре и деталям.',
        sec1:'Проектирование и дизайн', sec2:'Производство и надзор', sec3:'Стажировка',
        applyBtn:'Откликнуться',
        j1h:'Архитектор-проектировщик', j1type:'Полная занятость',
        j1s1:'Опыт работы', j1v1:'от 3 лет', j1s2:'Зарплата', j1v2:'от 2 000 $', j1s3:'График', j1v3:'5/2, офис',
        j1a:'Разработка архитектурных концепций', j1b:'Ведение проектов от ТЗ до стройки', j1c:'Знание ArchiCAD / Revit',
        j2h:'Дизайнер интерьера', j2type:'Полная занятость',
        j2s1:'Опыт работы', j2v1:'от 2 лет', j2s2:'Зарплата', j2v2:'от 1 500 $', j2s3:'График', j2v3:'5/2, офис',
        j2a:'Создание дизайн-концепций и мудбордов', j2b:'Разработка рабочей документации', j2c:'Знание AutoCAD, 3ds Max / SketchUp',
        j3h:'3D-визуализатор / архитектурный рендер', j3type:'Полная занятость',
        j3desc:'Ключевая роль в команде: ты превращаешь проекты в фотореалистичные образы.',
        j3a:'Фотореалистичная визуализация интерьеров и экстерьеров', j3b:'Работа в 3ds Max + Corona / V-Ray',
        j3c:'Подбор и настройка реальных материалов', j3d:'Постобработка в Photoshop / Lightroom',
        j3e:'Опыт от 2 лет, портфолио обязательно', j3f:'Зарплата от 1 800 $ — обсуждается',
        j4h:'Инженер авторского надзора', j4type:'Полная занятость',
        j4s1:'Опыт работы', j4v1:'от 4 лет', j4s2:'Зарплата', j4v2:'от 1 800 $', j4s3:'График', j4v3:'Разъездной',
        j4a:'Контроль строительства по проекту', j4b:'Взаимодействие с подрядчиками', j4c:'Ведение технической документации',
        j5h:'Менеджер проектов', j5type:'Гибрид',
        j5s1:'Опыт работы', j5v1:'от 2 лет в строительстве / дизайне', j5s2:'Зарплата', j5v2:'от 1 200 $ + бонусы',
        j5s3:'Формат', j5v3:'офис + выезды на объекты', j5s4:'Задачи', j5v4:'Координация команды и клиентов',
        j6h:'Стажёр-дизайнер', j6type:'Стажировка',
        j6s1:'Опыт', j6v1:'Не требуется', j6s2:'Оплата', j6v2:'Оговаривается', j6s3:'Длительность', j6v3:'3 месяца',
        j6a:'Помощь в разработке концепций', j6b:'Работа с реальными проектами', j6note:'Возможен перевод в штат',
        j7h:'Стажёр-визуализатор', j7type:'Стажировка',
        j7s1:'Опыт', j7v1:'Базовые знания 3ds Max', j7s2:'Оплата', j7v2:'Оговаривается', j7s3:'Длительность', j7v3:'3 месяца',
        j7a:'Помощь в рендеринге сцен', j7b:'Настройка материалов и освещения', j7note:'Возможен перевод в штат',
        j8h:'Не нашли подходящую?',
        j8desc:'Отправьте резюме и портфолио — мы всегда открыты для талантливых людей. Рассмотрим возможности для вас лично.',
        j8btn:'Отправить резюме',
        ctah:'Готовы стать частью команды?', ctap:'Пишите — ответим в течение 24 часов', ctabtn:'Написать нам',
        privacyLink:'Политика конфиденциальности',
        pmLabel:'Документ', pmTitle:'Политика конфиденциальности'
    },
    en: {
        nav1:'Home', nav2:'Interiors', nav3:'Architecture', nav4:'Services', nav5m:'Portfolio',
        navCta:'Contact Us',
        heroLabel:'Team', title:'Careers',
        subtitle:'We are looking for talented people who share our passion for architecture and details.',
        sec1:'Design & Architecture', sec2:'Production & Supervision', sec3:'Internship',
        applyBtn:'Apply',
        j1h:'Architect', j1type:'Full-time',
        j1s1:'Experience', j1v1:'3+ years', j1s2:'Salary', j1v2:'from $2 000', j1s3:'Schedule', j1v3:'5/2, office',
        j1a:'Architectural concept development', j1b:'Project management from brief to construction', j1c:'ArchiCAD / Revit proficiency',
        j2h:'Interior Designer', j2type:'Full-time',
        j2s1:'Experience', j2v1:'2+ years', j2s2:'Salary', j2v2:'from $1 500', j2s3:'Schedule', j2v3:'5/2, office',
        j2a:'Design concepts and moodboards', j2b:'Working documentation development', j2c:'AutoCAD, 3ds Max / SketchUp',
        j3h:'3D Visualiser / Architectural Renderer', j3type:'Full-time',
        j3desc:'A key role in the team: you turn projects into photorealistic images.',
        j3a:'Photorealistic interior and exterior visualisation', j3b:'3ds Max + Corona / V-Ray',
        j3c:'Real material selection and setup', j3d:'Post-processing in Photoshop / Lightroom',
        j3e:'2+ years experience, portfolio required', j3f:'Salary from $1 800 — negotiable',
        j4h:'Author Supervision Engineer', j4type:'Full-time',
        j4s1:'Experience', j4v1:'4+ years', j4s2:'Salary', j4v2:'from $1 800', j4s3:'Schedule', j4v3:'Field-based',
        j4a:'Construction supervision per project', j4b:'Contractor coordination', j4c:'Technical documentation management',
        j5h:'Project Manager', j5type:'Hybrid',
        j5s1:'Experience', j5v1:'2+ years in construction / design', j5s2:'Salary', j5v2:'from $1 200 + bonuses',
        j5s3:'Format', j5v3:'office + site visits', j5s4:'Responsibilities', j5v4:'Team and client coordination',
        j6h:'Design Intern', j6type:'Internship',
        j6s1:'Experience', j6v1:'Not required', j6s2:'Pay', j6v2:'Negotiable', j6s3:'Duration', j6v3:'3 months',
        j6a:'Assist in concept development', j6b:'Work on real projects', j6note:'Full-time offer possible',
        j7h:'3D Visualisation Intern', j7type:'Internship',
        j7s1:'Experience', j7v1:'Basic 3ds Max knowledge', j7s2:'Pay', j7v2:'Negotiable', j7s3:'Duration', j7v3:'3 months',
        j7a:'Assist in rendering scenes', j7b:'Material and lighting setup', j7note:'Full-time offer possible',
        j8h:"Didn't find a match?",
        j8desc:"Send your CV and portfolio — we're always open to talented people. We'll find the right opportunity for you.",
        j8btn:'Send CV',
        ctah:'Ready to join the team?', ctap:'Write to us — we reply within 24 hours', ctabtn:'Contact Us',
        privacyLink:'Privacy Policy',
        pmLabel:'Document', pmTitle:'Privacy Policy'
    }
};

const PM = {
    ru:{ body:`<style>#pmBody h2{font-size:15px;font-weight:700;color:#fff;margin:26px 0 10px;padding-left:14px;border-left:2px solid #c8a96e;}#pmBody h2:first-child{margin-top:0;}#pmBody p{font-size:13px;color:rgba(255,255,255,.65);line-height:1.85;margin-bottom:10px;}#pmBody ul{margin:8px 0 14px;list-style:none;}#pmBody ul li{font-size:13px;color:rgba(255,255,255,.62);padding:6px 0 6px 18px;position:relative;border-bottom:1px solid rgba(255,255,255,.04);line-height:1.6;}#pmBody ul li:last-child{border-bottom:none;}#pmBody ul li::before{content:'—';position:absolute;left:0;color:#c8a96e;font-size:11px;top:8px;}#pmBody strong{color:#fff;font-weight:600;}</style><p><strong>ООО «Мукааб»</strong> уделяет большое значение защите персональных данных пользователей.</p><h2>1. Общие положения</h2><p>Политика определяет обязательства Оператора по защите персональных данных в соответствии с законодательством РБ.</p><h2>2. Контактные данные</h2><p>Email: <strong>privacy@mukaab.by</strong> · г. Минск, ул. Мележа 1, офис 405</p>` },
    en:{ body:`<style>#pmBody h2{font-size:15px;font-weight:700;color:#fff;margin:26px 0 10px;padding-left:14px;border-left:2px solid #c8a96e;}#pmBody h2:first-child{margin-top:0;}#pmBody p{font-size:13px;color:rgba(255,255,255,.65);line-height:1.85;margin-bottom:10px;}</style><p><strong>Mukaab LLC</strong> places great importance on the protection of users' personal data.</p><h2>1. General Provisions</h2><p>This Policy defines the Operator's obligations regarding personal data protection under Belarusian law.</p><h2>2. Contact Details</h2><p>Email: <strong>privacy@mukaab.by</strong> · Minsk, Melezh St. 1, office 405</p>` }
};

let lang = 'ru';

function setLang(l) {
    lang = l;
    document.getElementById('btn-ru').classList.toggle('active', l==='ru');
    document.getElementById('btn-en').classList.toggle('active', l==='en');
    document.getElementById('mob-btn-ru').classList.toggle('active', l==='ru');
    document.getElementById('mob-btn-en').classList.toggle('active', l==='en');
    const merged = Object.assign({}, T[l], PM[l]);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (merged[k] !== undefined) el.innerHTML = merged[k];
    });
    const pov = document.getElementById('privacyOverlay');
    if (pov && pov.style.visibility === 'visible') document.getElementById('pmBody').innerHTML = PM[l].body;
    localStorage.setItem('lang', l);
}

function toggleContacts() { document.getElementById('contactMenu').classList.toggle('active'); }
document.addEventListener('click', e => {
    const d = document.querySelector('.contact-dropdown');
    if(d && !d.contains(e.target)) document.getElementById('contactMenu').classList.remove('active');
});

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const burger = document.getElementById('burger');
    const open = menu.classList.toggle('open');
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
function toggleMobileContacts() { document.getElementById('mobileContactMenu').classList.toggle('active'); }

/* ─── APPLY MODAL ─── */
function openApply(position) {
    document.getElementById('applyTitle').textContent = position;
    document.getElementById('applyError').style.display = 'none';
    document.getElementById('applySuccess').style.display = 'none';
    document.getElementById('aName').value = '';
    document.getElementById('aContact').value = '';
    document.getElementById('aPortfolio').value = '';
    document.getElementById('aMessage').value = '';
    const ov = document.getElementById('applyOverlay');
    const mo = document.getElementById('applyModal');
    ov.style.opacity = '1'; ov.style.visibility = 'visible';
    mo.style.transform = 'translateY(0) scale(1)';
    document.body.style.overflow = 'hidden';
}
function closeApply() {
    const ov = document.getElementById('applyOverlay');
    const mo = document.getElementById('applyModal');
    ov.style.opacity = '0'; ov.style.visibility = 'hidden';
    mo.style.transform = 'translateY(24px) scale(.97)';
    document.body.style.overflow = '';
}
function submitApply() {
    const name = document.getElementById('aName').value.trim();
    const contact = document.getElementById('aContact').value.trim();
    const err = document.getElementById('applyError');
    const suc = document.getElementById('applySuccess');
    if (!name || !contact) { err.style.display = 'block'; return; }
    err.style.display = 'none';
    suc.style.display = 'block';
    setTimeout(() => closeApply(), 2500);
}
document.getElementById('applyOverlay').addEventListener('click', e => { if(e.target === document.getElementById('applyOverlay')) closeApply(); });

/* ─── PRIVACY MODAL ─── */
function openPrivacy() {
    document.getElementById('pmBody').innerHTML = PM[lang].body;
    const ov = document.getElementById('privacyOverlay');
    const mo = document.getElementById('privacyModal');
    ov.style.opacity = '1'; ov.style.visibility = 'visible';
    mo.style.transform = 'translateY(0) scale(1)';
    document.body.style.overflow = 'hidden';
}
function closePrivacy() {
    const ov = document.getElementById('privacyOverlay');
    const mo = document.getElementById('privacyModal');
    ov.style.opacity = '0'; ov.style.visibility = 'hidden';
    mo.style.transform = 'translateY(24px) scale(.97)';
    document.body.style.overflow = '';
}
document.getElementById('privacyOverlay').addEventListener('click', e => { if(e.target === document.getElementById('privacyOverlay')) closePrivacy(); });
document.addEventListener('keydown', e => { if(e.key==='Escape'){closePrivacy();closeApply();} });

window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

const saved = localStorage.getItem('lang');
if (saved) setLang(saved);

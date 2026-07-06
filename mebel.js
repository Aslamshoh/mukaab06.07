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
<p><strong>ООО «Мукааб»</strong> уделяет большое значение защите персональных данных пользователей. Настоящая Политика конфиденциальности определяет порядок обработки информации, предоставленной посетителями сайта <strong>mukaab.by</strong>.</p>
<h2>1. Общие положения</h2>
<p>Политика составлена в соответствии с законодательством Республики Беларусь и определяет обязательства Оператора по защите персональных данных пользователей.</p>
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
<li>улучшение работы сайта.</li>
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
        heroLabel: 'Услуги',
        title: 'Индивидуальная мебель',
        subtitle: 'Проектирование и изготовление мебели по индивидуальным размерам и требованиям заказчика.',
        sec1: 'Проектирование и дизайн',
        sec2: 'Виды изделий',
        sec3: 'Материалы и исполнение',
        sec4: 'Где применяется',
        m1h:'Авторский дизайн мебели',
        m1a:'Разработка концепции и стилистики',
        m1b:'Эскизы и 3D-визуализация изделий',
        m1c:'Подбор материалов и фурнитуры',
        m1d:'Рабочие чертежи для производства',
        m2h:'Кухни по индивидуальному проекту',
        m2a:'Проект под планировку и технику',
        m2b:'Фасады МДФ, шпон, эмаль, пластик',
        m2c:'Столешницы из камня, керамики, дерева',
        m2d:'Встроенная техника и освещение',
        m3h:'Гардеробные и системы хранения',
        m3desc:'Проектируем пространство хранения под ваши нужды — от компактной гардеробной до стеллажной системы в гостиной:',
        m3a:'Встроенные и отдельностоящие гардеробные',
        m3b:'Системы хранения для спален и прихожих',
        m3c:'Стеллажи и библиотеки под заказ',
        m3d:'Подсветка, зеркала, аксессуары',
        m3e:'Оптимальное использование каждого сантиметра',
        m3f:'Материалы: ЛДСП, шпон, МДФ, металл',
        m4h:'Шкафы и встроенная мебель',
        m4a:'Шкафы-купе и распашные шкафы',
        m4b:'Встроенные ниши и подиумы',
        m4c:'Мебель под скошенные потолки',
        m4d:'ТВ-зоны и декоративные панели',
        m5h:'Мебель для гостиных и спален',
        m5a:'Кровати с мягким изголовьем и каркасами',
        m5b:'Тумбы, комоды и консоли',
        m5c:'Диваны и банкетки на заказ',
        m5d:'Туалетные столики и зеркала',
        m6h:'Офисная и коммерческая мебель',
        m6a:'Рабочие столы и переговорные зоны',
        m6b:'Ресепшн и стойки администраторов',
        m6c:'Торговое оборудование и витрины',
        m6d:'Мебель для ресторанов и отелей',
        mat_h:'Подбор материалов и фурнитуры',
        mat1n:'МДФ и эмаль', mat1d:'Гладкие крашеные фасады, матовые и глянцевые покрытия, любые цвета RAL',
        mat2n:'Шпон и массив', mat2d:'Натуральные породы дерева: дуб, орех, ясень, ольха — под лак, масло или морилку',
        mat3n:'ЛДСП и пластик', mat3d:'Широкий выбор декоров, имитация камня, металла и дерева, высокая износостойкость',
        mat4n:'Камень и керамика', mat4d:'Столешницы и подоконники из кварцевого агломерата, натурального мрамора и керамогранита',
        mat5n:'Металл и стекло', mat5d:'Каркасы и декоративные элементы из стали, латуни, алюминия; закалённое и тонированное стекло',
        mat6n:'Фурнитура', mat6d:'Blum, Grass, Hettich, Häfele — плавное закрывание, push-to-open, скрытые петли',
        obj_h:'Подходит для любых объектов',
        obj1:'Частные дома и квартиры',
        obj2:'Офисы и коворкинги',
        obj3:'Рестораны, кафе и бары',
        obj4:'Отели и апартаменты',
        obj5:'Коммерческие пространства и шоурумы',
        steps_h:'Этапы работы',
        step1:'Замер и техническое задание',
        step2:'Дизайн-проект и визуализация',
        step3:'Согласование и производство',
        step4:'Доставка и монтаж',
        steps_note:'Сопровождение на всех этапах',
        ctah:'Обсудим ваш проект?',
        ctap:'Оставьте заявку — свяжемся в течение часа',
        ctabtn:'Оставить заявку',
        footsub:'Premium Design Studio'
    },
    en: {
        nav1:'Home', nav2:'Interiors', nav3:'Architecture', nav4:'Services', nav5m:'Portfolio',
        navCta:'Contact Us',
        heroLabel:'Services',
        title:'Custom Furniture',
        subtitle:'Design and manufacture of furniture to individual dimensions and client requirements.',
        sec1:'Design & Planning',
        sec2:'Product Types',
        sec3:'Materials & Finish',
        sec4:'Applications',
        m1h:'Bespoke Furniture Design',
        m1a:'Concept and style development',
        m1b:'Sketches and 3D visualisation',
        m1c:'Material and hardware selection',
        m1d:'Production drawings',
        m2h:'Custom-Project Kitchens',
        m2a:'Layout and appliance-driven design',
        m2b:'MDF, veneer, enamel, laminate fronts',
        m2c:'Stone, ceramic and wood worktops',
        m2d:'Built-in appliances and lighting',
        m3h:'Walk-in Wardrobes & Storage Systems',
        m3desc:'We design every centimetre of your storage — from a compact walk-in to a full living-room shelving wall:',
        m3a:'Built-in and freestanding wardrobes',
        m3b:'Bedroom and hallway storage systems',
        m3c:'Custom shelving and libraries',
        m3d:'Lighting, mirrors and accessories',
        m3e:'Optimised use of every centimetre',
        m3f:'Materials: chipboard, veneer, MDF, metal',
        m4h:'Wardrobes & Built-in Furniture',
        m4a:'Sliding and hinged wardrobes',
        m4b:'Built-in alcoves and podiums',
        m4c:'Furniture for sloped ceilings',
        m4d:'TV units and decorative panels',
        m5h:'Living Room & Bedroom Furniture',
        m5a:'Upholstered bed frames and headboards',
        m5b:'Bedside tables, chests and consoles',
        m5c:'Custom sofas and benches',
        m5d:'Dressing tables and mirrors',
        m6h:'Office & Commercial Furniture',
        m6a:'Desks and meeting areas',
        m6b:'Reception and admin counters',
        m6c:'Retail displays and showcases',
        m6d:'Furniture for restaurants and hotels',
        mat_h:'Materials & Hardware Selection',
        mat1n:'MDF & Enamel', mat1d:'Smooth painted fronts, matt and gloss finishes, full RAL palette',
        mat2n:'Veneer & Solid Wood', mat2d:'Natural species: oak, walnut, ash, alder — lacquered, oiled or stained',
        mat3n:'Chipboard & Laminate', mat3d:'Wide decor range, stone/metal/wood effects, high durability',
        mat4n:'Stone & Ceramic', mat4d:'Worktops from quartz agglomerate, natural marble and porcelain stoneware',
        mat5n:'Metal & Glass', mat5d:'Frames and decorative elements in steel, brass, aluminium; toughened and tinted glass',
        mat6n:'Hardware', mat6d:'Blum, Grass, Hettich, Häfele — soft-close, push-to-open, concealed hinges',
        obj_h:'Suitable for Any Project',
        obj1:'Private houses and apartments',
        obj2:'Offices and co-working spaces',
        obj3:'Restaurants, cafés and bars',
        obj4:'Hotels and serviced apartments',
        obj5:'Commercial spaces and showrooms',
        steps_h:'How We Work',
        step1:'Site survey and brief',
        step2:'Design concept and visualisation',
        step3:'Approval and production',
        step4:'Delivery and installation',
        steps_note:'Full support at every stage',
        ctah:'Shall we discuss your project?',
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
    const nb = document.getElementById('navbar');
    nb.classList.toggle('scrolled', window.scrollY > 40);
});

const saved = localStorage.getItem('lang');
if (saved) setLang(saved);

/* ════════════════════════════════════
   PROJECT DATA
   Замените images/projN_X.jpg на реальные пути
════════════════════════════════════ */
const PROJECTS = [
    {
        cat:    { ru:'Интерьер', en:'Interior' },
        title:  { ru:'Апартаменты в Минске — 120 м²', en:'Minsk Apartment — 120 m²' },
        desc:   { ru:'Минималистичный интерьер в нейтральной палитре с акцентом на фактуры натурального камня и дерева. Открытая планировка, скрытые системы хранения, авторская мебель под заказ. Реализовано в 2024 году — от дизайн-проекта до авторского надзора.', en:'Minimalist interior in a neutral palette with an emphasis on natural stone and wood textures. Open plan, concealed storage, bespoke furniture. Completed in 2024 — from design concept to construction supervision.' },
        images: ['images/1.png','images/1.png','images/proj1_3.jpg','images/proj1_4.jpg'],
        meta: [
            { ru:['Локация','Минск'], en:['Location','Minsk'] },
            { ru:['Площадь','120 м²'], en:['Area','120 m²'] },
            { ru:['Тип','Жилой'], en:['Type','Residential'] },
            { ru:['Стиль','Минимализм'], en:['Style','Minimalism'] },
            { ru:['Год','2024'], en:['Year','2024'] },
            { ru:['Услуга','Дизайн + Надзор'], en:['Service','Design + Supervision'] },
        ],
        tags: ['Минимализм','Камень','Авторская мебель','Открытая планировка'],
    },
    {
        cat:    { ru:'Интерьер', en:'Interior' },
        title:  { ru:'Загородный дом — 280 м²', en:'Country House — 280 m²' },
        desc:   { ru:'Тёплый скандинавский стиль с элементами japandi — дерево, лён, натуральный свет. Большие панорамные окна, камин, материалы премиум-класса. Создан ощущение уюта и связи с природой.', en:'Warm Scandinavian style with japandi elements — wood, linen, natural light. Large panoramic windows, fireplace and premium materials create a sense of cosiness and connection with nature.' },
        images: ['images/1.png','images/5.jpg','images/proj2_3.jpg'],
        meta: [
            { ru:['Локация','Минский р-н'], en:['Location','Minsk region'] },
            { ru:['Площадь','280 м²'], en:['Area','280 m²'] },
            { ru:['Тип','Загородный дом'], en:['Type','Country house'] },
            { ru:['Стиль','Japandi'], en:['Style','Japandi'] },
            { ru:['Год','2023'], en:['Year','2023'] },
            { ru:['Услуга','Полный проект'], en:['Service','Full project'] },
        ],
        tags: ['Japandi','Дерево','Панорамные окна','Камин'],
    },
    {
        cat:    { ru:'Интерьер · Premium', en:'Interior · Premium' },
        title:  { ru:'Пентхаус — 340 м²', en:'Penthouse — 340 m²' },
        desc:   { ru:'Представительский интерьер с панорамными видами на город. Мрамор Calacatta, латунь, велюр. Авторская мебель, индивидуальные осветительные приборы, умный дом. Реализован совместно с командой подрядчиков под постоянным авторским надзором.', en:'Representative interior with panoramic city views. Calacatta marble, brass, velvet. Bespoke furniture, custom lighting, smart home. Delivered in partnership with contractors under full construction supervision.' },
        images: ['images/proj3_1.jpg','images/proj3_2.jpg','images/proj3_3.jpg','images/proj3_4.jpg','images/proj3_5.jpg'],
        meta: [
            { ru:['Локация','Минск, центр'], en:['Location','Minsk, city centre'] },
            { ru:['Площадь','340 м²'], en:['Area','340 m²'] },
            { ru:['Тип','Пентхаус'], en:['Type','Penthouse'] },
            { ru:['Стиль','Contemporary Luxury'], en:['Style','Contemporary Luxury'] },
            { ru:['Год','2024'], en:['Year','2024'] },
            { ru:['Услуга','Дизайн + Мебель + Надзор'], en:['Service','Design + Furniture + Supervision'] },
        ],
        tags: ['Luxury','Мрамор','Латунь','Умный дом','Авторский надзор'],
    },
    {
        cat:    { ru:'Архитектура', en:'Architecture' },
        title:  { ru:'Частный дом — концепция фасада', en:'Private House — Façade Concept' },
        desc:   { ru:'Современный минималистичный фасад из клинкерного кирпича антрацит и тёмного металлического профиля. Горизонтальные линии, акцентные вставки из дерева, скрытые водостоки. Проект включал рабочую документацию и авторский надзор за фасадными работами.', en:'Contemporary minimalist façade in anthracite clinker brick and dark metal profiling. Horizontal lines, timber accents and concealed gutters. The project included working drawings and construction supervision.' },
        images: ['images/proj4_1.jpg','images/proj4_2.jpg','images/proj4_3.jpg'],
        meta: [
            { ru:['Локация','Минский р-н'], en:['Location','Minsk region'] },
            { ru:['Площадь','420 м²'], en:['Area','420 m²'] },
            { ru:['Тип','Частный дом'], en:['Type','Private house'] },
            { ru:['Стиль','Минимализм'], en:['Style','Minimalism'] },
            { ru:['Год','2023'], en:['Year','2023'] },
            { ru:['Услуга','Фасад + Надзор'], en:['Service','Façade + Supervision'] },
        ],
        tags: ['Клинкер','Металл','Минимализм','Фасад'],
    },
    {
        cat:    { ru:'Архитектура + Надзор', en:'Architecture + Supervision' },
        title:  { ru:'Вилла на озере — авторский надзор', en:'Lakeside Villa — Construction Supervision' },
        desc:   { ru:'Полный цикл реализации: от архитектурной концепции до финальной приёмки. Стекло, бетон и дерево — органичная связь с ландшафтом. Регулярные выезды на объект, координация 12 подрядчиков, отчётность заказчику.', en:'Full delivery cycle from architectural concept to final handover. Glass, concrete and timber harmonised with the landscape. Regular site visits, coordination of 12 contractors and client reporting throughout.' },
        images: ['images/3.png','images/proj5_2.jpg','images/proj5_3.jpg','images/proj5_4.jpg'],
        meta: [
            { ru:['Локация','Нарочь'], en:['Location','Naroch'] },
            { ru:['Площадь','560 м²'], en:['Area','560 m²'] },
            { ru:['Тип','Вилла'], en:['Type','Villa'] },
            { ru:['Стиль','Органическая архитектура'], en:['Style','Organic Architecture'] },
            { ru:['Год','2024'], en:['Year','2024'] },
            { ru:['Услуга','Архитектура + Полный надзор'], en:['Service','Architecture + Full Supervision'] },
        ],
        tags: ['Стекло','Бетон','Дерево','Ландшафт','Авторский надзор'],
    },
    {
        cat:    { ru:'Коммерческий', en:'Commercial' },
        title:  { ru:'Ресторан fine dining — Минск', en:'Fine Dining Restaurant — Minsk' },
        desc:   { ru:'Камерная атмосфера премиального ресторана. Тёмная палитра, латунные детали, текстуры вельвета и выдержанного дуба. Продуманная акустика и световые сценарии для разных форматов вечера. Разработка дизайна, подбор мебели и декора, авторский надзор за отделочными работами.', en:'Intimate atmosphere of a premium restaurant. Dark palette, brass details, velvet and aged oak textures. Acoustic design and lighting scenes for different evening formats. Design, furniture selection, décor and construction supervision.' },
        images: ['images/proj6_1.jpg','images/proj6_2.jpg','images/proj6_3.jpg'],
        meta: [
            { ru:['Локация','Минск'], en:['Location','Minsk'] },
            { ru:['Площадь','240 м²'], en:['Area','240 m²'] },
            { ru:['Тип','Ресторан'], en:['Type','Restaurant'] },
            { ru:['Стиль','Dark Luxury'], en:['Style','Dark Luxury'] },
            { ru:['Год','2023'], en:['Year','2023'] },
            { ru:['Услуга','Дизайн + Мебель + Надзор'], en:['Service','Design + Furniture + Supervision'] },
        ],
        tags: ['Ресторан','Латунь','Акустика','Световые сценарии'],
    },
    {
        cat:    { ru:'Офисный', en:'Office' },
        title:  { ru:'IT-офис — 1 200 м²', en:'IT Office — 1,200 m²' },
        desc:   { ru:'Гибкое зонирование для IT-компании: open space, переговорные разного формата, зоны отдыха, кухня. Корпоративный брендинг интегрирован в интерьер. Акустические решения, эргономичная мебель, умное управление освещением.', en:'Flexible zoning for an IT company: open space, meeting rooms of various formats, relaxation areas, kitchen. Corporate branding integrated into the interior. Acoustic solutions, ergonomic furniture, smart lighting control.' },
        images: ['images/proj7_1.jpg','images/proj7_2.jpg','images/proj7_3.jpg'],
        meta: [
            { ru:['Локация','Минск'], en:['Location','Minsk'] },
            { ru:['Площадь','1 200 м²'], en:['Area','1,200 m²'] },
            { ru:['Тип','Офис'], en:['Type','Office'] },
            { ru:['Стиль','Tech Modern'], en:['Style','Tech Modern'] },
            { ru:['Год','2024'], en:['Year','2024'] },
            { ru:['Услуга','Дизайн + Надзор'], en:['Service','Design + Supervision'] },
        ],
        tags: ['Офис','Open Space','Акустика','Брендинг'],
    },
    {
        cat:    { ru:'Гостиничный', en:'Hospitality' },
        title:  { ru:'Бутик-отель — 32 номера', en:'Boutique Hotel — 32 Rooms' },
        desc:   { ru:'Авторская концепция интерьеров бутик-отеля: лобби, ресторан, 32 номера трёх категорий, SPA-зона. Единая концепция бренда в каждом пространстве. Полный авторский надзор — от нулевого цикла до передачи ключей.', en:'Bespoke interior concept for a boutique hotel: lobby, restaurant, 32 rooms across three categories and a spa. A unified brand identity across every space. Full construction supervision from groundworks to key handover.' },
        images: ['images/proj8_1.jpg','images/proj8_2.jpg','images/proj8_3.jpg','images/proj8_4.jpg'],
        meta: [
            { ru:['Локация','Минск'], en:['Location','Minsk'] },
            { ru:['Площадь','2 800 м²'], en:['Area','2,800 m²'] },
            { ru:['Тип','Отель'], en:['Type','Hotel'] },
            { ru:['Стиль','Contemporary Classic'], en:['Style','Contemporary Classic'] },
            { ru:['Год','2024'], en:['Year','2024'] },
            { ru:['Услуга','Концепция + Надзор'], en:['Service','Concept + Supervision'] },
        ],
        tags: ['Отель','Бренд','SPA','Полный надзор'],
    },
];

/* ════ GALLERY STATE ════ */
let galIdx = 0;
let galTotal = 0;

function openProject(idx) {
    const p = PROJECTS[idx];
    const l = lang;

    /* fill gallery */
    galIdx = 0; galTotal = p.images.length;
    const track = document.getElementById('galleryTrack');
    const strip = document.getElementById('thumbStrip');
    track.innerHTML = '';
    strip.innerHTML = '';
    p.images.forEach((src, i) => {
        const slide = document.createElement('div');
        slide.className = 'gallery-slide';
        slide.innerHTML = `<img src="${src}" alt=""><div class="gallery-overlay"></div>`;
        track.appendChild(slide);

        const th = document.createElement('div');
        th.className = 'thumb-item' + (i===0?' active':'');
        th.innerHTML = `<img src="${src}" alt="">`;
        th.onclick = () => goSlide(i);
        strip.appendChild(th);
    });
    updateGallery();

    /* fill info */
    document.getElementById('mCat').textContent   = p.cat[l];
    document.getElementById('mTitle').textContent  = p.title[l];
    document.getElementById('mDesc').textContent   = p.desc[l];

    const tags = document.getElementById('mTags');
    tags.innerHTML = p.tags.map(t=>`<span class="proj-tag">${t}</span>`).join('');

    const meta = document.getElementById('mMeta');
    meta.innerHTML = p.meta.map(m=>
        `<div class="proj-meta-row">
            <span class="proj-meta-key">${m[l][0]}</span>
            <span class="proj-meta-val">${m[l][1]}</span>
        </div>`
    ).join('');

    /* open */
    const ov = document.getElementById('projOverlay');
    ov.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProject() {
    document.getElementById('projOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

function handleOverlayClick(e) {
    if (e.target === document.getElementById('projOverlay')) closeProject();
}

function goSlide(i) {
    galIdx = i;
    updateGallery();
}

function galleryPrev() { galIdx = (galIdx - 1 + galTotal) % galTotal; updateGallery(); }
function galleryNext() { galIdx = (galIdx + 1) % galTotal; updateGallery(); }

function updateGallery() {
    document.getElementById('galleryTrack').style.transform = `translateX(-${galIdx*100}%)`;
    document.getElementById('galleryCounter').textContent = `${galIdx+1} / ${galTotal}`;
    document.querySelectorAll('.thumb-item').forEach((t,i)=>
        t.classList.toggle('active', i===galIdx));
}

/* keyboard nav inside modal */
document.addEventListener('keydown', e => {
    const ov = document.getElementById('projOverlay');
    if (ov.classList.contains('open')) {
        if (e.key==='ArrowRight') galleryNext();
        if (e.key==='ArrowLeft')  galleryPrev();
        if (e.key==='Escape') closeProject();
    } else {
        if (e.key==='Escape') closePrivacy();
    }
});

/* ════ FILTER ════ */
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.cat;
        document.querySelectorAll('.project-card').forEach(card => {
            const show = cat==='all' || card.dataset.cat===cat;
            card.style.display = show ? '' : 'none';
        });
    });
});

/* ════ NAVBAR ════ */
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
function toggleContacts() { document.getElementById('contactMenu').classList.toggle('active'); }
document.addEventListener('click', e => {
    const d = document.querySelector('.contact-dropdown');
    if (d && !d.contains(e.target)) document.getElementById('contactMenu').classList.remove('active');
});
function toggleMobileContacts() { document.getElementById('mobileContactMenu').classList.toggle('active'); }
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

/* ════ i18n ════ */
const T = {
    ru: {
        nav1:'Главная', nav2:'Интерьеры', nav3:'Архитектура', nav4:'Услуги', nav5m:'Вакансии',
        navCta:'Написать нам', heroLabel:'MUKAAB',
        title:'Вакансии',
        subtitle:'Реализованные проекты в области интерьерного дизайна, архитектуры и авторского надзора.',
        filterLabel:'Категория',
        catAll:'Все работы', catInt:'Интерьер', catArch:'Архитектура',
        catFurniture:'Мебель', catComm:'Коммерческие',
        secInt:'Интерьерный дизайн', secArch:'Архитектура и фасады', secComm:'Коммерческие объекты',
        openBtn:'Открыть проект',
        p0title:'Апартаменты в Минске — 120 м²',
        p0short:'Минималистичный интерьер в нейтральной палитре с акцентом на фактуры натурального камня и дерева.',
        p1title:'Загородный дом — 280 м²',
        p1short:'Тёплый скандинавский стиль с элементами japandi — дерево, лён, натуральный свет.',
        p2title:'Пентхаус — 340 м²',
        p2short:'Представительский интерьер с панорамными видами. Мрамор, латунь, велюр, авторская мебель.',
        p3title:'Частный дом — концепция фасада',
        p3short:'Современный минималистичный фасад из клинкерного кирпича и тёмного металла.',
        p4title:'Вилла на озере — авторский надзор',
        p4short:'Полный цикл от проекта до сдачи. Стекло, бетон, дерево — органичная связь с ландшафтом.',
        p5title:'Ресторан fine dining — Минск',
        p5short:'Камерная атмосфера, тёмная палитра, латунь и вельвет. Акустическое зонирование.',
        p6title:'IT-офис — 1 200 м²',
        p6short:'Гибкое зонирование, акустика, зоны отдыха и переговорных. Корпоративный брендинг в интерьере.',
        p7title:'Бутик-отель — 32 номера',
        p7short:'Авторская концепция интерьеров: лобби, ресторан, номера. Полный авторский надзор.',
        ctah:'Обсудим ваш проект?',
        ctap:'Расскажите о задаче — ответим в течение часа',
        ctabtn:'Связаться с нами',
        footsub:'Premium Design Studio',
        privacyLink:'Политика конфиденциальности',
        pmLabel:'Документ', pmTitle:'Политика конфиденциальности',
    },
    en: {
        nav1:'Home', nav2:'Interiors', nav3:'Architecture', nav4:'Services', nav5m:'Vacancies',
        navCta:'Contact Us', heroLabel:'MUKAAB',
        title:'Portfolio',
        subtitle:'Completed projects in interior design, architecture and construction supervision.',
        filterLabel:'Category',
        catAll:'All works', catInt:'Interior', catArch:'Architecture',
        catFurniture:'Furniture', catComm:'Commercial',
        secInt:'Interior Design', secArch:'Architecture & Façades', secComm:'Commercial Projects',
        openBtn:'Open project',
        p0title:'Minsk Apartment — 120 m²',
        p0short:'Minimalist interior in a neutral palette with an emphasis on natural stone and wood textures.',
        p1title:'Country House — 280 m²',
        p1short:'Warm Scandinavian style with japandi elements — wood, linen, natural light.',
        p2title:'Penthouse — 340 m²',
        p2short:'Representative interior with panoramic views. Marble, brass, velvet, bespoke furniture.',
        p3title:'Private House — Façade Concept',
        p3short:'Contemporary minimalist façade in anthracite clinker brick and dark metal.',
        p4title:'Lakeside Villa — Construction Supervision',
        p4short:'Full cycle from concept to handover. Glass, concrete and timber in harmony with the landscape.',
        p5title:'Fine Dining Restaurant — Minsk',
        p5short:'Intimate atmosphere, dark palette, brass and velvet. Acoustic zoning.',
        p6title:'IT Office — 1,200 m²',
        p6short:'Flexible zoning, acoustics, lounge and meeting areas. Corporate branding in the interior.',
        p7title:'Boutique Hotel — 32 Rooms',
        p7short:'Bespoke interior concept: lobby, restaurant, rooms. Full construction supervision.',
        ctah:'Shall we discuss your project?',
        ctap:"Tell us about your task — we'll respond within the hour",
        ctabtn:'Contact us',
        footsub:'Premium Design Studio',
        privacyLink:'Privacy Policy',
        pmLabel:'Document', pmTitle:'Privacy Policy',
    }
};

let lang = 'ru';

function setLang(l) {
    lang = l;
    document.getElementById('btn-ru').classList.toggle('active', l==='ru');
    document.getElementById('btn-en').classList.toggle('active', l==='en');
    document.getElementById('mob-btn-ru').classList.toggle('active', l==='ru');
    document.getElementById('mob-btn-en').classList.toggle('active', l==='en');
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (T[l][k] !== undefined) el.innerHTML = T[l][k];
    });
    localStorage.setItem('lang', l);
}

/* ════ КОНФИДЕНЦИАЛЬНОСТЬ════ */
const privBody = {
    ru:`<style>
#privBody h2{font-size:15px;font-weight:700;color:#fff;margin:26px 0 10px;padding-left:14px;border-left:2px solid #c8a96e;}
#privBody h2:first-child{margin-top:0;}
#privBody p{font-size:13px;color:rgba(255,255,255,.65);line-height:1.85;margin-bottom:10px;}
#privBody ul{margin:8px 0 14px;list-style:none;}
#privBody ul li{font-size:13px;color:rgba(255,255,255,.62);padding:6px 0 6px 18px;position:relative;border-bottom:1px solid rgba(255,255,255,.04);line-height:1.6;}
#privBody ul li:last-child{border-bottom:none;}
#privBody ul li::before{content:'—';position:absolute;left:0;color:#c8a96e;font-size:11px;top:8px;}
#privBody strong{color:#fff;font-weight:600;}
#privBody .pm-contacts{padding:20px;border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.02);margin:18px 0 10px;}
#privBody .pm-footer{margin-top:24px;padding-top:16px;border-top:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;font-size:12px;color:rgba(255,255,255,.35);}
#privBody .pm-badge{background:rgba(200,169,110,.1);border:1px solid rgba(200,169,110,.2);color:#c8a96e;padding:4px 14px;font-size:11px;font-weight:600;letter-spacing:.06em;}
</style>
<p><strong>ООО «Мукааб»</strong> уделяет большое значение защите персональных данных. Настоящая Политика определяет порядок обработки информации, предоставленной посетителями сайта <strong>mukaab.by</strong>.</p>
<h2>1. Общие положения</h2>
<p>Политика составлена в соответствии с законодательством Республики Беларусь.</p>
<h2>2. Данные, которые мы собираем</h2>
<ul><li>имя и фамилия;</li><li>номер телефона;</li><li>адрес электронной почты;</li><li>иные данные, переданные добровольно.</li></ul>
<h2>3. Цели обработки</h2>
<ul><li>обработка заявок;</li><li>предоставление информации об услугах;</li><li>подготовка коммерческих предложений.</li></ul>
<div class="pm-contacts"><p><strong>Оператор:</strong> ООО «Мукааб»</p><p>Email: privacy@mukaab.by</p><p>г. Минск, ул. Мележа 1, офис 405</p></div>
<div class="pm-footer"><span class="pm-badge">Действующая редакция</span><span>© ООО «Мукааб»</span></div>`,
    en:`<style>
#privBody h2{font-size:15px;font-weight:700;color:#fff;margin:26px 0 10px;padding-left:14px;border-left:2px solid #c8a96e;}
#privBody h2:first-child{margin-top:0;}
#privBody p{font-size:13px;color:rgba(255,255,255,.65);line-height:1.85;margin-bottom:10px;}
#privBody ul{margin:8px 0 14px;list-style:none;}
#privBody ul li{font-size:13px;color:rgba(255,255,255,.62);padding:6px 0 6px 18px;position:relative;border-bottom:1px solid rgba(255,255,255,.04);line-height:1.6;}
#privBody ul li:last-child{border-bottom:none;}
#privBody ul li::before{content:'—';position:absolute;left:0;color:#c8a96e;font-size:11px;top:8px;}
#privBody strong{color:#fff;font-weight:600;}
#privBody .pm-contacts{padding:20px;border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.02);margin:18px 0 10px;}
#privBody .pm-footer{margin-top:24px;padding-top:16px;border-top:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;font-size:12px;color:rgba(255,255,255,.35);}
#privBody .pm-badge{background:rgba(200,169,110,.1);border:1px solid rgba(200,169,110,.2);color:#c8a96e;padding:4px 14px;font-size:11px;font-weight:600;letter-spacing:.06em;}
</style>
<p><strong>Mukaab LLC</strong> places great importance on the protection of users' personal data. This Privacy Policy governs information provided by visitors to <strong>mukaab.by</strong>.</p>
<h2>1. General Provisions</h2><p>This Policy complies with the legislation of the Republic of Belarus.</p>
<h2>2. Data We Collect</h2>
<ul><li>first and last name;</li><li>phone number;</li><li>email address;</li><li>other voluntarily provided data.</li></ul>
<h2>3. Purposes of Processing</h2>
<ul><li>handling requests;</li><li>providing service information;</li><li>preparing commercial proposals.</li></ul>
<div class="pm-contacts"><p><strong>Operator:</strong> Mukaab LLC</p><p>Email: privacy@mukaab.by</p><p>Minsk, Melezh St. 1, office 405</p></div>
<div class="pm-footer"><span class="pm-badge">Current version</span><span>© Mukaab LLC</span></div>`
};

function openPrivacy() {
    document.getElementById('privBody').innerHTML = privBody[lang];
    document.getElementById('privOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closePrivacy() {
    document.getElementById('privOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

/* init */
const saved = localStorage.getItem('lang');
if (saved) setLang(saved);

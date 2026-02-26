// ============================================
// ECHODOME — i18n (Internacionalização)
// PT-BR | EN | ES
// ============================================

const ECHODOME_LANGS = {

    // ── NAV ──────────────────────────────────
    'nav.about':   { pt: 'Sobre',   en: 'About',   es: 'Sobre'   },
    'nav.music':   { pt: 'Música',  en: 'Music',   es: 'Música'  },
    'nav.tour':    { pt: 'Shows',   en: 'Tour',    es: 'Gira'    },
    'nav.contact': { pt: 'Contato', en: 'Contact', es: 'Contacto'},
    'nav.band':    { pt: 'Banda',   en: 'Band',    es: 'Banda'   },
    'nav.songs':   { pt: 'Músicas', en: 'Songs',   es: 'Canciones'},

    // ── HOME — HERO ──────────────────────────
    'hero.eyebrow':  { pt: 'Est. 2022 · ? ? ?', en: 'Est. 2022 · ? ? ?', es: 'Est. 2022 · ? ? ?' },
    'hero.subtitle': { pt: 'Banda de Rock? (a gente também não sabe)', en: "Rock Band? (we also don't know)", es: '¿Banda de Rock? (nosotros tampoco sabemos)' },
    'hero.desc':     {
        pt: 'Somos uma banda de músicos excluídos —<br>alguns com uma boa história de fundo, outros nem tanto.<br>Só tentando soltar os sons do fundo das nossas mentes.',
        en: 'We are a band that found some excluded musicians —<br>some with a nice background story, others not so nice.<br>Just trying to release the sounds out of the back of our minds.',
        es: 'Somos una banda de músicos excluidos —<br>algunos con una buena historia de fondo, otros no tanto.<br>Solo intentando liberar los sonidos del fondo de nuestras mentes.'
    },
    'hero.listen':   { pt: 'Ouça Agora',     en: 'Listen Now',      es: 'Escuchar Ahora' },
    'hero.meet':     { pt: 'Conheça a Banda', en: 'Meet the Band',   es: 'Conoce la Banda' },
    'hero.scroll':   { pt: 'Rolar',           en: 'Scroll',          es: 'Bajar' },

    // ── HOME — ABOUT ─────────────────────────
    'about.tag':     { pt: '// Sobre Nós',    en: '// About Us',     es: '// Sobre Nosotros' },
    'about.title':   { pt: 'Cinco excluídos.<br>Um som.',  en: 'Five outcasts.<br>One sound.', es: 'Cinco marginados.<br>Un sonido.' },
    'about.text':    {
        pt: 'Nossa banda foi fundada oficialmente em julho de 2025, mas já estamos praticando há alguns anos. Ouvimos vários artistas, ruídos em nossas cabeças, batidas dos corações — até o diabinho e o anjinho nos nossos ombros.',
        en: "Our band was officially founded in July, 2025, but we've been practicing for a couple years now. We listen to various artists, noises in our heads, beating of the hearts — even the little devil and angel on our shoulders.",
        es: 'Nuestra banda fue fundada oficialmente en julio de 2025, pero llevamos un par de años practicando. Escuchamos a varios artistas, ruidos en nuestras cabezas, latidos de corazones — hasta el diablillo y el angelito en nuestros hombros.'
    },

    // ── HOME — BAND CTA ──────────────────────
    'bandcta.title':  { pt: 'Conheça a Banda',       en: 'Meet the Band',       es: 'Conoce la Banda'       },
    'bandcta.text':   { pt: 'Cinco excluídos. Um som. Descubra as histórias por trás do EchoDome.', en: 'Five outcasts. One sound. Discover the stories behind EchoDome.', es: 'Cinco marginados. Un sonido. Descubre las historias detrás de EchoDome.' },
    'bandcta.btn':    { pt: 'Conheça os Membros →',  en: 'Meet the Members →',  es: 'Conoce a los Miembros →' },

    // ── HOME — MUSIC ─────────────────────────
    'music.tag':      { pt: '// Música',        en: '// Music',         es: '// Música'          },
    'music.title':    { pt: 'Nosso Som',         en: 'Our Sound',        es: 'Nuestro Sonido'     },
    'music.badge':    { pt: 'Primeiro Lançamento', en: 'First Release',  es: 'Primer Lanzamiento' },
    'music.albumtitle':{ pt: 'EP Sem Título',   en: 'Untitled EP',      es: 'EP Sin Título'      },
    'music.albumdesc':{ pt: 'Nosso EP de estreia está sendo feito. Nascido do ruído, moldado pelo silêncio. Cinco vozes, uma frequência.', en: 'Our debut EP is in the making. Born from noise, shaped by silence. Five voices, one frequency.', es: 'Nuestro EP debut está en proceso. Nacido del ruido, moldeado por el silencio. Cinco voces, una frecuencia.' },
    'music.coming':   { pt: 'Em Breve',          en: 'Coming',           es: 'Próximamente'       },
    'music.follow':   { pt: 'Siga para ser notificado:', en: 'Follow to be notified:', es: 'Síguenos para ser notificado:' },
    'music.wave':     { pt: '— Frequências estáticas até a tempestade chegar —', en: '— Static frequencies until the storm arrives —', es: '— Frecuencias estáticas hasta que llegue la tormenta —' },

    // ── HOME — TOUR ──────────────────────────
    'tour.tag':       { pt: '// Shows',          en: '// Tour',          es: '// Gira'             },
    'tour.title':     { pt: 'Na Estrada',         en: 'On the Road',      es: 'En la Carretera'    },
    'tour.subtitle':  { pt: 'Nos veja ao vivo — se conseguir nos encontrar.', en: 'Catch us live — if you can find us.', es: 'Encuéntranos en vivo — si puedes encontrarnos.' },
    'tour.soldout':   { pt: 'Esgotado',           en: 'Sold Out',         es: 'Agotado'            },
    'tour.tickets':   { pt: 'Comprar Ingressos',  en: 'Get Tickets',      es: 'Comprar Entradas'   },
    'tour.tba':       { pt: 'Em breve',           en: 'Stay tuned',       es: 'Próximamente'       },
    'tour.somewhere': { pt: 'Em algum lugar escuro', en: 'Somewhere dark', es: 'Algún lugar oscuro' },

    // ── HOME — CONTACT ───────────────────────
    'contact.tag':      { pt: '// Contato',       en: '// Contact',       es: '// Contacto'        },
    'contact.title':    { pt: 'Entre em Contato', en: 'Get in Touch',     es: 'Ponte en Contacto'  },
    'contact.subtitle': { pt: 'Agendamentos, collabs, ou só quer dizer algo? Lemos tudo.', en: 'Booking, collabs, or just want to say something? We read everything.', es: 'Reservas, collabs, ¿o solo quieres decir algo? Lo leemos todo.' },
    'contact.name':     { pt: 'Nome',             en: 'Name',             es: 'Nombre'             },
    'contact.nameph':   { pt: 'Seu nome',          en: 'Your name',        es: 'Tu nombre'          },
    'contact.email':    { pt: 'E-mail',            en: 'Email',            es: 'Correo'             },
    'contact.emailph':  { pt: 'seu@email.com',     en: 'your@email.com',   es: 'tu@correo.com'      },
    'contact.subject':  { pt: 'Assunto',           en: 'Subject',          es: 'Asunto'             },
    'contact.booking':  { pt: 'Agendamento',       en: 'Booking',          es: 'Reserva'            },
    'contact.collab':   { pt: 'Colaboração',       en: 'Collaboration',    es: 'Colaboración'       },
    'contact.press':    { pt: 'Imprensa / Mídia',  en: 'Press / Media',    es: 'Prensa / Medios'    },
    'contact.other':    { pt: 'Só dizendo oi',     en: 'Just saying hi',   es: 'Solo diciendo hola' },
    'contact.message':  { pt: 'Mensagem',          en: 'Message',          es: 'Mensaje'            },
    'contact.messageph':{ pt: 'Escreva algo...',   en: 'Write something...', es: 'Escribe algo...'  },
    'contact.send':     { pt: 'Enviar Mensagem',   en: 'Send Message',     es: 'Enviar Mensaje'     },
    'contact.success':  { pt: '✓ Mensagem enviada! Retornaremos em breve.', en: "✓ Message sent! We'll get back to you soon.", es: '✓ ¡Mensaje enviado! Te responderemos pronto.' },
    'contact.error':    { pt: '✗ Algo deu errado. Tente nos enviar um e-mail diretamente.', en: '✗ Something went wrong. Try emailing us directly.', es: '✗ Algo salió mal. Intenta enviarnos un correo directamente.' },
    'footer.rights':    { pt: '© 2025 EchoDome. Todos os direitos reservados.', en: '© 2025 EchoDome. All rights reserved.', es: '© 2025 EchoDome. Todos los derechos reservados.' },

    // ── BAND — PAGE ──────────────────────────
    'band.tag':       { pt: '// A Banda',         en: '// The Band',       es: '// La Banda'        },
    'band.title':     { pt: 'Conheça os Excluídos', en: 'Meet the Outcasts', es: 'Conoce a los Marginados' },
    'band.subtitle':  { pt: 'Cinco sinais quebrados. Uma transmissão.', en: 'Five broken signals. One transmission.', es: 'Cinco señales rotas. Una transmisión.' },
    'band.howmeet':   { pt: 'Como nos conhecemos?', en: 'How we meet?',     es: '¿Cómo nos conocimos?' },

    // Roles
    'role.bass':      { pt: 'Baixista',            en: 'Bass Player',       es: 'Bajista'            },
    'role.guitar':    { pt: 'Guitarra Solo',        en: 'Lead Guitar',       es: 'Guitarra Líder'     },
    'role.singer':    { pt: 'Voz / Guitarra',       en: 'Singer / Guitar',   es: 'Voz / Guitarra'     },
    'role.drums':     { pt: 'Baterista',            en: 'Drummer',           es: 'Baterista'          },
    'role.keys':      { pt: 'Teclados & Synths',    en: 'Keyboards & Synths', es: 'Teclados & Sintetizadores' },

    // Influences label
    'band.influences':{ pt: 'Influências:',         en: 'Influences:',       es: 'Influencias:'       },

    // Modal — Dusk
    'dusk.origin':    {
        pt: 'Antes de se tornar <strong>DUSK</strong>, ele era mecânico de estrada (ou algo assim — ele nunca explicou essa parte muito bem).<br>Passava os dias consertando carros e as noites tocando baixo em bares esquecidos no deserto.<br>Durante uma tempestade elétrica, um raio atingiu o gerador do bar enquanto ele tocava — a explosão o deixou inconsciente por três semanas.<br>Quando acordou, dizia que conseguia ouvir ritmos dentro do próprio corpo.<br>Desde então, toca com o rosto coberto, dizendo que <i>\"o ar frio mantém o som por dentro.\"</i><br>O baixo é o seu sopro — cada nota, uma batida do coração.',
        en: 'Before becoming <strong>DUSK</strong>, he was a road mechanic (or something like that — he never explained that part very well).<br>He spent his days fixing cars and his nights playing bass in forgotten desert bars.<br>During an electrical storm, lightning struck the bar\'s generator while he was playing — the explosion left him unconscious for three weeks.<br>When he woke up, he said he could hear rhythms inside his own body.<br>Since then, he plays with his face covered, saying that <i>"the cold air keeps the sound inside."</i><br>The bass is his breath — each note, a heartbeat.',
        es: 'Antes de convertirse en <strong>DUSK</strong>, era mecánico de ruta (o algo así — nunca explicó esa parte muy bien).<br>Pasaba los días arreglando autos y las noches tocando bajo en bares olvidados del desierto.<br>Durante una tormenta eléctrica, un rayo golpeó el generador del bar mientras tocaba — la explosión lo dejó inconsciente durante tres semanas.<br>Cuando despertó, dijo que podía escuchar ritmos dentro de su propio cuerpo.<br>Desde entonces, toca con el rostro cubierto, diciendo que <i>"el aire frío mantiene el sonido adentro."</i><br>El bajo es su respiración — cada nota, un latido.'
    },

    // Modal — Trace
    'trace.origin':   {
        pt: '<strong>TRACE</strong> nasceu do silêncio.<br>Antes da banda existir, era um cantor independente que tocava em pequenos clubes — sempre sozinho, sempre com a voz à beira do colapso.<br>Durante uma turnê, um acidente no palco o deixou entre a vida e o nada.<br>Quando voltou, sua voz nunca soou igual — ganhou textura, ruído, dor.<br>Ninguém sabe seu nome real. Ele afirma que <strong>\"TRACE\"</strong> é tudo o que resta dele.<br>Sua guitarra branca se chama <i>\"Echo\"</i> — símbolo de renascimento e memória.',
        en: '<strong>TRACE</strong> was born from silence.<br>Before the band existed, he was an independent singer who played in small clubs — always alone, always with his voice on the edge of breaking.<br>During a tour, a stage accident left him between life and nothingness.<br>When he returned, his voice never sounded the same again — it gained texture, noise, pain.<br>No one knows his real name. He claims that <strong>"TRACE"</strong> is all that remains of him.<br>His white guitar is called <i>"Echo"</i> — a symbol of rebirth and remembrance.',
        es: '<strong>TRACE</strong> nació del silencio.<br>Antes de que existiera la banda, era un cantante independiente que tocaba en pequeños clubes — siempre solo, siempre con la voz al borde del quiebre.<br>Durante una gira, un accidente en el escenario lo dejó entre la vida y la nada.<br>Cuando regresó, su voz nunca volvió a sonar igual — ganó textura, ruido, dolor.<br>Nadie sabe su nombre real. Afirma que <strong>"TRACE"</strong> es todo lo que queda de él.<br>Su guitarra blanca se llama <i>"Echo"</i> — símbolo de renacimiento y recuerdo.'
    },

    // Modal — OD
    'od.origin':      {
        pt: 'Ninguém sabe ao certo quem ele era antes de se tornar <strong>OD</strong>.<br>Dizem que era um guitarrista underground de uma cena esquecida, conhecido por tocar com tanto volume e distorção que os amplificadores literalmente queimavam.<br>Durante uma performance, um incêndio tomou conta do palco — e ele desapareceu entre a fumaça e o som.<br><strong>OD</strong> toca como se o som fosse uma arma. Nunca fala em entrevistas, nunca mostra o rosto.<br>Seu nome vem do pedal de guitarra que ele destruiu — <strong>Overdrive</strong>.',
        en: 'No one knows for sure who he was before becoming <strong>OD</strong>.<br>They say he was an underground guitarist from a forgotten scene, known for playing with so much volume and distortion that the amplifiers literally burned.<br>During a performance, a fire engulfed the stage — and he disappeared amidst the smoke and sound.<br><strong>OD</strong> plays as if sound were a weapon. He never speaks in interviews, never shows his face.<br>His name comes from the guitar pedal he destroyed — <strong>Overdrive</strong>.',
        es: 'Nadie sabe con certeza quién era antes de convertirse en <strong>OD</strong>.<br>Dicen que era un guitarrista underground de una escena olvidada, conocido por tocar con tanto volumen y distorsión que los amplificadores literalmente se quemaban.<br>Durante una actuación, un incendio envolvió el escenario — y desapareció entre el humo y el sonido.<br><strong>OD</strong> toca como si el sonido fuera un arma. Nunca habla en entrevistas, nunca muestra su rostro.<br>Su nombre viene del pedal de guitarra que destruyó — <strong>Overdrive</strong>.'
    },

    // Modal — Ember
    'ember.origin':   {
        pt: 'Ninguém sabe o nome real de <strong>EMBER</strong>.<br>Dizem que ela começou a tocar em fábricas abandonadas, usando pedaços de metal, latas e correntes para criar seu próprio ritmo.<br>As pessoas a chamavam de <i>\"o som que nunca dorme.\"</i><br>Desde então, o fogo se tornou parte da sua essência — ela toca como se cada batida fosse a última faísca de um mundo prestes a explodir.',
        en: 'No one knows <strong>EMBER\'s</strong> real name.<br>They say she started playing in abandoned factories, using pieces of metal, cans, and chains to create her own rhythm.<br>People called her <i>"the sound that never sleeps."</i><br>Since then, fire has become part of her essence — she plays as if each beat were the last spark of a world about to explode.',
        es: 'Nadie conoce el nombre real de <strong>EMBER</strong>.<br>Dicen que empezó a tocar en fábricas abandonadas, usando piezas de metal, latas y cadenas para crear su propio ritmo.<br>La gente la llamaba <i>"el sonido que nunca duerme."</i><br>Desde entonces, el fuego se convirtió en parte de su esencia — toca como si cada golpe fuera la última chispa de un mundo a punto de explotar.'
    },

    // Modal — Lyra
    'lyra.origin':    {
        pt: 'Antes de ser conhecida como <strong>Lyra</strong>, ela era apenas uma sombra ao fundo — uma compositora que escrevia trilhas sonoras para sonhos que nunca eram lembrados.<br>Ela costumava tocar sozinha em estações vazias, usando o som dos trens passando como metrônomo.<br>Quando <strong>TRACE</strong> a convidou para entrar na banda, ele simplesmente disse:<br><i>\"Não precisamos da sua voz. <strong>Precisamos de você.\"</strong></i><br>Agora, <strong>LYRA</strong> é o coração calmo do caos.',
        en: 'Before she was known as <strong>Lyra</strong>, she was just a shadow in the background — a composer who wrote soundtracks for dreams that were never remembered.<br>She used to play alone in empty stations, using the sound of passing trains as a metronome.<br>When <strong>TRACE</strong> invited her to join the band, he simply said:<br><i>"We don\'t need your voice. <strong>We</strong> need you."</i><br>Now, <strong>LYRA</strong> is the calm heart of chaos.',
        es: 'Antes de ser conocida como <strong>Lyra</strong>, era solo una sombra en el fondo — una compositora que escribía bandas sonoras para sueños que nunca eran recordados.<br>Solía tocar sola en estaciones vacías, usando el sonido de los trenes que pasaban como metrónomo.<br>Cuando <strong>TRACE</strong> la invitó a unirse a la banda, simplemente dijo:<br><i>"No necesitamos tu voz. <strong>Te</strong> necesitamos a ti."</i><br>Ahora, <strong>LYRA</strong> es el corazón tranquilo del caos.'
    },

    // Modal — Meet
    'meet.title':     { pt: 'Como Nos Conhecemos',        en: 'How We Met',               es: 'Cómo Nos Conocimos'         },
    'meet.subtitle':  { pt: 'O Início do EchoDome',       en: 'The Beginning of EchoDome', es: 'El Inicio de EchoDome'      },
    'meet.text':      {
        pt: 'Tudo começou em um estúdio abandonado em uma noite chuvosa de 2023...<br><br>TRACE estava tocando sozinho quando OD entrou, guitarra na mão. Eles tocaram por horas sem dizer uma palavra.<br><br>EMBER os encontrou pelo barulho — literalmente. Ela morava no apartamento acima e desceu para reclamar, mas acabou entrando para a banda.<br><br>LYRA apareceu um dia, instalou seu teclado no canto e nunca mais saiu.<br><br>DUSK foi a última peça. Ele os ouviu da rua e soube que havia encontrado seu lar.<br><br>Não nos escolhemos. A música escolheu.',
        en: 'It all started in an abandoned studio on a rainy night in 2023...<br><br>TRACE was playing alone when OD walked in, guitar in hand. They jammed for hours without saying a word.<br><br>EMBER found them through the noise — literally. She was living in the apartment above and came down to complain, but ended up joining instead.<br><br>LYRA appeared one day, set up her keyboard in the corner, and never left.<br><br>DUSK was the last piece. He heard them from the street and knew he had found his home.<br><br>We didn\'t choose each other. The music did.',
        es: 'Todo comenzó en un estudio abandonado en una noche lluviosa de 2023...<br><br>TRACE estaba tocando solo cuando OD entró, guitarra en mano. Tocaron durante horas sin decir una palabra.<br><br>EMBER los encontró por el ruido — literalmente. Vivía en el apartamento de arriba y bajó a quejarse, pero terminó uniéndose.<br><br>LYRA apareció un día, instaló su teclado en el rincón y nunca se fue.<br><br>DUSK fue la última pieza. Los escuchó desde la calle y supo que había encontrado su hogar.<br><br>No nos elegimos. La música lo hizo.'
    },
    'meet.location':  { pt: 'Local do Primeiro Ensaio:', en: 'First Rehearsal Location:', es: 'Lugar del Primer Ensayo:' },
    'meet.studio':    { pt: 'Velho Estúdio na 5ª Avenida', en: 'Old Studio on 5th Avenue', es: 'Viejo Estudio en la 5ª Avenida' },
    'meet.studio2':   { pt: 'Agora demolido, mas para sempre em nossos corações', en: 'Now demolished, but forever in our hearts', es: 'Ahora demolido, pero por siempre en nuestros corazones' },

    // ── GALLERY ──────────────────────────────
    'gallery.tag':      { pt: '// Galeria',             en: '// Gallery',              es: '// Galería'              },
    'gallery.subtitle': { pt: 'Clique em qualquer foto para ampliar', en: 'Click any photo to expand', es: 'Haz clic en cualquier foto para ampliar' },

    // ── SONGS PAGE ───────────────────────────
    'songs.tag':      { pt: '// Discografia',    en: '// Discography',    es: '// Discografía'     },
    'songs.title':    { pt: 'Músicas',            en: 'Songs',             es: 'Canciones'          },
    'songs.subtitle': { pt: 'Cada faixa. Cada palavra. Cada história.', en: 'Every track. Every word. Every story.', es: 'Cada pista. Cada palabra. Cada historia.' },
    'songs.empty':    { pt: 'Selecione uma música para ver os detalhes', en: 'Select a song to view details', es: 'Selecciona una canción para ver los detalles' },
    'songs.tab.lyrics': { pt: 'Letra',            en: 'Lyrics',            es: 'Letra'              },
    'songs.tab.story':  { pt: 'História',         en: 'Story',             es: 'Historia'           },
    'songs.tab.chords': { pt: 'Cifra',            en: 'Chords',            es: 'Acordes'            },
    'songs.play':       { pt: 'Tocar',            en: 'Play',              es: 'Reproducir'         },
    'songs.pause':      { pt: 'Pausar',           en: 'Pause',             es: 'Pausar'             },
    'songs.back':       { pt: '← Voltar',         en: '← Back',           es: '← Volver'           },
    'songs.nolyrics':   { pt: 'Sem letra ainda.', en: 'No lyrics yet.',    es: 'Sin letra aún.'     },
    'songs.nostory':    { pt: 'Sem história disponível ainda.', en: 'No story available yet.', es: 'Sin historia disponible aún.' },
    'songs.nochords':   { pt: 'Sem cifra ainda.', en: 'No chords yet.',    es: 'Sin acordes aún.'   },

    // ── PLAYER ───────────────────────────────
    'player.notrack':   { pt: 'Nenhuma faixa',    en: 'No track selected', es: 'Ninguna pista'      },
    'player.lyrics':    { pt: 'LETRA',            en: 'LYRICS',            es: 'LETRA'              },
};

// ============================================
// ENGINE — aplica traduções na página
// ============================================
const I18N = {
    currentLang: 'en',

    init() {
        // Lê idioma salvo ou detecta pelo browser
        const saved = localStorage.getItem('echodome-lang');
        if (saved && ['pt','en','es'].includes(saved)) {
            this.currentLang = saved;
        } else {
            const browser = (navigator.language || 'en').slice(0,2).toLowerCase();
            this.currentLang = ['pt','en','es'].includes(browser) ? browser : 'en';
        }
        this.apply();
        this.renderPicker();
    },

    t(key) {
        const entry = ECHODOME_LANGS[key];
        if (!entry) return '';
        return entry[this.currentLang] || entry['en'] || '';
    },

    apply() {
        // Aplica em todos os elementos com data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            const val = this.t(key);
            if (!val) return;
            if (el.dataset.i18nAttr) {
                el.setAttribute(el.dataset.i18nAttr, val);
            } else {
                el.innerHTML = val;
            }
        });

        // Atualiza o picker
        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
        });

        // Atualiza html lang
        document.documentElement.lang = this.currentLang === 'pt' ? 'pt-BR' : this.currentLang;
    },

    set(lang) {
        this.currentLang = lang;
        localStorage.setItem('echodome-lang', lang);
        this.apply();
    },

    renderPicker() {
        // Injeta o picker no nav se ainda não existe
        if (document.getElementById('lang-picker')) return;

        const picker = document.createElement('div');
        picker.id = 'lang-picker';
        picker.innerHTML = `
            <button class="lang-globe" id="lang-globe" title="Language / Idioma">
                <i class="fa-solid fa-globe"></i>
            </button>
            <div class="lang-dropdown" id="lang-dropdown">
                <button class="lang-option${this.currentLang==='pt'?' active':''}" data-lang="pt">PT</button>
                <button class="lang-option${this.currentLang==='en'?' active':''}" data-lang="en">EN</button>
                <button class="lang-option${this.currentLang==='es'?' active':''}" data-lang="es">ES</button>
            </div>
        `;

        // Insere no nav
        const nav = document.querySelector('nav.header-content');
        if (nav) nav.appendChild(picker);

        // Toggle dropdown
        document.getElementById('lang-globe').addEventListener('click', (e) => {
            e.stopPropagation();
            document.getElementById('lang-dropdown').classList.toggle('open');
        });

        // Fecha ao clicar fora
        document.addEventListener('click', () => {
            const dd = document.getElementById('lang-dropdown');
            if (dd) dd.classList.remove('open');
        });

        // Seleciona idioma
        picker.querySelectorAll('.lang-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.set(btn.dataset.lang);
                document.getElementById('lang-dropdown').classList.remove('open');
            });
        });
    }
};

// Inicia quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => I18N.init());
} else {
    I18N.init();
}

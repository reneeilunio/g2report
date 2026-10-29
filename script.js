const periods = [
  {
    title: 'Ancient Greece',
    date: '900 B.C. – 31 B.C. · four periods',
    tag: 'Geometry to naturalism',
    desc: 'The presentation divides Greek art into Geometric, Archaic, Classical, and Hellenistic periods. Greek art placed importance on human figures, balance, emotion, and naturalism.',
    ideas: [
      'Geometric: 900–700 B.C.; the Greek city-state and alphabet developed, alongside trade and temple building.',
      'Archaic: 700–480 B.C.; artists adopted and reshaped foreign styles and motifs.',
      'Classical: 480–323 B.C.; the lesson calls this the Golden Age and the peak of Greek sculpture and architecture.',
      'Hellenistic: 323–31 B.C.; conquests spread Greek culture and sculptors pursued naturalism.'
    ],
    works: [
      'Winged Victory of Samothrace',
      'Laocoön and His Sons',
      'The Iliad and The Odyssey (Homer)'
    ],
    art: 'Ancient'
  },
  {
    title: 'Ancient Rome',
    date: '509 B.C. – 330 C.E.',
    tag: 'Architecture and realism',
    desc: 'Roman art reflected interaction with neighboring civilizations, especially Greek influence. The presentation highlights a fusion of Greek and Roman culture.',
    ideas: [
      'Roman art came of age during the Hellenistic period.',
      'Works emphasized human features and principles of realism.',
      'Romans became known as master builders of monuments and infrastructure.',
      'Greek influence was also present in theatre and drama.'
    ],
    works: [
      'Colosseum',
      'Perseus with the Head of Medusa — Benvenuto Cellini'
    ],
    art: 'Ancient'
  },
  {
    title: 'Middle Ages',
    date: 'A.D. 500 – A.D. 1400 (as shown in the slides)',
    tag: 'Faith and cathedrals',
    desc: 'The lesson presents the Middle Ages as the period between the decline of the Roman Empire and the Renaissance, with the Church as a central authority.',
    ideas: [
      'Many important artworks were inspired by Christian scripture and made by hand.',
      'Illustrations and decorations reflected religious focus.',
      'Great cathedrals were built.',
      'The slides identify Romanesque (1050–1200) and Gothic (1200–1500).'
    ],
    works: [
      'Church of Saint-Étienne (Romanesque)',
      'Cathédrale Notre-Dame de Paris',
      'Duomo di Milano (Gothic)'
    ],
    art: 'Sacred'
  },
  {
    title: 'Renaissance',
    date: '1400 – 1600',
    tag: 'The individual and naturalism',
    desc: 'Renaissance art placed greater importance on the individual, naturalism, proportion, and the representation of three-dimensional space.',
    ideas: [
      'Artists valued individuals as subjects.',
      'Naturalism, proportion, depth, and space became important.',
      'The lesson also connects the revival of Roman theatrical plays with the development of opera.'
    ],
    works: [
      'Pietà — Michelangelo',
      'David — Michelangelo',
      'Dafne — Jacopo Peri (opera cited in the lesson)'
    ],
    art: 'Classical'
  },
  {
    title: 'Mannerism',
    date: '1527 – 1580',
    tag: 'Complexity and distortion',
    desc: 'The presentation describes Mannerism as a product of the Renaissance, with artists observing nature and also copying existing works while experimenting with distortion.',
    ideas: [
      'Figures may appear distorted.',
      'Spaces may be two-dimensional; hues can be discordant and a focal point may be unclear.',
      'The slides associate the movement with elegance, complexity, invention, and virtuoso technique.'
    ],
    works: [
      'Madonna with the Long Neck — Parmigianino',
      'Venus with a Mirror — Titian',
      'Giorgio Vasari; Eleonora di Toledo — Agnolo Bronzino'
    ],
    art: 'Expressive'
  },
  {
    title: 'Baroque',
    date: '1600 – 1750',
    tag: 'Drama and intensity',
    desc: 'The presentation traces the term “Baroque” to the Portuguese word barocco, meaning an irregular-shaped pearl, and identifies Rome as its birthplace.',
    ideas: [
      'Religion, politics, and art were strengthened during this period.',
      'Music flourished.',
      'In the comparison section, the lesson highlights color palettes, ornamentation, dramatic lighting, and time.'
    ],
    works: [
      'The Calling of Saint Matthew — Caravaggio',
      'The Elevation of the Cross — Peter Paul Rubens',
      'The Assumption of the Virgin — Titian (listed in the slides)'
    ],
    art: 'Dramatic'
  },
  {
    title: 'Rococo',
    date: '1699 – 1780',
    tag: 'Fluid design and ornament',
    desc: 'The slides describe Rococo as “Late Baroque,” beginning after Louis XIV demanded more youthful art. Baroque artists moved away from symmetry toward more fluid designs.',
    ideas: [
      'Ornamentation and color palettes are highlighted.',
      'The comparison section describes Baroque and Rococo as using ornaments and extravagance.'
    ],
    works: [
      'The Swing — Jean-Honoré Fragonard',
      'Girl with a Pearl Earring — Johannes Vermeer (listed alongside this period in the slides)'
    ],
    art: 'Ornamental'
  },
  {
    title: 'Neoclassicism',
    date: '1750 – 1850',
    tag: 'Classical revival and order',
    desc: 'Neoclassicism aimed to revive Greek and Roman influences in art and architecture and was associated in the slides with Enlightenment principles.',
    ideas: [
      'Revived Greek and Roman influence.',
      'Moved away from the extravagance associated with Baroque art.',
      'The theme/style comparison emphasizes classical references, aesthetic beauty, symmetry, and calculation.'
    ],
    works: [
      'Paolina Borghese as Venus Victrix — Antonio Canova',
      'Psyche Revived by Cupid’s Kiss — Antonio Canova',
      'Voltaire — Jean-Antoine Houdon'
    ],
    art: 'Classical'
  },
  {
    title: 'Romanticism',
    date: '1780 – 1850',
    tag: 'Emotion and heroic elements',
    desc: 'The presentation connects Romanticism with the Age of Revolutions and highlights emotion, feelings, patriotism, nationalism, justice, equality, and social order.',
    ideas: [
      'Used themes of Neoclassicism as a springboard.',
      'Highlighted heroic elements.',
      'Focused on the French Revolution and patriotic and nationalistic movements.'
    ],
    works: [
      'The Raft of the Medusa — Théodore Géricault',
      'Liberty Leading the People — Eugène Delacroix',
      'Saturn Devouring His Son — Francisco Goya',
      'Spoliarium — Juan Luna (shown in the slides)'
    ],
    art: 'Emotional'
  },
  {
    title: 'Realism',
    date: '1848 – 1900',
    tag: 'Accuracy and everyday reality',
    desc: 'Realism focuses on accuracy of detail and depicts or mirrors reality. The presentation also links it with Hellenistic Greek influence and revolution and social change.',
    ideas: [
      'Veered away from traditional forms of art.',
      'Reexamined existing belief systems and traditions.',
      'The comparison section highlights accurate detail and reality.'
    ],
    works: [
      'The Stone Breakers — Gustave Courbet',
      'The Wheat Sifters — Gustave Courbet',
      'Third-Class Carriage — Honoré Daumier',
      'The Gleaners — Jean-François Millet'
    ],
    art: 'Everyday life'
  },
  {
    title: 'Impressionism',
    date: '1865 – 1885',
    tag: 'Light, color, and the moment',
    desc: 'The lesson says Impressionism began in France and broke from tradition in European painting, emphasizing the immediate impression of an event or scene.',
    ideas: [
      'Incorporated scientific principles.',
      'Communication is expressed through brushstrokes, color distinctions, light, and shadows.',
      'The slides describe a move away from traditional three-dimensional perspective and clarity of form.'
    ],
    works: [
      'Impression, Sunrise — Claude Monet',
      'The Harbor at Lorient — Berthe Morisot',
      'Paris Street, Rainy Day — Gustave Caillebotte',
      'Luncheon of the Boating Party — Pierre-Auguste Renoir'
    ],
    art: 'Light and color'
  },
  {
    title: 'Post-Impressionism',
    date: '1885 – 1910',
    tag: 'Structure and expressive brushwork',
    desc: 'Post-Impressionism emerged in France through both the influence and rejection of Impressionism. The slides emphasize broken colors and short brushstrokes.',
    ideas: [
      'Works by artists of the period became a framework for twentieth-century techniques and trends.',
      'The movement is presented as both influenced by and reacting against Impressionism.'
    ],
    works: [
      'The Starry Night — Vincent van Gogh',
      'The Large Bathers — Paul Cézanne',
      'The Scream — Edvard Munch (shown in the slide sequence)',
      'Portrait of Doctor Gachet — Vincent van Gogh'
    ],
    art: 'Expressive'
  },
  {
    title: 'Neo-Impressionism',
    date: '1886 – 1906',
    tag: 'Dots and pure color',
    desc: 'The lesson describes Neo-Impressionism as a response to the empirical realism of Impressionism, using systematic and scientific techniques.',
    ideas: [
      'Georges Seurat is identified as the leading figure.',
      'Pointillism uses discrete dots and dashes of pure color.'
    ],
    works: [
      'A Sunday Afternoon on the Island of La Grande Jatte — Georges Seurat',
      'Portrait of Félix Fénéon — Paul Signac',
      'The Evening Air — Henri-Edmond Cross',
      'Le Bon Samaritain — Maximilien Luce'
    ],
    art: 'Pointillism'
  },
  {
    title: 'Art Nouveau',
    date: '1890 – 1910',
    tag: 'Organic lines and ornament',
    desc: 'Art Nouveau is presented as an ornamental style and a break from conservative historicism, visible in architecture, jewelry, and glass design.',
    ideas: [
      'Long organic lines are characteristic.',
      'Asymmetrical lines often resemble insect wings or flower stalks.',
      'The line is graceful and elegant, yet evokes power.'
    ],
    works: [
      'At the Moulin Rouge — Henri de Toulouse-Lautrec',
      'La Sagrada Família — Antoni Gaudí',
      'The Kiss — Gustav Klimt',
      'Celebration of Spring — Émile Gallé'
    ],
    art: 'Organic'
  },
  {
    title: 'Fauvism',
    date: '1900 – 1935',
    tag: 'Vibrant color',
    desc: 'Fauvism emerged in France. The presentation emphasizes pure, vibrant colors applied straight from paint tubes and expressive reactions to subjects.',
    ideas: [
      'Produced a sense of an explosion of colors.',
      'Artists painted directly from nature.',
      'The picture space is defined by the movement of color rather than traditional three-dimensional rendering.'
    ],
    works: [
      'Woman with a Hat — Henri Matisse',
      'Open Window — Henri Matisse',
      'Mountains at Collioure — André Derain',
      'The River Seine at Chatou — Maurice de Vlaminck'
    ],
    art: 'Color'
  },
  {
    title: 'Cubism',
    date: '1907 – 1914',
    tag: 'Fragmented perspectives',
    desc: 'Introduced by Pablo Picasso and Georges Braque, Cubism emphasized the two-dimensional picture plane and presented new depictions of reality through fragmented forms.',
    ideas: [
      'Rejected the idea that art must imitate nature.',
      'Moved away from perspective, foreshortening, and modeling.',
      'Objects may appear fragmented to viewers.'
    ],
    works: [
      'The Women of Algiers — Pablo Picasso',
      'Violin and Candlestick — Georges Braque',
      'I and the Village — Marc Chagall'
    ],
    art: 'Geometry'
  },
  {
    title: 'Futurism',
    date: '1909 – 1914',
    tag: 'Speed and modern life',
    desc: 'Futurism began in Italy and highlighted the speed, energy, dynamism, and power of machines, expressing the restlessness and fast pace of modern life.',
    ideas: [
      'Prominent in poetry and visual arts.',
      'The presentation notes that Futurism also spread to Russia.'
    ],
    works: [
      'Dynamic Hieroglyphic of the Bal Tabarin — Gino Severini',
      'Battle of Lights — Joseph Stella',
      'The Cyclist — Natalia Goncharova'
    ],
    art: 'Movement'
  }
];

const artworkImages = {
  'Ancient Greece': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Discobolus%20Lancellotti.jpg&width=640',
  'Ancient Rome': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Colosseum%20in%20Rome%2C%20Italy%20-%20April%202007.jpg&width=640',
  'Middle Ages': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Bayeux%20Tapestry%20WillelmDux.jpg&width=640',
  'Renaissance': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Leonardo%20da%20Vinci%20-%20Mona%20Lisa.jpg&width=640',
  'Mannerism': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/El%20Greco%20-%20The%20Burial%20of%20the%20Count%20of%20Orgaz.JPG&width=640',
  'Baroque': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Caravaggio%20-%20The%20Calling%20of%20Saint%20Matthew.jpg&width=640',
  'Rococo': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Jean-Honore%20Fragonard%20-%20The%20Swing.jpg&width=640',
  'Neoclassicism': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Jacques-Louis%20David%20-%20Oath%20of%20the%20Horatii%20-%20Google%20Art%20Project.jpg&width=640',
  'Romanticism': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Eug%C3%A8ne%20Delacroix%20-%20La%20libert%C3%A9%20guidant%20le%20peuple.jpg&width=640',
  'Realism': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Gustave%20Courbet%20-%20The%20Stone%20Breakers.jpg&width=640',
  'Impressionism': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Claude%20Monet%20-%20Impression%2C%20soleil%20levant.jpg&width=640',
  'Post-Impressionism': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Vincent%20van%20Gogh%20-%20Starry%20Night%20-%20Google%20Art%20Project.jpg&width=640',
  'Neo-Impressionism': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Georges%20Seurat%20-%20Un%20dimanche%20apr%C3%A8s-midi%20%C3%A0%20l%20Ile%20de%20la%20Grande%20Jatte.jpg&width=640',
  'Art Nouveau': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Alphonse%20Mucha%20-%201896%20-%20The%20Seasons%20-%20Summer.jpg&width=640',
  'Fauvism': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Henri%20Matisse%20-%20Woman%20with%20a%20Hat%20-%201905.jpg&width=640',
  'Cubism': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Pablo%20Picasso%2C%201910%2C%20Girl%20with%20a%20Mandolin%2C%20F%20381%2C%20oil%20on%20canvas%2C%20100.3%20x%2073.6%20cm%2C%20Museum%20of%20Modern%20Art%2C%20New%20York.jpg&width=640',
  'Futurism': 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Umberto%20Boccioni%20-%20Unique%20Forms%20of%20Continuity%20in%20Space%20-%201913.jpg&width=640'
};

const artworkUrl = title =>
  artworkImages[title] || artworkImages['Renaissance'];

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

let active = -1;

const stored = () => {
  try {
    return JSON.parse(localStorage.getItem('europaExplored') || '[]');
  } catch {
    return [];
  }
};

function save(arr) {
  localStorage.setItem('europaExplored', JSON.stringify(arr));
  renderProgress();
}

function renderProgress() {
  const done = stored();

  $('#progressText').textContent = `${done.length} / ${periods.length} explored`;
  $('#passportCount').textContent = done.length;
  $('#progressBar').style.width =
    (done.length / periods.length * 100) + '%';

  $('#passportMessage').textContent =
    done.length === periods.length
      ? 'Passport complete — you explored every period!'
      : done.length
        ? `You have explored ${done.length} of ${periods.length} periods. Keep going.`
        : 'Your journey begins here.';

  $('#passportMarks').innerHTML = done
    .map(i => `<span>${periods[i].title.toUpperCase()}</span>`)
    .join('');

  $$('.period-card').forEach((card, i) =>
    card.classList.toggle('done', done.includes(i))
  );
}

function fallbackImage(img) {
  img.onerror = null;
  img.src =
    'https://placehold.co/640x420/f4eadb/6f1d32?text=Artwork+image+unavailable';
}

$('#timelineList').innerHTML = periods.map((p, i) => `
  <button class="period-card" data-index="${i}">
    <img
      class="period-art"
      src="${artworkUrl(p.title)}"
      alt="Artwork representing ${p.title}"
      loading="lazy"
      onerror="fallbackImage(this)"
    >
    <div class="period-card-copy">
      <span class="number">${String(i + 1).padStart(2, '0')} / ${p.art.toUpperCase()}</span>
      <h3>${p.title}</h3>
      <p>${p.date}</p>
    </div>
    <span class="arrow">↗</span>
  </button>
`).join('');

function openPeriod(i) {
  active = i;
  const p = periods[i];

  $('#modalEyebrow').textContent =
    `PERIOD ${String(i + 1).padStart(2, '0')} / ${p.tag}`;

  $('#modalTitle').textContent = p.title;
  $('#modalDate').textContent = p.date;

  const art = $('#modalArtwork');
  art.src = artworkUrl(p.title);
  art.alt = `Artwork representing ${p.title}`;
  art.hidden = false;
  art.onerror = () => fallbackImage(art);

  $('#modalDescription').textContent = p.desc;
  $('#modalIdeas').innerHTML = p.ideas
    .map(item => `<li>${item}</li>`)
    .join('');

  $('#modalWorks').innerHTML = p.works
    .map(item => `<li>${item}</li>`)
    .join('');

  $('#markExplored').textContent =
    stored().includes(i) ? 'Explored ✓' : 'Mark as explored ✓';

  $('#modal').classList.add('open');
  $('#modal').setAttribute('aria-hidden', 'false');
}

$('#timelineList').addEventListener('click', event => {
  const card = event.target.closest('[data-index]');
  if (card) openPeriod(Number(card.dataset.index));
});

function closeModal() {
  $('#modal').classList.remove('open');
  $('#modal').setAttribute('aria-hidden', 'true');
}

$('#closeModal').onclick = closeModal;

$('#modal').addEventListener('click', event => {
  if (event.target.id === 'modal') closeModal();
});

$('#markExplored').onclick = () => {
  const arr = stored();

  if (!arr.includes(active)) arr.push(active);

  save(arr);
  $('#markExplored').textContent = 'Explored ✓';
};

$('#resetPassport').onclick = () => {
  if (confirm('Reset your explored-period progress?')) save([]);
};

const compare = {
  themes: [
    [
      'Greek & Roman mythology',
      'Mythological stories and figures appear in the lesson’s artwork examples.'
    ],
    [
      'Religion',
      'Religious subjects and Christian scripture are central to many works discussed, especially in the Middle Ages and Baroque examples.'
    ],
    [
      'Human society',
      'The lesson connects art with people, social change, revolution, and cultural values.'
    ],
    [
      'Everyday life',
      'Realism and Impressionism provide examples of ordinary people and scenes.'
    ]
  ],
  styles: [
    [
      'Baroque & Rococo',
      'Ornament, extravagance, color palettes, dramatic lighting, and fluid design.'
    ],
    [
      'Neoclassicism',
      'Classical revival, aesthetic beauty, symmetry, and calculation.'
    ],
    [
      'Romanticism',
      'Heroic elements, emotion, revolution, justice, equality, and social order.'
    ],
    [
      'Realism',
      'Accuracy of detail; depicting and mirroring reality.'
    ],
    [
      'Impressionism',
      'Distinct brushstrokes, color, light, shadows, and rejection of clarity of form.'
    ]
  ]
};

const comparisonArt = [
  {
    title: 'Baroque & Rococo',
    left: 'Baroque',
    right: 'Rococo',
    leftImg: artworkImages['Baroque'],
    rightImg: artworkImages['Rococo'],
    note: 'Baroque often uses dramatic lighting and intense movement; Rococo favors lighter, playful ornament and decorative elegance.'
  },
  {
    title: 'Neoclassicism & Romanticism',
    left: 'Neoclassicism',
    right: 'Romanticism',
    leftImg: artworkImages['Neoclassicism'],
    rightImg: artworkImages['Romanticism'],
    note: 'Neoclassicism emphasizes order and classical structure; Romanticism foregrounds emotion, drama, and the sublime.'
  },
  {
    title: 'Romanticism & Realism',
    left: 'Romanticism',
    right: 'Realism',
    leftImg: artworkImages['Romanticism'],
    rightImg: artworkImages['Realism'],
    note: 'Romantic works may heighten drama and emotion; Realist works focus on observable people and everyday reality.'
  },
  {
    title: 'Impressionism & Post-Impressionism',
    left: 'Impressionism',
    right: 'Post-Impressionism',
    leftImg: artworkImages['Impressionism'],
    rightImg: artworkImages['Post-Impressionism'],
    note: 'Impressionism explores light and fleeting impressions; Post-Impressionism develops more personal structure, color, and expression.'
  },
  {
    title: 'Fauvism & Cubism',
    left: 'Fauvism',
    right: 'Cubism',
    leftImg: artworkImages['Fauvism'],
    rightImg: artworkImages['Cubism'],
    note: 'Fauvism is known for bold, expressive color; Cubism breaks forms into geometric facets and multiple viewpoints.'
  }
];

function renderCompare(key) {
  const items = compare[key];

  $('#compareContent').innerHTML = items.map((item, i) => {
    let pair = '';

    if (key === 'styles') {
      const comparison = comparisonArt[i % comparisonArt.length];

      pair = `
        <div class="compare-art-pair">
          <figure>
            <img
              loading="lazy"
              src="${comparison.leftImg}"
              alt="${comparison.left} artwork"
              onerror="fallbackImage(this)"
            >
            <figcaption>${comparison.left}</figcaption>
          </figure>
          <figure>
            <img
              loading="lazy"
              src="${comparison.rightImg}"
              alt="${comparison.right} artwork"
              onerror="fallbackImage(this)"
            >
            <figcaption>${comparison.right}</figcaption>
          </figure>
        </div>
        <p class="visual-note">${comparison.note}</p>
      `;
    }

    return `
      <article class="compare-card">
        <span class="num">0${i + 1}</span>
        <h3>${item[0]}</h3>
        ${pair}
        <p>${item[1]}</p>
      </article>
    `;
  }).join('');
}

$$('.tab').forEach(button => {
  button.onclick = () => {
    $$('.tab').forEach(tab =>
      tab.classList.toggle('active', tab === button)
    );

    renderCompare(button.dataset.tab);
  };
});

renderCompare('themes');

const answers = [
  [
    /communication|communicate|importance of art|western culture/i,
    'The presentation describes art as communication: it creates opportunities for people and generations to communicate through sights, sounds, and tales. It can also be used as a tool for social change.'
  ],
  [
    /cubism/i,
    'The slides say Cubism, introduced by Pablo Picasso and Georges Braque, emphasized the two-dimensional picture plane and rejected the idea that art must imitate nature. Objects can appear fragmented.'
  ],
  [
    /baroque.*rococo|rococo.*baroque/i,
    'The lesson highlights color palettes, ornamentation, dramatic lighting, and the concept of time for Baroque and Rococo. It also describes Rococo as “Late Baroque,” with more fluid designs moving away from symmetry.'
  ],
  [
    /impression/i,
    'The presentation says Impressionism emphasizes the immediate impression of a scene. Brushstrokes, color distinctions, light, and shadows help communicate that impression.'
  ],
  [
    /realism/i,
    'The slides describe Realism as focusing on accuracy of detail and depicting or mirroring reality, with links to Hellenistic Greek influence and social change.'
  ],
  [
    /fauvism/i,
    'Fauvism is described as using pure, vibrant colors straight from the paint tube, creating an explosion of color and expressive responses to subjects.'
  ],
  [
    /neo.?impression|pointill/i,
    'The lesson describes Neo-Impressionism as a systematic and scientific response to Impressionism. Georges Seurat is named as a leading figure, and Pointillism uses discrete dots and dashes of pure color.'
  ],
  [
    /romantic/i,
    'The presentation connects Romanticism with the Age of Revolutions and emphasizes heroic elements, emotion, patriotism, nationalism, justice, equality, and social order.'
  ],
  [
    /middle ages|gothic|romanesque/i,
    'The slides place the Church at the center of authority during the Middle Ages and highlight Christian subjects, hand-made illustrations and decorations, and great cathedrals. Romanesque and Gothic are identified as architectural styles.'
  ],
  [
    /renaissance/i,
    'The lesson highlights individuals as subjects, naturalism, proportion, perspective, three-dimensional space, and renewed interest in Roman theatre.'
  ],
  [
    /art nouveau/i,
    'Art Nouveau is described as ornamental, with long organic and asymmetrical lines resembling insect wings or flower stalks, seen in architecture, jewelry, and glass design.'
  ],
  [
    /futurism/i,
    'The slides describe Futurism as beginning in Italy and highlighting speed, energy, dynamism, machine power, and the fast pace of modern life.'
  ],
  [
    /neoclass/i,
    'Neoclassicism aimed to revive Greek and Roman influences in art and architecture and is associated in the lesson with Enlightenment principles, symmetry, and calculation.'
  ],
  [
    /ancient greece|hellenistic|classical period/i,
    'The presentation divides Ancient Greek art into Geometric, Archaic, Classical, and Hellenistic periods. It emphasizes human figures, balance, emotion, naturalism, and the spread of Greek culture.'
  ],
  [
    /rome|roman/i,
    'The lesson highlights a fusion of Greek and Roman culture, realism in human features, grand monuments, infrastructure, and Greek influences on theatre and drama.'
  ],
  [
    /mannerism/i,
    'The slides describe Mannerism as a Renaissance product, with artists copying existing works and using distorted figures, two-dimensional spaces, discordant hues, and sometimes no defined focal point.'
  ],
  [
    /post.?impression/i,
    'Post-Impressionism is described as both influenced by and rejecting Impressionism. The lesson highlights broken colors and short brushstrokes.'
  ],
  [
    /date|timeline|period/i,
    'Choose a period on the timeline to see the date range and key ideas exactly as presented in your class material. Note that some ranges overlap in the slides.'
  ]
];

function reply(question) {
  const match = answers.find(item => item[0].test(question));

  return match
    ? match[1]
    : 'I can answer questions about the movements, works, and themes covered in the presentation. Try asking about Ancient Greece, Renaissance, Baroque and Rococo, Realism, Impressionism, Cubism, or art as communication.';
}

function sendChat(question) {
  question = question.trim();
  if (!question) return;

  const userBubble = document.createElement('div');
  userBubble.className = 'bubble user';
  userBubble.textContent = question;
  $('#chatLog').append(userBubble);

  const botBubble = document.createElement('div');
  botBubble.className = 'bubble bot';
  botBubble.textContent = reply(question);
  $('#chatLog').append(botBubble);

  $('#chatLog').scrollTop = $('#chatLog').scrollHeight;
}

$('#chatForm').onsubmit = event => {
  event.preventDefault();
  sendChat($('#chatInput').value);
  $('#chatInput').value = '';
};

$$('.artist-prompt-list button').forEach(button => {
  button.onclick = () => sendChat(button.textContent);
});

$('.menu').onclick = () => {
  const nav = $('nav');

  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
    nav.style.position = 'absolute';
    nav.style.top = '66px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '20px';
    nav.style.background = 'var(--bg)';
    nav.style.flexDirection = 'column';
    nav.style.borderBottom = '1px solid var(--line)';
  }
};

renderProgress();

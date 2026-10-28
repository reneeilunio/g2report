```javascript
/* =========================================================
   EUROPA — Art of Emerging Europe
   Complete JavaScript
   Features:
   - 17 art-history periods
   - Artwork images
   - Interactive timeline and study cards
   - Virtual passport with local progress storage
   - Theme and art-style comparisons
   - Side-by-side artwork comparisons
   - Simulated Ask the Artist
   ========================================================= */

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


/* =========================================================
   ARTWORK IMAGES
   Images are linked from Wikimedia Commons.
   If a link fails, the site hides that image rather than
   breaking the rest of the page.
   ========================================================= */

const artworkImages = {
  'Ancient Greece': [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Nike_of_Samothrace_Louvre_Ma2369_n2.jpg',
    'Winged Victory of Samothrace · Hellenistic Greek sculpture'
  ],
  'Ancient Rome': [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Colosseum_in_Rome,_Italy_-_April_2007.jpg',
    'The Colosseum · Roman architecture'
  ],
  'Middle Ages': [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Chartres_Cathedral.jpg',
    'Chartres Cathedral · Gothic architecture'
  ],
  'Renaissance': [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Michelangelo%27s_Pieta_5450_cropncleaned_edit.jpg',
    'Pietà · Michelangelo'
  ],
  'Mannerism': [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Parmigianino_-_Madonna_with_the_Long_Neck.jpg',
    'Madonna with the Long Neck · Parmigianino'
  ],
  'Baroque': [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Caravaggio_-_The_Calling_of_Saint_Matthew.jpg',
    'The Calling of Saint Matthew · Caravaggio'
  ],
  'Rococo': [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Jean-Honor%C3%A9_Fragonard_-_The_Swing.jpg',
    'The Swing · Jean-Honoré Fragonard'
  ],
  'Neoclassicism': [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg',
    'Oath of the Horatii · Jacques-Louis David'
  ],
  'Romanticism': [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Eug%C3%A8ne_Delacroix_-_La_Libert%C3%A9_guidant_le_peuple.jpg',
    'Liberty Leading the People · Eugène Delacroix'
  ],
  'Realism': [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Gustave_Courbet_-_The_Stone_Breakers_-_Google_Art_Project.jpg',
    'The Stone Breakers · Gustave Courbet'
  ],
  'Impressionism': [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Claude_Monet,_Impression,_soleil_levant.jpg',
    'Impression, Sunrise · Claude Monet'
  ],
  'Post-Impressionism': [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
    'The Starry Night · Vincent van Gogh'
  ],
  'Neo-Impressionism': [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_-_1884_-_Google_Art_Project.jpg',
    'A Sunday Afternoon on the Island of La Grande Jatte · Georges Seurat'
  ],
  'Art Nouveau': [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Gustav_Klimt_016.jpg',
    'The Kiss · Gustav Klimt'
  ],
  'Fauvism': [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Henri_Matisse,_1905,_Woman_with_a_Hat.jpg',
    'Woman with a Hat · Henri Matisse'
  ],
  'Cubism': [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Georges_Braque,_1910,_Violin_and_Candlestick.jpg',
    'Violin and Candlestick · Georges Braque'
  ],
  'Futurism': [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Umberto_Boccioni_-_Unique_Forms_of_Continuity_in_Space_-_1913.jpg',
    'Unique Forms of Continuity in Space · Umberto Boccioni'
  ]
};

periods.forEach(period => {
  const imageData = artworkImages[period.title];

  period.image = imageData ? imageData[0] : '';
  period.caption = imageData ? imageData[1] : period.title;
});


/* =========================================================
   GENERAL HELPERS
   ========================================================= */

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

let activePeriod = -1;

const STORAGE_KEY = 'europaExplored';

function getExploredPeriods() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

    return Array.isArray(saved)
      ? saved.filter(index =>
          Number.isInteger(index) &&
          index >= 0 &&
          index < periods.length
        )
      : [];
  } catch (error) {
    return [];
  }
}

function saveExploredPeriods(indices) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(indices));
  } catch (error) {
    console.warn('EUROPA could not save progress in this browser.', error);
  }

  renderProgress();
}


/* =========================================================
   VIRTUAL PASSPORT
   ========================================================= */

function renderProgress() {
  const explored = getExploredPeriods();

  $('#progressText').textContent =
    `${explored.length} / ${periods.length} explored`;

  $('#passportCount').textContent = explored.length;

  $('#progressBar').style.width =
    `${(explored.length / periods.length) * 100}%`;

  if (explored.length === periods.length) {
    $('#passportMessage').textContent =
      'Passport complete — you explored every period!';
  } else if (explored.length > 0) {
    $('#passportMessage').textContent =
      `You have explored ${explored.length} of ${periods.length} periods. Keep going.`;
  } else {
    $('#passportMessage').textContent =
      'Your journey begins here.';
  }

  $('#passportMarks').innerHTML = explored
    .map(index => `<span>${periods[index].title.toUpperCase()}</span>`)
    .join('');

  $$('.period-card').forEach((card, index) => {
    card.classList.toggle('done', explored.includes(index));
  });
}


/* =========================================================
   TIMELINE CARDS
   ========================================================= */

function renderTimeline() {
  $('#timelineList').innerHTML = periods.map((period, index) => `
    <button
      class="period-card"
      type="button"
      data-index="${index}"
      aria-label="Open study card for ${period.title}"
    >
      <img
        class="period-art"
        src="${period.image}"
        alt="${period.caption}"
        loading="lazy"
        onerror="this.style.display='none'"
      >

      <div class="period-card-copy">
        <span class="number">
          ${String(index + 1).padStart(2, '0')} / ${period.art.toUpperCase()}
        </span>

        <h3>${period.title}</h3>
        <p>${period.date}</p>
      </div>

      <span class="arrow" aria-hidden="true">↗</span>
    </button>
  `).join('');
}


/* =========================================================
   STUDY CARD MODAL
   ========================================================= */

function openPeriod(index) {
  const period = periods[index];

  if (!period) return;

  activePeriod = index;

  $('#modalEyebrow').textContent =
    `PERIOD ${String(index + 1).padStart(2, '0')} / ${period.tag}`;

  $('#modalTitle').textContent = period.title;
  $('#modalDate').textContent = period.date;

  const artwork = $('#modalArtwork');

  artwork.style.display = 'block';
  artwork.src = period.image;
  artwork.alt = period.caption;

  $('#modalArtworkCaption').textContent =
    `${period.caption} · Image via Wikimedia Commons`;

  artwork.onerror = () => {
    artwork.style.display = 'none';
  };

  $('#modalDescription').textContent = period.desc;

  $('#modalIdeas').innerHTML = period.ideas
    .map(idea => `<li>${idea}</li>`)
    .join('');

  $('#modalWorks').innerHTML = period.works
    .map(work => `<li>${work}</li>`)
    .join('');

  const explored = getExploredPeriods();

  $('#markExplored').textContent = explored.includes(index)
    ? 'Explored ✓'
    : 'Mark as explored ✓';

  $('#modal').classList.add('open

/* ============================================================
   THIS IS THE ONLY FILE YOU EDIT.

   For each term, fill in:
     image   -> the filename of your photo, e.g. "cohesion.jpg"
                (upload photos into the /images folder)
     caption -> your own 5-sentence caption, in quotes

   The "hint" line is just a reminder of the specimen you planned.
   Delete it or ignore it — it never shows once you write a caption.

   To swap a term: change the "term" text and the "hint".
   ============================================================ */

const COLLECTION = {
  student: "YOUR NAME",
  identifier: "describe your identifier here",

  terms: [

    /* ---------- Unit 1: Chemistry of Life ---------- */
    { unit: 1, term: "Polarity",             image: "", caption: "", hint: "Oil layered on water" },
    { unit: 1, term: "Hydrogen bond",        image: "", caption: "", hint: "Ice cube floating" },
    { unit: 1, term: "Adhesion",             image: "", caption: "", hint: "Meniscus curving up a glass" },
    { unit: 1, term: "Cohesion",             image: "", caption: "", hint: "Water domed over an overfilled rim" },
    { unit: 1, term: "Hydrophobic",          image: "", caption: "", hint: "Water beading on wax paper" },
    { unit: 1, term: "Hydrophilic",          image: "", caption: "", hint: "Paper towel wicking, or sugar dissolving" },
    { unit: 1, term: "Acid",                 image: "", caption: "", hint: "White vinegar" },
    { unit: 1, term: "Base",                 image: "", caption: "", hint: "Baking soda" },
    { unit: 1, term: "Carbohydrate",         image: "", caption: "", hint: "Dry flour, or sugar" },
    { unit: 1, term: "Hydrolysis",           image: "", caption: "", hint: "Dry pasta beside soaked pasta" },
    { unit: 1, term: "DNA / RNA",            image: "", caption: "", hint: "Strawberry DNA extraction" },
    { unit: 1, term: "Lipids",               image: "", caption: "", hint: "Butter or olive oil" },
    { unit: 1, term: "Protein",              image: "", caption: "", hint: "Gluten strands stretching from flour dough" },
    { unit: 1, term: "Enzyme",               image: "", caption: "", hint: "Browned apple half" },
    { unit: 1, term: "Inhibition",           image: "", caption: "", hint: "Vinegar-treated apple half, still pale" },

    /* ---------- Unit 2: Cell Structure and Function ---------- */
    { unit: 2, term: "Prokaryotes",          image: "", caption: "", hint: "Yogurt with live active cultures" },
    { unit: 2, term: "Eukaryotes",           image: "", caption: "", hint: "Mushroom" },
    { unit: 2, term: "Phospholipid",         image: "", caption: "", hint: "Soap bubble" },
    { unit: 2, term: "Diffusion",            image: "", caption: "", hint: "Food coloring spreading in still water" },
    { unit: 2, term: "Osmosis",              image: "", caption: "", hint: "Gummy bear after soaking overnight" },
    { unit: 2, term: "Hypertonic",           image: "", caption: "", hint: "Salted vegetable slices weeping water" },
    { unit: 2, term: "Hypotonic",            image: "", caption: "", hint: "Swollen gummy bear beside a dry one" },

    /* ---------- Unit 3: Cellular Energetics ---------- */
    { unit: 3, term: "Photosynthesis",       image: "", caption: "", hint: "Sunlit leaves" },
    { unit: 3, term: "Chlorophyll",          image: "", caption: "", hint: "Light moss beside dark moss on one trunk" },
    { unit: 3, term: "Autotrophs",           image: "", caption: "", hint: "Any plant making its own food" },
    { unit: 3, term: "Heterotrophs",         image: "", caption: "", hint: "Turkeys or squirrels feeding" },
    { unit: 3, term: "C3 plant",             image: "", caption: "", hint: "Maple or oak" },
    { unit: 3, term: "C4 plant",             image: "", caption: "", hint: "Crabgrass in the lawn" },
    { unit: 3, term: "CAM plant",            image: "", caption: "", hint: "Sedum or jade on a porch" },
    { unit: 3, term: "Fermentation",         image: "", caption: "", hint: "Yeast foaming in warm sugar water" },

    /* ---------- Unit 4: Cell Cycle ---------- */
    { unit: 4, term: "Somatic",              image: "", caption: "", hint: "Skin, leaf tissue, any body cell" },
    { unit: 4, term: "Gamete",               image: "", caption: "", hint: "Whole egg, or pollen on a flower" },
    { unit: 4, term: "Reproduction",         image: "", caption: "", hint: "Sprouting potato, or seed head" },
    { unit: 4, term: "Homologous",           image: "", caption: "", hint: "Structures sharing an origin" },

    /* ---------- Unit 5: Heredity ---------- */
    { unit: 5, term: "Alleles",              image: "", caption: "", hint: "Indian corn — every kernel a genotype" },
    { unit: 5, term: "Laws of probability",  image: "", caption: "", hint: "Mixed bean bag, or a coin toss setup" },
    { unit: 5, term: "X-linked",             image: "", caption: "", hint: "Calico cat" },
    { unit: 5, term: "Polyploidy",           image: "", caption: "", hint: "Banana or strawberry (avoid watermelon/potato)" },

    /* ---------- Unit 6: Gene Expression and Regulation ---------- */
    { unit: 6, term: "Virus",                image: "", caption: "", hint: "Mosaic-patterned or streaked leaf" },
    { unit: 6, term: "Mutation",             image: "", caption: "", hint: "Four-leaf clover, or variegated leaf" },

    /* ---------- Unit 7: Natural Selection ---------- */
    { unit: 7, term: "Adaptation",           image: "", caption: "", hint: "Burrs, thorns, waxy leaf cuticle" },
    { unit: 7, term: "Natural selection",    image: "", caption: "", hint: "Trait that clearly pays off in this habitat" },
    { unit: 7, term: "Analogous",            image: "", caption: "", hint: "Dragonfly wing beside a bird feather" },
    { unit: 7, term: "Species",              image: "", caption: "", hint: "Lichen — one name, two organisms" },

    /* ---------- Unit 8: Ecology ---------- */
    { unit: 8, term: "Population",           image: "", caption: "", hint: "One species, one place, counted" },
    { unit: 8, term: "Dispersion",           image: "", caption: "", hint: "Turkey flock, clumped" },
    { unit: 8, term: "Mutualism",            image: "", caption: "", hint: "Lichen on bark" },
    { unit: 8, term: "Commensalism",         image: "", caption: "", hint: "Moss on a trunk" },
    { unit: 8, term: "Parasitism",           image: "", caption: "", hint: "Powdery mildew, oak gall, or aphids" },
    { unit: 8, term: "Predation",            image: "", caption: "", hint: "Spider web with prey" }

  ]
};

const UNIT_NAMES = {
  1: "Chemistry of Life",
  2: "Cell Structure and Function",
  3: "Cellular Energetics",
  4: "Cell Cycle",
  5: "Heredity",
  6: "Gene Expression",
  7: "Natural Selection",
  8: "Ecology"
};

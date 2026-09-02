// Journal de terrain — récits rédigés sur le terrain, village par village
export interface JournalSection {
  titre?: string;
  paragraphes: string[];
  hashtags?: string[];
}

export interface JournalEntry {
  id: string;
  village: string;
  jour: string;
  region?: string;
  sections: JournalSection[];
  note?: string;
}

export const journalTerrain: JournalEntry[] = [
  {
    id: "ejeda",
    village: "Ejeda",
    jour: "Jour 1",
    region: "Région Atsimo Andrefana",
    sections: [
      {
        titre: "Le jus de canne à sucre",
        paragraphes: [
          "Le broyeur à canne à sucre a été un franc succès au cœur du marché d'Ejeda du vendredi 18 octobre, où en moins d'une demi-journée, nous avons fait goûter et vendu plus de 100 verres d'un jus naturel issu d'une des matières premières les plus répandues dans le Sud de Madagascar : la canne à sucre !",
          "Sans autre ajout que de l'eau de puits pour atténuer le sucre du jus de canne, et du gingembre pour apporter le petit plus à notre jus de canne à sucre 🍹😋 innovant d'Ejeda.",
          "Petit bémol, en cette fin de saison sèche, la canne à sucre venait de Fotadravo et non plus d'Ejeda, mais nous restions dans l'un de nos objectifs qu'est la valorisation des produits locaux 🙂",
          "Dès la sortie sur le chemin, nous étions l'attraction du village, à tel point qu'il était difficile de filmer le jus servi dans le verre à dégustation 😋 du public. Validé, mais on nous a réclamé du jus glacé pour la prochaine fois.",
          "C'est une motivation pour les femmes d'Ampela Vagno d'Ejeda pour remplir la caisse de l'association afin d'acheter un réfrigérateur et un kit d'énergie solaire pour le faire fonctionner dans ce village où nous n'avons que 4h d'électricité par jour.",
        ],
        hashtags: ["valorisationproduitslocaux", "canneasucre", "innovation"],
      },
      {
        titre: "Le réchaud solaire",
        paragraphes: [
          "Nous avons investi dans un réchaud solaire auprès d'ADES pour démarrer les cours de cuisine 🍲 des adhérentes de l'association, à Ejeda. Le pari est qu'il n'y ait plus besoin de charbon ni de petit bois (kitay) pour préparer le repas, une fois ce nouveau fatapera acquis !",
          "Les consignes étaient clairement posées : installer le réchaud en plein soleil 🌞 avec la marmite au centre de la parabole. Suivre la course du soleil pour optimiser le temps de cuisson du contenu de la marmite.",
          "Résultats concluants : nous avons pu cuire quatre doses (kapoaka) de manioc séché en 2h, sans autres apports que le soleil 😎, denrée abondante dans le grand Sud de Madagascar ! où nous cuisions 🥵 nous-mêmes tout simplement à 40 degrés à l'ombre.",
          "Innovation qui nous permet réellement de préserver les forêts 🌴🌵🌳 restantes et de ne pas polluer ! Seul bémol : il est encombrant, donc impossible à transporter de village en village sans risquer de l'abîmer... il en faudrait donc au moins un par village d'intervention 🤔",
          "Que de découvertes pour toutes ce jour-là ! Je me suis sentie comme Géo Trouvetou en zone semi-désertique 😉",
        ],
        hashtags: ["Socialimpact", "ecologicimpact", "Empoweringwomen", "humandevlopement"],
      },
    ],
  },
  {
    id: "ambolamena",
    village: "Ambolamena",
    jour: "Jour 2",
    sections: [
      {
        paragraphes: [
          "Dans ce village du Far West 🤠🐎 où l'on trouve de l'or 💎 depuis quelques années maintenant, des familles entières ont tout quitté pour s'installer dans l'Eldorado... pourtant peu sécurisé et insalubre, comme Ilakaka à ses débuts, ce lieu fait rêver les chercheurs d'or et leur famille qui rassemblent, chaque jour, de la poussière d'or jusqu'à remplir une demi-tasse à café et la revendre aux collecteurs en moto, pour une bouchée de pain. Et rebelote le lendemain jusqu'à ce que LA pépite d'or ✨ leur tombe dans les mains et transforme leur vie 💫",
          "Nous avons tenu notre 1er cours de cuisine, à cuire littéralement avec nos pois du cap réduits en purée à la sauce curry, riz blanc et achard de mangues vertes. La foule était curieuse, et les plats ont ravi les papilles gustatives de ceux qui ont pu acheter une assiette bien fournie à 4 000 ariary !",
          "Preuve a été donnée à la vingtaine de femmes réunies ce jour-là pour adhérer à l'association, qu'il est possible de préparer un plat différent pour se démarquer des autres gargotes avec les mêmes moyens, et attirer la clientèle par la nouveauté et la propreté des équipements, et l'accueil souriant 😁",
        ],
        hashtags: ["womenempowerment", "bienmangerpourpascher", "originaliteentoutesimplicite"],
      },
    ],
    note: "En mai 2025, nous nous sommes retirés de ce village de chercheurs d'or car les membres n'étaient pas dans l'état d'esprit d'investir sur le long terme via l'apprentissage, mais surtout dans l'attente de la pépite d'or pour quitter cette zone transitoire. Le matériel de cuisine fourni par l'association a été utilisé exclusivement dans la gargote de la femme désignée leader, faute de moments de rassemblement et de partage entre les membres. Nous avons donc récupéré le matériel et remis ce qui était en bon état à Ejeda, pour que les femmes impliquées puissent fonctionner plus facilement.",
  },
  {
    id: "gogogogo",
    village: "Gogogogo",
    jour: "Jour 3",
    sections: [
      {
        paragraphes: [
          "Nous nous sommes rendus au marché du lundi dans ce charmant village (à prononcer comme la chanson « Radio Gaga » de Queen) pour y faire la même opération que dans les villages précédents.",
          "Malheureusement, notre femme leader était très enceinte 🤰 — littéralement à deux doigts d'accoucher, car elle a donné naissance 🤱 à sa 3ᵉ fille 👶 dans la nuit après notre rencontre, à domicile — donc nous avons opté de repousser de quelques mois le démarrage des activités de l'association dans ce village, le temps que notre point focal se remette de l'accouchement.",
          "L'échange avec elle nous a permis, encore, de bien garder en tête les conditions de vie de ces femmes 💪💥💖 : E., 25 ans, est bachelière mais n'a pas pu poursuivre ses études supérieures en raison d'une grossesse non désirée, après laquelle son compagnon l'a rendue à ses parents, la jugeant trop indépendante dans son mode de fonctionnement. À ce jour, elle tient d'une main de fer dans un gant de velours une gargote qui ne désemplit pas. Elle donne du travail à ses jeunes sœurs et à sa mère au sein de cette gargote pour la seconder, surtout dans son état de grossesse. Le père de ce futur enfant n'était plus dans sa vie non plus, et elle se doit d'assumer l'éducation de ses enfants sans compter sur personne d'autre qu'elle-même. Interrompue à plusieurs reprises pendant notre échange par des personnes venant la solliciter, elle restait souriante et confiante en l'avenir, dans l'humble demeure où le lit, les marmites et le point d'eau pour la toilette étaient condensés en une seule pièce.",
          "Nous avons fait un petit tour du marché avant de rentrer à Ejeda, et avons pu ramener en voiture de nombreuses femmes qui avaient vendu toute leur marchandise du jour et s'apprêtaient à faire 20 km à pied, en plein midi, pour rentrer chez elles.",
          "Journée riche d'échanges, de rires, d'espoirs, qui nous ont accompagnés dans ce paysage si typique du Sud de Mada, auquel nous sommes attachés.",
        ],
        hashtags: ["jaimemaville", "womenempowerment", "EspoirPourDemain", "résilience"],
      },
    ],
    note: "En mai 2025, la remise des équipements pour les 3 AGR a été faite entre les mains d'Emilienne et de la femme du maire, nommées femmes leader par les autres membres. Nous avons rencontré le maire de la ville pour obtenir sa bénédiction et son feu vert, afin que les femmes puissent vendre le fruit de leur travail au marché.",
  },
];

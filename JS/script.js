//  write code to pull objects/table     // study FETCH

// Table of objects

let legumes = 
[
    {
      ID: 1,
      LEGUMES: "AIL",
      IMAGE3: "../images/Potager-all légumes/01-Ail.png",
      DEFINITION: "Alliciée originaire d'Asie, cultivé depuis des siècles et consommé pour ses vertus stimulantes.Plante riche en sels minéraux qui aime les sols légers, sablonneux et peu humide. Exposition ensoleillée",
      AASSOCIER: "carotte, concombre, oignon, fraisier, tomate, épinard, omme de terre, navet",
      NEPASASSOCIER: "chou, haricot"
    },
    {
      ID: 2,
      LEGUMES: "ARTICHAUT",
      IMAGE3: "../images/Potager-all légumes/02-Artichaut.png",
      DEFINITION: "Plante vivace d'origine méditérranéenne qui craint le gel et l'excès d'humidité. Aime les sols limoneux,frais,profonds et bien drainants.",
      AASSOCIER: "Betterave, Chou, haricot, laitue, poireau, tomate",
      NEPASASSOCIER: "Estragon, persil, petit-pois, salsifis"
    },
    {
      ID: 3,
      LEGUMES: "ASPERGE",
      IMAGE3: "../images/Potager-all légumes/03-Asperge.png",
      DEFINITION: "Plante vivace de culture très ancienne originaire d'Europe et d'Asie. L'asperge est très riche en fibres, contient de nombreux sels minéraux, de la vitamine C ainsi que du carotène. Aime les sols légers, sablonneux et drainés.",
      AASSOCIER: "persil, poireau, tomate",
      NEPASASSOCIER: "ail, chou, échalote, oignon, poirée"
    },
    {
      ID: 4,
      LEGUMES: "AUBERGINE",
      IMAGE3: "../images/Potager-all légumes/05-Aubergine.png",
      DEFINITION: "L'aubergine est un légume très ancien originaire d'Inde. Sa culture nécessite beaucoup de chaleur( minimum 15°) car elle est rès frileuse. Riche en vitamine B et sels minéraux, elle aime les sols profonds, humifères et drainés.Exposition ensoleillée et abritée.",
      AASSOCIER: "haricot, tomate, pois, piment, thym, persil, estragon",
      NEPASASSOCIER: "oignon, pomme de terre"
    },
    {
      ID: 5,
      LEGUMES: "BETTE",
      IMAGE3: "../images/Potager-all légumes/05-Bette1.png",
      DEFINITION: "Plante originaire de Méditérrannée connue depuis l'Antiquité dont la consommation au Moyen-âge fut très importante en Europe. La bette est une très proche cousine de la betterave. Elle aime les sols frais, humifères et drainés.Exposition ensoleillée.",
      AASSOCIER: "carotte",
      NEPASASSOCIER: "betterave, épinard"
    },
    {
      ID: 6,
      LEGUMES: "BETTERAVE",
      IMAGE3: "betterave rouge",
      DEFINITION: "La betterave potagère aussi appelée betterave rouge est originaire d'Europe du sud et fut très consommée par les Romains. Elle se consomme rapée crue en salade ou cuite.Ses feuilles, riches en vitamine A se consomment comme les épinards. Elle aime les sols légers, sablonneux et drainés. Exposition ensoleillée.",
      AASSOCIER: "céleri, chou, laitue, haricot, oignon, radis",
      NEPASASSOCIER: "épinard, bette"
    },
    // {
    //   ID: 7,
    //   LEGUMES: "BLETTE",
    //   IMAGE3: "../images/Potager-all légumes/07-Blette.png",
    //   DEFINITION: "",
    //   AASSOCIER: "carotte, chou-rave, navet, radis, haricot nain",
    //   NEPASASSOCIER: "épinard"
    // },
    {
      ID: 8,
      LEGUMES: "BROCOLI",
      IMAGE3: "../images/Potager-all légumes/08-Brocoli.png",
      DEFINITION: "Le brocoli est une variété horticole d'un chou d'origine italienne.Le mot brocoli vient de \"brocco\" qui signifie \"pousse\" en italien.De culture très ancienne, les Romains le connaissaient déjà, c'est seulement vers le 16ème siècle qu'il se répand réellement. Riche en vitamien C et sels minéraux. Aime les sols frais et drainés.Exposition mi ombre à ensoleillée.",
      AASSOCIER: "concombres, pommes de terre, céleri, betteraves, menthe romarin",
      NEPASASSOCIER: "fraisiers, radis, tomates"
    },
    {
      ID: 9,
      LEGUMES: "CAROTTE",
      IMAGE3: "../images/Potager-all légumes/09-Carotte.png",
      DEFINITION: "La carotte est principalement originaire du bassin méditérranéen. Cultivées depuis des siècles les carottes étaient à l'origine blanches, jaunes ou violettes.La carotte renferme une grande quantité de vitamines, sels minéraux, d'oligoélémnets ainsi que des caroténoides.Aime les sols légers, humifères, sablonneux et drainés.Exposition mi ombre à ensoleillée.",
      AASSOCIER: "ail, aneth, endive haricot, laitue, oignon, petit pois, oireau radis salade tomate ciboulette",
      NEPASASSOCIER: "betterave, menthe"
    },
    {
      ID: 10,
      LEGUMES: "CÉLERI",
      IMAGE3: "../images/Potager-all légumes/10-Céleri.png",
      DEFINITION: "",
      AASSOCIER: "choux, épinard, haricot, poireau, pois, tomate",
      NEPASASSOCIER: "salade, pomme de terre"
    },
    {
      ID: 11,
      LEGUMES: "CHOU",
      IMAGE3: "../images/Potager-all légumes/11-Chou.png",
      DEFINITION: "",
      AASSOCIER: "betterave, haricot, laitue, petit pois, salade, tomate",
      NEPASASSOCIER: "autres variétés de chou, ail"
    },
    {
      ID: 12,
      LEGUMES: "CHOU-FLEUR",
      IMAGE3: "../images/Potager-all légumes/12-Chou-fleur.png",
      DEFINITION: "",
      AASSOCIER: "céleri, tomate, oignon, salade",
      NEPASASSOCIER: "chou"
    },
    {
      ID: 13,
      LEGUMES: "CONCOMBRE",
      IMAGE3: "../images/Potager-all légumes/13-Concombre.png",
      DEFINITION: "",
      AASSOCIER: "aneth, chou, haricot, laitue, oignon",
      NEPASASSOCIER: "radis"
    },
    {
      ID: 14,
      LEGUMES: "COURGE",
      IMAGE3: "../images/Potager-all légumes/14-Courge.png",
      DEFINITION: "",
      AASSOCIER: "haricot, laitue, maïs, navet",
      NEPASASSOCIER: "pois"
    },
    {
      ID: 15,
      LEGUMES: "COURGETTE",
      IMAGE3: "../images/Potager-all légumes/15 Courgette.png",
      DEFINITION: "",
      AASSOCIER: "ciboulette, échalote, haricot, oignon, petit pois",
      NEPASASSOCIER: "concombre"
    },
    {
      ID: 16,
      LEGUMES: "CORNICHON",
      IMAGE3: "../images/Potager-all légumes/16-Cornichon.png",
      DEFINITION: "",
      AASSOCIER: "basilic, chou, haricot, laitue, œillet d'Inde, oignon, pois",
      NEPASASSOCIER: "melon, pomme de terre, tomate"
    },
    {
      ID: 17,
      LEGUMES: "ENDIVE",
      IMAGE3: "../images/Potager-all légumes/17-Endive.png",
      DEFINITION: "",
      AASSOCIER: "Carotte, navet, poireau, radis",
      NEPASASSOCIER: "artichaut, estragon, laitue, salsifis, topinambour"
    },
    {
      ID: 18,
      LEGUMES: "ÉPINARD",
      IMAGE3: "../images/Potager-all légumes/18-épinard.png",
      DEFINITION: "",
      AASSOCIER: "haricot, petit pois, fraisier, chou, radis, salade, tomate",
      NEPASASSOCIER: "betterave rouge"
    },
    {
      ID: 19,
      LEGUMES: "FENOUIL",
      IMAGE3: "../images/Potager-all légumes/19-Fenouil.png",
      DEFINITION: "",
      AASSOCIER: "céleri, navet, poireau",
      NEPASASSOCIER: "chou, tomate"
    },
    {
      ID: 20,
      LEGUMES: "FÈVE",
      IMAGE3: "../images/Potager-all légumes/20-Fève.png",
      DEFINITION: "",
      AASSOCIER: "tomate, fraise, courge",
      NEPASASSOCIER: "ail, ciboulette"
    },
    {
      ID: 21,
      LEGUMES: "FRAISIER",
      IMAGE3: "../images/Potager-all légumes/21-Fraisier.png",
      DEFINITION: "",
      AASSOCIER: "ail, laitue, oignon, poireau, échalote, persil, sauge",
      NEPASASSOCIER: "chou"
    },
    {
      ID: 22,
      LEGUMES: "HARICOT",
      IMAGE3: "../images/Potager-all légumes/22-Haricot.png",
      DEFINITION: "",
      AASSOCIER: "carotte, chou, fraisier, laitue, aubergine, céleri, courgette, poireau, radis, pomme de terre",
      NEPASASSOCIER: "ail, oignon, pois, poireau"
    },
    {
      ID: 23,
      LEGUMES: "LAITUE",
      IMAGE3: "../images/Potager-all légumes/23-Laitue.png",
      DEFINITION: "",
      AASSOCIER: "betterave, carotte, cerfeuil, chou, concombre/cornichon, fraisier haricot radis",
      NEPASASSOCIER: "tournesol"
    },
    {
      ID: 24,
      LEGUMES: "MÂCHE",
      IMAGE3: "../images/Potager-all légumes/24-Mâche.png",
      DEFINITION: "",
      AASSOCIER: "ail, basilic, haricot, pois, radis",
      NEPASASSOCIER: "chou, épinard, salade"
    },
    {
      ID: 25,
      LEGUMES: "MAIS",
      IMAGE3: "../images/Potager-all légumes/25-Maïs.png",
      DEFINITION: "",
      AASSOCIER: "concombre, courge, courgette",
      NEPASASSOCIER: "betterave"
    },
    {
      ID: 26,
      LEGUMES: "MELON",
      IMAGE3: "../images/Potager-all légumes/26-Melon.png",
      DEFINITION: "",
      AASSOCIER: "maïs, tournesol, potiron",
      NEPASASSOCIER: "concombre"
    },
    {
      ID: 27,
      LEGUMES: "NAVET",
      IMAGE3: "../images/Potager-all légumes/27-Navet.png",
      DEFINITION: "",
      AASSOCIER: "ail, céleri, ciboulette, épinard, petit pois",
      NEPASASSOCIER: "radis"
    },
    {
      ID: 28,
      LEGUMES: "OIGNON",
      IMAGE3: "../images/Potager-all légumes/28-Oignon.png",
      DEFINITION: "",
      AASSOCIER: "aneth, ail, carotte, concombre, salade, tomate",
      NEPASASSOCIER: "haricot, petit pois, poireau, chou, fève"
    },
    {
      ID: 29,
      LEGUMES: "PANAIS",
      IMAGE3: "../images/Potager-all légumes/29-Panais.png",
      DEFINITION: "",
      AASSOCIER: "Ail, laitue, navet, oignon, petit-pois, radis, salsifis, tomate",
      NEPASASSOCIER: "Aneth, bette, carotte, céleri, fenouil, persil, pomme de terre"
    },
    {
      ID: 30,
      LEGUMES: "PETIT-POIS",
      IMAGE3: "../images/Potager-all légumes/30-petit-pois.png",
      DEFINITION: "",
      AASSOCIER: "carotte, épinard, radis, chou, mâche, pomme de terre",
      NEPASASSOCIER: "ail, échalote, oignon, tomate"
    },
    {
      ID: 31,
      LEGUMES: "PIMENT",
      IMAGE3: "../images/Potager-all légumes/31-Piment.png",
      DEFINITION: "",
      AASSOCIER: "basilic, carotte, oignon",
      NEPASASSOCIER: "fenouil"
    },
    {
      ID: 32,
      LEGUMES: "POIREAU",
      IMAGE3: "../images/Potager-all légumes/32-Poireau.png",
      DEFINITION: "",
      AASSOCIER: "carotte, fraisier, épinard, tomate",
      NEPASASSOCIER: "haricot, pois"
    },
    {
      ID: 33,
      LEGUMES: "POMME DE TERRE",
      IMAGE3: "../images/Potager-all légumes/33-pomme de terre.png",
      DEFINITION: "",
      AASSOCIER: "ail, haricot, pois",
      NEPASASSOCIER: "aubergine, courgette, radis, tomate"
    },
    {
      ID: 34,
      LEGUMES: "RADIS",
      IMAGE3: "../images/Potager-all légumes/34-Radis.png",
      DEFINITION: "",
      AASSOCIER: "carotte, fraisier, haricot, salade, tomate, cresson",
      NEPASASSOCIER: "cerfeuil, concombre"
    },
    {
      ID: 35,
      LEGUMES: "SALADE",
      IMAGE3: "../images/Potager-all légumes/35-Salade.png",
      DEFINITION: "",
      AASSOCIER: "aneth, betterave, concombre, chou, épinard, haricot, etit ois, radis, tomate",
      NEPASASSOCIER: "persil, tournesol"
    },
    {
      ID: 36,
      LEGUMES: "TOMATE",
      IMAGE3: "../images/Potager-all légumes/36-tomates.png",
      DEFINITION: "",
      AASSOCIER: "carotte, chou, épinard, oignon, persil, poireau, salade, basilic",
      NEPASASSOCIER: "betterave, chou rouge, fenouil, pois"
    }
  ]


const modalbody = document.getElementsByClassName("modal-body");
  console.log(modalbody[0]);

  for (let i = 0; i < legumes.length; i++) {
    modalbody[i].innerHTML =`
    <p class="defmodal">${legumes[i].DEFINITION}</p>
    <p class="modalsubtitle">À ASSOCIER</p>
    <p class="defmodal">${legumes[i].AASSOCIER}</p>
    <p class="modalsubtitle">NE PAS ASSOCIER</p>
    <p class="defmodal">${legumes[i].NEPASASSOCIER}</p>
    ` 
  }


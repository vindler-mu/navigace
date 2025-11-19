// Databáze knihovních signatur
const knihovniBaze = [
  {
    "regal": "VZ1",
    "signatura": "55.01",
    "popis": "Filozofie vědy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "filozofie vědy, epistemologie, metodologie, philosophy of science, scientific method",
    "keywords": [
      "filozofie vědy",
      "epistemologie",
      "metodologie",
      "philosophy of science",
      "scientific method"
    ]
  },
  {
    "regal": "VZ1",
    "signatura": "55.011",
    "popis": "Filozofické aspekty geověd; Geografické myšlení",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "filozofie geologie, filozofie geografie, geografické myšlení, geofilozofie, teorie geověd",
    "keywords": [
      "filozofie geologie",
      "filozofie geografie",
      "geografické myšlení",
      "geofilozofie",
      "teorie geověd"
    ]
  },
  {
    "regal": "VZ1",
    "signatura": "55.012",
    "popis": "Dějiny geologie a geografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "historie geologie, historie geografie, dějiny vědy, historická geologie, geologové, geografové",
    "keywords": [
      "historie geologie",
      "historie geografie",
      "dějiny vědy",
      "historická geologie",
      "geologové",
      "geografové"
    ]
  },
  {
    "regal": "VZ1",
    "signatura": "55.013",
    "popis": "Biografie geologů a geografů",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "biografie, životopisy, geologové, geografové, vědci, osobnosti vědy",
    "keywords": [
      "biografie",
      "životopisy",
      "geologové",
      "geografové",
      "vědci",
      "osobnosti vědy"
    ]
  },
  {
    "regal": "VZ1",
    "signatura": "55.02",
    "popis": "Akademické dovednosti",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "akademické psaní, výzkumné dovednosti, studijní techniky, vědecká práce, metodika",
    "keywords": [
      "akademické psaní",
      "výzkumné dovednosti",
      "studijní techniky",
      "vědecká práce",
      "metodika"
    ]
  },
  {
    "regal": "VZ1",
    "signatura": "55.021",
    "popis": "Český jazyk",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "čeština, český jazyk, gramatika, pravopis, stylistika, odborný jazyk",
    "keywords": [
      "čeština",
      "český jazyk",
      "gramatika",
      "pravopis",
      "stylistika",
      "odborný jazyk"
    ]
  },
  {
    "regal": "VZ1",
    "signatura": "55.022",
    "popis": "Překladové slovníky",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "slovníky, překlady, terminologie, jazykové slovníky, dictionary",
    "keywords": [
      "slovníky",
      "překlady",
      "terminologie",
      "jazykové slovníky",
      "dictionary"
    ]
  },
  {
    "regal": "VZ1",
    "signatura": "55.023",
    "popis": "Překladové slovníky věd o Zemi",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geologické slovníky, geografické slovníky, geovědní terminologie, odborná terminologie",
    "keywords": [
      "geologické slovníky",
      "geografické slovníky",
      "geovědní terminologie",
      "odborná terminologie"
    ]
  },
  {
    "regal": "VZ1",
    "signatura": "55.024",
    "popis": "Obecné encyklopedie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "encyklopedie, všeobecné znalosti, reference, encyclopedia, lexikon",
    "keywords": [
      "encyklopedie",
      "všeobecné znalosti",
      "reference",
      "encyclopedia",
      "lexikon"
    ]
  },
  {
    "regal": "VZ1",
    "signatura": "55.02",
    "popis": "Bibliografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "bibliografie, soupis literatury, knihovnictví, bibliography, literatura",
    "keywords": [
      "bibliografie",
      "soupis literatury",
      "knihovnictví",
      "bibliography",
      "literatura"
    ]
  },
  {
    "regal": "VZ1",
    "signatura": "55.022",
    "popis": "Bibliografie geologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geologická bibliografie, geologická literatura, soupis geologických prací",
    "keywords": [
      "geologická bibliografie",
      "geologická literatura",
      "soupis geologických prací"
    ]
  },
  {
    "regal": "VZ1",
    "signatura": "55.023",
    "popis": "Bibliografie geografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geografická bibliografie, geografická literatura, soupis geografických prací",
    "keywords": [
      "geografická bibliografie",
      "geografická literatura",
      "soupis geografických prací"
    ]
  },
  {
    "regal": "VZ1",
    "signatura": "55.02",
    "popis": "Zpracování dat",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "data processing, analýza dat, zpracování údajů, statistika, výpočetní metody",
    "keywords": [
      "data processing",
      "analýza dat",
      "zpracování údajů",
      "statistika",
      "výpočetní metody"
    ]
  },
  {
    "regal": "VZ1",
    "signatura": "55.022",
    "popis": "Kvalitativní metody",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "kvalitativní výzkum, kvalitativní analýza, výzkumné metody, metodologie",
    "keywords": [
      "kvalitativní výzkum",
      "kvalitativní analýza",
      "výzkumné metody",
      "metodologie"
    ]
  },
  {
    "regal": "VZ1",
    "signatura": "55.023",
    "popis": "Matematické metody",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "matematika, matematické modelování, numerické metody, kvantitativní analýza",
    "keywords": [
      "matematika",
      "matematické modelování",
      "numerické metody",
      "kvantitativní analýza"
    ]
  },
  {
    "regal": "VZ1",
    "signatura": "55.022",
    "popis": "Metody užívané v geologii",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geologické metody, terénní geologie, laboratorní metody, geologický výzkum",
    "keywords": [
      "geologické metody",
      "terénní geologie",
      "laboratorní metody",
      "geologický výzkum"
    ]
  },
  {
    "regal": "VZ1",
    "signatura": "55.023",
    "popis": "Metody užívané v geografii",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geografické metody, terénní geografie, mapování, geografický výzkum",
    "keywords": [
      "geografické metody",
      "terénní geografie",
      "mapování",
      "geografický výzkum"
    ]
  },
  {
    "regal": "VZ2",
    "signatura": "55.06",
    "popis": "Výuka věd o Zemi",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "didaktika, vzdělávání, výuka geologie, výuka geografie, pedagogika",
    "keywords": [
      "didaktika",
      "vzdělávání",
      "výuka geologie",
      "výuka geografie",
      "pedagogika"
    ]
  },
  {
    "regal": "VZ2",
    "signatura": "55.061",
    "popis": "Didaktika věd o Zemi",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "didaktika geologie, didaktika geografie, vyučování, metodika výuky",
    "keywords": [
      "didaktika geologie",
      "didaktika geografie",
      "vyučování",
      "metodika výuky"
    ]
  },
  {
    "regal": "VZ2",
    "signatura": "55.062",
    "popis": "Učebnice geologie pro základní a střední školy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "učebnice, základní škola, střední škola, geologie pro školy, výuka geologie",
    "keywords": [
      "učebnice",
      "základní škola",
      "střední škola",
      "geologie pro školy",
      "výuka geologie"
    ]
  },
  {
    "regal": "VZ2",
    "signatura": "55.063",
    "popis": "Učebnice ekologie a životního prostředí",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "ekologie, životní prostředí, environmentalistika, ecology, environment, učebnice",
    "keywords": [
      "ekologie",
      "životní prostředí",
      "environmentalistika",
      "ecology",
      "environment",
      "učebnice"
    ]
  },
  {
    "regal": "VZ2",
    "signatura": "55.064",
    "popis": "Československé učebnice a příručky zeměpisu a geografie pro základní a střední školy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "zeměpis, geografie, učebnice, Československo, školní geografie",
    "keywords": [
      "zeměpis",
      "geografie",
      "učebnice",
      "Československo",
      "školní geografie"
    ]
  },
  {
    "regal": "VZ2",
    "signatura": "55.065",
    "popis": "České učebnice a příručky zeměpisu/geografie pro ZŠ a nižší ročníky gymnázia",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "zeměpis, základní škola, gymnázium, učebnice, školní zeměpis",
    "keywords": [
      "zeměpis",
      "základní škola",
      "gymnázium",
      "učebnice",
      "školní zeměpis"
    ]
  },
  {
    "regal": "VZ2",
    "signatura": "55.066",
    "popis": "České učebnice a příručky zeměpisu/geografie pro střední školy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "zeměpis, střední škola, gymnázium, učebnice, školní geografie",
    "keywords": [
      "zeměpis",
      "střední škola",
      "gymnázium",
      "učebnice",
      "školní geografie"
    ]
  },
  {
    "regal": "VZ2",
    "signatura": "55.067",
    "popis": "Zahraniční učebnice a příručky zeměpisu/geografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "zahraniční učebnice, geografie, zeměpis, foreign textbooks, international",
    "keywords": [
      "zahraniční učebnice",
      "geografie",
      "zeměpis",
      "foreign textbooks",
      "international"
    ]
  },
  {
    "regal": "VZ2",
    "signatura": "55.068",
    "popis": "Příručka a geografické tabulky",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "příručky, tabulky, geografická data, reference, handbook, geografické údaje",
    "keywords": [
      "příručky",
      "tabulky",
      "geografická data",
      "reference",
      "handbook",
      "geografické údaje"
    ]
  },
  {
    "regal": "VZ2",
    "signatura": "55.069",
    "popis": "Vlastivěda a regionální učebnice",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "vlastivěda, regionální geografie, místopis, local geography, regional studies",
    "keywords": [
      "vlastivěda",
      "regionální geografie",
      "místopis",
      "local geography",
      "regional studies"
    ]
  },
  {
    "regal": "VZ3",
    "signatura": "550-553",
    "popis": "Geologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geologie, geology, vědy o Zemi, earth sciences, geologické vědy",
    "keywords": [
      "geologie",
      "geology",
      "vědy o Zemi",
      "earth sciences",
      "geologické vědy"
    ]
  },
  {
    "regal": "VZ3",
    "signatura": "550.1",
    "popis": "Všeobecná geologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "obecná geologie, základy geologie, general geology, úvod do geologie",
    "keywords": [
      "obecná geologie",
      "základy geologie",
      "general geology",
      "úvod do geologie"
    ]
  },
  {
    "regal": "VZ3",
    "signatura": "550.11",
    "popis": "Kosmická geologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "planetologie, astrobiologie, космическая геология, planetary geology, měsíc, planety",
    "keywords": [
      "planetologie",
      "astrobiologie",
      "космическая геология",
      "planetary geology",
      "měsíc",
      "planety"
    ]
  },
  {
    "regal": "VZ3",
    "signatura": "550.12",
    "popis": "Planeta Země",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "Země, planeta, earth, geologie Země, stavba Země, vnitřní stavba",
    "keywords": [
      "Země",
      "planeta",
      "earth",
      "geologie Země",
      "stavba Země",
      "vnitřní stavba"
    ]
  },
  {
    "regal": "VZ3",
    "signatura": "550.13",
    "popis": "Vulkanologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "sopky, vulkanismus, volcanology, erupce, láva, magma, vulkány",
    "keywords": [
      "sopky",
      "vulkanismus",
      "volcanology",
      "erupce",
      "láva",
      "magma",
      "vulkány"
    ]
  },
  {
    "regal": "VZ3",
    "signatura": "550.14",
    "popis": "Sedimentologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "sedimenty, sedimentární horniny, sedimentace, sedimentology, usazeniny",
    "keywords": [
      "sedimenty",
      "sedimentární horniny",
      "sedimentace",
      "sedimentology",
      "usazeniny"
    ]
  },
  {
    "regal": "VZ3",
    "signatura": "550.15",
    "popis": "Mořská geologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "mořské dno, oceány, marine geology, oceánská geologie, moře",
    "keywords": [
      "mořské dno",
      "oceány",
      "marine geology",
      "oceánská geologie",
      "moře"
    ]
  },
  {
    "regal": "VZ3",
    "signatura": "550.16",
    "popis": "Karsologie a speologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "kras, jeskyně, speleologie, karst, caves, krápníky, jeskynní systémy",
    "keywords": [
      "kras",
      "jeskyně",
      "speleologie",
      "karst",
      "caves",
      "krápníky",
      "jeskynní systémy"
    ]
  },
  {
    "regal": "VZ3",
    "signatura": "550.17",
    "popis": "Glaciologie a kryologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "ledovce, glaciologie, sníh, led, glaciers, permafrost, kryosféra",
    "keywords": [
      "ledovce",
      "glaciologie",
      "sníh",
      "led",
      "glaciers",
      "permafrost",
      "kryosféra"
    ]
  },
  {
    "regal": "VZ3",
    "signatura": "550.2",
    "popis": "Tektonika; strukturní geologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "tektonika, strukturní geologie, deformace, tectonics, zlomy, vrásy",
    "keywords": [
      "tektonika",
      "strukturní geologie",
      "deformace",
      "tectonics",
      "zlomy",
      "vrásy"
    ]
  },
  {
    "regal": "VZ3",
    "signatura": "550.21",
    "popis": "Směrová analýza",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "strukturní analýza, orientace struktur, structural analysis, měření",
    "keywords": [
      "strukturní analýza",
      "orientace struktur",
      "structural analysis",
      "měření"
    ]
  },
  {
    "regal": "VZ3",
    "signatura": "550.22",
    "popis": "Napjatost a deformace hornin",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "mechanika hornin, napětí, deformace, stress, strain, rheologie",
    "keywords": [
      "mechanika hornin",
      "napětí",
      "deformace",
      "stress",
      "strain",
      "rheologie"
    ]
  },
  {
    "regal": "VZ3",
    "signatura": "550.23",
    "popis": "Mikrotektonika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "mikrostruktury, drobné struktury, thin sections, mikrofotografie",
    "keywords": [
      "mikrostruktury",
      "drobné struktury",
      "thin sections",
      "mikrofotografie"
    ]
  },
  {
    "regal": "VZ3",
    "signatura": "550.24",
    "popis": "Drobné a regionální struktury",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "struktury, geologické struktury, zlomy, vrásy, regional structures",
    "keywords": [
      "struktury",
      "geologické struktury",
      "zlomy",
      "vrásy",
      "regional structures"
    ]
  },
  {
    "regal": "VZ4",
    "signatura": "550.25",
    "popis": "Geologické mapování",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "mapování, geologické mapy, terénní geologie, field geology, mapping",
    "keywords": [
      "mapování",
      "geologické mapy",
      "terénní geologie",
      "field geology",
      "mapping"
    ]
  },
  {
    "regal": "VZ4",
    "signatura": "550.26",
    "popis": "Geotektonika; stavba zemské kůry",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geotektonika, litosféra, zemská kůra, geotectonics, plate tectonics",
    "keywords": [
      "geotektonika",
      "litosféra",
      "zemská kůra",
      "geotectonics",
      "plate tectonics"
    ]
  },
  {
    "regal": "VZ4",
    "signatura": "550.262",
    "popis": "Desková tektonika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "deskové pohyby, plate tectonics, tektonika desek, litoférické desky",
    "keywords": [
      "deskové pohyby",
      "plate tectonics",
      "tektonika desek",
      "litoférické desky"
    ]
  },
  {
    "regal": "VZ4",
    "signatura": "550.3",
    "popis": "Geofyzika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geofyzika, geophysics, fyzika Země, geofyzikální metody",
    "keywords": [
      "geofyzika",
      "geophysics",
      "fyzika Země",
      "geofyzikální metody"
    ]
  },
  {
    "regal": "VZ4",
    "signatura": "550.31",
    "popis": "Seismologie a seismika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "zemětřesení, seismologie, seismika, seismology, earthquakes, seizmické vlny",
    "keywords": [
      "zemětřesení",
      "seismologie",
      "seismika",
      "seismology",
      "earthquakes",
      "seizmické vlny"
    ]
  },
  {
    "regal": "VZ4",
    "signatura": "550.32",
    "popis": "Magnetika; magnetometrie; geomagnetismus",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "magnetismus, geomagnetismus, magnetické pole, magnetometry, magnetika",
    "keywords": [
      "magnetismus",
      "geomagnetismus",
      "magnetické pole",
      "magnetometry",
      "magnetika"
    ]
  },
  {
    "regal": "VZ4",
    "signatura": "550.33",
    "popis": "Gravimetrie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "gravitace, tíhové pole, gravimetry, gravity, gravimeters",
    "keywords": [
      "gravitace",
      "tíhové pole",
      "gravimetry",
      "gravity",
      "gravimeters"
    ]
  },
  {
    "regal": "VZ4",
    "signatura": "550.34",
    "popis": "Elektrika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geoelektrika, elektrické metody, resistivity, geoelectrics",
    "keywords": [
      "geoelektrika",
      "elektrické metody",
      "resistivity",
      "geoelectrics"
    ]
  },
  {
    "regal": "VZ4",
    "signatura": "550.35",
    "popis": "Termika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geotermie, tepelný tok, heat flow, geothermal, teplota Země",
    "keywords": [
      "geotermie",
      "tepelný tok",
      "heat flow",
      "geothermal",
      "teplota Země"
    ]
  },
  {
    "regal": "VZ4",
    "signatura": "550.36",
    "popis": "Radiometrie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "radioaktivita, radiometrické metody, radiometry, radioactive dating",
    "keywords": [
      "radioaktivita",
      "radiometrické metody",
      "radiometry",
      "radioactive dating"
    ]
  },
  {
    "regal": "VZ4",
    "signatura": "550.37",
    "popis": "Karotáž",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "vrty, logging, well logging, geofyzikální měření ve vrtech",
    "keywords": [
      "vrty",
      "logging",
      "well logging",
      "geofyzikální měření ve vrtech"
    ]
  },
  {
    "regal": "VZ4",
    "signatura": "550.4",
    "popis": "Inženýrská geologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "inženýrská geologie, geotechnika, engineering geology, aplikovaná geologie",
    "keywords": [
      "inženýrská geologie",
      "geotechnika",
      "engineering geology",
      "aplikovaná geologie"
    ]
  },
  {
    "regal": "VZ4",
    "signatura": "550.41",
    "popis": "Mechanika zemin",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "půdní mechanika, soil mechanics, základy, geotechnika",
    "keywords": [
      "půdní mechanika",
      "soil mechanics",
      "základy",
      "geotechnika"
    ]
  },
  {
    "regal": "VZ4",
    "signatura": "550.42",
    "popis": "Sesuvy a gravitační pohyby",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "svahové pohyby, landslides, sesuvy, slope stability, nestabilita svahů",
    "keywords": [
      "svahové pohyby",
      "landslides",
      "sesuvy",
      "slope stability",
      "nestabilita svahů"
    ]
  },
  {
    "regal": "VZ4",
    "signatura": "550.43",
    "popis": "Zakládání staveb a základové půdy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "základy, foundation engineering, zakládání, geotechnika, stavební práce",
    "keywords": [
      "základy",
      "foundation engineering",
      "zakládání",
      "geotechnika",
      "stavební práce"
    ]
  },
  {
    "regal": "VZ5",
    "signatura": "551.1",
    "popis": "Paleontologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "fosilie, zkameněliny, paleontology, prehistoric life, vyhynulé organismy",
    "keywords": [
      "fosilie",
      "zkameněliny",
      "paleontology",
      "prehistoric life",
      "vyhynulé organismy"
    ]
  },
  {
    "regal": "VZ5",
    "signatura": "551.11",
    "popis": "Metody v paleontologii",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "paleontologické metody, preparace, fosilie, metodika, tafonomie",
    "keywords": [
      "paleontologické metody",
      "preparace",
      "fosilie",
      "metodika",
      "tafonomie"
    ]
  },
  {
    "regal": "VZ5",
    "signatura": "551.12",
    "popis": "Paleoekologie a tafonomie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "paleoekologie, tafonomie, fosilie, prostředí, taphonomy, paleoecology",
    "keywords": [
      "paleoekologie",
      "tafonomie",
      "fosilie",
      "prostředí",
      "taphonomy",
      "paleoecology"
    ]
  },
  {
    "regal": "VZ5",
    "signatura": "551.13",
    "popis": "Evoluce",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "evoluce, evolution, fylogeneze, Darwin, přírodní výběr, vývoj",
    "keywords": [
      "evoluce",
      "evolution",
      "fylogeneze",
      "Darwin",
      "přírodní výběr",
      "vývoj"
    ]
  },
  {
    "regal": "VZ5",
    "signatura": "551.14",
    "popis": "Mikropaleontologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "mikrofosilie, foraminifera, micropaleontology, plankton, ostrakodi",
    "keywords": [
      "mikrofosilie",
      "foraminifera",
      "micropaleontology",
      "plankton",
      "ostrakodi"
    ]
  },
  {
    "regal": "VZ5",
    "signatura": "551.15",
    "popis": "Paleobotanika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "fosilní rostliny, paleobotany, prehistoric plants, pollen, spory",
    "keywords": [
      "fosilní rostliny",
      "paleobotany",
      "prehistoric plants",
      "pollen",
      "spory"
    ]
  },
  {
    "regal": "VZ5",
    "signatura": "551.16",
    "popis": "Zoopaleontologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "fosilní živočichové, zvířata, zoopaleontology, prehistoric animals",
    "keywords": [
      "fosilní živočichové",
      "zvířata",
      "zoopaleontology",
      "prehistoric animals"
    ]
  },
  {
    "regal": "VZ5",
    "signatura": "551.161",
    "popis": "Zoopaleontologie měkkýšů (Paleomalakologie)",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "mlži, plži, amoniti, mollusks, belemniti, fosilní měkkýši",
    "keywords": [
      "mlži",
      "plži",
      "amoniti",
      "mollusks",
      "belemniti",
      "fosilní měkkýši"
    ]
  },
  {
    "regal": "VZ5",
    "signatura": "551.165",
    "popis": "Zoopaleontologie ostatních bezobratlých",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "trilobiti, koráli, ostnatokožci, bezobratlí, invertebrates, korýši",
    "keywords": [
      "trilobiti",
      "koráli",
      "ostnatokožci",
      "bezobratlí",
      "invertebrates",
      "korýši"
    ]
  },
  {
    "regal": "VZ5",
    "signatura": "551.168",
    "popis": "Zoopaleontologie obratlovců",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "dinosauři, savci, obratlovci, vertebrates, ryby, plazy, ptáci",
    "keywords": [
      "dinosauři",
      "savci",
      "obratlovci",
      "vertebrates",
      "ryby",
      "plazy",
      "ptáci"
    ]
  },
  {
    "regal": "VZ5",
    "signatura": "551.169",
    "popis": "Antropogeneze",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "evoluce člověka, human evolution, hominidi, australopithecus, homo",
    "keywords": [
      "evoluce člověka",
      "human evolution",
      "hominidi",
      "australopithecus",
      "homo"
    ]
  },
  {
    "regal": "VZ5",
    "signatura": "551.17",
    "popis": "Paleofaunistika a paleofloristika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "fosilní fauna, fosilní flóra, biostratigrafie, faunal assemblages",
    "keywords": [
      "fosilní fauna",
      "fosilní flóra",
      "biostratigrafie",
      "faunal assemblages"
    ]
  },
  {
    "regal": "VZ6",
    "signatura": "551.2",
    "popis": "Historická a stratigrafická geologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "stratigrafie, stratigraphy, geologická historie, geologický čas",
    "keywords": [
      "stratigrafie",
      "stratigraphy",
      "geologická historie",
      "geologický čas"
    ]
  },
  {
    "regal": "VZ6",
    "signatura": "551.21",
    "popis": "Principy stratigrafie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "stratigrafické principy, superpozice, litostratigrafie, biostratigrafie",
    "keywords": [
      "stratigrafické principy",
      "superpozice",
      "litostratigrafie",
      "biostratigrafie"
    ]
  },
  {
    "regal": "VZ6",
    "signatura": "551.22",
    "popis": "Geochronologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geologický čas, datování, absolute dating, radiometrické datování, geologická časová škála",
    "keywords": [
      "geologický čas",
      "datování",
      "absolute dating",
      "radiometrické datování",
      "geologická časová škála"
    ]
  },
  {
    "regal": "VZ6",
    "signatura": "551.23",
    "popis": "Stratigrafie útvarů",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geologické útvary, souvrství, formace, stratigraphic units",
    "keywords": [
      "geologické útvary",
      "souvrství",
      "formace",
      "stratigraphic units"
    ]
  },
  {
    "regal": "VZ6",
    "signatura": "551.231",
    "popis": "Prekambrium",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "prekambrikum, precambrian, archeozoikum, proterozoikum, hadaikum",
    "keywords": [
      "prekambrikum",
      "precambrian",
      "archeozoikum",
      "proterozoikum",
      "hadaikum"
    ]
  },
  {
    "regal": "VZ6",
    "signatura": "551.232",
    "popis": "Paleozoikum",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "prvohorny, paleozoic, kambrium, ordovik, silur, devon, karbon, perm",
    "keywords": [
      "prvohorny",
      "paleozoic",
      "kambrium",
      "ordovik",
      "silur",
      "devon",
      "karbon",
      "perm"
    ]
  },
  {
    "regal": "VZ6",
    "signatura": "551.233",
    "popis": "Mezozoikum",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "druhohorny, mesozoic, trias, jura, křída, dinosauři",
    "keywords": [
      "druhohorny",
      "mesozoic",
      "trias",
      "jura",
      "křída",
      "dinosauři"
    ]
  },
  {
    "regal": "VZ6",
    "signatura": "551.234",
    "popis": "Kenozoikum",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "třetihorny, čtvrtohorny, cenozoic, terciér, paleogén, neogén",
    "keywords": [
      "třetihorny",
      "čtvrtohorny",
      "cenozoic",
      "terciér",
      "paleogén",
      "neogén"
    ]
  },
  {
    "regal": "VZ6",
    "signatura": "551.235",
    "popis": "Kvartér",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "čtvrtohorny, quaternary, pleistocén, holocén,ледниковый период, doba ledová",
    "keywords": [
      "čtvrtohorny",
      "quaternary",
      "pleistocén",
      "holocén",
      "ледниковый период",
      "doba ledová"
    ]
  },
  {
    "regal": "VZ6",
    "signatura": "551.24",
    "popis": "Regionální stratigrafie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "stratigrafie regionů, místní stratigrafie, regional stratigraphy",
    "keywords": [
      "stratigrafie regionů",
      "místní stratigrafie",
      "regional stratigraphy"
    ]
  },
  {
    "regal": "VZ6",
    "signatura": "551.25",
    "popis": "Paleogeografie; paleoklimatologie; paleobiogeografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "dávné kontinenty, pangea, paleoclimate, stará moře, paleogeography",
    "keywords": [
      "dávné kontinenty",
      "pangea",
      "paleoclimate",
      "stará moře",
      "paleogeography"
    ]
  },
  {
    "regal": "VZ6",
    "signatura": "551.3",
    "popis": "Archeologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "archeologie, archaeology, historické objekty, výkopy, artefakty",
    "keywords": [
      "archeologie",
      "archaeology",
      "historické objekty",
      "výkopy",
      "artefakty"
    ]
  },
  {
    "regal": "VZ6",
    "signatura": "551.31",
    "popis": "Geoarcheologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geoarcheologie, environmentální archeologie, sedimenty, landscape archaeology",
    "keywords": [
      "geoarcheologie",
      "environmentální archeologie",
      "sedimenty",
      "landscape archaeology"
    ]
  },
  {
    "regal": "VZ6",
    "signatura": "551.32",
    "popis": "Archeologie období a regionů",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "regionální archeologie, prehistoric archaeology, historická archeologie",
    "keywords": [
      "regionální archeologie",
      "prehistoric archaeology",
      "historická archeologie"
    ]
  },
  {
    "regal": "VZ7",
    "signatura": "552.1",
    "popis": "Geologie Českého masivu a Západních Karpat",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "Český masiv, Západní Karpaty, Bohemian Massif, geologie ČR, geologie Slovenska",
    "keywords": [
      "Český masiv",
      "Západní Karpaty",
      "Bohemian Massif",
      "geologie ČR",
      "geologie Slovenska"
    ]
  },
  {
    "regal": "VZ7",
    "signatura": "552.11",
    "popis": "Vysvětlivky ke geologickým mapám ČR a SR",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geologické mapy, vysvětlivky, mapové listy, map explanations, ČR, SR",
    "keywords": [
      "geologické mapy",
      "vysvětlivky",
      "mapové listy",
      "map explanations",
      "ČR",
      "SR"
    ]
  },
  {
    "regal": "VZ7",
    "signatura": "552.12",
    "popis": "Český masiv celkově",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "Český masiv, Bohemian Massif, krystalinikum, moldanubikum, saxothuringikum",
    "keywords": [
      "Český masiv",
      "Bohemian Massif",
      "krystalinikum",
      "moldanubikum",
      "saxothuringikum"
    ]
  },
  {
    "regal": "VZ7",
    "signatura": "552.121",
    "popis": "Varisky konsolidované oblasti Českého masivu",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "variské vrásnění, hercynská orogeneze, krystalinikum, variscan",
    "keywords": [
      "variské vrásnění",
      "hercynská orogeneze",
      "krystalinikum",
      "variscan"
    ]
  },
  {
    "regal": "VZ7",
    "signatura": "552.122",
    "popis": "Pokryvné útvary Českého masivu",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "sedimenty, pokryv, permokarbón, křída, terciér, kvartér",
    "keywords": [
      "sedimenty",
      "pokryv",
      "permokarbón",
      "křída",
      "terciér",
      "kvartér"
    ]
  },
  {
    "regal": "VZ7",
    "signatura": "552.13",
    "popis": "Západní Karpaty celkově",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "Západní Karpaty, Western Carpathians, Karpaty, Tatry, flyš",
    "keywords": [
      "Západní Karpaty",
      "Western Carpathians",
      "Karpaty",
      "Tatry",
      "flyš"
    ]
  },
  {
    "regal": "VZ7",
    "signatura": "552.131",
    "popis": "Centrální a vnitřní Západní Karpaty",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "vnitřní Karpaty, Tatry, Nízké Tatry, krystalinikum, granitové jádro",
    "keywords": [
      "vnitřní Karpaty",
      "Tatry",
      "Nízké Tatry",
      "krystalinikum",
      "granitové jádro"
    ]
  },
  {
    "regal": "VZ7",
    "signatura": "552.132",
    "popis": "Vnější Západní Karpaty",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "flyš, flyšové pásmo, Beskydy, vnější Karpaty, sedimenty",
    "keywords": [
      "flyš",
      "flyšové pásmo",
      "Beskydy",
      "vnější Karpaty",
      "sedimenty"
    ]
  },
  {
    "regal": "VZ7",
    "signatura": "552.133",
    "popis": "Neogénní pánve a kvartér",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "neogén, mladotřetihorny, vídeňská pánev, kvartér, sedimentární pánve",
    "keywords": [
      "neogén",
      "mladotřetihorny",
      "vídeňská pánev",
      "kvartér",
      "sedimentární pánve"
    ]
  },
  {
    "regal": "VZ8",
    "signatura": "552.2",
    "popis": "Geologie světa",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "regionální geologie, světová geologie, geology of the world, kontinenty",
    "keywords": [
      "regionální geologie",
      "světová geologie",
      "geology of the world",
      "kontinenty"
    ]
  },
  {
    "regal": "VZ8",
    "signatura": "552.21",
    "popis": "Evropa",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geologie Evropy, Europe, evropské hory, alpidy, Alpine orogeny",
    "keywords": [
      "geologie Evropy",
      "Europe",
      "evropské hory",
      "alpidy",
      "Alpine orogeny"
    ]
  },
  {
    "regal": "VZ8",
    "signatura": "552.211",
    "popis": "Evropské alpidy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "Alpy, Alps, alpínská orogeneze, mladá pohoří, Pyreneje, Apeniny",
    "keywords": [
      "Alpy",
      "Alps",
      "alpínská orogeneze",
      "mladá pohoří",
      "Pyreneje",
      "Apeniny"
    ]
  },
  {
    "regal": "VZ8",
    "signatura": "552.212",
    "popis": "Evropské variscidy; kaledonidy a platforma",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "variské vrásnění, kaledonské vrásnění, platforma, variská Evropa",
    "keywords": [
      "variské vrásnění",
      "kaledonské vrásnění",
      "platforma",
      "variská Evropa"
    ]
  },
  {
    "regal": "VZ8",
    "signatura": "552.22",
    "popis": "Rusko; SNS (bývala SSSR)",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "Rusko, USSR, Sovětský svaz, geologie Ruska, Ural, Sibiř",
    "keywords": [
      "Rusko",
      "USSR",
      "Sovětský svaz",
      "geologie Ruska",
      "Ural",
      "Sibiř"
    ]
  },
  {
    "regal": "VZ8",
    "signatura": "552.221",
    "popis": "Evropská část Ruska (Fenosarmatia; Ural); Ukrajina; Pobaltí",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "Ural, Ukrajina, východní Evropa, ruská platforma, Baltský štít",
    "keywords": [
      "Ural",
      "Ukrajina",
      "východní Evropa",
      "ruská platforma",
      "Baltský štít"
    ]
  },
  {
    "regal": "VZ8",
    "signatura": "552.222",
    "popis": "Asijská část Ruska (Sibiř; Čukotka; Přímoří); Střední Asie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "Sibiř, Siberia, Střední Asie, sibirská platforma, Bajkal",
    "keywords": [
      "Sibiř",
      "Siberia",
      "Střední Asie",
      "sibirská platforma",
      "Bajkal"
    ]
  },
  {
    "regal": "VZ8",
    "signatura": "552.23",
    "popis": "Asie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geologie Asie, Asia, Himaláje, Himalayas, Čína, Indie, Japonsko",
    "keywords": [
      "geologie Asie",
      "Asia",
      "Himaláje",
      "Himalayas",
      "Čína",
      "Indie",
      "Japonsko"
    ]
  },
  {
    "regal": "VZ8",
    "signatura": "552.24",
    "popis": "Severní Amerika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "North America, USA, Kanada, Skalisté hory, Rocky Mountains, Appalachy",
    "keywords": [
      "North America",
      "USA",
      "Kanada",
      "Skalisté hory",
      "Rocky Mountains",
      "Appalachy"
    ]
  },
  {
    "regal": "VZ8",
    "signatura": "552.25",
    "popis": "Jižní Amerika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "South America, Andy, Andes, Amazonie, Brazílie, Argentina",
    "keywords": [
      "South America",
      "Andy",
      "Andes",
      "Amazonie",
      "Brazílie",
      "Argentina"
    ]
  },
  {
    "regal": "VZ8",
    "signatura": "552.26",
    "popis": "Afrika a Arábie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "Africa, Afrika, Saharský štít, Arabský poloostrov, rifty, riftové údolí",
    "keywords": [
      "Africa",
      "Afrika",
      "Saharský štít",
      "Arabský poloostrov",
      "rifty",
      "riftové údolí"
    ]
  },
  {
    "regal": "VZ8",
    "signatura": "552.27",
    "popis": "Austrálie a Antarktida",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "Australia, Antarktida, Antarctica, austrálie štít, ledový kontinent",
    "keywords": [
      "Australia",
      "Antarktida",
      "Antarctica",
      "austrálie štít",
      "ledový kontinent"
    ]
  },
  {
    "regal": "VZ8",
    "signatura": "552.28",
    "popis": "Geologie oceánů a oceánských ostrovů",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "oceánské dno, mid-ocean ridges, středooceánské hřbety, oceánské ostrovy",
    "keywords": [
      "oceánské dno",
      "mid-ocean ridges",
      "středooceánské hřbety",
      "oceánské ostrovy"
    ]
  },
  {
    "regal": "VZ8",
    "signatura": "552.3",
    "popis": "Geologická turistika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geoturistika, geotourism, geologické lokality, geologie pro veřejnost",
    "keywords": [
      "geoturistika",
      "geotourism",
      "geologické lokality",
      "geologie pro veřejnost"
    ]
  },
  {
    "regal": "VZ8",
    "signatura": "552.31",
    "popis": "Průvodce po ČR",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "turistické průvodce, Česká republika, geoparky, geologické zajímavosti",
    "keywords": [
      "turistické průvodce",
      "Česká republika",
      "geoparky",
      "geologické zajímavosti"
    ]
  },
  {
    "regal": "VZ8",
    "signatura": "552.32",
    "popis": "Zahraniční průvodce",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "zahraniční průvodce, travel guides, geologická turistika, geoturistika",
    "keywords": [
      "zahraniční průvodce",
      "travel guides",
      "geologická turistika",
      "geoturistika"
    ]
  },
  {
    "regal": "VZ9",
    "signatura": "553.1",
    "popis": "Mineraologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "mineralogie, mineralogy, minerály, krystaly, minerals, krystalografie",
    "keywords": [
      "mineralogie",
      "mineralogy",
      "minerály",
      "krystaly",
      "minerals",
      "krystalografie"
    ]
  },
  {
    "regal": "VZ9",
    "signatura": "553.11",
    "popis": "Krystalografie a rentgenografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "krystaly, krystalografie, rentgen, XRD, crystallography, mřížka",
    "keywords": [
      "krystaly",
      "krystalografie",
      "rentgen",
      "XRD",
      "crystallography",
      "mřížka"
    ]
  },
  {
    "regal": "VZ9",
    "signatura": "553.12",
    "popis": "Systematická mineraologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "systematika minerálů, klasifikace, mineralogical classification, druhy minerálů",
    "keywords": [
      "systematika minerálů",
      "klasifikace",
      "mineralogical classification",
      "druhy minerálů"
    ]
  },
  {
    "regal": "VZ9",
    "signatura": "553.13",
    "popis": "Rudní mineralogie; odrazová mikroskopie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "rudní minerály, rudy, ore minerals, opaque minerals, polarizační mikroskop",
    "keywords": [
      "rudní minerály",
      "rudy",
      "ore minerals",
      "opaque minerals",
      "polarizační mikroskop"
    ]
  },
  {
    "regal": "VZ9",
    "signatura": "553.14",
    "popis": "Horninotvorné minerály; optická mikroskopie minerálů",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "horninotvorné minerály, živce, křemen, slídy, optical mineralogy",
    "keywords": [
      "horninotvorné minerály",
      "živce",
      "křemen",
      "slídy",
      "optical mineralogy"
    ]
  },
  {
    "regal": "VZ9",
    "signatura": "553.15",
    "popis": "Jílové minerály",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "jíly, clay minerals, illite, kaolinite, montmorillonite, jílové nerosty",
    "keywords": [
      "jíly",
      "clay minerals",
      "illite",
      "kaolinite",
      "montmorillonite",
      "jílové nerosty"
    ]
  },
  {
    "regal": "VZ9",
    "signatura": "553.16",
    "popis": "Gemologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "drahé kameny, šperky, gemstones, gemology, diamanty, rubíny",
    "keywords": [
      "drahé kameny",
      "šperky",
      "gemstones",
      "gemology",
      "diamanty",
      "rubíny"
    ]
  },
  {
    "regal": "VZ9",
    "signatura": "553.17",
    "popis": "Fluidní inkluze",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "fluid inclusions, inkluze, mikroskopie inkluzí, teploty, termometrie",
    "keywords": [
      "fluid inclusions",
      "inkluze",
      "mikroskopie inkluzí",
      "teploty",
      "termometrie"
    ]
  },
  {
    "regal": "VZ9",
    "signatura": "553.18",
    "popis": "Regionální mineralogie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "mineralogie regionů, mineralogická naleziště, mineral localities",
    "keywords": [
      "mineralogie regionů",
      "mineralogická naleziště",
      "mineral localities"
    ]
  },
  {
    "regal": "VZ9",
    "signatura": "553.2",
    "popis": "Petrologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "horniny, petrologie, petrology, magmatické, sedimentární, metamorfované",
    "keywords": [
      "horniny",
      "petrologie",
      "petrology",
      "magmatické",
      "sedimentární",
      "metamorfované"
    ]
  },
  {
    "regal": "VZ9",
    "signatura": "553.21",
    "popis": "Klasifikace a chemismy hornin",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "klasifikace hornin, chemismus, geochemie, rock classification, QAPF",
    "keywords": [
      "klasifikace hornin",
      "chemismus",
      "geochemie",
      "rock classification",
      "QAPF"
    ]
  },
  {
    "regal": "VZ9",
    "signatura": "553.22",
    "popis": "Magmatické horniny",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "vyvřeliny, igneous rocks, magma, žula, čedič, granit, bazalt",
    "keywords": [
      "vyvřeliny",
      "igneous rocks",
      "magma",
      "žula",
      "čedič",
      "granit",
      "bazalt"
    ]
  },
  {
    "regal": "VZ9",
    "signatura": "553.23",
    "popis": "Metamorfované horniny",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "metamorfity, metamorphic rocks, rula, fylit, svory, mramor",
    "keywords": [
      "metamorfity",
      "metamorphic rocks",
      "rula",
      "fylit",
      "svory",
      "mramor"
    ]
  },
  {
    "regal": "VZ9",
    "signatura": "553.24",
    "popis": "Sedimentární horniny",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "sedimenty, usazeniny, sedimentary rocks, pískovec, vápenec, břidlice",
    "keywords": [
      "sedimenty",
      "usazeniny",
      "sedimentary rocks",
      "pískovec",
      "vápenec",
      "břidlice"
    ]
  },
  {
    "regal": "VZ9",
    "signatura": "553.25",
    "popis": "Zvětrávací a reziduální horniny",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "zvětrávání, weathering, půdotvorba, laterity, regolith",
    "keywords": [
      "zvětrávání",
      "weathering",
      "půdotvorba",
      "laterity",
      "regolith"
    ]
  },
  {
    "regal": "VZ10",
    "signatura": "553.3",
    "popis": "Ložisková geologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "ložiska nerostných surovin, ore deposits, rudy, economic geology",
    "keywords": [
      "ložiska nerostných surovin",
      "ore deposits",
      "rudy",
      "economic geology"
    ]
  },
  {
    "regal": "VZ10",
    "signatura": "553.31",
    "popis": "Geneze ložisek NS",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "vznik ložisek, geneze, metallogenesis, metalogeneze, hydrotermální",
    "keywords": [
      "vznik ložisek",
      "geneze",
      "metallogenesis",
      "metalogeneze",
      "hydrotermální"
    ]
  },
  {
    "regal": "VZ10",
    "signatura": "553.311",
    "popis": "Stavba ložisek NS",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "struktura ložisek, ore structure, rudní tělo, ore body",
    "keywords": [
      "struktura ložisek",
      "ore structure",
      "rudní tělo",
      "ore body"
    ]
  },
  {
    "regal": "VZ10",
    "signatura": "553.32",
    "popis": "Rudní suroviny a ložiska rud; metalogeneze",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "rudy, ore deposits, metalogeneze, metallogenesis, Cu, Pb, Zn, Au",
    "keywords": [
      "rudy",
      "ore deposits",
      "metalogeneze",
      "metallogenesis",
      "Cu",
      "Pb",
      "Zn",
      "Au"
    ]
  },
  {
    "regal": "VZ10",
    "signatura": "553.322",
    "popis": "Suroviny a ložiska železa",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "železo, iron ore, magnetit, hematit, Fe, železná ruda",
    "keywords": [
      "železo",
      "iron ore",
      "magnetit",
      "hematit",
      "Fe",
      "železná ruda"
    ]
  },
  {
    "regal": "VZ10",
    "signatura": "553.323",
    "popis": "Radioaktivní suroviny a jejich ložiska",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "uran, thorium, radioaktivní, radioactive minerals, U, Th",
    "keywords": [
      "uran",
      "thorium",
      "radioaktivní",
      "radioactive minerals",
      "U",
      "Th"
    ]
  },
  {
    "regal": "VZ10",
    "signatura": "553.33",
    "popis": "Nerudní suroviny a ložiska nerud",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "nerudy, industrial minerals, vápenec, sádra, kámen, písek",
    "keywords": [
      "nerudy",
      "industrial minerals",
      "vápenec",
      "sádra",
      "kámen",
      "písek"
    ]
  },
  {
    "regal": "VZ10",
    "signatura": "553.34",
    "popis": "Kaustobiolity a ložiska kaustobiolitů",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "uhlí, ropa, plyn, coal, oil, petroleum, fossil fuels",
    "keywords": [
      "uhlí",
      "ropa",
      "plyn",
      "coal",
      "oil",
      "petroleum",
      "fossil fuels"
    ]
  },
  {
    "regal": "VZ10",
    "signatura": "553.341",
    "popis": "Uhlí a ložiska pevných kaustobiolitů",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "černé uhlí, hnědé uhlí, coal, antracit, lignit, důlní činnost",
    "keywords": [
      "černé uhlí",
      "hnědé uhlí",
      "coal",
      "antracit",
      "lignit",
      "důlní činnost"
    ]
  },
  {
    "regal": "VZ10",
    "signatura": "553.342",
    "popis": "Ropa a plyn a jejich ložiska",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "nafta, zemní plyn, oil, natural gas, petroleum, naftová pole",
    "keywords": [
      "nafta",
      "zemní plyn",
      "oil",
      "natural gas",
      "petroleum",
      "naftová pole"
    ]
  },
  {
    "regal": "VZ10",
    "signatura": "553.35",
    "popis": "Regionální ložisková geologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "ložiska regionů, regional ore deposits, metalogenetické provincie",
    "keywords": [
      "ložiska regionů",
      "regional ore deposits",
      "metalogenetické provincie"
    ]
  },
  {
    "regal": "VZ10",
    "signatura": "553.36",
    "popis": "Vyhledávání a průzkum ložisek NS",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "exploration, prospecting, průzkum, geofyzika, vrty, drilling",
    "keywords": [
      "exploration",
      "prospecting",
      "průzkum",
      "geofyzika",
      "vrty",
      "drilling"
    ]
  },
  {
    "regal": "VZ10",
    "signatura": "553.361",
    "popis": "Vrtání",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "vrty, drilling, vrtné práce, core drilling, well logging",
    "keywords": [
      "vrty",
      "drilling",
      "vrtné práce",
      "core drilling",
      "well logging"
    ]
  },
  {
    "regal": "VZ10",
    "signatura": "553.362",
    "popis": "Ekonomické aspekty; prognózy a zásoby NS",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "zásoby, ekonomie, mining economics, reserves, resources, prognózy",
    "keywords": [
      "zásoby",
      "ekonomie",
      "mining economics",
      "reserves",
      "resources",
      "prognózy"
    ]
  },
  {
    "regal": "VZ10",
    "signatura": "553.37",
    "popis": "Těžba a zpracování NS",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "důlní činnost, mining, zpracování, processing, úpravnictví",
    "keywords": [
      "důlní činnost",
      "mining",
      "zpracování",
      "processing",
      "úpravnictví"
    ]
  },
  {
    "regal": "VZ10",
    "signatura": "553.371",
    "popis": "Důlní činnost",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "dolování, mining, důl, underground mining, povrchová těžba",
    "keywords": [
      "dolování",
      "mining",
      "důl",
      "underground mining",
      "povrchová těžba"
    ]
  },
  {
    "regal": "VZ10",
    "signatura": "553.372",
    "popis": "Úpravnictví a hutnictví",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "processing, metallurgy, úprava rud, flotace, tavení, hutě",
    "keywords": [
      "processing",
      "metallurgy",
      "úprava rud",
      "flotace",
      "tavení",
      "hutě"
    ]
  },
  {
    "regal": "VZ11",
    "signatura": "553.4",
    "popis": "Geochemie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geochemie, geochemistry, prvky, izotopy, chemie Země, geochemical",
    "keywords": [
      "geochemie",
      "geochemistry",
      "prvky",
      "izotopy",
      "chemie Země",
      "geochemical"
    ]
  },
  {
    "regal": "VZ11",
    "signatura": "553.41",
    "popis": "Laboratorní metody výzkumu",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "analytické metody, laboratorní analýzy, spektrometrie, XRF, ICP-MS",
    "keywords": [
      "analytické metody",
      "laboratorní analýzy",
      "spektrometrie",
      "XRF",
      "ICP-MS"
    ]
  },
  {
    "regal": "VZ11",
    "signatura": "553.42",
    "popis": "Chemická podpora geochemie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "chemie, analytická chemie, instrumentální metody, laboratory",
    "keywords": [
      "chemie",
      "analytická chemie",
      "instrumentální metody",
      "laboratory"
    ]
  },
  {
    "regal": "VZ11",
    "signatura": "553.43",
    "popis": "Geochemie jednotlivých prvků",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "prvky, elements, trace elements, stopové prvky, geochemical behavior",
    "keywords": [
      "prvky",
      "elements",
      "trace elements",
      "stopové prvky",
      "geochemical behavior"
    ]
  },
  {
    "regal": "VZ11",
    "signatura": "553.44",
    "popis": "Geochemie endogenních procesů",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "magmatické procesy, hydrotermální, magma, krystalizace",
    "keywords": [
      "magmatické procesy",
      "hydrotermální",
      "magma",
      "krystalizace"
    ]
  },
  {
    "regal": "VZ11",
    "signatura": "553.45",
    "popis": "Geochemie exogenních procesů",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "zvětrávání, sedimentace, povrchové procesy, supergene processes",
    "keywords": [
      "zvětrávání",
      "sedimentace",
      "povrchové procesy",
      "supergene processes"
    ]
  },
  {
    "regal": "VZ11",
    "signatura": "553.46",
    "popis": "Hydrogeochemie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "chemie vody, hydrochemie, dissolved elements, water chemistry",
    "keywords": [
      "chemie vody",
      "hydrochemie",
      "dissolved elements",
      "water chemistry"
    ]
  },
  {
    "regal": "VZ11",
    "signatura": "553.47",
    "popis": "Organická geochemie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "organic geochemistry, organické sloučeniny, biomarkery, kerogen",
    "keywords": [
      "organic geochemistry",
      "organické sloučeniny",
      "biomarkery",
      "kerogen"
    ]
  },
  {
    "regal": "VZ11",
    "signatura": "553.48",
    "popis": "Geochemická prospekce",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geochemical exploration, prospecting, exploration methods, vzorkování",
    "keywords": [
      "geochemical exploration",
      "prospecting",
      "exploration methods",
      "vzorkování"
    ]
  },
  {
    "regal": "VZ11",
    "signatura": "553.5",
    "popis": "Hydrogeologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "podzemní voda, hydrogeology, groundwater, aquifer, vodní zdroje",
    "keywords": [
      "podzemní voda",
      "hydrogeology",
      "groundwater",
      "aquifer",
      "vodní zdroje"
    ]
  },
  {
    "regal": "VZ11",
    "signatura": "553.51",
    "popis": "Hydrogeologická měření; vzorkování",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "čerpací zkoušky, monitoring, odběr vzorků, well testing",
    "keywords": [
      "čerpací zkoušky",
      "monitoring",
      "odběr vzorků",
      "well testing"
    ]
  },
  {
    "regal": "VZ11",
    "signatura": "553.52",
    "popis": "hydraulika a zásoby podzemní vody",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "hydraulika, aquifer properties, zásoby, resources, průtok",
    "keywords": [
      "hydraulika",
      "aquifer properties",
      "zásoby",
      "resources",
      "průtok"
    ]
  },
  {
    "regal": "VZ11",
    "signatura": "553.53",
    "popis": "Ochrana podzemní vody",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "znečištění, contamination, ochrana zdrojů, groundwater protection",
    "keywords": [
      "znečištění",
      "contamination",
      "ochrana zdrojů",
      "groundwater protection"
    ]
  },
  {
    "regal": "VZ11",
    "signatura": "553.54",
    "popis": "Minerální vody; lázeňství",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "termální vody, spa, lázně, mineral water, thermal springs",
    "keywords": [
      "termální vody",
      "spa",
      "lázně",
      "mineral water",
      "thermal springs"
    ]
  },
  {
    "regal": "VZ11",
    "signatura": "553.55",
    "popis": "Hydrogeologie ložisek",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "důlní voda, mine water, dewatering, odvodnění, důlní hydrogeologie",
    "keywords": [
      "důlní voda",
      "mine water",
      "dewatering",
      "odvodnění",
      "důlní hydrogeologie"
    ]
  },
  {
    "regal": "VZ11",
    "signatura": "553.56",
    "popis": "Regionální hydrologie ČR",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "hydrogeologie ČR, Czech Republic, české prameny, české vody",
    "keywords": [
      "hydrogeologie ČR",
      "Czech Republic",
      "české prameny",
      "české vody"
    ]
  },
  {
    "regal": "VZ11",
    "signatura": "553.55",
    "popis": "Regionální hydrologie světa",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "hydrogeologie světa, world hydrogeology, mezinárodní",
    "keywords": [
      "hydrogeologie světa",
      "world hydrogeology",
      "mezinárodní"
    ]
  },
  {
    "regal": "VZ11",
    "signatura": "553.56",
    "popis": "Jímání a úprava podzemní vody; vodárenství",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "vodovody, water supply, úprava vody, treatment, pitná voda",
    "keywords": [
      "vodovody",
      "water supply",
      "úprava vody",
      "treatment",
      "pitná voda"
    ]
  },
  {
    "regal": "VZ12",
    "signatura": "554",
    "popis": "Životní prostředí",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "životní prostředí, environment, ekologie, ochrana přírody, sustainability",
    "keywords": [
      "životní prostředí",
      "environment",
      "ekologie",
      "ochrana přírody",
      "sustainability"
    ]
  },
  {
    "regal": "VZ12",
    "signatura": "554.1",
    "popis": "Enviromentální geologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "environmental geology, geologie životního prostředí, ekologie",
    "keywords": [
      "environmental geology",
      "geologie životního prostředí",
      "ekologie"
    ]
  },
  {
    "regal": "VZ12",
    "signatura": "554.11",
    "popis": "Geofaktory životního prostředí",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geologické faktory, geohazards, přírodní faktory, geofaktory",
    "keywords": [
      "geologické faktory",
      "geohazards",
      "přírodní faktory",
      "geofaktory"
    ]
  },
  {
    "regal": "VZ12",
    "signatura": "554.12",
    "popis": "Přírodní katastrofy a rizika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "katastrofy, natural hazards, zemětřesení, povodně, sesuvy",
    "keywords": [
      "katastrofy",
      "natural hazards",
      "zemětřesení",
      "povodně",
      "sesuvy"
    ]
  },
  {
    "regal": "VZ12",
    "signatura": "554.13",
    "popis": "Geomedicína",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "zdraví, geomedicine, environmentální zdraví, zdravotní rizika",
    "keywords": [
      "zdraví",
      "geomedicine",
      "environmentální zdraví",
      "zdravotní rizika"
    ]
  },
  {
    "regal": "VZ12",
    "signatura": "554.2",
    "popis": "Chemické aspekty životního prostředí",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "znečištění, kontaminace, pollution, chemické látky, toxicity",
    "keywords": [
      "znečištění",
      "kontaminace",
      "pollution",
      "chemické látky",
      "toxicity"
    ]
  },
  {
    "regal": "VZ12",
    "signatura": "554.21",
    "popis": "Kontaminanty",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "kontaminace, pollutants, těžké kovy, persistentní látky, polutanty",
    "keywords": [
      "kontaminace",
      "pollutants",
      "těžké kovy",
      "persistentní látky",
      "polutanty"
    ]
  },
  {
    "regal": "VZ12",
    "signatura": "554.22",
    "popis": "Sanace",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "remediation, čištění, dekontaminace, sanační práce, cleanup",
    "keywords": [
      "remediation",
      "čištění",
      "dekontaminace",
      "sanační práce",
      "cleanup"
    ]
  },
  {
    "regal": "VZ12",
    "signatura": "554.23",
    "popis": "Odpady; ukládání; zpracování odpadů",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "odpadové hospodářství, waste management, skládky, recyklace, landfill",
    "keywords": [
      "odpadové hospodářství",
      "waste management",
      "skládky",
      "recyklace",
      "landfill"
    ]
  },
  {
    "regal": "VZ13",
    "signatura": "554.3",
    "popis": "Člověk a životní prostředí",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "antropogenní vlivy, human impact, vliv člověka, environmentální dopady",
    "keywords": [
      "antropogenní vlivy",
      "human impact",
      "vliv člověka",
      "environmentální dopady"
    ]
  },
  {
    "regal": "VZ13",
    "signatura": "554.31",
    "popis": "Změny prostředí/přírody",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "environmental change, klimatické změny, degradace, změny krajiny",
    "keywords": [
      "environmental change",
      "klimatické změny",
      "degradace",
      "změny krajiny"
    ]
  },
  {
    "regal": "VZ13",
    "signatura": "554.32",
    "popis": "Vliv člověka na životní prostředí",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "anthropogenic impact, lidská činnost, urbanizace, industrializace",
    "keywords": [
      "anthropogenic impact",
      "lidská činnost",
      "urbanizace",
      "industrializace"
    ]
  },
  {
    "regal": "VZ13",
    "signatura": "554.4",
    "popis": "Ochrana přírody",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "nature conservation, biodiverzita, chráněná území, NATURA 2000",
    "keywords": [
      "nature conservation",
      "biodiverzita",
      "chráněná území",
      "NATURA 2000"
    ]
  },
  {
    "regal": "VZ13",
    "signatura": "554.41",
    "popis": "Legislativní ochrana přírody",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "zákony, legislation, právní ochrana, environmental law, předpisy",
    "keywords": [
      "zákony",
      "legislation",
      "právní ochrana",
      "environmental law",
      "předpisy"
    ]
  },
  {
    "regal": "VZ13",
    "signatura": "554.42",
    "popis": "Chráněná území",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "národní parky, CHKO, protected areas, reserves, rezervace",
    "keywords": [
      "národní parky",
      "CHKO",
      "protected areas",
      "reserves",
      "rezervace"
    ]
  },
  {
    "regal": "VZ13",
    "signatura": "554.43",
    "popis": "Obnova přírody",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "restoration, rekultivace, revitalizace, habitat restoration",
    "keywords": [
      "restoration",
      "rekultivace",
      "revitalizace",
      "habitat restoration"
    ]
  },
  {
    "regal": "VZ14",
    "signatura": "554.5",
    "popis": "Nauka o krajině",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "landscape science, krajinná ekologie, krajina, landscape, geografie",
    "keywords": [
      "landscape science",
      "krajinná ekologie",
      "krajina",
      "landscape",
      "geografie"
    ]
  },
  {
    "regal": "VZ14",
    "signatura": "554.51",
    "popis": "Krajinná ekologie; geoekologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "landscape ecology, geoekologie, ekosystémy, biotopy",
    "keywords": [
      "landscape ecology",
      "geoekologie",
      "ekosystémy",
      "biotopy"
    ]
  },
  {
    "regal": "VZ14",
    "signatura": "554.52",
    "popis": "Plánování; údržba krajiny",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "landscape planning, územní plánování, landscape management, péče",
    "keywords": [
      "landscape planning",
      "územní plánování",
      "landscape management",
      "péče"
    ]
  },
  {
    "regal": "VZ14",
    "signatura": "554.53",
    "popis": "Konkrétní realizace krajinných projektů (v ČR)",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "projekty, realizace, case studies, příklady, ČR",
    "keywords": [
      "projekty",
      "realizace",
      "case studies",
      "příklady",
      "ČR"
    ]
  },
  {
    "regal": "VZ14",
    "signatura": "554.6",
    "popis": "Společenské aspekty životního prostředí",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "socioekonomické aspekty, society, společnost, environmental sociology",
    "keywords": [
      "socioekonomické aspekty",
      "society",
      "společnost",
      "environmental sociology"
    ]
  },
  {
    "regal": "VZ14",
    "signatura": "554.61",
    "popis": "Ekonomika ochrany životního prostředí",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "environmental economics, ekologická ekonomie, externality, náklady",
    "keywords": [
      "environmental economics",
      "ekologická ekonomie",
      "externality",
      "náklady"
    ]
  },
  {
    "regal": "VZ14",
    "signatura": "554.62",
    "popis": "Zdroje rozvoje",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "resources, přírodní zdroje, sustainable resources, obnovitelné zdroje",
    "keywords": [
      "resources",
      "přírodní zdroje",
      "sustainable resources",
      "obnovitelné zdroje"
    ]
  },
  {
    "regal": "VZ14",
    "signatura": "554.63",
    "popis": "Udržitelný rozvoj",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "sustainable development, udržitelnost, sustainability, trvale udržitelný",
    "keywords": [
      "sustainable development",
      "udržitelnost",
      "sustainability",
      "trvale udržitelný"
    ]
  },
  {
    "regal": "VZ14",
    "signatura": "554.64",
    "popis": "Psychologické aspekty",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "environmental psychology, psychologie, chování, vnímání prostředí",
    "keywords": [
      "environmental psychology",
      "psychologie",
      "chování",
      "vnímání prostředí"
    ]
  },
  {
    "regal": "VZ14",
    "signatura": "554.65",
    "popis": "Politika a životní prostředí",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "environmental policy, politika, legislativa, ekologická politika",
    "keywords": [
      "environmental policy",
      "politika",
      "legislativa",
      "ekologická politika"
    ]
  },
  {
    "regal": "VZ14",
    "signatura": "554.66",
    "popis": "Managment (EUA; SEA)",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "environmental management, EIA, SEA, IPPC, posuzování vlivů",
    "keywords": [
      "environmental management",
      "EIA",
      "SEA",
      "IPPC",
      "posuzování vlivů"
    ]
  },
  {
    "regal": "VZ15",
    "signatura": "555-558",
    "popis": "Geografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geografie, geography, zeměpis, regional geography, fyzická geografie",
    "keywords": [
      "geografie",
      "geography",
      "zeměpis",
      "regional geography",
      "fyzická geografie"
    ]
  },
  {
    "regal": "VZ15",
    "signatura": "555",
    "popis": "Fyzická geografie – obecná",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "physical geography, fyzická geografie, přírodní prostředí, nature",
    "keywords": [
      "physical geography",
      "fyzická geografie",
      "přírodní prostředí",
      "nature"
    ]
  },
  {
    "regal": "VZ15",
    "signatura": "555.1",
    "popis": "Meteorologie a klimatologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "počasí, klima, meteorology, climatology, atmosphere, atmosféra",
    "keywords": [
      "počasí",
      "klima",
      "meteorology",
      "climatology",
      "atmosphere",
      "atmosféra"
    ]
  },
  {
    "regal": "VZ16",
    "signatura": "555.11",
    "popis": "Meteorologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "meteorologie, počasí, weather, meteorology, předpověď počasí",
    "keywords": [
      "meteorologie",
      "počasí",
      "weather",
      "meteorology",
      "předpověď počasí"
    ]
  },
  {
    "regal": "VZ16",
    "signatura": "555.12",
    "popis": "Klimatologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "klima, klimatologie, climatology, climate, podnebí, climate change",
    "keywords": [
      "klima",
      "klimatologie",
      "climatology",
      "climate",
      "podnebí",
      "climate change"
    ]
  },
  {
    "regal": "VZ16",
    "signatura": "555.2",
    "popis": "Hydrologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "voda, hydrologie, hydrology, vodstvo, povrchové vody, toky",
    "keywords": [
      "voda",
      "hydrologie",
      "hydrology",
      "vodstvo",
      "povrchové vody",
      "toky"
    ]
  },
  {
    "regal": "VZ16",
    "signatura": "555.21",
    "popis": "Hydrologie povrchových toků",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "řeky, toky, rivers, stream flow, odtok, hydrogramy",
    "keywords": [
      "řeky",
      "toky",
      "rivers",
      "stream flow",
      "odtok",
      "hydrogramy"
    ]
  },
  {
    "regal": "VZ16",
    "signatura": "555.22",
    "popis": "Limnologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "jezera, limnology, lakes, nádrže, rybníky, limnologie",
    "keywords": [
      "jezera",
      "limnology",
      "lakes",
      "nádrže",
      "rybníky",
      "limnologie"
    ]
  },
  {
    "regal": "VZ16",
    "signatura": "555.23",
    "popis": "Oceánografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "oceány, moře, oceanography, mořská voda, proudy, oceanic currents",
    "keywords": [
      "oceány",
      "moře",
      "oceanography",
      "mořská voda",
      "proudy",
      "oceanic currents"
    ]
  },
  {
    "regal": "VZ17",
    "signatura": "555.3",
    "popis": "Geomorfologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geomorfologie, relief, landforms, tvary reliéfu, geomorphology",
    "keywords": [
      "geomorfologie",
      "relief",
      "landforms",
      "tvary reliéfu",
      "geomorphology"
    ]
  },
  {
    "regal": "VZ17",
    "signatura": "555.31",
    "popis": "Orografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "orografie, pohoří, mountains, topografie, orography",
    "keywords": [
      "orografie",
      "pohoří",
      "mountains",
      "topografie",
      "orography"
    ]
  },
  {
    "regal": "VZ17",
    "signatura": "555.4",
    "popis": "Pedologie a pedogeografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "půda, soil science, pedology, půdní typy, soil geography",
    "keywords": [
      "půda",
      "soil science",
      "pedology",
      "půdní typy",
      "soil geography"
    ]
  },
  {
    "regal": "VZ17",
    "signatura": "555.6",
    "popis": "Biogeografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "biogeografie, biogeography, rozšíření organismů, areály, flora, fauna",
    "keywords": [
      "biogeografie",
      "biogeography",
      "rozšíření organismů",
      "areály",
      "flora",
      "fauna"
    ]
  },
  {
    "regal": "VZ17",
    "signatura": "555.51",
    "popis": "Fytogeografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "fytogeografie, rostliny, vegetation, phytogeography, flóra",
    "keywords": [
      "fytogeografie",
      "rostliny",
      "vegetation",
      "phytogeography",
      "flóra"
    ]
  },
  {
    "regal": "VZ17",
    "signatura": "555.52",
    "popis": "Zoogeografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "zoogeografie, živočichové, fauna, zoogeography, areály zvířat",
    "keywords": [
      "zoogeografie",
      "živočichové",
      "fauna",
      "zoogeography",
      "areály zvířat"
    ]
  },
  {
    "regal": "VZ17",
    "signatura": "555.53",
    "popis": "Ekologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "ekologie, ecology, ekosystémy, biocenózy, ecosystems, environmentalistika",
    "keywords": [
      "ekologie",
      "ecology",
      "ekosystémy",
      "biocenózy",
      "ecosystems",
      "environmentalistika"
    ]
  },
  {
    "regal": "VZ18",
    "signatura": "556",
    "popis": "Humánní geografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "human geography, humánní geografie, obyvatelstvo, lidská činnost",
    "keywords": [
      "human geography",
      "humánní geografie",
      "obyvatelstvo",
      "lidská činnost"
    ]
  },
  {
    "regal": "VZ18",
    "signatura": "556.1",
    "popis": "Obecná humánní geografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "human geography, teorie, koncepty, geografické myšlení",
    "keywords": [
      "human geography",
      "teorie",
      "koncepty",
      "geografické myšlení"
    ]
  },
  {
    "regal": "VZ18",
    "signatura": "556.2",
    "popis": "Politická; sociální a kulturní geografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "political geography, sociální geografie, kulturní geografie",
    "keywords": [
      "political geography",
      "sociální geografie",
      "kulturní geografie"
    ]
  },
  {
    "regal": "VZ18",
    "signatura": "556.21",
    "popis": "Politická goegrafie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "politická geografie, státy, boundaries, hranice, geopolitics",
    "keywords": [
      "politická geografie",
      "státy",
      "boundaries",
      "hranice",
      "geopolitics"
    ]
  },
  {
    "regal": "VZ19",
    "signatura": "556.22",
    "popis": "Sociální geografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "social geography, sociální prostředí, komunity, společnost",
    "keywords": [
      "social geography",
      "sociální prostředí",
      "komunity",
      "společnost"
    ]
  },
  {
    "regal": "VZ19",
    "signatura": "556.23",
    "popis": "Kulturní geografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "cultural geography, kultura, kulturní krajina, identity",
    "keywords": [
      "cultural geography",
      "kultura",
      "kulturní krajina",
      "identity"
    ]
  },
  {
    "regal": "VZ19",
    "signatura": "556.24",
    "popis": "Globalizace",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "globalization, globalizace, světová ekonomika, global processes",
    "keywords": [
      "globalization",
      "globalizace",
      "světová ekonomika",
      "global processes"
    ]
  },
  {
    "regal": "VZ19",
    "signatura": "556.3",
    "popis": "Geografie obyvatelstva; osídlení; uzemní plánování; urbanismus",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "obyvatelstvo, population, urbanizace, urbanism, města, urban planning",
    "keywords": [
      "obyvatelstvo",
      "population",
      "urbanizace",
      "urbanism",
      "města",
      "urban planning"
    ]
  },
  {
    "regal": "VZ19",
    "signatura": "556.31",
    "popis": "Geografie obyvatelstva a geodemografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "demografie, population geography, demografické procesy, migrace",
    "keywords": [
      "demografie",
      "population geography",
      "demografické procesy",
      "migrace"
    ]
  },
  {
    "regal": "VZ19",
    "signatura": "556.32",
    "popis": "Sídelní geografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "settlement geography, sídla, města, vesnice, urbanizace",
    "keywords": [
      "settlement geography",
      "sídla",
      "města",
      "vesnice",
      "urbanizace"
    ]
  },
  {
    "regal": "VZ19",
    "signatura": "556.33",
    "popis": "Územní plánování a urbanismus",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "urban planning, územní rozvoj, planning, urbanism, města",
    "keywords": [
      "urban planning",
      "územní rozvoj",
      "planning",
      "urbanism",
      "města"
    ]
  },
  {
    "regal": "VZ19",
    "signatura": "556.34",
    "popis": "Veřejná správa",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "public administration, územní správa, governance, regiony",
    "keywords": [
      "public administration",
      "územní správa",
      "governance",
      "regiony"
    ]
  },
  {
    "regal": "VZ20",
    "signatura": "556.4",
    "popis": "Ekonomická geografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "economic geography, ekonomika, hospodářství, ekonomie",
    "keywords": [
      "economic geography",
      "ekonomika",
      "hospodářství",
      "ekonomie"
    ]
  },
  {
    "regal": "VZ20",
    "signatura": "556.41",
    "popis": "Geografie zemědělství a lesnictví",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "agriculture, zemědělství, lesnictví, forestry, rural geography",
    "keywords": [
      "agriculture",
      "zemědělství",
      "lesnictví",
      "forestry",
      "rural geography"
    ]
  },
  {
    "regal": "VZ20",
    "signatura": "556.42",
    "popis": "Geografie průmyslu",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "industrial geography, průmysl, továrny, manufacturing",
    "keywords": [
      "industrial geography",
      "průmysl",
      "továrny",
      "manufacturing"
    ]
  },
  {
    "regal": "VZ20",
    "signatura": "556.43",
    "popis": "Geografie dopravy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "transport geography, doprava, infrastruktura, transportation",
    "keywords": [
      "transport geography",
      "doprava",
      "infrastruktura",
      "transportation"
    ]
  },
  {
    "regal": "VZ20",
    "signatura": "556.44",
    "popis": "Geografie obchodu a služeb",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "trade geography, služby, obchod, retail, services",
    "keywords": [
      "trade geography",
      "služby",
      "obchod",
      "retail",
      "services"
    ]
  },
  {
    "regal": "VZ20",
    "signatura": "556.45",
    "popis": "Geografie cestovního ruchu a rekreace",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "tourism geography, cestovní ruch, turismus, recreation",
    "keywords": [
      "tourism geography",
      "cestovní ruch",
      "turismus",
      "recreation"
    ]
  },
  {
    "regal": "VZ21",
    "signatura": "557",
    "popis": "Kartografie a geoinformatika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "kartografie, mapování, GIS, cartography, geoinformatics, mapy",
    "keywords": [
      "kartografie",
      "mapování",
      "GIS",
      "cartography",
      "geoinformatics",
      "mapy"
    ]
  },
  {
    "regal": "VZ21",
    "signatura": "557.1",
    "popis": "Kartografie a topografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "kartografie, mapy, cartography, topografie, mapové zobrazení",
    "keywords": [
      "kartografie",
      "mapy",
      "cartography",
      "topografie",
      "mapové zobrazení"
    ]
  },
  {
    "regal": "VZ21",
    "signatura": "557.11",
    "popis": "Obecná teoretická kartografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "teorie kartografie, cartographic theory, mapové projekce",
    "keywords": [
      "teorie kartografie",
      "cartographic theory",
      "mapové projekce"
    ]
  },
  {
    "regal": "VZ21",
    "signatura": "557.12",
    "popis": "Matematická kartografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "mathematical cartography, projekce, zobrazení, map projections",
    "keywords": [
      "mathematical cartography",
      "projekce",
      "zobrazení",
      "map projections"
    ]
  },
  {
    "regal": "VZ21",
    "signatura": "557.13",
    "popis": "Topomastika a sémiotka",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "toponymy, toponymie, místní jména, kartografické znaky",
    "keywords": [
      "toponymy",
      "toponymie",
      "místní jména",
      "kartografické znaky"
    ]
  },
  {
    "regal": "VZ21",
    "signatura": "557.14",
    "popis": "Historická katrografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "historical cartography, staré mapy, history of cartography",
    "keywords": [
      "historical cartography",
      "staré mapy",
      "history of cartography"
    ]
  },
  {
    "regal": "VZ21",
    "signatura": "557.15",
    "popis": "Aplikovaná kartografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "applied cartography, tematické mapy, praktická kartografie",
    "keywords": [
      "applied cartography",
      "tematické mapy",
      "praktická kartografie"
    ]
  },
  {
    "regal": "VZ21",
    "signatura": "557.15",
    "popis": "Kartografické vizualizace",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "visualization, vizualizace, 3D mapy, geovisualization",
    "keywords": [
      "visualization",
      "vizualizace",
      "3D mapy",
      "geovisualization"
    ]
  },
  {
    "regal": "VZ21",
    "signatura": "557.2",
    "popis": "Geoinformační technologie (=GIS)",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "GIS, geographic information systems, geoinformatika, spatial analysis",
    "keywords": [
      "GIS",
      "geographic information systems",
      "geoinformatika",
      "spatial analysis"
    ]
  },
  {
    "regal": "VZ21",
    "signatura": "557.3",
    "popis": "Dálkový průzkum Země",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "remote sensing, DPZ, satelity, aerial photography, družice",
    "keywords": [
      "remote sensing",
      "DPZ",
      "satelity",
      "aerial photography",
      "družice"
    ]
  },
  {
    "regal": "VZ21",
    "signatura": "557.31",
    "popis": "Fotogrammetrie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "photogrammetry, fotogrammetrie, letecké snímkování, stereofotogrammetrie",
    "keywords": [
      "photogrammetry",
      "fotogrammetrie",
      "letecké snímkování",
      "stereofotogrammetrie"
    ]
  },
  {
    "regal": "VZ22",
    "signatura": "558",
    "popis": "Regionální geografie – obecná",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "regional geography, regionalistika, regiony, oblasti světa",
    "keywords": [
      "regional geography",
      "regionalistika",
      "regiony",
      "oblasti světa"
    ]
  },
  {
    "regal": "VZ22",
    "signatura": "558.1",
    "popis": "Regionální geografie Evropy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "Evropa, Europe, evropské státy, geography of Europe",
    "keywords": [
      "Evropa",
      "Europe",
      "evropské státy",
      "geography of Europe"
    ]
  },
  {
    "regal": "VZ22",
    "signatura": "558.11",
    "popis": "Československo; ČR; Slovensko",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "Česká republika, Slovensko, ČR, SR, Czech Republic, Slovakia",
    "keywords": [
      "Česká republika",
      "Slovensko",
      "ČR",
      "SR",
      "Czech Republic",
      "Slovakia"
    ]
  },
  {
    "regal": "VZ23",
    "signatura": "558.11",
    "popis": "Československo; ČR; Slovensko",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "Československo, ČSSR, Česko, Slovensko, Czech lands",
    "keywords": [
      "Československo",
      "ČSSR",
      "Česko",
      "Slovensko",
      "Czech lands"
    ]
  },
  {
    "regal": "VZ23",
    "signatura": "558.2",
    "popis": "Regionální geografie Asie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "Asie, Asia, asijské státy, geography of Asia, Čína, Japonsko",
    "keywords": [
      "Asie",
      "Asia",
      "asijské státy",
      "geography of Asia",
      "Čína",
      "Japonsko"
    ]
  },
  {
    "regal": "VZ23",
    "signatura": "558.3",
    "popis": "Regionální geografie Ameriky",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "Amerika, Americas, USA, Kanada, Latinská Amerika, Jižní Amerika",
    "keywords": [
      "Amerika",
      "Americas",
      "USA",
      "Kanada",
      "Latinská Amerika",
      "Jižní Amerika"
    ]
  },
  {
    "regal": "VZ23",
    "signatura": "558.4",
    "popis": "Regionální geografie Afriky",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "Afrika, Africa, africké státy, geography of Africa, Sahara",
    "keywords": [
      "Afrika",
      "Africa",
      "africké státy",
      "geography of Africa",
      "Sahara"
    ]
  },
  {
    "regal": "VZ24",
    "signatura": "558.5",
    "popis": "Regionální geografie Austrálie a Oceánie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "Austrálie, Oceánie, Australia, Oceania, Tichomoří, Pacific",
    "keywords": [
      "Austrálie",
      "Oceánie",
      "Australia",
      "Oceania",
      "Tichomoří",
      "Pacific"
    ]
  },
  {
    "regal": "VZ24",
    "signatura": "558.6",
    "popis": "Regionální geografie SSSR; Ruska",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "SSSR, Rusko, Sovětský svaz, Russia, geography of Russia",
    "keywords": [
      "SSSR",
      "Rusko",
      "Sovětský svaz",
      "Russia",
      "geography of Russia"
    ]
  },
  {
    "regal": "VZ24",
    "signatura": "558.7",
    "popis": "Geografie polárních oblastí",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "Arktida, Antarktida, polar regions, Arctic, Antarctic, polární",
    "keywords": [
      "Arktida",
      "Antarktida",
      "polar regions",
      "Arctic",
      "Antarctic",
      "polární"
    ]
  },
  {
    "regal": "VZ24",
    "signatura": "558.8",
    "popis": "Geografie oceánů a moří",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "oceány, moře, ocean geography, mořské prostředí, Atlantic, Pacific",
    "keywords": [
      "oceány",
      "moře",
      "ocean geography",
      "mořské prostředí",
      "Atlantic",
      "Pacific"
    ]
  },
  {
    "regal": "VZ24",
    "signatura": "558.9",
    "popis": "Turistické průvodce",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "průvodce, guidebooks, tourism, travel guides, turistika",
    "keywords": [
      "průvodce",
      "guidebooks",
      "tourism",
      "travel guides",
      "turistika"
    ]
  },
  {
    "regal": "VZ24",
    "signatura": "558.91",
    "popis": "Turistika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "hiking, turistika, outdoors, trails, venkovní aktivity",
    "keywords": [
      "hiking",
      "turistika",
      "outdoors",
      "trails",
      "venkovní aktivity"
    ]
  },
  {
    "regal": "VZ24",
    "signatura": "559",
    "popis": "Sborníky z konferencí; Mapy a atlasy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "conference proceedings, sborníky, konference, mapy, atlasy, maps",
    "keywords": [
      "conference proceedings",
      "sborníky",
      "konference",
      "mapy",
      "atlasy",
      "maps"
    ]
  },
  {
    "regal": "VZ24",
    "signatura": "559.1",
    "popis": "Geologické a geografické sborníky z konferencí",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "sborníky, proceedings, konference, symposia, workshop",
    "keywords": [
      "sborníky",
      "proceedings",
      "konference",
      "symposia",
      "workshop"
    ]
  },
  {
    "regal": "VZ25",
    "signatura": "559.5",
    "popis": "Geologické mapy a atlasy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geological maps, geologické mapy, atlasy, map sheets, mapové listy",
    "keywords": [
      "geological maps",
      "geologické mapy",
      "atlasy",
      "map sheets",
      "mapové listy"
    ]
  },
  {
    "regal": "VZ25",
    "signatura": "559.51",
    "popis": "Geologické mapy ČR a SR",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geologické mapy, Czech geological maps, 1:50000, 1:25000, ČGS",
    "keywords": [
      "geologické mapy",
      "Czech geological maps",
      "1:50000",
      "1:25000",
      "ČGS"
    ]
  },
  {
    "regal": "VZ25",
    "signatura": "559.52",
    "popis": "Geologické mapy zahraničí",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "foreign geological maps, světové mapy, international maps",
    "keywords": [
      "foreign geological maps",
      "světové mapy",
      "international maps"
    ]
  },
  {
    "regal": "VZ25",
    "signatura": "559.6",
    "popis": "Geografické mapy a atlasy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geographic maps, geografické mapy, world atlases, topografické mapy",
    "keywords": [
      "geographic maps",
      "geografické mapy",
      "world atlases",
      "topografické mapy"
    ]
  },
  {
    "regal": "VZ25",
    "signatura": "559.61",
    "popis": "Školní atlasy ČR a SR",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "školní atlasy, school atlases, český atlas, slovenský atlas",
    "keywords": [
      "školní atlasy",
      "school atlases",
      "český atlas",
      "slovenský atlas"
    ]
  },
  {
    "regal": "VZ25",
    "signatura": "559.62",
    "popis": "Školní atlasy – svět; Evropa",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "světové atlasy, atlasy Evropy, world atlas, European atlas",
    "keywords": [
      "světové atlasy",
      "atlasy Evropy",
      "world atlas",
      "European atlas"
    ]
  },
  {
    "regal": "VZ25",
    "signatura": "559.63",
    "popis": "Atlasy – ostatní",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "tematické atlasy, historické atlasy, klimatické atlasy",
    "keywords": [
      "tematické atlasy",
      "historické atlasy",
      "klimatické atlasy"
    ]
  },
  {
    "regal": "VZ25",
    "signatura": "559.64",
    "popis": "Mapy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "mapy, maps, topografické mapy, turistické mapy, topographic maps",
    "keywords": [
      "mapy",
      "maps",
      "topografické mapy",
      "turistické mapy",
      "topographic maps"
    ]
  },
  {
    "regal": "VZ26",
    "signatura": "559.7",
    "popis": "Statistiky",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "statistika, statistics, demografické údaje, statistical yearbooks",
    "keywords": [
      "statistika",
      "statistics",
      "demografické údaje",
      "statistical yearbooks"
    ]
  },
  {
    "regal": "VZ26",
    "signatura": "559.71",
    "popis": "Statistické ročenky ČR (ČSSR)",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "ročenky, yearbooks, statistika ČR, Czech statistics, ČSÚ",
    "keywords": [
      "ročenky",
      "yearbooks",
      "statistika ČR",
      "Czech statistics",
      "ČSÚ"
    ]
  },
  {
    "regal": "VZ26",
    "signatura": "559.72",
    "popis": "Sčítání lidu; domů a bytů ČR (ČSSR)",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "census, sčítání lidu, population census, demographic data",
    "keywords": [
      "census",
      "sčítání lidu",
      "population census",
      "demographic data"
    ]
  },
  {
    "regal": "VZ26",
    "signatura": "559.73",
    "popis": "Volební výsledky ČR (ČSSR",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "volby, elections, election results, volební geografie",
    "keywords": [
      "volby",
      "elections",
      "election results",
      "volební geografie"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Climatologica et Chorologica",
    "popis_novy": "",
    "popis_stary": "Acta Universitatis Szegediensis. Acta Climatologica et Chorologica",
    "typ": "časopis | sborník",
    "tema": "klimatologie, chorology, Szeged, maďarština, geografie",
    "keywords": [
      "klimatologie",
      "chorology",
      "Szeged",
      "maďarština",
      "geografie"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Environmentalica Universitatis Comenianae",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "životní prostředí, environmentalistika, Slovensko, slovenština, Univerzita Komenského",
    "keywords": [
      "životní prostředí",
      "environmentalistika",
      "Slovensko",
      "slovenština",
      "Univerzita Komenského"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Geodynamica et Geomaterialia",
    "popis_novy": "",
    "popis_stary": "Acta Montana. Ser. A",
    "typ": "časopis | sborník",
    "tema": "geodynamika, geomaterialy, peer-reviewed, Akademie věd, Česko, angličtina",
    "keywords": [
      "geodynamika",
      "geomaterialy",
      "peer-reviewed",
      "Akademie věd",
      "Česko",
      "angličtina"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Geologica et Geographica Universitatis Comenianae",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, geografie, Slovensko, slovenština, Univerzita Komenského, Bratislava",
    "keywords": [
      "geologie",
      "geografie",
      "Slovensko",
      "slovenština",
      "Univerzita Komenského",
      "Bratislava"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Geologica Polonica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Polsko, polština, angličtina, peer-reviewed, Polish Academy",
    "keywords": [
      "geologie",
      "Polsko",
      "polština",
      "angličtina",
      "peer-reviewed",
      "Polish Academy"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Geologica Slovaca (AGEOS)",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Slovensko, slovenština, angličtina, ŠGÚDŠ",
    "keywords": [
      "geologie",
      "Slovensko",
      "slovenština",
      "angličtina",
      "ŠGÚDŠ"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Geologica Universitatis Comenianae",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Univerzita Komenského, Slovensko, slovenština",
    "keywords": [
      "geologie",
      "Univerzita Komenského",
      "Slovensko",
      "slovenština"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Meteorologica Universitatis Comenianae",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "meteorologie, počasí, klima, Slovensko, slovenština",
    "keywords": [
      "meteorologie",
      "počasí",
      "klima",
      "Slovensko",
      "slovenština"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Mineralogica-petrographica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "mineralogie, petrografie, Maďarsko, peer-reviewed",
    "keywords": [
      "mineralogie",
      "petrografie",
      "Maďarsko",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Montana. Ser. A",
    "popis_novy": "Acta Geodynamica et Geomaterialia",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geodynamika, geomaterialy, peer-reviewed, Akademie věd, Česko, angličtina",
    "keywords": [
      "geodynamika",
      "geomaterialy",
      "peer-reviewed",
      "Akademie věd",
      "Česko",
      "angličtina"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Montana Ser. AB",
    "popis_novy": "Acta Research Reports",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "výzkumné zprávy, geologie, mineralogie, Slovensko",
    "keywords": [
      "výzkumné zprávy",
      "geologie",
      "mineralogie",
      "Slovensko"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Montanistica Slovana",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "hornictví, mining, důlní geologie, Slovensko, angličtina",
    "keywords": [
      "hornictví",
      "mining",
      "důlní geologie",
      "Slovensko",
      "angličtina"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Musei Moraviae. Scientiae Geologicae",
    "popis_novy": "",
    "popis_stary": "Časopis Moravského muzea v Brně. Vědy přírodní",
    "typ": "časopis | sborník",
    "tema": "geologie, Moravské muzeum, Brno, Česko, čeština",
    "keywords": [
      "geologie",
      "Moravské muzeum",
      "Brno",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Paleontologica Polonica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "paleontologie, fosilie, Polsko, high-impact, peer-reviewed, angličtina",
    "keywords": [
      "paleontologie",
      "fosilie",
      "Polsko",
      "high-impact",
      "peer-reviewed",
      "angličtina"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Pruhoniciana",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ekologie, botanika, Průhonice, Česko, životní prostředí",
    "keywords": [
      "ekologie",
      "botanika",
      "Průhonice",
      "Česko",
      "životní prostředí"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Rerum Naturalium: Přírodovědný sborník Vysočiny",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "přírodní vědy, Vysočina, regionální, Česko, čeština",
    "keywords": [
      "přírodní vědy",
      "Vysočina",
      "regionální",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Research Reports",
    "popis_novy": "",
    "popis_stary": "Acta Montana Ser. AB",
    "typ": "časopis | sborník",
    "tema": "výzkumné zprávy, geologie, mineralogie, Slovensko",
    "keywords": [
      "výzkumné zprávy",
      "geologie",
      "mineralogie",
      "Slovensko"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Universitatis Carolinae. Geographica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Univerzita Karlova, Praha, Česko, peer-reviewed",
    "keywords": [
      "geografie",
      "Univerzita Karlova",
      "Praha",
      "Česko",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Universitatis Carolinae. Geologica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Univerzita Karlova, Praha, Česko, peer-reviewed",
    "keywords": [
      "geologie",
      "Univerzita Karlova",
      "Praha",
      "Česko",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Universitatis Palackianae Olomucensis. Geographica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Univerzita Palackého, Olomouc, Česko, peer-reviewed",
    "keywords": [
      "geografie",
      "Univerzita Palackého",
      "Olomouc",
      "Česko",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Universitatis Szegediensis. Acta Geographica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Szeged, Maďarsko, university journal",
    "keywords": [
      "geografie",
      "Szeged",
      "Maďarsko",
      "university journal"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Acta Universitatis Szegediensis. Acta Climatologica et Chorologica",
    "popis_novy": "Acta Climatologica et Chorologica",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "klimatologie, chorology, Szeged, maďarština, geografie",
    "keywords": [
      "klimatologie",
      "chorology",
      "Szeged",
      "maďarština",
      "geografie"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Aktuality ČSÚ (Souborné informace)",
    "popis_novy": "",
    "popis_stary": "Statistické přehledy",
    "typ": "časopis | sborník",
    "tema": "statistika, Czech Statistical Office, ČSÚ, data, Česko",
    "keywords": [
      "statistika",
      "Czech Statistical Office",
      "ČSÚ",
      "data",
      "Česko"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "Alternativní energie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "obnovitelné zdroje, energie, renewable energy, Česko, čeština",
    "keywords": [
      "obnovitelné zdroje",
      "energie",
      "renewable energy",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ27",
    "signatura": "",
    "popis": "American Journal of Science",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "věda, geologie, USA, angličtina, high-impact, prestigious",
    "keywords": [
      "věda",
      "geologie",
      "USA",
      "angličtina",
      "high-impact",
      "prestigious"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "American Mineralogist",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "mineralogie, mineralogy, USA, angličtina, high-impact, peer-reviewed",
    "keywords": [
      "mineralogie",
      "mineralogy",
      "USA",
      "angličtina",
      "high-impact",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Annalen des Naturhistorischen Museums in Wein",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "přírodní historie, museum, Vídeň, Rakousko, němčina",
    "keywords": [
      "přírodní historie",
      "museum",
      "Vídeň",
      "Rakousko",
      "němčina"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Annual Report and List of Publications",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "výroční zpráva, publikace, report, angličtina",
    "keywords": [
      "výroční zpráva",
      "publikace",
      "report",
      "angličtina"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Anthropos",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "antropologie, archeologie, Brno, Česko, peer-reviewed",
    "keywords": [
      "antropologie",
      "archeologie",
      "Brno",
      "Česko",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Applied Geochemistry",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geochemie, aplikovaná, angličtina, high-impact, Elsevier",
    "keywords": [
      "geochemie",
      "aplikovaná",
      "angličtina",
      "high-impact",
      "Elsevier"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Aragonit: Vedecký a odborný časopis Správy slovenských jaskýň",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "jeskyně, speleologie, kras, Slovensko, slovenština",
    "keywords": [
      "jeskyně",
      "speleologie",
      "kras",
      "Slovensko",
      "slovenština"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Arc News",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "GIS, ESRI, geoinformatika, software, angličtina",
    "keywords": [
      "GIS",
      "ESRI",
      "geoinformatika",
      "software",
      "angličtina"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Arc Revue",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "GIS, kartografie, Francie, francouzština",
    "keywords": [
      "GIS",
      "kartografie",
      "Francie",
      "francouzština"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Archeologie Moravy a Slezska",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "archeologie, Morava, Slezsko, Česko, čeština",
    "keywords": [
      "archeologie",
      "Morava",
      "Slezsko",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Archiv für Lagerstättenforschung",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ložiska, ore deposits, Rakousko, němčina, historical",
    "keywords": [
      "ložiska",
      "ore deposits",
      "Rakousko",
      "němčina",
      "historical"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Baltica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Baltský region, Litva, angličtina, peer-reviewed",
    "keywords": [
      "geologie",
      "Baltský region",
      "Litva",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Beiträge zur Mineralogie und Petrographie",
    "popis_novy": "Contributions to Mineralogy and Petrology",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "mineralogie, petrologie, angličtina, high-impact, Springer",
    "keywords": [
      "mineralogie",
      "petrologie",
      "angličtina",
      "high-impact",
      "Springer"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Beiträge zur regionalen Geographie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "regionální, goegrafie, němčina",
    "keywords": [
      "regionální",
      "goegrafie",
      "němčina"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Berichte der Deutschen Mineralogischen Gesellschaft",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "německo, mineraologie, němčina",
    "keywords": [
      "německo",
      "mineraologie",
      "němčina"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Berliner Geographishe Arbeiten",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": " geografie, Berlín, Německo, němčina, university series",
    "keywords": [
      "geografie",
      "Berlín",
      "Německo",
      "němčina",
      "university series"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Bílé Karpaty",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "CHKO, přírodní vědy, Bílé Karpaty, Česko, regionální",
    "keywords": [
      "CHKO",
      "přírodní vědy",
      "Bílé Karpaty",
      "Česko",
      "regionální"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Biologie; chemie; zeměpis",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "didaktika, výuka, škola, Česko, pedagogika",
    "keywords": [
      "didaktika",
      "výuka",
      "škola",
      "Česko",
      "pedagogika"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Boletim Paranaense de Geociências",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Brazílie, portugalština, South America",
    "keywords": [
      "geologie",
      "Brazílie",
      "portugalština",
      "South America"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Boletín de la Real Sociedad Española de Historia Natural",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "přírodní historie, Španělsko, španělština, zoologie, geologie",
    "keywords": [
      "přírodní historie",
      "Španělsko",
      "španělština",
      "zoologie",
      "geologie"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Bonner Geographische Abhandlungen",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Bonn, Německo, němčina, university series",
    "keywords": [
      "geografie",
      "Bonn",
      "Německo",
      "němčina",
      "university series"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Bulletin Mineralogie Petrologie",
    "popis_novy": "",
    "popis_stary": "Bulletin mineralogicko-petrologického oddělení Národního muzea v Praze",
    "typ": "časopis | sborník",
    "tema": "mineralogie, petrologie, Národní muzeum, Praha, Česko",
    "keywords": [
      "mineralogie",
      "petrologie",
      "Národní muzeum",
      "Praha",
      "Česko"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Bulletin of Friends of Jade",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "mineralogie, jade, nefrit, collectors, angličtina",
    "keywords": [
      "mineralogie",
      "jade",
      "nefrit",
      "collectors",
      "angličtina"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Bulletin of the Czech Geological Survey 1993–⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠2002",
    "popis_novy": "Bulletin of Geosciences",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, ČGS, peer-reviewed, angličtina, Česko, high-quality",
    "keywords": [
      "geologie",
      "ČGS",
      "peer-reviewed",
      "angličtina",
      "Česko",
      "high-quality"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Bulletin of the Geological Survey, Prague 1951",
    "popis_novy": "Bulletin of Geosciences",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, ČGS, peer-reviewed, angličtina, Česko, high-quality",
    "keywords": [
      "geologie",
      "ČGS",
      "peer-reviewed",
      "angličtina",
      "Česko",
      "high-quality"
    ]
  },
  {
    "regal": "VZ28",
    "signatura": "",
    "popis": "Bulletin of Geosciences",
    "popis_novy": "",
    "popis_stary": "Bulletin of the Czech Geological Survey 1993–2002; Bulletin of the Geological Survey; Prague 1951, Věstník geologického ústavu pro Čechy a Moravu, 1939–1940; Věstník Státního geologického ústavu ČR 1925–1938; Věstník Státního geologického ústavu ČR 1945–1950; Věstník Ústředního ústavu geologického 1951–1992; Zprávy geologického ústavu pro Čechy a Moravu, 1940–1942",
    "typ": "časopis | sborník",
    "tema": "geologie, ČGS, peer-reviewed, angličtina, Česko, high-quality",
    "keywords": [
      "geologie",
      "ČGS",
      "peer-reviewed",
      "angličtina",
      "Česko",
      "high-quality"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Bulletin of Natural History Museum in Belegrade",
    "popis_novy": "",
    "popis_stary": "Glasnik Prirodnjačkog muzeja u Beogradu, Ser. A: Geološke nauke, Glasnik Prirodnjačkog muzeja u Beogradu, Ser. A: Biološke nauke",
    "typ": "časopis | sborník",
    "tema": "přírodní historie, Bělehrad, Srbsko, angličtina",
    "keywords": [
      "přírodní historie",
      "Bělehrad",
      "Srbsko",
      "angličtina"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Bulletin of the Natural History Museum – Plovdiv",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "přírodní historie, Plovdiv, Bulharsko, angličtina",
    "keywords": [
      "přírodní historie",
      "Plovdiv",
      "Bulharsko",
      "angličtina"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Bulletin of Volcanology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "vulkanologie, sopky, volcanology, angličtina, high-impact",
    "keywords": [
      "vulkanologie",
      "sopky",
      "volcanology",
      "angličtina",
      "high-impact"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Canadian Mineralogist",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "mineralogie, Kanada, angličtina, peer-reviewed",
    "keywords": [
      "mineralogie",
      "Kanada",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Centralblatt für Mineralogie, Geologie und Paläontologie",
    "popis_novy": "Neues Jahrbuch für Geologie und Paläontologie",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, geologie, paleontologie, Německo, němčina, angličtina, historical",
    "keywords": [
      "časopis",
      "geologie",
      "paleontologie",
      "Německo",
      "němčina",
      "angličtina",
      "historical"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Central European Regional Policy and Human Geography",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, regionální politika, humánní geografie, střední Evropa, angličtina",
    "keywords": [
      "časopis",
      "regionální politika",
      "humánní geografie",
      "střední Evropa",
      "angličtina"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Cizinci v České republikce",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "publikace, migrace, cizinci, demografie, Česko, ČSÚ",
    "keywords": [
      "publikace",
      "migrace",
      "cizinci",
      "demografie",
      "Česko",
      "ČSÚ"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Climatic Change",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "klimatické změny, climate change, angličtina, high-impact",
    "keywords": [
      "klimatické změny",
      "climate change",
      "angličtina",
      "high-impact"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Comptes Rendus. Palevol",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "paleontologie, Francie, angličtina, francouzština, peer-reviewed",
    "keywords": [
      "paleontologie",
      "Francie",
      "angličtina",
      "francouzština",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Contributions from the Museum of Paleontology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "paleontologie, USA, muzeum, angličtina, peer-reviewed",
    "keywords": [
      "paleontologie",
      "USA",
      "muzeum",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Contributions to Mineralogy and Petrology",
    "popis_novy": "",
    "popis_stary": "Beiträge zur Mineralogie und Petrographie",
    "typ": "časopis | sborník",
    "tema": "mineralogie, petrologie, angličtina, high-impact, Springer",
    "keywords": [
      "mineralogie",
      "petrologie",
      "angličtina",
      "high-impact",
      "Springer"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Czasopismo Geograficzne",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Polsko, polština, Polish Geographical Society",
    "keywords": [
      "geografie",
      "Polsko",
      "polština",
      "Polish Geographical Society"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Czech Journal of Tourism",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "cestovní ruch, turismus, angličtina, Česko, peer-reviewed",
    "keywords": [
      "cestovní ruch",
      "turismus",
      "angličtina",
      "Česko",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Czech Polar Reports",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "polární výzkum, Arktida, Antarktida, Česko, angličtina",
    "keywords": [
      "polární výzkum",
      "Arktida",
      "Antarktida",
      "Česko",
      "angličtina"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Časopis Moravského musea",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Moravské muzeum, Brno, přírodní vědy, Česko, čeština",
    "keywords": [
      "Moravské muzeum",
      "Brno",
      "přírodní vědy",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Časopis Národního muzea",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Národní muzeum, Praha, věda, Česko, čeština",
    "keywords": [
      "Národní muzeum",
      "Praha",
      "věda",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Časopis pro mineralogii a geologii 1923–1924; 1956–1992",
    "popis_novy": "Journal of Geosciences",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "mineralogie, geologie, historický, Česko, čeština",
    "keywords": [
      "mineralogie",
      "geologie",
      "historický",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Časopis Vlasteneckého muzejního spolku v Olomouci",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Olomouc, vlastivěda, regionální, historický, Česko",
    "keywords": [
      "Olomouc",
      "vlastivěda",
      "regionální",
      "historický",
      "Česko"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Československý kras",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "kras, speleologie, jeskyně, Česko, historický",
    "keywords": [
      "kras",
      "speleologie",
      "jeskyně",
      "Česko",
      "historický"
    ]
  },
  {
    "regal": "VZ29",
    "signatura": "",
    "popis": "Český kras",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "kras, speleologie, Český kras, Česko, čeština",
    "keywords": [
      "kras",
      "speleologie",
      "Český kras",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Daten – Fakten – Literatur zur Geographie Europas",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Evropa, němčina, data, fakta",
    "keywords": [
      "geografie",
      "Evropa",
      "němčina",
      "data",
      "fakta"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Documenta Geonica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Slovensko, slovenština, dokumenty",
    "keywords": [
      "geografie",
      "Slovensko",
      "slovenština",
      "dokumenty"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Demografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "demografie, populace, ČSÚ, Česko, čeština",
    "keywords": [
      "demografie",
      "populace",
      "ČSÚ",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Dnešní svět",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geopolitika, mezinárodní vztahy, Česko, čeština",
    "keywords": [
      "geopolitika",
      "mezinárodní vztahy",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Earth Surface Processes and Landforms",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geomorfologie, procesy, angličtina, high-impact, Wiley",
    "keywords": [
      "geomorfologie",
      "procesy",
      "angličtina",
      "high-impact",
      "Wiley"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Ecologia Balcanica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ekologie, Balkán, angličtina, peer-reviewed",
    "keywords": [
      "ekologie",
      "Balkán",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Economic Geology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ložisková geologie, rudy, angličtina, high-impact, prestigious",
    "keywords": [
      "ložisková geologie",
      "rudy",
      "angličtina",
      "high-impact",
      "prestigious"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "E-Government",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "veřejná správa, digitalizace, e-government, Česko",
    "keywords": [
      "veřejná správa",
      "digitalizace",
      "e-government",
      "Česko"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "EIA; IPPC; SEA",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "posuzování vlivů, EIA, životní prostředí, Česko",
    "keywords": [
      "posuzování vlivů",
      "EIA",
      "životní prostředí",
      "Česko"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "EKOfutura: eticky – ekologicky – ekonomicky",
    "popis_novy": "",
    "popis_stary": "EKO: Ekologie a společnost",
    "typ": "časopis | sborník",
    "tema": " ekologie, udržitelnost, Česko, čeština",
    "keywords": [
      "ekologie",
      "udržitelnost",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Ekológia",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ekologie, Slovensko, slovenština, peer-reviewed",
    "keywords": [
      "ekologie",
      "Slovensko",
      "slovenština",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Ekologické štúdie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ekologie, životní prostředí, Slovensko, slovenština",
    "keywords": [
      "ekologie",
      "životní prostředí",
      "Slovensko",
      "slovenština"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Ekonom",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ekonomika, business, Česko, čeština, týdeník",
    "keywords": [
      "ekonomika",
      "business",
      "Česko",
      "čeština",
      "týdeník"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Elements",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "mineralogie, geochemie, angličtina, popular science, high-quality",
    "keywords": [
      "mineralogie",
      "geochemie",
      "angličtina",
      "popular science",
      "high-quality"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Energie 21",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "energie, energetika, udržitelnost, Česko, čeština",
    "keywords": [
      "energie",
      "energetika",
      "udržitelnost",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Episodes",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, IUGS, mezinárodní, angličtina, peer-reviewed",
    "keywords": [
      "geologie",
      "IUGS",
      "mezinárodní",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Europa Regional",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "regionální geografie, Evropa, němčina, angličtina",
    "keywords": [
      "regionální geografie",
      "Evropa",
      "němčina",
      "angličtina"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "European Journal of Environmental Sciences",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "životní prostředí, Česko, angličtina, peer-reviewed",
    "keywords": [
      "životní prostředí",
      "Česko",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "European Journal of Mieralogy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "mineralogie, Evropa, angličtina, high-impact, peer-reviewed",
    "keywords": [
      "mineralogie",
      "Evropa",
      "angličtina",
      "high-impact",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "European Spatial Research and Policy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "územní plánování, spatial policy, Evropa, angličtina",
    "keywords": [
      "územní plánování",
      "spatial policy",
      "Evropa",
      "angličtina"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "FAO – Production Book",
    "popis_novy": "",
    "popis_stary": "Production Book",
    "typ": "časopis | sborník",
    "tema": "",
    "keywords": [
      ""
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Flanders",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Belgie, Vlámsko, nizozemština, geografie",
    "keywords": [
      "Belgie",
      "Vlámsko",
      "nizozemština",
      "geografie"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Folia biologica et geologica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "biologie, geologie, Slovinsko, peer-reviewed",
    "keywords": [
      "biologie",
      "geologie",
      "Slovinsko",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Folia Musei rerum naturalium Bohemiae occidentalis. Geologica et Paleobiologica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, paleobiologie, Plzeň, Česko, západní Čechy",
    "keywords": [
      "geologie",
      "paleobiologie",
      "Plzeň",
      "Česko",
      "západní Čechy"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Folia Quaternaria",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": " kvartér, čtvrtohorny, Polsko, angličtina, peer-reviewed",
    "keywords": [
      "kvartér",
      "čtvrtohorny",
      "Polsko",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Folia. Geologia",
    "popis_novy": "",
    "popis_stary": "Folia Facultatis scientiarum naturalium Universitatis Masarykianae Brunesis.  Geologia,  Folia Přírodovědecké fakulty University J. E. Purkyně v Brně. Geologia",
    "typ": "časopis | sborník",
    "tema": "geologie, Masarykova univerzita, Brno, Česko",
    "keywords": [
      "geologie",
      "Masarykova univerzita",
      "Brno",
      "Česko"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Folia. Geographia",
    "popis_novy": "",
    "popis_stary": "Folia Facultatis scientiarum naturalium Universitatis Masarykianae Brunesis.  Geographia, Folia Přírodovědecké fakulty University J. E. Purkyně v Brně. Geographia",
    "typ": "časopis | sborník",
    "tema": "geografie, Masarykova univerzita, Brno, Česko",
    "keywords": [
      "geografie",
      "Masarykova univerzita",
      "Brno",
      "Česko"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Forum Raumentwicklung : Informationsheft",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "územní rozvoj, Švýcarsko, němčina",
    "keywords": [
      "územní rozvoj",
      "Švýcarsko",
      "němčina"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Fossil Imprint",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "paleontologie, fosilie, Česko, angličtina, peer-reviewed",
    "keywords": [
      "paleontologie",
      "fosilie",
      "Česko",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "GA: the Magazine of the Geographical Association",
    "popis_novy": "",
    "popis_stary": "GA News: the Newsletter of the Geographical Association",
    "typ": "časopis | sborník",
    "tema": "geografie, Velká Británie, angličtina, pedagogika",
    "keywords": [
      "geografie",
      "Velká Británie",
      "angličtina",
      "pedagogika"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Geobusiness",
    "popis_novy": "",
    "popis_stary": "Geoinformace",
    "typ": "časopis | sborník",
    "tema": "GIS, geoinformatika, business, Česko, čeština",
    "keywords": [
      "GIS",
      "geoinformatika",
      "business",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Geodetický a kartografický obzor",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geodézie, kartografie, Česko, čeština, ČÚZK",
    "keywords": [
      "geodézie",
      "kartografie",
      "Česko",
      "čeština",
      "ČÚZK"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Geodiversitas",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "biodiverzita, taxonomie, Francie, angličtina, peer-reviewed",
    "keywords": [
      "biodiverzita",
      "taxonomie",
      "Francie",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Géoéconimie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geoekonomie, ekonomika, Francie, francouzština",
    "keywords": [
      "geoekonomie",
      "ekonomika",
      "Francie",
      "francouzština"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Geografia",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Slovensko, slovenština, peer-reviewed",
    "keywords": [
      "geografie",
      "Slovensko",
      "slovenština",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Geografické informácie: Časopis KGaRR FPV UKF v Nitre",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Nitra, Slovensko, slovenština",
    "keywords": [
      "geografie",
      "Nitra",
      "Slovensko",
      "slovenština"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "Geografické práce",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Slovensko, slovenština, peer-reviewed",
    "keywords": [
      "geografie",
      "Slovensko",
      "slovenština",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ31",
    "signatura": "",
    "popis": "Geografické rozhledy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Česko, čeština, popularizační, školy",
    "keywords": [
      "geografie",
      "Česko",
      "čeština",
      "popularizační",
      "školy"
    ]
  },
  {
    "regal": "VZ31",
    "signatura": "",
    "popis": "Geografický časopis",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Slovensko, slovenština, SAV, peer-reviewed",
    "keywords": [
      "geografie",
      "Slovensko",
      "slovenština",
      "SAV",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ31",
    "signatura": "",
    "popis": "Geografie. Sborník České geografické společnosti",
    "popis_novy": "",
    "popis_stary": "Sborník České geografické společnosti; Sborník České společnosti zeměpisné; Sborník České společnosti zeměvědné; Sborník Československé geografické společnosti; Sborník Československé společnosti zeměpisné",
    "typ": "časopis | sborník",
    "tema": "geografie, ČGS, Česko, čeština, peer-reviewed",
    "keywords": [
      "geografie",
      "ČGS",
      "Česko",
      "čeština",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ31",
    "signatura": "",
    "popis": "Geografie. Sborník prací Pedagogické fakulty MU",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Masarykova univerzita, Brno, Česko",
    "keywords": [
      "geografie",
      "Masarykova univerzita",
      "Brno",
      "Česko"
    ]
  },
  {
    "regal": "VZ31",
    "signatura": "",
    "popis": "Geographia Cassoviensis",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Košice, Slovensko, slovenština",
    "keywords": [
      "geografie",
      "Košice",
      "Slovensko",
      "slovenština"
    ]
  },
  {
    "regal": "VZ31",
    "signatura": "",
    "popis": "Geographia Slovaca",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": " geografie, Slovensko, angličtina, peer-reviewed",
    "keywords": [
      "geografie",
      "Slovensko",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ31",
    "signatura": "",
    "popis": "Geographical Reports of Tokyo Metropolitan University",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Tokio, Japonsko, angličtina",
    "keywords": [
      "geografie",
      "Tokio",
      "Japonsko",
      "angličtina"
    ]
  },
  {
    "regal": "VZ31",
    "signatura": "",
    "popis": "Geographische Rundschau",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Německo, němčina, didaktika",
    "keywords": [
      "geografie",
      "Německo",
      "němčina",
      "didaktika"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geography",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Velká Británie, angličtina, Geographical Association",
    "keywords": [
      "geografie",
      "Velká Británie",
      "angličtina",
      "Geographical Association"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geography; environment; sustainability",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, udržitelnost, Rusko, angličtina",
    "keywords": [
      "geografie",
      "udržitelnost",
      "Rusko",
      "angličtina"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geochimica et Cosmochimica Acta",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geochemie, kosmochemie, angličtina, high-impact, prestigious",
    "keywords": [
      "geochemie",
      "kosmochemie",
      "angličtina",
      "high-impact",
      "prestigious"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geoinformace",
    "popis_novy": "Geobusiness",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "GIS, geoinformatika, Česko, čeština",
    "keywords": [
      "GIS",
      "geoinformatika",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geoinformatics",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "GIS, geoinformatika, angličtina, international",
    "keywords": [
      "GIS",
      "geoinformatika",
      "angličtina",
      "international"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geolines",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, ČGS, Česko, angličtina",
    "keywords": [
      "geologie",
      "ČGS",
      "Česko",
      "angličtina"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geologia",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Polsko, polština, peer-reviewed",
    "keywords": [
      "geologie",
      "Polsko",
      "polština",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geologica Belgica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Belgie, angličtina, peer-reviewed",
    "keywords": [
      "geologie",
      "Belgie",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geologica Carpathica",
    "popis_novy": "",
    "popis_stary": " Geologický sborník Slovenskej akadémie vied 1950–1967; Geologický zborník Bratislava 1968–1990",
    "typ": "časopis | sborník",
    "tema": "geologie, Karpaty, Slovensko, angličtina, peer-reviewed",
    "keywords": [
      "geologie",
      "Karpaty",
      "Slovensko",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geologica Croatica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Chorvatsko, angličtina, peer-reviewed",
    "keywords": [
      "geologie",
      "Chorvatsko",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geologica Hungarica. Series Palaeontologica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "paleontologie, Maďarsko, angličtina",
    "keywords": [
      "paleontologie",
      "Maďarsko",
      "angličtina"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geologica Saxonica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Sasko, Německo, angličtina",
    "keywords": [
      "geologie",
      "Sasko",
      "Německo",
      "angličtina"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geologica Sudetica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Sudety, Polsko, angličtina",
    "keywords": [
      "geologie",
      "Sudety",
      "Polsko",
      "angličtina"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geologica USP",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Brazílie, São Paulo, portugalština",
    "keywords": [
      "geologie",
      "Brazílie",
      "São Paulo",
      "portugalština"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geological Abstracts",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, referáty, angličtina, database",
    "keywords": [
      "geologie",
      "referáty",
      "angličtina",
      "database"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geological Quarterly",
    "popis_novy": "",
    "popis_stary": "Kwartalnik Geologiczny",
    "typ": "časopis | sborník",
    "tema": "geologie, Polsko, angličtina, peer-reviewed",
    "keywords": [
      "geologie",
      "Polsko",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geologické práce. Geotechnika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geotechnika, inženýrská geologie, Slovensko, slovenština",
    "keywords": [
      "geotechnika",
      "inženýrská geologie",
      "Slovensko",
      "slovenština"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geologické práce. Správy",
    "popis_novy": "",
    "popis_stary": "Geologické práce. Zprávy",
    "typ": "časopis | sborník",
    "tema": "zprávy, geologie, Slovensko, slovenština",
    "keywords": [
      "zprávy",
      "geologie",
      "Slovensko",
      "slovenština"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geologické práce. Zošit",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, sešit, Slovensko, slovenština",
    "keywords": [
      "geologie",
      "sešit",
      "Slovensko",
      "slovenština"
    ]
  },
  {
    "regal": "VZ32",
    "signatura": "",
    "popis": "Geologické výzkumy na Moravě a ve Slezsku",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Morava, Slezsko, Česko, čeština",
    "keywords": [
      "geologie",
      "Morava",
      "Slezsko",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Geologický průzkum",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologický průzkum, exploration, Česko, čeština",
    "keywords": [
      "geologický průzkum",
      "exploration",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Geologický sborník Slovenskej akadémie vied 1950–1967",
    "popis_novy": "Geologica Carpathica",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, SAV, Slovensko, historický",
    "keywords": [
      "geologie",
      "SAV",
      "Slovensko",
      "historický"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Geologický zborník Bratislava 1968–1990",
    "popis_novy": "Geologica Carpathica",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Bratislava, Slovensko, slovenština, historický",
    "keywords": [
      "geologie",
      "Bratislava",
      "Slovensko",
      "slovenština",
      "historický"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Geologija",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Slovinsko, peer-reviewed",
    "keywords": [
      "geologie",
      "Slovinsko",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Geologische Rundschau",
    "popis_novy": "International Journal of Earth Science",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, němčina",
    "keywords": [
      "geologie",
      "němčina"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Geologos",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Polsko, angličtina, peer-reviewed",
    "keywords": [
      "geologie",
      "Polsko",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Geomorfologický sborník",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geomorfologie, reliéf, Česko, čeština",
    "keywords": [
      "geomorfologie",
      "reliéf",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Geomorphologia Slovaca",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geomorfologie, Slovensko, slovenština, peer-reviewed",
    "keywords": [
      "geomorfologie",
      "Slovensko",
      "slovenština",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Geoscape",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "krajina, landscape, Česko, angličtina",
    "keywords": [
      "krajina",
      "landscape",
      "Česko",
      "angličtina"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Geoscientist",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Velká Británie, angličtina, Geological Society",
    "keywords": [
      "geologie",
      "Velká Británie",
      "angličtina",
      "Geological Society"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Geospatial Solutions",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "GIS, geospatial, angličtina, USA",
    "keywords": [
      "GIS",
      "geospatial",
      "angličtina",
      "USA"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Geotechnica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geotechnika, inženýrská geologie, Česko, čeština",
    "keywords": [
      "geotechnika",
      "inženýrská geologie",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Geowissenschaftliche Mitteilungen (GMIT)",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Německo, němčina, geological society",
    "keywords": [
      "geologie",
      "Německo",
      "němčina",
      "geological society"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "GW Unterricht",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, didaktika, Rakousko, němčina",
    "keywords": [
      "geografie",
      "didaktika",
      "Rakousko",
      "němčina"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Historická geografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, historická geografie, historical geography, Česko, čeština",
    "keywords": [
      "časopis",
      "historická geografie",
      "historical geography",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Hungarian Geographical Bulletin",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, geografie, Maďarsko, angličtina, peer-reviewed",
    "keywords": [
      "časopis",
      "geografie",
      "Maďarsko",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Hvězdářská ročenka",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ročenka, astronomie, Česko, čeština, populární",
    "keywords": [
      "ročenka",
      "astronomie",
      "Česko",
      "čeština",
      "populární"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Hydrogeology Journal",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, hydrogeologie, podzemní voda, angličtina, high-impact",
    "keywords": [
      "časopis",
      "hydrogeologie",
      "podzemní voda",
      "angličtina",
      "high-impact"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Hydrological Sciences Journal",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, hydrologie, vodstvo, angličtina, high-impact, IAHS",
    "keywords": [
      "časopis",
      "hydrologie",
      "vodstvo",
      "angličtina",
      "high-impact",
      "IAHS"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Hydrologická ročenka České republiky",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ročenka, hydrologie, ČHMÚ, Česko, data",
    "keywords": [
      "ročenka",
      "hydrologie",
      "ČHMÚ",
      "Česko",
      "data"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Chemical Geology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, geochemie, chemie, angličtina, high-impact, Elsevier",
    "keywords": [
      "časopis",
      "geochemie",
      "chemie",
      "angličtina",
      "high-impact",
      "Elsevier"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Időjárás",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, meteorologie, Maďarsko, maďarština, angličtina",
    "keywords": [
      "časopis",
      "meteorologie",
      "Maďarsko",
      "maďarština",
      "angličtina"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Images économiques du monde",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ročenka, ekonomie, svět, Francie, francouzština",
    "keywords": [
      "ročenka",
      "ekonomie",
      "svět",
      "Francie",
      "francouzština"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Informace České geografické společnosti",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "informace, ČGS, geografie, Česko, čeština",
    "keywords": [
      "informace",
      "ČGS",
      "geografie",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Integrative Systematics",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "systematika, taxonomie, angličtina, peer-reviewed",
    "keywords": [
      "systematika",
      "taxonomie",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "Interdisciplinaria Archaeologica: Natural Sciences in Arecheology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geoarcheologie, archeologie, přírodní vědy, Česko, angličtina",
    "keywords": [
      "geoarcheologie",
      "archeologie",
      "přírodní vědy",
      "Česko",
      "angličtina"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "International Journal of Digital Earth",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "digital earth, GIS, angličtina, peer-reviewed",
    "keywords": [
      "digital earth",
      "GIS",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ33",
    "signatura": "",
    "popis": "International Journal of Earh Science",
    "popis_novy": "",
    "popis_stary": "Geologische Rundschau",
    "typ": "časopis | sborník",
    "tema": "geologie, angličtina, high-impact, Springer",
    "keywords": [
      "geologie",
      "angličtina",
      "high-impact",
      "Springer"
    ]
  },
  {
    "regal": "VZ34",
    "signatura": "",
    "popis": "Izvestija Rossijskoj Akademii Nauk. Serija geografičeskaja",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Rusko, ruština, Russian Academy",
    "keywords": [
      "geografie",
      "Rusko",
      "ruština",
      "Russian Academy"
    ]
  },
  {
    "regal": "VZ34",
    "signatura": "",
    "popis": "Jahrbuch der Geologischen Bundesentalt",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Rakousko, němčina, geological survey",
    "keywords": [
      "geologie",
      "Rakousko",
      "němčina",
      "geological survey"
    ]
  },
  {
    "regal": "VZ34",
    "signatura": "",
    "popis": "Joannea - Mineraologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "mineralogie, Rakousko, němčina",
    "keywords": [
      "mineralogie",
      "Rakousko",
      "němčina"
    ]
  },
  {
    "regal": "VZ34",
    "signatura": "",
    "popis": "Journal and Proceedings of the Royal Society of New South Wales",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "věda, Austrálie, angličtina, peer-reviewed",
    "keywords": [
      "věda",
      "Austrálie",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ34",
    "signatura": "",
    "popis": "Journal of Environmental Geography",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "environmentální geografie, angličtina, Maďarsko",
    "keywords": [
      "environmentální geografie",
      "angličtina",
      "Maďarsko"
    ]
  },
  {
    "regal": "VZ34",
    "signatura": "",
    "popis": "Journal of Foraminiferal Research",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "mikropaleontologie, foraminifera, angličtina, peer-reviewed",
    "keywords": [
      "mikropaleontologie",
      "foraminifera",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ34",
    "signatura": "",
    "popis": "Journal of Geochemical Exploration",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geochemie, prospekce, angličtina, Elsevier",
    "keywords": [
      "geochemie",
      "prospekce",
      "angličtina",
      "Elsevier"
    ]
  },
  {
    "regal": "VZ34",
    "signatura": "",
    "popis": "Journal of Geology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, USA, angličtina, high-impact, prestigious",
    "keywords": [
      "geologie",
      "USA",
      "angličtina",
      "high-impact",
      "prestigious"
    ]
  },
  {
    "regal": "VZ34",
    "signatura": "",
    "popis": "Journal of Geosciences",
    "popis_novy": "",
    "popis_stary": "Časopis pro mineralogii a geologii 1923–1924, 1956–1992; Journal of the Czech Geological Society 1993–2006",
    "typ": "časopis | sborník",
    "tema": "geologie, mineralogie, Česko, angličtina, peer-reviewed",
    "keywords": [
      "geologie",
      "mineralogie",
      "Česko",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ34",
    "signatura": "",
    "popis": "Journal of Hydrology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "hydrologie, vodstvo, angličtina, high-impact, Elsevier",
    "keywords": [
      "hydrologie",
      "vodstvo",
      "angličtina",
      "high-impact",
      "Elsevier"
    ]
  },
  {
    "regal": "VZ34",
    "signatura": "",
    "popis": "Journal of Hydrology and Hydromechanics",
    "popis_novy": "",
    "popis_stary": "Vodohospodářský časopis",
    "typ": "časopis | sborník",
    "tema": "hydrologie, hydraulika, Slovensko, angličtina, peer-reviewed",
    "keywords": [
      "hydrologie",
      "hydraulika",
      "Slovensko",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ34",
    "signatura": "",
    "popis": "Journal of Landscape Ecology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "krajinná ekologie, Česko, angličtina, peer-reviewed",
    "keywords": [
      "krajinná ekologie",
      "Česko",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ34",
    "signatura": "",
    "popis": "Journal of Paleontology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "paleontologie, fosilie, USA, angličtina, high-impact",
    "keywords": [
      "paleontologie",
      "fosilie",
      "USA",
      "angličtina",
      "high-impact"
    ]
  },
  {
    "regal": "VZ35",
    "signatura": "",
    "popis": "Journal of Petrology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "petrologie, horniny, angličtina, high-impact, prestigious",
    "keywords": [
      "petrologie",
      "horniny",
      "angličtina",
      "high-impact",
      "prestigious"
    ]
  },
  {
    "regal": "VZ35",
    "signatura": "",
    "popis": "Journal of the Czech Geological Society 1993–2006",
    "popis_novy": "Journal of Geosciences",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, mineralogie, Česko, angličtina, peer-reviewed",
    "keywords": [
      "geologie",
      "mineralogie",
      "Česko",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ35",
    "signatura": "",
    "popis": "Journal of Sedimentary Research",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "sedimentologie, sedimenty, angličtina, high-impact, SEPM",
    "keywords": [
      "sedimentologie",
      "sedimenty",
      "angličtina",
      "high-impact",
      "SEPM"
    ]
  },
  {
    "regal": "VZ35",
    "signatura": "",
    "popis": "Journal of Structural Geology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "strukturní geologie, tektonika, angličtina, high-impact",
    "keywords": [
      "strukturní geologie",
      "tektonika",
      "angličtina",
      "high-impact"
    ]
  },
  {
    "regal": "VZ35",
    "signatura": "",
    "popis": "Kámen",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "mineralogie, geologie, Česko, čeština, populární",
    "keywords": [
      "mineralogie",
      "geologie",
      "Česko",
      "čeština",
      "populární"
    ]
  },
  {
    "regal": "VZ35",
    "signatura": "",
    "popis": "Kartografija i geoinformacije",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "kartografie, GIS, Chorvatsko",
    "keywords": [
      "kartografie",
      "GIS",
      "Chorvatsko"
    ]
  },
  {
    "regal": "VZ35",
    "signatura": "",
    "popis": "Koktejl",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "populární věda, Česko, čeština",
    "keywords": [
      "populární věda",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ35",
    "signatura": "",
    "popis": "Krystalinikum",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, krystalinikum, Česko, čeština",
    "keywords": [
      "geologie",
      "krystalinikum",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ35",
    "signatura": "",
    "popis": "Kwartalnik geologicky ",
    "popis_novy": "Geological Quarterly",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie",
    "keywords": [
      "geologie"
    ]
  },
  {
    "regal": "VZ35",
    "signatura": "",
    "popis": "Lapis",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "mineralogie, drahé kameny, Německo, němčina, populární",
    "keywords": [
      "mineralogie",
      "drahé kameny",
      "Německo",
      "němčina",
      "populární"
    ]
  },
  {
    "regal": "VZ30",
    "signatura": "",
    "popis": "L'état du monde: Annuaire économique et géopolitique mondial",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "svět, geopolitika, ekonomika, Francie, francouzština",
    "keywords": [
      "svět",
      "geopolitika",
      "ekonomika",
      "Francie",
      "francouzština"
    ]
  },
  {
    "regal": "VZ35",
    "signatura": "",
    "popis": "Lidé a Země",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "antropogeografie, Česko, čeština, popular",
    "keywords": [
      "antropogeografie",
      "Česko",
      "čeština",
      "popular"
    ]
  },
  {
    "regal": "VZ35",
    "signatura": "",
    "popis": "Magyar Állami Földtani Intézet évi jelentése",
    "popis_novy": "",
    "popis_stary": "Magyar Állami Földtani Intézet évkönyve",
    "typ": "časopis | sborník",
    "tema": "maďarsko, maďarština",
    "keywords": [
      "maďarsko",
      "maďarština"
    ]
  },
  {
    "regal": "VZ35",
    "signatura": "",
    "popis": "Meteorologické zprávy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "meteorologie, ČHMÚ, Česko, čeština",
    "keywords": [
      "meteorologie",
      "ČHMÚ",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ35",
    "signatura": "",
    "popis": "Meteorologický časopis",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "meteorologie, Slovensko, slovenština, peer-reviewed",
    "keywords": [
      "meteorologie",
      "Slovensko",
      "slovenština",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ35",
    "signatura": "",
    "popis": "Meteorološki letopis",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "meteorologie, Chorvatsko, chorvatština",
    "keywords": [
      "meteorologie",
      "Chorvatsko",
      "chorvatština"
    ]
  },
  {
    "regal": "VZ36",
    "signatura": "",
    "popis": "Minerál: svět nerostů a drahých kamenů",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "mineralogie, drahé kameny, Česko, čeština, populární",
    "keywords": [
      "mineralogie",
      "drahé kameny",
      "Česko",
      "čeština",
      "populární"
    ]
  },
  {
    "regal": "VZ36",
    "signatura": "",
    "popis": "Mineralia Slovaca",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, mineralogie, Slovensko, slovenština, angličtina",
    "keywords": [
      "časopis",
      "mineralogie",
      "Slovensko",
      "slovenština",
      "angličtina"
    ]
  },
  {
    "regal": "VZ36",
    "signatura": "",
    "popis": "Minerální suroviny",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, nerostné suroviny, Česko, čeština, ČGS",
    "keywords": [
      "časopis",
      "nerostné suroviny",
      "Česko",
      "čeština",
      "ČGS"
    ]
  },
  {
    "regal": "VZ36",
    "signatura": "",
    "popis": "Mineralogica et Petrographica Acta",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, mineralogie, petrografie, Maďarsko, angličtina",
    "keywords": [
      "časopis",
      "mineralogie",
      "petrografie",
      "Maďarsko",
      "angličtina"
    ]
  },
  {
    "regal": "VZ36",
    "signatura": "",
    "popis": "Mineralogical Journal",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, mineralogie, Japonsko, angličtina, peer-reviewed",
    "keywords": [
      "časopis",
      "mineralogie",
      "Japonsko",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ36",
    "signatura": "",
    "popis": "Mineralogical Magazine",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, mineralogie, Velká Británie, angličtina, high-impact",
    "keywords": [
      "časopis",
      "mineralogie",
      "Velká Británie",
      "angličtina",
      "high-impact"
    ]
  },
  {
    "regal": "VZ36",
    "signatura": "",
    "popis": "Mineralogy and Petrology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, mineralogie, petrologie, angličtina, Springer, peer-reviewed",
    "keywords": [
      "časopis",
      "mineralogie",
      "petrologie",
      "angličtina",
      "Springer",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ36",
    "signatura": "",
    "popis": "Miscellanea Geographica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, geografie, Polsko, angličtina, peer-reviewed",
    "keywords": [
      "časopis",
      "geografie",
      "Polsko",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ36",
    "signatura": "",
    "popis": "Mitteilungen der Österreichischen Mineralogischen Gesellschaft",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, mineralogie, Rakousko, němčina, mineralogical society",
    "keywords": [
      "časopis",
      "mineralogie",
      "Rakousko",
      "němčina",
      "mineralogical society"
    ]
  },
  {
    "regal": "VZ36",
    "signatura": "",
    "popis": "Moravian Geographical Reports",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, geografie, Česko, angličtina, peer-reviewed, high-quality",
    "keywords": [
      "časopis",
      "geografie",
      "Česko",
      "angličtina",
      "peer-reviewed",
      "high-quality"
    ]
  },
  {
    "regal": "VZ36",
    "signatura": "",
    "popis": "Muzeum Brněnska: sborník",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "sborník, muzeum, Brno, přírodní vědy, Česko",
    "keywords": [
      "sborník",
      "muzeum",
      "Brno",
      "přírodní vědy",
      "Česko"
    ]
  },
  {
    "regal": "VZ36",
    "signatura": "",
    "popis": "Naše věda",
    "popis_novy": "",
    "popis_stary": "Věda česká",
    "typ": "časopis | sborník",
    "tema": "časopis, věda, Česko, čeština, historický",
    "keywords": [
      "časopis",
      "věda",
      "Česko",
      "čeština",
      "historický"
    ]
  },
  {
    "regal": "VZ36",
    "signatura": "",
    "popis": "National Geographic: Česko",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, geografie, příroda, Česko, čeština, populární, prestigious",
    "keywords": [
      "časopis",
      "geografie",
      "příroda",
      "Česko",
      "čeština",
      "populární",
      "prestigious"
    ]
  },
  {
    "regal": "VZ36",
    "signatura": "",
    "popis": "National Geographic: English",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, geografie, příroda, USA, angličtina, world-famous, prestigious",
    "keywords": [
      "časopis",
      "geografie",
      "příroda",
      "USA",
      "angličtina",
      "world-famous",
      "prestigious"
    ]
  },
  {
    "regal": "VZ37",
    "signatura": "",
    "popis": "Naturhistorica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, přírodní historie, muzeum, Česko",
    "keywords": [
      "časopis",
      "přírodní historie",
      "muzeum",
      "Česko"
    ]
  },
  {
    "regal": "VZ37",
    "signatura": "",
    "popis": "Neues Jahrbuch für Geologie und Paläontologie: Abhandlungen",
    "popis_novy": "",
    "popis_stary": "Neue Jahrbuch für Mineralogie, Geologie und Paläontologie: Abhandlungen. Abteilung, Geologie und Paläontologie",
    "typ": "časopis | sborník",
    "tema": "časopis, geologie, paleontologie, Německo, němčina, angličtina, historical",
    "keywords": [
      "časopis",
      "geologie",
      "paleontologie",
      "Německo",
      "němčina",
      "angličtina",
      "historical"
    ]
  },
  {
    "regal": "VZ37",
    "signatura": "",
    "popis": "Neues Jahrbuch für Geologie und Paläontologie: Monatshefte",
    "popis_novy": "",
    "popis_stary": "Centralblatt für Mineralogie, Geologie und Paläontologie; Centralblatt für Mineralogie, Geologie und Paläontologie. Abteilung A, Mineralogie und Petrographie",
    "typ": "časopis | sborník",
    "tema": "geologie, paleontologie, Německo, němčina, monthly",
    "keywords": [
      "geologie",
      "paleontologie",
      "Německo",
      "němčina",
      "monthly"
    ]
  },
  {
    "regal": "VZ37",
    "signatura": "",
    "popis": "Neues Jahrbuch für Mineralogie: Abhandlungen",
    "popis_novy": "",
    "popis_stary": "Neue Jahrbuch für Mineralogie, Geologie und Paläontologie: Abhandlungen. Abteilung A, Mineralogie, Gesteinskunde",
    "typ": "časopis | sborník",
    "tema": "mineralogie, Německo, němčina, angličtina",
    "keywords": [
      "mineralogie",
      "Německo",
      "němčina",
      "angličtina"
    ]
  },
  {
    "regal": "VZ37",
    "signatura": "",
    "popis": "Neues Jahrbuch für Mineralogie: Monatshefte",
    "popis_novy": "",
    "popis_stary": "* Neue Jahrbuch für Mineralogie, Geologie und Paläontologie: Monatshefte. Abteilung A, Mineralogie, Gesteinskunde",
    "typ": "časopis | sborník",
    "tema": "mineralogie, Německo, němčina, monthly",
    "keywords": [
      "mineralogie",
      "Německo",
      "němčina",
      "monthly"
    ]
  },
  {
    "regal": "VZ37",
    "signatura": "",
    "popis": "Nimbus",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "meteorologie, klima, Rakousko, němčina",
    "keywords": [
      "meteorologie",
      "klima",
      "Rakousko",
      "němčina"
    ]
  },
  {
    "regal": "VZ37",
    "signatura": "",
    "popis": "Novinky Zeměměřiské knihovny",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "knihovna, geodézie, Česko",
    "keywords": [
      "knihovna",
      "geodézie",
      "Česko"
    ]
  },
  {
    "regal": "VZ37",
    "signatura": "",
    "popis": "Ofioliti",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ofiolitové komplexy, petrologie, Itálie, angličtina",
    "keywords": [
      "ofiolitové komplexy",
      "petrologie",
      "Itálie",
      "angličtina"
    ]
  },
  {
    "regal": "VZ37",
    "signatura": "",
    "popis": "Ochrana ovzduší",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ovzduší, znečištění, Česko, čeština",
    "keywords": [
      "ovzduší",
      "znečištění",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ37",
    "signatura": "",
    "popis": "Oil Shale",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ropné břidlice, Estonsko, angličtina",
    "keywords": [
      "ropné břidlice",
      "Estonsko",
      "angličtina"
    ]
  },
  {
    "regal": "VZ37",
    "signatura": "",
    "popis": "Opera Corcontica: Krkonošské práce",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Krkonoše, přírodní vědy, Česko, čeština",
    "keywords": [
      "Krkonoše",
      "přírodní vědy",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ37",
    "signatura": "",
    "popis": "Österreichische Beiträge zu Meteorologie und Geophysik",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "meteorologie, geofyzika, Rakousko, němčina",
    "keywords": [
      "meteorologie",
      "geofyzika",
      "Rakousko",
      "němčina"
    ]
  },
  {
    "regal": "VZ37",
    "signatura": "",
    "popis": "Palaeobiodiversity and Palaeoenvironments",
    "popis_novy": "",
    "popis_stary": " Senckenbergiana Lethaea",
    "typ": "časopis | sborník",
    "tema": "paleontologie, biodiverzita, angličtina, Springer, peer-reviewed",
    "keywords": [
      "paleontologie",
      "biodiverzita",
      "angličtina",
      "Springer",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ37",
    "signatura": "",
    "popis": "Palaeobotanist",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "paleobotanika, fosilní rostliny, Indie, angličtina",
    "keywords": [
      "paleobotanika",
      "fosilní rostliny",
      "Indie",
      "angličtina"
    ]
  },
  {
    "regal": "VZ37",
    "signatura": "",
    "popis": "Palaeodiversity",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "paleontologie, diverzita, Německo, angličtina",
    "keywords": [
      "paleontologie",
      "diverzita",
      "Německo",
      "angličtina"
    ]
  },
  {
    "regal": "VZ37",
    "signatura": "",
    "popis": "Palaeontos",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "paleontologie, Španělsko, angličtina",
    "keywords": [
      "paleontologie",
      "Španělsko",
      "angličtina"
    ]
  },
  {
    "regal": "VZ37",
    "signatura": "",
    "popis": "Paläontologische Zeitschrift",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "paleontologie, Německo, angličtina, peer-reviewed",
    "keywords": [
      "paleontologie",
      "Německo",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ37",
    "signatura": "",
    "popis": "Paleobiology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "paleobiologie, USA, angličtina, high-impact",
    "keywords": [
      "paleobiologie",
      "USA",
      "angličtina",
      "high-impact"
    ]
  },
  {
    "regal": "VZ37",
    "signatura": "",
    "popis": "Paleontologičeskij žurnal",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "paleontologie, Rusko, ruština, angličtina",
    "keywords": [
      "paleontologie",
      "Rusko",
      "ruština",
      "angličtina"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Petrologija",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "petrologie, Rusko, ruština",
    "keywords": [
      "petrologie",
      "Rusko",
      "ruština"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Physics and Chemistry of Minerals",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "mineralogie, fyzika, chemie, angličtina, high-impact",
    "keywords": [
      "mineralogie",
      "fyzika",
      "chemie",
      "angličtina",
      "high-impact"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Planeta: odborný časopis pro životní prostředí",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "životní prostředí, ekologie, Česko, čeština",
    "keywords": [
      "životní prostředí",
      "ekologie",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Planeta Ekojournal",
    "popis_novy": "Planeta: odborný časopis pro životní prostředí",
    "popis_stary": "",
    "typ": "",
    "tema": "",
    "keywords": [
      ""
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Pohyb obyvatelstva v České a slovenské federativní republice",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "statistika, demografie, ČSFR, historický",
    "keywords": [
      "statistika",
      "demografie",
      "ČSFR",
      "historický"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Pohyb obyvatelstva v České republice v roce [...]",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "statistika, demografie, ČSÚ, Česko, ročenka",
    "keywords": [
      "statistika",
      "demografie",
      "ČSÚ",
      "Česko",
      "ročenka"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Pohyb obyvatelstva v Československé socialistické republice",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "statistika, demografie, ČSSR, historický",
    "keywords": [
      "statistika",
      "demografie",
      "ČSSR",
      "historický"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Pohyb obyvatelstva v republice československé",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "statistika, demografie, historický, předválečný",
    "keywords": [
      "statistika",
      "demografie",
      "historický",
      "předválečný"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Population; space and place",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "populace, geografie, angličtina, peer-reviewed",
    "keywords": [
      "populace",
      "geografie",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Prace geograficzne",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Polsko, polština",
    "keywords": [
      "geografie",
      "Polsko",
      "polština"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Prace geologiczno-mineralogiczne",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, mineralogie, Polsko, polština",
    "keywords": [
      "geologie",
      "mineralogie",
      "Polsko",
      "polština"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Prace muzeum Ziemi",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, muzeum, Polsko, polština",
    "keywords": [
      "geologie",
      "muzeum",
      "Polsko",
      "polština"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Práce Ústavu pro výzkum paliv 1960–1965",
    "popis_novy": "Sborník prací Ústavu pro výzkum paliv (ÚVP)",
    "popis_stary": "",
    "typ": "",
    "tema": "",
    "keywords": [
      ""
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Príroda",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "příroda, přírodní vědy, Slovensko, slovenština",
    "keywords": [
      "příroda",
      "přírodní vědy",
      "Slovensko",
      "slovenština"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Priroda: Ježemesjačnyj jestestvenno-naučnyj žurnal akademii nauk SSSR",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "příroda, věda, SSSR, ruština, historical",
    "keywords": [
      "příroda",
      "věda",
      "SSSR",
      "ruština",
      "historical"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Production Yearbook",
    "popis_novy": "FAO – Production Yearbook",
    "popis_stary": "",
    "typ": "",
    "tema": "",
    "keywords": [
      ""
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Progress in Human Geography",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "humánní geografie, angličtina, high-impact, review journal",
    "keywords": [
      "humánní geografie",
      "angličtina",
      "high-impact",
      "review journal"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Progress in Physical Geography",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "fyzická geografie, angličtina, high-impact, review journal",
    "keywords": [
      "fyzická geografie",
      "angličtina",
      "high-impact",
      "review journal"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Promet: Meteorologische Fortbildung",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "meteorologie, vzdělávání, Německo, němčina",
    "keywords": [
      "meteorologie",
      "vzdělávání",
      "Německo",
      "němčina"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Průzkumy památek",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "památková péče, archeologie, Česko, čeština",
    "keywords": [
      "památková péče",
      "archeologie",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Przeglad Geograficzny",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Polsko, polština, peer-reviewed",
    "keywords": [
      "geografie",
      "Polsko",
      "polština",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Přehled výzkumů",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "archeologie, výzkum, Česko, čeština",
    "keywords": [
      "archeologie",
      "výzkum",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Příroda",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "příroda, přírodní vědy, Česko, čeština, populární",
    "keywords": [
      "příroda",
      "přírodní vědy",
      "Česko",
      "čeština",
      "populární"
    ]
  },
  {
    "regal": "VZ38",
    "signatura": "",
    "popis": "Přírodovědci.cz",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "přírodní vědy, Česko, čeština",
    "keywords": [
      "přírodní vědy",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Přírodovědecký sborník Ostravského kraje",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "přírodní vědy, Ostrava, Česko, regionální",
    "keywords": [
      "přírodní vědy",
      "Ostrava",
      "Česko",
      "regionální"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Přírodovědené studie Muzea Prostějov",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "muzeum, Prostějov, přírodní vědy, Česko",
    "keywords": [
      "muzeum",
      "Prostějov",
      "přírodní vědy",
      "Česko"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Přírodovědný sborník Západomoravského muzea v Třebíči",
    "popis_novy": "",
    "popis_stary": "Sborník Přírodovědeckého klubu při Západomoravském muzeu v Třebíči",
    "typ": "časopis | sborník",
    "tema": "muzeum, Třebíč, přírodní vědy, Česko",
    "keywords": [
      "muzeum",
      "Třebíč",
      "přírodní vědy",
      "Česko"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Quaestiones Geographicae",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Polsko, angličtina, peer-reviewed",
    "keywords": [
      "geografie",
      "Polsko",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Raumentwicklung",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "územní rozvoj, Švýcarsko, němčina",
    "keywords": [
      "územní rozvoj",
      "Švýcarsko",
      "němčina"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Regionálna geológia Západných Karpát",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "regionální geologie, Karpaty, Slovensko",
    "keywords": [
      "regionální geologie",
      "Karpaty",
      "Slovensko"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Report on Water Management in the Czech Republic",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "zpráva, vodní hospodářství, Česko, angličtina, MZe",
    "keywords": [
      "zpráva",
      "vodní hospodářství",
      "Česko",
      "angličtina",
      "MZe"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Revue Roumaine de Géographie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Rumunsko, francouzština, angličtina",
    "keywords": [
      "geografie",
      "Rumunsko",
      "francouzština",
      "angličtina"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Ročenka dopravy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ročenka, doprava, statistika, Česko",
    "keywords": [
      "ročenka",
      "doprava",
      "statistika",
      "Česko"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Ročenka meteorologických pozorování observatoře Milešovka",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ročenka, meteorologie, Milešovka, ČHMÚ, Česko",
    "keywords": [
      "ročenka",
      "meteorologie",
      "Milešovka",
      "ČHMÚ",
      "Česko"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Rosalia",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, biologie, ekologie, Rakousko, němčina",
    "keywords": [
      "časopis",
      "biologie",
      "ekologie",
      "Rakousko",
      "němčina"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Rozpravy Československé akademie věd",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "sborník, ČSAV, věda, Česko, historický",
    "keywords": [
      "sborník",
      "ČSAV",
      "věda",
      "Česko",
      "historický"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Rozpravy Ústředního ústavu geologického",
    "popis_novy": "",
    "popis_stary": "Rozpravy Státního geologického ústavu Československé republiky, Rozpravy Státního geologického ústavu republiky československé",
    "typ": "časopis | sborník",
    "tema": "sborník, geologie, ÚÚG, Česko, historický",
    "keywords": [
      "sborník",
      "geologie",
      "ÚÚG",
      "Česko",
      "historický"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Rozvojovka",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, rozvojová spolupráce, Česko, čeština",
    "keywords": [
      "časopis",
      "rozvojová spolupráce",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Sborník České geografické společnosti",
    "popis_novy": "Geografie. Sborník české geografické společnosti",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "sborník, geografie, ČGS, Česko, historický",
    "keywords": [
      "sborník",
      "geografie",
      "ČGS",
      "Česko",
      "historický"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Sborník České společnosti zeměpisné",
    "popis_novy": "Geografie. Sborník české geografické společnosti",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "sborník, geografie, ČGS, Česko, historický",
    "keywords": [
      "sborník",
      "geografie",
      "ČGS",
      "Česko",
      "historický"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Sborník České společnosti zeměvědné",
    "popis_novy": "Geografie. Sborník české geografické společnosti",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "sborník, geografie, ČGS, Česko, historický",
    "keywords": [
      "sborník",
      "geografie",
      "ČGS",
      "Česko",
      "historický"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Sborník Československé geografické společnosti",
    "popis_novy": "Geografie. Sborník české geografické společnosti",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "sborník, geografie, ČGS, Česko, historický",
    "keywords": [
      "sborník",
      "geografie",
      "ČGS",
      "Česko",
      "historický"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Sborník Českolovenské společnosti zeměpisné",
    "popis_novy": "Geografie. Sborník české geografické společnosti",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "sborník, geografie, ČGS, Česko, historický",
    "keywords": [
      "sborník",
      "geografie",
      "ČGS",
      "Česko",
      "historický"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Sborník geologických věd. Antropozoikum",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "kvartér, geologický ústav, Česko, historický",
    "keywords": [
      "kvartér",
      "geologický ústav",
      "Česko",
      "historický"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Sborník geologických věd. Geologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, geologický ústav, Česko, historický",
    "keywords": [
      "geologie",
      "geologický ústav",
      "Česko",
      "historický"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Sborník geologických věd. Hydrogeologie; inženýrská geologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "hydrogeologie, inženýrská geologie, Česko, historický",
    "keywords": [
      "hydrogeologie",
      "inženýrská geologie",
      "Česko",
      "historický"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Sborník geologických věd. Ložisková geologie; mineraologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ložisková geologie, mineralogie, Česko, historický",
    "keywords": [
      "ložisková geologie",
      "mineralogie",
      "Česko",
      "historický"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Sborník geologických věd. Paleontologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "paleontologie, geologický ústav, Česko, historický",
    "keywords": [
      "paleontologie",
      "geologický ústav",
      "Česko",
      "historický"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Sborník geologických věd. Technologie; geochemie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "technologie, geochemie, Česko, historický",
    "keywords": [
      "technologie",
      "geochemie",
      "Česko",
      "historický"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Sborník geologických věd. Užitá geofyzika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geofyzika, geologický ústav, Česko, historický",
    "keywords": [
      "geofyzika",
      "geologický ústav",
      "Česko",
      "historický"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Sborník geologických vied. Západné Karpaty",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Západní Karpaty, Slovensko, historický",
    "keywords": [
      "geologie",
      "Západní Karpaty",
      "Slovensko",
      "historický"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Sborník GPO",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Geofyzikální průzkum Ostrava, Česko",
    "keywords": [
      "Geofyzikální průzkum Ostrava",
      "Česko"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Sborník Jihočeského musea v Českých Budějovicích. Přírodní vědy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "muzeum, České Budějovice, přírodní vědy, Česko",
    "keywords": [
      "muzeum",
      "České Budějovice",
      "přírodní vědy",
      "Česko"
    ]
  },
  {
    "regal": "VZ39",
    "signatura": "",
    "popis": "Sborník Klubu přírodovědeckého v Brně",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "přírodní vědy, Brno, Česko, historický",
    "keywords": [
      "přírodní vědy",
      "Brno",
      "Česko",
      "historický"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Sborník Krajského vlastivědného musea v Olomouci (SLUKO)",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "muzeum, Olomouc, vlastivěda, přírodní vědy, Česko",
    "keywords": [
      "muzeum",
      "Olomouc",
      "vlastivěda",
      "přírodní vědy",
      "Česko"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Sborník Muzea Blansko",
    "popis_novy": "",
    "popis_stary": "Regionální sborník okresu Blansko",
    "typ": "časopis | sborník",
    "tema": "muzeum, Blansko, přírodní vědy, Česko",
    "keywords": [
      "muzeum",
      "Blansko",
      "přírodní vědy",
      "Česko"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Sborník Národního musea v Praze. Řada B. Přírodní vědy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Národní muzeum, Praha, přírodní vědy, Česko",
    "keywords": [
      "Národní muzeum",
      "Praha",
      "přírodní vědy",
      "Česko"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Sborník prací Českého hydrometeorologického ústavu",
    "popis_novy": "",
    "popis_stary": "Sborník prací Hydrometeorologického ústavu Československé socialistické republiky",
    "typ": "časopis | sborník",
    "tema": "ČHMÚ, meteorologie, hydrologie, Česko",
    "keywords": [
      "ČHMÚ",
      "meteorologie",
      "hydrologie",
      "Česko"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Sborník prací ČSAV",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ČSAV, věda, Česko, historický",
    "keywords": [
      "ČSAV",
      "věda",
      "Česko",
      "historický"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Sborník prací Přírodovědecké fakulty Ostravské univerzity. Geografie; geologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "univerzita, Ostrava, geografie, geologie, Česko",
    "keywords": [
      "univerzita",
      "Ostrava",
      "geografie",
      "geologie",
      "Česko"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Sborník prací Ústavu pro výzkum paliv (ÚVP)",
    "popis_novy": "",
    "popis_stary": "Práce Ústavu pro výzkum paliv 1960–1965",
    "typ": "časopis | sborník",
    "tema": "suhlí, paliva, ÚVP, Česko, historický",
    "keywords": [
      "suhlí",
      "paliva",
      "ÚVP",
      "Česko",
      "historický"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Sborník přírodovědecký",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "přírodní vědy, muzeum, Česko",
    "keywords": [
      "přírodní vědy",
      "muzeum",
      "Česko"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Sborník Ústředního ústavu geologického",
    "popis_novy": "",
    "popis_stary": "Sborník Státního geologického ústavu Československé republiky, Sborník Ústředního ústavu geologického. Oddíl geologický, Sborník Ústředního ústavu geologického. Oddíl paleontologický",
    "typ": "časopis | sborník",
    "tema": " geologie, ÚÚG, Česko, historický",
    "keywords": [
      "geologie",
      "ÚÚG",
      "Česko",
      "historický"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Sborník vědeckých prací Vysoké školy báňské Technické univerzity v Ostravě (VŠB–TU)",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": " VŠB-TU, Ostrava, Česko",
    "keywords": [
      "VŠB-TU",
      "Ostrava",
      "Česko"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Sborník Vysoké školy chemicko-technické v Praze (VŠCHT). Řada B – Anorganická chemie a technologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "VŠCHT, chemie, Česko",
    "keywords": [
      "VŠCHT",
      "chemie",
      "Česko"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Sborník Vysoké školy chemicko-technické v Praze (VŠCHT). Řada G – Mineralogie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "VŠCHT, mineralogie, Česko",
    "keywords": [
      "VŠCHT",
      "mineralogie",
      "Česko"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Science reports of the Institute of Geoscience University if Tsukuba. Section A – Geographical Sciences",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Tsukuba, Japonsko, angličtina",
    "keywords": [
      "geografie",
      "Tsukuba",
      "Japonsko",
      "angličtina"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Science reports of the Institute of Geoscience University if Tsukuba. Section B – Geological Sciences",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Tsukuba, Japonsko, angličtina",
    "keywords": [
      "geologie",
      "Tsukuba",
      "Japonsko",
      "angličtina"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Scientific American; české vydání",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "věda, Česko, čeština, populární, prestigious",
    "keywords": [
      "věda",
      "Česko",
      "čeština",
      "populární",
      "prestigious"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Scripta Facultatis Scientiarum Naturalium Universitatis [...] Geography",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, univerzita, angličtina",
    "keywords": [
      "geografie",
      "univerzita",
      "angličtina"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Scripta Facultatis Scientiarum Naturalium Universitatis [...] Geology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, univerzita, angličtina",
    "keywords": [
      "geologie",
      "univerzita",
      "angličtina"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Scripta Geologica (Leiden)",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Nizozemsko, angličtina",
    "keywords": [
      "geologie",
      "Nizozemsko",
      "angličtina"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Sedimentology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "sedimentologie, angličtina, high-impact, IAS",
    "keywords": [
      "sedimentologie",
      "angličtina",
      "high-impact",
      "IAS"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Senckenbergiana Lethaea ",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "",
    "keywords": [
      ""
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Short Course Handbook",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "příručka, kurz, angličtina",
    "keywords": [
      "příručka",
      "kurz",
      "angličtina"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Siedlungsforschung. Archäologie – Geschichte – Geographie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "sídlení archeologie, Německo, němčina",
    "keywords": [
      "sídlení archeologie",
      "Německo",
      "němčina"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Slezský sborník",
    "popis_novy": "",
    "popis_stary": "Věstník matice opavské",
    "typ": "časopis | sborník",
    "tema": "sborník, Slezsko, historie, Česko, čeština",
    "keywords": [
      "sborník",
      "Slezsko",
      "historie",
      "Česko",
      "čeština"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Slovak Geological Magazine",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Slovensko, angličtina, peer-reviewed",
    "keywords": [
      "geologie",
      "Slovensko",
      "angličtina",
      "peer-reviewed"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Smithsonian Contributions to Paleobiology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "paleontologie, Smithsonian, USA, angličtina",
    "keywords": [
      "paleontologie",
      "Smithsonian",
      "USA",
      "angličtina"
    ]
  },
  {
    "regal": "VZ40",
    "signatura": "",
    "popis": "Smithsonian Contributions to the Earth Sciences",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Smithsonian, USA, angličtina",
    "keywords": [
      "geologie",
      "Smithsonian",
      "USA",
      "angličtina"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Speleo",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "speleologie, jeskyně, kras, podzemí",
    "keywords": [
      "speleologie",
      "jeskyně",
      "kras",
      "podzemí"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Speleofórum",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "speleologie, jeskyně, kras, jeskynní výzkum",
    "keywords": [
      "speleologie",
      "jeskyně",
      "kras",
      "jeskynní výzkum"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Speleologický věstník",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "speleologie, jeskyně, český kras, Moravský kras",
    "keywords": [
      "speleologie",
      "jeskyně",
      "český kras",
      "Moravský kras"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Spravodaj Slovenskej geologickej spoločnosti",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Slovensko, geologická společnost, geologie",
    "keywords": [
      "Slovensko",
      "geologická společnost",
      "geologie"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Správy o výskumech Geologického ústavu Dionýza Štúra",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "GÚDŠ, Slovensko, geologický výzkum, Dionýz Štúr",
    "keywords": [
      "GÚDŠ",
      "Slovensko",
      "geologický výzkum",
      "Dionýz Štúr"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Staré stezky",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "historie, cesty, turistika, vlastivěda",
    "keywords": [
      "historie",
      "cesty",
      "turistika",
      "vlastivěda"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Statistické přehledy",
    "popis_novy": "Aktuality ČSÚ (Souborné informace)",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "statistika, ČSÚ, data, demografie, ekonomika",
    "keywords": [
      "statistika",
      "ČSÚ",
      "data",
      "demografie",
      "ekonomika"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Statistika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "statistika, matematika, data, analýza",
    "keywords": [
      "statistika",
      "matematika",
      "data",
      "analýza"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Statistika a my",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "statistika, popularizace, ČSÚ, demografie",
    "keywords": [
      "statistika",
      "popularizace",
      "ČSÚ",
      "demografie"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Stav životného prostředí v jednotlivých krajích ČR",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "životní prostředí, kraje, ČR, ekologie, znečištění",
    "keywords": [
      "životní prostředí",
      "kraje",
      "ČR",
      "ekologie",
      "znečištění"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Stratigrafija. Geologičeskaja korreljacija",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "stratigrafie, korelace, ruský časopis, geologie",
    "keywords": [
      "stratigrafie",
      "korelace",
      "ruský časopis",
      "geologie"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Studia geograficzne",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, Polsko, polský časopis, studie",
    "keywords": [
      "geografie",
      "Polsko",
      "polský časopis",
      "studie"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Studia Geographica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geografie, studie, výzkum",
    "keywords": [
      "geografie",
      "studie",
      "výzkum"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Studia Oecologica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ekologie, životní prostředí, ochrana přírody",
    "keywords": [
      "ekologie",
      "životní prostředí",
      "ochrana přírody"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Studia Universitatis Babes-Bolyai",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Rumunsko, univerzita, přírodní vědy",
    "keywords": [
      "Rumunsko",
      "univerzita",
      "přírodní vědy"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Šumava",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Šumava, NP Šumava, ochrana přírody, regionální",
    "keywords": [
      "Šumava",
      "NP Šumava",
      "ochrana přírody",
      "regionální"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Tectonics",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "tektonika, desková tektonika, geodynamika, prestižní, ISI, anglický",
    "keywords": [
      "tektonika",
      "desková tektonika",
      "geodynamika",
      "prestižní",
      "ISI",
      "anglický"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Tectonophysics",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "tektonofyzika, geofyzika, tektonika, prestižní, ISI",
    "keywords": [
      "tektonofyzika",
      "geofyzika",
      "tektonika",
      "prestižní",
      "ISI"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Terra Nova",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, geovědy, mezinárodní, prestižní, ISI",
    "keywords": [
      "geologie",
      "geovědy",
      "mezinárodní",
      "prestižní",
      "ISI"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Thayensia: sborník původních vědeckých prací z Podyjí",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Podyjí, Dyje, regionální, vlastivěda, ekologie",
    "keywords": [
      "Podyjí",
      "Dyje",
      "regionální",
      "vlastivěda",
      "ekologie"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Transactions of the Universities of Košice",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Košice, Slovensko, univerzita, geologie",
    "keywords": [
      "Košice",
      "Slovensko",
      "univerzita",
      "geologie"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Treballs del Museu de Geologia de Barcelona",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Barcelona, Španělsko, geologie, muzeum, paleontologie",
    "keywords": [
      "Barcelona",
      "Španělsko",
      "geologie",
      "muzeum",
      "paleontologie"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Tsukuba Geoenvironmental Sciences",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Tsukuba, Japonsko, geoenvironmentalistika, životní prostředí",
    "keywords": [
      "Tsukuba",
      "Japonsko",
      "geoenvironmentalistika",
      "životní prostředí"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Tübinger geographische Studien",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Tübingen, Německo, geografie, studie",
    "keywords": [
      "Tübingen",
      "Německo",
      "geografie",
      "studie"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Tunel",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "tunelářství, stavebnictví, geotechnika, inženýrská geologie",
    "keywords": [
      "tunelářství",
      "stavebnictví",
      "geotechnika",
      "inženýrská geologie"
    ]
  },
  {
    "regal": "VZ41",
    "signatura": "",
    "popis": "Uhlí - Rudy - Geologický průzkum",
    "popis_novy": "",
    "popis_stary": "Rudy 1953–1992",
    "typ": "časopis | sborník",
    "tema": "uhlí, rudy, ložisková geologie, hornictví, průzkum",
    "keywords": [
      "uhlí",
      "rudy",
      "ložisková geologie",
      "hornictví",
      "průzkum"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Urbanismus a územní rozvoj",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "urbanismus, územní plánování, města, rozvoj",
    "keywords": [
      "urbanismus",
      "územní plánování",
      "města",
      "rozvoj"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "ÚSES - zelená páteř krajiny: sborník k semináři [...]",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ÚSES, ekologická stabilita, krajina, biokoridory",
    "keywords": [
      "ÚSES",
      "ekologická stabilita",
      "krajina",
      "biokoridory"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Ve službách arecheologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "archeologie, památková péče, výzkum",
    "keywords": [
      "archeologie",
      "památková péče",
      "výzkum"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Věda přírodní: měsíčník pro šíření a pěstování věd přírodních",
    "popis_novy": "",
    "popis_stary": "Horus Sanitatis",
    "typ": "časopis | sborník",
    "tema": "přírodní vědy, historický časopis, popularizace",
    "keywords": [
      "přírodní vědy",
      "historický časopis",
      "popularizace"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Verhandlungen des naturforschenden Vereines in Brünn",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Brno, přírodovědecký spolek, historický, německý",
    "keywords": [
      "Brno",
      "přírodovědecký spolek",
      "historický",
      "německý"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Veronica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ochrana přírody, botanika, ekologie",
    "keywords": [
      "ochrana přírody",
      "botanika",
      "ekologie"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Veřejná správa",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "správa, municipality, samospráva",
    "keywords": [
      "správa",
      "municipality",
      "samospráva"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Vesmír",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "populárně naučný, fyzika, astronomie, věda, česky",
    "keywords": [
      "populárně naučný",
      "fyzika",
      "astronomie",
      "věda",
      "česky"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Věstník geologického ústavu pro Čechy a Moravu 1939-1940",
    "popis_novy": "Bulletin of Geosciences",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologie, Česko, Morava, historický, ÚÚG",
    "keywords": [
      "geologie",
      "Česko",
      "Morava",
      "historický",
      "ÚÚG"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Věstník Klubu přírodovědeckého v Prostějově",
    "popis_novy": "",
    "popis_stary": "Výroční zpráva Klubu Přírodovědeckého v Prostějově za správní rok [...]",
    "typ": "časopis | sborník",
    "tema": "Prostějov, přírodovědecký klub, regionální",
    "keywords": [
      "Prostějov",
      "přírodovědecký klub",
      "regionální"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Věstník Královské české společnosti nauk. Třída mathematicko-přírodovědecká",
    "popis_novy": "",
    "popis_stary": "Zprávy o zasedání Královské české společnosti nauk. Třída mathematicko-přírodovědecká",
    "typ": "časopis | sborník",
    "tema": "KČSN, akademie věd, historický, matematika, přírodní vědy",
    "keywords": [
      "KČSN",
      "akademie věd",
      "historický",
      "matematika",
      "přírodní vědy"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Věstník Matice opavské",
    "popis_novy": "Slezský sborník",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Opava, Slezsko, regionální, historický",
    "keywords": [
      "Opava",
      "Slezsko",
      "regionální",
      "historický"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Vestnik Moskovskogo universiteta",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Moskva, Rusko, univerzita, geologie, geografie, ruský",
    "keywords": [
      "Moskva",
      "Rusko",
      "univerzita",
      "geologie",
      "geografie",
      "ruský"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Věstník Státního geologického ústavu 1925-1938, 1945-1950",
    "popis_novy": "Bulletin of Geosciences",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis | sborník",
    "keywords": [
      "časopis | sborník"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Věstník Ústředního ústavu geologického 1951-1992",
    "popis_novy": "Bulletin of Geosciences",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ÚÚG, geologie, Československo",
    "keywords": [
      "ÚÚG",
      "geologie",
      "Československo"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Větrná energie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "energie, obnovitelné zdroje, větrné elektrárny",
    "keywords": [
      "energie",
      "obnovitelné zdroje",
      "větrné elektrárny"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Visnik",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Ukrajina, geologie, geografie, ukrajinský",
    "keywords": [
      "Ukrajina",
      "geologie",
      "geografie",
      "ukrajinský"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Vlastivědný sborník Vysočiny. Oddíl věd přírodních",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Vysočina, regionální, přírodní vědy, vlastivěda",
    "keywords": [
      "Vysočina",
      "regionální",
      "přírodní vědy",
      "vlastivěda"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Vodní hospodářství",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "vodní hospodářství, hydrologie, vodárenství",
    "keywords": [
      "vodní hospodářství",
      "hydrologie",
      "vodárenství"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Vodohospodářské technicko-ekonimické inforamce",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "vodní hospodářství, ekonomika, technologie, hydrologie",
    "keywords": [
      "vodní hospodářství",
      "ekonomika",
      "technologie",
      "hydrologie"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Vodohospodářský časopis ",
    "popis_novy": "Journal of Hydrology and Hydromechanics",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "hydrologie, hydromechanika, vodní hospodářství",
    "keywords": [
      "hydrologie",
      "hydromechanika",
      "vodní hospodářství"
    ]
  },
  {
    "regal": "VZ42",
    "signatura": "",
    "popis": "Vojenský geografický obzor",
    "popis_novy": "",
    "popis_stary": "Vojenský topografický obzor: sborník topografické služby",
    "typ": "časopis | sborník",
    "tema": "vojenská geografie, topografie, kartografie, armáda",
    "keywords": [
      "vojenská geografie",
      "topografie",
      "kartografie",
      "armáda"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Všudybyl: časopis na podporu cestovního ruchu",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "cestovní ruch, turistika, historický časopis",
    "keywords": [
      "cestovní ruch",
      "turistika",
      "historický časopis"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Výroční zpráva Klubu Přírodovědeckého v Prostějově za správní rok [...] ",
    "popis_novy": "Věstník Klubu přírodovědeckého v Prostějově",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Prostějov, přírodovědecký klub, výroční zpráva",
    "keywords": [
      "Prostějov",
      "přírodovědecký klub",
      "výroční zpráva"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Výzkumní práce Ústředního ústavu geologického",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ÚÚG, výzkum, geologie, Československo",
    "keywords": [
      "ÚÚG",
      "výzkum",
      "geologie",
      "Československo"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Würzburger Geographischen Arbeiten",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Würzburg, Německo, geografie, německý časopis",
    "keywords": [
      "Würzburg",
      "Německo",
      "geografie",
      "německý časopis"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Západné Karpaty: Séria geológia",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Západní Karpaty, geologie, Slovensko",
    "keywords": [
      "Západní Karpaty",
      "geologie",
      "Slovensko"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Západné Karpaty: Séria hydrogeológia a inžinierská geológia",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Západní Karpaty, hydrogeologie, inženýrská geologie",
    "keywords": [
      "Západní Karpaty",
      "hydrogeologie",
      "inženýrská geologie"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Západné Karpaty: Séria mineralógia, petrografia, geochémia, metalogenéza",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": " geochémia",
    "keywords": [
      "geochémia"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Západné Karpaty: Séria paleontológia",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Západní Karpaty, paleontologie, fosilie",
    "keywords": [
      "Západní Karpaty",
      "paleontologie",
      "fosilie"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Zemědělská ekonomika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "zemědělství, ekonomika, agrární",
    "keywords": [
      "zemědělství",
      "ekonomika",
      "agrární"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Zemní plyn a nafta",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "zemní plyn, ropa, nafta, energetika, těžba",
    "keywords": [
      "zemní plyn",
      "ropa",
      "nafta",
      "energetika",
      "těžba"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Znečištění ovzduší na území ČR v roce [...]",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "znečištění ovzduší, emise, kvalita ovzduší, ČR",
    "keywords": [
      "znečištění ovzduší",
      "emise",
      "kvalita ovzduší",
      "ČR"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Znečištění ovzduší v datech",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ovzduší, emise, data, statistika, monitoring",
    "keywords": [
      "ovzduší",
      "emise",
      "data",
      "statistika",
      "monitoring"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Zpráva o stavu vodního hospodářství ČR",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "vodní hospodářství, stav vod, kvalita vody, ČR",
    "keywords": [
      "vodní hospodářství",
      "stav vod",
      "kvalita vody",
      "ČR"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Zpravodaj České geologické společnosti",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "ČGS, geologická společnost, zpravodaj",
    "keywords": [
      "ČGS",
      "geologická společnost",
      "zpravodaj"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Zpravodaj chráněné krajinné oblasti Moravský kras",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Moravský kras, CHKO, ochrana přírody, jeskyně",
    "keywords": [
      "Moravský kras",
      "CHKO",
      "ochrana přírody",
      "jeskyně"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Zpravodaj mineralogických expozic v Tišnově",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Tišnov, mineralogie, expozice, muzeum",
    "keywords": [
      "Tišnov",
      "mineralogie",
      "expozice",
      "muzeum"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Zpravodaj Ministerstva životního prostředí",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "MŽP, životní prostředí, legislativa, ekologie",
    "keywords": [
      "MŽP",
      "životní prostředí",
      "legislativa",
      "ekologie"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Zprávy o geologických výzkumech v roce [...]",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geologický výzkum, ČR, výroční zpráva, ČGS",
    "keywords": [
      "geologický výzkum",
      "ČR",
      "výroční zpráva",
      "ČGS"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Zprávy o zasedání Královské české společnosti nauk. Třída mathematicko-přírodovědecká",
    "popis_novy": "Věstník Královské české společnosti nauk. Třída mathematicko-přírodovědecká",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "KČSN, akademie, historický, zasedání",
    "keywords": [
      "KČSN",
      "akademie",
      "historický",
      "zasedání"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Zpřístupněné jeskyně",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "jeskyně, speleologie, turistika, přístupnost",
    "keywords": [
      "jeskyně",
      "speleologie",
      "turistika",
      "přístupnost"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Životné prostredie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "životní prostředí, Slovensko, ekologie, slovensky",
    "keywords": [
      "životní prostředí",
      "Slovensko",
      "ekologie",
      "slovensky"
    ]
  },
  {
    "regal": "VZ43",
    "signatura": "",
    "popis": "Životní prostředí České republiky",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "životní prostředí, ČR, stav, statistika, ekologie",
    "keywords": [
      "životní prostředí",
      "ČR",
      "stav",
      "statistika",
      "ekologie"
    ]
  },
  {
    "regal": "M1",
    "signatura": "51",
    "popis": "Matematika, Středoškolská a rekreační matematika, Didaktika matematiky",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "matematika, didaktika, středoškolská matematika, rekreační matematika, výuka, pedagogika, mathematics, teaching",
    "keywords": [
      "matematika",
      "didaktika",
      "středoškolská matematika",
      "rekreační matematika",
      "výuka",
      "pedagogika",
      "mathematics",
      "teaching"
    ]
  },
  {
    "regal": "M1",
    "signatura": "51(03)",
    "popis": "Matematické a všeobecné slovníky a encyklopedie, Matematické slovníky",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "slovník, encyklopedie, matematický slovník, reference, terminologie, dictionary, encyclopedia, mathematical terms",
    "keywords": [
      "slovník",
      "encyklopedie",
      "matematický slovník",
      "reference",
      "terminologie",
      "dictionary",
      "encyclopedia",
      "mathematical terms"
    ]
  },
  {
    "regal": "M1",
    "signatura": "51(04)",
    "popis": "Jazykové slovníky",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "jazykový slovník, překladový slovník, terminologie, language dictionary, translation, mathematical terminology",
    "keywords": [
      "jazykový slovník",
      "překladový slovník",
      "terminologie",
      "language dictionary",
      "translation",
      "mathematical terminology"
    ]
  },
  {
    "regal": "M2",
    "signatura": "51(07)ZŠ",
    "popis": "Učebnice pro základní školy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "učebnice, základní škola, výuka matematiky, elementary school, textbook, ZŠ, primární vzdělávání",
    "keywords": [
      "učebnice",
      "základní škola",
      "výuka matematiky",
      "elementary school",
      "textbook",
      "ZŠ",
      "primární vzdělávání"
    ]
  },
  {
    "regal": "M2",
    "signatura": "51(07)SŠ",
    "popis": "Učebnice pro střední školy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "učebnice, střední škola, gymnasium, výuka matematiky, secondary school, textbook, SŠ, středoškolská matematika",
    "keywords": [
      "učebnice",
      "střední škola",
      "gymnasium",
      "výuka matematiky",
      "secondary school",
      "textbook",
      "SŠ",
      "středoškolská matematika"
    ]
  },
  {
    "regal": "M3",
    "signatura": "51(07)VŠ",
    "popis": "Učebnice pro vysoké školy (v pojednání o matematice jako celku)",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "učebnice, vysoká škola, univerzita, akademická matematika, university textbook, VŠ, higher education, college mathematics",
    "keywords": [
      "učebnice",
      "vysoká škola",
      "univerzita",
      "akademická matematika",
      "university textbook",
      "VŠ",
      "higher education",
      "college mathematics"
    ]
  },
  {
    "regal": "M3-4",
    "signatura": "51(091)",
    "popis": "Historie matematiky (včetně biografií a sebraných spisů)",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "historie matematiky, biografie matematiků, sebrané spisy, dějiny matematiky, history of mathematics, mathematical biography, Eukleidés, Pythagoras, Fermat, Gauss",
    "keywords": [
      "historie matematiky",
      "biografie matematiků",
      "sebrané spisy",
      "dějiny matematiky",
      "history of mathematics",
      "mathematical biography",
      "Eukleidés",
      "Pythagoras",
      "Fermat",
      "Gauss"
    ]
  },
  {
    "regal": "M4",
    "signatura": "51.01",
    "popis": "Vybrané klíčové práce v matematice, Klasický fond",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "klasické práce, fundamentální díla, matematická klasika, klíčové texty, seminal works, classic mathematics, foundational papers",
    "keywords": [
      "klasické práce",
      "fundamentální díla",
      "matematická klasika",
      "klíčové texty",
      "seminal works",
      "classic mathematics",
      "foundational papers"
    ]
  },
  {
    "regal": "M5",
    "signatura": "51:368",
    "popis": "Finanční a pojistná matematika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "finanční matematika, pojistná matematika, aktuárství, financial mathematics, insurance mathematics, actuarial science, derivatives, risk management",
    "keywords": [
      "finanční matematika",
      "pojistná matematika",
      "aktuárství",
      "financial mathematics",
      "insurance mathematics",
      "actuarial science",
      "derivatives",
      "risk management"
    ]
  },
  {
    "regal": "M5",
    "signatura": "510",
    "popis": "Obecné úvahy o matematice",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "filozofie matematiky, úvahy o matematice, mathematical philosophy, foundations, obecná matematika, metamatematika",
    "keywords": [
      "filozofie matematiky",
      "úvahy o matematice",
      "mathematical philosophy",
      "foundations",
      "obecná matematika",
      "metamatematika"
    ]
  },
  {
    "regal": "M5",
    "signatura": "510.2",
    "popis": "Základy matematiky, Teorie množin, Filozofie matematiky",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "teorie množin, základy matematiky, filozofie matematiky, set theory, foundations, mathematical logic, Cantor, axiomatika, ZFC",
    "keywords": [
      "teorie množin",
      "základy matematiky",
      "filozofie matematiky",
      "set theory",
      "foundations",
      "mathematical logic",
      "Cantor",
      "axiomatika",
      "ZFC"
    ]
  },
  {
    "regal": "M5",
    "signatura": "510.5",
    "popis": "Algoritmy, Vyčíslitelné funkce",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "algoritmy, vyčíslitelnost, computability, algorithms, recursive functions, Turing, složitost, complexity",
    "keywords": [
      "algoritmy",
      "vyčíslitelnost",
      "computability",
      "algorithms",
      "recursive functions",
      "Turing",
      "složitost",
      "complexity"
    ]
  },
  {
    "regal": "M5",
    "signatura": "510.6",
    "popis": "Matematická logika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "matematická logika, formální logika, predikátová logika, výroková logika, mathematical logic, formal logic, proof theory, model theory",
    "keywords": [
      "matematická logika",
      "formální logika",
      "predikátová logika",
      "výroková logika",
      "mathematical logic",
      "formal logic",
      "proof theory",
      "model theory"
    ]
  },
  {
    "regal": "M6",
    "signatura": "511",
    "popis": "Teorie čísel, Aritmetika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "teorie čísel, number theory, aritmetika, prvočísla, primes, diofantické rovnice, modulární aritmetika, Fermatova věta, Eulerova funkce",
    "keywords": [
      "teorie čísel",
      "number theory",
      "aritmetika",
      "prvočísla",
      "primes",
      "diofantické rovnice",
      "modulární aritmetika",
      "Fermatova věta",
      "Eulerova funkce"
    ]
  },
  {
    "regal": "M6",
    "signatura": "512",
    "popis": "Algebra",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "algebra, algebraické struktury, abstract algebra, polynomy, rovnice, equations, algebraic equations",
    "keywords": [
      "algebra",
      "algebraické struktury",
      "abstract algebra",
      "polynomy",
      "rovnice",
      "equations",
      "algebraic equations"
    ]
  },
  {
    "regal": "M7",
    "signatura": "512.5",
    "popis": "Algebraické struktury, Pologrupy, Grupy, Okruhy a moduly, Tělesa, Kategorie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "algebraické struktury, grupy, okruhy, tělesa, moduly, kategorie, groups, rings, fields, modules, categories, abstract algebra, group theory",
    "keywords": [
      "algebraické struktury",
      "grupy",
      "okruhy",
      "tělesa",
      "moduly",
      "kategorie",
      "groups",
      "rings",
      "fields",
      "modules",
      "categories",
      "abstract algebra",
      "group theory"
    ]
  },
  {
    "regal": "M8",
    "signatura": "512.56",
    "popis": "Uspořádané množiny, Svazy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "uspořádané množiny, svazy, lattice theory, order theory, partial order, mřížky, posets",
    "keywords": [
      "uspořádané množiny",
      "svazy",
      "lattice theory",
      "order theory",
      "partial order",
      "mřížky",
      "posets"
    ]
  },
  {
    "regal": "M8",
    "signatura": "512.57",
    "popis": "Univerzální algebra",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "univerzální algebra, universal algebra, variety, algebraické teorie, algebraic theories",
    "keywords": [
      "univerzální algebra",
      "universal algebra",
      "variety",
      "algebraické teorie",
      "algebraic theories"
    ]
  },
  {
    "regal": "M8",
    "signatura": "512.64",
    "popis": "Lineární a multilineární algebra",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "lineární algebra, multilineární algebra, matice, determinanty, vektory, linear algebra, matrices, vectors, eigenvalues, vlastní čísla",
    "keywords": [
      "lineární algebra",
      "multilineární algebra",
      "matice",
      "determinanty",
      "vektory",
      "linear algebra",
      "matrices",
      "vectors",
      "eigenvalues",
      "vlastní čísla"
    ]
  },
  {
    "regal": "M8",
    "signatura": "512.7",
    "popis": "Algebraická geometrie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "algebraická geometrie, variety, schémata, algebraic geometry, varieties, schemes, projektivní geometrie",
    "keywords": [
      "algebraická geometrie",
      "variety",
      "schémata",
      "algebraic geometry",
      "varieties",
      "schemes",
      "projektivní geometrie"
    ]
  },
  {
    "regal": "M9",
    "signatura": "514",
    "popis": "Teorie čísel",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "teorie čísel, number theory, aritmetika, prvočísla, diofantické rovnice",
    "keywords": [
      "teorie čísel",
      "number theory",
      "aritmetika",
      "prvočísla",
      "diofantické rovnice"
    ]
  },
  {
    "regal": "M9",
    "signatura": "514.1",
    "popis": "Obecná geometrie, Elementární geometrie, Planimetrie, Stereometrie, Neuklidovská geometrie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "geometrie, planimetrie, stereometrie, neuklidovská geometrie, geometry, Euclidean geometry, non-Euclidean, hyperbolic, Eukleidés",
    "keywords": [
      "geometrie",
      "planimetrie",
      "stereometrie",
      "neuklidovská geometrie",
      "geometry",
      "Euclidean geometry",
      "non-Euclidean",
      "hyperbolic",
      "Eukleidés"
    ]
  },
  {
    "regal": "M9",
    "signatura": "514.12",
    "popis": "Analytická geometrie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "analytická geometrie, souřadnice, kuželoseky, analytic geometry, coordinates, conic sections, Descartes",
    "keywords": [
      "analytická geometrie",
      "souřadnice",
      "kuželoseky",
      "analytic geometry",
      "coordinates",
      "conic sections",
      "Descartes"
    ]
  },
  {
    "regal": "M9",
    "signatura": "514.18",
    "popis": "Deskriptivní geometrie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "deskriptivní geometrie, promítání, descriptive geometry, projection, technical drawing, Monge",
    "keywords": [
      "deskriptivní geometrie",
      "promítání",
      "descriptive geometry",
      "projection",
      "technical drawing",
      "Monge"
    ]
  },
  {
    "regal": "M10",
    "signatura": "514.7",
    "popis": "Diferenciální geometrie, Globální analýza",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "diferenciální geometrie, Riemannova geometrie, variety, differential geometry, manifolds, Riemannian geometry, křivost, curvature, geodetika",
    "keywords": [
      "diferenciální geometrie",
      "Riemannova geometrie",
      "variety",
      "differential geometry",
      "manifolds",
      "Riemannian geometry",
      "křivost",
      "curvature",
      "geodetika"
    ]
  },
  {
    "regal": "M10",
    "signatura": "515.1",
    "popis": "Topologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "topologie, topology, algebraická topologie, diferenciální topologie, topologické prostory, homotopie, homologie, kohomologie",
    "keywords": [
      "topologie",
      "topology",
      "algebraická topologie",
      "diferenciální topologie",
      "topologické prostory",
      "homotopie",
      "homologie",
      "kohomologie"
    ]
  },
  {
    "regal": "M11",
    "signatura": "517",
    "popis": "Matematická analýza",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "matematická analýza, analýza, limita, spojitost, mathematical analysis, calculus, limits, continuity",
    "keywords": [
      "matematická analýza",
      "analýza",
      "limita",
      "spojitost",
      "mathematical analysis",
      "calculus",
      "limits",
      "continuity"
    ]
  },
  {
    "regal": "M11-12",
    "signatura": "517.2/.3",
    "popis": "Diferenciální a integrální počet",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "diferenciální počet, integrální počet, derivace, integrál, calculus, differential calculus, integral calculus, Newton, Leibniz",
    "keywords": [
      "diferenciální počet",
      "integrální počet",
      "derivace",
      "integrál",
      "calculus",
      "differential calculus",
      "integral calculus",
      "Newton",
      "Leibniz"
    ]
  },
  {
    "regal": "M13",
    "signatura": "517.5",
    "popis": "Teorie funkcí, Metrické prostory, Integrální transformace, Funkce komplexní proměnné, Míra a integrál",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "teorie funkcí, metrické prostory, Fourierova transformace, Laplaceova transformace, komplexní analýza, function theory, complex analysis, Fourier, Laplace, míra, measure theory, Lebesgue",
    "keywords": [
      "teorie funkcí",
      "metrické prostory",
      "Fourierova transformace",
      "Laplaceova transformace",
      "komplexní analýza",
      "function theory",
      "complex analysis",
      "Fourier",
      "Laplace",
      "míra",
      "measure theory",
      "Lebesgue"
    ]
  },
  {
    "regal": "M14",
    "signatura": "517.9",
    "popis": "Diferenciální rovnice (obyčejné, parciální, matematická fyzika), Integrální rovnice, Funkcionální rovnice, Diferenční rovnice",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "diferenciální rovnice, parciální diferenciální rovnice, ODR, PDR, integrální rovnice, differential equations, ODE, PDE, integral equations, matematická fyzika",
    "keywords": [
      "diferenciální rovnice",
      "parciální diferenciální rovnice",
      "ODR",
      "PDR",
      "integrální rovnice",
      "differential equations",
      "ODE",
      "PDE",
      "integral equations",
      "matematická fyzika"
    ]
  },
  {
    "regal": "M15",
    "signatura": "517.938",
    "popis": "Dynamické systémy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "dynamické systémy, chaos, bifurkace, dynamical systems, chaos theory, attractors, atraktory, Lorenz",
    "keywords": [
      "dynamické systémy",
      "chaos",
      "bifurkace",
      "dynamical systems",
      "chaos theory",
      "attractors",
      "atraktory",
      "Lorenz"
    ]
  },
  {
    "regal": "M15",
    "signatura": "517.97",
    "popis": "Variační počet, Teorie řízení",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "variační počet, optimalizace, teorie řízení, calculus of variations, control theory, optimization, Euler-Lagrange",
    "keywords": [
      "variační počet",
      "optimalizace",
      "teorie řízení",
      "calculus of variations",
      "control theory",
      "optimization",
      "Euler-Lagrange"
    ]
  },
  {
    "regal": "M15",
    "signatura": "517.98",
    "popis": "Funkcionální analýza",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "funkcionální analýza, Banachovy prostory, Hilbertovy prostory, functional analysis, Banach spaces, Hilbert spaces, operátory, operators",
    "keywords": [
      "funkcionální analýza",
      "Banachovy prostory",
      "Hilbertovy prostory",
      "functional analysis",
      "Banach spaces",
      "Hilbert spaces",
      "operátory",
      "operators"
    ]
  },
  {
    "regal": "M16",
    "signatura": "519.1",
    "popis": "Kombinatorika, Teorie grafů, Diskrétní matematika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "kombinatorika, teorie grafů, diskrétní matematika, combinatorics, graph theory, discrete mathematics, permutace, kombinace, grafy",
    "keywords": [
      "kombinatorika",
      "teorie grafů",
      "diskrétní matematika",
      "combinatorics",
      "graph theory",
      "discrete mathematics",
      "permutace",
      "kombinace",
      "grafy"
    ]
  },
  {
    "regal": "M16-17",
    "signatura": "519.2",
    "popis": "Pravděpodobnost, Matematická statistika, Časové řady",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "pravděpodobnost, statistika, časové řady, probability, statistics, time series, náhodná veličina, rozdělení, regression, hypotézy",
    "keywords": [
      "pravděpodobnost",
      "statistika",
      "časové řady",
      "probability",
      "statistics",
      "time series",
      "náhodná veličina",
      "rozdělení",
      "regression",
      "hypotézy"
    ]
  },
  {
    "regal": "M17-18",
    "signatura": "519.6",
    "popis": "Výpočtová matematika, Numerická analýza",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "numerická analýza, numerické metody, výpočetní matematika, numerical analysis, computational mathematics, aproximace, interpolace, numerické řešení",
    "keywords": [
      "numerická analýza",
      "numerické metody",
      "výpočetní matematika",
      "numerical analysis",
      "computational mathematics",
      "aproximace",
      "interpolace",
      "numerické řešení"
    ]
  },
  {
    "regal": "M18",
    "signatura": "519.7",
    "popis": "Kybernetika a computer science, Teorie informací, Teorie kódování, Sítě, Teorie složitosti",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "kybernetika, informatika, teorie informací, kódování, složitost, cybernetics, computer science, information theory, coding theory, complexity, Shannon, Turing",
    "keywords": [
      "kybernetika",
      "informatika",
      "teorie informací",
      "kódování",
      "složitost",
      "cybernetics",
      "computer science",
      "information theory",
      "coding theory",
      "complexity",
      "Shannon",
      "Turing"
    ]
  },
  {
    "regal": "M18",
    "signatura": "519.8",
    "popis": "Operační výzkum, Teorie her, Matematické programování, Matematické modelování",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "operační výzkum, teorie her, optimalizace, lineární programování, operations research, game theory, optimization, Nash, matematické modelování",
    "keywords": [
      "operační výzkum",
      "teorie her",
      "optimalizace",
      "lineární programování",
      "operations research",
      "game theory",
      "optimization",
      "Nash",
      "matematické modelování"
    ]
  },
  {
    "regal": "M19",
    "signatura": "519.91",
    "popis": "Aplikace matematiky v přírodních vědách",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "aplikovaná matematika, matematická fyzika, matematická biologie, applied mathematics, mathematical physics, mathematical biology, modelování",
    "keywords": [
      "aplikovaná matematika",
      "matematická fyzika",
      "matematická biologie",
      "applied mathematics",
      "mathematical physics",
      "mathematical biology",
      "modelování"
    ]
  },
  {
    "regal": "M19",
    "signatura": "519.92",
    "popis": "Aplikace matematiky v ekonomii",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "matematická ekonomie, ekonometrie, finanční matematika, mathematical economics, econometrics, economic modeling",
    "keywords": [
      "matematická ekonomie",
      "ekonometrie",
      "finanční matematika",
      "mathematical economics",
      "econometrics",
      "economic modeling"
    ]
  },
  {
    "regal": "M19",
    "signatura": "519.93",
    "popis": "Aplikace matematiky v humanitních vědách",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "matematika v humanitních vědách, sociální matematika, statistics in social sciences, quantitative methods",
    "keywords": [
      "matematika v humanitních vědách",
      "sociální matematika",
      "statistics in social sciences",
      "quantitative methods"
    ]
  },
  {
    "regal": "M20",
    "signatura": "",
    "popis": "Archivum mathematicum",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "matematický časopis, Masarykova univerzita, mathematics journal, Czech, Brno, peer-reviewed",
    "keywords": [
      "matematický časopis",
      "Masarykova univerzita",
      "mathematics journal",
      "Czech",
      "Brno",
      "peer-reviewed"
    ]
  },
  {
    "regal": "M20",
    "signatura": "",
    "popis": "Folia. Mathematica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "matematický časopis, Masarykova univerzita, mathematics journal, Czech, Brno",
    "keywords": [
      "matematický časopis",
      "Masarykova univerzita",
      "mathematics journal",
      "Czech",
      "Brno"
    ]
  },
  {
    "regal": "M20",
    "signatura": "",
    "popis": "Scripta. Mathematica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "matematický časopis, Masarykova univerzita, mathematics journal, Czech, Brno",
    "keywords": [
      "matematický časopis",
      "Masarykova univerzita",
      "mathematics journal",
      "Czech",
      "Brno"
    ]
  },
  {
    "regal": "M20",
    "signatura": "",
    "popis": "Algebraic and geometric topology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "topologie, algebraická topologie, geometrická topologie, topology journal, English, prestižní, high-impact, algebraic topology, geometric topology",
    "keywords": [
      "topologie",
      "algebraická topologie",
      "geometrická topologie",
      "topology journal",
      "English",
      "prestižní",
      "high-impact",
      "algebraic topology",
      "geometric topology"
    ]
  },
  {
    "regal": "M20",
    "signatura": "",
    "popis": "The Annals of Statistics",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "statistika, časopis, statistics journal, English, prestižní, high-impact, top-tier, statistical theory, methodology",
    "keywords": [
      "statistika",
      "časopis",
      "statistics journal",
      "English",
      "prestižní",
      "high-impact",
      "top-tier",
      "statistical theory",
      "methodology"
    ]
  },
  {
    "regal": "M20",
    "signatura": "",
    "popis": "Applications of Mathematics",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "aplikovaná matematika, applied mathematics journal, English, Czech Academy of Sciences, numerical analysis, PDEs",
    "keywords": [
      "aplikovaná matematika",
      "applied mathematics journal",
      "English",
      "Czech Academy of Sciences",
      "numerical analysis",
      "PDEs"
    ]
  },
  {
    "regal": "M20",
    "signatura": "",
    "popis": "Cahiers de topologie et géométrie différentielle catégoriques",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "topologie, diferenciální geometrie, kategorie, topology, differential geometry, category theory, French, specialist journal",
    "keywords": [
      "topologie",
      "diferenciální geometrie",
      "kategorie",
      "topology",
      "differential geometry",
      "category theory",
      "French",
      "specialist journal"
    ]
  },
  {
    "regal": "M20",
    "signatura": "",
    "popis": "Czechoslovak mathematical journal",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "matematický časopis, Czech mathematical journal, English, Czech Academy of Sciences, peer-reviewed",
    "keywords": [
      "matematický časopis",
      "Czech mathematical journal",
      "English",
      "Czech Academy of Sciences",
      "peer-reviewed"
    ]
  },
  {
    "regal": "M20",
    "signatura": "",
    "popis": "Časopis pro pěstování matematiky",
    "popis_novy": "Mathematica Bohemica",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "matematický časopis, historický název, Czech, přejmenováno na Mathematica Bohemica, historical",
    "keywords": [
      "matematický časopis",
      "historický název",
      "Czech",
      "přejmenováno na Mathematica Bohemica",
      "historical"
    ]
  },
  {
    "regal": "M21",
    "signatura": "",
    "popis": "Georgian Mathematical Journal",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "matematický časopis, Georgian, English, mathematics, general mathematics",
    "keywords": [
      "matematický časopis",
      "Georgian",
      "English",
      "mathematics",
      "general mathematics"
    ]
  },
  {
    "regal": "M21",
    "signatura": "",
    "popis": "Geometry and Topology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "geometrie, topologie, geometry, topology, English, prestižní, high-impact, algebraic topology",
    "keywords": [
      "geometrie",
      "topologie",
      "geometry",
      "topology",
      "English",
      "prestižní",
      "high-impact",
      "algebraic topology"
    ]
  },
  {
    "regal": "M21",
    "signatura": "",
    "popis": "Journal of Differential Geometry",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "diferenciální geometrie, differential geometry, English, prestižní, top-tier, Riemannian geometry, geometric analysis",
    "keywords": [
      "diferenciální geometrie",
      "differential geometry",
      "English",
      "prestižní",
      "top-tier",
      "Riemannian geometry",
      "geometric analysis"
    ]
  },
  {
    "regal": "M21",
    "signatura": "",
    "popis": "Journal of the Royal Statistical Society. Series B, Statistical methodology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "statistika, metodologie, statistics, statistical methods, English, prestižní, Royal Statistical Society, methodology",
    "keywords": [
      "statistika",
      "metodologie",
      "statistics",
      "statistical methods",
      "English",
      "prestižní",
      "Royal Statistical Society",
      "methodology"
    ]
  },
  {
    "regal": "M21",
    "signatura": "",
    "popis": "Journal of the Royal Statistical Society. Series C, Applied Statistics",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "aplikovaná statistika, applied statistics, English, prestižní, Royal Statistical Society, applications",
    "keywords": [
      "aplikovaná statistika",
      "applied statistics",
      "English",
      "prestižní",
      "Royal Statistical Society",
      "applications"
    ]
  },
  {
    "regal": "M21",
    "signatura": "",
    "popis": "Kvant",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "populární matematika, fyzika, mládež, studentský časopis, Russian, Czech translation, problem solving, olympiáda",
    "keywords": [
      "populární matematika",
      "fyzika",
      "mládež",
      "studentský časopis",
      "Russian",
      "Czech translation",
      "problem solving",
      "olympiáda"
    ]
  },
  {
    "regal": "M21",
    "signatura": "",
    "popis": "Matematická olympiáda na středních školách",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "matematická olympiáda, soutěž, střední škola, mathematical olympiad, competition, Czech, problems, solutions",
    "keywords": [
      "matematická olympiáda",
      "soutěž",
      "střední škola",
      "mathematical olympiad",
      "competition",
      "Czech",
      "problems",
      "solutions"
    ]
  },
  {
    "regal": "M21",
    "signatura": "",
    "popis": "Matematika, fyzika, informatika",
    "popis_novy": "",
    "popis_stary": "Matematika a fyzika ve škole",
    "typ": "časopis | sborník",
    "tema": "didaktika, výuka, matematika, fyzika, informatika, teaching, education, Czech, pedagogika, metodika",
    "keywords": [
      "didaktika",
      "výuka",
      "matematika",
      "fyzika",
      "informatika",
      "teaching",
      "education",
      "Czech",
      "pedagogika",
      "metodika"
    ]
  },
  {
    "regal": "M21",
    "signatura": "",
    "popis": "Matematika a fyzika ve škole",
    "popis_novy": "Matematika, fyzika, informatika",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "didaktika, výuka, historický název, teaching, education, Czech, přejmenováno, historical",
    "keywords": [
      "didaktika",
      "výuka",
      "historický název",
      "teaching",
      "education",
      "Czech",
      "přejmenováno",
      "historical"
    ]
  },
  {
    "regal": "M22",
    "signatura": "",
    "popis": "Mathematica Bohemica",
    "popis_novy": "",
    "popis_stary": "Časopis pro pěstování matematiky",
    "typ": "časopis | sborník",
    "tema": "matematický časopis, Czech Academy of Sciences, English, mathematics, general mathematics, dříve Časopis pro pěstování matematiky",
    "keywords": [
      "matematický časopis",
      "Czech Academy of Sciences",
      "English",
      "mathematics",
      "general mathematics",
      "dříve Časopis pro pěstování matematiky"
    ]
  },
  {
    "regal": "M22",
    "signatura": "",
    "popis": "Mathematical Structures in Computer Science",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "informatika, matematické struktury, theoretical computer science, English, logic, semantics, category theory",
    "keywords": [
      "informatika",
      "matematické struktury",
      "theoretical computer science",
      "English",
      "logic",
      "semantics",
      "category theory"
    ]
  },
  {
    "regal": "M22",
    "signatura": "",
    "popis": "Mathematics for Applications",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "aplikovaná matematika, applied mathematics, English, Brno, numerical methods, modeling",
    "keywords": [
      "aplikovaná matematika",
      "applied mathematics",
      "English",
      "Brno",
      "numerical methods",
      "modeling"
    ]
  },
  {
    "regal": "M22",
    "signatura": "",
    "popis": "Moderní trendy ve vyučování",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "didaktika, moderní výuka, trendy, vzdělávání, teaching trends, modern education, Czech, methodology",
    "keywords": [
      "didaktika",
      "moderní výuka",
      "trendy",
      "vzdělávání",
      "teaching trends",
      "modern education",
      "Czech",
      "methodology"
    ]
  },
  {
    "regal": "M22",
    "signatura": "",
    "popis": "Pokroky matematiky fyziky a astronomie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "populární věda, matematika, fyzika, astronomie, Czech, popular science, expository, přehledové články",
    "keywords": [
      "populární věda",
      "matematika",
      "fyzika",
      "astronomie",
      "Czech",
      "popular science",
      "expository",
      "přehledové články"
    ]
  },
  {
    "regal": "M22",
    "signatura": "",
    "popis": "Proceedings of the London Mathematical Society",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "matematický časopis, English, prestižní, London Mathematical Society, pure mathematics, top-tier",
    "keywords": [
      "matematický časopis",
      "English",
      "prestižní",
      "London Mathematical Society",
      "pure mathematics",
      "top-tier"
    ]
  },
  {
    "regal": "M22",
    "signatura": "",
    "popis": "The Royal Society of Edinburgh",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "vědecký časopis, matematika, přírodní vědy, English, prestižní, Scottish, multidisciplinary",
    "keywords": [
      "vědecký časopis",
      "matematika",
      "přírodní vědy",
      "English",
      "prestižní",
      "Scottish",
      "multidisciplinary"
    ]
  },
  {
    "regal": "M22",
    "signatura": "",
    "popis": "Rozhledy matematicko-fyzikální",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "didaktika, matematika, fyzika, výuka, Czech, teaching, secondary education, metodika",
    "keywords": [
      "didaktika",
      "matematika",
      "fyzika",
      "výuka",
      "Czech",
      "teaching",
      "secondary education",
      "metodika"
    ]
  },
  {
    "regal": "A1",
    "signatura": "572",
    "popis": "Antropologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "antropologie, anthropology, fyzická antropologie, sociokulturní antropologie, human anthropology",
    "keywords": [
      "antropologie",
      "anthropology",
      "fyzická antropologie",
      "sociokulturní antropologie",
      "human anthropology"
    ]
  },
  {
    "regal": "A1",
    "signatura": "572.1",
    "popis": "Fyzická antropologie, Biologie člověka, Forenzní antropologie, Bioarcheologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "fyzická antropologie, physical anthropology, biologie člověka, human biology, forenzní antropologie, forensic anthropology, bioarcheologie, bioarchaeology, osteologie, skeletal biology",
    "keywords": [
      "fyzická antropologie",
      "physical anthropology",
      "biologie člověka",
      "human biology",
      "forenzní antropologie",
      "forensic anthropology",
      "bioarcheologie",
      "bioarchaeology",
      "osteologie",
      "skeletal biology"
    ]
  },
  {
    "regal": "A2",
    "signatura": "572.12",
    "popis": "Anatomie, Fyziologie, Histologie, Lékařské vědy (Neurologie | Sexuologie)",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "anatomie, anatomy, fyziologie, physiology, histologie, histology, lékařské vědy, medical sciences, neurologie, neurology, sexuologie, sexology, nervová soustava, mozek, tkáně",
    "keywords": [
      "anatomie",
      "anatomy",
      "fyziologie",
      "physiology",
      "histologie",
      "histology",
      "lékařské vědy",
      "medical sciences",
      "neurologie",
      "neurology",
      "sexuologie",
      "sexology",
      "nervová soustava",
      "mozek",
      "tkáně"
    ]
  },
  {
    "regal": "A2",
    "signatura": "572.13",
    "popis": "Genetika, Genetika člověka",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "genetika, genetics, genetika člověka, human genetics, DNA, geny, dědičnost, heredity, molekulární genetika, genomika, genomics, genetické choroby",
    "keywords": [
      "genetika",
      "genetics",
      "genetika člověka",
      "human genetics",
      "DNA",
      "geny",
      "dědičnost",
      "heredity",
      "molekulární genetika",
      "genomika",
      "genomics",
      "genetické choroby"
    ]
  },
  {
    "regal": "A3",
    "signatura": "572.14",
    "popis": "Primatologie | Zoologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "primatologie, primatology, zoologie, zoology, primáti, primates, lidoopi, opice, apes, monkeys, evoluční biologie",
    "keywords": [
      "primatologie",
      "primatology",
      "zoologie",
      "zoology",
      "primáti",
      "primates",
      "lidoopi",
      "opice",
      "apes",
      "monkeys",
      "evoluční biologie"
    ]
  },
  {
    "regal": "A3",
    "signatura": "572.15",
    "popis": "Obecná a evoluční biologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "evoluční biologie, evolutionary biology, evoluce, evolution, darwin, přírodní výběr, natural selection, adaptace, fylogeneze, phylogenetics",
    "keywords": [
      "evoluční biologie",
      "evolutionary biology",
      "evoluce",
      "evolution",
      "darwin",
      "přírodní výběr",
      "natural selection",
      "adaptace",
      "fylogeneze",
      "phylogenetics"
    ]
  },
  {
    "regal": "A3",
    "signatura": "572.16",
    "popis": "Ekologie člověka",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "ekologie člověka, human ecology, ekosystémy, environment, životní prostředí, adaptace na prostředí, populační ekologie",
    "keywords": [
      "ekologie člověka",
      "human ecology",
      "ekosystémy",
      "environment",
      "životní prostředí",
      "adaptace na prostředí",
      "populační ekologie"
    ]
  },
  {
    "regal": "A3",
    "signatura": "572.17",
    "popis": "Demografie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "demografie, demography, populace, population, statistika obyvatelstva, natalita, mortalita, migrace, populační studie",
    "keywords": [
      "demografie",
      "demography",
      "populace",
      "population",
      "statistika obyvatelstva",
      "natalita",
      "mortalita",
      "migrace",
      "populační studie"
    ]
  },
  {
    "regal": "A3",
    "signatura": "572.18",
    "popis": "Etnická antropologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "etnická antropologie, ethnic anthropology, etnické skupiny, ethnic groups, rasy, rasová diverzita, populační genetika",
    "keywords": [
      "etnická antropologie",
      "ethnic anthropology",
      "etnické skupiny",
      "ethnic groups",
      "rasy",
      "rasová diverzita",
      "populační genetika"
    ]
  },
  {
    "regal": "A4",
    "signatura": "572.2",
    "popis": "Paleontropologie | Arecheologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "paleoantropologie, paleoanthropology, archeologie, archaeology, fosilní nálezy, fossils, pravěk, prehistory, vývoj člověka, human evolution, hominidi, hominids, homo sapiens, neandrtálci",
    "keywords": [
      "paleoantropologie",
      "paleoanthropology",
      "archeologie",
      "archaeology",
      "fosilní nálezy",
      "fossils",
      "pravěk",
      "prehistory",
      "vývoj člověka",
      "human evolution",
      "hominidi",
      "hominids",
      "homo sapiens",
      "neandrtálci"
    ]
  },
  {
    "regal": "A5",
    "signatura": "572.3",
    "popis": "Sociokulturní antropologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "sociokulturní antropologie, sociocultural anthropology, kulturní antropologie, cultural anthropology, společnost, kultura, rituály, symboly",
    "keywords": [
      "sociokulturní antropologie",
      "sociocultural anthropology",
      "kulturní antropologie",
      "cultural anthropology",
      "společnost",
      "kultura",
      "rituály",
      "symboly"
    ]
  },
  {
    "regal": "A5",
    "signatura": "572.31",
    "popis": "Sociologie, Sociální vědy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "sociologie, sociology, sociální vědy, social sciences, společnost, společenské struktury, sociální interakce, sociální stratifikace",
    "keywords": [
      "sociologie",
      "sociology",
      "sociální vědy",
      "social sciences",
      "společnost",
      "společenské struktury",
      "sociální interakce",
      "sociální stratifikace"
    ]
  },
  {
    "regal": "A5",
    "signatura": "572.32",
    "popis": "Psychologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "psychologie, psychology, kognitivní psychologie, cognitive psychology, evoluční psychologie, developmental psychology, vývojová psychologie, chování, behavior",
    "keywords": [
      "psychologie",
      "psychology",
      "kognitivní psychologie",
      "cognitive psychology",
      "evoluční psychologie",
      "developmental psychology",
      "vývojová psychologie",
      "chování",
      "behavior"
    ]
  },
  {
    "regal": "A5",
    "signatura": "572.33",
    "popis": "Lingvistika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "lingvistika, linguistics, jazyk, language, jazykověda, sociolingvistika, psycholingvistika, fonologie, syntax, sémantika, etymologie",
    "keywords": [
      "lingvistika",
      "linguistics",
      "jazyk",
      "language",
      "jazykověda",
      "sociolingvistika",
      "psycholingvistika",
      "fonologie",
      "syntax",
      "sémantika",
      "etymologie"
    ]
  },
  {
    "regal": "A5",
    "signatura": "572.34",
    "popis": "Etnografie | Etnologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "etnografie, ethnography, etnologie, ethnology, terénní výzkum, fieldwork, kulturní praktiky, lidová kultura, tradiční společnosti",
    "keywords": [
      "etnografie",
      "ethnography",
      "etnologie",
      "ethnology",
      "terénní výzkum",
      "fieldwork",
      "kulturní praktiky",
      "lidová kultura",
      "tradiční společnosti"
    ]
  },
  {
    "regal": "A5",
    "signatura": "572.35",
    "popis": "Filozofie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "filozofie, philosophy, antropologická filozofie, philosophical anthropology, etika, epistemologie, ontologie, fenomenologie",
    "keywords": [
      "filozofie",
      "philosophy",
      "antropologická filozofie",
      "philosophical anthropology",
      "etika",
      "epistemologie",
      "ontologie",
      "fenomenologie"
    ]
  },
  {
    "regal": "A5",
    "signatura": "572.36",
    "popis": "Náboženství",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "náboženství, religion, antropologie náboženství, religious anthropology, rituály, mýty, myths, spiritualita, víra, belief systems",
    "keywords": [
      "náboženství",
      "religion",
      "antropologie náboženství",
      "religious anthropology",
      "rituály",
      "mýty",
      "myths",
      "spiritualita",
      "víra",
      "belief systems"
    ]
  },
  {
    "regal": "A6",
    "signatura": "572.4",
    "popis": "Dějiny",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "dějiny, history, historická antropologie, historical anthropology, historická perspektiva",
    "keywords": [
      "dějiny",
      "history",
      "historická antropologie",
      "historical anthropology",
      "historická perspektiva"
    ]
  },
  {
    "regal": "A6",
    "signatura": "572.41",
    "popis": "Pravěk",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "pravěk, prehistory, pravěké společnosti, prehistoric societies, paleolit, neolit, doba kamenná, stone age",
    "keywords": [
      "pravěk",
      "prehistory",
      "pravěké společnosti",
      "prehistoric societies",
      "paleolit",
      "neolit",
      "doba kamenná",
      "stone age"
    ]
  },
  {
    "regal": "A6",
    "signatura": "572.42",
    "popis": "Středověk",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "středověk, middle ages, medieval, středověké společnosti, feudalismus",
    "keywords": [
      "středověk",
      "middle ages",
      "medieval",
      "středověké společnosti",
      "feudalismus"
    ]
  },
  {
    "regal": "A6",
    "signatura": "572.43",
    "popis": "Novověk",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "novověk, modern history, moderní doba, renesance, osvícenství, enlightenment, industrializace",
    "keywords": [
      "novověk",
      "modern history",
      "moderní doba",
      "renesance",
      "osvícenství",
      "enlightenment",
      "industrializace"
    ]
  },
  {
    "regal": "A6",
    "signatura": "572.44",
    "popis": "Starověk",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "starověk, antiquity, ancient history, starověké civilizace, ancient civilizations, řecko, řím, egypt, mezopotámie",
    "keywords": [
      "starověk",
      "antiquity",
      "ancient history",
      "starověké civilizace",
      "ancient civilizations",
      "řecko",
      "řím",
      "egypt",
      "mezopotámie"
    ]
  },
  {
    "regal": "A7",
    "signatura": "572.5",
    "popis": "Antropologie umění",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "antropologie umění, anthropology of art, vizuální kultura, visual culture, symbolismus, estetika",
    "keywords": [
      "antropologie umění",
      "anthropology of art",
      "vizuální kultura",
      "visual culture",
      "symbolismus",
      "estetika"
    ]
  },
  {
    "regal": "A7",
    "signatura": "572.51",
    "popis": "Výtvarné umění",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "výtvarné umění, visual arts, malířství, painting, sochařství, sculpture, umělecké tradice",
    "keywords": [
      "výtvarné umění",
      "visual arts",
      "malířství",
      "painting",
      "sochařství",
      "sculpture",
      "umělecké tradice"
    ]
  },
  {
    "regal": "A7",
    "signatura": "572.52",
    "popis": "Hudba",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "hudba, music, etnomuzikologie, ethnomusicology, hudební tradice, hudební antropologie, musical anthropology",
    "keywords": [
      "hudba",
      "music",
      "etnomuzikologie",
      "ethnomusicology",
      "hudební tradice",
      "hudební antropologie",
      "musical anthropology"
    ]
  },
  {
    "regal": "A7",
    "signatura": "572.53",
    "popis": "Architektura",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "architektura, architecture, stavitelství, tradiční architektura, vernacular architecture, urbanismus",
    "keywords": [
      "architektura",
      "architecture",
      "stavitelství",
      "tradiční architektura",
      "vernacular architecture",
      "urbanismus"
    ]
  },
  {
    "regal": "A7",
    "signatura": "572.54",
    "popis": "Osobnosti",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "osobnosti, personalities, biografie, biography, významní antropologové, famous anthropologists",
    "keywords": [
      "osobnosti",
      "personalities",
      "biografie",
      "biography",
      "významní antropologové",
      "famous anthropologists"
    ]
  },
  {
    "regal": "A7",
    "signatura": "572.55",
    "popis": "Literatura",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "literatura, literature, orální tradice, oral tradition, storytelling, vyprávění, literární antropologie",
    "keywords": [
      "literatura",
      "literature",
      "orální tradice",
      "oral tradition",
      "storytelling",
      "vyprávění",
      "literární antropologie"
    ]
  },
  {
    "regal": "A8",
    "signatura": "572.6",
    "popis": "Časopisy a sborníky",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "časopisy, journals, sborníky, proceedings, periodika, periodicals, vědecké časopisy, scientific journals, antropologické publikace",
    "keywords": [
      "časopisy",
      "journals",
      "sborníky",
      "proceedings",
      "periodika",
      "periodicals",
      "vědecké časopisy",
      "scientific journals",
      "antropologické publikace"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Acta Filozofické fakulty Západočeské univerzity v Plzni",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, sborník, Plzeň, Západočeská univerzita, filozofická fakulta, česky, český časopis, recenzovaný časopis",
    "keywords": [
      "časopis",
      "journal",
      "sborník",
      "Plzeň",
      "Západočeská univerzita",
      "filozofická fakulta",
      "česky",
      "český časopis",
      "recenzovaný časopis"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "American Anthropologist",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, American Anthropologist, americký časopis, anglicky, English, prestižní časopis, anthropology journal, AAA, American Anthropological Association",
    "keywords": [
      "časopis",
      "journal",
      "American Anthropologist",
      "americký časopis",
      "anglicky",
      "English",
      "prestižní časopis",
      "anthropology journal",
      "AAA",
      "American Anthropological Association"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Antropologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Antropologie, český časopis, česky, antropologický časopis, Národní muzeum",
    "keywords": [
      "časopis",
      "journal",
      "Antropologie",
      "český časopis",
      "česky",
      "antropologický časopis",
      "Národní muzeum"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Anthropologia Integra",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Anthropologia Integra, český časopis, česky a anglicky, Přírodovědecká fakulta, Masarykova univerzita, open access",
    "keywords": [
      "časopis",
      "journal",
      "Anthropologia Integra",
      "český časopis",
      "česky a anglicky",
      "Přírodovědecká fakulta",
      "Masarykova univerzita",
      "open access"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Antropologické symposium",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "sborník, proceedings, symposium, antropologické, český, česky",
    "keywords": [
      "sborník",
      "proceedings",
      "symposium",
      "antropologické",
      "český",
      "česky"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Anthropozoikum",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Anthropozoikum, český časopis, česky, čtvrtohorní výzkum, Quaternary research, paleoantropologie",
    "keywords": [
      "časopis",
      "journal",
      "Anthropozoikum",
      "český časopis",
      "česky",
      "čtvrtohorní výzkum",
      "Quaternary research",
      "paleoantropologie"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Archaelogia historica",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Archaeologia historica, archeologie, archaeology, historická archeologie, historical archaeology, český časopis, česky",
    "keywords": [
      "časopis",
      "journal",
      "Archaeologia historica",
      "archeologie",
      "archaeology",
      "historická archeologie",
      "historical archaeology",
      "český časopis",
      "česky"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Archaelogica Pragnesia",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Archaeologica Pragensia, Praha, Prague, archeologie, český časopis, česky",
    "keywords": [
      "časopis",
      "journal",
      "Archaeologica Pragensia",
      "Praha",
      "Prague",
      "archeologie",
      "český časopis",
      "česky"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Archeologie východních Čech",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, východní Čechy, eastern Bohemia, regionální archeologie, český časopis, česky",
    "keywords": [
      "časopis",
      "journal",
      "východní Čechy",
      "eastern Bohemia",
      "regionální archeologie",
      "český časopis",
      "česky"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Archaeology, Ethnology & Anthropology of Eurasia",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Eurasian archaeology, archeologie, etnologie, etnography, anthropology, anglicky, English, prestižní časopis, Eurasie",
    "keywords": [
      "časopis",
      "journal",
      "Eurasian archaeology",
      "archeologie",
      "etnologie",
      "etnography",
      "anthropology",
      "anglicky",
      "English",
      "prestižní časopis",
      "Eurasie"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Archivum Trebonense",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, sborník, Třeboň, archivní studie, historie, český časopis, česky",
    "keywords": [
      "časopis",
      "journal",
      "sborník",
      "Třeboň",
      "archivní studie",
      "historie",
      "český časopis",
      "česky"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Bohemia centralis",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Bohemia centralis, Čechy, Bohemia, archeologie, český časopis, česky",
    "keywords": [
      "časopis",
      "journal",
      "Bohemia centralis",
      "Čechy",
      "Bohemia",
      "archeologie",
      "český časopis",
      "česky"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Current anthropology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Current Anthropology, americký časopis, anglicky, English, prestižní časopis, high impact, anthropology journal, Wenner-Gren Foundation",
    "keywords": [
      "časopis",
      "journal",
      "Current Anthropology",
      "americký časopis",
      "anglicky",
      "English",
      "prestižní časopis",
      "high impact",
      "anthropology journal",
      "Wenner-Gren Foundation"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Česká antropologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Česká antropologie, český časopis, česky, Národní muzeum",
    "keywords": [
      "časopis",
      "journal",
      "Česká antropologie",
      "český časopis",
      "česky",
      "Národní muzeum"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Dějiny a součastnost",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, dějiny, history, současnost, contemporary history, český časopis, česky, historický časopis",
    "keywords": [
      "časopis",
      "journal",
      "dějiny",
      "history",
      "současnost",
      "contemporary history",
      "český časopis",
      "česky",
      "historický časopis"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Ethnologia",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Ethnologia, etnologie, ethnology, etnografie, slovenský časopis, slovensky",
    "keywords": [
      "časopis",
      "journal",
      "Ethnologia",
      "etnologie",
      "ethnology",
      "etnografie",
      "slovenský časopis",
      "slovensky"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "European journal of Archaeology",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, European Journal of Archaeology, archeologie, archaeology, evropský časopis, anglicky, English, prestižní časopis, EAA",
    "keywords": [
      "časopis",
      "journal",
      "European Journal of Archaeology",
      "archeologie",
      "archaeology",
      "evropský časopis",
      "anglicky",
      "English",
      "prestižní časopis",
      "EAA"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Experimentelle Archäologie in Europa",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, sborník, experimentální archeologie, experimental archaeology, německy, German, Deutsch, Evropa",
    "keywords": [
      "časopis",
      "journal",
      "sborník",
      "experimentální archeologie",
      "experimental archaeology",
      "německy",
      "German",
      "Deutsch",
      "Evropa"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Historia Artium",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Historia Artium, dějiny umění, art history, český časopis, česky",
    "keywords": [
      "časopis",
      "journal",
      "Historia Artium",
      "dějiny umění",
      "art history",
      "český časopis",
      "česky"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Historická sociologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, historická sociologie, historical sociology, sociologie, český časopis, česky",
    "keywords": [
      "časopis",
      "journal",
      "historická sociologie",
      "historical sociology",
      "sociologie",
      "český časopis",
      "česky"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Jižní Morava",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, sborník, jižní Morava, southern Moravia, regionální časopis, archeologie, český časopis, česky",
    "keywords": [
      "časopis",
      "journal",
      "sborník",
      "jižní Morava",
      "southern Moravia",
      "regionální časopis",
      "archeologie",
      "český časopis",
      "česky"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Měsíčník Ciba",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Měsíčník Ciba, historický časopis, lékařská historie, český časopis, česky",
    "keywords": [
      "časopis",
      "journal",
      "Měsíčník Ciba",
      "historický časopis",
      "lékařská historie",
      "český časopis",
      "česky"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Mitteilungen der Anthropologischen Gesellschaft in Wien",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, antropologie, anthropology, Vídeň, Wien, Vienna, rakouský časopis, německy, German, Deutsch, Anthropologische Gesellschaft",
    "keywords": [
      "časopis",
      "journal",
      "antropologie",
      "anthropology",
      "Vídeň",
      "Wien",
      "Vienna",
      "rakouský časopis",
      "německy",
      "German",
      "Deutsch",
      "Anthropologische Gesellschaft"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Olomoucký archivní sborník",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "sborník, proceedings, Olomouc, archivní studie, historie, český časopis, česky",
    "keywords": [
      "sborník",
      "proceedings",
      "Olomouc",
      "archivní studie",
      "historie",
      "český časopis",
      "česky"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Plzneňský lékařský sborník",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "sborník, proceedings, Plzeň, lékařství, medicine, zdravotnictví, český časopis, česky",
    "keywords": [
      "sborník",
      "proceedings",
      "Plzeň",
      "lékařství",
      "medicine",
      "zdravotnictví",
      "český časopis",
      "česky"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Pravěk",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Pravěk, prehistory, archeologie, archaeology, český časopis, česky, Archeologický ústav",
    "keywords": [
      "časopis",
      "journal",
      "Pravěk",
      "prehistory",
      "archeologie",
      "archaeology",
      "český časopis",
      "česky",
      "Archeologický ústav"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Pražský sborník historický",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "sborník, proceedings, Praha, Prague, historie, history, historický výzkum, český časopis, česky",
    "keywords": [
      "sborník",
      "proceedings",
      "Praha",
      "Prague",
      "historie",
      "history",
      "historický výzkum",
      "český časopis",
      "česky"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Przegląd Antropologiczny",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Przegląd Antropologiczny, antropologie, anthropology, polský časopis, polsky, Polish, Polsko",
    "keywords": [
      "časopis",
      "journal",
      "Przegląd Antropologiczny",
      "antropologie",
      "anthropology",
      "polský časopis",
      "polsky",
      "Polish",
      "Polsko"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Revista Española de Antropología Americana",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, španělský časopis, španělsky, Spanish, Španělsko, antropologie, anthropology, americká antropologie, American anthropology",
    "keywords": [
      "časopis",
      "journal",
      "španělský časopis",
      "španělsky",
      "Spanish",
      "Španělsko",
      "antropologie",
      "anthropology",
      "americká antropologie",
      "American anthropology"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Social Evolution & History",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Social Evolution & History, sociální evoluce, social evolution, historie, history, anglicky, English, evoluční antropologie",
    "keywords": [
      "časopis",
      "journal",
      "Social Evolution & History",
      "sociální evoluce",
      "social evolution",
      "historie",
      "history",
      "anglicky",
      "English",
      "evoluční antropologie"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Staletá Praha",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Praha, Prague, pražská historie, městská archeologie, urban archaeology, český časopis, česky",
    "keywords": [
      "časopis",
      "journal",
      "Praha",
      "Prague",
      "pražská historie",
      "městská archeologie",
      "urban archaeology",
      "český časopis",
      "česky"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Studia Archaeologica Brunensia",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Brno, archeologie, archaeology, Masarykova univerzita, český časopis, česky",
    "keywords": [
      "časopis",
      "journal",
      "Brno",
      "archeologie",
      "archaeology",
      "Masarykova univerzita",
      "český časopis",
      "česky"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Theatralia",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Theatralia, divadlo, theatre, drama, divadelní studia, český časopis, česky, Masarykova univerzita",
    "keywords": [
      "časopis",
      "journal",
      "Theatralia",
      "divadlo",
      "theatre",
      "drama",
      "divadelní studia",
      "český časopis",
      "česky",
      "Masarykova univerzita"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Živa",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Živa, biologie, biology, přírodní vědy, natural sciences, český časopis, česky",
    "keywords": [
      "časopis",
      "journal",
      "Živa",
      "biologie",
      "biology",
      "přírodní vědy",
      "natural sciences",
      "český časopis",
      "česky"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Regiom",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Regiom, regionální studie, regional studies, český časopis, česky",
    "keywords": [
      "časopis",
      "journal",
      "Regiom",
      "regionální studie",
      "regional studies",
      "český časopis",
      "česky"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Sociologický časopis",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Sociologický časopis, Czech Sociological Review, sociologie, sociology, český časopis, česky a anglicky, prestižní časopis",
    "keywords": [
      "časopis",
      "journal",
      "Sociologický časopis",
      "Czech Sociological Review",
      "sociologie",
      "sociology",
      "český časopis",
      "česky a anglicky",
      "prestižní časopis"
    ]
  },
  {
    "regal": "A8",
    "signatura": "",
    "popis": "Stuttgarter Beiträge zur Naturkunde",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "časopis, journal, Stuttgart, Německo, Germany, přírodní historie, natural history, německy, German, Deutsch, muzeum, museum",
    "keywords": [
      "časopis",
      "journal",
      "Stuttgart",
      "Německo",
      "Germany",
      "přírodní historie",
      "natural history",
      "německy",
      "German",
      "Deutsch",
      "muzeum",
      "museum"
    ]
  },
  {
    "regal": "A9",
    "signatura": "572.9",
    "popis": "Modulové učební texty",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "modulové texty, teaching materials, učební materiály, studijní texty, studium, vzdělávání, education",
    "keywords": [
      "modulové texty",
      "teaching materials",
      "učební materiály",
      "studijní texty",
      "studium",
      "vzdělávání",
      "education"
    ]
  },
  {
    "regal": "V1",
    "signatura": "0",
    "popis": "Všeobecnosti",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "všeobecnosti, obecné, metodologie, vědecké postupy, analýza, syntéza",
    "keywords": [
      "všeobecnosti",
      "obecné",
      "metodologie",
      "vědecké postupy",
      "analýza",
      "syntéza"
    ]
  },
  {
    "regal": "V1",
    "signatura": "001",
    "popis": "Všeobecná metodologie, Technické a vědecké postupy při studiu, výzkumu a diskusi, Vědecká analýza a syntéza",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "metodologie, vědecké metody, výzkum, studie, vědecká práce, analýza, syntéza, research methods, scientific methodology",
    "keywords": [
      "metodologie",
      "vědecké metody",
      "výzkum",
      "studie",
      "vědecká práce",
      "analýza",
      "syntéza",
      "research methods",
      "scientific methodology"
    ]
  },
  {
    "regal": "V1",
    "signatura": "004",
    "popis": "Počítačová věda, Výpočetní technika, Zpracování dat",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "informatika, počítače, výpočetní technika, IT, programování, zpracování dat, computer science, data processing, software, hardware",
    "keywords": [
      "informatika",
      "počítače",
      "výpočetní technika",
      "IT",
      "programování",
      "zpracování dat",
      "computer science",
      "data processing",
      "software",
      "hardware"
    ]
  },
  {
    "regal": "V1",
    "signatura": "005",
    "popis": "Management, Řízení",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "management, řízení, vedení, organizace, administrace, leadership, organizational management",
    "keywords": [
      "management",
      "řízení",
      "vedení",
      "organizace",
      "administrace",
      "leadership",
      "organizational management"
    ]
  },
  {
    "regal": "V1",
    "signatura": "01",
    "popis": "Bibliografie, Katalogy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "bibliografie, katalog, seznam literatury, reference, citace, bibliography, catalog",
    "keywords": [
      "bibliografie",
      "katalog",
      "seznam literatury",
      "reference",
      "citace",
      "bibliography",
      "catalog"
    ]
  },
  {
    "regal": "V1",
    "signatura": "030",
    "popis": "Příruční literatura, Všeobecné encyklopedie, Naučné slovníky",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "encyklopedie, slovník, příručka, reference, lexikon, encyclopedia, dictionary, handbook",
    "keywords": [
      "encyklopedie",
      "slovník",
      "příručka",
      "reference",
      "lexikon",
      "encyclopedia",
      "dictionary",
      "handbook"
    ]
  },
  {
    "regal": "V1",
    "signatura": "070",
    "popis": "Noviny, Tisk, Žurnalistika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "žurnalistika, noviny, tisk, média, journalism, press, media, newspapers",
    "keywords": [
      "žurnalistika",
      "noviny",
      "tisk",
      "média",
      "journalism",
      "press",
      "media",
      "newspapers"
    ]
  },
  {
    "regal": "V1",
    "signatura": "1",
    "popis": "Filozofie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "filozofie, philosophy, myšlení, logika, etika, epistemologie",
    "keywords": [
      "filozofie",
      "philosophy",
      "myšlení",
      "logika",
      "etika",
      "epistemologie"
    ]
  },
  {
    "regal": "V1",
    "signatura": "159.1",
    "popis": "Psychologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "psychologie, psychology, duševní procesy, chování, kognitivní věda, cognitive science",
    "keywords": [
      "psychologie",
      "psychology",
      "duševní procesy",
      "chování",
      "kognitivní věda",
      "cognitive science"
    ]
  },
  {
    "regal": "V1",
    "signatura": "3",
    "popis": "Společenské vědy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "sociologie, společenské vědy, social sciences, společnost, sociální studia",
    "keywords": [
      "sociologie",
      "společenské vědy",
      "social sciences",
      "společnost",
      "sociální studia"
    ]
  },
  {
    "regal": "V1",
    "signatura": "32",
    "popis": "Politika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "politika, politologie, politics, political science, politické systémy",
    "keywords": [
      "politika",
      "politologie",
      "politics",
      "political science",
      "politické systémy"
    ]
  },
  {
    "regal": "V1",
    "signatura": "327",
    "popis": "Mezinárodní politické vztahy, Světová politika, Mezinárodní politika, Zahraniční politika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "mezinárodní vztahy, světová politika, zahraniční politika, diplomacie, international relations, geopolitics, foreign policy",
    "keywords": [
      "mezinárodní vztahy",
      "světová politika",
      "zahraniční politika",
      "diplomacie",
      "international relations",
      "geopolitics",
      "foreign policy"
    ]
  },
  {
    "regal": "V1",
    "signatura": "33",
    "popis": "Ekonomické vědy, Ekonomika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "ekonomie, ekonomika, economics, hospodářství, finance, makroekonomie, mikroekonomie",
    "keywords": [
      "ekonomie",
      "ekonomika",
      "economics",
      "hospodářství",
      "finance",
      "makroekonomie",
      "mikroekonomie"
    ]
  },
  {
    "regal": "V1",
    "signatura": "34",
    "popis": "Právo, Právní věda, Zákonodárství",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "právo, právní věda, zákon, legislativa, law, legal studies, jurisprudence",
    "keywords": [
      "právo",
      "právní věda",
      "zákon",
      "legislativa",
      "law",
      "legal studies",
      "jurisprudence"
    ]
  },
  {
    "regal": "V1",
    "signatura": "37",
    "popis": "Výchova, Vzdělávání, Vyučování, Volný čas",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "pedagogika, vzdělávání, výchova, vyučování, education, pedagogy, teaching, volný čas, leisure",
    "keywords": [
      "pedagogika",
      "vzdělávání",
      "výchova",
      "vyučování",
      "education",
      "pedagogy",
      "teaching",
      "volný čas",
      "leisure"
    ]
  },
  {
    "regal": "V1",
    "signatura": "371",
    "popis": "Organizace výchovné a vzdělávací soustavy, Vyučovací metody a postupy",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "školský systém, vzdělávací soustava, didaktika, vyučovací metody, educational system, teaching methods",
    "keywords": [
      "školský systém",
      "vzdělávací soustava",
      "didaktika",
      "vyučovací metody",
      "educational system",
      "teaching methods"
    ]
  },
  {
    "regal": "V1",
    "signatura": "373/378",
    "popis": "Všeobecné vzdělávací školství, Druhy škol",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "školství, typy škol, základní škola, střední škola, education system, schools",
    "keywords": [
      "školství",
      "typy škol",
      "základní škola",
      "střední škola",
      "education system",
      "schools"
    ]
  },
  {
    "regal": "V1",
    "signatura": "378",
    "popis": "Vysoké školy, Univerzity",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "univerzita, vysoká škola, akademické vzdělávání, university, higher education, college",
    "keywords": [
      "univerzita",
      "vysoká škola",
      "akademické vzdělávání",
      "university",
      "higher education",
      "college"
    ]
  },
  {
    "regal": "V1",
    "signatura": "4",
    "popis": "Jazky, Lingvistika, Literatura",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "lingvistika, jazyky, literatura, jazykověda, linguistics, languages, literature, philology",
    "keywords": [
      "lingvistika",
      "jazyky",
      "literatura",
      "jazykověda",
      "linguistics",
      "languages",
      "literature",
      "philology"
    ]
  },
  {
    "regal": "V1",
    "signatura": "41.1",
    "popis": "Angličtina",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "angličtina, anglický jazyk, English, anglická literatura, English language",
    "keywords": [
      "angličtina",
      "anglický jazyk",
      "English",
      "anglická literatura",
      "English language"
    ]
  },
  {
    "regal": "V2",
    "signatura": "41.1",
    "popis": "Němčina",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "němčina, německý jazyk, German, německá literatura, German language, Deutsch",
    "keywords": [
      "němčina",
      "německý jazyk",
      "German",
      "německá literatura",
      "German language",
      "Deutsch"
    ]
  },
  {
    "regal": "V2",
    "signatura": "42",
    "popis": "Románské jazyky",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "románské jazyky, latina, francouzština, španělština, italština, Romance languages, French, Spanish, Italian",
    "keywords": [
      "románské jazyky",
      "latina",
      "francouzština",
      "španělština",
      "italština",
      "Romance languages",
      "French",
      "Spanish",
      "Italian"
    ]
  },
  {
    "regal": "V2",
    "signatura": "43",
    "popis": "Slovanské jazyky",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "slovanské jazyky, ruština, polština, čeština, Slavic languages, Russian, Polish, Czech",
    "keywords": [
      "slovanské jazyky",
      "ruština",
      "polština",
      "čeština",
      "Slavic languages",
      "Russian",
      "Polish",
      "Czech"
    ]
  },
  {
    "regal": "V2",
    "signatura": "45",
    "popis": "Ostatní jazyky",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "ostatní jazyky, exotické jazyky, méně běžné jazyky, other languages, rare languages",
    "keywords": [
      "ostatní jazyky",
      "exotické jazyky",
      "méně běžné jazyky",
      "other languages",
      "rare languages"
    ]
  },
  {
    "regal": "V2",
    "signatura": "54",
    "popis": "Chemie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "chemie, chemistry, organická chemie, anorganická chemie, fyzikální chemie, biochemie",
    "keywords": [
      "chemie",
      "chemistry",
      "organická chemie",
      "anorganická chemie",
      "fyzikální chemie",
      "biochemie"
    ]
  },
  {
    "regal": "V2",
    "signatura": "58",
    "popis": "Botanika, Cytologie, Parazitologie, Mikrobiologie",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "botanika, biologie rostlin, cytologie, buňka, mikrobiologie, parazitologie, botany, microbiology, cell biology",
    "keywords": [
      "botanika",
      "biologie rostlin",
      "cytologie",
      "buňka",
      "mikrobiologie",
      "parazitologie",
      "botany",
      "microbiology",
      "cell biology"
    ]
  },
  {
    "regal": "V2",
    "signatura": "6",
    "popis": "Aplikované vědy, Technika, Zemědělství",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "aplikované vědy, technika, inženýrství, zemědělství, applied sciences, engineering, agriculture, technology",
    "keywords": [
      "aplikované vědy",
      "technika",
      "inženýrství",
      "zemědělství",
      "applied sciences",
      "engineering",
      "agriculture",
      "technology"
    ]
  },
  {
    "regal": "V2",
    "signatura": "62",
    "popis": "Technika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "technika, technologie, inženýrství, engineering, technology, strojírenství",
    "keywords": [
      "technika",
      "technologie",
      "inženýrství",
      "engineering",
      "technology",
      "strojírenství"
    ]
  },
  {
    "regal": "V2",
    "signatura": "621.3",
    "popis": "Elektrotechnika",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "elektrotechnika, elektronika, electrical engineering, electronics, elektřina",
    "keywords": [
      "elektrotechnika",
      "elektronika",
      "electrical engineering",
      "electronics",
      "elektřina"
    ]
  },
  {
    "regal": "V2",
    "signatura": "63",
    "popis": "Zemědělství, Lesnictví, Zemědělská výroba, Využívání přírody",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "zemědělství, lesnictví, agronomie, agriculture, forestry, agronomy, využití přírodních zdrojů",
    "keywords": [
      "zemědělství",
      "lesnictví",
      "agronomie",
      "agriculture",
      "forestry",
      "agronomy",
      "využití přírodních zdrojů"
    ]
  },
  {
    "regal": "V2",
    "signatura": "65",
    "popis": "Řízení a organizace průmyslu, obchodu a spojů (telekomunikace, polygrafie, účetnictví, reklama)",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "signatura",
    "tema": "průmyslový management, obchod, telekomunikace, reklama, marketing, účetnictví, business management, telecommunications, advertising, accounting",
    "keywords": [
      "průmyslový management",
      "obchod",
      "telekomunikace",
      "reklama",
      "marketing",
      "účetnictví",
      "business management",
      "telecommunications",
      "advertising",
      "accounting"
    ]
  },
  {
    "regal": "V2",
    "signatura": "",
    "popis": "Časopis Universitas",
    "popis_novy": "",
    "popis_stary": "",
    "typ": "časopis | sborník",
    "tema": "Universitas, časopis, periodikum, univerzitní časopis, akademický časopis, journal, university journal, academic journal, česky, prestižní",
    "keywords": [
      "Universitas",
      "časopis",
      "periodikum",
      "univerzitní časopis",
      "akademický časopis",
      "journal",
      "university journal",
      "academic journal",
      "česky",
      "prestižní"
    ]
  },
  {
    "regal": "F1",
    "signatura": "52",
    "popis": "Astronomie, Astrofyzika, Kosmický výzkum",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "astronomie, astrofyzika, vesmír, hvězdy, kosmos, kosmický výzkum",
    "keywords": [
      "astronomie",
      "astrofyzika",
      "vesmír",
      "hvězdy",
      "kosmos",
      "kosmický výzkum"
    ]
  },
  {
    "regal": "F1",
    "signatura": "52(03)",
    "popis": "Astronomické a astrofyzikální slovníky a encyklopedie",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "slovník, encyklopedie, astronomie, astrofyzika, reference, terminologie",
    "keywords": [
      "slovník",
      "encyklopedie",
      "astronomie",
      "astrofyzika",
      "reference",
      "terminologie"
    ]
  },
  {
    "regal": "F1",
    "signatura": "52(091)",
    "popis": "Historie astronomie a astrofyziky (včetně biografií a sebraných spisů)",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "historie, astronomie, astrofyzika, biografie, galileo, kepler, koperník",
    "keywords": [
      "historie",
      "astronomie",
      "astrofyzika",
      "biografie",
      "galileo",
      "kepler",
      "koperník"
    ]
  },
  {
    "regal": "F1",
    "signatura": "520",
    "popis": "Astronomické přístroje a metody | Observatoře",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "teleskop, dalekohled, observatoř, pozorování, astronomické přístroje, měření",
    "keywords": [
      "teleskop",
      "dalekohled",
      "observatoř",
      "pozorování",
      "astronomické přístroje",
      "měření"
    ]
  },
  {
    "regal": "F1-F2",
    "signatura": "521",
    "popis": "Teoretická astronomie | Nebeská mechanika | Astrofyzika",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "teoretická astronomie, nebeská mechanika, astrofyzika, gravitace, orbity",
    "keywords": [
      "teoretická astronomie",
      "nebeská mechanika",
      "astrofyzika",
      "gravitace",
      "orbity"
    ]
  },
  {
    "regal": "F2",
    "signatura": "521",
    "popis": "Teoretická astronomie | Nebeská mechanika | Astrofyzika",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "teoretická astronomie, nebeská mechanika, astrofyzika, gravitace, orbity",
    "keywords": [
      "teoretická astronomie",
      "nebeská mechanika",
      "astrofyzika",
      "gravitace",
      "orbity"
    ]
  },
  {
    "regal": "F2",
    "signatura": "523",
    "popis": "Sluneční soustava",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "sluneční soustava, planety, slunce, měsíc, asteroid, kometa",
    "keywords": [
      "sluneční soustava",
      "planety",
      "slunce",
      "měsíc",
      "asteroid",
      "kometa"
    ]
  },
  {
    "regal": "F2",
    "signatura": "523.1",
    "popis": "Měsíc, Systém Země",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "měsíc, země, luna, geologie, tektonika, atmosféra",
    "keywords": [
      "měsíc",
      "země",
      "luna",
      "geologie",
      "tektonika",
      "atmosféra"
    ]
  },
  {
    "regal": "F2",
    "signatura": "523.2",
    "popis": "Planety a jejich satelity, Planetologie",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "planety, planetologie, jupiter, mars, saturn, měsíce, satelity",
    "keywords": [
      "planety",
      "planetologie",
      "jupiter",
      "mars",
      "saturn",
      "měsíce",
      "satelity"
    ]
  },
  {
    "regal": "F2",
    "signatura": "523.3",
    "popis": "Slunce",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "slunce, hvězda, sluneční aktivita, erupce, korona, fotosféra",
    "keywords": [
      "slunce",
      "hvězda",
      "sluneční aktivita",
      "erupce",
      "korona",
      "fotosféra"
    ]
  },
  {
    "regal": "F2",
    "signatura": "524",
    "popis": "Hvězdy, Hvězdné systémy, Vesmír",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "hvězdy, hvězdné systémy, vesmír, galaxie, souhvězdí",
    "keywords": [
      "hvězdy",
      "hvězdné systémy",
      "vesmír",
      "galaxie",
      "souhvězdí"
    ]
  },
  {
    "regal": "F2",
    "signatura": "524.1",
    "popis": "Hvězdy (nitro a atmosféry)",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "hvězdy, hvězdné atmosféry, hvězdné nitro, fúze, nukleosyntéza",
    "keywords": [
      "hvězdy",
      "hvězdné atmosféry",
      "hvězdné nitro",
      "fúze",
      "nukleosyntéza"
    ]
  },
  {
    "regal": "F2",
    "signatura": "524.2",
    "popis": "Hvězdokupy a asociace",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "hvězdokupy, hvězdné asociace, kulové hvězdokupy, otevřené hvězdokupy",
    "keywords": [
      "hvězdokupy",
      "hvězdné asociace",
      "kulové hvězdokupy",
      "otevřené hvězdokupy"
    ]
  },
  {
    "regal": "F2",
    "signatura": "524.3",
    "popis": "Galaxie",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "galaxie, mléčná dráha, spirální galaxie, eliptické galaxie",
    "keywords": [
      "galaxie",
      "mléčná dráha",
      "spirální galaxie",
      "eliptické galaxie"
    ]
  },
  {
    "regal": "F2",
    "signatura": "524.4",
    "popis": "Vnější galaxie, Kvasary",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "galaxie, kvasary, aktivní galaktická jádra, blazary, vnější galaxie",
    "keywords": [
      "galaxie",
      "kvasary",
      "aktivní galaktická jádra",
      "blazary",
      "vnější galaxie"
    ]
  },
  {
    "regal": "F2",
    "signatura": "524.5",
    "popis": "Vesmír, Kosmologie",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "kosmologie, vesmír, velký třesk, černé díry, temná hmota, temná energie, expanze vesmíru",
    "keywords": [
      "kosmologie",
      "vesmír",
      "velký třesk",
      "černé díry",
      "temná hmota",
      "temná energie",
      "expanze vesmíru"
    ]
  },
  {
    "regal": "F2",
    "signatura": "528",
    "popis": "Astronomická geodézie (dokumenty na vyžádání u výpůjčního pultu)",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "geodézie, astronomická geodézie, mapování, souřadnice",
    "keywords": [
      "geodézie",
      "astronomická geodézie",
      "mapování",
      "souřadnice"
    ]
  },
  {
    "regal": "F2",
    "signatura": "53",
    "popis": "Fyzika | Filozofické, kulturní a společenské aspekty | Populární výklady fyziky | Didaktika fyziky",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "fyzika, filozofie fyziky, populární fyzika, výuka fyziky, didaktika",
    "keywords": [
      "fyzika",
      "filozofie fyziky",
      "populární fyzika",
      "výuka fyziky",
      "didaktika"
    ]
  },
  {
    "regal": "F2-F3",
    "signatura": "53(03)",
    "popis": "Fyzikální slovníky, encyklopedie, obecné učebnice pro VŠ, tabulky",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "slovník, encyklopedie, učebnice, fyzikální tabulky, reference, konstanty",
    "keywords": [
      "slovník",
      "encyklopedie",
      "učebnice",
      "fyzikální tabulky",
      "reference",
      "konstanty"
    ]
  },
  {
    "regal": "F3",
    "signatura": "53(03)",
    "popis": "Fyzikální slovníky, encyklopedie, obecné učebnice pro VŠ, tabulky",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "slovník, encyklopedie, učebnice, fyzikální tabulky, reference, konstanty",
    "keywords": [
      "slovník",
      "encyklopedie",
      "učebnice",
      "fyzikální tabulky",
      "reference",
      "konstanty"
    ]
  },
  {
    "regal": "F3",
    "signatura": "53(04)",
    "popis": "Jazykové slovníky",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "jazykový slovník, terminologie, překlad, fyzikální termíny",
    "keywords": [
      "jazykový slovník",
      "terminologie",
      "překlad",
      "fyzikální termíny"
    ]
  },
  {
    "regal": "F3",
    "signatura": "53(07)ZŠ",
    "popis": "Učebnice pro základní školy",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "učebnice, základní škola, vzdělávání, výuka fyziky",
    "keywords": [
      "učebnice",
      "základní škola",
      "vzdělávání",
      "výuka fyziky"
    ]
  },
  {
    "regal": "F3",
    "signatura": "53(07)SŠ",
    "popis": "Učebnice pro střední školy",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "učebnice, střední škola, gymnázium, maturita, výuka fyziky",
    "keywords": [
      "učebnice",
      "střední škola",
      "gymnázium",
      "maturita",
      "výuka fyziky"
    ]
  },
  {
    "regal": "F3-F4",
    "signatura": "53(07)VŠ",
    "popis": "Učebnice pro vysoké školy",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "učebnice, vysoká škola, univerzita, studium fyziky",
    "keywords": [
      "učebnice",
      "vysoká škola",
      "univerzita",
      "studium fyziky"
    ]
  },
  {
    "regal": "F4",
    "signatura": "53(07)VŠ",
    "popis": "Učebnice pro vysoké školy",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "učebnice, vysoká škola, univerzita, studium fyziky",
    "keywords": [
      "učebnice",
      "vysoká škola",
      "univerzita",
      "studium fyziky"
    ]
  },
  {
    "regal": "F4",
    "signatura": "53(091)",
    "popis": "Historie fyziky a astronomie (včetně biografií a sebraných spisů)",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "historie fyziky, biografie, newton, einstein, galileo, feynman",
    "keywords": [
      "historie fyziky",
      "biografie",
      "newton",
      "einstein",
      "galileo",
      "feynman"
    ]
  },
  {
    "regal": "F4",
    "signatura": "53.01",
    "popis": "Vybrané klíčové práce ve fyzice, \"\"Klasický fond\"\"",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "klasické práce, historické texty, principia, optika, relativita",
    "keywords": [
      "klasické práce",
      "historické texty",
      "principia",
      "optika",
      "relativita"
    ]
  },
  {
    "regal": "F4",
    "signatura": "53.02",
    "popis": "Biofyzika | Lékařská fyzika",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "biofyzika, lékařská fyzika, radiologie, zobrazování, medicínská fyzika",
    "keywords": [
      "biofyzika",
      "lékařská fyzika",
      "radiologie",
      "zobrazování",
      "medicínská fyzika"
    ]
  },
  {
    "regal": "F4",
    "signatura": "53.03",
    "popis": "Fyzika – chemie",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "fyzikální chemie, chemická fyzika, molekuly, reakce",
    "keywords": [
      "fyzikální chemie",
      "chemická fyzika",
      "molekuly",
      "reakce"
    ]
  },
  {
    "regal": "F4",
    "signatura": "53.04",
    "popis": "Geofyzika | Fyzika atmosféry (meteorologie) | Matematické modely fyzikálních procesů",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "geofyzika, meteorologie, atmosféra, počasí, klimatologie, matematické modely",
    "keywords": [
      "geofyzika",
      "meteorologie",
      "atmosféra",
      "počasí",
      "klimatologie",
      "matematické modely"
    ]
  },
  {
    "regal": "F4-F5",
    "signatura": "53.05",
    "popis": "Matematické metody fyziky | Teorie grup | Diferenciální geometrie a topologie ve fyzice | Numerické metody ve fyzice | Teorie Chaosu | Nelineární dynamika",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "matematika, diferenciální rovnice, teorie grup, topologie, chaos, numerické metody",
    "keywords": [
      "matematika",
      "diferenciální rovnice",
      "teorie grup",
      "topologie",
      "chaos",
      "numerické metody"
    ]
  },
  {
    "regal": "F5",
    "signatura": "53.05",
    "popis": "Matematické metody fyziky | Teorie grup | Diferenciální geometrie a topologie ve fyzice | Numerické metody ve fyzice | Teorie Chaosu | Nelineární dynamika",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "matematika, diferenciální rovnice, teorie grup, topologie, chaos, numerické metody",
    "keywords": [
      "matematika",
      "diferenciální rovnice",
      "teorie grup",
      "topologie",
      "chaos",
      "numerické metody"
    ]
  },
  {
    "regal": "F5",
    "signatura": "53.08",
    "popis": "Teorie měření a zpracování dat",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "měření, zpracování dat, statistika, chyby měření, analýza dat",
    "keywords": [
      "měření",
      "zpracování dat",
      "statistika",
      "chyby měření",
      "analýza dat"
    ]
  },
  {
    "regal": "F5",
    "signatura": "530.1",
    "popis": "Moderní fyzikální teorie",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "moderní fyzika, teoretická fyzika, základní teorie",
    "keywords": [
      "moderní fyzika",
      "teoretická fyzika",
      "základní teorie"
    ]
  },
  {
    "regal": "F5",
    "signatura": "530.11",
    "popis": "Teorie relativity, Gravitace, Černé díry",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "relativita, einstein, speciální relativita, obecná relativita, černé díry, gravitace",
    "keywords": [
      "relativita",
      "einstein",
      "speciální relativita",
      "obecná relativita",
      "černé díry",
      "gravitace"
    ]
  },
  {
    "regal": "F5",
    "signatura": "530.12",
    "popis": "Kvantová mechanika, Kvantová elektrodynamika, Kvantová teorie pole",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "kvantová mechanika, kvantová fyzika, kvantová elektrodynamika, kvantová teorie pole, QED, QFT",
    "keywords": [
      "kvantová mechanika",
      "kvantová fyzika",
      "kvantová elektrodynamika",
      "kvantová teorie pole",
      "QED",
      "QFT"
    ]
  },
  {
    "regal": "F6",
    "signatura": "530.12",
    "popis": "Kvantová mechanika, Kvantová elektrodynamika, Kvantová teorie pole",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "kvantová mechanika, kvantová fyzika, kvantová elektrodynamika, kvantová teorie pole, QED, QFT",
    "keywords": [
      "kvantová mechanika",
      "kvantová fyzika",
      "kvantová elektrodynamika",
      "kvantová teorie pole",
      "QED",
      "QFT"
    ]
  },
  {
    "regal": "F6",
    "signatura": "530.13",
    "popis": "Fyzika vysokých energií, Částicová fyzika",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "částicová fyzika, vysoké energie, elementární částice, standardní model, higgs",
    "keywords": [
      "částicová fyzika",
      "vysoké energie",
      "elementární částice",
      "standardní model",
      "higgs"
    ]
  },
  {
    "regal": "F6",
    "signatura": "531",
    "popis": "Mechanika | Mechanika tekutin | Mechanika plynů | Mechanické kmity | akustika",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "mechanika, pohyb, síla, newton, tekutiny, plyny, akustika",
    "keywords": [
      "mechanika",
      "pohyb",
      "síla",
      "newton",
      "tekutiny",
      "plyny",
      "akustika"
    ]
  },
  {
    "regal": "F6",
    "signatura": "531.1",
    "popis": "Obecná mechanika, Statika, Kinematika, Dynamika, Teoretická mechanika",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "mechanika, statika, kinematika, dynamika, pohyb, síla, newtonovy zákony",
    "keywords": [
      "mechanika",
      "statika",
      "kinematika",
      "dynamika",
      "pohyb",
      "síla",
      "newtonovy zákony"
    ]
  },
  {
    "regal": "F6",
    "signatura": "531.2",
    "popis": "Mechanika pevných a tuhých těles",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "tuhá tělesa, rotace, moment hybnosti, setrvačnost",
    "keywords": [
      "tuhá tělesa",
      "rotace",
      "moment hybnosti",
      "setrvačnost"
    ]
  },
  {
    "regal": "F6",
    "signatura": "531.3",
    "popis": "Pružnost, pevnost, Deformace, Mechanika pružných pevných těles",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "pružnost, deformace, napětí, hookův zákon, pevnost",
    "keywords": [
      "pružnost",
      "deformace",
      "napětí",
      "hookův zákon",
      "pevnost"
    ]
  },
  {
    "regal": "F6",
    "signatura": "531.4",
    "popis": "Aerodynamika, Hydrostatika, Hydrodynamika (laminární turbulentní proudění)",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "aerodynamika, hydrodynamika, proudění, turbulence, bernoulliova rovnice",
    "keywords": [
      "aerodynamika",
      "hydrodynamika",
      "proudění",
      "turbulence",
      "bernoulliova rovnice"
    ]
  },
  {
    "regal": "F6",
    "signatura": "531.5",
    "popis": "Povrchové napětí, Osmóza, Difúze, Roztoky",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "povrchové napětí, osmóza, difúze, roztoky, kapilarita",
    "keywords": [
      "povrchové napětí",
      "osmóza",
      "difúze",
      "roztoky",
      "kapilarita"
    ]
  },
  {
    "regal": "F6",
    "signatura": "531.6",
    "popis": "Machanika plynů, Kinetická teorie plynů",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "mechanika plynů, kinetická teorie, ideální plyn, maxwell",
    "keywords": [
      "mechanika plynů",
      "kinetická teorie",
      "ideální plyn",
      "maxwell"
    ]
  },
  {
    "regal": "F6",
    "signatura": "531.7",
    "popis": "Kmity a vlny, Akustika, Ultrazvuk",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "kmity, vlny, oscilace, akustika, zvuk, ultrazvuk, resonance",
    "keywords": [
      "kmity",
      "vlny",
      "oscilace",
      "akustika",
      "zvuk",
      "ultrazvuk",
      "resonance"
    ]
  },
  {
    "regal": "F7",
    "signatura": "533",
    "popis": "Fyzika plazmatu",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "plazma, ionizovaný plyn, čtvrté skupenství",
    "keywords": [
      "plazma",
      "ionizovaný plyn",
      "čtvrté skupenství"
    ]
  },
  {
    "regal": "F7",
    "signatura": "533.91",
    "popis": "Elementární procesy v plazmatu, Statistický popis plazmatu",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "plazma, ionizace, rekombinace, srážky",
    "keywords": [
      "plazma",
      "ionizace",
      "rekombinace",
      "srážky"
    ]
  },
  {
    "regal": "F7",
    "signatura": "533.92",
    "popis": "Plazmochomie",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "plazma, plazmochemie, chemické reakce v plazmatu",
    "keywords": [
      "plazma",
      "plazmochemie",
      "chemické reakce v plazmatu"
    ]
  },
  {
    "regal": "F7",
    "signatura": "533.93",
    "popis": "Termojaderné plazma",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "plazma, termojaderná fúze, tokamak, ITER, fúze",
    "keywords": [
      "plazma",
      "termojaderná fúze",
      "tokamak",
      "ITER",
      "fúze"
    ]
  },
  {
    "regal": "F7",
    "signatura": "533.94",
    "popis": "Aplikace plazmatu",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "plazma, aplikace, plazmové technologie, povrchové úpravy",
    "keywords": [
      "plazma",
      "aplikace",
      "plazmové technologie",
      "povrchové úpravy"
    ]
  },
  {
    "regal": "F7",
    "signatura": "533.95",
    "popis": "Vakuová technika",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "vakuum, vývěva, tlak, vakuová technika",
    "keywords": [
      "vakuum",
      "vývěva",
      "tlak",
      "vakuová technika"
    ]
  },
  {
    "regal": "F7",
    "signatura": "535",
    "popis": "Optika",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "optika, světlo, čočky, zrcadla, refrakce, difrakce",
    "keywords": [
      "optika",
      "světlo",
      "čočky",
      "zrcadla",
      "refrakce",
      "difrakce"
    ]
  },
  {
    "regal": "F7",
    "signatura": "535.1",
    "popis": "Elektromagnetická teorie světla | Geometrická optika, Difrakce, Interference, Polarizace",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "optika, světlo, difrakce, interference, polarizace, geometrická optika",
    "keywords": [
      "optika",
      "světlo",
      "difrakce",
      "interference",
      "polarizace",
      "geometrická optika"
    ]
  },
  {
    "regal": "F7",
    "signatura": "535.2",
    "popis": "Aplikovaná optika, Optické metody měření, Spektroskopie v IR, IV, Roentgen, Ramanova spektroskopie",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "optika, spektroskopie, infračervená spektroskopie, UV spektroskopie, rentgen, ramanova spektroskopie",
    "keywords": [
      "optika",
      "spektroskopie",
      "infračervená spektroskopie",
      "UV spektroskopie",
      "rentgen",
      "ramanova spektroskopie"
    ]
  },
  {
    "regal": "F7",
    "signatura": "536",
    "popis": "Termodynamika a statistická fyzika",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "termodynamika, teplo, teplota, entropie, statistická fyzika",
    "keywords": [
      "termodynamika",
      "teplo",
      "teplota",
      "entropie",
      "statistická fyzika"
    ]
  },
  {
    "regal": "F7",
    "signatura": "536.1",
    "popis": "Termodynamika",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "termodynamika, teplo, teplota, termodynamické zákony, entropie",
    "keywords": [
      "termodynamika",
      "teplo",
      "teplota",
      "termodynamické zákony",
      "entropie"
    ]
  },
  {
    "regal": "F8",
    "signatura": "536.2",
    "popis": "Statistická fyzika",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "statistická fyzika, entropie, boltzmann, statistická mechanika",
    "keywords": [
      "statistická fyzika",
      "entropie",
      "boltzmann",
      "statistická mechanika"
    ]
  },
  {
    "regal": "F8",
    "signatura": "536.2",
    "popis": "Nízké teploty",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "nízké teploty, kryogenika, supratekutost, heliová fyzika",
    "keywords": [
      "nízké teploty",
      "kryogenika",
      "supratekutost",
      "heliová fyzika"
    ]
  },
  {
    "regal": "F8",
    "signatura": "537",
    "popis": "Elektřina a magnetismus",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "elektřina, magnetismus, elektrické pole, magnetické pole, maxwell",
    "keywords": [
      "elektřina",
      "magnetismus",
      "elektrické pole",
      "magnetické pole",
      "maxwell"
    ]
  },
  {
    "regal": "F8",
    "signatura": "537.1",
    "popis": "Teorie elektromagnetického pole, Elektřina a magnetismus obecně",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "elektromagnetismus, maxwellovy rovnice, elektrické pole, magnetické pole",
    "keywords": [
      "elektromagnetismus",
      "maxwellovy rovnice",
      "elektrické pole",
      "magnetické pole"
    ]
  },
  {
    "regal": "F8",
    "signatura": "537.2",
    "popis": "Elektronika, Obvody, Kvantová elektronika",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "elektronika, obvody, tranzistory, diody, kvantová elektronika",
    "keywords": [
      "elektronika",
      "obvody",
      "tranzistory",
      "diody",
      "kvantová elektronika"
    ]
  },
  {
    "regal": "F8",
    "signatura": "537.3",
    "popis": "Mikrovlná technika, radiofyzika",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "mikrovlny, radiofyzika, mikrovlnná technika, vlnovody",
    "keywords": [
      "mikrovlny",
      "radiofyzika",
      "mikrovlnná technika",
      "vlnovody"
    ]
  },
  {
    "regal": "F8",
    "signatura": "537.4",
    "popis": "Elektronické výboje",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "výboje, plazma, elektrické výboje",
    "keywords": [
      "výboje",
      "plazma",
      "elektrické výboje"
    ]
  },
  {
    "regal": "F8",
    "signatura": "537.5",
    "popis": "Elektronová optika, Elektronová mikroskopie",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "elektronová optika, elektronový mikroskop, SEM, TEM",
    "keywords": [
      "elektronová optika",
      "elektronový mikroskop",
      "SEM",
      "TEM"
    ]
  },
  {
    "regal": "F8",
    "signatura": "538.9",
    "popis": "Fyzika kondenzovaných látek",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "kondenzované látky, pevné látky, fyzika pevných látek",
    "keywords": [
      "kondenzované látky",
      "pevné látky",
      "fyzika pevných látek"
    ]
  },
  {
    "regal": "F8",
    "signatura": "538.91",
    "popis": "Teorie kondenzovaných látek, \"\"Many body problems\"\", Kvazičástice",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "kondenzované látky, many-body, kvazičástice, fonony, magnony",
    "keywords": [
      "kondenzované látky",
      "many-body",
      "kvazičástice",
      "fonony",
      "magnony"
    ]
  },
  {
    "regal": "F9",
    "signatura": "538.92",
    "popis": "Struktura, krystalografie, Mechanické vlastnosti, Tepelné vlastnosti",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "krystalografie, krystaly, struktura, mřížka, mechanické vlastnosti",
    "keywords": [
      "krystalografie",
      "krystaly",
      "struktura",
      "mřížka",
      "mechanické vlastnosti"
    ]
  },
  {
    "regal": "F9",
    "signatura": "538.93",
    "popis": "Elektronová struktura, Elektrické a magnetické vlastnosti",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "elektronová struktura, pásy, elektrické vlastnosti, magnetické vlastnosti",
    "keywords": [
      "elektronová struktura",
      "pásy",
      "elektrické vlastnosti",
      "magnetické vlastnosti"
    ]
  },
  {
    "regal": "F9",
    "signatura": "538.94",
    "popis": "Optické vlastnosti",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "optické vlastnosti, absorpce, luminiscence, fotoluminiscence",
    "keywords": [
      "optické vlastnosti",
      "absorpce",
      "luminiscence",
      "fotoluminiscence"
    ]
  },
  {
    "regal": "F9",
    "signatura": "538.95",
    "popis": "Polovodiče, nečistoty v polovodičích, Nízkorozměrné stuktury v polovodičích",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "polovodiče, křemík, germánium, dopování, heterostruktury, kvantové jámy",
    "keywords": [
      "polovodiče",
      "křemík",
      "germánium",
      "dopování",
      "heterostruktury",
      "kvantové jámy"
    ]
  },
  {
    "regal": "F9",
    "signatura": "538.96",
    "popis": "Supravodivost",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "supravodivost, supravodiče, BCS teorie, vysokoteplotní supravodiče",
    "keywords": [
      "supravodivost",
      "supravodiče",
      "BCS teorie",
      "vysokoteplotní supravodiče"
    ]
  },
  {
    "regal": "F9",
    "signatura": "538.97",
    "popis": "Fyzika tenkých vrstev",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "tenké vrstvy, naprašování, epitaxe, povrchy",
    "keywords": [
      "tenké vrstvy",
      "naprašování",
      "epitaxe",
      "povrchy"
    ]
  },
  {
    "regal": "F9",
    "signatura": "538.98",
    "popis": "Fyzika materiálů, Fyzikální vlastnosti materiálů",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "materiály, materiálová fyzika, vlastnosti materiálů",
    "keywords": [
      "materiály",
      "materiálová fyzika",
      "vlastnosti materiálů"
    ]
  },
  {
    "regal": "F9",
    "signatura": "539.1",
    "popis": "Jaderná, atomová a molekulová fyzika",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "jaderná fyzika, atomová fyzika, molekulová fyzika, jádro, atom",
    "keywords": [
      "jaderná fyzika",
      "atomová fyzika",
      "molekulová fyzika",
      "jádro",
      "atom"
    ]
  },
  {
    "regal": "F9",
    "signatura": "539.11",
    "popis": "Atomová a molekulová fyzika a spektroskopie",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "atomová fyzika, molekuly, spektroskopie, atomové spektrum",
    "keywords": [
      "atomová fyzika",
      "molekuly",
      "spektroskopie",
      "atomové spektrum"
    ]
  },
  {
    "regal": "F9",
    "signatura": "539.12",
    "popis": "Jaderná fyzika, Jaderné reakce, Jaderná energetika, Radioaktivita",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "jaderná fyzika, radioaktivita, jádro, rozpad, štěpení, fúze, jaderná energie",
    "keywords": [
      "jaderná fyzika",
      "radioaktivita",
      "jádro",
      "rozpad",
      "štěpení",
      "fúze",
      "jaderná energie"
    ]
  },
  {
    "regal": "F9",
    "signatura": "539.13",
    "popis": "Experimentální metody v částicové fyzice",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "signatura",
    "tema": "částicová fyzika, urychlovač, detektor, CERN, experimentální metody",
    "keywords": [
      "částicová fyzika",
      "urychlovač",
      "detektor",
      "CERN",
      "experimentální metody"
    ]
  },
  {
    "regal": "F10",
    "signatura": "",
    "popis": "Acta Universitatis Plackianae",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, periodikum, vědecký časopis",
    "keywords": [
      "časopis",
      "periodikum",
      "vědecký časopis"
    ]
  },
  {
    "regal": "F10",
    "signatura": "",
    "popis": "American Journal of Physics",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, americký časopis, výuka fyziky",
    "keywords": [
      "časopis",
      "fyzika",
      "americký časopis",
      "výuka fyziky"
    ]
  },
  {
    "regal": "F10",
    "signatura": "",
    "popis": "Annalen der Physik",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, německý časopis, historický časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "německý časopis",
      "historický časopis"
    ]
  },
  {
    "regal": "F10",
    "signatura": "",
    "popis": "Annalen der Physik und Chemie",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, chemie, německý časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "chemie",
      "německý časopis"
    ]
  },
  {
    "regal": "F10",
    "signatura": "",
    "popis": "Annual Report",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "výroční zpráva, report, sborník",
    "keywords": [
      "výroční zpráva",
      "report",
      "sborník"
    ]
  },
  {
    "regal": "F10",
    "signatura": "",
    "popis": "Applied Physics Express",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, aplikovaná fyzika, express",
    "keywords": [
      "časopis",
      "aplikovaná fyzika",
      "express"
    ]
  },
  {
    "regal": "F11",
    "signatura": "",
    "popis": "Archives de Sciences",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, archiv, věda",
    "keywords": [
      "časopis",
      "archiv",
      "věda"
    ]
  },
  {
    "regal": "F11",
    "signatura": "",
    "popis": "Astropis",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, astronomie, populární astronomie",
    "keywords": [
      "časopis",
      "astronomie",
      "populární astronomie"
    ]
  },
  {
    "regal": "F11",
    "signatura": "",
    "popis": "BAV Mitteilungen",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, astronomie, BAV, proměnné hvězdy",
    "keywords": [
      "časopis",
      "astronomie",
      "BAV",
      "proměnné hvězdy"
    ]
  },
  {
    "regal": "F11",
    "signatura": "",
    "popis": "BAV Rundbrief",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, astronomie, BAV, newsletter",
    "keywords": [
      "časopis",
      "astronomie",
      "BAV",
      "newsletter"
    ]
  },
  {
    "regal": "F11",
    "signatura": "",
    "popis": "Beiblätter zu den Annalen der Physik",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, příloha, německý časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "příloha",
      "německý časopis"
    ]
  },
  {
    "regal": "F11",
    "signatura": "",
    "popis": "Canadian Journal of Physics",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, kanadský časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "kanadský časopis"
    ]
  },
  {
    "regal": "F11",
    "signatura": "",
    "popis": "Computers in Physics",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, počítače, výpočetní fyzika, simulace",
    "keywords": [
      "časopis",
      "počítače",
      "výpočetní fyzika",
      "simulace"
    ]
  },
  {
    "regal": "F11",
    "signatura": "",
    "popis": "Computing in Science and Engineering",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, výpočty, věda, inženýrství",
    "keywords": [
      "časopis",
      "výpočty",
      "věda",
      "inženýrství"
    ]
  },
  {
    "regal": "F11",
    "signatura": "",
    "popis": "Contemporary Physics",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, současná fyzika, moderní fyzika",
    "keywords": [
      "časopis",
      "současná fyzika",
      "moderní fyzika"
    ]
  },
  {
    "regal": "F11",
    "signatura": "",
    "popis": "Current Opinion in Solid State & Materials Science",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, pevné látky, materiálová věda",
    "keywords": [
      "časopis",
      "pevné látky",
      "materiálová věda"
    ]
  },
  {
    "regal": "F11",
    "signatura": "",
    "popis": "Czechoslovak Journal of Physics",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, československý časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "československý časopis"
    ]
  },
  {
    "regal": "F11",
    "signatura": "",
    "popis": "Československý časopis pro fyziku",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, český časopis, československý časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "český časopis",
      "československý časopis"
    ]
  },
  {
    "regal": "F11",
    "signatura": "",
    "popis": "Daedalus",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, věda, interdisciplinární",
    "keywords": [
      "časopis",
      "věda",
      "interdisciplinární"
    ]
  },
  {
    "regal": "F11",
    "signatura": "",
    "popis": "Diamond and Related Materials",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, diamant, materiály, uhlík",
    "keywords": [
      "časopis",
      "diamant",
      "materiály",
      "uhlík"
    ]
  },
  {
    "regal": "F11",
    "signatura": "",
    "popis": "Diamond Films and Technology",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, diamantové vrstvy, tenké vrstvy",
    "keywords": [
      "časopis",
      "diamantové vrstvy",
      "tenké vrstvy"
    ]
  },
  {
    "regal": "F11",
    "signatura": "",
    "popis": "European Journal of Physics",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, evropský časopis, výuka fyziky",
    "keywords": [
      "časopis",
      "fyzika",
      "evropský časopis",
      "výuka fyziky"
    ]
  },
  {
    "regal": "F11",
    "signatura": "",
    "popis": "Europhysics Letters",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, dopisy, evropský časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "dopisy",
      "evropský časopis"
    ]
  },
  {
    "regal": "F11",
    "signatura": "",
    "popis": "Europhysics News",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, zprávy, evropský časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "zprávy",
      "evropský časopis"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "Fizika A",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, chorvatský časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "chorvatský časopis"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "Fizika B",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, chorvatský časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "chorvatský časopis"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "Fizika i technika poluprovodnikov",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, polovodiče, ruský časopis",
    "keywords": [
      "časopis",
      "polovodiče",
      "ruský časopis"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "Fizika plazmy",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, plazma, ruský časopis",
    "keywords": [
      "časopis",
      "plazma",
      "ruský časopis"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "Folia",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, sborník",
    "keywords": [
      "časopis",
      "sborník"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "General Relativity and Gravitation",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, relativita, gravitace",
    "keywords": [
      "časopis",
      "relativita",
      "gravitace"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "High Temperature Material Processes",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, vysoké teploty, materiálové procesy",
    "keywords": [
      "časopis",
      "vysoké teploty",
      "materiálové procesy"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "IEEE Transactions on Plasma",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, plazma, IEEE, transakce",
    "keywords": [
      "časopis",
      "plazma",
      "IEEE",
      "transakce"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "Izvestija vysšich učebnych zavedenij",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, ruský časopis, vysoké školy",
    "keywords": [
      "časopis",
      "ruský časopis",
      "vysoké školy"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "Japanese Journal of applied Physics I.",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, aplikovaná fyzika, japonský časopis",
    "keywords": [
      "časopis",
      "aplikovaná fyzika",
      "japonský časopis"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "Japanese Journal of applied Physics II.",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, aplikovaná fyzika, japonský časopis",
    "keywords": [
      "časopis",
      "aplikovaná fyzika",
      "japonský časopis"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "Journal of Applied Physics",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, aplikovaná fyzika",
    "keywords": [
      "časopis",
      "aplikovaná fyzika"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "Journal of Physics D",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, aplikovaná fyzika, plazma",
    "keywords": [
      "časopis",
      "aplikovaná fyzika",
      "plazma"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "Kozmos",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, astronomie, vesmír, slovenský časopis",
    "keywords": [
      "časopis",
      "astronomie",
      "vesmír",
      "slovenský časopis"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "Lithuanian Journal of Physics",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, litevský časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "litevský časopis"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "Matematika, fyzika, informatika",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, matematika, fyzika, informatika, český časopis",
    "keywords": [
      "časopis",
      "matematika",
      "fyzika",
      "informatika",
      "český časopis"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "Materials Today",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, materiály, materiálová věda",
    "keywords": [
      "časopis",
      "materiály",
      "materiálová věda"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "The Messenger",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, astronomie, ESO",
    "keywords": [
      "časopis",
      "astronomie",
      "ESO"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "Nano Today",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, nanotechnologie, nanověda",
    "keywords": [
      "časopis",
      "nanotechnologie",
      "nanověda"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "New Diamond and Frontier Carbon Technology",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, diamant, uhlík, nanotechnologie",
    "keywords": [
      "časopis",
      "diamant",
      "uhlík",
      "nanotechnologie"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "Optica Acta",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, optika",
    "keywords": [
      "časopis",
      "optika"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "Optik",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, optika, německý časopis",
    "keywords": [
      "časopis",
      "optika",
      "německý časopis"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "PC Magazine",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, počítače, PC",
    "keywords": [
      "časopis",
      "počítače",
      "PC"
    ]
  },
  {
    "regal": "F12",
    "signatura": "",
    "popis": "Physica. A, Statistical Mechanics and Its Applications",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, statistická mechanika, fyzika",
    "keywords": [
      "časopis",
      "statistická mechanika",
      "fyzika"
    ]
  },
  {
    "regal": "F13",
    "signatura": "",
    "popis": "Physical Review",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, Physical Review, престižní časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "Physical Review",
      "престižní časopis"
    ]
  },
  {
    "regal": "F13",
    "signatura": "",
    "popis": "Physical Review A",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, atomová fyzika, optika",
    "keywords": [
      "časopis",
      "fyzika",
      "atomová fyzika",
      "optika"
    ]
  },
  {
    "regal": "F13",
    "signatura": "",
    "popis": "Physical Review B",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, kondenzované látky, materiály",
    "keywords": [
      "časopis",
      "fyzika",
      "kondenzované látky",
      "materiály"
    ]
  },
  {
    "regal": "F14",
    "signatura": "",
    "popis": "Physical Review B (pokračování)",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, kondenzované látky, materiály",
    "keywords": [
      "časopis",
      "fyzika",
      "kondenzované látky",
      "materiály"
    ]
  },
  {
    "regal": "F15",
    "signatura": "",
    "popis": "Physical Review B (pokračování)",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, kondenzované látky, materiály",
    "keywords": [
      "časopis",
      "fyzika",
      "kondenzované látky",
      "materiály"
    ]
  },
  {
    "regal": "F15",
    "signatura": "",
    "popis": "Physical Review C",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, jaderná fyzika",
    "keywords": [
      "časopis",
      "fyzika",
      "jaderná fyzika"
    ]
  },
  {
    "regal": "F15",
    "signatura": "",
    "popis": "Physical Review D",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, částicová fyzika, kosmologie",
    "keywords": [
      "časopis",
      "fyzika",
      "částicová fyzika",
      "kosmologie"
    ]
  },
  {
    "regal": "F15",
    "signatura": "",
    "popis": "Physical Review Letters",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, dopisy, prestižní časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "dopisy",
      "prestižní časopis"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Physical Review Letters",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, dopisy, prestižní časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "dopisy",
      "prestižní časopis"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Physics Today",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, aktuální fyzika, populární fyzika",
    "keywords": [
      "časopis",
      "fyzika",
      "aktuální fyzika",
      "populární fyzika"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Physics World",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, populární fyzika",
    "keywords": [
      "časopis",
      "fyzika",
      "populární fyzika"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Plasma Chemistry and Plasma Proccesing",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, plazma, plazmochemie",
    "keywords": [
      "časopis",
      "plazma",
      "plazmochemie"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Plasma Proces and Polymers",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, plazma, polymery",
    "keywords": [
      "časopis",
      "plazma",
      "polymery"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Plasma Sources Science and Technology",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, plazma, zdroje plazmatu",
    "keywords": [
      "časopis",
      "plazma",
      "zdroje plazmatu"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Physics and Polymers",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, polymery",
    "keywords": [
      "časopis",
      "fyzika",
      "polymery"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Plasma Polymers and Related Materials",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, plazma, polymery, materiály",
    "keywords": [
      "časopis",
      "plazma",
      "polymery",
      "materiály"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Pokroky matematiky, fyziky a astronomie",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, matematika, fyzika, astronomie, český časopis, PMFA",
    "keywords": [
      "časopis",
      "matematika",
      "fyzika",
      "astronomie",
      "český časopis",
      "PMFA"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Proceedings of the Indian National Science Academy",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, sborník, indický časopis, vědecká akademie",
    "keywords": [
      "časopis",
      "sborník",
      "indický časopis",
      "vědecká akademie"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Pyramída",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, populární věda, český časopis",
    "keywords": [
      "časopis",
      "populární věda",
      "český časopis"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Reviews of Modern Physics",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, přehledy, review, prestižní časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "přehledy",
      "review",
      "prestižní časopis"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Romanian Astronomical Journal",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, astronomie, rumunský časopis",
    "keywords": [
      "časopis",
      "astronomie",
      "rumunský časopis"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Romanian Journal of Physics",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, rumunský časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "rumunský časopis"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Romain Reports in Physics",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, rumunský časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "rumunský časopis"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Scientific American",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, populární věda, americký časopis",
    "keywords": [
      "časopis",
      "populární věda",
      "americký časopis"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Scientific American | české vydání",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, populární věda, české vydání, Vesmír",
    "keywords": [
      "časopis",
      "populární věda",
      "české vydání",
      "Vesmír"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Scripta - Physics",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika",
    "keywords": [
      "časopis",
      "fyzika"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Siam Review",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, aplikovaná matematika, SIAM",
    "keywords": [
      "časopis",
      "aplikovaná matematika",
      "SIAM"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Školská fyzika",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, výuka fyziky, český časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "výuka fyziky",
      "český časopis"
    ]
  },
  {
    "regal": "F16",
    "signatura": "",
    "popis": "Uspechi fizičeskich nauk",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, ruský časopis, přehledy",
    "keywords": [
      "časopis",
      "fyzika",
      "ruský časopis",
      "přehledy"
    ]
  },
  {
    "regal": "F17",
    "signatura": "",
    "popis": "Uspechi fizičeskich nauk (pokračování)",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, ruský časopis, přehledy",
    "keywords": [
      "časopis",
      "fyzika",
      "ruský časopis",
      "přehledy"
    ]
  },
  {
    "regal": "F17",
    "signatura": "",
    "popis": "Veletrh nápadů učitelů fyziky",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, výuka fyziky, didaktika, český časopis",
    "keywords": [
      "časopis",
      "výuka fyziky",
      "didaktika",
      "český časopis"
    ]
  },
  {
    "regal": "F17",
    "signatura": "",
    "popis": "Vesmír",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, populární věda, český časopis, astronomie, přírodověda",
    "keywords": [
      "časopis",
      "populární věda",
      "český časopis",
      "astronomie",
      "přírodověda"
    ]
  },
  {
    "regal": "F17",
    "signatura": "",
    "popis": "Vestnik Moskovskogo universiteta",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, ruský časopis, moskevská univerzita",
    "keywords": [
      "časopis",
      "ruský časopis",
      "moskevská univerzita"
    ]
  },
  {
    "regal": "F17",
    "signatura": "",
    "popis": "Visnik. Astronomija",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, astronomie, ukrajinský časopis",
    "keywords": [
      "časopis",
      "astronomie",
      "ukrajinský časopis"
    ]
  },
  {
    "regal": "F17",
    "signatura": "",
    "popis": "WDS'15 Proceedings of Contributed Papers - Physics",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "sborník, konference, fyzika, WDS",
    "keywords": [
      "sborník",
      "konference",
      "fyzika",
      "WDS"
    ]
  },
  {
    "regal": "F17",
    "signatura": "",
    "popis": "Zeitschrift für angewandte Physik",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, aplikovaná fyzika, německý časopis",
    "keywords": [
      "časopis",
      "aplikovaná fyzika",
      "německý časopis"
    ]
  },
  {
    "regal": "F17",
    "signatura": "",
    "popis": "Zeitschrift für Physik",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, německý časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "německý časopis"
    ]
  },
  {
    "regal": "F17",
    "signatura": "",
    "popis": "Zeitschrift für Physik A",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, atomová fyzika, německý časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "atomová fyzika",
      "německý časopis"
    ]
  },
  {
    "regal": "F17",
    "signatura": "",
    "popis": "Zeitschrift für Physik B",
    "Sloupec1": "",
    "popis_1": "",
    "typ": "časopis | sborník",
    "tema": "časopis, fyzika, kondenzované látky, německý časopis",
    "keywords": [
      "časopis",
      "fyzika",
      "kondenzované látky",
      "německý časopis"
    ]
  }
];

// Mapa regálů a jejich sousedů
const regalMap = {
  "12": {
    "area": "Neznámá oblast",
    "neighbors": [],
    "patro": "Neznámé",
    "studovna": "Neznámá studovna",
    "color": "#666666"
  },
  "17": {
    "area": "Neznámá oblast",
    "neighbors": [
      "18"
    ],
    "patro": "Neznámé",
    "studovna": "Neznámá studovna",
    "color": "#666666"
  },
  "18": {
    "area": "Neznámá oblast",
    "neighbors": [
      "17"
    ],
    "patro": "Neznámé",
    "studovna": "Neznámá studovna",
    "color": "#666666"
  },
  "4": {
    "area": "Neznámá oblast",
    "neighbors": [],
    "patro": "Neznámé",
    "studovna": "Neznámá studovna",
    "color": "#666666"
  },
  "A1": {
    "area": "Antropologie",
    "neighbors": [
      "A2",
      "A3"
    ],
    "patro": "1. NP - mezipatro",
    "studovna": "Studovna Antropologie",
    "color": "#00ccff"
  },
  "A2": {
    "area": "Antropologie",
    "neighbors": [
      "A1",
      "A3",
      "A4"
    ],
    "patro": "1. NP - mezipatro",
    "studovna": "Studovna Antropologie",
    "color": "#00ccff"
  },
  "A3": {
    "area": "Antropologie",
    "neighbors": [
      "A1",
      "A2",
      "A4",
      "A5"
    ],
    "patro": "1. NP - mezipatro",
    "studovna": "Studovna Antropologie",
    "color": "#00ccff"
  },
  "A4": {
    "area": "Antropologie",
    "neighbors": [
      "A2",
      "A3",
      "A5",
      "A6"
    ],
    "patro": "1. NP - mezipatro",
    "studovna": "Studovna Antropologie",
    "color": "#00ccff"
  },
  "A5": {
    "area": "Antropologie",
    "neighbors": [
      "A3",
      "A4",
      "A6",
      "A7"
    ],
    "patro": "1. NP - mezipatro",
    "studovna": "Studovna Antropologie",
    "color": "#00ccff"
  },
  "A6": {
    "area": "Antropologie",
    "neighbors": [
      "A4",
      "A5",
      "A7",
      "A8"
    ],
    "patro": "1. NP - mezipatro",
    "studovna": "Studovna Antropologie",
    "color": "#00ccff"
  },
  "A7": {
    "area": "Antropologie",
    "neighbors": [
      "A5",
      "A6",
      "A8",
      "A9"
    ],
    "patro": "1. NP - mezipatro",
    "studovna": "Studovna Antropologie",
    "color": "#00ccff"
  },
  "A8": {
    "area": "Antropologie",
    "neighbors": [
      "A6",
      "A7",
      "A9"
    ],
    "patro": "1. NP - mezipatro",
    "studovna": "Studovna Antropologie",
    "color": "#00ccff"
  },
  "A9": {
    "area": "Antropologie",
    "neighbors": [
      "A7",
      "A8"
    ],
    "patro": "1. NP - mezipatro",
    "studovna": "Studovna Antropologie",
    "color": "#00ccff"
  },
  "F1": {
    "area": "Fyzika",
    "neighbors": [
      "F2",
      "F3"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Fyziky",
    "color": "#CD0000"
  },
  "F10": {
    "area": "Fyzika",
    "neighbors": [
      "F11",
      "F12",
      "F8",
      "F9"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Fyziky",
    "color": "#CD0000"
  },
  "F11": {
    "area": "Fyzika",
    "neighbors": [
      "F10",
      "F12",
      "F13",
      "F9"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Fyziky",
    "color": "#CD0000"
  },
  "F12": {
    "area": "Fyzika",
    "neighbors": [
      "F10",
      "F11",
      "F13",
      "F14"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Fyziky",
    "color": "#CD0000"
  },
  "F13": {
    "area": "Fyzika",
    "neighbors": [
      "F11",
      "F12",
      "F14",
      "F15"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Fyziky",
    "color": "#CD0000"
  },
  "F14": {
    "area": "Fyzika",
    "neighbors": [
      "F12",
      "F13",
      "F15",
      "F16"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Fyziky",
    "color": "#CD0000"
  },
  "F15": {
    "area": "Fyzika",
    "neighbors": [
      "F13",
      "F14",
      "F16",
      "F17"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Fyziky",
    "color": "#CD0000"
  },
  "F16": {
    "area": "Fyzika",
    "neighbors": [
      "F14",
      "F15",
      "F17"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Fyziky",
    "color": "#CD0000"
  },
  "F17": {
    "area": "Fyzika",
    "neighbors": [
      "F15",
      "F16"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Fyziky",
    "color": "#CD0000"
  },
  "F2": {
    "area": "Fyzika",
    "neighbors": [
      "F1",
      "F3",
      "F4"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Fyziky",
    "color": "#CD0000"
  },
  "F3": {
    "area": "Fyzika",
    "neighbors": [
      "F1",
      "F2",
      "F4",
      "F5"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Fyziky",
    "color": "#CD0000"
  },
  "F4": {
    "area": "Fyzika",
    "neighbors": [
      "F2",
      "F3",
      "F5",
      "F6"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Fyziky",
    "color": "#CD0000"
  },
  "F5": {
    "area": "Fyzika",
    "neighbors": [
      "F3",
      "F4",
      "F6",
      "F7"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Fyziky",
    "color": "#CD0000"
  },
  "F6": {
    "area": "Fyzika",
    "neighbors": [
      "F4",
      "F5",
      "F7",
      "F8"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Fyziky",
    "color": "#CD0000"
  },
  "F7": {
    "area": "Fyzika",
    "neighbors": [
      "F5",
      "F6",
      "F8",
      "F9"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Fyziky",
    "color": "#CD0000"
  },
  "F8": {
    "area": "Fyzika",
    "neighbors": [
      "F10",
      "F6",
      "F7",
      "F9"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Fyziky",
    "color": "#CD0000"
  },
  "F9": {
    "area": "Fyzika",
    "neighbors": [
      "F10",
      "F11",
      "F7",
      "F8"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Fyziky",
    "color": "#CD0000"
  },
  "M1": {
    "area": "Matematika",
    "neighbors": [
      "M2",
      "M3"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M10": {
    "area": "Matematika",
    "neighbors": [
      "M11",
      "M8",
      "M9"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M11": {
    "area": "Matematika",
    "neighbors": [
      "M10",
      "M13",
      "M9"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M13": {
    "area": "Matematika",
    "neighbors": [
      "M11",
      "M14",
      "M15"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M14": {
    "area": "Matematika",
    "neighbors": [
      "M13",
      "M15",
      "M16"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M15": {
    "area": "Matematika",
    "neighbors": [
      "M13",
      "M14",
      "M16",
      "M17"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M16": {
    "area": "Matematika",
    "neighbors": [
      "M14",
      "M15",
      "M17",
      "M18"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M17": {
    "area": "Matematika",
    "neighbors": [
      "M15",
      "M16",
      "M18",
      "M19"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M18": {
    "area": "Matematika",
    "neighbors": [
      "M16",
      "M17",
      "M19",
      "M20"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M19": {
    "area": "Matematika",
    "neighbors": [
      "M17",
      "M18",
      "M20",
      "M21"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M2": {
    "area": "Matematika",
    "neighbors": [
      "M1",
      "M3",
      "M4"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M20": {
    "area": "Matematika",
    "neighbors": [
      "M18",
      "M19",
      "M21",
      "M22"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M21": {
    "area": "Matematika",
    "neighbors": [
      "M19",
      "M20",
      "M22"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M22": {
    "area": "Matematika",
    "neighbors": [
      "M20",
      "M21"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M3": {
    "area": "Matematika",
    "neighbors": [
      "M1",
      "M2",
      "M4",
      "M5"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M4": {
    "area": "Matematika",
    "neighbors": [
      "M2",
      "M3",
      "M5",
      "M6"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M5": {
    "area": "Matematika",
    "neighbors": [
      "M3",
      "M4",
      "M6",
      "M7"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M6": {
    "area": "Matematika",
    "neighbors": [
      "M4",
      "M5",
      "M7",
      "M8"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M7": {
    "area": "Matematika",
    "neighbors": [
      "M5",
      "M6",
      "M8",
      "M9"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M8": {
    "area": "Matematika",
    "neighbors": [
      "M10",
      "M6",
      "M7",
      "M9"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "M9": {
    "area": "Matematika",
    "neighbors": [
      "M10",
      "M11",
      "M7",
      "M8"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Matematiky",
    "color": "#0f11af"
  },
  "V1": {
    "area": "Všeobecnosti",
    "neighbors": [
      "V2"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Fyziky",
    "color": "#ffff33"
  },
  "V2": {
    "area": "Všeobecnosti",
    "neighbors": [
      "V1"
    ],
    "patro": "1. NP",
    "studovna": "Studovna Fyziky",
    "color": "#ffff33"
  },
  "VZ1": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ2",
      "VZ3"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ10": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ11",
      "VZ12",
      "VZ8",
      "VZ9"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ11": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ10",
      "VZ12",
      "VZ13",
      "VZ9"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ12": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ10",
      "VZ11",
      "VZ13",
      "VZ14"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ13": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ11",
      "VZ12",
      "VZ14",
      "VZ15"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ14": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ12",
      "VZ13",
      "VZ15",
      "VZ16"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ15": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ13",
      "VZ14",
      "VZ16",
      "VZ17"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ16": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ14",
      "VZ15",
      "VZ17",
      "VZ18"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ17": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ15",
      "VZ16",
      "VZ18",
      "VZ19"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ18": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ16",
      "VZ17",
      "VZ19",
      "VZ20"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ19": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ17",
      "VZ18",
      "VZ20",
      "VZ21"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ2": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ1",
      "VZ3",
      "VZ4"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ20": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ18",
      "VZ19",
      "VZ21",
      "VZ22"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ21": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ19",
      "VZ20",
      "VZ22",
      "VZ23"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ22": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ20",
      "VZ21",
      "VZ23",
      "VZ24"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ23": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ21",
      "VZ22",
      "VZ24",
      "VZ25"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ24": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ22",
      "VZ23",
      "VZ25",
      "VZ26"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ25": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ23",
      "VZ24",
      "VZ26",
      "VZ27"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ26": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ24",
      "VZ25",
      "VZ27",
      "VZ28"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ27": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ25",
      "VZ26",
      "VZ28",
      "VZ29"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ28": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ26",
      "VZ27",
      "VZ29",
      "VZ30"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ29": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ27",
      "VZ28",
      "VZ30",
      "VZ31"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ3": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ1",
      "VZ2",
      "VZ4",
      "VZ5"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ30": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ28",
      "VZ29",
      "VZ31",
      "VZ32"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ31": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ29",
      "VZ30",
      "VZ32",
      "VZ33"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ32": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ30",
      "VZ31",
      "VZ33",
      "VZ34"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ33": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ31",
      "VZ32",
      "VZ34",
      "VZ35"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ34": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ32",
      "VZ33",
      "VZ35",
      "VZ36"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ35": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ33",
      "VZ34",
      "VZ36",
      "VZ37"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ36": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ34",
      "VZ35",
      "VZ37",
      "VZ38"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ37": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ35",
      "VZ36",
      "VZ38",
      "VZ39"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ38": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ36",
      "VZ37",
      "VZ39",
      "VZ40"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ39": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ37",
      "VZ38",
      "VZ40",
      "VZ41"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ4": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ2",
      "VZ3",
      "VZ5",
      "VZ6"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ40": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ38",
      "VZ39",
      "VZ41",
      "VZ42"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ41": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ39",
      "VZ40",
      "VZ42",
      "VZ43"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ42": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ40",
      "VZ41",
      "VZ43"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ43": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ41",
      "VZ42"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ5": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ3",
      "VZ4",
      "VZ6",
      "VZ7"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ6": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ4",
      "VZ5",
      "VZ7",
      "VZ8"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ7": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ5",
      "VZ6",
      "VZ8",
      "VZ9"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ8": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ10",
      "VZ6",
      "VZ7",
      "VZ9"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  },
  "VZ9": {
    "area": "Vědy o Zemi",
    "neighbors": [
      "VZ10",
      "VZ11",
      "VZ7",
      "VZ8"
    ],
    "patro": "2. NP",
    "studovna": "Studovna Věd o Zemi",
    "color": "#00bf00"
  }
};

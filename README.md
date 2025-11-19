# Knihovní navigátor / Library Navigator

Web aplikace pro navigaci v knihovně Přírodovědecké fakulty Masarykovy univerzity.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://vindler-mu.github.io/navigace/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 📖 O projektu

Knihovní navigátor je intuitivní webová aplikace, která pomáhá studentům a zaměstnancům PřF MU snadno najít fyzické umístění dokumentů v knihovně. Aplikace nabízí vyhledávání podle signatury nebo tématu a poskytuje podrobné instrukce, jak se k dokumentu dostat.

**Živá verze:** [https://vindler-mu.github.io/navigace/](https://vindler-mu.github.io/navigace/)

## ✨ Funkce

### 🔍 Vyhledávání
- **Podle signatury** - Zadejte číslo signatury (např. 52, 531.6) nebo název časopisu
- **Podle tématu** - Tématické vyhledávání s podporou fuzzy search (funguje i s překlepy!)
- **Autocomplete našeptávač** - Automatické návrhy při psaní (od 2 znaků)
- **Vyhledávání v historických názvech** - Najde časopisy i pod starými názvy

### 📍 Navigace
- **Barevné kódování** podle oborů (Fyzika, Všeobecnosti, Vědy o Zemi, Matematika, Antropologie)
- **Detailní instrukce** jak se dostat k regálu
- **Speciální instrukce** pro Antropologii a časopisy/sborníky
- **Knihy nablízku** - Zobrazení souvisejících dokumentů na okolních regálech

### 📰 Časopisy
- **Změny názvů** - Automatické zobrazení starých/nových názvů časopisů
- **Bullet point seznamy** pro časopisy s více změnami názvu
- **Abecední řazení** - Časopisy řazeny podle názvu, ne signatury

### 🌍 Vícejazyčnost
- **CZ/EN přepínač** - Přepnutí rozhraní mezi češtinou a angličtinou
- **Zachování dat** - Názvy studoven, signatury a témata zůstávají v češtině

### 💬 Feedback
- **Nahlášení problémů** - Plovoucí tlačítko pro hlášení chyb
- **Email integrace** - Předvyplněný email klient
- **Bezpečnostní ochrany** - Honeypot a rate limiting proti spamu

### 🛡️ Bezpečnost a soukromí
- **Žádné cookies** - Aplikace neukládá cookies
- **Žádné trackování** - Bez analytických nástrojů třetích stran
- **Čistě frontendová** - Vše běží v prohlížeči uživatele
- **GDPR compliant** - Cookie consent banner s informacemi

## 🚀 Použití

### Vyhledávání podle signatury
1. Zadejte číslo signatury do vyhledávacího pole (např. `52` nebo `531.6`)
2. Nebo zadejte název časopisu (např. `Acta Geodynamica`)
3. Aplikace zobrazí:
   - Barevně označený regál
   - Studovnu a patro
   - Podrobné instrukce jak se tam dostat

### Vyhledávání podle tématu
1. Zadejte téma do vyhledávacího pole (např. `černé díry`, `quantum mechanics`)
2. Aplikace používá fuzzy search, taktakže funguje i s překlepy
3. Zobrazí se první relevantní výsledek

### Přepnutí jazyka
- Klikněte na **CZ** nebo **EN** v pravém horním rohu
- Rozhraní se přepne okamžitě
- Data zůstávají v češtině

## 🛠️ Technologie

- **Pure HTML/CSS/JavaScript** - Žádné frameworky, žádné závislosti
- **Responsive design** - Funguje na desktopech i mobilech
- **Fuzzy search** - Levenshtein distance algoritmus pro vyhledávání s překlepy
- **LocalStorage** - Pro uložení cookie consent preference

## 📊 Datová struktura

Aplikace pracuje s databází **962 záznamů** z knihovny PřF MU:

```javascript
{
  "regal": "VZ27",
  "signatura": "55.01",
  "popis": "Filozofie vědy",
  "popis_novy": "",
  "popis_stary": "",
  "typ": "signatura",
  "tema": "filozofie vědy, epistemologie...",
  "keywords": ["filozofie vědy", "epistemologie", ...]
}
```

**Regálová mapa:** 96 regálů s informacemi o:
- Oblasti (Fyzika, Matematika, atd.)
- Patře a studovně
- Barvě pro vizuální rozlišení
- Sousedních regálech

## 📁 Struktura projektu

```
navigace/
├── index.html              # Hlavní aplikace (vše v jednom souboru)
├── data_navigace.js        # Databáze knihovny (962 záznamů + regalMap)
├── sci-uk-lg-cze-black.png # Logo PřF MU
├── .gitignore              # Git ignore soubor
├── .nojekyll               # Pro správné fungování GitHub Pages
└── README.md               # Tento soubor
```

## 🌐 Nasazení

### GitHub Pages
Aplikace je automaticky nasazená na GitHub Pages z `main` větve.

### Lokální spuštění
```bash
# Naklonujte repozitář
git clone https://github.com/vindler-mu/navigace.git
cd navigace

# Spusťte lokální server
python3 -m http.server 8000

# Otevřete v prohlížeči
http://localhost:8000
```

## 🎨 Barevné kódování

| Oblast | Barva | Hex |
|--------|-------|-----|
| Fyzika | 🔴 Červená | `#CD0000` |
| Všeobecnosti | 🟡 Žlutá | `#e1df10` |
| Vědy o Zemi | 🟢 Zelená | `#00bf00` |
| Matematika | 🔵 Modrá | `#0f11af` |
| Antropologie | 🔷 Tyrkysová | `#00ccff` |

## 📧 Kontakt

**Email pro nahlášení problémů:** pujcovnauk@sci.muni.cz

**Web fakulty:** [sci.muni.cz](https://www.sci.muni.cz/)

## 📝 Licence

Tento projekt je vytvořen pro Přírodovědeckou fakultu Masarykovy univerzity.

## 🙏 Přispívání

Pro návrhy na vylepšení nebo nahlášení chyb použijte:
1. **Issues** na GitHubu
2. **Feedback modal** přímo v aplikaci (tlačítko "💬 Nahlásit problém")
3. Email na **pujcovnauk@sci.muni.cz**

---

Vytvořeno s ❤️ pro studenty a zaměstnance PřF MU

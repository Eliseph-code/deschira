# Elise Philips — 3D portfolio-website: overdracht (22 nov 2026)

## Wat het is
Een fotorealistische 3D-website (three.js r160) voor Elise Philips: leerwerk (op weg naar producent en eigen merk), gediplomeerd interieuradviseur, student architectuur. Huisstijl: EL-monogram, bruin #52281C, crème, navy #1C2A3B, goud #C4A46A. NL/EN-schakelaar.

## Links
- **NIEUW — Testversie 3 (rotonde, 7 kamers, bewerken in de ruimte, Beheer aan):** https://claude.ai/artifact/XTdUsFRNVMqPcmBTmxZptn (slug f6a9facd-8547-48db-a9e0-c82c395a9dc7)
- **Testversie (werkversie, met Beheer):** https://claude.ai/artifact/8ZKwvBbe2tRwWCWFQVoyyh (slug 3d33729a-532e-40a9-8f34-96b35e632c08)
- **Bevroren kopie van dit concept:** https://claude.ai/artifact/L6kVpkdRrgBstUpWJBxzw8 (slug 9aab28ca-808e-40e1-aa72-46c98d369ddf, zonder Beheer)
- **Oude live site (CSS-3D, nog niet vervangen):** https://claude.ai/artifact/AXkGE6xwkmxiBt8hU2oyAj (slug 4d2d38f6-944c-492b-8e0d-21f47cbe20b4)

## Opbouw van de wereld
- Start onderaan een terrasvormige rotstuin op een smalle bergrichel; kiezelpad met natuurstenen treden omhoog naar een gevel met maanpoort.
- Achter/links van de richel een grote, natuurlijk oplopende berg (procedureel terrein, foto-rotstextuur, duizenden foto-bomen). Rondom een naadloos 360°-panorama van een ravijn met turquoise rivier en waterval (3 Gemini-foto's aan elkaar gezet: assets/valley360.webp). Verre 3D-bergen vloeien kleurecht over in de foto.
- Zon, lucht, sterren en maan volgen de echte tijd (LAT 52.1, LON 5.3); tijdkiezer rechtsboven. Vogels met geluid (Web Audio), geluidsknop.
- Hal (travertin zuilengalerij, 6 traveeën) met werken aan de wanden en op sokkels.
- Links drie deuren: **Over mij**, **Contact & aanbod**, **Collectie**. Voor elke deur een **etalage** (samengestelde zuilen met tassen).
- **Collectiekamer:** campagnefoto in gouden lijst, getrapte travertin sokkel met 5 tassen, en het **Atelier** ("Ontwerp je tas": model, leerkleur, details, beslag, initialen; kleuren worden op de echte foto toegepast; aanvraag gaat naar het contactformulier).
- Achter de hal een gang in de berg met **4 samenwerkingskamers**, op slot tot ze in Beheer open worden gezet.
- Navigatie: scrollen, slepen om rond te kijken, dubbelklik om te springen, plattegrond met sleepbaar mannetje, pijlknoppen Volgende/Vorige (en pijltjestoetsen). Op de home knoppen onder de titel; bovenmenu verschijnt pas binnen. Op telefoon een menubalk onderaan.

## Beheer (alleen de eigenaar)
Knop "✎ Beheer" verschijnt alleen voor de eigenaar. Opslag in de artifact-database `site/content`, regel: iedereen leest, alleen eigenaar schrijft. Tabbladen: Collectie (etalages per ingang, sokkel, tassen toevoegen/verwijderen, foto/naam/tekst/prijs), Wanden & werken, Teksten, Samenwerkingen (open/dicht, partner, teksten, 2 foto's), Gegevens. Let op: opgeslagen inhoud is alleen zichtbaar voor ingelogde Claude-gebruikers; bij live zetten de opgeslagen inhoud vast in de code verwerken.

## Bestanden (zip)
- `parts/head.html` (CSS), `parts/body.html` (HTML), `parts/main3d.js` (alle 3D-code), `v3_backup.html` (bron van vertalingen T, tekeningen en ITEMS), `build.py` bouwt `index.html`.
- `assets/` alle foto's en texturen. Tassen zijn uitgeknipt uit Elise's campagnefoto (`collection.jpg`).
- Bouwen: `python3 build.py`; controleren: script uit index.html halen en `node --check`. Publiceren met de bestanden in `assets/` meegestuurd.

## Openstaand
1. Echte losse productfoto's van de 5 tassen (nu uitgeknipt; kleine randjes bij weekender linksonder en shopper rechtsonder). Gemini/ChatGPT zaten aan hun daglimiet.
2. Echt e-mailadres (nu `jouw-adres@voorbeeld.nl`, ook via Beheer aan te passen) en echte foto's van haar werk.
3. Testen op telefoonformaat.
4. Na goedkeuring: testversie overzetten naar de live site en opgeslagen Beheer-inhoud vastzetten.
5. Wensen van Elise: alles fotorealistisch, niets "copy-paste", tekst goed leesbaar, niets zweeft, vogels niet door muren.

## Update 22 nov, 23:20
- Hal = binnenkant van een halve maan: rechte zuilengalerij (x=5) naar het dal, gebogen achterwand (halve ellips, a=10, b=24) met deuren (travee 1/4/7) en 4 samenwerkingsnissen (travee 2/3/5/6). Cassetteplafond. Constantes: HM, IX/OX, BAYS, innerFace/outerFace in main3d.js.
- Samenwerkingen in navigatie (bovenmenu, home-knoppen, telefoonbalk "Partners"), plattegrond (ruitjes), route (stations cb0–cb3). Dichte samenwerking = "Binnenkort" + fluwelen koord; kamers in de berg alleen als verdieping bij open samenwerking.
- Bewerken in de ruimte: eigenaar ziet ✎ bij elk item (PENS/pen()); knop "Bewerk deze ruimte" toont alleen die ruimte; "Alle instellingen tonen" voor het volledige overzicht.
- Bugfix: teksten met punt in de sleutel (ab.t) werden in het oude Beheer verkeerd gelezen/opgeslagen.
- Testversie 1 (3d33729a) kon vanuit deze chat niet gewijzigd worden (geen netwerk); ongewijzigd als reserve.
- Taak 1 (panorama-naden, dubbele rotspiek) wacht: uploaden naar ChatGPT vanuit deze chat geblokkeerd.

## Update 23 nov, 09:05 — rotonde
- Hal is nu een ronde zaal (ROT: middelpunt -6.5,-12, straal 11) met koepel + oculus. Oost: 6 open bogen (ARCH_TH) met de collectie (h1,h3,h5,h4-ezel,h6,h8). Noord: maanpoort (GATE_TH 68°).
- 7 deuren (DOOR_TH): about 100°, r0..r3 130–220°, coll 250°, contact 280°; alle naar het midden. Houten dubbele deur gaat open bij naderen als de kamer open is.
- Kamers zitten achter hun deur in eigen (oude) coördinaten (LEG, XF, inRoom, roomShell); alleen de actieve kamer is zichtbaar, buiten verborgen zolang je binnen bent. Elke kamer kan op slot (doorsOn voor about/contact/coll, rooms[i].on voor samenwerkingen).
- Etalages: aantal 0–6 en per product een soort (bag→zuil, painting→ezel, small→sokkeltje), opgeslagen in show[k] en coll[i].kind. Nieuw product direct vanuit een etalage.
- Bergglitch: oorzaak was een dunne muur langs de noordgrens van de berg tot ver in het dal (afgrond werd daar niet diep). Opgelost in terrainH0 (dal zakt naar dalbodem, berg gaat geleidelijk over). Rand van de afgrond rondt af en komt nooit boven het maaiveld. Ver terrein zakt weg i.p.v. een platte schijf; ver terrein neemt de kleur van de foto over.
- Nog niet getest: telefoonformaat; echt opslaan in Beheer.

## Update 23 nov, 09:25 — zuilen, deuren, tuin, uitzicht (TEST 3 versie 1795422315-8c61)
- Klassieke onderdelen (vóór build()): marmer M.marble, gecanneleerde Ionische zuilen `colonne(x,z,h,r,ry,mat)` (heet niet `column`: die naam is al een SVG-constante), balustrades `balustrade()`, blauweregen `wisteriaAt()`, klimop `ivyAt()`, ranken `vine()`.
- Rotonde: losse zuilen tussen de bogen, archivolten en balustrade in de bogen, blauweregen eroverheen, maanpoort met flankerende zuilen.
- Deuren: crème Franse deuren met glas, roeden, messing grepen en waaiervenster, tussen twee zuilen met hoofdgestel (buildDoor). Een dichte kamer is gewoon wand (sg.wS); pas als hij aanstaat wordt het de wand met opening + deur (sg.wO + DG) — applyRooms.
- Tuin: groener gras, meer bomen/planten/pollen, pergola met blauweregen langs het pad (z 9–23), klimop op balustrades en rotondemuur.
- Uitzicht: buildPeaks is nu een poolraster-hoogteveld (straal 1500–3300) met grillige graten, sneeuw boven ~470 m, rotskleur en luchtperspectief. buildWaterfalls: drie watervallen langs de afgrond (geanimeerde textuur + nevel) — nog niet van dichtbij bekeken.
- Proefartefact PROEF rotonde (47bad0d8) is alleen voor testen en mag weg.

## Update 23 nov, 09:50 (TEST 3 versie 1795423622-6f32)
- Deuren uitgelijnd: vóór het bouwen wordt site/content gelezen (EARLY); open kamers (OPEN0) krijgen gelijk verdeelde deuren rond 190°, max 60° uit elkaar. Dichte kamers = gewone muur, geen deur/etalage. Bij opslaan met een gewijzigde set open kamers herlaadt de pagina en wordt de zaal opnieuw ingedeeld. Schilderijen h2/h9 komen op de eerste/laatste muurvlakken (ART_TH).
- Deurgevel: zuilen met rondboog (archivolt + sluitsteen) i.p.v. recht hoofdgestel; bord op 5.32 m, partnerfoto kleiner op 6.28 m.
- Over de afgrond: rotCliff()/ROT_SECT (-56°..50°): achter de bogen zakt het terrein direct weg; terrasring alleen aan de landkant; gemetselde console (lathe) met consoles onder de vloer. Balustrade/klimop/bomen/planten/stenen niet in die zone.
- Blauweregen, ranken en de pergola zijn weg; klimop-vlakken ook (oogden als platte blokken). 3D-bergtoppen en 3D-watervallen uit: het nieuwe dalpanorama heeft echte sneeuwtoppen en watervallen.
- Nieuwe foto's via ChatGPT (in Downloads): pine.webp (pijnboom, buigt naar rechts, voet op 11,5% van de breedte) en oak.webp (steeneik, hangt naar links, voet op 80%). Hoge bomen met rotsen langs het pad en links in de tuin.
- valley360.webp: midden (ravijn) vervangen door ChatGPT-dal met sneeuwtoppen en watervallen; lucht uitgesneden en zacht ingevoegd; blauwe lucht-banden van het oude panorama verwijderd. Origineel: /home/claude/work/valley360_orig.webp. Dubbele rotspiek links/rechts zit er nog in.
- Traptreden: onregelmatige natuurstenen (2–3 per tree, golvende omtrek) i.p.v. rechte blokken.
- Navigatie: uitklapmenu per onderwerp (navEntries) met losse onderdelen; klik = er direct heen.

## Update 23 nov, 10:15 (TEST 3 versie 1795424887-aab7)
- Bugfix afgrond: rotCliff gaf ver van de rotonde positieve waarden, waardoor de noordkant van de tuin (uitzichtterras, bankje) wegzakte. Nu: buiten de sector (meer dan 8°) altijd -60. Graspollen staan niet meer op de rand.
- Bogen: de horizontale balk op kämpferhoogte is weg; zuilen alleen tussen twee bogen (niet meer door de muur aan de uiteinden).
- Tuin volgens advies van ChatGPT (gesprek "Landscape Design Rules"): ~10 bomen in de voortuin, realistische hoogtes (olijf 4–6 m, cipres 7–8 m, pijnboom 8,6 m, steeneik 7 m), asymmetrisch en niet over het pad; rest van de richel maximaal 9 losse bomen; minder grote keien en dieper ingegraven; minder pollen en planten.
- Collectiemenu: categorieën Tassen · <naam>, Kunst · <naam>, Etalages, met uitklap per categorie. Namen in Beheer (sectie "Namen van de collecties", content.collNames).
- Leesvenster: alle tekst die op een paneel getekend wordt, wordt onthouden (redrawPanels → p.lines). Bij aankomst bij een station met een leesbaar paneel in beeld opent automatisch een venster (#readBox); sluiten met ×, Esc of klik ernaast. Klikken op een tekstpaneel opent het ook.
- Plinten (M.plinth) langs alle kamerwanden.
- Eigen indeling: in een samenwerkingskamer → "Bewerk deze ruimte" → "Indeling slepen". Foto 1, foto 2 en de tekst zijn over de vier wanden te slepen (niet in de deuropening); opslaan in content.layout[rK]. "Standaardindeling" zet terug. Getest in de proefpagina met een tijdelijk open kamer.
- Trage database: als de inhoud pas na de bouw binnenkomt en de deuren niet kloppen, herlaadt de pagina één keer (sessionStorage ep-relayout).
- Let op: alle samenwerkingen staan nu UIT in TEST 3 (zo opgeslagen om 09:54), dus er zijn 3 deuren.

## Update 23 nov, 12:05 (TEST 3 versie 1795431843-55ba)
- Rotonde: maanpoort vervangen door drie bogen naar de tuin (middelste open, zonder balustrade); bogen hebben alleen een zwikvlak boven de zuilen (geen platte pijlers meer); plint bij deuren onderbroken; vloer loopt door tot onder de bogen; windroos opnieuw als nette messing/marmer inleg.
- Start (station 0) midden in de rotonde, blik naar het dal. Het startmenu is alleen zichtbaar zolang je in de cirkel (2,7 m) staat; wie eruit loopt ziet het menu bovenaan, en pas na een klik op het logo komt het startmenu terug (heroOn/heroArm).
- Bugfix: dichte kamers (geen deur) waren altijd zichtbaar en lagen door de open kamer op 190° heen. updateRooms verbergt ze nu.
- Eigen indeling in álle kamers (layoutClusters): alles wat na de kale kamer (roomShell, sh0..sh1) is neergezet wordt in groepjes gebundeld (overlappende blokken = één geheel). Wandgroepjes schuiven over de vier wanden, vloergroepjes (zuilen, sokkels, ezels) over de vloer. Opslag content.layout[kamer].cN. Let op: de vaste kijkpunten van de route kijken nog naar de oude plek.
- Maatvoering: producten (coll[i].dims {w,h,d} in cm) en wandwerken (items[id].dims). Met maten staat een product op ware grootte (geen 1,3× vergroting meer), staat een schilderij op de ezel op echte maat en hangt een wandwerk op ware grootte (applyArtDims). Productvenster toont "Afmetingen" en een schaaltekening naast een figuur van 1,70 m met maatlijnen. Optioneel per product/tas een "Foto met model" (modelImg) met wissel Product / Met model.

## Update 23 nov, 12:15 (TEST 3 versie 1795432507-b63f)
- Geen ronde showcases meer in de zaal. Naast elke open deur (DOOR_TH+NICHE_OFF, 15°) zit een etalage-nis in de muur (feature type "niche", buildNiche): rondboog met marmeren lijst, verlichte achterwand, dorpel, glazen front, bordje eronder. fillNiche zet de producten op ware grootte op een rij; bij meer dan 3 producten komt er een glasplank bij; wat niet past wordt evenredig kleiner. Station "s…" kijkt recht op de nis.
- Bij 6–7 open kamers is er maar plek voor één wandschilderij (h2, achter de laatste deur); h9 vervalt dan.
- Deuren zijn glazen openslaande deuren in een slank bronzen kader (M.bronze, M.glassPane) met lange messing grepen en glazen bovenlicht. Een lichte gloed (reg.glow) achter het glas verbergt de lege doorgang zolang de kamer niet getekend wordt.

## Update 23 nov, 12:35 (TEST 3 versie 1795433548-1d2c)
- Glitch rots/gras in de kamer: kamers steken in de helling. Terrein en rotsen krijgen nu in de shader (RC_U/RC_GLSL, rcHit) een uitsnede op het grondvlak van elke kamer die op dat moment getekend wordt; tuinbeplanting, keien en bomen worden niet meer op die grondvlakken gezet (roomFoot).
- Pilaren: tussen twee bogen ontstond soms een nul-breed muursegment, dat als platte plaat naast de zuil stond. Lege segmenten worden nu overgeslagen (g1-g0>.05).
- Etalage: grote organische nis (superellips, nicheOutline) rechts van elke deur, zo breed als de muur tot de volgende deur toelaat (max 20°, NICHE). Lichtgevende achterwand, dunne lichte planken (1–3 afhankelijk van het aantal producten), producten tot 1,6× vergroot zolang er geen maten zijn ingevuld. Zachte lichtgloed op de muur eromheen (glowTex).
- Licht op werken: wandschilderijen gloeien licht op (emissiveMap) met een lichtvlek erachter; in de rotonde krijgen sokkels, ezel en schilderijen een smalle spot (accent, max 10, niet op mobiel); tasfoto's worden niet meer door de toonmapping gedempt.
- Pauze: als het tabblad niet zichtbaar is (ander tabblad, geminimaliseerd, pagina verlaten) stopt het tekenen en wordt het geluid gepauzeerd; bij verlies van focus pauzeert het geluid.

## Update 23 nov, 12:40 (TEST 3 versie 1795433896-5828)
- Laten opvallen, volgens ChatGPT-advies (gesprek "Three.js Display Contrast Tips"): donkere toplaag (M.darkTop #564a40) op alle sokkels/zuilen; zachte contactschaduw onder elke tas (contactShadow/shadowTex), ook in etalages en kamers; tassen in de rotonde 1,55× groter, op kamerzuilen 1,6× (zonder maten); sterkere spots (accent 60); wandschilderijen staan op een donkerder wandvlak (#b7a58c) met een donkere vignet en slagschaduw in plaats van de lichtgloed.

## Update 23 nov, 12:55 (TEST 3 versie 1795434938-9fe4)
- Catalogus in content: collections [{id,type bag|art|other,nl/en t,p}] (standaard c1 Timeless, c2 Aarde & Licht; oude collNames worden omgezet), partners [{id,name,web,email,phone,logo,nl/en p}], pillars {h1|h3|h5|h6|h8: productId}. Producten (coll) hebben nu col en partner; soort "poster" erbij (zelfde weergave als schilderij, isFlat). rooms[i].partnerId koppelt een partner (naam/website komen in het bijschrift).
- Beheer-tabbladen: Producten (filter per collectie, + nieuw, verwijderen), Collecties (+, hernoemen, soort, verwijderen), Partners (+, gegevens, logo, verwijderen), Wat staat waar (alle zuilen, etalages en sokkel met aanvinklijsten).
- Etalages/sokkel/zuilen: geen aantal-kiezer of vakjes meer; pickHTML toont alle producten per collectie met vinkjes en "hele collectie"; zuilen hebben één keuze (of het eigen werk). SHOW-lijsten zijn nu compacte id-lijsten (max 12); sokkel max 5.
- Menu Collectie: één kopje per collectie, met de stukken die ergens te zien zijn; klik loopt naar de plek.

## 13:30 — Items-systeem (grote ombouw)
- Alles in de zaal en de kamers is nu een *item* in `content.objects` (OBJS). Typen in `OBJ_TYPES`: etalage, zuil, ezel, lijst, tekst, vitrine, podium, bank, atelier. Bouwers in `OB[type]`, register `OBJ_REG`, `syncObjects()`.
- Ruimtes staan in `content.spaces` (SPACES; onbeperkt, max 24 deuren). Oude inhoud (doorsOn/rooms/show/pillars) wordt bij laden omgezet via `spacesFrom()` en `defaultObjects()`.
- Instellingen-tabs: Ruimtes, Samenwerkingen (koppelen aan ruimte), Collecties & producten (genest), Werken, Teksten, Gegevens.
- Item-editor: potlood op een item → `secHTML("obj:id")` / `objHTML`. Knoppen Verplaatsen / Producten schikken / Verwijderen.
- "+ Item" → kies type → klik op wand/vloer (`startPlace`/`placeAt`).
- Testen: PROEF met nep-db in `window.name` (zie /home/claude/work/proef.html), nooit opslaan in de echte db.
- Bomen en bergbomen worden niet meer in kamers geplaatst (`roomFoot`-check).

## 13:45 — Route, informatielabel, menu-beheer
- Route (`makeRoute`): hal (alle items op hoek) → over mij → samenwerkingen → collectie → contact → tuin (`spaceRank`). Elke station heeft `sec`; knop "Door naar …" (`skipBtn`, `nextSecIdx`) en Shift+pijl springen naar het volgende onderdeel. Pijltjestoetsen ←→↑↓ = vorige/volgende.
- Informatielabel gaat nooit vanzelf open (ook leesvenster niet meer automatisch): `capData(n)` → `renderCap` → ⓘ-knop (`infoPill`) of klik op item (`openInfo`). Pagina's: Info / Foto's & video (`mediaOf`) / Specificaties (`specsOf`), bladeren met ‹ ›. Telefoon: omlaag vegen sluit, stepper schuift boven het label (`posStepper`).
- Knoppen "Naar collectie · X" / "Naar samenwerking · Y" via `linkActs` / `goColl`.
- Product: `media:[{t:img|video|yt|vimeo|link,src}]`, `specs:{nl,en}` (regels "Label: waarde"). YouTube/Vimeo kan niet ingesloten worden op de artifact-pagina → afspeelkaart die in een nieuw tabblad opent.
- Menu: `content.menu` (MENU, `normMenu`, `applyMenu`), tab "Menu" in Instellingen: naam NL/EN, aan/uit, volgorde, automatisch of zelf gekozen items ("stationId" of "stationId|productId"). "Galerie" heet nu Home; uitklapper toont wat er op zuilen/etalages in de hal staat.
- Collectiekamer: sokkel/podium is etalage `k_etalage` in wand 3 (ook omzetting van opgeslagen `k_podium`).

## 22:52 — Etalage scherper, schikken, materialen, personaliseren
- Etalage: geen overbelichte witte achterwand/waas meer: warme verloop-achterwand (`M.nicheGlow` canvas-verloop), fysiek plankmateriaal, ledstrip; vitrine zonder glasplaat.
- Schikken-bug: na `saveDraft()` werd de etalage soms opnieuw opgebouwd terwijl je al sleepte (oude groep). Nu `await objBusy` vóór `startArrange/startMove`. Knop "Tassen in de etalage verschuiven" staat nu bovenaan de etalage-editor.
- Materialen volgens ChatGPT-checklist (tab "Threejs Material Checklist"): subtieler reliëf travertin, vloer MeshPhysical met clearcoat, messing/goud metalness 1, leer sheen/specular, donker hout en donkere toplaag met clearcoat, bloom zachter (.18).
- Zuil: hoogte/breedte (o.h/o.w) in de editor.
- Instellingen: vaste kop (tabbladen + "Ga naar"-knopjes via `data-sec`) en vaste voet (Opslaan, Naar boven).
- Personaliseren per product: `custom:{on,mode:"kleur"|"foto",body,acc,hw,photos}`; `custModels`, `cfgAllowed`, `cfgImage` (bestonden niet → toonCfg3D crashte). Knop "Personaliseer" in het informatielabel; `openCfg(model)`.

## 23:30 — Live op www.deschira.com (GitHub Pages + Supabase)
- Repo: Eliseph-code/deschira, branch `main1` (Pages, CNAME www.deschira.com). Oude site in branch `oude-site`. Clone: /home/claude/deschira. Claude GitHub-app geïnstalleerd voor alleen deze repo.
- Publiceren: `python3 build.py` → kopieer index.html (en assets/content.json indien gewijzigd) naar de repo → commit → `git -c push.negotiate=true push origin main1`.
- Supabase-project `elise-philips-website` (ref aqqggqeyizevoqkobmmx, EU), org "Elise Philips". Publishable key staat in parts/backend.js. Schema: /home/claude/work/schema.sql (admins, is_admin(), site_content, profiles, designs, requests, storage bucket media).
- parts/backend.js: bootst `window.claude.use(db|user|assets)` na buiten Claude. Inhoud: rij `site_content` id "site/content"; zolang leeg → content.json (kopie TEST 3, 3 schilderijfoto's leeg).
- parts/account.js: Inloggen/Account maken/wachtwoord herstel, Mijn account (ontwerpen, aanvragen), "Bewaar in mijn account" in atelier, formulier → requests, Instellingen-tab Aanvragen. Wordt in build.py vóór `</script>` gezet.
- Beheerder = elisephilips8@gmail.com (tabel admins).

## 24-11 10:15 — Details ronde 2
- parts/extras.js (in build.py vóór `/* ---------- start` gezet): routepijlen op de vloer (`buildArrows/animArrows`, spoor tot het punt erna) + richtingwijzer onderin (`.route-hint`), info-knopje naast het item (`placePill`, `capAnchor`), deellinks (#o_<id>, #p=<productId>, `openFromHash`, `shareItem`), productblad (`productSheet`, printbaar), contactgegevens (`contactLines/contactLinks`), `prepUpload` (foto's >1,6 MB → max 2400 px JPEG), Overzicht-raster (`openOverview`, knop .ov-btn).
- Camera: nodes hebben `pitch` (objStation), `camPitch` volgt soepel. Telefoon fov 84.
- Menu-opties `content.menuOpts` {heroD,heroM,tabM,startM} → body-classes hide-hero-d/-m, hide-tab, hide-start; tab Menu in Instellingen.
- SITE: phone,email,wa,insta,linkedin,address,kvk,vat (Gegevens-tab); contactbord, contact-uitklapmenu, label contactkamer, productblad.
- Nieuwe items: video (wand), rek (max 4), stalen (opent atelier), plant (v 0–5, s). Draaien: editor graden-veld + ±15/45/90, verplaatsbalk ±15/±90.

## 24-11 — Advies-ronde (ChatGPT-beoordeling)
- Sfeer per ruimte (THEMES/THEME_DEF, select "Sfeer van de ruimte" in Ruimtes): Ingang travertijn, Over mij walnoot + eiken planken, Collectie boutique (warme greige, donkere steen, extra spots), Contact nachtblauw kalkstuc.
- Aankleding DECOR1 (banken, planten, vitrine, stalentafel) via withDecor; vlag decor1 wordt bij opslaan bewaard. Bank/plant zijn geen routestops.
- Teksten ±25% groter, logo met schaduw/donkerder kopverloop. Plattegrond standaard dicht (onthouden in ep-map), tijd/geluid achter icoon.
- Directe route: "Bekijk alle stukken" / "Vraag een offerte aan" onder de startknoppen, "Alles" in telefoon-onderbalk.
- Camera: smootherstep-easing. Productafbeeldingen zonder maten 15% groter op zuil.
- SEO: titel/description/OG/JSON-LD (Organization Deschira + founder Elise Philips, ItemList producten), leesbare tekstversie (main.seo) gegenereerd uit content.json + T bij build, robots.txt, sitemap.xml.
- Admin-venster staat in admin.html en wordt pas na laden ingevoegd (niet meer in paginabron). index_inline.html = versie met alles inline voor PROEF.

## 24-11 11:45 — Elizian (merk en inhoud)
- Merknaam Elizian (Elise + Zeeshan). Deschira verdwijnt van de site; domein later elizian.net/.nl. Logo = EL-monogram (assets/logo.png = haar bestand), palet: travertin #D7C9B0, ivoor #F0EDE5, goud #C3A367, bordeaux #692719, nachtblauw #15283E.
- Teksten in B2 (nl/en) en B2I (items a1–a5, h7, h10) bovenaan main3d.js. brand2(d) negeert eenmalig de oude opgeslagen teksten voor die sleutels; currentContent bewaart brand2:true.
- Geen interieur/architectuur-diensten meer; geen samenwerkingsaanbod. Contact: gezocht = atelier, leveranciers (leer/beslag), stage architectuur. Formulieronderwerpen: buy, custom, atelier, supplier, intern, other.
- Producten = concepten; pre-order (geen voorraad), vaste prijs of prijs op aanvraag (veld price leeg = op aanvraag).
- Open vragen 14–23 (foto's, samenwerkingsruimtes, architectuurhoek, stage-periode, publieke gegevens, talen) en keuze slogan.

## 24-11 12:00 — Elizian ronde 2 (antwoorden 14–23)
- B3 (main3d.js, na B2): atelier = huren of samenwerken; leveranciers = Europees leer/beslag in kleine afnames; productie voor merken nog maar één zin. Vlag brand3 laat deze teksten één keer winnen van opgeslagen versies.
- Formulier: FORM_CTX per plek. Contact: buy/custom/atelier/other. Collectie (curRoomK==="coll" of topic supplier): buy/custom/supplier/other. Studie: intern/other. openForm(topic,item,ctx).
- Studie & portfolio (extras.js): STUDY {cur,years,nl/en{t,p,stage,y[]},updates[],projects[]}, normStudy, openStudy (#studie), openProject. Item-type `studie` (bord, opent pop-up); eenmalig toegevoegd via withStudy (vlag study1) op Over mij wand 2, u -6.75. Knop "Studie & portfolio" ook bij items a1/a2. Admin-tab Studie (studyAdmin/studyAdminBind).
- Open: foto's examenproject wijnzaak (komen), eerdere tassen/werk in uitvoering, slogan-keuze.

## 24-11 12:30 — Websitevenster, stalen, gebouw dicht
- parts/site.js (build.py plakt het achter extras.js): websitevenster `#siteWin` (rechts, 54vw; ⤢ = volledig; telefoon = volledig scherm). Pagina's = menu-items: PAGES.hall/about/collab/coll/contact, ankers `w-<id>`; hash `#w/<pagina>/<anker>`.
- Doorverwijzen: siteFromHit(u) in de klik-handler (objId/item/swatch), openCap/openInfo/openItem → openSite. Mapping: itemTarget, objTargetSite, BOARD_T, CAP_T, spaceTarget. Deuren blijven lopen. Uitzetten: Menu-tab "Klik op een item opent het websitevenster" (menuOpts.site).
- Stalenbibliotheek SWLIB (content.swatches; id = g_k, g body/acc/hw, hex, img, nl/en t/p, off). syncSW() bouwt SW (personaliseer-tafel) eruit. Admin-tab Stalen. OB.stalen + nieuw OB.stalenwand (max 12) met o.sw-keuze (swPickHTML). Elk staal klikbaar → #w/coll/staal-<id>.
- Studie-projecten hebben cat arch|interior; wijnzaak = interior (staat bij opleiding, niet in architectuurportfolio).
- Gebouw dicht: clampArea houdt alles in de rotonde; tuin-stations weg, route eindigt in de rotonde.
- Slogan B4 "Ambacht dat blijft" / "Craft that lasts" (vlag brand4) + home.p.

## 24-11 13:00 — Route = website-volgorde, concept/live, verbergen
- Route: stations per ruimte gesorteerd op routeRank(o) (positie van het onderdeel op de websitepagina, site.js); ruimtevolgorde = MENU-volgorde (spaceRank). Stepper (oude pijlknoppen) verborgen. Los van de route: rejoinG-pijlen + hint "Terug naar de route" (extras.js, buildRejoin).
- Kamers zichtbaar vanuit de hal (updateRooms: vis = roomOn && in hal). Glas opacity .06.
- Websitevenster: schuifknop .sw-handle (rechterrand), opent alleen na klik (geen auto-open uit hash), klik buiten venster sluit (pointerdown-capture + klik-handler in 3D).
- Verbergen: product b.off (COLL_ALL = alles, COLL = zichtbaar), item o.off (niet gebouwd voor bezoekers, wel voor beheerder), staal off.
- Concept/live: beheerder schrijft naar site/draft (DOC), bezoekers lezen site/content. Knop "Live zetten" (pub-btn, pubAsk) kopieert concept → live. window.__EP_ADMIN (backend) laat EARLY het concept laden. backend docApi.get valt alleen voor site/content terug op content.json.
- Telefoon: hamburger (.ham-btn/.ham-menu) bovenin, tabbar weg, venster laat 40px strook vrij met schuifknop.
- Juridisch: B5 (lg.order/return/privacy/terms) nl/en, PAGES.legal, links in de voet en bij producten; bewerkbaar in Teksten → Juridisch.

## 24-11 13:15 — Door naar volgend onderwerp, meelopen
- extras.js: knop .route-skip ("Door naar …") boven de routewijzer → nextSecIdx(curIndex()).
- site.js: scrollen in het venster → zichtbaar onderdeel (bovenste 22%) → nodeForSection(page,anchor) → goStation. syncLock na programmatisch scrollen. Uit te zetten: menuOpts.follow (Menu-tab).
- Beeld schuift op naast het venster: camera.setViewOffset met halve vensterbreedte (zacht).

## 24-11 13:45 — Beheer overzichtelijk, route instelbaar, snel materialen
- Admin-tabs gegroepeerd (Begin/Collectie/Over mij/Gebouw/Algemeen) + nieuw tabblad Overzicht (startAdmin, tegels met stand van zaken, concept/live-status). ADM_TABS in site.js; standaard admTab="start".
- Route: content.route {order:{ruimte:[objIds]}, skip:[ids]} (normRoute, ROUTE). makeRoute sorteert standaard (routeRank, hoek) en daarna stabiel op eigen volgorde (routeCmp), overgeslagen items geen station. Tab Route (routeAdmin/routeAdminBind, rtLabel).
- Personaliseren per product: kleuren komen uit draft.swatches; knoppen "+ Nieuw materiaal / kleur", "+ Nieuwe detailkleur", "+ Nieuw beslag" (admExtraBind, data-swnew) maken direct een staal aan. Per collectie: "Alle tassen aan/uit" (data-colcust).
- Opslaan-knoptekst/lead uitgelegd (concept vs Live zetten); "Concept weggooien".

## 24-11 23:45 — Ontwerpronde samen met ChatGPT (gesprek "Designreview Elizian Website" in haar ChatGPT)
- Licht: lantaarns 2700K/26, nachthemel koeler (hemi), exposure lager overdag, productspots smal/schuin van voren (accent), zon binnen in kamers ×0.12 en warme avond-hemi binnen (site.js-lus; walnoot ×2.4), roomBoost 's nachts, lampen met lokaal PointLight (lampLights, niet op mobiel), plafond-lijnverlichting (M.cove/coveMats), gouden uur (timeSel "golden", zon ~7°).
- Materialen: fijnere kalk (plasterTex), contact dieper blauw + bronzen plint + rustiger eiken, walnoten panelen met naden en lichter, collectie warmgrijze steen, rotondevloer minder spiegelend (Reflector 0x5a5a5a, opacity .94).
- Objecten: bronzen lijst om tekstborden, messing naamplaatjes (plaqueP), contactschaduw onder vloeritems (buildObj), bank donkerbrons, nieuwe types bureau/fauteuil/vloerlamp (+tafellamp), DECOR2 (vlag decor2): schrijftafel + 2 fauteuils + vloerlamp in Contact, fauteuil + vloerlamp in Over mij. Uitnodiging op bureau → formulier "afspraak" (o.afspraak).
- Entree: hero.sub + CTA's "Ontdek de collectie" / "Verken het gebouw". Vloerpijlen messing en kleiner. Borden minder fel (warm papier).

## 25-11 00:45 — Ronde 3+4 met ChatGPT: materialen, meubels, productlicht
- Nieuw bestand parts/quality.js (build.py plakt het achter site.js, vóór start). Procedurele PBR: qNoise/qFbm (naadloos), qNormal (hoogte→normal), qSet (kleur+normal+roughness). Recepten: qTravertine, qWalnut (panelen 75 cm, naden), qOak (planken 20 cm, 1,8–2,4 m, textuur = 2,4 m → repeat 1/2.4), qPlaster (spaanbewegingen), qLeatherMaps, qLinenMaps, qBrushed. qLeather(hex) = leer met nerf.
- Vervangt bij het laden: M.stone/stoneTrim/marble, M.brass/gold/bronze/bronzeFrame, M.darkwood/darkTop, FURN.*, rotondevloer normal/roughness; themeMats() gewrapt (walnoot, nachtblauw, boutique).
- Meubels opnieuw: OB.bureau (140×68×74, lade, taps), OB.fauteuil (biezen, kuip, 7°), OB.bank (128×44), qTableLamp/OB.vloerlamp (LatheGeometry kappen, PointLight 2.8), OB.vitrine (glas opacity .055, bronzen profielen, leren plateau), OB.stalen (stalen, garens, beslag), standGeo blok met afgeronde randen en eigen textuur-offset.
- Productlicht: productLight(G,top,o) — 1 spot per product in de rotonde (max 11), van voren (−.2, top+1.2, .95) → (0, top+.25, 0), hoek .24, penumbra .65, 's nachts 32 / overdag 8. accent() verwijst hierheen.
- Fout witte vlak contactbord: monoDraw gebruikte F(...,"serif","500") → ongeldig font → reuzenletter. Opgelost.
- Avond: roomBoost 1.6, hemi binnen +.55 (walnoot ×3.2, nachtblauw ×2.2), lampen 2.8, kapgloed .2. Nachthemel blauwer, sterren ×.6. Vloerpijlen max 6.
- DECOR2 bureau nu naast de looproute (x −12.9, 90°).

## Ronde 5 (25-11, ochtend)
- Personalisatie: alleen de 11 Odessa-kleuren (Weinheimer) voor leer en details (ids body_od_* / acc_od_*); oude kleuren verwijderd via normSw-migratie. Beslag ongewijzigd.
- Pre-order route (parts/preorder.js, PAGES.preorder): model → leer → details → garen → beslag → afspraakkaart (canvas, PNG-download, "Verstuur aanvraag" vult formulier). Geen initialen. Knoppen op Collectie-pagina (data-spre).
- Materiaalladenkast OB.ladenkast (DECOR3-migratie, id dc3_co_kast in Collectie), laden schuiven open via userData.drawer.
- Koepel: kalkstuc. Rotondevloer: scherpe 2048px-textuur. accent() richt weer van→naar (wandkunst).
- Etalages: verdikte wand eromheen (ingebouwd), smalle bronzen negge.
- Kamers: ROOM_H 4.2, borden 72%, planten op ware grootte, nieuwe clubfauteuil, About: koeler walnoot + natuurlijk eiken; Contact: gerookt eiken visgraat.
- Productpaspoort (idee 8): later.

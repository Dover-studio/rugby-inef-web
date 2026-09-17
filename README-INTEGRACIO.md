# Rugby INEF Barcelona · Redisseny V2

Aquest paquet ja inclou les fotografies i logos organitzats com has demanat:

```text
rugbyinef-redisseny-v2/
├── index.html
├── styles.css
├── script.js
├── imatges/
│   ├── Rug_1.png
│   ├── Rug_2.png
│   ├── Rug_3.jpg
│   ├── ...
│   └── Grada_Verda.jpg
└── patrocinadors_i_logos/
    ├── Comarca-Photoroom.png
    ├── Logo_fisioeixample_web_Mesa de trabajo 1 copia 7.png
    ├── Logo Belushi's blanc.png
    ├── INEF_original_sense fons.png
    └── INEF_sense blanc_sense fons.png
```

## Fitxers modificats / creats

- `index.html`: home redissenyada amb hero, club, propers partits, equips, juga amb nosaltres, notícies, galeria, patrocinadors i footer.
- `styles.css`: estils professionals, esportius i responsive.
- `script.js`: menú mòbil i pestanyes de partits femení/masculí.
- `imatges/`: fotografies de rugby.
- `patrocinadors_i_logos/`: logos del club i patrocinadors.

## On editar els propers partits

A `index.html`, busca aquests comentaris:

```html
<!-- EDITA AQUÍ ELS PARTITS FEMENINS -->
```

```html
<!-- EDITA AQUÍ ELS PARTITS MASCULINS -->
```

Cada partit és una targeta `<article class="rib-match-card">`. Per afegir-ne un de nou, copia una targeta existent i canvia:

- Local / Visitant
- Competició
- Rival
- Data
- Hora
- Lloc
- Enllaç de “Veure detalls”

## Com deixar un equip sense partits

Dins del panell corresponent:

1. Amaga o elimina el bloc `.rib-match-grid`.
2. Treu l'atribut `hidden` del paràgraf `.rib-empty-state`.

Exemple:

```html
<p class="rib-empty-state">Encara no hi ha partits programats. Torna aviat per consultar el calendari.</p>
```

## Com integrar-ho a la web existent

Opció ràpida:

1. Copia les carpetes `imatges/` i `patrocinadors_i_logos/` a l'arrel del projecte.
2. Substitueix o adapta el contingut de la home amb el `index.html` d'aquest paquet.
3. Copia el CSS de `styles.css` al teu `styles.css` actual o substitueix-lo si vols provar el disseny directament.
4. Copia el JS de `script.js` al teu `script.js` actual.

## Imatges principals utilitzades

- Hero: `imatges/Rug_8.jpg`
- Equip femení: `imatges/Rug_7.jpeg`
- Equip masculí: `imatges/Rug_10.jpg`
- Crida “Juga amb nosaltres”: `imatges/Rug_1.png`
- Notícies i galeria: diverses fotografies de la carpeta `imatges/`

## Notes

- No hi ha llibreries externes.
- No hi ha cookies.
- Els noms de les imatges i logos s'han mantingut tal com els has passat.
- Les classes CSS estan prefixades amb `rib-` per evitar conflictes amb altres parts de la web.


## V4 - Ajust patrocinadors

- El logo de Comarca s'ha convertit a blanc.
- Els tres logos principals de patrocinadors s'han retallat al contingut real per eliminar marges transparents.
- S'ha ajustat el CSS perquè Comarca, Fisioeixample i Belushi's tinguin una presència visual més equilibrada.


## V5 - Hero inicial més centrat

- S'ha reduït l'espai entre el navbar i el text principal del hero.
- El hero ara calcula millor l'alçada disponible de pantalla.
- S'ha ajustat la mida màxima del títol perquè no quedi tallat en pantalles baixes.
- La fotografia de fons del hero s'ha reposicionat per mantenir millor el focus visual dels jugadors.


## V6 - Pàgina Club i reorganització

Canvis aplicats:
- S'ha creat `club.html` amb el mateix disseny visual de la web.
- A la navbar, l'enllaç "Club" ara porta a `club.html`.
- S'ha eliminat temporalment la secció d'Equips de la home perquè es pugui recol·locar més endavant.
- A la secció inferior del hero ja no apareixen els blocs de femení/masculí; s'han substituït per dades generals del club.
- El footer també apunta a `club.html`.

Contingut de `club.html`:
- Hero de pàgina.
- Orígens del club.
- Dades principals.
- Cronologia.
- Bloc de Les Osses.
- Palmarès destacat.
- Crida final per formar part del club.

Nota: revisa les dades històriques amb el club abans de publicar-les definitivament, especialment càrrecs actuals i palmarès actualitzat.


## V7 - Classificació a Partits

Canvis aplicats:
- S'ha creat la carpeta `escuts_equips/`.
- S'han extret els escuts de la captura de classificació enviada.
- La fila `COQUES/INEF BCN` fa servir l'escut oficial del Rugby INEF Barcelona del projecte, no l'escut petit de la taula.
- A la secció `Propers partits`, dins la pestanya femenina, s'ha afegit una taula de classificació amb les dades de la captura.
- La pestanya masculina manté l'espai preparat amb una taula pendent d'actualitzar.

Per editar la classificació:
- Obre `index.html`.
- Busca `Classificació femenina` o `Classificació masculina`.
- Modifica les files `<tr>` de la taula.
- Els escuts estan a `escuts_equips/`.


## V8 - Classificació simplificada i escuts normalitzats

Canvis aplicats:
- La classificació ara té l’estructura demanada: número, escut, nom de l’equip i punts.
- Cada fila queda en horitzontal, amb només la informació essencial.
- Cada escut té una classe pròpia al CSS:
  - `.rib-crest--tarragona`
  - `.rib-crest--sant-cugat`
  - `.rib-crest--valkinyoles`
  - `.rib-crest--gotics`
  - `.rib-crest--quimic`
  - `.rib-crest--inef`
  - `.rib-crest--buc`
- Els fitxers de `escuts_equips/` s’han normalitzat perquè visualment ocupin una mida semblant.
- La fila del Rugby INEF Barcelona continua destacada amb el verd del club.

Per ajustar visualment un escut concret:
- Obre `styles.css`.
- Busca la classe de l’escut, per exemple `.rib-crest--inef`.
- Modifica `width` i `height` només d’aquella classe.


## V9 - Classificació detallada

Canvis aplicats:
- Es manté l’estructura clara de número, escut i nom de l’equip.
- S’ha recuperat la taula detallada com a la captura: J, G, E, P, PF, PC, DP, AF, AC, BO, BD i Punts.
- Cada escut continua tenint la seva pròpia classe CSS per ajustar la mida individualment.
- La taula té scroll horitzontal en pantalles petites per no trencar el disseny.
- La fila `COQUES/INEF BCN` continua destacada i manté l’escut oficial del Rugby INEF Barcelona.


## V10 - Classificació sense scroll horitzontal

Canvis aplicats:
- S'ha eliminat el `min-width` que obligava a fer scroll horitzontal.
- La taula ara fa servir `table-layout: fixed` i amplades proporcionals per columna.
- S'han compactat paddings, mida de lletra i escuts perquè totes les columnes càpiguen dins del contenidor.
- La classificació continua sent detallada i manté totes les columnes: J, G, E, P, PF, PC, DP, AF, AC, BO, BD i Punts.


## V11 - Classificació masculina

Canvis aplicats:
- S'ha afegit la classificació masculina amb les dades de la captura enviada.
- S'han creat nous escuts dins `escuts_equips/`:
  - `cr_sant_cugat_xv.png`
  - `geieg.png`
  - `vpc_andorra_b.png`
  - `rc_cornella.png`
  - `rc_badalona.png`
  - `rc_senglars.png`
  - `cr_spartans.png`
  - `rinyoles_rc.png`
- La fila `CR INEF BCN` fa servir el logotip oficial del Rugby INEF Barcelona.
- S'han afegit classes CSS pròpies per a cada escut masculí.
- Es manté la taula detallada i sense desplaçament horitzontal.


## V12 - Cards de propers partits amb escuts

Canvis aplicats:
- S'han canviat els partits d'exemple femenins:
  - INEF Barcelona vs CR Sant Cugat B · 17:30 h · Camp: FOIXARDA
  - BUC B/SENGLARS vs INEF Barcelona · 00:00 h · Camp: TORROELLA
- S'han canviat els partits d'exemple masculins:
  - CR INEF BCN vs CR Spartans · 10:00 h · Camp: FOIXARDA
  - RC Cornellà vs CR INEF BCN · 16:45 h · Camp: PILAR PONS
- A les cards de partit s'ha afegit un bloc nou amb noms dels equips i escuts a sota.
- S'ha canviat l'etiqueta `Lloc` per `Camp`.
- S'han creat classes CSS específiques per als escuts dins de les cards.


## V13 - Cards de partit reajustades

Canvis aplicats:
- Els escuts dels dos equips ara apareixen a dalt.
- Els noms dels equips apareixen just a sota de cada escut.
- Només hi ha un únic `VS`, col·locat al centre de la card.
- Els dos equips queden alineats a la mateixa altura.
- S'ha eliminat el segon `VS` que apareixia dins del bloc d'escuts.


## V14 - Ajust cards de partit

Canvis aplicats:
- S'ha reduït la mida del text dels noms dels equips dins les cards de partit.
- S'ha creat una classe nova `.rib-match-info` per al bloc de Data, Hora i Camp.
- El bloc Data/Hora/Camp ara queda més net, alineat i professional.
- Aquest canvi només afecta les cards de partits i no modifica altres apartats de la web.


## V15 - Ajust final cards de partit

Canvis aplicats:
- A Data / Hora / Camp, les etiquetes de l'esquerra ara estan en negreta.
- Els valors de la dreta ara tenen pes normal, sense negreta.
- Els escuts i noms dels equips dins les cards de partit s'han alineat amb una graella interna.
- El VS queda centrat verticalment respecte als dos equips.
- Aquest canvi només afecta les cards de partits.


## V16 - Ajust espai i majúscules als propers partits

Canvis aplicats:
- S'ha reduït l'espai vertical entre els escuts i els noms dels equips dins les cards de propers partits.
- Els noms dels equips dels propers partits ara estan en majúscules.
- També s'ha afegit `text-transform: uppercase` al CSS perquè si s'editen manualment els noms, continuïn sortint en majúscules.


## V17 - Cards de propers partits més amples

Canvis aplicats:
- S'ha fet més ample només el bloc de les dues cards dels propers partits.
- La taula de classificació de sota no s'ha modificat.
- Els noms dels equips dins les cards ara intenten quedar en una sola línia.
- En mòbil, les cards continuen passant a una sola columna perquè no es trenqui el disseny.


## V18 - Calendari dinàmic

Canvis aplicats:
- S'ha eliminat l'apartat antic de propers partits amb cards i classificacions.
- S'ha afegit un calendari mensual dinàmic.
- El calendari permet anar al mes anterior i següent.
- Es mostren tots els dies del mes.
- Quan selecciones un dia, a la dreta apareixen els esdeveniments d'aquell dia.
- Els esdeveniments es poden editar dins `script.js`, al bloc:
  `// EDITA AQUÍ ELS ESDEVENIMENTS DEL CALENDARI`

Per afegir un esdeveniment:
```js
'2026-01-10': [
  {
    type: 'match',
    time: '17:30 h',
    title: 'INEF BARCELONA vs CR SANT CUGAT B',
    description: 'Equip femení · Camp: FOIXARDA'
  }
]
```

Tipus disponibles:
- `match`
- `training`
- `club`


## V19 - Calendari + classificacions

Canvis aplicats:
- Es manté el calendari dinàmic de la V18.
- S'ha recuperat la classificació que hi havia abans a sota del calendari.
- S'han afegit pestanyes per veure la classificació femenina i masculina.
- La secció de classificacions queda independent del calendari, però dins el mateix bloc informatiu de temporada.
- S'han restaurat els escuts necessaris dins `escuts_equips/`.


## V20 - Espai calendari/classificació

Canvis aplicats:
- S'ha reduït l'espai vertical entre el calendari i la classificació.
- S'ha reduït el `padding-bottom` de `.rib-calendar-section`.
- S'ha reduït el `padding-top` de `.rib-classifications`.
- També s'ha ajustat lleugerament el marge del títol de classificacions.


## V22 - Calendari automàtic sense canviar l'estil

Canvis aplicats:
- S'ha recuperat el calendari amb l'estil anterior a la V21.
- El calendari ja no està fixat manualment a gener de 2026.
- Ara s'obre automàticament al mes actual del navegador.
- La data actual avança sola cada dia gràcies a `new Date()`.
- No cal modificar el codi cada dia.


## V24 Proposta - Dia actual elegant

Proposta aplicada:
- El dia actual no pinta tota la casella de verd.
- El número del dia actual apareix dins una pastilla verda.
- S'afegeix una etiqueta petita `Avui`.
- El requadre del dia actual manté un contorn verd subtil.
- El dia seleccionat continua amb el fons fosc perquè es diferenciï clarament del dia actual.
- Si el dia actual també està seleccionat, es manté la identitat verda però sense trencar el disseny.


## V25 Proposta - Sense etiqueta Avui

Canvis aplicats:
- S'ha eliminat l'etiqueta `Avui` del dia actual.
- Es manté el número del dia actual dins una pastilla verda.
- Es manté el contorn verd subtil del dia actual.
- El dia seleccionat continua diferenciant-se amb el fons fosc.


## V26 - Correcció dia actual seleccionat

Canvis aplicats:
- El cercle del número del dia actual ara fa servir el mateix verd fosc del dia seleccionat.
- Quan selecciones el dia actual, ja no es bugueja visualment.
- Si el dia actual està seleccionat, tota la casella queda pintada amb l'estil de selecció.
- Els punts d'esdeveniments continuen visibles en blanc quan el dia actual està seleccionat.


## V27 - Ajust dia actual i títol d'esdeveniments

Canvis aplicats:
- S'ha corregit el moviment del número quan el dia actual també està seleccionat.
- El número del dia actual manté sempre la mateixa caixa interna, tant seleccionat com no seleccionat.
- S'ha evitat que el canvi de vora alteri visualment la mida de les caselles del calendari.
- S'ha reduït la mida del títol de la dreta dels esdeveniments, per exemple `3 de juliol de 2026`, perquè dates amb dos dígits no saltin tan fàcilment a una segona línia.


## V28 - Calendari de temporada masculí i femení

Canvis aplicats:
- S'han introduït els partits de temporada del CR INEF BCN masculí.
- S'han introduït els partits de temporada del COQUES/INEF BCN femení.
- Els dies amb partit masculí mostren un punt verd.
- Els dies amb partit femení mostren un punt verd fosc.
- Si juguen els dos equips el mateix dia, apareixen dos punts.
- A la dreta, cada esdeveniment indica categoria, hora, partit, jornada/fase i resultat.
- S'ha afegit una llegenda sota el títol del calendari.


## V29 - Esdeveniments amb escuts

Canvis aplicats:
- Les targetes d'esdeveniments dels partits ara mostren els escuts dels dos equips.
- L'escut és l'element principal de cada equip.
- El nom de cada equip apareix sota el seu escut.
- El resultat queda destacat sota el `VS`.
- Es mantenen els colors diferenciats per masculí i femení.


## V30 - Ajust cronologia

Canvis aplicats:
- S'ha ajustat l'etiqueta de l'any dins la cronologia del club.
- Ara `1980 -1990` no es parteix en dues línies.
- Només s'ha modificat aquest detall visual de la cronologia.


## V31 - Canvis de text

Canvis aplicats:
- A la cronologia del club, `Anys 80 i 90` s'ha canviat per `1980 -1990`.
- S'han canviat les aparicions de `Rugbi/rugbi` per `Rugby/rugby` dins dels fitxers del projecte.
- No s'han renombrat fitxers ni carpetes per evitar trencar enllaços.


## V32 - Barra social fixa

Canvis aplicats:
- S'ha afegit una barra fixa de xarxes socials a l'esquerra de la pantalla.
- Inclou Instagram, X i Facebook.
- Els enllaços obren en una pestanya nova amb `target="_blank"` i `rel="noopener noreferrer"`.
- Les icones estan fetes amb SVG dins del codi, sense carregar recursos externs ni cookies.
- En mòbil, la barra passa a la part inferior centrada per no tapar el contingut.


## V33 - Patrocinadors inferiors

Canvis aplicats:
- S'ha eliminat el logo d'INEF de l'apartat inferior de patrocinadors.
- Es mantenen només Comarca, Fisioeixample i Belushi's.
- No s'han eliminat els fitxers del logo, només s'ha tret la seva aparició en aquest apartat.


## V34 - Patrocinadors centrats

Canvis aplicats:
- Els tres patrocinadors de l'apartat inferior queden centrats.
- La graella de patrocinadors s'ha ajustat a tres columnes centrades en desktop.
- En tauleta i mòbil s'adapta a dues o una columna.


## V35 - Patrocinadors corregits

Canvis aplicats:
- S'ha corregit la graella real dels patrocinadors inferiors: `.rib-sponsors__grid`.
- Els tres patrocinadors tenen ara el mateix tamany de requadre.
- Els tres queden centrats en una graella de tres columnes.
- L'ordre és: Comarca, Fisioeixample i Belushi's.
- Els logos queden centrats verticalment i horitzontalment dins del seu requadre.


## V36 - Navegació Club

Canvis aplicats:
- El link `Club` del navbar ara porta a `index.html#club`.
- L'apartat `El Club` de la home queda com a destí principal del menú.
- El botó `Llegir història del club` continua portant a `club.html`.
- S'ha afegit `scroll-margin-top` perquè l'àncora no quedi tapada pel navbar.


## V37 - Títol classificació en una línia

Canvis aplicats:
- El títol `Classificació de la temporada` ara queda en una sola línia.
- S'ha ajustat només aquest títol perquè no es parteixi entre `la` i `temporada`.


## V38 - Subtext classificació en una línia

Canvis aplicats:
- El subtext de `Classificació de la temporada` ara queda en una sola línia en pantalla gran.
- S'ha reduït lleugerament la mida de la lletra perquè encaixi millor.
- En tauleta i mòbil torna a partir-se normalment per evitar desbordaments.


## V39 - Ajust classificació

Canvis aplicats:
- S'ha eliminat el text descriptiu sota `Classificació de la temporada`.
- Les pestanyes `Equip femení` i `Equip masculí` queden centrades damunt de la taula.
- L'etiqueta `Taula detallada` ja no té fons verd ni aparença de botó/desplegable.
- Ara queda com una etiqueta neutra informativa.


## V40 - Text introductori classificació

Canvis aplicats:
- S'ha afegit un text curt entre `Classificació de la temporada` i les pestanyes d'equip.
- Text afegit: `Selecciona l’equip que vols consultar i revisa la seva posició a la competició.`
- El text queda centrat i integrat amb l'estil de la secció.


## V41 - Text classificació centrat

Canvis aplicats:
- El text introductori de classificació queda centrat correctament sota el títol.
- S'ha dividit en dues línies controlades.
- La segona línia queda curta: `competició de temporada.`
- En mòbil el text torna a adaptar-se de manera natural.


## V42 - Text classificació estil Calendari

Canvis aplicats:
- S'ha eliminat el text amb salts manuals i `span`.
- S'ha creat la nova classe `.rib-classifications-copy`.
- El text ara té una amplada controlada i es comporta com el text de l'apartat Calendari.
- El salt de línia és natural i queda alineat correctament dins del bloc.


## V43 - Llegenda classificació

Canvis aplicats:
- S'ha ajustat la llegenda inferior de la taula de classificació.
- `BD Bonus defensiu` baixa a una segona línia.
- La mida de la lletra s'ha compactat una mica perquè la resta de conceptes encaixin millor.
- La llegenda queda centrada i més ordenada.


## V44 - BD a la mateixa línia

Canvis aplicats:
- `BD Bonus defensiu` torna a estar a la mateixa línia que la resta de la llegenda.
- S'ha compactat lleugerament la mida de la lletra de la llegenda.
- En desktop s'intenta mantenir tot en una sola línia.
- En mòbil es permet que la llegenda es reparteixi per evitar desbordaments.


## V45 - Llegenda més clara

Canvis aplicats:
- S'ha fet una mica més gran la lletra de la llegenda inferior de classificació.
- S'ha canviat el format de la llegenda a `J · Jugats`, `G · Guanyats`, etc.
- El punt separador `·` queda en verd per integrar-se amb l'estil visual.


## V46 - Navbar Calendari

Canvis aplicats:
- A la navbar, el text `Partits` s'ha canviat per `Calendari`.
- Es manté el mateix enllaç cap a l'apartat del calendari.


## V47 - Espai La vida del club

Canvis aplicats:
- S'ha reduït l'espai vertical abans de l'apartat `La vida del club`.
- L'apartat queda més proper al bloc anterior, amb una separació similar a la resta de seccions.


## V48 - Espai Actualitat / Vida de club

Canvis aplicats:
- S'ha reduït bastant l'espai entre el final de les targetes d'Actualitat i l'apartat `Vida de club`.
- S'ha ajustat el `padding-bottom` de `#noticies`.
- S'ha ajustat el `padding-top` de `#galeria`.
- La separació ara queda molt més semblant a la resta d'apartats.


## V49 - Espai encara més reduït

Canvis aplicats:
- S'ha reduït encara més l'espai entre `Actualitat` i `Vida de club`.
- El `padding-bottom` de `#noticies` passa a ser molt més compacte.
- El `padding-top` de `#galeria` també queda molt més reduït.


## V50 - Collage Vida de club completat

Canvis aplicats:
- S'han afegit al collage les fotografies que quedaven sense utilitzar:
  - `Rug_7.jpeg`
  - `Rug_9.JPG`
  - `Rug_10.jpg`
- No s'ha creat cap imatge nova: només s'ha modificat el codi HTML i CSS.
- La galeria `Rugby, equip i comunitat` ara té una composició de collage més completa.
- En desktop fa servir una graella de 6 columnes amb imatges grans i petites.
- En tauleta i mòbil es reorganitza automàticament.


## V51 - Collage abstracte

Canvis aplicats:
- S'ha substituït el collage rectangular per una composició més abstracta.
- Les fotos tenen diferents mides, posicions i petites rotacions.
- Algunes imatges se superposen lleugerament per donar sensació de collage real.
- S'han afegit formes decoratives suaus al fons amb CSS.
- No s'ha creat cap imatge nova: tot està fet amb HTML i CSS.
- En tauleta i mòbil el collage es converteix en una graella neta per mantenir la lectura.


## V52 - Collage mosaic pla

Canvis aplicats:
- S'ha substituït el collage abstracte amb rotacions per un collage pla tipus mosaic.
- Les fotos tenen diferents mides i formen una silueta irregular.
- Ja no sembla una graella rectangular perfecta.
- No hi ha rotacions ni superposicions estranyes.
- Tot està fet amb HTML i CSS, sense crear imatges noves.


## V53 - Collage sense retalls ni solapaments

Canvis aplicats:
- Les imatges del collage ara es veuen senceres amb `object-fit: contain`.
- Cap imatge comparteix espai amb una altra dins del mosaic.
- S'ha mantingut una silueta irregular perquè no sembli un rectangle perfecte.
- S'ha afegit un fons verd suau als requadres perquè les fotos encaixin millor quan no omplen tota la caixa.


## V54 - Collage tipus referència

Canvis aplicats:
- El collage s'ha refet amb un format pla similar a la referència enviada.
- Les peces formen un mosaic irregular, però ordenat.
- Cap imatge se superposa amb cap altra.
- Les fotos es veuen completes amb `object-fit: contain`.
- La mida de cada peça s'ha ajustat perquè encaixi dins del mosaic.


## V55 - Galeria restaurada

Canvis aplicats:
- S'ha restaurat l'apartat `Rugby, equip i comunitat` al format original.
- S'ha recuperat la galeria tal com estava abans de començar les proves de collage.
- Es manté la resta de la web igual que a la versió anterior.


## V56 - Galeria amb totes les imatges

Canvis aplicats:
- S'han afegit a `Rugby, equip i comunitat` totes les fotografies del projecte que no estaven en aquest apartat.
- La galeria manté l'estil original, però ara s'amplia per mostrar més imatges.
- No s'ha creat cap imatge nova: només s'han afegit referències HTML i ajustos CSS.
- En desktop la galeria passa a quatre columnes.
- En tauleta i mòbil s'adapta automàticament.


## V57 - Galeria amb enquadraments ajustats

Canvis aplicats:
- S'han ajustat les mides de les fotos segons el tipus d'imatge.
- Les fotos verticals tenen més alçada.
- Les fotos de grup tenen més amplada.
- S'han afegit classes específiques per imatge per controlar millor l'enfocament.
- S'ha ajustat `object-position` perquè no es tallin caps ni parts importants.
- Es manté l'estil original de galeria.


## V58 - Galeria sense fotografies repetides

Canvis aplicats:
- S'han revisat les imatges utilitzades a `index.html` i `club.html`.
- A l'apartat `Rugby, equip i comunitat` només s'han deixat les fotos que no apareixen en cap altre apartat o pàgina.
- Les imatges repetides s'han eliminat només d'aquest apartat, tal com s'ha demanat.
- Cada fotografia queda utilitzada una única vegada dins la web.
- Imatges eliminades d'aquest apartat: imatges/Rug_1.png, imatges/Rug_3.jpg, imatges/Rug_4.jpg, imatges/Rug_11.jpg, imatges/Rug_Ant_1.jpg, imatges/Rug_Ant_2.jpg, imatges/Rug_Ant_3.jpg, imatges/Grada_Verda.jpg.
- Imatges mantingudes en aquest apartat: imatges/Rug_5.jpg, imatges/Rug_6.jpg, imatges/Rug_8.jpg, imatges/Rug_2.png, imatges/Rug_7.jpeg, imatges/Rug_9.JPG, imatges/Rug_10.jpg.


## V59 - Galeria sense retalls

Canvis aplicats:
- La galeria `Rugby, equip i comunitat` passa a un format tipus masonry.
- Les fotos mantenen la seva proporció real.
- Ja no hi ha alçades fixes ni `object-fit: cover`, així que no es tallen caps ni parts importants.
- Les imatges verticals i horitzontals s'adapten de manera natural.
- Es mantenen només les fotos que no apareixen en altres apartats.


## V60 - Galeria amb estructura tipus referència

Canvis aplicats:
- La galeria `Rugby, equip i comunitat` passa de masonry a un mosaic pla.
- L'estructura segueix una silueta irregular similar a la referència enviada.
- Cap foto se superposa amb cap altra.
- Les fotos es veuen completes amb `object-fit: contain`.
- Es mantenen només les fotos que no apareixen en altres apartats.


## V61 - Mosaic sense requadre verd

Canvis aplicats:
- S'ha mantingut l'estructura tipus mosaic.
- S'ha eliminat el requadre verd de cada imatge.
- S'ha eliminat el padding intern i el borde.
- Les fotos queden netes, sense marc artificial.
- Les imatges continuen veient-se completes dins del mosaic.


## V62 - Galeria de 7 imatges equilibrada

Canvis aplicats:
- S'ha creat una nova distribució per a les 7 imatges restants.
- La mida de cada imatge s'ha triat segons el seu format perquè es vegi millor.
- S'ha eliminat l'estil de mosaic amb requadres buits.
- Les fotos omplen el seu espai de manera professional.
- S'han ajustat els punts de focus amb `object-position` perquè no es tallin elements importants.
- La galeria s'adapta en desktop, tauleta i mòbil.


## V63 - Galeria completa sense solapaments

Canvis aplicats:
- S'ha eliminat la graella amb alçades fixes.
- S'ha eliminat `object-fit: cover`.
- Les imatges ara mantenen la seva proporció real i es veuen completes.
- Cap imatge se superposa amb una altra.
- També s'ha eliminat el moviment amb `transform` al passar el ratolí per sobre.


## V64 - Galeria quadrada de 6 imatges

Canvis aplicats:
- S'ha tret `Rug_8.jpg` de la galeria.
- `Rug_2.png` puja al lloc que quedava després de `Rug_6.jpg`.
- La galeria queda formada per 6 imatges.
- La imatge del jugador xutant ocupa tota l'alçada de les tres files de l'esquerra.
- Les 6 imatges formen una composició quadrada i ordenada.
- Cap imatge se superposa i totes es veuen completes.


## V65 - Galeria editorial professional

Canvis aplicats:
- S'ha eliminat el collage de graella forçada.
- La galeria passa a una composició editorial més professional.
- La imatge del jugador xutant actua com a foto protagonista a l'esquerra.
- La resta de fotos queden ordenades en una composició neta a la dreta.
- Les imatges mantenen la seva proporció real i es veuen completes.
- No hi ha superposicions, retalls ni requadres artificials.


## V66 - Ajust de composició galeria editorial

Canvis aplicats:
- S'ha baixat una mica la imatge gran de l'esquerra.
- S'ha afegit una classe específica al bloc de les dues imatges petites de la dreta.
- Aquest bloc dret petit s'ha baixat perquè la imatge inferior quedi alineada més bé amb la part baixa de la imatge gran esquerra.
- En tauleta i mòbil aquests offsets es desactiven perquè la composició responsive no es trenqui.


## V67 - Ajust d'alineació a la galeria editorial

Canvis aplicats:
- S'ha baixat lleugerament la foto d'equip superior de la dreta.
- S'ha deixat més espai entre la foto d'equip i les imatges inferiors.
- S'ha baixat més el bloc dret de dues imatges petites.
- La imatge inferior dreta queda més alineada amb la imatge inferior del bloc central.
- El responsive de tauleta i mòbil es manté net, sense offsets.


## V68 - Galeria segons el dibuix

Canvis aplicats:
- La galeria s'ha refet amb una estructura fixa de 6 blocs segons el dibuix enviat.
- Esquerra: imatge gran vertical + imatge inferior.
- Dreta superior: imatge ampla.
- Centre: dues imatges petites apilades.
- Dreta: imatge gran vertical.
- No hi ha offsets manuals ni superposicions.
- Les imatges es mostren completes amb `object-fit: contain`.


## V69 - Galeria sense espais blancs

Canvis aplicats:
- S'ha mantingut la distribució segons el dibuix.
- Les imatges ara omplen completament cada bloc.
- S'ha canviat `object-fit: contain` per `object-fit: cover`.
- S'han ajustat els punts de focus amb `object-position` per reduir retalls importants.
- Ja no es veuen espais blancs dins dels blocs de la galeria.


## V70 - Ajust de focus intern de la galeria

Canvis aplicats:
- Es manté exactament la mateixa distribució visual de la V69.
- S'ha ajustat la posició interna de cada fotografia amb `object-position`.
- La foto de la touche mostra millor la pilota i els jugadors.
- La foto d'equip superior queda millor centrada en les cares.
- La foto d'equip petita queda millor col·locada dins del bloc.
- La imatge vertical dreta queda més centrada en l'acció principal.
- No s'ha canviat cap imatge ni cap estructura HTML.


## V71 - Nova distribució de galeria segons el segon dibuix

Canvis aplicats:
- La galeria manté les 6 imatges.
- S'ha canviat la distribució segons el nou dibuix enviat.
- La imatge gran de l'esquerra ara ocupa les dues primeres files.
- La imatge inferior esquerra queda sota la principal.
- La imatge ampla superior ocupa les dues columnes de la dreta.
- Les dues imatges centrals queden apilades.
- La imatge gran dreta ocupa les dues files inferiors.
- Les imatges continuen omplint els blocs sense espais blancs.


## V72 - Ajust de posició interna de les fotos

Canvis aplicats:
- S'ha treballat sobre el ZIP `RUGBY_INEF.zip` enviat per l'usuari.
- S'ha mantingut la distribució actual de la galeria.
- S'ha netejat l'HTML de la secció de galeria per evitar tancaments duplicats.
- S'ha ajustat `object-position` de cada foto perquè quedin millor centrades dins del seu requadre.
- S'ha prioritzat que no es tallin caps ni elements importants.
- No s'ha editat cap imatge; només s'han modificat `index.html` i `styles.css`.


## V73 - Ajust de Rug_2

Canvis aplicats:
- S'ha ajustat només la posició interna de `Rug_2.png`.
- La imatge s'ha baixat dins del seu requadre canviant `object-position`.
- L'objectiu és que les cares i els caps quedin menys tallats.
- No s'ha modificat cap altra imatge ni la distribució de la galeria.


## V74 - Ajust patrocinadors

Canvis aplicats:
- El títol `Patrocinadors i col·laboradors` queda forçat en una sola línia.
- S'ha eliminat la frase descriptiva inferior de l'apartat de patrocinadors.
- No s'ha modificat la resta de la web.


## V75 - Centrat del títol de patrocinadors

Canvis aplicats:
- S'ha centrat correctament el títol `Patrocinadors i col·laboradors`.
- Es manté el títol en una sola línia.
- S'ha ajustat el comportament responsive perquè en pantalles petites no es desquadri.
- No s'ha modificat cap altre apartat.


## V76 - Pàgina de formulari per jugar

Canvis aplicats:
- S'ha creat la nova pàgina `juga-amb-nosaltres.html`.
- La pàgina inclou un formulari ràpid per venir a provar amb el sènior masculí o femení.
- S'han redirigit els botons verds principals `Juga amb nosaltres` i `Contactar amb el club` cap a aquesta nova pàgina.
- S'ha afegit CSS específic per al formulari.
- La resta de la web es manté igual.


## V77 - Correccions pàgina Juga amb nosaltres

Canvis aplicats:
- S'ha corregit la navbar de `juga-amb-nosaltres.html`.
- S'ha canviat el logo de la navbar perquè es vegi correctament en aquesta pàgina.
- S'han revisat els enllaços de la navbar perquè apuntin bé a `index.html`.
- Al camp `Equip amb què vols provar`, s'han deixat només dues opcions: `Sènior masculí` i `Sènior femení`.
- S'ha eliminat l'opció `No ho tinc clar`.


## V78 - Navbar i hero del formulari igualats a la home

Canvis aplicats:
- La navbar de `juga-amb-nosaltres.html` s'ha refet amb la mateixa estructura que la pàgina principal.
- El logo, el botó hamburguesa i els atributs del menú són els mateixos que a la home.
- S'ha eliminat el wrapper `.rib-header__inner`, que feia que la navbar no quedés igual.
- Els enllaços de la navbar apunten correctament a les seccions de `index.html`.
- S'ha canviat el hero de la pàgina del formulari perquè utilitzi la mateixa estructura que la home: `.rib-hero`, `.rib-hero__grid` i `.rib-hero-card`.
- S'ha eliminat el `padding-top: 120px` que generava massa espai entre la navbar i el contingut.
- S'ha mantingut el formulari i les seves opcions actuals.


## V79 - Centrat logo Fisioeixample

Canvis aplicats:
- S'ha afegit un ajust CSS específic per al logo de `Fisioeixample`.
- El logo queda centrat dins del seu requadre de patrocinador.
- S'ha ajustat lleugerament la posició vertical del logo.
- No s'ha modificat cap altre patrocinador ni cap altra secció.


## V80 - Nova pàgina Botiga

Canvis aplicats:
- S'ha afegit l'enllaç `Botiga` a la navbar.
- S'ha creat la nova pàgina `botiga.html`.
- La pàgina de botiga mostra un missatge de `Pròximament`.
- S'ha mantingut l'estil visual de la web.
- La botiga queda preparada per desenvolupar-la més endavant.


## V81 - Correcció duplicat Botiga

Canvis aplicats:
- S'ha eliminat el duplicat de `Botiga` a la navbar principal.
- S'ha revisat la navbar de `index.html`, `club.html`, `juga-amb-nosaltres.html` i `botiga.html`.
- Ara només apareix una vegada l'enllaç `Botiga`.


## V82 - Footer de Botiga amb logotip

Canvis aplicats:
- S'ha substituït el footer de `botiga.html` pel footer de la pàgina principal.
- Ara la pàgina de Botiga té el logotip al footer igual que la resta de pàgines.
- No s'ha modificat cap altra secció.


## V83 - Notícia Memòria del club

Canvis aplicats:
- S'ha ajustat la posició interna de la imatge de la notícia `Memòria del club`.
- La imatge baixa una mica dins del requadre perquè no talli tant els caps.
- Només el botó `Llegir més` de la notícia `Memòria del club` redirigeix ara a `club.html`.
- Els altres dos botons `Llegir més` de les notícies no s'han modificat.


## V84 - Links patrocinadors i footer Botiga

Canvis aplicats:
- S'han afegit els links reals dels patrocinadors:
  - Comarca: https://www.instagram.com/comarca_lhocal/?hl=es
  - Fisioeixample: https://fisioeixample.setmore.com
  - Belushi's: https://belushis.com/barcelona-las-ramblas
- Els links dels patrocinadors s'obren en una pestanya nova.
- S'ha tret `Propers partits` del footer de `botiga.html`.


## V85 - Ajustos previs sense zona de socis

Canvis aplicats:
- S'han eliminat els enllaços clicables d'`Avís legal`, `Política de privacitat` i `Política de cookies`.
- Els textos legals continuen visibles al footer, però no es poden clicar.
- S'ha eliminat el checkbox del formulari `He llegit i accepto...`.
- A les notícies `Crònica de jornada` i `La grada verda`, el botó `Llegir més` ara mostra `Pròximament` i no és clicable.
- La notícia `Memòria del club` continua portant a `club.html`.
- No s'ha creat ni modificat cap apartat de socis, tal com s'ha demanat.


## V86 - Reparació pàgina formulari

Canvis aplicats:
- S'ha restaurat correctament `juga-amb-nosaltres.html`, que havia quedat trencada a la V85.
- Es manté tota la pàgina del formulari: navbar, hero, formulari i footer.
- S'ha eliminat només el checkbox de privacitat.
- Els textos legals del footer continuen visibles però no clicables.
- Es manté la resta de canvis de la V85.


## V87 - Footer sense Propers partits i favicon

Canvis aplicats:
- S'ha tret qualsevol aparició de `Propers partits` dins dels footers.
- S'ha creat `favicon.png` amb el logotip del club sobre fons blanc.
- S'ha creat també `favicon.ico` per compatibilitat amb navegadors.
- S'ha afegit el favicon a totes les pàgines HTML.
- El títol de la pestanya principal ara és `Rugby - INEF Barcelona`.


## V88 - Favicon sense fons blanc

Canvis aplicats:
- S'ha substituït el favicon amb fons blanc per un favicon transparent.
- Ara a la pestanya del navegador només es veu el logotip, sense requadre blanc exterior.
- Es manté el títol `Rugby - INEF Barcelona`.


## V89 - Formulari connectat a Supabase

Canvis aplicats:
- El formulari de `juga-amb-nosaltres.html` ja no utilitza `mailto`.
- Ara envia les dades a la taula `solicituds_jugar` de Supabase.
- Connexió feta amb `fetch`, sense afegir llibreries externes.
- S'ha afegit validació bàsica de camps obligatoris i email.
- S'ha afegit missatge d'estat: enviant, enviat correctament o error.
- Aquesta versió encara no envia correu automàtic; primer guarda les dades a Supabase.


## V90 - Correcció camps Telèfon i Experiència

Canvis aplicats:
- S'han normalitzat els noms dels camps del formulari.
- El camp `telefon` ara es guarda correctament a Supabase.
- El camp `experiencia` ara es guarda correctament a Supabase.
- El JavaScript ara és més robust i accepta diferents variants de noms de camp.
- `notes_internes` continua sense omplir-se des del formulari públic perquè és un camp intern per gestionar sol·licituds des de Supabase.


## V99 - Socis amb CSS dins del mateix HTML

Canvis aplicats:
- `socis.html` inclou un `<style>` intern amb tot el disseny de Socis.
- Això evita problemes de cache o conflictes amb `styles.css`.
- Es manté també `styles.css?v=99` i `script.js?v=99`.
- Hero amb fons verd i imatge.
- Avantatges en targetes.
- Accés de soci/a en targeta amb formulari en columna.
- Números 01, 02, 03 al costat dels títols.
- Es manté la connexió amb Supabase.


## V100 - Ajust visual Socis

Canvis aplicats:
- S'ha centrat verticalment la targeta `Consulta de perfil` respecte al bloc de l'esquerra.
- La targeta ja no queda tan enganxada a dalt dins l'apartat d'accés.
- S'ha actualitzat el cache busting a `styles.css?v=100` i `script.js?v=100`.


## V101 - Hero de Socis en verd sense foto

Canvis aplicats:
- El primer bloc de `socis.html` ara ocupa la primera pantalla com el hero principal.
- S'ha eliminat la foto de fons del hero de Socis.
- El fons ara és verd amb degradat i formes suaus, mantenint el text en blanc.
- S'ha actualitzat el cache busting a `styles.css?v=101` i `script.js?v=101`.


## V102 - Hero Socis amb foto de fons

Canvis aplicats:
- El hero de `socis.html` torna a tenir foto de fons gran.
- S'ha mantingut el format de primera pantalla completa.
- No hi ha cap foto/card petita a la dreta.
- S'ha actualitzat el cache busting a `styles.css?v=102` i `script.js?v=102`.


## V103 - Email automàtic per formulari Juga amb nosaltres

Canvis aplicats:
- S'ha afegit una Supabase Edge Function a `supabase/functions/notificar-solicitud-jugar/index.ts`.
- Quan el formulari `Juga amb nosaltres` es guarda correctament a Supabase, ara intenta enviar un email.
- Destinatari per defecte: `dave.gili2004@gmail.com`.
- S'ha creat `README-EMAIL-AUTOMATIC.md` amb les instruccions de desplegament.
- La web continua funcionant encara que l'email no estigui configurat.

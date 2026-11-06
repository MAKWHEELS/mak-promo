# mak-promo — locandine interattive
> Qui sono pubblicate solo le copie per gli agenti (`<agente>/<campagna>/`): le pagine base `<campagna>/` non si tengono più in questo repo.

Versione web delle locandine promo: una cartella per campagna, pubblicata su GitHub Pages
(`makwheels.github.io/mak-promo/<campagna>/`). Il link si manda su WhatsApp al posto
dell'immagine: l'anteprima mostra la locandina (`anteprima.jpg`, 1200×630, tag `og:image`),
il tocco apre la pagina con bottoni e ricerca.

## halloween-ruotino (25 ott – 1 nov 2026)

- `locandina.jpg`: la locandina originale (estratta dal PDF sulla Scrivania).
- `index.template.html`: la pagina da modificare a mano; `index.html` si genera.
- Ricerca vettura → ruotino dai dati del configuratore NPK (`../noproblemkit/dati/ruotini.csv`).
- In promo = ruotino in acciaio fino a 17" (regola in `PROMO` dentro la pagina).
- Bottone WhatsApp con l'ordine già scritto, conto alla rovescia, chiamata, B2B.

Rigenera: `python3 _build/build.py`

## kit-gomma-ruota (stagione invernale, montaggio gratuito fino al 31/12/2026)

- `locandina.jpg`: la locandina con il flash, da `../Locandine/kit-gomma-ruota-inverno/locandina-flash.html`.
- `index.template.html` da modificare a mano; `index.html` lo genera `_build/build.py` con dentro marche e modelli del configuratore NPK (`../noproblemkit/dati/veicoli.csv`).
- `kit.webp`: foto del kit Davinci scontornata (ruota che gira scorrendo la pagina).
- Richiesta kit guidata: foto del libretto oppure marca → modello → anno, misura, preferenze ruota (silver, nero, diamantato, prezzo promo; anche più di una), invernale/4 stagioni, TPMS, quantità → messaggio WhatsApp già scritto.
- Con il libretto il bottone verde apre il menu Condividi (foto + testo, poi WhatsApp e makwheels); dove non si possono condividere file apre la chat e chiede di allegarlo. La foto non passa da nessun server.
- Barra fissa in alto «Vuoi un preventivo? Compila la richiesta» che porta al form e sparisce quando lo si raggiunge.
- Conto alla rovescia al 31/12 in fondo alla pagina; a promo finita diventa «Chiedimi le offerte attive».
- Anteprima: `_build/anteprima-kit-gomma-ruota.html` → `anteprima.jpg` (Chrome senza finestra, 1200×630).

## prossima-fermata-futuro (storia sull'IA, senza scadenza)

- Storia in 8 scene: il treno «Intelligenza Artificiale», chi sale e chi resta sulla banchina; le stazioni cambiano nome (Futuro → Presente → Passato).
- Disegni SVG generati da `../Locandine/prossima-fermata-futuro/scene.py`; `build.py` nella stessa cartella scrive la locandina (clienti e colleghi) e `index.html` da `index.template.html` (le scene vanno al posto di `<!--__SCENE__-->`).
- Visore a storie: tocco a destra/sinistra, swipe, frecce; tabellone a palette nella scena 5, braccio animato nelle scene 6-7. Niente conto alla rovescia.
- Anteprima: `../Locandine/prossima-fermata-futuro/anteprima.html` → `anteprima.jpg`.

## fix-pack (Fix Pack 2026, 154,00 €, senza scadenza)

- `locandina.jpg`: la locandina ricevuta (853×1280, da Downloads il 2026-10-26).
- `index.html` scritto a mano (nessun dato incorporato): i 7 kit della locandina sono in `KIT` dentro la pagina, codici verificati sul database ordini.
- Schede dei kit da toccare per aggiungerli; ordine a righe (menu codice + quantità + togli), «+ Aggiungi riga», «+ Fix Pack completo», nome officina facoltativo → messaggio WhatsApp con codici e quantità.
- Niente conto alla rovescia (la locandina non ha scadenza). Barra in alto che porta all'ordine.
- Anteprima: `_build/anteprima-fix-pack.html` → `anteprima.jpg`; icona da `_build/icona-fix-pack.html`.

## refill-multisens (Refill 20 MATE MULTIsens MP6, 15,90 € cad. + IVA, senza scadenza)

- `locandina.jpg`: da `../Locandine/refill-multisens/locandina.html` (PNG/PDF clienti e colleghi nella stessa cartella).
- `index.html` scritto a mano: tre righe fisse (930000MP6R Rubber, 93000MP6BM Metal Black, 930000MP6M Silver) con il campo pezzi, barra verso i 20 minimi (anche misti), bottoni «20 Rubber», «20 Metal Silver», «Azzera», totale indicativo a 20,40 € sotto il minimo e a 15,90 € da 20 in su, risparmio, messaggio WhatsApp con codici e pezzi.
- Foto: sensori ritagliati dallo screenshot B2B, MA41 da `Video Avatar/Immagini/MATE/MATE MA41.png`, scontornati con `../Locandine/refill-multisens/scontorna.py`.
- Anteprima: `_build/anteprima-refill-multisens.html`; icona: `_build/icona-refill-multisens.html`.

## refill-autel-mx (Refill 20 AUTEL MX, 18,47 € cad. + IVA, senza scadenza)

- Stessa struttura di `refill-multisens/`: locandina da `../Locandine/refill-autel-mx/locandina.html` (disco nero perché lo strumento è rosso), tre righe fisse (93000000MXG Rubber, 9300000MXB Metal Black, 93000000MX Silver), da 22,45 € a 18,47 €, bottoni «20 Rubber», «20 Metal Silver», «Azzera».
- Foto: sensori ritagliati dallo screenshot B2B, AUTEL TS508 WF da `Video Avatar/Immagini/MATE/MATE/`.
- Anteprima: `_build/anteprima-refill-autel-mx.html`; icona: `_build/icona-refill-autel-mx.html`.

## riempicarrello (12 articoli «riempicarrello» del B2B, senza scadenza)

- Dati degli articoli in `prodotti.js` (codice, nome, descrizione, prezzo netto, listino barrato): la fonte è `../Locandine/riempicarrello/prodotti.js`, usata anche dalla locandina; se cambia, ricopiarla qui insieme alle foto.
- `foto/<codice>.png` ritagliate dagli screenshot del carrello B2B del 2026-10-26.
- Una scheda per articolo con quantità, riepilogo con totale + IVA e risparmio sui listini, messaggio WhatsApp con quantità, codici e prezzi.
- Anteprima: `_build/anteprima-riempicarrello.html`; icona: `_build/icona-riempicarrello.html`.

## adblue (AdBlue by Azotal, 4 confezioni, senza scadenza)

- Dati in `prodotti.js` (codice, litri, confezione, prezzo, trasporto 30 € a bancale Nord e Toscana): la fonte è `../Locandine/adblue/prodotti.js`, presi dalla locandina MAK ufficiale nell'eBook agenti (copia del 2026-10-03); se cambia, ricopiarla qui.
- `foto/`: fustino, fusto e cisterna da `Video Avatar/Immagini/MAK/` senza la scritta «ordine min.», più la foto di gruppo.
- Scala del prezzo al litro animata, una scheda per confezione con i bancali, riepilogo con merce, trasporto e totale + IVA, messaggio WhatsApp con codici, litri e totale; scheda «Perché Azotal» dalla scheda tecnica SP10.
- Anteprima: `_build/anteprima-adblue.html`; icona: `_build/icona-adblue.html`.

## calze-light-espositore (starter kit 10 paia Multigrip Light + espositore da banco, 188,40 € + IVA)

- `kit.js` generato da `../Locandine/calze-light-espositore/genera_dati.py`: le 483 misure → taglia Light dall'app `../mak-calze-neve/data/socks.json` e il «mix più ordinato» da 10 paia calcolato sulle righe d'ordine delle Light (nella pagina va solo il mix). Dopo averlo rigenerato, ricopiarlo qui.
- Ricerca taglia larghezza → serie → diametro, bottone «+ Al kit» che ricorda la misura; kit con 9 taglie, contatore x/10, «Mix più ordinato», «Azzera»; messaggio WhatsApp con taglie, codici 73000SSL0x, paia e misure.
- Foto vere: espositore da `Video Avatar/Immagini/NPK/espositore calze.jpg` (le altre due foto dell'espositore in quella cartella sono generate e non vanno usate), ruota con la Light ritagliata dalla promo push NPK di ottobre 2025 (eBook).
- Anteprima: `_build/anteprima-calze-light.html`; icona: `_build/icona-calze-light.html`.

## calze-neve (calze da neve NPK, tutte le linee, senza promo, con i prezzi netti al paio)

- `dati.js` generato da `../Locandine/calze-neve/genera_dati.py` dalle tabelle di `../mak-calze-neve/data/socks.json`: 685 misure → taglia di The Original (TG.69–97, `73000SS0xx`), Re-Grip (1–9, `73000SSE0x`), Multigrip Light (1–9, `73000SSL0x`), EZ Urban (XS–XXXL, `73000EZ…`, XXXL `7300EZXXXL`). Codici verificati sul database ordini. Grip 3D esclusa: NPK la dà «fine linea». Prezzo netto al paio + IVA per linea (dal 2026-11-02, scelto da makwheels: listino al rivenditore −38%, come negli ordini da un paio): Original 32,24 €, Re-Grip 24,80 €, Light 18,60 €, EZ Urban 15,50 € (XXXL compresa). Dopo averlo rigenerato, ricopiarlo qui.
- Ricerca larghezza → serie → diametro con taglia e codice di tutte e 4 le linee e «+ Aggiungi» (due bottoni dove la tabella EZ dà XXL o XXXL); ordine a righe con paia, «+ Aggiungi» a mano (linea + taglia), officina, «Svuota l'ordine» → WhatsApp con linea, taglia, codice, paia e misura.
- Foto: prodotti ritagliati dalle schede del sito NPK (`../mak-calze-neve/assets/`), The Original grande da `Video Avatar/Immagini/NPK/NPK-calza da neve.png`.
- Locandina: `../Locandine/calze-neve/locandina.html` (PNG/PDF clienti e colleghi). Anteprima: `_build/anteprima-calze-neve.html`; icona: `_build/icona-calze-neve.html`.

## distanziali-xilema (pubblica, SENZA prezzi)

- `dati.js` generato da `../Locandine/distanziali-xilema/genera_dati.py` dal dataset in chiaro dell'app con PIN (`../mak-distanziali-xilema/data/distanziali.plain.json`, non versionato): vettura, anni, fissaggio, note, interasse, centraggio, spessore e i tre codici. I prezzi non escono mai (lo script lo controlla). Dopo un file Xilema nuovo: build dell'app con PIN, poi `genera_dati.py`, poi ricopiare qui.
- Marca → vettura → scheda con interasse, centraggio, fissaggio e note toccabili (testo del catalogo Xilema 2016), spessori con i codici delle tre varianti; un tocco sul codice lo aggiunge alla richiesta (coppie); messaggio WhatsApp con codici, spessori, varianti e vettura, che chiede prezzo e disponibilità.
- Foto: le 4 tipologie ritagliate dalla pagina del catalogo Xilema (`../mak-distanziali-xilema/assets/tipo-*.jpg`), schiarite. Avvertenza Xilema (non omologati per il codice della strada) nella locandina e nella pagina.
- Anteprima: `_build/anteprima-distanziali-xilema.html`; icona: `_build/icona-distanziali-xilema.html`.

## tergi-cora (kit spazzole tergi CO.RA. TotalFit con espositore da muro)

- Dati in `kit.js` (fonte: `../Locandine/tergi-cora/kit.js`), dal file «Promo KIT SPAZZOLE TERGI CORA - MAK Total Fit.xlsx» dell'eBook agenti (listino CO.RA. 1/5/2025, −60%; kit 140 −5% in più) e dalla campagna Mailchimp del 20/10/2026. Kit 70: 7 misure × 10 = 327,20 €; kit 140: 14 misure × 10 = 671,46 €; espositore EXPOTERGIMURO (listino 35 €) incluso.
- Foto: i due espositori da muro estratti dallo stesso Excel.
- Scelta promo 70 (−60%) o 140 (−60% −5%); tutti i 14 codici TF selezionabili in entrambe con la quantità modificabile, partendo dalla composizione della promo (`CODICI` e `PROMO` in `kit.js`, netti = listino × sconto, arrotondati come nel file CO.RA.); contatore verso 70/140, risparmio sul listino, messaggio WhatsApp con i codici scelti; pioggia animata sulla locandina.
- La foto `Video Avatar/Immagini/MAK/Espositore Tergi.png` (espositore a terra Tergiplus) non va usata: tolta su indicazione di makwheels il 2026-10-26.
- Anteprima: `_build/anteprima-tergi-cora.html`; icona: `_build/icona-tergi-cora.html`.

## canali-etrto (verifica pneumatico → canali ETRTO, senza prezzi)

- `dati.js` generato da `../Locandine/canali-etrto/genera_dati.py`, che usa la lettura dell'app `../mak-etrto-canali/data/build.py` su `Mak/Canali XLS.xlsx` (684 misure); il canale «9» senza lettera di 285/45 R19–R22 diventa «9J».
- Larghezza → serie → diametro, scala dei canali con quelli ammessi in verde, tendina «Hai già il cerchio?» con esito ammesso/fuori tabella (31 misure piccole ammettono sia J sia B: la scala usa la J, il controllo guarda la larghezza), messaggio WhatsApp con misura, canali e cerchio verificato.
- Anteprima: `_build/anteprima-canali-etrto.html`; icona: `_build/icona-canali-etrto.html`.

## trasformazioni-nad (guida alle trasformazioni NAD con i moduli da scaricare)

- Contenuti dalla pagina wiki «Omologazione delle ruote a libretto» (confermata da makwheels il 4/10/2026) e dai PDF dell'eBook agenti, sezione «Materiale supporto al cliente».
- `pdf/`: Allegato C (G.U. 13/2/2021), Allegato B (G.U. 24/6/2022) e fac-simile dei bollettini (16 € c/c 4028 + 25 € c/c 9001), copiati senza modifiche; `prev-*.png` sono le miniature della prima pagina.
- Scelta «misura non a libretto / già a libretto» che cambia il percorso (5 passi o 3), requisiti sì/no con esito (M1, libretto italiano, ruota NAD; N1 escluso), passi con il controllo del certificato NAD sul B2B e l'avviso (GS0), moduli da scaricare, richiesta WhatsApp con foto del libretto (menu Condividi su iPhone, la foto non passa da nessun server), vettura, misura e codice MCTC.
- Anteprima: `_build/anteprima-trasformazioni-nad.html`; icona: `_build/icona-trasformazioni-nad.html`.
- Sezione «Esempio di compilazione» (Allegato C / Allegato B con dati di fantasia, valori in blu e richiami numerati) e PDF `pdf/Esempio-compilazione-Allegati-B-C.pdf`: tutti e due generati da `../Locandine/trasformazioni-nad/genera_esempio.py`, che riscrive il blocco tra `<!--ESEMPIO-->` e `<!--/ESEMPIO-->` in `index.html`. Modificare l'esempio solo lì.

## anelli-centraggio (anelli di centraggio aftermarket in plastica, senza prezzi)

- `dati.js` generato da `../Locandine/anelli-centraggio/genera_dati.py` (va lanciato con il venv di `mak-preventivi`): 48 anelli da «Anelli di Centraggio.xlsx» (codice, esterno × interno) e 5.282 vetture con il mozzo, ricavato dal Fitment MAK (`mak-preventivi/data/fitment.sqlite`: diametro interno dell'anello indicato, o foro ruota se l'anello non serve). Dalla pagina escono solo marca, modello, tipo e mozzo.
- Testo e foto dalla bozza Mailchimp «ANELLI CENTRAGGIO 26» (novità Ø 70,1, gamma completa), video YouTube shorts/1F4fZmop28o.
- Foro del cerchio (7 esterni) → mozzo dalla vettura o dai bottoni → codice con quantità e «Aggiungi»; gamma completa per esterno con le quantità; ordine su WhatsApp con codici e pezzi. Se l'anello non c'è o non serve, la pagina lo dice e il messaggio chiede a makwheels.
- Anteprima: `_build/anteprima-anelli-centraggio.html`; icona: `_build/icona-anelli-centraggio.html`.

## Copie per i colleghi agenti (`<agente>/<campagna>/`)

- `_build/agenti.py` copia ogni campagna in `<agente>/<campagna>/` con nome, numero, link `tel:` e `wa.me` dell'agente (anche «Ciao <nome>» nei messaggi WhatsApp) e rifà `locandina.jpg` con il suo nome dalla sorgente in `../Locandine/` (fix-pack e halloween-ruotino si copiano: l'immagine non ha nome né numero).
- Agenti in `AGENTI` dentro lo script: Angelo Magnotta (+39 392 450 1782) → `…/mak-promo/angelo/`, Alberto Pianta (+39 335 522 3011) → `…/mak-promo/alberto/`, Federico Gorgoglione (+39 335 638 4363) → `…/mak-promo/federico/`, Davide Mattaliano (+39 349 051 2550) → `…/mak-promo/davide/`, Oscar Padova (+39 349 071 7481) → `…/mak-promo/oscar/`, Gianluca Giamberardino (+39 339 143 6270) → `…/mak-promo/gianluca/`, Silvana Rinaldi (+39 338 680 0250) → `…/mak-promo/silvana/`, Francesco Parisi (+39 338 259 4763) → `…/mak-promo/francesco/`, Marco Mazzotti (+39 334 113 3956) → `…/mak-promo/marco/`, Marco Cesarini (+39 345 944 3886) → `…/mak-promo/marco-cesarini/`, Michele Bracchi (+39 347 540 6935) → `…/mak-promo/michele/`, Emil Colombani (+39 333 314 0092) → `…/mak-promo/emil/`, Gerardo Giacco (+39 320 223 2932) → `…/mak-promo/gerardo/`, Enrico Galante (+39 349 772 0865) → `…/mak-promo/enrico/`, Stefania Santiglia (+39 327 902 0929) → `…/mak-promo/stefania/`, Matteo Colzani (+39 393 250 5569) → `…/mak-promo/matteo/`, Elisa Rampon (+39 331 667 4100) → `…/mak-promo/elisa/`, Mauro Galante (+39 342 092 3719) → `…/mak-promo/mauro-galante/`, Marco Podda (+39 339 860 5989) → `…/mak-promo/marco-podda/`, Domenico Sorrentino (+39 389 463 2818) → `…/mak-promo/domenico/`, Francesco Di Cesare (+39 345 850 3816) → `…/mak-promo/francesco-dicesare/`, Sebastiano Fabrotti (+39 342 353 5576) → `…/mak-promo/sebastiano/`, Mauro Pallini (+39 339 878 1190) → `…/mak-promo/mauro-pallini/`, Ivan Parisi (+39 333 801 2609) → `…/mak-promo/ivan/`. Per un collega nuovo basta una riga in `AGENTI` e `python3 _build/agenti.py <chiave>`.
- Lo script non cancella le cartelle: riscrive solo i file cambiati e tiene i file temporanei della locandina fuori dalla Scrivania (su iCloud cancellare e ricreare crea doppioni « 2»). La pagina dell'agente (`<agente>/index.html`) elenca tutte le campagne con anteprima, titolo, link, «Copia link» e «Manda su WhatsApp».
- Le copie non si modificano a mano: dopo ogni cambio a una campagna, o per una campagna nuova, `python3 _build/agenti.py` e push (per rifare solo le campagne toccate: `python3 _build/agenti.py --solo=<campagna>,<campagna>`, ~1,5 minuti per tutti). Lo script si ferma se in una pagina resta il nome o il numero di makwheels.
- Frasi valide solo per makwheels (es. «il mio video») in `FRASI`.

## ts900-rinnovi (rinnovi AUTEL TS900, senza scadenza)

- Per i clienti con la TS900 in scadenza (elenco da `../scadenze-ts900/`): aggiornamento 12 mesi (7200000029, 270 €), sblocco Full SGW (7200000046, 390 €), sblocco FCA + Maserati (7200000012, 160 €), IVA esclusa, listino MATE set–dic 2026.
- `locandina.jpg` da `../Locandine/ts900-rinnovi/locandina.html`; `ts900.png` = foto ufficiale AUTEL ritagliata.
- Vademecum «Controlla la scadenza»: Supporto › Il mio account › Informazioni personali › Informazioni dispositivo (numero di serie, scadenza = «Expired time»), dal manuale MATE del TS900, con la schermata del manuale e i riquadri rossi. La scadenza SGW non è sullo strumento: la controlla makwheels dal seriale.
- `etichetta.jpg` (foto dell'etichetta sul retro, se c'è): il riquadro si nasconde da solo se manca.
- Modulo: voci con prezzo (Full SGW esclude FCA), «controllamelo tu», numero di serie con controllo delle 12 cifre, foto dell'etichetta (menu Condividi: foto + testo verso WhatsApp, nessun server), officina, totale + IVA → messaggio WhatsApp con codici.
- «Le tue scadenze» (dal 2026-10-30): il cliente scrive il numero di serie e vede aggiornamento, Full SGW e FCA con stato (scaduto / tra N giorni / attivo); le voci da rinnovare si spuntano da sole nel modulo. Dati in `scadenze.js`, generato da `../scadenze-ts900/seriali.py` (licenze DIAGMOTIVE + 24 mesi compresi dagli ordini): niente nomi né codici cliente, seriali solo come impronta SHA-256. Per aggiornarlo: nuovo export DIAGMOTIVE in `../scadenze-ts900/dati/diagmotive-licenze.xlsx`, poi `/usr/bin/python3 ../scadenze-ts900/seriali.py` e push.
- `index.html` scritto a mano. Anteprima: `_build/anteprima-ts900-rinnovi.html`; icona: `_build/icona-ts900-rinnovi.html`; prova a 390 px: `_build/prova-ts900.html`.


## cavalletto-ez-jack-45s (cavalletto ruota universale, 239,00 € + IVA, cod. 7600000CRU, senza scadenza)

- `locandina.jpg`: da `../Locandine/cavalletto-ez-jack-45s/locandina.html` (PNG/PDF clienti e colleghi nella stessa cartella).
- `index.html` scritto a mano; `dati.js` generato da `../Locandine/cavalletto-ez-jack-45s/genera_dati.py` (Fitment MAK: marca → modello, tipo, PCD, mozzo; PCD solo dalle righe senza bulloni flottanti «BV»).
- «Monta sulla vettura?»: vettura dal Fitment o PCD + mozzo a mano → verde (in tabella del costruttore e mozzo ≤ 77), giallo (dentro 98–130 ma fuori tabella, 4×135/137, più versioni), rosso (6 fori, fuori campo, mozzo > 77).
- «Regge il peso?»: massa a pieno carico (F.2) + quota dell'asse più carico (50–70%, 60% di base) → kg per ruota contro 1.587 kg.
- Ordine con pezzi e totale; il messaggio WhatsApp riporta anche vettura verificata e carico.
- Anteprima: `_build/anteprima-cavalletto-ez-jack-45s.html`; icona: `_build/icona-cavalletto-ez-jack-45s.html`; prova a 390 px: `_build/prova-cavalletto.html`.

## assistenza-mate (assistenza telefonica gratuita per i clienti con strumenti MATE e Autel, senza prezzi)

- Servizio Clienti MATE **392 098 1064**, dal lunedì al venerdì in orario d'ufficio, support@mate-tech.it (scelta di makwheels del 2026-11-03; il cellulare di Pepe non va pubblicato).
- **Chiama e WhatsApp vanno all'assistenza, non all'agente** («non facciamo assistenza»): `tel:+393920981064` e `wa.me/393920981064`. Nelle copie dei colleghi il numero resta quello; cambiano solo la firma e la riga «Il mio agente MAK» del messaggio.
- «La procedura della tua auto»: marca → modello → tipi di procedura e link all'app Apprendimento TPMS (`…/mak-tpms-relearn/#/<marca>/<modello>`) e alla scheda MATE in PDF. Dati in `marche.js`, generato da `_build/assistenza-mate-dati.py` da `../mak-tpms-relearn/data/brands.json`: rilanciarlo quando cambia l'app.
- «Prepara la richiesta»: strumento, di cosa hai bisogno, officina (il seriale non serve, tolto il 2026-11-03) → messaggio WhatsApp all'assistenza con anche la vettura e l'agente.
- Locandina: `../Locandine/assistenza-mate/locandina.html` (foto vera MA41 + TS508 da `Video Avatar/Immagini/MATE/`). Anteprima: `_build/anteprima-assistenza-mate.html`; icona: `_build/icona-assistenza-mate.html`.

## Monitoraggio (dal 2026-11-03)

- Ogni pagina include `conta.js` (`<script src="/mak-promo/conta.js" defer></script>` prima di `</body>`) e la riga «Conteggio anonimo delle visite, senza cookie.» nel footer. Le copie dei colleghi lo ereditano; la pagina elenco del collega lo include con `data-elenco`.
- Conta aperture e tocchi su WhatsApp, Chiama, B2B e mail. Le ricerche arrivano dal blocco «ricerche per il contatore anonimo» in fondo alle pagine che ne hanno una: calze-neve, calze-light-espositore, canali-etrto, anelli-centraggio, distanziali-xilema, halloween-ruotino, kit-gomma-ruota, cavalletto-ez-jack-45s, assistenza-mate.
- Il server è il Worker in `../mak-promo-conta/` (README con cosa si salva e cosa no). I numeri si leggono nel briefing del lunedì.
- Campagna nuova: script e riga nel footer, più l'aggancio della ricerca se c'è. `_build/agenti.py` si ferma se manca `conta.js`.

## multisens-plus (promo lancio MATE MULTIsens+, 9–22 novembre 2026)

- Fonte: email di Salvatore Pepe del 2026-11-04 «Arriva MATE MULTIsens+ e PROMO LANCIO 9–22 novembre» (Mail Mak 2026, id 106944) + presentazione PDF allegata (`../Locandine/multisens-plus/presentazione-mate-multisens-plus.pdf`).
- 14,00 € + IVA a sensore, minimo 40 pezzi (560,00 € + IVA, spedizione inclusa); Rubber, Metal Silver e Metal Black miscelabili a multipli di 10. Sul B2B dal 9/11, sezione Promozioni.
- Conto alla rovescia: prima del 9/11 conta alla partenza («lo inserisci appena parte»), poi alla fine del 22/11; dopo diventa «Chiedimi le offerte attive».
- Ordine a passi di 10 per versione, barra verso i 40, mix rapidi; messaggio WhatsApp con le versioni (i codici articolo non sono ancora stati comunicati).
- Dal 2026-11-04 (richiesta di makwheels) la pagina mostra il **volantino ufficiale MAK/MATE** (`../Locandine/multisens-plus/volantino-mate-multisens-plus.png` → `locandina.jpg`, copiato com'è anche nelle copie dei colleghi: `SORGENTE_LOCANDINA` = None). Le foto di Rubber, Metal Silver e Metal Black (`ms-*.png`) sono ritagliate dal volantino. MA41 e VT57 dalla presentazione. Sezione «Prima aggiorna l'ATEQ» e link all'assistenza MATE.
- Anteprima: `_build/anteprima-multisens-plus.html`; icona: `_build/icona-multisens-plus.html`.

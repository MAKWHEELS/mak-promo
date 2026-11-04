/* Articoli «riempicarrello» del B2B MAK (screenshot di makwheels del 2026-10-26).
   Prezzi netti IVA esclusa; listino = prezzo barrato, 0 se non c'è. Unica fonte per locandina e pagina web. */
const PRODOTTI = [
  {cod:"7600000013", nome:"Sacchi per ruote MAK", sub:"Confezione da 100 sacchi", prezzo:60.00, listino:0},
  {cod:"7800000EZD", nome:"NPK EZ Drive", sub:"Kit accessori auto: estintore, torcia LED, guanti, etilometro…", prezzo:61.38, listino:99.00},
  {cod:"7800000EZR", nome:"NPK EZ Repair", sub:"Kit riparazione pneumatici con compressore", prezzo:22.75, listino:35.00},
  {cod:"7800000SDB", nome:"Slime Plug Kit", sub:"Kit 9 pezzi per riparare le forature", prezzo:14.00, listino:0},
  {cod:"8000000959", nome:"Set bulloni JEEP", sub:"B225L24517 · M12x1,25 · chiave 17 · Renegade, Compass", prezzo:10.00, listino:15.79},
  {cod:"8050000902", nome:"Set dadi FORD", sub:"N250519-C · M12x1,5 · chiave 19", prezzo:10.00, listino:15.79},
  {cod:"93I0000006", nome:"Avvitatore 231GXP", sub:"Ingersoll Rand 1/2\" · 610 Nm", prezzo:100.00, listino:0},
  {cod:"93000TR413", nome:"Valvole TR413", sub:"Confezione da 100 valvole", prezzo:12.50, listino:0},
  {cod:"93000TR414", nome:"Valvole TR414", sub:"Confezione da 100 valvole", prezzo:12.50, listino:0},
  {cod:"9300000335", nome:"Pesi adesivi silver", sub:"50 strisce da 12 pesi da 5 g", prezzo:7.80, listino:9.00},
  {cod:"9300000336", nome:"Pesi adesivi black", sub:"50 strisce da 12 pesi da 5 g", prezzo:9.80, listino:12.70},
  {cod:"9300000337", nome:"Set 5 bussole impact", sub:"Rivestite in teflon, con valigetta", prezzo:18.00, listino:0}
];
const euro = n => n.toFixed(2).replace(".", ",") + " €";

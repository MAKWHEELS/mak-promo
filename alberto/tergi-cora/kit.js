/* Promo kit spazzole tergi CO.RA. TotalFit con espositore da muro (EXPOTERGIMURO, listino 35 €, incluso).
   Fonte: «Promo KIT SPAZZOLE TERGI CORA - MAK Total Fit.xlsx» (eBook agenti, listino CO.RA. 1/5/2025, sconto −60%; kit 140 −5% in più)
   e campagna Mailchimp del 20/10/2026 (prezzo medio 4,70 € a spazzola). Prezzi netti + IVA. Unica fonte per locandina e pagina web. */
const KITS = {
  "70": {nome:"Kit 70", foto:"espositore-70.jpg", totale:327.20, sconto:"−60%", misure:[
    ["TF350",350,14,4.40],["TF400",400,16,4.40],["TF450",450,18,4.40],["TF500",500,20,4.40],
    ["TF550",550,22,5.04],["TF600",600,24,5.04],["TF650",650,26,5.04]]},
  "140": {nome:"Kit 140", foto:"espositore-140.jpg", totale:671.46, sconto:"−60% −5%", misure:[
    ["TF330",330,13,4.18],["TF350",350,14,4.18],["TF380",380,15,4.18],["TF400",400,16,4.18],["TF450",450,18,4.18],
    ["TF480",480,19,4.18],["TF500",500,20,4.18],["TF530",530,21,4.788],["TF550",550,22,4.788],["TF580",580,23,4.788],
    ["TF600",600,24,4.788],["TF650",650,26,4.788],["TF700",700,28,4.788],["TF750",750,30,9.158]]}
};
const PEZZI = 10; /* spazzole per misura */
const LISTINO = {fino500:11.00, fino700:12.60, mm750:24.10};
const euro = n => n.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €";

/* Tutti i 14 codici TotalFit con il listino CO.RA. 1/5/2025: selezionabili in entrambe le promo.
   Promo 70 = −60% sul listino; promo 140 = −60% e un ulteriore −5%. */
const CODICI = [
  ["TF330",330,13,11.00],["TF350",350,14,11.00],["TF380",380,15,11.00],["TF400",400,16,11.00],["TF450",450,18,11.00],
  ["TF480",480,19,11.00],["TF500",500,20,11.00],["TF530",530,21,12.60],["TF550",550,22,12.60],["TF580",580,23,12.60],
  ["TF600",600,24,12.60],["TF650",650,26,12.60],["TF700",700,28,12.60],["TF750",750,30,24.10]
];
const PROMO = {"70": {sconto: 0.40, testo: "−60%"}, "140": {sconto: 0.40 * 0.95, testo: "−60% −5%"}};

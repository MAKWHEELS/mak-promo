/* AdBlue by Azotal: confezioni, codici e prezzi dalla locandina MAK ufficiale
   (eBook agenti, «Prodotti e promozioni attive › Altro › Miscellanea», copia del 2026-10-03).
   Prezzi IVA esclusa, trasporto escluso; ogni confezione è un bancale. Unica fonte per locandina e pagina web. */
const CONFEZIONI = [
  {cod:"9400000013", litri:200,  nome:"200 litri",   dett:"20 fustini da 10 L", foto:"fustino.jpg", prezzo:215.00},
  {cod:"9400000015", litri:750,  nome:"750 litri",   dett:"75 fustini da 10 L", foto:"fustino.jpg", prezzo:585.00},
  {cod:"9400000011", litri:800,  nome:"800 litri",   dett:"4 fusti da 200 L",   foto:"fusto.jpg",   prezzo:600.00},
  {cod:"9400000010", litri:1000, nome:"1.000 litri", dett:"1 cisterna da 1.000 L", nota:"imballo a perdere", foto:"cisterna.jpg", prezzo:645.00}
];
const TRASPORTO = 30; /* € a bancale, Nord e Toscana */
const euro = n => n.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €";
const alLitro = c => (c.prezzo / c.litri).toFixed(3).replace(".", ",") + " €/L";

/* conta.js — contatore anonimo delle locandine (makwheels.github.io/mak-promo).
 * Conta solo l'apertura della pagina e i tocchi sui link WhatsApp. Niente cookie, niente testo dei messaggi.
 * /mak-promo/<agente>/ (data-elenco) · /mak-promo/<agente>/<campagna>/ · /mak-promo/<campagna>/ (agente «base»)
 * Se qualcosa va storto non succede niente: la pagina funziona lo stesso.
 */
(function () {
  var ENDPOINT = "https://mak-promo-conta.mak-promo-conta.workers.dev/e";
  var me = document.currentScript;
  var elenco = !!(me && me.hasAttribute("data-elenco"));

  var parti = location.pathname.replace(/^\/mak-promo\/?/, "").split("/").filter(function (p) { return p && p.indexOf(".") < 0; });
  var agente = "base", campagna = "";
  if (elenco) { agente = parti[0] || "base"; campagna = "_elenco"; }
  else if (parti.length >= 2) { agente = parti[0]; campagna = parti[1]; }
  else { campagna = parti[0] || ""; }
  if (!/^[a-z0-9_-]{2,40}$/.test(campagna)) return;

  function invia(t) {
    try {
      var corpo = JSON.stringify({ a: agente, c: campagna, t: t });
      if (navigator.sendBeacon && navigator.sendBeacon(ENDPOINT, corpo)) return;
      fetch(ENDPOINT, { method: "POST", body: corpo, keepalive: true, mode: "no-cors" }).catch(function () {});
    } catch (e) {}
  }

  window.conta = function () {}; // le pagine chiamano conta("ricerca", …): qui non si conta

  invia("apertura");

  document.addEventListener("click", function (e) {
    try {
      var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
      if (!a) return;
      var h = a.href || "";
      if (h.indexOf("wa.me/") >= 0 || h.indexOf("api.whatsapp.com") >= 0 || h.indexOf("whatsapp://") === 0) invia("whatsapp");
    } catch (err) {}
  }, true);
})();

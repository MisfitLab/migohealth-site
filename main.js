// Language detection only. Spanish browsers get the Spanish copy; everyone else gets English.
// The copy for both languages is in index.html; styles.css shows one set based on <html lang>.
(function () {
  var lang = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
  document.documentElement.lang = /^es\b/i.test(lang) ? 'es' : 'en';
})();

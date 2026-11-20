// Données factices ; deux routes côté client pour vérifier le repli index.html (recharger /a-propos doit marcher).
const villes = [
  { nom: 'Lyon', temp: 14, ciel: 'Nuageux', vent: 18 },
  { nom: 'Marseille', temp: 19, ciel: 'Ensoleillé', vent: 32 },
  { nom: 'Lille', temp: 9, ciel: 'Pluie', vent: 25 },
  { nom: 'Bordeaux', temp: 16, ciel: 'Éclaircies', vent: 12 },
  { nom: 'Strasbourg', temp: 7, ciel: 'Brouillard', vent: 6 },
];

const pages = {
  '/': () => `<table><tr><th>Ville</th><th>Temp.</th><th>Ciel</th><th>Vent</th></tr>${villes
    .map((v) => `<tr><td>${v.nom}</td><td>${v.temp} °C</td><td>${v.ciel}</td><td>${v.vent} km/h</td></tr>`)
    .join('')}</table>`,
  '/a-propos': () => '<p>Page « À propos » servie par le routage côté client (aucun fichier a-propos.html).</p>',
};

const afficher = () => {
  document.getElementById('app').innerHTML = (pages[location.pathname] ?? (() => '<p>Page introuvable.</p>'))();
};

document.querySelectorAll('[data-lien]').forEach((a) =>
  a.addEventListener('click', (e) => {
    e.preventDefault();
    history.pushState(null, '', a.getAttribute('href'));
    afficher();
  }),
);
addEventListener('popstate', afficher);
afficher();

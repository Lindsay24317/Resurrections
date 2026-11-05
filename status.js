
function modifierStatut(id) {
  // Récupérer les objets enregistrés
  const objets = lireObjets();

  // Rechercher l'objet concerné
  const objet = objets.find(o => o.id === id);

  // Vérifier que l'objet existe
  if (!objet) return;

  // Modifier son statut
  if (objet.statut === "réparé") {
    objet.statut = "en attente";
  } else {
    objet.statut = "réparé";
  }

  // Sauvegarder la modification
  sauverObjets(objets);
}

// Clé de stockage dans le navigateur
const CLE = "repaircafe.adherents";

// Lire les objets sauvegardés (tableau vide si rien)
function lireAdherents() {
    return JSON.parse(localStorage.getItem(CLE)) || [];
}

// Sauvegarder le tableau d'objets
function sauverAdherents(adherents) {
    localStorage.setItem(CLE, JSON.stringify(adherents));
}

// Afficher la liste — ATTENTION : utilisez textContent, jamais innerHTML avec une saisie utilisateur !
function afficher() {
    const ul = document.getElementById("adherents");
    ul.replaceChildren();
    for (const a of lireAdherents()) {
        const li = document.createElement("li");
        li.textContent = `${a.nom} ${a.prenom} - ${a.date} - ${a.statut}`;// TODO : afficher l'objet, le statut...
        ul.append(li);
    }
}

document.getElementById("adherents-form-inscription").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const adherents = lireAdherents();
    adherents.push({ id: Date.now(), nom: data.get("nom-adherent"), prenom: data.get("prenom-adherent"), statut: "actif", date: data.get("date") });
    sauverAdherents(adherents);
    e.target.reset();
    afficher();
});

afficher();
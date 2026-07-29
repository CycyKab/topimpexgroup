# Top Impex Company SARL — Site Web Premium

## Structure du projet

```
tic-website/
├── index.html          ← Page d'accueil (construite)
├── css/
│   └── style.css       ← Feuille de style globale (thème sombre, glassmorphism)
├── js/
│   └── main.js         ← Préchargeur, révélations au scroll, compteurs animés, menu mobile
├── assets/
│   ├── images/
│   │   └── logo.png    ← Ton logo (déjà en place)
│   ├── video/
│   └── icons/
```

## Fichiers médias à ajouter

Dépose simplement tes fichiers dans les bons dossiers, aux noms attendus par le code (ou dis-moi les noms que tu préfères et j'ajuste le HTML) :

| Emplacement attendu | Contenu |
|---|---|
| `assets/video/hero.mp4` | Vidéo cinématique du hero (chantier, engins, soudure...) |
| `assets/images/hero-poster.jpg` | Image de secours affichée avant que la vidéo charge |
| `assets/images/intro-team.jpg` | Photo ingénieurs sur site (section "Qui nous sommes") |
| `assets/images/human-capital.jpg` | Grande photo d'équipe (section "Capital humain") |

## Pages restantes à construire

On avance page par page comme convenu :

1. ✅ **Accueil** (`index.html`)
2. ✅ **À propos** (`about.html`) — Documents/Certifications (confidentiels), carte Google Maps, galerie de projets (remplace l'ancien "Capital humain")
3. ✅ **Services** (`services.html`) — les 10 divisions en détail
4. ✅ **Galerie** (`gallery.html`) — grille de projets réalisés, avec lightbox au clic
5. ✅ **Carrières** (`careers.html`) — culture, formulaire de candidature avec upload CV
6. ✅ **Blog** (`blog.html` + `blog-article.html`) — listing + modèle d'article à dupliquer
7. ✅ **Demander un devis** (`quote.html`) — formulaire en 4 étapes (infos, projet, documents, résumé)
8. ✅ **Contact** (`contact.html`) — formulaire, coordonnées, réseaux sociaux (Facebook, LinkedIn, Instagram), carte
9. ⬜ Page 404

Dis-moi ce que tu veux ensuite.

## Notes importantes

- **Formulaires (Carrières, Contact, Devis)** : sans backend, un site statique ne peut pas envoyer d'e-mail avec pièce jointe automatiquement. Chaque formulaire ouvre le client mail avec les infos pré-remplies ; il faudra joindre les fichiers manuellement. Pour un envoi 100% automatique (avec fichiers), il faudra un service comme Formspree, ou un petit backend plus tard.
- **Documents & Certifications (À propos)** : les boutons de visualisation directe ont été retirés — les documents sont désormais présentés comme confidentiels, communiqués uniquement sur demande via la page Contact.
- **Galerie de projets** : dépose tes photos de chantiers réels dans `assets/images/gallery-01.jpg` à `gallery-07.jpg` (et `gallery-teaser.jpg` pour la vignette sur la page À propos). Chaque tuile a un titre et une description modifiables directement dans `gallery.html` (attributs `data-title` / `data-desc`).
- **CTA avec fond flou** : les CTA finales de Services (`cta-services.jpg`) et Carrières (`cta-careers.jpg`) attendent une image de fond, volontairement floutée en CSS pour rester discrète derrière le texte.

## Ouvrir le projet dans VS Code

1. Décompresse le dossier `tic-website`
2. Ouvre-le dans VS Code (`File > Open Folder`)
3. Installe l'extension **Live Server** pour prévisualiser avec rechargement automatique
4. Clique droit sur `index.html` → **Open with Live Server**

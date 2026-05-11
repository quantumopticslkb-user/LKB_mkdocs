# Guide des Calendriers Partagés — Équipe 15B (LKB)

> Serveur Nextcloud : **https://cal.quantumoptics.fr**

---

## 1. Première connexion

### Créer votre compte / se connecter

1. Ouvrez [https://cal.quantumoptics.fr](https://cal.quantumoptics.fr) dans votre navigateur.
2. Identifiants :
   - **Login :** `prenom_nom` (ex. `quentin_glorieux`, `alberto_bramati`, `hanna_veksler`)
   - **Mot de passe initial :** `lkblkb2026`
3. **Changez votre mot de passe immédiatement** après la première connexion :  
   `Paramètres (icône en haut à droite) → Sécurité → Changer le mot de passe`

---

## 2. Groupes d'appartenance

À votre arrivée, l'administrateur vous affecte automatiquement aux groupes correspondant à votre profil.

| Groupe | Membres |
|--------|---------|
| `eq15b` | Tous les membres de l'équipe |
| `rb` | Membres de l'équipe Rb |
| `nano` | Membres de l'équipe Nano |
| `polaritons` | Membres de l'équipe Polaritons |
| `permanents` | Quentin, Alberto, Hanna |
| `phd` | Doctorants |
| `postdocs` | Post-doctorants |
| `interns` | Stagiaires |
| `visitors` | Visiteurs |

Si vous n'êtes pas dans le bon groupe, contactez l'administrateur.

---

## 3. Calendriers disponibles

### 3.1 Calendriers partagés par l'administration

L'admin partage automatiquement un ensemble de calendriers selon votre groupe d'appartenance. Chaque lab dispose de trois calendriers :

| Calendrier | Contenu | Accès |
|------------|---------|-------|
| `RbLab` / `NanoLab` / `PolaritonLab` | Infos générales du labo (réunions, manips, événements) | **Lecture / Écriture** |
| `RbOff` / `NanoOff` / `PolaritonOff` | Absences, congés, enseignement, déplacements | **Lecture / Écriture** |
| `RbInterns` / `NanoInterns` / `PolaritonInterns` | Planification des stages (arrivées, départs) | **Lecture seule** |

> Les calendriers `Interns` sont gérés par les permanents uniquement.

### 3.2 Calendriers des permanents

Chaque permanent partage un calendrier personnel avec l'équipe :

| Calendrier | Propriétaire |
|------------|-------------|
| `Quentin` | Quentin Glorieux |
| `Alberto` | Alberto Bramati |
| `Hanna` | Hanna Veksler |

### 3.3 Calendriers des autres équipes (lecture seule)

Si vous êtes dans l'équipe Rb, vous avez accès en **lecture seule** aux calendriers `NanoLab`, `NanoOff`, `PolaritonLab`, `PolaritonOff` (et réciproquement). Cela permet de coordonner les ressources partagées et de rester informé.

---

## 4. Ce que vous devez faire

### Signaler vos absences — obligatoire

Dès que vous êtes absent (congés, déplacement, enseignement, télétravail prolongé…), **ajoutez un événement dans le calendrier `Off` de votre équipe** :

- `RbOff` pour l'équipe Rb
- `NanoOff` pour l'équipe Nano
- `PolaritonOff` pour l'équipe Polaritons

Indiquez clairement la raison (ex. `Congés`, `Conférence — Paris`, `Enseignement L3`).

### Ajouter des infos de labo

Utilisez le calendrier `Lab` de votre équipe pour les événements collectifs : réunions de groupe, séminaires internes, accès à la manip, etc.

---

## 5. Calendriers personnels

Vous pouvez créer des calendriers personnels et choisir librement avec qui les partager.

**Exemples d'usage :**
- Calendrier `Bières` partagé avec le groupe `phd`
- Calendrier `Séminaires` partagé avec `permanents`
- Calendrier privé (visible par vous seul)

**Comment partager un calendrier personnel :**

1. Dans l'interface web, cliquez sur `...` à côté du calendrier.
2. Choisissez **Partager avec des utilisateurs ou des groupes**.
3. Tapez un nom de groupe (`phd`, `permanents`, `eq15b`…) ou un login individuel (`quentin_glorieux`).
4. Choisissez le niveau d'accès (lecture seule ou lecture/écriture).

Vous pouvez également garder un calendrier **entièrement privé** — il ne sera visible par personne d'autre.

---

## 6. Accès depuis votre application de calendrier

Vous pouvez synchroniser les calendriers avec votre application habituelle (Thunderbird, Apple Calendar, Google Calendar, Outlook…) via le protocole **CalDAV**.

| Paramètre | Valeur |
|-----------|--------|
| Adresse du serveur | `https://cal.quantumoptics.fr` ou `cal.quantumoptics.fr` |
| Login | `prenom_nom` |
| Mot de passe | votre mot de passe Nextcloud |

**Thunderbird (Thunderbird Calendar / Lightning) :**  
`Nouveau calendrier → Sur le réseau → CalDAV → https://cal.quantumoptics.fr`

**Apple Calendar (macOS / iOS) :**  
`Préférences → Comptes → Ajouter un compte → Autre compte CalDAV → https://cal.quantumoptics.fr`

**Android (ex. DAVx⁵) :**  
Installez [DAVx⁵](https://www.davx5.com/), ajoutez un compte avec l'URL `https://cal.quantumoptics.fr`.

---

## 7. Résumé des droits d'accès

| Calendrier | Votre équipe | Autres équipes |
|------------|:------------:|:--------------:|
| `[Votre]Lab` | ✏️ R/W | 👁️ Lecture seule |
| `[Votre]Off` | ✏️ R/W | 👁️ Lecture seule |
| `[Votre]Interns` | 👁️ Lecture seule | ✗ Non visible |
| `[Autre]Lab` | 👁️ Lecture seule | — |
| `[Autre]Off` | 👁️ Lecture seule | — |
| Calendriers permanents | 👁️ Lecture seule | — |
| Calendrier personnel | ✏️ R/W | selon votre choix |

---

## 8. Contacts et administration

Pour toute question (compte bloqué, accès manquant, calendrier non visible) :

- **Quentin Glorieux** — quentin_glorieux / [quentinglorieux@gmail.com](mailto:quentinglorieux@gmail.com)
- Ou contacter directement l'administrateur du serveur Nextcloud.

---

*Document maintenu par l'équipe Eq15B — LKB*

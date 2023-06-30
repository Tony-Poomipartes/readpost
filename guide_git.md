# Bonjour a tous

voici le guide d'utilisation git pour ce projet d'apotheose

## voici les commandes classiques

pour un commit

```bash
git add .
git commit -m" [le type de modification] : votre message pour decrire les modif que vous avez apportez"
git push
```

exemple

- `git commit -m" ✨ feat: add new routes for the API "`
- `git commit -m" 🐛 fix: fix the datamaper request"`
-

ou alors sans le git add .

```bash
git commit -a -m"[le type de modification] : votre message pour decrire les modif que vous avez apportez"
git push
```

pour afficher les precedent commit

- `git reflog`

ou bien , plus en detail

- `git log`

[git convention](https://www.conventionalcommits.org/en/v1.0.0/)/ [video](https://www.youtube.com/watch?v=AlHohDBBAMY&ab_channel=Grafikart.fr)
---

<type>

- 🧱 build: Système de build (example : gulp, webpack, npm)
- ci: Intégration continue (example scopes: Travis, Circle, BrowserStack,
SauceLabs)
- 📚 docs:      Documentation
- ✨ feat:      Ajout d'une fonctionnalité
- 🐛 fix:       Correction de bug
- 🏎 perf:     Amélioration des performances
- ➕ refactor:  Changement du code qui ne change rien au fonctionnement
- 💄  style:    Changement du style du code (sans changer la logique)
- 🔌 test:      Modification des tests

en anglais
---

- 🐛 fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
- ✨ feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
- BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
- types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the Angular convention) recommends build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.
- footers other than BREAKING CHANGE: <description> may be provided and follow a convention similar to git trailer format.

## avant de commencer la journée de code

<mark style="background-color: #F0F">toujours</mark> faire un git pull pour recuperer les dernieres mises a jour de la branche main

```bash
git pull
```

## les branches

avant de commencer une fonction , toujours creer une branche dedié puis en refaire une avec votre nom

```bash
git checkout -b[nom de votre branche]
ou
git branch [nomDeLaBranche]
puis
git checkout [nomDeLaBranche]
```

exemple

- `git checkout -b odeliceErrorController`

puis de cette branche

- `git checkout -b Tony_odeliceErrorController`

pour afficher les branches

`git branch`

supprimer une branche(vous devez avoir fusionnez vos dernier commit avant)

- `git branch -d [le nom de votre branche]`

## la merge

pour fusionner votre branche vous devez merge, le plus facile serait de le faire directement sur <mark style="background-color: #F0F">GITHUB</mark>

- cliquez sur `compare & pull resquest`
- ensuite laissez un commentaire a celui qui va valider votre pull request(optionel)
- cliquez sur  `create pull request` ou `Draft pull request` (pour forcer a une review)
- cliquez sur `Ready for review` (si `Draft pull request`)
- cliquez sur `Merge pull request` pour valider la fusion (<mark style="background-color: #F0F">toujours</mark> faire une review pour verifier les conflits)
- cliquez sur `Confirm merge`

[un probleme sur un commit ou une merge ?](https://ohshitgit.com/fr) / [la cheat sheet](https://training.github.com/downloads/fr/github-git-cheat-sheet.pdf) / [la fiche recap kourou](https://kourou.oclock.io/ressources/fiche-recap/git-et-github/)

## git stash

Git stash est une commande très utile pour les développeurs qui travaillent sur plusieurs tâches en même temps et doivent passer rapidement d'une tâche à l'autre. Git stash vous permet de sauvegarder temporairement les modifications que vous avez apportées à votre dépôt Git afin de pouvoir revenir à un état antérieur du code sans perdre votre travail. Voici comment utiliser Git stash :

- 1 Si vous avez des modifications non sauvegardées, commencez par ajouter et committer vos changements en cours de travail pour éviter de les perdre.
- 2 Exécutez la commande `git stash`. Cela enregistrera toutes les modifications non sauvegardées dans une pile de stash.
- 3 Vous pouvez maintenant basculer vers une autre branche ou effectuer d'autres tâches. Vos modifications seront sauvegardées dans la pile de stash.
- 4 Lorsque vous êtes prêt à revenir à votre travail précédent, exécutez la commande `git stash apply` pour réappliquer les modifications précédemment stockées dans la pile de stash.
- 5 Si vous avez plusieurs stash, vous pouvez lister toutes les stash disponibles avec `git stash list` et appliquer une stash spécifique avec `git stash apply stash@{numéro}`.
- 6 Si vous n'avez plus besoin de modifications sauvegardées dans la stash, vous pouvez utiliser `git stash drop` pour supprimer la stash ou `git stash clear` pour supprimer toutes les stash.
- 7 Vous pouvez également fusionner les modifications de la stash avec vos modifications actuelles en utilisant `git stash pop` qui applique et supprime la stash de la pile.
- 8 Enfin, si vous voulez enregistrer vos modifications en cours et appliquer la stash en même temps, utilisez `git stash branch <nom-de-branche>` pour créer une nouvelle branche à partir de la stash.

Voilà ! Avec ces quelques commandes, vous devriez être en mesure d'utiliser Git stash efficacement dans votre flux de travail Git.

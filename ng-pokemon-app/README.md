# NgPokemonApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

## Premier Composant

**un composant :** est un système complètement encapsulé qui contrôle une portion de l'écran : 'une vue' ou 'une fenêtre' défini dans le template du composant et la logique de cette vue sera piloté par la classe du composant. c'est donc **une classe + une vue**.

chaque composant a **un cycle de vie**. et grâcre à angular on peut modifier le comportement de la vue durant son cycle de vie à l'aide de différentes interfaces.
[image](/ng-pokemon-app/src/assets/images/interfaces_cycle-de-vie.png)
**le templateUrl :** il nous permet de définir notre template pour notre vue dans un fichier html. On passe ensuite le chemin de ce fichier dans le paramètre de ce parametre.

**la syntaxe d'interpolation :** elle permet de pousser des données du composant vers le template. Elle marche que pour les type primitif pas pour afficher des objets. Même si eelle est très utilisée, elle n'est pas la seule solution pour pousser des données du composant vers le template.
[image](/ng-pokemon-app/src/assets/images/interpolation_alternative.png)

**l'observable $event :** est un objet qui permet de pousser des données du template vers le composant. Pour récupérer les données de l'évènement on utilise on utilise la syntaxe `(event.target as HTMLInputElement).value` le InputElement est utilisé si l'évènement est causer par un input dans le template. 
Pour pousser des données du template vers le composant on peut aussi utiliser **la syntaxe de la #** en déclarant une variable référencé dans le template avec la `#`(`#var_name`). En effet combiné avec `(keyup)` (`(keyup)=fonction_du_composant(var_name.value)`) ou `keyup.enter` (qui exécutera la fonction seulement si l'utilisateur tape sur la touche entrer), on on passer cette variable directement en paramètre de notre fonction. On pourra ainsi accéder directement à cet élément sans avoir à caster quelque chose dans le composant.

on peut consulter en ligne les **pseudo évènements d'angular** pour mettre en place des évènements très précis.

## Première Directive

pour créer une, on utilise la commande `ng generate directive <nom_directive>`.

**Une Directive :** c'est une classe angular qui ressemble beaucoups à un composant sauf qu'elle n'a pas de template. d'ailleurs au sein du framework, la classe Componant hérite de la classe Directive. Elle permet d'interagir avec des éléments HTML d'une page en leur etachant un comportement spécifique. On peut même avoir plusieurs directives appliquées à un même élément. elle possède un sélecteur css qui indique au framework où l'activer dans notre temlplate.

Nous avons trois types de directives qui existent: 

**les composant** 

**les directives d'attribus :** Elles peuvent modifier le comportement des éléments HTML, des attibu, des proprétés et des composants. Elles sont représenté habituellent par des attribus au sein des balises HTML. la classe `ElementRef` nous permettra de récupérer l'élément du DOM et la classe `HostListener` nous permettra de déclencher une fonction d'évènement.

**les directives structurelle :** reponsable de la mise en forme des éléments HTML de notre page en ajoutant, rétirant ou manipulant des éléments et leurs fils. Exemple: `ngIf`, `ngFor`, ...

## les Pipes 

**Les Pipes** vont nous permet de formater des données pour qu'elles soient affichées dans notre template. On peut aussi utiliser plusieurs pipe à la fois. 

Angular nous permet de créer nos propres pipes. On la commande `ng generate pipe <nom_pipe>` ou la commande `ng generate pipe <nom_pipe> --output-dir=./src/app/pipes` pour créer un nouveau pipe.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

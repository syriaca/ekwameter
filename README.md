# Instructions

L'objectif de cet exercice est de créer une application d’affichage de données en utilisant une API que l’on met à ta disposition. Tu devras ainsi afficher des données de consommation d’un client ekWateur. Plus d’informations sont regroupées ci-dessous.

Tu as trois jours pour réaliser ce projet perso. Si tu as des empêchements qui ne te permettent pas de suffisamment avancer, n’hésite pas à nous en faire part.

Voici ce que l’on attend de toi :

1. Crée un service pour fetcher les données de consommation d’un utilisateur depuis l’API avec fetch (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
   Les routes suivantes sont à ta disposition :

- https://5e9ed3cdfb467500166c47bb.mockapi.io/api/v1/meter/
- https://5e9ed3cdfb467500166c47bb.mockapi.io/api/v1/meter/1/gas
- https://5e9ed3cdfb467500166c47bb.mockapi.io/api/v1/meter/2/electricity

2. Crée une page pour afficher ces données dans un tableau simple. Il faudra permettre à l’utilisateur d’afficher soit ses données de consommation de gaz, soit d’électricité. Tu peux afficher les informations qui te semblent pertinentes.
3. Permets à l'utilisateur de filtrer ses données par année.
4. Stylise ce tableau. Tu peux t’inspirer de notre site ekwateur.fr pour ce qui est des couleurs, des ombres, et du style graphique en général.

Il n’est pas indispensable de réaliser toutes ces étapes. Un code clair, lisible, testé, une bonne documentation sont préférables à un exercice fini mais moins rigoureux.

Toute initiative faisant preuve de tes bonnes pratiques sera la bienvenue.

Si certaines parties de l’exercice ne te paraissent pas claires ou que tu as des questions sur celui-ci, nous sommes là pour y répondre. Nous t’encourageons même à poser des questions plutôt que de rester bloqué(e) et de ne pas être sûr de ce qui t’est demandé.

Points d'attention supplémentaires : 
- Le package manager utilisé ici est yarn et non pas npm
- Le client doit être en mesure de voir son tableau sur desktop et sur mobile
- Toute autre feature non demandée (de type graphique par ex) et qui apporte un plus à l'utilisateur est bien vue

5. Mettre à disposition ton travail, sur un repository à toi ou en zip via mail.

Bon courage

## Annexe
- Meter : il s'agit du compteur. Dans notre test, il y a donc 2 compteurs, un pour l'electricité et un autre pour le gaz.
- POD (point of delivery) : équivalent d'un PDL (point de livraison) et permet d'identifier un compteur
- Index : série de chiffres que tu peux retrouver sur ton compteur d'électricité et de gaz. L'index se lit en kWh (Kilowattheure) et permet de mesurer votre consommation d'énergie en indiquant avec précision combien de kWh ont été consommés à date. 
- Heures pleines et heures creuses : Pour l'électricité, il est possible de choisir entre 2 plages tarifaires, à savoir, un tarif en "heures pleines et heures creuses" et un tarif unique qu'importe l'heure. Le gaz ne permet pas de choisir sa plage.
- IndexHigh : il s'agit de l'index pour les heures pleines (électricité et gaz)
- IndexLow : il s'agit de l'index pour les heures creuses (électricité seulement).

----------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `yarn install`

To install all dependencies.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Site url: https://65ae29de7077ff0a404d99de--voluble-griffin-864364.netlify.app/
## This is a simple app that fetches pokemons from Pokedex api and displays them on the site. 
## This site contains 3 pages: AllPokemonsPage, PokemonPage, BlankPage.
## Used technologies: React, Typescript, Axios, REST API, Redux-toolkit, sass modules.

# AllPokemonsPage components
## Filters
A tool that allows user to get pokemons of the specified type. You have just to choose a type you want to find from pop-up list and click on the 'find' button. Also you can search for a pokemon by an input field (you just need to enter pokemon's name). By pressing "Enter" button you will be redirected to the PokemonPage (in case a pokemon with searched name exists) or BlankPage (in case a pokemon with searched name does not exist).

## PokemonsList
A section that is responsible for displaying info (pokemons) from server. Each pokemon-info displayed in special component PokemonCard. So that, PokemonsList is made up of PokemonCards.

## LoadMore button
This is just a button that allows to load/show more pokemons in PokemonList section.

# PokemonPage components
## Types
This component is created for processing and displaying types values from the store in appropriate way.

## Moves
This component is created for processing and displaying moves values from the store in appropriate way.

## Stats
This component is created for processing and displaying stats values from the store in appropriate way.

## Return button
Returns to the AllPokemonsPage.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

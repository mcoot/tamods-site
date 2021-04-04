# tamods-site

Site for TAMods information and API docs

Using https://docusaurus.io

## Running the site

```console
yarn install
yarn start
```

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Publishing the site

Once changes are made and working, build the site:

`yarn build`

Then commit the result (don't delete the CNAME file!).

Then, put the build results on the gh-pages branch with:

`git subtree split --prefix /build -b gh-pages`

and force push it:

`git push -f origin gh-pages:gh-pages`
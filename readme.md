# Otto: Your Palindrome Assistant

Reverses text as you type and lights up when you have a palindrom.

## Dependancies

- parcel-bundler
- @babel/core
- @babel/preset-env
- sass

#### Babel transpiling

Babel is included and configured for transpiling at build time.

- @babel/preset-env installed
- babel configuration and browserslist are in [package.json](package.json). Adjust as needed if defaults aren't to your liking.

Run `npx browserslist` to see a list of browsers supported based on the current content of your browserslist settings.

## Installation for Development

- Clone repo and cd into root directory
- Install node dependancies with `npm i`

## Development Bundling and Server

- `npm start` to create a development build and fire up a local server.
- build files are exported to the `dist` directory

## Build for Production

- `npm run build` to create an optimised version for deployment
- build files are exported to the `dist` directory, replacing any dev files if present

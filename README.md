# create-ic-app

A template for IC projects, it uses:

- React for DOM manipulation
- TailwindCSS for styling
- Valtio as state manager
- React Router V6 for routing
- Connect2IC for auth
- ZhenyaUsenko's stable hashmap

To get started, find and replace "backend" with the name of your project in the files and filenames. Then, run `npm install`, and `npm run dev` to run your app locally.

Welcome to your new backend project and to the internet computer development community. By default, creating a new project adds this README and some template files to your project directory. You can edit these template files to customize your project and to include your own code to speed up the development cycle.

To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

To learn more before you start working with backend, see the following documentation available online:

- [Quick Start](https://sdk.dfinity.org/docs/quickstart/quickstart-intro.html)
- [SDK Developer Tools](https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html)
- [Motoko Programming Language Guide](https://sdk.dfinity.org/docs/language-guide/motoko.html)
- [Motoko Language Quick Reference](https://sdk.dfinity.org/docs/language-guide/language-manual.html)
- [JavaScript API Reference](https://erxue-5aaaa-aaaab-qaagq-cai.raw.ic0.app)
- [TailwindCSS cheatsheet](https://nerdcave.com/tailwind-cheat-sheet)

If you want to start working on your project right away, you might want to try the following commands:

```bash
cd backend/
dfx help
dfx config --help
```

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
npm run dev
```

Alternately, step by step, you can run

```bash
dfx start --background --clean
dfx deploy backend
npm run generate
vite
```

If you change the names of canisters, be sure to update those new path names in `package.json` and `dfx.json`.

Once the job completes, your application will be available at `http://localhost:8000?canisterId={asset_canister_id}`.

Additionally, if you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 8000.

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`NODE_ENV` to `production` if you are using Webpack
- use your own preferred method to replace `process.env.NODE_ENV` in the autogenerated declarations
- Write your own `createActor` constructor

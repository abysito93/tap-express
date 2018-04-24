// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCzq3UesfEtu61gV93Z7WLHpI8Jgh-u2tI",
    authDomain: "tap-express.firebaseapp.com",
    databaseURL: "https://tap-express.firebaseio.com",
    projectId: "tap-express",
    storageBucket: "tap-express.appspot.com",
    messagingSenderId: "859655583345"
  }
};

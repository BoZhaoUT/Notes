// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  navBarBackgroundColor: 'pink',
  firebase: {
    apiKey: 'AIzaSyCzzkZPxiU05vGdDdw5XVGWGFWcdM2hWiw',
    authDomain: 'fir-demo-692f0.firebaseapp.com',
    databaseURL: 'https://fir-demo-692f0.firebaseio.com',
    projectId: 'fir-demo-692f0',
    storageBucket: 'fir-demo-692f0.appspot.com',
    messagingSenderId: '802924711894'
  }
};

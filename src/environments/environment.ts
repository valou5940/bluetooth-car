// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  mapbox: {
    accessToken: 'pk.eyJ1IjoidmFsb3U1OTQwIiwiYSI6ImNqaDF1b3dtNTA3dHUzM3Bhc3p1bDByNTYifQ.7tGgcB2QltZbyozs9UbxaQ',
  },
  firebase: {
    apiKey: "AIzaSyAUyZ0f5I7dTtpTDRXfuI-MHi98OM4Yi04",
    authDomain: "bluetooth-car-station.firebaseapp.com",
    databaseURL: "https://bluetooth-car-station.firebaseio.com",
    projectId: "bluetooth-car-station",
    storageBucket: "bluetooth-car-station.appspot.com",
    messagingSenderId: "924456122921"
  }
};

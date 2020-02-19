# pwa-project

Add/wire up the ‘compression’ npm package

Add a manifest and a service worker file to allow offline use of your app; be sure to link them up in your HTML!

Study the code inside ‘db.js’ to verify you understand how we use IndexedDB as an offline database fallback

After you’ve finished your app, compress your front-end JS files (both ‘db.js’ and ‘index.js’) and output them into a ‘dist’ folder 
inside public; try to combine both files into one

BONUS: find a way to compress/minify your CSS; store this file in your ‘dist’ folder

Then link your compressed files from your HTML in place of your existing files

Be sure to deploy your app to Heroku!
const manifest = {
  "name": "My App Name",
  "short_name": "My App",
  "start_url": "index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2196f3",
  "icons": [
    {
      "src": "https://via.placeholder.com/192", 
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
};

const stringManifest = JSON.stringify(manifest);
const blob = new Blob([stringManifest], {type: 'application/json'});
const manifestURL = URL.createObjectURL(blob);
document.querySelector('#my-manifest').setAttribute('href', manifestURL);



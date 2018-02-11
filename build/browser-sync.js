// 🎌 BROWSER-SYNC FOR AUTO RELOAD JAZZ-PLUS A BETTER IMPLEMENTATION OF EXTENSIONLESS URLS 🎌
module.exports = {
 "server": "build",
 "port": "8080",
 "files": ['./build/assets/dist/style.css', './build/*.html'],
 "open": false,
 "notify": true,
 "serveStatic": [
   'build'
 ],
 "serveStaticOptions": {
   "extensions": ['html']
 }
}

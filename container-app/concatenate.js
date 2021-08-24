const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/container-app/runtime.js',
'./dist/container-app/polyfills.js',
'./dist/container-app/main.js',
]
await fs.ensureDir('elements')
await concat(files, 'elements/analytics-counter.js');
await fs.copyFile('./dist/container-app/styles.css', 'elements/styles.css')
// await fs.copy('./dist/container-app/assets/', 'elements/assets/' )
})()

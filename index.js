const { collection, renderer } = require('mkbk');
const config = require('./config');

// Create a collection project
const project = collection.parse(config);

// Generate HTML Site from a collection object
try {
    renderer.genCollectionStaticSite(project);
} catch (err) {
    console.log(err);
}

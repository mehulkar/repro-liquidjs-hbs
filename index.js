var { Liquid } = require('liquidjs');
var engine = new Liquid();

engine
    .parseAndRender('{{name | capitalize}}', {name: 'alice'})
    .then(console.log);

engine
    .parseAndRender('<div {{@foo}}></div>')
    .then(console.log);

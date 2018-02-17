var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');
var pug  = require('metalsmith-pug');

const pugOptions = {
  pretty: false,

  locals: {
    postName: 'good post name'
  },

  filters: {
    foo: block => block.replace('foo', 'bar')
  }
}

Metalsmith(__dirname)
  .metadata({
    title: "My Static Site & Blog WOWOWWW",
    description: "It's about saying »Hello« to the World.",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(pug(pugOptions))
  .use(permalinks())
  .use(layouts({
    engine: 'pug'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });

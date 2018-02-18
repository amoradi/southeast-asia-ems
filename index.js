var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');
var pug  = require('metalsmith-pug');
var sass = require('metalsmith-sass');
var assets = require('metalsmith-assets');

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
  .source('./src/scss')
  .use(sass({
    outputStyle: "expanded",
    outputDir: 'css/'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });

Metalsmith(__dirname)
  .metadata({
    title: "My Static Site & Blog WOWOWWW",
    description: "It's about saying »Hello« to the World.",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./src/pages')
  .destination('./build')
  .clean(false)
  .use(pug(pugOptions))
  .use(layouts({
    directory: './src/layouts',
    engine: 'pug'
  }))
  .use(assets({
    source: './src/assets',
    destination: './assets'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });

const source = document.getElementById('greet').innerHTML;
const template = Handlebars.compile(source);

const context = {
  greeting: 'Hello World!'
}

const compiledHtml = template(context); // replaces the Handlebars expression with the values in context

const fill = document.getElementById('hello');

fill.innerHTML = compiledHtml; // assigns the compiled HTML to the web page

// this will not work unless you are using the handlebars.min.js
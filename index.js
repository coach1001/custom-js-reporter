var fs = require('fs');
var pdf = require('html-pdf');
var Handlebars = require('handlebars')
var fs = require('fs');
var path = require('path')
var base = 'file://'+__dirname+'/report_templates/'
var options = {
  format: 'A4',
  border: {
    top: '15 px',
    bottom: '15 px',
    left: '15 px',
    right: '15 px'
  },
  base: base
};

console.log(options)

var source = fs.readFileSync('./report_templates/expense_report.tpl.html', 'utf8');
var template = Handlebars.compile(source);

var data = { "name": "Francois", "hometown": "Somewhere, TX",
             "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
var result = template(data);

fs.writeFile('test.html',result, function(err){
  if (err) {
    return console.log(err)
  } else {
    //var html = fs.readFileSync('./test.html', 'utf8');
    var html = fs.readFileSync('./report_templates/expense_report.tpl.html', 'utf8')
    pdf.create(html, options).toFile('./test.pdf', function(err, res) {
      if (err) return console.log(err);
      console.log(res);
    });
  }
})

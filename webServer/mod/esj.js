const esj = require('ejs')
var template = '<%=: movies | movies | sort | first %>'
var context = {'movies': [
        "Bambi",
        "Babe: Pig in the City",
        'Enter the Void'
    ]}
     console.log(ejs.render(template, context))
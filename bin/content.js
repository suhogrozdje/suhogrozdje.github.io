const parseArgs = require('minimist')
const slug = require('slug')
const yaml = require('yamljs');
const fs = require('fs');
const moment = require('moment');
slug.defaults.mode = 'rfc3986'

// set path (without leading/trailing slashes) relative to directory root
const path = "content/articles"

// get flags
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    t: 'title',
    s: 'section',
    h: 'help'
  },
  string: ['t', 's']
})

const cmd = process.argv[2]
switch (cmd) {
  case 'create':
    // display help if needed
    if (argv.help) {
      console.log(`
        Description
          Creates a markdown content file, compliant with nuxtent.
        Usage
          $ node content.js -s 'mathematics' -t 'Sample title'
        Options
          --title, -t         Title of the post
          --section, -s       Section of the post -- mathematics/dread/music
          --help, -h          Displays this message
      `)
      process.exit(0)
    }

    if (!argv.title || !argv.section) {
      console.error('Error: please provide a title and a section.')
      process.exit(1)
    }
    // set basic params
    const title = argv.title,
          section = argv.section,
          delimiter = '---',
          filename = moment().format('YYYY-MM-DD') + '-' + slug(title) + '.md',
          directory = [path, section].join('/'),
          fullPath = [__dirname, '..', path, section, filename].join('/'),
          prettyPath = [section, filename].join('/')

    const content = [
      delimiter,
      yaml.stringify({title, abstract: 'Provide an abstract here.'}).trim(),
      delimiter,
      'Provide markdown here.'
    ].join('\n')

    if (fs.existsSync(fullPath)) {
      console.error('Error: file ' + prettyPath + ' already exists.')
      process.exit(1)
    }

    fs.writeFile(fullPath, content, function(err) {
      if(err) {
        console.error("Error: there was a problem in writing file. Make extra sure that directory " + directory + " exists and that you have permissions to write in it. More details below.\n")
        console.error(err);
        process.exit(1)
      } else {
        console.log("Success: " + prettyPath + " saved, go edit it.");
        process.exit(0)
      }
    });

    break;
  default:
    console.error('Error: no command provided.')
    process.exit(1);
}

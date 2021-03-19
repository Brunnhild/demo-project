const fs = require('fs')
const parse = require('csv-parse/lib/sync')
const path = require('path')

const input = path.join(__dirname, './data_1.csv')
const records = parse(fs.readFileSync(input, {
  encoding: 'utf8'
}), {
  columns: true,
  skip_empty_lines: true
})

console.log(Object.keys(records[0]))

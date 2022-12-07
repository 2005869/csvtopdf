var Reader = require('./classes/Reader');
var Processor = require('./classes/Processor');
var Table = require('./classes/Table');
var HtmlParser = require('./classes/HtmlParser');
var Writer = require('./classes/Writer');
var PDFWriter = require('./classes/PDFWriter');

var reader = new Reader();
var writer = new Writer();

async function main(){
    var data = await reader.Read('./users.csv');
    var dataProcess = Processor.Process(data);

    var users = new Table(dataProcess);
    
    var html = await HtmlParser.Parse(users);

    var filename = Date.now();

    writer.Write(filename + '.html', html);

    PDFWriter.WritePDF(filename + '.PDF', html);
}

main();
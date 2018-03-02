/**
 * Created by chaika on 02.02.16.
 */
var fs = require('fs');
var ejs = require('ejs');

exports.TutorialsMenu_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/TutorialsMenu_OneItem.ejs', "utf8"));

exports.GeneratorMenu_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/GeneratorMenu_OneItem.ejs', "utf8"));
exports.WorkshopField_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/WorkshopField_OneItem.ejs', "utf8"));


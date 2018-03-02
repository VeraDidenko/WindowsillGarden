var Templates = require('../Templates');
var Generator_List = require('../Item_List');
var $generator_list = $("#field");
var WorkshopItems = require('./WorkshopItems');

function showGeneratorList(list) {
    function showOneGenerator(links) {
        var html_code = Templates.GeneratorMenu_OneItem({item: links});
        var $node = $(html_code);
        $node.click(function(){
            WorkshopItems.addToField(links);
        });
        $generator_list.append($node);
    }
    list.forEach(showOneGenerator);
}

function initialiseGeneratorList() {
    showGeneratorList(Generator_List);
}
exports.initialiseGeneratorList = initialiseGeneratorList;
var Templates = require('../Templates');
var Herb_List = require('../Herb_List');
var $herb_list = $("#herbs");

function showHerbList(list) {
    function showOneHerb(herb) {
        var html_code = Templates.TutorialsMenu_OneItem({link: herb});
        var $node = $(html_code);
        $herb_list.append($node);
    }
    list.forEach(showOneHerb);
}

function initialiseMenuHerb() {
    showHerbList(Herb_List);
}
exports.initialiseMenuHerb = initialiseMenuHerb;
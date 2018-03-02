var Templates = require('../Templates');
var Succulent_List = require('../Succulent_List');
var $succulent_list = $("#succulents");

function showSucculentList(list) {
    function showOneSucculent(succulent) {
        var html_code = Templates.TutorialsMenu_OneItem({link: succulent});
        var $node = $(html_code);
        $succulent_list.append($node);
    }
    list.forEach(showOneSucculent);
}

function initialiseMenuSucculent() {
    showSucculentList(Succulent_List);
}
exports.initialiseMenuSucculent = initialiseMenuSucculent;
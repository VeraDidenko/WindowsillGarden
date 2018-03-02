var Templates = require('../Templates');
var Flower_List = require('../Flower_List');
var $flower_list = $("#flowers");

function showFlowerList(list) {
    function showOneFlower(flower) {
        var html_code = Templates.TutorialsMenu_OneItem({link: flower});
        var $node = $(html_code);
        $flower_list.append($node);
    }
    list.forEach(showOneFlower);
}

function initialiseMenuFlower() {
    showFlowerList(Flower_List);
}
exports.initialiseMenuFlower = initialiseMenuFlower;
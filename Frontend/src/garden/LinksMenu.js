var Templates = require('../Templates');
var Link_List = require('../Links_List');
var $link_list = $("#tutorials_list");

function showLinkList(list) {
    function showOneLink(links) {
        var html_code = Templates.TutorialsMenu_OneItem({link: links});
        var $node = $(html_code);
        $link_list.append($node);
    }
    list.forEach(showOneLink);
}

function initialiseMenuLink() {
    showLinkList(Link_List);
}
exports.initialiseMenuLink = initialiseMenuLink;
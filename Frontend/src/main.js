$(function(){
    var LinksMenu = require('./garden/LinksMenu');
    var WorkshopItems = require('./garden/WorkshopItems');
    var GeneratorMenu = require('./garden/GeneratorMenu');
    var SucculentMenu = require('./garden/SucculentMenu');
    var FlowerMenu = require('./garden/FlowerMenu');
    var HerbMenu = require('./garden/HerbMenu');

    $('[data-toggle="tooltip"]').tooltip();

    LinksMenu.initialiseMenuLink();
    GeneratorMenu.initialiseGeneratorList();
    WorkshopItems.initialiseField();
    FlowerMenu.initialiseMenuFlower();
    HerbMenu.initialiseMenuHerb();
    SucculentMenu.initialiseMenuSucculent();

    if(document.location.href === 'http://localhost:5050/explore.html'){
        changeBackground();
    }

    $("form").submit(function(e){
        e.preventDefault();
    });

    $(".remove-button").click(function(){
        location.reload();
    });

    $( function() {
        $( ".links" ).draggable();
    } );

    $(".watch").click(function() {
        var answer;
        // Get all the forms element values
        var value1 = $("input[name = 'q1']:checked").val();
        var value2 = $("input[name = 'q2']:checked").val();
        var value3 = $("input[name = 'q3']:checked").val();
        var value4 = $("input[name = 'q4']:checked").val();
        var value5 = $("input[name = 'q5']:checked").val();

        answer = parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4)+parseInt(value5);
        getFlower(answer);
    });

    function getFlower(answer){
        if(answer<6){
            $("#daisy").show();
        }else if(answer < 10 && answer > 5) {
            $("#lavender").show();
        }else if(answer < 15 && answer > 9){
            $("#rose").show();
        }else if(answer < 26 && answer > 14){
            $("#forget-me-not").show();
        }else if(answer > 25){
            $("#sunflower").show();
        }

    }
    function getcurrMonth() {
        var d = new Date();
        return d.getMonth();
    }
    function getSeason(){
        var month = getcurrMonth();
        if(month >= 11 || month <=1){
            return 'winter';
        }else if(month >= 2 || month <=4){
            return 'spring';
        }else if(month >= 5 || month <=7){
            return 'summer';
        }else if(month >= 8 || month <=10){
            return 'autumn'
        }
    }
    function changeBackground(){
        var season = getSeason();
        if(season === 'winter'){
           $("#toChange").css("background-image", "url('assets/less/windowsill.png')");
        }else if(season === 'spring'){
           $("#toChange").css("background-image", "url('assets/less/spring.png')");
        }else if(season === 'summer'){
           $("#toChange").css("background-image", "url('assets/less/summer.png')");
        }else if(season === 'autumn'){
           $("#toChange").css("background-image", "url('assets/less/autumn.png')");
        }else{
           $("#toChange").css("background-image", "url('assets/less/sky.png')");
        }
    }

});


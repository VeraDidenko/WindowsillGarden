/**
 * Created by chaika on 02.02.16.
 */
    var Templates = require('../Templates');
    var Storage = require('./Storage');

    var Field = [];
    var index = 10;
    var $field = $("#items");

    function addToField(links) {
        console.log(links);
            Field.push({
                item: links
            });
        console.log(Field);
        updateField();
    }

    function initialiseField() {
        var saved_field = Storage.read("cart");
        if (saved_field) {
            Field = saved_field;
        }
        updateField();
    }
    function clearCart(){
        Field=[];
    }
    $("#refresh").click(function(){
        clearCart();
        $field.html("");
        updateField();
    });
    function updateField() {
        Storage.write("cart", Field);
        function showOneItemInField(cart_item) {
            var html_code = Templates.WorkshopField_OneItem(cart_item);
            var $node = $(html_code).draggable();
            $node.click(function(){
                $node.css('zIndex', ++index);
            });

            $field.append($node);
            console.log($field);
        }
        if(Field.length === 0){
            $("#greeting").show();
        }else{
            $("#greeting").hide();
            showOneItemInField(Field[Field.length-1]);
        }
    }
    exports.addToField = addToField;

    exports.initialiseField = initialiseField;

    exports.updateField = updateField;
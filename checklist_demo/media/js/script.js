// Global JS file

$(function() {
	list.init();	
});

var list = {

	//$listTodo : $("#list-todo")
	//$autoCompleteList : null,
	//$field : null,
	//$selectedField : null,
	//fullNamePos : { "top" : "65px"},
	//emailPos : { "top" : "114px"},

    init : function () {
    	list.showHide();
    	list.fadeCheck();
    },

    showHide : function() {
	    $('#list-todo .list-toggle').click(function(self){
	    	self = $(this);
	    	if (self.hasClass("list-toggle-expanded")) {
		    	self.parents("li").find("ul").slideUp(200);
		    	self.removeClass("list-toggle-expanded");
	    	} else {
		    	self.parents("li").find("ul").slideDown(200);
		    	self.addClass("list-toggle-expanded");
	    	}
	    	return false;
	    });
    },
    
    checkAll : function() {
	    
    },
    
    fadeCheck : function() {

 		$("input[type=checkbox]").click(function(self) {
			self = $(this);
			item = self.closest("li");
			if (item.hasClass("list-item-done")) {
				item.removeClass("list-item-done");
				item.fadeTo(200, 1);
				item.find("input[type=checkbox]:checked").removeAttr("checked");
			} else {
				item.addClass("list-item-done");
				item.fadeTo(200, .3);
				item.find("input[type=checkbox]:not(:checked)").attr("checked","checked");
			}
		});
		
    }

}

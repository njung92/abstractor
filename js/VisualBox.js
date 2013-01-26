var VisualBox = function(boxID, x, y, color, width, height, app) {
	this.id = boxID;
	this.x = x;
	this.y = y;
	this.color = color;
	this.width = width;
	this.height = height;

	this.initGraphics();
	this.graphics(true, "blah");
	this.events(app);
}

VisualBox.prototype.initGraphics = function() {
	$("#canvas").append("<textarea id='"+this.id+"' class='rectangle'></textarea>");
	this.graphics(true, "Empty string");

}

VisualBox.prototype.graphics = function(isEdit, contents) {
	if (isEdit) {
		$("#"+this.id).replaceWith("<textarea id='"+this.id+"' class='rectangle'>"+contents+"</textarea>");
	}
	else { //is div
		$("#"+this.id).replaceWith("<div id='"+this.id+"' class='rectangle'>"+contents+"</div>");
	}
	$("#"+this.id).css("left",this.x);
	$("#"+this.id).css("bottom",this.y);
	$("#"+this.id).css("width",this.width);
	$("#"+this.id).css("height",this.height);
	$("#"+this.id).css("border-color",this.color);
	console.log('lalalal');
}


VisualBox.prototype.events = function(app) {
	window.visbox = this;
	var vis = window.visbox;

	console.log(this.id);
	$("#"+vis.id).click(function(e) {

		console.log($("#"+vis.id).get(0).tagName);
		if (app.editMode === true && $("#"+vis.id).get(0).tagName === 'DIV') {
			vis.graphics(true, $("#"+vis.id).html());
			vis.events(app);
		}
	});


	$("#"+vis.id).bind("keypress", function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code === 13) {
			e.preventDefault();
			var rawText = $("#"+vis.id).val();
			console.log(rawText);
			vis.graphics(false, rawText);
			
			$("#edit_text").html('<img src="icons/T_sidemenu.png">\
            <span class="menu_text">Edit Text</span>')
            app.editMode = false;
            vis.events(app);
			console.log("got here!");			
		}
	});

	// $("#"+this.id).children(".text_box").click(function(e) {
	// 	e.preventDefault();

	// });

}







// var VisualBox = function(boxID, x, y, color, stage, width, height) {
// 	this.id = boxID;
// 	this.x = x;
// 	this.y = y;
// 	this.color = color;
// 	this.stage = stage;
// 	this.width = width;
// 	this.height = height;

// 	this.layer = new Kinetic.Layer();
// 	this.group = new Kinetic.Group({
// 		draggable: true
// 	});

// 	this.graphics();
// 	this.events();

// 	this.group.add(this.rect);
// 	this.group.add(this.rectHeader);
// 	this.group.add(this.xCircle);
// 	this.group.add(this.xCircleText);
// 	this.layer.add(this.group);
// }

// VisualBox.prototype.graphics = function() {
// 	this.rectHeader = new Kinetic.Rect({
// 	  x: this.x,
// 	  y: this.y,
// 	  width: this.width,
// 	  height: 5,
// 	  fill: this.color,
// 	  offset: {
// 	    x: -25,
// 	    y: -25
// 	  },
// 	  // draggable: true,
// 	  id: 'rectHeader',
// 	  name: 'I am a rectangle header'
// 	});

// 	this.rect = new Kinetic.Rect({
// 	  x: this.x,
// 	  y: this.y,
// 	  width: this.width,
// 	  height: this.height,
// 	  fill: '#fff',
// 	  strokeWidth: 1,
// 	  stroke: this.color,
// 	  shadowColor: '#000',
// 	  shadowBlur: 12,
// 	  shadowOffset: 5,
// 	  shadowOpacity: 0.3,
// 	  offset: {
// 	    x: -25,
// 	    y: -25
// 	  },
// 	  // draggable: true,
// 	  id: 'rect',
// 	  name: 'I am a rectangle'
// 	});

// 	this.xCircle = new Kinetic.Circle({
//         x: this.x,
//         y: this.y,
//         radius: 10,
//         fill: '#fff',
//         stroke: this.color,
//         strokeWidth: 1,
//         id: 'xCircle'
//     });

//     this.xCircleText = new Kinetic.Text({
//         x: this.x,
//         y: this.y,
//         text: 'x',
//         fontSize: 20,
//         fontFamily: 'PT Sans',
//         fill: this.color,
//         id: 'xCircle'
//     });
// }


// VisualBox.prototype.events = function() {
// 	window.visbox = this;
// 	var vis = window.visbox;
// 	this.group = new Kinetic.Group({
// 	  draggable: true
// 	});

// 	this.layer.on('click', function(e) {
// 		var shape = e.shape;
		
// 		/* if clicked on circular x button then remove the rectangle, 
// 		rectangle header, and x button */
// 		if (shape.getId() == 'xCircle') {
// 			vis.layer.remove(shape);
// 		} else {
// 			var newBoxText = document.createElement("textarea");
// 		}
// 	});



// }

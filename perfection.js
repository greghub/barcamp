function drawShape(){
  // get the canvas element using the DOM
  var canvas = document.getElementById('canvas');

    // init canvas
    var ctx = canvas.getContext('2d');

    // save for further restores
    ctx.save();	

    // options
	ctx.lineCap = 'butt';
	ctx.lineJoin = 'miter';
	ctx.miterLimit = 4;
	ctx.lineWidth = 1;
	ctx.lineCap = "butt";
	ctx.lineJoin = "miter";
	ctx.fillStyle = "rgba(0,0,0,1)";

	ctx.beginPath();
	ctx.rect(0,0,294,257);	
	ctx.closePath();
	ctx.fill();

    // Clip to the current path
    ctx.clip();

    // !!! the key boolean operation
	ctx.globalCompositeOperation = "destination-out";

	ctx.beginPath();
	ctx.moveTo(219,253);
	ctx.bezierCurveTo(247,244,290,220,290,128);
	ctx.bezierCurveTo(289,34,243,13,236,9);
	ctx.bezierCurveTo(219,0,189,-1,169,2);
	ctx.bezierCurveTo(169,0,210,17,202,29);
	ctx.bezierCurveTo(188,53,139,16,122,17);
	ctx.bezierCurveTo(109,17,83,54,97,50);
	ctx.bezierCurveTo(131,40,135,53,135,53);
	ctx.bezierCurveTo(135,53,161,80,136,105);
	ctx.bezierCurveTo(117,126,72,64,48,84);
	ctx.bezierCurveTo(36,94,48,117,42,127);
	ctx.bezierCurveTo(36,138,18,145,2,137);
	ctx.bezierCurveTo(-7,132,14,158,28,156);
	ctx.bezierCurveTo(65,149,53,130,72,129);
	ctx.bezierCurveTo(85,128,112,141,108,167);
	ctx.bezierCurveTo(106,179,101,188,77,190);
	ctx.bezierCurveTo(69,191,98,202,111,204);
	ctx.bezierCurveTo(135,208,174,186,183,201);
	ctx.bezierCurveTo(196,223,159,242,133,238);
	ctx.bezierCurveTo(126,237,182,265,219,253);
	ctx.closePath();
	ctx.fill();

	// restore to first clip
	ctx.restore();


	var container = document.getElementById("logosh-mogosh");
	for (var i = 1, n = 9; i <= n; i++) {
		var div = document.createElement("div");
		div.className = ( i % 2 == 0 )?"row even-row":"row odd-row";
		for (var j = 0, m = 14; j < m; j++) {
			var subdiv = document.createElement("div");
			div.appendChild(subdiv);			
		}
		container.appendChild(div);
	}
}


(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,56);


(lib.step1 = function() {
	this.initialize(img.step1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,313);


(lib.step2 = function() {
	this.initialize(img.step2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,313);


(lib.step3 = function() {
	this.initialize(img.step3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,313);


(lib.step4 = function() {
	this.initialize(img.step4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,313);


(lib.gfcStep4Title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000033").beginStroke().moveTo(1.9,4.1).lineTo(1.9,-1).curveTo(1.9,-2,1.5,-2.5).curveTo(1.1,-3,0.2,-3).curveTo(-0.4,-3,-1,-2.7).curveTo(-1.5,-2.4,-2,-1.8).lineTo(-2,4.1).lineTo(-3.4,4.1).lineTo(-3.4,-4).lineTo(-2.5,-4).curveTo(-2.4,-4,-2.4,-4).curveTo(-2.3,-3.9,-2.3,-3.9).curveTo(-2.2,-3.9,-2.2,-3.8).curveTo(-2.2,-3.8,-2.2,-3.7).lineTo(-2.1,-2.8).lineTo(-1.5,-3.3).lineTo(-0.9,-3.7).lineTo(-0.2,-4).lineTo(0.6,-4.1).curveTo(1.3,-4.1,1.8,-3.9).curveTo(2.3,-3.7,2.7,-3.3).curveTo(3,-2.9,3.2,-2.3).curveTo(3.4,-1.7,3.4,-1).lineTo(3.4,4.1).closePath();
	this.shape.setTransform(57,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,3.9).curveTo(-2.3,3.6,-2.8,3.1).curveTo(-3.3,2.5,-3.6,1.7).curveTo(-3.9,1,-3.9,0).curveTo(-3.9,-0.9,-3.6,-1.7).curveTo(-3.3,-2.5,-2.8,-3).curveTo(-2.3,-3.6,-1.6,-3.9).curveTo(-0.9,-4.2,0,-4.2).curveTo(0.9,-4.2,1.6,-3.9).curveTo(2.3,-3.6,2.8,-3).curveTo(3.3,-2.5,3.6,-1.7).curveTo(3.9,-0.9,3.9,0).curveTo(3.9,1,3.6,1.7).curveTo(3.3,2.5,2.8,3.1).curveTo(2.3,3.6,1.6,3.9).curveTo(0.9,4.2,0,4.2).curveTo(-0.9,4.2,-1.6,3.9).closePath().moveTo(-1,-2.8).curveTo(-1.5,-2.6,-1.8,-2.2).curveTo(-2.1,-1.8,-2.2,-1.3).curveTo(-2.4,-0.7,-2.4,0).curveTo(-2.4,1.5,-1.8,2.3).curveTo(-1.2,3.1,0,3.1).curveTo(1.2,3.1,1.8,2.3).curveTo(2.4,1.5,2.4,0).curveTo(2.4,-1.4,1.8,-2.2).curveTo(1.2,-3,0,-3).curveTo(-0.6,-3,-1,-2.8).closePath();
	this.shape_1.setTransform(48,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000033").beginStroke().moveTo(-0.7,5.8).lineTo(-0.7,-2.3).lineTo(0.7,-2.3).lineTo(0.7,5.8).closePath().moveTo(-0.4,-3.9).lineTo(-0.7,-4.1).lineTo(-0.9,-4.4).lineTo(-1,-4.8).lineTo(-0.9,-5.2).lineTo(-0.7,-5.5).lineTo(-0.4,-5.8).lineTo(-0,-5.8).lineTo(0.4,-5.8).lineTo(0.7,-5.5).lineTo(0.9,-5.2).lineTo(1,-4.8).lineTo(0.9,-4.4).lineTo(0.7,-4.1).lineTo(0.4,-3.9).lineTo(-0,-3.8).closePath();
	this.shape_2.setTransform(41.6,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,4.9).curveTo(-1.3,4.3,-1.3,3.3).lineTo(-1.3,-1.6).lineTo(-2.3,-1.6).lineTo(-2.5,-1.7).lineTo(-2.6,-2).lineTo(-2.6,-2.5).lineTo(-1.3,-2.6).lineTo(-1,-5.1).lineTo(-0.9,-5.3).lineTo(-0.6,-5.4).lineTo(0.1,-5.4).lineTo(0.1,-2.6).lineTo(2.4,-2.6).lineTo(2.4,-1.6).lineTo(0.1,-1.6).lineTo(0.1,3.2).curveTo(0.1,3.7,0.3,4).curveTo(0.6,4.2,1,4.2).lineTo(1.3,4.2).lineTo(1.6,4).lineTo(1.8,3.9).lineTo(2,3.9).lineTo(2.2,4).lineTo(2.6,4.7).curveTo(2.2,5.1,1.7,5.2).curveTo(1.2,5.5,0.6,5.5).curveTo(-0.3,5.5,-0.8,4.9).closePath();
	this.shape_3.setTransform(36.9,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000033").beginStroke().moveTo(-1.8,4).lineTo(-2.5,3.7).curveTo(-2.8,3.4,-3,3).curveTo(-3.2,2.6,-3.2,2.1).curveTo(-3.2,1.6,-2.9,1.1).curveTo(-2.6,0.7,-2.1,0.3).curveTo(-1.4,-0.1,-0.5,-0.3).curveTo(0.5,-0.5,1.8,-0.5).lineTo(1.8,-1.2).curveTo(1.8,-2,1.4,-2.5).curveTo(1,-3.1,0.2,-3.1).curveTo(-0.3,-3,-0.6,-2.9).lineTo(-1.3,-2.6).lineTo(-1.7,-2.3).lineTo(-2.1,-2.2).lineTo(-2.3,-2.2).lineTo(-2.5,-2.4).lineTo(-2.8,-2.9).curveTo(-2.1,-3.6,-1.3,-3.9).curveTo(-0.5,-4.2,0.4,-4.2).curveTo(1,-4.2,1.6,-4).curveTo(2.1,-3.8,2.5,-3.3).curveTo(2.9,-2.9,3.1,-2.4).curveTo(3.2,-1.8,3.2,-1.2).lineTo(3.2,4).lineTo(2.6,4).lineTo(2.3,4).lineTo(2.1,3.7).lineTo(2,3).lineTo(1.3,3.4).lineTo(0.6,3.9).lineTo(-0.1,4.1).lineTo(-0.9,4.2).lineTo(-1.8,4).closePath().moveTo(0.2,0.5).lineTo(-1,0.9).curveTo(-1.4,1.1,-1.6,1.3).curveTo(-1.8,1.6,-1.8,2).lineTo(-1.7,2.5).lineTo(-1.4,2.9).lineTo(-1,3.1).lineTo(-0.4,3.2).lineTo(0.2,3.1).lineTo(0.8,2.9).lineTo(1.3,2.5).lineTo(1.8,2.1).lineTo(1.8,0.4).lineTo(0.2,0.5).closePath();
	this.shape_4.setTransform(29.7,19.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#000033").beginStroke().moveTo(-1.8,5.7).curveTo(-2.4,5.5,-2.8,4.9).curveTo(-3.2,4.4,-3.4,3.6).curveTo(-3.6,2.8,-3.6,1.9).curveTo(-3.6,0.9,-3.3,0.2).curveTo(-3.1,-0.6,-2.7,-1.2).curveTo(-2.2,-1.8,-1.6,-2.1).curveTo(-0.9,-2.4,-0.1,-2.4).curveTo(0.7,-2.4,1.2,-2.2).curveTo(1.7,-1.9,2.1,-1.4).lineTo(2.1,-5.9).lineTo(3.6,-5.9).lineTo(3.6,5.8).lineTo(2.7,5.8).curveTo(2.6,5.8,2.6,5.8).curveTo(2.5,5.8,2.5,5.8).curveTo(2.4,5.7,2.4,5.7).curveTo(2.4,5.6,2.3,5.6).lineTo(2.2,4.6).curveTo(1.7,5.2,1,5.6).curveTo(0.4,5.9,-0.5,5.9).curveTo(-1.2,6,-1.8,5.7).closePath().moveTo(-1.5,-0.5).curveTo(-2.1,0.3,-2.1,1.9).curveTo(-2.1,2.6,-2,3.2).curveTo(-1.8,3.7,-1.6,4.1).curveTo(-1.3,4.5,-0.9,4.7).curveTo(-0.5,4.8,-0.1,4.8).curveTo(0.6,4.8,1.2,4.5).curveTo(1.7,4.1,2.1,3.6).lineTo(2.1,-0.4).curveTo(1.7,-0.9,1.3,-1.1).curveTo(0.8,-1.3,0.2,-1.3).curveTo(-0.9,-1.3,-1.5,-0.5).closePath();
	this.shape_5.setTransform(21.3,17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000033").beginStroke().moveTo(1.9,4.1).lineTo(1.9,-1).curveTo(1.9,-2,1.5,-2.5).curveTo(1.1,-3,0.2,-3).curveTo(-0.4,-3,-1,-2.7).curveTo(-1.5,-2.4,-2,-1.8).lineTo(-2,4.1).lineTo(-3.4,4.1).lineTo(-3.4,-4).lineTo(-2.5,-4).curveTo(-2.4,-4,-2.4,-4).curveTo(-2.3,-3.9,-2.3,-3.9).curveTo(-2.2,-3.9,-2.2,-3.8).curveTo(-2.2,-3.8,-2.2,-3.7).lineTo(-2.1,-2.8).lineTo(-1.5,-3.3).lineTo(-0.9,-3.7).lineTo(-0.2,-4).lineTo(0.6,-4.1).curveTo(1.3,-4.1,1.8,-3.9).curveTo(2.3,-3.7,2.7,-3.3).curveTo(3,-2.9,3.2,-2.3).curveTo(3.4,-1.7,3.4,-1).lineTo(3.4,4.1).closePath();
	this.shape_6.setTransform(12.7,19.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-2,3.6,-2.5,3.1).curveTo(-3,2.5,-3.3,1.7).curveTo(-3.6,0.9,-3.6,-0.1).curveTo(-3.6,-1,-3.4,-1.7).curveTo(-3.1,-2.5,-2.6,-3).curveTo(-2.1,-3.5,-1.4,-3.8).curveTo(-0.7,-4.2,0.2,-4.2).curveTo(0.9,-4.2,1.6,-3.9).curveTo(2.1,-3.7,2.6,-3.2).curveTo(3,-2.7,3.4,-2.1).curveTo(3.6,-1.4,3.6,-0.5).curveTo(3.6,-0.4,3.6,-0.4).curveTo(3.6,-0.3,3.6,-0.2).curveTo(3.6,-0.2,3.5,-0.1).curveTo(3.5,-0.1,3.5,-0.1).lineTo(3.3,0).lineTo(-2.2,0).curveTo(-2.1,0.8,-1.9,1.4).curveTo(-1.8,1.9,-1.5,2.3).curveTo(-1.1,2.7,-0.7,2.9).curveTo(-0.2,3.1,0.4,3.1).curveTo(0.9,3.1,1.3,2.9).lineTo(2,2.7).lineTo(2.5,2.4).lineTo(2.8,2.3).curveTo(2.8,2.3,2.9,2.3).curveTo(2.9,2.3,2.9,2.3).curveTo(3,2.3,3,2.4).curveTo(3,2.4,3,2.4).lineTo(3.5,2.9).curveTo(3.2,3.3,2.8,3.5).lineTo(2,3.9).lineTo(1.1,4.1).lineTo(0.3,4.2).curveTo(-0.6,4.2,-1.2,3.9).closePath().moveTo(2.3,-0.9).curveTo(2.3,-1.4,2.1,-1.8).lineTo(1.8,-2.5).curveTo(1.5,-2.8,1.1,-2.9).curveTo(0.7,-3.1,0.2,-3.1).curveTo(-0.8,-3.1,-1.4,-2.5).curveTo(-2,-1.9,-2.1,-0.9).lineTo(2.3,-0.9).lineTo(2.3,-0.9).closePath();
	this.shape_7.setTransform(4,19.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#000033").beginStroke().moveTo(4.1,4.1).lineTo(4.1,-1).curveTo(4.1,-2,3.6,-2.5).curveTo(3.2,-3,2.4,-3).curveTo(2.1,-3,1.8,-2.8).curveTo(1.5,-2.7,1.2,-2.5).lineTo(0.8,-1.9).lineTo(0.7,-1).lineTo(0.7,4.1).lineTo(-0.7,4.1).lineTo(-0.7,-1).curveTo(-0.7,-2,-1.1,-2.5).curveTo(-1.5,-3,-2.3,-3).curveTo(-2.8,-3,-3.2,-2.7).curveTo(-3.7,-2.4,-4.1,-1.9).lineTo(-4.1,4.1).lineTo(-5.5,4.1).lineTo(-5.5,-4).lineTo(-4.6,-4).curveTo(-4.6,-4,-4.5,-4).curveTo(-4.4,-3.9,-4.4,-3.9).curveTo(-4.3,-3.9,-4.3,-3.8).curveTo(-4.3,-3.8,-4.3,-3.7).lineTo(-4.2,-2.9).curveTo(-3.7,-3.4,-3.2,-3.8).curveTo(-2.6,-4.1,-1.9,-4.1).curveTo(-1,-4.1,-0.5,-3.6).curveTo(-0,-3.2,0.2,-2.4).lineTo(0.6,-3.2).lineTo(1.3,-3.7).lineTo(2,-4).lineTo(2.8,-4.1).curveTo(3.4,-4.1,3.9,-3.9).curveTo(4.4,-3.7,4.8,-3.3).curveTo(5.1,-2.9,5.3,-2.3).curveTo(5.5,-1.8,5.5,-1).lineTo(5.5,4.1).closePath();
	this.shape_8.setTransform(-6.8,19.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#000033").beginStroke().moveTo(4.1,4.1).lineTo(4.1,-1).curveTo(4.1,-2,3.6,-2.5).curveTo(3.2,-3,2.4,-3).curveTo(2.1,-3,1.8,-2.8).curveTo(1.5,-2.7,1.2,-2.5).lineTo(0.8,-1.9).lineTo(0.7,-1).lineTo(0.7,4.1).lineTo(-0.7,4.1).lineTo(-0.7,-1).curveTo(-0.7,-2,-1.1,-2.5).curveTo(-1.5,-3,-2.3,-3).curveTo(-2.8,-3,-3.2,-2.7).curveTo(-3.7,-2.4,-4.1,-1.9).lineTo(-4.1,4.1).lineTo(-5.5,4.1).lineTo(-5.5,-4).lineTo(-4.6,-4).curveTo(-4.6,-4,-4.5,-4).curveTo(-4.4,-3.9,-4.4,-3.9).curveTo(-4.3,-3.9,-4.3,-3.8).curveTo(-4.3,-3.8,-4.3,-3.7).lineTo(-4.2,-2.9).curveTo(-3.7,-3.4,-3.2,-3.8).curveTo(-2.6,-4.1,-1.9,-4.1).curveTo(-1,-4.1,-0.5,-3.6).curveTo(-0,-3.2,0.2,-2.4).lineTo(0.6,-3.2).lineTo(1.3,-3.7).lineTo(2,-4).lineTo(2.8,-4.1).curveTo(3.4,-4.1,3.9,-3.9).curveTo(4.4,-3.7,4.8,-3.3).curveTo(5.1,-2.9,5.3,-2.3).curveTo(5.5,-1.8,5.5,-1).lineTo(5.5,4.1).closePath();
	this.shape_9.setTransform(-19.9,19.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,3.9).curveTo(-2.3,3.6,-2.8,3.1).curveTo(-3.3,2.5,-3.6,1.7).curveTo(-3.9,1,-3.9,0).curveTo(-3.9,-0.9,-3.6,-1.7).curveTo(-3.3,-2.5,-2.8,-3).curveTo(-2.3,-3.6,-1.6,-3.9).curveTo(-0.9,-4.2,0,-4.2).curveTo(0.9,-4.2,1.6,-3.9).curveTo(2.3,-3.6,2.8,-3).curveTo(3.3,-2.5,3.6,-1.7).curveTo(3.9,-0.9,3.9,0).curveTo(3.9,1,3.6,1.7).curveTo(3.3,2.5,2.8,3.1).curveTo(2.3,3.6,1.6,3.9).curveTo(0.9,4.2,0,4.2).curveTo(-0.9,4.2,-1.6,3.9).closePath().moveTo(-1,-2.8).curveTo(-1.5,-2.6,-1.8,-2.2).curveTo(-2.1,-1.8,-2.2,-1.3).curveTo(-2.4,-0.7,-2.4,0).curveTo(-2.4,1.5,-1.8,2.3).curveTo(-1.2,3.1,0,3.1).curveTo(1.2,3.1,1.8,2.3).curveTo(2.4,1.5,2.4,0).curveTo(2.4,-1.4,1.8,-2.2).curveTo(1.2,-3,0,-3).curveTo(-0.6,-3,-1,-2.8).closePath();
	this.shape_10.setTransform(-31.1,19.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,3.9).curveTo(-1.8,3.6,-2.2,3.1).curveTo(-2.7,2.6,-3,1.8).curveTo(-3.3,1,-3.3,0).curveTo(-3.3,-0.9,-3.1,-1.7).curveTo(-2.8,-2.4,-2.3,-3).curveTo(-1.8,-3.5,-1.1,-3.8).curveTo(-0.4,-4.2,0.5,-4.2).curveTo(1.4,-4.2,2.1,-3.9).curveTo(2.7,-3.6,3.2,-3.1).lineTo(2.8,-2.6).lineTo(2.7,-2.5).lineTo(2.5,-2.4).lineTo(2.3,-2.5).lineTo(1.9,-2.7).lineTo(1.4,-2.9).lineTo(0.6,-3).curveTo(-0,-3,-0.4,-2.8).curveTo(-0.9,-2.6,-1.2,-2.2).curveTo(-1.5,-1.8,-1.6,-1.3).curveTo(-1.8,-0.7,-1.8,0).curveTo(-1.8,0.8,-1.6,1.3).curveTo(-1.5,1.9,-1.2,2.3).curveTo(-0.8,2.7,-0.4,2.9).curveTo(0,3.1,0.5,3.1).lineTo(1.4,3).lineTo(2,2.7).lineTo(2.3,2.4).lineTo(2.6,2.3).curveTo(2.7,2.3,2.7,2.3).curveTo(2.7,2.3,2.8,2.3).curveTo(2.8,2.3,2.8,2.4).curveTo(2.9,2.4,2.9,2.4).lineTo(3.3,2.9).curveTo(3,3.3,2.7,3.5).lineTo(2,3.9).lineTo(1.2,4.1).lineTo(0.3,4.2).curveTo(-0.4,4.2,-1.1,3.9).closePath();
	this.shape_11.setTransform(-39.2,19.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,3.9).curveTo(-2,3.6,-2.5,3.1).curveTo(-3,2.5,-3.3,1.7).curveTo(-3.6,0.9,-3.6,-0.1).curveTo(-3.6,-1,-3.3,-1.7).curveTo(-3,-2.5,-2.6,-3).curveTo(-2.1,-3.5,-1.4,-3.8).curveTo(-0.7,-4.2,0.2,-4.2).curveTo(1,-4.2,1.5,-3.9).curveTo(2.1,-3.7,2.6,-3.2).curveTo(3,-2.7,3.3,-2.1).curveTo(3.6,-1.4,3.6,-0.5).curveTo(3.6,-0.4,3.6,-0.4).curveTo(3.6,-0.3,3.6,-0.2).curveTo(3.6,-0.2,3.5,-0.1).curveTo(3.5,-0.1,3.5,-0.1).lineTo(3.2,0).lineTo(-2.2,0).curveTo(-2.2,0.8,-2,1.4).curveTo(-1.8,1.9,-1.4,2.3).curveTo(-1.1,2.7,-0.6,2.9).curveTo(-0.2,3.1,0.4,3.1).curveTo(1,3.1,1.3,2.9).lineTo(2,2.7).lineTo(2.4,2.4).lineTo(2.8,2.3).curveTo(2.8,2.3,2.9,2.3).curveTo(2.9,2.3,2.9,2.3).curveTo(3,2.3,3,2.4).curveTo(3,2.4,3.1,2.4).lineTo(3.4,2.9).curveTo(3.2,3.3,2.8,3.5).lineTo(2.1,3.9).lineTo(1.2,4.1).lineTo(0.3,4.2).curveTo(-0.5,4.2,-1.3,3.9).closePath().moveTo(2.3,-0.9).curveTo(2.3,-1.4,2.2,-1.8).lineTo(1.7,-2.5).curveTo(1.5,-2.8,1.1,-2.9).curveTo(0.7,-3.1,0.3,-3.1).curveTo(-0.8,-3.1,-1.4,-2.5).curveTo(-2,-1.9,-2.2,-0.9).lineTo(2.3,-0.9).lineTo(2.3,-0.9).closePath();
	this.shape_12.setTransform(-47.3,19.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#000033").beginStroke().moveTo(2.9,5.7).curveTo(2.4,5.7,2.3,5.4).lineTo(-0.7,1.3).lineTo(-1.1,1).lineTo(-1.5,0.9).lineTo(-2.7,0.9).lineTo(-2.7,5.7).lineTo(-4.2,5.7).lineTo(-4.2,-5.7).lineTo(-1,-5.7).curveTo(0.1,-5.7,0.9,-5.5).curveTo(1.7,-5.3,2.2,-4.9).curveTo(2.7,-4.5,3,-3.9).curveTo(3.2,-3.3,3.2,-2.6).curveTo(3.2,-2,3,-1.4).curveTo(2.8,-0.9,2.4,-0.5).curveTo(2.1,-0.1,1.5,0.2).curveTo(1.1,0.5,0.4,0.7).lineTo(0.9,1.2).lineTo(4.2,5.7).closePath().moveTo(-2.7,-0.2).lineTo(-1.1,-0.2).curveTo(-0.4,-0.2,0.2,-0.4).curveTo(0.7,-0.5,1,-0.8).curveTo(1.3,-1.1,1.5,-1.5).curveTo(1.7,-1.9,1.7,-2.5).curveTo(1.7,-3.5,1,-4).curveTo(0.4,-4.5,-1,-4.5).lineTo(-2.7,-4.5).closePath();
	this.shape_13.setTransform(-55.9,17.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#000033").beginStroke().moveTo(-3.1,6.3).lineTo(1.7,-5.7).lineTo(2,-6.1).curveTo(2.1,-6.1,2.1,-6.2).curveTo(2.2,-6.2,2.2,-6.2).curveTo(2.3,-6.2,2.4,-6.2).curveTo(2.4,-6.2,2.5,-6.2).lineTo(3.1,-6.2).lineTo(-1.7,5.7).curveTo(-1.8,6,-2,6.2).lineTo(-2.5,6.3).closePath();
	this.shape_14.setTransform(23.6,0.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#000033").beginStroke().moveTo(1.9,4.1).lineTo(1.9,-1).curveTo(1.9,-2,1.5,-2.5).curveTo(1.1,-3,0.2,-3).curveTo(-0.4,-3,-1,-2.7).curveTo(-1.5,-2.4,-2,-1.8).lineTo(-2,4.1).lineTo(-3.4,4.1).lineTo(-3.4,-4).lineTo(-2.5,-4).curveTo(-2.5,-4,-2.4,-4).curveTo(-2.3,-3.9,-2.3,-3.9).curveTo(-2.2,-3.9,-2.2,-3.8).curveTo(-2.2,-3.8,-2.2,-3.7).lineTo(-2.1,-2.8).lineTo(-1.5,-3.3).lineTo(-0.9,-3.7).lineTo(-0.2,-4).lineTo(0.6,-4.1).curveTo(1.3,-4.1,1.8,-3.9).curveTo(2.3,-3.7,2.7,-3.3).curveTo(3,-2.9,3.2,-2.3).curveTo(3.4,-1.7,3.4,-1).lineTo(3.4,4.1).closePath();
	this.shape_15.setTransform(11.5,2.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,3.9).curveTo(-2.3,3.6,-2.8,3.1).curveTo(-3.3,2.5,-3.6,1.7).curveTo(-3.9,1,-3.9,0).curveTo(-3.9,-0.9,-3.6,-1.7).curveTo(-3.3,-2.5,-2.8,-3).curveTo(-2.3,-3.6,-1.6,-3.9).curveTo(-0.9,-4.2,0,-4.2).curveTo(0.9,-4.2,1.6,-3.9).curveTo(2.3,-3.6,2.8,-3).curveTo(3.3,-2.5,3.6,-1.7).curveTo(3.9,-0.9,3.9,0).curveTo(3.9,1,3.6,1.7).curveTo(3.3,2.5,2.8,3.1).curveTo(2.3,3.6,1.6,3.9).curveTo(0.9,4.2,0,4.2).curveTo(-0.9,4.2,-1.6,3.9).closePath().moveTo(-1,-2.8).curveTo(-1.5,-2.6,-1.8,-2.2).curveTo(-2.1,-1.8,-2.2,-1.3).curveTo(-2.4,-0.7,-2.4,0).curveTo(-2.4,1.5,-1.8,2.3).curveTo(-1.2,3.1,0,3.1).curveTo(1.2,3.1,1.8,2.3).curveTo(2.4,1.5,2.4,0).curveTo(2.4,-1.4,1.8,-2.2).curveTo(1.2,-3,0,-3).curveTo(-0.6,-3,-1,-2.8).closePath();
	this.shape_16.setTransform(2.5,2.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#000033").beginStroke().moveTo(-0.7,5.8).lineTo(-0.7,-2.3).lineTo(0.7,-2.3).lineTo(0.7,5.8).closePath().moveTo(-0.4,-3.9).lineTo(-0.7,-4.1).lineTo(-0.9,-4.4).lineTo(-1,-4.8).lineTo(-0.9,-5.2).lineTo(-0.7,-5.5).lineTo(-0.4,-5.8).lineTo(-0,-5.8).lineTo(0.4,-5.8).lineTo(0.7,-5.5).lineTo(0.9,-5.2).lineTo(1,-4.8).lineTo(0.9,-4.4).lineTo(0.7,-4.1).lineTo(0.4,-3.9).lineTo(-0,-3.8).closePath();
	this.shape_17.setTransform(-3.9,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#000033").beginStroke().moveTo(-1.7,3.9).curveTo(-2.4,3.7,-2.9,3.2).lineTo(-2.5,2.6).lineTo(-2.4,2.5).lineTo(-2.2,2.4).lineTo(-1.9,2.5).lineTo(-1.5,2.8).lineTo(-0.9,3.1).lineTo(-0.1,3.2).lineTo(0.6,3.1).lineTo(1.1,2.7).lineTo(1.4,2.4).lineTo(1.5,1.8).curveTo(1.5,1.5,1.4,1.3).lineTo(0.9,0.9).lineTo(0.2,0.6).lineTo(-0.6,0.4).lineTo(-1.3,0.1).lineTo(-2,-0.4).curveTo(-2.3,-0.6,-2.5,-1).curveTo(-2.7,-1.3,-2.7,-1.9).curveTo(-2.7,-2.3,-2.5,-2.7).curveTo(-2.3,-3.1,-1.9,-3.4).curveTo(-1.5,-3.8,-1,-4).curveTo(-0.5,-4.2,0.2,-4.2).curveTo(1,-4.2,1.6,-4).curveTo(2.3,-3.7,2.7,-3.2).lineTo(2.4,-2.7).curveTo(2.4,-2.7,2.4,-2.6).curveTo(2.3,-2.6,2.3,-2.6).curveTo(2.3,-2.6,2.2,-2.6).curveTo(2.2,-2.5,2.1,-2.5).lineTo(1.9,-2.7).lineTo(1.5,-2.8).lineTo(1,-3.1).lineTo(0.2,-3.1).lineTo(-0.4,-3.1).lineTo(-0.9,-2.8).lineTo(-1.2,-2.4).lineTo(-1.3,-2).curveTo(-1.3,-1.7,-1.1,-1.4).lineTo(-0.7,-1.1).lineTo(0,-0.8).lineTo(0.8,-0.5).lineTo(1.6,-0.3).lineTo(2.2,0.2).lineTo(2.7,0.7).curveTo(2.9,1.1,2.9,1.5).curveTo(2.9,2.1,2.7,2.6).curveTo(2.5,3.1,2.1,3.4).curveTo(1.7,3.8,1.1,4).curveTo(0.6,4.2,-0.2,4.2).curveTo(-1,4.2,-1.7,3.9).closePath();
	this.shape_18.setTransform(-9.3,2.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#000033").beginStroke().moveTo(-1.8,3.9).curveTo(-2.3,3.7,-2.7,3.3).curveTo(-3,2.9,-3.2,2.3).curveTo(-3.4,1.7,-3.4,1).lineTo(-3.4,-4.1).lineTo(-2,-4.1).lineTo(-2,1).curveTo(-2,2,-1.5,2.5).curveTo(-1.1,3,-0.2,3).curveTo(0.4,3,0.9,2.7).curveTo(1.5,2.4,1.9,1.8).lineTo(1.9,-4.1).lineTo(3.4,-4.1).lineTo(3.4,4).lineTo(2.5,4).curveTo(2.2,4,2.1,3.7).lineTo(2,2.8).curveTo(1.5,3.4,0.8,3.7).curveTo(0.2,4.1,-0.7,4.1).curveTo(-1.3,4.1,-1.8,3.9).closePath();
	this.shape_19.setTransform(-17.2,2.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#000033").beginStroke().moveTo(-0.7,5.9).lineTo(-0.7,-5.9).lineTo(0.7,-5.9).lineTo(0.7,5.9).closePath();
	this.shape_20.setTransform(-23.5,0.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,3.9).curveTo(-1.7,3.6,-2.3,3.1).curveTo(-2.7,2.6,-3,1.8).curveTo(-3.3,1,-3.3,0).curveTo(-3.3,-0.9,-3.1,-1.7).curveTo(-2.7,-2.4,-2.3,-3).curveTo(-1.8,-3.5,-1.1,-3.8).curveTo(-0.4,-4.2,0.5,-4.2).curveTo(1.4,-4.2,2,-3.9).curveTo(2.7,-3.6,3.2,-3.1).lineTo(2.8,-2.6).lineTo(2.7,-2.5).lineTo(2.5,-2.4).lineTo(2.2,-2.5).lineTo(1.9,-2.7).lineTo(1.3,-2.9).lineTo(0.6,-3).curveTo(0,-3,-0.5,-2.8).curveTo(-0.9,-2.6,-1.2,-2.2).curveTo(-1.5,-1.8,-1.6,-1.3).curveTo(-1.8,-0.7,-1.8,0).curveTo(-1.8,0.8,-1.6,1.3).curveTo(-1.5,1.9,-1.2,2.3).curveTo(-0.9,2.7,-0.5,2.9).curveTo(0,3.1,0.5,3.1).lineTo(1.4,3).lineTo(2,2.7).lineTo(2.3,2.4).lineTo(2.6,2.3).curveTo(2.6,2.3,2.7,2.3).curveTo(2.7,2.3,2.8,2.3).curveTo(2.8,2.3,2.8,2.4).curveTo(2.9,2.4,2.9,2.4).lineTo(3.3,2.9).curveTo(3,3.3,2.7,3.5).lineTo(2,3.9).lineTo(1.1,4.1).lineTo(0.3,4.2).curveTo(-0.5,4.2,-1.1,3.9).closePath();
	this.shape_21.setTransform(-29,2.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#000033").beginStroke().moveTo(1.9,4.1).lineTo(1.9,-1).curveTo(1.9,-2,1.5,-2.5).curveTo(1.1,-3,0.2,-3).curveTo(-0.4,-3,-1,-2.7).curveTo(-1.5,-2.4,-2,-1.8).lineTo(-2,4.1).lineTo(-3.4,4.1).lineTo(-3.4,-4).lineTo(-2.5,-4).curveTo(-2.4,-4,-2.4,-4).curveTo(-2.3,-3.9,-2.3,-3.9).curveTo(-2.2,-3.9,-2.2,-3.8).curveTo(-2.2,-3.8,-2.2,-3.7).lineTo(-2.1,-2.8).lineTo(-1.5,-3.3).lineTo(-0.9,-3.7).lineTo(-0.2,-4).lineTo(0.6,-4.1).curveTo(1.3,-4.1,1.8,-3.9).curveTo(2.3,-3.7,2.7,-3.3).curveTo(3,-2.9,3.2,-2.3).curveTo(3.4,-1.7,3.4,-1).lineTo(3.4,4.1).closePath();
	this.shape_22.setTransform(-37.4,2.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,3.9).curveTo(-2.3,3.6,-2.8,3.1).curveTo(-3.3,2.5,-3.6,1.7).curveTo(-3.9,1,-3.9,0).curveTo(-3.9,-0.9,-3.6,-1.7).curveTo(-3.3,-2.5,-2.8,-3).curveTo(-2.3,-3.6,-1.6,-3.9).curveTo(-0.9,-4.2,0,-4.2).curveTo(0.9,-4.2,1.6,-3.9).curveTo(2.3,-3.6,2.8,-3).curveTo(3.3,-2.5,3.6,-1.7).curveTo(3.9,-0.9,3.9,0).curveTo(3.9,1,3.6,1.7).curveTo(3.3,2.5,2.8,3.1).curveTo(2.3,3.6,1.6,3.9).curveTo(0.9,4.2,0,4.2).curveTo(-0.9,4.2,-1.6,3.9).closePath().moveTo(-1,-2.8).curveTo(-1.5,-2.6,-1.8,-2.2).curveTo(-2.1,-1.8,-2.2,-1.3).curveTo(-2.4,-0.7,-2.4,0).curveTo(-2.4,1.5,-1.8,2.3).curveTo(-1.2,3.1,0,3.1).curveTo(1.2,3.1,1.8,2.3).curveTo(2.4,1.5,2.4,0).curveTo(2.4,-1.4,1.8,-2.2).curveTo(1.2,-3,0,-3).curveTo(-0.6,-3,-1,-2.8).closePath();
	this.shape_23.setTransform(-46.4,2.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,5.4).curveTo(-2.6,5,-3.3,4.2).curveTo(-4,3.5,-4.4,2.4).curveTo(-4.8,1.3,-4.8,-0).curveTo(-4.8,-1.3,-4.4,-2.4).curveTo(-3.9,-3.5,-3.3,-4.2).curveTo(-2.5,-5,-1.5,-5.4).curveTo(-0.4,-5.9,0.8,-5.9).curveTo(2,-5.9,3,-5.5).curveTo(3.9,-5.1,4.7,-4.4).lineTo(4.1,-3.7).lineTo(4,-3.6).lineTo(3.8,-3.5).lineTo(3.5,-3.7).lineTo(2.9,-4).lineTo(2,-4.4).curveTo(1.6,-4.5,0.8,-4.5).curveTo(-0.1,-4.5,-0.8,-4.2).curveTo(-1.6,-3.9,-2.1,-3.3).curveTo(-2.6,-2.7,-2.9,-1.9).curveTo(-3.2,-1.1,-3.2,-0).curveTo(-3.2,1.1,-2.9,1.9).curveTo(-2.6,2.7,-2.1,3.3).curveTo(-1.5,3.9,-0.8,4.2).curveTo(-0.1,4.5,0.8,4.5).lineTo(1.7,4.5).lineTo(2.4,4.3).lineTo(3.1,3.9).lineTo(3.7,3.5).lineTo(3.9,3.4).lineTo(4.2,3.5).lineTo(4.8,4.1).curveTo(4.1,4.9,3.1,5.4).curveTo(2.1,5.9,0.6,5.9).curveTo(-0.5,5.9,-1.6,5.4).closePath();
	this.shape_24.setTransform(-56,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.6,-11.6,127.2,40.4);


(lib.gfcStep4Content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000033").beginStroke().moveTo(-0.3,0.6).lineTo(-0.5,0.5).lineTo(-0.7,0.3).lineTo(-0.7,0).lineTo(-0.7,-0.3).lineTo(-0.5,-0.5).lineTo(-0.3,-0.6).lineTo(0,-0.7).lineTo(0.2,-0.6).lineTo(0.5,-0.5).lineTo(0.7,-0.3).lineTo(0.7,0).lineTo(0.7,0.3).lineTo(0.5,0.5).lineTo(0.2,0.6).lineTo(0,0.7).closePath();
	this.shape.setTransform(73.1,79.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.3).curveTo(-2.2,3,-2.3,2.4).curveTo(-2.5,2,-2.5,1.2).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.8).curveTo(-1.5,-1.3,-1.1,-1.5).curveTo(-0.6,-1.6,-0,-1.6).curveTo(0.5,-1.7,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,4).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.8,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.4).curveTo(-1.4,0.2,-1.4,1.2).lineTo(-1.3,2.1).curveTo(-1.3,2.5,-1.1,2.8).lineTo(-0.6,3.1).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3).curveTo(1.2,2.9,1.5,2.4).lineTo(1.5,-0.3).curveTo(1.2,-0.6,0.9,-0.7).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.4).closePath();
	this.shape_1.setTransform(68.5,76.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_2.setTransform(62.7,77.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.5).lineTo(-0.6,-3.7).lineTo(-0.4,-3.8).lineTo(0,-3.8).lineTo(0,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0,-1.1).lineTo(0,2.2).curveTo(0,2.6,0.2,2.8).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.6,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.4,2.7).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.2,3.6).lineTo(0.5,3.8).curveTo(-0.2,3.8,-0.6,3.3).closePath();
	this.shape_3.setTransform(58,76.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_4.setTransform(52.9,77.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_5.setTransform(46.9,77.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.7,1.8).lineTo(-1.6,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.6,2.1).lineTo(-0,2.2).lineTo(0.4,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1.1,1.2).lineTo(1,0.9).lineTo(0.6,0.6).lineTo(0.2,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.8,-0.9,-1.8,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.9,-2.2).lineTo(1.7,-1.9).lineTo(1.4,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.6,-2.1).lineTo(0.2,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.8,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.5,-0.7).lineTo(-0,-0.6).lineTo(0.5,-0.4).lineTo(1.1,-0.2).lineTo(1.5,0.1).lineTo(1.9,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.9,1.8).lineTo(1.4,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_6.setTransform(41.6,77.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_7.setTransform(36.4,77.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_8.setTransform(31.8,77.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#000033").beginStroke().moveTo(-2.5,3.8).lineTo(-2.5,-3.7).lineTo(-1.9,-3.7).curveTo(-1.8,-3.7,-1.8,-3.7).curveTo(-1.7,-3.7,-1.7,-3.6).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.6,-3.5,-1.6,-3.5).lineTo(-1.5,-2.8).curveTo(-1.2,-3.3,-0.7,-3.5).curveTo(-0.2,-3.8,0.4,-3.8).curveTo(0.8,-3.8,1.2,-3.6).curveTo(1.6,-3.4,1.9,-3.1).curveTo(2.2,-2.7,2.3,-2.2).curveTo(2.5,-1.6,2.5,-0.9).curveTo(2.5,-0.3,2.3,0.2).curveTo(2.1,0.7,1.8,1.1).curveTo(1.5,1.5,1.1,1.7).curveTo(0.6,2,0.1,2).curveTo(-0.5,2,-0.8,1.8).curveTo(-1.2,1.6,-1.5,1.3).lineTo(-1.5,3.8).closePath().moveTo(-0.8,-2.8).curveTo(-1.2,-2.6,-1.5,-2.2).lineTo(-1.5,0.5).curveTo(-1.2,0.9,-0.9,1).curveTo(-0.6,1.2,-0.2,1.2).curveTo(0.6,1.2,1,0.6).curveTo(1.5,0.1,1.5,-0.9).lineTo(1.4,-1.9).curveTo(1.3,-2.3,1.1,-2.5).curveTo(0.9,-2.8,0.6,-2.9).curveTo(0.4,-3,0,-3).curveTo(-0.4,-3,-0.8,-2.8).closePath();
	this.shape_9.setTransform(26.5,78.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_10.setTransform(17.6,77.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,2.8).lineTo(-2.7,-2.8).lineTo(-1.9,-2.8).lineTo(-1.7,-2.7).lineTo(-1.6,-2.6).lineTo(-0.2,1).lineTo(-0.1,1.4).lineTo(-0,1.8).lineTo(0.1,1.4).lineTo(0.2,1).lineTo(1.7,-2.6).lineTo(1.8,-2.7).lineTo(2,-2.8).lineTo(2.7,-2.8).lineTo(0.4,2.8).closePath();
	this.shape_11.setTransform(11.9,77.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,1.4).curveTo(-0.6,1.4,-0.6,1.4).curveTo(-0.6,1.4,-0.6,1.3).curveTo(-0.6,1.3,-0.6,1.3).curveTo(-0.6,1.3,-0.6,1.2).lineTo(-0.6,1.2).lineTo(-0.3,0.7).lineTo(-0.2,0.2).lineTo(-0.2,-0.5).lineTo(-0.5,-1.1).lineTo(-0.5,-1.3).lineTo(-0.4,-1.4).lineTo(0.2,-1.6).curveTo(0.5,-1.2,0.5,-0.8).curveTo(0.7,-0.3,0.6,0.1).lineTo(0.3,0.9).curveTo(0.1,1.3,-0.2,1.6).closePath();
	this.shape_12.setTransform(8,73.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.7,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_13.setTransform(3.7,77.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.4,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.4,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.6,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.5,-0.9).lineTo(-1.7,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_14.setTransform(-2.4,77.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#000033").beginStroke().moveTo(-1.5,3.7).lineTo(-0.5,1.5).lineTo(-2.7,-3.7).lineTo(-1.9,-3.7).lineTo(-1.7,-3.7).lineTo(-1.6,-3.5).lineTo(-0.1,-0).lineTo(0.1,0.5).lineTo(0.2,-0).lineTo(1.7,-3.5).lineTo(1.8,-3.7).lineTo(2,-3.7).lineTo(2.8,-3.7).lineTo(-0.4,3.5).lineTo(-0.5,3.6).lineTo(-0.7,3.7).closePath();
	this.shape_15.setTransform(-8.3,78.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_16.setTransform(-17,77.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.5,1.2).curveTo(-2.6,0.6,-2.6,-0).curveTo(-2.6,-0.7,-2.5,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,2,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.7,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,2,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0.1,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.6,-0.9).lineTo(-1.6,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0.1,2.1).curveTo(0.8,2.1,1.2,1.5).curveTo(1.6,1,1.7,-0).curveTo(1.6,-1,1.2,-1.6).curveTo(0.8,-2.1,0.1,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_17.setTransform(-23.2,77.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.5,-2.8).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.2,-4).lineTo(-0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3.1).lineTo(0.5,-2.8).lineTo(0.3,-2.7).lineTo(-0,-2.6).closePath();
	this.shape_18.setTransform(-27.6,76.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-1,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.5).lineTo(-0.6,-3.7).lineTo(-0.5,-3.8).lineTo(0.1,-3.8).lineTo(0.1,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.2).curveTo(0,2.6,0.2,2.8).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.7,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.3,2.7).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.1,3.6).lineTo(0.4,3.8).curveTo(-0.2,3.8,-0.6,3.3).closePath();
	this.shape_19.setTransform(-30.7,76.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,1,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.7,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.1,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_20.setTransform(-35.7,77.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#000033").beginStroke().moveTo(2.8,2.8).lineTo(2.8,-0.7).curveTo(2.8,-1.4,2.5,-1.7).curveTo(2.3,-2.1,1.7,-2.1).lineTo(1.2,-2).lineTo(0.8,-1.7).lineTo(0.6,-1.3).lineTo(0.5,-0.7).lineTo(0.5,2.8).lineTo(-0.5,2.8).lineTo(-0.5,-0.7).curveTo(-0.5,-1.4,-0.8,-1.7).curveTo(-1,-2.1,-1.6,-2.1).curveTo(-1.9,-2.1,-2.2,-1.9).curveTo(-2.5,-1.7,-2.8,-1.3).lineTo(-2.8,2.8).lineTo(-3.8,2.8).lineTo(-3.8,-2.7).lineTo(-3.2,-2.7).curveTo(-3.2,-2.7,-3.1,-2.7).curveTo(-3.1,-2.7,-3,-2.7).curveTo(-3,-2.7,-3,-2.6).curveTo(-3,-2.6,-2.9,-2.5).lineTo(-2.8,-2).curveTo(-2.6,-2.4,-2.1,-2.6).curveTo(-1.8,-2.8,-1.2,-2.8).curveTo(-0.7,-2.8,-0.3,-2.5).curveTo(-0,-2.2,0.1,-1.7).lineTo(0.5,-2.2).lineTo(0.9,-2.6).lineTo(1.4,-2.8).lineTo(1.9,-2.8).curveTo(2.3,-2.8,2.7,-2.7).curveTo(3.1,-2.6,3.3,-2.3).curveTo(3.5,-2,3.6,-1.6).curveTo(3.8,-1.2,3.8,-0.7).lineTo(3.8,2.8).closePath();
	this.shape_21.setTransform(-42.7,77.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_22.setTransform(-48.9,77.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.4,1.2).curveTo(-2.6,0.6,-2.6,-0).curveTo(-2.6,-0.7,-2.4,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,2,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.7,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,2,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0.1,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.5,-0.9).lineTo(-1.6,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0.1,2.1).curveTo(0.8,2.1,1.2,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.2,-1.6).curveTo(0.8,-2.1,0.1,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_23.setTransform(-54.3,77.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,4).lineTo(-0.8,-0.7).lineTo(-1.5,-0.8).lineTo(-1.6,-0.9).lineTo(-1.7,-1).lineTo(-1.7,-1.5).lineTo(-0.8,-1.5).lineTo(-0.8,-2).lineTo(-0.7,-2.8).lineTo(-0.4,-3.5).curveTo(-0.1,-3.7,0.3,-3.9).curveTo(0.6,-4,1.1,-4).lineTo(1.8,-3.9).lineTo(1.7,-3.4).curveTo(1.7,-3.4,1.7,-3.3).curveTo(1.7,-3.3,1.7,-3.3).curveTo(1.6,-3.3,1.6,-3.3).curveTo(1.6,-3.3,1.5,-3.3).lineTo(1.2,-3.3).lineTo(0.7,-3.2).lineTo(0.4,-3).lineTo(0.2,-2.5).lineTo(0.1,-1.9).lineTo(0.1,-1.5).lineTo(1.7,-1.5).lineTo(1.7,-0.7).lineTo(0.1,-0.7).lineTo(0.1,4).closePath();
	this.shape_24.setTransform(-59.3,76.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_25.setTransform(-64.3,77.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.4,-2.8).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.2,-4).lineTo(0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3.1).lineTo(0.5,-2.8).lineTo(0.3,-2.7).lineTo(0,-2.6).closePath();
	this.shape_26.setTransform(-68.7,76.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_27.setTransform(17.3,62.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#000033").beginStroke().moveTo(1.4,4.1).lineTo(1.4,0.5).curveTo(1.4,-0.2,1.1,-0.5).curveTo(0.8,-0.9,0.2,-0.9).curveTo(-0.2,-0.9,-0.6,-0.6).lineTo(-1.3,-0.1).lineTo(-1.3,4.1).lineTo(-2.3,4.1).lineTo(-2.3,-4).lineTo(-1.3,-4).lineTo(-1.3,-0.8).lineTo(-0.5,-1.4).curveTo(-0.1,-1.6,0.5,-1.6).curveTo(0.9,-1.6,1.3,-1.4).lineTo(1.9,-1.1).curveTo(2.1,-0.7,2.2,-0.3).lineTo(2.3,0.5).lineTo(2.3,4.1).closePath();
	this.shape_28.setTransform(11.3,61);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-0.9,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.5).lineTo(-0.6,-3.7).lineTo(-0.5,-3.7).lineTo(0.1,-3.7).lineTo(0.1,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.2).curveTo(0.1,2.6,0.2,2.8).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.6,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.3,2.7).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.2,3.6).lineTo(0.4,3.8).curveTo(-0.2,3.8,-0.6,3.3).closePath();
	this.shape_29.setTransform(6.4,61.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_30.setTransform(-1.5,62.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.4,1.2).curveTo(-2.6,0.6,-2.6,-0).curveTo(-2.6,-0.7,-2.4,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0.1,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,2,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.6,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,2,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0.1,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.5,-0.9).lineTo(-1.6,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0.1,2.1).curveTo(0.9,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.9,-2.1,0.1,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_31.setTransform(-7.6,62.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.4).curveTo(-2.2,3,-2.3,2.5).curveTo(-2.5,1.9,-2.5,1.2).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.5,-1.8,-0.8).curveTo(-1.5,-1.2,-1.1,-1.5).curveTo(-0.6,-1.7,-0,-1.7).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,4).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.9,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.4).curveTo(-1.4,0.2,-1.4,1.2).lineTo(-1.3,2.1).curveTo(-1.3,2.6,-1.1,2.8).curveTo(-0.9,3.1,-0.6,3.1).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3).curveTo(1.2,2.8,1.5,2.5).lineTo(1.5,-0.2).curveTo(1.2,-0.6,0.9,-0.8).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.4).closePath();
	this.shape_32.setTransform(-16.8,61.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_33.setTransform(-22.6,62.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.7,1.8).lineTo(-1.6,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.6,2.1).lineTo(-0.1,2.2).lineTo(0.4,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1.1,1.2).lineTo(1,0.9).lineTo(0.6,0.6).lineTo(0.2,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.9,-0.9,-1.9,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.2,-2.9).curveTo(0.7,-2.9,1.2,-2.7).lineTo(1.9,-2.2).lineTo(1.6,-1.9).lineTo(1.4,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.6,-2.1).lineTo(0.2,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.8,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.5,-0.7).lineTo(-0,-0.6).lineTo(0.5,-0.4).lineTo(1.1,-0.2).lineTo(1.5,0.1).lineTo(1.9,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.9,1.8).lineTo(1.4,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_34.setTransform(-27.9,62.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.2,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0.1,2.8).lineTo(-0.7,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_35.setTransform(-33.1,62.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,3.8).lineTo(-1.5,3.3).lineTo(-1.6,3.8).curveTo(-1.6,3.9,-1.6,3.9).curveTo(-1.6,3.9,-1.7,4).curveTo(-1.7,4,-1.7,4).curveTo(-1.8,4,-1.8,4).lineTo(-2.5,4).lineTo(-2.5,-4.1).lineTo(-1.5,-4.1).lineTo(-1.5,-0.8).curveTo(-1.1,-1.2,-0.7,-1.4).curveTo(-0.2,-1.6,0.4,-1.7).curveTo(0.8,-1.7,1.2,-1.5).curveTo(1.6,-1.3,1.9,-0.9).curveTo(2.2,-0.6,2.3,-0).curveTo(2.5,0.5,2.5,1).curveTo(2.5,1.7,2.3,2.3).curveTo(2.1,2.8,1.8,3.2).curveTo(1.5,3.7,1.1,3.8).curveTo(0.6,4.1,0.1,4.1).curveTo(-0.5,4.1,-0.9,3.8).closePath().moveTo(-0.8,-0.7).curveTo(-1.2,-0.5,-1.5,-0).lineTo(-1.5,2.7).curveTo(-1.2,3,-0.9,3.1).curveTo(-0.6,3.3,-0.2,3.3).curveTo(0.6,3.3,1,2.8).curveTo(1.5,2.2,1.5,1.1).curveTo(1.5,0.1,1.1,-0.4).curveTo(0.7,-0.9,0,-0.9).curveTo(-0.5,-0.9,-0.8,-0.7).closePath();
	this.shape_36.setTransform(-38.6,61.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.7,1.8).lineTo(-1.6,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.7,2.1).lineTo(-0,2.2).lineTo(0.4,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1.1,1.2).lineTo(1,0.9).lineTo(0.6,0.6).lineTo(0.2,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.8,-0.9,-1.8,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.9,-2.2).lineTo(1.7,-1.9).lineTo(1.4,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.6,-2.1).lineTo(0.2,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.8,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.5,-0.7).lineTo(-0,-0.6).lineTo(0.5,-0.4).lineTo(1.1,-0.2).lineTo(1.5,0.1).lineTo(1.9,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.9,1.8).lineTo(1.4,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_37.setTransform(-47,62.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#000033").beginStroke().moveTo(-2.5,3.8).lineTo(-2.5,-3.7).lineTo(-1.9,-3.7).curveTo(-1.8,-3.7,-1.8,-3.7).curveTo(-1.7,-3.7,-1.7,-3.6).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.6,-3.5,-1.6,-3.5).lineTo(-1.5,-2.8).curveTo(-1.2,-3.3,-0.7,-3.5).curveTo(-0.2,-3.8,0.4,-3.8).curveTo(0.8,-3.8,1.2,-3.6).curveTo(1.6,-3.4,1.9,-3.1).curveTo(2.2,-2.7,2.3,-2.2).curveTo(2.5,-1.6,2.5,-0.9).curveTo(2.5,-0.3,2.3,0.2).curveTo(2.1,0.7,1.8,1.1).curveTo(1.5,1.5,1.1,1.7).curveTo(0.6,2,0.1,2).curveTo(-0.5,2,-0.8,1.8).curveTo(-1.2,1.6,-1.5,1.3).lineTo(-1.5,3.8).closePath().moveTo(-0.8,-2.8).curveTo(-1.2,-2.6,-1.5,-2.2).lineTo(-1.5,0.5).curveTo(-1.2,0.9,-0.9,1).curveTo(-0.6,1.2,-0.2,1.2).curveTo(0.6,1.2,1,0.6).curveTo(1.5,0.1,1.5,-0.9).lineTo(1.4,-1.9).curveTo(1.3,-2.3,1.1,-2.5).curveTo(0.9,-2.8,0.6,-2.9).curveTo(0.4,-3,0,-3).curveTo(-0.4,-3,-0.8,-2.8).closePath();
	this.shape_38.setTransform(-52.3,63.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_39.setTransform(-58.4,62.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-0.9,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.5).lineTo(-0.6,-3.7).lineTo(-0.4,-3.7).lineTo(0,-3.7).lineTo(0,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0,-1.1).lineTo(0,2.2).curveTo(0,2.6,0.2,2.8).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.6,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.4,2.7).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.2,3.6).lineTo(0.5,3.8).curveTo(-0.2,3.8,-0.6,3.3).closePath();
	this.shape_40.setTransform(-63.2,61.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.7,1.8).lineTo(-1.7,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.7,2.1).lineTo(-0,2.2).lineTo(0.4,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1,1.2).lineTo(1,0.9).lineTo(0.6,0.6).lineTo(0.1,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.9,-0.9,-1.8,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.1,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.9,-2.2).lineTo(1.7,-1.9).lineTo(1.4,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.7,-2.1).lineTo(0.1,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.8,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.5,-0.7).lineTo(-0,-0.6).lineTo(0.5,-0.4).lineTo(1,-0.2).lineTo(1.6,0.1).lineTo(1.9,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.9,1.8).lineTo(1.4,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_41.setTransform(-67.6,62.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-1,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.5).lineTo(-0.6,-3.7).lineTo(-0.5,-3.7).lineTo(0.1,-3.7).lineTo(0.1,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.2).curveTo(0,2.6,0.2,2.8).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.6,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.3,2.7).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.1,3.6).lineTo(0.4,3.8).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_42.setTransform(49.3,46.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#000033").beginStroke().moveTo(1.7,2.8).lineTo(1.5,2.7).lineTo(1.3,2.6).lineTo(-0,0.4).lineTo(-0.1,0.5).lineTo(-0.1,0.7).lineTo(-1.5,2.6).lineTo(-1.6,2.7).lineTo(-1.8,2.8).lineTo(-2.6,2.8).lineTo(-0.7,-0.1).lineTo(-2.6,-2.8).lineTo(-1.6,-2.8).lineTo(-1.5,-2.8).lineTo(-1.4,-2.6).lineTo(0,-0.6).lineTo(0.2,-0.9).lineTo(1.4,-2.6).lineTo(1.5,-2.8).lineTo(1.6,-2.8).lineTo(2.5,-2.8).lineTo(0.7,-0.1).lineTo(2.6,2.8).closePath();
	this.shape_43.setTransform(44.5,47.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_44.setTransform(38.9,47.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_45.setTransform(32.9,47);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.4).curveTo(-2.2,3,-2.3,2.5).curveTo(-2.5,1.9,-2.5,1.2).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.5,-1.8,-0.9).curveTo(-1.5,-1.3,-1.1,-1.5).curveTo(-0.6,-1.7,-0,-1.7).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,4).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.9,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.3).curveTo(-1.4,0.2,-1.4,1.2).lineTo(-1.3,2.1).curveTo(-1.3,2.5,-1.1,2.8).lineTo(-0.6,3.1).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3).curveTo(1.2,2.8,1.5,2.5).lineTo(1.5,-0.2).curveTo(1.2,-0.6,0.9,-0.8).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.3).closePath();
	this.shape_46.setTransform(23.8,45.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_47.setTransform(17.9,47);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_48.setTransform(11.9,47.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#000033").beginStroke().moveTo(2.8,2.8).lineTo(2.8,-0.7).curveTo(2.8,-1.4,2.5,-1.7).curveTo(2.3,-2.1,1.7,-2.1).lineTo(1.2,-2).lineTo(0.9,-1.7).lineTo(0.6,-1.3).lineTo(0.5,-0.7).lineTo(0.5,2.8).lineTo(-0.5,2.8).lineTo(-0.5,-0.7).curveTo(-0.5,-1.4,-0.8,-1.7).curveTo(-1,-2.1,-1.6,-2.1).curveTo(-1.9,-2.1,-2.2,-1.9).curveTo(-2.5,-1.7,-2.8,-1.3).lineTo(-2.8,2.8).lineTo(-3.8,2.8).lineTo(-3.8,-2.7).lineTo(-3.2,-2.7).curveTo(-3.2,-2.7,-3.1,-2.7).curveTo(-3.1,-2.7,-3,-2.7).curveTo(-3,-2.7,-3,-2.6).curveTo(-3,-2.6,-2.9,-2.5).lineTo(-2.8,-2).curveTo(-2.6,-2.4,-2.1,-2.6).curveTo(-1.8,-2.8,-1.2,-2.8).curveTo(-0.7,-2.8,-0.3,-2.5).curveTo(-0,-2.2,0.1,-1.7).lineTo(0.5,-2.2).lineTo(0.9,-2.6).lineTo(1.4,-2.8).lineTo(1.9,-2.8).curveTo(2.3,-2.8,2.7,-2.7).curveTo(3.1,-2.6,3.3,-2.3).curveTo(3.5,-2,3.6,-1.6).curveTo(3.8,-1.2,3.8,-0.7).lineTo(3.8,2.8).closePath();
	this.shape_49.setTransform(4.6,47);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#000033").beginStroke().moveTo(2.8,2.8).lineTo(2.8,-0.7).curveTo(2.8,-1.4,2.5,-1.7).curveTo(2.3,-2.1,1.7,-2.1).lineTo(1.2,-2).lineTo(0.8,-1.7).lineTo(0.6,-1.3).lineTo(0.5,-0.7).lineTo(0.5,2.8).lineTo(-0.5,2.8).lineTo(-0.5,-0.7).curveTo(-0.5,-1.4,-0.8,-1.7).curveTo(-1,-2.1,-1.6,-2.1).curveTo(-1.9,-2.1,-2.2,-1.9).curveTo(-2.5,-1.7,-2.8,-1.3).lineTo(-2.8,2.8).lineTo(-3.8,2.8).lineTo(-3.8,-2.7).lineTo(-3.2,-2.7).curveTo(-3.2,-2.7,-3.1,-2.7).curveTo(-3.1,-2.7,-3,-2.7).curveTo(-3,-2.7,-3,-2.6).curveTo(-3,-2.6,-2.9,-2.5).lineTo(-2.8,-2).curveTo(-2.6,-2.4,-2.1,-2.6).curveTo(-1.8,-2.8,-1.2,-2.8).curveTo(-0.7,-2.8,-0.3,-2.5).curveTo(-0,-2.2,0.1,-1.7).lineTo(0.5,-2.2).lineTo(0.9,-2.6).lineTo(1.4,-2.8).lineTo(1.9,-2.8).curveTo(2.3,-2.8,2.7,-2.7).curveTo(3.1,-2.6,3.3,-2.3).curveTo(3.5,-2,3.6,-1.6).curveTo(3.8,-1.2,3.8,-0.7).lineTo(3.8,2.8).closePath();
	this.shape_50.setTransform(-4.4,47);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.5,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.5,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.6,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.9,2.1,1.2,1.5).curveTo(1.7,1,1.7,-0).curveTo(1.7,-1,1.2,-1.6).curveTo(0.9,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_51.setTransform(-12.1,47.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,2.7).curveTo(-1.2,2.5,-1.6,2.1).lineTo(-2.1,1.2).curveTo(-2.3,0.7,-2.3,-0).curveTo(-2.3,-0.6,-2.1,-1.2).curveTo(-1.9,-1.7,-1.6,-2.1).curveTo(-1.3,-2.5,-0.8,-2.7).curveTo(-0.3,-2.9,0.4,-2.9).curveTo(0.9,-2.9,1.4,-2.7).curveTo(1.8,-2.5,2.2,-2.2).lineTo(1.9,-1.8).lineTo(1.8,-1.7).lineTo(1.7,-1.7).lineTo(1.5,-1.7).lineTo(1.3,-1.9).lineTo(0.9,-2.1).lineTo(0.4,-2.1).curveTo(0,-2.1,-0.3,-2).lineTo(-0.8,-1.6).lineTo(-1.2,-0.9).lineTo(-1.3,-0).curveTo(-1.3,0.5,-1.1,0.9).curveTo(-1,1.3,-0.8,1.5).curveTo(-0.6,1.8,-0.3,2).lineTo(0.4,2.1).lineTo(1,2).lineTo(1.3,1.8).lineTo(1.6,1.6).lineTo(1.8,1.5).lineTo(2,1.6).lineTo(2.3,2).lineTo(1.8,2.4).lineTo(1.3,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.3,2.9,-0.8,2.7).closePath();
	this.shape_52.setTransform(-17.7,47.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_53.setTransform(-23.3,47.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_54.setTransform(-27.9,47);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.5,1.2).curveTo(-2.6,0.6,-2.6,-0).curveTo(-2.6,-0.7,-2.5,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.7,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0.1,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0.1,2.1).curveTo(0.8,2.1,1.2,1.5).curveTo(1.7,1,1.7,-0).curveTo(1.7,-1,1.2,-1.6).curveTo(0.8,-2.1,0.1,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_55.setTransform(-36.1,47.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-1,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.5).lineTo(-0.6,-3.7).lineTo(-0.5,-3.7).lineTo(0.1,-3.7).lineTo(0.1,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.2).curveTo(0,2.6,0.2,2.8).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.7,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.3,2.7).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.1,3.6).lineTo(0.4,3.8).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_56.setTransform(-41.1,46.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.5).lineTo(-0.6,-3.7).lineTo(-0.4,-3.7).lineTo(0,-3.7).lineTo(0,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0,-1.1).lineTo(0,2.2).curveTo(0,2.6,0.2,2.8).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.6,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.4,2.7).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.2,3.6).lineTo(0.5,3.8).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_57.setTransform(-47.8,46.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_58.setTransform(-52.9,47);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,1,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.6,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_59.setTransform(-58.8,47.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#000033").beginStroke().moveTo(1.6,2.8).curveTo(1.5,2.8,1.5,2.8).curveTo(1.5,2.8,1.5,2.8).curveTo(1.4,2.7,1.4,2.7).curveTo(1.4,2.7,1.4,2.6).lineTo(0.1,-1.2).lineTo(0.1,-1.4).lineTo(-0,-1.7).lineTo(-0.1,-1.4).lineTo(-0.1,-1.2).lineTo(-1.4,2.6).curveTo(-1.4,2.7,-1.4,2.7).curveTo(-1.4,2.7,-1.5,2.8).curveTo(-1.5,2.8,-1.5,2.8).curveTo(-1.6,2.8,-1.6,2.8).lineTo(-2.3,2.8).lineTo(-4.1,-2.8).lineTo(-3.4,-2.8).lineTo(-3.2,-2.7).lineTo(-3.1,-2.6).lineTo(-2,1).lineTo(-1.9,1.7).lineTo(-1.8,1.4).lineTo(-1.6,1).lineTo(-0.5,-2.6).lineTo(-0.4,-2.8).lineTo(-0.2,-2.8).lineTo(0.2,-2.8).lineTo(0.4,-2.8).lineTo(0.5,-2.6).lineTo(1.7,1).lineTo(1.8,1.4).lineTo(1.9,1.7).lineTo(1.9,1.4).lineTo(2,1).lineTo(3.1,-2.6).lineTo(3.2,-2.7).lineTo(3.4,-2.8).lineTo(4.1,-2.8).lineTo(2.3,2.8).closePath();
	this.shape_60.setTransform(-65.7,47.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.5,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.5,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.6,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_61.setTransform(57.8,31.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.8,1.8).lineTo(-1.7,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.7,2.1).lineTo(-0,2.2).lineTo(0.5,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1,1.2).lineTo(0.9,0.9).lineTo(0.6,0.6).lineTo(0.1,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.8,-0.9,-1.9,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.1,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.9,-2.2).lineTo(1.7,-1.9).lineTo(1.5,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.7,-2.1).lineTo(0.1,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.9,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.4,-0.7).lineTo(0,-0.6).lineTo(0.6,-0.4).lineTo(1,-0.2).lineTo(1.6,0.1).lineTo(1.8,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.8,1.8).lineTo(1.5,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_62.setTransform(52.3,31.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-4.1).lineTo(0.5,-4.1).lineTo(0.5,4).closePath();
	this.shape_63.setTransform(48.7,30.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.3,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0.1,2.8).lineTo(-0.6,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_64.setTransform(44.5,31.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.6).lineTo(-0.6,-3.7).lineTo(-0.4,-3.7).lineTo(0,-3.7).lineTo(0,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0,-1.1).lineTo(0,2.2).curveTo(0,2.6,0.2,2.8).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.6,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.4,2.7).lineTo(1.5,2.8).lineTo(1.8,3.3).lineTo(1.2,3.6).lineTo(0.5,3.7).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_65.setTransform(37.3,31);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#000033").beginStroke().moveTo(1.4,4).lineTo(1.4,0.5).curveTo(1.4,-0.1,1.1,-0.5).curveTo(0.8,-0.8,0.2,-0.8).curveTo(-0.2,-0.8,-0.6,-0.6).lineTo(-1.3,-0.1).lineTo(-1.3,4).lineTo(-2.3,4).lineTo(-2.3,-4.1).lineTo(-1.3,-4.1).lineTo(-1.3,-0.8).lineTo(-0.5,-1.4).curveTo(-0.1,-1.6,0.5,-1.6).curveTo(0.9,-1.6,1.3,-1.4).lineTo(1.9,-1.1).curveTo(2.1,-0.7,2.2,-0.4).lineTo(2.3,0.5).lineTo(2.3,4).closePath();
	this.shape_66.setTransform(32.2,30.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.2,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_67.setTransform(26.3,32.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.4,-2.8).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.2,-3.9).lineTo(0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3).lineTo(0.5,-2.8).lineTo(0.3,-2.7).lineTo(0,-2.7).closePath();
	this.shape_68.setTransform(22.1,30.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#000033").beginStroke().moveTo(2.8,2.8).lineTo(2.8,-0.7).curveTo(2.8,-1.4,2.5,-1.7).curveTo(2.2,-2.1,1.7,-2.1).lineTo(1.3,-2).lineTo(0.8,-1.7).lineTo(0.6,-1.3).lineTo(0.5,-0.7).lineTo(0.5,2.8).lineTo(-0.5,2.8).lineTo(-0.5,-0.7).curveTo(-0.5,-1.4,-0.8,-1.7).curveTo(-1,-2.1,-1.6,-2.1).curveTo(-1.9,-2.1,-2.2,-1.9).curveTo(-2.5,-1.7,-2.8,-1.3).lineTo(-2.8,2.8).lineTo(-3.8,2.8).lineTo(-3.8,-2.7).lineTo(-3.2,-2.7).curveTo(-3.2,-2.7,-3.1,-2.7).curveTo(-3.1,-2.7,-3,-2.7).curveTo(-3,-2.7,-3,-2.6).curveTo(-3,-2.6,-2.9,-2.5).lineTo(-2.9,-2).curveTo(-2.6,-2.4,-2.1,-2.6).curveTo(-1.8,-2.8,-1.2,-2.8).curveTo(-0.7,-2.8,-0.3,-2.5).curveTo(-0,-2.2,0.1,-1.7).lineTo(0.5,-2.2).lineTo(0.9,-2.6).lineTo(1.4,-2.8).lineTo(1.9,-2.8).curveTo(2.3,-2.8,2.7,-2.7).curveTo(3,-2.6,3.3,-2.3).curveTo(3.6,-2,3.6,-1.6).curveTo(3.8,-1.2,3.8,-0.7).lineTo(3.8,2.8).closePath();
	this.shape_69.setTransform(16.4,31.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.7,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_70.setTransform(5.9,31.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.4,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.4,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.6,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.5,-0.9).lineTo(-1.7,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_71.setTransform(-0.2,31.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,3.9).lineTo(-0.5,0.8).lineTo(-3.4,-4).lineTo(-2.5,-4).lineTo(-2.3,-3.9).lineTo(-2.1,-3.7).lineTo(-0.3,-0.6).lineTo(-0.1,-0.3).lineTo(0,0.1).lineTo(0.2,-0.3).lineTo(0.3,-0.6).lineTo(2.1,-3.7).lineTo(2.3,-3.9).lineTo(2.5,-4).lineTo(3.4,-4).lineTo(0.5,0.8).lineTo(0.5,3.9).closePath();
	this.shape_72.setTransform(-6.7,30.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#000033").beginStroke().moveTo(-0.3,0.7).lineTo(-0.5,0.5).lineTo(-0.7,0.2).lineTo(-0.7,-0).lineTo(-0.7,-0.3).lineTo(-0.5,-0.5).lineTo(-0.3,-0.7).lineTo(-0,-0.7).lineTo(0.2,-0.7).lineTo(0.5,-0.5).lineTo(0.6,-0.3).lineTo(0.7,-0).lineTo(0.6,0.2).lineTo(0.5,0.5).lineTo(0.2,0.7).lineTo(-0,0.7).closePath();
	this.shape_73.setTransform(-14.2,34.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.4).curveTo(-2.2,3,-2.3,2.5).curveTo(-2.5,1.9,-2.5,1.2).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.5,-1.8,-0.9).curveTo(-1.5,-1.2,-1.1,-1.5).curveTo(-0.6,-1.7,-0,-1.7).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,4).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.9,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.3).curveTo(-1.4,0.2,-1.4,1.2).lineTo(-1.3,2.1).curveTo(-1.3,2.5,-1.1,2.8).lineTo(-0.6,3.2).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3).curveTo(1.2,2.8,1.5,2.5).lineTo(1.5,-0.2).curveTo(1.2,-0.6,0.9,-0.8).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.3).closePath();
	this.shape_74.setTransform(-18.7,30.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_75.setTransform(-24.7,31.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.7,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_76.setTransform(-30.6,31.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-0.9,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.6).lineTo(-0.6,-3.7).lineTo(-0.4,-3.7).lineTo(0,-3.7).lineTo(0,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0,-1.1).lineTo(0,2.2).curveTo(0.1,2.6,0.2,2.8).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.7,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.4,2.7).lineTo(1.5,2.8).lineTo(1.8,3.3).lineTo(1.1,3.6).lineTo(0.5,3.7).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_77.setTransform(-35,31);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.7,1.8).lineTo(-1.6,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.6,2.1).lineTo(-0,2.2).lineTo(0.4,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1.1,1.2).lineTo(1,0.9).lineTo(0.6,0.6).lineTo(0.2,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.8,-0.9,-1.8,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.2,-2.9).curveTo(0.7,-2.9,1.2,-2.7).lineTo(1.9,-2.2).lineTo(1.6,-1.9).lineTo(1.4,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.6,-2.1).lineTo(0.2,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.8,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.5,-0.7).lineTo(-0,-0.6).lineTo(0.5,-0.4).lineTo(1.1,-0.2).lineTo(1.5,0.1).lineTo(1.9,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.9,1.8).lineTo(1.4,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_78.setTransform(-39.5,31.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_79.setTransform(-43.5,31.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_80.setTransform(-48.7,31.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.4).curveTo(-2.2,3,-2.3,2.5).curveTo(-2.5,1.9,-2.5,1.2).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.5,-1.8,-0.9).curveTo(-1.5,-1.2,-1.1,-1.5).curveTo(-0.6,-1.7,-0,-1.7).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,4).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.9,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.3).curveTo(-1.4,0.2,-1.4,1.2).lineTo(-1.3,2.1).curveTo(-1.3,2.5,-1.1,2.8).lineTo(-0.6,3.2).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3).curveTo(1.2,2.8,1.5,2.5).lineTo(1.5,-0.2).curveTo(1.2,-0.6,0.9,-0.8).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.3).closePath();
	this.shape_81.setTransform(-54.9,30.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_82.setTransform(-60.8,31.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.7,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_83.setTransform(-67,31.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.5,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.5,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.6,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_84.setTransform(43.4,16.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-0.9,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.6).lineTo(-0.6,-3.7).lineTo(-0.4,-3.7).lineTo(0,-3.7).lineTo(0,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0,-1.1).lineTo(0,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.7,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.4,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.1,3.6).lineTo(0.5,3.7).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_85.setTransform(38.4,15.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_86.setTransform(31.9,16.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_87.setTransform(26.7,16.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.4).curveTo(-2.2,3,-2.3,2.5).curveTo(-2.5,2,-2.5,1.3).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.9).curveTo(-1.5,-1.2,-1.1,-1.4).curveTo(-0.6,-1.7,-0,-1.7).curveTo(0.5,-1.7,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.9,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.3).curveTo(-1.4,0.2,-1.4,1.3).lineTo(-1.3,2.2).curveTo(-1.3,2.6,-1.1,2.8).lineTo(-0.6,3.2).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3.1).curveTo(1.2,2.8,1.5,2.5).lineTo(1.5,-0.2).curveTo(1.2,-0.6,0.9,-0.8).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.3).closePath();
	this.shape_88.setTransform(20.5,15.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,1,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.7,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.1,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_89.setTransform(14.7,16.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_90.setTransform(9.3,16.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_91.setTransform(4.7,16.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_92.setTransform(-2.1,16.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_93.setTransform(-7.5,16.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.5,1.2).curveTo(-2.6,0.6,-2.6,-0).curveTo(-2.6,-0.7,-2.5,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.7,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0.1,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0.1,2.1).curveTo(0.8,2.1,1.2,1.5).curveTo(1.7,1,1.7,-0).curveTo(1.7,-1,1.2,-1.6).curveTo(0.8,-2.1,0.1,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_94.setTransform(-13.6,16.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#000033").beginStroke().moveTo(-1.4,3.7).lineTo(-0.4,1.5).lineTo(-2.8,-3.7).lineTo(-1.9,-3.7).lineTo(-1.7,-3.7).lineTo(-1.6,-3.5).lineTo(-0.1,-0).lineTo(0,0.5).lineTo(0.2,-0).lineTo(1.6,-3.5).lineTo(1.8,-3.7).lineTo(1.9,-3.7).lineTo(2.7,-3.7).lineTo(-0.3,3.5).lineTo(-0.5,3.6).lineTo(-0.8,3.7).closePath();
	this.shape_95.setTransform(-19.5,17.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-0.9,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.7).lineTo(0,-3.7).lineTo(0,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0,-1.1).lineTo(0,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.7,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.3,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.1,3.6).lineTo(0.4,3.7).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_96.setTransform(-27,15.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_97.setTransform(-32.1,16.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.2,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0.1,2.8).lineTo(-0.7,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_98.setTransform(-38.1,16.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#000033").beginStroke().moveTo(1.6,2.8).curveTo(1.5,2.8,1.5,2.8).curveTo(1.5,2.8,1.4,2.7).curveTo(1.4,2.7,1.4,2.7).curveTo(1.4,2.7,1.4,2.6).lineTo(0.1,-1.2).lineTo(0.1,-1.4).lineTo(-0,-1.7).lineTo(-0.1,-1.4).lineTo(-0.1,-1.2).lineTo(-1.4,2.6).curveTo(-1.4,2.7,-1.4,2.7).curveTo(-1.4,2.7,-1.5,2.7).curveTo(-1.5,2.8,-1.5,2.8).curveTo(-1.6,2.8,-1.6,2.8).lineTo(-2.3,2.8).lineTo(-4.1,-2.8).lineTo(-3.4,-2.8).lineTo(-3.2,-2.7).lineTo(-3.1,-2.5).lineTo(-2,1).lineTo(-1.9,1.7).lineTo(-1.8,1.4).lineTo(-1.6,1).lineTo(-0.5,-2.6).lineTo(-0.4,-2.8).lineTo(-0.2,-2.8).lineTo(0.2,-2.8).lineTo(0.4,-2.8).lineTo(0.5,-2.6).lineTo(1.7,1).lineTo(1.8,1.4).lineTo(1.9,1.7).lineTo(1.9,1.4).lineTo(2,1).lineTo(3.1,-2.5).lineTo(3.2,-2.7).lineTo(3.4,-2.8).lineTo(4.1,-2.8).lineTo(2.3,2.8).closePath();
	this.shape_99.setTransform(-44.9,16.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_100.setTransform(-55.1,16.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.5,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.5,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.7,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.9,2.1,1.2,1.5).curveTo(1.7,1,1.7,-0).curveTo(1.7,-1,1.2,-1.6).curveTo(0.9,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_101.setTransform(-61.2,16.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#000033").beginStroke().moveTo(-1.4,3.7).lineTo(-0.4,1.5).lineTo(-2.8,-3.7).lineTo(-1.9,-3.7).lineTo(-1.7,-3.7).lineTo(-1.6,-3.5).lineTo(-0.1,-0).lineTo(0,0.5).lineTo(0.2,-0).lineTo(1.6,-3.5).lineTo(1.8,-3.7).lineTo(2,-3.7).lineTo(2.7,-3.7).lineTo(-0.4,3.5).lineTo(-0.5,3.6).lineTo(-0.7,3.7).closePath();
	this.shape_102.setTransform(-67.1,17.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_103.setTransform(56,1.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.4,1.2).curveTo(-2.6,0.6,-2.7,-0).curveTo(-2.6,-0.7,-2.4,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,2,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.6,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,2,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.5,-0.9).lineTo(-1.6,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_104.setTransform(49.9,1.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.5,-2.9).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.3,-3.9).lineTo(0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(0,-2.7).closePath();
	this.shape_105.setTransform(45.5,0.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.8).lineTo(0.1,-3.8).lineTo(0.1,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.6,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.3,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.2,3.6).lineTo(0.5,3.7).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_106.setTransform(42.3,0.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.3,-1.4,1,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0.1,2.8).lineTo(-0.6,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_107.setTransform(37.4,1.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#000033").beginStroke().moveTo(2.8,2.8).lineTo(2.8,-0.7).curveTo(2.8,-1.4,2.5,-1.7).curveTo(2.3,-2.1,1.7,-2.1).lineTo(1.2,-2).lineTo(0.9,-1.7).lineTo(0.6,-1.3).lineTo(0.5,-0.7).lineTo(0.5,2.8).lineTo(-0.5,2.8).lineTo(-0.5,-0.7).curveTo(-0.5,-1.4,-0.7,-1.7).curveTo(-1.1,-2.1,-1.6,-2.1).curveTo(-1.9,-2.1,-2.2,-1.9).curveTo(-2.5,-1.7,-2.8,-1.3).lineTo(-2.8,2.8).lineTo(-3.8,2.8).lineTo(-3.8,-2.7).lineTo(-3.2,-2.7).curveTo(-3.1,-2.7,-3.1,-2.7).curveTo(-3.1,-2.7,-3,-2.7).curveTo(-3,-2.6,-3,-2.6).curveTo(-3,-2.6,-3,-2.5).lineTo(-2.8,-2).curveTo(-2.5,-2.4,-2.2,-2.6).curveTo(-1.8,-2.8,-1.3,-2.8).curveTo(-0.7,-2.8,-0.4,-2.5).curveTo(0,-2.2,0.2,-1.7).lineTo(0.4,-2.2).lineTo(0.9,-2.6).lineTo(1.4,-2.8).lineTo(1.9,-2.8).curveTo(2.4,-2.8,2.7,-2.7).curveTo(3,-2.6,3.3,-2.3).curveTo(3.6,-2,3.7,-1.6).curveTo(3.8,-1.2,3.8,-0.7).lineTo(3.8,2.8).closePath();
	this.shape_108.setTransform(30.4,1.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_109.setTransform(24.1,1.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.4,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.4,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.6,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.5,-0.9).lineTo(-1.7,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_110.setTransform(18.7,1.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,4).lineTo(-0.9,-0.8).lineTo(-1.5,-0.8).lineTo(-1.7,-0.9).lineTo(-1.8,-1.1).lineTo(-1.8,-1.4).lineTo(-0.9,-1.4).lineTo(-0.9,-2).lineTo(-0.8,-2.9).lineTo(-0.3,-3.5).curveTo(-0.1,-3.7,0.3,-3.9).curveTo(0.6,-4,1,-4).lineTo(1.7,-3.9).lineTo(1.7,-3.4).curveTo(1.7,-3.4,1.7,-3.3).curveTo(1.7,-3.3,1.7,-3.3).curveTo(1.6,-3.3,1.6,-3.3).curveTo(1.6,-3.2,1.6,-3.2).lineTo(1.2,-3.2).lineTo(0.7,-3.2).lineTo(0.4,-3).lineTo(0.1,-2.6).lineTo(0.1,-2).lineTo(0.1,-1.4).lineTo(1.7,-1.4).lineTo(1.7,-0.8).lineTo(0.1,-0.8).lineTo(0.1,4).closePath();
	this.shape_111.setTransform(13.8,0.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_112.setTransform(8.7,1.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.5,-2.9).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.2,-3.9).lineTo(-0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(-0,-2.7).closePath();
	this.shape_113.setTransform(4.4,0.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_114.setTransform(-2.6,1.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#000033").beginStroke().moveTo(1.4,4).lineTo(1.4,0.5).curveTo(1.4,-0.2,1.1,-0.5).curveTo(0.8,-0.9,0.2,-0.8).curveTo(-0.2,-0.9,-0.6,-0.6).lineTo(-1.3,-0).lineTo(-1.3,4).lineTo(-2.3,4).lineTo(-2.3,-4.1).lineTo(-1.3,-4.1).lineTo(-1.3,-0.8).lineTo(-0.5,-1.4).curveTo(-0.1,-1.6,0.5,-1.6).curveTo(0.9,-1.6,1.3,-1.5).lineTo(1.9,-1).curveTo(2.1,-0.7,2.2,-0.4).lineTo(2.3,0.5).lineTo(2.3,4).closePath();
	this.shape_115.setTransform(-8.6,0.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.8).lineTo(0.1,-3.8).lineTo(0.1,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.6,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.3,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.2,3.6).lineTo(0.4,3.7).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_116.setTransform(-13.5,0.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_117.setTransform(-21.2,1.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#000033").beginStroke().moveTo(-2.2,2.8).lineTo(-2.2,2.4).lineTo(-2.1,2.2).lineTo(-2,2).lineTo(1.1,-2).lineTo(-2,-2).lineTo(-2,-2.8).lineTo(2.2,-2.8).lineTo(2.2,-2.4).lineTo(2.2,-2.2).lineTo(2.1,-2).lineTo(-1,2).lineTo(2.1,2).lineTo(2.1,2.8).closePath();
	this.shape_118.setTransform(-26.6,1.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.5,-2.9).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.3,-3.9).lineTo(-0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(-0,-2.7).closePath();
	this.shape_119.setTransform(-30.4,0.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_120.setTransform(-33.4,1.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,1,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.6,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_121.setTransform(-38.6,1.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#000033").beginStroke().moveTo(2.8,2.8).lineTo(2.8,-0.7).curveTo(2.8,-1.4,2.5,-1.7).curveTo(2.3,-2.1,1.7,-2.1).lineTo(1.2,-2).lineTo(0.9,-1.7).lineTo(0.6,-1.3).lineTo(0.5,-0.7).lineTo(0.5,2.8).lineTo(-0.5,2.8).lineTo(-0.5,-0.7).curveTo(-0.5,-1.4,-0.8,-1.7).curveTo(-1.1,-2.1,-1.6,-2.1).curveTo(-1.9,-2.1,-2.2,-1.9).curveTo(-2.6,-1.7,-2.8,-1.3).lineTo(-2.8,2.8).lineTo(-3.8,2.8).lineTo(-3.8,-2.7).lineTo(-3.2,-2.7).curveTo(-3.1,-2.7,-3.1,-2.7).curveTo(-3.1,-2.7,-3,-2.7).curveTo(-3,-2.6,-3,-2.6).curveTo(-3,-2.6,-2.9,-2.5).lineTo(-2.8,-2).curveTo(-2.6,-2.4,-2.2,-2.6).curveTo(-1.8,-2.8,-1.3,-2.8).curveTo(-0.7,-2.8,-0.4,-2.5).curveTo(0,-2.2,0.1,-1.7).lineTo(0.4,-2.2).lineTo(0.9,-2.6).lineTo(1.4,-2.8).lineTo(1.9,-2.8).curveTo(2.4,-2.8,2.7,-2.7).curveTo(3.1,-2.6,3.3,-2.3).curveTo(3.5,-2,3.7,-1.6).curveTo(3.8,-1.2,3.8,-0.7).lineTo(3.8,2.8).closePath();
	this.shape_122.setTransform(-45.6,1.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#000033").beginStroke().moveTo(2.8,2.8).lineTo(2.8,-0.7).curveTo(2.8,-1.4,2.5,-1.7).curveTo(2.3,-2.1,1.7,-2.1).lineTo(1.2,-2).lineTo(0.9,-1.7).lineTo(0.6,-1.3).lineTo(0.5,-0.7).lineTo(0.5,2.8).lineTo(-0.5,2.8).lineTo(-0.5,-0.7).curveTo(-0.5,-1.4,-0.8,-1.7).curveTo(-1.1,-2.1,-1.6,-2.1).curveTo(-1.9,-2.1,-2.2,-1.9).curveTo(-2.6,-1.7,-2.8,-1.3).lineTo(-2.8,2.8).lineTo(-3.8,2.8).lineTo(-3.8,-2.7).lineTo(-3.2,-2.7).curveTo(-3.1,-2.7,-3.1,-2.7).curveTo(-3.1,-2.7,-3,-2.7).curveTo(-3,-2.6,-3,-2.6).curveTo(-3,-2.6,-2.9,-2.5).lineTo(-2.8,-2).curveTo(-2.6,-2.4,-2.2,-2.6).curveTo(-1.8,-2.8,-1.3,-2.8).curveTo(-0.7,-2.8,-0.4,-2.5).curveTo(0,-2.2,0.1,-1.7).lineTo(0.4,-2.2).lineTo(0.9,-2.6).lineTo(1.4,-2.8).lineTo(1.9,-2.8).curveTo(2.4,-2.8,2.7,-2.7).curveTo(3.1,-2.6,3.3,-2.3).curveTo(3.5,-2,3.7,-1.6).curveTo(3.8,-1.2,3.8,-0.7).lineTo(3.8,2.8).closePath();
	this.shape_123.setTransform(-54.6,1.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_124.setTransform(-62.2,1.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.7,1.8).lineTo(-1.7,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.7,2.1).lineTo(-0,2.2).lineTo(0.4,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1,1.2).lineTo(1,0.9).lineTo(0.6,0.6).lineTo(0.1,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.9,-0.9,-1.8,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.1,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.9,-2.2).lineTo(1.7,-1.9).lineTo(1.4,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.7,-2.1).lineTo(0.1,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.8,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.5,-0.7).lineTo(-0,-0.6).lineTo(0.5,-0.4).lineTo(1,-0.2).lineTo(1.6,0.1).lineTo(1.9,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.9,1.8).lineTo(1.4,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_125.setTransform(-67.6,1.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.3).curveTo(-2.2,3,-2.3,2.4).curveTo(-2.5,1.9,-2.5,1.3).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.9).curveTo(-1.5,-1.3,-1.1,-1.4).curveTo(-0.6,-1.6,-0,-1.6).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.8,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.6,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.4).curveTo(-1.4,0.2,-1.4,1.3).lineTo(-1.3,2.2).curveTo(-1.3,2.6,-1.1,2.8).lineTo(-0.6,3.2).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3.1).curveTo(1.2,2.8,1.5,2.4).lineTo(1.5,-0.3).curveTo(1.2,-0.6,0.9,-0.7).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.4).closePath();
	this.shape_126.setTransform(58,-14.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_127.setTransform(52.1,-13.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,1,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.6,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_128.setTransform(46.1,-13.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginFill("#000033").beginStroke().moveTo(-2.5,3.8).lineTo(-2.5,-3.7).lineTo(-1.9,-3.7).curveTo(-1.8,-3.7,-1.8,-3.7).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.6,-3.5,-1.6,-3.5).lineTo(-1.5,-2.8).curveTo(-1.2,-3.3,-0.7,-3.5).curveTo(-0.2,-3.8,0.4,-3.8).curveTo(0.8,-3.8,1.2,-3.6).curveTo(1.6,-3.4,1.9,-3.1).curveTo(2.2,-2.7,2.3,-2.2).curveTo(2.5,-1.6,2.5,-0.9).curveTo(2.5,-0.3,2.3,0.2).curveTo(2.1,0.7,1.8,1.1).curveTo(1.5,1.5,1.1,1.7).curveTo(0.6,2,0.1,2).curveTo(-0.5,2,-0.8,1.8).curveTo(-1.2,1.6,-1.5,1.3).lineTo(-1.5,3.8).closePath().moveTo(-0.8,-2.8).curveTo(-1.2,-2.6,-1.5,-2.2).lineTo(-1.5,0.5).curveTo(-1.2,0.9,-0.9,1).curveTo(-0.6,1.2,-0.2,1.2).curveTo(0.6,1.2,1,0.6).curveTo(1.5,0.1,1.5,-0.9).lineTo(1.4,-1.9).curveTo(1.3,-2.3,1.1,-2.5).curveTo(0.9,-2.8,0.6,-2.9).curveTo(0.4,-3,0,-3).curveTo(-0.4,-3,-0.8,-2.8).closePath();
	this.shape_129.setTransform(37.8,-12.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_130.setTransform(31.5,-13.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.8,1.8).lineTo(-1.6,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.6,2.1).lineTo(-0.1,2.2).lineTo(0.5,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1.1,1.2).lineTo(0.9,0.9).lineTo(0.6,0.6).lineTo(0.2,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.9,-0.9,-1.9,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.2,-2.9).curveTo(0.7,-2.9,1.2,-2.7).lineTo(1.9,-2.2).lineTo(1.6,-1.9).lineTo(1.4,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.6,-2.1).lineTo(0.2,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.9,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.4,-0.7).lineTo(0,-0.6).lineTo(0.6,-0.4).lineTo(1.1,-0.2).lineTo(1.5,0.1).lineTo(1.8,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.8,1.8).lineTo(1.4,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_131.setTransform(23.3,-13.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.3,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_132.setTransform(18.2,-12.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_133.setTransform(12.2,-13.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.5,-2.9).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.3,-4).lineTo(-0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3.1).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(-0,-2.7).closePath();
	this.shape_134.setTransform(7.9,-14.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.beginFill("#000033").beginStroke().moveTo(1.4,4).lineTo(1.4,0.5).curveTo(1.4,-0.2,1.1,-0.5).curveTo(0.8,-0.8,0.2,-0.8).curveTo(-0.2,-0.9,-0.6,-0.6).lineTo(-1.3,-0).lineTo(-1.3,4).lineTo(-2.3,4).lineTo(-2.3,-4.1).lineTo(-1.3,-4.1).lineTo(-1.3,-0.8).lineTo(-0.5,-1.4).curveTo(-0.1,-1.6,0.5,-1.6).curveTo(0.9,-1.6,1.3,-1.5).lineTo(1.9,-1).curveTo(2.1,-0.8,2.2,-0.4).lineTo(2.3,0.5).lineTo(2.3,4).closePath();
	this.shape_135.setTransform(3.5,-15);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-0.9,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.8).lineTo(0,-3.8).lineTo(0,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0,-1.1).lineTo(0,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.7,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.3,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.1,3.6).lineTo(0.4,3.7).curveTo(-0.2,3.7,-0.6,3.3).closePath();
	this.shape_136.setTransform(-1.4,-14.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.beginFill("#000033").beginStroke().moveTo(-2.5,3.8).lineTo(-2.5,-3.7).lineTo(-1.9,-3.7).curveTo(-1.8,-3.7,-1.8,-3.7).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.6,-3.5,-1.6,-3.5).lineTo(-1.5,-2.8).curveTo(-1.2,-3.3,-0.7,-3.5).curveTo(-0.2,-3.8,0.4,-3.8).curveTo(0.8,-3.8,1.2,-3.6).curveTo(1.6,-3.4,1.9,-3.1).curveTo(2.2,-2.7,2.3,-2.2).curveTo(2.5,-1.6,2.5,-0.9).curveTo(2.5,-0.3,2.3,0.2).curveTo(2.1,0.7,1.8,1.1).curveTo(1.5,1.5,1.1,1.7).curveTo(0.6,2,0.1,2).curveTo(-0.5,2,-0.8,1.8).curveTo(-1.2,1.6,-1.5,1.3).lineTo(-1.5,3.8).closePath().moveTo(-0.8,-2.8).curveTo(-1.2,-2.6,-1.5,-2.2).lineTo(-1.5,0.5).curveTo(-1.2,0.9,-0.9,1).curveTo(-0.6,1.2,-0.2,1.2).curveTo(0.6,1.2,1,0.6).curveTo(1.5,0.1,1.5,-0.9).lineTo(1.4,-1.9).curveTo(1.3,-2.3,1.1,-2.5).curveTo(0.9,-2.8,0.6,-2.9).curveTo(0.4,-3,0,-3).curveTo(-0.4,-3,-0.8,-2.8).closePath();
	this.shape_137.setTransform(-9.2,-12.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.3,-1.4,1,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0.1,2.8).lineTo(-0.6,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_138.setTransform(-15.3,-13.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_139.setTransform(-19.5,-13.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.beginFill("#000033").beginStroke().moveTo(1.6,2.8).curveTo(1.5,2.8,1.5,2.8).curveTo(1.5,2.8,1.4,2.7).curveTo(1.4,2.7,1.4,2.7).curveTo(1.4,2.6,1.4,2.6).lineTo(0.1,-1.2).lineTo(0.1,-1.4).lineTo(-0,-1.7).lineTo(-0.1,-1.4).lineTo(-0.1,-1.2).lineTo(-1.4,2.6).curveTo(-1.4,2.6,-1.4,2.7).curveTo(-1.4,2.7,-1.5,2.7).curveTo(-1.5,2.8,-1.5,2.8).curveTo(-1.6,2.8,-1.6,2.8).lineTo(-2.3,2.8).lineTo(-4.1,-2.7).lineTo(-3.4,-2.7).lineTo(-3.2,-2.7).lineTo(-3.1,-2.5).lineTo(-2,1).lineTo(-1.9,1.8).lineTo(-1.8,1.4).lineTo(-1.6,1).lineTo(-0.5,-2.6).lineTo(-0.4,-2.7).lineTo(-0.2,-2.8).lineTo(0.2,-2.8).lineTo(0.4,-2.7).lineTo(0.5,-2.6).lineTo(1.7,1).lineTo(1.8,1.4).lineTo(1.9,1.8).lineTo(1.9,1.4).lineTo(2,1).lineTo(3.1,-2.5).lineTo(3.2,-2.7).lineTo(3.4,-2.7).lineTo(4.1,-2.7).lineTo(2.3,2.8).closePath();
	this.shape_140.setTransform(-26.1,-13.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.4,1.2).curveTo(-2.6,0.6,-2.6,-0).curveTo(-2.6,-0.7,-2.4,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,2,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.7,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,2,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0.1,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.5,-0.9).lineTo(-1.6,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0.1,2.1).curveTo(0.8,2.1,1.2,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.2,-1.6).curveTo(0.8,-2.1,0.1,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_141.setTransform(-36.3,-13.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-0.9,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.8).lineTo(0.1,-3.8).lineTo(0.1,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.6,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.3,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.2,3.6).lineTo(0.4,3.7).curveTo(-0.2,3.7,-0.6,3.3).closePath();
	this.shape_142.setTransform(-41.3,-14.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.3).curveTo(-2.2,3,-2.3,2.4).curveTo(-2.5,1.9,-2.5,1.3).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.9).curveTo(-1.5,-1.3,-1.1,-1.4).curveTo(-0.6,-1.6,-0,-1.6).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.8,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.6,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.4).curveTo(-1.4,0.2,-1.4,1.3).lineTo(-1.3,2.2).curveTo(-1.3,2.6,-1.1,2.8).lineTo(-0.6,3.2).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3.1).curveTo(1.2,2.8,1.5,2.4).lineTo(1.5,-0.3).curveTo(1.2,-0.6,0.9,-0.7).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.4).closePath();
	this.shape_143.setTransform(-49.4,-14.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_144.setTransform(-55.2,-13.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_145.setTransform(-61,-13.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_146.setTransform(-66.9,-13.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-4.1).lineTo(0.5,-4.1).lineTo(0.5,4).closePath();
	this.shape_147.setTransform(58.6,-30.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-4.1).lineTo(0.5,-4.1).lineTo(0.5,4).closePath();
	this.shape_148.setTransform(56,-30.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,1.4).curveTo(-0.6,1.4,-0.6,1.4).curveTo(-0.6,1.4,-0.6,1.3).curveTo(-0.6,1.3,-0.6,1.3).curveTo(-0.6,1.3,-0.6,1.3).lineTo(-0.6,1.2).lineTo(-0.3,0.7).lineTo(-0.2,0.2).lineTo(-0.2,-0.4).lineTo(-0.4,-1.1).lineTo(-0.5,-1.3).lineTo(-0.3,-1.3).lineTo(0.2,-1.6).curveTo(0.5,-1.2,0.6,-0.8).curveTo(0.6,-0.4,0.6,0.1).lineTo(0.3,0.9).curveTo(0.1,1.3,-0.2,1.6).closePath();
	this.shape_149.setTransform(53.6,-32.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_150.setTransform(49.3,-28.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.4,1.2).curveTo(-2.6,0.6,-2.6,-0).curveTo(-2.6,-0.7,-2.4,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0.1,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,2,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.6,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,2,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0.1,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.5,-0.9).lineTo(-1.6,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0.1,2.1).curveTo(0.9,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.9,-2.1,0.1,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_151.setTransform(43.2,-28.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.beginFill("#000033").beginStroke().moveTo(-1.5,3.7).lineTo(-0.5,1.5).lineTo(-2.7,-3.7).lineTo(-1.9,-3.7).lineTo(-1.7,-3.7).lineTo(-1.6,-3.5).lineTo(-0.1,-0).lineTo(0,0.5).lineTo(0.2,-0).lineTo(1.7,-3.5).lineTo(1.8,-3.7).lineTo(1.9,-3.7).lineTo(2.7,-3.7).lineTo(-0.3,3.5).lineTo(-0.5,3.6).curveTo(-0.5,3.6,-0.5,3.7).curveTo(-0.6,3.7,-0.6,3.7).curveTo(-0.6,3.7,-0.7,3.7).curveTo(-0.7,3.7,-0.8,3.7).closePath();
	this.shape_152.setTransform(37.3,-28);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,1.2).lineTo(-0.6,1.1).lineTo(-0.6,1.1).lineTo(-0.6,1).lineTo(-0.6,0.9).lineTo(-0.4,0.8).lineTo(-0.2,0.6).lineTo(-0,0.2).lineTo(0.1,-0.1).lineTo(-0,-0.1).curveTo(-0.3,-0.1,-0.5,-0.3).curveTo(-0.6,-0.5,-0.7,-0.8).curveTo(-0.7,-0.9,-0.6,-0.9).curveTo(-0.6,-1,-0.6,-1).curveTo(-0.6,-1.1,-0.6,-1.1).curveTo(-0.5,-1.2,-0.5,-1.2).curveTo(-0.3,-1.4,-0,-1.4).lineTo(0.3,-1.3).lineTo(0.5,-1.1).lineTo(0.6,-0.9).lineTo(0.7,-0.6).lineTo(0.6,-0.1).lineTo(0.4,0.5).lineTo(0.1,0.9).lineTo(-0.4,1.4).closePath();
	this.shape_153.setTransform(30.5,-26);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.2,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_154.setTransform(26.4,-28);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_155.setTransform(20.5,-29);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.4,-2.9).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.3,-4).lineTo(0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3.1).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(0,-2.6).closePath();
	this.shape_156.setTransform(16.1,-30.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.6).lineTo(-0.6,-3.7).lineTo(-0.4,-3.8).lineTo(0,-3.8).lineTo(0,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0,-1.1).lineTo(0,2.3).curveTo(0,2.6,0.2,2.7).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.6,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.4,2.6).lineTo(1.5,2.7).lineTo(1.8,3.2).lineTo(1.2,3.6).lineTo(0.5,3.8).curveTo(-0.2,3.7,-0.6,3.3).closePath();
	this.shape_157.setTransform(13,-29.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.4,-2.9).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.2,-4).lineTo(0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3.1).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(0,-2.6).closePath();
	this.shape_158.setTransform(9.6,-30.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_159.setTransform(6.6,-29);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.beginFill("#000033").beginStroke().moveTo(1.6,2.8).curveTo(1.5,2.8,1.5,2.8).curveTo(1.5,2.8,1.5,2.7).curveTo(1.4,2.7,1.4,2.7).curveTo(1.4,2.6,1.4,2.6).lineTo(0.1,-1.1).lineTo(0.1,-1.4).lineTo(-0,-1.7).lineTo(-0.1,-1.4).lineTo(-0.1,-1.1).lineTo(-1.4,2.6).curveTo(-1.4,2.6,-1.4,2.7).curveTo(-1.4,2.7,-1.5,2.7).curveTo(-1.5,2.8,-1.5,2.8).curveTo(-1.6,2.8,-1.6,2.8).lineTo(-2.3,2.8).lineTo(-4.1,-2.7).lineTo(-3.4,-2.7).lineTo(-3.2,-2.7).lineTo(-3.1,-2.6).lineTo(-2,1).lineTo(-1.9,1.8).lineTo(-1.8,1.4).lineTo(-1.6,1).lineTo(-0.5,-2.6).lineTo(-0.4,-2.7).lineTo(-0.2,-2.8).lineTo(0.2,-2.8).lineTo(0.4,-2.7).lineTo(0.5,-2.6).lineTo(1.7,1).lineTo(1.8,1.4).lineTo(1.9,1.8).lineTo(1.9,1.4).lineTo(2,1).lineTo(3.1,-2.6).lineTo(3.2,-2.7).lineTo(3.4,-2.7).lineTo(4.1,-2.7).lineTo(2.3,2.8).closePath();
	this.shape_160.setTransform(0,-28.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_161.setTransform(-10,-28.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_162.setTransform(-14.6,-29);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,1.4).curveTo(-0.6,1.4,-0.6,1.4).curveTo(-0.6,1.4,-0.6,1.3).curveTo(-0.6,1.3,-0.6,1.3).curveTo(-0.6,1.3,-0.6,1.3).lineTo(-0.5,1.2).lineTo(-0.3,0.7).lineTo(-0.2,0.2).lineTo(-0.2,-0.4).lineTo(-0.5,-1.1).lineTo(-0.5,-1.3).lineTo(-0.4,-1.3).lineTo(0.3,-1.6).curveTo(0.5,-1.2,0.5,-0.8).curveTo(0.7,-0.4,0.6,0.1).lineTo(0.3,0.9).curveTo(0.1,1.3,-0.3,1.6).closePath();
	this.shape_163.setTransform(-18,-32.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).lineTo(0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_164.setTransform(-22.3,-28.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.5,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.5,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.7,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.9,2.1,1.2,1.5).curveTo(1.7,1,1.7,-0).curveTo(1.7,-1,1.2,-1.6).curveTo(0.9,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_165.setTransform(-28.4,-28.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.beginFill("#000033").beginStroke().moveTo(-1.4,3.7).lineTo(-0.4,1.5).lineTo(-2.8,-3.7).lineTo(-1.9,-3.7).lineTo(-1.7,-3.7).lineTo(-1.6,-3.5).lineTo(-0.1,-0).lineTo(0,0.5).lineTo(0.2,-0).lineTo(1.6,-3.5).lineTo(1.8,-3.7).lineTo(2,-3.7).lineTo(2.7,-3.7).lineTo(-0.4,3.5).lineTo(-0.5,3.6).curveTo(-0.5,3.6,-0.5,3.7).curveTo(-0.6,3.7,-0.6,3.7).curveTo(-0.6,3.7,-0.7,3.7).curveTo(-0.7,3.7,-0.7,3.7).closePath();
	this.shape_166.setTransform(-34.3,-28);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-0.9,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.6).lineTo(-0.6,-3.7).lineTo(-0.4,-3.8).lineTo(0,-3.8).lineTo(0,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0,-1.1).lineTo(0,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.7,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.4,2.6).lineTo(1.5,2.7).lineTo(1.8,3.2).lineTo(1.1,3.6).lineTo(0.5,3.8).curveTo(-0.2,3.7,-0.6,3.3).closePath();
	this.shape_167.setTransform(-41.8,-29.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_168.setTransform(-45.5,-29);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.4,1.2).curveTo(-2.6,0.6,-2.7,-0).curveTo(-2.6,-0.7,-2.4,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,2,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.6,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,2,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.5,-0.9).lineTo(-1.6,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_169.setTransform(-50.9,-28.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.beginFill("#000033").beginStroke().moveTo(-2.5,3.8).lineTo(-2.5,-3.7).lineTo(-1.9,-3.7).curveTo(-1.8,-3.7,-1.8,-3.7).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.6,-3.5,-1.6,-3.5).lineTo(-1.5,-2.8).curveTo(-1.2,-3.3,-0.7,-3.5).curveTo(-0.2,-3.8,0.4,-3.8).curveTo(0.8,-3.8,1.2,-3.6).curveTo(1.6,-3.4,1.9,-3.1).curveTo(2.2,-2.7,2.3,-2.2).curveTo(2.5,-1.6,2.5,-0.9).curveTo(2.5,-0.3,2.3,0.2).curveTo(2.1,0.7,1.8,1.1).curveTo(1.5,1.5,1.1,1.7).curveTo(0.6,2,0.1,2).curveTo(-0.5,2,-0.8,1.8).curveTo(-1.2,1.6,-1.5,1.3).lineTo(-1.5,3.8).closePath().moveTo(-0.8,-2.8).curveTo(-1.2,-2.6,-1.5,-2.2).lineTo(-1.5,0.5).curveTo(-1.2,0.9,-0.9,1).curveTo(-0.6,1.2,-0.2,1.2).curveTo(0.6,1.2,1,0.6).curveTo(1.5,0.1,1.5,-0.9).lineTo(1.4,-1.9).curveTo(1.3,-2.3,1.1,-2.5).curveTo(0.9,-2.8,0.6,-2.9).curveTo(0.4,-3,0,-3).curveTo(-0.4,-3,-0.8,-2.8).closePath();
	this.shape_170.setTransform(-57,-28);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_171.setTransform(-63.1,-28.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_172.setTransform(-67.7,-29);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,4).lineTo(-0.8,-0.7).lineTo(-1.5,-0.8).lineTo(-1.6,-0.9).lineTo(-1.7,-1.1).lineTo(-1.7,-1.5).lineTo(-0.8,-1.5).lineTo(-0.8,-2).lineTo(-0.7,-2.9).lineTo(-0.4,-3.5).curveTo(-0.1,-3.8,0.3,-3.9).curveTo(0.6,-4,1.1,-4).lineTo(1.7,-3.9).lineTo(1.7,-3.4).curveTo(1.7,-3.4,1.7,-3.3).curveTo(1.7,-3.3,1.7,-3.3).curveTo(1.6,-3.3,1.6,-3.3).curveTo(1.6,-3.3,1.5,-3.3).lineTo(1.2,-3.3).lineTo(0.7,-3.2).lineTo(0.4,-3).lineTo(0.2,-2.5).lineTo(0.1,-2).lineTo(0.1,-1.5).lineTo(1.7,-1.5).lineTo(1.7,-0.7).lineTo(0.1,-0.7).lineTo(0.1,4).closePath();
	this.shape_173.setTransform(51.8,-45.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.5,1.2).curveTo(-2.6,0.6,-2.6,-0).curveTo(-2.6,-0.7,-2.5,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.7,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0.1,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.6,-0.9).lineTo(-1.6,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0.1,2.1).curveTo(0.8,2.1,1.2,1.5).curveTo(1.7,1,1.7,-0).curveTo(1.7,-1,1.2,-1.6).curveTo(0.8,-2.1,0.1,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_174.setTransform(46.7,-44.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_175.setTransform(37.9,-44.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.beginFill("#000033").beginStroke().moveTo(-2.5,3.8).lineTo(-2.5,-3.7).lineTo(-1.9,-3.7).curveTo(-1.8,-3.7,-1.8,-3.7).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.6,-3.5,-1.6,-3.5).lineTo(-1.5,-2.8).curveTo(-1.2,-3.3,-0.7,-3.5).curveTo(-0.2,-3.8,0.4,-3.8).curveTo(0.8,-3.8,1.2,-3.6).curveTo(1.6,-3.4,1.9,-3.1).curveTo(2.2,-2.7,2.3,-2.2).curveTo(2.5,-1.6,2.5,-0.9).curveTo(2.5,-0.3,2.3,0.2).curveTo(2.1,0.7,1.8,1.1).curveTo(1.5,1.5,1.1,1.7).curveTo(0.6,2,0.1,2).curveTo(-0.5,2,-0.8,1.8).curveTo(-1.2,1.6,-1.5,1.3).lineTo(-1.5,3.8).closePath().moveTo(-0.8,-2.8).curveTo(-1.2,-2.6,-1.5,-2.2).lineTo(-1.5,0.5).curveTo(-1.2,0.9,-0.9,1).curveTo(-0.6,1.2,-0.2,1.2).curveTo(0.6,1.2,1,0.6).curveTo(1.5,0.1,1.5,-0.9).lineTo(1.4,-1.9).curveTo(1.3,-2.3,1.1,-2.5).curveTo(0.9,-2.8,0.6,-2.9).curveTo(0.4,-3,0,-3).curveTo(-0.4,-3,-0.8,-2.8).closePath();
	this.shape_176.setTransform(32,-43.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.beginFill("#000033").beginStroke().moveTo(-1.4,3.7).lineTo(-0.4,1.5).lineTo(-2.8,-3.7).lineTo(-1.9,-3.7).lineTo(-1.7,-3.7).lineTo(-1.6,-3.5).lineTo(-0.1,-0).lineTo(0,0.5).lineTo(0.2,-0).lineTo(1.6,-3.5).lineTo(1.8,-3.7).lineTo(2,-3.7).lineTo(2.7,-3.7).lineTo(-0.4,3.5).lineTo(-0.5,3.6).lineTo(-0.7,3.7).closePath();
	this.shape_177.setTransform(26,-43.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-0.9,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.5).lineTo(-0.6,-3.7).lineTo(-0.4,-3.8).lineTo(0,-3.8).lineTo(0,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0,-1.1).lineTo(0,2.2).curveTo(0.1,2.6,0.2,2.8).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.7,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.4,2.6).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.1,3.6).lineTo(0.5,3.8).curveTo(-0.2,3.8,-0.6,3.3).closePath();
	this.shape_178.setTransform(21.3,-45);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_179.setTransform(13.6,-44.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.beginFill("#000033").beginStroke().moveTo(1.4,4.1).lineTo(1.4,0.5).curveTo(1.4,-0.1,1.1,-0.5).curveTo(0.8,-0.8,0.2,-0.9).curveTo(-0.2,-0.8,-0.6,-0.6).lineTo(-1.3,-0.1).lineTo(-1.3,4.1).lineTo(-2.3,4.1).lineTo(-2.3,-4).lineTo(-1.3,-4).lineTo(-1.3,-0.8).lineTo(-0.5,-1.4).curveTo(-0.1,-1.6,0.5,-1.6).curveTo(0.9,-1.6,1.3,-1.5).lineTo(1.9,-1).curveTo(2.1,-0.8,2.2,-0.3).lineTo(2.3,0.5).lineTo(2.3,4.1).closePath();
	this.shape_180.setTransform(7.6,-45.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.5).lineTo(-0.6,-3.7).lineTo(-0.5,-3.8).lineTo(0.1,-3.8).lineTo(0.1,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.2).curveTo(0.1,2.6,0.2,2.8).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.6,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.3,2.6).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.2,3.6).lineTo(0.4,3.8).curveTo(-0.2,3.8,-0.6,3.3).closePath();
	this.shape_181.setTransform(2.7,-45);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_182.setTransform(-5.2,-44.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.4,1.2).curveTo(-2.6,0.6,-2.7,-0).curveTo(-2.6,-0.7,-2.4,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,2,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.6,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,2,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.5,-0.9).lineTo(-1.6,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_183.setTransform(-11.3,-44.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.2,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_184.setTransform(-20,-43.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_185.setTransform(-26,-44.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.4,-2.9).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.3,-4).lineTo(0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3.1).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(0,-2.6).closePath();
	this.shape_186.setTransform(-30.3,-45.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.3).curveTo(-2.2,3,-2.3,2.4).curveTo(-2.5,2,-2.5,1.2).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.8).curveTo(-1.5,-1.3,-1.1,-1.5).curveTo(-0.6,-1.6,-0,-1.6).curveTo(0.5,-1.7,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.8,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.4).curveTo(-1.4,0.2,-1.4,1.2).lineTo(-1.3,2.1).curveTo(-1.3,2.5,-1.1,2.8).curveTo(-0.9,3,-0.6,3.1).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3).curveTo(1.2,2.9,1.5,2.4).lineTo(1.5,-0.3).curveTo(1.2,-0.6,0.9,-0.7).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.4).closePath();
	this.shape_187.setTransform(-34.9,-45.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_188.setTransform(-40.8,-44.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_189.setTransform(-46.8,-44.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.beginFill("#000033").beginStroke().moveTo(-2.5,3.8).lineTo(-2.5,-3.7).lineTo(-1.9,-3.7).curveTo(-1.8,-3.7,-1.8,-3.7).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.6,-3.5,-1.6,-3.5).lineTo(-1.5,-2.8).curveTo(-1.2,-3.3,-0.7,-3.5).curveTo(-0.2,-3.8,0.4,-3.8).curveTo(0.8,-3.8,1.2,-3.6).curveTo(1.6,-3.4,1.9,-3.1).curveTo(2.2,-2.7,2.3,-2.2).curveTo(2.5,-1.6,2.5,-0.9).curveTo(2.5,-0.3,2.3,0.2).curveTo(2.1,0.7,1.8,1.1).curveTo(1.5,1.5,1.1,1.7).curveTo(0.6,2,0.1,2).curveTo(-0.5,2,-0.8,1.8).curveTo(-1.2,1.6,-1.5,1.3).lineTo(-1.5,3.8).closePath().moveTo(-0.8,-2.8).curveTo(-1.2,-2.6,-1.5,-2.2).lineTo(-1.5,0.5).curveTo(-1.2,0.9,-0.9,1).curveTo(-0.6,1.2,-0.2,1.2).curveTo(0.6,1.2,1,0.6).curveTo(1.5,0.1,1.5,-0.9).lineTo(1.4,-1.9).curveTo(1.3,-2.3,1.1,-2.5).curveTo(0.9,-2.8,0.6,-2.9).curveTo(0.4,-3,0,-3).curveTo(-0.4,-3,-0.8,-2.8).closePath();
	this.shape_190.setTransform(-52.6,-43.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_191.setTransform(-58.7,-44.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.beginFill("#000033").beginStroke().moveTo(-3.4,4).lineTo(-3.4,-3.9).lineTo(-0.5,-3.9).curveTo(0.4,-3.9,1.1,-3.7).curveTo(1.8,-3.3,2.3,-2.9).curveTo(2.9,-2.3,3.1,-1.6).curveTo(3.4,-0.9,3.4,0).curveTo(3.4,0.9,3.1,1.6).curveTo(2.9,2.4,2.3,2.8).curveTo(1.8,3.4,1.1,3.6).curveTo(0.4,3.9,-0.5,4).closePath().moveTo(-2.4,3.1).lineTo(-0.5,3.1).curveTo(0.2,3.1,0.7,2.9).curveTo(1.2,2.7,1.6,2.3).curveTo(1.9,1.9,2.1,1.3).curveTo(2.3,0.7,2.3,0).curveTo(2.3,-0.7,2.1,-1.3).curveTo(1.9,-1.8,1.6,-2.2).curveTo(1.2,-2.7,0.7,-2.9).curveTo(0.2,-3,-0.5,-3).lineTo(-2.4,-3).closePath();
	this.shape_192.setTransform(-65.6,-45.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-54.2,151,138.8);


(lib.gfcStep4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.step4();
	this.instance.parent = this;
	this.instance.setTransform(-84,-156.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-156.5,168,313);


(lib.gfcStep3Title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,3.9).curveTo(-2,3.6,-2.5,3.1).curveTo(-3,2.5,-3.3,1.7).curveTo(-3.6,0.9,-3.6,-0.1).curveTo(-3.6,-1,-3.3,-1.7).curveTo(-3,-2.5,-2.6,-3).curveTo(-2.1,-3.5,-1.4,-3.8).curveTo(-0.7,-4.2,0.2,-4.2).curveTo(1,-4.2,1.5,-3.9).curveTo(2.2,-3.7,2.6,-3.2).curveTo(3,-2.7,3.3,-2.1).curveTo(3.6,-1.4,3.6,-0.5).curveTo(3.6,-0.4,3.6,-0.4).curveTo(3.6,-0.3,3.6,-0.2).curveTo(3.6,-0.2,3.5,-0.1).curveTo(3.5,-0.1,3.5,-0.1).lineTo(3.2,0).lineTo(-2.2,0).curveTo(-2.1,0.8,-2,1.4).curveTo(-1.8,1.9,-1.4,2.3).curveTo(-1.1,2.7,-0.6,2.9).curveTo(-0.2,3.1,0.4,3.1).curveTo(0.9,3.1,1.3,2.9).lineTo(2,2.7).lineTo(2.4,2.4).lineTo(2.8,2.3).curveTo(2.8,2.3,2.9,2.3).curveTo(2.9,2.3,2.9,2.3).curveTo(3,2.3,3,2.4).curveTo(3,2.4,3.1,2.4).lineTo(3.4,2.9).curveTo(3.2,3.3,2.8,3.5).lineTo(2.1,3.9).lineTo(1.2,4.1).lineTo(0.3,4.2).curveTo(-0.5,4.2,-1.3,3.9).closePath().moveTo(2.3,-0.9).curveTo(2.3,-1.4,2.1,-1.8).lineTo(1.8,-2.5).curveTo(1.5,-2.8,1.1,-2.9).curveTo(0.7,-3.1,0.3,-3.1).curveTo(-0.8,-3.1,-1.4,-2.5).curveTo(-2,-1.9,-2.2,-0.9).lineTo(2.3,-0.9).lineTo(2.3,-0.9).closePath();
	this.shape.setTransform(30.7,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000033").beginStroke().moveTo(-1.7,3.9).curveTo(-2.4,3.6,-2.9,3.2).lineTo(-2.5,2.6).lineTo(-2.4,2.5).lineTo(-2.2,2.4).lineTo(-1.9,2.5).lineTo(-1.5,2.8).lineTo(-0.9,3.1).lineTo(-0.1,3.1).lineTo(0.6,3.1).lineTo(1.1,2.8).lineTo(1.4,2.3).lineTo(1.5,1.8).curveTo(1.5,1.5,1.4,1.3).lineTo(0.9,0.9).lineTo(0.2,0.6).lineTo(-0.6,0.4).lineTo(-1.3,0.1).lineTo(-2,-0.4).curveTo(-2.3,-0.6,-2.5,-1).curveTo(-2.7,-1.3,-2.7,-1.9).curveTo(-2.7,-2.3,-2.5,-2.7).curveTo(-2.3,-3.1,-1.9,-3.4).curveTo(-1.5,-3.8,-1,-4).curveTo(-0.5,-4.2,0.2,-4.2).curveTo(1,-4.2,1.6,-4).curveTo(2.3,-3.7,2.7,-3.2).lineTo(2.4,-2.7).curveTo(2.4,-2.7,2.4,-2.6).curveTo(2.3,-2.6,2.3,-2.6).curveTo(2.3,-2.6,2.2,-2.6).curveTo(2.2,-2.5,2.1,-2.5).lineTo(1.9,-2.6).lineTo(1.5,-2.8).lineTo(1,-3.1).lineTo(0.2,-3.1).lineTo(-0.4,-3.1).lineTo(-0.9,-2.8).lineTo(-1.2,-2.4).lineTo(-1.3,-2).curveTo(-1.3,-1.6,-1.1,-1.4).lineTo(-0.7,-1.1).lineTo(0,-0.8).lineTo(0.8,-0.5).lineTo(1.6,-0.3).lineTo(2.2,0.2).lineTo(2.7,0.7).curveTo(2.9,1.1,2.9,1.5).curveTo(2.9,2.2,2.7,2.6).curveTo(2.5,3.1,2.1,3.4).curveTo(1.7,3.8,1.1,4).curveTo(0.6,4.2,-0.2,4.2).curveTo(-1,4.2,-1.7,3.9).closePath();
	this.shape_1.setTransform(23,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,3.9).curveTo(-2.3,3.6,-2.8,3.1).curveTo(-3.3,2.5,-3.6,1.7).curveTo(-3.9,1,-3.9,0).curveTo(-3.9,-0.9,-3.6,-1.7).curveTo(-3.3,-2.5,-2.8,-3).curveTo(-2.3,-3.6,-1.6,-3.9).curveTo(-0.9,-4.2,0,-4.2).curveTo(0.9,-4.2,1.6,-3.9).curveTo(2.3,-3.6,2.8,-3).curveTo(3.3,-2.5,3.6,-1.7).curveTo(3.9,-0.9,3.9,0).curveTo(3.9,1,3.6,1.7).curveTo(3.3,2.5,2.8,3.1).curveTo(2.3,3.6,1.6,3.9).curveTo(0.9,4.2,0,4.2).curveTo(-0.9,4.2,-1.6,3.9).closePath().moveTo(-1,-2.8).curveTo(-1.5,-2.6,-1.8,-2.2).curveTo(-2.1,-1.8,-2.2,-1.3).curveTo(-2.4,-0.7,-2.4,0).curveTo(-2.4,1.5,-1.8,2.3).curveTo(-1.2,3.1,0,3.1).curveTo(1.2,3.1,1.8,2.3).curveTo(2.4,1.5,2.4,0).curveTo(2.4,-1.4,1.8,-2.2).curveTo(1.2,-3,0,-3).curveTo(-0.6,-3,-1,-2.8).closePath();
	this.shape_2.setTransform(15,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000033").beginStroke().moveTo(-3.6,5.5).lineTo(-3.6,-5.3).lineTo(-2.7,-5.3).curveTo(-2.7,-5.3,-2.6,-5.3).curveTo(-2.5,-5.3,-2.5,-5.3).curveTo(-2.4,-5.2,-2.4,-5.2).curveTo(-2.4,-5.1,-2.4,-5.1).lineTo(-2.2,-4.1).curveTo(-1.7,-4.8,-1.1,-5.1).curveTo(-0.4,-5.5,0.5,-5.5).curveTo(1.2,-5.5,1.8,-5.3).curveTo(2.3,-4.9,2.7,-4.5).curveTo(3.1,-3.9,3.3,-3.2).curveTo(3.6,-2.3,3.6,-1.4).curveTo(3.6,-0.5,3.3,0.3).curveTo(3.1,1.1,2.6,1.7).curveTo(2.2,2.2,1.5,2.6).curveTo(0.9,2.8,0,2.8).curveTo(-0.7,2.9,-1.2,2.6).curveTo(-1.8,2.3,-2.2,1.9).lineTo(-2.2,5.5).closePath().moveTo(-1.2,-4).curveTo(-1.7,-3.7,-2.2,-3.1).lineTo(-2.2,0.8).curveTo(-1.8,1.4,-1.3,1.6).curveTo(-0.8,1.8,-0.3,1.8).curveTo(0.9,1.8,1.5,1).curveTo(2.1,0.2,2.1,-1.4).curveTo(2.1,-2.1,1.9,-2.7).curveTo(1.8,-3.3,1.5,-3.6).curveTo(1.3,-4,0.9,-4.2).curveTo(0.5,-4.3,0,-4.4).curveTo(-0.7,-4.3,-1.2,-4).closePath();
	this.shape_3.setTransform(6.3,20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000033").beginStroke().moveTo(4.1,4.1).lineTo(4.1,-1).curveTo(4.1,-2,3.6,-2.5).curveTo(3.2,-3,2.4,-3).curveTo(2.1,-3,1.8,-2.8).curveTo(1.5,-2.7,1.2,-2.5).lineTo(0.8,-1.9).lineTo(0.7,-1).lineTo(0.7,4.1).lineTo(-0.7,4.1).lineTo(-0.7,-1).curveTo(-0.7,-2,-1.1,-2.5).curveTo(-1.5,-3,-2.3,-3).curveTo(-2.8,-3,-3.2,-2.7).curveTo(-3.7,-2.4,-4.1,-1.9).lineTo(-4.1,4.1).lineTo(-5.5,4.1).lineTo(-5.5,-4).lineTo(-4.6,-4).curveTo(-4.6,-4,-4.5,-4).curveTo(-4.4,-3.9,-4.4,-3.9).curveTo(-4.3,-3.9,-4.3,-3.8).curveTo(-4.3,-3.8,-4.3,-3.7).lineTo(-4.2,-2.9).curveTo(-3.7,-3.4,-3.2,-3.8).curveTo(-2.6,-4.1,-1.9,-4.1).curveTo(-1,-4.1,-0.5,-3.6).curveTo(-0,-3.2,0.2,-2.4).lineTo(0.6,-3.2).lineTo(1.3,-3.7).lineTo(2,-4).lineTo(2.8,-4.1).curveTo(3.4,-4.1,3.9,-3.9).curveTo(4.4,-3.7,4.8,-3.3).curveTo(5.1,-2.9,5.3,-2.3).curveTo(5.5,-1.8,5.5,-1).lineTo(5.5,4.1).closePath();
	this.shape_4.setTransform(-5,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,3.9).curveTo(-2.3,3.6,-2.8,3.1).curveTo(-3.3,2.5,-3.6,1.7).curveTo(-3.9,1,-3.9,0).curveTo(-3.9,-0.9,-3.6,-1.7).curveTo(-3.3,-2.5,-2.8,-3).curveTo(-2.3,-3.6,-1.6,-3.9).curveTo(-0.9,-4.2,0,-4.2).curveTo(0.9,-4.2,1.6,-3.9).curveTo(2.3,-3.6,2.8,-3).curveTo(3.3,-2.5,3.6,-1.7).curveTo(3.9,-0.9,3.9,0).curveTo(3.9,1,3.6,1.7).curveTo(3.3,2.5,2.8,3.1).curveTo(2.3,3.6,1.6,3.9).curveTo(0.9,4.2,0,4.2).curveTo(-0.9,4.2,-1.6,3.9).closePath().moveTo(-1,-2.8).curveTo(-1.5,-2.6,-1.8,-2.2).curveTo(-2.1,-1.8,-2.2,-1.3).curveTo(-2.4,-0.7,-2.4,0).curveTo(-2.4,1.5,-1.8,2.3).curveTo(-1.2,3.1,0,3.1).curveTo(1.2,3.1,1.8,2.3).curveTo(2.4,1.5,2.4,0).curveTo(2.4,-1.4,1.8,-2.2).curveTo(1.2,-3,0,-3).curveTo(-0.6,-3,-1,-2.8).closePath();
	this.shape_5.setTransform(-16.1,19.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,3.9).curveTo(-1.8,3.6,-2.3,3.1).curveTo(-2.7,2.6,-3,1.8).curveTo(-3.3,1,-3.3,0).curveTo(-3.3,-0.9,-3.1,-1.7).curveTo(-2.8,-2.4,-2.3,-3).curveTo(-1.8,-3.5,-1.1,-3.8).curveTo(-0.4,-4.2,0.5,-4.2).curveTo(1.4,-4.2,2.1,-3.9).curveTo(2.7,-3.6,3.2,-3.1).lineTo(2.8,-2.6).lineTo(2.7,-2.5).lineTo(2.5,-2.4).lineTo(2.2,-2.5).lineTo(1.9,-2.7).lineTo(1.3,-2.9).lineTo(0.6,-3).curveTo(-0,-3,-0.5,-2.8).curveTo(-0.9,-2.6,-1.2,-2.2).curveTo(-1.5,-1.8,-1.6,-1.3).curveTo(-1.8,-0.7,-1.8,0).curveTo(-1.8,0.8,-1.6,1.3).curveTo(-1.5,1.9,-1.2,2.3).curveTo(-0.8,2.7,-0.5,2.9).curveTo(-0,3.1,0.5,3.1).lineTo(1.4,3).lineTo(2,2.7).lineTo(2.3,2.4).lineTo(2.6,2.3).curveTo(2.7,2.3,2.7,2.3).curveTo(2.7,2.3,2.8,2.3).curveTo(2.8,2.3,2.8,2.4).curveTo(2.9,2.4,2.9,2.4).lineTo(3.3,2.9).curveTo(3,3.3,2.7,3.5).lineTo(2,3.9).lineTo(1.2,4.1).lineTo(0.3,4.2).curveTo(-0.5,4.2,-1.1,3.9).closePath();
	this.shape_6.setTransform(-24.3,19.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#000033").beginStroke().moveTo(-1.8,5.7).curveTo(-2.4,5.5,-2.8,4.9).curveTo(-3.2,4.4,-3.4,3.6).curveTo(-3.6,2.8,-3.6,1.9).curveTo(-3.6,0.9,-3.3,0.2).curveTo(-3.1,-0.6,-2.7,-1.2).curveTo(-2.2,-1.8,-1.6,-2.1).curveTo(-0.9,-2.4,-0.1,-2.4).curveTo(0.7,-2.4,1.2,-2.2).curveTo(1.7,-1.9,2.1,-1.4).lineTo(2.1,-5.9).lineTo(3.6,-5.9).lineTo(3.6,5.8).lineTo(2.7,5.8).curveTo(2.6,5.8,2.6,5.8).curveTo(2.5,5.8,2.5,5.8).curveTo(2.4,5.7,2.4,5.7).curveTo(2.3,5.6,2.3,5.6).lineTo(2.2,4.6).curveTo(1.7,5.2,1,5.6).curveTo(0.4,5.9,-0.5,5.9).curveTo(-1.2,6,-1.8,5.7).closePath().moveTo(-1.5,-0.5).curveTo(-2.1,0.3,-2.1,1.9).curveTo(-2.1,2.6,-2,3.2).curveTo(-1.8,3.7,-1.6,4.1).curveTo(-1.3,4.5,-0.9,4.7).curveTo(-0.5,4.8,-0.1,4.8).curveTo(0.6,4.8,1.2,4.5).curveTo(1.7,4.1,2.1,3.6).lineTo(2.1,-0.4).curveTo(1.7,-0.9,1.3,-1.1).curveTo(0.8,-1.3,0.2,-1.3).curveTo(-0.9,-1.3,-1.5,-0.5).closePath();
	this.shape_7.setTransform(-37,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#000033").beginStroke().moveTo(1.9,4.1).lineTo(1.9,-1).curveTo(1.9,-2,1.5,-2.5).curveTo(1.1,-3,0.2,-3).curveTo(-0.4,-3,-1,-2.7).curveTo(-1.5,-2.4,-2,-1.8).lineTo(-2,4.1).lineTo(-3.4,4.1).lineTo(-3.4,-4).lineTo(-2.5,-4).curveTo(-2.5,-4,-2.4,-4).curveTo(-2.3,-3.9,-2.3,-3.9).curveTo(-2.2,-3.9,-2.2,-3.8).curveTo(-2.2,-3.8,-2.2,-3.7).lineTo(-2.1,-2.8).lineTo(-1.5,-3.3).lineTo(-0.9,-3.7).lineTo(-0.2,-4).lineTo(0.6,-4.1).curveTo(1.3,-4.1,1.8,-3.9).curveTo(2.3,-3.7,2.7,-3.3).curveTo(3,-2.9,3.2,-2.3).curveTo(3.4,-1.7,3.4,-1).lineTo(3.4,4.1).closePath();
	this.shape_8.setTransform(-45.6,19.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#000033").beginStroke().moveTo(-1.8,4).lineTo(-2.5,3.7).curveTo(-2.8,3.4,-3,3).curveTo(-3.2,2.6,-3.2,2.1).curveTo(-3.2,1.6,-2.9,1.1).curveTo(-2.6,0.7,-2,0.3).curveTo(-1.5,-0.1,-0.5,-0.3).curveTo(0.5,-0.5,1.8,-0.5).lineTo(1.8,-1.2).curveTo(1.8,-2,1.4,-2.5).curveTo(1,-3.1,0.2,-3.1).curveTo(-0.3,-3,-0.7,-2.9).lineTo(-1.3,-2.6).lineTo(-1.8,-2.3).lineTo(-2.1,-2.2).lineTo(-2.4,-2.2).lineTo(-2.5,-2.4).lineTo(-2.8,-2.9).curveTo(-2.1,-3.6,-1.3,-3.9).curveTo(-0.6,-4.2,0.4,-4.2).curveTo(1,-4.2,1.6,-4).curveTo(2.1,-3.8,2.5,-3.3).curveTo(2.9,-2.9,3,-2.4).curveTo(3.2,-1.8,3.2,-1.2).lineTo(3.2,4).lineTo(2.6,4).lineTo(2.3,4).lineTo(2.1,3.7).lineTo(1.9,3).lineTo(1.3,3.4).lineTo(0.7,3.9).lineTo(-0.1,4.1).lineTo(-0.9,4.2).lineTo(-1.8,4).closePath().moveTo(0.1,0.5).lineTo(-1,0.9).curveTo(-1.4,1.1,-1.6,1.3).curveTo(-1.8,1.6,-1.8,2).lineTo(-1.7,2.5).lineTo(-1.5,2.9).lineTo(-1,3.1).lineTo(-0.4,3.2).lineTo(0.2,3.1).lineTo(0.8,2.9).lineTo(1.4,2.5).lineTo(1.8,2.1).lineTo(1.8,0.4).lineTo(0.1,0.5).closePath();
	this.shape_9.setTransform(-54.4,19.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#000033").beginStroke().moveTo(-1.7,3.9).curveTo(-2.4,3.7,-2.9,3.2).lineTo(-2.5,2.6).lineTo(-2.4,2.5).lineTo(-2.2,2.4).lineTo(-1.9,2.5).lineTo(-1.5,2.8).lineTo(-0.9,3.1).lineTo(-0.1,3.2).lineTo(0.6,3.1).lineTo(1.1,2.7).lineTo(1.4,2.4).lineTo(1.5,1.8).curveTo(1.5,1.5,1.4,1.3).lineTo(0.9,0.9).lineTo(0.2,0.6).lineTo(-0.6,0.4).lineTo(-1.3,0.1).lineTo(-2,-0.4).curveTo(-2.3,-0.6,-2.5,-1).curveTo(-2.7,-1.3,-2.7,-1.9).curveTo(-2.7,-2.3,-2.5,-2.7).curveTo(-2.3,-3.1,-1.9,-3.4).curveTo(-1.5,-3.8,-1,-4).curveTo(-0.5,-4.2,0.2,-4.2).curveTo(1,-4.2,1.6,-4).curveTo(2.3,-3.7,2.7,-3.2).lineTo(2.4,-2.7).curveTo(2.4,-2.7,2.4,-2.6).curveTo(2.3,-2.6,2.3,-2.6).curveTo(2.3,-2.6,2.2,-2.6).curveTo(2.2,-2.5,2.1,-2.5).lineTo(1.9,-2.7).lineTo(1.5,-2.8).lineTo(1,-3.1).lineTo(0.2,-3.1).lineTo(-0.4,-3.1).lineTo(-0.9,-2.8).lineTo(-1.2,-2.4).lineTo(-1.3,-2).curveTo(-1.3,-1.7,-1.1,-1.4).lineTo(-0.7,-1.1).lineTo(0,-0.8).lineTo(0.8,-0.5).lineTo(1.6,-0.3).lineTo(2.2,0.2).lineTo(2.7,0.7).curveTo(2.9,1.1,2.9,1.5).curveTo(2.9,2.1,2.7,2.6).curveTo(2.5,3.1,2.1,3.4).curveTo(1.7,3.8,1.1,4).curveTo(0.6,4.2,-0.2,4.2).curveTo(-1,4.2,-1.7,3.9).closePath();
	this.shape_10.setTransform(50.3,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000033").beginStroke().moveTo(-1.7,5.4).curveTo(-2.4,5.2,-2.8,4.9).curveTo(-3.3,4.7,-3.5,4.3).curveTo(-3.7,3.9,-3.7,3.4).curveTo(-3.7,2.9,-3.3,2.4).curveTo(-3,2,-2.3,1.8).curveTo(-2.7,1.6,-2.9,1.3).curveTo(-3.1,1.1,-3.1,0.6).lineTo(-3,0.3).lineTo(-2.8,-0.1).lineTo(-2.5,-0.5).lineTo(-2.1,-0.8).curveTo(-2.7,-1.1,-3,-1.7).curveTo(-3.3,-2.2,-3.3,-3).curveTo(-3.3,-3.6,-3.1,-4).curveTo(-2.9,-4.5,-2.5,-4.9).curveTo(-2.1,-5.2,-1.5,-5.4).curveTo(-0.9,-5.6,-0.3,-5.6).curveTo(0.3,-5.6,0.7,-5.4).lineTo(1.5,-5.1).lineTo(3.7,-5.1).lineTo(3.7,-4.6).curveTo(3.7,-4.5,3.7,-4.5).curveTo(3.7,-4.4,3.6,-4.4).curveTo(3.6,-4.3,3.6,-4.3).curveTo(3.5,-4.3,3.4,-4.2).lineTo(2.5,-4.1).curveTo(2.8,-3.6,2.8,-3).curveTo(2.8,-2.4,2.5,-1.9).curveTo(2.3,-1.4,1.9,-1.1).curveTo(1.5,-0.7,0.9,-0.5).curveTo(0.4,-0.3,-0.3,-0.3).curveTo(-0.8,-0.3,-1.3,-0.5).lineTo(-1.7,-0.1).curveTo(-1.8,-0.1,-1.8,-0).curveTo(-1.8,-0,-1.8,0).curveTo(-1.9,0.1,-1.9,0.1).curveTo(-1.9,0.2,-1.9,0.2).curveTo(-1.9,0.5,-1.6,0.7).curveTo(-1.4,0.8,-1,0.9).lineTo(-0.1,1).lineTo(0.9,1).lineTo(1.9,1.1).lineTo(2.8,1.4).curveTo(3.1,1.6,3.4,2).curveTo(3.6,2.3,3.6,2.9).curveTo(3.6,3.4,3.3,3.9).curveTo(3.1,4.4,2.6,4.8).curveTo(2.1,5.1,1.4,5.4).curveTo(0.7,5.6,-0.2,5.6).curveTo(-1.1,5.6,-1.7,5.4).closePath().moveTo(-2.2,2.5).curveTo(-2.5,2.8,-2.5,3.3).lineTo(-2.3,3.8).curveTo(-2.2,4,-1.9,4.2).lineTo(-1.2,4.5).lineTo(-0.2,4.6).curveTo(0.4,4.6,0.9,4.4).lineTo(1.6,4.2).curveTo(2,4,2.1,3.7).curveTo(2.3,3.4,2.3,3.1).curveTo(2.3,2.8,2.1,2.6).curveTo(2,2.4,1.7,2.3).lineTo(1,2.2).lineTo(0.2,2.1).lineTo(-0.6,2.1).lineTo(-1.5,2).curveTo(-1.9,2.2,-2.2,2.5).closePath().moveTo(-1.6,-4.1).curveTo(-2,-3.7,-2,-2.9).lineTo(-1.9,-2.3).curveTo(-1.8,-2,-1.6,-1.7).curveTo(-1.4,-1.5,-1,-1.4).curveTo(-0.7,-1.3,-0.3,-1.3).curveTo(0.2,-1.3,0.5,-1.4).curveTo(0.8,-1.5,1,-1.7).curveTo(1.3,-2,1.4,-2.3).lineTo(1.5,-2.9).curveTo(1.5,-3.7,1,-4.1).curveTo(0.6,-4.5,-0.3,-4.5).curveTo(-1.1,-4.5,-1.6,-4.1).closePath();
	this.shape_11.setTransform(42.8,3.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#000033").beginStroke().moveTo(1.9,4.1).lineTo(1.9,-1).curveTo(1.9,-2,1.5,-2.5).curveTo(1.1,-3,0.2,-3).curveTo(-0.4,-3,-1,-2.7).curveTo(-1.5,-2.4,-2,-1.8).lineTo(-2,4.1).lineTo(-3.4,4.1).lineTo(-3.4,-4).lineTo(-2.5,-4).curveTo(-2.5,-4,-2.4,-4).curveTo(-2.3,-3.9,-2.3,-3.9).curveTo(-2.2,-3.9,-2.2,-3.8).curveTo(-2.2,-3.8,-2.2,-3.7).lineTo(-2.1,-2.8).lineTo(-1.5,-3.3).lineTo(-0.9,-3.7).lineTo(-0.2,-4).lineTo(0.6,-4.1).curveTo(1.3,-4.1,1.8,-3.9).curveTo(2.3,-3.7,2.7,-3.3).curveTo(3,-2.9,3.2,-2.3).curveTo(3.4,-1.7,3.4,-1).lineTo(3.4,4.1).closePath();
	this.shape_12.setTransform(34.2,2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#000033").beginStroke().moveTo(-0.7,5.8).lineTo(-0.7,-2.3).lineTo(0.7,-2.3).lineTo(0.7,5.8).closePath().moveTo(-0.4,-3.9).lineTo(-0.7,-4.1).lineTo(-0.9,-4.4).lineTo(-1,-4.8).lineTo(-0.9,-5.2).lineTo(-0.7,-5.5).lineTo(-0.4,-5.8).lineTo(-0,-5.8).lineTo(0.4,-5.8).lineTo(0.7,-5.5).lineTo(0.9,-5.2).lineTo(1,-4.8).lineTo(0.9,-4.4).lineTo(0.7,-4.1).lineTo(0.4,-3.9).lineTo(-0,-3.8).closePath();
	this.shape_13.setTransform(27.8,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#000033").beginStroke().moveTo(-1.8,5.7).curveTo(-2.4,5.5,-2.8,4.9).curveTo(-3.2,4.4,-3.4,3.6).curveTo(-3.6,2.8,-3.6,1.8).curveTo(-3.6,1,-3.3,0.2).curveTo(-3.1,-0.6,-2.7,-1.2).curveTo(-2.2,-1.8,-1.6,-2.1).curveTo(-0.9,-2.4,-0.1,-2.4).curveTo(0.7,-2.4,1.2,-2.2).curveTo(1.7,-1.9,2.1,-1.4).lineTo(2.1,-5.9).lineTo(3.6,-5.9).lineTo(3.6,5.9).lineTo(2.7,5.9).curveTo(2.6,5.9,2.6,5.8).curveTo(2.5,5.8,2.5,5.8).curveTo(2.4,5.7,2.4,5.7).curveTo(2.4,5.6,2.3,5.6).lineTo(2.2,4.5).curveTo(1.7,5.2,1,5.6).curveTo(0.4,5.9,-0.5,5.9).curveTo(-1.2,5.9,-1.8,5.7).closePath().moveTo(-1.5,-0.5).curveTo(-2.1,0.3,-2.1,1.8).curveTo(-2.1,2.6,-2,3.2).curveTo(-1.8,3.8,-1.6,4.1).curveTo(-1.3,4.5,-0.9,4.7).curveTo(-0.5,4.8,-0.1,4.8).curveTo(0.6,4.8,1.2,4.5).curveTo(1.7,4.2,2.1,3.6).lineTo(2.1,-0.4).curveTo(1.7,-0.8,1.3,-1.1).curveTo(0.8,-1.3,0.2,-1.3).curveTo(-0.9,-1.3,-1.5,-0.5).closePath();
	this.shape_14.setTransform(21.2,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#000033").beginStroke().moveTo(-1.8,4.1).lineTo(-2.5,3.6).curveTo(-2.8,3.4,-3,3).curveTo(-3.2,2.6,-3.2,2.1).curveTo(-3.2,1.5,-2.9,1.1).curveTo(-2.6,0.6,-2.1,0.3).curveTo(-1.4,-0.1,-0.5,-0.3).curveTo(0.4,-0.5,1.8,-0.5).lineTo(1.8,-1.2).curveTo(1.8,-2.1,1.4,-2.5).curveTo(1,-3.1,0.2,-3.1).curveTo(-0.3,-3,-0.6,-2.9).lineTo(-1.3,-2.6).lineTo(-1.7,-2.3).lineTo(-2.1,-2.2).lineTo(-2.4,-2.2).lineTo(-2.5,-2.4).lineTo(-2.8,-2.9).curveTo(-2.1,-3.6,-1.4,-3.9).curveTo(-0.5,-4.2,0.4,-4.2).curveTo(1,-4.2,1.6,-4).curveTo(2.1,-3.8,2.5,-3.3).curveTo(2.8,-2.9,3.1,-2.4).curveTo(3.2,-1.8,3.2,-1.2).lineTo(3.2,4.1).lineTo(2.6,4.1).lineTo(2.2,4).lineTo(2.1,3.7).lineTo(2,3).lineTo(1.3,3.4).lineTo(0.6,3.9).lineTo(-0,4.1).lineTo(-0.9,4.2).lineTo(-1.8,4.1).closePath().moveTo(0.2,0.6).lineTo(-1,0.9).curveTo(-1.4,1.1,-1.6,1.4).curveTo(-1.8,1.6,-1.8,2).lineTo(-1.7,2.5).lineTo(-1.4,2.9).lineTo(-1,3.1).lineTo(-0.5,3.2).lineTo(0.2,3.1).lineTo(0.8,2.9).lineTo(1.3,2.5).lineTo(1.8,2.1).lineTo(1.8,0.4).lineTo(0.2,0.6).closePath();
	this.shape_15.setTransform(12.7,2.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,3.9).curveTo(-2,3.6,-2.5,3.1).curveTo(-3,2.5,-3.3,1.7).curveTo(-3.6,0.9,-3.6,-0.1).curveTo(-3.6,-1,-3.3,-1.7).curveTo(-3,-2.5,-2.6,-3).curveTo(-2.1,-3.5,-1.4,-3.8).curveTo(-0.7,-4.2,0.2,-4.2).curveTo(1,-4.2,1.5,-3.9).curveTo(2.1,-3.7,2.6,-3.2).curveTo(3,-2.7,3.3,-2.1).curveTo(3.6,-1.4,3.6,-0.5).curveTo(3.6,-0.4,3.6,-0.4).curveTo(3.6,-0.3,3.6,-0.2).curveTo(3.6,-0.2,3.5,-0.1).curveTo(3.5,-0.1,3.5,-0.1).lineTo(3.2,0).lineTo(-2.2,0).curveTo(-2.2,0.8,-2,1.4).curveTo(-1.8,1.9,-1.4,2.3).curveTo(-1.1,2.7,-0.6,2.9).curveTo(-0.2,3.1,0.4,3.1).curveTo(1,3.1,1.3,2.9).lineTo(2,2.7).lineTo(2.4,2.4).lineTo(2.8,2.3).curveTo(2.8,2.3,2.9,2.3).curveTo(2.9,2.3,2.9,2.3).curveTo(3,2.3,3,2.4).curveTo(3,2.4,3.1,2.4).lineTo(3.4,2.9).curveTo(3.2,3.3,2.8,3.5).lineTo(2.1,3.9).lineTo(1.2,4.1).lineTo(0.3,4.2).curveTo(-0.5,4.2,-1.3,3.9).closePath().moveTo(2.3,-0.9).curveTo(2.3,-1.4,2.2,-1.8).lineTo(1.7,-2.5).curveTo(1.5,-2.8,1.1,-2.9).curveTo(0.7,-3.1,0.3,-3.1).curveTo(-0.8,-3.1,-1.4,-2.5).curveTo(-2,-1.9,-2.1,-0.9).lineTo(2.3,-0.9).lineTo(2.3,-0.9).closePath();
	this.shape_16.setTransform(4.9,2.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#000033").beginStroke().moveTo(1.9,5.9).lineTo(1.9,0.8).curveTo(1.9,-0.2,1.5,-0.7).curveTo(1.1,-1.2,0.2,-1.2).curveTo(-0.4,-1.2,-1,-0.9).curveTo(-1.5,-0.6,-2,-0).lineTo(-2,5.9).lineTo(-3.4,5.9).lineTo(-3.4,-5.9).lineTo(-2,-5.9).lineTo(-2,-1.1).curveTo(-1.4,-1.7,-0.8,-2).curveTo(-0.2,-2.3,0.6,-2.4).curveTo(1.3,-2.3,1.8,-2.1).curveTo(2.3,-1.9,2.7,-1.5).curveTo(3,-1.1,3.2,-0.5).curveTo(3.4,0,3.4,0.8).lineTo(3.4,5.9).closePath();
	this.shape_17.setTransform(-3.8,0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-2,3.6,-2.5,3.1).curveTo(-3,2.5,-3.3,1.7).curveTo(-3.6,0.9,-3.6,-0.1).curveTo(-3.6,-1,-3.4,-1.7).curveTo(-3.1,-2.5,-2.6,-3).curveTo(-2.1,-3.5,-1.4,-3.8).curveTo(-0.7,-4.2,0.2,-4.2).curveTo(0.9,-4.2,1.6,-3.9).curveTo(2.1,-3.7,2.6,-3.2).curveTo(3.1,-2.7,3.4,-2.1).curveTo(3.6,-1.4,3.6,-0.5).curveTo(3.6,-0.4,3.6,-0.4).curveTo(3.6,-0.3,3.6,-0.2).curveTo(3.6,-0.2,3.5,-0.1).curveTo(3.5,-0.1,3.5,-0.1).lineTo(3.3,0).lineTo(-2.2,0).curveTo(-2.2,0.8,-2,1.4).curveTo(-1.8,1.9,-1.4,2.3).curveTo(-1.1,2.7,-0.7,2.9).curveTo(-0.2,3.1,0.4,3.1).curveTo(1,3.1,1.3,2.9).lineTo(2,2.7).lineTo(2.5,2.4).lineTo(2.8,2.3).curveTo(2.8,2.3,2.9,2.3).curveTo(2.9,2.3,2.9,2.3).curveTo(3,2.3,3,2.4).curveTo(3,2.4,3.1,2.4).lineTo(3.4,2.9).curveTo(3.2,3.3,2.8,3.5).lineTo(2,3.9).lineTo(1.1,4.1).lineTo(0.3,4.2).curveTo(-0.6,4.2,-1.2,3.9).closePath().moveTo(2.3,-0.9).curveTo(2.3,-1.4,2.2,-1.8).lineTo(1.7,-2.5).curveTo(1.5,-2.8,1.1,-2.9).curveTo(0.7,-3.1,0.2,-3.1).curveTo(-0.8,-3.1,-1.4,-2.5).curveTo(-2,-1.9,-2.1,-0.9).lineTo(2.3,-0.9).lineTo(2.3,-0.9).closePath();
	this.shape_18.setTransform(-16.5,2.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#000033").beginStroke().moveTo(-1.7,3.9).curveTo(-2.4,3.7,-2.9,3.2).lineTo(-2.5,2.6).lineTo(-2.4,2.5).lineTo(-2.2,2.4).lineTo(-1.9,2.5).lineTo(-1.5,2.8).lineTo(-0.9,3.1).lineTo(-0.1,3.2).lineTo(0.6,3.1).lineTo(1.1,2.7).lineTo(1.4,2.4).lineTo(1.5,1.8).curveTo(1.5,1.5,1.4,1.3).lineTo(0.9,0.9).lineTo(0.2,0.6).lineTo(-0.6,0.4).lineTo(-1.3,0.1).lineTo(-2,-0.4).curveTo(-2.3,-0.6,-2.5,-1).curveTo(-2.7,-1.3,-2.7,-1.9).curveTo(-2.7,-2.3,-2.5,-2.7).curveTo(-2.3,-3.1,-1.9,-3.4).curveTo(-1.5,-3.8,-1,-4).curveTo(-0.5,-4.2,0.2,-4.2).curveTo(1,-4.2,1.6,-4).curveTo(2.3,-3.7,2.7,-3.2).lineTo(2.4,-2.7).curveTo(2.4,-2.7,2.4,-2.6).curveTo(2.3,-2.6,2.3,-2.6).curveTo(2.3,-2.6,2.2,-2.6).curveTo(2.2,-2.5,2.1,-2.5).lineTo(1.9,-2.7).lineTo(1.5,-2.8).lineTo(1,-3.1).lineTo(0.2,-3.1).lineTo(-0.4,-3.1).lineTo(-0.9,-2.8).lineTo(-1.2,-2.4).lineTo(-1.3,-2).curveTo(-1.3,-1.7,-1.1,-1.4).lineTo(-0.7,-1.1).lineTo(0,-0.8).lineTo(0.8,-0.5).lineTo(1.6,-0.3).lineTo(2.2,0.2).lineTo(2.7,0.7).curveTo(2.9,1.1,2.9,1.5).curveTo(2.9,2.1,2.7,2.6).curveTo(2.5,3.1,2.1,3.4).curveTo(1.7,3.8,1.1,4).curveTo(0.6,4.2,-0.2,4.2).curveTo(-1,4.2,-1.7,3.9).closePath();
	this.shape_19.setTransform(-24.2,2.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#000033").beginStroke().moveTo(-0.7,5.8).lineTo(-0.7,-2.3).lineTo(0.7,-2.3).lineTo(0.7,5.8).closePath().moveTo(-0.4,-3.9).lineTo(-0.7,-4.1).lineTo(-0.9,-4.4).lineTo(-1,-4.8).lineTo(-0.9,-5.2).lineTo(-0.7,-5.5).lineTo(-0.4,-5.8).lineTo(-0,-5.8).lineTo(0.4,-5.8).lineTo(0.7,-5.5).lineTo(0.9,-5.2).lineTo(1,-4.8).lineTo(0.9,-4.4).lineTo(0.7,-4.1).lineTo(0.4,-3.9).lineTo(-0,-3.8).closePath();
	this.shape_20.setTransform(-29.5,0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,4.1).lineTo(-3.9,-4).lineTo(-2.8,-4).lineTo(-2.5,-4).lineTo(-2.3,-3.8).lineTo(-0.3,1.4).lineTo(-0.1,2.1).lineTo(0,2.6).lineTo(0.2,2.1).lineTo(0.3,1.4).lineTo(2.4,-3.8).lineTo(2.6,-4).lineTo(2.8,-4).lineTo(3.9,-4).lineTo(0.6,4.1).closePath();
	this.shape_21.setTransform(-35.6,2.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-2,3.6,-2.5,3.1).curveTo(-3,2.5,-3.3,1.7).curveTo(-3.6,0.9,-3.6,-0.1).curveTo(-3.6,-1,-3.3,-1.7).curveTo(-3,-2.5,-2.6,-3).curveTo(-2.1,-3.5,-1.4,-3.8).curveTo(-0.7,-4.2,0.2,-4.2).curveTo(1,-4.2,1.5,-3.9).curveTo(2.1,-3.7,2.6,-3.2).curveTo(3.1,-2.7,3.3,-2.1).curveTo(3.6,-1.4,3.6,-0.5).curveTo(3.6,-0.4,3.6,-0.4).curveTo(3.6,-0.3,3.6,-0.2).curveTo(3.6,-0.2,3.5,-0.1).curveTo(3.5,-0.1,3.5,-0.1).lineTo(3.3,0).lineTo(-2.2,0).curveTo(-2.2,0.8,-2,1.4).curveTo(-1.8,1.9,-1.4,2.3).curveTo(-1.1,2.7,-0.6,2.9).curveTo(-0.2,3.1,0.4,3.1).curveTo(1,3.1,1.3,2.9).lineTo(2,2.7).lineTo(2.4,2.4).lineTo(2.8,2.3).curveTo(2.8,2.3,2.9,2.3).curveTo(2.9,2.3,2.9,2.3).curveTo(3,2.3,3,2.4).curveTo(3,2.4,3.1,2.4).lineTo(3.4,2.9).curveTo(3.2,3.3,2.8,3.5).lineTo(2.1,3.9).lineTo(1.2,4.1).lineTo(0.3,4.2).curveTo(-0.6,4.2,-1.2,3.9).closePath().moveTo(2.3,-0.9).curveTo(2.3,-1.4,2.2,-1.8).lineTo(1.7,-2.5).curveTo(1.5,-2.8,1.1,-2.9).curveTo(0.7,-3.1,0.3,-3.1).curveTo(-0.8,-3.1,-1.4,-2.5).curveTo(-2,-1.9,-2.1,-0.9).lineTo(2.3,-0.9).lineTo(2.3,-0.9).closePath();
	this.shape_22.setTransform(-43.8,2.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#000033").beginStroke().moveTo(2.8,5.7).curveTo(2.4,5.7,2.3,5.4).lineTo(-0.8,1.3).lineTo(-1.1,1).lineTo(-1.5,0.9).lineTo(-2.7,0.9).lineTo(-2.7,5.7).lineTo(-4.2,5.7).lineTo(-4.2,-5.7).lineTo(-1,-5.7).curveTo(0.1,-5.7,0.9,-5.5).curveTo(1.7,-5.3,2.2,-4.9).curveTo(2.7,-4.5,3,-3.9).curveTo(3.2,-3.3,3.2,-2.6).curveTo(3.2,-2,3,-1.4).curveTo(2.8,-0.9,2.4,-0.5).curveTo(2.1,-0.1,1.5,0.2).curveTo(1.1,0.5,0.4,0.7).lineTo(0.9,1.2).lineTo(4.2,5.7).closePath().moveTo(-2.7,-0.2).lineTo(-1.1,-0.2).curveTo(-0.4,-0.2,0.1,-0.4).curveTo(0.7,-0.5,1,-0.8).curveTo(1.3,-1.1,1.5,-1.5).curveTo(1.7,-1.9,1.7,-2.5).curveTo(1.7,-3.5,1,-4).curveTo(0.3,-4.5,-1,-4.5).lineTo(-2.7,-4.5).closePath();
	this.shape_23.setTransform(-52.4,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.1,-11.6,120.2,40.4);


(lib.gfcStep3Content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000033").beginStroke().moveTo(-0.3,0.6).lineTo(-0.5,0.5).lineTo(-0.7,0.3).lineTo(-0.7,0).lineTo(-0.7,-0.3).lineTo(-0.5,-0.5).lineTo(-0.3,-0.6).lineTo(0,-0.7).lineTo(0.2,-0.6).lineTo(0.5,-0.5).lineTo(0.7,-0.3).lineTo(0.7,0).lineTo(0.7,0.3).lineTo(0.5,0.5).lineTo(0.2,0.6).lineTo(0,0.7).closePath();
	this.shape.setTransform(1,79.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_1.setTransform(-3.2,77.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_2.setTransform(-7.8,77.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.7,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_3.setTransform(-13.2,77.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.5).lineTo(-0.6,-3.7).lineTo(-0.4,-3.8).lineTo(0,-3.8).lineTo(0,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0,-1.1).lineTo(0,2.2).curveTo(0,2.6,0.2,2.8).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.6,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.4,2.7).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.2,3.6).lineTo(0.5,3.8).curveTo(-0.2,3.8,-0.6,3.3).closePath();
	this.shape_4.setTransform(-18.1,76.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,2.7).curveTo(-1.2,2.5,-1.6,2.1).lineTo(-2.1,1.2).curveTo(-2.3,0.7,-2.3,-0).curveTo(-2.3,-0.6,-2.1,-1.2).curveTo(-1.9,-1.7,-1.6,-2.1).curveTo(-1.3,-2.5,-0.8,-2.7).curveTo(-0.3,-2.9,0.4,-2.9).curveTo(0.9,-2.9,1.4,-2.7).curveTo(1.8,-2.5,2.2,-2.2).lineTo(1.9,-1.8).lineTo(1.8,-1.7).lineTo(1.7,-1.7).lineTo(1.5,-1.7).lineTo(1.3,-1.9).lineTo(0.9,-2.1).lineTo(0.4,-2.1).curveTo(0,-2.1,-0.3,-2).lineTo(-0.8,-1.6).lineTo(-1.2,-0.9).lineTo(-1.3,-0).curveTo(-1.3,0.5,-1.1,0.9).curveTo(-1,1.3,-0.8,1.5).curveTo(-0.6,1.8,-0.3,2).lineTo(0.4,2.1).lineTo(1,2).lineTo(1.3,1.8).lineTo(1.6,1.6).lineTo(1.8,1.5).lineTo(2,1.6).lineTo(2.3,2).lineTo(1.8,2.4).lineTo(1.3,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.3,2.9,-0.8,2.7).closePath();
	this.shape_5.setTransform(-22.7,77.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.7,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).lineTo(0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_6.setTransform(-28.5,77.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_7.setTransform(-33.2,77.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.5).lineTo(-0.6,-3.7).lineTo(-0.5,-3.8).lineTo(0.1,-3.8).lineTo(0.1,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.2).curveTo(0.1,2.6,0.2,2.8).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.6,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.3,2.7).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.2,3.6).lineTo(0.4,3.8).curveTo(-0.2,3.8,-0.6,3.3).closePath();
	this.shape_8.setTransform(-37.3,76.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.8,1.8).lineTo(-1.7,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.7,2.1).lineTo(-0.1,2.2).lineTo(0.5,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1,1.2).lineTo(0.9,0.9).lineTo(0.6,0.6).lineTo(0.1,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.8,-0.9,-1.9,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.1,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.9,-2.2).lineTo(1.7,-1.9).lineTo(1.5,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.7,-2.1).lineTo(0.1,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.9,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.4,-0.7).lineTo(0,-0.6).lineTo(0.6,-0.4).lineTo(1,-0.2).lineTo(1.6,0.1).lineTo(1.8,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.8,1.8).lineTo(1.5,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_9.setTransform(-41.8,77.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_10.setTransform(-48.6,77.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.2,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0.1,2.8).lineTo(-0.7,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_11.setTransform(-53.8,77.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_12.setTransform(-59.3,77.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4.1).lineTo(-0.5,-4).lineTo(0.5,-4).lineTo(0.5,4.1).closePath();
	this.shape_13.setTransform(-63.4,76.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,2.7).curveTo(-1.2,2.5,-1.6,2.1).lineTo(-2.1,1.2).curveTo(-2.3,0.7,-2.3,-0).curveTo(-2.3,-0.6,-2.1,-1.2).curveTo(-1.9,-1.7,-1.6,-2.1).curveTo(-1.3,-2.5,-0.8,-2.7).curveTo(-0.3,-2.9,0.4,-2.9).curveTo(0.9,-2.9,1.4,-2.7).curveTo(1.8,-2.5,2.2,-2.2).lineTo(1.9,-1.8).lineTo(1.8,-1.7).lineTo(1.7,-1.7).lineTo(1.5,-1.7).lineTo(1.3,-1.9).lineTo(0.9,-2.1).lineTo(0.4,-2.1).curveTo(0,-2.1,-0.3,-2).lineTo(-0.8,-1.6).lineTo(-1.2,-0.9).lineTo(-1.3,-0).curveTo(-1.3,0.5,-1.1,0.9).curveTo(-1,1.3,-0.8,1.5).curveTo(-0.6,1.8,-0.3,2).lineTo(0.4,2.1).lineTo(1,2).lineTo(1.3,1.8).lineTo(1.6,1.6).lineTo(1.8,1.5).lineTo(2,1.6).lineTo(2.3,2).lineTo(1.8,2.4).lineTo(1.3,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.3,2.9,-0.8,2.7).closePath();
	this.shape_14.setTransform(-67.3,77.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.7,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_15.setTransform(43.6,62.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.5,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.5,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.6,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.9,2.1,1.2,1.5).curveTo(1.7,1,1.7,-0).curveTo(1.7,-1,1.2,-1.6).curveTo(0.9,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_16.setTransform(35.2,62.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-0.9,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.5).lineTo(-0.6,-3.7).lineTo(-0.4,-3.7).lineTo(0,-3.7).lineTo(0,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0,-1.1).lineTo(0,2.2).curveTo(0.1,2.6,0.2,2.8).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.7,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.4,2.7).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.1,3.6).lineTo(0.5,3.8).curveTo(-0.2,3.8,-0.6,3.3).closePath();
	this.shape_17.setTransform(30.2,61.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_18.setTransform(25.1,62.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.4,-2.8).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.2,-4).lineTo(0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3.1).lineTo(0.5,-2.8).lineTo(0.3,-2.7).lineTo(0,-2.6).closePath();
	this.shape_19.setTransform(20.8,61.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.4).curveTo(-2.2,3,-2.3,2.5).curveTo(-2.5,1.9,-2.5,1.2).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.5,-1.8,-0.8).curveTo(-1.5,-1.2,-1.1,-1.5).curveTo(-0.6,-1.7,-0,-1.7).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,4).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.9,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.4).curveTo(-1.4,0.2,-1.4,1.2).lineTo(-1.3,2.1).curveTo(-1.3,2.6,-1.1,2.8).curveTo(-0.9,3.1,-0.6,3.1).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3).curveTo(1.2,2.8,1.5,2.5).lineTo(1.5,-0.2).curveTo(1.2,-0.6,0.9,-0.8).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.4).closePath();
	this.shape_20.setTransform(13.4,61.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_21.setTransform(7.6,62.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#000033").beginStroke().moveTo(-2.1,2.8).lineTo(-2.1,2.4).lineTo(-2.1,2.2).lineTo(-2,2).lineTo(1,-2).lineTo(-1.9,-2).lineTo(-1.9,-2.8).lineTo(2.1,-2.8).lineTo(2.1,-2.4).lineTo(2.1,-2.2).lineTo(2,-2).lineTo(-1,2).lineTo(2,2).lineTo(2,2.8).closePath();
	this.shape_22.setTransform(2.2,62.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.4,-2.8).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.3,-4).lineTo(0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3.1).lineTo(0.5,-2.8).lineTo(0.3,-2.7).lineTo(0,-2.6).closePath();
	this.shape_23.setTransform(-1.5,61.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_24.setTransform(-5.9,62.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,1,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.7,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.1,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_25.setTransform(-11.8,62.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.2,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_26.setTransform(-17.2,63.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_27.setTransform(-21.8,62.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.4,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.4,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.6,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.5,-0.9).lineTo(-1.7,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_28.setTransform(-27.2,62.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,1.3).lineTo(-0.6,1.2).lineTo(-0.6,1.1).lineTo(-0.6,1).lineTo(-0.5,0.9).lineTo(-0.4,0.7).lineTo(-0.2,0.5).lineTo(-0.1,0.3).lineTo(0,-0.1).lineTo(0,-0.1).curveTo(-0.3,-0.1,-0.5,-0.3).curveTo(-0.6,-0.5,-0.6,-0.8).curveTo(-0.6,-0.9,-0.6,-0.9).curveTo(-0.6,-1,-0.6,-1).curveTo(-0.6,-1.1,-0.6,-1.1).curveTo(-0.5,-1.2,-0.5,-1.2).curveTo(-0.3,-1.4,0,-1.4).lineTo(0.3,-1.3).lineTo(0.5,-1.2).lineTo(0.6,-0.9).lineTo(0.6,-0.6).lineTo(0.6,-0.1).lineTo(0.4,0.5).lineTo(0,0.9).lineTo(-0.4,1.4).closePath();
	this.shape_29.setTransform(-34.3,65.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_30.setTransform(-38.4,62.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_31.setTransform(-43,62.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.4,-2.8).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.2,-4).lineTo(0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3.1).lineTo(0.5,-2.8).lineTo(0.3,-2.7).lineTo(0,-2.6).closePath();
	this.shape_32.setTransform(-46.6,61.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.7,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_33.setTransform(-51,62.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#000033").beginStroke().moveTo(1.5,3.8).lineTo(1.5,1).curveTo(1.1,1.5,0.7,1.7).curveTo(0.2,2,-0.3,2).curveTo(-0.8,2,-1.2,1.8).curveTo(-1.6,1.6,-1.9,1.2).curveTo(-2.2,0.9,-2.3,0.3).curveTo(-2.5,-0.2,-2.5,-0.9).curveTo(-2.5,-1.5,-2.3,-2).curveTo(-2.1,-2.6,-1.8,-3).curveTo(-1.5,-3.4,-1.1,-3.6).curveTo(-0.6,-3.8,-0,-3.8).curveTo(0.5,-3.8,0.9,-3.6).curveTo(1.3,-3.4,1.5,-3.1).lineTo(1.6,-3.5).curveTo(1.6,-3.5,1.7,-3.6).curveTo(1.7,-3.6,1.7,-3.6).curveTo(1.7,-3.7,1.8,-3.7).curveTo(1.8,-3.7,1.9,-3.7).lineTo(2.5,-3.7).lineTo(2.5,3.8).closePath().moveTo(-1,-2.5).curveTo(-1.4,-1.9,-1.4,-0.9).lineTo(-1.3,0).curveTo(-1.3,0.4,-1.1,0.7).curveTo(-0.9,0.9,-0.6,1).curveTo(-0.4,1.2,-0,1.2).curveTo(0.5,1.2,0.8,0.9).curveTo(1.2,0.7,1.5,0.3).lineTo(1.5,-2.4).curveTo(1.2,-2.7,0.9,-2.9).curveTo(0.6,-3,0.2,-3).curveTo(-0.6,-3,-1,-2.5).closePath();
	this.shape_34.setTransform(-57.3,63.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_35.setTransform(-63.1,62.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_36.setTransform(-67.7,62.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.7,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).lineTo(0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_37.setTransform(61.4,47.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.5,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.5,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.7,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.9,2.1,1.2,1.5).curveTo(1.7,1,1.7,-0).curveTo(1.7,-1,1.2,-1.6).curveTo(0.9,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_38.setTransform(55.3,47.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#000033").beginStroke().moveTo(-1.4,3.7).lineTo(-0.4,1.5).lineTo(-2.8,-3.7).lineTo(-1.9,-3.7).lineTo(-1.7,-3.7).lineTo(-1.6,-3.5).lineTo(-0.1,-0).lineTo(0,0.5).lineTo(0.2,-0).lineTo(1.6,-3.5).lineTo(1.8,-3.7).lineTo(2,-3.7).lineTo(2.7,-3.7).lineTo(-0.4,3.5).lineTo(-0.5,3.6).lineTo(-0.7,3.7).closePath();
	this.shape_39.setTransform(49.4,48);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_40.setTransform(40.7,47);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.4,1.2).curveTo(-2.6,0.6,-2.7,-0).curveTo(-2.6,-0.7,-2.4,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,2,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.6,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,2,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.5,-0.9).lineTo(-1.6,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_41.setTransform(34.6,47.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.5,-2.8).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.3,-3.9).lineTo(-0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3).lineTo(0.5,-2.8).lineTo(0.3,-2.7).lineTo(-0,-2.6).closePath();
	this.shape_42.setTransform(30.2,45.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.5).lineTo(-0.6,-3.7).lineTo(-0.5,-3.7).lineTo(0.1,-3.7).lineTo(0.1,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.2).curveTo(0.1,2.6,0.2,2.8).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.6,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.4,2.7).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.2,3.6).lineTo(0.4,3.8).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_43.setTransform(27,46.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.3,-1.4,1,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0.1,2.8).lineTo(-0.6,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_44.setTransform(22.1,47.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#000033").beginStroke().moveTo(2.8,2.8).lineTo(2.8,-0.7).curveTo(2.8,-1.4,2.5,-1.7).curveTo(2.3,-2.1,1.7,-2.1).lineTo(1.2,-2).lineTo(0.9,-1.7).lineTo(0.6,-1.3).lineTo(0.5,-0.7).lineTo(0.5,2.8).lineTo(-0.5,2.8).lineTo(-0.5,-0.7).curveTo(-0.5,-1.4,-0.7,-1.7).curveTo(-1.1,-2.1,-1.6,-2.1).curveTo(-1.9,-2.1,-2.2,-1.9).curveTo(-2.5,-1.7,-2.8,-1.3).lineTo(-2.8,2.8).lineTo(-3.8,2.8).lineTo(-3.8,-2.7).lineTo(-3.2,-2.7).curveTo(-3.1,-2.7,-3.1,-2.7).curveTo(-3.1,-2.7,-3,-2.7).curveTo(-3,-2.7,-3,-2.6).curveTo(-3,-2.6,-3,-2.5).lineTo(-2.8,-2).curveTo(-2.5,-2.4,-2.2,-2.6).curveTo(-1.8,-2.8,-1.3,-2.8).curveTo(-0.7,-2.8,-0.4,-2.5).curveTo(0,-2.2,0.2,-1.7).lineTo(0.4,-2.2).lineTo(0.9,-2.6).lineTo(1.4,-2.8).lineTo(1.9,-2.8).curveTo(2.4,-2.8,2.7,-2.7).curveTo(3,-2.6,3.3,-2.3).curveTo(3.6,-2,3.7,-1.6).curveTo(3.8,-1.2,3.8,-0.7).lineTo(3.8,2.8).closePath();
	this.shape_45.setTransform(15.1,47);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_46.setTransform(8.8,47);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.4,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.4,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.6,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.5,-0.9).lineTo(-1.7,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_47.setTransform(3.4,47.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,4).lineTo(-0.9,-0.8).lineTo(-1.5,-0.8).lineTo(-1.7,-0.9).lineTo(-1.8,-1).lineTo(-1.8,-1.5).lineTo(-0.9,-1.5).lineTo(-0.9,-2).lineTo(-0.8,-2.8).lineTo(-0.3,-3.5).curveTo(-0.1,-3.8,0.3,-3.8).curveTo(0.6,-4,1,-4).lineTo(1.7,-3.9).lineTo(1.7,-3.4).curveTo(1.7,-3.4,1.7,-3.3).curveTo(1.7,-3.3,1.7,-3.3).curveTo(1.6,-3.3,1.6,-3.3).curveTo(1.6,-3.3,1.5,-3.3).lineTo(1.2,-3.3).lineTo(0.7,-3.2).lineTo(0.4,-2.9).lineTo(0.1,-2.6).lineTo(0.1,-1.9).lineTo(0.1,-1.5).lineTo(1.7,-1.5).lineTo(1.7,-0.8).lineTo(0.1,-0.8).lineTo(0.1,4).closePath();
	this.shape_48.setTransform(-1.5,45.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_49.setTransform(-6.6,47);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.5,-2.8).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.2,-3.9).lineTo(-0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3).lineTo(0.5,-2.8).lineTo(0.3,-2.7).lineTo(-0,-2.6).closePath();
	this.shape_50.setTransform(-10.9,45.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_51.setTransform(-17.9,47.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#000033").beginStroke().moveTo(1.4,4.1).lineTo(1.4,0.5).curveTo(1.4,-0.1,1.1,-0.5).curveTo(0.8,-0.9,0.2,-0.9).curveTo(-0.2,-0.9,-0.6,-0.6).lineTo(-1.3,-0.1).lineTo(-1.3,4.1).lineTo(-2.3,4.1).lineTo(-2.3,-4).lineTo(-1.3,-4).lineTo(-1.3,-0.8).lineTo(-0.5,-1.4).curveTo(-0.1,-1.6,0.5,-1.6).curveTo(0.9,-1.6,1.3,-1.4).lineTo(1.9,-1.1).curveTo(2.1,-0.8,2.2,-0.3).lineTo(2.3,0.5).lineTo(2.3,4.1).closePath();
	this.shape_52.setTransform(-23.9,45.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.5).lineTo(-0.6,-3.7).lineTo(-0.5,-3.7).lineTo(0.1,-3.7).lineTo(0.1,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.2).curveTo(0.1,2.6,0.2,2.8).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.6,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.3,2.7).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.2,3.6).lineTo(0.4,3.8).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_53.setTransform(-28.8,46.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4.1).lineTo(-0.5,-4).lineTo(0.5,-4).lineTo(0.5,4.1).closePath();
	this.shape_54.setTransform(-34.9,45.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4.1).lineTo(-0.5,-4).lineTo(0.5,-4).lineTo(0.5,4.1).closePath();
	this.shape_55.setTransform(-37.4,45.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,1,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.7,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_56.setTransform(-41.6,47.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_57.setTransform(-49.9,47.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,2.8).lineTo(-2.7,-2.8).lineTo(-1.9,-2.8).lineTo(-1.7,-2.7).lineTo(-1.6,-2.6).lineTo(-0.2,1).lineTo(-0.1,1.4).lineTo(-0,1.8).lineTo(0.1,1.4).lineTo(0.2,1).lineTo(1.7,-2.6).lineTo(1.8,-2.7).lineTo(2,-2.8).lineTo(2.7,-2.8).lineTo(0.4,2.8).closePath();
	this.shape_58.setTransform(-55.6,47.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,1,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.7,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.1,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_59.setTransform(-61.3,47.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#000033").beginStroke().moveTo(1.4,4.1).lineTo(1.4,0.5).curveTo(1.4,-0.1,1.1,-0.5).curveTo(0.8,-0.9,0.2,-0.9).curveTo(-0.2,-0.9,-0.6,-0.6).lineTo(-1.3,-0.1).lineTo(-1.3,4.1).lineTo(-2.3,4.1).lineTo(-2.3,-4).lineTo(-1.3,-4).lineTo(-1.3,-0.8).lineTo(-0.5,-1.4).curveTo(-0.1,-1.6,0.5,-1.6).curveTo(0.9,-1.6,1.3,-1.4).lineTo(1.9,-1.1).curveTo(2.1,-0.8,2.2,-0.3).lineTo(2.3,0.5).lineTo(2.3,4.1).closePath();
	this.shape_60.setTransform(-66.9,45.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.7,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_61.setTransform(59.5,31.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.4,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.4,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.6,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.5,-0.9).lineTo(-1.7,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_62.setTransform(53.4,31.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#000033").beginStroke().moveTo(-1.5,3.7).lineTo(-0.5,1.5).lineTo(-2.7,-3.7).lineTo(-1.9,-3.7).lineTo(-1.7,-3.7).lineTo(-1.6,-3.5).lineTo(-0.1,-0).lineTo(0.1,0.5).lineTo(0.2,-0).lineTo(1.7,-3.5).lineTo(1.8,-3.7).lineTo(2,-3.7).lineTo(2.8,-3.7).lineTo(-0.4,3.5).lineTo(-0.5,3.6).lineTo(-0.7,3.7).closePath();
	this.shape_63.setTransform(47.5,32.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_64.setTransform(38.9,31.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,2.7).curveTo(-1.2,2.5,-1.6,2.1).lineTo(-2.1,1.2).curveTo(-2.3,0.7,-2.3,-0).curveTo(-2.3,-0.6,-2.1,-1.2).curveTo(-1.9,-1.7,-1.6,-2.1).curveTo(-1.3,-2.5,-0.8,-2.7).curveTo(-0.3,-2.9,0.4,-2.9).curveTo(0.9,-2.9,1.4,-2.7).curveTo(1.8,-2.5,2.2,-2.2).lineTo(1.9,-1.8).lineTo(1.8,-1.7).lineTo(1.7,-1.7).lineTo(1.5,-1.7).lineTo(1.3,-1.9).lineTo(0.9,-2.1).lineTo(0.4,-2.1).curveTo(0,-2.1,-0.3,-2).lineTo(-0.8,-1.6).lineTo(-1.2,-0.9).lineTo(-1.3,-0).curveTo(-1.3,0.5,-1.1,0.9).curveTo(-1,1.3,-0.8,1.5).curveTo(-0.6,1.8,-0.3,2).lineTo(0.4,2.1).lineTo(1,2).lineTo(1.3,1.8).lineTo(1.6,1.6).lineTo(1.8,1.5).lineTo(2,1.6).lineTo(2.3,2).lineTo(1.8,2.4).lineTo(1.3,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.3,2.9,-0.8,2.7).closePath();
	this.shape_65.setTransform(33.5,31.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_66.setTransform(27.7,31.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.5,1.2).curveTo(-2.6,0.6,-2.7,-0).curveTo(-2.6,-0.7,-2.5,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.7,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0.1,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0.1,2.1).curveTo(0.9,2.1,1.2,1.5).curveTo(1.7,1,1.7,-0).curveTo(1.7,-1,1.2,-1.6).curveTo(0.9,-2.1,0.1,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_67.setTransform(21.6,31.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.4).curveTo(-2.2,3,-2.3,2.5).curveTo(-2.5,1.9,-2.5,1.2).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.5,-1.8,-0.9).curveTo(-1.5,-1.2,-1.1,-1.5).curveTo(-0.6,-1.7,-0,-1.7).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,4).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.9,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.3).curveTo(-1.4,0.2,-1.4,1.2).lineTo(-1.3,2.1).curveTo(-1.3,2.5,-1.1,2.8).lineTo(-0.6,3.2).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3).curveTo(1.2,2.8,1.5,2.5).lineTo(1.5,-0.2).curveTo(1.2,-0.6,0.9,-0.8).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.3).closePath();
	this.shape_68.setTransform(12.4,30.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_69.setTransform(6.6,31.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,2.7).curveTo(-1.2,2.5,-1.6,2.1).lineTo(-2.1,1.2).curveTo(-2.3,0.7,-2.3,-0).curveTo(-2.3,-0.6,-2.1,-1.2).curveTo(-1.9,-1.7,-1.6,-2.1).curveTo(-1.3,-2.5,-0.8,-2.7).curveTo(-0.3,-2.9,0.4,-2.9).curveTo(0.9,-2.9,1.4,-2.7).curveTo(1.8,-2.5,2.2,-2.2).lineTo(1.9,-1.8).lineTo(1.8,-1.7).lineTo(1.7,-1.7).lineTo(1.5,-1.7).lineTo(1.3,-1.9).lineTo(0.9,-2.1).lineTo(0.4,-2.1).curveTo(0,-2.1,-0.3,-2).lineTo(-0.8,-1.6).lineTo(-1.2,-0.9).lineTo(-1.3,-0).curveTo(-1.3,0.5,-1.1,0.9).curveTo(-1,1.3,-0.8,1.5).curveTo(-0.6,1.8,-0.3,2).lineTo(0.4,2.1).lineTo(1,2).lineTo(1.3,1.8).lineTo(1.6,1.6).lineTo(1.8,1.5).lineTo(2,1.6).lineTo(2.3,2).lineTo(1.8,2.4).lineTo(1.3,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.3,2.9,-0.8,2.7).closePath();
	this.shape_70.setTransform(1.2,31.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.7,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).lineTo(0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_71.setTransform(-4.6,31.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.4).curveTo(-2.2,3,-2.3,2.5).curveTo(-2.5,1.9,-2.5,1.2).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.5,-1.8,-0.9).curveTo(-1.5,-1.2,-1.1,-1.5).curveTo(-0.6,-1.7,-0,-1.7).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,4).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.9,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.3).curveTo(-1.4,0.2,-1.4,1.2).lineTo(-1.3,2.1).curveTo(-1.3,2.5,-1.1,2.8).lineTo(-0.6,3.2).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3).curveTo(1.2,2.8,1.5,2.5).lineTo(1.5,-0.2).curveTo(1.2,-0.6,0.9,-0.8).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.3).closePath();
	this.shape_72.setTransform(-10.9,30.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_73.setTransform(-16.7,31.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_74.setTransform(-21.3,31.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#000033").beginStroke().moveTo(-1.5,3.7).lineTo(-0.4,1.5).lineTo(-2.8,-3.7).lineTo(-1.9,-3.7).lineTo(-1.7,-3.7).lineTo(-1.6,-3.5).lineTo(-0.1,-0).lineTo(0,0.5).lineTo(0.2,-0).lineTo(1.7,-3.5).lineTo(1.8,-3.7).lineTo(1.9,-3.7).lineTo(2.7,-3.7).lineTo(-0.3,3.5).lineTo(-0.5,3.6).lineTo(-0.8,3.7).closePath();
	this.shape_75.setTransform(-29.2,32.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-4.1).lineTo(0.5,-4.1).lineTo(0.5,4).closePath();
	this.shape_76.setTransform(-33.3,30.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-4.1).lineTo(0.5,-4.1).lineTo(0.5,4).closePath();
	this.shape_77.setTransform(-35.8,30.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.3,-1.4,1,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0.1,2.8).lineTo(-0.6,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_78.setTransform(-40,31.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_79.setTransform(-44.3,31.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_80.setTransform(-49.5,31.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_81.setTransform(-55.4,31.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_82.setTransform(-61.4,31.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.3,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_83.setTransform(-67.1,32.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.7,1.8).lineTo(-1.6,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.6,2.1).lineTo(-0,2.2).lineTo(0.4,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1.1,1.2).lineTo(1,0.9).lineTo(0.6,0.6).lineTo(0.2,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.8,-0.9,-1.8,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.2,-2.9).curveTo(0.7,-2.9,1.2,-2.7).lineTo(1.9,-2.2).lineTo(1.6,-1.9).lineTo(1.4,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.6,-2.1).lineTo(0.2,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.8,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.5,-0.7).lineTo(-0,-0.6).lineTo(0.5,-0.4).lineTo(1.1,-0.2).lineTo(1.5,0.1).lineTo(1.9,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.9,1.8).lineTo(1.4,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_84.setTransform(46.5,16.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.4,-2.9).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.2,-3.9).lineTo(0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(0,-2.7).closePath();
	this.shape_85.setTransform(42.8,15.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_86.setTransform(35.7,16.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.4,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.4,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.6,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.5,-0.9).lineTo(-1.7,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_87.setTransform(29.5,16.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.4,-2.9).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.3,-3.9).lineTo(0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(0,-2.7).closePath();
	this.shape_88.setTransform(25.1,15.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.8,1.8).lineTo(-1.7,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.6,2.1).lineTo(-0.1,2.2).lineTo(0.5,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1,1.2).lineTo(0.9,0.9).lineTo(0.6,0.6).lineTo(0.1,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.8,-0.9,-1.9,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.1,-2.9).curveTo(0.7,-2.9,1.2,-2.7).lineTo(1.9,-2.2).lineTo(1.6,-1.9).lineTo(1.5,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.6,-2.1).lineTo(0.1,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.9,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.4,-0.7).lineTo(0,-0.6).lineTo(0.6,-0.4).lineTo(1,-0.2).lineTo(1.5,0.1).lineTo(1.8,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.8,1.8).lineTo(1.5,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_89.setTransform(21.4,16.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.5,-2.9).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.3,-3.9).lineTo(-0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(-0,-2.7).closePath();
	this.shape_90.setTransform(17.8,15.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,2.8).lineTo(-2.7,-2.8).lineTo(-2,-2.8).lineTo(-1.8,-2.7).lineTo(-1.7,-2.6).lineTo(-0.2,1).lineTo(-0.1,1.4).lineTo(0,1.8).lineTo(0.1,1.4).lineTo(0.2,1).lineTo(1.7,-2.6).lineTo(1.7,-2.7).lineTo(1.9,-2.8).lineTo(2.7,-2.8).lineTo(0.5,2.8).closePath();
	this.shape_91.setTransform(13.7,16.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_92.setTransform(7.9,16.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_93.setTransform(3.3,16.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,4).lineTo(-0.9,-0.8).lineTo(-1.5,-0.8).lineTo(-1.7,-0.9).lineTo(-1.8,-1.1).lineTo(-1.8,-1.4).lineTo(-0.9,-1.4).lineTo(-0.9,-2).lineTo(-0.8,-2.9).lineTo(-0.3,-3.5).curveTo(-0.1,-3.7,0.2,-3.8).curveTo(0.6,-4,1,-4).lineTo(1.8,-3.9).lineTo(1.7,-3.4).curveTo(1.7,-3.4,1.7,-3.3).curveTo(1.7,-3.3,1.7,-3.3).curveTo(1.6,-3.3,1.6,-3.3).curveTo(1.6,-3.2,1.6,-3.2).lineTo(1.2,-3.2).lineTo(0.8,-3.2).lineTo(0.4,-2.9).lineTo(0.1,-2.6).lineTo(0.1,-1.9).lineTo(0.1,-1.4).lineTo(1.7,-1.4).lineTo(1.7,-0.8).lineTo(0.1,-0.8).lineTo(0.1,4).closePath();
	this.shape_94.setTransform(-3.6,15.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.4,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.4,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.6,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.5,-0.9).lineTo(-1.7,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_95.setTransform(-8.7,16.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-0.9,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.6).lineTo(-0.6,-3.7).lineTo(-0.4,-3.7).lineTo(0,-3.7).lineTo(0,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0,-1.1).lineTo(0,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.7,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.4,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.1,3.6).lineTo(0.5,3.7).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_96.setTransform(-16.5,15.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_97.setTransform(-21.6,16.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_98.setTransform(-27.7,16.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.4,1.2).curveTo(-2.6,0.6,-2.7,-0).curveTo(-2.6,-0.7,-2.4,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,2,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.6,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,2,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.5,-0.9).lineTo(-1.6,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_99.setTransform(-33.8,16.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#000033").beginStroke().moveTo(2.8,2.8).lineTo(2.8,-0.7).curveTo(2.8,-1.4,2.5,-1.7).curveTo(2.2,-2.1,1.7,-2.1).lineTo(1.3,-2).lineTo(0.8,-1.7).lineTo(0.6,-1.3).lineTo(0.5,-0.7).lineTo(0.5,2.8).lineTo(-0.5,2.8).lineTo(-0.5,-0.7).curveTo(-0.5,-1.4,-0.7,-1.7).curveTo(-1.1,-2.1,-1.5,-2.1).curveTo(-1.9,-2.1,-2.2,-1.9).curveTo(-2.6,-1.7,-2.8,-1.3).lineTo(-2.8,2.8).lineTo(-3.8,2.8).lineTo(-3.8,-2.7).lineTo(-3.2,-2.7).curveTo(-3.2,-2.7,-3.1,-2.7).curveTo(-3.1,-2.7,-3,-2.7).curveTo(-3,-2.6,-3,-2.6).curveTo(-3,-2.6,-3,-2.5).lineTo(-2.9,-2).curveTo(-2.5,-2.4,-2.2,-2.6).curveTo(-1.8,-2.8,-1.3,-2.8).curveTo(-0.7,-2.8,-0.4,-2.5).curveTo(-0,-2.2,0.2,-1.7).lineTo(0.4,-2.2).lineTo(0.9,-2.6).lineTo(1.4,-2.8).lineTo(1.9,-2.8).curveTo(2.3,-2.8,2.7,-2.7).curveTo(3,-2.6,3.3,-2.3).curveTo(3.5,-2,3.7,-1.6).curveTo(3.8,-1.2,3.8,-0.7).lineTo(3.8,2.8).closePath();
	this.shape_100.setTransform(-41.4,16.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,1,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.7,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_101.setTransform(-48.8,16.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_102.setTransform(-57.1,16.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#000033").beginStroke().moveTo(1.4,4).lineTo(1.4,0.5).curveTo(1.4,-0.2,1.1,-0.5).curveTo(0.8,-0.9,0.2,-0.8).curveTo(-0.2,-0.8,-0.6,-0.6).lineTo(-1.3,-0).lineTo(-1.3,4).lineTo(-2.3,4).lineTo(-2.3,-4.1).lineTo(-1.3,-4.1).lineTo(-1.3,-0.8).lineTo(-0.5,-1.4).curveTo(-0.1,-1.6,0.5,-1.6).curveTo(0.9,-1.6,1.3,-1.5).lineTo(1.9,-1.1).curveTo(2.1,-0.7,2.2,-0.4).lineTo(2.3,0.5).lineTo(2.3,4).closePath();
	this.shape_103.setTransform(-63,15.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.7).lineTo(0.1,-3.7).lineTo(0.1,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.6,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.3,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.2,3.6).lineTo(0.4,3.7).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_104.setTransform(-67.9,15.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,1.2).lineTo(-0.6,1.1).lineTo(-0.6,1.1).lineTo(-0.6,1).lineTo(-0.5,1).lineTo(-0.4,0.8).lineTo(-0.2,0.5).lineTo(-0.1,0.2).lineTo(0,-0.1).lineTo(0,-0.1).curveTo(-0.3,-0.1,-0.5,-0.3).curveTo(-0.6,-0.5,-0.6,-0.8).curveTo(-0.6,-0.9,-0.6,-0.9).curveTo(-0.6,-1,-0.6,-1).curveTo(-0.6,-1.1,-0.6,-1.1).curveTo(-0.5,-1.2,-0.5,-1.2).curveTo(-0.3,-1.4,0,-1.4).lineTo(0.3,-1.4).lineTo(0.5,-1.1).lineTo(0.6,-0.9).lineTo(0.6,-0.6).lineTo(0.6,-0.1).lineTo(0.4,0.4).lineTo(0,1).lineTo(-0.3,1.4).closePath();
	this.shape_105.setTransform(59.3,4.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-0.9,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.8).lineTo(0,-3.8).lineTo(0,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0,-1.1).lineTo(0,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.7,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.3,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.1,3.6).lineTo(0.4,3.7).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_106.setTransform(56.2,0.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_107.setTransform(51.1,1.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_108.setTransform(45.2,1.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#000033").beginStroke().moveTo(2.8,2.8).lineTo(2.8,-0.7).curveTo(2.8,-1.4,2.5,-1.7).curveTo(2.2,-2.1,1.7,-2.1).lineTo(1.3,-2).lineTo(0.8,-1.7).lineTo(0.6,-1.3).lineTo(0.5,-0.7).lineTo(0.5,2.8).lineTo(-0.5,2.8).lineTo(-0.5,-0.7).curveTo(-0.5,-1.4,-0.7,-1.7).curveTo(-1.1,-2.1,-1.5,-2.1).curveTo(-1.9,-2.1,-2.2,-1.9).curveTo(-2.6,-1.7,-2.8,-1.3).lineTo(-2.8,2.8).lineTo(-3.8,2.8).lineTo(-3.8,-2.7).lineTo(-3.2,-2.7).curveTo(-3.2,-2.7,-3.1,-2.7).curveTo(-3.1,-2.7,-3,-2.7).curveTo(-3,-2.6,-3,-2.6).curveTo(-3,-2.6,-3,-2.5).lineTo(-2.9,-2).curveTo(-2.5,-2.4,-2.2,-2.6).curveTo(-1.8,-2.8,-1.3,-2.8).curveTo(-0.7,-2.8,-0.4,-2.5).curveTo(-0,-2.2,0.2,-1.7).lineTo(0.5,-2.2).lineTo(0.9,-2.6).lineTo(1.4,-2.8).lineTo(1.9,-2.8).curveTo(2.3,-2.8,2.7,-2.7).curveTo(3,-2.6,3.3,-2.3).curveTo(3.5,-2,3.7,-1.6).curveTo(3.8,-1.2,3.8,-0.7).lineTo(3.8,2.8).closePath();
	this.shape_109.setTransform(37.8,1.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_110.setTransform(30.2,1.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,2.7).curveTo(-1.2,2.5,-1.6,2.1).lineTo(-2.1,1.2).curveTo(-2.3,0.7,-2.3,-0).curveTo(-2.3,-0.6,-2.1,-1.2).curveTo(-1.9,-1.7,-1.6,-2.1).curveTo(-1.3,-2.5,-0.8,-2.7).curveTo(-0.3,-2.9,0.4,-2.9).curveTo(0.9,-2.9,1.4,-2.7).curveTo(1.8,-2.5,2.2,-2.2).lineTo(1.9,-1.8).lineTo(1.8,-1.7).lineTo(1.7,-1.7).lineTo(1.5,-1.7).lineTo(1.3,-1.9).lineTo(0.9,-2.1).lineTo(0.4,-2.1).curveTo(0,-2.1,-0.3,-2).lineTo(-0.8,-1.6).lineTo(-1.2,-0.9).lineTo(-1.3,-0).curveTo(-1.3,0.5,-1.1,0.9).curveTo(-1,1.3,-0.8,1.5).curveTo(-0.6,1.8,-0.3,2).lineTo(0.4,2.1).lineTo(1,2).lineTo(1.3,1.8).lineTo(1.6,1.6).lineTo(1.8,1.5).lineTo(2,1.6).lineTo(2.3,2).lineTo(1.8,2.4).lineTo(1.3,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.3,2.9,-0.8,2.7).closePath();
	this.shape_111.setTransform(24.6,1.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.4,1.2).curveTo(-2.6,0.6,-2.7,-0).curveTo(-2.6,-0.7,-2.4,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,2,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.6,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,2,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.5,-0.9).lineTo(-1.6,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_112.setTransform(18.8,1.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.3).curveTo(-2.2,3,-2.3,2.5).curveTo(-2.5,2,-2.5,1.3).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.5,-1.8,-0.9).curveTo(-1.5,-1.2,-1.1,-1.4).curveTo(-0.6,-1.6,-0,-1.7).curveTo(0.5,-1.7,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.8,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.6,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.3).curveTo(-1.4,0.2,-1.4,1.3).lineTo(-1.3,2.2).curveTo(-1.3,2.6,-1.1,2.8).curveTo(-0.9,3.1,-0.6,3.2).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3.1).curveTo(1.2,2.9,1.5,2.5).lineTo(1.5,-0.2).curveTo(1.2,-0.6,0.9,-0.8).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.3).closePath();
	this.shape_113.setTransform(12.5,0.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_114.setTransform(5.1,1.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_115.setTransform(-0.3,1.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.5,1.2).curveTo(-2.6,0.6,-2.6,-0).curveTo(-2.6,-0.7,-2.5,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.7,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0.1,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0.1,2.1).curveTo(0.8,2.1,1.2,1.5).curveTo(1.7,1,1.7,-0).curveTo(1.7,-1,1.2,-1.6).curveTo(0.8,-2.1,0.1,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_116.setTransform(-6.4,1.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#000033").beginStroke().moveTo(-1.4,3.7).lineTo(-0.4,1.5).lineTo(-2.8,-3.7).lineTo(-1.9,-3.7).lineTo(-1.7,-3.7).lineTo(-1.6,-3.5).lineTo(-0.1,-0).lineTo(0,0.5).lineTo(0.2,-0).lineTo(1.6,-3.5).lineTo(1.8,-3.7).lineTo(1.9,-3.7).lineTo(2.7,-3.7).lineTo(-0.3,3.5).lineTo(-0.5,3.6).lineTo(-0.8,3.7).closePath();
	this.shape_117.setTransform(-12.3,2.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,4).lineTo(-0.9,-0.8).lineTo(-1.5,-0.8).lineTo(-1.7,-0.9).lineTo(-1.8,-1.1).lineTo(-1.8,-1.4).lineTo(-0.9,-1.4).lineTo(-0.9,-2).lineTo(-0.8,-2.9).lineTo(-0.3,-3.5).curveTo(-0.1,-3.7,0.2,-3.9).curveTo(0.6,-4,1,-4).lineTo(1.8,-3.9).lineTo(1.7,-3.4).curveTo(1.7,-3.4,1.7,-3.3).curveTo(1.7,-3.3,1.7,-3.3).curveTo(1.6,-3.3,1.6,-3.3).curveTo(1.6,-3.2,1.6,-3.2).lineTo(1.2,-3.2).lineTo(0.8,-3.2).lineTo(0.4,-3).lineTo(0.1,-2.6).lineTo(0.1,-2).lineTo(0.1,-1.4).lineTo(1.7,-1.4).lineTo(1.7,-0.8).lineTo(0.1,-0.8).lineTo(0.1,4).closePath();
	this.shape_118.setTransform(-19.8,0.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.4,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.4,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.6,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.5,-0.9).lineTo(-1.7,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_119.setTransform(-24.9,1.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_120.setTransform(-33.7,1.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.7,1.8).lineTo(-1.6,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.6,2.1).lineTo(-0,2.2).lineTo(0.4,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1.1,1.2).lineTo(1,0.9).lineTo(0.6,0.6).lineTo(0.2,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.8,-0.9,-1.8,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.2,-2.9).curveTo(0.7,-2.9,1.2,-2.7).lineTo(1.9,-2.2).lineTo(1.6,-1.9).lineTo(1.4,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.6,-2.1).lineTo(0.2,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.8,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.5,-0.7).lineTo(-0,-0.6).lineTo(0.5,-0.4).lineTo(1.1,-0.2).lineTo(1.5,0.1).lineTo(1.9,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.9,1.8).lineTo(1.4,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_121.setTransform(-39,1.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.5,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.5,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.6,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.9,2.1,1.2,1.5).curveTo(1.7,1,1.7,-0).curveTo(1.7,-1,1.2,-1.6).curveTo(0.9,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_122.setTransform(-44.5,1.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#000033").beginStroke().moveTo(-2.5,3.8).lineTo(-2.5,-3.7).lineTo(-1.9,-3.7).curveTo(-1.8,-3.7,-1.8,-3.7).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.6,-3.5,-1.6,-3.5).lineTo(-1.5,-2.8).curveTo(-1.2,-3.3,-0.7,-3.5).curveTo(-0.2,-3.8,0.4,-3.8).curveTo(0.8,-3.8,1.2,-3.6).curveTo(1.6,-3.4,1.9,-3.1).curveTo(2.2,-2.7,2.3,-2.2).curveTo(2.5,-1.6,2.5,-0.9).curveTo(2.5,-0.3,2.3,0.2).curveTo(2.1,0.7,1.8,1.1).curveTo(1.5,1.5,1.1,1.7).curveTo(0.6,2,0.1,2).curveTo(-0.5,2,-0.8,1.8).curveTo(-1.2,1.6,-1.5,1.3).lineTo(-1.5,3.8).closePath().moveTo(-0.8,-2.8).curveTo(-1.2,-2.6,-1.5,-2.2).lineTo(-1.5,0.5).curveTo(-1.2,0.9,-0.9,1).curveTo(-0.6,1.2,-0.2,1.2).curveTo(0.6,1.2,1,0.6).curveTo(1.5,0.1,1.5,-0.9).lineTo(1.4,-1.9).curveTo(1.3,-2.3,1.1,-2.5).curveTo(0.9,-2.8,0.6,-2.9).curveTo(0.4,-3,0,-3).curveTo(-0.4,-3,-0.8,-2.8).closePath();
	this.shape_123.setTransform(-50.5,2.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_124.setTransform(-55.4,1.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_125.setTransform(-60.8,1.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("#000033").beginStroke().moveTo(-2.5,3.8).lineTo(-2.5,-3.7).lineTo(-1.9,-3.7).curveTo(-1.8,-3.7,-1.8,-3.7).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.6,-3.5,-1.6,-3.5).lineTo(-1.5,-2.8).curveTo(-1.2,-3.3,-0.7,-3.5).curveTo(-0.2,-3.8,0.4,-3.8).curveTo(0.8,-3.8,1.2,-3.6).curveTo(1.6,-3.4,1.9,-3.1).curveTo(2.2,-2.7,2.3,-2.2).curveTo(2.5,-1.6,2.5,-0.9).curveTo(2.5,-0.3,2.3,0.2).curveTo(2.1,0.7,1.8,1.1).curveTo(1.5,1.5,1.1,1.7).curveTo(0.6,2,0.1,2).curveTo(-0.5,2,-0.8,1.8).curveTo(-1.2,1.6,-1.5,1.3).lineTo(-1.5,3.8).closePath().moveTo(-0.8,-2.8).curveTo(-1.2,-2.6,-1.5,-2.2).lineTo(-1.5,0.5).curveTo(-1.2,0.9,-0.9,1).curveTo(-0.6,1.2,-0.2,1.2).curveTo(0.6,1.2,1,0.6).curveTo(1.5,0.1,1.5,-0.9).lineTo(1.4,-1.9).curveTo(1.3,-2.3,1.1,-2.5).curveTo(0.9,-2.8,0.6,-2.9).curveTo(0.4,-3,0,-3).curveTo(-0.4,-3,-0.8,-2.8).closePath();
	this.shape_126.setTransform(-66.8,2.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.3).curveTo(-2.2,3,-2.3,2.4).curveTo(-2.5,1.9,-2.5,1.3).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.9).curveTo(-1.5,-1.3,-1.1,-1.4).curveTo(-0.6,-1.6,-0,-1.6).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.8,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.6,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.4).curveTo(-1.4,0.2,-1.4,1.3).lineTo(-1.3,2.2).curveTo(-1.3,2.6,-1.1,2.8).lineTo(-0.6,3.2).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3.1).curveTo(1.2,2.8,1.5,2.4).lineTo(1.5,-0.3).curveTo(1.2,-0.6,0.9,-0.7).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.4).closePath();
	this.shape_127.setTransform(54.5,-14.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_128.setTransform(48.6,-13.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,1,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.7,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_129.setTransform(42.6,-13.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_130.setTransform(34.4,-13.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,2.7).curveTo(-1.2,2.5,-1.6,2.1).lineTo(-2.1,1.2).curveTo(-2.3,0.7,-2.3,-0).curveTo(-2.3,-0.6,-2.1,-1.2).curveTo(-1.9,-1.7,-1.6,-2.1).curveTo(-1.3,-2.5,-0.8,-2.7).curveTo(-0.3,-2.9,0.4,-2.9).curveTo(0.9,-2.9,1.4,-2.7).curveTo(1.8,-2.5,2.2,-2.2).lineTo(1.9,-1.8).lineTo(1.8,-1.7).lineTo(1.7,-1.7).lineTo(1.5,-1.7).lineTo(1.3,-1.9).lineTo(0.9,-2.1).lineTo(0.4,-2.1).curveTo(0,-2.1,-0.3,-2).lineTo(-0.8,-1.6).lineTo(-1.2,-0.9).lineTo(-1.3,-0).curveTo(-1.3,0.5,-1.1,0.9).curveTo(-1,1.3,-0.8,1.5).curveTo(-0.6,1.8,-0.3,2).lineTo(0.4,2.1).lineTo(1,2).lineTo(1.3,1.8).lineTo(1.6,1.6).lineTo(1.8,1.5).lineTo(2,1.6).lineTo(2.3,2).lineTo(1.8,2.4).lineTo(1.3,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.3,2.9,-0.8,2.7).closePath();
	this.shape_131.setTransform(28.9,-13.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_132.setTransform(23.2,-13.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_133.setTransform(17.2,-13.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.5,-2.9).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.2,-4).lineTo(-0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3.1).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(-0,-2.7).closePath();
	this.shape_134.setTransform(13,-14.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.3).curveTo(-2.2,3,-2.3,2.4).curveTo(-2.5,1.9,-2.5,1.3).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.9).curveTo(-1.5,-1.3,-1.1,-1.4).curveTo(-0.6,-1.6,-0,-1.6).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.8,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.6,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.4).curveTo(-1.4,0.2,-1.4,1.3).lineTo(-1.3,2.2).curveTo(-1.3,2.6,-1.1,2.8).lineTo(-0.6,3.2).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3.1).curveTo(1.2,2.8,1.5,2.4).lineTo(1.5,-0.3).curveTo(1.2,-0.6,0.9,-0.7).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.4).closePath();
	this.shape_135.setTransform(8.5,-14.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_136.setTransform(2.5,-13.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.2,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0.1,2.8).lineTo(-0.7,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_137.setTransform(-3.4,-13.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.3).curveTo(-2.2,3,-2.3,2.4).curveTo(-2.5,1.9,-2.5,1.3).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.9).curveTo(-1.5,-1.3,-1.1,-1.4).curveTo(-0.6,-1.6,-0,-1.6).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.8,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.6,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.4).curveTo(-1.4,0.2,-1.4,1.3).lineTo(-1.3,2.2).curveTo(-1.3,2.6,-1.1,2.8).lineTo(-0.6,3.2).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3.1).curveTo(1.2,2.8,1.5,2.4).lineTo(1.5,-0.3).curveTo(1.2,-0.6,0.9,-0.7).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.4).closePath();
	this.shape_138.setTransform(-12,-14.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_139.setTransform(-17.8,-13.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.3).curveTo(-2.2,3,-2.3,2.4).curveTo(-2.5,1.9,-2.5,1.3).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.9).curveTo(-1.5,-1.3,-1.1,-1.4).curveTo(-0.6,-1.6,-0,-1.6).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.8,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.6,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.4).curveTo(-1.4,0.2,-1.4,1.3).lineTo(-1.3,2.2).curveTo(-1.3,2.6,-1.1,2.8).curveTo(-0.9,3,-0.6,3.2).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3.1).curveTo(1.2,2.8,1.5,2.4).lineTo(1.5,-0.3).curveTo(1.2,-0.6,0.9,-0.7).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.4).closePath();
	this.shape_140.setTransform(-24,-14.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_141.setTransform(-29.9,-13.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_142.setTransform(-35.9,-13.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-1,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.8).lineTo(0.1,-3.8).lineTo(0.1,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.3).curveTo(0,2.6,0.2,2.7).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.7,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.3,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.1,3.6).lineTo(0.4,3.7).curveTo(-0.2,3.7,-0.6,3.3).closePath();
	this.shape_143.setTransform(-40.6,-14.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_144.setTransform(-45.7,-13.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.5,-2.9).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.2,-4).lineTo(-0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3.1).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(-0,-2.7).closePath();
	this.shape_145.setTransform(-50.1,-14.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_146.setTransform(-57.1,-13.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.beginFill("#000033").beginStroke().moveTo(1.4,4).lineTo(1.4,0.5).curveTo(1.4,-0.2,1.1,-0.5).curveTo(0.8,-0.8,0.2,-0.8).curveTo(-0.2,-0.9,-0.6,-0.6).lineTo(-1.3,-0).lineTo(-1.3,4).lineTo(-2.3,4).lineTo(-2.3,-4.1).lineTo(-1.3,-4.1).lineTo(-1.3,-0.8).lineTo(-0.5,-1.4).curveTo(-0.1,-1.6,0.5,-1.6).curveTo(0.9,-1.6,1.3,-1.5).lineTo(1.9,-1).curveTo(2.1,-0.8,2.2,-0.4).lineTo(2.3,0.5).lineTo(2.3,4).closePath();
	this.shape_147.setTransform(-63,-15);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.8).lineTo(0.1,-3.8).lineTo(0.1,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.6,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.3,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.2,3.6).lineTo(0.4,3.7).curveTo(-0.2,3.7,-0.6,3.3).closePath();
	this.shape_148.setTransform(-67.9,-14.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_149.setTransform(51.4,-29);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.5,1.2).curveTo(-2.6,0.6,-2.6,-0).curveTo(-2.6,-0.7,-2.5,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,2,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.7,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,2,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0.1,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.6,-0.9).lineTo(-1.6,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0.1,2.1).curveTo(0.8,2.1,1.2,1.5).curveTo(1.6,1,1.7,-0).curveTo(1.6,-1,1.2,-1.6).curveTo(0.8,-2.1,0.1,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_150.setTransform(45.2,-28.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.beginFill("#000033").beginStroke().moveTo(-2.5,3.8).lineTo(-2.5,-3.7).lineTo(-1.9,-3.7).curveTo(-1.8,-3.7,-1.8,-3.7).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.6,-3.5,-1.6,-3.5).lineTo(-1.5,-2.8).curveTo(-1.2,-3.3,-0.7,-3.5).curveTo(-0.2,-3.8,0.4,-3.8).curveTo(0.8,-3.8,1.2,-3.6).curveTo(1.6,-3.4,1.9,-3.1).curveTo(2.2,-2.7,2.3,-2.2).curveTo(2.5,-1.6,2.5,-0.9).curveTo(2.5,-0.3,2.3,0.2).curveTo(2.1,0.7,1.8,1.1).curveTo(1.5,1.5,1.1,1.7).curveTo(0.6,2,0.1,2).curveTo(-0.5,2,-0.8,1.8).curveTo(-1.2,1.6,-1.5,1.3).lineTo(-1.5,3.8).closePath().moveTo(-0.8,-2.8).curveTo(-1.2,-2.6,-1.5,-2.2).lineTo(-1.5,0.5).curveTo(-1.2,0.9,-0.9,1).curveTo(-0.6,1.2,-0.2,1.2).curveTo(0.6,1.2,1,0.6).curveTo(1.5,0.1,1.5,-0.9).lineTo(1.4,-1.9).curveTo(1.3,-2.3,1.1,-2.5).curveTo(0.9,-2.8,0.6,-2.9).curveTo(0.4,-3,0,-3).curveTo(-0.4,-3,-0.8,-2.8).closePath();
	this.shape_151.setTransform(39.2,-28);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).lineTo(0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_152.setTransform(32.9,-28.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.8,1.8).lineTo(-1.6,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.6,2.1).lineTo(-0.1,2.2).lineTo(0.5,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1.1,1.2).lineTo(0.9,0.9).lineTo(0.6,0.6).lineTo(0.2,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.9,-0.9,-1.9,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.2,-2.9).curveTo(0.7,-2.9,1.2,-2.7).lineTo(1.9,-2.2).lineTo(1.6,-1.9).lineTo(1.5,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.6,-2.1).lineTo(0.2,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.9,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.4,-0.7).lineTo(0,-0.6).lineTo(0.5,-0.4).lineTo(1.1,-0.2).lineTo(1.5,0.1).lineTo(1.8,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.8,1.8).lineTo(1.5,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_153.setTransform(24.7,-28.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.3).curveTo(-2.2,3,-2.3,2.4).curveTo(-2.5,1.9,-2.5,1.3).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.8).curveTo(-1.5,-1.3,-1.1,-1.4).curveTo(-0.6,-1.6,-0,-1.6).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.8,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.6,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.4).curveTo(-1.4,0.2,-1.4,1.3).lineTo(-1.3,2.2).curveTo(-1.3,2.5,-1.1,2.8).lineTo(-0.6,3.1).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3.1).curveTo(1.2,2.9,1.5,2.4).lineTo(1.5,-0.3).curveTo(1.2,-0.6,0.9,-0.7).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.4).closePath();
	this.shape_154.setTransform(19.1,-30.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_155.setTransform(13.1,-29);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_156.setTransform(7.2,-28.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.beginFill("#000033").beginStroke().moveTo(-2.5,3.8).lineTo(-2.5,-3.7).lineTo(-1.9,-3.7).curveTo(-1.8,-3.7,-1.8,-3.7).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.6,-3.5,-1.6,-3.5).lineTo(-1.5,-2.8).curveTo(-1.2,-3.3,-0.7,-3.5).curveTo(-0.2,-3.8,0.4,-3.8).curveTo(0.8,-3.8,1.2,-3.6).curveTo(1.6,-3.4,1.9,-3.1).curveTo(2.2,-2.7,2.3,-2.2).curveTo(2.5,-1.6,2.5,-0.9).curveTo(2.5,-0.3,2.3,0.2).curveTo(2.1,0.7,1.8,1.1).curveTo(1.5,1.5,1.1,1.7).curveTo(0.6,2,0.1,2).curveTo(-0.5,2,-0.8,1.8).curveTo(-1.2,1.6,-1.5,1.3).lineTo(-1.5,3.8).closePath().moveTo(-0.8,-2.8).curveTo(-1.2,-2.6,-1.5,-2.2).lineTo(-1.5,0.5).curveTo(-1.2,0.9,-0.9,1).curveTo(-0.6,1.2,-0.2,1.2).curveTo(0.6,1.2,1,0.6).curveTo(1.5,0.1,1.5,-0.9).lineTo(1.4,-1.9).curveTo(1.3,-2.3,1.1,-2.5).curveTo(0.9,-2.8,0.6,-2.9).curveTo(0.4,-3,0,-3).curveTo(-0.4,-3,-0.8,-2.8).closePath();
	this.shape_157.setTransform(1.3,-28);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_158.setTransform(-4.8,-28.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.3).curveTo(-2.2,3,-2.3,2.4).curveTo(-2.5,1.9,-2.5,1.3).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.8).curveTo(-1.5,-1.3,-1.1,-1.4).curveTo(-0.6,-1.6,-0,-1.6).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.8,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.6,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.4).curveTo(-1.4,0.2,-1.4,1.3).lineTo(-1.3,2.2).curveTo(-1.3,2.5,-1.1,2.8).curveTo(-0.9,3,-0.6,3.1).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3.1).curveTo(1.2,2.9,1.5,2.4).lineTo(1.5,-0.3).curveTo(1.2,-0.6,0.9,-0.7).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.4).closePath();
	this.shape_159.setTransform(-10.9,-30.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.2,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_160.setTransform(-19.4,-28);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_161.setTransform(-25.4,-29);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.5,-2.9).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.2,-4).lineTo(-0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3.1).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(-0,-2.6).closePath();
	this.shape_162.setTransform(-29.7,-30.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-0.9,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.8).lineTo(0,-3.8).lineTo(0,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0,-1.1).lineTo(0,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.7,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.3,2.6).lineTo(1.5,2.7).lineTo(1.8,3.2).lineTo(1.1,3.6).lineTo(0.4,3.8).curveTo(-0.2,3.7,-0.6,3.3).closePath();
	this.shape_163.setTransform(-32.9,-29.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.5,-2.9).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.3,-4).lineTo(-0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3.1).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(-0,-2.6).closePath();
	this.shape_164.setTransform(-36.2,-30.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.3).curveTo(-2.2,3,-2.3,2.4).curveTo(-2.5,1.9,-2.5,1.3).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.8).curveTo(-1.5,-1.3,-1.1,-1.4).curveTo(-0.6,-1.6,-0,-1.6).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.8,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.6,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.4).curveTo(-1.4,0.2,-1.4,1.3).lineTo(-1.3,2.2).curveTo(-1.3,2.5,-1.1,2.8).lineTo(-0.6,3.1).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3.1).curveTo(1.2,2.9,1.5,2.4).lineTo(1.5,-0.3).curveTo(1.2,-0.6,0.9,-0.7).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.4).closePath();
	this.shape_165.setTransform(-40.8,-30.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_166.setTransform(-46.6,-28.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.3).curveTo(-2.2,3,-2.3,2.4).curveTo(-2.5,1.9,-2.5,1.3).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.8).curveTo(-1.5,-1.3,-1.1,-1.4).curveTo(-0.6,-1.6,-0,-1.6).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.8,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.6,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.4).curveTo(-1.4,0.2,-1.4,1.3).lineTo(-1.3,2.2).curveTo(-1.3,2.5,-1.1,2.8).lineTo(-0.6,3.1).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3.1).curveTo(1.2,2.9,1.5,2.4).lineTo(1.5,-0.3).curveTo(1.2,-0.6,0.9,-0.7).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.4).closePath();
	this.shape_167.setTransform(-55.5,-30.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_168.setTransform(-61.5,-29);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0.1,2.8).lineTo(-0.7,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_169.setTransform(-67.4,-28.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_170.setTransform(66.9,-44.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.5,1.2).curveTo(-2.6,0.6,-2.7,-0).curveTo(-2.6,-0.7,-2.5,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.7,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.9,2.1,1.2,1.5).curveTo(1.7,1,1.7,-0).curveTo(1.7,-1,1.2,-1.6).curveTo(0.9,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_171.setTransform(60.7,-44.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.4,-2.9).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.2,-4).lineTo(0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3.1).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(0,-2.6).closePath();
	this.shape_172.setTransform(56.3,-45.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.8,1.8).lineTo(-1.7,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.7,2.1).lineTo(-0,2.2).lineTo(0.4,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1,1.2).lineTo(0.9,0.9).lineTo(0.6,0.6).lineTo(0.1,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.9,-0.9,-1.8,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.1,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.9,-2.2).lineTo(1.7,-1.9).lineTo(1.5,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.7,-2.1).lineTo(0.1,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.9,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.5,-0.7).lineTo(-0,-0.6).lineTo(0.6,-0.4).lineTo(1,-0.2).lineTo(1.6,0.1).lineTo(1.9,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.9,1.8).lineTo(1.5,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_173.setTransform(52.6,-44.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.4,-2.9).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.3,-4).lineTo(0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3.1).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(0,-2.6).closePath();
	this.shape_174.setTransform(49,-45.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,2.8).lineTo(-2.7,-2.8).lineTo(-1.9,-2.8).lineTo(-1.7,-2.7).lineTo(-1.6,-2.6).lineTo(-0.2,1).lineTo(-0.1,1.4).lineTo(-0,1.8).lineTo(0.1,1.4).lineTo(0.2,1).lineTo(1.7,-2.6).lineTo(1.8,-2.7).lineTo(1.9,-2.8).lineTo(2.7,-2.8).lineTo(0.4,2.8).closePath();
	this.shape_175.setTransform(44.9,-44.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_176.setTransform(39.1,-44.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_177.setTransform(34.5,-44.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,4).lineTo(-0.8,-0.7).lineTo(-1.5,-0.8).lineTo(-1.6,-0.9).lineTo(-1.7,-1.1).lineTo(-1.7,-1.5).lineTo(-0.8,-1.5).lineTo(-0.8,-2).lineTo(-0.7,-2.9).lineTo(-0.4,-3.5).curveTo(-0.1,-3.8,0.3,-3.9).curveTo(0.6,-4,1.1,-4).lineTo(1.8,-3.9).lineTo(1.7,-3.4).curveTo(1.7,-3.4,1.7,-3.3).curveTo(1.7,-3.3,1.7,-3.3).curveTo(1.6,-3.3,1.6,-3.3).curveTo(1.6,-3.3,1.5,-3.3).lineTo(1.2,-3.3).lineTo(0.7,-3.2).lineTo(0.4,-3).lineTo(0.2,-2.5).lineTo(0.1,-2).lineTo(0.1,-1.5).lineTo(1.7,-1.5).lineTo(1.7,-0.7).lineTo(0.1,-0.7).lineTo(0.1,4).closePath();
	this.shape_178.setTransform(27.6,-45.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.5,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.5,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.7,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.9,2.1,1.2,1.5).curveTo(1.7,1,1.7,-0).curveTo(1.7,-1,1.2,-1.6).curveTo(0.9,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_179.setTransform(22.5,-44.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-1,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.5).lineTo(-0.6,-3.7).lineTo(-0.5,-3.8).lineTo(0.1,-3.8).lineTo(0.1,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.2).curveTo(0,2.6,0.2,2.8).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.7,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.3,2.6).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.1,3.6).lineTo(0.4,3.8).curveTo(-0.2,3.8,-0.6,3.3).closePath();
	this.shape_180.setTransform(14.7,-45);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_181.setTransform(9.6,-44.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).lineTo(0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_182.setTransform(3.5,-44.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.5,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.5,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.6,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.9,2.1,1.2,1.5).curveTo(1.7,1,1.7,-0).curveTo(1.7,-1,1.2,-1.6).curveTo(0.9,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_183.setTransform(-2.6,-44.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.beginFill("#000033").beginStroke().moveTo(2.8,2.8).lineTo(2.8,-0.7).curveTo(2.8,-1.4,2.5,-1.7).curveTo(2.2,-2.1,1.7,-2.1).lineTo(1.3,-2).lineTo(0.8,-1.7).lineTo(0.6,-1.3).lineTo(0.5,-0.7).lineTo(0.5,2.8).lineTo(-0.5,2.8).lineTo(-0.5,-0.7).curveTo(-0.5,-1.4,-0.8,-1.7).curveTo(-1,-2.1,-1.6,-2.1).curveTo(-1.9,-2.1,-2.2,-1.9).curveTo(-2.5,-1.7,-2.8,-1.3).lineTo(-2.8,2.8).lineTo(-3.8,2.8).lineTo(-3.8,-2.7).lineTo(-3.2,-2.7).curveTo(-3.2,-2.7,-3.1,-2.7).curveTo(-3.1,-2.7,-3,-2.7).curveTo(-3,-2.6,-3,-2.6).curveTo(-3,-2.6,-2.9,-2.5).lineTo(-2.9,-2).curveTo(-2.6,-2.4,-2.1,-2.6).curveTo(-1.8,-2.8,-1.2,-2.8).curveTo(-0.7,-2.8,-0.3,-2.5).curveTo(-0,-2.2,0.1,-1.7).lineTo(0.5,-2.2).lineTo(0.9,-2.6).lineTo(1.4,-2.8).lineTo(1.9,-2.8).curveTo(2.3,-2.8,2.7,-2.7).curveTo(3,-2.6,3.3,-2.3).curveTo(3.6,-2,3.6,-1.6).curveTo(3.8,-1.2,3.8,-0.7).lineTo(3.8,2.8).closePath();
	this.shape_184.setTransform(-10.2,-44.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.8,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.3,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0.1,2.8).lineTo(-0.6,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_185.setTransform(-17.6,-44.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_186.setTransform(-25.9,-44.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.beginFill("#000033").beginStroke().moveTo(1.4,4.1).lineTo(1.4,0.5).curveTo(1.4,-0.1,1.1,-0.5).curveTo(0.8,-0.8,0.2,-0.9).curveTo(-0.2,-0.8,-0.6,-0.6).lineTo(-1.3,-0.1).lineTo(-1.3,4.1).lineTo(-2.3,4.1).lineTo(-2.3,-4).lineTo(-1.3,-4).lineTo(-1.3,-0.8).lineTo(-0.5,-1.4).curveTo(-0.1,-1.6,0.5,-1.6).curveTo(0.9,-1.6,1.3,-1.5).lineTo(1.9,-1).curveTo(2.1,-0.8,2.2,-0.3).lineTo(2.3,0.5).lineTo(2.3,4.1).closePath();
	this.shape_187.setTransform(-31.8,-45.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-0.9,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.5).lineTo(-0.6,-3.7).lineTo(-0.4,-3.8).lineTo(0,-3.8).lineTo(0,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0,-1.1).lineTo(0,2.2).curveTo(0.1,2.6,0.2,2.8).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.7,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.4,2.6).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.1,3.6).lineTo(0.5,3.8).curveTo(-0.2,3.8,-0.6,3.3).closePath();
	this.shape_188.setTransform(-36.7,-45);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_189.setTransform(-44.5,-44.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4.1).lineTo(-0.5,-4).lineTo(0.5,-4).lineTo(0.5,4.1).closePath();
	this.shape_190.setTransform(-48.6,-45.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.4,-2.9).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.2,-4).lineTo(0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3.1).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(0,-2.6).closePath();
	this.shape_191.setTransform(-51.2,-45.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.beginFill("#000033").beginStroke().moveTo(1.4,4.1).lineTo(1.4,0.5).curveTo(1.4,-0.1,1.1,-0.5).curveTo(0.8,-0.8,0.2,-0.9).curveTo(-0.2,-0.8,-0.6,-0.6).lineTo(-1.3,-0.1).lineTo(-1.3,4.1).lineTo(-2.3,4.1).lineTo(-2.3,-4).lineTo(-1.3,-4).lineTo(-1.3,-0.8).lineTo(-0.5,-1.4).curveTo(-0.1,-1.6,0.5,-1.6).curveTo(0.9,-1.6,1.3,-1.5).lineTo(1.9,-1).curveTo(2.1,-0.8,2.2,-0.3).lineTo(2.3,0.5).lineTo(2.3,4.1).closePath();
	this.shape_192.setTransform(-55.6,-45.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.beginFill("#000033").beginStroke().moveTo(2.1,4).lineTo(0.1,-2).lineTo(0.1,-2.2).lineTo(0,-2.5).lineTo(-0,-2.2).lineTo(-0.1,-2).lineTo(-2.1,4).lineTo(-3,4).lineTo(-5.5,-3.9).lineTo(-4.6,-3.9).lineTo(-4.4,-3.8).lineTo(-4.3,-3.7).lineTo(-2.6,1.8).lineTo(-2.6,2.1).lineTo(-2.5,2.5).lineTo(-2.4,2.1).lineTo(-2.3,1.8).lineTo(-0.5,-3.7).lineTo(-0.3,-3.8).lineTo(-0.1,-3.9).lineTo(0.2,-3.9).lineTo(0.4,-3.8).lineTo(0.6,-3.7).lineTo(2.4,1.8).lineTo(2.5,2.1).lineTo(2.6,2.5).lineTo(2.7,2.1).lineTo(2.7,1.8).lineTo(4.4,-3.7).lineTo(4.5,-3.8).lineTo(4.7,-3.9).lineTo(5.5,-3.9).lineTo(3.1,4).closePath();
	this.shape_193.setTransform(-64.3,-45.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-54.2,144,138.8);


(lib.gfcStep3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.step3();
	this.instance.parent = this;
	this.instance.setTransform(-84,-156.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-156.5,168,313);


(lib.gfcStep2Title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000033").beginStroke().moveTo(1.9,4.1).lineTo(1.9,-1).curveTo(1.9,-2,1.5,-2.5).curveTo(1.1,-3,0.2,-3).curveTo(-0.4,-3,-1,-2.7).curveTo(-1.5,-2.4,-2,-1.8).lineTo(-2,4.1).lineTo(-3.4,4.1).lineTo(-3.4,-4).lineTo(-2.5,-4).curveTo(-2.4,-4,-2.4,-4).curveTo(-2.3,-3.9,-2.3,-3.9).curveTo(-2.2,-3.9,-2.2,-3.8).curveTo(-2.2,-3.8,-2.2,-3.7).lineTo(-2.1,-2.8).lineTo(-1.5,-3.3).lineTo(-0.9,-3.7).lineTo(-0.2,-4).lineTo(0.6,-4.1).curveTo(1.3,-4.1,1.8,-3.9).curveTo(2.3,-3.7,2.7,-3.3).curveTo(3,-2.9,3.2,-2.3).curveTo(3.4,-1.7,3.4,-1).lineTo(3.4,4.1).closePath();
	this.shape.setTransform(6.8,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,3.9).curveTo(-2.3,3.6,-2.8,3.1).curveTo(-3.3,2.5,-3.6,1.7).curveTo(-3.9,1,-3.9,0).curveTo(-3.9,-0.9,-3.6,-1.7).curveTo(-3.3,-2.5,-2.8,-3).curveTo(-2.3,-3.6,-1.6,-3.9).curveTo(-0.9,-4.2,0,-4.2).curveTo(0.9,-4.2,1.6,-3.9).curveTo(2.3,-3.6,2.8,-3).curveTo(3.3,-2.5,3.6,-1.7).curveTo(3.9,-0.9,3.9,0).curveTo(3.9,1,3.6,1.7).curveTo(3.3,2.5,2.8,3.1).curveTo(2.3,3.6,1.6,3.9).curveTo(0.9,4.2,0,4.2).curveTo(-0.9,4.2,-1.6,3.9).closePath().moveTo(-1,-2.8).curveTo(-1.5,-2.6,-1.8,-2.2).curveTo(-2.1,-1.8,-2.2,-1.3).curveTo(-2.4,-0.7,-2.4,0).curveTo(-2.4,1.5,-1.8,2.3).curveTo(-1.2,3.1,0,3.1).curveTo(1.2,3.1,1.8,2.3).curveTo(2.4,1.5,2.4,0).curveTo(2.4,-1.4,1.8,-2.2).curveTo(1.2,-3,0,-3).curveTo(-0.6,-3,-1,-2.8).closePath();
	this.shape_1.setTransform(-2.2,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000033").beginStroke().moveTo(-0.7,5.8).lineTo(-0.7,-2.3).lineTo(0.7,-2.3).lineTo(0.7,5.8).closePath().moveTo(-0.4,-3.9).lineTo(-0.7,-4.1).lineTo(-0.9,-4.4).lineTo(-1,-4.8).lineTo(-0.9,-5.2).lineTo(-0.7,-5.5).lineTo(-0.4,-5.8).lineTo(-0,-5.8).lineTo(0.4,-5.8).lineTo(0.7,-5.5).lineTo(0.9,-5.2).lineTo(1,-4.8).lineTo(0.9,-4.4).lineTo(0.7,-4.1).lineTo(0.4,-3.9).lineTo(-0,-3.8).closePath();
	this.shape_2.setTransform(-8.6,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,4.9).curveTo(-1.3,4.3,-1.3,3.3).lineTo(-1.3,-1.6).lineTo(-2.3,-1.6).lineTo(-2.5,-1.7).lineTo(-2.6,-2).lineTo(-2.6,-2.5).lineTo(-1.3,-2.6).lineTo(-1,-5.1).lineTo(-0.9,-5.3).lineTo(-0.6,-5.4).lineTo(0.1,-5.4).lineTo(0.1,-2.6).lineTo(2.4,-2.6).lineTo(2.4,-1.6).lineTo(0.1,-1.6).lineTo(0.1,3.2).curveTo(0.1,3.7,0.3,4).curveTo(0.6,4.2,1,4.2).lineTo(1.3,4.2).lineTo(1.6,4).lineTo(1.8,3.9).lineTo(2,3.9).lineTo(2.2,4).lineTo(2.6,4.7).curveTo(2.2,5.1,1.7,5.2).curveTo(1.2,5.5,0.6,5.5).curveTo(-0.3,5.5,-0.8,4.9).closePath();
	this.shape_3.setTransform(-13.3,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000033").beginStroke().moveTo(-1.8,4).lineTo(-2.5,3.7).curveTo(-2.8,3.4,-3,3).curveTo(-3.2,2.6,-3.2,2.1).curveTo(-3.2,1.6,-2.9,1.1).curveTo(-2.7,0.7,-2.1,0.3).curveTo(-1.4,-0.1,-0.5,-0.3).curveTo(0.4,-0.5,1.8,-0.5).lineTo(1.8,-1.2).curveTo(1.8,-2,1.4,-2.5).curveTo(1,-3.1,0.2,-3.1).curveTo(-0.3,-3,-0.7,-2.9).lineTo(-1.3,-2.6).lineTo(-1.7,-2.3).lineTo(-2.1,-2.2).lineTo(-2.4,-2.2).lineTo(-2.5,-2.4).lineTo(-2.8,-2.9).curveTo(-2.1,-3.6,-1.4,-3.9).curveTo(-0.5,-4.2,0.4,-4.2).curveTo(1.1,-4.2,1.6,-4).curveTo(2.1,-3.8,2.5,-3.3).curveTo(2.8,-2.9,3,-2.4).curveTo(3.2,-1.8,3.2,-1.2).lineTo(3.2,4).lineTo(2.6,4).lineTo(2.2,4).lineTo(2.1,3.7).lineTo(2,3).lineTo(1.3,3.4).lineTo(0.6,3.9).lineTo(-0,4.1).lineTo(-0.9,4.2).lineTo(-1.8,4).closePath().moveTo(0.2,0.5).lineTo(-1,0.9).curveTo(-1.4,1.1,-1.6,1.3).curveTo(-1.8,1.6,-1.8,2).lineTo(-1.7,2.5).lineTo(-1.5,2.9).lineTo(-1,3.1).lineTo(-0.5,3.2).lineTo(0.2,3.1).lineTo(0.8,2.9).lineTo(1.3,2.5).lineTo(1.8,2.1).lineTo(1.8,0.4).lineTo(0.2,0.5).closePath();
	this.shape_4.setTransform(-20.5,19.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#000033").beginStroke().moveTo(4.1,4.1).lineTo(4.1,-1).curveTo(4.1,-2,3.6,-2.5).curveTo(3.2,-3,2.4,-3).curveTo(2.1,-3,1.8,-2.8).curveTo(1.5,-2.7,1.2,-2.5).lineTo(0.8,-1.9).lineTo(0.7,-1).lineTo(0.7,4.1).lineTo(-0.7,4.1).lineTo(-0.7,-1).curveTo(-0.7,-2,-1.1,-2.5).curveTo(-1.5,-3,-2.3,-3).curveTo(-2.8,-3,-3.2,-2.7).curveTo(-3.7,-2.4,-4.1,-1.9).lineTo(-4.1,4.1).lineTo(-5.5,4.1).lineTo(-5.5,-4).lineTo(-4.6,-4).curveTo(-4.6,-4,-4.5,-4).curveTo(-4.4,-3.9,-4.4,-3.9).curveTo(-4.3,-3.9,-4.3,-3.8).curveTo(-4.3,-3.8,-4.3,-3.7).lineTo(-4.2,-2.9).curveTo(-3.7,-3.4,-3.2,-3.8).curveTo(-2.6,-4.1,-1.9,-4.1).curveTo(-1,-4.1,-0.5,-3.6).curveTo(-0,-3.2,0.2,-2.4).lineTo(0.6,-3.2).lineTo(1.3,-3.7).lineTo(2,-4).lineTo(2.8,-4.1).curveTo(3.4,-4.1,3.9,-3.9).curveTo(4.4,-3.7,4.8,-3.3).curveTo(5.1,-2.9,5.3,-2.3).curveTo(5.5,-1.8,5.5,-1).lineTo(5.5,4.1).closePath();
	this.shape_5.setTransform(-30.7,19.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000033").beginStroke().moveTo(-2.3,4.1).lineTo(-2.3,-4).lineTo(-1.5,-4).curveTo(-1.4,-4,-1.4,-4).curveTo(-1.3,-4,-1.3,-4).curveTo(-1.2,-3.9,-1.2,-3.9).curveTo(-1.2,-3.9,-1.2,-3.9).lineTo(-1,-3.6).lineTo(-0.9,-2.4).curveTo(-0.6,-3.2,-0,-3.7).curveTo(0.6,-4.1,1.4,-4.1).lineTo(1.9,-4.1).lineTo(2.3,-3.9).lineTo(2.2,-2.8).curveTo(2.2,-2.8,2.1,-2.7).curveTo(2.1,-2.7,2.1,-2.7).curveTo(2.1,-2.6,2,-2.6).curveTo(2,-2.6,1.9,-2.6).lineTo(1.6,-2.7).lineTo(1.1,-2.7).lineTo(0.4,-2.6).lineTo(-0.1,-2.3).lineTo(-0.5,-1.7).lineTo(-0.9,-1).lineTo(-0.9,4.1).closePath();
	this.shape_6.setTransform(-39.7,19.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,3.9).curveTo(-2.3,3.6,-2.8,3.1).curveTo(-3.3,2.5,-3.6,1.7).curveTo(-3.9,1,-3.9,0).curveTo(-3.9,-0.9,-3.6,-1.7).curveTo(-3.3,-2.5,-2.8,-3).curveTo(-2.3,-3.6,-1.6,-3.9).curveTo(-0.9,-4.2,0,-4.2).curveTo(0.9,-4.2,1.6,-3.9).curveTo(2.3,-3.6,2.8,-3).curveTo(3.3,-2.5,3.6,-1.7).curveTo(3.9,-0.9,3.9,0).curveTo(3.9,1,3.6,1.7).curveTo(3.3,2.5,2.8,3.1).curveTo(2.3,3.6,1.6,3.9).curveTo(0.9,4.2,0,4.2).curveTo(-0.9,4.2,-1.6,3.9).closePath().moveTo(-1,-2.8).curveTo(-1.5,-2.6,-1.8,-2.2).curveTo(-2.1,-1.8,-2.2,-1.3).curveTo(-2.4,-0.7,-2.4,0).curveTo(-2.4,1.5,-1.8,2.3).curveTo(-1.2,3.1,0,3.1).curveTo(1.2,3.1,1.8,2.3).curveTo(2.4,1.5,2.4,0).curveTo(2.4,-1.4,1.8,-2.2).curveTo(1.2,-3,0,-3).curveTo(-0.6,-3,-1,-2.8).closePath();
	this.shape_7.setTransform(-47.7,19.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,5.8).lineTo(-1.3,-1.1).lineTo(-2.2,-1.2).lineTo(-2.4,-1.3).lineTo(-2.5,-1.5).lineTo(-2.5,-2.1).lineTo(-1.3,-2.1).lineTo(-1.3,-2.9).curveTo(-1.3,-3.6,-1.1,-4.1).curveTo(-0.9,-4.7,-0.5,-5).curveTo(-0.2,-5.4,0.4,-5.6).curveTo(0.9,-5.8,1.5,-5.8).curveTo(2.1,-5.8,2.5,-5.6).lineTo(2.5,-4.9).curveTo(2.5,-4.9,2.5,-4.8).curveTo(2.5,-4.8,2.4,-4.8).curveTo(2.4,-4.7,2.4,-4.7).curveTo(2.3,-4.7,2.3,-4.7).lineTo(1.7,-4.7).lineTo(1.1,-4.6).curveTo(0.8,-4.5,0.6,-4.3).curveTo(0.3,-4.1,0.2,-3.7).lineTo(0.1,-2.9).lineTo(0.1,-2.1).lineTo(2.5,-2.1).lineTo(2.5,-1.1).lineTo(0.2,-1.1).lineTo(0.2,5.8).closePath();
	this.shape_8.setTransform(-54.9,17.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#000033").beginStroke().moveTo(1.9,4.1).lineTo(1.9,-1).curveTo(1.9,-2,1.5,-2.5).curveTo(1.1,-3,0.2,-3).curveTo(-0.4,-3,-1,-2.7).curveTo(-1.5,-2.4,-2,-1.8).lineTo(-2,4.1).lineTo(-3.4,4.1).lineTo(-3.4,-4).lineTo(-2.5,-4).curveTo(-2.5,-4,-2.4,-4).curveTo(-2.3,-3.9,-2.3,-3.9).curveTo(-2.2,-3.9,-2.2,-3.8).curveTo(-2.2,-3.8,-2.2,-3.7).lineTo(-2.1,-2.8).lineTo(-1.5,-3.3).lineTo(-0.9,-3.7).lineTo(-0.2,-4).lineTo(0.6,-4.1).curveTo(1.3,-4.1,1.8,-3.9).curveTo(2.3,-3.7,2.7,-3.3).curveTo(3,-2.9,3.2,-2.3).curveTo(3.4,-1.7,3.4,-1).lineTo(3.4,4.1).closePath();
	this.shape_9.setTransform(-62.2,19.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,5.7).lineTo(-0.8,-5.7).lineTo(0.8,-5.7).lineTo(0.8,5.7).closePath();
	this.shape_10.setTransform(-68.9,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,3.9).curveTo(-2,3.6,-2.5,3.1).curveTo(-3,2.5,-3.3,1.7).curveTo(-3.6,0.9,-3.6,-0.1).curveTo(-3.6,-1,-3.4,-1.7).curveTo(-3.1,-2.5,-2.6,-3).curveTo(-2.1,-3.5,-1.4,-3.8).curveTo(-0.7,-4.2,0.2,-4.2).curveTo(0.9,-4.2,1.6,-3.9).curveTo(2.2,-3.7,2.6,-3.2).curveTo(3.1,-2.7,3.4,-2.1).curveTo(3.6,-1.4,3.6,-0.5).curveTo(3.6,-0.4,3.6,-0.4).curveTo(3.6,-0.3,3.6,-0.2).curveTo(3.6,-0.2,3.5,-0.1).curveTo(3.5,-0.1,3.5,-0.1).lineTo(3.2,0).lineTo(-2.2,0).curveTo(-2.1,0.8,-1.9,1.4).curveTo(-1.8,1.9,-1.5,2.3).curveTo(-1.1,2.7,-0.7,2.9).curveTo(-0.2,3.1,0.4,3.1).curveTo(1,3.1,1.3,2.9).lineTo(2,2.7).lineTo(2.5,2.4).lineTo(2.8,2.3).curveTo(2.8,2.3,2.9,2.3).curveTo(2.9,2.3,2.9,2.3).curveTo(3,2.3,3,2.4).curveTo(3,2.4,3,2.4).lineTo(3.5,2.9).curveTo(3.2,3.3,2.8,3.5).lineTo(2,3.9).lineTo(1.1,4.1).lineTo(0.3,4.2).curveTo(-0.5,4.2,-1.3,3.9).closePath().moveTo(2.3,-0.9).curveTo(2.3,-1.4,2.1,-1.8).lineTo(1.8,-2.5).curveTo(1.5,-2.8,1.1,-2.9).curveTo(0.7,-3.1,0.2,-3.1).curveTo(-0.8,-3.1,-1.4,-2.5).curveTo(-2,-1.9,-2.2,-0.9).lineTo(2.3,-0.9).lineTo(2.3,-0.9).closePath();
	this.shape_11.setTransform(62.4,2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#000033").beginStroke().moveTo(-1.7,3.9).curveTo(-2.4,3.7,-2.9,3.2).lineTo(-2.5,2.6).lineTo(-2.4,2.5).lineTo(-2.2,2.4).lineTo(-1.9,2.5).lineTo(-1.5,2.8).lineTo(-0.9,3.1).lineTo(-0.1,3.2).lineTo(0.6,3.1).lineTo(1.1,2.7).lineTo(1.4,2.4).lineTo(1.5,1.8).curveTo(1.5,1.5,1.4,1.3).lineTo(0.9,0.9).lineTo(0.2,0.6).lineTo(-0.6,0.4).lineTo(-1.3,0.1).lineTo(-2,-0.4).curveTo(-2.3,-0.6,-2.5,-1).curveTo(-2.7,-1.3,-2.7,-1.9).curveTo(-2.7,-2.3,-2.5,-2.7).curveTo(-2.3,-3.1,-1.9,-3.4).curveTo(-1.5,-3.8,-1,-4).curveTo(-0.5,-4.2,0.2,-4.2).curveTo(1,-4.2,1.6,-4).curveTo(2.3,-3.7,2.7,-3.2).lineTo(2.4,-2.7).curveTo(2.4,-2.7,2.4,-2.6).curveTo(2.3,-2.6,2.3,-2.6).curveTo(2.3,-2.6,2.2,-2.6).curveTo(2.2,-2.5,2.1,-2.5).lineTo(1.9,-2.7).lineTo(1.5,-2.8).lineTo(1,-3.1).lineTo(0.2,-3.1).lineTo(-0.4,-3.1).lineTo(-0.9,-2.8).lineTo(-1.2,-2.4).lineTo(-1.3,-2).curveTo(-1.3,-1.7,-1.1,-1.4).lineTo(-0.7,-1.1).lineTo(0,-0.8).lineTo(0.8,-0.5).lineTo(1.6,-0.3).lineTo(2.2,0.2).lineTo(2.7,0.7).curveTo(2.9,1.1,2.9,1.5).curveTo(2.9,2.1,2.7,2.6).curveTo(2.5,3.1,2.1,3.4).curveTo(1.7,3.8,1.1,4).curveTo(0.6,4.2,-0.2,4.2).curveTo(-1,4.2,-1.7,3.9).closePath();
	this.shape_12.setTransform(54.7,2.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#000033").beginStroke().moveTo(-2.1,5.4).lineTo(-0.6,2.2).lineTo(-4,-5.4).lineTo(-2.7,-5.4).lineTo(-2.4,-5.3).lineTo(-2.3,-5.1).lineTo(-0.1,-0).lineTo(0.1,0.7).lineTo(0.3,-0).lineTo(2.4,-5.1).lineTo(2.6,-5.3).lineTo(2.9,-5.4).lineTo(4,-5.4).lineTo(-0.5,5.1).lineTo(-0.7,5.3).lineTo(-1,5.4).closePath();
	this.shape_13.setTransform(47.2,3.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#000033").beginStroke().moveTo(-0.7,5.9).lineTo(-0.7,-5.9).lineTo(0.7,-5.9).lineTo(0.7,5.9).closePath();
	this.shape_14.setTransform(41.2,0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#000033").beginStroke().moveTo(-1.8,4.1).lineTo(-2.5,3.6).curveTo(-2.8,3.4,-3,3).curveTo(-3.2,2.6,-3.2,2.1).curveTo(-3.2,1.5,-2.9,1.1).curveTo(-2.7,0.6,-2,0.3).curveTo(-1.5,-0.1,-0.5,-0.3).curveTo(0.5,-0.5,1.8,-0.5).lineTo(1.8,-1.2).curveTo(1.8,-2.1,1.4,-2.5).curveTo(1,-3.1,0.2,-3.1).curveTo(-0.3,-3,-0.7,-2.9).lineTo(-1.3,-2.6).lineTo(-1.8,-2.3).lineTo(-2.1,-2.2).lineTo(-2.4,-2.2).lineTo(-2.5,-2.4).lineTo(-2.8,-2.9).curveTo(-2.1,-3.6,-1.4,-3.9).curveTo(-0.6,-4.2,0.4,-4.2).curveTo(1,-4.2,1.6,-4).curveTo(2.1,-3.8,2.5,-3.3).curveTo(2.8,-2.9,3,-2.4).curveTo(3.2,-1.8,3.2,-1.2).lineTo(3.2,4.1).lineTo(2.6,4.1).lineTo(2.2,4).lineTo(2.1,3.7).lineTo(1.9,3).lineTo(1.3,3.4).lineTo(0.7,3.9).lineTo(-0,4.1).lineTo(-0.9,4.2).lineTo(-1.8,4.1).closePath().moveTo(0.1,0.6).lineTo(-1,0.9).curveTo(-1.4,1.1,-1.6,1.4).curveTo(-1.8,1.6,-1.8,2).lineTo(-1.7,2.5).lineTo(-1.5,2.9).lineTo(-1,3.1).lineTo(-0.5,3.2).lineTo(0.2,3.1).lineTo(0.8,2.9).lineTo(1.3,2.5).lineTo(1.8,2.1).lineTo(1.8,0.4).lineTo(0.1,0.6).closePath();
	this.shape_15.setTransform(35.1,2.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#000033").beginStroke().moveTo(1.9,4.1).lineTo(1.9,-1).curveTo(1.9,-2,1.5,-2.5).curveTo(1.1,-3,0.2,-3).curveTo(-0.4,-3,-1,-2.7).curveTo(-1.5,-2.4,-2,-1.8).lineTo(-2,4.1).lineTo(-3.4,4.1).lineTo(-3.4,-4).lineTo(-2.5,-4).curveTo(-2.4,-4,-2.4,-4).curveTo(-2.3,-3.9,-2.3,-3.9).curveTo(-2.2,-3.9,-2.2,-3.8).curveTo(-2.2,-3.8,-2.2,-3.7).lineTo(-2.1,-2.8).lineTo(-1.5,-3.3).lineTo(-0.9,-3.7).lineTo(-0.2,-4).lineTo(0.6,-4.1).curveTo(1.3,-4.1,1.8,-3.9).curveTo(2.3,-3.7,2.7,-3.3).curveTo(3,-2.9,3.2,-2.3).curveTo(3.4,-1.7,3.4,-1).lineTo(3.4,4.1).closePath();
	this.shape_16.setTransform(27,2.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#000033").beginStroke().moveTo(4.2,5.7).lineTo(3.8,5.6).lineTo(3.6,5.4).lineTo(2.6,2.6).lineTo(-2.6,2.6).lineTo(-3.7,5.4).lineTo(-3.8,5.6).lineTo(-4.2,5.7).lineTo(-5.4,5.7).lineTo(-0.8,-5.7).lineTo(0.8,-5.7).lineTo(5.4,5.7).closePath().moveTo(2.1,1.5).lineTo(0.3,-3.2).lineTo(0.2,-3.7).lineTo(-0,-4.3).lineTo(-0.4,-3.2).lineTo(-2.2,1.5).lineTo(2.1,1.5).closePath();
	this.shape_17.setTransform(17.1,0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#000033").beginStroke().moveTo(-1.8,5.7).curveTo(-2.4,5.5,-2.8,4.9).curveTo(-3.2,4.4,-3.4,3.6).curveTo(-3.6,2.8,-3.6,1.8).curveTo(-3.6,1,-3.3,0.2).curveTo(-3.1,-0.6,-2.7,-1.2).curveTo(-2.2,-1.8,-1.6,-2.1).curveTo(-0.9,-2.4,-0.1,-2.4).curveTo(0.7,-2.4,1.2,-2.2).curveTo(1.7,-1.9,2.1,-1.4).lineTo(2.1,-5.9).lineTo(3.6,-5.9).lineTo(3.6,5.9).lineTo(2.7,5.9).curveTo(2.4,5.9,2.3,5.6).lineTo(2.2,4.5).curveTo(1.7,5.2,1,5.6).curveTo(0.4,5.9,-0.5,5.9).curveTo(-1.2,5.9,-1.8,5.7).closePath().moveTo(-1.5,-0.5).curveTo(-2.1,0.3,-2.1,1.8).curveTo(-2.1,2.6,-2,3.2).curveTo(-1.8,3.8,-1.6,4.1).curveTo(-1.3,4.5,-0.9,4.7).curveTo(-0.5,4.8,-0.1,4.8).curveTo(0.6,4.8,1.2,4.5).curveTo(1.7,4.2,2.1,3.6).lineTo(2.1,-0.4).curveTo(1.7,-0.8,1.3,-1.1).curveTo(0.8,-1.3,0.2,-1.3).curveTo(-0.9,-1.3,-1.5,-0.5).closePath();
	this.shape_18.setTransform(2.9,0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#000033").beginStroke().moveTo(1.9,4.1).lineTo(1.9,-1).curveTo(1.9,-2,1.5,-2.5).curveTo(1.1,-3,0.2,-3).curveTo(-0.4,-3,-1,-2.7).curveTo(-1.5,-2.4,-2,-1.8).lineTo(-2,4.1).lineTo(-3.4,4.1).lineTo(-3.4,-4).lineTo(-2.5,-4).curveTo(-2.5,-4,-2.4,-4).curveTo(-2.3,-3.9,-2.3,-3.9).curveTo(-2.2,-3.9,-2.2,-3.8).curveTo(-2.2,-3.8,-2.2,-3.7).lineTo(-2.1,-2.8).lineTo(-1.5,-3.3).lineTo(-0.9,-3.7).lineTo(-0.2,-4).lineTo(0.6,-4.1).curveTo(1.3,-4.1,1.8,-3.9).curveTo(2.3,-3.7,2.7,-3.3).curveTo(3,-2.9,3.2,-2.3).curveTo(3.4,-1.7,3.4,-1).lineTo(3.4,4.1).closePath();
	this.shape_19.setTransform(-5.7,2.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#000033").beginStroke().moveTo(-1.8,4.1).lineTo(-2.5,3.6).curveTo(-2.8,3.4,-3,3).curveTo(-3.2,2.6,-3.2,2.1).curveTo(-3.2,1.5,-2.9,1.1).curveTo(-2.6,0.6,-2.1,0.3).curveTo(-1.4,-0.1,-0.5,-0.3).curveTo(0.5,-0.5,1.8,-0.5).lineTo(1.8,-1.2).curveTo(1.8,-2.1,1.4,-2.5).curveTo(1,-3.1,0.2,-3.1).curveTo(-0.3,-3,-0.6,-2.9).lineTo(-1.3,-2.6).lineTo(-1.8,-2.3).lineTo(-2.1,-2.2).lineTo(-2.3,-2.2).lineTo(-2.5,-2.4).lineTo(-2.8,-2.9).curveTo(-2.1,-3.6,-1.3,-3.9).curveTo(-0.6,-4.2,0.4,-4.2).curveTo(1,-4.2,1.6,-4).curveTo(2.1,-3.8,2.5,-3.3).curveTo(2.9,-2.9,3.1,-2.4).curveTo(3.2,-1.8,3.2,-1.2).lineTo(3.2,4.1).lineTo(2.6,4.1).lineTo(2.3,4).lineTo(2.1,3.7).lineTo(2,3).lineTo(1.3,3.4).lineTo(0.6,3.9).lineTo(-0.1,4.1).lineTo(-0.9,4.2).lineTo(-1.8,4.1).closePath().moveTo(0.2,0.6).lineTo(-1,0.9).curveTo(-1.4,1.1,-1.6,1.4).curveTo(-1.8,1.6,-1.8,2).lineTo(-1.7,2.5).lineTo(-1.4,2.9).lineTo(-1,3.1).lineTo(-0.4,3.2).lineTo(0.2,3.1).lineTo(0.8,2.9).lineTo(1.4,2.5).lineTo(1.8,2.1).lineTo(1.8,0.4).lineTo(0.2,0.6).closePath();
	this.shape_20.setTransform(-14.5,2.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,4.9).curveTo(-1.3,4.4,-1.3,3.3).lineTo(-1.3,-1.6).lineTo(-2.3,-1.6).lineTo(-2.5,-1.7).lineTo(-2.6,-2).lineTo(-2.6,-2.5).lineTo(-1.3,-2.6).lineTo(-1,-5.1).lineTo(-0.9,-5.3).lineTo(-0.6,-5.5).lineTo(0.1,-5.5).lineTo(0.1,-2.6).lineTo(2.4,-2.6).lineTo(2.4,-1.6).lineTo(0.1,-1.6).lineTo(0.1,3.2).curveTo(0.1,3.7,0.3,4).curveTo(0.6,4.3,1,4.2).lineTo(1.3,4.2).lineTo(1.6,4).lineTo(1.8,4).lineTo(2,3.9).lineTo(2.2,4).lineTo(2.6,4.7).curveTo(2.2,5,1.7,5.2).curveTo(1.2,5.4,0.6,5.5).curveTo(-0.3,5.5,-0.8,4.9).closePath();
	this.shape_21.setTransform(-25,0.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,3.9).curveTo(-1.8,3.6,-2.2,3.1).curveTo(-2.7,2.6,-3,1.8).curveTo(-3.3,1,-3.3,0).curveTo(-3.3,-0.9,-3.1,-1.7).curveTo(-2.8,-2.4,-2.3,-3).curveTo(-1.8,-3.5,-1.1,-3.8).curveTo(-0.4,-4.2,0.5,-4.2).curveTo(1.4,-4.2,2.1,-3.9).curveTo(2.7,-3.6,3.2,-3.1).lineTo(2.8,-2.6).lineTo(2.7,-2.5).lineTo(2.5,-2.4).lineTo(2.3,-2.5).lineTo(1.9,-2.7).lineTo(1.4,-2.9).lineTo(0.6,-3).curveTo(-0,-3,-0.4,-2.8).curveTo(-0.9,-2.6,-1.2,-2.2).curveTo(-1.5,-1.8,-1.6,-1.3).curveTo(-1.8,-0.7,-1.8,0).curveTo(-1.8,0.8,-1.6,1.3).curveTo(-1.5,1.9,-1.2,2.3).curveTo(-0.8,2.7,-0.4,2.9).curveTo(0,3.1,0.5,3.1).lineTo(1.4,3).lineTo(2,2.7).lineTo(2.3,2.4).lineTo(2.6,2.3).curveTo(2.7,2.3,2.7,2.3).curveTo(2.7,2.3,2.8,2.3).curveTo(2.8,2.3,2.8,2.4).curveTo(2.9,2.4,2.9,2.4).lineTo(3.3,2.9).curveTo(3,3.3,2.7,3.5).lineTo(2,3.9).lineTo(1.2,4.1).lineTo(0.3,4.2).curveTo(-0.4,4.2,-1.1,3.9).closePath();
	this.shape_22.setTransform(-31.6,2.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,3.9).curveTo(-2,3.6,-2.5,3.1).curveTo(-3,2.5,-3.3,1.7).curveTo(-3.6,0.9,-3.6,-0.1).curveTo(-3.6,-1,-3.3,-1.7).curveTo(-3,-2.5,-2.6,-3).curveTo(-2.1,-3.5,-1.4,-3.8).curveTo(-0.7,-4.2,0.2,-4.2).curveTo(1,-4.2,1.5,-3.9).curveTo(2.1,-3.7,2.6,-3.2).curveTo(3,-2.7,3.3,-2.1).curveTo(3.6,-1.4,3.6,-0.5).curveTo(3.6,-0.4,3.6,-0.4).curveTo(3.6,-0.3,3.6,-0.2).curveTo(3.6,-0.2,3.5,-0.1).curveTo(3.5,-0.1,3.5,-0.1).lineTo(3.2,0).lineTo(-2.2,0).curveTo(-2.2,0.8,-2,1.4).curveTo(-1.8,1.9,-1.4,2.3).curveTo(-1.1,2.7,-0.6,2.9).curveTo(-0.2,3.1,0.4,3.1).curveTo(1,3.1,1.3,2.9).lineTo(2,2.7).lineTo(2.4,2.4).lineTo(2.8,2.3).curveTo(2.8,2.3,2.9,2.3).curveTo(2.9,2.3,2.9,2.3).curveTo(3,2.3,3,2.4).curveTo(3,2.4,3.1,2.4).lineTo(3.4,2.9).curveTo(3.2,3.3,2.8,3.5).lineTo(2.1,3.9).lineTo(1.2,4.1).lineTo(0.3,4.2).curveTo(-0.5,4.2,-1.3,3.9).closePath().moveTo(2.3,-0.9).curveTo(2.3,-1.4,2.2,-1.8).lineTo(1.7,-2.5).curveTo(1.5,-2.8,1.1,-2.9).curveTo(0.7,-3.1,0.3,-3.1).curveTo(-0.8,-3.1,-1.4,-2.5).curveTo(-2,-1.9,-2.2,-0.9).lineTo(2.3,-0.9).lineTo(2.3,-0.9).closePath();
	this.shape_23.setTransform(-39.7,2.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#000033").beginStroke().moveTo(-0.7,5.9).lineTo(-0.7,-5.9).lineTo(0.7,-5.9).lineTo(0.7,5.9).closePath();
	this.shape_24.setTransform(-45.8,0.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#000033").beginStroke().moveTo(-0.7,5.9).lineTo(-0.7,-5.9).lineTo(0.7,-5.9).lineTo(0.7,5.9).closePath();
	this.shape_25.setTransform(-49.5,0.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,3.9).curveTo(-2.3,3.6,-2.8,3.1).curveTo(-3.3,2.5,-3.6,1.7).curveTo(-3.9,1,-3.9,0).curveTo(-3.9,-0.9,-3.6,-1.7).curveTo(-3.3,-2.5,-2.8,-3).curveTo(-2.3,-3.6,-1.6,-3.9).curveTo(-0.9,-4.2,0,-4.2).curveTo(0.9,-4.2,1.6,-3.9).curveTo(2.3,-3.6,2.8,-3).curveTo(3.3,-2.5,3.6,-1.7).curveTo(3.9,-0.9,3.9,0).curveTo(3.9,1,3.6,1.7).curveTo(3.3,2.5,2.8,3.1).curveTo(2.3,3.6,1.6,3.9).curveTo(0.9,4.2,0,4.2).curveTo(-0.9,4.2,-1.6,3.9).closePath().moveTo(-1,-2.8).curveTo(-1.5,-2.6,-1.8,-2.2).curveTo(-2.1,-1.8,-2.2,-1.3).curveTo(-2.4,-0.7,-2.4,0).curveTo(-2.4,1.5,-1.8,2.3).curveTo(-1.2,3.1,0,3.1).curveTo(1.2,3.1,1.8,2.3).curveTo(2.4,1.5,2.4,0).curveTo(2.4,-1.4,1.8,-2.2).curveTo(1.2,-3,0,-3).curveTo(-0.6,-3,-1,-2.8).closePath();
	this.shape_26.setTransform(-56,2.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#000033").beginStroke().moveTo(-1.5,5.4).curveTo(-2.6,5,-3.3,4.2).curveTo(-4,3.5,-4.4,2.4).curveTo(-4.8,1.3,-4.8,-0).curveTo(-4.8,-1.3,-4.4,-2.4).curveTo(-3.9,-3.5,-3.3,-4.2).curveTo(-2.5,-5,-1.5,-5.4).curveTo(-0.4,-5.9,0.8,-5.9).curveTo(2.1,-5.9,3,-5.5).curveTo(3.9,-5.1,4.7,-4.4).lineTo(4.1,-3.7).lineTo(4,-3.6).lineTo(3.8,-3.5).lineTo(3.4,-3.7).lineTo(2.9,-4).lineTo(2.1,-4.4).curveTo(1.6,-4.5,0.8,-4.5).curveTo(-0.1,-4.5,-0.8,-4.2).curveTo(-1.5,-3.9,-2.1,-3.3).curveTo(-2.6,-2.7,-2.9,-1.9).curveTo(-3.2,-1.1,-3.2,-0).curveTo(-3.2,1.1,-2.9,1.9).curveTo(-2.6,2.7,-2.1,3.3).curveTo(-1.5,3.9,-0.8,4.2).curveTo(-0.1,4.5,0.7,4.5).lineTo(1.7,4.5).lineTo(2.4,4.3).lineTo(3.1,3.9).lineTo(3.7,3.5).lineTo(3.9,3.4).lineTo(4.2,3.5).lineTo(4.8,4.1).curveTo(4.1,4.9,3.1,5.4).curveTo(2.1,5.9,0.6,5.9).curveTo(-0.6,5.9,-1.5,5.4).closePath();
	this.shape_27.setTransform(-65.6,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.1,-11.6,146,40.4);


(lib.gfcStep2Content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.7,1.8).lineTo(-1.6,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.6,2.1).lineTo(-0,2.2).lineTo(0.4,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1.1,1.2).lineTo(1,0.9).lineTo(0.6,0.6).lineTo(0.2,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.8,-0.9,-1.8,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.2,-2.9).curveTo(0.7,-2.9,1.2,-2.7).lineTo(1.9,-2.2).lineTo(1.6,-1.9).lineTo(1.4,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.6,-2.1).lineTo(0.2,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.8,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.5,-0.7).lineTo(-0,-0.6).lineTo(0.5,-0.4).lineTo(1.1,-0.2).lineTo(1.5,0.1).lineTo(1.9,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.9,1.8).lineTo(1.4,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape.setTransform(57.3,47.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.2,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_1.setTransform(52.1,48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_2.setTransform(46.2,47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.5,-2.8).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.2,-3.9).lineTo(-0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3).lineTo(0.5,-2.8).lineTo(0.3,-2.7).lineTo(-0,-2.6).closePath();
	this.shape_3.setTransform(41.8,45.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.4).curveTo(-2.2,3,-2.3,2.5).curveTo(-2.5,1.9,-2.5,1.2).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.5,-1.8,-0.9).curveTo(-1.5,-1.3,-1.1,-1.5).curveTo(-0.6,-1.7,-0,-1.7).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,4).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.9,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.3).curveTo(-1.4,0.2,-1.4,1.2).lineTo(-1.3,2.1).curveTo(-1.3,2.5,-1.1,2.8).lineTo(-0.6,3.1).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3).curveTo(1.2,2.8,1.5,2.5).lineTo(1.5,-0.2).curveTo(1.2,-0.6,0.9,-0.8).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.3).closePath();
	this.shape_4.setTransform(37.3,45.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.7,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_5.setTransform(31.5,47.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_6.setTransform(26,47.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#000033").beginStroke().moveTo(1.4,4.1).lineTo(1.4,0.5).curveTo(1.4,-0.1,1.1,-0.5).curveTo(0.8,-0.9,0.2,-0.9).curveTo(-0.2,-0.9,-0.6,-0.6).lineTo(-1.3,-0.1).lineTo(-1.3,4.1).lineTo(-2.3,4.1).lineTo(-2.3,-4).lineTo(-1.3,-4).lineTo(-1.3,-0.8).lineTo(-0.5,-1.4).curveTo(-0.1,-1.6,0.5,-1.6).curveTo(0.9,-1.6,1.3,-1.4).lineTo(1.9,-1.1).curveTo(2.1,-0.8,2.2,-0.3).lineTo(2.3,0.5).lineTo(2.3,4.1).closePath();
	this.shape_7.setTransform(20.1,45.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,0.4).lineTo(-1.3,-0.4).lineTo(1.4,-0.4).lineTo(1.4,0.4).closePath();
	this.shape_8.setTransform(15,46.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,3.8).lineTo(-1.5,3.3).lineTo(-1.6,3.8).curveTo(-1.6,3.9,-1.6,3.9).curveTo(-1.6,3.9,-1.7,4).curveTo(-1.7,4,-1.7,4).curveTo(-1.8,4,-1.8,4).lineTo(-2.5,4).lineTo(-2.5,-4.1).lineTo(-1.5,-4.1).lineTo(-1.5,-0.8).curveTo(-1.1,-1.2,-0.7,-1.4).curveTo(-0.2,-1.6,0.4,-1.7).curveTo(0.8,-1.7,1.2,-1.5).curveTo(1.6,-1.3,1.9,-0.9).curveTo(2.2,-0.6,2.3,-0).curveTo(2.5,0.5,2.5,1).curveTo(2.5,1.8,2.3,2.3).curveTo(2.1,2.8,1.8,3.3).curveTo(1.5,3.6,1.1,3.8).curveTo(0.6,4.1,0.1,4.1).curveTo(-0.5,4.1,-0.9,3.8).closePath().moveTo(-0.8,-0.7).curveTo(-1.2,-0.4,-1.5,-0).lineTo(-1.5,2.7).curveTo(-1.2,3,-0.9,3.1).curveTo(-0.6,3.3,-0.2,3.3).curveTo(0.6,3.3,1,2.7).curveTo(1.5,2.2,1.5,1.1).curveTo(1.5,0.1,1.1,-0.4).curveTo(0.7,-0.9,0,-0.9).curveTo(-0.5,-0.9,-0.8,-0.7).closePath();
	this.shape_9.setTransform(10,45.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.7,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).lineTo(0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_10.setTransform(3.7,47.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.7,1.8).lineTo(-1.6,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.6,2.1).lineTo(-0,2.2).lineTo(0.4,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1.1,1.2).lineTo(1,0.9).lineTo(0.6,0.6).lineTo(0.2,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.8,-0.9,-1.8,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.2,-2.9).curveTo(0.7,-2.9,1.2,-2.7).lineTo(1.9,-2.2).lineTo(1.6,-1.9).lineTo(1.4,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.6,-2.1).lineTo(0.2,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.8,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.5,-0.7).lineTo(-0,-0.6).lineTo(0.5,-0.4).lineTo(1.1,-0.2).lineTo(1.5,0.1).lineTo(1.9,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.9,1.8).lineTo(1.4,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_11.setTransform(-1.7,47.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.4).curveTo(-2.2,3,-2.3,2.5).curveTo(-2.5,1.9,-2.5,1.2).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.5,-1.8,-0.9).curveTo(-1.5,-1.3,-1.1,-1.5).curveTo(-0.6,-1.7,-0,-1.7).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,4).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.9,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.3).curveTo(-1.4,0.2,-1.4,1.2).lineTo(-1.3,2.1).curveTo(-1.3,2.5,-1.1,2.8).lineTo(-0.6,3.1).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3).curveTo(1.2,2.8,1.5,2.5).lineTo(1.5,-0.2).curveTo(1.2,-0.6,0.9,-0.8).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.3).closePath();
	this.shape_12.setTransform(-10.1,45.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_13.setTransform(-16,47);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0.1,2.8).lineTo(-0.7,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_14.setTransform(-22,47.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.8,1.8).lineTo(-1.7,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.7,2.1).lineTo(-0,2.2).lineTo(0.4,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1,1.2).lineTo(0.9,0.9).lineTo(0.6,0.6).lineTo(0.1,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.9,-0.9,-1.8,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.1,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.9,-2.2).lineTo(1.7,-1.9).lineTo(1.5,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.7,-2.1).lineTo(0.1,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.9,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.5,-0.7).lineTo(-0,-0.6).lineTo(0.6,-0.4).lineTo(1,-0.2).lineTo(1.6,0.1).lineTo(1.8,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.8,1.8).lineTo(1.5,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_15.setTransform(-29.7,47.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.2,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_16.setTransform(-34.9,48);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_17.setTransform(-40.8,47);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.4,-2.8).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.3,-3.9).lineTo(0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3).lineTo(0.5,-2.8).lineTo(0.3,-2.7).lineTo(0,-2.6).closePath();
	this.shape_18.setTransform(-45.2,45.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.4).curveTo(-2.2,3,-2.3,2.5).curveTo(-2.5,1.9,-2.5,1.2).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.5,-1.8,-0.9).curveTo(-1.5,-1.3,-1.1,-1.5).curveTo(-0.6,-1.7,-0,-1.7).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,4).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.9,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.3).curveTo(-1.4,0.2,-1.4,1.2).lineTo(-1.3,2.1).curveTo(-1.3,2.5,-1.1,2.8).curveTo(-0.9,3,-0.6,3.1).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3).curveTo(1.2,2.8,1.5,2.5).lineTo(1.5,-0.2).curveTo(1.2,-0.6,0.9,-0.8).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.3).closePath();
	this.shape_19.setTransform(-49.7,45.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.3,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0.1,2.8).lineTo(-0.6,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_20.setTransform(-55.5,47.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_21.setTransform(-61,47.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#000033").beginStroke().moveTo(1.4,4.1).lineTo(1.4,0.5).curveTo(1.4,-0.1,1.1,-0.5).curveTo(0.8,-0.9,0.2,-0.9).curveTo(-0.2,-0.9,-0.6,-0.6).lineTo(-1.3,-0.1).lineTo(-1.3,4.1).lineTo(-2.3,4.1).lineTo(-2.3,-4).lineTo(-1.3,-4).lineTo(-1.3,-0.8).lineTo(-0.5,-1.4).curveTo(-0.1,-1.6,0.5,-1.6).curveTo(0.9,-1.6,1.3,-1.4).lineTo(1.9,-1.1).curveTo(2.1,-0.8,2.2,-0.3).lineTo(2.3,0.5).lineTo(2.3,4.1).closePath();
	this.shape_22.setTransform(-66.9,45.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_23.setTransform(24.8,31.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.4,-2.8).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.2,-3.9).lineTo(0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3).lineTo(0.5,-2.8).lineTo(0.3,-2.7).lineTo(0,-2.7).closePath();
	this.shape_24.setTransform(20.4,30.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.3,-1.4,1,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0.1,2.8).lineTo(-0.6,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_25.setTransform(16.2,31.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#000033").beginStroke().moveTo(2.8,2.8).lineTo(2.8,-0.7).curveTo(2.8,-1.4,2.5,-1.7).curveTo(2.3,-2.1,1.7,-2.1).lineTo(1.2,-2).lineTo(0.9,-1.7).lineTo(0.6,-1.3).lineTo(0.5,-0.7).lineTo(0.5,2.8).lineTo(-0.5,2.8).lineTo(-0.5,-0.7).curveTo(-0.5,-1.4,-0.7,-1.7).curveTo(-1.1,-2.1,-1.5,-2.1).curveTo(-1.9,-2.1,-2.2,-1.9).curveTo(-2.5,-1.7,-2.8,-1.3).lineTo(-2.8,2.8).lineTo(-3.8,2.8).lineTo(-3.8,-2.7).lineTo(-3.2,-2.7).curveTo(-3.1,-2.7,-3.1,-2.7).curveTo(-3.1,-2.7,-3,-2.7).curveTo(-3,-2.7,-3,-2.6).curveTo(-3,-2.6,-3,-2.5).lineTo(-2.8,-2).curveTo(-2.5,-2.4,-2.2,-2.6).curveTo(-1.8,-2.8,-1.3,-2.8).curveTo(-0.7,-2.8,-0.4,-2.5).curveTo(0,-2.2,0.2,-1.7).lineTo(0.4,-2.2).lineTo(0.9,-2.6).lineTo(1.4,-2.8).lineTo(1.9,-2.8).curveTo(2.4,-2.8,2.7,-2.7).curveTo(3,-2.6,3.3,-2.3).curveTo(3.6,-2,3.7,-1.6).curveTo(3.8,-1.2,3.8,-0.7).lineTo(3.8,2.8).closePath();
	this.shape_26.setTransform(9.2,31.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.3,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_27.setTransform(-0.9,32.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_28.setTransform(-6.9,31.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.5,-2.8).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.3,-3.9).lineTo(-0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3).lineTo(0.5,-2.8).lineTo(0.3,-2.7).lineTo(-0,-2.7).closePath();
	this.shape_29.setTransform(-11.2,30.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.8,1.8).lineTo(-1.6,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.6,2.1).lineTo(-0.1,2.2).lineTo(0.5,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1.1,1.2).lineTo(0.9,0.9).lineTo(0.6,0.6).lineTo(0.2,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.9,-0.9,-1.9,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.2,-2.9).curveTo(0.7,-2.9,1.2,-2.7).lineTo(1.9,-2.2).lineTo(1.6,-1.9).lineTo(1.4,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.6,-2.1).lineTo(0.2,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.9,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.4,-0.7).lineTo(0,-0.6).lineTo(0.5,-0.4).lineTo(1.1,-0.2).lineTo(1.5,0.1).lineTo(1.8,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.8,1.8).lineTo(1.4,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_30.setTransform(-14.9,31.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.7,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).lineTo(0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_31.setTransform(-20.4,31.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_32.setTransform(-29.1,31.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_33.setTransform(-33.7,31.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.7,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_34.setTransform(-39.1,31.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-0.9,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.6).lineTo(-0.6,-3.7).lineTo(-0.4,-3.7).lineTo(0,-3.7).lineTo(0,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0,-1.1).lineTo(0,2.2).curveTo(0.1,2.6,0.2,2.8).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.7,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.4,2.7).lineTo(1.5,2.8).lineTo(1.8,3.3).lineTo(1.1,3.6).lineTo(0.5,3.7).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_35.setTransform(-43.9,31);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,2.7).curveTo(-1.2,2.5,-1.6,2.1).lineTo(-2.1,1.2).curveTo(-2.3,0.7,-2.3,-0).curveTo(-2.3,-0.6,-2.1,-1.2).curveTo(-1.9,-1.7,-1.6,-2.1).curveTo(-1.3,-2.5,-0.8,-2.7).curveTo(-0.3,-2.9,0.4,-2.9).curveTo(0.9,-2.9,1.4,-2.7).curveTo(1.8,-2.5,2.2,-2.2).lineTo(1.9,-1.8).lineTo(1.8,-1.7).lineTo(1.7,-1.7).lineTo(1.5,-1.7).lineTo(1.3,-1.9).lineTo(0.9,-2.1).lineTo(0.4,-2.1).curveTo(0,-2.1,-0.3,-2).lineTo(-0.8,-1.6).lineTo(-1.2,-0.9).lineTo(-1.3,-0).curveTo(-1.3,0.5,-1.1,0.9).curveTo(-1,1.3,-0.8,1.5).curveTo(-0.6,1.8,-0.3,2).lineTo(0.4,2.1).lineTo(1,2).lineTo(1.3,1.8).lineTo(1.6,1.6).lineTo(1.8,1.5).lineTo(2,1.6).lineTo(2.3,2).lineTo(1.8,2.4).lineTo(1.3,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.3,2.9,-0.8,2.7).closePath();
	this.shape_36.setTransform(-48.5,31.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.7,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).lineTo(0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_37.setTransform(-54.3,31.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_38.setTransform(-59,31.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-0.9,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.6).lineTo(-0.6,-3.7).lineTo(-0.4,-3.7).lineTo(0,-3.7).lineTo(0,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0,-1.1).lineTo(0,2.2).curveTo(0,2.6,0.2,2.8).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.6,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.4,2.7).lineTo(1.5,2.8).lineTo(1.8,3.3).lineTo(1.2,3.6).lineTo(0.5,3.7).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_39.setTransform(-63.2,31);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.7,1.8).lineTo(-1.7,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.7,2.1).lineTo(-0,2.2).lineTo(0.4,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1,1.2).lineTo(1,0.9).lineTo(0.6,0.6).lineTo(0.1,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.9,-0.9,-1.8,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.1,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.9,-2.2).lineTo(1.7,-1.9).lineTo(1.4,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.7,-2.1).lineTo(0.1,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.8,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.5,-0.7).lineTo(-0,-0.6).lineTo(0.5,-0.4).lineTo(1,-0.2).lineTo(1.6,0.1).lineTo(1.9,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.9,1.8).lineTo(1.4,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_40.setTransform(-67.6,31.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_41.setTransform(57.2,16.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#000033").beginStroke().moveTo(1.4,4).lineTo(1.4,0.5).curveTo(1.4,-0.2,1.1,-0.5).curveTo(0.8,-0.9,0.2,-0.8).curveTo(-0.2,-0.8,-0.6,-0.6).lineTo(-1.3,-0).lineTo(-1.3,4).lineTo(-2.3,4).lineTo(-2.3,-4.1).lineTo(-1.3,-4.1).lineTo(-1.3,-0.8).lineTo(-0.5,-1.4).curveTo(-0.1,-1.6,0.5,-1.6).curveTo(0.9,-1.6,1.3,-1.5).lineTo(1.9,-1.1).curveTo(2.1,-0.7,2.2,-0.4).lineTo(2.3,0.5).lineTo(2.3,4).closePath();
	this.shape_42.setTransform(51.3,15.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.7).lineTo(0.1,-3.7).lineTo(0.1,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.6,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.4,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.2,3.6).lineTo(0.4,3.7).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_43.setTransform(46.4,15.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-0.9,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.6).lineTo(-0.6,-3.7).lineTo(-0.4,-3.7).lineTo(0,-3.7).lineTo(0,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0,-1.1).lineTo(0,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.7,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.4,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.1,3.6).lineTo(0.5,3.7).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_44.setTransform(39.7,15.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.7,1.8).lineTo(-1.6,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.6,2.1).lineTo(-0,2.2).lineTo(0.4,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1.1,1.2).lineTo(1,0.9).lineTo(0.6,0.6).lineTo(0.2,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.8,-0.9,-1.8,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.2,-2.9).curveTo(0.7,-2.9,1.2,-2.7).lineTo(1.9,-2.2).lineTo(1.6,-1.9).lineTo(1.4,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.6,-2.1).lineTo(0.2,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.8,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.5,-0.7).lineTo(-0,-0.6).lineTo(0.5,-0.4).lineTo(1.1,-0.2).lineTo(1.5,0.1).lineTo(1.9,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.9,1.8).lineTo(1.4,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_45.setTransform(35.2,16.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_46.setTransform(29.8,16.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,5).lineTo(-1.2,4.9).lineTo(-1.2,4.3).lineTo(-1.1,4.3).lineTo(-1,4.2).lineTo(-0.9,4.2).lineTo(-0.7,4.2).curveTo(-0.4,4.2,-0.1,4.1).curveTo(0.1,3.9,0.1,3.4).lineTo(0.1,-2.6).lineTo(1,-2.6).lineTo(1,3.4).lineTo(0.9,4.1).curveTo(0.9,4.3,0.6,4.5).lineTo(0.2,4.9).lineTo(-0.6,5).closePath().moveTo(0.2,-3.7).lineTo(0.1,-3.9).lineTo(-0.1,-4).lineTo(-0.2,-4.3).lineTo(-0.1,-4.6).lineTo(0.1,-4.8).lineTo(0.2,-4.9).lineTo(0.5,-5).lineTo(0.8,-4.9).lineTo(1,-4.8).lineTo(1.2,-4.6).lineTo(1.2,-4.3).lineTo(1.2,-4).lineTo(1,-3.9).lineTo(0.8,-3.7).lineTo(0.5,-3.7).closePath();
	this.shape_47.setTransform(25,16.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.4).curveTo(-2.2,3,-2.3,2.5).curveTo(-2.5,2,-2.5,1.3).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.9).curveTo(-1.5,-1.2,-1.1,-1.4).curveTo(-0.6,-1.7,-0,-1.7).curveTo(0.5,-1.7,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.9,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.3).curveTo(-1.4,0.2,-1.4,1.3).lineTo(-1.3,2.2).curveTo(-1.3,2.6,-1.1,2.8).curveTo(-0.9,3.1,-0.6,3.2).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3.1).curveTo(1.2,2.8,1.5,2.5).lineTo(1.5,-0.2).curveTo(1.2,-0.6,0.9,-0.8).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.3).closePath();
	this.shape_48.setTransform(20.9,15.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.3,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0.1,2.8).lineTo(-0.6,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_49.setTransform(15.1,16.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.4).curveTo(-2.2,3,-2.3,2.5).curveTo(-2.5,2,-2.5,1.3).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.9).curveTo(-1.5,-1.2,-1.1,-1.4).curveTo(-0.6,-1.7,-0,-1.7).curveTo(0.5,-1.7,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.9,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.3).curveTo(-1.4,0.2,-1.4,1.3).lineTo(-1.3,2.2).curveTo(-1.3,2.6,-1.1,2.8).curveTo(-0.9,3.1,-0.6,3.2).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3.1).curveTo(1.2,2.8,1.5,2.5).lineTo(1.5,-0.2).curveTo(1.2,-0.6,0.9,-0.8).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.3).closePath();
	this.shape_50.setTransform(6.5,15.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_51.setTransform(0.6,16.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.3,-1.4,1,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0.1,2.8).lineTo(-0.6,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_52.setTransform(-5.4,16.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_53.setTransform(-13.8,16.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.5,1.2).curveTo(-2.6,0.6,-2.6,-0).curveTo(-2.6,-0.7,-2.5,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.7,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0.1,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0.1,2.1).curveTo(0.8,2.1,1.2,1.5).curveTo(1.7,1,1.7,-0).curveTo(1.7,-1,1.2,-1.6).curveTo(0.8,-2.1,0.1,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_54.setTransform(-19.9,16.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.5,-2.9).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.2,-3.9).lineTo(-0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(-0,-2.7).closePath();
	this.shape_55.setTransform(-24.3,15.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-0.9,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.7).lineTo(0,-3.7).lineTo(0,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0,-1.1).lineTo(0,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.7,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.3,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.1,3.6).lineTo(0.4,3.7).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_56.setTransform(-27.5,15.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.7,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_57.setTransform(-32.4,16.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#000033").beginStroke().moveTo(-2.2,2.8).lineTo(-2.2,2.4).lineTo(-2.1,2.2).lineTo(-2,2).lineTo(1,-2).lineTo(-1.9,-2).lineTo(-1.9,-2.8).lineTo(2.1,-2.8).lineTo(2.1,-2.4).lineTo(2.1,-2.2).lineTo(2,-2).lineTo(-1,2).lineTo(2,2).lineTo(2,2.8).closePath();
	this.shape_58.setTransform(-37.5,16.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.4,-2.9).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.2,-3.9).lineTo(0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(0,-2.7).closePath();
	this.shape_59.setTransform(-41.2,15.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_60.setTransform(-45.6,16.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,1,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.7,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_61.setTransform(-51.5,16.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.3,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_62.setTransform(-56.9,17.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_63.setTransform(-61.5,16.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.5,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.5,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.6,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_64.setTransform(-66.9,16.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_65.setTransform(65.4,1.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#000033").beginStroke().moveTo(1.4,4).lineTo(1.4,0.5).curveTo(1.4,-0.2,1.1,-0.5).curveTo(0.8,-0.9,0.2,-0.8).curveTo(-0.2,-0.9,-0.6,-0.6).lineTo(-1.3,-0).lineTo(-1.3,4).lineTo(-2.3,4).lineTo(-2.3,-4.1).lineTo(-1.3,-4.1).lineTo(-1.3,-0.8).lineTo(-0.5,-1.4).curveTo(-0.1,-1.6,0.5,-1.6).curveTo(0.9,-1.6,1.3,-1.5).lineTo(1.9,-1).curveTo(2.1,-0.7,2.2,-0.4).lineTo(2.3,0.5).lineTo(2.3,4).closePath();
	this.shape_66.setTransform(59.4,0.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-0.9,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.6).lineTo(-0.6,-3.7).lineTo(-0.4,-3.8).lineTo(0,-3.8).lineTo(0,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0,-1.1).lineTo(0,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.7,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.4,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.1,3.6).lineTo(0.5,3.7).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_67.setTransform(54.5,0.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_68.setTransform(46.8,1.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_69.setTransform(40.8,1.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.5,-2.9).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.3,-3.9).lineTo(0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(0,-2.7).closePath();
	this.shape_70.setTransform(36.5,0.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,4).lineTo(-0.8,-0.8).lineTo(-1.5,-0.8).lineTo(-1.6,-0.9).lineTo(-1.7,-1.1).lineTo(-1.7,-1.4).lineTo(-0.8,-1.4).lineTo(-0.8,-2).lineTo(-0.7,-2.9).lineTo(-0.4,-3.5).curveTo(-0.1,-3.7,0.3,-3.9).curveTo(0.6,-4,1.1,-4).lineTo(1.7,-3.9).lineTo(1.7,-3.4).curveTo(1.7,-3.4,1.7,-3.3).curveTo(1.7,-3.3,1.7,-3.3).curveTo(1.6,-3.3,1.6,-3.3).curveTo(1.6,-3.2,1.5,-3.2).lineTo(1.2,-3.2).lineTo(0.7,-3.2).lineTo(0.4,-3).lineTo(0.2,-2.6).lineTo(0.1,-2).lineTo(0.1,-1.4).lineTo(1.7,-1.4).lineTo(1.7,-0.8).lineTo(0.1,-0.8).lineTo(0.1,4).closePath();
	this.shape_71.setTransform(33.3,0.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_72.setTransform(28.4,1.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_73.setTransform(23.8,1.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_74.setTransform(15.7,1.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.3,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0.1,2.8).lineTo(-0.6,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_75.setTransform(9.7,1.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,2.7).curveTo(-1.2,2.5,-1.6,2.1).lineTo(-2.1,1.2).curveTo(-2.3,0.7,-2.3,-0).curveTo(-2.3,-0.6,-2.1,-1.2).curveTo(-1.9,-1.7,-1.6,-2.1).curveTo(-1.3,-2.5,-0.8,-2.7).curveTo(-0.3,-2.9,0.4,-2.9).curveTo(0.9,-2.9,1.4,-2.7).curveTo(1.8,-2.5,2.2,-2.2).lineTo(1.9,-1.8).lineTo(1.8,-1.7).lineTo(1.7,-1.7).lineTo(1.5,-1.7).lineTo(1.3,-1.9).lineTo(0.9,-2.1).lineTo(0.4,-2.1).curveTo(0,-2.1,-0.3,-2).lineTo(-0.8,-1.6).lineTo(-1.2,-0.9).lineTo(-1.3,-0).curveTo(-1.3,0.5,-1.1,0.9).curveTo(-1,1.3,-0.8,1.5).curveTo(-0.6,1.8,-0.3,2).lineTo(0.4,2.1).lineTo(1,2).lineTo(1.3,1.8).lineTo(1.6,1.6).lineTo(1.8,1.5).lineTo(2,1.6).lineTo(2.3,2).lineTo(1.8,2.4).lineTo(1.3,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.3,2.9,-0.8,2.7).closePath();
	this.shape_76.setTransform(4.6,1.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).lineTo(0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_77.setTransform(-4,1.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.4,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.4,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.6,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.5,-0.9).lineTo(-1.7,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_78.setTransform(-10.1,1.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#000033").beginStroke().moveTo(-1.5,3.7).lineTo(-0.5,1.5).lineTo(-2.7,-3.7).lineTo(-1.9,-3.7).lineTo(-1.7,-3.7).lineTo(-1.6,-3.5).lineTo(-0.1,-0).lineTo(0.1,0.5).lineTo(0.2,-0).lineTo(1.7,-3.5).lineTo(1.8,-3.7).lineTo(2,-3.7).lineTo(2.8,-3.7).lineTo(-0.4,3.5).lineTo(-0.5,3.6).lineTo(-0.7,3.7).closePath();
	this.shape_79.setTransform(-16,2.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,1.2).lineTo(-0.6,1.1).lineTo(-0.6,1.1).lineTo(-0.6,1).lineTo(-0.6,1).lineTo(-0.4,0.8).lineTo(-0.2,0.5).lineTo(-0,0.2).lineTo(0.1,-0.1).lineTo(-0,-0.1).curveTo(-0.3,-0.1,-0.5,-0.3).curveTo(-0.7,-0.5,-0.6,-0.8).curveTo(-0.6,-0.9,-0.6,-0.9).curveTo(-0.6,-1,-0.6,-1).curveTo(-0.6,-1.1,-0.6,-1.1).curveTo(-0.5,-1.2,-0.5,-1.2).curveTo(-0.3,-1.4,-0,-1.4).lineTo(0.3,-1.4).lineTo(0.5,-1.1).lineTo(0.6,-0.9).lineTo(0.6,-0.6).lineTo(0.6,-0.1).lineTo(0.4,0.4).lineTo(0.1,1).lineTo(-0.4,1.4).closePath();
	this.shape_80.setTransform(-22.8,4.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.2,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_81.setTransform(-26.9,2.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_82.setTransform(-32.8,1.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.4,-2.9).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.2,-3.9).lineTo(0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(0,-2.7).closePath();
	this.shape_83.setTransform(-37.2,0.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-0.9,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.6).lineTo(-0.6,-3.7).lineTo(-0.4,-3.8).lineTo(0,-3.8).lineTo(0,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0,-1.1).lineTo(0,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.7,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.4,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.1,3.6).lineTo(0.5,3.7).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_84.setTransform(-40.3,0.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,2.7).curveTo(-1.2,2.5,-1.6,2.1).lineTo(-2.1,1.2).curveTo(-2.3,0.7,-2.3,-0).curveTo(-2.3,-0.6,-2.1,-1.2).curveTo(-1.9,-1.7,-1.6,-2.1).curveTo(-1.3,-2.5,-0.8,-2.7).curveTo(-0.3,-2.9,0.4,-2.9).curveTo(0.9,-2.9,1.4,-2.7).curveTo(1.8,-2.5,2.2,-2.2).lineTo(1.9,-1.8).lineTo(1.8,-1.7).lineTo(1.7,-1.7).lineTo(1.5,-1.7).lineTo(1.3,-1.9).lineTo(0.9,-2.1).lineTo(0.4,-2.1).curveTo(0,-2.1,-0.3,-2).lineTo(-0.8,-1.6).lineTo(-1.2,-0.9).lineTo(-1.3,-0).curveTo(-1.3,0.5,-1.1,0.9).curveTo(-1,1.3,-0.8,1.5).curveTo(-0.6,1.8,-0.3,2).lineTo(0.4,2.1).lineTo(1,2).lineTo(1.3,1.8).lineTo(1.6,1.6).lineTo(1.8,1.5).lineTo(2,1.6).lineTo(2.3,2).lineTo(1.8,2.4).lineTo(1.3,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.3,2.9,-0.8,2.7).closePath();
	this.shape_85.setTransform(-44.9,1.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_86.setTransform(-50.5,1.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-4.1).lineTo(0.5,-4.1).lineTo(0.5,4).closePath();
	this.shape_87.setTransform(-54.7,0.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-4.1).lineTo(0.5,-4.1).lineTo(0.5,4).closePath();
	this.shape_88.setTransform(-57.2,0.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.4,1.2).curveTo(-2.6,0.6,-2.6,-0).curveTo(-2.6,-0.7,-2.4,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0.1,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,2,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.6,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,2,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0.1,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.5,-0.9).lineTo(-1.6,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0.1,2.1).curveTo(0.9,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.9,-2.1,0.1,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_89.setTransform(-61.6,1.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,2.7).curveTo(-1.2,2.5,-1.6,2.1).lineTo(-2.1,1.2).curveTo(-2.3,0.7,-2.3,-0).curveTo(-2.3,-0.6,-2.1,-1.2).curveTo(-1.9,-1.7,-1.6,-2.1).curveTo(-1.3,-2.5,-0.8,-2.7).curveTo(-0.3,-2.9,0.4,-2.9).curveTo(0.9,-2.9,1.4,-2.7).curveTo(1.8,-2.5,2.2,-2.2).lineTo(1.9,-1.8).lineTo(1.8,-1.7).lineTo(1.7,-1.7).lineTo(1.5,-1.7).lineTo(1.3,-1.9).lineTo(0.9,-2.1).lineTo(0.4,-2.1).curveTo(0,-2.1,-0.3,-2).lineTo(-0.8,-1.6).lineTo(-1.2,-0.9).lineTo(-1.3,-0).curveTo(-1.3,0.5,-1.1,0.9).curveTo(-1,1.3,-0.8,1.5).curveTo(-0.6,1.8,-0.3,2).lineTo(0.4,2.1).lineTo(1,2).lineTo(1.3,1.8).lineTo(1.6,1.6).lineTo(1.8,1.5).lineTo(2,1.6).lineTo(2.3,2).lineTo(1.8,2.4).lineTo(1.3,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.3,2.9,-0.8,2.7).closePath();
	this.shape_90.setTransform(-67.3,1.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_91.setTransform(21.9,-13.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_92.setTransform(17.3,-13.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,1,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.7,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_93.setTransform(12.1,-13.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).lineTo(0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_94.setTransform(3.7,-13.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.4,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.4,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.6,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.5,-0.9).lineTo(-1.7,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_95.setTransform(-2.4,-13.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#000033").beginStroke().moveTo(-1.5,3.7).lineTo(-0.5,1.5).lineTo(-2.7,-3.7).lineTo(-1.9,-3.7).lineTo(-1.7,-3.7).lineTo(-1.6,-3.5).lineTo(-0.1,-0).lineTo(0.1,0.5).lineTo(0.2,-0).lineTo(1.7,-3.5).lineTo(1.8,-3.7).lineTo(2,-3.7).lineTo(2.8,-3.7).lineTo(-0.4,3.5).lineTo(-0.5,3.6).lineTo(-0.7,3.7).closePath();
	this.shape_96.setTransform(-8.3,-12.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_97.setTransform(-17,-13.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.5,1.2).curveTo(-2.6,0.6,-2.6,-0).curveTo(-2.6,-0.7,-2.5,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,2,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.7,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,2,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0.1,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.6,-0.9).lineTo(-1.6,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0.1,2.1).curveTo(0.8,2.1,1.2,1.5).curveTo(1.6,1,1.7,-0).curveTo(1.6,-1,1.2,-1.6).curveTo(0.8,-2.1,0.1,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_98.setTransform(-23.2,-13.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.5,-2.9).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.2,-4).lineTo(-0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3.1).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(-0,-2.7).closePath();
	this.shape_99.setTransform(-27.6,-14.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-1,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.8).lineTo(0.1,-3.8).lineTo(0.1,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.3).curveTo(0,2.6,0.2,2.7).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.7,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.3,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.1,3.6).lineTo(0.4,3.7).curveTo(-0.2,3.7,-0.6,3.3).closePath();
	this.shape_100.setTransform(-30.7,-14.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,1,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.7,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.1,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_101.setTransform(-35.7,-13.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#000033").beginStroke().moveTo(2.8,2.8).lineTo(2.8,-0.7).curveTo(2.8,-1.4,2.5,-1.7).curveTo(2.3,-2.1,1.7,-2.1).lineTo(1.2,-2).lineTo(0.8,-1.7).lineTo(0.6,-1.3).lineTo(0.5,-0.7).lineTo(0.5,2.8).lineTo(-0.5,2.8).lineTo(-0.5,-0.7).curveTo(-0.5,-1.4,-0.8,-1.7).curveTo(-1,-2.1,-1.6,-2.1).curveTo(-1.9,-2.1,-2.2,-1.9).curveTo(-2.5,-1.7,-2.8,-1.3).lineTo(-2.8,2.8).lineTo(-3.8,2.8).lineTo(-3.8,-2.7).lineTo(-3.2,-2.7).curveTo(-3.2,-2.7,-3.1,-2.7).curveTo(-3.1,-2.7,-3,-2.7).curveTo(-3,-2.6,-3,-2.6).curveTo(-3,-2.6,-2.9,-2.5).lineTo(-2.8,-2).curveTo(-2.6,-2.4,-2.1,-2.6).curveTo(-1.8,-2.8,-1.2,-2.8).curveTo(-0.7,-2.8,-0.3,-2.5).curveTo(-0,-2.2,0.1,-1.7).lineTo(0.5,-2.2).lineTo(0.9,-2.6).lineTo(1.4,-2.8).lineTo(1.9,-2.8).curveTo(2.3,-2.8,2.7,-2.7).curveTo(3.1,-2.6,3.3,-2.3).curveTo(3.5,-2,3.6,-1.6).curveTo(3.8,-1.2,3.8,-0.7).lineTo(3.8,2.8).closePath();
	this.shape_102.setTransform(-42.7,-13.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_103.setTransform(-48.9,-13.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.4,1.2).curveTo(-2.6,0.6,-2.6,-0).curveTo(-2.6,-0.7,-2.4,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,2,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.7,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,2,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0.1,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.5,-0.9).lineTo(-1.6,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0.1,2.1).curveTo(0.8,2.1,1.2,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.2,-1.6).curveTo(0.8,-2.1,0.1,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_104.setTransform(-54.3,-13.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,4).lineTo(-0.8,-0.7).lineTo(-1.5,-0.8).lineTo(-1.6,-0.9).lineTo(-1.7,-1.1).lineTo(-1.7,-1.4).lineTo(-0.8,-1.4).lineTo(-0.8,-2).lineTo(-0.7,-2.9).lineTo(-0.4,-3.5).curveTo(-0.1,-3.7,0.3,-3.9).curveTo(0.6,-4,1.1,-4).lineTo(1.8,-3.9).lineTo(1.7,-3.4).curveTo(1.7,-3.4,1.7,-3.3).curveTo(1.7,-3.3,1.7,-3.3).curveTo(1.6,-3.3,1.6,-3.3).curveTo(1.6,-3.2,1.5,-3.2).lineTo(1.2,-3.2).lineTo(0.7,-3.2).lineTo(0.4,-3).lineTo(0.2,-2.5).lineTo(0.1,-2).lineTo(0.1,-1.4).lineTo(1.7,-1.4).lineTo(1.7,-0.7).lineTo(0.1,-0.7).lineTo(0.1,4).closePath();
	this.shape_105.setTransform(-59.3,-14.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_106.setTransform(-64.3,-13.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.4,-2.9).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.2,-4).lineTo(0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3.1).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(0,-2.7).closePath();
	this.shape_107.setTransform(-68.7,-14.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_108.setTransform(62.3,-28.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#000033").beginStroke().moveTo(1.4,4).lineTo(1.4,0.5).curveTo(1.4,-0.1,1.1,-0.5).curveTo(0.8,-0.8,0.2,-0.9).curveTo(-0.2,-0.8,-0.6,-0.6).lineTo(-1.3,-0).lineTo(-1.3,4).lineTo(-2.3,4).lineTo(-2.3,-4.1).lineTo(-1.3,-4.1).lineTo(-1.3,-0.8).lineTo(-0.5,-1.4).curveTo(-0.1,-1.6,0.5,-1.6).curveTo(0.9,-1.6,1.3,-1.5).lineTo(1.9,-1).curveTo(2.1,-0.8,2.2,-0.3).lineTo(2.3,0.5).lineTo(2.3,4).closePath();
	this.shape_109.setTransform(56.3,-30.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-0.9,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.8).lineTo(0.1,-3.8).lineTo(0.1,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.6,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.3,2.6).lineTo(1.5,2.7).lineTo(1.8,3.2).lineTo(1.2,3.6).lineTo(0.4,3.8).curveTo(-0.2,3.7,-0.6,3.3).closePath();
	this.shape_110.setTransform(51.4,-29.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,1.2).lineTo(-0.6,1.1).lineTo(-0.6,1.1).lineTo(-0.6,1).lineTo(-0.5,0.9).lineTo(-0.4,0.8).lineTo(-0.2,0.6).lineTo(-0.1,0.2).lineTo(0,-0.1).lineTo(0,-0.1).curveTo(-0.3,-0.1,-0.5,-0.3).curveTo(-0.6,-0.5,-0.6,-0.8).curveTo(-0.6,-0.9,-0.6,-0.9).curveTo(-0.6,-1,-0.6,-1).curveTo(-0.6,-1.1,-0.6,-1.1).curveTo(-0.5,-1.2,-0.5,-1.2).curveTo(-0.3,-1.4,0,-1.4).lineTo(0.3,-1.3).lineTo(0.5,-1.1).lineTo(0.6,-0.9).lineTo(0.6,-0.6).lineTo(0.6,-0.1).lineTo(0.4,0.5).lineTo(0,0.9).lineTo(-0.4,1.4).closePath();
	this.shape_111.setTransform(45.4,-26);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,4).lineTo(-0.9,-0.7).lineTo(-1.5,-0.8).lineTo(-1.7,-0.9).lineTo(-1.8,-1.1).lineTo(-1.8,-1.4).lineTo(-0.9,-1.4).lineTo(-0.9,-2).lineTo(-0.8,-2.9).lineTo(-0.3,-3.5).curveTo(-0.1,-3.8,0.2,-3.9).curveTo(0.6,-4,1,-4).lineTo(1.8,-3.9).lineTo(1.7,-3.4).curveTo(1.7,-3.4,1.7,-3.3).curveTo(1.7,-3.3,1.7,-3.3).curveTo(1.6,-3.3,1.6,-3.3).curveTo(1.6,-3.2,1.6,-3.2).lineTo(1.2,-3.2).lineTo(0.8,-3.2).lineTo(0.4,-3).lineTo(0.1,-2.5).lineTo(0.1,-2).lineTo(0.1,-1.4).lineTo(1.7,-1.4).lineTo(1.7,-0.7).lineTo(0.1,-0.7).lineTo(0.1,4).closePath();
	this.shape_112.setTransform(42.3,-30.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.4,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.4,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.6,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.5,-0.9).lineTo(-1.7,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_113.setTransform(37.2,-28.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.2,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_114.setTransform(28.5,-28);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_115.setTransform(22.5,-29);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.4,-2.9).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.2,-4).lineTo(0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3.1).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(0,-2.6).closePath();
	this.shape_116.setTransform(18.2,-30.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.3).curveTo(-2.2,3,-2.3,2.4).curveTo(-2.5,1.9,-2.5,1.3).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.8).curveTo(-1.5,-1.3,-1.1,-1.4).curveTo(-0.6,-1.6,-0,-1.6).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.8,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.6,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.4).curveTo(-1.4,0.2,-1.4,1.3).lineTo(-1.3,2.2).curveTo(-1.3,2.5,-1.1,2.8).lineTo(-0.6,3.1).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3.1).curveTo(1.2,2.9,1.5,2.4).lineTo(1.5,-0.3).curveTo(1.2,-0.6,0.9,-0.7).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.4).closePath();
	this.shape_117.setTransform(13.6,-30.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_118.setTransform(7.7,-29);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.8,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.3,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0.1,2.8).lineTo(-0.6,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.2,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_119.setTransform(1.7,-28.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.8).lineTo(0.1,-3.8).lineTo(0.1,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.6,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.3,2.6).lineTo(1.5,2.7).lineTo(1.8,3.2).lineTo(1.2,3.6).lineTo(0.4,3.8).curveTo(-0.2,3.7,-0.6,3.3).closePath();
	this.shape_120.setTransform(-2.7,-29.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.8,1.8).lineTo(-1.7,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.7,2.1).lineTo(-0.1,2.2).lineTo(0.5,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1,1.2).lineTo(0.9,0.9).lineTo(0.6,0.6).lineTo(0.1,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.8,-0.9,-1.9,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.1,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.9,-2.2).lineTo(1.7,-1.9).lineTo(1.5,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.7,-2.1).lineTo(0.1,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.9,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.4,-0.7).lineTo(0,-0.6).lineTo(0.6,-0.4).lineTo(1,-0.2).lineTo(1.6,0.1).lineTo(1.8,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.8,1.8).lineTo(1.5,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_121.setTransform(-7.1,-28.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_122.setTransform(-11.2,-29);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_123.setTransform(-16.4,-28.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.3).curveTo(-2.2,3,-2.3,2.4).curveTo(-2.5,1.9,-2.5,1.3).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.8).curveTo(-1.5,-1.3,-1.1,-1.4).curveTo(-0.6,-1.6,-0,-1.6).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.8,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.6,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.4).curveTo(-1.4,0.2,-1.4,1.3).lineTo(-1.3,2.2).curveTo(-1.3,2.5,-1.1,2.8).lineTo(-0.6,3.1).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3.1).curveTo(1.2,2.9,1.5,2.4).lineTo(1.5,-0.3).curveTo(1.2,-0.6,0.9,-0.7).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.4).closePath();
	this.shape_124.setTransform(-22.5,-30.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_125.setTransform(-28.5,-29);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).lineTo(0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_126.setTransform(-34.6,-28.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_127.setTransform(-42.1,-29);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_128.setTransform(-47.3,-28.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-0.9,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.8).lineTo(0.1,-3.8).lineTo(0.1,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.6,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.3,2.6).lineTo(1.5,2.7).lineTo(1.8,3.2).lineTo(1.2,3.6).lineTo(0.4,3.8).curveTo(-0.2,3.7,-0.6,3.3).closePath();
	this.shape_129.setTransform(-52.1,-29.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-0.9,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.6).lineTo(-0.6,-3.7).lineTo(-0.4,-3.8).lineTo(0,-3.8).lineTo(0,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0,-1.1).lineTo(0,2.3).curveTo(0,2.6,0.2,2.7).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.6,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.4,2.6).lineTo(1.5,2.7).lineTo(1.8,3.2).lineTo(1.2,3.6).lineTo(0.5,3.8).curveTo(-0.2,3.7,-0.6,3.3).closePath();
	this.shape_130.setTransform(-56,-29.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_131.setTransform(-60.9,-28.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,3.9).lineTo(-1.5,3.3).lineTo(-1.6,3.8).curveTo(-1.6,3.8,-1.6,3.9).curveTo(-1.6,3.9,-1.7,3.9).curveTo(-1.7,4,-1.7,4).curveTo(-1.8,4,-1.8,4).lineTo(-2.5,4).lineTo(-2.5,-4.1).lineTo(-1.5,-4.1).lineTo(-1.5,-0.7).curveTo(-1.1,-1.2,-0.7,-1.4).curveTo(-0.2,-1.6,0.4,-1.6).curveTo(0.8,-1.6,1.2,-1.4).curveTo(1.6,-1.3,1.9,-1).curveTo(2.2,-0.6,2.3,-0.1).curveTo(2.5,0.4,2.5,1.1).curveTo(2.5,1.7,2.3,2.3).curveTo(2.1,2.9,1.8,3.2).curveTo(1.5,3.6,1.1,3.9).curveTo(0.6,4.1,0.1,4.1).curveTo(-0.5,4.1,-0.9,3.9).closePath().moveTo(-0.8,-0.6).curveTo(-1.2,-0.5,-1.5,-0.1).lineTo(-1.5,2.6).curveTo(-1.2,3,-0.9,3.1).curveTo(-0.6,3.3,-0.2,3.3).curveTo(0.6,3.3,1,2.8).curveTo(1.5,2.2,1.5,1.1).curveTo(1.5,0.1,1.1,-0.4).curveTo(0.7,-0.9,0,-0.9).curveTo(-0.5,-0.9,-0.8,-0.6).closePath();
	this.shape_132.setTransform(-66.8,-30.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.8,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.3,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0.1,2.8).lineTo(-0.6,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_133.setTransform(66.1,-44.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.beginFill("#000033").beginStroke().moveTo(-2.5,3.8).lineTo(-2.5,-3.7).lineTo(-1.9,-3.7).curveTo(-1.8,-3.7,-1.8,-3.7).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.6,-3.5,-1.6,-3.5).lineTo(-1.5,-2.8).curveTo(-1.2,-3.3,-0.7,-3.5).curveTo(-0.2,-3.8,0.4,-3.8).curveTo(0.8,-3.8,1.2,-3.6).curveTo(1.6,-3.4,1.9,-3.1).curveTo(2.2,-2.7,2.3,-2.2).curveTo(2.5,-1.6,2.5,-0.9).curveTo(2.5,-0.3,2.3,0.2).curveTo(2.1,0.7,1.8,1.1).curveTo(1.5,1.5,1.1,1.7).curveTo(0.6,2,0.1,2).curveTo(-0.5,2,-0.8,1.8).curveTo(-1.2,1.6,-1.5,1.3).lineTo(-1.5,3.8).closePath().moveTo(-0.8,-2.8).curveTo(-1.2,-2.6,-1.5,-2.2).lineTo(-1.5,0.5).curveTo(-1.2,0.9,-0.9,1).curveTo(-0.6,1.2,-0.2,1.2).curveTo(0.6,1.2,1,0.6).curveTo(1.5,0.1,1.5,-0.9).lineTo(1.4,-1.9).curveTo(1.3,-2.3,1.1,-2.5).curveTo(0.9,-2.8,0.6,-2.9).curveTo(0.4,-3,0,-3).curveTo(-0.4,-3,-0.8,-2.8).closePath();
	this.shape_134.setTransform(57.8,-43.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.5,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.5,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.6,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.7,1,1.6,-0).curveTo(1.7,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_135.setTransform(51.5,-44.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4.1).lineTo(-0.5,-4).lineTo(0.5,-4).lineTo(0.5,4.1).closePath();
	this.shape_136.setTransform(47.1,-45.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_137.setTransform(42.9,-44.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,2.8).lineTo(-2.7,-2.8).lineTo(-1.9,-2.8).lineTo(-1.7,-2.7).lineTo(-1.7,-2.6).lineTo(-0.2,1).lineTo(-0.1,1.4).lineTo(-0,1.8).lineTo(0.1,1.4).lineTo(0.2,1).lineTo(1.7,-2.6).lineTo(1.8,-2.7).lineTo(1.9,-2.8).lineTo(2.7,-2.8).lineTo(0.4,2.8).closePath();
	this.shape_138.setTransform(37.2,-44.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_139.setTransform(31.5,-44.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.3).curveTo(-2.2,3,-2.3,2.4).curveTo(-2.5,2,-2.5,1.2).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.8).curveTo(-1.5,-1.3,-1.1,-1.5).curveTo(-0.6,-1.6,-0,-1.6).curveTo(0.5,-1.7,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.8,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.4).curveTo(-1.4,0.2,-1.4,1.2).lineTo(-1.3,2.1).curveTo(-1.3,2.5,-1.1,2.8).lineTo(-0.6,3.1).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3).curveTo(1.2,2.9,1.5,2.4).lineTo(1.5,-0.3).curveTo(1.2,-0.6,0.9,-0.7).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.4).closePath();
	this.shape_140.setTransform(25.3,-45.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.3).curveTo(-2.2,3,-2.3,2.4).curveTo(-2.5,2,-2.5,1.2).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.8).curveTo(-1.5,-1.3,-1.1,-1.5).curveTo(-0.6,-1.6,-0,-1.6).curveTo(0.5,-1.7,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.8,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.4).curveTo(-1.4,0.2,-1.4,1.2).lineTo(-1.3,2.1).curveTo(-1.3,2.5,-1.1,2.8).lineTo(-0.6,3.1).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3).curveTo(1.2,2.9,1.5,2.4).lineTo(1.5,-0.3).curveTo(1.2,-0.6,0.9,-0.7).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.4).closePath();
	this.shape_141.setTransform(16.4,-45.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_142.setTransform(10.4,-44.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.7,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,1,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.7,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_143.setTransform(4.5,-44.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,1.3).lineTo(-0.6,1.1).lineTo(-0.6,1.1).lineTo(-0.6,1).lineTo(-0.5,0.9).lineTo(-0.4,0.7).lineTo(-0.2,0.6).lineTo(-0.1,0.2).lineTo(0,-0.1).lineTo(0,-0.1).curveTo(-0.3,-0.1,-0.5,-0.3).curveTo(-0.7,-0.5,-0.7,-0.8).curveTo(-0.7,-0.9,-0.6,-0.9).curveTo(-0.6,-1,-0.6,-1).curveTo(-0.6,-1.1,-0.6,-1.1).curveTo(-0.5,-1.2,-0.5,-1.2).curveTo(-0.3,-1.4,0,-1.4).lineTo(0.3,-1.3).lineTo(0.5,-1.1).lineTo(0.6,-0.9).lineTo(0.7,-0.6).lineTo(0.6,-0.1).lineTo(0.4,0.5).lineTo(0,0.9).lineTo(-0.3,1.4).closePath();
	this.shape_144.setTransform(-2.1,-41.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_145.setTransform(-5,-44.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_146.setTransform(-10.2,-44.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.beginFill("#000033").beginStroke().moveTo(1.4,4.1).lineTo(1.4,0.5).curveTo(1.4,-0.1,1.1,-0.5).curveTo(0.8,-0.8,0.2,-0.9).curveTo(-0.2,-0.8,-0.6,-0.6).lineTo(-1.3,-0.1).lineTo(-1.3,4.1).lineTo(-2.3,4.1).lineTo(-2.3,-4).lineTo(-1.3,-4).lineTo(-1.3,-0.8).lineTo(-0.5,-1.4).curveTo(-0.1,-1.6,0.5,-1.6).curveTo(0.9,-1.6,1.3,-1.5).lineTo(1.9,-1).curveTo(2.1,-0.8,2.2,-0.3).lineTo(2.3,0.5).lineTo(2.3,4.1).closePath();
	this.shape_147.setTransform(-16.2,-45.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-0.9,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.5).lineTo(-0.6,-3.7).lineTo(-0.4,-3.8).lineTo(0,-3.8).lineTo(0,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0,-1.1).lineTo(0,2.2).curveTo(0.1,2.6,0.2,2.8).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.7,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.4,2.6).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.1,3.6).lineTo(0.5,3.8).curveTo(-0.2,3.8,-0.6,3.3).closePath();
	this.shape_148.setTransform(-21.1,-45);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0.1,2.8).lineTo(-0.7,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_149.setTransform(-26,-44.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.2,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_150.setTransform(-31.4,-43.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).lineTo(0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_151.setTransform(-40.2,-44.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.5,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.5,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.6,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.9,2.1,1.2,1.5).curveTo(1.7,1,1.7,-0).curveTo(1.7,-1,1.2,-1.6).curveTo(0.9,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_152.setTransform(-46.3,-44.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.beginFill("#000033").beginStroke().moveTo(-1.4,3.7).lineTo(-0.5,1.5).lineTo(-2.8,-3.7).lineTo(-1.9,-3.7).lineTo(-1.7,-3.7).lineTo(-1.6,-3.5).lineTo(-0.1,-0).lineTo(0.1,0.5).lineTo(0.2,-0).lineTo(1.6,-3.5).lineTo(1.8,-3.7).lineTo(2,-3.7).lineTo(2.8,-3.7).lineTo(-0.4,3.5).lineTo(-0.5,3.6).lineTo(-0.7,3.7).closePath();
	this.shape_153.setTransform(-52.2,-43.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.8,1.8).lineTo(-1.7,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.7,2.1).lineTo(-0.1,2.2).lineTo(0.5,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1,1.2).lineTo(0.9,0.9).lineTo(0.6,0.6).lineTo(0.1,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.8,-0.9,-1.9,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.1,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.9,-2.2).lineTo(1.7,-1.9).lineTo(1.5,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.7,-2.1).lineTo(0.1,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.9,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.4,-0.7).lineTo(0,-0.6).lineTo(0.6,-0.4).lineTo(1,-0.2).lineTo(1.6,0.1).lineTo(1.8,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.8,1.8).lineTo(1.5,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_154.setTransform(-60.2,-44.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.beginFill("#000033").beginStroke().moveTo(2.9,4).lineTo(2.6,3.9).lineTo(2.5,3.7).lineTo(1.8,1.8).lineTo(-1.8,1.8).lineTo(-2.5,3.7).lineTo(-2.6,3.8).lineTo(-2.9,4).lineTo(-3.7,4).lineTo(-0.5,-3.9).lineTo(0.5,-3.9).lineTo(3.7,4).closePath().moveTo(1.5,1).lineTo(0.2,-2.2).lineTo(0.1,-2.5).lineTo(-0,-2.9).lineTo(-0.2,-2.2).lineTo(-1.5,1).lineTo(1.5,1).closePath();
	this.shape_155.setTransform(-66.3,-45.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-54.2,144,108.4);


(lib.gfcStep2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.step2();
	this.instance.parent = this;
	this.instance.setTransform(-84,-156.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-156.5,168,313);


(lib.gfcStep1Title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,3.9).curveTo(-2,3.6,-2.5,3.1).curveTo(-3,2.5,-3.3,1.7).curveTo(-3.6,0.9,-3.6,-0.1).curveTo(-3.6,-1,-3.4,-1.7).curveTo(-3.1,-2.5,-2.6,-3).curveTo(-2.1,-3.5,-1.4,-3.8).curveTo(-0.7,-4.2,0.2,-4.2).curveTo(1,-4.2,1.5,-3.9).curveTo(2.2,-3.7,2.6,-3.2).curveTo(3,-2.7,3.3,-2.1).curveTo(3.6,-1.4,3.6,-0.5).curveTo(3.6,-0.4,3.6,-0.4).curveTo(3.6,-0.3,3.6,-0.2).curveTo(3.6,-0.2,3.5,-0.1).curveTo(3.5,-0.1,3.5,-0.1).lineTo(3.2,0).lineTo(-2.2,0).curveTo(-2.2,0.8,-1.9,1.4).curveTo(-1.8,1.9,-1.5,2.3).curveTo(-1.1,2.7,-0.6,2.9).curveTo(-0.2,3.1,0.4,3.1).curveTo(0.9,3.1,1.3,2.9).lineTo(2,2.7).lineTo(2.4,2.4).lineTo(2.8,2.3).curveTo(2.8,2.3,2.9,2.3).curveTo(2.9,2.3,2.9,2.3).curveTo(3,2.3,3,2.4).curveTo(3,2.4,3,2.4).lineTo(3.5,2.9).curveTo(3.2,3.3,2.8,3.5).lineTo(2.1,3.9).lineTo(1.1,4.1).lineTo(0.3,4.2).curveTo(-0.5,4.2,-1.3,3.9).closePath().moveTo(2.3,-0.9).curveTo(2.3,-1.4,2.1,-1.8).lineTo(1.8,-2.5).curveTo(1.5,-2.8,1.1,-2.9).curveTo(0.7,-3.1,0.2,-3.1).curveTo(-0.8,-3.1,-1.4,-2.5).curveTo(-2,-1.9,-2.2,-0.9).lineTo(2.3,-0.9).lineTo(2.3,-0.9).closePath();
	this.shape.setTransform(50.2,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000033").beginStroke().moveTo(1.9,4.1).lineTo(1.9,-1).curveTo(1.9,-2,1.5,-2.5).curveTo(1.1,-3,0.2,-3).curveTo(-0.4,-3,-1,-2.7).curveTo(-1.5,-2.4,-2,-1.8).lineTo(-2,4.1).lineTo(-3.4,4.1).lineTo(-3.4,-4).lineTo(-2.5,-4).curveTo(-2.5,-4,-2.4,-4).curveTo(-2.3,-3.9,-2.3,-3.9).curveTo(-2.2,-3.9,-2.2,-3.8).curveTo(-2.2,-3.8,-2.2,-3.7).lineTo(-2.1,-2.8).lineTo(-1.5,-3.3).lineTo(-0.9,-3.7).lineTo(-0.2,-4).lineTo(0.6,-4.1).curveTo(1.3,-4.1,1.8,-3.9).curveTo(2.3,-3.7,2.7,-3.3).curveTo(3,-2.9,3.2,-2.3).curveTo(3.4,-1.7,3.4,-1).lineTo(3.4,4.1).closePath();
	this.shape_1.setTransform(41.5,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000033").beginStroke().moveTo(-0.7,5.8).lineTo(-0.7,-2.3).lineTo(0.7,-2.3).lineTo(0.7,5.8).closePath().moveTo(-0.4,-3.9).lineTo(-0.7,-4.1).lineTo(-0.9,-4.4).lineTo(-1,-4.8).lineTo(-0.9,-5.2).lineTo(-0.7,-5.5).lineTo(-0.4,-5.8).lineTo(-0,-5.8).lineTo(0.4,-5.8).lineTo(0.7,-5.5).lineTo(0.9,-5.2).lineTo(1,-4.8).lineTo(0.9,-4.4).lineTo(0.7,-4.1).lineTo(0.4,-3.9).lineTo(-0,-3.8).closePath();
	this.shape_2.setTransform(35.1,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000033").beginStroke().moveTo(-0.7,5.9).lineTo(-0.7,-5.9).lineTo(0.7,-5.9).lineTo(0.7,5.9).closePath();
	this.shape_3.setTransform(31.4,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,4.9).curveTo(-1.3,4.4,-1.3,3.3).lineTo(-1.3,-1.6).lineTo(-2.3,-1.6).lineTo(-2.5,-1.7).lineTo(-2.6,-2).lineTo(-2.6,-2.5).lineTo(-1.3,-2.6).lineTo(-1,-5.1).lineTo(-0.9,-5.3).lineTo(-0.6,-5.5).lineTo(0.1,-5.5).lineTo(0.1,-2.6).lineTo(2.4,-2.6).lineTo(2.4,-1.6).lineTo(0.1,-1.6).lineTo(0.1,3.2).curveTo(0.1,3.7,0.3,4).curveTo(0.6,4.3,1,4.2).lineTo(1.3,4.2).lineTo(1.6,4).lineTo(1.8,4).lineTo(2,3.9).lineTo(2.2,4).lineTo(2.6,4.7).curveTo(2.2,5,1.7,5.2).curveTo(1.2,5.4,0.6,5.5).curveTo(-0.3,5.5,-0.8,4.9).closePath();
	this.shape_4.setTransform(26.7,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#000033").beginStroke().moveTo(-1.8,3.9).curveTo(-2.3,3.7,-2.7,3.3).curveTo(-3,2.9,-3.2,2.3).curveTo(-3.4,1.7,-3.4,1).lineTo(-3.4,-4.1).lineTo(-2,-4.1).lineTo(-2,1).curveTo(-2,2,-1.5,2.5).curveTo(-1.1,3,-0.2,3).curveTo(0.4,3,0.9,2.7).curveTo(1.5,2.4,1.9,1.8).lineTo(1.9,-4.1).lineTo(3.4,-4.1).lineTo(3.4,4).lineTo(2.5,4).curveTo(2.4,4,2.4,4).curveTo(2.3,3.9,2.3,3.9).curveTo(2.2,3.9,2.2,3.8).curveTo(2.2,3.8,2.1,3.7).lineTo(2,2.8).curveTo(1.5,3.4,0.8,3.7).curveTo(0.2,4.1,-0.7,4.1).curveTo(-1.3,4.1,-1.8,3.9).closePath();
	this.shape_5.setTransform(19.3,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,3.9).curveTo(-2.3,3.6,-2.8,3.1).curveTo(-3.3,2.5,-3.6,1.7).curveTo(-3.9,1,-3.9,0).curveTo(-3.9,-0.9,-3.6,-1.7).curveTo(-3.3,-2.5,-2.8,-3).curveTo(-2.3,-3.6,-1.6,-3.9).curveTo(-0.9,-4.2,0,-4.2).curveTo(0.9,-4.2,1.6,-3.9).curveTo(2.3,-3.6,2.8,-3).curveTo(3.3,-2.5,3.6,-1.7).curveTo(3.9,-0.9,3.9,0).curveTo(3.9,1,3.6,1.7).curveTo(3.3,2.5,2.8,3.1).curveTo(2.3,3.6,1.6,3.9).curveTo(0.9,4.2,0,4.2).curveTo(-0.9,4.2,-1.6,3.9).closePath().moveTo(-1,-2.8).curveTo(-1.5,-2.6,-1.8,-2.2).curveTo(-2.1,-1.8,-2.2,-1.3).curveTo(-2.4,-0.7,-2.4,0).curveTo(-2.4,1.5,-1.8,2.3).curveTo(-1.2,3.1,0,3.1).curveTo(1.2,3.1,1.8,2.3).curveTo(2.4,1.5,2.4,0).curveTo(2.4,-1.4,1.8,-2.2).curveTo(1.2,-3,0,-3).curveTo(-0.6,-3,-1,-2.8).closePath();
	this.shape_6.setTransform(10.3,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#000033").beginStroke().moveTo(-1.8,5.7).curveTo(-2.4,5.5,-2.8,4.9).curveTo(-3.2,4.4,-3.4,3.6).curveTo(-3.6,2.8,-3.6,1.8).curveTo(-3.6,1,-3.3,0.2).curveTo(-3.1,-0.6,-2.7,-1.2).curveTo(-2.2,-1.8,-1.6,-2.1).curveTo(-0.9,-2.4,-0.1,-2.4).curveTo(0.7,-2.4,1.2,-2.2).curveTo(1.7,-1.9,2.1,-1.4).lineTo(2.1,-5.9).lineTo(3.6,-5.9).lineTo(3.6,5.9).lineTo(2.7,5.9).curveTo(2.4,5.9,2.3,5.6).lineTo(2.2,4.5).curveTo(1.7,5.2,1,5.6).curveTo(0.4,5.9,-0.5,5.9).curveTo(-1.2,5.9,-1.8,5.7).closePath().moveTo(-1.5,-0.5).curveTo(-2.1,0.3,-2.1,1.8).curveTo(-2.1,2.6,-2,3.2).curveTo(-1.8,3.8,-1.6,4.1).curveTo(-1.3,4.5,-0.9,4.7).curveTo(-0.5,4.8,-0.1,4.8).curveTo(0.6,4.8,1.2,4.5).curveTo(1.7,4.2,2.1,3.6).lineTo(2.1,-0.4).curveTo(1.7,-0.8,1.3,-1.1).curveTo(0.8,-1.3,0.2,-1.3).curveTo(-0.9,-1.3,-1.5,-0.5).closePath();
	this.shape_7.setTransform(-2.9,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#000033").beginStroke().moveTo(1.9,4.1).lineTo(1.9,-1).curveTo(1.9,-2,1.5,-2.5).curveTo(1.1,-3,0.2,-3).curveTo(-0.4,-3,-1,-2.7).curveTo(-1.5,-2.4,-2,-1.8).lineTo(-2,4.1).lineTo(-3.4,4.1).lineTo(-3.4,-4).lineTo(-2.5,-4).curveTo(-2.5,-4,-2.4,-4).curveTo(-2.3,-3.9,-2.3,-3.9).curveTo(-2.2,-3.9,-2.2,-3.8).curveTo(-2.2,-3.8,-2.2,-3.7).lineTo(-2.1,-2.8).lineTo(-1.5,-3.3).lineTo(-0.9,-3.7).lineTo(-0.2,-4).lineTo(0.6,-4.1).curveTo(1.3,-4.1,1.8,-3.9).curveTo(2.3,-3.7,2.7,-3.3).curveTo(3,-2.9,3.2,-2.3).curveTo(3.4,-1.7,3.4,-1).lineTo(3.4,4.1).closePath();
	this.shape_8.setTransform(-11.6,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#000033").beginStroke().moveTo(-1.8,4.1).lineTo(-2.5,3.6).curveTo(-2.8,3.4,-3,3).curveTo(-3.2,2.6,-3.2,2.1).curveTo(-3.2,1.5,-2.9,1.1).curveTo(-2.6,0.6,-2.1,0.3).curveTo(-1.4,-0.1,-0.5,-0.3).curveTo(0.5,-0.5,1.8,-0.5).lineTo(1.8,-1.2).curveTo(1.8,-2.1,1.4,-2.5).curveTo(1,-3.1,0.2,-3.1).curveTo(-0.3,-3,-0.6,-2.9).lineTo(-1.3,-2.6).lineTo(-1.8,-2.3).lineTo(-2.1,-2.2).lineTo(-2.3,-2.2).lineTo(-2.5,-2.4).lineTo(-2.8,-2.9).curveTo(-2.1,-3.6,-1.3,-3.9).curveTo(-0.6,-4.2,0.4,-4.2).curveTo(1,-4.2,1.6,-4).curveTo(2.1,-3.8,2.5,-3.3).curveTo(2.9,-2.9,3.1,-2.4).curveTo(3.2,-1.8,3.2,-1.2).lineTo(3.2,4.1).lineTo(2.6,4.1).lineTo(2.3,4).lineTo(2.1,3.7).lineTo(2,3).lineTo(1.3,3.4).lineTo(0.6,3.9).lineTo(-0.1,4.1).lineTo(-0.9,4.2).lineTo(-1.8,4.1).closePath().moveTo(0.2,0.6).lineTo(-1,0.9).curveTo(-1.4,1.1,-1.6,1.4).curveTo(-1.8,1.6,-1.8,2).lineTo(-1.7,2.5).lineTo(-1.4,2.9).lineTo(-1,3.1).lineTo(-0.4,3.2).lineTo(0.2,3.1).lineTo(0.8,2.9).lineTo(1.4,2.5).lineTo(1.8,2.1).lineTo(1.8,0.4).lineTo(0.2,0.6).closePath();
	this.shape_9.setTransform(-20.3,2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#000033").beginStroke().moveTo(1.9,4.1).lineTo(1.9,-1).curveTo(1.9,-2,1.5,-2.5).curveTo(1.1,-3,0.2,-3).curveTo(-0.4,-3,-1,-2.7).curveTo(-1.5,-2.4,-2,-1.8).lineTo(-2,4.1).lineTo(-3.4,4.1).lineTo(-3.4,-4).lineTo(-2.5,-4).curveTo(-2.5,-4,-2.4,-4).curveTo(-2.3,-3.9,-2.3,-3.9).curveTo(-2.2,-3.9,-2.2,-3.8).curveTo(-2.2,-3.8,-2.2,-3.7).lineTo(-2.1,-2.8).lineTo(-1.5,-3.3).lineTo(-0.9,-3.7).lineTo(-0.2,-4).lineTo(0.6,-4.1).curveTo(1.3,-4.1,1.8,-3.9).curveTo(2.3,-3.7,2.7,-3.3).curveTo(3,-2.9,3.2,-2.3).curveTo(3.4,-1.7,3.4,-1).lineTo(3.4,4.1).closePath();
	this.shape_10.setTransform(-32.5,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000033").beginStroke().moveTo(-1.8,4.1).lineTo(-2.5,3.6).curveTo(-2.8,3.4,-3,3).curveTo(-3.2,2.6,-3.2,2.1).curveTo(-3.2,1.5,-2.9,1.1).curveTo(-2.6,0.6,-2,0.3).curveTo(-1.5,-0.1,-0.5,-0.3).curveTo(0.5,-0.5,1.8,-0.5).lineTo(1.8,-1.2).curveTo(1.8,-2.1,1.4,-2.5).curveTo(1,-3.1,0.2,-3.1).curveTo(-0.3,-3,-0.7,-2.9).lineTo(-1.3,-2.6).lineTo(-1.8,-2.3).lineTo(-2.1,-2.2).lineTo(-2.3,-2.2).lineTo(-2.5,-2.4).lineTo(-2.8,-2.9).curveTo(-2.1,-3.6,-1.3,-3.9).curveTo(-0.6,-4.2,0.4,-4.2).curveTo(1.1,-4.2,1.6,-4).curveTo(2.1,-3.8,2.5,-3.3).curveTo(2.8,-2.9,3.1,-2.4).curveTo(3.2,-1.8,3.2,-1.2).lineTo(3.2,4.1).lineTo(2.6,4.1).lineTo(2.3,4).lineTo(2.1,3.7).lineTo(1.9,3).lineTo(1.3,3.4).lineTo(0.7,3.9).lineTo(-0.1,4.1).lineTo(-0.9,4.2).lineTo(-1.8,4.1).closePath().moveTo(0.1,0.6).lineTo(-1,0.9).curveTo(-1.4,1.1,-1.6,1.4).curveTo(-1.8,1.6,-1.8,2).lineTo(-1.7,2.5).lineTo(-1.4,2.9).lineTo(-1,3.1).lineTo(-0.4,3.2).lineTo(0.2,3.1).lineTo(0.8,2.9).lineTo(1.4,2.5).lineTo(1.8,2.1).lineTo(1.8,0.4).lineTo(0.1,0.6).closePath();
	this.shape_11.setTransform(-41.2,2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#000033").beginStroke().moveTo(-0.7,5.9).lineTo(-0.7,-5.9).lineTo(0.7,-5.9).lineTo(0.7,5.9).closePath();
	this.shape_12.setTransform(-46.8,0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#000033").beginStroke().moveTo(-3.8,5.7).lineTo(-3.8,-5.7).lineTo(-0.4,-5.7).curveTo(0.7,-5.7,1.5,-5.5).curveTo(2.3,-5.2,2.8,-4.8).curveTo(3.3,-4.3,3.6,-3.6).curveTo(3.8,-3,3.8,-2.2).curveTo(3.8,-1.4,3.6,-0.7).curveTo(3.3,-0.1,2.7,0.4).curveTo(2.2,0.9,1.4,1.2).curveTo(0.6,1.4,-0.4,1.4).lineTo(-2.3,1.4).lineTo(-2.3,5.7).closePath().moveTo(-2.3,0.2).lineTo(-0.4,0.2).curveTo(0.2,0.2,0.7,0).curveTo(1.3,-0.1,1.6,-0.5).curveTo(2,-0.8,2.1,-1.2).curveTo(2.3,-1.7,2.3,-2.2).curveTo(2.3,-3.3,1.6,-3.9).curveTo(1,-4.5,-0.4,-4.5).lineTo(-2.3,-4.5).closePath();
	this.shape_13.setTransform(-53,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-11.6,116.8,23.2);


(lib.gfcStep1Content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000033").beginStroke().moveTo(-0.3,0.6).lineTo(-0.5,0.5).lineTo(-0.7,0.2).lineTo(-0.7,-0).lineTo(-0.7,-0.3).lineTo(-0.5,-0.5).lineTo(-0.3,-0.7).lineTo(0,-0.7).lineTo(0.2,-0.7).lineTo(0.5,-0.5).lineTo(0.7,-0.3).lineTo(0.7,-0).lineTo(0.7,0.2).lineTo(0.5,0.5).lineTo(0.2,0.6).lineTo(0,0.7).closePath();
	this.shape.setTransform(-26,49.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.8,1.8).lineTo(-1.7,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.7,2.1).lineTo(-0,2.2).lineTo(0.4,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1,1.2).lineTo(0.9,0.9).lineTo(0.6,0.6).lineTo(0.1,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.9,-0.9,-1.8,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.1,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.9,-2.2).lineTo(1.7,-1.9).lineTo(1.5,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.7,-2.1).lineTo(0.1,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.9,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.5,-0.7).lineTo(-0,-0.6).lineTo(0.6,-0.4).lineTo(1,-0.2).lineTo(1.6,0.1).lineTo(1.8,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.8,1.8).lineTo(1.5,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_1.setTransform(-29.7,47.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.2,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_2.setTransform(-34.9,48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_3.setTransform(-40.8,47);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.4,-2.8).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.3,-3.9).lineTo(0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3).lineTo(0.5,-2.8).lineTo(0.3,-2.7).lineTo(0,-2.6).closePath();
	this.shape_4.setTransform(-45.2,45.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.4).curveTo(-2.2,3,-2.3,2.5).curveTo(-2.5,1.9,-2.5,1.2).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.5,-1.8,-0.9).curveTo(-1.5,-1.3,-1.1,-1.5).curveTo(-0.6,-1.7,-0,-1.7).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,4).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.9,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.3).curveTo(-1.4,0.2,-1.4,1.2).lineTo(-1.3,2.1).curveTo(-1.3,2.5,-1.1,2.8).curveTo(-0.9,3,-0.6,3.1).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3).curveTo(1.2,2.8,1.5,2.5).lineTo(1.5,-0.2).curveTo(1.2,-0.6,0.9,-0.8).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.3).closePath();
	this.shape_5.setTransform(-49.7,45.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.3,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0.1,2.8).lineTo(-0.6,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_6.setTransform(-55.5,47.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_7.setTransform(-61,47.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#000033").beginStroke().moveTo(1.4,4.1).lineTo(1.4,0.5).curveTo(1.4,-0.1,1.1,-0.5).curveTo(0.8,-0.9,0.2,-0.9).curveTo(-0.2,-0.9,-0.6,-0.6).lineTo(-1.3,-0.1).lineTo(-1.3,4.1).lineTo(-2.3,4.1).lineTo(-2.3,-4).lineTo(-1.3,-4).lineTo(-1.3,-0.8).lineTo(-0.5,-1.4).curveTo(-0.1,-1.6,0.5,-1.6).curveTo(0.9,-1.6,1.3,-1.4).lineTo(1.9,-1.1).curveTo(2.1,-0.8,2.2,-0.3).lineTo(2.3,0.5).lineTo(2.3,4.1).closePath();
	this.shape_8.setTransform(-66.9,45.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.2,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_9.setTransform(25.9,32.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_10.setTransform(19.9,31.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.4,-2.8).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.2,-3.9).lineTo(0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3).lineTo(0.5,-2.8).lineTo(0.3,-2.7).lineTo(0,-2.7).closePath();
	this.shape_11.setTransform(15.6,30.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.8,1.8).lineTo(-1.7,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.7,2.1).lineTo(-0.1,2.2).lineTo(0.5,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1,1.2).lineTo(0.9,0.9).lineTo(0.6,0.6).lineTo(0.1,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.8,-0.9,-1.9,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.1,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.9,-2.2).lineTo(1.7,-1.9).lineTo(1.5,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.7,-2.1).lineTo(0.1,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.9,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.4,-0.7).lineTo(0,-0.6).lineTo(0.6,-0.4).lineTo(1,-0.2).lineTo(1.6,0.1).lineTo(1.8,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.8,1.8).lineTo(1.5,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_12.setTransform(11.9,31.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.7,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).lineTo(0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_13.setTransform(6.4,31.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-0.9,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.7).lineTo(0.1,-3.7).lineTo(0.1,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.2).curveTo(0.1,2.6,0.2,2.8).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.6,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.3,2.7).lineTo(1.5,2.8).lineTo(1.8,3.3).lineTo(1.2,3.6).lineTo(0.4,3.7).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_14.setTransform(-1.2,31);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.4,-2.8).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.3,-3.9).lineTo(0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3).lineTo(0.5,-2.8).lineTo(0.3,-2.7).lineTo(0,-2.7).closePath();
	this.shape_15.setTransform(-4.6,30.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_16.setTransform(-11.6,31.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#000033").beginStroke().moveTo(-2.2,2.8).lineTo(-2.2,2.4).lineTo(-2.1,2.2).lineTo(-2,2).lineTo(1.1,-2).lineTo(-2,-2).lineTo(-2,-2.8).lineTo(2.1,-2.8).lineTo(2.1,-2.4).lineTo(2.1,-2.2).lineTo(2.1,-2).lineTo(-1,2).lineTo(2.1,2).lineTo(2.1,2.8).closePath();
	this.shape_17.setTransform(-17,31.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.5,-2.8).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.2,-3.9).lineTo(-0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3).lineTo(0.5,-2.8).lineTo(0.3,-2.7).lineTo(-0,-2.7).closePath();
	this.shape_18.setTransform(-20.7,30.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_19.setTransform(-25.1,31.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.3,-1.4,1,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0.1,2.8).lineTo(-0.6,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_20.setTransform(-31,31.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.3,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_21.setTransform(-36.4,32.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_22.setTransform(-41,31.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.5,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.5,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.7,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.9,2.1,1.2,1.5).curveTo(1.7,1,1.7,-0).curveTo(1.7,-1,1.2,-1.6).curveTo(0.9,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_23.setTransform(-46.4,31.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.4).curveTo(-2.2,3,-2.3,2.5).curveTo(-2.5,1.9,-2.5,1.2).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.5,-1.8,-0.9).curveTo(-1.5,-1.2,-1.1,-1.5).curveTo(-0.6,-1.7,-0,-1.7).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,4).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.9,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.3).curveTo(-1.4,0.2,-1.4,1.2).lineTo(-1.3,2.1).curveTo(-1.3,2.5,-1.1,2.8).lineTo(-0.6,3.2).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3).curveTo(1.2,2.8,1.5,2.5).lineTo(1.5,-0.2).curveTo(1.2,-0.6,0.9,-0.8).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.3).closePath();
	this.shape_24.setTransform(-55.5,30.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.7,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_25.setTransform(-61.5,31.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0.1,2.8).lineTo(-0.7,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_26.setTransform(-67.4,31.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_27.setTransform(51.5,16.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.4,1.2).curveTo(-2.6,0.6,-2.7,-0).curveTo(-2.6,-0.7,-2.4,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,2,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.6,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,2,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.5,-0.9).lineTo(-1.6,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_28.setTransform(45.4,16.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.5,-2.9).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.3,-3.9).lineTo(0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(0,-2.7).closePath();
	this.shape_29.setTransform(41,15.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.7).lineTo(0.1,-3.7).lineTo(0.1,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.6,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.3,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.2,3.6).lineTo(0.5,3.7).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_30.setTransform(37.8,15.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.3,-1.4,1,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0.1,2.8).lineTo(-0.6,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_31.setTransform(32.9,16.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#000033").beginStroke().moveTo(2.8,2.8).lineTo(2.8,-0.7).curveTo(2.8,-1.4,2.5,-1.7).curveTo(2.3,-2.1,1.7,-2.1).lineTo(1.2,-2).lineTo(0.9,-1.7).lineTo(0.6,-1.3).lineTo(0.5,-0.7).lineTo(0.5,2.8).lineTo(-0.5,2.8).lineTo(-0.5,-0.7).curveTo(-0.5,-1.4,-0.7,-1.7).curveTo(-1.1,-2.1,-1.6,-2.1).curveTo(-1.9,-2.1,-2.2,-1.9).curveTo(-2.5,-1.7,-2.8,-1.3).lineTo(-2.8,2.8).lineTo(-3.8,2.8).lineTo(-3.8,-2.7).lineTo(-3.2,-2.7).curveTo(-3.1,-2.7,-3.1,-2.7).curveTo(-3.1,-2.7,-3,-2.7).curveTo(-3,-2.6,-3,-2.6).curveTo(-3,-2.6,-3,-2.5).lineTo(-2.8,-2).curveTo(-2.5,-2.4,-2.2,-2.6).curveTo(-1.8,-2.8,-1.3,-2.8).curveTo(-0.7,-2.8,-0.4,-2.5).curveTo(0,-2.2,0.2,-1.7).lineTo(0.4,-2.2).lineTo(0.9,-2.6).lineTo(1.4,-2.8).lineTo(1.9,-2.8).curveTo(2.4,-2.8,2.7,-2.7).curveTo(3,-2.6,3.3,-2.3).curveTo(3.6,-2,3.7,-1.6).curveTo(3.8,-1.2,3.8,-0.7).lineTo(3.8,2.8).closePath();
	this.shape_32.setTransform(25.9,16.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_33.setTransform(19.6,16.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.4,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.4,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.6,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.5,-0.9).lineTo(-1.7,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_34.setTransform(14.2,16.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,4).lineTo(-0.9,-0.8).lineTo(-1.5,-0.8).lineTo(-1.7,-0.9).lineTo(-1.8,-1.1).lineTo(-1.8,-1.4).lineTo(-0.9,-1.4).lineTo(-0.9,-2).lineTo(-0.8,-2.9).lineTo(-0.3,-3.5).curveTo(-0.1,-3.7,0.3,-3.8).curveTo(0.6,-4,1,-4).lineTo(1.7,-3.9).lineTo(1.7,-3.4).curveTo(1.7,-3.4,1.7,-3.3).curveTo(1.7,-3.3,1.7,-3.3).curveTo(1.6,-3.3,1.6,-3.3).curveTo(1.6,-3.2,1.6,-3.2).lineTo(1.2,-3.2).lineTo(0.7,-3.2).lineTo(0.4,-2.9).lineTo(0.1,-2.6).lineTo(0.1,-1.9).lineTo(0.1,-1.4).lineTo(1.7,-1.4).lineTo(1.7,-0.8).lineTo(0.1,-0.8).lineTo(0.1,4).closePath();
	this.shape_35.setTransform(9.3,15.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_36.setTransform(4.2,16.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.5,-2.9).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.2,-3.9).lineTo(-0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(-0,-2.7).closePath();
	this.shape_37.setTransform(-0.1,15.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.3,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_38.setTransform(-7,17.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_39.setTransform(-13,16.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.6).lineTo(0.5,-1.6).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.5,-2.9).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.3,-3.9).lineTo(-0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(-0,-2.7).closePath();
	this.shape_40.setTransform(-17.3,15.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_41.setTransform(-20.3,16.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_42.setTransform(-25.7,16.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.4).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.1).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.7).lineTo(0.1,-3.7).lineTo(0.1,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,2.9,0.6,2.9).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.3,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.2,3.6).lineTo(0.4,3.7).curveTo(-0.2,3.7,-0.6,3.4).closePath();
	this.shape_43.setTransform(-30.6,15.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#000033").beginStroke().moveTo(-2.5,3.8).lineTo(-2.5,-3.7).lineTo(-1.9,-3.7).curveTo(-1.8,-3.7,-1.8,-3.7).curveTo(-1.7,-3.7,-1.7,-3.6).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.6,-3.5,-1.6,-3.5).lineTo(-1.5,-2.8).curveTo(-1.2,-3.3,-0.7,-3.5).curveTo(-0.2,-3.8,0.4,-3.8).curveTo(0.8,-3.8,1.2,-3.6).curveTo(1.6,-3.4,1.9,-3.1).curveTo(2.2,-2.7,2.3,-2.2).curveTo(2.5,-1.6,2.5,-0.9).curveTo(2.5,-0.3,2.3,0.2).curveTo(2.1,0.7,1.8,1.1).curveTo(1.5,1.5,1.1,1.7).curveTo(0.6,2,0.1,2).curveTo(-0.5,2,-0.8,1.8).curveTo(-1.2,1.6,-1.5,1.3).lineTo(-1.5,3.8).closePath().moveTo(-0.8,-2.8).curveTo(-1.2,-2.6,-1.5,-2.2).lineTo(-1.5,0.5).curveTo(-1.2,0.9,-0.9,1).curveTo(-0.6,1.2,-0.2,1.2).curveTo(0.6,1.2,1,0.6).curveTo(1.5,0.1,1.5,-0.9).lineTo(1.4,-1.9).curveTo(1.3,-2.3,1.1,-2.5).curveTo(0.9,-2.8,0.6,-2.9).curveTo(0.4,-3,0,-3).curveTo(-0.4,-3,-0.8,-2.8).closePath();
	this.shape_44.setTransform(-35.6,17.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.2,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0.1,2.8).lineTo(-0.7,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_45.setTransform(-41.7,16.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,2.7).curveTo(-1.2,2.5,-1.6,2.1).lineTo(-2.1,1.2).curveTo(-2.3,0.7,-2.3,-0).curveTo(-2.3,-0.6,-2.1,-1.2).curveTo(-1.9,-1.7,-1.6,-2.1).curveTo(-1.3,-2.5,-0.8,-2.7).curveTo(-0.3,-2.9,0.4,-2.9).curveTo(0.9,-2.9,1.4,-2.7).curveTo(1.8,-2.5,2.2,-2.2).lineTo(1.9,-1.8).lineTo(1.8,-1.7).lineTo(1.7,-1.7).lineTo(1.5,-1.7).lineTo(1.3,-1.9).lineTo(0.9,-2.1).lineTo(0.4,-2.1).curveTo(0,-2.1,-0.3,-2).lineTo(-0.8,-1.6).lineTo(-1.2,-0.9).lineTo(-1.3,-0).curveTo(-1.3,0.5,-1.1,0.9).curveTo(-1,1.3,-0.8,1.5).curveTo(-0.6,1.8,-0.3,2).lineTo(0.4,2.1).lineTo(1,2).lineTo(1.3,1.8).lineTo(1.6,1.6).lineTo(1.8,1.5).lineTo(2,1.6).lineTo(2.3,2).lineTo(1.8,2.4).lineTo(1.3,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.3,2.9,-0.8,2.7).closePath();
	this.shape_46.setTransform(-46.8,16.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.4).curveTo(-2.2,3,-2.3,2.5).curveTo(-2.5,2,-2.5,1.3).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.9).curveTo(-1.5,-1.2,-1.1,-1.4).curveTo(-0.6,-1.7,-0,-1.7).curveTo(0.5,-1.7,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.9,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.5,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.3).curveTo(-1.4,0.2,-1.4,1.3).lineTo(-1.3,2.2).curveTo(-1.3,2.6,-1.1,2.8).lineTo(-0.6,3.2).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3.1).curveTo(1.2,2.8,1.5,2.5).lineTo(1.5,-0.2).curveTo(1.2,-0.6,0.9,-0.8).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.3).closePath();
	this.shape_47.setTransform(-55.5,15.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_48.setTransform(-61.5,16.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0.1,2.8).lineTo(-0.7,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_49.setTransform(-67.4,16.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,1.2).lineTo(-0.6,1.1).lineTo(-0.6,1.1).lineTo(-0.6,1).lineTo(-0.6,1).lineTo(-0.4,0.8).lineTo(-0.2,0.5).lineTo(-0,0.2).lineTo(0.1,-0.1).lineTo(-0,-0.1).curveTo(-0.3,-0.1,-0.5,-0.3).curveTo(-0.6,-0.5,-0.7,-0.8).curveTo(-0.6,-0.9,-0.6,-0.9).curveTo(-0.6,-1,-0.6,-1).curveTo(-0.6,-1.1,-0.6,-1.1).curveTo(-0.5,-1.2,-0.5,-1.2).curveTo(-0.3,-1.4,-0,-1.4).lineTo(0.3,-1.4).lineTo(0.5,-1.1).lineTo(0.6,-0.9).lineTo(0.6,-0.6).lineTo(0.6,-0.1).lineTo(0.4,0.4).lineTo(0.1,1).lineTo(-0.4,1.4).closePath();
	this.shape_50.setTransform(44.3,4.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#000033").beginStroke().moveTo(1.4,4).lineTo(1.4,0.5).curveTo(1.4,-0.2,1.1,-0.5).curveTo(0.8,-0.9,0.2,-0.8).curveTo(-0.2,-0.9,-0.6,-0.6).lineTo(-1.3,-0).lineTo(-1.3,4).lineTo(-2.3,4).lineTo(-2.3,-4.1).lineTo(-1.3,-4.1).lineTo(-1.3,-0.8).lineTo(-0.5,-1.4).curveTo(-0.1,-1.6,0.5,-1.6).curveTo(0.9,-1.6,1.3,-1.5).lineTo(1.9,-1).curveTo(2.1,-0.7,2.2,-0.4).lineTo(2.3,0.5).lineTo(2.3,4).closePath();
	this.shape_51.setTransform(40,0.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,2.7).curveTo(-1.2,2.5,-1.6,2.1).lineTo(-2.1,1.2).curveTo(-2.3,0.7,-2.3,-0).curveTo(-2.3,-0.6,-2.1,-1.2).curveTo(-1.9,-1.7,-1.6,-2.1).curveTo(-1.3,-2.5,-0.8,-2.7).curveTo(-0.3,-2.9,0.4,-2.9).curveTo(0.9,-2.9,1.4,-2.7).curveTo(1.8,-2.5,2.2,-2.2).lineTo(1.9,-1.8).lineTo(1.8,-1.7).lineTo(1.7,-1.7).lineTo(1.5,-1.7).lineTo(1.3,-1.9).lineTo(0.9,-2.1).lineTo(0.4,-2.1).curveTo(0,-2.1,-0.3,-2).lineTo(-0.8,-1.6).lineTo(-1.2,-0.9).lineTo(-1.3,-0).curveTo(-1.3,0.5,-1.1,0.9).curveTo(-1,1.3,-0.8,1.5).curveTo(-0.6,1.8,-0.3,2).lineTo(0.4,2.1).lineTo(1,2).lineTo(1.3,1.8).lineTo(1.6,1.6).lineTo(1.8,1.5).lineTo(2,1.6).lineTo(2.3,2).lineTo(1.8,2.4).lineTo(1.3,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.3,2.9,-0.8,2.7).closePath();
	this.shape_52.setTransform(34.4,1.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.3,-1.4,1,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0.1,2.8).lineTo(-0.6,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_53.setTransform(28.8,1.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.5,1.2).curveTo(-2.6,0.6,-2.6,-0).curveTo(-2.6,-0.7,-2.5,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,2,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.7,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,2,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0.1,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.5,-0.9).lineTo(-1.6,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0.1,2.1).curveTo(0.8,2.1,1.2,1.5).curveTo(1.6,1,1.7,-0).curveTo(1.6,-1,1.2,-1.6).curveTo(0.8,-2.1,0.1,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_54.setTransform(23.2,1.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_55.setTransform(18.4,1.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#000033").beginStroke().moveTo(-2.5,3.8).lineTo(-2.5,-3.7).lineTo(-1.9,-3.7).curveTo(-1.8,-3.7,-1.8,-3.7).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.6,-3.5,-1.6,-3.5).lineTo(-1.5,-2.8).curveTo(-1.2,-3.3,-0.7,-3.5).curveTo(-0.2,-3.8,0.4,-3.8).curveTo(0.8,-3.8,1.2,-3.6).curveTo(1.6,-3.4,1.9,-3.1).curveTo(2.2,-2.7,2.3,-2.2).curveTo(2.5,-1.6,2.5,-0.9).curveTo(2.5,-0.3,2.3,0.2).curveTo(2.1,0.7,1.8,1.1).curveTo(1.5,1.5,1.1,1.7).curveTo(0.6,2,0.1,2).curveTo(-0.5,2,-0.8,1.8).curveTo(-1.2,1.6,-1.5,1.3).lineTo(-1.5,3.8).closePath().moveTo(-0.8,-2.8).curveTo(-1.2,-2.6,-1.5,-2.2).lineTo(-1.5,0.5).curveTo(-1.2,0.9,-0.9,1).curveTo(-0.6,1.2,-0.2,1.2).curveTo(0.6,1.2,1,0.6).curveTo(1.5,0.1,1.5,-0.9).lineTo(1.4,-1.9).curveTo(1.3,-2.3,1.1,-2.5).curveTo(0.9,-2.8,0.6,-2.9).curveTo(0.4,-3,0,-3).curveTo(-0.4,-3,-0.8,-2.8).closePath();
	this.shape_56.setTransform(13.1,2.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#000033").beginStroke().moveTo(-2.5,3.8).lineTo(-2.5,-3.7).lineTo(-1.9,-3.7).curveTo(-1.8,-3.7,-1.8,-3.7).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.6,-3.5,-1.6,-3.5).lineTo(-1.5,-2.8).curveTo(-1.2,-3.3,-0.7,-3.5).curveTo(-0.2,-3.8,0.4,-3.8).curveTo(0.8,-3.8,1.2,-3.6).curveTo(1.6,-3.4,1.9,-3.1).curveTo(2.2,-2.7,2.3,-2.2).curveTo(2.5,-1.6,2.5,-0.9).curveTo(2.5,-0.3,2.3,0.2).curveTo(2.1,0.7,1.8,1.1).curveTo(1.5,1.5,1.1,1.7).curveTo(0.6,2,0.1,2).curveTo(-0.5,2,-0.8,1.8).curveTo(-1.2,1.6,-1.5,1.3).lineTo(-1.5,3.8).closePath().moveTo(-0.8,-2.8).curveTo(-1.2,-2.6,-1.5,-2.2).lineTo(-1.5,0.5).curveTo(-1.2,0.9,-0.9,1).curveTo(-0.6,1.2,-0.2,1.2).curveTo(0.6,1.2,1,0.6).curveTo(1.5,0.1,1.5,-0.9).lineTo(1.4,-1.9).curveTo(1.3,-2.3,1.1,-2.5).curveTo(0.9,-2.8,0.6,-2.9).curveTo(0.4,-3,0,-3).curveTo(-0.4,-3,-0.8,-2.8).closePath();
	this.shape_57.setTransform(7,2.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.7,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_58.setTransform(0.9,1.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_59.setTransform(-6.2,1.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_60.setTransform(-11.6,1.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.5,1.2).curveTo(-2.6,0.6,-2.6,-0).curveTo(-2.6,-0.7,-2.5,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.7,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0.1,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0.1,2.1).curveTo(0.8,2.1,1.2,1.5).curveTo(1.7,1,1.7,-0).curveTo(1.7,-1,1.2,-1.6).curveTo(0.8,-2.1,0.1,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_61.setTransform(-17.7,1.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#000033").beginStroke().moveTo(-1.4,3.7).lineTo(-0.4,1.5).lineTo(-2.8,-3.7).lineTo(-1.9,-3.7).lineTo(-1.7,-3.7).lineTo(-1.6,-3.5).lineTo(-0.1,-0).lineTo(0,0.5).lineTo(0.2,-0).lineTo(1.6,-3.5).lineTo(1.8,-3.7).lineTo(1.9,-3.7).lineTo(2.7,-3.7).lineTo(-0.3,3.5).lineTo(-0.5,3.6).lineTo(-0.8,3.7).closePath();
	this.shape_62.setTransform(-23.6,2.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.2,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_63.setTransform(-32,2.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_64.setTransform(-38,1.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.5,-2.9).lineTo(-0.6,-3).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.2,-3.9).lineTo(-0,-4).lineTo(0.3,-3.9).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(-0,-2.7).closePath();
	this.shape_65.setTransform(-42.3,0.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_66.setTransform(-46.7,1.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_67.setTransform(-52.8,1.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,1,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.7,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_68.setTransform(-58.7,1.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-4.1).lineTo(0.5,-4.1).lineTo(0.5,4).closePath();
	this.shape_69.setTransform(-62.5,0.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#000033").beginStroke().moveTo(-2.5,3.8).lineTo(-2.5,-3.7).lineTo(-1.9,-3.7).curveTo(-1.8,-3.7,-1.8,-3.7).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.6,-3.5,-1.6,-3.5).lineTo(-1.5,-2.8).curveTo(-1.2,-3.3,-0.7,-3.5).curveTo(-0.2,-3.8,0.4,-3.8).curveTo(0.8,-3.8,1.2,-3.6).curveTo(1.6,-3.4,1.9,-3.1).curveTo(2.2,-2.7,2.3,-2.2).curveTo(2.5,-1.6,2.5,-0.9).curveTo(2.5,-0.3,2.3,0.2).curveTo(2.1,0.7,1.8,1.1).curveTo(1.5,1.5,1.1,1.7).curveTo(0.6,2,0.1,2).curveTo(-0.5,2,-0.8,1.8).curveTo(-1.2,1.6,-1.5,1.3).lineTo(-1.5,3.8).closePath().moveTo(-0.8,-2.8).curveTo(-1.2,-2.6,-1.5,-2.2).lineTo(-1.5,0.5).curveTo(-1.2,0.9,-0.9,1).curveTo(-0.6,1.2,-0.2,1.2).curveTo(0.6,1.2,1,0.6).curveTo(1.5,0.1,1.5,-0.9).lineTo(1.4,-1.9).curveTo(1.3,-2.3,1.1,-2.5).curveTo(0.9,-2.8,0.6,-2.9).curveTo(0.4,-3,0,-3).curveTo(-0.4,-3,-0.8,-2.8).closePath();
	this.shape_70.setTransform(-66.8,2.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#000033").beginStroke().moveTo(-1.4,3.7).lineTo(-0.4,1.5).lineTo(-2.8,-3.7).lineTo(-1.9,-3.7).lineTo(-1.7,-3.7).lineTo(-1.6,-3.5).lineTo(-0.1,-0).lineTo(0,0.5).lineTo(0.2,-0).lineTo(1.6,-3.5).lineTo(1.8,-3.7).lineTo(1.9,-3.7).lineTo(2.7,-3.7).lineTo(-0.3,3.5).lineTo(-0.5,3.6).lineTo(-0.8,3.7).closePath();
	this.shape_71.setTransform(42.9,-12.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,3.9).lineTo(-1.5,3.3).lineTo(-1.6,3.8).curveTo(-1.6,3.8,-1.6,3.9).curveTo(-1.6,3.9,-1.7,3.9).curveTo(-1.7,4,-1.7,4).curveTo(-1.8,4,-1.8,4).lineTo(-2.5,4).lineTo(-2.5,-4.1).lineTo(-1.5,-4.1).lineTo(-1.5,-0.7).curveTo(-1.1,-1.2,-0.7,-1.4).curveTo(-0.2,-1.6,0.4,-1.6).curveTo(0.8,-1.6,1.2,-1.4).curveTo(1.6,-1.3,1.9,-1).curveTo(2.2,-0.6,2.3,-0.1).curveTo(2.5,0.5,2.5,1.1).curveTo(2.5,1.7,2.3,2.3).curveTo(2.1,2.9,1.8,3.2).curveTo(1.5,3.7,1.1,3.9).curveTo(0.6,4.1,0.1,4.1).curveTo(-0.5,4.1,-0.9,3.9).closePath().moveTo(-0.8,-0.6).curveTo(-1.2,-0.4,-1.5,-0.1).lineTo(-1.5,2.6).curveTo(-1.2,3,-0.9,3.2).curveTo(-0.6,3.3,-0.2,3.3).curveTo(0.6,3.3,1,2.7).curveTo(1.5,2.2,1.5,1.1).curveTo(1.5,0.1,1.1,-0.4).curveTo(0.7,-0.9,0,-0.9).curveTo(-0.5,-0.9,-0.8,-0.6).closePath();
	this.shape_72.setTransform(37.1,-14.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.8).lineTo(0.1,-3.8).lineTo(0.1,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.6,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.4,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.2,3.6).lineTo(0.4,3.7).curveTo(-0.2,3.7,-0.6,3.3).closePath();
	this.shape_73.setTransform(29.3,-14.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_74.setTransform(25.5,-13.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0.1,2.8).lineTo(-0.7,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_75.setTransform(20.3,-13.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-0.9,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.6).lineTo(-0.6,-3.7).lineTo(-0.4,-3.8).lineTo(0,-3.8).lineTo(0,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0,-1.1).lineTo(0,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.7,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.4,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.1,3.6).lineTo(0.5,3.7).curveTo(-0.2,3.7,-0.6,3.3).closePath();
	this.shape_76.setTransform(15.9,-14.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.7,1.8).lineTo(-1.6,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.6,2.1).lineTo(-0,2.2).lineTo(0.4,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1.1,1.2).lineTo(1,0.9).lineTo(0.6,0.6).lineTo(0.2,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.8,-0.9,-1.8,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.9,-2.2).lineTo(1.7,-1.9).lineTo(1.4,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.6,-2.1).lineTo(0.2,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.8,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.5,-0.7).lineTo(-0,-0.6).lineTo(0.5,-0.4).lineTo(1.1,-0.2).lineTo(1.5,0.1).lineTo(1.9,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.9,1.8).lineTo(1.4,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_77.setTransform(11.5,-13.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.3,1.7,-2.5,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.5,-1.2).curveTo(-2.3,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.6,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.6,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.6,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.6,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.9,2.1,1.2,1.5).curveTo(1.7,1,1.7,-0).curveTo(1.7,-1,1.2,-1.6).curveTo(0.9,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_78.setTransform(3.2,-13.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-0.9,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.6).lineTo(-0.6,-3.7).lineTo(-0.4,-3.8).lineTo(0,-3.8).lineTo(0,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0,-1.1).lineTo(0,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.7,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.4,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.1,3.6).lineTo(0.5,3.7).curveTo(-0.2,3.7,-0.6,3.3).closePath();
	this.shape_79.setTransform(-1.7,-14.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.7,1.8).lineTo(-1.6,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.6,2.1).lineTo(-0.1,2.2).lineTo(0.4,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1.1,1.2).lineTo(1,0.9).lineTo(0.6,0.6).lineTo(0.2,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.9,-0.9,-1.9,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.2,-2.9).curveTo(0.7,-2.9,1.2,-2.7).lineTo(1.9,-2.2).lineTo(1.6,-1.9).lineTo(1.4,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.6,-2.1).lineTo(0.2,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.8,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.5,-0.7).lineTo(-0,-0.6).lineTo(0.5,-0.4).lineTo(1.1,-0.2).lineTo(1.5,0.1).lineTo(1.9,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.9,1.8).lineTo(1.4,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_80.setTransform(-9,-13.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.2,-2.7).lineTo(-0.5,-2.9).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.2,-4).lineTo(-0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.7,-3.6).lineTo(0.7,-3.3).lineTo(0.7,-3.1).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(-0,-2.7).closePath();
	this.shape_81.setTransform(-12.6,-14.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.7,1.8).lineTo(-1.6,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.7,2.1).lineTo(-0,2.2).lineTo(0.4,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1.1,1.2).lineTo(1,0.9).lineTo(0.6,0.6).lineTo(0.2,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.8,-0.9,-1.8,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.9,-2.2).lineTo(1.7,-1.9).lineTo(1.4,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.6,-2.1).lineTo(0.2,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.8,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.5,-0.7).lineTo(-0,-0.6).lineTo(0.5,-0.4).lineTo(1.1,-0.2).lineTo(1.5,0.1).lineTo(1.9,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.9,1.8).lineTo(1.4,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_82.setTransform(-19.1,-13.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-0.9,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.6).lineTo(-0.6,-3.7).lineTo(-0.4,-3.8).lineTo(0,-3.8).lineTo(0,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0,-1.1).lineTo(0,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.7,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.4,2.6).lineTo(1.5,2.7).lineTo(1.8,3.3).lineTo(1.1,3.6).lineTo(0.5,3.7).curveTo(-0.2,3.7,-0.6,3.3).closePath();
	this.shape_83.setTransform(-23.3,-14.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_84.setTransform(-28.4,-13.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_85.setTransform(-34.4,-13.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#000033").beginStroke().moveTo(2.8,2.8).lineTo(2.8,-0.7).curveTo(2.8,-1.4,2.5,-1.7).curveTo(2.2,-2.1,1.7,-2.1).lineTo(1.2,-2).lineTo(0.9,-1.7).lineTo(0.6,-1.3).lineTo(0.5,-0.7).lineTo(0.5,2.8).lineTo(-0.5,2.8).lineTo(-0.5,-0.7).curveTo(-0.5,-1.4,-0.7,-1.7).curveTo(-1,-2.1,-1.5,-2.1).curveTo(-1.9,-2.1,-2.2,-1.9).curveTo(-2.6,-1.7,-2.8,-1.3).lineTo(-2.8,2.8).lineTo(-3.8,2.8).lineTo(-3.8,-2.7).lineTo(-3.2,-2.7).curveTo(-3.1,-2.7,-3.1,-2.7).curveTo(-3.1,-2.7,-3,-2.7).curveTo(-3,-2.6,-3,-2.6).curveTo(-3,-2.6,-3,-2.5).lineTo(-2.9,-2).curveTo(-2.5,-2.4,-2.2,-2.6).curveTo(-1.8,-2.8,-1.3,-2.8).curveTo(-0.7,-2.8,-0.4,-2.5).curveTo(-0,-2.2,0.2,-1.7).lineTo(0.4,-2.2).lineTo(0.9,-2.6).lineTo(1.4,-2.8).lineTo(1.9,-2.8).curveTo(2.4,-2.8,2.7,-2.7).curveTo(3,-2.6,3.3,-2.3).curveTo(3.6,-2,3.7,-1.6).curveTo(3.8,-1.2,3.8,-0.7).lineTo(3.8,2.8).closePath();
	this.shape_86.setTransform(-41.7,-13.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).curveTo(-1.6,2.5,-1.8,2.2).curveTo(-2.1,2,-2.2,1.6).curveTo(-2.3,1.2,-2.3,0.7).lineTo(-2.3,-2.8).lineTo(-1.3,-2.8).lineTo(-1.3,0.7).curveTo(-1.3,1.3,-1,1.7).curveTo(-0.7,2,-0.2,2).curveTo(0.3,2,0.7,1.8).lineTo(1.4,1.3).lineTo(1.4,-2.8).lineTo(2.3,-2.8).lineTo(2.3,2.7).lineTo(1.7,2.7).curveTo(1.7,2.7,1.6,2.7).curveTo(1.6,2.7,1.6,2.7).curveTo(1.5,2.6,1.5,2.6).curveTo(1.5,2.6,1.5,2.5).lineTo(1.4,1.9).curveTo(1,2.3,0.6,2.6).curveTo(0.1,2.8,-0.4,2.8).curveTo(-0.9,2.8,-1.2,2.7).closePath();
	this.shape_87.setTransform(-49.4,-13.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,2.7).curveTo(-1.2,2.5,-1.6,2.1).lineTo(-2.1,1.2).curveTo(-2.3,0.7,-2.3,-0).curveTo(-2.3,-0.6,-2.1,-1.2).curveTo(-1.9,-1.7,-1.6,-2.1).curveTo(-1.3,-2.5,-0.8,-2.7).curveTo(-0.3,-2.9,0.4,-2.9).curveTo(0.9,-2.9,1.4,-2.7).curveTo(1.8,-2.5,2.2,-2.2).lineTo(1.9,-1.8).lineTo(1.8,-1.7).lineTo(1.7,-1.7).lineTo(1.5,-1.7).lineTo(1.3,-1.9).lineTo(0.9,-2.1).lineTo(0.4,-2.1).curveTo(0,-2.1,-0.3,-2).lineTo(-0.8,-1.6).lineTo(-1.2,-0.9).lineTo(-1.3,-0).curveTo(-1.3,0.5,-1.1,0.9).curveTo(-1,1.3,-0.8,1.5).curveTo(-0.6,1.8,-0.3,2).lineTo(0.4,2.1).lineTo(1,2).lineTo(1.3,1.8).lineTo(1.6,1.6).lineTo(1.8,1.5).lineTo(2,1.6).lineTo(2.3,2).lineTo(1.8,2.4).lineTo(1.3,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.3,2.9,-0.8,2.7).closePath();
	this.shape_88.setTransform(-54.9,-13.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.4,1.2).curveTo(-2.6,0.6,-2.6,-0).curveTo(-2.6,-0.7,-2.4,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0.1,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,2,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.6,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,2,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0.1,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.5,-0.9).lineTo(-1.6,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0.1,2.1).curveTo(0.9,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.9,-2.1,0.1,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_89.setTransform(-60.7,-13.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.9).curveTo(-1.6,3.7,-1.9,3.3).curveTo(-2.2,3,-2.3,2.4).curveTo(-2.5,1.9,-2.5,1.3).curveTo(-2.5,0.6,-2.3,0.1).curveTo(-2.1,-0.4,-1.8,-0.9).curveTo(-1.5,-1.3,-1.1,-1.4).curveTo(-0.6,-1.6,-0,-1.6).curveTo(0.5,-1.6,0.8,-1.5).lineTo(1.5,-1).lineTo(1.5,-4.1).lineTo(2.5,-4.1).lineTo(2.5,4).lineTo(1.9,4).curveTo(1.8,4,1.8,4).curveTo(1.7,4,1.7,3.9).curveTo(1.7,3.9,1.7,3.9).curveTo(1.6,3.8,1.6,3.8).lineTo(1.5,3.1).curveTo(1.2,3.6,0.7,3.8).curveTo(0.3,4.1,-0.3,4.1).curveTo(-0.8,4.1,-1.2,3.9).closePath().moveTo(-1,-0.4).curveTo(-1.4,0.2,-1.4,1.3).lineTo(-1.3,2.2).curveTo(-1.3,2.6,-1.1,2.8).lineTo(-0.6,3.2).curveTo(-0.4,3.3,-0,3.3).curveTo(0.5,3.3,0.8,3.1).curveTo(1.2,2.8,1.5,2.4).lineTo(1.5,-0.3).curveTo(1.2,-0.6,0.9,-0.7).curveTo(0.6,-0.9,0.2,-0.9).curveTo(-0.6,-0.9,-1,-0.4).closePath();
	this.shape_90.setTransform(-67.1,-14.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_91.setTransform(30.6,-28.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,2.7).curveTo(-1.2,2.5,-1.6,2.1).lineTo(-2.1,1.2).curveTo(-2.3,0.7,-2.3,-0).curveTo(-2.3,-0.6,-2.1,-1.2).curveTo(-1.9,-1.7,-1.6,-2.1).curveTo(-1.3,-2.5,-0.8,-2.7).curveTo(-0.3,-2.9,0.4,-2.9).curveTo(0.9,-2.9,1.4,-2.7).curveTo(1.8,-2.5,2.2,-2.2).lineTo(1.9,-1.8).lineTo(1.8,-1.7).lineTo(1.7,-1.7).lineTo(1.5,-1.7).lineTo(1.3,-1.9).lineTo(0.9,-2.1).lineTo(0.4,-2.1).curveTo(0,-2.1,-0.3,-2).lineTo(-0.8,-1.6).lineTo(-1.2,-0.9).lineTo(-1.3,-0).curveTo(-1.3,0.5,-1.1,0.9).curveTo(-1,1.3,-0.8,1.5).curveTo(-0.6,1.8,-0.3,2).lineTo(0.4,2.1).lineTo(1,2).lineTo(1.3,1.8).lineTo(1.6,1.6).lineTo(1.8,1.5).lineTo(2,1.6).lineTo(2.3,2).lineTo(1.8,2.4).lineTo(1.3,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.3,2.9,-0.8,2.7).closePath();
	this.shape_92.setTransform(25.2,-28.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,1,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.5,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(1.9,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0,2.8).lineTo(-0.7,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_93.setTransform(19.6,-28.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-4.1).lineTo(0.5,-4.1).lineTo(0.5,4).closePath();
	this.shape_94.setTransform(15.8,-30.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#000033").beginStroke().moveTo(-2.5,3.8).lineTo(-2.5,-3.7).lineTo(-1.9,-3.7).curveTo(-1.8,-3.7,-1.8,-3.7).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.7,-3.6,-1.7,-3.6).curveTo(-1.6,-3.5,-1.6,-3.5).lineTo(-1.5,-2.8).curveTo(-1.2,-3.3,-0.7,-3.5).curveTo(-0.2,-3.8,0.4,-3.8).curveTo(0.8,-3.8,1.2,-3.6).curveTo(1.6,-3.4,1.9,-3.1).curveTo(2.2,-2.7,2.3,-2.2).curveTo(2.5,-1.6,2.5,-0.9).curveTo(2.5,-0.3,2.3,0.2).curveTo(2.1,0.7,1.8,1.1).curveTo(1.5,1.5,1.1,1.7).curveTo(0.6,2,0.1,2).curveTo(-0.5,2,-0.8,1.8).curveTo(-1.2,1.6,-1.5,1.3).lineTo(-1.5,3.8).closePath().moveTo(-0.8,-2.8).curveTo(-1.2,-2.6,-1.5,-2.2).lineTo(-1.5,0.5).curveTo(-1.2,0.9,-0.9,1).curveTo(-0.6,1.2,-0.2,1.2).curveTo(0.6,1.2,1,0.6).curveTo(1.5,0.1,1.5,-0.9).lineTo(1.4,-1.9).curveTo(1.3,-2.3,1.1,-2.5).curveTo(0.9,-2.8,0.6,-2.9).curveTo(0.4,-3,0,-3).curveTo(-0.4,-3,-0.8,-2.8).closePath();
	this.shape_95.setTransform(11.5,-28);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#000033").beginStroke().moveTo(1.5,4).lineTo(1.3,4).lineTo(1.1,3.8).lineTo(-0.7,1.6).lineTo(-0.9,1.4).lineTo(-1.1,1.4).lineTo(-1.4,1.4).lineTo(-1.4,4).lineTo(-2.4,4).lineTo(-2.4,-4.1).lineTo(-1.4,-4.1).lineTo(-1.4,0.7).lineTo(-1.1,0.7).lineTo(-1,0.7).lineTo(-0.8,0.6).lineTo(0.9,-1.3).lineTo(1.1,-1.5).lineTo(1.4,-1.5).lineTo(2.3,-1.5).lineTo(0.2,0.7).lineTo(-0.1,0.9).lineTo(0,1.1).lineTo(0.2,1.3).lineTo(2.4,4).closePath();
	this.shape_96.setTransform(5.9,-30.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_97.setTransform(1.1,-29);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.5,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.5,1.2).curveTo(-2.7,0.6,-2.7,-0).curveTo(-2.7,-0.7,-2.5,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.5,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,1.9,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.7,-0.7,2.6,-0).curveTo(2.7,0.6,2.5,1.2).curveTo(2.3,1.7,1.9,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.4,-1.3,-1.6,-0.9).lineTo(-1.7,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_98.setTransform(-4.3,-28.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#000033").beginStroke().moveTo(1.6,2.8).curveTo(1.5,2.8,1.5,2.8).curveTo(1.5,2.8,1.4,2.7).curveTo(1.4,2.7,1.4,2.7).curveTo(1.4,2.6,1.4,2.6).lineTo(0.1,-1.1).lineTo(0.1,-1.4).lineTo(-0,-1.7).lineTo(-0.1,-1.4).lineTo(-0.1,-1.1).lineTo(-1.4,2.6).curveTo(-1.4,2.6,-1.4,2.7).curveTo(-1.4,2.7,-1.5,2.7).curveTo(-1.5,2.8,-1.5,2.8).curveTo(-1.6,2.8,-1.6,2.8).lineTo(-2.3,2.8).lineTo(-4.1,-2.7).lineTo(-3.4,-2.7).lineTo(-3.2,-2.7).lineTo(-3.1,-2.6).lineTo(-2,1).lineTo(-1.9,1.8).lineTo(-1.8,1.4).lineTo(-1.6,1).lineTo(-0.5,-2.6).lineTo(-0.4,-2.7).lineTo(-0.2,-2.8).lineTo(0.2,-2.8).lineTo(0.4,-2.7).lineTo(0.5,-2.6).lineTo(1.7,1).lineTo(1.8,1.4).lineTo(1.9,1.8).lineTo(1.9,1.4).lineTo(2,1).lineTo(3.1,-2.6).lineTo(3.2,-2.7).lineTo(3.4,-2.7).lineTo(4.1,-2.7).lineTo(2.3,2.8).closePath();
	this.shape_99.setTransform(-11.7,-28.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.3,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_100.setTransform(-21.6,-28);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_101.setTransform(-27.6,-29);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,4).lineTo(-0.5,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.5,-2.9).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.5,-3.8).lineTo(-0.3,-4).lineTo(-0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3.1).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(-0,-2.6).closePath();
	this.shape_102.setTransform(-31.9,-30.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.6).lineTo(-0.6,-3.7).lineTo(-0.5,-3.8).lineTo(0.1,-3.8).lineTo(0.1,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.3).curveTo(0.1,2.6,0.2,2.7).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.6,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.3,2.6).lineTo(1.5,2.7).lineTo(1.8,3.2).lineTo(1.2,3.6).lineTo(0.4,3.8).curveTo(-0.2,3.7,-0.6,3.3).closePath();
	this.shape_103.setTransform(-35.1,-29.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#000033").beginStroke().moveTo(-1.3,2.8).lineTo(-1.7,2.5).lineTo(-2.1,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.8,0.4,-1.4,0.2).curveTo(-1,-0,-0.4,-0.2).lineTo(1.3,-0.4).lineTo(1.3,-0.8).curveTo(1.3,-1.4,1,-1.8).curveTo(0.7,-2.1,0.2,-2.1).lineTo(-0.5,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.4,-1.5).lineTo(-1.6,-1.6).lineTo(-1.7,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.3,-2.9).curveTo(0.7,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2.1,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.7,2.8).lineTo(1.5,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.4,2.6).lineTo(-0.1,2.8).lineTo(-0.6,2.9).lineTo(-1.3,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.3,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.4,2.2).lineTo(0.2,2.1).lineTo(0.5,2).lineTo(0.9,1.7).lineTo(1.3,1.4).lineTo(1.3,0.3).lineTo(0.1,0.4).closePath();
	this.shape_104.setTransform(-40,-28.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_105.setTransform(-44.3,-29);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_106.setTransform(-49.5,-28.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_107.setTransform(-55.4,-29);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_108.setTransform(-61.4,-28.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.3,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_109.setTransform(-67.1,-28);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_110.setTransform(45.9,-44.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#000033").beginStroke().moveTo(-1.1,2.7).curveTo(-1.6,2.5,-1.9,2.1).curveTo(-2.2,1.7,-2.4,1.2).curveTo(-2.6,0.6,-2.6,-0).curveTo(-2.6,-0.7,-2.4,-1.2).curveTo(-2.2,-1.7,-1.9,-2.1).curveTo(-1.6,-2.5,-1.1,-2.7).curveTo(-0.6,-2.9,0.1,-2.9).curveTo(0.7,-2.9,1.1,-2.7).curveTo(1.6,-2.5,2,-2.1).curveTo(2.3,-1.7,2.5,-1.2).curveTo(2.6,-0.7,2.6,-0).curveTo(2.6,0.6,2.5,1.2).curveTo(2.3,1.7,2,2.1).curveTo(1.6,2.5,1.1,2.7).curveTo(0.7,2.9,0.1,2.9).curveTo(-0.6,2.9,-1.1,2.7).closePath().moveTo(-0.7,-2).lineTo(-1.2,-1.6).curveTo(-1.5,-1.3,-1.5,-0.9).lineTo(-1.6,-0).curveTo(-1.7,1,-1.2,1.5).curveTo(-0.8,2.1,0.1,2.1).curveTo(0.9,2.1,1.3,1.5).curveTo(1.6,1,1.6,-0).curveTo(1.6,-1,1.3,-1.6).curveTo(0.9,-2.1,0.1,-2.1).curveTo(-0.4,-2.1,-0.7,-2).closePath();
	this.shape_111.setTransform(40.5,-44.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,4).lineTo(-0.8,-0.7).lineTo(-1.5,-0.8).lineTo(-1.6,-0.9).lineTo(-1.7,-1.1).lineTo(-1.7,-1.5).lineTo(-0.8,-1.5).lineTo(-0.8,-2).lineTo(-0.7,-2.9).lineTo(-0.4,-3.5).curveTo(-0.1,-3.8,0.3,-3.9).curveTo(0.6,-4,1.1,-4).lineTo(1.7,-3.9).lineTo(1.7,-3.4).curveTo(1.7,-3.4,1.7,-3.3).curveTo(1.7,-3.3,1.7,-3.3).curveTo(1.6,-3.3,1.6,-3.3).curveTo(1.6,-3.3,1.5,-3.3).lineTo(1.2,-3.3).lineTo(0.7,-3.2).lineTo(0.4,-3).lineTo(0.2,-2.5).lineTo(0.1,-2).lineTo(0.1,-1.5).lineTo(1.7,-1.5).lineTo(1.7,-0.7).lineTo(0.1,-0.7).lineTo(0.1,4).closePath();
	this.shape_112.setTransform(35.6,-45.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#000033").beginStroke().moveTo(-1.5,3.7).lineTo(-0.4,1.5).lineTo(-2.8,-3.7).lineTo(-1.9,-3.7).lineTo(-1.7,-3.7).lineTo(-1.6,-3.5).lineTo(-0.1,-0).lineTo(0,0.5).lineTo(0.2,-0).lineTo(1.7,-3.5).lineTo(1.8,-3.7).lineTo(1.9,-3.7).lineTo(2.7,-3.7).lineTo(-0.3,3.5).lineTo(-0.5,3.6).lineTo(-0.8,3.7).closePath();
	this.shape_113.setTransform(28,-43.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,3.7).lineTo(-2,3.4).lineTo(-2.4,2.9).curveTo(-2.6,2.7,-2.6,2.4).curveTo(-2.6,1.9,-2.3,1.7).curveTo(-2.1,1.4,-1.6,1.2).lineTo(-2,0.9).curveTo(-2.2,0.7,-2.2,0.4).lineTo(-2.1,0.2).lineTo(-2,-0.1).lineTo(-1.8,-0.3).lineTo(-1.4,-0.5).curveTo(-1.9,-0.8,-2.1,-1.2).curveTo(-2.3,-1.5,-2.3,-2).curveTo(-2.3,-2.5,-2.2,-2.8).curveTo(-2,-3.1,-1.7,-3.4).lineTo(-1.1,-3.7).lineTo(-0.2,-3.8).lineTo(0.5,-3.8).lineTo(1,-3.5).lineTo(2.6,-3.5).lineTo(2.6,-3.2).curveTo(2.6,-3.1,2.6,-3.1).curveTo(2.5,-3,2.5,-3).curveTo(2.5,-3,2.4,-3).curveTo(2.4,-2.9,2.3,-2.9).lineTo(1.7,-2.8).curveTo(1.9,-2.5,1.9,-2).curveTo(1.9,-1.6,1.7,-1.3).curveTo(1.6,-1,1.3,-0.7).lineTo(0.6,-0.4).curveTo(0.2,-0.2,-0.2,-0.2).lineTo(-0.9,-0.3).lineTo(-1.2,-0.1).lineTo(-1.3,0.1).curveTo(-1.3,0.2,-1.3,0.2).curveTo(-1.3,0.3,-1.3,0.3).curveTo(-1.3,0.3,-1.2,0.4).curveTo(-1.2,0.4,-1.1,0.4).lineTo(-0.7,0.6).lineTo(-0.1,0.6).lineTo(0.6,0.7).lineTo(1.3,0.8).lineTo(1.9,1).curveTo(2.1,1.1,2.3,1.3).curveTo(2.5,1.6,2.5,2).curveTo(2.5,2.3,2.3,2.7).curveTo(2.1,3,1.8,3.3).curveTo(1.4,3.5,0.9,3.7).curveTo(0.5,3.8,-0.2,3.8).lineTo(-1.2,3.7).closePath().moveTo(-1.5,1.7).curveTo(-1.7,1.9,-1.7,2.2).lineTo(-1.6,2.6).lineTo(-1.3,2.9).lineTo(-0.8,3).lineTo(-0.1,3.1).lineTo(0.6,3).lineTo(1.1,2.8).lineTo(1.4,2.5).lineTo(1.6,2.1).curveTo(1.6,2.1,1.6,2).curveTo(1.6,2,1.5,1.9).curveTo(1.5,1.9,1.5,1.9).curveTo(1.5,1.8,1.4,1.8).lineTo(1.1,1.6).lineTo(0.7,1.5).lineTo(0.1,1.4).lineTo(-0.5,1.4).lineTo(-1,1.4).lineTo(-1.5,1.7).closePath().moveTo(-1.1,-2.8).curveTo(-1.4,-2.5,-1.4,-2).lineTo(-1.3,-1.6).lineTo(-1.1,-1.2).lineTo(-0.7,-1).lineTo(-0.2,-0.9).lineTo(0.3,-1).lineTo(0.7,-1.2).lineTo(0.9,-1.6).lineTo(1,-2).curveTo(1,-2.5,0.7,-2.8).curveTo(0.4,-3.1,-0.2,-3.1).curveTo(-0.8,-3.1,-1.1,-2.8).closePath();
	this.shape_114.setTransform(22.3,-43.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_115.setTransform(16.5,-44.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-0.9,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.5).lineTo(-0.6,-3.7).lineTo(-0.4,-3.8).lineTo(0,-3.8).lineTo(0,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0,-1.1).lineTo(0,2.2).curveTo(0.1,2.6,0.2,2.8).curveTo(0.3,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.7,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.4,2.6).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.1,3.6).lineTo(0.5,3.8).curveTo(-0.2,3.8,-0.6,3.3).closePath();
	this.shape_116.setTransform(11.8,-45);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.8).lineTo(-1.8,2.5).lineTo(-2,2).curveTo(-2.2,1.8,-2.2,1.4).curveTo(-2.2,1.1,-2,0.8).curveTo(-1.9,0.4,-1.4,0.2).curveTo(-1,-0,-0.3,-0.2).lineTo(1.2,-0.4).lineTo(1.2,-0.8).curveTo(1.2,-1.4,0.9,-1.8).curveTo(0.7,-2.1,0.1,-2.1).lineTo(-0.4,-2).lineTo(-0.9,-1.8).lineTo(-1.2,-1.6).lineTo(-1.5,-1.5).lineTo(-1.6,-1.6).lineTo(-1.8,-1.7).lineTo(-1.9,-2).curveTo(-1.4,-2.5,-0.9,-2.7).curveTo(-0.4,-2.9,0.2,-2.9).curveTo(0.8,-2.9,1.1,-2.7).lineTo(1.7,-2.3).curveTo(2,-2,2,-1.6).curveTo(2.2,-1.3,2.2,-0.8).lineTo(2.2,2.8).lineTo(1.8,2.8).lineTo(1.6,2.7).lineTo(1.4,2.5).lineTo(1.3,2).lineTo(0.9,2.4).lineTo(0.5,2.6).lineTo(-0,2.8).lineTo(-0.7,2.9).lineTo(-1.2,2.8).closePath().moveTo(0.1,0.4).lineTo(-0.7,0.6).curveTo(-1,0.7,-1.1,0.9).lineTo(-1.2,1.3).lineTo(-1.2,1.7).lineTo(-1,2).lineTo(-0.7,2.1).lineTo(-0.3,2.2).lineTo(0.1,2.1).lineTo(0.6,2).lineTo(0.9,1.7).lineTo(1.2,1.4).lineTo(1.2,0.3).lineTo(0.1,0.4).closePath();
	this.shape_117.setTransform(6.8,-44.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#000033").beginStroke().moveTo(-1.6,2.8).lineTo(-1.6,-2.7).lineTo(-1,-2.7).lineTo(-0.8,-2.7).lineTo(-0.7,-2.5).lineTo(-0.6,-1.6).curveTo(-0.4,-2.2,0,-2.5).curveTo(0.4,-2.8,1,-2.8).lineTo(1.3,-2.8).lineTo(1.6,-2.7).lineTo(1.5,-2).lineTo(1.4,-1.8).lineTo(1.1,-1.8).lineTo(0.8,-1.9).lineTo(0.3,-1.8).lineTo(-0,-1.6).lineTo(-0.3,-1.2).lineTo(-0.6,-0.7).lineTo(-0.6,2.8).closePath();
	this.shape_118.setTransform(2.6,-44.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-1,3,-0.9,2.3).lineTo(-0.9,-1.1).lineTo(-1.6,-1.1).lineTo(-1.7,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.7,-3.5).lineTo(-0.6,-3.7).lineTo(-0.5,-3.8).lineTo(0.1,-3.8).lineTo(0.1,-1.8).lineTo(1.7,-1.8).lineTo(1.7,-1.1).lineTo(0.1,-1.1).lineTo(0.1,2.2).curveTo(0,2.6,0.2,2.8).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.6,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.2,2.7).lineTo(1.3,2.6).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.1,3.6).lineTo(0.4,3.8).curveTo(-0.2,3.8,-0.6,3.3).closePath();
	this.shape_119.setTransform(-1.6,-45);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill("#000033").beginStroke().moveTo(-1.2,2.7).lineTo(-2,2.2).lineTo(-1.8,1.8).lineTo(-1.7,1.7).lineTo(-1.5,1.7).lineTo(-1.3,1.7).lineTo(-1,1.9).lineTo(-0.6,2.1).lineTo(-0.1,2.2).lineTo(0.5,2.1).lineTo(0.8,1.9).lineTo(1,1.6).lineTo(1,1.2).lineTo(0.9,0.9).lineTo(0.6,0.6).lineTo(0.1,0.4).lineTo(-0.4,0.2).lineTo(-0.9,0).lineTo(-1.4,-0.2).lineTo(-1.7,-0.7).curveTo(-1.8,-0.9,-1.9,-1.3).lineTo(-1.7,-1.9).lineTo(-1.3,-2.4).lineTo(-0.7,-2.8).lineTo(0.1,-2.9).curveTo(0.7,-2.9,1.2,-2.7).lineTo(1.9,-2.2).lineTo(1.6,-1.9).lineTo(1.5,-1.8).lineTo(1.3,-1.8).lineTo(1,-2).lineTo(0.6,-2.1).lineTo(0.1,-2.2).lineTo(-0.3,-2.1).lineTo(-0.6,-1.9).lineTo(-0.9,-1.7).lineTo(-0.9,-1.3).lineTo(-0.8,-1).lineTo(-0.4,-0.7).lineTo(0,-0.6).lineTo(0.6,-0.4).lineTo(1,-0.2).lineTo(1.5,0.1).lineTo(1.8,0.5).curveTo(2,0.7,2,1.1).curveTo(2,1.5,1.8,1.8).lineTo(1.5,2.4).lineTo(0.8,2.7).curveTo(0.4,2.9,-0.1,2.9).curveTo(-0.7,2.9,-1.2,2.7).closePath();
	this.shape_120.setTransform(-6,-44.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_121.setTransform(-14.1,-44.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#000033").beginStroke().moveTo(-0.5,2.8).lineTo(-2.7,-2.8).lineTo(-2,-2.8).lineTo(-1.7,-2.7).lineTo(-1.6,-2.6).lineTo(-0.2,1).lineTo(-0.1,1.4).lineTo(-0,1.8).lineTo(0.1,1.4).lineTo(0.2,1).lineTo(1.6,-2.6).lineTo(1.7,-2.7).lineTo(2,-2.8).lineTo(2.7,-2.8).lineTo(0.4,2.8).closePath();
	this.shape_122.setTransform(-19.8,-44.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#000033").beginStroke().moveTo(-0.4,4).lineTo(-0.4,-1.5).lineTo(0.5,-1.5).lineTo(0.5,4).closePath().moveTo(-0.3,-2.7).lineTo(-0.4,-2.9).lineTo(-0.6,-3.1).lineTo(-0.7,-3.3).lineTo(-0.6,-3.6).lineTo(-0.4,-3.8).lineTo(-0.3,-4).lineTo(0,-4).lineTo(0.3,-4).lineTo(0.5,-3.8).lineTo(0.6,-3.6).lineTo(0.7,-3.3).lineTo(0.6,-3.1).lineTo(0.5,-2.9).lineTo(0.3,-2.7).lineTo(0,-2.6).closePath();
	this.shape_123.setTransform(-23.9,-45.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#000033").beginStroke().moveTo(-0.6,3.3).curveTo(-1,3,-1,2.3).lineTo(-1,-1.1).lineTo(-1.6,-1.1).lineTo(-1.8,-1.2).lineTo(-1.8,-1.3).lineTo(-1.8,-1.7).lineTo(-0.9,-1.8).lineTo(-0.6,-3.5).lineTo(-0.6,-3.7).lineTo(-0.4,-3.8).lineTo(0,-3.8).lineTo(0,-1.8).lineTo(1.6,-1.8).lineTo(1.6,-1.1).lineTo(0,-1.1).lineTo(0,2.2).curveTo(0,2.6,0.2,2.8).curveTo(0.2,2.8,0.3,2.8).curveTo(0.4,2.9,0.4,2.9).curveTo(0.5,2.9,0.5,2.9).curveTo(0.6,3,0.6,3).lineTo(0.9,2.9).lineTo(1.1,2.8).lineTo(1.3,2.7).lineTo(1.4,2.6).lineTo(1.5,2.8).lineTo(1.8,3.2).lineTo(1.2,3.6).lineTo(0.5,3.8).curveTo(-0.2,3.8,-0.6,3.3).closePath();
	this.shape_124.setTransform(-27.1,-45);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,2.7).curveTo(-1.2,2.5,-1.6,2.1).lineTo(-2.1,1.2).curveTo(-2.3,0.7,-2.3,-0).curveTo(-2.3,-0.6,-2.1,-1.2).curveTo(-1.9,-1.7,-1.6,-2.1).curveTo(-1.3,-2.5,-0.8,-2.7).curveTo(-0.3,-2.9,0.4,-2.9).curveTo(0.9,-2.9,1.4,-2.7).curveTo(1.8,-2.5,2.2,-2.2).lineTo(1.9,-1.8).lineTo(1.8,-1.7).lineTo(1.7,-1.7).lineTo(1.5,-1.7).lineTo(1.3,-1.9).lineTo(0.9,-2.1).lineTo(0.4,-2.1).curveTo(0,-2.1,-0.3,-2).lineTo(-0.8,-1.6).lineTo(-1.2,-0.9).lineTo(-1.3,-0).curveTo(-1.3,0.5,-1.1,0.9).curveTo(-1,1.3,-0.8,1.5).curveTo(-0.6,1.8,-0.3,2).lineTo(0.4,2.1).lineTo(1,2).lineTo(1.3,1.8).lineTo(1.6,1.6).lineTo(1.8,1.5).lineTo(2,1.6).lineTo(2.3,2).lineTo(1.8,2.4).lineTo(1.3,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.3,2.9,-0.8,2.7).closePath();
	this.shape_125.setTransform(-31.7,-44.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_126.setTransform(-37.3,-44.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,4).lineTo(-0.9,-0.7).lineTo(-1.5,-0.8).lineTo(-1.7,-0.9).lineTo(-1.8,-1.1).lineTo(-1.8,-1.5).lineTo(-0.9,-1.5).lineTo(-0.9,-2).lineTo(-0.8,-2.9).lineTo(-0.3,-3.5).curveTo(-0.1,-3.8,0.3,-3.9).curveTo(0.6,-4,1,-4).lineTo(1.7,-3.9).lineTo(1.7,-3.4).curveTo(1.7,-3.4,1.7,-3.3).curveTo(1.7,-3.3,1.7,-3.3).curveTo(1.6,-3.3,1.6,-3.3).curveTo(1.6,-3.3,1.5,-3.3).lineTo(1.2,-3.3).lineTo(0.7,-3.2).lineTo(0.4,-3).lineTo(0.1,-2.5).lineTo(0.1,-2).lineTo(0.1,-1.5).lineTo(1.7,-1.5).lineTo(1.7,-0.7).lineTo(0.1,-0.7).lineTo(0.1,4).closePath();
	this.shape_127.setTransform(-42,-45.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginFill("#000033").beginStroke().moveTo(-0.8,4).lineTo(-0.8,-0.7).lineTo(-1.5,-0.8).lineTo(-1.6,-0.9).lineTo(-1.7,-1.1).lineTo(-1.7,-1.5).lineTo(-0.8,-1.5).lineTo(-0.8,-2).lineTo(-0.7,-2.9).lineTo(-0.4,-3.5).curveTo(-0.1,-3.8,0.3,-3.9).curveTo(0.6,-4,1.1,-4).lineTo(1.7,-3.9).lineTo(1.7,-3.4).curveTo(1.7,-3.4,1.7,-3.3).curveTo(1.7,-3.3,1.7,-3.3).curveTo(1.6,-3.3,1.6,-3.3).curveTo(1.6,-3.3,1.5,-3.3).lineTo(1.2,-3.3).lineTo(0.7,-3.2).lineTo(0.4,-3).lineTo(0.2,-2.5).lineTo(0.1,-2).lineTo(0.1,-1.5).lineTo(1.7,-1.5).lineTo(1.7,-0.7).lineTo(0.1,-0.7).lineTo(0.1,4).closePath();
	this.shape_128.setTransform(-45.9,-45.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginFill("#000033").beginStroke().moveTo(-0.9,2.7).curveTo(-1.4,2.5,-1.7,2.1).curveTo(-2.1,1.7,-2.3,1.2).curveTo(-2.5,0.6,-2.5,-0.1).curveTo(-2.5,-0.7,-2.3,-1.2).curveTo(-2.1,-1.7,-1.8,-2.1).curveTo(-1.4,-2.5,-1,-2.7).curveTo(-0.5,-2.9,0.1,-2.9).curveTo(0.6,-2.9,1.1,-2.7).lineTo(1.8,-2.2).curveTo(2.1,-1.9,2.3,-1.5).curveTo(2.5,-1,2.5,-0.4).lineTo(2.4,-0.1).lineTo(2.2,-0).lineTo(-1.5,-0).lineTo(-1.4,0.9).curveTo(-1.2,1.3,-1,1.6).curveTo(-0.8,1.8,-0.4,2).lineTo(0.3,2.1).lineTo(0.9,2).lineTo(1.4,1.8).lineTo(1.7,1.6).lineTo(1.9,1.5).lineTo(2.1,1.6).lineTo(2.4,2).lineTo(1.9,2.4).lineTo(1.4,2.6).lineTo(0.8,2.8).lineTo(0.2,2.9).curveTo(-0.4,2.9,-0.9,2.7).closePath().moveTo(1.6,-0.6).lineTo(1.5,-1.2).lineTo(1.2,-1.7).lineTo(0.8,-2.1).lineTo(0.2,-2.2).curveTo(-0.6,-2.2,-1,-1.8).curveTo(-1.4,-1.3,-1.5,-0.6).lineTo(1.6,-0.6).lineTo(1.6,-0.6).closePath();
	this.shape_129.setTransform(-50.8,-44.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginFill("#000033").beginStroke().moveTo(1.4,2.8).lineTo(1.4,-0.7).curveTo(1.4,-1.4,1.1,-1.7).curveTo(0.8,-2.1,0.2,-2.1).curveTo(-0.2,-2.1,-0.6,-1.8).lineTo(-1.3,-1.3).lineTo(-1.3,2.8).lineTo(-2.3,2.8).lineTo(-2.3,-2.7).lineTo(-1.7,-2.7).curveTo(-1.7,-2.7,-1.6,-2.7).curveTo(-1.6,-2.7,-1.6,-2.7).curveTo(-1.5,-2.6,-1.5,-2.6).curveTo(-1.5,-2.6,-1.5,-2.5).lineTo(-1.4,-1.9).lineTo(-1,-2.3).lineTo(-0.6,-2.6).lineTo(-0.1,-2.8).lineTo(0.5,-2.8).curveTo(0.9,-2.8,1.3,-2.7).lineTo(1.9,-2.3).curveTo(2.1,-2,2.2,-1.6).lineTo(2.3,-0.7).lineTo(2.3,2.8).closePath();
	this.shape_130.setTransform(-59.5,-44.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginFill("#000033").beginStroke().moveTo(2.9,4).lineTo(2.6,3.9).lineTo(2.5,3.7).lineTo(1.8,1.8).lineTo(-1.8,1.8).lineTo(-2.5,3.7).lineTo(-2.6,3.8).lineTo(-2.9,4).lineTo(-3.7,4).lineTo(-0.5,-3.9).lineTo(0.5,-3.9).lineTo(3.7,4).closePath().moveTo(1.5,1).lineTo(0.2,-2.2).lineTo(0.1,-2.5).lineTo(-0,-2.9).lineTo(-0.2,-2.2).lineTo(-1.5,1).lineTo(1.5,1).closePath();
	this.shape_131.setTransform(-66.3,-45.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-54.2,144,108.4);


(lib.gfcStep1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.step1();
	this.instance.parent = this;
	this.instance.setTransform(-84,-156.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-156.5,168,313);


(lib.gfcArrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-14,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-28,28,56);


(lib.mcStep4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_32 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32).wait(1));

	// Content
	this.instance = new lib.gfcStep4Content("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.9,63.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(1).to({regX:1.9,regY:16.4,x:1,y:79.9,alpha:0.137},0).wait(1).to({alpha:0.244},0).wait(1).to({alpha:0.326},0).wait(1).to({alpha:0.39},0).wait(1).to({alpha:0.439},0).wait(1).to({alpha:0.481},0).wait(1).to({alpha:0.519},0).wait(1).to({alpha:0.561},0).wait(1).to({alpha:0.61},0).wait(1).to({alpha:0.674},0).wait(1).to({alpha:0.756},0).wait(1).to({alpha:0.863},0).wait(1).to({alpha:1},0).wait(1));

	// Title
	this.instance_1 = new lib.gfcStep4Title("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9.6,-22.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(1).to({regX:-0.2,regY:9,x:-9.8,y:-13.3,alpha:0.113},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.327},0).wait(1).to({alpha:0.427},0).wait(1).to({alpha:0.523},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.703},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.865},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// bg
	this.instance_2 = new lib.gfcStep4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.127},0).wait(1).to({alpha:0.244},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.454},0).wait(1).to({alpha:0.547},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.713},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.854},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.975},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-156.5,168,313);


(lib.mcStep3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_32 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32).wait(1));

	// Content
	this.instance = new lib.gfcStep3Content("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.9,65.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(1).to({regX:-0.3,regY:15.4,x:-1.2,y:80.9,alpha:0.137},0).wait(1).to({alpha:0.244},0).wait(1).to({alpha:0.326},0).wait(1).to({alpha:0.39},0).wait(1).to({alpha:0.439},0).wait(1).to({alpha:0.481},0).wait(1).to({alpha:0.519},0).wait(1).to({alpha:0.561},0).wait(1).to({alpha:0.61},0).wait(1).to({alpha:0.674},0).wait(1).to({alpha:0.756},0).wait(1).to({alpha:0.863},0).wait(1).to({alpha:1},0).wait(1));

	// Title
	this.instance_1 = new lib.gfcStep3Title("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-12.6,-19.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(1).to({regX:-2.2,regY:10.3,x:-14.8,y:-9,alpha:0.113},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.327},0).wait(1).to({alpha:0.427},0).wait(1).to({alpha:0.523},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.703},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.865},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// bg
	this.instance_2 = new lib.gfcStep3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.127},0).wait(1).to({alpha:0.244},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.454},0).wait(1).to({alpha:0.547},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.713},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.854},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.975},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-156.5,168,313);


(lib.mcStep2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_32 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32).wait(1));

	// Content
	this.instance = new lib.gfcStep2Content("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.9,71.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(1).to({regX:-0.9,regY:1.2,x:-1.8,y:72.7,alpha:0.137},0).wait(1).to({alpha:0.244},0).wait(1).to({alpha:0.326},0).wait(1).to({alpha:0.39},0).wait(1).to({alpha:0.439},0).wait(1).to({alpha:0.481},0).wait(1).to({alpha:0.519},0).wait(1).to({alpha:0.561},0).wait(1).to({alpha:0.61},0).wait(1).to({alpha:0.674},0).wait(1).to({alpha:0.756},0).wait(1).to({alpha:0.863},0).wait(1).to({alpha:1},0).wait(1));

	// Title
	this.instance_1 = new lib.gfcStep2Title("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.6,-13.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(1).to({regX:-2.2,regY:9,x:-2.8,y:-4.3,alpha:0.113},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.327},0).wait(1).to({alpha:0.427},0).wait(1).to({alpha:0.523},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.703},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.865},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// bg
	this.instance_2 = new lib.gfcStep2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.127},0).wait(1).to({alpha:0.244},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.454},0).wait(1).to({alpha:0.547},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.713},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.854},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.975},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-156.5,168,313);


(lib.mcStep1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_32 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32).wait(1));

	// Content
	this.instance = new lib.gfcStep1Content("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.9,51.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(1).to({regX:-8.1,regY:1.2,x:-9,y:52.7,alpha:0.137},0).wait(1).to({alpha:0.244},0).wait(1).to({alpha:0.326},0).wait(1).to({alpha:0.39},0).wait(1).to({alpha:0.439},0).wait(1).to({alpha:0.481},0).wait(1).to({alpha:0.519},0).wait(1).to({alpha:0.561},0).wait(1).to({alpha:0.61},0).wait(1).to({alpha:0.674},0).wait(1).to({alpha:0.756},0).wait(1).to({alpha:0.863},0).wait(1).to({alpha:1},0).wait(1));

	// Title
	this.instance_1 = new lib.gfcStep1Title("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-12.6,-16.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(1).to({regX:-1.6,regY:0.4,x:-14.2,y:-15.9,alpha:0.113},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.327},0).wait(1).to({alpha:0.427},0).wait(1).to({alpha:0.523},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.703},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.865},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// bg
	this.instance_2 = new lib.gfcStep1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.127},0).wait(1).to({alpha:0.244},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.454},0).wait(1).to({alpha:0.547},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.713},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.854},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.975},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-156.5,168,313);


(lib.btnArrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gfcArrow("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-28,28,56);


// stage content:
(lib.workplace_document_creation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.btnTo2.addEventListener("click", content1.bind(this));
		
		function content1() {
			this.play(2);
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		this.btnTo3.addEventListener("click", content2.bind(this));
		
		function content2() {
			this.play(3);
		}
	}
	this.frame_2 = function() {
		this.stop();
		
		this.btnTo4.addEventListener("click", content2.bind(this));
		
		function content2() {
			this.play(4);
		}
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// BtnTo4
	this.btnTo4 = new lib.btnArrow();
	this.btnTo4.parent = this;
	this.btnTo4.setTransform(605,199);
	this.btnTo4._off = true;
	new cjs.ButtonHelper(this.btnTo4, 0, 1, 2, false, new lib.btnArrow(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnTo4).wait(2).to({_off:false},0).wait(2));

	// BtnTo3
	this.btnTo3 = new lib.btnArrow();
	this.btnTo3.parent = this;
	this.btnTo3.setTransform(400,199);
	this.btnTo3._off = true;
	new cjs.ButtonHelper(this.btnTo3, 0, 1, 2, false, new lib.btnArrow(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnTo3).wait(1).to({_off:false},0).wait(3));

	// BtnTo2
	this.btnTo2 = new lib.btnArrow();
	this.btnTo2.parent = this;
	this.btnTo2.setTransform(194,199);
	new cjs.ButtonHelper(this.btnTo2, 0, 1, 2, false, new lib.btnArrow(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnTo2).wait(4));

	// Step4
	this.step4 = new lib.mcStep4();
	this.step4.parent = this;
	this.step4.setTransform(708,169.5);
	this.step4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.step4).wait(3).to({_off:false},0).wait(1));

	// Step3
	this.step3 = new lib.mcStep3();
	this.step3.parent = this;
	this.step3.setTransform(502,169.5);
	this.step3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.step3).wait(2).to({_off:false},0).wait(2));

	// Step2
	this.step2 = new lib.mcStep2();
	this.step2.parent = this;
	this.step2.setTransform(297,169.5);
	this.step2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.step2).wait(1).to({_off:false},0).wait(3));

	// Step1
	this.step1 = new lib.mcStep1();
	this.step1.parent = this;
	this.step1.setTransform(91,169.5);

	this.timeline.addTween(cjs.Tween.get(this.step1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(407,183,201,313);
// library properties:
lib.properties = {
	width: 800,
	height: 340,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/arrow.png", id:"arrow"},
		{src:"images/step1.png", id:"step1"},
		{src:"images/step2.png", id:"step2"},
		{src:"images/step3.png", id:"step3"},
		{src:"images/step4.png", id:"step4"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
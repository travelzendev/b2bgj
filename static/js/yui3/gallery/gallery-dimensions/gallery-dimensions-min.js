YUI.add("gallery-dimensions",function(d){var b=null,c=["marginLeft","borderLeftWidth","paddingLeft","paddingRight","borderRightWidth","marginRight"],a=["marginTop","borderTopWidth","paddingTop","paddingBottom","borderBottomWidth","marginBottom"];d.Node.emToPx=function(e){if(!b){b=d.config.doc.createElement("div");b.style.position="absolute";b.style.top="-10000px";b.style.left="-10000px";b.style.visibility="hidden";b.style.width="10em";b.style.height="10em";d.config.doc.body.appendChild(b);}return(e||1)*(b.offsetWidth/10);};d.Node.prototype.totalWidth=function(){return this._node.offsetWidth+this.parseDimensionStyle("marginLeft")+this.parseDimensionStyle("marginRight");};d.Node.prototype.totalHeight=function(){return this._node.offsetHeight+this.parseDimensionStyle("marginTop")+this.parseDimensionStyle("marginBottom");};d.Node.prototype.insideWidth=function(){return this._node.clientWidth-this.parseDimensionStyle("paddingLeft")-this.parseDimensionStyle("paddingRight");};d.Node.prototype.insideHeight=function(){return this._node.clientHeight-this.parseDimensionStyle("paddingTop")-this.parseDimensionStyle("paddingBottom");};d.Node.prototype.horizMarginBorderPadding=function(){return d.Array.reduce(c,0,function(e,f){return e+this.parseDimensionStyle(f);},this);};d.Node.prototype.vertMarginBorderPadding=function(){return d.Array.reduce(a,0,function(f,e){return f+this.parseDimensionStyle(e);},this);};d.Node.prototype.parseDimensionStyle=function(g){var f=this.getComputedStyle(g);if(!f||!/^[0-9]/.test(f)){return 0;}var e=parseFloat(f,10);if(/em$/.test(f)){e*=d.Node.emToPx(1);}return Math.round(e);};},"gallery-2012.05.16-20-37",{requires:["node-style","array-extras"]});
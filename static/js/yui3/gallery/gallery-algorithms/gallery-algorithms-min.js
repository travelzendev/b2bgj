YUI.add("gallery-algorithms",function(c){c.Array.swap=function(g,f,d){var e=g[f];g[f]=g[d];g[d]=e;};c.Array.compareStringsCaseSensitive=function(e,d){if(e==d){return 0;}else{return(e<d?-1:+1);}};c.Array.compareStringsCaseInsensitive=function(e,d){return c.Array.compareStringsCaseSensitive(e.toLowerCase(),d.toLowerCase());};c.Array.compareForFind=function(d){return function(f,e){return(d(f,e)===0);};};function b(j,h,g,d){var e,f,i,l,o,p,k=true;if(!d){d=c.Array.compareStringsCaseSensitive;}l=Math.floor((h+g)/2);e=l;i=e--;o=j[i];while(e>=h&&k){f=e--;k=(d(o,j[f])===0);}e=l+1;while(e<=g&&k){f=e++;k=(d(o,j[f])===0);}if(k){return -1;}if(d(j[f],o)>0){i=f;o=j[i];}e=h;f=g;while(e<=f){while(d(o,j[e])>0){e++;}while(d(o,j[f])<=0){f--;}if(e<f){p=j[f];j[f]=j[e];j[e]=p;f--;e++;}}return e;}function a(g,h,e,f){var d;if(h<e){d=b(g,h,e,f);if(d!=-1){a(g,h,d-1,f);a(g,d,e,f);}}}c.Array.quickSort=function(e,d){a(e,0,e.length-1,d);};c.Array.binarySearch=function(i,h,e){if(!i||!i.length||c.Lang.isUndefined(h)){return null;}if(!e){e=c.Array.compareStringsCaseSensitive;}var k=0;var g=i.length-1;var f;while(k<=g){var l=(k+g)/2;var d=(l<1)?0:parseInt(l,10);var j=e(i[d],h);if(j<0){k=d+1;continue;}if(j>0){g=d-1;continue;}if(j===0){g=d-1;f=d;continue;}return d;}return(c.Lang.isUndefined(f)?-1:f);};if(c.ArrayList){c.mix(c.ArrayList,{swap:function(e,d){c.Array.swap(this._items,e,d);},setComparator:function(d){this._compare=d;},quickSort:function(){c.Array.quickSort(this._items,this._compare);},binarySearch:function(d){c.Array.binarySearch(this._items,d,this._compare);}});}},"gallery-2012.05.16-20-37",{optional:["collection"]});
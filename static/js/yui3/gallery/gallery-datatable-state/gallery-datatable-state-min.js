YUI.add("gallery-datatable-state",function(a){function i(j){i.superclass.constructor.call(this,j);}i.NAME="DataTableStatePlugin";i.NS="state";i.ATTRS={uniqueIdKey:{validator:a.Lang.isString},save:{value:[],validator:a.Lang.isArray},paginator:{validator:function(j){return(!j||a.Lang.isObject(j));}}};function d(j,k){delete k[j];}function f(j){a.each(this.state,a.bind(d,null,j));}function e(){var j=this.get("host")._displayColumns;a.each(this.get("save"),function(k){k.column_index=a.Array.findIndexOf(j,function(l){return l.key===k.column;});if(k.column_index<0){f.call(this,k.column);}},this);}function b(){var k=this.get("host");var j=k.data.size();var l=this.get("uniqueIdKey");a.each(this.get("save"),function(p){if(p.column_index<0){return;}for(var n=0;n<j;n++){var r=null;var m=k.getCell([n,p.column_index]);if(m){if(p.node){var o=m.one(p.node);if(o){r=o.get(p.key);}}else{if(p.widget){var q=a.Widget.getByNode(m.one(p.widget));if(q){r=q.get(p.key);}}}}var s=k.getRecord(n);var t=s.get(l);if(!this.state[t]){this.state[t]={};}this.state[t][p.column]=r;}},this);}function c(){var k=this.get("host");var j=k.data.size();var l=this.get("uniqueIdKey");a.each(this.get("save"),function(p){if(p.column_index<0){return;}for(var n=0;n<j;n++){var t=k.getRecord(n);var s=this.state[t.get(l)];if(s){var r=s[p.column];var m=k.getCell([n,p.column_index]);if(m){if(p.node){var o=m.one(p.node);if(o){o.set(p.key,r);}}else{if(p.widget){var q=a.Widget.getByNode(m.one(p.widget));if(q){q.set(p.key,r);}}}}}}},this);}function g(){a.each(this.get("save"),function(j){if(j.column_index<0||j.temp){f.call(this,j.column);}},this);}function h(j){j.on("datatable-state-paginator|changeRequest",g,this);}a.extend(i,a.Plugin.Base,{initializer:function(k){this.state={};this.on("uniqueIdKeyChange",function(){this.state={};});if(k.paginator){h.call(this,k.paginator);}this.on("paginatorChange",function(n){a.detach("datatable-state-paginator|*");if(n.newVal){h.call(this,n.newVal);}});e.call(this);this.after("saveChange",e);this.afterHostEvent("columnsChange",e);var l=this.get("host");var j=this;var m=this.orig_syncUI=l.syncUI;l.syncUI=function(){b.call(j);m.apply(l,arguments);c.call(j);};this.onHostEvent("dataChange",b);this.afterHostEvent("dataChange",function(){a.later(0,this,c);});},destructor:function(){this.get("host").syncUI=this.orig_syncUI;},getState:function(){b.call(this);return this.state;}});a.namespace("Plugin");a.Plugin.DataTableState=i;},"gallery-2012.05.23-19-56",{requires:["datatable","plugin","gallery-funcprog","gallery-node-optimizations"]});
﻿
var PageName = '客户组维护';
var PageId = '7b076e458911472db23a21f197443fe2'
var PageUrl = '客户组维护.html'
document.title = '客户组维护';
var PageNotes = 
{
"pageName":"客户组维护",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '31');
  value = value.replace(/\[\[GenMonth\]\]/g, '7');
  value = value.replace(/\[\[GenMonthName\]\]/g, '七月');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, '星期二');
  value = value.replace(/\[\[GenYear\]\]/g, '2012');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u21 = document.getElementById('u21');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u25 = document.getElementById('u25');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u46 = document.getElementById('u46');

var u38 = document.getElementById('u38');

var u32 = document.getElementById('u32');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u62 = document.getElementById('u62');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u68 = document.getElementById('u68');

var u30 = document.getElementById('u30');

var u8 = document.getElementById('u8');

var u60 = document.getElementById('u60');

var u34 = document.getElementById('u34');

var u17 = document.getElementById('u17');

var u64 = document.getElementById('u64');

var u19 = document.getElementById('u19');

var u58 = document.getElementById('u58');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u15 = document.getElementById('u15');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u36 = document.getElementById('u36');

var u66 = document.getElementById('u66');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u40 = document.getElementById('u40');

var u2 = document.getElementById('u2');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u13 = document.getElementById('u13');

var u52 = document.getElementById('u52');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u0 = document.getElementById('u0');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u50 = document.getElementById('u50');

var u28 = document.getElementById('u28');

var u24 = document.getElementById('u24');

var u54 = document.getElementById('u54');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u4 = document.getElementById('u4');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u26 = document.getElementById('u26');

var u48 = document.getElementById('u48');

var u56 = document.getElementById('u56');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u42 = document.getElementById('u42');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u72 = document.getElementById('u72');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u6 = document.getElementById('u6');

var u70 = document.getElementById('u70');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u44 = document.getElementById('u44');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
if (window.OnLoad) OnLoad();

﻿
var PageName = '退改签公告';
var PageId = 'a700c55d043047d29ee4d54359349e07'
var PageUrl = '退改签公告.html'
document.title = '退改签公告';
var PageNotes = 
{
"pageName":"退改签公告",
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

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u122 = document.getElementById('u122');

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u32 = document.getElementById('u32');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u130 = document.getElementById('u130');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u2 = document.getElementById('u2');

var u79 = document.getElementById('u79');

var u150 = document.getElementById('u150');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u140 = document.getElementById('u140');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u42 = document.getElementById('u42');

var u159 = document.getElementById('u159');

var u55 = document.getElementById('u55');

var u101 = document.getElementById('u101');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u14 = document.getElementById('u14');

var u48 = document.getElementById('u48');

var u105 = document.getElementById('u105');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u138 = document.getElementById('u138');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u20 = document.getElementById('u20');

var u67 = document.getElementById('u67');

var u65 = document.getElementById('u65');

var u120 = document.getElementById('u120');

var u152 = document.getElementById('u152');

var u110 = document.getElementById('u110');

var u6 = document.getElementById('u6');

var u108 = document.getElementById('u108');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u34 = document.getElementById('u34');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u89 = document.getElementById('u89');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u185 = document.getElementById('u185');

var u161 = document.getElementById('u161');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u103 = document.getElementById('u103');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u99 = document.getElementById('u99');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u112 = document.getElementById('u112');

var u44 = document.getElementById('u44');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u179 = document.getElementById('u179');

var u57 = document.getElementById('u57');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u16 = document.getElementById('u16');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u189 = document.getElementById('u189');

var u38 = document.getElementById('u38');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u26 = document.getElementById('u26');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u128 = document.getElementById('u128');

var u85 = document.getElementById('u85');

var u51 = document.getElementById('u51');

var u191 = document.getElementById('u191');

var u10 = document.getElementById('u10');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u144 = document.getElementById('u144');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u75 = document.getElementById('u75');

var u30 = document.getElementById('u30');

var u95 = document.getElementById('u95');

var u61 = document.getElementById('u61');

var u195 = document.getElementById('u195');

var u116 = document.getElementById('u116');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u114 = document.getElementById('u114');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u157 = document.getElementById('u157');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u46 = document.getElementById('u46');

var u126 = document.getElementById('u126');

var u71 = document.getElementById('u71');

var u181 = document.getElementById('u181');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u169 = document.getElementById('u169');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u187 = document.getElementById('u187');

var u142 = document.getElementById('u142');

var u106 = document.getElementById('u106');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u154 = document.getElementById('u154');

var u40 = document.getElementById('u40');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');

var u193 = document.getElementById('u193');

var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u155 = document.getElementById('u155');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u50 = document.getElementById('u50');

var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u134 = document.getElementById('u134');

var u81 = document.getElementById('u81');

var u177 = document.getElementById('u177');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u4 = document.getElementById('u4');

var u73 = document.getElementById('u73');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u173 = document.getElementById('u173');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u163 = document.getElementById('u163');

var u91 = document.getElementById('u91');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u24 = document.getElementById('u24');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u132 = document.getElementById('u132');

var u175 = document.getElementById('u175');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u183 = document.getElementById('u183');

var u36 = document.getElementById('u36');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u171 = document.getElementById('u171');

var u0 = document.getElementById('u0');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u83 = document.getElementById('u83');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u8 = document.getElementById('u8');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u146 = document.getElementById('u146');

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u124 = document.getElementById('u124');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u148 = document.getElementById('u148');

var u93 = document.getElementById('u93');

var u167 = document.getElementById('u167');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u12 = document.getElementById('u12');

var u165 = document.getElementById('u165');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u59 = document.getElementById('u59');

var u118 = document.getElementById('u118');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u18 = document.getElementById('u18');

var u136 = document.getElementById('u136');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u77 = document.getElementById('u77');

var u22 = document.getElementById('u22');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u69 = document.getElementById('u69');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u28 = document.getElementById('u28');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
if (window.OnLoad) OnLoad();

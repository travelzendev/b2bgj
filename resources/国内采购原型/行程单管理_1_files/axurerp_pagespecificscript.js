﻿
var PageName = '行程单管理';
var PageId = 'd11af43985244a6e9da1b5269c9efb9b'
var PageUrl = '行程单管理_1.html'
document.title = '行程单管理';
var PageNotes = 
{
"pageName":"行程单管理",
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

var u167 = document.getElementById('u167');

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'top';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u97 = document.getElementById('u97');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u231 = document.getElementById('u231');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u139 = document.getElementById('u139');

var u201 = document.getElementById('u201');

var u95 = document.getElementById('u95');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u215 = document.getElementById('u215');

var u193 = document.getElementById('u193');

var u11 = document.getElementById('u11');

var u151 = document.getElementById('u151');

var u71 = document.getElementById('u71');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u165 = document.getElementById('u165');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u302 = document.getElementById('u302');

var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u67 = document.getElementById('u67');

var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u65 = document.getElementById('u65');

var u318 = document.getElementById('u318');

var u113 = document.getElementById('u113');

var u268 = document.getElementById('u268');

var u227 = document.getElementById('u227');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u159 = document.getElementById('u159');

var u163 = document.getElementById('u163');

var u300 = document.getElementById('u300');

var u63 = document.getElementById('u63');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');

var u93 = document.getElementById('u93');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'top';
var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'center';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u79 = document.getElementById('u79');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u55 = document.getElementById('u55');

var u149 = document.getElementById('u149');

var u111 = document.getElementById('u111');

var u306 = document.getElementById('u306');

var u284 = document.getElementById('u284');

var u125 = document.getElementById('u125');

var u161 = document.getElementById('u161');

var u175 = document.getElementById('u175');

var u229 = document.getElementById('u229');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'top';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u241 = document.getElementById('u241');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'top';
var u8 = document.getElementById('u8');

var u49 = document.getElementById('u49');

var u25 = document.getElementById('u25');

var u81 = document.getElementById('u81');

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u304 = document.getElementById('u304');

var u282 = document.getElementById('u282');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u123 = document.getElementById('u123');

var u278 = document.getElementById('u278');

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u296 = document.getElementById('u296');

var u137 = document.getElementById('u137');

var u33 = document.getElementById('u33');

var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u173 = document.getElementById('u173');

var u99 = document.getElementById('u99');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'top';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'center';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'top';
var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u51 = document.getElementById('u51');

var u109 = document.getElementById('u109');

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u267 = document.getElementById('u267');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u280 = document.getElementById('u280');

var u121 = document.getElementById('u121');

var u316 = document.getElementById('u316');

var u294 = document.getElementById('u294');

var u135 = document.getElementById('u135');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u171 = document.getElementById('u171');

var u191 = document.getElementById('u191');

var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u239 = document.getElementById('u239');

var u263 = document.getElementById('u263');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u2 = document.getElementById('u2');

var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'top';
var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'top';
var u21 = document.getElementById('u21');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u251 = document.getElementById('u251');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u314 = document.getElementById('u314');

var u292 = document.getElementById('u292');

var u77 = document.getElementById('u77');

var u133 = document.getElementById('u133');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u147 = document.getElementById('u147');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u213 = document.getElementById('u213');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u119 = document.getElementById('u119');

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u277 = document.getElementById('u277');

var u47 = document.getElementById('u47');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u131 = document.getElementById('u131');

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'top';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u145 = document.getElementById('u145');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u262 = document.getElementById('u262');

var u276 = document.getElementById('u276');

var u89 = document.getElementById('u89');

var u249 = document.getElementById('u249');

var u211 = document.getElementById('u211');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u85 = document.getElementById('u85');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u261 = document.getElementById('u261');

var u43 = document.getElementById('u43');

var u275 = document.getElementById('u275');

var u17 = document.getElementById('u17');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'top';
var u107 = document.getElementById('u107');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u143 = document.getElementById('u143');

var u260 = document.getElementById('u260');

var u9 = document.getElementById('u9');

var u157 = document.getElementById('u157');

var u59 = document.getElementById('u59');

var u189 = document.getElementById('u189');

var u35 = document.getElementById('u35');

var u91 = document.getElementById('u91');

var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'top';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u223 = document.getElementById('u223');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u265 = document.getElementById('u265');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u237 = document.getElementById('u237');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u53 = document.getElementById('u53');

var u105 = document.getElementById('u105');

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u6 = document.getElementById('u6');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u29 = document.getElementById('u29');

var u61 = document.getElementById('u61');

var u209 = document.getElementById('u209');

var u272 = document.getElementById('u272');

var u141 = document.getElementById('u141');

var u19 = document.getElementById('u19');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u308 = document.getElementById('u308');

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u221 = document.getElementById('u221');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u235 = document.getElementById('u235');

var u13 = document.getElementById('u13');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u271 = document.getElementById('u271');

var u312 = document.getElementById('u312');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u103 = document.getElementById('u103');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u117 = document.getElementById('u117');

var u31 = document.getElementById('u31');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u73 = document.getElementById('u73');

var u270 = document.getElementById('u270');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u199 = document.getElementById('u199');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u322 = document.getElementById('u322');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u233 = document.getElementById('u233');

var u87 = document.getElementById('u87');

var u247 = document.getElementById('u247');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u101 = document.getElementById('u101');

var u0 = document.getElementById('u0');

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u115 = document.getElementById('u115');

var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'top';
var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u219 = document.getElementById('u219');

var u298 = document.getElementById('u298');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u57 = document.getElementById('u57');

var u169 = document.getElementById('u169');

var u290 = document.getElementById('u290');

var u187 = document.getElementById('u187');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u245 = document.getElementById('u245');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u75 = document.getElementById('u75');

var u286 = document.getElementById('u286');

var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'top';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u127 = document.getElementById('u127');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'top';
var u27 = document.getElementById('u27');

var u83 = document.getElementById('u83');

var u310 = document.getElementById('u310');

var u207 = document.getElementById('u207');

var u185 = document.getElementById('u185');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u324 = document.getElementById('u324');

var u243 = document.getElementById('u243');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u69 = document.getElementById('u69');

var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u45 = document.getElementById('u45');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'top';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u155 = document.getElementById('u155');

var u288 = document.getElementById('u288');

var u129 = document.getElementById('u129');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u205 = document.getElementById('u205');

var u183 = document.getElementById('u183');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u179 = document.getElementById('u179');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u197 = document.getElementById('u197');

var u39 = document.getElementById('u39');

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u15 = document.getElementById('u15');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u23 = document.getElementById('u23');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u264 = document.getElementById('u264');

var u203 = document.getElementById('u203');

var u181 = document.getElementById('u181');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u320 = document.getElementById('u320');

var u4 = document.getElementById('u4');

var u217 = document.getElementById('u217');

var u195 = document.getElementById('u195');

var u225 = document.getElementById('u225');

var u41 = document.getElementById('u41');

var u153 = document.getElementById('u153');

if (window.OnLoad) OnLoad();

(function(){var h={},mt={},c={id:"169609146ffe5972484b0957bd1b46d6",dm:["xbiquge.la"],js:"tongji.baidu.com/hm-web/js/",etrk:[],cetrk:[],cptrk:[],icon:'',ctrk:[],nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,kbtrk:0,pt:0,spa:0,oc:0,aet:'',hca:'33EFB4F618FE24C2',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var r=void 0,u=!0,v=null,w=!1;mt.cookie={};mt.cookie.set=function(a,b,g){var e;g.N&&(e=new Date,e.setTime(e.getTime()+g.N));document.cookie=a+"="+b+(g.domain?"; domain="+g.domain:"")+(g.path?"; path="+g.path:"")+(e?"; expires="+e.toGMTString():"")+(g.Gc?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:v};
mt.cookie.ac=function(a,b){try{var g="Hm_ck_"+ +new Date;mt.cookie.set(g,"is-cookie-enabled",{domain:a,path:b,N:r});var e="is-cookie-enabled"===mt.cookie.get(g)?"1":"0";mt.cookie.set(g,"",{domain:a,path:b,N:-1});return e}catch(d){return"0"}};mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.Ta=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.F=function(a){return mt.lang.d(a,"String")};mt.lang.isArray=function(a){return mt.lang.d(a,"Array")};
mt.lang.h=function(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a};mt.lang.trim=function(a){return a.replace(/^\s+|\s+$/g,"")};mt.lang.D=function(a,b){var g=w;if(a==v||!mt.lang.d(a,"Array")||b===r)return g;if(Array.prototype.indexOf)g=-1!==a.indexOf(b);else for(var e=0;e<a.length;e++)if(a[e]===b){g=u;break}return g};mt.url={};mt.url.j=function(a,b){var g=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return g?g[3]:v};
mt.url.Bc=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:v};mt.url.Gb=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):v};mt.url.Q=function(a){return(a=mt.url.Gb(a))?a.replace(/:\d+$/,""):a};mt.url.pa=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):v};mt.url.Ua=function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)};
mt.url.wa=function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var g=a.indexOf(b);return-1<g&&g+b.length===a.length};
(function(){var a=mt.lang,b=mt.url;mt.g={};mt.g.yb=function(a){return document.getElementById(a)};mt.g.na=function(a){if(!a)return v;try{a=String(a);if(0===a.indexOf("!HMCQ!"))return a;if(0===a.indexOf("!HMCC!"))return document.querySelector(a.substring(6,a.length));for(var e=a.split(">"),b=document.body,n=e.length-1;0<=n;n--)if(-1<e[n].indexOf("#")){var f=e[n].split("#")[1];(b=document.getElementById(f))||(b=document.getElementById(decodeURIComponent(f)));e=e.splice(n+1,e.length-(n+1));break}for(a=
0;b&&a<e.length;){var l=String(e[a]).toLowerCase();if(!("html"===l||"body"===l)){var n=0,q=e[a].match(/\[(\d+)\]/i),f=[];if(q)n=q[1]-1,l=l.split("[")[0];else if(1!==b.childNodes.length){for(var s=0,t=0,m=b.childNodes.length;t<m;t++){var x=b.childNodes[t];1===x.nodeType&&x.nodeName.toLowerCase()===l&&s++;if(1<s)return v}if(1!==s)return v}for(s=0;s<b.childNodes.length;s++)1===b.childNodes[s].nodeType&&b.childNodes[s].nodeName.toLowerCase()===l&&f.push(b.childNodes[s]);if(!f[n])return v;b=f[n]}a++}return b}catch(k){return v}};
mt.g.pa=function(a,e){var b=[],n=[];if(!a)return n;for(;a.parentNode!=v;){for(var f=0,l=0,q=a.parentNode.childNodes.length,s=0;s<q;s++){var t=a.parentNode.childNodes[s];if(t.nodeName===a.nodeName&&(f++,t===a&&(l=f),0<l&&1<f))break}if((q=""!==a.id)&&e){b.unshift("#"+encodeURIComponent(a.id));break}else q&&(q="#"+encodeURIComponent(a.id),q=0<b.length?q+">"+b.join(">"):q,n.push(q)),b.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+(1<f?"["+l+"]":""));a=a.parentNode}n.push(b.join(">"));return n};
mt.g.qa=function(a){return(a=mt.g.pa(a,u))&&a.length?String(a[0]):""};mt.g.Jb=function(a){return mt.g.pa(a,w)};mt.g.zb=function(a){var e;for(e="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==e)return a;return v};mt.g.Cb=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.g.Hb=function(a){var e={top:0,left:0};if(!a)return e;var b=mt.g.Cb(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(e=a.getBoundingClientRect());return{top:e.top+(window.pageYOffset||b.scrollTop)-
(b.clientTop||0),left:e.left+(window.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}};mt.g.getAttribute=function(a,e){var b=a.getAttribute&&a.getAttribute(e)||v;if(!b&&a.attributes&&a.attributes.length)for(var n=a.attributes,f=n.length,l=0;l<f;l++)n[l].nodeName===e&&(b=n[l].nodeValue);return b};mt.g.P=function(a){var b="document";a.tagName!==r&&(b=a.tagName);return b.toLowerCase()};mt.g.Nb=function(b){var e="";b.textContent?e=a.trim(b.textContent):b.innerText&&(e=a.trim(b.innerText));e&&(e=e.replace(/\s+/g,
" ").substring(0,255));return e};mt.g.O=function(g,e){var d;a.F(g)&&0===String(g).indexOf("!HMCQ!")?(d=String(g),d=b.j(document.location.href,d.substring(6,d.length))):a.F(g)||(d=mt.g.P(g),"input"===d&&e&&("button"===g.type||"submit"===g.type)?d=a.trim(g.value)||"":"input"===d&&!e&&"password"!==g.type?d=a.trim(g.value)||"":"img"===d?(d=mt.g.getAttribute,d=d(g,"alt")||d(g,"title")||d(g,"src")):d="body"===d||"html"===d?["(hm-default-content-for-",d,")"].join(""):mt.g.Nb(g));return String(d||"").substring(0,
255)};(function(){(mt.g.ec=function(){function a(){if(!a.ba){a.ba=u;for(var b=0,e=n.length;b<e;b++)n[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,1);return}a()}var d=w,n=[],f;document.addEventListener?f=function(){document.removeEventListener("DOMContentLoaded",f,w);a()}:document.attachEvent&&(f=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",f),a())});(function(){if(!d)if(d=u,"complete"===document.readyState)a.ba=u;
else if(document.addEventListener)document.addEventListener("DOMContentLoaded",f,w),window.addEventListener("load",a,w);else if(document.attachEvent){document.attachEvent("onreadystatechange",f);window.attachEvent("onload",a);var l=w;try{l=window.frameElement==v}catch(q){}document.documentElement.doScroll&&l&&b()}})();return function(b){a.ba?b():n.push(b)}}()).ba=w})();return mt.g})();mt.event={};
mt.event.e=function(a,b,g){a.attachEvent?a.attachEvent("on"+b,function(b){g.call(a,b)}):a.addEventListener&&a.addEventListener(b,g,w)};mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=w};
(function(){var a=mt.event;mt.f={};mt.f.Sa=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.f.Ac=function(){if(document.documentMode)return document.documentMode;var a=/msie (\d+\.\d+)/i.exec(navigator.userAgent);return a?+a[1]||0:0};mt.f.Dc=function(){try{return!!navigator.userAgent.match(/safari/i)&&!navigator.userAgent.match(/chrome/i)&&"undefined"!==typeof document.body.style.webkitFilter&&!window.chrome}catch(a){return w}};mt.f.cookieEnabled=navigator.cookieEnabled;mt.f.javaEnabled=navigator.javaEnabled();
mt.f.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.f.gc=(window.screen.width||0)+"x"+(window.screen.height||0);mt.f.colorDepth=window.screen.colorDepth||0;mt.f.Lb=function(){var a;a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.f.Pa=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.f.C=
function(){return mt.f.Lb()+mt.f.Pa()};mt.f.ib=0;mt.f.Pb=function(){var a=document;return parseInt(window.innerWidth||a.documentElement.clientWidth||a.body.offsetWidth||0,10)};mt.f.orientation=0;(function(){function b(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==r)&&(a=screen.orientation.angle);mt.f.orientation=a;mt.f.ib=mt.f.Pb()}b();a.e(window,"orientationchange",b)})();return mt.f})();mt.G={};
mt.G.parse=function(a){return(new Function("return ("+a+")"))()};
mt.G.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=g[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var g={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(e){switch(typeof e){case "undefined":return"undefined";case "number":return isFinite(e)?String(e):"null";case "string":return a(e);case "boolean":return String(e);
default:if(e===v)return"null";if(e instanceof Array){var d=["["],n=e.length,f,l,q;for(l=0;l<n;l++)switch(q=e[l],typeof q){case "undefined":case "function":case "unknown":break;default:f&&d.push(","),d.push(mt.G.stringify(q)),f=1}d.push("]");return d.join("")}if(e instanceof Date)return'"'+e.getFullYear()+"-"+b(e.getMonth()+1)+"-"+b(e.getDate())+"T"+b(e.getHours())+":"+b(e.getMinutes())+":"+b(e.getSeconds())+'"';f=["{"];l=mt.G.stringify;for(n in e)if(Object.prototype.hasOwnProperty.call(e,n))switch(q=
e[n],typeof q){case "undefined":case "unknown":case "function":break;default:d&&f.push(","),d=1,f.push(l(n)+":"+l(q))}f.push("}");return f.join("")}}}();mt.localStorage={};mt.localStorage.ga=function(){if(!mt.localStorage.l)try{mt.localStorage.l=document.createElement("input"),mt.localStorage.l.type="hidden",mt.localStorage.l.style.display="none",mt.localStorage.l.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)}catch(a){return w}return u};
mt.localStorage.set=function(a,b,g){var e=new Date;e.setTime(e.getTime()+g||31536E6);try{window.localStorage?(b=e.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.ga()&&(mt.localStorage.l.expires=e.toUTCString(),mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.setAttribute(a,b),mt.localStorage.l.save(document.location.hostname))}catch(d){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),g=a.substring(0,b)-0;if(g&&g>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.ga())try{return mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.getAttribute(a)}catch(e){}return v};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.ga())try{mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.removeAttribute(a),mt.localStorage.l.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){try{window.sessionStorage&&window.sessionStorage.setItem(a,b)}catch(g){}};
mt.sessionStorage.get=function(a){try{return window.sessionStorage?window.sessionStorage.getItem(a):v}catch(b){return v}};mt.sessionStorage.remove=function(a){try{window.sessionStorage&&window.sessionStorage.removeItem(a)}catch(b){}};mt.fb={};mt.fb.log=function(a,b){var g=new Image,e="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[e]=g;g.onload=function(){g.onload=v;g=window[e]=v;b&&b(a)};g.src=a};mt.gb={};
mt.gb.Ob=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(g){}return a};
h.A={Cc:"http://tongji.baidu.com/hm-web/welcome/ico",ab:"hm.baidu.com/hm.gif",ob:/^(tongji|hmcdn).baidu.com$/,rc:"tongji.baidu.com",Tb:"hmmd",Ub:"hmpl",uc:"utm_medium",Sb:"hmkw",wc:"utm_term",Qb:"hmci",tc:"utm_content",Vb:"hmsr",vc:"utm_source",Rb:"hmcu",sc:"utm_campaign",M:0,J:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",xa:"https:",Ec:0,yc:6E5,Fc:6E5,hc:5E3,zc:5,Ma:1024,xc:1,za:2147483647,hb:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn r ww p ct u tt".split(" "),
R:u,Ja:["a","input","button"],Ga:{id:"data-hm-id",W:"data-hm-class",V:"data-hm-xpath",content:"data-hm-content",da:"data-hm-tag",link:"data-hm-link"},Ia:"data-hm-enabled",Ha:"data-hm-disabled",dc:"https://hmcdn.baidu.com/static/tongji/plugins/",$a:["UrlChangeTracker","OcpcCbHm"]};(function(){var a={B:{},e:function(a,g){this.B[a]=this.B[a]||[];this.B[a].push(g)},K:function(a,g){this.B[a]=this.B[a]||[];for(var e=this.B[a].length,d=0;d<e;d++)this.B[a][d](g)}};return h.t=a})();
(function(){var a=mt.lang,b=/^https?:\/\//,g={Bb:function(a){var b;try{b=JSON.parse(decodeURIComponent(a[0]))}catch(n){}return b},Va:function(a,b){return g.Wa(h.c&&h.c.b&&h.c.b.u,a,b)||g.Wa(document.location.href,a,b)},Wa:function(a,d,n){if(a===r)return w;b.test(d)||(a=a.replace(b,""));d=d.replace(/\/$/,"");a=a.replace(/\/$/,"");n&&(a=a.replace(/^(https?:\/\/)?www\./,"$1"));return RegExp("^"+d.replace(/[?.+^${}()|[\]\\]/g,"\\$&").replace(/\*/g,".*")+"$").test(a)},Z:function(b,d){var n=g.Bb(b);if(!a.d(n,
"Undefined")){if(a.d(n,"Array")){for(var f=0;f<n.length;f++)if(g.Va(n[f],d))return u;return w}if(a.d(n,"Object")){var f=[],l;for(l in n)n.hasOwnProperty(l)&&g.Va(l,d)&&(f=f.concat(n[l]));return f}}}};return h.ka=g})();
(function(){function a(a,e){var d=document.createElement("script");d.charset="utf-8";b.d(e,"Function")&&(d.readyState?d.onreadystatechange=function(){if("loaded"===d.readyState||"complete"===d.readyState)d.onreadystatechange=v,e()}:d.onload=function(){e()});d.src=a;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(d,n)}var b=mt.lang;return h.load=a})();
(function(){var a=mt.url,b=mt.cookie,g=mt.localStorage,e=mt.sessionStorage,d={getData:function(a){try{return b.get(a)||e.get(a)||g.get(a)}catch(f){}},setData:function(a,f,l){try{b.set(a,f,{domain:d.$(),path:d.ma(),N:l}),l?g.set(a,f,l):e.set(a,f)}catch(q){}},removeData:function(a){try{b.set(a,"",{domain:d.$(),path:d.ma(),N:-1}),e.remove(a),g.remove(a)}catch(f){}},$:function(){for(var b=document.location.hostname,e=0,d=c.dm.length;e<d;e++)if(a.wa(b,c.dm[e]))return c.dm[e].replace(/(:\d+)?[/?#].*/,"");
return b},ma:function(){for(var b=0,e=c.dm.length;b<e;b++){var d=c.dm[b];if(-1<d.indexOf("/")&&a.Ua(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,"$1")+"/"}return"/"}};return h.X=d})();
(function(){var a=mt.lang,b=mt.G,g=h.X,e={pageview:{},session:{},autoEventTracking:{},customEvent:{},user:{}},d={user:1,session:2,pageview:3,autoEventTracking:3,customEvent:3,others:3},n=["session","user"],f="Hm_up_"+c.id,l={init:function(){l.Yb()},Yb:function(){try{var d=b.parse(decodeURIComponent(g.getData(f)));a.d(d,"Object")&&(e.user=d)}catch(s){}},s:function(a){var b={};e[a]!==r&&(b=e[a]);a=this.ra();for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);return a},ra:function(){for(var a={},b,d=n.length-
1;0<=d;d--){b=e[n[d]];for(var m in b)b.hasOwnProperty(m)&&(a[m]=b[m])}return a},setProperty:function(d,f,g){var m=e[d];if(a.d(m,"Object")&&a.d(f,"Object")){for(var x in f)if(f.hasOwnProperty(x)){var k=a.h(String(x));if(g||!/^_/.test(k)&&!/_$/.test(k)||/^(_iden|ei_|ec_|ex_|en_|et_|el_)$/.test(k)){var p=f[x];if(p==v)delete m[k];else{if(a.d(p,"Object")||a.d(p,"Array"))p=b.stringify(p);p=a.h(String(p));l.$b(d,k,p)&&(m[k]={value:p,scope:l.Oa(d)})}}}"user"===d&&l.Ba()}},n:function(b){b!==r&&("userId"===
b&&a.d(e.user,"Object")?(delete e.user.uid_,l.Ba()):"user"===b&&a.d(e.user,"Object")?(b=e.user.uid_,e.user=b===r?{}:{uid_:b},l.Ba()):e[b]!==r&&(e[b]={}))},Ba:function(){try{g.setData(f,encodeURIComponent(b.stringify(e.user)),c.age)}catch(a){}},$b:function(a,b,d){var m=u,f=e[a];if(256<encodeURIComponent(String(b)).length||256<encodeURIComponent(String(d)).length)m=w;else{var k=f[b];f[b]={value:d,scope:l.Oa(a)};a=l.I(l.s(a));2048<encodeURIComponent(a).length&&(k!==r?f[b]=k:delete f[b],m=w)}return m},
I:function(a){var b=[],e,m;for(m in a)a.hasOwnProperty(m)&&(e=[m,a[m].value],(1===a[m].scope||2===a[m].scope)&&e.push(a[m].scope),b.push(e.join("*")));return b.join("!")},Oa:function(a){a=d[a];return a!==r?a:d.others}};return h.L=l})();
(function(){var a=mt.g,b=mt.lang,g=h.t,e=h.ka,d=h.L,n=d.I;if(b.isArray(c.cptrk)&&0<c.cptrk.length){var f={Za:{},ea:{},init:function(){for(var a,d=e.Z(c.cptrk)||[],g=0;g<d.length;g++)if(a=d[g],a.a!==r&&b.d(a.a,"Object")){a=a.a;for(var n in a)a.hasOwnProperty(n)&&(f.ea[n]=String(a[n]))}},Ya:function(){var b,e,d;for(d in f.ea)if(f.ea.hasOwnProperty(d)&&f.Za[d]===r&&(b=f.ea[d],b=a.na(b)))e=e===r?{}:e,e[d]=a.O(b,w),f.Za[d]=u;return e},ta:function(){var a=f.Ya();a&&f.jc(a)},Xb:function(){"MutationObserver"in
window&&document.body?(new MutationObserver(f.ta)).observe(document.body,{childList:u,subtree:u}):window.setInterval(f.ta,15E3)},jc:function(a){if(b.d(a,"Object")){d.setProperty("pageview",a);a=h.c.b.p;var e=h.c.b.ep;h.c.b.et=9;h.c.b.ep="";h.c.b.p=n(d.s("pageview"));h.c.m();h.c.b.p=a;h.c.b.ep=e;d.n("pageview")}}};f.init();g.e("pv-b",function(){var a=f.Ya();a&&d.setProperty("pageview",a)});f.Xb();a.ec(f.ta)}})();
(function(){var a=mt.lang,b=mt.g,g=h.ka,e={Y:function(a,n){return function(f){var l=f.target||f.srcElement;if(l){var q=g.Z(n)||[],s=l.getAttribute(a.fa);f=f.clientX+":"+f.clientY;if(s&&s===f)l.removeAttribute(a.fa);else if(0<q.length&&(l=b.Jb(l))&&l.length)if(q=l.length,s=l[l.length-1],1E4>q*s.split(">").length)for(s=0;s<q;s++)e.eb(a,l[s]);else e.eb(a,s)}}},eb:function(b,e){for(var f={},g=String(e).split(">").length,q=0;q<g;q++)f[e]="",e=e.substring(0,e.lastIndexOf(">"));b&&(a.d(b,"Object")&&b.Ka)&&
b.Ka(f)},fc:function(a,b){return function(e){(e.target||e.srcElement).setAttribute(a.fa,e.clientX+":"+e.clientY);a&&a.o&&(b?a.o(b):a.o("#"+encodeURIComponent(this.id),e.type))}}};return h.ub=e})();
(function(){var a=mt.g,b=mt.event,g=mt.lang,e=h.A,d=h.ka,n=h.ub,f=h.L,l=f.I,q={fa:"HM_ce",jb:function(){if(c.cetrk&&0<c.cetrk.length){b.e(document,"click",n.Y(q,c.cetrk));for(var e=d.Z(c.cetrk)||[],f=0,m=e.length;f<m;f++){var g=e[f],k=g.p||"";-1===k.indexOf(">")&&(0===k.indexOf("#")&&(k=k.substring(1)),(k=a.yb(k))&&b.e(k,"click",n.fc(q,g)))}}},Ka:function(a){for(var b=d.Z(c.cetrk)||[],e=0;e<b.length;e++){var f=b[e],k=q.Eb(f.p,a);k&&q.o(f,k)}},Eb:function(a,b){a=String(a);if(0<a.indexOf("*")){var e=
RegExp("^"+a.replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\*/,"\\d+")+"$"),d;for(d in b)if(b.hasOwnProperty(d)&&e.test(d))return d;return v}return b.hasOwnProperty(a)?a:v},o:function(b,e){h.c.b.et=7;var d=b&&b.k||"",d=g.h(d),x={};if(b&&b.a&&g.d(b.a,"Object")){var k=b.a,p;for(p in k)if(k.hasOwnProperty(p)){var y=q.Kb(k[p]||"",e),y=y?a.O(y,w):"";x[p]=y}}x=q.Ab(x,e||b&&b.p);x._iden=d;f.setProperty("customEvent",x);h.c.b.ep="";h.c.b.p=l(f.s("customEvent"));h.c.m();h.c.b.p="";f.n("customEvent")},
Ab:function(b,d){var m=a.na(d),f=e.Ga;m&&(c.aet&&c.aet.length?(b.ei_=a.getAttribute(m,f.id)||a.getAttribute(m,"id")||"",b.ec_=a.getAttribute(m,f.W)||a.getAttribute(m,"class")||"",b.ex_=a.getAttribute(m,f.V)||a.qa(m),b.en_=a.getAttribute(m,f.content)||a.O(m,u),b.et_=a.getAttribute(m,f.da)||a.P(m),b.el_=a.getAttribute(m,f.link)||a.getAttribute(m,"href")||""):(b.ex_=a.getAttribute(m,f.V)||a.qa(m),b.en_=a.getAttribute(m,f.content)||a.O(m,u)));return b},Kb:function(b,e){b=String(b);e=String(e);if(0<b.indexOf("*")){var d=
/.*\[(\d+)\]$/.exec(e);b=b.replace("*",d?d[1]:"1")}return a.na(b)}};h.t.e("pv-b",q.jb);return q})();
(function(){var a=mt.lang,b=mt.g,g=mt.event,e=mt.f,d=h.A,n=h.t,f=h.L,l=f.I,q=+new Date,s=[],t={Y:function(){return function(e){if(h.c&&h.c.R&&c.aet&&c.aet.length){var f=e.target||e.srcElement;if(f){var k=h.c.Ja,p=b.getAttribute(f,d.Ia)!=v?u:w;if(b.getAttribute(f,d.Ha)==v)if(p)t.ha(t.oa(f,e));else{var g=b.P(f);if(a.D(k,"*")||a.D(k,g))t.ha(t.oa(f,e));else for(;f.parentNode!=v;){var p=f.parentNode,g=b.P(p),z="a"===g&&a.D(k,"a")?u:w,g="button"===g&&a.D(k,"button")?u:w,A=b.getAttribute(p,d.Ia)!=v?u:w;
if(b.getAttribute(p,d.Ha)==v&&(z||g||A)){t.ha(t.oa(p,e));break}f=f.parentNode}}}}}},oa:function(f,g){var k={},p=d.Ga;k.id=b.getAttribute(f,p.id)||b.getAttribute(f,"id")||"";k.W=b.getAttribute(f,p.W)||b.getAttribute(f,"class")||"";k.V=b.getAttribute(f,p.V)||b.qa(f);k.content=b.getAttribute(f,p.content)||b.O(f,u);k.da=b.getAttribute(f,p.da)||b.P(f);k.link=b.getAttribute(f,p.link)||b.getAttribute(f,"href")||"";k.type=g.type||"click";p=a.Ta(f.offsetTop)?f.offsetTop:0;"click"===g.type?p=e.Sa?g.clientY+
Math.max(document.documentElement.scrollTop,document.body.scrollTop):g.pageY:"touchend"===g.type&&(g.Xa&&g.Xa.changedTouches)&&(p=g.Xa.changedTouches[0].pageY);k.qc=p;p=this.Db(g);k.ya=p.ya||0;k.Aa=p.Aa||0;k.Fa=p.Fa||0;k.sa=p.sa||0;k.Da=p.Da||"b";return k},Db:function(f){var d=f.target||f.srcElement,k;if(e.Sa){var p=Math.max(document.documentElement.scrollTop,document.body.scrollTop);k=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);k=f.clientX+k;f=f.clientY+p}else k=f.pageX,
f=f.pageY;var g=p=0,z=0,A=0;if(d&&(p=d.offsetWidth||d.clientWidth,g=d.offsetHeight||d.clientHeight,A=b.Hb(d),z=A.left,A=A.top,a.d(d.getBBox,"Function")&&(g=d.getBBox(),p=g.width,g=g.height),"html"===(d.tagName||"").toLowerCase()))p=Math.max(p,d.clientWidth),g=Math.max(g,d.clientHeight);return{ya:Math.round(100*((k-z)/p)),Aa:Math.round(100*((f-A)/g)),Fa:p,sa:g,Da:("a"===(d.tagName||"").toLowerCase()?d:b.zb(d))?"a":"b"}},ha:function(b){var e=a.h;b=[+new Date-(h.c.S!==r?h.c.S:q),e(b.id),e(b.W),e(b.da),
e(b.V),e(b.link),e(b.content),b.type,b.qc,b.ya,b.Aa,b.Fa,b.sa,b.Da].join("*");t.ia(b);a.d(this.U(),"Function")&&this.U()()},ia:function(a){var b=d.Ma;a.length>b||(encodeURIComponent(s.join("!")+a).length>b&&0<s.length&&(t.o(s.join("!")),s=[]),s.push(a))},o:function(a){h.c.b.et=5;h.c.b.ep=a;f.setProperty("autoEventTracking",{view_h_:e.C()},u);h.c.b.p=l(f.s("autoEventTracking"));h.c.m();h.c.b.p="";f.setProperty("autoEventTracking",{view_h_:v},u)},U:function(){return function(){s&&s.length&&(t.o(s.join("!")),
s=[])}}};a.F(c.aet)&&""!==c.aet&&n.e("pv-b",function(){g.e(document,"click",t.Y());"ontouchend"in document&&g.e(window,"touchend",t.Y());g.e(window,"unload",t.U())});return t})();
(function(){var a=mt.lang,b=mt.event,g=mt.f,e=h.A,d=h.t,n=h.L,f=n.I,l=+new Date,q=[],s=v,t={mb:function(){a.F(c.aet)&&""!==c.aet&&setInterval(t.cb,e.hc)},cb:function(){var a=g.C();0<a-h.c.b.vl&&(h.c.b.vl=a)}},m={tb:function(){return function(){h.c&&(h.c.R&&c.aet&&c.aet.length)&&(window.clearTimeout(s),s=window.setTimeout(function(){m.lb(g.C())},150))}},lb:function(a){m.ia([+new Date-(h.c.S!==r?h.c.S:l),a].join("*"))},ia:function(a){if(encodeURIComponent(q.join("!")+a).length>e.Ma||3<q.length)m.o(q.join("!")),
q=[];q.push(a)},o:function(a){t.cb();h.c.b.et=6;h.c.b.vh=g.Pa();h.c.b.ep=a;n.setProperty("autoEventTracking",{view_h_:g.C()},u);h.c.b.p=f(n.s("autoEventTracking"));h.c.m();h.c.b.p="";n.setProperty("autoEventTracking",{view_h_:v},u)},U:function(){return function(){q&&q.length&&(m.o(q.join("!")),q=[])}}};a.F(c.aet)&&""!==c.aet&&d.e("pv-b",function(){b.e(window,"scroll",m.tb());b.e(window,"unload",m.U());t.mb()});return m})();
(function(){function a(){return function(){h.c.b.nv=0;h.c.b.st=4;h.c.b.et=3;h.c.b.ep=h.la.Ib()+","+h.la.Fb();h.c.b.hca=c.hca;h.c.m()}}function b(){clearTimeout(z);var a;p&&(a="visible"==document[p]);y&&(a=!document[y]);l="undefined"==typeof a?u:a;if((!f||!q)&&l&&s)k=u,m=+new Date;else if(f&&q&&(!l||!s))k=w,x+=+new Date-m;f=l;q=s;z=setTimeout(b,100)}function g(a){var b=document,p="";if(a in b)p=a;else for(var e=["webkit","ms","moz","o"],f=0;f<e.length;f++){var d=e[f]+a.charAt(0).toUpperCase()+a.slice(1);
if(d in b){p=d;break}}return p}function e(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))s="focus"==a.type||"focusin"==a.type?u:w,b()}var d=mt.event,n=h.t,f=u,l=u,q=u,s=u,t=+new Date,m=t,x=0,k=u,p=g("visibilityState"),y=g("hidden"),z;b();(function(){var a=p.replace(/[vV]isibilityState/,"visibilitychange");d.e(document,a,b);d.e(window,"pageshow",b);d.e(window,"pagehide",b);"object"==typeof document.onfocusin?(d.e(document,"focusin",e),d.e(document,"focusout",e)):(d.e(window,
"focus",e),d.e(window,"blur",e))})();h.la={Ib:function(){return+new Date-t},Fb:function(){return k?+new Date-m+x:x}};n.e("pv-b",function(){d.e(window,"unload",a())});n.e("duration-send",a());n.e("duration-done",function(){m=t=+new Date;x=0});return h.la})();
(function(){var a=mt.lang,b=h.A,g=h.load,e=h.X,d={Wb:function(d){if((window._dxt===r||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.c){var f=e.$();g([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(f)].join(""),d)}},pc:function(b){if(a.d(b,"String")||a.d(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.rb=d})();
(function(){function a(a,b,e,f){if(!(a===r||b===r||f===r)){if(""===a)return[b,e,f].join("*");a=String(a).split("!");for(var d,k=w,g=0;g<a.length;g++)if(d=a[g].split("*"),String(b)===d[0]){d[1]=e;d[2]=f;a[g]=d.join("*");k=u;break}k||a.push([b,e,f].join("*"));return a.join("!")}}function b(a){for(var f in a)if({}.hasOwnProperty.call(a,f)){var d=a[f];e.d(d,"Object")||e.d(d,"Array")?b(d):a[f]=String(d)}}var g=mt.url,e=mt.lang,d=mt.G,n=mt.f,f=h.A,l=h.t,q=h.rb,s=h.load,t=h.X,m=h.L,x=m.I,k={T:[],ca:0,va:w,
z:{Ea:"",page:""},init:function(){k.i=0;m.init();l.e("pv-b",function(){k.sb();k.vb()});l.e("pv-d",function(){k.wb();k.z.page=""});l.e("stag-b",function(){h.c.b.api=k.i||k.ca?k.i+"_"+k.ca:"";h.c.b.ct=[decodeURIComponent(t.getData("Hm_ct_"+c.id)||""),k.z.Ea,k.z.page].join("!")});l.e("stag-d",function(){h.c.b.api=0;k.i=0;k.ca=0})},sb:function(){var a=window._hmt||[];if(!a||e.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var p=arguments[b];
e.d(p,"Array")&&(a.cmd[a.id].push(p),"_setAccount"===p[0]&&(1<p.length&&/^[0-9a-f]{31,32}$/.test(p[1]))&&(p=p[1],a.id=p,a.cmd[p]=a.cmd[p]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},vb:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],e=/^_track(Event|MobConv|Order)$/,f=0,d=b.length;f<d;f++){var g=b[f];e.test(g[0])?k.T.push(g):k.Ca(g)}a.cmd[c.id]={push:k.Ca}},wb:function(){if(0<k.T.length)for(var a=0,b=k.T.length;a<b;a++)k.Ca(k.T[a]);k.T=v},Ca:function(a){var b=
a[0];if(k.hasOwnProperty(b)&&e.d(k[b],"Function"))k[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{31,32}$/.test(a[1])&&(k.i|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],w===a||u===a))k.i|=2,h.c.Qa=a},_trackPageview:function(a){1<a.length&&(a[1].charAt&&"/"===a[1].charAt(0))&&(k.i|=4,h.c.b.sn=h.c.Na(),h.c.b.et=0,h.c.b.ep="",h.c.b.vl=n.C(),h.c.b.kb=0,h.c.ua?(h.c.b.nv=0,h.c.b.st=4):h.c.ua=u,k.va||(h.c.b.su=h.c.b.u||document.location.href),h.c.b.u=f.protocol+"//"+document.location.host+
a[1],h.c.b.p=x(m.s("pageview")),h.c.m(),h.c.b.p="",h.c.S=+new Date,m.n("pageview"))},_trackEvent:function(a){2<a.length&&(k.i|=8,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=4,h.c.b.ep=e.h(a[1])+"*"+e.h(a[2])+(a[3]?"*"+e.h(a[3]):"")+(a[4]?"*"+e.h(a[4]):""),h.c.b.p=x(m.ra()),h.c.m(),h.c.b.p="")},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],f=a[4]||3;if(0<b&&6>b&&0<f&&4>f){k.ca++;for(var d=(h.c.b.cv||"*").split("!"),g=d.length;g<b-1;g++)d.push("*");d[b-1]=f+"*"+e.h(a[2])+"*"+e.h(a[3]);h.c.b.cv=d.join("!");
a=h.c.b.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?t.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):t.removeData("Hm_cv_"+c.id)}}},_setUserTag:function(b){if(!(3>b.length)){var f=e.h(b[1]);b=e.h(b[2]);if(f!==r&&b!==r){var d=decodeURIComponent(t.getData("Hm_ct_"+c.id)||""),d=a(d,f,1,b);t.setData("Hm_ct_"+c.id,encodeURIComponent(d),c.age)}}},_setVisitTag:function(b){if(!(3>b.length)){var f=e.h(b[1]);b=e.h(b[2]);if(f!==r&&b!==r){var d=k.z.Ea,d=a(d,f,2,b);k.z.Ea=d}}},_setPageTag:function(b){if(!(3>
b.length)){var d=e.h(b[1]);b=e.h(b[2]);if(d!==r&&b!==r){var f=k.z.page,f=a(f,d,3,b);k.z.page=f}}},_setReferrerOverride:function(a){1<a.length&&(a=a[1],e.d(a,"String")?(h.c.b.su="/"===a.charAt(0)?f.protocol+"//"+window.location.host+a:a,k.va=u):k.va=w)},_trackOrder:function(a){a=a[1];e.d(a,"Object")&&(b(a),k.i|=16,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=94,h.c.b.ep=d.stringify(a),h.c.b.p=x(m.ra()),h.c.m(),h.c.b.p="")},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])k.i|=
32,h.c.b.et=93,h.c.b.ep=a,h.c.m()},_setDataxId:function(a){a=a[1];q.Wb();q.pc(a)},_setUserId:function(a){a=a[1];if(a!==r&&(e.F(a)||e.Ta(a))){var b=m.s("user").uid_;if(!(b&&b.value===e.h(String(a)))){var b=h.c.b.p,f=h.c.b.ep;h.c.b.et=8;h.c.b.ep="";h.c.b.p="uid_*"+e.h(String(a));h.c.m();var d={};d.uid_=a;m.setProperty("user",d,u);h.c.b.p=b;h.c.b.ep=f}}},_clearUserId:function(a){1<a.length&&u===a[1]&&m.n("userId")},_setUserProperty:function(a){a=a[1];e.d(a,"Object")&&m.setProperty("user",a)},_clearUserProperty:function(a){1<
a.length&&u===a[1]&&m.n("user")},_setSessionProperty:function(a){a=a[1];e.d(a,"Object")&&m.setProperty("session",a)},_clearSessionProperty:function(a){1<a.length&&u===a[1]&&m.n("session")},_setPageviewProperty:function(a){a=a[1];e.d(a,"Object")&&m.setProperty("pageview",a)},_clearPageviewProperty:function(a){1<a.length&&u===a[1]&&m.n("pageview")},_setAutoEventTrackingProperty:function(a){a=a[1];e.d(a,"Object")&&m.setProperty("autoEventTracking",a)},_clearAutoEventTrackingProperty:function(a){1<a.length&&
u===a[1]&&m.n("autoEventTracking")},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],w===a||u===a))h.c.Ra=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],w===a||u===a))h.c.R=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.c.b.et=3,h.c.b.ep=a,h.c.m())):l.K("duration-send");l.K("duration-done")},_require:function(a){1<a.length&&(a=a[1],f.ob.test(g.Q(a))&&s(a))},_providePlugin:function(a){if(1<a.length){var b=window._hmt,d=a[1];a=a[2];if(e.D(f.$a,
d)&&e.d(a,"Function")&&(b.plugins=b.plugins||{},b.H=b.H||{},b.plugins[d]=a,b.w=b.w||[],a=b.w.slice(),d&&a.length&&a[0][1]===d))for(var g=0,k=a.length;g<k;g++){var l=a[g][2]||{};if(b.plugins[d]&&!b.H[d])b.H[d]=new b.plugins[d](l),b.w.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,d=a[1],g=a[2]||{};if(e.D(f.$a,d))if(b.plugins=b.plugins||{},b.H=b.H||{},b.plugins[d]&&!b.H[d])b.H[d]=new b.plugins[d](g);else{b.w=b.w||[];for(var g=0,l=b.w.length;g<l;g++)if(b.w[g][1]===
d)return;b.w.push(a);k._require([v,f.dc+d+".js"])}}},_trackCustomEvent:function(a){if(1<a.length){var b=a[1];a=a[2];e.d(a,"Object")||(a={});a._iden=b;m.setProperty("customEvent",a);h.c.b.et=7;h.c.b.ep="";h.c.b.p=x(m.s("customEvent"));h.c.m();h.c.b.p="";m.n("customEvent")}}};k.init();h.pb=k;return h.pb})();
(function(){var a=h.t;c.spa!==r&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]),a.e("pv-b",function(){""!==window.location.hash&&(h.c.b.u=window.location.href)}))})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=u,this.b={},this.Ra=this.Qa=u,this.R=k.R,this.Ja=d.F(c.aet)&&0<c.aet.length?c.aet.split(","):"",this.ua=w,this.init())}var b=mt.url,g=mt.fb,e=mt.gb,d=mt.lang,n=mt.cookie,f=mt.f,l=mt.sessionStorage,q=mt.G,s=mt.event,t=h.X,m=h.L,x=m.I,k=h.A,p=h.load,y=h.t;a.prototype={aa:function(a){for(var e=0;e<c.dm.length;e++)if(-1<c.dm[e].indexOf("/")){if(b.Ua(a,c.dm[e]))return u}else{var d=b.Q(a);if(d&&b.wa(d,
c.dm[e]))return u}return w},Mb:function(){if(!document.referrer)return k.J-k.M>c.vdur?1:4;var a=w;this.aa(document.referrer)&&this.aa(document.location.href)?a=u:(a=b.Q(document.referrer),a=b.wa(a||"",document.location.hostname));return a?k.J-k.M>c.vdur?1:4:3},mc:function(){var a,b,e,d,f,g;k.M=t.getData("Hm_lpvt_"+c.id)||0;13===k.M.length&&(k.M=Math.round(k.M/1E3));b=this.Mb();a=4!==b?1:0;if(g=t.getData("Hm_lvt_"+c.id)){d=g.split(",");for(f=d.length-1;0<=f;f--)13===d[f].length&&(d[f]=""+Math.round(d[f]/
1E3));for(;2592E3<k.J-d[0];)d.shift();f=4>d.length?2:3;for(1===a&&d.push(k.J);4<d.length;)d.shift();g=d.join(",");d=d[d.length-1]}else g=k.J,d="",f=1;this.Zb()?(t.setData("Hm_lvt_"+c.id,g,c.age),t.setData("Hm_lpvt_"+c.id,k.J),e=n.ac(t.$(),t.ma())):this.xb();if(0===c.nv&&this.aa(document.location.href)&&(""===document.referrer||this.aa(document.referrer)))a=0,b=4;this.b.nv=a;this.b.st=b;this.b.cc=e;this.b.lt=d;this.b.lv=f},Zb:function(){var a=b.Q(document.location.href);return!d.D("sjh.baidu.com isite.baidu.com ls.wejianzhan.com bs.wejianzhan.com product.weijianzhan.com qianhu.weijianzhan.com aisite.wejianzhan.com".split(" "),
a)},xb:function(){for(var a=document.cookie.split(";"),b=0;b<a.length;b++){var d=a[b].split("=");d.length&&/Hm_(up|ct|cv|lp?vt)_[0-9a-f]{31}/.test(String(d[0]))&&t.removeData(d[0]);d.length&&/Hm_ck_[0-9]{13}/.test(String(d[0]))&&t.removeData(d[0])}},lc:function(){for(var a=[],b=this.b.et,d=0,e=k.hb.length;d<e;d++){var f=k.hb[d],g=this.b[f];"undefined"!==typeof g&&""!==g&&("tt"!==f||"tt"===f&&0===b)&&("ct"!==f||"ct"===f&&0===b)&&a.push(f+"="+encodeURIComponent(g))}return a.join("&")},nc:function(){this.mc();
this.b.si=c.id;this.b.sn=this.Na();this.b.su=document.referrer;this.b.ds=f.gc;this.b.cl=f.colorDepth+"-bit";this.b.ln=String(f.language).toLowerCase();this.b.ja=f.javaEnabled?1:0;this.b.ck=f.cookieEnabled?1:0;this.b.lo="number"===typeof _bdhm_top?1:0;this.b.fl=e.Ob();this.b.v="1.2.89";this.b.cv=decodeURIComponent(t.getData("Hm_cv_"+c.id)||"");this.b.tt=document.title||"";this.b.vl=f.C();var a=document.location.href;this.b.cm=b.j(a,k.Tb)||"";this.b.cp=b.j(a,k.Ub)||b.j(a,k.uc)||"";this.b.cw=b.j(a,k.Sb)||
b.j(a,k.wc)||"";this.b.ci=b.j(a,k.Qb)||b.j(a,k.tc)||"";this.b.cf=b.j(a,k.Vb)||b.j(a,k.vc)||"";this.b.cu=b.j(a,k.Rb)||b.j(a,k.sc)||"";/https?:/.test(document.location.protocol)&&(this.b.u=a)},init:function(){try{this.nc(),0===this.b.nv?this.kc():this.La(),h.c=this,this.qb(),this.bc(),y.K("pv-b"),this.ic()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));g.log(k.xa+"//"+k.ab+"?"+
b.join("&"))}},ic:function(){function a(){y.K("pv-d")}this.Qa?(this.ua=u,this.b.et=0,this.b.ep="",this.b.p=x(m.s("pageview")),this.b.vl=f.C(),this.m(a),this.b.p=""):a();this.S=+new Date;m.n("pageview")},m:function(a){if(this.Ra){var b=this;b.b.rnd=Math.round(Math.random()*k.za);b.b.r=f.orientation;b.b.ww=f.ib;y.K("stag-b");var e=k.xa+"//"+k.ab+"?"+b.lc();y.K("stag-d");b.nb(e);g.log(e,function(e){b.bb(e);d.d(a,"Function")&&a.call(b)})}},qb:function(){try{if(window.postMessage&&window.self!==window.parent){var a=
this;s.e(window,"message",function(d){if(b.Q(d.origin)===k.rc){d=d.data||{};var e=d.jn||"",f=/^customevent$|^heatmap$|^pageclick$|^select$/.test(e);if(RegExp(c.id).test(d.sd||"")&&f)a.b.rnd=Math.round(Math.random()*k.za),p(k.protocol+"//"+c.js+e+".js?"+a.b.rnd)}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"*")}}catch(d){}},bc:function(){try{if(window.self===window.parent){var a=document.location.href,d=b.j(a,"baidu-analytics-token"),e=b.j(a,"baidu-analytics-jn");
/^[a-f0-9]{32}\/?$/.test(d)&&/^overlay\/?$/.test(e)&&p(k.protocol+"//"+c.js+e+".js?"+Math.round(Math.random()*k.za))}}catch(f){}},nb:function(a){var b;try{b=q.parse(l.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}var e=this.b.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+e);l.set("Hm_unsent_"+c.id,q.stringify(b))},bb:function(a){var b;try{b=q.parse(l.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length){a=a.replace(/^https?:\/\//,"");for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,
"")===b[e].replace(/&u=[^&]*/,"")){b.splice(e,1);break}b.length?l.set("Hm_unsent_"+c.id,q.stringify(b)):this.La()}},La:function(){l.remove("Hm_unsent_"+c.id)},kc:function(){var a=this,b;try{b=q.parse(l.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length)for(var e=function(b){g.log(k.xa+"//"+b,function(b){a.bb(b)})},f=0;f<b.length;f++)e(b[f])},Na:function(){return Math.round(+new Date/1E3)%65535}};return new a})();var B=h.A,C=h.load;
c.pt&&C([B.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));})();

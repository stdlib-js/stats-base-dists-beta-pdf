// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,y=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,g,"$1."),t=l.call(t,y,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var N=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,a,o,f,c,s,l,p,v,g,y;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(t=r[s],"string"==typeof t)f+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,_(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,g=t.padRight,y=void 0,(y=v-p.length)<0?p:p=g?p+m(y):m(y)+p)),f+=t.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,n,t,i;for(n=[],i=0,t=S.exec(r);t;)(e=r.slice(i,S.lastIndex-t[0].length)).length&&n.push(e),n.push(k(t)),i=S.lastIndex,t=S.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function x(r){var e,n;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){return r!=r}var C=Number.POSITIVE_INFINITY,L=Number.NEGATIVE_INFINITY;function P(r){return r===C||r===L}function M(r){return Math.abs(r)}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Z=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"";var z=R&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Z.call(r);n=r[q],a=q,e=null!=(i=r)&&X.call(i,a);try{r[q]=void 0}catch(e){return Z.call(r)}return t=Z.call(r),e?r[q]=n:delete r[q],t}:function(r){return Z.call(r)},B="function"==typeof Uint32Array;var D="function"==typeof Uint32Array?Uint32Array:null;var J,K="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,e,n;if("function"!=typeof D)return!1;try{e=new D(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(B&&n instanceof Uint32Array||"[object Uint32Array]"===z(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q=J,rr="function"==typeof Float64Array;var er="function"==typeof Float64Array?Float64Array:null;var nr,tr="function"==typeof Float64Array?Float64Array:void 0;nr=function(){var r,e,n;if("function"!=typeof er)return!1;try{e=new er([1,3.14,-3.14,NaN]),n=e,r=(rr&&n instanceof Float64Array||"[object Float64Array]"===z(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var ir=nr,ar="function"==typeof Uint8Array;var or="function"==typeof Uint8Array?Uint8Array:null;var ur,fr="function"==typeof Uint8Array?Uint8Array:void 0;ur=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or(e=[1,3.14,-3.14,256,257]),n=e,r=(ar&&n instanceof Uint8Array||"[object Uint8Array]"===z(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr=ur,sr="function"==typeof Uint16Array;var lr="function"==typeof Uint16Array?Uint16Array:null;var pr,vr="function"==typeof Uint16Array?Uint16Array:void 0;pr=function(){var r,e,n;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(sr&&n instanceof Uint16Array||"[object Uint16Array]"===z(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var gr,yr={uint16:pr,uint8:cr};(gr=new yr.uint16(1))[0]=4660;var dr=52===new yr.uint8(gr.buffer)[0],hr=!0===dr?1:0,wr=new ir(1),br=new Q(wr.buffer);function mr(r){return wr[0]=r,br[hr]}var Nr=!0===dr?1:0,Ar=new ir(1),_r=new Q(Ar.buffer);function Er(r,e){return Ar[0]=r,_r[Nr]=e>>>0,Ar[0]}var Ur=1023;var Sr=.6931471803691238,kr=1.9082149292705877e-10,Ir=0x40000000000000,xr=.3333333333333333,Fr=1048575,jr=2146435072,Tr=1048576,Or=1072693248;function Vr(r){var e,n,t,i,a,o,u,f,c,s,l,p;return 0===r?L:W(r)||r<0?NaN:(a=0,(n=mr(r))<Tr&&(a-=54,n=mr(r*=Ir)),n>=jr?r+r:(a+=(n>>20)-Ur|0,a+=(f=(n&=Fr)+614244&1048576|0)>>20|0,u=(r=Er(r,n|f^Or))-1,(Fr&2+n)<3?0===u?0===a?0:a*Sr+a*kr:(o=u*u*(.5-xr*u),0===a?u-o:a*Sr-(o-a*kr-u)):(f=n-398458|0,c=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*Sr-(e-(s*(e+o)+a*kr)-u)):0===a?u-s*(u-o):a*Sr-(s*(u-o)-a*kr-u))))}var $r=Math.floor,Gr=Math.ceil;function Hr(r){return r<0?Gr(r):$r(r)}function Wr(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Cr=-.16666666666666632,Lr=.00833333333332249,Pr=-.0001984126982985795,Mr=27557313707070068e-22,Rr=-2.5050760253406863e-8,Zr=1.58969099521155e-10;function Xr(r,e){var n,t,i;return n=Lr+(i=r*r)*(Pr+i*Mr)+i*(i*i)*(Rr+i*Zr),t=i*r,0===e?r+t*(Cr+i*n):r-(i*(.5*e-t*n)-e-t*Cr)}var Yr,qr,zr=2147483647,Br=2146435072,Dr=1048575,Jr=!0===dr?0:1,Kr=new ir(1),Qr=new Q(Kr.buffer);!0===dr?(Yr=1,qr=0):(Yr=0,qr=1);var re={HIGH:Yr,LOW:qr},ee=new ir(1),ne=new Q(ee.buffer),te=re.HIGH,ie=re.LOW;function ae(r,e){return ne[te]=r,ne[ie]=e,ee[0]}var oe,ue,fe=1023,ce=-1023,se=-1074,le=2147483648;!0===dr?(oe=1,ue=0):(oe=0,ue=1);var pe={HIGH:oe,LOW:ue},ve=new ir(1),ge=new Q(ve.buffer),ye=pe.HIGH,de=pe.LOW;function he(r,e,n,t){return ve[0]=r,e[t]=ge[ye],e[t+n]=ge[de],e}function we(r){return he(r,[0,0],1,0)}H(we,"assign",he);var be=[0,0];function me(r,e){var n,t;return we.assign(r,be,1,0),n=be[0],n&=zr,t=mr(e),ae(n|=t&=le,be[1])}var Ne=22250738585072014e-324,Ae=4503599627370496;function _e(r,e,n,t){return W(r)||P(r)?(e[t]=r,e[t+n]=0,e):0!==r&&M(r)<Ne?(e[t]=r*Ae,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return _e(r,[0,0],1,0)}),"assign",_e);var Ee=2220446049250313e-31,Ue=2148532223,Se=[0,0],ke=[0,0];function Ie(r,e){var n,t;return 0===e||0===r||W(r)||P(r)?r:(_e(r,Se,1,0),r=Se[0],e+=Se[1],e+=function(r){var e=mr(r);return(e=(e&Br)>>>20)-Ur|0}(r),e<se?me(0,r):e>fe?r<0?L:C:(e<=ce?(e+=52,t=Ee):t=1,we.assign(r,ke,1,0),n=ke[0],n&=Ue,t*ae(n|=e+Ur<<20,ke[1])))}function xe(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var Fe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],je=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Te=16777216,Oe=5.960464477539063e-8,Ve=xe(20),$e=xe(20),Ge=xe(20),He=xe(20);function We(r,e,n,t,i,a,o,u,f){var c,s,l,p,v,g,y,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=Oe*h|0,He[v]=h-Te*s|0,h=t[d-1]+s,d-=1;if(h=Ie(h,i),h-=8*$r(.125*h),h-=y=0|h,l=0,i>0?(y+=v=He[n-1]>>24-i,He[n-1]-=v<<24-i,l=He[n-1]>>23-i):0===i?l=He[n-1]>>23:h>=.5&&(l=2),l>0){for(y+=1,c=0,v=0;v<n;v++)d=He[v],0===c?0!==d&&(c=1,He[v]=16777216-d):He[v]=16777215-d;if(i>0)switch(i){case 1:He[n-1]&=8388607;break;case 2:He[n-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=Ie(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=He[v];if(0===d){for(g=1;0===He[a-g];g++);for(v=n+1;v<=n+g;v++){for(f[u+v]=Fe[o+v],s=0,d=0;d<=u;d++)s+=r[d]*f[u+(v-d)];t[v]=s}return We(r,e,n+=g,t,i,a,o,u,f)}}if(0===h)for(n-=1,i-=24;0===He[n];)n-=1,i-=24;else(h=Ie(h,-i))>=Te?(s=Oe*h|0,He[n]=h-Te*s|0,i+=24,He[n+=1]=s):He[n]=0|h;for(s=Ie(1,i),v=n;v>=0;v--)t[v]=s*He[v],s*=Oe;for(v=n;v>=0;v--){for(s=0,g=0;g<=p&&g<=n-v;g++)s+=je[g]*t[v+g];Ge[n-v]=s}for(s=0,v=n;v>=0;v--)s+=Ge[v];for(e[0]=0===l?s:-s,s=Ge[0]-s,v=1;v<=n;v++)s+=Ge[v];return e[1]=0===l?s:-s,7&y}function Ce(r,e,n,t){var i,a,o,u,f,c,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)Ve[f]=c<0?0:Fe[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*Ve[o+(f-c)];$e[f]=i}return 4,We(r,e,4,$e,u,4,a,o,Ve)}var Le=Math.round,Pe=.6366197723675814,Me=1.5707963267341256,Re=6077100506506192e-26,Ze=6077100506303966e-26,Xe=20222662487959506e-37,Ye=20222662487111665e-37,qe=84784276603689e-45,ze=2047;function Be(r,e,n){var t,i,a,o,u;return a=r-(t=Le(r*Pe))*Me,o=t*Re,u=e>>20|0,n[0]=a-o,u-(mr(n[0])>>20&ze)>16&&(o=t*Xe-((i=a)-(a=i-(o=t*Ze))-o),n[0]=a-o,u-(mr(n[0])>>20&ze)>49&&(o=t*qe-((i=a)-(a=i-(o=t*Ye))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var De=0,Je=16777216,Ke=1.5707963267341256,Qe=6077100506506192e-26,rn=2*Qe,en=3*Qe,nn=4*Qe,tn=598523,an=1072243195,on=1073928572,un=1074752122,fn=1074977148,cn=1075183036,sn=1075388923,ln=1075594811,pn=1094263291,vn=[0,0,0],gn=[0,0];function yn(r,e){var n,t,i,a,o,u,f;if((i=mr(r)&zr|0)<=an)return e[0]=r,e[1]=0,0;if(i<=un)return(i&Dr)===tn?Be(r,i,e):i<=on?r>0?(f=r-Ke,e[0]=f-Qe,e[1]=f-e[0]-Qe,1):(f=r+Ke,e[0]=f+Qe,e[1]=f-e[0]+Qe,-1):r>0?(f=r-2*Ke,e[0]=f-rn,e[1]=f-e[0]-rn,2):(f=r+2*Ke,e[0]=f+rn,e[1]=f-e[0]+rn,-2);if(i<=ln)return i<=cn?i===fn?Be(r,i,e):r>0?(f=r-3*Ke,e[0]=f-en,e[1]=f-e[0]-en,3):(f=r+3*Ke,e[0]=f+en,e[1]=f-e[0]+en,-3):i===sn?Be(r,i,e):r>0?(f=r-4*Ke,e[0]=f-nn,e[1]=f-e[0]-nn,4):(f=r+4*Ke,e[0]=f+nn,e[1]=f-e[0]+nn,-4);if(i<pn)return Be(r,i,e);if(i>=Br)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Kr[0]=r,Qr[Jr]}(r),f=ae(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)vn[o]=0|f,f=(f-vn[o])*Je;for(vn[2]=f,a=3;vn[a-1]===De;)a-=1;return u=Ce(vn,gn,t,a),r<0?(e[0]=-gn[0],e[1]=-gn[1],-u):(e[0]=gn[0],e[1]=gn[1],u)}var dn=[0,0],hn=2147483647,wn=1072243195,bn=1044381696,mn=2146435072;function Nn(r){var e;if(e=mr(r),(e&=hn)<=wn)return e<bn?1:Wr(r,0);if(e>=mn)return NaN;switch(3&yn(r,dn)){case 0:return Wr(dn[0],dn[1]);case 1:return-Xr(dn[0],dn[1]);case 2:return-Wr(dn[0],dn[1]);default:return Xr(dn[0],dn[1])}}var An=1072243195,_n=1045430272,En=[0,0];function Un(r){var e;if(e=mr(r),(e&=zr)<=An)return e<_n?r:Xr(r,0);if(e>=Br)return NaN;switch(3&yn(r,En)){case 0:return Xr(En[0],En[1]);case 1:return Wr(En[0],En[1]);case 2:return-Xr(En[0],En[1]);default:return-Wr(En[0],En[1])}}var Sn=3.141592653589793;var kn=.07721566490153287,In=.3224670334241136,xn=1,Fn=-.07721566490153287,jn=.48383612272381005,Tn=-.1475877229945939,On=.06462494023913339,Vn=-.07721566490153287,$n=1,Gn=.4189385332046727,Hn=1.4616321449683622,Wn=4503599627370496,Cn=0x400000000000000,Ln=8470329472543003e-37,Pn=1.4616321449683622,Mn=-.12148629053584961,Rn=-3638676997039505e-33;function Zn(r){var e,n,t,i,a,o,u,f,c,s,l,p,v;if(W(r)||P(r))return r;if(0===r)return C;if(r<0?(e=!0,r=-r):e=!1,r<Ln)return-Vr(r);if(e){if(r>=Wn)return C;if(c=function(r){var e,n;return W(r)||P(r)?NaN:0===(e=M(n=r%2))||1===e?me(0,n):e<.25?Un(Sn*n):e<.75?me(Nn(Sn*(e=.5-e)),n):e<1.25?(n=me(1,n)-n,Un(Sn*n)):e<1.75?-me(Nn(Sn*(e-=1.5)),n):(n-=me(2,n),Un(Sn*n))}(r),0===c)return C;n=Vr(Sn/M(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-Vr(r),r>=Hn-1+.27?(l=1-r,t=0):r>=Hn-1-.27?(l=r-(Pn-1),t=1):(l=r,t=2)):(v=0,r>=Hn+.27?(l=2-r,t=0):r>=Hn-.27?(l=r-Pn,t=1):(l=r-1,t=2)),t){case 0:o=kn+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(In+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(u=l*o+a)-.5*l;break;case 1:o=jn+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=Tn+s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s),i=On+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=Mn+(u=p*o-(Rn-s*(a+l*i)));break;case 2:o=l*(Vn+l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)),a=$n+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+o/a}else if(r<8)switch(u=(l=r-(t=Hr(r)))*(Fn+l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)),f=xn+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+u/f,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=Vr(p*=l+2)}else r<Cn?(c=Vr(r),s=Gn+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(c-1)+s):v=r*(Vr(r)-1);return e&&(v=n-v),v}var Xn=.6931471803691238,Yn=1.9082149292705877e-10,qn=.41421356237309503,zn=-.2928932188134525,Bn=1.862645149230957e-9,Dn=5551115123125783e-32,Jn=9007199254740992,Kn=.6666666666666666;function Qn(r){var e,n,t,i,a,o,u,f,c,s;if(r<-1||W(r))return NaN;if(-1===r)return L;if(r===C)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<qn){if(t<Bn)return t<Dn?r:r-r*r*.5;r>zn&&(s=0,i=r,n=1)}return 0!==s&&(t<Jn?(a=(s=((n=mr(c=1+r))>>20)-Ur)>0?1-(c-r):r-(c-1),a/=c):(s=((n=mr(c=r))>>20)-Ur,a=0),(n&=1048575)<434334?c=Er(c,1072693248|n):(s+=1,c=Er(c,1071644672|n),n=1048576-n>>2),i=c-1),e=.5*i*i,0===n?0===i?s*Xn+(a+=s*Yn):s*Xn-((f=e*(1-Kn*i))-(s*Yn+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(e-o*(e+f)):s*Xn-(e-(o*(e+f)+(s*Yn+a))-i))}function rt(r){return $r(r)===r}function et(r){return 0===r&&1/r===L}var nt=2.5066282746310007;function tt(r){return rt(r/2)}function it(r){return tt(r>0?r-1:r+1)}var at=Math.sqrt,ot=!0===dr?0:1,ut=new ir(1),ft=new Q(ut.buffer);function ct(r,e){return ut[0]=r,ft[ot]=e>>>0,ut[0]}function st(r){return 0|r}var lt=1072693247,pt=1e300,vt=1e-300;var gt=1048575,yt=1048576,dt=1072693248,ht=536870912,wt=524288,bt=20,mt=9007199254740992,Nt=.9617966939259756,At=.9617967009544373,_t=-7.028461650952758e-9,Et=[1,1.5],Ut=[0,.5849624872207642],St=[0,1.350039202129749e-8];var kt=1.4426950408889634,It=1.4426950216293335,xt=1.9259629911266175e-8;var Ft=.6931471805599453;var jt=1048576,Tt=1071644672,Ot=20,Vt=.6931471824645996,$t=-1.904654299957768e-9;var Gt=1072693247,Ht=1105199104,Wt=1139802112,Ct=1083179008,Lt=1072693248,Pt=1083231232,Mt=3230714880,Rt=31,Zt=1e300,Xt=1e-300,Yt=8008566259537294e-32,qt=[0,0],zt=[0,0];function Bt(r,e){var n,t,i,a,o,u,f,c,s,l,p,v,g,y;if(W(r)||W(e))return NaN;if(we.assign(e,qt,1,0),o=qt[0],0===qt[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return at(r);if(-.5===e)return 1/at(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(P(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:M(r)<1==(e===C)?0:C}(r,e)}if(we.assign(r,qt,1,0),a=qt[0],0===qt[1]){if(0===a)return function(r,e){return e===L?C:e===C?0:e>0?it(e)?r:0:it(e)?me(C,r):C}(r,e);if(1===r)return 1;if(-1===r&&it(e))return-1;if(P(r))return r===L?Bt(-0,-e):e<0?0:C}if(r<0&&!1===rt(e))return(r-r)/(r-r);if(i=M(r),n=a&zr|0,t=o&zr|0,f=o>>>Rt|0,u=(u=a>>>Rt|0)&&it(e)?-1:1,t>Ht){if(t>Wt)return function(r,e){return(mr(r)&zr)<=lt?e<0?pt*pt:vt*vt:e>0?pt*pt:vt*vt}(r,e);if(n<Gt)return 1===f?u*Zt*Zt:u*Xt*Xt;if(n>Lt)return 0===f?u*Zt*Zt:u*Xt*Xt;p=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*xt-a*kt)-((t=ct(t=(o=It*i)+u,0))-o),r[0]=t,r[1]=n,r}(zt,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v,g,y,d,h,w,b,m,N,A,_;return m=0,n<yt&&(m-=53,n=mr(e*=mt)),m+=(n>>bt)-Ur|0,n=(N=n&gt|0)|dt|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=yt),o=ct(i=(w=(e=Er(e,n))-(c=Et[A]))*(b=1/(e+c)),0),t=(n>>1|ht)+wt,f=Er(0,t+=A<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=ct(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),l=ct(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=At*l,y=(v=_t*l+(b-(l-w))*Nt+St[A])-((g=ct(g=p+v+(s=Ut[A])+(d=m),0))-d-s-p),r[0]=g,r[1]=y,r}(zt,i,n);if(v=(l=(e-(c=ct(e,0)))*p[0]+e*p[1])+(s=c*p[0]),we.assign(v,qt,1,0),g=st(qt[0]),y=st(qt[1]),g>=Ct){if(0!=(g-Ct|y))return u*Zt*Zt;if(l+Yt>v-s)return u*Zt*Zt}else if((g&zr)>=Pt){if(0!=(g-Mt|y))return u*Xt*Xt;if(l<=v-s)return u*Xt*Xt}return v=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&zr|0)>>Ot)-Ur|0,c=0,s>Tt&&(i=Er(0,((c=r+(jt>>l+1)>>>0)&~(Dr>>(l=((c&zr)>>Ot)-Ur|0)))>>>0),c=(c&Dr|jt)>>Ot-l>>>0,r<0&&(c=-c),e-=i),r=st(r=mr(f=1-((f=(a=(i=ct(i=n+e,0))*Vt)+(o=(n-(i-e))*Ft+i*$t))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Ot>>>0)>>Ot<=0?Ie(f,c):Er(f,r)}(g,s,l),u*v}var Dt=.6931471803691238,Jt=1.9082149292705877e-10,Kt=1.4426950408889634,Qt=709.782712893384,ri=-745.1332191019411,ei=1/(1<<28),ni=-ei;function ti(r){var e;return W(r)||r===C?r:r===L?0:r>Qt?C:r<ri?0:r>ni&&r<ei?1+r:function(r,e,n){var t,i,a,o;return Ie(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=Hr(r<0?Kt*r-.5:Kt*r+.5))*Dt,e*Jt,e)}var ii=143.01608;function ai(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=ti(r),n=r>ii?(t=Bt(r,.5*r-.25))*(t/n):Bt(r,r-.5)/n,nt*n*e}var oi=.5772156649015329;function ui(r,e){return e/((1+oi*r)*r)}function fi(r){var e,n,t,i;if(rt(r)&&r<0||r===L||W(r))return NaN;if(0===r)return et(r)?L:C;if(r>171.61447887182297)return C;if(r<-170.5674972726612)return 0;if((n=M(r))>33)return r>=0?ai(r):(e=0==(1&(t=$r(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*Un(Sn*i),e*Sn/(M(i)*ai(n)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return ui(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return ui(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(r-=2)}function ci(r,e){return W(r)||W(e)?NaN:r===C||e===C?C:r===e&&0===r?function(r){return 0===r&&1/r===C}(r)?r:e:r>e?r:e}var si=.9189385332046728,li=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],pi=li.length;var vi=94906265.62425156,gi=3745194030963158e291;function yi(r){return r<10?NaN:r>=gi?0:r<vi?function(r){var e,n,t,i,a;if(r<-1.1||r>1.1)return NaN;for(t=0,i=0,e=2*r,a=0;a<pi;a++)n=t,i=e*(t=i)-n+li[a];return.5*(i-n)}(2*Bt(10/r,2)-1)/r:1/(12*r)}function di(r,e){var n,t,i,a,o;return o=e,t=W(a=r)||W(o)?NaN:a===L||o===L?L:a===o&&0===a?et(a)?a:o:a<o?a:o,i=ci(r,e),t<0?NaN:0===t?C:i===C?L:t>=10?(n=yi(t)+yi(i)-yi(t+i),-.5*Vr(i)+si+n+(t-.5)*Vr(t/(t+i))+i*Qn(-t/(t+i))):i>=10?(n=yi(i)-yi(t+i),Zn(t)+n+t-t*Vr(t+i)+(i-.5)*Qn(-t/(t+i))):Vr(fi(t)*(fi(i)/fi(t+i)))}function hi(r,e,n){var t;return W(r)||W(e)||W(n)||e<=0||n<=0?NaN:r<0||r>1?0:0===r?e<1?C:e>1?0:n:1===r?n<1?C:n>1?0:e:(t=(e-1)*Vr(r),t+=(n-1)*Qn(-r),ti(t-=di(e,n)))}function wi(r,e){var n,t;return W(r)||W(e)||r<=0||e<=0?(t=NaN,function(){return t}):(n=di(r,e),function(t){var i;if(W(t))return NaN;if(t<0||t>1)return 0;if(0===t)return r<1?C:r>1?0:e;if(1===t)return e<1?C:e>1?0:r;return i=-n,i+=(r-1)*Vr(t),ti(i+=(e-1)*Qn(-t))})}H(hi,"factory",wi);export{hi as default,wi as factory};
//# sourceMappingURL=mod.js.map

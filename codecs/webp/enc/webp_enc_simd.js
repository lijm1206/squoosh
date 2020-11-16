
var webp_enc_simd = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(webp_enc_simd) {
  webp_enc_simd = webp_enc_simd || {};


var f;f||(f=typeof webp_enc_simd !== 'undefined' ? webp_enc_simd : {});var aa,ba;f.ready=new Promise(function(a,b){aa=a;ba=b});var r={},u;for(u in f)f.hasOwnProperty(u)&&(r[u]=f[u]);var w=!1,x=!1,ca=!1,da=!1;w="object"===typeof window;x="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!w&&!ca&&!x;var y="",A,B,ea,fa;
if(ca)y=x?require("path").dirname(y)+"/":__dirname+"/",A=function(a,b){ea||(ea=require("fs"));fa||(fa=require("path"));a=fa.normalize(a);return ea.readFileSync(a,b?null:"utf8")},B=function(a){a=A(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(a){throw a;}),process.on("unhandledRejection",C),f.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=
typeof read&&(A=function(a){return read(a)}),B=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(w||x)x?y=self.location.href:"undefined"!==typeof document&&document.currentScript&&(y=document.currentScript.src),_scriptDir&&(y=_scriptDir),0!==
y.indexOf("blob:")?y=y.substr(0,y.lastIndexOf("/")+1):y="",A=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},x&&(B=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});f.print||console.log.bind(console);var D=f.printErr||console.warn.bind(console);for(u in r)r.hasOwnProperty(u)&&(f[u]=r[u]);r=null;var E;f.wasmBinary&&(E=f.wasmBinary);var noExitRuntime;
f.noExitRuntime&&(noExitRuntime=f.noExitRuntime);"object"!==typeof WebAssembly&&C("no native wasm support detected");var G,ha=!1;function assert(a,b){a||C("Assertion failed: "+b)}var ia="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ka(a,b,c){var d=H;if(0<c){c=b+c-1;for(var e=0;e<a.length;++e){var g=a.charCodeAt(e);if(55296<=g&&57343>=g){var l=a.charCodeAt(++e);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}var la="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;
function ma(a,b){var c=a>>1;for(var d=c+b/2;!(c>=d)&&I[c];)++c;c<<=1;if(32<c-a&&la)return la.decode(H.subarray(a,c));c=0;for(d="";;){var e=J[a+2*c>>1];if(0==e||c==b/2)return d;++c;d+=String.fromCharCode(e)}}function na(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var e=0;e<c;++e)J[b>>1]=a.charCodeAt(e),b+=2;J[b>>1]=0;return b-d}function oa(a){return 2*a.length}
function pa(a,b){for(var c=0,d="";!(c>=b/4);){var e=K[a+4*c>>2];if(0==e)break;++c;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d}function qa(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var e=0;e<a.length;++e){var g=a.charCodeAt(e);if(55296<=g&&57343>=g){var l=a.charCodeAt(++e);g=65536+((g&1023)<<10)|l&1023}K[b>>2]=g;b+=4;if(b+4>c)break}K[b>>2]=0;return b-d}
function ra(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var L,sa,H,J,I,K,M,ta,ua;function va(a){L=a;f.HEAP8=sa=new Int8Array(a);f.HEAP16=J=new Int16Array(a);f.HEAP32=K=new Int32Array(a);f.HEAPU8=H=new Uint8Array(a);f.HEAPU16=I=new Uint16Array(a);f.HEAPU32=M=new Uint32Array(a);f.HEAPF32=ta=new Float32Array(a);f.HEAPF64=ua=new Float64Array(a)}var wa=f.INITIAL_MEMORY||16777216;f.wasmMemory?G=f.wasmMemory:G=new WebAssembly.Memory({initial:wa/65536,maximum:32768});
G&&(L=G.buffer);wa=L.byteLength;va(L);var N,xa=[],ya=[],za=[],Aa=[];function Ba(){var a=f.preRun.shift();xa.unshift(a)}var O=0,Ca=null,P=null;f.preloadedImages={};f.preloadedAudios={};function C(a){if(f.onAbort)f.onAbort(a);D(a);ha=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ba(a);throw a;}function Da(a){var b=Q;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ea(){return Da("data:application/octet-stream;base64,")}
var Q="webp_enc_simd.wasm";if(!Ea()){var Fa=Q;Q=f.locateFile?f.locateFile(Fa,y):y+Fa}function Ga(){try{if(E)return new Uint8Array(E);if(B)return B(Q);throw"both async and sync fetching of the wasm failed";}catch(a){C(a)}}function Ha(){return E||!w&&!x||"function"!==typeof fetch||Da("file://")?Promise.resolve().then(Ga):fetch(Q,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+Q+"'";return a.arrayBuffer()}).catch(function(){return Ga()})}
function Ia(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.M;"number"===typeof c?void 0===b.H?N.get(c)():N.get(c)(b.H):c(void 0===b.H?null:b.H)}}}var Ja={};function Ka(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function La(a){return this.fromWireType(M[a>>2])}var R={},S={},Ma={};function Na(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}
function Oa(a,b){a=Na(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}function Pa(a){var b=Error,c=Oa(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}
var Qa=void 0;function Ra(a,b,c){function d(k){k=c(k);if(k.length!==a.length)throw new Qa("Mismatched type converter count");for(var h=0;h<a.length;++h)T(a[h],k[h])}a.forEach(function(k){Ma[k]=b});var e=Array(b.length),g=[],l=0;b.forEach(function(k,h){S.hasOwnProperty(k)?e[h]=S[k]:(g.push(k),R.hasOwnProperty(k)||(R[k]=[]),R[k].push(function(){e[h]=S[k];++l;l===g.length&&d(e)}))});0===g.length&&d(e)}
function Sa(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ta=void 0;function U(a){for(var b="";H[a];)b+=Ta[H[a++]];return b}var Ua=void 0;function V(a){throw new Ua(a);}
function T(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||V('type "'+d+'" must have a positive integer typeid pointer');if(S.hasOwnProperty(a)){if(c.R)return;V("Cannot register type '"+d+"' twice")}S[a]=b;delete Ma[a];R.hasOwnProperty(a)&&(b=R[a],delete R[a],b.forEach(function(e){e()}))}var Va=[],W=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Wa(a){4<a&&0===--W[a].I&&(W[a]=void 0,Va.push(a))}function Xa(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Va.length?Va.pop():W.length;W[b]={I:1,value:a};return b}}
function Ya(a,b){var c=f;if(void 0===c[a].G){var d=c[a];c[a]=function(){c[a].G.hasOwnProperty(arguments.length)||V("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].G+")!");return c[a].G[arguments.length].apply(this,arguments)};c[a].G=[];c[a].G[d.K]=d}}
function Za(a,b,c){f.hasOwnProperty(a)?((void 0===c||void 0!==f[a].G&&void 0!==f[a].G[c])&&V("Cannot register public name '"+a+"' twice"),Ya(a,a),f.hasOwnProperty(c)&&V("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),f[a].G[c]=b):(f[a]=b,void 0!==c&&(f[a].Y=c))}
function $a(a,b,c){switch(b){case 0:return function(d){return this.fromWireType((c?sa:H)[d])};case 1:return function(d){return this.fromWireType((c?J:I)[d>>1])};case 2:return function(d){return this.fromWireType((c?K:M)[d>>2])};default:throw new TypeError("Unknown integer type: "+a);}}function ab(a){a=bb(a);var b=U(a);Y(a);return b}function cb(a,b){var c=S[a];void 0===c&&V(b+" has unknown type "+ab(a));return c}
function db(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function eb(a,b){switch(b){case 2:return function(c){return this.fromWireType(ta[c>>2])};case 3:return function(c){return this.fromWireType(ua[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function fb(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Oa(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}function gb(a,b){for(var c=[],d=0;d<a;d++)c.push(K[(b>>2)+d]);return c}
function hb(a,b){assert(0<=a.indexOf("j"),"getDynCaller should only be called with i64 sigs");var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];var e;-1!=a.indexOf("j")?e=c&&c.length?f["dynCall_"+a].apply(null,[b].concat(c)):f["dynCall_"+a].call(null,b):e=N.get(b).apply(null,c);return e}}function Z(a,b){a=U(a);var c=-1!=a.indexOf("j")?hb(a,b):N.get(b);"function"!==typeof c&&V("unknown function pointer with signature "+a+": "+b);return c}
var ib=void 0;function jb(a,b){function c(g){e[g]||S[g]||(Ma[g]?Ma[g].forEach(c):(d.push(g),e[g]=!0))}var d=[],e={};b.forEach(c);throw new ib(a+": "+d.map(ab).join([", "]));}function kb(a,b,c){switch(b){case 0:return c?function(d){return sa[d]}:function(d){return H[d]};case 1:return c?function(d){return J[d>>1]}:function(d){return I[d>>1]};case 2:return c?function(d){return K[d>>2]}:function(d){return M[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var lb={};
function mb(){return"object"===typeof globalThis?globalThis:Function("return this")()}var nb={};Qa=f.InternalError=Pa("InternalError");for(var ob=Array(256),pb=0;256>pb;++pb)ob[pb]=String.fromCharCode(pb);Ta=ob;Ua=f.BindingError=Pa("BindingError");f.count_emval_handles=function(){for(var a=0,b=5;b<W.length;++b)void 0!==W[b]&&++a;return a};f.get_first_emval=function(){for(var a=5;a<W.length;++a)if(void 0!==W[a])return W[a];return null};ib=f.UnboundTypeError=Pa("UnboundTypeError");ya.push({M:function(){qb()}});
var sb={x:function(){},m:function(a){var b=Ja[a];delete Ja[a];var c=b.S,d=b.T,e=b.J,g=e.map(function(l){return l.P}).concat(e.map(function(l){return l.V}));Ra([a],g,function(l){var k={};e.forEach(function(h,m){var q=l[m],n=h.N,t=h.O,v=l[m+e.length],p=h.U,ja=h.W;k[h.L]={read:function(z){return q.fromWireType(n(t,z))},write:function(z,F){var X=[];p(ja,z,v.toWireType(X,F));Ka(X)}}});return[{name:b.name,fromWireType:function(h){var m={},q;for(q in k)m[q]=k[q].read(h);d(h);return m},toWireType:function(h,
m){for(var q in k)if(!(q in m))throw new TypeError('Missing field:  "'+q+'"');var n=c();for(q in k)k[q].write(n,m[q]);null!==h&&h.push(d,n);return n},argPackAdvance:8,readValueFromPointer:La,F:d}]})},t:function(a,b,c,d,e){var g=Sa(c);b=U(b);T(a,{name:b,fromWireType:function(l){return!!l},toWireType:function(l,k){return k?d:e},argPackAdvance:8,readValueFromPointer:function(l){if(1===c)var k=sa;else if(2===c)k=J;else if(4===c)k=K;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(k[l>>
g])},F:null})},s:function(a,b){b=U(b);T(a,{name:b,fromWireType:function(c){var d=W[c].value;Wa(c);return d},toWireType:function(c,d){return Xa(d)},argPackAdvance:8,readValueFromPointer:La,F:null})},o:function(a,b,c,d){function e(){}c=Sa(c);b=U(b);e.values={};T(a,{name:b,constructor:e,fromWireType:function(g){return this.constructor.values[g]},toWireType:function(g,l){return l.value},argPackAdvance:8,readValueFromPointer:$a(b,c,d),F:null});Za(b,e)},f:function(a,b,c){var d=cb(a,"enum");b=U(b);a=d.constructor;
d=Object.create(d.constructor.prototype,{value:{value:c},constructor:{value:Oa(d.name+"_"+b,function(){})}});a.values[c]=d;a[b]=d},k:function(a,b,c){c=Sa(c);b=U(b);T(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,e){if("number"!==typeof e&&"boolean"!==typeof e)throw new TypeError('Cannot convert "'+db(e)+'" to '+this.name);return e},argPackAdvance:8,readValueFromPointer:eb(b,c),F:null})},i:function(a,b,c,d,e,g){var l=gb(b,c);a=U(a);e=Z(d,e);Za(a,function(){jb("Cannot call "+a+
" due to unbound types",l)},b-1);Ra([],l,function(k){var h=[k[0],null].concat(k.slice(1)),m=k=a,q=e,n=h.length;2>n&&V("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var t=null!==h[1]&&!1,v=!1,p=1;p<h.length;++p)if(null!==h[p]&&void 0===h[p].F){v=!0;break}var ja="void"!==h[0].name,z="",F="";for(p=0;p<n-2;++p)z+=(0!==p?", ":"")+"arg"+p,F+=(0!==p?", ":"")+"arg"+p+"Wired";m="return function "+Na(m)+"("+z+") {\nif (arguments.length !== "+(n-2)+") {\nthrowBindingError('function "+
m+" called with ' + arguments.length + ' arguments, expected "+(n-2)+" args!');\n}\n";v&&(m+="var destructors = [];\n");var X=v?"destructors":"null";z="throwBindingError invoker fn runDestructors retType classParam".split(" ");q=[V,q,g,Ka,h[0],h[1]];t&&(m+="var thisWired = classParam.toWireType("+X+", this);\n");for(p=0;p<n-2;++p)m+="var arg"+p+"Wired = argType"+p+".toWireType("+X+", arg"+p+"); // "+h[p+2].name+"\n",z.push("argType"+p),q.push(h[p+2]);t&&(F="thisWired"+(0<F.length?", ":"")+F);m+=(ja?
"var rv = ":"")+"invoker(fn"+(0<F.length?", ":"")+F+");\n";if(v)m+="runDestructors(destructors);\n";else for(p=t?1:2;p<h.length;++p)n=1===p?"thisWired":"arg"+(p-2)+"Wired",null!==h[p].F&&(m+=n+"_dtor("+n+"); // "+h[p].name+"\n",z.push(n+"_dtor"),q.push(h[p].F));ja&&(m+="var ret = retType.fromWireType(rv);\nreturn ret;\n");z.push(m+"}\n");h=fb(z).apply(null,q);p=b-1;if(!f.hasOwnProperty(k))throw new Qa("Replacing nonexistant public symbol");void 0!==f[k].G&&void 0!==p?f[k].G[p]=h:(f[k]=h,f[k].K=p);
return[]})},d:function(a,b,c,d,e){function g(m){return m}b=U(b);-1===e&&(e=4294967295);var l=Sa(c);if(0===d){var k=32-8*c;g=function(m){return m<<k>>>k}}var h=-1!=b.indexOf("unsigned");T(a,{name:b,fromWireType:g,toWireType:function(m,q){if("number"!==typeof q&&"boolean"!==typeof q)throw new TypeError('Cannot convert "'+db(q)+'" to '+this.name);if(q<d||q>e)throw new TypeError('Passing a number "'+db(q)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+
d+", "+e+"]!");return h?q>>>0:q|0},argPackAdvance:8,readValueFromPointer:kb(b,l,0!==d),F:null})},c:function(a,b,c){function d(g){g>>=2;var l=M;return new e(L,l[g+1],l[g])}var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=U(c);T(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{R:!0})},l:function(a,b){b=U(b);var c="std::string"===b;T(a,{name:b,fromWireType:function(d){var e=M[d>>2];if(c)for(var g=d+4,l=0;l<=e;++l){var k=d+4+l;
if(l==e||0==H[k]){if(g){var h=g;var m=H,q=h+(k-g);for(g=h;m[g]&&!(g>=q);)++g;if(16<g-h&&m.subarray&&ia)h=ia.decode(m.subarray(h,g));else{for(q="";h<g;){var n=m[h++];if(n&128){var t=m[h++]&63;if(192==(n&224))q+=String.fromCharCode((n&31)<<6|t);else{var v=m[h++]&63;n=224==(n&240)?(n&15)<<12|t<<6|v:(n&7)<<18|t<<12|v<<6|m[h++]&63;65536>n?q+=String.fromCharCode(n):(n-=65536,q+=String.fromCharCode(55296|n>>10,56320|n&1023))}}else q+=String.fromCharCode(n)}h=q}}else h="";if(void 0===p)var p=h;else p+=String.fromCharCode(0),
p+=h;g=k+1}}else{p=Array(e);for(l=0;l<e;++l)p[l]=String.fromCharCode(H[d+4+l]);p=p.join("")}Y(d);return p},toWireType:function(d,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var g="string"===typeof e;g||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||V("Cannot pass non-string to std::string");var l=(c&&g?function(){for(var m=0,q=0;q<e.length;++q){var n=e.charCodeAt(q);55296<=n&&57343>=n&&(n=65536+((n&1023)<<10)|e.charCodeAt(++q)&1023);127>=n?++m:m=2047>=n?m+
2:65535>=n?m+3:m+4}return m}:function(){return e.length})(),k=rb(4+l+1);M[k>>2]=l;if(c&&g)ka(e,k+4,l+1);else if(g)for(g=0;g<l;++g){var h=e.charCodeAt(g);255<h&&(Y(k),V("String has UTF-16 code units that do not fit in 8 bits"));H[k+4+g]=h}else for(g=0;g<l;++g)H[k+4+g]=e[g];null!==d&&d.push(Y,k);return k},argPackAdvance:8,readValueFromPointer:La,F:function(d){Y(d)}})},h:function(a,b,c){c=U(c);if(2===b){var d=ma;var e=na;var g=oa;var l=function(){return I};var k=1}else 4===b&&(d=pa,e=qa,g=ra,l=function(){return M},
k=2);T(a,{name:c,fromWireType:function(h){for(var m=M[h>>2],q=l(),n,t=h+4,v=0;v<=m;++v){var p=h+4+v*b;if(v==m||0==q[p>>k])t=d(t,p-t),void 0===n?n=t:(n+=String.fromCharCode(0),n+=t),t=p+b}Y(h);return n},toWireType:function(h,m){"string"!==typeof m&&V("Cannot pass non-string to C++ string type "+c);var q=g(m),n=rb(4+q+b);M[n>>2]=q>>k;e(m,n+4,q+b);null!==h&&h.push(Y,n);return n},argPackAdvance:8,readValueFromPointer:La,F:function(h){Y(h)}})},n:function(a,b,c,d,e,g){Ja[a]={name:U(b),S:Z(c,d),T:Z(e,g),
J:[]}},b:function(a,b,c,d,e,g,l,k,h,m){Ja[a].J.push({L:U(b),P:c,N:Z(d,e),O:g,V:l,U:Z(k,h),W:m})},u:function(a,b){b=U(b);T(a,{X:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},g:Wa,w:function(a){if(0===a)return Xa(mb());var b=lb[a];a=void 0===b?U(a):b;return Xa(mb()[a])},v:function(a){4<a&&(W[a].I+=1)},p:function(a,b,c,d){a||V("Cannot use deleted val. handle = "+a);a=W[a].value;var e=nb[b];if(!e){e="";for(var g=0;g<b;++g)e+=(0!==g?", ":"")+"arg"+g;var l="return function emval_allocator_"+
b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)l+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+g+'], "parameter '+g+'");\nvar arg'+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";e=(new Function("requireRegisteredType","Module","__emval_register",l+("var obj = new constructor("+e+");\nreturn __emval_register(obj);\n}\n")))(cb,f,Xa);nb[b]=e}return e(a,c,d)},j:function(){C()},r:function(a,b,c){H.copyWithin(a,b,b+c)},
e:function(a){a>>>=0;var b=H.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{G.grow(Math.min(2147483648,d)-L.byteLength+65535>>>16);va(G.buffer);var e=1;break a}catch(g){}e=void 0}if(e)return!0}return!1},a:G,q:function(){}};
(function(){function a(e){f.asm=e.exports;N=f.asm.y;O--;f.monitorRunDependencies&&f.monitorRunDependencies(O);0==O&&(null!==Ca&&(clearInterval(Ca),Ca=null),P&&(e=P,P=null,e()))}function b(e){a(e.instance)}function c(e){return Ha().then(function(g){return WebAssembly.instantiate(g,d)}).then(e,function(g){D("failed to asynchronously prepare wasm: "+g);C(g)})}var d={a:sb};O++;f.monitorRunDependencies&&f.monitorRunDependencies(O);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return D("Module.instantiateWasm callback failed with error: "+
e),!1}(function(){return E||"function"!==typeof WebAssembly.instantiateStreaming||Ea()||Da("file://")||"function"!==typeof fetch?c(b):fetch(Q,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(g){D("wasm streaming compile failed: "+g);D("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ba);return{}})();
var qb=f.___wasm_call_ctors=function(){return(qb=f.___wasm_call_ctors=f.asm.z).apply(null,arguments)},rb=f._malloc=function(){return(rb=f._malloc=f.asm.A).apply(null,arguments)},Y=f._free=function(){return(Y=f._free=f.asm.B).apply(null,arguments)},bb=f.___getTypeName=function(){return(bb=f.___getTypeName=f.asm.C).apply(null,arguments)};f.___embind_register_native_and_builtin_types=function(){return(f.___embind_register_native_and_builtin_types=f.asm.D).apply(null,arguments)};
f.dynCall_jiiii=function(){return(f.dynCall_jiiii=f.asm.E).apply(null,arguments)};var tb;P=function ub(){tb||vb();tb||(P=ub)};
function vb(){function a(){if(!tb&&(tb=!0,f.calledRun=!0,!ha)){Ia(ya);Ia(za);aa(f);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var b=f.postRun.shift();Aa.unshift(b)}Ia(Aa)}}if(!(0<O)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ba();Ia(xa);0<O||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);a()},1)):a())}}
f.run=vb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();noExitRuntime=!0;vb();


  return webp_enc_simd.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = webp_enc_simd;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return webp_enc_simd; });
    else if (typeof exports === 'object')
      exports["webp_enc_simd"] = webp_enc_simd;
    
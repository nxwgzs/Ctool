(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d3aa6c6"],{"0d4f":function(t,e,r){},"14b9":function(t,e,r){var n=r("5ca1");n(n.P,"String",{repeat:r("9744")})},"1e71":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Input",{staticClass:"auto-height-textarea",style:t.style,attrs:{type:"textarea",placeholder:t.placeholder},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})},i=[],a=(r("c5f6"),r("2ef0")),o=r.n(a),u={name:"autoHeightTextarea",props:{value:{type:[String,Number],default:""},placeholder:{type:String,default:""},height:{type:[String,Number],default:""}},data:function(){return{textarea:""}},computed:{style:function(){var t=[];return this.height&&t.push("height:".concat(this.height).concat(o.a.isNumber(this.height)?"px":"")),t.join(";")}},watch:{textarea:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){t!==this.textarea&&(this.textarea=t)}},created:function(){this.textarea=this.value}},c=u,l=(r("c703"),r("2877")),s=Object(l["a"])(c,n,i,!1,null,null,null);e["a"]=s.exports},4495:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("heightResize",{on:{resize:t.resize}},[r("Row",{attrs:{gutter:10}},[r("Col",{attrs:{span:"8"}},[r("input-block",{attrs:{top:"5px"}},[r("autoHeightTextarea",{attrs:{height:t.inputHeight,placeholder:t.$t("binary_input")},model:{value:t.current.input,callback:function(e){t.$set(t.current,"input",e)},expression:"current.input"}}),r("Select",{staticStyle:{width:"100px"},attrs:{slot:"extra"},slot:"extra",model:{value:t.current.length,callback:function(e){t.$set(t.current,"length",e)},expression:"current.length"}},[r("Option",{attrs:{value:8}},[t._v(t._s(t.$t("binary_length",[8])))]),r("Option",{attrs:{value:16}},[t._v(t._s(t.$t("binary_length",[16])))]),r("Option",{attrs:{value:32}},[t._v(t._s(t.$t("binary_length",[32])))])],1)],1)],1),r("Col",{attrs:{span:"16"}},[r("input-block",{attrs:{top:"5px",text:t.$t("binary_true_form")},on:{"on-default-right-bottom-click":function(){return t.copy(t.result("trueForm"))}}},[r("autoHeightTextarea",{staticStyle:{"margin-bottom":"10px"},attrs:{value:t.result("trueForm"),height:t.outputHeight,placeholder:t.$t("binary_true_form")}})],1),r("input-block",{attrs:{top:"5px",text:t.$t("binary_inverse")},on:{"on-default-right-bottom-click":function(){return t.copy(t.result("inverse"))}}},[r("autoHeightTextarea",{staticStyle:{"margin-bottom":"10px"},attrs:{value:t.result("inverse"),height:t.outputHeight,placeholder:t.$t("binary_inverse")}})],1),r("input-block",{attrs:{top:"5px",text:t.$t("binary_complement")},on:{"on-default-right-bottom-click":function(){return t.copy(t.result("complement"))}}},[r("autoHeightTextarea",{attrs:{value:t.result("complement"),height:t.outputHeight,placeholder:t.$t("binary_complement")}})],1)],1)],1)],1)},i=[],a=(r("ac6a"),r("ac4d"),r("8a81"),r("5df3"),r("1c4c"),r("7f7f"),r("6b54"),r("28a5"),r("6762"),r("2fdb"),r("d225")),o=r("b0b4");r("14b9");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:32,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return t.length<e?r+"0".repeat(e-1-t.length)+t:t}var c=function(){function t(e){Object(a["a"])(this,t),this.length=e}return Object(o["a"])(t,[{key:"getBinary",value:function(t){return Math.abs(parseInt(t)).toString(2)}},{key:"trueForm",value:function(t){var e=this.getBinary(t);return u(e,this.length,t>=0?0:1)}},{key:"inverse",value:function(t){var e=this.trueForm(t);if(t>=0)return e;for(var r="",n=0;n<this.length;n++){var i=e[n];r+=0===n?i:Math.abs(+i-1)}return r}},{key:"complement",value:function(t){var e=this.trueForm(t),r=this.inverse(t);if(t>=0)return e;var n=r.slice(1),i=parseInt(n,2)+1;return u(i.toString(2),this.length,1)}}]),t}(),l=function(t,e,r){if(!["trueForm","inverse","complement"].includes(r))throw new Error("type error");if(![8,16,32].includes(e))throw new Error("length error");if("0"===t||"+0"===t||"-0"===t)return"trueForm"===r?"-0"===t?("1"+Array(e).join("0")).slice(0,e-1):Array(e).join("0"):"inverse"===r?"-0"===t?Array(e).join("1"):Array(e).join("0"):"complement"===r?Array(e).join("0"):"";switch(t=parseInt(t),e){case 8:if(!(t>=-128&&t<=127))throw new Error("length:8 input:-128 ~ 127");break;case 16:if(!(t>=-32768&&t<=32767))throw new Error("length:16 input:-32768 ~ 32767");break;case 32:if(!(t>=-2147483648&&t<=2147483647))throw new Error("length:32 input:-2147483648 ~ 2147483647");break;default:throw new Error("length error")}var n=new c(e);switch(r){case"trueForm":return n.trueForm(t);case"inverse":return n.inverse(t);case"complement":return n.complement(t)}},s=r("738d"),f=r("1e71");function h(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=p(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){u=!0,a=t},f:function(){try{o||null==r.return||r.return()}finally{if(u)throw a}}}}function p(t,e){if(t){if("string"===typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var g={components:{heightResize:s["a"],autoHeightTextarea:f["a"]},created:function(){this.$initToolData("input",(function(t){return/^[\d\-+\n]+$/.test(t)}))},methods:{copy:function(t){t&&this.$clipboardCopy(t)},resize:function(t){this.inputHeight=t,this.outputHeight=Math.ceil((t-20)/3)},result:function(t){if(""===this.current.input.trim())return"";var e,r=[],n=h(this.current.input.trim().split("\n"));try{for(n.s();!(e=n.n()).done;){var i=e.value;try{r.push(l(i,this.current.length,t))}catch(a){r.push(this.$t("binary_error",[a.message]).toString())}}}catch(o){n.e(o)}finally{n.f()}return this.$saveToolData(this.current),r.join("\n")}},data:function(){return{current:{input:"",length:8},inputHeight:100,outputHeight:100}}},v=g,m=r("2877"),y=Object(m["a"])(v,n,i,!1,null,null,null);e["default"]=y.exports},"738d":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:"height:"+t.height},[t._t("default")],2)},i=[],a=(r("ac6a"),r("ac4d"),r("8a81"),r("5df3"),r("1c4c"),r("7f7f"),r("6b54"),r("6762"),r("2fdb"),r("c5f6"),r("a296"));function o(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=u(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){c=!0,a=t},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw a}}}}function u(t,e){if(t){if("string"===typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function l(t){var e=document.querySelector(t);if(null===e)return 0;var r=window.getComputedStyle(e),n=parseFloat(r["marginTop"])+parseFloat(r["marginBottom"]);return Math.ceil(e.offsetHeight+n)}var s={name:"heightResize",props:{append:{type:Array,default:function(){return[]}},reduce:{type:Number,default:0},remove:{type:Array,default:function(){return[]}},ignore:{type:Boolean,default:!1}},data:function(){return{height:"auto"}},methods:{reportWindowSize:function(){this.resize()},resize:function(){var t,e=this,r=window.innerHeight,n=[".tool-select-block",".tool-category-menu-block",".ctool-bottom"],i=n.filter((function(t){return!e.remove.includes(t)})).concat(this.append),a=o(i);try{for(a.s();!(t=a.n()).done;){var u=t.value;r-=l(u)}}catch(c){a.e(c)}finally{a.f()}this.reduce>0&&(r-=this.reduce),r>100&&(r-=5),this.ignore||(this.height=r+"px"),this.$emit("resize",r)}},destroyed:function(){window.removeEventListener("resize",this.reportWindowSize),window.removeEventListener(a["a"],this.reportWindowSize)},mounted:function(){window.addEventListener("resize",this.reportWindowSize),window.addEventListener(a["a"],this.reportWindowSize),this.resize()}},f=s,h=r("2877"),p=Object(h["a"])(f,n,i,!1,null,null,null);e["a"]=p.exports},9744:function(t,e,r){"use strict";var n=r("4588"),i=r("be13");t.exports=function(t){var e=String(i(this)),r="",a=n(t);if(a<0||a==1/0)throw RangeError("Count can't be negative");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(r+=e);return r}},aa77:function(t,e,r){var n=r("5ca1"),i=r("be13"),a=r("79e5"),o=r("fdef"),u="["+o+"]",c="​",l=RegExp("^"+u+u+"*"),s=RegExp(u+u+"*$"),f=function(t,e,r){var i={},u=a((function(){return!!o[t]()||c[t]()!=c})),l=i[t]=u?e(h):o[t];r&&(i[r]=l),n(n.P+n.F*u,"String",i)},h=f.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(s,"")),t};t.exports=f},c5f6:function(t,e,r){"use strict";var n=r("7726"),i=r("69a8"),a=r("2d95"),o=r("5dbc"),u=r("6a99"),c=r("79e5"),l=r("9093").f,s=r("11e9").f,f=r("86cc").f,h=r("aa77").trim,p="Number",d=n[p],g=d,v=d.prototype,m=a(r("2aeb")(v))==p,y="trim"in String.prototype,b=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():h(e,3);var r,n,i,a=e.charCodeAt(0);if(43===a||45===a){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var o,c=e.slice(2),l=0,s=c.length;l<s;l++)if(o=c.charCodeAt(l),o<48||o>i)return NaN;return parseInt(c,n)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof d&&(m?c((function(){v.valueOf.call(r)})):a(r)!=p)?o(new g(b(e)),r,d):b(e)};for(var w,x=r("9e1e")?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;x.length>S;S++)i(g,w=x[S])&&!i(d,w)&&f(d,w,s(g,w));d.prototype=v,v.constructor=d,r("2aba")(n,p,d)}},c703:function(t,e,r){"use strict";r("0d4f")},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
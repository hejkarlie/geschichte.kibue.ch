import{i as Oe,C as _e,F as qe,e as U,f as K,g as Ve,h as ne,j as We,m as Z,k as s,l as Je,p as Ue,q as Ke,S as G,s as Ze,v as Q,x as Ge,y as D,z as L,A as u,B as te,D as p,E as Qe,G as Xe,H as Ye,I as er,J as rr,K as h,L as or,M as ae,O as nr,P as X,Q as q,R as tr}from"./index-D9BhHX6m.js";const Y={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#0FF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000",blanchedalmond:"#FFEBCD",blue:"#00F",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#0FF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#F0F",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#0F0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#F0F",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#F00",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFF",whitesmoke:"#F5F5F5",yellow:"#FF0",yellowgreen:"#9ACD32",transparent:"#0000"};function ar(r,e,o){e/=100,o/=100;let n=(t,l=(t+r/60)%6)=>o-o*e*Math.max(Math.min(l,4-l,1),0);return[n(5)*255,n(3)*255,n(1)*255]}function lr(r,e,o){e/=100,o/=100;let n=e*Math.min(o,1-o),t=(l,c=(l+r/30)%12)=>o-n*Math.max(Math.min(c-3,9-c,1),-1);return[t(0)*255,t(8)*255,t(4)*255]}const y="^\\s*",$="\\s*$",B="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*",F="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",k="([0-9A-Fa-f])",R="([0-9A-Fa-f]{2})",le=new RegExp(`${y}hsl\\s*\\(${F},${B},${B}\\)${$}`),se=new RegExp(`${y}hsv\\s*\\(${F},${B},${B}\\)${$}`),ie=new RegExp(`${y}hsla\\s*\\(${F},${B},${B},${F}\\)${$}`),de=new RegExp(`${y}hsva\\s*\\(${F},${B},${B},${F}\\)${$}`),sr=new RegExp(`${y}rgb\\s*\\(${F},${F},${F}\\)${$}`),ir=new RegExp(`${y}rgba\\s*\\(${F},${F},${F},${F}\\)${$}`),dr=new RegExp(`${y}#${k}${k}${k}${$}`),cr=new RegExp(`${y}#${R}${R}${R}${$}`),ur=new RegExp(`${y}#${k}${k}${k}${k}${$}`),gr=new RegExp(`${y}#${R}${R}${R}${R}${$}`);function v(r){return parseInt(r,16)}function fr(r){try{let e;if(e=ie.exec(r))return[_(e[1]),E(e[5]),E(e[9]),z(e[13])];if(e=le.exec(r))return[_(e[1]),E(e[5]),E(e[9]),1];throw new Error(`[seemly/hsla]: Invalid color value ${r}.`)}catch(e){throw e}}function br(r){try{let e;if(e=de.exec(r))return[_(e[1]),E(e[5]),E(e[9]),z(e[13])];if(e=se.exec(r))return[_(e[1]),E(e[5]),E(e[9]),1];throw new Error(`[seemly/hsva]: Invalid color value ${r}.`)}catch(e){throw e}}function j(r){try{let e;if(e=cr.exec(r))return[v(e[1]),v(e[2]),v(e[3]),1];if(e=sr.exec(r))return[b(e[1]),b(e[5]),b(e[9]),1];if(e=ir.exec(r))return[b(e[1]),b(e[5]),b(e[9]),z(e[13])];if(e=dr.exec(r))return[v(e[1]+e[1]),v(e[2]+e[2]),v(e[3]+e[3]),1];if(e=gr.exec(r))return[v(e[1]),v(e[2]),v(e[3]),z(v(e[4])/255)];if(e=ur.exec(r))return[v(e[1]+e[1]),v(e[2]+e[2]),v(e[3]+e[3]),z(v(e[4]+e[4])/255)];if(r in Y)return j(Y[r]);if(le.test(r)||ie.test(r)){const[o,n,t,l]=fr(r);return[...lr(o,n,t),l]}else if(se.test(r)||de.test(r)){const[o,n,t,l]=br(r);return[...ar(o,n,t),l]}throw new Error(`[seemly/rgba]: Invalid color value ${r}.`)}catch(e){throw e}}function pr(r){return r>1?1:r<0?0:r}function hr(r,e,o,n){return`rgba(${b(r)}, ${b(e)}, ${b(o)}, ${pr(n)})`}function V(r,e,o,n,t){return b((r*e*(1-n)+o*n)/t)}function vr(r,e){Array.isArray(r)||(r=j(r)),Array.isArray(e)||(e=j(e));const o=r[3],n=e[3],t=z(o+n-o*n);return hr(V(r[0],o,e[0],n,t),V(r[1],o,e[1],n,t),V(r[2],o,e[2],n,t),t)}function O(r,e){const[o,n,t,l=1]=Array.isArray(r)?r:j(r),{lightness:c=1,alpha:m=1}=e;return mr([o*c,n*c,t*c,l*m])}function z(r){const e=Math.round(Number(r)*100)/100;return e>1?1:e<0?0:e}function _(r){const e=Math.round(Number(r));return e>=360||e<0?0:e}function b(r){const e=Math.round(Number(r));return e>255?255:e<0?0:e}function E(r){const e=Math.round(Number(r));return e>100?100:e<0?0:e}function mr(r){const[e,o,n]=r;return 3 in r?`rgba(${b(e)}, ${b(o)}, ${b(n)}, ${z(r[3])})`:`rgba(${b(e)}, ${b(o)}, ${b(n)}, 1)`}function Cr(r,e){throw new Error(`[naive/${r}]: ${e}`)}function ce(r,...e){if(Array.isArray(r))r.forEach(o=>ce(o,...e));else return r(...e)}function A(r){return r.some(e=>Oe(e)?!(e.type===_e||e.type===qe&&!A(e.children)):!0)?r:null}function I(r,e){const o=r&&A(r());return e(o||null)}function Fr(r,e,o,n){o||Cr("useThemeClass","cssVarsRef is not passed");const t=U(K,null),l=t?.mergedThemeHashRef,c=t?.styleMountTarget,m=Ve(""),g=ne();let i;const d=`__${r}`,x=()=>{let C=d;const S=e?e.value:void 0,H=l?.value;H&&(C+=`-${H}`),S&&(C+=`-${S}`);const{themeOverrides:M,builtinThemeOverrides:P}=n;M&&(C+=`-${Z(JSON.stringify(M))}`),P&&(C+=`-${Z(JSON.stringify(P))}`),m.value=C,i=()=>{const T=o.value;let w="";for(const N in T)w+=`${N}: ${T[N]};`;s(`.${C}`,w).mount({id:C,ssr:g,parent:c}),i=void 0}};return We(()=>{x()}),{themeClass:m,onRender:()=>{i?.()}}}var xr="[object Symbol]";function yr(r){return typeof r=="symbol"||Je(r)&&Ue(r)==xr}function $r(r,e){for(var o=-1,n=r==null?0:r.length,t=Array(n);++o<n;)t[o]=e(r[o],o,r);return t}var ee=G?G.prototype:void 0,re=ee?ee.toString:void 0;function ue(r){if(typeof r=="string")return r;if(Ke(r))return $r(r,ue)+"";if(yr(r))return re?re.call(r):"";var e=r+"";return e=="0"&&1/r==-1/0?"-0":e}function Sr(r){return r==null?"":ue(r)}function wr(r,e,o){var n=-1,t=r.length;e<0&&(e=-e>t?0:t+e),o=o>t?t:o,o<0&&(o+=t),t=e>o?0:o-e>>>0,e>>>=0;for(var l=Array(t);++n<t;)l[n]=r[n+e];return l}function Ar(r,e,o){var n=r.length;return o=o===void 0?n:o,!e&&o>=n?r:wr(r,e,o)}var Er="\\ud800-\\udfff",Br="\\u0300-\\u036f",Dr="\\ufe20-\\ufe2f",kr="\\u20d0-\\u20ff",Rr=Br+Dr+kr,zr="\\ufe0e\\ufe0f",Hr="\\u200d",Mr=RegExp("["+Hr+Er+Rr+zr+"]");function ge(r){return Mr.test(r)}function Pr(r){return r.split("")}var fe="\\ud800-\\udfff",Tr="\\u0300-\\u036f",Ir="\\ufe20-\\ufe2f",jr="\\u20d0-\\u20ff",Lr=Tr+Ir+jr,Nr="\\ufe0e\\ufe0f",Or="["+fe+"]",W="["+Lr+"]",J="\\ud83c[\\udffb-\\udfff]",_r="(?:"+W+"|"+J+")",be="[^"+fe+"]",pe="(?:\\ud83c[\\udde6-\\uddff]){2}",he="[\\ud800-\\udbff][\\udc00-\\udfff]",qr="\\u200d",ve=_r+"?",me="["+Nr+"]?",Vr="(?:"+qr+"(?:"+[be,pe,he].join("|")+")"+me+ve+")*",Wr=me+ve+Vr,Jr="(?:"+[be+W+"?",W,pe,he,Or].join("|")+")",Ur=RegExp(J+"(?="+J+")|"+Jr+Wr,"g");function Kr(r){return r.match(Ur)||[]}function Zr(r){return ge(r)?Kr(r):Pr(r)}function Gr(r){return function(e){e=Sr(e);var o=ge(e)?Zr(e):void 0,n=o?o[0]:e.charAt(0),t=o?Ar(o,1).join(""):e.slice(1);return n[r]()+t}}var Qr=Gr("toUpperCase");function Ce(r,e,o){if(!e)return;const n=ne(),t=U(K,null),l=()=>{const c=o.value;e.mount({id:c===void 0?r:c+r,head:!0,anchorMetaName:Q,props:{bPrefix:c?`.${c}-`:void 0},ssr:n,parent:t?.styleMountTarget}),t?.preflightStyleDisabled||Ge.mount({id:"n-global",head:!0,anchorMetaName:Q,ssr:n,parent:t?.styleMountTarget})};n?l():Ze(l)}const Xr=D("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[s("svg",`
 height: 1em;
 width: 1em;
 `)]),Yr=L({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(r){Ce("-base-icon",Xr,te(r,"clsPrefix"))},render(){return u("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});function eo(r,e){const o=L({render(){return e()}});return L({name:Qr(r),setup(){var n;const t=(n=U(K,null))===null||n===void 0?void 0:n.mergedIconsRef;return()=>{var l;const c=(l=t?.value)===null||l===void 0?void 0:l[r];return c?c():u(o,null)}}})}const ro=eo("close",()=>u("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},u("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},u("g",{fill:"currentColor","fill-rule":"nonzero"},u("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),oo=D("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[p("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),s("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),Qe("disabled",[s("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),s("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),s("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),s("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),s("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),p("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),p("round",[s("&::before",`
 border-radius: 50%;
 `)])]),no=L({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(r){return Ce("-base-close",oo,te(r,"clsPrefix")),()=>{const{clsPrefix:e,disabled:o,absolute:n,round:t,isButtonTag:l}=r;return u(l?"button":"div",{type:l?"button":void 0,tabindex:o||!r.focusable?-1:0,"aria-disabled":o,"aria-label":"close",role:l?void 0:"button",disabled:o,class:[`${e}-base-close`,n&&`${e}-base-close--absolute`,o&&`${e}-base-close--disabled`,t&&`${e}-base-close--round`],onMousedown:m=>{r.focusable||m.preventDefault()},onClick:r.onClick},u(Yr,{clsPrefix:e},{default:()=>u(ro,null)}))}}}),a={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaAvatar:"0.2",alphaProgressRail:".08",alphaInput:"0",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},to=j(a.neutralBase),Fe=j(a.neutralInvertBase),ao=`rgba(${Fe.slice(0,3).join(", ")}, `;function oe(r){return`${ao+String(r)})`}function f(r){const e=Array.from(Fe);return e[3]=Number(r),vr(to,e)}const lo=Object.assign(Object.assign({name:"common"},Xe),{baseColor:a.neutralBase,primaryColor:a.primaryDefault,primaryColorHover:a.primaryHover,primaryColorPressed:a.primaryActive,primaryColorSuppl:a.primarySuppl,infoColor:a.infoDefault,infoColorHover:a.infoHover,infoColorPressed:a.infoActive,infoColorSuppl:a.infoSuppl,successColor:a.successDefault,successColorHover:a.successHover,successColorPressed:a.successActive,successColorSuppl:a.successSuppl,warningColor:a.warningDefault,warningColorHover:a.warningHover,warningColorPressed:a.warningActive,warningColorSuppl:a.warningSuppl,errorColor:a.errorDefault,errorColorHover:a.errorHover,errorColorPressed:a.errorActive,errorColorSuppl:a.errorSuppl,textColorBase:a.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:f(a.alpha4),placeholderColor:f(a.alpha4),placeholderColorDisabled:f(a.alpha5),iconColor:f(a.alpha4),iconColorHover:O(f(a.alpha4),{lightness:.75}),iconColorPressed:O(f(a.alpha4),{lightness:.9}),iconColorDisabled:f(a.alpha5),opacity1:a.alpha1,opacity2:a.alpha2,opacity3:a.alpha3,opacity4:a.alpha4,opacity5:a.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:f(Number(a.alphaClose)),closeIconColorHover:f(Number(a.alphaClose)),closeIconColorPressed:f(Number(a.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:f(a.alpha4),clearColorHover:O(f(a.alpha4),{lightness:.75}),clearColorPressed:O(f(a.alpha4),{lightness:.9}),scrollbarColor:oe(a.alphaScrollbar),scrollbarColorHover:oe(a.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:f(a.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:a.neutralPopover,tableColor:a.neutralCard,cardColor:a.neutralCard,modalColor:a.neutralModal,bodyColor:a.neutralBody,tagColor:"#eee",avatarColor:f(a.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:f(a.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:a.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),so={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function io(r){const{primaryColor:e,borderRadius:o,lineHeight:n,fontSize:t,cardColor:l,textColor2:c,textColor1:m,dividerColor:g,fontWeightStrong:i,closeIconColor:d,closeIconColorHover:x,closeIconColorPressed:C,closeColorHover:S,closeColorPressed:H,modalColor:M,boxShadow1:P,popoverColor:T,actionColor:w}=r;return Object.assign(Object.assign({},so),{lineHeight:n,color:l,colorModal:M,colorPopover:T,colorTarget:e,colorEmbedded:w,colorEmbeddedModal:w,colorEmbeddedPopover:w,textColor:c,titleTextColor:m,borderColor:g,actionColor:w,titleFontWeight:i,closeColorHover:S,closeColorPressed:H,closeBorderRadius:o,closeIconColor:d,closeIconColorHover:x,closeIconColorPressed:C,fontSizeSmall:t,fontSizeMedium:t,fontSizeLarge:t,fontSizeHuge:t,boxShadow:P,borderRadius:o})}const co={common:lo,self:io},uo=s([D("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[rr({background:"var(--n-color-modal)"}),p("hoverable",[s("&:hover","box-shadow: var(--n-box-shadow);")]),p("content-segmented",[s(">",[h("content",{paddingTop:"var(--n-padding-bottom)"})])]),p("content-soft-segmented",[s(">",[h("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),p("footer-segmented",[s(">",[h("footer",{paddingTop:"var(--n-padding-bottom)"})])]),p("footer-soft-segmented",[s(">",[h("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),s(">",[D("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[h("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),h("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),h("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),h("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),h("content","flex: 1; min-width: 0;"),h("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[s("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),h("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),D("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[s("img",`
 display: block;
 width: 100%;
 `)]),p("bordered",`
 border: 1px solid var(--n-border-color);
 `,[s("&:target","border-color: var(--n-color-target);")]),p("action-segmented",[s(">",[h("action",[s("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),p("content-segmented, content-soft-segmented",[s(">",[h("content",{transition:"border-color 0.3s var(--n-bezier)"},[s("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),p("footer-segmented, footer-soft-segmented",[s(">",[h("footer",{transition:"border-color 0.3s var(--n-bezier)"},[s("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),p("embedded",`
 background-color: var(--n-color-embedded);
 `)]),Ye(D("card",`
 background: var(--n-color-modal);
 `,[p("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),er(D("card",`
 background: var(--n-color-popover);
 `,[p("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),go={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function,closeFocusable:Boolean},fo=Object.assign(Object.assign({},ae.props),go),po=L({name:"Card",props:fo,slots:Object,setup(r){const e=()=>{const{onClose:i}=r;i&&ce(i)},{inlineThemeDisabled:o,mergedClsPrefixRef:n,mergedRtlRef:t}=or(r),l=ae("Card","-card",uo,co,r,n),c=nr("Card",t,n),m=X(()=>{const{size:i}=r,{self:{color:d,colorModal:x,colorTarget:C,textColor:S,titleTextColor:H,titleFontWeight:M,borderColor:P,actionColor:T,borderRadius:w,lineHeight:N,closeIconColor:xe,closeIconColorHover:ye,closeIconColorPressed:$e,closeColorHover:Se,closeColorPressed:we,closeBorderRadius:Ae,closeIconSize:Ee,closeSize:Be,boxShadow:De,colorPopover:ke,colorEmbedded:Re,colorEmbeddedModal:ze,colorEmbeddedPopover:He,[q("padding",i)]:Me,[q("fontSize",i)]:Pe,[q("titleFontSize",i)]:Te},common:{cubicBezierEaseInOut:Ie}}=l.value,{top:je,left:Le,bottom:Ne}=tr(Me);return{"--n-bezier":Ie,"--n-border-radius":w,"--n-color":d,"--n-color-modal":x,"--n-color-popover":ke,"--n-color-embedded":Re,"--n-color-embedded-modal":ze,"--n-color-embedded-popover":He,"--n-color-target":C,"--n-text-color":S,"--n-line-height":N,"--n-action-color":T,"--n-title-text-color":H,"--n-title-font-weight":M,"--n-close-icon-color":xe,"--n-close-icon-color-hover":ye,"--n-close-icon-color-pressed":$e,"--n-close-color-hover":Se,"--n-close-color-pressed":we,"--n-border-color":P,"--n-box-shadow":De,"--n-padding-top":je,"--n-padding-bottom":Ne,"--n-padding-left":Le,"--n-font-size":Pe,"--n-title-font-size":Te,"--n-close-size":Be,"--n-close-icon-size":Ee,"--n-close-border-radius":Ae}}),g=o?Fr("card",X(()=>r.size[0]),m,r):void 0;return{rtlEnabled:c,mergedClsPrefix:n,mergedTheme:l,handleCloseClick:e,cssVars:o?void 0:m,themeClass:g?.themeClass,onRender:g?.onRender}},render(){const{segmented:r,bordered:e,hoverable:o,mergedClsPrefix:n,rtlEnabled:t,onRender:l,embedded:c,tag:m,$slots:g}=this;return l?.(),u(m,{class:[`${n}-card`,this.themeClass,c&&`${n}-card--embedded`,{[`${n}-card--rtl`]:t,[`${n}-card--content${typeof r!="boolean"&&r.content==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.content,[`${n}-card--footer${typeof r!="boolean"&&r.footer==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.footer,[`${n}-card--action-segmented`]:r===!0||r!==!1&&r.action,[`${n}-card--bordered`]:e,[`${n}-card--hoverable`]:o}],style:this.cssVars,role:this.role},I(g.cover,i=>{const d=this.cover?A([this.cover()]):i;return d&&u("div",{class:`${n}-card-cover`,role:"none"},d)}),I(g.header,i=>{const{title:d}=this,x=d?A(typeof d=="function"?[d()]:[d]):i;return x||this.closable?u("div",{class:[`${n}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},u("div",{class:`${n}-card-header__main`,role:"heading"},x),I(g["header-extra"],C=>{const S=this.headerExtra?A([this.headerExtra()]):C;return S&&u("div",{class:[`${n}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},S)}),this.closable&&u(no,{clsPrefix:n,class:`${n}-card-header__close`,onClick:this.handleCloseClick,focusable:this.closeFocusable,absolute:!0})):null}),I(g.default,i=>{const{content:d}=this,x=d?A(typeof d=="function"?[d()]:[d]):i;return x&&u("div",{class:[`${n}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},x)}),I(g.footer,i=>{const d=this.footer?A([this.footer()]):i;return d&&u("div",{class:[`${n}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},d)}),I(g.action,i=>{const d=this.action?A([this.action()]):i;return d&&u("div",{class:`${n}-card__action`,role:"none"},d)}))}});export{po as N};

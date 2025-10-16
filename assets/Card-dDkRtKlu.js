import{U as q,V as G,F as J,v as n,y as z,W as Q,X as ee,Y as oe,z as l,A as a,m as re,n as b,B as te,D as E,C as ne,f as $,Z as F,s as de}from"./index-Bvctsxok.js";import{d as ae,u as ie,c as le,N as se}from"./light-B5IpPpRz.js";function m(e){return e.some(i=>q(i)?!(i.type===G||i.type===J&&!m(i.children)):!0)?e:null}function u(e,i){const s=e&&m(e());return i(s||null)}const ce={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function be(e){const{primaryColor:i,borderRadius:s,lineHeight:o,fontSize:g,cardColor:f,textColor2:x,textColor1:p,dividerColor:d,fontWeightStrong:t,closeIconColor:r,closeIconColorHover:c,closeIconColorPressed:C,closeColorHover:h,closeColorPressed:S,modalColor:y,boxShadow1:k,popoverColor:w,actionColor:v}=e;return Object.assign(Object.assign({},ce),{lineHeight:o,color:f,colorModal:y,colorPopover:w,colorTarget:i,colorEmbedded:v,colorEmbeddedModal:v,colorEmbeddedPopover:v,textColor:x,titleTextColor:p,borderColor:d,actionColor:v,titleFontWeight:t,closeColorHover:h,closeColorPressed:S,closeBorderRadius:s,closeIconColor:r,closeIconColorHover:c,closeIconColorPressed:C,fontSizeSmall:g,fontSizeMedium:g,fontSizeLarge:g,fontSizeHuge:g,boxShadow:k,borderRadius:s})}const ge={common:ae,self:be},fe=n([z("card",`
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
 `,[oe({background:"var(--n-color-modal)"}),l("hoverable",[n("&:hover","box-shadow: var(--n-box-shadow);")]),l("content-segmented",[n(">",[a("content",{paddingTop:"var(--n-padding-bottom)"})])]),l("content-soft-segmented",[n(">",[a("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),l("footer-segmented",[n(">",[a("footer",{paddingTop:"var(--n-padding-bottom)"})])]),l("footer-soft-segmented",[n(">",[a("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),n(">",[z("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[a("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),a("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),a("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),a("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),a("content","flex: 1; min-width: 0;"),a("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[n("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),a("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),z("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[n("img",`
 display: block;
 width: 100%;
 `)]),l("bordered",`
 border: 1px solid var(--n-border-color);
 `,[n("&:target","border-color: var(--n-color-target);")]),l("action-segmented",[n(">",[a("action",[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("content-segmented, content-soft-segmented",[n(">",[a("content",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("footer-segmented, footer-soft-segmented",[n(">",[a("footer",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("embedded",`
 background-color: var(--n-color-embedded);
 `)]),Q(z("card",`
 background: var(--n-color-modal);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),ee(z("card",`
 background: var(--n-color-popover);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),me={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function,closeFocusable:Boolean},pe=Object.assign(Object.assign({},E.props),me),ue=re({name:"Card",props:pe,slots:Object,setup(e){const i=()=>{const{onClose:t}=e;t&&le(t)},{inlineThemeDisabled:s,mergedClsPrefixRef:o,mergedRtlRef:g}=te(e),f=E("Card","-card",fe,ge,e,o),x=ne("Card",g,o),p=$(()=>{const{size:t}=e,{self:{color:r,colorModal:c,colorTarget:C,textColor:h,titleTextColor:S,titleFontWeight:y,borderColor:k,actionColor:w,borderRadius:v,lineHeight:P,closeIconColor:T,closeIconColorHover:B,closeIconColorPressed:R,closeColorHover:_,closeColorPressed:M,closeBorderRadius:O,closeIconSize:j,closeSize:H,boxShadow:I,colorPopover:V,colorEmbedded:N,colorEmbeddedModal:L,colorEmbeddedPopover:W,[F("padding",t)]:A,[F("fontSize",t)]:D,[F("titleFontSize",t)]:K},common:{cubicBezierEaseInOut:U}}=f.value,{top:X,left:Y,bottom:Z}=de(A);return{"--n-bezier":U,"--n-border-radius":v,"--n-color":r,"--n-color-modal":c,"--n-color-popover":V,"--n-color-embedded":N,"--n-color-embedded-modal":L,"--n-color-embedded-popover":W,"--n-color-target":C,"--n-text-color":h,"--n-line-height":P,"--n-action-color":w,"--n-title-text-color":S,"--n-title-font-weight":y,"--n-close-icon-color":T,"--n-close-icon-color-hover":B,"--n-close-icon-color-pressed":R,"--n-close-color-hover":_,"--n-close-color-pressed":M,"--n-border-color":k,"--n-box-shadow":I,"--n-padding-top":X,"--n-padding-bottom":Z,"--n-padding-left":Y,"--n-font-size":D,"--n-title-font-size":K,"--n-close-size":H,"--n-close-icon-size":j,"--n-close-border-radius":O}}),d=s?ie("card",$(()=>e.size[0]),p,e):void 0;return{rtlEnabled:x,mergedClsPrefix:o,mergedTheme:f,handleCloseClick:i,cssVars:s?void 0:p,themeClass:d?.themeClass,onRender:d?.onRender}},render(){const{segmented:e,bordered:i,hoverable:s,mergedClsPrefix:o,rtlEnabled:g,onRender:f,embedded:x,tag:p,$slots:d}=this;return f?.(),b(p,{class:[`${o}-card`,this.themeClass,x&&`${o}-card--embedded`,{[`${o}-card--rtl`]:g,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:i,[`${o}-card--hoverable`]:s}],style:this.cssVars,role:this.role},u(d.cover,t=>{const r=this.cover?m([this.cover()]):t;return r&&b("div",{class:`${o}-card-cover`,role:"none"},r)}),u(d.header,t=>{const{title:r}=this,c=r?m(typeof r=="function"?[r()]:[r]):t;return c||this.closable?b("div",{class:[`${o}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},b("div",{class:`${o}-card-header__main`,role:"heading"},c),u(d["header-extra"],C=>{const h=this.headerExtra?m([this.headerExtra()]):C;return h&&b("div",{class:[`${o}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},h)}),this.closable&&b(se,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,focusable:this.closeFocusable,absolute:!0})):null}),u(d.default,t=>{const{content:r}=this,c=r?m(typeof r=="function"?[r()]:[r]):t;return c&&b("div",{class:[`${o}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},c)}),u(d.footer,t=>{const r=this.footer?m([this.footer()]):t;return r&&b("div",{class:[`${o}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},r)}),u(d.action,t=>{const r=this.action?m([this.action()]):t;return r&&b("div",{class:`${o}-card__action`,role:"none"},r)}))}});export{ue as N};

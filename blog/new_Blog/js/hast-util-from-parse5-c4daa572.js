import{f as L,n as b,h,s as g}from"./property-information-8a8c9296.js";import{w as M}from"./web-namespaces-3987f4d7.js";import{l as O}from"./vfile-location-a345f22d.js";import{p as w}from"./space-separated-tokens-184e418d.js";import{p as x}from"./comma-separated-tokens-ac5eb161.js";const A=/[#.]/g;function G(e,n){const t=e||"",r={};let o=0,a,i;for(;o<t.length;){A.lastIndex=o;const s=A.exec(t),f=t.slice(o,s?s.index:t.length);f&&(a?a==="#"?r.id=f:Array.isArray(r.className)?r.className.push(f):r.className=[f]:i=f,o+=f.length),s&&(a=s[0],o++)}return{type:"element",tagName:i||n||"div",properties:r,children:[]}}const k=new Set(["menu","submit","reset","button"]),d={}.hasOwnProperty;function S(e,n,t){const r=t&&I(t);return function(a,i,...s){let f=-1,c;if(a==null)c={type:"root",children:[]},s.unshift(i);else if(c=G(a,n),c.tagName=c.tagName.toLowerCase(),r&&d.call(r,c.tagName)&&(c.tagName=r[c.tagName]),F(i,c.tagName)){let l;for(l in i)d.call(i,l)&&D(e,c.properties,l,i[l])}else s.unshift(i);for(;++f<s.length;)u(c.children,s[f]);return c.type==="element"&&c.tagName==="template"&&(c.content={type:"root",children:c.children},c.children=[]),c}}function F(e,n){return e==null||typeof e!="object"||Array.isArray(e)?!1:n==="input"||!e.type||typeof e.type!="string"?!0:"children"in e&&Array.isArray(e.children)?!1:n==="button"?k.has(e.type.toLowerCase()):!("value"in e)}function D(e,n,t,r){const o=L(e,t);let a=-1,i;if(r!=null){if(typeof r=="number"){if(Number.isNaN(r))return;i=r}else typeof r=="boolean"?i=r:typeof r=="string"?o.spaceSeparated?i=w(r):o.commaSeparated?i=x(r):o.commaOrSpaceSeparated?i=w(x(r).join(" ")):i=C(o,o.property,r):Array.isArray(r)?i=r.concat():i=o.property==="style"?B(r):String(r);if(Array.isArray(i)){const s=[];for(;++a<i.length;)s[a]=C(o,o.property,i[a]);i=s}o.property==="className"&&Array.isArray(n.className)&&(i=n.className.concat(i)),n[o.property]=i}}function u(e,n){let t=-1;if(n!=null)if(typeof n=="string"||typeof n=="number")e.push({type:"text",value:String(n)});else if(Array.isArray(n))for(;++t<n.length;)u(e,n[t]);else if(typeof n=="object"&&"type"in n)n.type==="root"?u(e,n.children):e.push(n);else throw new Error("Expected node, nodes, or string, got `"+n+"`")}function C(e,n,t){if(typeof t=="string"){if(e.number&&t&&!Number.isNaN(Number(t)))return Number(t);if((e.boolean||e.overloadedBoolean)&&(t===""||b(t)===b(n)))return!0}return t}function B(e){const n=[];let t;for(t in e)d.call(e,t)&&n.push([t,e[t]].join(": "));return n.join("; ")}function I(e){const n={};let t=-1;for(;++t<e.length;)n[e[t].toLowerCase()]=e[t];return n}const R=S(h,"div"),q=["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"],E=S(g,"g",q),P={}.hasOwnProperty,$=Object.prototype;function W(e,n){const t=n||{};let r,o;return _(t)?(o=t,r={}):(o=t.file||void 0,r=t),y({schema:r.space==="svg"?g:h,file:o,verbose:r.verbose,location:!1},e)}function y(e,n){let t;switch(n.nodeName){case"#comment":{const r=n;return t={type:"comment",value:r.data},m(e,r,t),t}case"#document":case"#document-fragment":{const r=n,o="mode"in r?r.mode==="quirks"||r.mode==="limited-quirks":!1;if(t={type:"root",children:j(e,n.childNodes),data:{quirksMode:o}},e.file&&e.location){const a=String(e.file),i=O(a),s=i.toPoint(0),f=i.toPoint(a.length);t.position={start:s,end:f}}return t}case"#documentType":{const r=n;return t={type:"doctype"},m(e,r,t),t}case"#text":{const r=n;return t={type:"text",value:r.value},m(e,r,t),t}default:return t=z(e,n),t}}function j(e,n){let t=-1;const r=[];for(;++t<n.length;)r[t]=y(e,n[t]);return r}function z(e,n){const t=e.schema;e.schema=n.namespaceURI===M.svg?g:h;let r=-1;const o={};for(;++r<n.attrs.length;){const s=n.attrs[r],f=(s.prefix?s.prefix+":":"")+s.name;P.call($,f)||(o[f]=s.value)}const i=(e.schema.space==="svg"?E:R)(n.tagName,o,j(e,n.childNodes));if(m(e,n,i),i.tagName==="template"){const s=n,f=s.sourceCodeLocation,c=f&&f.startTag&&p(f.startTag),l=f&&f.endTag&&p(f.endTag),N=y(e,s.content);c&&l&&e.file&&(N.position={start:c.end,end:l.start}),i.content=N}return e.schema=t,i}function m(e,n,t){if("sourceCodeLocation"in n&&n.sourceCodeLocation&&e.file){const r=U(e,t,n.sourceCodeLocation);r&&(e.location=!0,t.position=r)}}function U(e,n,t){const r=p(t);if(n.type==="element"){const o=n.children[n.children.length-1];if(r&&!t.endTag&&o&&o.position&&o.position.end&&(r.end=Object.assign({},o.position.end)),e.verbose){const a={};let i;if(t.attrs)for(i in t.attrs)P.call(t.attrs,i)&&(a[L(e.schema,i).property]=p(t.attrs[i]));n.data={position:{opening:p(t.startTag),closing:t.endTag?p(t.endTag):null,properties:a}}}}return r}function p(e){const n=T({line:e.startLine,column:e.startCol,offset:e.startOffset}),t=T({line:e.endLine,column:e.endCol,offset:e.endOffset});return n||t?{start:n,end:t}:void 0}function T(e){return e.line&&e.column?e:void 0}function _(e){return"messages"in e}export{W as f};

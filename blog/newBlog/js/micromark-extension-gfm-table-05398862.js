import{f as I}from"./micromark-factory-space-b5e3cfb5.js";import{m as R,f as x,j as P}from"./micromark-util-character-7742fea9.js";const $={flow:{null:{tokenize:V,resolve:U}}},O={tokenize:X,partial:!0};function U(t,a){let r=-1,i,l,p,e,o,m,C;for(;++r<t.length;){const u=t[r][1];if(p&&(u.type==="temporaryTableCellContent"&&(e=e||r,o=r),(u.type==="tableCellDivider"||u.type==="tableRow")&&o)){const b={type:"tableContent",start:t[e][1].start,end:t[o][1].end},y={type:"chunkText",start:b.start,end:b.end,contentType:"text"};t.splice(e,o-e+1,["enter",b,a],["enter",y,a],["exit",y,a],["exit",b,a]),r-=o-e-3,e=void 0,o=void 0}if(t[r][0]==="exit"&&m!==void 0&&m+(C?0:1)<r&&(u.type==="tableCellDivider"||u.type==="tableRow"&&(m+3<r||t[m][1].type!=="whitespace"))){const b={type:l?"tableDelimiter":i?"tableHeader":"tableData",start:t[m][1].start,end:t[r][1].end};t.splice(r+(u.type==="tableCellDivider"?1:0),0,["exit",b,a]),t.splice(m,0,["enter",b,a]),r+=2,m=r+1,C=!0}u.type==="tableRow"&&(p=t[r][0]==="enter",p&&(m=r+1,C=!1)),u.type==="tableDelimiterRow"&&(l=t[r][0]==="enter",l&&(m=r+1,C=!1)),u.type==="tableHead"&&(i=t[r][0]==="enter")}return t}function V(t,a,r){const i=this,l=[];let p=0,e,o;return m;function m(n){return t.enter("table")._align=l,t.enter("tableHead"),t.enter("tableRow"),n===124?C(n):(p++,t.enter("temporaryTableCellContent"),y(n))}function C(n){return t.enter("tableCellDivider"),t.consume(n),t.exit("tableCellDivider"),e=!0,u}function u(n){return n===null||R(n)?j(n):x(n)?(t.enter("whitespace"),t.consume(n),b):(e&&(e=void 0,p++),n===124?C(n):(t.enter("temporaryTableCellContent"),y(n)))}function b(n){return x(n)?(t.consume(n),b):(t.exit("whitespace"),u(n))}function y(n){return n===null||n===124||P(n)?(t.exit("temporaryTableCellContent"),u(n)):(t.consume(n),n===92?W:y)}function W(n){return n===92||n===124?(t.consume(n),y):y(n)}function j(n){if(n===null)return r(n);t.exit("tableRow"),t.exit("tableHead");const B=i.interrupt;return i.interrupt=!0,t.attempt({tokenize:s,partial:!0},function(w){return i.interrupt=B,t.enter("tableDelimiterRow"),h(w)},function(w){return i.interrupt=B,r(w)})(n)}function h(n){return n===null||R(n)?F(n):x(n)?(t.enter("whitespace"),t.consume(n),T):n===45?(t.enter("tableDelimiterFiller"),t.consume(n),o=!0,l.push("none"),z):n===58?(t.enter("tableDelimiterAlignment"),t.consume(n),t.exit("tableDelimiterAlignment"),l.push("left"),N):n===124?(t.enter("tableCellDivider"),t.consume(n),t.exit("tableCellDivider"),h):r(n)}function T(n){return x(n)?(t.consume(n),T):(t.exit("whitespace"),h(n))}function z(n){return n===45?(t.consume(n),z):(t.exit("tableDelimiterFiller"),n===58?(t.enter("tableDelimiterAlignment"),t.consume(n),t.exit("tableDelimiterAlignment"),l[l.length-1]=l[l.length-1]==="left"?"center":"right",q):h(n))}function N(n){return n===45?(t.enter("tableDelimiterFiller"),t.consume(n),o=!0,z):r(n)}function q(n){return n===null||R(n)?F(n):x(n)?(t.enter("whitespace"),t.consume(n),T):n===124?(t.enter("tableCellDivider"),t.consume(n),t.exit("tableCellDivider"),h):r(n)}function F(n){return t.exit("tableDelimiterRow"),!o||p!==l.length?r(n):n===null?k(n):t.check(O,k,t.attempt({tokenize:s,partial:!0},I(t,G,"linePrefix",4),k))(n)}function k(n){return t.exit("table"),a(n)}function G(n){return t.enter("tableBody"),_(n)}function _(n){return t.enter("tableRow"),n===124?v(n):(t.enter("temporaryTableCellContent"),g(n))}function v(n){return t.enter("tableCellDivider"),t.consume(n),t.exit("tableCellDivider"),E}function E(n){return n===null||R(n)?K(n):x(n)?(t.enter("whitespace"),t.consume(n),L):n===124?v(n):(t.enter("temporaryTableCellContent"),g(n))}function L(n){return x(n)?(t.consume(n),L):(t.exit("whitespace"),E(n))}function g(n){return n===null||n===124||P(n)?(t.exit("temporaryTableCellContent"),E(n)):(t.consume(n),n===92?J:g)}function J(n){return n===92||n===124?(t.consume(n),g):g(n)}function K(n){return t.exit("tableRow"),n===null?S(n):t.check(O,S,t.attempt({tokenize:s,partial:!0},I(t,_,"linePrefix",4),S))(n)}function S(n){return t.exit("tableBody"),k(n)}function s(n,B,w){return M;function M(D){return n.enter("lineEnding"),n.consume(D),n.exit("lineEnding"),I(n,Q,"linePrefix")}function Q(D){if(i.parser.lazy[i.now().line]||D===null||R(D))return w(D);const H=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&H&&H[1].type==="linePrefix"&&H[2].sliceSerialize(H[1],!0).length>=4?w(D):(i._gfmTableDynamicInterruptHack=!0,n.check(i.parser.constructs.flow,function(A){return i._gfmTableDynamicInterruptHack=!1,w(A)},function(A){return i._gfmTableDynamicInterruptHack=!1,B(A)})(D))}}}function X(t,a,r){let i=0;return l;function l(e){return t.enter("check"),t.consume(e),p}function p(e){return e===-1||e===32?(t.consume(e),i++,i===4?a:p):e===null||P(e)?a(e):r(e)}}export{$ as g};
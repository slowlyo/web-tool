(self.webpackChunk=self.webpackChunk||[]).push([[4395],{4395:function(E,I,v){(function(g){g(v(32973))})(function(g){"use strict";g.defineSimpleMode=function(t,i){g.defineMode(t,function(n){return g.simpleMode(n,i)})},g.simpleMode=function(t,i){x(i,"start");var n={},e=i.meta||{},r=!1;for(var f in i)if(f!=e&&i.hasOwnProperty(f))for(var u=n[f]=[],a=i[f],d=0;d<a.length;d++){var o=a[d];u.push(new w(o,i)),(o.indent||o.dedent)&&(r=!0)}var p={startState:function(){return{state:"start",pending:null,local:null,localState:null,indent:r?[]:null}},copyState:function(l){var S={state:l.state,pending:l.pending,local:l.local,localState:null,indent:l.indent&&l.indent.slice(0)};l.localState&&(S.localState=g.copyState(l.local.mode,l.localState)),l.stack&&(S.stack=l.stack.slice(0));for(var h=l.persistentStates;h;h=h.next)S.persistentStates={mode:h.mode,spec:h.spec,state:h.state==l.localState?S.localState:g.copyState(h.mode,h.state),next:S.persistentStates};return S},token:_(n,t),innerMode:function(l){return l.local&&{mode:l.local.mode,state:l.localState}},indent:P(n,e)};if(e)for(var c in e)e.hasOwnProperty(c)&&(p[c]=e[c]);return p};function x(t,i){if(!t.hasOwnProperty(i))throw new Error("Undefined state "+i+" in simple mode")}function s(t,i){if(!t)return/(?:)/;var n="";return t instanceof RegExp?(t.ignoreCase&&(n="i"),t.unicode&&(n+="u"),t=t.source):t=String(t),new RegExp((i===!1?"":"^")+"(?:"+t+")",n)}function y(t){if(!t)return null;if(t.apply)return t;if(typeof t=="string")return t.replace(/\./g," ");for(var i=[],n=0;n<t.length;n++)i.push(t[n]&&t[n].replace(/\./g," "));return i}function w(t,i){(t.next||t.push)&&x(i,t.next||t.push),this.regex=s(t.regex),this.token=y(t.token),this.data=t}function _(t,i){return function(n,e){if(e.pending){var r=e.pending.shift();return e.pending.length==0&&(e.pending=null),n.pos+=r.text.length,r.token}if(e.local)if(e.local.end&&n.match(e.local.end)){var f=e.local.endToken||null;return e.local=e.localState=null,f}else{var f=e.local.mode.token(n,e.localState),u;return e.local.endScan&&(u=e.local.endScan.exec(n.current()))&&(n.pos=n.start+u.index),f}for(var a=t[e.state],d=0;d<a.length;d++){var o=a[d],p=(!o.data.sol||n.sol())&&n.match(o.regex);if(p){o.data.next?e.state=o.data.next:o.data.push?((e.stack||(e.stack=[])).push(e.state),e.state=o.data.push):o.data.pop&&e.stack&&e.stack.length&&(e.state=e.stack.pop()),o.data.mode&&m(i,e,o.data.mode,o.token),o.data.indent&&e.indent.push(n.indentation()+i.indentUnit),o.data.dedent&&e.indent.pop();var c=o.token;if(c&&c.apply&&(c=c(p)),p.length>2&&o.token&&typeof o.token!="string"){for(var l=2;l<p.length;l++)p[l]&&(e.pending||(e.pending=[])).push({text:p[l],token:o.token[l-1]});return n.backUp(p[0].length-(p[1]?p[1].length:0)),c[0]}else return c&&c.join?c[0]:c}}return n.next(),null}}function k(t,i){if(t===i)return!0;if(!t||typeof t!="object"||!i||typeof i!="object")return!1;var n=0;for(var e in t)if(t.hasOwnProperty(e)){if(!i.hasOwnProperty(e)||!k(t[e],i[e]))return!1;n++}for(var e in i)i.hasOwnProperty(e)&&n--;return n==0}function m(t,i,n,e){var r;if(n.persistent)for(var f=i.persistentStates;f&&!r;f=f.next)(n.spec?k(n.spec,f.spec):n.mode==f.mode)&&(r=f);var u=r?r.mode:n.mode||g.getMode(t,n.spec),a=r?r.state:g.startState(u);n.persistent&&!r&&(i.persistentStates={mode:u,spec:n.spec,state:a,next:i.persistentStates}),i.localState=a,i.local={mode:u,end:n.end&&s(n.end),endScan:n.end&&n.forceEnd!==!1&&s(n.end,!1),endToken:e&&e.join?e[e.length-1]:e}}function O(t,i){for(var n=0;n<i.length;n++)if(i[n]===t)return!0}function P(t,i){return function(n,e,r){if(n.local&&n.local.mode.indent)return n.local.mode.indent(n.localState,e,r);if(n.indent==null||n.local||i.dontIndentStates&&O(n.state,i.dontIndentStates)>-1)return g.Pass;var f=n.indent.length-1,u=t[n.state];n:for(;;){for(var a=0;a<u.length;a++){var d=u[a];if(d.data.dedent&&d.data.dedentIfLineStart!==!1){var o=d.regex.exec(e);if(o&&o[0]){f--,(d.next||d.push)&&(u=t[d.next||d.push]),e=e.slice(o[0].length);continue n}}}break}return f<0?0:n.indent[f]}}})}}]);

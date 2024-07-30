"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4131],{47023:function(he,M,e){e.r(M),e.d(M,{default:function(){return ae}});var W=e(90228),N=e.n(W),Y=e(87999),z=e.n(Y),J=e(48305),c=e.n(J),f=e(75271),L=e(31759),V=e.n(L),H=e(44932),K=e(874),Q=e.n(K),p=e(52973),X=e(71981),fe=e(98490),t=e(52676);function b(S){var P=S.onChange,C=S.preview,r=S.defaultSchema;(!r||V()(r)=="object"&&Object.keys(r).length===0)&&(r={type:"page",regions:["body"]});var E=function(n){P(n)},F={fetcher:function(n){var m=n.url,l=n.method,s=n.data,j=n.responseType,a=n.config,T=n.headers;return a=a||{},a.withCredentials=!0,j&&(a.responseType=j),a.cancelExecutor&&(a.cancelToken=new p.Z.CancelToken(a.cancelExecutor)),a.headers=T||{},l!=="post"&&l!=="put"&&l!=="patch"?(s&&(a.params=s),p.Z[l](m,a)):(s&&s instanceof FormData?(a.headers=a.headers||{},a.headers["Content-Type"]="multipart/form-data"):s&&typeof s!="string"&&!(s instanceof Blob)&&!(s instanceof ArrayBuffer)&&(s=JSON.stringify(s),a.headers=a.headers||{},a.headers["Content-Type"]="application/json"),p.Z[l](m,s,a))},isCancel:function(n){return p.Z.isCancel(n)},copy:function(n){Q()(n),X.Am.success("\u590D\u5236\u6210\u529F")}};return(0,t.jsx)("div",{className:"h-full",children:(0,t.jsx)(H.MLE,{theme:"cxd",onChange:E,value:r,preview:C,amisEnv:F})})}var k=b,g=e(59507),y=e(22682),w=e(38508),Z=e(22581),q=e(79885),I=e(81287),x=e(74272),O=e(59259),_=e(46055),ee=function(){var P=(0,f.useState)(!1),C=c()(P,2),r=C[0],E=C[1],F=(0,f.useState)({}),d=c()(F,2),n=d[0],m=d[1],l=(0,f.useState)(!1),s=c()(l,2),j=s[0],a=s[1],T=g.Z.useForm(),te=c()(T,1),A=te[0],B=(0,_.t)("@@initialState"),$=B.initialState,ne=B.refresh,se=(0,x.useSearchParams)(),G=c()(se,2),re=G[0],me=G[1],oe=(0,f.useState)(re.get("uuid")),R=c()(oe,2),v=R[0],ve=R[1],ie=function(i){m(i)},ue=function(){A.validateFields().then(function(i){var u="/"+i.path.replace(/\/+/,"");if(u.match(/[^a-zA-Z0-9\-_\/]/))return y.ZP.error("\u8DEF\u5F84\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF\u3001\u4E2D\u5212\u7EBF\u3001\u659C\u6760");if(u=="/_editor")return y.ZP.error("\u8DEF\u5F84\u4E0D\u53EF\u7528");(0,O.WY)("/_save",{method:"post",data:{uuid:v,name:i.name,path:u,schema:n}}).then(function(){var de=z()(N()().mark(function U(D){return N()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(D.status!=1){h.next=3;break}return y.ZP.error(D.msg),h.abrupt("return");case 3:return y.ZP.success(D.msg),h.next=6,ne();case 6:setTimeout(function(){return x.history.push(u)},500);case 7:case"end":return h.stop()}},U)}));return function(U){return de.apply(this,arguments)}}())})},le=function(){a(!0)},ce=function(){a(!1)};return(0,f.useEffect)(function(){var o;if((o=$.config)!==null&&o!==void 0&&o.prod){x.history.push("/");return}if(v){var i=$.menus.find(function(u){return u.uuid==v});i!=null&&i.uuid&&A.setFieldsValue({name:i.name,path:i.path}),(0,O.WY)("/_schema",{params:{uuid:v}}).then(function(u){console.clear(),console.log(u.data),m(u.data)}),console.log(n)}},[v]),(0,t.jsxs)("div",{className:"h-screen",children:[(0,t.jsxs)("div",{className:"w-full h-[48px] border-b flex justify-between items-center px-2",children:[(0,t.jsx)("div",{className:"text-xl font-smeibold",children:"Amis Editor"}),(0,t.jsxs)(w.Z,{children:[(0,t.jsx)(Z.ZP,{type:"primary",ghost:!0,onClick:function(){return E(!r)},children:r?"\u7F16\u8F91":"\u9884\u89C8"}),!r&&(0,t.jsx)(Z.ZP,{onClick:function(){return le()},type:"primary",children:"\u4FDD\u5B58"}),!r&&(0,t.jsx)(Z.ZP,{onClick:function(){return x.history.back()},children:"\u9000\u51FA"})]})]}),(0,t.jsx)(q.Z,{title:"\u914D\u7F6E",open:j,okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:ue,onCancel:ce,children:(0,t.jsxs)(g.Z,{layout:"vertical",form:A,children:[(0,t.jsx)(g.Z.Item,{label:"\u540D\u79F0",name:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9875\u9762\u540D\u79F0"}],children:(0,t.jsx)(I.Z,{})}),(0,t.jsx)(g.Z.Item,{label:"\u8DEF\u5F84",name:"path",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9875\u9762\u8DEF\u5F84"}],children:(0,t.jsx)(I.Z,{})})]})}),(0,t.jsx)("div",{className:"h-[calc(100vh-48px)]",children:(0,t.jsx)(k,{defaultSchema:n,onChange:ie,preview:r})})]})},ae=ee}}]);

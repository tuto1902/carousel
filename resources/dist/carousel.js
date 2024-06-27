(()=>{function It(t){return typeof t=="number"}function xt(t){return typeof t=="string"}function Lt(t){return typeof t=="boolean"}function Nt(t){return Object.prototype.toString.call(t)==="[object Object]"}function w(t){return Math.abs(t)}function vt(t){return Math.sign(t)}function it(t,n){return w(t-n)}function Yt(t,n){if(t===0||n===0||w(t)<=w(n))return 0;let e=it(w(t),w(n));return w(e/t)}function ct(t){return ut(t).map(Number)}function R(t){return t[ft(t)]}function ft(t){return Math.max(0,t.length-1)}function Tt(t,n){return n===ft(t)}function Vt(t,n=0){return Array.from(Array(t),(e,s)=>n+s)}function ut(t){return Object.keys(t)}function kt(t,n){return[t,n].reduce((e,s)=>(ut(s).forEach(i=>{let o=e[i],r=s[i],u=Nt(o)&&Nt(r);e[i]=u?kt(o,r):r}),e),{})}function Et(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function _t(t,n){let e={start:s,center:i,end:o};function s(){return 0}function i(c){return o(c)/2}function o(c){return n-c}function r(c,a){return xt(t)?e[t](c):t(n,c,a)}return{measure:r}}function at(){let t=[];function n(i,o,r,u={passive:!0}){let c;if("addEventListener"in i)i.addEventListener(o,r,u),c=()=>i.removeEventListener(o,r,u);else{let a=i;a.addListener(r),c=()=>a.removeListener(r)}return t.push(c),s}function e(){t=t.filter(i=>i())}let s={add:n,clear:e};return s}function Jt(t,n,e,s){let i=at(),o=1e3/60,r=null,u=0,c=0;function a(){i.add(t,"visibilitychange",()=>{t.hidden&&d()})}function g(){b(),i.clear()}function f(y){if(!c)return;r||(r=y);let l=y-r;for(r=y,u+=l;u>=o;)e(),u-=o;let h=w(u/o);s(h),c&&n.requestAnimationFrame(f)}function m(){c||(c=n.requestAnimationFrame(f))}function b(){n.cancelAnimationFrame(c),r=null,u=0,c=0}function d(){r=null,u=0}return{init:a,destroy:g,start:m,stop:b,update:e,render:s}}function Zt(t,n){let e=n==="rtl",s=t==="y",i=s?"y":"x",o=s?"x":"y",r=!s&&e?-1:1,u=g(),c=f();function a(d){let{height:p,width:y}=d;return s?p:y}function g(){return s?"top":e?"right":"left"}function f(){return s?"bottom":e?"left":"right"}function m(d){return d*r}return{scroll:i,cross:o,startEdge:u,endEdge:c,measureSize:a,direction:m}}function nt(t=0,n=0){let e=w(t-n);function s(a){return a<t}function i(a){return a>n}function o(a){return s(a)||i(a)}function r(a){return o(a)?s(a)?t:n:a}function u(a){return e?a-e*Math.ceil((a-n)/e):a}return{length:e,max:n,min:t,constrain:r,reachedAny:o,reachedMax:i,reachedMin:s,removeOffset:u}}function zt(t,n,e){let{constrain:s}=nt(0,t),i=t+1,o=r(n);function r(m){return e?w((i+m)%i):s(m)}function u(){return o}function c(m){return o=r(m),f}function a(m){return g().set(u()+m)}function g(){return zt(t,u(),e)}let f={get:u,set:c,add:a,clone:g};return f}function Wt(t,n,e,s,i,o,r,u,c,a,g,f,m,b,d,p,y,l,h){let{cross:x,direction:E}=t,L=["INPUT","SELECT","TEXTAREA"],O={passive:!1},I=at(),v=at(),D=nt(50,225).constrain(b.measure(20)),T={mouse:300,touch:400},M={mouse:500,touch:600},N=d?43:25,B=!1,k=0,$=0,J=!1,Q=!1,_=!1,K=!1;function Z(S){if(!h)return;function A(C){(Lt(h)||h(S,C))&&z(C)}let P=n;I.add(P,"dragstart",C=>C.preventDefault(),O).add(P,"touchmove",()=>{},O).add(P,"touchend",()=>{}).add(P,"touchstart",A).add(P,"mousedown",A).add(P,"touchcancel",V).add(P,"contextmenu",V).add(P,"click",ot,!0)}function X(){I.clear(),v.clear()}function et(){let S=K?e:n;v.add(S,"touchmove",U,O).add(S,"touchend",V).add(S,"mousemove",U,O).add(S,"mouseup",V)}function Y(S){let A=S.nodeName||"";return L.includes(A)}function rt(){return(d?M:T)[K?"mouse":"touch"]}function st(S,A){let P=f.add(vt(S)*-1),C=g.byDistance(S,!d).distance;return d||w(S)<D?C:y&&A?C*.5:g.byIndex(P.get(),0).distance}function z(S){let A=Et(S,s);K=A,_=d&&A&&!S.buttons&&B,B=it(i.get(),r.get())>=2,!(A&&S.button!==0)&&(Y(S.target)||(J=!0,o.pointerDown(S),a.useFriction(0).useDuration(0),i.set(r),et(),k=o.readPoint(S),$=o.readPoint(S,x),m.emit("pointerDown")))}function U(S){if(!Et(S,s)&&S.touches.length>=2)return V(S);let P=o.readPoint(S),C=o.readPoint(S,x),q=it(P,k),j=it(C,$);if(!Q&&!K&&(!S.cancelable||(Q=q>j,!Q)))return V(S);let G=o.pointerMove(S);q>p&&(_=!0),a.useFriction(.3).useDuration(.75),u.start(),i.add(E(G)),S.preventDefault()}function V(S){let P=g.byDistance(0,!1).index!==f.get(),C=o.pointerUp(S)*rt(),q=st(E(C),P),j=Yt(C,q),G=N-10*j,W=l+j/50;Q=!1,J=!1,v.clear(),a.useDuration(G).useFriction(W),c.distance(q,!d),K=!1,m.emit("pointerUp")}function ot(S){_&&(S.stopPropagation(),S.preventDefault(),_=!1)}function H(){return J}return{init:Z,destroy:X,pointerDown:H}}function tn(t,n){let s,i;function o(f){return f.timeStamp}function r(f,m){let d=`client${(m||t.scroll)==="x"?"X":"Y"}`;return(Et(f,n)?f:f.touches[0])[d]}function u(f){return s=f,i=f,r(f)}function c(f){let m=r(f)-r(i),b=o(f)-o(s)>170;return i=f,b&&(s=f),m}function a(f){if(!s||!i)return 0;let m=r(i)-r(s),b=o(f)-o(s),d=o(f)-o(i)>170,p=m/b;return b&&!d&&w(p)>.1?p:0}return{pointerDown:u,pointerMove:c,pointerUp:a,readPoint:r}}function nn(){function t(e){let{offsetTop:s,offsetLeft:i,offsetWidth:o,offsetHeight:r}=e;return{top:s,right:i+o,bottom:s+r,left:i,width:o,height:r}}return{measure:t}}function en(t){function n(s){return t*(s/100)}return{measure:n}}function on(t,n,e,s,i,o,r){let u,c,a=[],g=!1;function f(p){return i.measureSize(r.measure(p))}function m(p){if(!o)return;c=f(t),a=s.map(f);function y(h){for(let x of h){let E=x.target===t,L=s.indexOf(x.target),O=E?c:a[L],I=f(E?t:s[L]);if(w(I-O)>=.5){e.requestAnimationFrame(()=>{p.reInit(),n.emit("resize")});break}}}u=new ResizeObserver(h=>{g||(Lt(o)||o(p,h))&&y(h)}),[t].concat(s).forEach(h=>u.observe(h))}function b(){u&&u.disconnect(),g=!0}return{init:m,destroy:b}}function rn(t,n,e,s,i){let o=0,r=0,u=s,c=i,a=t.get(),g=0;function f(){let L=e.get()-t.get(),O=!u,I=0;return O?(o=0,t.set(e),I=L):(o+=L/u,o*=c,a+=o,t.add(o),I=a-g),r=vt(I),g=a,E}function m(){let L=e.get()-n.get();return w(L)<.001}function b(){return u}function d(){return r}function p(){return o}function y(){return h(s)}function l(){return x(i)}function h(L){return u=L,E}function x(L){return c=L,E}let E={direction:d,duration:b,velocity:p,seek:f,settled:m,useBaseFriction:l,useBaseDuration:y,useFriction:x,useDuration:h};return E}function sn(t,n,e,s,i){let o=i.measure(10),r=i.measure(50),u=nt(.1,.99),c=!1;function a(){return!(c||!t.reachedAny(e.get())||!t.reachedAny(n.get()))}function g(b){if(!a())return;let d=t.reachedMin(n.get())?"min":"max",p=w(t[d]-n.get()),y=e.get()-n.get(),l=u.constrain(p/r);e.subtract(y*l),!b&&w(y)<o&&(e.set(t.constrain(e.get())),s.useDuration(25).useBaseFriction())}function f(b){c=!b}return{shouldConstrain:a,constrain:g,toggleActive:f}}function cn(t,n,e,s,i){let o=nt(-n+t,0),r=f(),u=g(),c=m();function a(d,p){return it(d,p)<1}function g(){let d=r[0],p=R(r),y=r.lastIndexOf(d),l=r.indexOf(p)+1;return nt(y,l)}function f(){return e.map((d,p)=>{let{min:y,max:l}=o,h=o.constrain(d),x=!p,E=Tt(e,p);return x?l:E||a(y,h)?y:a(l,h)?l:h}).map(d=>parseFloat(d.toFixed(3)))}function m(){if(n<=t+i)return[o.max];if(s==="keepSnaps")return r;let{min:d,max:p}=u;return r.slice(d,p)}return{snapsContained:c,scrollContainLimit:u}}function un(t,n,e){let s=n[0],i=e?s-t:R(n);return{limit:nt(i,s)}}function an(t,n,e,s){let o=n.min+.1,r=n.max+.1,{reachedMin:u,reachedMax:c}=nt(o,r);function a(m){return m===1?c(e.get()):m===-1?u(e.get()):!1}function g(m){if(!a(m))return;let b=t*(m*-1);s.forEach(d=>d.add(b))}return{loop:g}}function fn(t){let{max:n,length:e}=t;function s(o){let r=o-n;return e?r/-e:0}return{get:s}}function ln(t,n,e,s,i){let{startEdge:o,endEdge:r}=t,{groupSlides:u}=i,c=f().map(n.measure),a=m(),g=b();function f(){return u(s).map(p=>R(p)[r]-p[0][o]).map(w)}function m(){return s.map(p=>e[o]-p[o]).map(p=>-w(p))}function b(){return u(a).map(p=>p[0]).map((p,y)=>p+c[y])}return{snaps:a,snapsAligned:g}}function dn(t,n,e,s,i,o){let{groupSlides:r}=i,{min:u,max:c}=s,a=g();function g(){let m=r(o),b=!t||n==="keepSnaps";return e.length===1?[o]:b?m:m.slice(u,c).map((d,p,y)=>{let l=!p,h=Tt(y,p);if(l){let x=R(y[0])+1;return Vt(x)}if(h){let x=ft(o)-R(y)[0]+1;return Vt(x,R(y)[0])}return d})}return{slideRegistry:a}}function pn(t,n,e,s,i){let{reachedAny:o,removeOffset:r,constrain:u}=s;function c(d){return d.concat().sort((p,y)=>w(p)-w(y))[0]}function a(d){let p=t?r(d):u(d),y=n.map((h,x)=>({diff:g(h-p,0),index:x})).sort((h,x)=>w(h.diff)-w(x.diff)),{index:l}=y[0];return{index:l,distance:p}}function g(d,p){let y=[d,d+e,d-e];if(!t)return d;if(!p)return c(y);let l=y.filter(h=>vt(h)===p);return l.length?c(l):R(y)-e}function f(d,p){let y=n[d]-i.get(),l=g(y,p);return{index:d,distance:l}}function m(d,p){let y=i.get()+d,{index:l,distance:h}=a(y),x=!t&&o(y);if(!p||x)return{index:l,distance:d};let E=n[l]-h,L=d+g(E,0);return{index:l,distance:L}}return{byDistance:m,byIndex:f,shortcut:g}}function mn(t,n,e,s,i,o,r){function u(f){let m=f.distance,b=f.index!==n.get();o.add(m),m&&(s.duration()?t.start():(t.update(),t.render(1),t.update())),b&&(e.set(n.get()),n.set(f.index),r.emit("select"))}function c(f,m){let b=i.byDistance(f,m);u(b)}function a(f,m){let b=n.clone().set(f),d=i.byIndex(b.get(),m);u(d)}return{distance:c,index:a}}function gn(t,n,e,s,i,o,r){let u=0;function c(){o.add(document,"keydown",a,!1),n.forEach(g)}function a(m){m.code==="Tab"&&(u=new Date().getTime())}function g(m){let b=()=>{if(new Date().getTime()-u>10)return;t.scrollLeft=0;let y=n.indexOf(m),l=e.findIndex(h=>h.includes(y));It(l)&&(i.useDuration(0),s.index(l,0),r.emit("slideFocus"))};o.add(m,"focus",b,{passive:!0,capture:!0})}return{init:c}}function dt(t){let n=t;function e(){return n}function s(c){n=r(c)}function i(c){n+=r(c)}function o(c){n-=r(c)}function r(c){return It(c)?c:c.get()}return{get:e,set:s,add:i,subtract:o}}function Bt(t,n){let e=t.scroll==="x"?o:r,s=n.style,i=!1;function o(f){return`translate3d(${f}px,0px,0px)`}function r(f){return`translate3d(0px,${f}px,0px)`}function u(f){i||(s.transform=e(t.direction(f)))}function c(f){i=!f}function a(){i||(s.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:a,to:u,toggleActive:c}}function hn(t,n,e,s,i,o,r,u,c){let g=ct(i),f=ct(i).reverse(),m=l().concat(h());function b(I,v){return I.reduce((D,T)=>D-i[T],v)}function d(I,v){return I.reduce((D,T)=>b(D,v)>0?D.concat([T]):D,[])}function p(I){return o.map((v,D)=>({start:v-s[D]+.5+I,end:v+n-.5+I}))}function y(I,v,D){let T=p(v);return I.map(M=>{let N=D?0:-e,B=D?e:0,k=D?"end":"start",$=T[M][k];return{index:M,loopPoint:$,slideLocation:dt(-1),translate:Bt(t,c[M]),target:()=>u.get()>$?N:B}})}function l(){let I=r[0],v=d(f,I);return y(v,e,!1)}function h(){let I=n-r[0]-1,v=d(g,I);return y(v,-e,!0)}function x(){return m.every(({index:I})=>{let v=g.filter(D=>D!==I);return b(v,n)<=.1})}function E(){m.forEach(I=>{let{target:v,translate:D,slideLocation:T}=I,M=v();M!==T.get()&&(D.to(M),T.set(M))})}function L(){m.forEach(I=>I.translate.clear())}return{canLoop:x,clear:L,loop:E,loopPoints:m}}function yn(t,n,e){let s,i=!1;function o(c){if(!e)return;function a(g){for(let f of g)if(f.type==="childList"){c.reInit(),n.emit("slidesChanged");break}}s=new MutationObserver(g=>{i||(Lt(e)||e(c,g))&&a(g)}),s.observe(t,{childList:!0})}function r(){s&&s.disconnect(),i=!0}return{init:o,destroy:r}}function Sn(t,n,e,s){let i={},o=null,r=null,u,c=!1;function a(){u=new IntersectionObserver(d=>{c||(d.forEach(p=>{let y=n.indexOf(p.target);i[y]=p}),o=null,r=null,e.emit("slidesInView"))},{root:t.parentElement,threshold:s}),n.forEach(d=>u.observe(d))}function g(){u&&u.disconnect(),c=!0}function f(d){return ut(i).reduce((p,y)=>{let l=parseInt(y),{isIntersecting:h}=i[l];return(d&&h||!d&&!h)&&p.push(l),p},[])}function m(d=!0){if(d&&o)return o;if(!d&&r)return r;let p=f(d);return d&&(o=p),d||(r=p),p}return{init:a,destroy:g,get:m}}function bn(t,n,e,s,i,o){let{measureSize:r,startEdge:u,endEdge:c}=t,a=e[0]&&i,g=d(),f=p(),m=e.map(r),b=y();function d(){if(!a)return 0;let h=e[0];return w(n[u]-h[u])}function p(){if(!a)return 0;let h=o.getComputedStyle(R(s));return parseFloat(h.getPropertyValue(`margin-${c}`))}function y(){return e.map((h,x,E)=>{let L=!x,O=Tt(E,x);return L?m[x]+g:O?m[x]+f:E[x+1][u]-h[u]}).map(w)}return{slideSizes:m,slideSizesWithGaps:b,startGap:g,endGap:f}}function xn(t,n,e,s,i,o,r,u,c){let{startEdge:a,endEdge:g,direction:f}=t,m=It(e);function b(l,h){return ct(l).filter(x=>x%h===0).map(x=>l.slice(x,x+h))}function d(l){return l.length?ct(l).reduce((h,x,E)=>{let L=R(h)||0,O=L===0,I=x===ft(l),v=i[a]-o[L][a],D=i[a]-o[x][g],T=!s&&O?f(r):0,M=!s&&I?f(u):0,N=w(D-M-(v+T));return E&&N>n+c&&h.push(x),I&&h.push(l.length),h},[]).map((h,x,E)=>{let L=Math.max(E[x-1]||0);return l.slice(L,h)}):[]}function p(l){return m?b(l,e):d(l)}return{groupSlides:p}}function En(t,n,e,s,i,o,r){let{align:u,axis:c,direction:a,startIndex:g,loop:f,duration:m,dragFree:b,dragThreshold:d,inViewThreshold:p,slidesToScroll:y,skipSnaps:l,containScroll:h,watchResize:x,watchSlides:E,watchDrag:L}=o,O=2,I=nn(),v=I.measure(n),D=e.map(I.measure),T=Zt(c,a),M=T.measureSize(v),N=en(M),B=_t(u,M),k=!f&&!!h,$=f||!!h,{slideSizes:J,slideSizesWithGaps:Q,startGap:_,endGap:K}=bn(T,v,D,e,$,i),Z=xn(T,M,y,f,v,D,_,K,O),{snaps:X,snapsAligned:et}=ln(T,B,v,D,Z),Y=-R(X)+R(Q),{snapsContained:rt,scrollContainLimit:st}=cn(M,Y,et,h,O),z=k?rt:et,{limit:U}=un(Y,z,f),V=zt(ft(z),g,f),ot=V.clone(),H=ct(e),F=({dragHandler:tt,scrollBody:St,scrollBounds:bt,options:{loop:lt}})=>{lt||bt.constrain(tt.pointerDown()),St.seek()},S=({scrollBody:tt,translate:St,location:bt,offsetLocation:lt,scrollLooper:Rt,slideLooper:Ut,dragHandler:qt,animation:$t,eventHandler:wt,scrollBounds:Qt,options:{loop:Mt}},Kt)=>{let Ft=tt.velocity(),Pt=tt.settled(),Xt=!Qt.shouldConstrain(),Ct=Mt?Pt:Pt&&Xt;Ct&&!qt.pointerDown()&&($t.stop(),wt.emit("settle")),Ct||wt.emit("scroll"),lt.set(bt.get()-Ft+Ft*Kt),Mt&&(Rt.loop(tt.direction()),Ut.loop()),St.to(lt.get())},A=Jt(s,i,()=>F(yt),tt=>S(yt,tt)),P=.68,C=z[V.get()],q=dt(C),j=dt(C),G=dt(C),W=rn(q,j,G,m,P),gt=pn(f,z,Y,U,G),ht=mn(A,V,ot,W,gt,G,r),Dt=fn(U),Ot=at(),jt=Sn(n,e,r,p),{slideRegistry:At}=dn(k,h,z,st,Z,H),Gt=gn(t,e,At,ht,W,Ot,r),yt={ownerDocument:s,ownerWindow:i,eventHandler:r,containerRect:v,slideRects:D,animation:A,axis:T,dragHandler:Wt(T,t,s,i,G,tn(T,i),q,A,ht,W,gt,V,r,N,b,d,l,P,L),eventStore:Ot,percentOfView:N,index:V,indexPrevious:ot,limit:U,location:q,offsetLocation:j,options:o,resizeHandler:on(n,r,i,e,T,x,I),scrollBody:W,scrollBounds:sn(U,j,G,W,N),scrollLooper:an(Y,U,j,[q,j,G]),scrollProgress:Dt,scrollSnapList:z.map(Dt.get),scrollSnaps:z,scrollTarget:gt,scrollTo:ht,slideLooper:hn(T,M,Y,J,Q,X,z,j,e),slideFocus:Gt,slidesHandler:yn(n,r,E),slidesInView:jt,slideIndexes:H,slideRegistry:At,slidesToScroll:Z,target:G,translate:Bt(T,n)};return yt}function In(){let t={},n;function e(a){n=a}function s(a){return t[a]||[]}function i(a){return s(a).forEach(g=>g(n,a)),c}function o(a,g){return t[a]=s(a).concat([g]),c}function r(a,g){return t[a]=s(a).filter(f=>f!==g),c}function u(){t={}}let c={init:e,emit:i,off:r,on:o,clear:u};return c}var Ln={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function vn(t){function n(o,r){return kt(o,r||{})}function e(o){let r=o.breakpoints||{},u=ut(r).filter(c=>t.matchMedia(c).matches).map(c=>r[c]).reduce((c,a)=>n(c,a),{});return n(o,u)}function s(o){return o.map(r=>ut(r.breakpoints||{})).reduce((r,u)=>r.concat(u),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:e,optionsMediaQueries:s}}function Tn(t){let n=[];function e(o,r){return n=r.filter(({options:u})=>t.optionsAtMedia(u).active!==!1),n.forEach(u=>u.init(o,t)),r.reduce((u,c)=>Object.assign(u,{[c.name]:c}),{})}function s(){n=n.filter(o=>o.destroy())}return{init:e,destroy:s}}function pt(t,n,e){let s=t.ownerDocument,i=s.defaultView,o=vn(i),r=Tn(o),u=at(),c=In(),{mergeOptions:a,optionsAtMedia:g,optionsMediaQueries:f}=o,{on:m,off:b,emit:d}=c,p=M,y=!1,l,h=a(Ln,pt.globalOptions),x=a(h),E=[],L,O,I;function v(){let{container:F,slides:S}=x;O=(xt(F)?t.querySelector(F):F)||t.children[0];let P=xt(S)?O.querySelectorAll(S):S;I=[].slice.call(P||O.children)}function D(F){let S=En(t,O,I,s,i,F,c);if(F.loop&&!S.slideLooper.canLoop()){let A=Object.assign({},F,{loop:!1});return D(A)}return S}function T(F,S){y||(h=a(h,F),x=g(h),E=S||E,v(),l=D(x),f([h,...E.map(({options:A})=>A)]).forEach(A=>u.add(A,"change",M)),x.active&&(l.translate.to(l.location.get()),l.animation.init(),l.slidesInView.init(),l.slideFocus.init(),l.eventHandler.init(H),l.resizeHandler.init(H),l.slidesHandler.init(H),l.options.loop&&l.slideLooper.loop(),O.offsetParent&&I.length&&l.dragHandler.init(H),L=r.init(H,E)))}function M(F,S){let A=X();N(),T(a({startIndex:A},F),S),c.emit("reInit")}function N(){l.dragHandler.destroy(),l.eventStore.clear(),l.translate.clear(),l.slideLooper.clear(),l.resizeHandler.destroy(),l.slidesHandler.destroy(),l.slidesInView.destroy(),l.animation.destroy(),r.destroy(),u.clear()}function B(){y||(y=!0,u.clear(),N(),c.emit("destroy"),c.clear())}function k(F,S,A){!x.active||y||(l.scrollBody.useBaseFriction().useDuration(S===!0?0:x.duration),l.scrollTo.index(F,A||0))}function $(F){let S=l.index.add(1).get();k(S,F,-1)}function J(F){let S=l.index.add(-1).get();k(S,F,1)}function Q(){return l.index.add(1).get()!==X()}function _(){return l.index.add(-1).get()!==X()}function K(){return l.scrollSnapList}function Z(){return l.scrollProgress.get(l.location.get())}function X(){return l.index.get()}function et(){return l.indexPrevious.get()}function Y(){return l.slidesInView.get()}function rt(){return l.slidesInView.get(!1)}function st(){return L}function z(){return l}function U(){return t}function V(){return O}function ot(){return I}let H={canScrollNext:Q,canScrollPrev:_,containerNode:V,internalEngine:z,destroy:B,off:b,on:m,emit:d,plugins:st,previousScrollSnap:et,reInit:p,rootNode:U,scrollNext:$,scrollPrev:J,scrollProgress:Z,scrollSnapList:K,scrollTo:k,selectedScrollSnap:X,slideNodes:ot,slidesInView:Y,slidesNotInView:rt};return T(n,e),setTimeout(()=>c.emit("init"),0),H}pt.globalOptions=void 0;var Dn={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function mt(t={}){let n,e,s,i=!1,o=!0,r=!1,u=0;function c(E,L){e=E;let{mergeOptions:O,optionsAtMedia:I}=L,v=O(Dn,mt.globalOptions),D=O(v,t);if(n=I(D),e.scrollSnapList().length<=1)return;r=n.jump,s=!1;let{eventStore:T,ownerDocument:M}=e.internalEngine(),N=e.rootNode(),B=n.rootNode&&n.rootNode(N)||N,k=e.containerNode();e.on("pointerDown",f),n.stopOnInteraction||e.on("pointerUp",g),n.stopOnMouseEnter&&(T.add(B,"mouseenter",()=>{o=!1,f()}),n.stopOnInteraction||T.add(B,"mouseleave",()=>{o=!0,g()})),n.stopOnFocusIn&&(T.add(k,"focusin",f),n.stopOnInteraction||T.add(k,"focusout",g)),T.add(M,"visibilitychange",m),n.playOnInit&&!b()&&g()}function a(){e.off("pointerDown",f).off("pointerUp",g),f(),s=!0,i=!1}function g(){if(s||!o)return;i||e.emit("autoplay:play");let{ownerWindow:E}=e.internalEngine();E.clearInterval(u),u=E.setInterval(h,n.delay),i=!0}function f(){if(s)return;i&&e.emit("autoplay:stop");let{ownerWindow:E}=e.internalEngine();E.clearInterval(u),u=0,i=!1}function m(){if(b())return o=i,f();o&&g()}function b(){let{ownerDocument:E}=e.internalEngine();return E.visibilityState==="hidden"}function d(E){typeof E<"u"&&(r=E),o=!0,g()}function p(){i&&f()}function y(){i&&d()}function l(){return i}function h(){let{index:E}=e.internalEngine(),L=E.clone().add(1).get(),O=e.scrollSnapList().length-1;n.stopOnLastSnap&&L===O&&f(),e.canScrollNext()?e.scrollNext(r):e.scrollTo(0,r)}return{name:"autoplay",options:t,init:c,destroy:a,play:d,stop:p,reset:y,isPlaying:l}}mt.globalOptions=void 0;function Ht(){return{api:null,init(t={},n=!1,e={}){let s=this.$refs.viewport;n?this.api=EmblaCarousel(s,t,[Autoplay(e)]):this.api=EmblaCarousel(s,t)}}}window.EmblaCarousel=pt;window.Autoplay=mt;window.carouselData=Ht;})();

(()=>{var D_=Object.defineProperty;var N_=(s,t,e)=>t in s?D_(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var zt=(s,t,e)=>N_(s,typeof t!="symbol"?t+"":t,e);function ds(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Cp(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},uo={duration:.5,overwrite:!1,delay:0},$u,Tn,ke,Ri=1e8,Te=1/Ri,Bu=Math.PI*2,O_=Bu/4,U_=0,Rp=Math.sqrt,F_=Math.cos,B_=Math.sin,cn=function(t){return typeof t=="string"},Ye=function(t){return typeof t=="function"},ps=function(t){return typeof t=="number"},jl=function(t){return typeof t>"u"},Ji=function(t){return typeof t=="object"},si=function(t){return t!==!1},qu=function(){return typeof window<"u"},Gl=function(t){return Ye(t)||cn(t)},Pp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ln=Array.isArray,k_=/random\([^)]+\)/g,z_=/,\s*/g,vp=/(?:-?\.?\d|\.)+/gi,Yu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Mr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Iu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zu=/[+-]=-?[.\d]+/,V_=/[^,'"\[\]\s]+/gi,G_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,He,Yi,ku,Ju,mi={},$l={},Ip,Lp=function(t){return($l=ia(t,mi))&&Dn},tc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},fo=function(t,e){return!e&&console.warn(t)},Dp=function(t,e){return t&&(mi[t]=e)&&$l&&($l[t]=e)||mi},po=function(){return 0},H_={suppressEvents:!0,isStart:!0,kill:!1},Hl={suppressEvents:!0,kill:!1},W_={suppressEvents:!0},Ku={},ks=[],zu={},Np,ni={},Lu={},Sp=30,Wl=[],Qu="",ju=function(t){var e=t[0],n,i;if(Ji(e)||Ye(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Wl.length;i--&&!Wl[i].targetTest(e););n=Wl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new id(t[i],n)))||t.splice(i,1);return t},zs=function(t){return t._gsap||ju(Pi(t))[0]._gsap},td=function(t,e,n){return(n=t[e])&&Ye(n)?t[e]():jl(n)&&t.getAttribute&&t.getAttribute(e)||n},Xn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ze=function(t){return Math.round(t*1e5)/1e5||0},Ge=function(t){return Math.round(t*1e7)/1e7||0},br=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},X_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ql=function(){var t=ks.length,e=ks.slice(0),n,i;for(zu={},ks.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ed=function(t){return!!(t._initted||t._startAt||t.add)},Op=function(t,e,n,i){ks.length&&!Tn&&ql(),t.render(e,n,i||!!(Tn&&e<0&&ed(t))),ks.length&&!Tn&&ql()},Up=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(V_).length<2?e:cn(t)?t.trim():t},Fp=function(t){return t},gi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},$_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ia=function(t,e){for(var n in e)t[n]=e[n];return t},Mp=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ji(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Yl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},lo=function(t){var e=t.parent||He,n=t.keyframes?$_(Ln(t.keyframes)):gi;if(si(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},q_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Bp=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},ec=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Vs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},yr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Y_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Vu=function(t,e,n,i){return t._startAt&&(Tn?t._startAt.revert(Hl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Z_=function s(t){return!t||t._ts&&s(t.parent)},bp=function(t){return t._repeat?sa(t._tTime,t=t.duration()+t._rDelay)*t:0},sa=function(t,e){var n=Math.floor(t=Ge(t/e));return t&&n===t?n-1:n},Zl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},nc=function(t){return t._end=Ge(t._start+(t._tDur/Math.abs(t._ts||t._rts||Te)||0))},ic=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ge(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),nc(t),n._dirty||yr(n,t)),t},kp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Zl(t.rawTime(),e),(!e._dur||xo(0,e.totalDuration(),n)-e._tTime>Te)&&e.render(n,!0)),yr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Te}},Zi=function(t,e,n,i){return e.parent&&Vs(e),e._start=Ge((ps(n)?n:!n&&Jl(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==He?Ci(t,n,e):t._time)+e._delay),e._end=Ge(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Bp(t,e,"_first","_last",t._sort?"_start":0),Jl(e)||(t._recent=e),i||kp(t,e),t._ts<0&&ic(t,t._tTime),t},zp=function(t,e){return(mi.ScrollTrigger||tc("scrollTrigger",e))&&mi.ScrollTrigger.create(e,t)},Vp=function(t,e,n,i,r){if(ad(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Tn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Np!==ii.frame)return ks.push(t),t._lazy=[r,i],1},J_=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Jl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},K_=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&J_(t)&&!(!t._initted&&Jl(t))||(t._ts<0||t._dp._ts<0)&&!Jl(t))?0:1,o=t._rDelay,l=0,c,h,f;if(o&&t._repeat&&(l=xo(0,t._tDur,e),h=sa(l,o),t._yoyo&&h&1&&(a=1-a),h!==sa(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||Tn||i||t._zTime===Te||!e&&t._zTime){if(!t._initted&&Vp(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Te:0),n||(n=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Vu(t,e,n,!0),t._onUpdate&&!n&&pi(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&pi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Vs(t,1),!n&&!Tn&&(pi(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Q_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ra=function(t,e,n,i){var r=t._repeat,a=Ge(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:Ge(a*(r+1)+t._rDelay*r):a,o>0&&!i&&ic(t,t._tTime=t._tDur*o),t.parent&&nc(t),n||yr(t.parent,t),t},wp=function(t){return t instanceof In?yr(t):ra(t,t._dur)},j_={_start:0,endTime:po,totalDuration:po},Ci=function s(t,e,n){var i=t.labels,r=t._recent||j_,a=t.duration()>=Ri?r.endTime(!1):t._dur,o,l,c;return cn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Ln(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},co=function(t,e,n){var i=ps(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=si(l.vars.inherit)&&l.parent;a.immediateRender=si(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Ke(e[0],a,e[r+1])},Gs=function(t,e){return t||t===0?e(t):e},xo=function(t,e,n){return n<t?t:n>e?e:n},En=function(t,e){return!cn(t)||!(e=G_.exec(t))?"":e[1]},tx=function(t,e,n){return Gs(n,function(i){return xo(t,e,i)})},Gu=[].slice,Gp=function(t,e){return t&&Ji(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ji(t[0]))&&!t.nodeType&&t!==Yi},ex=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return cn(i)&&!e||Gp(i,1)?(r=n).push.apply(r,Pi(i)):n.push(i)})||n},Pi=function(t,e,n){return ke&&!e&&ke.selector?ke.selector(t):cn(t)&&!n&&(ku||!aa())?Gu.call((e||Ju).querySelectorAll(t),0):Ln(t)?ex(t,n):Gp(t)?Gu.call(t,0):t?[t]:[]},Hu=function(t){return t=Pi(t)[0]||fo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Pi(e,n.querySelectorAll?n:n===t?fo("Invalid scope")||Ju.createElement("div"):t)}},Hp=function(t){return t.sort(function(){return .5-Math.random()})},Wp=function(t){if(Ye(t))return t;var e=Ji(t)?t:{each:t},n=vr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,f=i;return cn(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],f=i[1]),function(d,u,p){var g=(p||e).length,m=a[g],_,y,T,v,M,w,x,S,P;if(!m){if(P=e.grid==="auto"?0:(e.grid||[1,Ri])[1],!P){for(x=-Ri;x<(x=p[P++].getBoundingClientRect().left)&&P<g;);P<g&&P--}for(m=a[g]=[],_=l?Math.min(P,g)*h-.5:i%P,y=P===Ri?0:l?g*f/P-.5:i/P|0,x=0,S=Ri,w=0;w<g;w++)T=w%P-_,v=y-(w/P|0),m[w]=M=c?Math.abs(c==="y"?v:T):Rp(T*T+v*v),M>x&&(x=M),M<S&&(S=M);i==="random"&&Hp(m),m.max=x-S,m.min=S,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(P>g?g-1:c?c==="y"?g/P:P:Math.max(P,g/P))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=En(e.amount||e.each)||0,n=n&&g<0?px(n):n}return g=(m[d]-m.min)/m.max||0,Ge(m.b+(n?n(g):g)*m.v)+m.u}},Wu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ge(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ps(n)?0:En(n))}},Xp=function(t,e){var n=Ln(t),i,r;return!n&&Ji(t)&&(i=n=t.radius||Ri,t.values?(t=Pi(t.values),(r=!ps(t[0]))&&(i*=i)):t=Wu(t.increment)),Gs(e,n?Ye(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Ri,h=0,f=t.length,d,u;f--;)r?(d=t[f].x-o,u=t[f].y-l,d=d*d+u*u):d=Math.abs(t[f]-o),d<c&&(c=d,h=f);return h=!i||c<=i?t[h]:a,r||h===a||ps(a)?h:h+En(a)}:Wu(t))},$p=function(t,e,n,i){return Gs(Ln(t)?!e:n===!0?!!(n=0):!i,function(){return Ln(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},nx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},ix=function(t,e){return function(n){return t(parseFloat(n))+(e||En(n))}},sx=function(t,e,n){return Yp(t,e,0,1,n)},qp=function(t,e,n){return Gs(n,function(i){return t[~~e(i)]})},rx=function s(t,e,n){var i=e-t;return Ln(t)?qp(t,s(0,t.length),e):Gs(n,function(r){return(i+(r-t)%i)%i+t})},ax=function s(t,e,n){var i=e-t,r=i*2;return Ln(t)?qp(t,s(0,t.length-1),e):Gs(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},oa=function(t){return t.replace(k_,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(z_);return $p(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Yp=function(t,e,n,i,r){var a=e-t,o=i-n;return Gs(r,function(l){return n+((l-t)/a*o||0)})},ox=function s(t,e,n,i){var r=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!r){var a=cn(t),o={},l,c,h,f,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Ln(t)&&!Ln(e)){for(h=[],f=t.length,d=f-2,c=1;c<f;c++)h.push(s(t[c-1],t[c]));f--,r=function(p){p*=f;var g=Math.min(d,~~p);return h[g](p-g)},n=e}else i||(t=ia(Ln(t)?[]:{},t));if(!h){for(l in e)sd.call(o,t,l,"get",e[l]);r=function(p){return cd(p,o)||(a?t.p:t)}}}return Gs(n,r)},Tp=function(t,e,n){var i=t.labels,r=Ri,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},pi=function(t,e,n){var i=t.vars,r=i[e],a=ke,o=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&ks.length&&ql(),o&&(ke=o),h=l?r.apply(c,l):r.call(c),ke=a,h},ao=function(t){return Vs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Tn),t.progress()<1&&pi(t,"onInterrupt"),t},na,Zp=[],Jp=function(t){if(t)if(t=!t.name&&t.default||t,qu()||t.headless){var e=t.name,n=Ye(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:po,render:cd,add:sd,kill:wx,modifier:bx,rawVars:0},a={targetTest:0,get:0,getSetter:sc,aliases:{},register:0};if(aa(),t!==i){if(ni[e])return;gi(i,gi(Yl(t,r),a)),ia(i.prototype,ia(r,Yl(t,a))),ni[i.prop=e]=i,t.targetTest&&(Wl.push(i),Ku[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Dp(e,i),t.register&&t.register(Dn,i,$n)}else Zp.push(t)},Ie=255,oo={aqua:[0,Ie,Ie],lime:[0,Ie,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ie],navy:[0,0,128],white:[Ie,Ie,Ie],olive:[128,128,0],yellow:[Ie,Ie,0],orange:[Ie,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ie,0,0],pink:[Ie,192,203],cyan:[0,Ie,Ie],transparent:[Ie,Ie,Ie,0]},Du=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ie+.5|0},Kp=function(t,e,n){var i=t?ps(t)?[t>>16,t>>8&Ie,t&Ie]:0:oo.black,r,a,o,l,c,h,f,d,u,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),oo[t])i=oo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ie,i&Ie,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ie,t&Ie]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(vp),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=Du(l+1/3,r,a),i[1]=Du(l,r,a),i[2]=Du(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(Yu),n&&i.length<4&&(i[3]=1),i}else i=t.match(vp)||oo.transparent;i=i.map(Number)}return e&&!p&&(r=i[0]/Ie,a=i[1]/Ie,o=i[2]/Ie,f=Math.max(r,a,o),d=Math.min(r,a,o),h=(f+d)/2,f===d?l=c=0:(u=f-d,c=h>.5?u/(2-f-d):u/(f+d),l=f===r?(a-o)/u+(a<o?6:0):f===a?(o-r)/u+2:(r-a)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Qp=function(t){var e=[],n=[],i=-1;return t.split(fs).forEach(function(r){var a=r.match(Mr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Ep=function(t,e,n){var i="",r=(t+i).match(fs),a=e?"hsla(":"rgba(",o=0,l,c,h,f;if(!r)return t;if(r=r.map(function(d){return(d=Kp(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Qp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(fs,"1").split(Mr),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(fs),f=c.length-1;o<f;o++)i+=c[o]+r[o];return i+c[f]},fs=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in oo)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),lx=/hsl[a]?\(/,nd=function(t){var e=t.join(" "),n;if(fs.lastIndex=0,fs.test(e))return n=lx.test(e),t[1]=Ep(t[1],n),t[0]=Ep(t[0],n,Qp(t[1])),!0},mo,ii=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,f,d,u,p=function g(m){var _=s()-i,y=m===!0,T,v,M,w;if((_>t||_<0)&&(n+=_-e),i+=_,M=i-n,T=M-a,(T>0||y)&&(w=++f.frame,d=M-f.time*1e3,f.time=M=M/1e3,a+=T+(T>=r?0:r-T),v=1),y||(l=c(g)),v)for(u=0;u<o.length;u++)o[u](M,d,w,m)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Ip&&(!ku&&qu()&&(Yi=ku=window,Ju=Yi.document||{},mi.gsap=Dn,(Yi.gsapVersions||(Yi.gsapVersions=[])).push(Dn.version),Lp($l||Yi.GreenSockGlobals||!Yi.gsap&&Yi||{}),Zp.forEach(Jp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(m){return setTimeout(m,a-f.time*1e3+1|0)},mo=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),mo=0,c=po},lagSmoothing:function(m,_){t=m||1/0,e=Math.min(_||33,t)},fps:function(m){r=1e3/(m||240),a=f.time*1e3+r},add:function(m,_,y){var T=_?function(v,M,w,x){m(v,M,w,x),f.remove(T)}:m;return f.remove(m),o[y?"unshift":"push"](T),aa(),T},remove:function(m,_){~(_=o.indexOf(m))&&o.splice(_,1)&&u>=_&&u--},_listeners:o},f})(),aa=function(){return!mo&&ii.wake()},de={},cx=/^[\d.\-M][\d.\-,\s]/,hx=/["']/g,ux=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(hx,"").trim():+c,i=l.substr(o+1).trim();return e},dx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},fx=function(t){var e=(t+"").split("("),n=de[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[ux(e[1])]:dx(t).split(",").map(Up)):de._CE&&cx.test(t)?de._CE("",t):n},px=function(t){return function(e){return 1-t(1-e)}},vr=function(t,e){return t&&(Ye(t)?t:de[t]||fx(t))||e},wr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return Xn(t,function(o){de[o]=mi[o]=r,de[a=o.toLowerCase()]=n;for(var l in r)de[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=de[o+"."+l]=r[l]}),r},jp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Nu=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/Bu*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*B_((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:jp(o);return r=Bu/r,l.config=function(c,h){return s(t,c,h)},l},Ou=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:jp(n);return i.config=function(r){return s(t,r)},i};Xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;wr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});de.Linear.easeNone=de.none=de.Linear.easeIn;wr("Elastic",Nu("in"),Nu("out"),Nu());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};wr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);wr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});wr("Circ",function(s){return-(Rp(1-s*s)-1)});wr("Sine",function(s){return s===1?1:-F_(s*O_)+1});wr("Back",Ou("in"),Ou("out"),Ou());de.SteppedEase=de.steps=mi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-Te;return function(o){return((i*xo(0,a,o)|0)+r)*n}}};uo.ease=de["quad.out"];Xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Qu+=s+","+s+"Params,"});var id=function(t,e){this.id=U_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:td,this.set=e?e.getSetter:sc},go=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ra(this,+e.duration,1,1),this.data=e.data,ke&&(this._ctx=ke,ke.data.push(this)),mo||ii.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ra(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(aa(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ic(this,n),!r._dp||r.parent||kp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Zi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Te||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Op(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+bp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+bp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?sa(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Te?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Zl(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Te?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||r>0&&r<o)&&this.totalTime(xo(-Math.abs(this._delay),o,r),i!==!1),nc(this),Y_(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{aa(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==Te,a;if(r)for(this._tTime-=Te,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+Te){r=!1;break}a=a._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=Ge(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Zi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(si(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Zl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=W_);var i=Tn;return Tn=n,ed(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Tn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,wp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ci(this,n),si(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,si(i)),this._dur||(this._zTime=-Te),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Te)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=Ye(n)?n:Fp,l=function(){var h=i.then;i.then=null,r&&r(),Ye(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){ao(this)},s})();gi(go.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Te,_prom:0,_ps:!1,_rts:1});var In=(function(s){Cp(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=si(n.sortChildren),He&&Zi(n.parent||He,ds(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&zp(ds(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return co(0,arguments,this),this},e.from=function(i,r,a){return co(1,arguments,this),this},e.fromTo=function(i,r,a,o){return co(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,lo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ke(i,r,Ci(this,a),1),this},e.call=function(i,r,a){return Zi(this,Ke.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Ke(i,a,Ci(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,lo(a).immediateRender=si(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},e.staggerFromTo=function(i,r,a,o,l,c,h,f){return o.startAt=a,lo(o).immediateRender=si(o.immediateRender),this.staggerTo(i,r,o,l,c,h,f)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ge(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,u,p,g,m,_,y,T,v,M,w,x;if(this!==He&&h>l&&i>=0&&(h=l),h!==this._tTime||a||f){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,v=this._start,T=this._ts,_=!T,f&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(d=Ge(h%m),h===l?(g=this._repeat,d=c):(M=Ge(h/m),g=~~M,g&&g===M&&(d=c,g--),d>c&&(d=c)),M=sa(this._tTime,m),!o&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),w&&g&1&&(d=c-d,x=1),g!==M&&!this._lock){var S=w&&M&1,P=S===(w&&g&1);if(g<M&&(S=!S),o=S?0:h%c?c:h,this._lock=1,this.render(o||(x?0:Ge(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&pi(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,M=g),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,o=S?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Q_(this,Ge(o),Ge(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!r&&!M&&(pi(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(u=this._first;u;){if(p=u._next,(u._act||d>=u._start)&&u._ts&&y!==u){if(u.parent!==this)return this.render(i,r,a);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,r,a),d!==this._time||!this._ts&&!_){y=0,p&&(h+=this._zTime=-Te);break}}u=p}else{u=this._last;for(var A=i<0?i:d;u;){if(p=u._prev,(u._act||A<=u._end)&&u._ts&&y!==u){if(u.parent!==this)return this.render(i,r,a);if(u.render(u._ts>0?(A-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(A-u._start)*u._ts,r,a||Tn&&ed(u)),d!==this._time||!this._ts&&!_){y=0,p&&(h+=this._zTime=A?-Te:Te);break}}u=p}}if(y&&!r&&(this.pause(),y.render(d>=o?0:-Te)._zTime=d>=o?1:-1,this._ts))return this._start=v,nc(this),this.render(i,r,a);this._onUpdate&&!r&&pi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Vs(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(pi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(ps(r)||(r=Ci(this,r,i)),!(i instanceof go)){if(Ln(i))return i.forEach(function(o){return a.add(o,r)}),this;if(cn(i))return this.addLabel(i,r);if(Ye(i))i=Ke.delayedCall(0,i);else return this}return this!==i?Zi(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ri);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ke?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return cn(i)?this.removeLabel(i):Ye(i)?this.killTweensOf(i):(i.parent===this&&ec(this,i),i===this._recent&&(this._recent=this._last),yr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ge(ii.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Ci(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=Ke.delayedCall(0,r||po,a);return o.data="isPause",this._hasPause=1,Zi(this,o,Ci(this,i))},e.removePause=function(i){var r=this._first;for(i=Ci(this,i);r;)r._start===i&&r.data==="isPause"&&Vs(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Bs!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=Pi(i),l=this._first,c=ps(r),h;l;)l instanceof Ke?X_(l._targets,o)&&(c?(!Bs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=Ci(a,i),l=r,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,u,p=Ke.to(a,gi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Te,onStart:function(){if(a.pause(),!u){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==m&&ra(p,m,0,1).render(p._time,!0,!0),u=1}h&&h.apply(p,f||[])}},r));return d?p.render(0):p},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,gi({startAt:{time:Ci(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Tp(this,Ci(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Tp(this,Ci(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Te)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ge(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return yr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),yr(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=Ri,c,h,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Zi(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Ge(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;ra(a,a===He&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(He._ts&&(Op(He,Zl(i,He)),Np=ii.frame),ii.frame>=Sp){Sp+=ri.autoSleep||120;var r=He._first;if((!r||!r._ts)&&ri.autoSleep&&ii._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ii.sleep()}}},t})(go);gi(In.prototype,{_lock:0,_hasPause:0,_forcing:0});var mx=function(t,e,n,i,r,a,o){var l=new $n(this._pt,t,e,0,1,ld,null,r),c=0,h=0,f,d,u,p,g,m,_,y;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=oa(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),d=n.match(Iu)||[];f=Iu.exec(i);)p=f[0],g=i.substring(c,f.index),u?u=(u+1)%5:g.substr(-5)==="rgba("&&(u=1),p!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:p.charAt(1)==="="?br(m,p)-m:parseFloat(p)-m,m:u&&u<4?Math.round:0},c=Iu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Zu.test(i)||_)&&(l.e=0),this._pt=l,l},sd=function(t,e,n,i,r,a,o,l,c,h){Ye(i)&&(i=i(r||0,t,a));var f=t[e],d=n!=="get"?n:Ye(f)?c?t[e.indexOf("set")||!Ye(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,u=Ye(f)?c?vx:em:od,p;if(cn(i)&&(~i.indexOf("random(")&&(i=oa(i)),i.charAt(1)==="="&&(p=br(d,i)+(En(d)||0),(p||p===0)&&(i=p))),!h||d!==i||Xu)return!isNaN(d*i)&&i!==""?(p=new $n(this._pt,t,e,+d||0,i-(d||0),typeof f=="boolean"?Mx:nm,0,u),c&&(p.fp=c),o&&p.modifier(o,this,t),this._pt=p):(!f&&!(e in t)&&tc(e,i),mx.call(this,t,e,d,i,u,l||ri.stringFilter,c))},gx=function(t,e,n,i,r){if(Ye(t)&&(t=ho(t,r,e,n,i)),!Ji(t)||t.style&&t.nodeType||Ln(t)||Pp(t))return cn(t)?ho(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=ho(t[o],r,e,n,i);return a},rd=function(t,e,n,i,r,a){var o,l,c,h;if(ni[t]&&(o=new ni[t]).init(r,o.rawVars?e[t]:gx(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new $n(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==na))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Bs,Xu,ad=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,d=i.keyframes,u=i.autoRevert,p=t._dur,g=t._startAt,m=t._targets,_=t.parent,y=_&&_.data==="nested"?_.vars.targets:m,T=t._overwrite==="auto"&&!$u,v=t.timeline,M=i.easeReverse||f,w,x,S,P,A,D,I,V,L,G,O,N,F;if(v&&(!d||!r)&&(r="none"),t._ease=vr(r,uo.ease),t._rEase=M&&(vr(M)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||d&&!i.stagger){if(V=m[0]?zs(m[0]).harness:0,N=V&&i[V.prop],w=Yl(i,Ku),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!u?g.render(-1,!0):g.revert(h&&p?Hl:H_),g._lazy=0),a){if(Vs(t._startAt=Ke.set(m,gi({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!g&&si(l),startAt:null,delay:0,onUpdate:c&&function(){return pi(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Tn||!o&&!u)&&t._startAt.revert(Hl),o&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!g){if(e&&(o=!1),S=gi({overwrite:!1,data:"isFromStart",lazy:o&&!g&&si(l),immediateRender:o,stagger:0,parent:_},w),N&&(S[V.prop]=N),Vs(t._startAt=Ke.set(m,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Tn?t._startAt.revert(Hl):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,Te,Te);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&si(l)||l&&!p,x=0;x<m.length;x++){if(A=m[x],I=A._gsap||ju(m)[x]._gsap,t._ptLookup[x]=G={},zu[I.id]&&ks.length&&ql(),O=y===m?x:y.indexOf(A),V&&(L=new V).init(A,N||w,t,O,y)!==!1&&(t._pt=P=new $n(t._pt,A,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(B){G[B]=P}),L.priority&&(D=1)),!V||N)for(S in w)ni[S]&&(L=rd(S,w,t,O,A,y))?L.priority&&(D=1):G[S]=P=sd.call(t,A,S,"get",w[S],O,y,0,i.stringFilter);t._op&&t._op[x]&&t.kill(A,t._op[x]),T&&t._pt&&(Bs=t,He.killTweensOf(A,G,t.globalTime(e)),F=!t.parent,Bs=0),t._pt&&l&&(zu[I.id]=1)}D&&hd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!F,d&&e<=0&&v.render(Ri,!0,!0)},_x=function(t,e,n,i,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,d,u;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,u=t._targets.length;u--;){if(h=d[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Xu=1,t.vars[e]="+=0",ad(t,o),Xu=0,l?fo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)f=c[u],h=f._pt||f,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,f.e&&(f.e=Ze(n)+En(f.e)),f.b&&(f.b=h.s+En(f.b))},xx=function(t,e){var n=t[0]?zs(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=ia({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},yx=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(Ln(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},ho=function(t,e,n,i,r){return Ye(t)?t.call(e,n,i,r):cn(t)&&~t.indexOf("random(")?oa(t):t},Kl=Qu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",tm={};Xn(Kl+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return tm[s]=1});Kl=Kl.split(",");var Ke=(function(s){Cp(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:lo(i))||this;var l=o.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,u=l.overwrite,p=l.keyframes,g=l.defaults,m=l.scrollTrigger,_=i.parent||He,y=(Ln(n)||Pp(n)?ps(n[0]):"length"in i)?[n]:Pi(n),T,v,M,w,x,S,P,A;if(o._targets=y.length?ju(y):fo("GSAP target "+n+" not found. https://gsap.com",!ri.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=u,p||d||Gl(c)||Gl(h)){i=o.vars;var D=i.easeReverse||i.yoyoEase;if(T=o.timeline=new In({data:"nested",defaults:g||{},targets:_&&_.data==="nested"?_.vars.targets:y}),T.kill(),T.parent=T._dp=ds(o),T._start=0,d||Gl(c)||Gl(h)){if(w=y.length,P=d&&Wp(d),Ji(d))for(x in d)~Kl.indexOf(x)&&(A||(A={}),A[x]=d[x]);for(v=0;v<w;v++)M=Yl(i,tm),M.stagger=0,D&&(M.easeReverse=D),A&&ia(M,A),S=y[v],M.duration=+ho(c,ds(o),v,S,y),M.delay=(+ho(h,ds(o),v,S,y)||0)-o._delay,!d&&w===1&&M.delay&&(o._delay=h=M.delay,o._start+=h,M.delay=0),T.to(S,M,P?P(v,S,y):0),T._ease=de.none;T.duration()?c=h=0:o.timeline=0}else if(p){lo(gi(T.vars.defaults,{ease:"none"})),T._ease=vr(p.ease||i.ease||"none");var I=0,V,L,G;if(Ln(p))p.forEach(function(O){return T.to(y,O,">")}),T.duration();else{M={};for(x in p)x==="ease"||x==="easeEach"||yx(x,p[x],M,p.easeEach);for(x in M)for(V=M[x].sort(function(O,N){return O.t-N.t}),I=0,v=0;v<V.length;v++)L=V[v],G={ease:L.e,duration:(L.t-(v?V[v-1].t:0))/100*c},G[x]=L.v,T.to(y,G,I),I+=G.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return u===!0&&!$u&&(Bs=ds(o),He.killTweensOf(y),Bs=0),Zi(_,ds(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!p&&o._start===Ge(_._time)&&si(f)&&Z_(ds(o))&&_.data!=="nested")&&(o._tTime=-Te,o.render(Math.max(0,-h)||0)),m&&zp(ds(o),m),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-Te&&!h?l:i<Te?0:i,d,u,p,g,m,_,y,T;if(!c)K_(this,i,r,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=f,T=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,a);if(d=Ge(f%g),f===l?(p=this._repeat,d=c):(m=Ge(f/g),p=~~m,p&&p===m?(d=c,p--):d>c&&(d=c)),_=this._yoyo&&p&1,_&&(d=c-d),m=sa(this._tTime,g),d===o&&!a&&this._initted&&p===m)return this._tTime=f,this;p!==m&&this.vars.repeatRefresh&&!_&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(Ge(g*p),!0).invalidate()._lock=0)}if(!this._initted){if(Vp(this,h?i:d,a,r,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var v=d<o;if(v!==this._inv){var M=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(v?-1:1)/M:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(d/c);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!r&&!m&&(pi(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(y,u.d),u=u._next;T&&T.render(i<0?i:T._dur*T._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Vu(this,i,r,a),pi(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&pi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Vu(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Vs(this,1),!r&&!(h&&!o)&&(f||o||_)&&(pi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,l){mo||ii.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||ad(this,c),h=this._ease(c/this._dur),_x(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(ic(this,0),this.parent||Bp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ao(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Tn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Bs&&Bs.vars.overwrite!==!0)._first||ao(this),this.parent&&a!==this.timeline.totalDuration()&&ra(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Pi(i):o,c=this._ptLookup,h=this._pt,f,d,u,p,g,m,_;if((!r||r==="all")&&q_(o,l))return r==="all"&&(this._pt=0),ao(this);for(f=this._op=this._op||[],r!=="all"&&(cn(r)&&(g={},Xn(r,function(y){return g[y]=1}),r=g),r=xx(o,r)),_=o.length;_--;)if(~l.indexOf(o[_])){d=c[_],r==="all"?(f[_]=r,p=d,u={}):(u=f[_]=f[_]||{},p=r);for(g in p)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ec(this,m,"_pt"),delete d[g]),u!=="all"&&(u[g]=1)}return this._initted&&!this._pt&&h&&ao(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return co(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return co(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return He.killTweensOf(i,r,a)},t})(go);gi(Ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xn("staggerTo,staggerFrom,staggerFromTo",function(s){Ke[s]=function(){var t=new In,e=Gu.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var od=function(t,e,n){return t[e]=n},em=function(t,e,n){return t[e](n)},vx=function(t,e,n,i){return t[e](i.fp,n)},Sx=function(t,e,n){return t.setAttribute(e,n)},sc=function(t,e){return Ye(t[e])?em:jl(t[e])&&t.setAttribute?Sx:od},nm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Mx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ld=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},cd=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},bx=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},wx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ec(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Tx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},hd=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},$n=(function(){function s(e,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||nm,this.d=l||this,this.set=c||od,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Tx,this.m=n,this.mt=r,this.tween=i},s})();Xn(Qu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Ku[s]=1});mi.TweenMax=mi.TweenLite=Ke;mi.TimelineLite=mi.TimelineMax=In;He=new In({sortChildren:!1,defaults:uo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ri.stringFilter=nd;var Sr=[],Xl={},Ex=[],Ap=0,Ax=0,Uu=function(t){return(Xl[t]||Ex).map(function(e){return e()})},_o=function(){var t=Date.now(),e=[];t-Ap>2&&(Uu("matchMediaInit"),Sr.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Yi.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Uu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ap=t,Uu("matchMedia"))},im=(function(){function s(e,n){this.selector=n&&Hu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ax++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ye(n)&&(r=i,i=n,n=Ye);var a=this,o=function(){var c=ke,h=a.selector,f;return c&&c!==a&&c.data.push(a),r&&(a.selector=Hu(r)),ke=a,f=i.apply(a,arguments),Ye(f)&&a._r.push(f),ke=c,a.selector=h,a.isReverted=!1,f};return a.last=o,n===Ye?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=ke;ke=null,n(this),ke=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ke&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof In?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ke)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=Sr.length;a--;)Sr[a].id===this.id&&Sr.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(_o):o.removeEventListener("change",_o)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),Cx=(function(){function s(e){this.contexts=[],this.scope=e,ke&&ke.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Ji(n)||(n={matches:n});var a=new im(0,r||this.scope),o=a.conditions={},l,c,h;ke&&!a.selector&&(a.selector=ke.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Yi.matchMedia(n[c]),l&&(Sr.indexOf(a)<0&&Sr.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(_o):l.addEventListener("change",_o),(a._mqs||(a._mqs=[])).push(l)));return h&&i(a,function(f){return a.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Ql={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Jp(i)})},timeline:function(t){return new In(t)},getTweensOf:function(t,e){return He.getTweensOf(t,e)},getProperty:function(t,e,n,i){cn(t)&&(t=Pi(t)[0]);var r=zs(t||{}).get,a=n?Fp:Up;return n==="native"&&(n=""),t&&(e?a((ni[e]&&ni[e].get||r)(t,e,n,i)):function(o,l,c){return a((ni[o]&&ni[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Pi(t),t.length>1){var i=t.map(function(h){return Dn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var f=r;f--;)i[f](h)}}t=t[0]||{};var a=ni[e],o=zs(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var f=new a;na._pt=0,f.init(t,n?h+n:h,na,0,[t]),f.render(1,f),na._pt&&cd(1,na)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=Dn.to(t,gi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return He.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=vr(t.ease,uo.ease)),Mp(uo,t||{})},config:function(t){return Mp(ri,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ni[o]&&!mi[o]&&fo(e+" effect requires "+o+" plugin.")}),Lu[e]=function(o,l,c){return n(Pi(o),gi(l||{},r),c)},a&&(In.prototype[e]=function(o,l,c){return this.add(Lu[e](o,Ji(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){de[t]=vr(e)},parseEase:function(t,e){return arguments.length?vr(t,e):de},getById:function(t){return He.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new In(t),i,r;for(n.smoothChildTiming=si(t.smoothChildTiming),He.remove(n),n._dp=0,n._time=n._tTime=He._time,i=He._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Ke&&i.vars.onComplete===i._targets[0]))&&Zi(n,i,i._start-i._delay),i=r;return Zi(He,n,0),n},context:function(t,e){return t?new im(t,e):ke},matchMedia:function(t){return new Cx(t)},matchMediaRefresh:function(){return Sr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||_o()},addEventListener:function(t,e){var n=Xl[t]||(Xl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Xl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:rx,wrapYoyo:ax,distribute:Wp,random:$p,snap:Xp,normalize:sx,getUnit:En,clamp:tx,splitColor:Kp,toArray:Pi,selector:Hu,mapRange:Yp,pipe:nx,unitize:ix,interpolate:ox,shuffle:Hp},install:Lp,effects:Lu,ticker:ii,updateRoot:In.updateRoot,plugins:ni,globalTimeline:He,core:{PropTween:$n,globals:Dp,Tween:Ke,Timeline:In,Animation:go,getCache:zs,_removeLinkedListItem:ec,reverting:function(){return Tn},context:function(t){return t&&ke&&(ke.data.push(t),t._ctx=ke),ke},suppressOverwrites:function(t){return $u=t}}};Xn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ql[s]=Ke[s]});ii.add(In.updateRoot);na=Ql.to({},{duration:0});var Rx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Px=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Rx(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},Fu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(cn(r)&&(l={},Xn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Px(o,r)}}}},Dn=Ql.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Tn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Fu("roundProps",Wu),Fu("modifiers"),Fu("snap",Xp))||Ql;Ke.version=In.version=Dn.version="3.15.1";Ip=1;qu()&&aa();var Ix=de.Power0,Lx=de.Power1,Dx=de.Power2,Nx=de.Power3,Ox=de.Power4,Ux=de.Linear,Fx=de.Quad,Bx=de.Cubic,kx=de.Quart,zx=de.Quint,Vx=de.Strong,Gx=de.Elastic,Hx=de.Back,Wx=de.SteppedEase,Xx=de.Bounce,$x=de.Sine,qx=de.Expo,Yx=de.Circ;var sm,Hs,ca,gd,Cr,Zx,rm,_d,Jx=function(){return typeof window<"u"},gs={},Ar=180/Math.PI,ha=Math.PI/180,la=Math.atan2,am=1e8,xd=/([A-Z])/g,Kx=/(left|right|width|margin|padding|x)/i,Qx=/[\s,\(]\S/,Ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},dd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},jx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ty=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ey=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ny=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},pm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},mm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},iy=function(t,e,n){return t.style[e]=n},sy=function(t,e,n){return t.style.setProperty(e,n)},ry=function(t,e,n){return t._gsap[e]=n},ay=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},oy=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},ly=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},We="transform",ai=We+"Origin",cy=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in gs&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Ki[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=ms(i,o)}):this.tfm[t]=a.x?a[t]:ms(i,t),t===ai&&(this.tfm.zOrigin=a.zOrigin);else return Ki.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(We)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ai,e,"")),t=We}(r||e)&&this.props.push(t,e,r[t])},gm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},hy=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(xd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=_d(),(!r||!r.isStart)&&!n[We]&&(gm(n),i.zOrigin&&n[ai]&&(n[ai]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},_m=function(t,e){var n={target:t,props:[],revert:hy,save:cy};return t._gsap||Dn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},xm,fd=function(t,e){var n=Hs.createElementNS?Hs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Hs.createElement(t);return n&&n.style?n:Hs.createElement(t)},_i=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(xd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,ua(e)||e,1)||""},om="O,Moz,ms,Ms,Webkit".split(","),ua=function(t,e,n){var i=e||Cr,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(om[a]+t in r););return a<0?null:(a===3?"ms":a>=0?om[a]:"")+t},pd=function(){Jx()&&window.document&&(sm=window,Hs=sm.document,ca=Hs.documentElement,Cr=fd("div")||{style:{}},Zx=fd("div"),We=ua(We),ai=We+"Origin",Cr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xm=!!ua("perspective"),_d=Dn.core.reverting,gd=1)},lm=function(t){var e=t.ownerSVGElement,n=fd("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),ca.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),ca.removeChild(n),r},cm=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},ym=function(t){var e,n;try{e=t.getBBox()}catch{e=lm(t),n=1}return e&&(e.width||e.height)||n||(e=lm(t)),e&&!e.width&&!e.x&&!e.y?{x:+cm(t,["x","cx","x1"])||0,y:+cm(t,["y","cy","y1"])||0,width:0,height:0}:e},vm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ym(t))},Xs=function(t,e){if(e){var n=t.style,i;e in gs&&e!==ai&&(e=We),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(xd,"-$1").toLowerCase())):n.removeAttribute(e)}},Ws=function(t,e,n,i,r,a){var o=new $n(t._pt,e,n,0,1,a?mm:pm);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},hm={deg:1,rad:1,turn:1},uy={grid:1,flex:1},$s=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Cr.style,l=Kx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",u=i==="%",p,g,m,_;if(i===a||!r||hm[i]||hm[a])return r;if(a!=="px"&&!d&&(r=s(t,e,n,"px")),_=t.getCTM&&vm(t),(u||a==="%")&&(gs[e]||~e.indexOf("adius")))return p=_?t.getBBox()[l?"width":"height"]:t[h],Ze(u?r/p*f:r/100*p);if(o[l?"width":"height"]=f+(d?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,_&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Hs||!g.appendChild)&&(g=Hs.body),m=g._gsap,m&&u&&m.width&&l&&m.time===ii.time&&!m.uncache)return Ze(r/m.width*f);if(u&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=f+i,p=t[h],y?t.style[e]=y:Xs(t,e)}else(u||a==="%")&&!uy[_i(g,"display")]&&(o.position=_i(t,"position")),g===t&&(o.position="static"),g.appendChild(Cr),p=Cr[h],g.removeChild(Cr),o.position="absolute";return l&&u&&(m=zs(g),m.time=ii.time,m.width=g[h]),Ze(d?p*r/f:p&&r?f/p*r:0)},ms=function(t,e,n,i){var r;return gd||pd(),e in Ki&&e!=="transform"&&(e=Ki[e],~e.indexOf(",")&&(e=e.split(",")[0])),gs[e]&&e!=="transform"?(r=So(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:ac(_i(t,ai))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=rc[e]&&rc[e](t,e,n)||_i(t,e)||td(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?$s(t,e,r,n)+n:r},dy=function(t,e,n,i){if(!n||n==="none"){var r=ua(e,t,1),a=r&&_i(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=_i(t,"borderTopColor"))}var o=new $n(this._pt,t.style,e,0,1,ld),l=0,c=0,h,f,d,u,p,g,m,_,y,T,v,M;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=_i(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=_i(t,e)||i,g?t.style[e]=g:Xs(t,e)),h=[n,i],nd(h),n=h[0],i=h[1],d=n.match(Mr)||[],M=i.match(Mr)||[],M.length){for(;f=Mr.exec(i);)m=f[0],y=i.substring(l,f.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),m!==(g=d[c++]||"")&&(u=parseFloat(g)||0,v=g.substr((u+"").length),m.charAt(1)==="="&&(m=br(u,m)+v),_=parseFloat(m),T=m.substr((_+"").length),l=Mr.lastIndex-T.length,T||(T=T||ri.units[e]||v,l===i.length&&(i+=T,o.e+=T)),v!==T&&(u=$s(t,e,g,T)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:u,c:_-u,m:p&&p<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?mm:pm;return Zu.test(i)&&(o.e=0),this._pt=o,o},um={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fy=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=um[n]||n,e[1]=um[i]||i,e.join(" ")},py=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],gs[o]&&(l=1,o=o==="transformOrigin"?ai:We),Xs(n,o);l&&(Xs(n,We),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",So(n,1),a.uncache=1,gm(i)))}},rc={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new $n(t._pt,e,n,0,0,py);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},vo=[1,0,0,1,0,0],Sm={},Mm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},dm=function(t){var e=_i(t,We);return Mm(e)?vo:e.substr(7).match(Yu).map(Ze)},yd=function(t,e){var n=t._gsap||zs(t),i=t.style,r=dm(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?vo:r):(r===vo&&!t.offsetParent&&t!==ca&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,ca.appendChild(t)),r=dm(t),l?i.display=l:Xs(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ca.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},md=function(t,e,n,i,r,a){var o=t._gsap,l=r||yd(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,f=o.xOffset||0,d=o.yOffset||0,u=l[0],p=l[1],g=l[2],m=l[3],_=l[4],y=l[5],T=e.split(" "),v=parseFloat(T[0])||0,M=parseFloat(T[1])||0,w,x,S,P;n?l!==vo&&(x=u*m-p*g)&&(S=v*(m/x)+M*(-g/x)+(g*y-m*_)/x,P=v*(-p/x)+M*(u/x)-(u*y-p*_)/x,v=S,M=P):(w=ym(t),v=w.x+(~T[0].indexOf("%")?v/100*w.width:v),M=w.y+(~(T[1]||T[0]).indexOf("%")?M/100*w.height:M)),i||i!==!1&&o.smooth?(_=v-c,y=M-h,o.xOffset=f+(_*u+y*g)-_,o.yOffset=d+(_*p+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=M,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[ai]="0px 0px",a&&(Ws(a,o,"xOrigin",c,v),Ws(a,o,"yOrigin",h,M),Ws(a,o,"xOffset",f,o.xOffset),Ws(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+M)},So=function(t,e){var n=t._gsap||new id(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=_i(t,ai)||"0",h,f,d,u,p,g,m,_,y,T,v,M,w,x,S,P,A,D,I,V,L,G,O,N,F,B,R,J,pt,Pt,Z,lt;return h=f=d=g=m=_=y=T=v=0,u=p=1,n.svg=!!(t.getCTM&&vm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[We]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[We]!=="none"?l[We]:"")),i.scale=i.rotate=i.translate="none"),x=yd(t,n.svg),n.svg&&(n.uncache?(F=t.getBBox(),c=n.xOrigin-F.x+"px "+(n.yOrigin-F.y)+"px",N=""):N=!e&&t.getAttribute("data-svg-origin"),md(t,N||c,!!N||n.originIsAbsolute,n.smooth!==!1,x)),M=n.xOrigin||0,w=n.yOrigin||0,x!==vo&&(D=x[0],I=x[1],V=x[2],L=x[3],h=G=x[4],f=O=x[5],x.length===6?(u=Math.sqrt(D*D+I*I),p=Math.sqrt(L*L+V*V),g=D||I?la(I,D)*Ar:0,y=V||L?la(V,L)*Ar+g:0,y&&(p*=Math.abs(Math.cos(y*ha))),n.svg&&(h-=M-(M*D+w*V),f-=w-(M*I+w*L))):(lt=x[6],Pt=x[7],R=x[8],J=x[9],pt=x[10],Z=x[11],h=x[12],f=x[13],d=x[14],S=la(lt,pt),m=S*Ar,S&&(P=Math.cos(-S),A=Math.sin(-S),N=G*P+R*A,F=O*P+J*A,B=lt*P+pt*A,R=G*-A+R*P,J=O*-A+J*P,pt=lt*-A+pt*P,Z=Pt*-A+Z*P,G=N,O=F,lt=B),S=la(-V,pt),_=S*Ar,S&&(P=Math.cos(-S),A=Math.sin(-S),N=D*P-R*A,F=I*P-J*A,B=V*P-pt*A,Z=L*A+Z*P,D=N,I=F,V=B),S=la(I,D),g=S*Ar,S&&(P=Math.cos(S),A=Math.sin(S),N=D*P+I*A,F=G*P+O*A,I=I*P-D*A,O=O*P-G*A,D=N,G=F),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,_=180-_),u=Ze(Math.sqrt(D*D+I*I+V*V)),p=Ze(Math.sqrt(O*O+lt*lt)),S=la(G,O),y=Math.abs(S)>2e-4?S*Ar:0,v=Z?1/(Z<0?-Z:Z):0),n.svg&&(N=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Mm(_i(t,We)),N&&t.setAttribute("transform",N))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(u*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Ze(u),n.scaleY=Ze(p),n.rotation=Ze(g)+o,n.rotationX=Ze(m)+o,n.rotationY=Ze(_)+o,n.skewX=y+o,n.skewY=T+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[ai]=ac(c)),n.xOffset=n.yOffset=0,n.force3D=ri.force3D,n.renderTransform=n.svg?gy:xm?bm:my,n.uncache=0,n},ac=function(t){return(t=t.split(" "))[0]+" "+t[1]},ud=function(t,e,n){var i=En(e);return Ze(parseFloat(e)+parseFloat($s(t,"x",n+"px",i)))+i},my=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,bm(t,e)},Tr="0deg",yo="0px",Er=") ",bm=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,u=n.skewY,p=n.scaleX,g=n.scaleY,m=n.transformPerspective,_=n.force3D,y=n.target,T=n.zOrigin,v="",M=_==="auto"&&t&&t!==1||_===!0;if(T&&(f!==Tr||h!==Tr)){var w=parseFloat(h)*ha,x=Math.sin(w),S=Math.cos(w),P;w=parseFloat(f)*ha,P=Math.cos(w),a=ud(y,a,x*P*-T),o=ud(y,o,-Math.sin(w)*-T),l=ud(y,l,S*P*-T+T)}m!==yo&&(v+="perspective("+m+Er),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(M||a!==yo||o!==yo||l!==yo)&&(v+=l!==yo||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Er),c!==Tr&&(v+="rotate("+c+Er),h!==Tr&&(v+="rotateY("+h+Er),f!==Tr&&(v+="rotateX("+f+Er),(d!==Tr||u!==Tr)&&(v+="skew("+d+", "+u+Er),(p!==1||g!==1)&&(v+="scale("+p+", "+g+Er),y.style[We]=v||"translate(0, 0)"},gy=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,u=n.target,p=n.xOrigin,g=n.yOrigin,m=n.xOffset,_=n.yOffset,y=n.forceCSS,T=parseFloat(a),v=parseFloat(o),M,w,x,S,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ha,c*=ha,M=Math.cos(l)*f,w=Math.sin(l)*f,x=Math.sin(l-c)*-d,S=Math.cos(l-c)*d,c&&(h*=ha,P=Math.tan(c-h),P=Math.sqrt(1+P*P),x*=P,S*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),M*=P,w*=P)),M=Ze(M),w=Ze(w),x=Ze(x),S=Ze(S)):(M=f,S=d,w=x=0),(T&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(T=$s(u,"x",a,"px"),v=$s(u,"y",o,"px")),(p||g||m||_)&&(T=Ze(T+p-(p*M+g*x)+m),v=Ze(v+g-(p*w+g*S)+_)),(i||r)&&(P=u.getBBox(),T=Ze(T+i/100*P.width),v=Ze(v+r/100*P.height)),P="matrix("+M+","+w+","+x+","+S+","+T+","+v+")",u.setAttribute("transform",P),y&&(u.style[We]=P)},_y=function(t,e,n,i,r){var a=360,o=cn(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Ar:1),c=l-i,h=i+c+"deg",f,d;return o&&(f=r.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*am)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*am)%a-~~(c/a)*a)),t._pt=d=new $n(t._pt,e,n,i,c,jx),d.e=h,d.u="deg",t._props.push(n),d},fm=function(t,e){for(var n in e)t[n]=e[n];return t},xy=function(t,e,n){var i=fm({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,f,d,u,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[We]=e,o=So(n,1),Xs(n,We),n.setAttribute("transform",c)):(c=getComputedStyle(n)[We],a[We]=e,o=So(n,1),a[We]=c);for(l in gs)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(u=En(c),p=En(h),f=u!==p?$s(n,l,c,p):parseFloat(c),d=parseFloat(h),t._pt=new $n(t._pt,o,l,f,d-f,dd),t._pt.u=p||0,t._props.push(l));fm(o,i)};Xn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});rc[t>1?"border"+s:s]=function(o,l,c,h,f){var d,u;if(arguments.length<4)return d=a.map(function(p){return ms(o,p,c)}),u=d.join(" "),u.split(d[0]).length===5?d[0]:u;d=(h+"").split(" "),u={},a.forEach(function(p,g){return u[p]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,u,f)}});var vd={name:"css",register:pd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,h,f,d,u,p,g,m,_,y,T,v,M,w,x,S,P;gd||pd(),this.styles=this.styles||_m(t),S=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(ni[g]&&rd(g,e,n,i,t,r)))){if(u=typeof h,p=rc[g],u==="function"&&(h=h.call(n,i,t,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=oa(h)),p)p(this,t,g,h,n)&&(x=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",fs.lastIndex=0,fs.test(c)||(m=En(c),_=En(h),_?m!==_&&(c=$s(t,g,c,_)+_):m&&(h+=m)),this.add(o,"setProperty",c,h,i,r,0,0,g),a.push(g),S.push(g,0,o[g]);else if(u!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],cn(c)&&~c.indexOf("random(")&&(c=oa(c)),En(c+"")||c==="auto"||(c+=ri.units[g]||En(ms(t,g))||""),(c+"").charAt(1)==="="&&(c=ms(t,g))):c=ms(t,g),d=parseFloat(c),y=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),f=parseFloat(h),g in Ki&&(g==="autoAlpha"&&(d===1&&ms(t,"visibility")==="hidden"&&f&&(d=0),S.push("visibility",0,o.visibility),Ws(this,o,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Ki[g],~g.indexOf(",")&&(g=g.split(",")[0]))),T=g in gs,T){if(this.styles.save(g),P=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=_i(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=t.style.perspective;t.style.perspective=h,h=_i(t,"perspective"),A?t.style.perspective=A:Xs(t,"perspective")}f=parseFloat(h)}if(v||(M=t._gsap,M.renderTransform&&!e.parseTransform||So(t,e.parseTransform),w=e.smoothOrigin!==!1&&M.smooth,v=this._pt=new $n(this._pt,o,We,0,1,M.renderTransform,M,0,-1),v.dep=1),g==="scale")this._pt=new $n(this._pt,M,"scaleY",M.scaleY,(y?br(M.scaleY,y+f):f)-M.scaleY||0,dd),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){S.push(ai,0,o[ai]),h=fy(h),M.svg?md(t,h,0,w,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==M.zOrigin&&Ws(this,M,"zOrigin",M.zOrigin,_),Ws(this,o,g,ac(c),ac(h)));continue}else if(g==="svgOrigin"){md(t,h,1,w,0,this);continue}else if(g in Sm){_y(this,M,g,d,y?br(d,y+h):h);continue}else if(g==="smoothOrigin"){Ws(this,M,"smooth",M.smooth,h);continue}else if(g==="force3D"){M[g]=h;continue}else if(g==="transform"){xy(this,h,t);continue}}else g in o||(g=ua(g)||g);if(T||(f||f===0)&&(d||d===0)&&!Qx.test(h)&&g in o)m=(c+"").substr((d+"").length),f||(f=0),_=En(h)||(g in ri.units?ri.units[g]:m),m!==_&&(d=$s(t,g,c,_)),this._pt=new $n(this._pt,T?M:o,g,d,(y?br(d,y+f):f)-d,!T&&(_==="px"||g==="zIndex")&&e.autoRound!==!1?ny:dd),this._pt.u=_||0,T&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=ey):m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=ty);else if(g in o)dy.call(this,t,g,c,y?y+h:h);else if(g in t)this.add(t,g,c||t[g],y?y+h:h,i,r);else if(g!=="parseTransform"){tc(g,h);continue}T||(g in o?S.push(g,0,o[g]):typeof t[g]=="function"?S.push(g,2,t[g]()):S.push(g,1,c||t[g])),a.push(g)}}x&&hd(this)},render:function(t,e){if(e.tween._time||!_d())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ms,aliases:Ki,getSetter:function(t,e,n){var i=Ki[e];return i&&i.indexOf(",")<0&&(e=i),e in gs&&e!==ai&&(t._gsap.x||ms(t,"x"))?n&&rm===n?e==="scale"?ay:ry:(rm=n||{})&&(e==="scale"?oy:ly):t.style&&!jl(t.style[e])?iy:~e.indexOf("-")?sy:sc(t,e)},core:{_removeProperty:Xs,_getMatrix:yd}};Dn.utils.checkPrefix=ua;Dn.core.getStyleSaver=_m;(function(s,t,e,n){var i=Xn(s+","+t+","+e,function(r){gs[r]=1});Xn(t,function(r){ri.units[r]="deg",Sm[r]=1}),Ki[i[13]]=s+","+t,Xn(n,function(r){var a=r.split(":");Ki[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ri.units[s]="px"});Dn.registerPlugin(vd);var Vt=Dn.registerPlugin(vd)||Dn,uT=Vt.core.Tween;function wm(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function yy(s,t,e){return t&&wm(s.prototype,t),e&&wm(s,e),s}var An,cc,vy,oi,qs,Ys,fa,Em,Rr,pa,Am,_s,ki,Cm,Rm=function(){return An||typeof window<"u"&&(An=window.gsap)&&An.registerPlugin&&An},Pm=1,da=[],jt=[],zi=[],bo=Date.now,Sd=function(t,e){return e},Sy=function(){var t=pa.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,jt),i.push.apply(i,zi),jt=n,zi=i,Sd=function(a,o){return e[a](o)}},ys=function(t,e){return~zi.indexOf(t)&&zi[zi.indexOf(t)+1][e]},wo=function(t){return!!~Am.indexOf(t)},Yn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},qn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},oc="scrollLeft",lc="scrollTop",Md=function(){return _s&&_s.isPressed||jt.cache++},hc=function(t,e){var n=function i(r){if(r||r===0){Pm&&oi.history.scrollRestoration!=="manual"&&(oi.history.scrollRestoration="manual");var a=_s&&_s.isPressed;r=i.v=Math.round(r)||(_s&&_s.iOS?1:0),t(r),i.cacheID=jt.cache,a&&Sd("ss",r)}else(e||jt.cache!==i.cacheID||Sd("ref"))&&(i.cacheID=jt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Nn={s:oc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:hc(function(s){return arguments.length?oi.scrollTo(s,nn.sc()):oi.pageXOffset||qs[oc]||Ys[oc]||fa[oc]||0})},nn={s:lc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Nn,sc:hc(function(s){return arguments.length?oi.scrollTo(Nn.sc(),s):oi.pageYOffset||qs[lc]||Ys[lc]||fa[lc]||0})},Zn=function(t,e){return(e&&e._ctx&&e._ctx.selector||An.utils.toArray)(t)[0]||(typeof t=="string"&&An.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},My=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},xs=function(t,e){var n=e.s,i=e.sc;wo(t)&&(t=qs.scrollingElement||Ys);var r=jt.indexOf(t),a=i===nn.sc?1:2;!~r&&(r=jt.push(t)-1),jt[r+a]||Yn(t,"scroll",Md);var o=jt[r+a],l=o||(jt[r+a]=hc(ys(t,n),!0)||(wo(t)?i:hc(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=An.getProperty(t,"scrollBehavior")==="smooth"),l},uc=function(t,e,n){var i=t,r=t,a=bo(),o=a,l=e||50,c=Math.max(500,l*3),h=function(p,g){var m=bo();g||m-a>l?(r=i,i=p,o=a,a=m):n?i+=p:i=r+(p-r)/(m-o)*(a-o)},f=function(){r=i=n?0:i,o=a=0},d=function(p){var g=o,m=r,_=bo();return(p||p===0)&&p!==i&&h(p),a===o||_-o>c?0:(i+(n?m:-m))/((n?_:a)-g)*1e3};return{update:h,reset:f,getVelocity:d}},Mo=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Tm=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Im=function(){pa=An.core.globals().ScrollTrigger,pa&&pa.core&&Sy()},Lm=function(t){return An=t||Rm(),!cc&&An&&typeof document<"u"&&document.body&&(oi=window,qs=document,Ys=qs.documentElement,fa=qs.body,Am=[oi,qs,Ys,fa],vy=An.utils.clamp,Cm=An.core.context||function(){},Rr="onpointerenter"in fa?"pointer":"mouse",Em=Je.isTouch=oi.matchMedia&&oi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in oi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ki=Je.eventTypes=("ontouchstart"in Ys?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ys?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Pm=0},500),cc=1),pa||Im(),cc};Nn.op=nn;jt.cache=0;var Je=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){cc||Lm(An)||console.warn("Please gsap.registerPlugin(Observer)"),pa||Im();var i=n.tolerance,r=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,d=n.onStopDelay,u=n.ignore,p=n.wheelSpeed,g=n.event,m=n.onDragStart,_=n.onDragEnd,y=n.onDrag,T=n.onPress,v=n.onRelease,M=n.onRight,w=n.onLeft,x=n.onUp,S=n.onDown,P=n.onChangeX,A=n.onChangeY,D=n.onChange,I=n.onToggleX,V=n.onToggleY,L=n.onHover,G=n.onHoverEnd,O=n.onMove,N=n.ignoreCheck,F=n.isNormalizer,B=n.onGestureStart,R=n.onGestureEnd,J=n.onWheel,pt=n.onEnable,Pt=n.onDisable,Z=n.onClick,lt=n.scrollSpeed,gt=n.capture,at=n.allowClicks,dt=n.lockAxis,Lt=n.onLockAxis;this.target=o=Zn(o)||Ys,this.vars=n,u&&(u=An.utils.toArray(u)),i=i||1e-9,r=r||0,p=p||1,lt=lt||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(oi.getComputedStyle(fa).lineHeight)||22);var me,Et,Xt,Nt,Bt,fe,ue,q=this,Qt=0,Xe=0,ee=n.passive||!h&&n.passive!==!1,ne=xs(o,Nn),Le=xs(o,nn),Ae=ne(),z=Le(),pe=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ki[0]==="pointerdown",oe=wo(o),Ht=o.ownerDocument||qs,Q=[0,0,0],Tt=[0,0,0],St=0,It=function(){return St=bo()},C=function(yt,rt){return(q.event=yt)&&u&&My(yt.target,u)||rt&&pe&&yt.pointerType!=="touch"||N&&N(yt,rt)},b=function(){q._vx.reset(),q._vy.reset(),Et.pause(),f&&f(q)},H=function(){var yt=q.deltaX=Tm(Q),rt=q.deltaY=Tm(Tt),it=Math.abs(yt)>=i,Mt=Math.abs(rt)>=i;D&&(it||Mt)&&D(q,yt,rt,Q,Tt),it&&(M&&q.deltaX>0&&M(q),w&&q.deltaX<0&&w(q),P&&P(q),I&&q.deltaX<0!=Qt<0&&I(q),Qt=q.deltaX,Q[0]=Q[1]=Q[2]=0),Mt&&(S&&q.deltaY>0&&S(q),x&&q.deltaY<0&&x(q),A&&A(q),V&&q.deltaY<0!=Xe<0&&V(q),Xe=q.deltaY,Tt[0]=Tt[1]=Tt[2]=0),(Nt||Xt)&&(O&&O(q),Xt&&(m&&Xt===1&&m(q),y&&y(q),Xt=0),Nt=!1),fe&&!(fe=!1)&&Lt&&Lt(q),Bt&&(J(q),Bt=!1),me=0},ot=function(yt,rt,it){Q[it]+=yt,Tt[it]+=rt,q._vx.update(yt),q._vy.update(rt),c?me||(me=requestAnimationFrame(H)):H()},nt=function(yt,rt){dt&&!ue&&(q.axis=ue=Math.abs(yt)>Math.abs(rt)?"x":"y",fe=!0),ue!=="y"&&(Q[2]+=yt,q._vx.update(yt,!0)),ue!=="x"&&(Tt[2]+=rt,q._vy.update(rt,!0)),c?me||(me=requestAnimationFrame(H)):H()},ft=function(yt){if(!C(yt,1)){yt=Mo(yt,h);var rt=yt.clientX,it=yt.clientY,Mt=rt-q.x,st=it-q.y,Ct=q.isDragging;q.x=rt,q.y=it,(Ct||(Mt||st)&&(Math.abs(q.startX-rt)>=r||Math.abs(q.startY-it)>=r))&&(Xt||(Xt=Ct?2:1),Ct||(q.isDragging=!0),nt(Mt,st))}},mt=q.onPress=function(ht){C(ht,1)||ht&&ht.button||(q.axis=ue=null,Et.pause(),q.isPressed=!0,ht=Mo(ht),Qt=Xe=0,q.startX=q.x=ht.clientX,q.startY=q.y=ht.clientY,q._vx.reset(),q._vy.reset(),Yn(F?o:Ht,ki[1],ft,ee,!0),q.deltaX=q.deltaY=0,T&&T(q))},X=q.onRelease=function(ht){if(!C(ht,1)){qn(F?o:Ht,ki[1],ft,!0);var yt=!isNaN(q.y-q.startY),rt=q.isDragging,it=rt&&(Math.abs(q.x-q.startX)>3||Math.abs(q.y-q.startY)>3),Mt=Mo(ht);!it&&yt&&(q._vx.reset(),q._vy.reset(),h&&at&&An.delayedCall(.08,function(){if(bo()-St>300&&!ht.defaultPrevented){if(ht.target.click)ht.target.click();else if(Ht.createEvent){var st=Ht.createEvent("MouseEvents");st.initMouseEvent("click",!0,!0,oi,1,Mt.screenX,Mt.screenY,Mt.clientX,Mt.clientY,!1,!1,!1,!1,0,null),ht.target.dispatchEvent(st)}}})),q.isDragging=q.isGesturing=q.isPressed=!1,f&&rt&&!F&&Et.restart(!0),Xt&&H(),_&&rt&&_(q),v&&v(q,it)}},et=function(yt){return yt.touches&&yt.touches.length>1&&(q.isGesturing=!0)&&B(yt,q.isDragging)},ct=function(){return(q.isGesturing=!1)||R(q)},U=function(yt){if(!C(yt)){var rt=ne(),it=Le();ot((rt-Ae)*lt,(it-z)*lt,1),Ae=rt,z=it,f&&Et.restart(!0)}},tt=function(yt){if(!C(yt)){yt=Mo(yt,h),J&&(Bt=!0);var rt=(yt.deltaMode===1?l:yt.deltaMode===2?oi.innerHeight:1)*p;ot(yt.deltaX*rt,yt.deltaY*rt,0),f&&!F&&Et.restart(!0)}},j=function(yt){if(!C(yt)){var rt=yt.clientX,it=yt.clientY,Mt=rt-q.x,st=it-q.y;q.x=rt,q.y=it,Nt=!0,f&&Et.restart(!0),(Mt||st)&&nt(Mt,st)}},_t=function(yt){q.event=yt,L(q)},ut=function(yt){q.event=yt,G(q)},xt=function(yt){return C(yt)||Mo(yt,h)&&Z(q)};Et=q._dc=An.delayedCall(d||.25,b).pause(),q.deltaX=q.deltaY=0,q._vx=uc(0,50,!0),q._vy=uc(0,50,!0),q.scrollX=ne,q.scrollY=Le,q.isDragging=q.isGesturing=q.isPressed=!1,Cm(this),q.enable=function(ht){return q.isEnabled||(Yn(oe?Ht:o,"scroll",Md),a.indexOf("scroll")>=0&&Yn(oe?Ht:o,"scroll",U,ee,gt),a.indexOf("wheel")>=0&&Yn(o,"wheel",tt,ee,gt),(a.indexOf("touch")>=0&&Em||a.indexOf("pointer")>=0)&&(Yn(o,ki[0],mt,ee,gt),Yn(Ht,ki[2],X),Yn(Ht,ki[3],X),at&&Yn(o,"click",It,!0,!0),Z&&Yn(o,"click",xt),B&&Yn(Ht,"gesturestart",et),R&&Yn(Ht,"gestureend",ct),L&&Yn(o,Rr+"enter",_t),G&&Yn(o,Rr+"leave",ut),O&&Yn(o,Rr+"move",j)),q.isEnabled=!0,q.isDragging=q.isGesturing=q.isPressed=Nt=Xt=!1,q._vx.reset(),q._vy.reset(),Ae=ne(),z=Le(),ht&&ht.type&&mt(ht),pt&&pt(q)),q},q.disable=function(){q.isEnabled&&(da.filter(function(ht){return ht!==q&&wo(ht.target)}).length||qn(oe?Ht:o,"scroll",Md),q.isPressed&&(q._vx.reset(),q._vy.reset(),qn(F?o:Ht,ki[1],ft,!0)),qn(oe?Ht:o,"scroll",U,gt),qn(o,"wheel",tt,gt),qn(o,ki[0],mt,gt),qn(Ht,ki[2],X),qn(Ht,ki[3],X),qn(o,"click",It,!0),qn(o,"click",xt),qn(Ht,"gesturestart",et),qn(Ht,"gestureend",ct),qn(o,Rr+"enter",_t),qn(o,Rr+"leave",ut),qn(o,Rr+"move",j),q.isEnabled=q.isPressed=q.isDragging=!1,Pt&&Pt(q))},q.kill=q.revert=function(){q.disable();var ht=da.indexOf(q);ht>=0&&da.splice(ht,1),_s===q&&(_s=0)},da.push(q),F&&wo(o)&&(_s=q),q.enable(g)},yy(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Je.version="3.15.1";Je.create=function(s){return new Je(s)};Je.register=Lm;Je.getAll=function(){return da.slice()};Je.getById=function(s){return da.filter(function(t){return t.vars.id===s})[0]};Rm()&&An.registerPlugin(Je);var Dt,xa,se,we,vi,Me,Ud,Ac,Fo,Io,Eo,dc,On,Pc,Rd,Kn,Dm,Nm,ya,Jm,bd,Km,Jn,Pd,Qm,jm,Zs,Id,Fd,va,Bd,Js,Ld,wd,fc=1,Un=Date.now,Td=Un(),Di=0,Ao=0,Om=function(t,e,n){var i=yi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Um=function(t,e){return e&&(!yi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},by=function s(){return Ao&&requestAnimationFrame(s)},Fm=function(){return Pc=1},Bm=function(){return Pc=0},Qi=function(t){return t},Co=function(t){return Math.round(t*1e5)/1e5||0},tg=function(){return typeof window<"u"},eg=function(){return Dt||tg()&&(Dt=window.gsap)&&Dt.registerPlugin&&Dt},Or=function(t){return!!~Ud.indexOf(t)},ng=function(t){return(t==="Height"?Bd:se["inner"+t])||vi["client"+t]||Me["client"+t]},ig=function(t){return ys(t,"getBoundingClientRect")||(Or(t)?function(){return Ec.width=se.innerWidth,Ec.height=Bd,Ec}:function(){return vs(t)})},wy=function(t,e,n){var i=n.d,r=n.d2,a=n.a;return(a=ys(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?ng(r):t["client"+r])||0}},Ty=function(t,e){return!e||~zi.indexOf(t)?ig(t):function(){return Ec}},ji=function(t,e){var n=e.s,i=e.d2,r=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=ys(t,n))?a()-ig(t)()[r]:Or(t)?(vi[n]||Me[n])-ng(i):t[n]-t["offset"+i])},pc=function(t,e){for(var n=0;n<ya.length;n+=3)(!e||~e.indexOf(ya[n+1]))&&t(ya[n],ya[n+1],ya[n+2])},yi=function(t){return typeof t=="string"},Fn=function(t){return typeof t=="function"},Ro=function(t){return typeof t=="number"},Pr=function(t){return typeof t=="object"},To=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ma=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},ga=Math.abs,sg="left",rg="top",kd="right",zd="bottom",Lr="width",Dr="height",Lo="Right",Do="Left",No="Top",Oo="Bottom",sn="padding",Ii="margin",Ma="Width",Vd="Height",hn="px",Li=function(t){return se.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Ey=function(t){var e=Li(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},km=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},vs=function(t,e){var n=e&&Li(t)[Rd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Dt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Cc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},ag=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},Ay=function(t){return function(e){return Dt.utils.snap(ag(t),e)}},Gd=function(t){var e=Dt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var o;if(!r)return e(i);if(r>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var o=e(i);return!r||Math.abs(o-i)<a||o-i<0==r<0?o:e(r<0?i-t:i+t)}},Cy=function(t){return function(e,n){return Gd(ag(t))(e,n.direction)}},mc=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},_n=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},gn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},gc=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},zm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},_c={toggleActions:"play",anticipatePin:0},Rc={top:0,left:0,center:.5,bottom:1,right:1},Mc=function(t,e){if(yi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Rc?Rc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},xc=function(t,e,n,i,r,a,o,l){var c=r.startColor,h=r.endColor,f=r.fontSize,d=r.indent,u=r.fontWeight,p=we.createElement("div"),g=Or(n)||ys(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,_=g?Me:n.tagName==="IFRAME"?n.contentDocument.body:n,y=t.indexOf("start")!==-1,T=y?c:h,v="border-color:"+T+";font-size:"+f+";color:"+T+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(v+=(i===nn?kd:zd)+":"+(a+parseFloat(d))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),p._isStart=y,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=v,p.innerText=e||e===0?t+"-"+e:t,_.children[0]?_.insertBefore(p,_.children[0]):_.appendChild(p),p._offset=p["offset"+i.op.d2],bc(p,0,i,y),p},bc=function(t,e,n,i){var r={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+Ma]=1,r["border"+o+Ma]=0,r[n.p]=e+"px",Dt.set(t,r)},ie=[],Dd={},Bo,Vm=function(){return Un()-Di>34&&(Bo||(Bo=requestAnimationFrame(Ss)))},_a=function(){(!Jn||!Jn.isPressed||Jn.startX>Me.clientWidth)&&(jt.cache++,Jn?Bo||(Bo=requestAnimationFrame(Ss)):Ss(),Di||Fr("scrollStart"),Di=Un())},Ed=function(){jm=se.innerWidth,Qm=se.innerHeight},Po=function(t){jt.cache++,(t===!0||!On&&!Km&&!we.fullscreenElement&&!we.webkitFullscreenElement&&(!Pd||jm!==se.innerWidth||Math.abs(se.innerHeight-Qm)>se.innerHeight*.25))&&Ac.restart(!0)},Ur={},Ry=[],og=function s(){return gn($t,"scrollEnd",s)||Ir(!0)},Fr=function(t){return Ur[t]&&Ur[t].map(function(e){return e()})||Ry},xi=[],lg=function(t){for(var e=0;e<xi.length;e+=5)(!t||xi[e+4]&&xi[e+4].query===t)&&(xi[e].style.cssText=xi[e+1],xi[e].getBBox&&xi[e].setAttribute("transform",xi[e+2]||""),xi[e+3].uncache=1)},cg=function(){jt.cache++,jt.forEach(function(t){return Fn(t)&&(t.rec=t())})},Hd=function(t,e){var n;for(Kn=0;Kn<ie.length;Kn++)n=ie[Kn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Js=!0,e&&lg(e),e||Fr("revert")},hg=function(t,e){jt.cache++,(e||!Qn)&&jt.forEach(function(n){return Fn(n)&&n.cacheID++&&(n.rec=0)}),yi(t)&&(Fd=t,se.history.scrollRestoration!==t&&(se.history.scrollRestoration=t))},Qn,Nr=0,Gm,Py=function(){if(Gm!==Nr){var t=Gm=Nr;requestAnimationFrame(function(){return t===Nr&&Ir(!0)})}},ug=function(){Me.appendChild(va),Bd=!Jn&&va.offsetHeight||se.innerHeight,Me.removeChild(va)},Hm=function(t){return Fo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Ir=function(t,e){if(vi=we.documentElement,Me=we.body,Ud=[se,we,vi,Me],Di&&!t&&!Js){_n($t,"scrollEnd",og);return}ug(),Qn=$t.isRefreshing=!0,Js||cg();var n=Fr("refreshInit");Jm&&$t.sort(),e||Hd(),jt.forEach(function(i){Fn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ie.slice(0).forEach(function(i){return i.refresh()}),Js=!1,ie.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-a),i.refresh()}}),Ld=1,Hm(!0),ie.forEach(function(i){var r=ji(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>r,o=i._startClamp&&i.start>=r;(a||o)&&i.setPositions(o?r-1:i.start,a?Math.max(o?r:i.start+1,r):i.end,!0)}),Hm(!1),Ld=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),jt.forEach(function(i){Fn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),hg(Fd,1),Ac.pause(),Nr++,Qn=2,Ss(2),ie.forEach(function(i){return Fn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Qn=$t.isRefreshing=!1,Fr("refresh")},Nd=0,wc=1,Uo,Ss=function(t){if(t===2||!Qn&&!Js){$t.isUpdating=!0,Uo&&Uo.update(0);var e=ie.length,n=Un(),i=n-Td>=50,r=e&&ie[0].scroll();if(wc=Nd>r?-1:1,Qn||(Nd=r),i&&(Di&&!Pc&&n-Di>200&&(Di=0,Fr("scrollEnd")),Eo=Td,Td=n),wc<0){for(Kn=e;Kn-- >0;)ie[Kn]&&ie[Kn].update(0,i);wc=1}else for(Kn=0;Kn<e;Kn++)ie[Kn]&&ie[Kn].update(0,i);$t.isUpdating=!1}Bo=0},Od=[sg,rg,zd,kd,Ii+Oo,Ii+Lo,Ii+No,Ii+Do,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Tc=Od.concat([Lr,Dr,"boxSizing","max"+Ma,"max"+Vd,"position",Ii,sn,sn+No,sn+Lo,sn+Oo,sn+Do]),Iy=function(t,e,n){Sa(n);var i=t._gsap;if(i.spacerIsNative)Sa(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},Ad=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=Od.length,a=e.style,o=t.style,l;r--;)l=Od[r],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[zd]=o[kd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Lr]=Cc(t,Nn)+hn,a[Dr]=Cc(t,nn)+hn,a[sn]=o[Ii]=o[rg]=o[sg]="0",Sa(i),o[Lr]=o["max"+Ma]=n[Lr],o[Dr]=o["max"+Vd]=n[Dr],o[sn]=n[sn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Ly=/([A-Z])/g,Sa=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,a;for((t.t._gsap||Dt.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],r=t[i],a?e[r]=a:e[r]&&e.removeProperty(r.replace(Ly,"-$1").toLowerCase())}},yc=function(t){for(var e=Tc.length,n=t.style,i=[],r=0;r<e;r++)i.push(Tc[r],n[Tc[r]]);return i.t=t,i},Dy=function(t,e,n){for(var i=[],r=t.length,a=n?8:0,o;a<r;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},Ec={left:0,top:0},Wm=function(t,e,n,i,r,a,o,l,c,h,f,d,u,p){Fn(t)&&(t=t(l)),yi(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?Mc("0"+t.substr(3),n):0));var g=u?u.time():0,m,_,y;if(u&&u.seek(0),isNaN(t)||(t=+t),Ro(t))u&&(t=Dt.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,d,t)),o&&bc(o,n,i,!0);else{Fn(e)&&(e=e(l));var T=(t||"0").split(" "),v,M,w,x;y=Zn(e,l)||Me,v=vs(y)||{},(!v||!v.left&&!v.top)&&Li(y).display==="none"&&(x=y.style.display,y.style.display="block",v=vs(y),x?y.style.display=x:y.style.removeProperty("display")),M=Mc(T[0],v[i.d]),w=Mc(T[1]||"0",n),t=v[i.p]-c[i.p]-h+M+r-w,o&&bc(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(p&&(l[p]=t||-.001,t<0&&(t=0)),a){var S=t+n,P=a._isStart;m="scroll"+i.d2,bc(a,S,i,P&&S>20||!P&&(f?Math.max(Me[m],vi[m]):a.parentNode[m])<=S+1),f&&(c=vs(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+hn))}return u&&y&&(m=vs(y),u.seek(d),_=vs(y),u._caScrollDist=m[i.p]-_[i.p],t=t/u._caScrollDist*d),u&&u.seek(g),u?t:Math.round(t)},Ny=/(webkit|moz|length|cssText|inset)/i,Xm=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,a,o;if(e===Me){t._stOrig=r.cssText,o=Li(t);for(a in o)!+a&&!Ny.test(a)&&o[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=o[a]);r.top=n,r.left=i}else r.cssText=t._stOrig;Dt.core.getCache(t).uncache=1,e.appendChild(t)}},dg=function(t,e,n){var i=e,r=i;return function(a){var o=Math.round(t());return o!==i&&o!==r&&Math.abs(o-i)>3&&Math.abs(o-r)>3&&(a=o,n&&n()),r=i,i=Math.round(a),i}},vc=function(t,e,n){var i={};i[e.p]="+="+n,Dt.set(t,i)},$m=function(t,e){var n=xs(t,e),i="_scroll"+e.p2,r=function a(o,l,c,h,f){var d=a.tween,u=l.onComplete,p={};c=c||n();var g=dg(n,c,function(){d.kill(),a.tween=0});return f=h&&f||0,h=h||o-c,d&&d.kill(),l[i]=o,l.inherit=!1,l.modifiers=p,p[i]=function(){return g(c+h*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){jt.cache++,a.tween&&Ss()},l.onComplete=function(){a.tween=0,u&&u.call(d)},d=a.tween=Dt.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},_n(t,"wheel",n.wheelHandler),$t.isTouch&&_n(t,"touchmove",n.wheelHandler),r},$t=(function(){function s(e,n){xa||s.register(Dt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Id(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ao){this.update=this.refresh=this.kill=Qi;return}n=km(yi(n)||Ro(n)||n.nodeType?{trigger:n}:n,_c);var r=n,a=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,f=r.scrub,d=r.trigger,u=r.pin,p=r.pinSpacing,g=r.invalidateOnRefresh,m=r.anticipatePin,_=r.onScrubComplete,y=r.onSnapComplete,T=r.once,v=r.snap,M=r.pinReparent,w=r.pinSpacer,x=r.containerAnimation,S=r.fastScrollEnd,P=r.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Nn:nn,D=!f&&f!==0,I=Zn(n.scroller||se),V=Dt.core.getCache(I),L=Or(I),G=("pinType"in n?n.pinType:ys(I,"pinType")||L&&"fixed")==="fixed",O=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],N=D&&n.toggleActions.split(" "),F="markers"in n?n.markers:_c.markers,B=L?0:parseFloat(Li(I)["border"+A.p2+Ma])||0,R=this,J=n.onRefreshInit&&function(){return n.onRefreshInit(R)},pt=wy(I,L,A),Pt=Ty(I,L),Z=0,lt=0,gt=0,at=xs(I,A),dt,Lt,me,Et,Xt,Nt,Bt,fe,ue,q,Qt,Xe,ee,ne,Le,Ae,z,pe,oe,Ht,Q,Tt,St,It,C,b,H,ot,nt,ft,mt,X,et,ct,U,tt,j,_t,ut;if(R._startClamp=R._endClamp=!1,R._dir=A,m*=45,R.scroller=I,R.scroll=x?x.time.bind(x):at,Et=at(),Js&&at.rec==null&&(at.rec=Et),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Jm=1,n.refreshPriority===-9999&&(Uo=R)),V.tweenScroll=V.tweenScroll||{top:$m(I,nn),left:$m(I,Nn)},R.tweenTo=dt=V.tweenScroll[A.p],R.scrubDuration=function(it){et=Ro(it)&&it,et?X?X.duration(it):X=Dt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:et,paused:!0,onComplete:function(){return _&&_(R)}}):(X&&X.progress(1).kill(),X=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(f),ft=0,l||(l=i.vars.id)),v&&((!Pr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Me.style&&Dt.set(L?[Me,vi]:I,{scrollBehavior:"auto"}),jt.forEach(function(it){return Fn(it)&&it.target===(L?we.scrollingElement||vi:I)&&(it.smooth=!1)}),me=Fn(v.snapTo)?v.snapTo:v.snapTo==="labels"?Ay(i):v.snapTo==="labelsDirectional"?Cy(i):v.directional!==!1?function(it,Mt){return Gd(v.snapTo)(it,Un()-lt<500?0:Mt.direction)}:Dt.utils.snap(v.snapTo),ct=v.duration||{min:.1,max:2},ct=Pr(ct)?Io(ct.min,ct.max):Io(ct,ct),U=Dt.delayedCall(v.delay||et/2||.1,function(){var it=at(),Mt=Un()-lt<500,st=dt.tween;if((Mt||Math.abs(R.getVelocity())<10)&&!st&&!Pc&&Z!==it){var Ct=(it-Nt)/ne,ae=i&&!D?i.totalProgress():Ct,Zt=Mt?0:(ae-mt)/(Un()-Eo)*1e3||0,Fe=Dt.utils.clamp(-Ct,1-Ct,ga(Zt/2)*Zt/.185),je=Ct+(v.inertia===!1?0:Fe),Be,Ce,Se=v,an=Se.onStart,Re=Se.onInterrupt,Cn=Se.onComplete;if(Be=me(je,R),Ro(Be)||(Be=je),Ce=Math.max(0,Math.round(Nt+Be*ne)),it<=Bt&&it>=Nt&&Ce!==it){if(st&&!st._initted&&st.data<=ga(Ce-it))return;v.inertia===!1&&(Fe=Be-Ct),dt(Ce,{duration:ct(ga(Math.max(ga(je-ae),ga(Be-ae))*.185/Zt/.05||0)),ease:v.ease||"power3",data:ga(Ce-it),onInterrupt:function(){return U.restart(!0)&&Re&&ma(R,Re)},onComplete:function(){R.update(),Z=at(),i&&!D&&(X?X.resetTo("totalProgress",Be,i._tTime/i._tDur):i.progress(Be)),ft=mt=i&&!D?i.totalProgress():R.progress,y&&y(R),Cn&&ma(R,Cn)}},it,Fe*ne,Ce-it-Fe*ne),an&&ma(R,an,dt.tween)}}else R.isActive&&Z!==it&&U.restart(!0)}).pause()),l&&(Dd[l]=R),d=R.trigger=Zn(d||u!==!0&&u),ut=d&&d._gsap&&d._gsap.stRevert,ut&&(ut=ut(R)),u=u===!0?d:Zn(u),yi(o)&&(o={targets:d,className:o}),u&&(p===!1||p===Ii||(p=!p&&u.parentNode&&u.parentNode.style&&Li(u.parentNode).display==="flex"?!1:sn),R.pin=u,Lt=Dt.core.getCache(u),Lt.spacer?Le=Lt.pinState:(w&&(w=Zn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Lt.spacerIsNative=!!w,w&&(Lt.spacerState=yc(w))),Lt.spacer=pe=w||we.createElement("div"),pe.classList.add("pin-spacer"),l&&pe.classList.add("pin-spacer-"+l),Lt.pinState=Le=yc(u)),n.force3D!==!1&&Dt.set(u,{force3D:!0}),R.spacer=pe=Lt.spacer,nt=Li(u),It=nt[p+A.os2],Ht=Dt.getProperty(u),Q=Dt.quickSetter(u,A.a,hn),Ad(u,pe,nt),z=yc(u)),F){Xe=Pr(F)?km(F,zm):zm,q=xc("scroller-start",l,I,A,Xe,0),Qt=xc("scroller-end",l,I,A,Xe,0,q),oe=q["offset"+A.op.d2];var xt=Zn(ys(I,"content")||I);fe=this.markerStart=xc("start",l,xt,A,Xe,oe,0,x),ue=this.markerEnd=xc("end",l,xt,A,Xe,oe,0,x),x&&(_t=Dt.quickSetter([fe,ue],A.a,hn)),!G&&!(zi.length&&ys(I,"fixedMarkers")===!0)&&(Ey(L?Me:I),Dt.set([q,Qt],{force3D:!0}),b=Dt.quickSetter(q,A.a,hn),ot=Dt.quickSetter(Qt,A.a,hn))}if(x){var ht=x.vars.onUpdate,yt=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){R.update(0,0,1),ht&&ht.apply(x,yt||[])})}if(R.previous=function(){return ie[ie.indexOf(R)-1]},R.next=function(){return ie[ie.indexOf(R)+1]},R.revert=function(it,Mt){if(!Mt)return R.kill(!0);var st=it!==!1||!R.enabled,Ct=On;st!==R.isReverted&&(st&&(tt=Math.max(at(),R.scroll.rec||0),gt=R.progress,j=i&&i.progress()),fe&&[fe,ue,q,Qt].forEach(function(ae){return ae.style.display=st?"none":"block"}),st&&(On=R,R.update(st)),u&&(!M||!R.isActive)&&(st?Iy(u,pe,Le):Ad(u,pe,Li(u),C)),st||R.update(st),On=Ct,R.isReverted=st)},R.refresh=function(it,Mt,st,Ct){if(!((On||!R.enabled)&&!Mt)){if(u&&it&&Di){_n(s,"scrollEnd",og);return}!Qn&&J&&J(R),On=R,dt.tween&&!st&&(dt.tween.kill(),dt.tween=0),X&&X.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(W){return W.vars.immediateRender&&W.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var ae=pt(),Zt=Pt(),Fe=x?x.duration():ji(I,A),je=ne<=.01||!ne,Be=0,Ce=Ct||0,Se=Pr(st)?st.end:n.end,an=n.endTrigger||d,Re=Pr(st)?st.start:n.start||(n.start===0||!d?0:u?"0 0":"0 100%"),Cn=R.pinnedContainer=n.pinnedContainer&&Zn(n.pinnedContainer,R),di=d&&Math.max(0,ie.indexOf(R))||0,$e=di,tn,on,fi,ea,ln,qe,Ai,ro,zl,Us,E,k,K;for(F&&Pr(st)&&(k=Dt.getProperty(q,A.p),K=Dt.getProperty(Qt,A.p));$e-- >0;)qe=ie[$e],qe.end||qe.refresh(0,1)||(On=R),Ai=qe.pin,Ai&&(Ai===d||Ai===u||Ai===Cn)&&!qe.isReverted&&(Us||(Us=[]),Us.unshift(qe),qe.revert(!0,!0)),qe!==ie[$e]&&(di--,$e--);for(Fn(Re)&&(Re=Re(R)),Re=Om(Re,"start",R),Nt=Wm(Re,d,ae,A,at(),fe,q,R,Zt,B,G,Fe,x,R._startClamp&&"_startClamp")||(u?-.001:0),Fn(Se)&&(Se=Se(R)),yi(Se)&&!Se.indexOf("+=")&&(~Se.indexOf(" ")?Se=(yi(Re)?Re.split(" ")[0]:"")+Se:(Be=Mc(Se.substr(2),ae),Se=yi(Re)?Re:(x?Dt.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,Nt):Nt)+Be,an=d)),Se=Om(Se,"end",R),Bt=Math.max(Nt,Wm(Se||(an?"100% 0":Fe),an,ae,A,at()+Be,ue,Qt,R,Zt,B,G,Fe,x,R._endClamp&&"_endClamp"))||-.001,Be=0,$e=di;$e--;)qe=ie[$e]||{},Ai=qe.pin,Ai&&qe.start-qe._pinPush<=Nt&&!x&&qe.end>0&&(tn=qe.end-(R._startClamp?Math.max(0,qe.start):qe.start),(Ai===d&&qe.start-qe._pinPush<Nt||Ai===Cn)&&isNaN(Re)&&(Be+=tn*(1-qe.progress)),Ai===u&&(Ce+=tn));if(Nt+=Be,Bt+=Be,R._startClamp&&(R._startClamp+=Be),R._endClamp&&!Qn&&(R._endClamp=Bt||-.001,Bt=Math.min(Bt,ji(I,A))),ne=Bt-Nt||(Nt-=.01)&&.001,je&&(gt=Dt.utils.clamp(0,1,Dt.utils.normalize(Nt,Bt,tt))),R._pinPush=Ce,fe&&Be&&(tn={},tn[A.a]="+="+Be,Cn&&(tn[A.p]="-="+at()),Dt.set([fe,ue],tn)),u&&!(Ld&&R.end>=ji(I,A)))tn=Li(u),ea=A===nn,fi=at(),Tt=parseFloat(Ht(A.a))+Ce,!Fe&&Bt>1&&(E=(L?we.scrollingElement||vi:I).style,E={style:E,value:E["overflow"+A.a.toUpperCase()]},L&&Li(Me)["overflow"+A.a.toUpperCase()]!=="scroll"&&(E.style["overflow"+A.a.toUpperCase()]="scroll")),Ad(u,pe,tn),z=yc(u),on=vs(u,!0),ro=G&&xs(I,ea?Nn:nn)(),p?(C=[p+A.os2,ne+Ce+hn],C.t=pe,$e=p===sn?Cc(u,A)+ne+Ce:0,$e&&(C.push(A.d,$e+hn),pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=$e+hn)),Sa(C),Cn&&ie.forEach(function(W){W.pin===Cn&&W.vars.pinSpacing!==!1&&(W._subPinOffset=!0)}),G&&at(tt)):($e=Cc(u,A),$e&&pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=$e+hn)),G&&(ln={top:on.top+(ea?fi-Nt:ro)+hn,left:on.left+(ea?ro:fi-Nt)+hn,boxSizing:"border-box",position:"fixed"},ln[Lr]=ln["max"+Ma]=Math.ceil(on.width)+hn,ln[Dr]=ln["max"+Vd]=Math.ceil(on.height)+hn,ln[Ii]=ln[Ii+No]=ln[Ii+Lo]=ln[Ii+Oo]=ln[Ii+Do]="0",ln[sn]=tn[sn],ln[sn+No]=tn[sn+No],ln[sn+Lo]=tn[sn+Lo],ln[sn+Oo]=tn[sn+Oo],ln[sn+Do]=tn[sn+Do],Ae=Dy(Le,ln,M),Qn&&at(0)),i?(zl=i._initted,bd(1),i.render(i.duration(),!0,!0),St=Ht(A.a)-Tt+ne+Ce,H=Math.abs(ne-St)>1,G&&H&&Ae.splice(Ae.length-2,2),i.render(0,!0,!0),zl||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),bd(0)):St=ne,E&&(E.value?E.style["overflow"+A.a.toUpperCase()]=E.value:E.style.removeProperty("overflow-"+A.a));else if(d&&at()&&!x)for(on=d.parentNode;on&&on!==Me;)on._pinOffset&&(Nt-=on._pinOffset,Bt-=on._pinOffset),on=on.parentNode;Us&&Us.forEach(function(W){return W.revert(!1,!0)}),R.start=Nt,R.end=Bt,Et=Xt=Qn?tt:at(),!x&&!Qn&&!Js&&(Et<tt&&at(tt),R.scroll.rec=0),R.revert(!1,!0),lt=Un(),U&&(Z=-1,U.restart(!0)),On=0,i&&D&&(i._initted||j)&&i.progress()!==j&&i.progress(j||0,!0).render(i.time(),!0,!0),(je||gt!==R.progress||x||g||i&&!i._initted)&&(i&&!D&&(i._initted||gt||i.vars.immediateRender!==!1)&&i.totalProgress(x&&Nt<-.001&&!gt?Dt.utils.normalize(Nt,Bt,0):gt,!0),R.progress=je||(Et-Nt)/ne===gt?0:gt),u&&p&&(pe._pinOffset=Math.round(R.progress*St)),X&&X.invalidate(),isNaN(k)||(k-=Dt.getProperty(q,A.p),K-=Dt.getProperty(Qt,A.p),vc(q,A,k),vc(fe,A,k-(Ct||0)),vc(Qt,A,K),vc(ue,A,K-(Ct||0))),je&&!Qn&&R.update(),h&&!Qn&&!ee&&(ee=!0,h(R),ee=!1)}},R.getVelocity=function(){return(at()-Xt)/(Un()-Eo)*1e3||0},R.endAnimation=function(){To(R.callbackAnimation),i&&(X?X.progress(1):i.paused()?D||To(i,R.direction<0,1):To(i,i.reversed()))},R.labelToScroll=function(it){return i&&i.labels&&(Nt||R.refresh()||Nt)+i.labels[it]/i.duration()*ne||0},R.getTrailing=function(it){var Mt=ie.indexOf(R),st=R.direction>0?ie.slice(0,Mt).reverse():ie.slice(Mt+1);return(yi(it)?st.filter(function(Ct){return Ct.vars.preventOverlaps===it}):st).filter(function(Ct){return R.direction>0?Ct.end<=Nt:Ct.start>=Bt})},R.update=function(it,Mt,st){if(!(x&&!st&&!it)){var Ct=Qn===!0?tt:R.scroll(),ae=it?0:(Ct-Nt)/ne,Zt=ae<0?0:ae>1?1:ae||0,Fe=R.progress,je,Be,Ce,Se,an,Re,Cn,di;if(Mt&&(Xt=Et,Et=x?at():Ct,v&&(mt=ft,ft=i&&!D?i.totalProgress():Zt)),m&&u&&!On&&!fc&&Di&&(!Zt&&Nt<Ct+(Ct-Xt)/(Un()-Eo)*m?Zt=1e-4:Zt===1&&Bt>Ct+(Ct-Xt)/(Un()-Eo)*m&&(Zt=.9999)),Zt!==Fe&&R.enabled){if(je=R.isActive=!!Zt&&Zt<1,Be=!!Fe&&Fe<1,Re=je!==Be,an=Re||!!Zt!=!!Fe,R.direction=Zt>Fe?1:-1,R.progress=Zt,an&&!On&&(Ce=Zt&&!Fe?0:Zt===1?1:Fe===1?2:3,D&&(Se=!Re&&N[Ce+1]!=="none"&&N[Ce+1]||N[Ce],di=i&&(Se==="complete"||Se==="reset"||Se in i))),P&&(Re||di)&&(di||f||!i)&&(Fn(P)?P(R):R.getTrailing(P).forEach(function(fi){return fi.endAnimation()})),D||(X&&!On&&!fc?(X._dp._time-X._start!==X._time&&X.render(X._dp._time-X._start),X.resetTo?X.resetTo("totalProgress",Zt,i._tTime/i._tDur):(X.vars.totalProgress=Zt,X.invalidate().restart())):i&&i.totalProgress(Zt,!!(On&&(lt||it)))),u){if(it&&p&&(pe.style[p+A.os2]=It),!G)Q(Co(Tt+St*Zt));else if(an){if(Cn=!it&&Zt>Fe&&Bt+1>Ct&&Ct+1>=ji(I,A),M)if(!it&&(je||Cn)){var $e=vs(u,!0),tn=Ct-Nt;Xm(u,Me,$e.top+(A===nn?tn:0)+hn,$e.left+(A===nn?0:tn)+hn)}else Xm(u,pe);Sa(je||Cn?Ae:z),H&&Zt<1&&je||Q(Tt+(Zt===1&&!Cn?St:0))}}v&&!dt.tween&&!On&&!fc&&U.restart(!0),o&&(Re||T&&Zt&&(Zt<1||!wd))&&Fo(o.targets).forEach(function(fi){return fi.classList[je||T?"add":"remove"](o.className)}),a&&!D&&!it&&a(R),an&&!On?(D&&(di&&(Se==="complete"?i.pause().totalProgress(1):Se==="reset"?i.restart(!0).pause():Se==="restart"?i.restart(!0):i[Se]()),a&&a(R)),(Re||!wd)&&(c&&Re&&ma(R,c),O[Ce]&&ma(R,O[Ce]),T&&(Zt===1?R.kill(!1,1):O[Ce]=0),Re||(Ce=Zt===1?1:3,O[Ce]&&ma(R,O[Ce]))),S&&!je&&Math.abs(R.getVelocity())>(Ro(S)?S:2500)&&(To(R.callbackAnimation),X?X.progress(1):To(i,Se==="reverse"?1:!Zt,1))):D&&a&&!On&&a(R)}if(ot){var on=x?Ct/x.duration()*(x._caScrollDist||0):Ct;b(on+(q._isFlipped?1:0)),ot(on)}_t&&_t(-Ct/x.duration()*(x._caScrollDist||0))}},R.enable=function(it,Mt){R.enabled||(R.enabled=!0,_n(I,"resize",Po),L||_n(I,"scroll",_a),J&&_n(s,"refreshInit",J),it!==!1&&(R.progress=gt=0,Et=Xt=Z=at()),Mt!==!1&&R.refresh())},R.getTween=function(it){return it&&dt?dt.tween:X},R.setPositions=function(it,Mt,st,Ct){if(x){var ae=x.scrollTrigger,Zt=x.duration(),Fe=ae.end-ae.start;it=ae.start+Fe*it/Zt,Mt=ae.start+Fe*Mt/Zt}R.refresh(!1,!1,{start:Um(it,st&&!!R._startClamp),end:Um(Mt,st&&!!R._endClamp)},Ct),R.update()},R.adjustPinSpacing=function(it){if(C&&it){var Mt=C.indexOf(A.d)+1;C[Mt]=parseFloat(C[Mt])+it+hn,C[1]=parseFloat(C[1])+it+hn,Sa(C)}},R.disable=function(it,Mt){if(it!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Mt||X&&X.pause(),tt=0,Lt&&(Lt.uncache=1),J&&gn(s,"refreshInit",J),U&&(U.pause(),dt.tween&&dt.tween.kill()&&(dt.tween=0)),!L)){for(var st=ie.length;st--;)if(ie[st].scroller===I&&ie[st]!==R)return;gn(I,"resize",Po),L||gn(I,"scroll",_a)}},R.kill=function(it,Mt){R.disable(it,Mt),X&&!Mt&&X.kill(),l&&delete Dd[l];var st=ie.indexOf(R);st>=0&&ie.splice(st,1),st===Kn&&wc>0&&Kn--,st=0,ie.forEach(function(Ct){return Ct.scroller===R.scroller&&(st=1)}),st||Qn||Js||(R.scroll.rec=0),i&&(i.scrollTrigger=null,it&&i.revert({kill:!1}),Mt||i.kill()),fe&&[fe,ue,q,Qt].forEach(function(Ct){return Ct.parentNode&&Ct.parentNode.removeChild(Ct)}),Uo===R&&(Uo=0),u&&(Lt&&(Lt.uncache=1),st=0,ie.forEach(function(Ct){return Ct.pin===u&&st++}),st||(Lt.spacer=0)),n.onKill&&n.onKill(R)},ie.push(R),R.enable(!1,!1),ut&&ut(R),i&&i.add&&!ne){var rt=R.update;R.update=function(){R.update=rt,jt.cache++,Nt||Bt||R.refresh()},Dt.delayedCall(.01,R.update),ne=.01,Nt=Bt=0}else R.refresh();u&&Py()},s.register=function(n){return xa||(Dt=n||eg(),tg()&&window.document&&s.enable(),xa=Ao),xa},s.defaults=function(n){if(n)for(var i in n)_c[i]=n[i];return _c},s.disable=function(n,i){Ao=0,ie.forEach(function(a){return a[i?"kill":"disable"](n)}),gn(se,"wheel",_a),gn(we,"scroll",_a),clearInterval(dc),gn(we,"touchcancel",Qi),gn(Me,"touchstart",Qi),mc(gn,we,"pointerdown,touchstart,mousedown",Fm),mc(gn,we,"pointerup,touchend,mouseup",Bm),Ac.kill(),pc(gn);for(var r=0;r<jt.length;r+=3)gc(gn,jt[r],jt[r+1]),gc(gn,jt[r],jt[r+2])},s.enable=function(){if(se=window,we=document,vi=we.documentElement,Me=we.body,Dt){if(Fo=Dt.utils.toArray,Io=Dt.utils.clamp,Id=Dt.core.context||Qi,bd=Dt.core.suppressOverwrites||Qi,Fd=se.history.scrollRestoration||"auto",Nd=se.pageYOffset||0,Dt.core.globals("ScrollTrigger",s),Me){Ao=1,va=document.createElement("div"),va.style.height="100vh",va.style.position="absolute",ug(),by(),Je.register(Dt),s.isTouch=Je.isTouch,Zs=Je.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Pd=Je.isTouch===1,_n(se,"wheel",_a),Ud=[se,we,vi,Me],Dt.matchMedia?(s.matchMedia=function(h){var f=Dt.matchMedia(),d;for(d in h)f.add(d,h[d]);return f},Dt.addEventListener("matchMediaInit",function(){cg(),Hd()}),Dt.addEventListener("matchMediaRevert",function(){return lg()}),Dt.addEventListener("matchMedia",function(){Ir(0,1),Fr("matchMedia")}),Dt.matchMedia().add("(orientation: portrait)",function(){return Ed(),Ed})):console.warn("Requires GSAP 3.11.0 or later"),Ed(),_n(we,"scroll",_a);var n=Me.hasAttribute("style"),i=Me.style,r=i.borderTopStyle,a=Dt.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=vs(Me),nn.m=Math.round(o.top+nn.sc())||0,Nn.m=Math.round(o.left+Nn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(Me.setAttribute("style",""),Me.removeAttribute("style")),dc=setInterval(Vm,250),Dt.delayedCall(.5,function(){return fc=0}),_n(we,"touchcancel",Qi),_n(Me,"touchstart",Qi),mc(_n,we,"pointerdown,touchstart,mousedown",Fm),mc(_n,we,"pointerup,touchend,mouseup",Bm),Rd=Dt.utils.checkPrefix("transform"),Tc.push(Rd),xa=Un(),Ac=Dt.delayedCall(.2,Ir).pause(),ya=[we,"visibilitychange",function(){var h=se.innerWidth,f=se.innerHeight;we.hidden?(Dm=h,Nm=f):(Dm!==h||Nm!==f)&&Po()},we,"DOMContentLoaded",Ir,se,"load",Ir,se,"resize",Po],pc(_n),ie.forEach(function(h){return h.enable(0,1)}),l=0;l<jt.length;l+=3)gc(gn,jt[l],jt[l+1]),gc(gn,jt[l],jt[l+2])}else if(we){var c=function h(){s.enable(),we.removeEventListener("DOMContentLoaded",h)};we.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(wd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(dc)||(dc=i)&&setInterval(Vm,i),"ignoreMobileResize"in n&&(Pd=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(pc(gn)||pc(_n,n.autoRefreshEvents||"none"),Km=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Zn(n),a=jt.indexOf(r),o=Or(r);~a&&jt.splice(a,o?6:2),i&&(o?zi.unshift(se,i,Me,i,vi,i):zi.unshift(r,i))},s.clearMatchMedia=function(n){ie.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var a=(yi(n)?Zn(n):n).getBoundingClientRect(),o=a[r?Lr:Dr]*i||0;return r?a.right-o>0&&a.left+o<se.innerWidth:a.bottom-o>0&&a.top+o<se.innerHeight},s.positionInViewport=function(n,i,r){yi(n)&&(n=Zn(n));var a=n.getBoundingClientRect(),o=a[r?Lr:Dr],l=i==null?o/2:i in Rc?Rc[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(a.left+l)/se.innerWidth:(a.top+l)/se.innerHeight},s.killAll=function(n){if(ie.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Ur.killAll||[];Ur={},i.forEach(function(r){return r()})}},s})();$t.version="3.15.1";$t.saveStyles=function(s){return s?Fo(s).forEach(function(t){if(t&&t.style){var e=xi.indexOf(t);e>=0&&xi.splice(e,5),xi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Dt.core.getCache(t),Id())}}):xi};$t.revert=function(s,t){return Hd(!s,t)};$t.create=function(s,t){return new $t(s,t)};$t.refresh=function(s){return s?Po(!0):(xa||$t.register())&&Ir(!0)};$t.update=function(s){return++jt.cache&&Ss(s===!0?2:0)};$t.clearScrollMemory=hg;$t.maxScroll=function(s,t){return ji(s,t?Nn:nn)};$t.getScrollFunc=function(s,t){return xs(Zn(s),t?Nn:nn)};$t.getById=function(s){return Dd[s]};$t.getAll=function(){return ie.filter(function(s){return s.vars.id!=="ScrollSmoother"})};$t.isScrolling=function(){return!!Di};$t.snapDirectional=Gd;$t.addEventListener=function(s,t){var e=Ur[s]||(Ur[s]=[]);~e.indexOf(t)||e.push(t)};$t.removeEventListener=function(s,t){var e=Ur[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};$t.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,a=function(c,h){var f=[],d=[],u=Dt.delayedCall(i,function(){h(f,d),f=[],d=[]}).pause();return function(p){f.length||u.restart(!0),f.push(p.trigger),d.push(p),r<=f.length&&u.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&Fn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return Fn(r)&&(r=r(),_n($t,"refresh",function(){return r=t.batchMax()})),Fo(s).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push($t.create(c))}),e};var qm=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Cd=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Je.isTouch?" pinch-zoom":""):"none",t===vi&&s(Me,e)},Sc={auto:1,scroll:1},Oy=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,a=r._gsap||Dt.core.getCache(r),o=Un(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;r&&r!==Me&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Sc[(l=Li(r)).overflowY]||Sc[l.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==n&&!Or(r)&&(Sc[(l=Li(r)).overflowY]||Sc[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},fg=function(t,e,n,i){return Je.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Oy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&_n(we,Je.eventTypes[0],Zm,!1,!0)},onDisable:function(){return gn(we,Je.eventTypes[0],Zm,!0)}})},Uy=/(input|label|select|textarea)/i,Ym,Zm=function(t){var e=Uy.test(t.target.tagName);(e||Ym)&&(t._gsapAllow=!0,Ym=e)},Fy=function(t){Pr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,a=e.onRelease,o,l,c=Zn(t.target)||vi,h=Dt.core.globals().ScrollSmoother,f=h&&h.get(),d=Zs&&(t.content&&Zn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),u=xs(c,nn),p=xs(c,Nn),g=1,m=(Je.isTouch&&se.visualViewport?se.visualViewport.scale*se.visualViewport.width:se.outerWidth)/se.innerWidth,_=0,y=Fn(i)?function(){return i(o)}:function(){return i||2.8},T,v,M=fg(c,t.type,!0,r),w=function(){return v=!1},x=Qi,S=Qi,P=function(){l=ji(c,nn),S=Io(Zs?1:0,l),n&&(x=Io(0,ji(c,Nn))),T=Nr},A=function(){d._gsap.y=Co(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},D=function(){if(v){requestAnimationFrame(w);var F=Co(o.deltaY/2),B=S(u.v-F);if(d&&B!==u.v+u.offset){u.offset=B-u.v;var R=Co((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",d._gsap.y=R+"px",u.cacheID=jt.cache,Ss()}return!0}u.offset&&A(),v=!0},I,V,L,G,O=function(){P(),I.isActive()&&I.vars.scrollY>l&&(u()>l?I.progress(1)&&u(l):I.resetTo("scrollY",l))};return d&&Dt.set(d,{y:"+=0"}),t.ignoreCheck=function(N){return Zs&&N.type==="touchmove"&&D(N)||g>1.05&&N.type!=="touchstart"||o.isGesturing||N.touches&&N.touches.length>1},t.onPress=function(){v=!1;var N=g;g=Co((se.visualViewport&&se.visualViewport.scale||1)/m),I.pause(),N!==g&&Cd(c,g>1.01?!0:n?!1:"x"),V=p(),L=u(),P(),T=Nr},t.onRelease=t.onGestureStart=function(N,F){if(u.offset&&A(),!F)G.restart(!0);else{jt.cache++;var B=y(),R,J;n&&(R=p(),J=R+B*.05*-N.velocityX/.227,B*=qm(p,R,J,ji(c,Nn)),I.vars.scrollX=x(J)),R=u(),J=R+B*.05*-N.velocityY/.227,B*=qm(u,R,J,ji(c,nn)),I.vars.scrollY=S(J),I.invalidate().duration(B).play(.01),(Zs&&I.vars.scrollY>=l||R>=l-1)&&Dt.to({},{onUpdate:O,duration:B})}a&&a(N)},t.onWheel=function(){I._ts&&I.pause(),Un()-_>1e3&&(T=0,_=Un())},t.onChange=function(N,F,B,R,J){if(Nr!==T&&P(),F&&n&&p(x(R[2]===F?V+(N.startX-N.x):p()+F-R[1])),B){u.offset&&A();var pt=J[2]===B,Pt=pt?L+N.startY-N.y:u()+B-J[1],Z=S(Pt);pt&&Pt!==Z&&(L+=Z-Pt),u(Z)}(B||F)&&Ss()},t.onEnable=function(){Cd(c,n?!1:"x"),$t.addEventListener("refresh",O),_n(se,"resize",O),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=p.smooth=!1),M.enable()},t.onDisable=function(){Cd(c,!0),gn(se,"resize",O),$t.removeEventListener("refresh",O),M.kill()},t.lockAxis=t.lockAxis!==!1,o=new Je(t),o.iOS=Zs,Zs&&!u()&&u(1),Zs&&Dt.ticker.add(Qi),G=o._dc,I=Dt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:dg(u,u(),function(){return I.pause()})},onUpdate:Ss,onComplete:G.vars.onComplete}),o};$t.sort=function(s){if(Fn(s))return ie.sort(s);var t=se.pageYOffset||0;return $t.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+se.innerHeight}),ie.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};$t.observe=function(s){return new Je(s)};$t.normalizeScroll=function(s){if(typeof s>"u")return Jn;if(s===!0&&Jn)return Jn.enable();if(s===!1){Jn&&Jn.kill(),Jn=s;return}var t=s instanceof Je?s:Fy(s);return Jn&&Jn.target===t.target&&Jn.kill(),Or(t.target)&&(Jn=t),t};$t.core={_getVelocityProp:uc,_inputObserver:fg,_scrollers:jt,_proxies:zi,bridge:{ss:function(){Di||Fr("scrollStart"),Di=Un()},ref:function(){return On}}};eg()&&Dt.registerPlugin($t);var pg="1.3.27";function _g(s,t,e){return Math.max(s,Math.min(t,e))}function By(s,t,e){return(1-e)*s+e*t}function ky(s,t,e,n){return By(s,t,1-Math.exp(-e*n))}function zy(s,t){return(s%t+t)%t}var Vy=class{constructor(){zt(this,"isRunning",!1);zt(this,"value",0);zt(this,"from",0);zt(this,"to",0);zt(this,"currentTime",0);zt(this,"lerp");zt(this,"duration");zt(this,"easing");zt(this,"onUpdate")}advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let e=_g(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=ky(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:a}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=a}};function Gy(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}var Hy=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){zt(this,"width",0);zt(this,"height",0);zt(this,"scrollHeight",0);zt(this,"scrollWidth",0);zt(this,"debouncedResize");zt(this,"wrapperResizeObserver");zt(this,"contentResizeObserver");zt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});zt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});zt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=Gy(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},xg=class{constructor(){zt(this,"events",{})}emit(s,...t){let e=this.events[s]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}},Wy=100/6,Ks={passive:!1};function mg(s,t){return s===1?Wy:s===2?t:1}var Xy=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){zt(this,"touchStart",{x:0,y:0});zt(this,"lastDelta",{x:0,y:0});zt(this,"window",{width:0,height:0});zt(this,"emitter",new xg);zt(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});zt(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});zt(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});zt(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=mg(n,this.window.width),r=mg(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});zt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ks),this.element.addEventListener("touchstart",this.onTouchStart,Ks),this.element.addEventListener("touchmove",this.onTouchMove,Ks),this.element.addEventListener("touchend",this.onTouchEnd,Ks)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ks),this.element.removeEventListener("touchstart",this.onTouchStart,Ks),this.element.removeEventListener("touchmove",this.onTouchMove,Ks),this.element.removeEventListener("touchend",this.onTouchEnd,Ks)}},gg=s=>Math.min(1,1.001-2**(-10*s)),yg=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:u=1,wheelMultiplier:p=1,autoResize:g=!0,prevent:m,virtualScroll:_,overscroll:y=!0,autoRaf:T=!1,anchors:v=!1,autoToggle:M=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:x=!1,naiveDimensions:S=x,stopInertiaOnNavigate:P=!1,respectReducedMotion:A=!0}={}){zt(this,"_isScrolling",!1);zt(this,"_isStopped",!1);zt(this,"_isLocked",!1);zt(this,"_preventNextNativeScrollEvent",!1);zt(this,"_resetVelocityTimeout",null);zt(this,"_rafId",null);zt(this,"_isDraggingSelection",!1);zt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));zt(this,"isTouching");zt(this,"isIos");zt(this,"time",0);zt(this,"userData",{});zt(this,"lastVelocity",0);zt(this,"velocity",0);zt(this,"direction",0);zt(this,"options");zt(this,"targetScroll");zt(this,"animatedScroll");zt(this,"animate",new Vy);zt(this,"emitter",new xg);zt(this,"dimensions");zt(this,"virtualScroll");zt(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});zt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});zt(this,"onTransitionEnd",s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});zt(this,"onClick",s=>{let t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});zt(this,"onPointerDown",s=>{s.button===1&&this.reset()});zt(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let a=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}let o=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(a||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||r&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let d=i&&this.options.syncTouch,u=i&&n.type==="touchend";u&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});zt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});zt(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=pg,window.lenis||(window.lenis={}),window.lenis.version=pg,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof o=="number"&&typeof l!="function"?l=gg:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:f,touchMultiplier:u,wheelMultiplier:p,autoResize:g,prevent:m,virtualScroll:_,overscroll:y,autoRaf:T,anchors:v,autoToggle:M,allowNestedScroll:w,naiveDimensions:S,stopInertiaOnNavigate:P,respectReducedMotion:A},this.dimensions=new Hy(s,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Xy(e,{touchMultiplier:u,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=s.targetTouches[0]??s.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],a=40,o=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=a,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=a;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:a=i?this.options.duration:void 0,easing:o=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?e=!0:(r=1,a=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!h)return;let d=s,u=t;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let p=null;if(typeof d=="string"?(p=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),p||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(p=d),p){if(this.options.wrapper!==window){let v=this.rootElement.getBoundingClientRect();u-=this.isHorizontal?v.left:v.top}let g=p.getBoundingClientRect(),m=getComputedStyle(p),_=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),y=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);d=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(_)?0:_)-(Number.isNaN(T)?0:T)}}if(typeof d=="number"){if(d+=u,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=d-this.animatedScroll;p>this.limit/2?d-=this.limit:p<-this.limit/2&&(d+=this.limit)}}else d=_g(0,d,this.limit);if(d===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=d),typeof a=="number"&&typeof o!="function"?o=gg:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,d,{duration:a,easing:o,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),g||this.emit(),g&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,a,o,l,c,h,f,d,u,p;if(n-(i.time??0)>2e3){i.time=Date.now();let w=window.getComputedStyle(s);if(i.computedStyle=w,r=["auto","overlay","scroll"].includes(w.overflowX),a=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),h=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=a,!(r||a))return!1;f=s.scrollWidth,d=s.scrollHeight,u=s.clientWidth,p=s.clientHeight,o=f>u,l=d>p,i.isScrollableX=o,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=d,i.clientWidth=u,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else o=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,a=i.hasOverflowY,f=i.scrollWidth,d=i.scrollHeight,u=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&o||a&&l))return!1;let g=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,_,y,T,v,M;if(g==="horizontal")m=Math.round(s.scrollLeft),_=f-u,y=t,T=r,v=o,M=c;else if(g==="vertical")m=Math.round(s.scrollTop),_=d-p,y=e,T=a,v=l,M=h;else return!1;return!M&&(m>=_||m<=0)?!0:(y>0?m<_:m>0)&&T&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?zy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};var Yg=0,vf=1,Zg=2;var vl=1,Jg=2,Za=3,hr=0,dn=1,Gn=2,qr=0,ur=1,dr=2,Sf=3,Mf=4,Kg=5;var Yr=100,Qg=101,jg=102,t0=103,e0=104,n0=200,i0=201,s0=202,r0=203,bf=204,wf=205,a0=206,o0=207,l0=208,c0=209,h0=210,u0=211,d0=212,f0=213,p0=214,nh=0,ih=1,sh=2,Ba=3,rh=4,ah=5,oh=6,lh=7,Ih=0,m0=1,g0=2,ls=0,Tf=1,Ef=2,Af=3,Sl=4,Cf=5,Rf=6,Pf=7;var If=300,Zr=301,Ja=302,Lh=303,Dh=304,ch=1e3,es=1001,hh=1002,yn=1003,_0=1004;var Ml=1005;var jn=1006,Nh=1007;var Ls=1008;var ci=1009,Lf=1010,Df=1011,Ka=1012,Oh=1013,Xi=1014,Ui=1015,$i=1016,Uh=1017,Fh=1018,Jr=1020,Nf=35902,Of=35899,Uf=1021,Ff=1022,qi=1023,Cs=1026,Ds=1027,Bh=1028,kh=1029,fr=1030,zh=1031;var Vh=1033,bl=33776,wl=33777,Tl=33778,El=33779,Gh=35840,Hh=35841,Wh=35842,Xh=35843,$h=36196,qh=37492,Yh=37496,Zh=37488,Jh=37489,Al=37490,Kh=37491,Qh=37808,jh=37809,tu=37810,eu=37811,nu=37812,iu=37813,su=37814,ru=37815,au=37816,ou=37817,lu=37818,cu=37819,hu=37820,uu=37821,du=36492,fu=36494,pu=36495,mu=36283,gu=36284,Cl=36285,_u=36286;var qo=2300,uh=2301,th=2302,uf=2303,df=2400,ff=2401,pf=2402;var x0=3200;var Rl=0,y0=1,Ns="",un="srgb",Yo="srgb-linear",Zo="linear",be="srgb";var eh=7680;var v0=519,S0=512,M0=513,b0=514,Bf=515,w0=516,T0=517,kf=518,zf=519,E0=35044;var Vf="300 es",Oi=2e3,ka=2001;function $y(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function qy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Jo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function A0(){let s=Jo("canvas");return s.style.display="block",s}var vg={},za=null;function Gf(...s){let t="THREE."+s.shift();za?za("log",t,...s):console.log(t,...s)}function C0(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Gt(...s){s=C0(s);let t="THREE."+s.shift();if(za)za("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function qt(...s){s=C0(s);let t="THREE."+s.shift();if(za)za("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Gr(...s){let t=s.join(" ");t in vg||(vg[t]=!0,Gt(...s))}function R0(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var P0={[nh]:nh,[sh]:oh,[rh]:rh,[Ba]:ah,[ih]:ih,[oh]:sh,[lh]:lh,[ah]:Ba},ns=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sg=1234567,Xo=Math.PI/180,Va=180/Math.PI;function Qa(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[e&63|128]+Bn[e>>8&255]+"-"+Bn[e>>16&255]+Bn[e>>24&255]+Bn[n&255]+Bn[n>>8&255]+Bn[n>>16&255]+Bn[n>>24&255]).toLowerCase()}function re(s,t,e){return Math.max(t,Math.min(e,s))}function Hf(s,t){return(s%t+t)%t}function Yy(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Zy(s,t,e){return s!==t?(e-s)/(t-s):0}function $o(s,t,e){return(1-e)*s+e*t}function Jy(s,t,e,n){return $o(s,t,1-Math.exp(-e*n))}function Ky(s,t=1){return t-Math.abs(Hf(s,t*2)-t)}function Qy(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function jy(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function tv(s,t){return s+Math.floor(Math.random()*(t-s+1))}function ev(s,t){return s+Math.random()*(t-s)}function nv(s){return s*(.5-Math.random())}function iv(s){s!==void 0&&(Sg=s);let t=Sg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sv(s){return s*Xo}function rv(s){return s*Va}function av(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function ov(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function lv(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),d=a((t-n)/2),u=r((n-t)/2),p=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*f,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*f,o*c);break;case"ZXZ":s.set(l*f,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*u,o*c);break;case"YXY":s.set(l*u,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*u,o*h,o*c);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Xf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function I0(s,t){if(t.constructor===Float32Array)return s;let e=Xf(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function L0(s,t){if(t.constructor===Float32Array)return s;let e=Xf(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var Kr={DEG2RAD:Xo,RAD2DEG:Va,generateUUID:Qa,clamp:re,euclideanModulo:Hf,mapLinear:Yy,inverseLerp:Zy,lerp:$o,damp:Jy,pingpong:Ky,smoothstep:Qy,smootherstep:jy,randInt:tv,randFloat:ev,randFloatSpread:nv,seededRandom:iv,degToRad:sv,radToDeg:rv,isPowerOfTwo:av,ceilPowerOfTwo:ov,floorPowerOfTwo:Wf,setQuaternionFromProperEuler:lv,normalize:L0,denormalize:I0},Jf=class Jf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jf.prototype.isVector2=!0;var Wt=Jf,is=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],d=r[a+0],u=r[a+1],p=r[a+2],g=r[a+3];if(f!==g||l!==d||c!==u||h!==p){let m=l*d+c*u+h*p+f*g;m<0&&(d=-d,u=-u,p=-p,g=-g,m=-m);let _=1-o;if(m<.9995){let y=Math.acos(m),T=Math.sin(y);_=Math.sin(_*y)/T,o=Math.sin(o*y)/T,l=l*_+d*o,c=c*_+u*o,h=h*_+p*o,f=f*_+g*o}else{l=l*_+d*o,c=c*_+u*o,h=h*_+p*o,f=f*_+g*o;let y=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=y,c*=y,h*=y,f*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],d=r[a+1],u=r[a+2],p=r[a+3];return t[e]=o*p+h*f+l*u-c*d,t[e+1]=l*p+h*d+c*f-o*u,t[e+2]=c*p+h*u+o*d-l*f,t[e+3]=h*p-o*f-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),d=l(n/2),u=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"YXZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"ZXY":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"ZYX":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"YZX":this._x=d*h*f+c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f-d*u*p;break;case"XZY":this._x=d*h*f-c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f+d*u*p;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-i)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(h-l)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+c)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-c)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Kf=class Kf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wd.copy(this).projectOnVector(t),this.sub(Wd)}reflect(t){return this.sub(Wd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kf.prototype.isVector3=!0;var $=Kf,Wd=new $,Mg=new is,Qf=class Qf{constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],p=n[8],g=i[0],m=i[3],_=i[6],y=i[1],T=i[4],v=i[7],M=i[2],w=i[5],x=i[8];return r[0]=a*g+o*y+l*M,r[3]=a*m+o*T+l*w,r[6]=a*_+o*v+l*x,r[1]=c*g+h*y+f*M,r[4]=c*m+h*T+f*w,r[7]=c*_+h*v+f*x,r[2]=d*g+u*y+p*M,r[5]=d*m+u*T+p*w,r[8]=d*_+u*v+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,d=o*l-h*r,u=c*r-a*l,p=e*f+n*d+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return t[0]=f*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-o*e)*g,t[6]=u*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xd.makeScale(t,e)),this}rotate(t){return Gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xd.makeRotation(-t)),this}translate(t,e){return Gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Qf.prototype.isMatrix3=!0;var Yt=Qf,Xd=new Yt,bg=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wg=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cv(){let s={enabled:!0,workingColorSpace:Yo,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===be&&(i.r=As(i.r),i.g=As(i.g),i.b=As(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===be&&(i.r=Fa(i.r),i.g=Fa(i.g),i.b=Fa(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ns?Zo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Yo]:{primaries:t,whitePoint:n,transfer:Zo,toXYZ:bg,fromXYZ:wg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:t,whitePoint:n,transfer:be,toXYZ:bg,fromXYZ:wg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),s}var he=cv();function As(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ba,dh=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ba===void 0&&(ba=Jo("canvas")),ba.width=t.width,ba.height=t.height;let i=ba.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ba}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Jo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=As(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(As(e[n]/255)*255):e[n]=As(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hv=0,Ga=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=Qa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push($d(i[a].image)):r.push($d(i[a]))}else r=$d(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function $d(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var uv=0,qd=new $,ti=class s extends ns{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=es,i=es,r=jn,a=Ls,o=qi,l=ci,c=s.DEFAULT_ANISOTROPY,h=Ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Qa(),this.name="",this.source=new Ga(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(qd).x}get height(){return this.source.getSize(qd).y}get depth(){return this.source.getSize(qd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==If)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ch:t.x=t.x-Math.floor(t.x);break;case es:t.x=t.x<0?0:1;break;case hh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ch:t.y=t.y-Math.floor(t.y);break;case es:t.y=t.y<0?0:1;break;case hh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=If;ti.DEFAULT_ANISOTROPY=1;var jf=class jf{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],p=l[9],g=l[2],m=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,v=(u+1)/2,M=(_+1)/2,w=(h+d)/4,x=(f+g)/4,S=(p+m)/4;return T>v&&T>M?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=w/n,r=x/n):v>M?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=S/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=x/r,i=S/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(f-g)*(f-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(f-g)/y,this.z=(d-h)/y,this.w=Math.acos((c+u+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jf.prototype.isVector4=!0;var ze=jf,fh=class extends ns{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new ti({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ga(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},wi=class extends fh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ko=class extends ti{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ph=class extends ti{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ph=class Ph{constructor(t,e,n,i,r,a,o,l,c,h,f,d,u,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,f,d,u,p,g,m)}set(t,e,n,i,r,a,o,l,c,h,f,d,u,p,g,m){let _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=h,_[10]=f,_[14]=d,_[3]=u,_[7]=p,_[11]=g,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ph().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/wa.setFromMatrixColumn(t,0).length(),r=1/wa.setFromMatrixColumn(t,1).length(),a=1/wa.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*h,u=a*f,p=o*h,g=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+p*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=p+u*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,u=l*f,p=c*h,g=c*f;e[0]=d+g*o,e[4]=p*o-u,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=u*o-p,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,u=l*f,p=c*h,g=c*f;e[0]=d-g*o,e[4]=-a*f,e[8]=p+u*o,e[1]=u+p*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,u=a*f,p=o*h,g=o*f;e[0]=l*h,e[4]=p*c-u,e[8]=d*c+g,e[1]=l*f,e[5]=g*c+d,e[9]=u*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,u=a*c,p=o*l,g=o*c;e[0]=l*h,e[4]=g-d*f,e[8]=p*f+u,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*f+p,e[10]=d-g*f}else if(t.order==="XZY"){let d=a*l,u=a*c,p=o*l,g=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+g,e[5]=a*h,e[9]=u*f-p,e[2]=p*f-u,e[6]=o*h,e[10]=g*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dv,t,fv)}lookAt(t,e,n){let i=this.elements;return Si.subVectors(t,e),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Qs.crossVectors(n,Si),Qs.lengthSq()===0&&(Math.abs(n.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Qs.crossVectors(n,Si)),Qs.normalize(),Ic.crossVectors(Si,Qs),i[0]=Qs.x,i[4]=Ic.x,i[8]=Si.x,i[1]=Qs.y,i[5]=Ic.y,i[9]=Si.y,i[2]=Qs.z,i[6]=Ic.z,i[10]=Si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],p=n[2],g=n[6],m=n[10],_=n[14],y=n[3],T=n[7],v=n[11],M=n[15],w=i[0],x=i[4],S=i[8],P=i[12],A=i[1],D=i[5],I=i[9],V=i[13],L=i[2],G=i[6],O=i[10],N=i[14],F=i[3],B=i[7],R=i[11],J=i[15];return r[0]=a*w+o*A+l*L+c*F,r[4]=a*x+o*D+l*G+c*B,r[8]=a*S+o*I+l*O+c*R,r[12]=a*P+o*V+l*N+c*J,r[1]=h*w+f*A+d*L+u*F,r[5]=h*x+f*D+d*G+u*B,r[9]=h*S+f*I+d*O+u*R,r[13]=h*P+f*V+d*N+u*J,r[2]=p*w+g*A+m*L+_*F,r[6]=p*x+g*D+m*G+_*B,r[10]=p*S+g*I+m*O+_*R,r[14]=p*P+g*V+m*N+_*J,r[3]=y*w+T*A+v*L+M*F,r[7]=y*x+T*D+v*G+M*B,r[11]=y*S+T*I+v*O+M*R,r[15]=y*P+T*V+v*N+M*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],p=t[3],g=t[7],m=t[11],_=t[15],y=l*u-c*d,T=o*u-c*f,v=o*d-l*f,M=a*u-c*h,w=a*d-l*h,x=a*f-o*h;return e*(g*y-m*T+_*v)-n*(p*y-m*M+_*w)+i*(p*T-g*M+_*x)-r*(p*v-g*w+m*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],p=t[12],g=t[13],m=t[14],_=t[15],y=e*o-n*a,T=e*l-i*a,v=e*c-r*a,M=n*l-i*o,w=n*c-r*o,x=i*c-r*l,S=h*g-f*p,P=h*m-d*p,A=h*_-u*p,D=f*m-d*g,I=f*_-u*g,V=d*_-u*m,L=y*V-T*I+v*D+M*A-w*P+x*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/L;return t[0]=(o*V-l*I+c*D)*G,t[1]=(i*I-n*V-r*D)*G,t[2]=(g*x-m*w+_*M)*G,t[3]=(d*w-f*x-u*M)*G,t[4]=(l*A-a*V-c*P)*G,t[5]=(e*V-i*A+r*P)*G,t[6]=(m*v-p*x-_*T)*G,t[7]=(h*x-d*v+u*T)*G,t[8]=(a*I-o*A+c*S)*G,t[9]=(n*A-e*I-r*S)*G,t[10]=(p*w-g*v+_*y)*G,t[11]=(f*v-h*w-u*y)*G,t[12]=(o*P-a*D-l*S)*G,t[13]=(e*D-n*P+i*S)*G,t[14]=(g*T-p*M-m*y)*G,t[15]=(h*M-f*T+d*y)*G,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,d=r*c,u=r*h,p=r*f,g=a*h,m=a*f,_=o*f,y=l*c,T=l*h,v=l*f,M=n.x,w=n.y,x=n.z;return i[0]=(1-(g+_))*M,i[1]=(u+v)*M,i[2]=(p-T)*M,i[3]=0,i[4]=(u-v)*w,i[5]=(1-(d+_))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(p+T)*x,i[9]=(m-y)*x,i[10]=(1-(d+g))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=wa.set(i[0],i[1],i[2]).length(),o=wa.set(i[4],i[5],i[6]).length(),l=wa.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Vi.copy(this);let c=1/a,h=1/o,f=1/l;return Vi.elements[0]*=c,Vi.elements[1]*=c,Vi.elements[2]*=c,Vi.elements[4]*=h,Vi.elements[5]*=h,Vi.elements[6]*=h,Vi.elements[8]*=f,Vi.elements[9]*=f,Vi.elements[10]*=f,e.setFromRotationMatrix(Vi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=Oi,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),p,g;if(l)p=r/(a-r),g=a*r/(a-r);else if(o===Oi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ka)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Oi,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),p,g;if(l)p=1/(a-r),g=a/(a-r);else if(o===Oi)p=-2/(a-r),g=-(a+r)/(a-r);else if(o===ka)p=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ph.prototype.isMatrix4=!0;var Ee=Ph,wa=new $,Vi=new Ee,dv=new $(0,0,0),fv=new $(1,1,1),Qs=new $,Ic=new $,Si=new $,Tg=new Ee,Eg=new is,ss=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Tg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Eg.setFromEuler(this),this.setFromQuaternion(Eg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ss.DEFAULT_ORDER="XYZ";var Qo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pv=0,Ag=new $,Ta=new is,Ms=new Ee,Lc=new $,ko=new $,mv=new $,gv=new is,Cg=new $(1,0,0),Rg=new $(0,1,0),Pg=new $(0,0,1),Ig={type:"added"},_v={type:"removed"},Ea={type:"childadded",child:null},Yd={type:"childremoved",child:null},vn=class s extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=Qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new $,e=new ss,n=new is,i=new $(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Yt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ta.setFromAxisAngle(t,e),this.quaternion.multiply(Ta),this}rotateOnWorldAxis(t,e){return Ta.setFromAxisAngle(t,e),this.quaternion.premultiply(Ta),this}rotateX(t){return this.rotateOnAxis(Cg,t)}rotateY(t){return this.rotateOnAxis(Rg,t)}rotateZ(t){return this.rotateOnAxis(Pg,t)}translateOnAxis(t,e){return Ag.copy(t).applyQuaternion(this.quaternion),this.position.add(Ag.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cg,t)}translateY(t){return this.translateOnAxis(Rg,t)}translateZ(t){return this.translateOnAxis(Pg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ms.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lc.copy(t):Lc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ms.lookAt(ko,Lc,this.up):Ms.lookAt(Lc,ko,this.up),this.quaternion.setFromRotationMatrix(Ms),i&&(Ms.extractRotation(i.matrixWorld),Ta.setFromRotationMatrix(Ms),this.quaternion.premultiply(Ta.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ig),Ea.child=t,this.dispatchEvent(Ea),Ea.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_v),Yd.child=t,this.dispatchEvent(Yd),Yd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ms.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ms.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ms),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ig),Ea.child=t,this.dispatchEvent(Ea),Ea.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,t,mv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,gv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),u=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vn.DEFAULT_UP=new $(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bi=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},xv={type:"move"},Ha=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),_=this._getHandJoint(c,g);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,p=.005;c.inputState.pinching&&d>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new bi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},D0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},js={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function Zd(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=Hf(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Zd(a,r,t+1/3),this.g=Zd(a,r,t),this.b=Zd(a,r,t-1/3)}return he.colorSpaceToWorking(this,i),this}setStyle(t,e=un){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=un){let n=D0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}copyLinearToSRGB(t){return this.r=Fa(t.r),this.g=Fa(t.g),this.b=Fa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return he.workingToColorSpace(kn.copy(this),t),Math.round(re(kn.r*255,0,255))*65536+Math.round(re(kn.g*255,0,255))*256+Math.round(re(kn.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(kn.copy(this),e);let n=kn.r,i=kn.g,r=kn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(kn.copy(this),e),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=un){he.workingToColorSpace(kn.copy(this),t);let e=kn.r,n=kn.g,i=kn.b;return t!==un?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(js),this.setHSL(js.h+t,js.s+e,js.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(js),t.getHSL(Dc);let n=$o(js.h,Dc.h,e),i=$o(js.s,Dc.s,e),r=$o(js.l,Dc.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kn=new Kt;Kt.NAMES=D0;var Hr=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gi=new $,bs=new $,Jd=new $,ws=new $,Aa=new $,Ca=new $,Lg=new $,Kd=new $,Qd=new $,jd=new $,tf=new ze,ef=new ze,nf=new ze,ir=class s{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Gi.subVectors(t,e),i.cross(Gi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Gi.subVectors(i,e),bs.subVectors(n,e),Jd.subVectors(t,e);let a=Gi.dot(Gi),o=Gi.dot(bs),l=Gi.dot(Jd),c=bs.dot(bs),h=bs.dot(Jd),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ws)===null?!1:ws.x>=0&&ws.y>=0&&ws.x+ws.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,ws)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ws.x),l.addScaledVector(a,ws.y),l.addScaledVector(o,ws.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return tf.setScalar(0),ef.setScalar(0),nf.setScalar(0),tf.fromBufferAttribute(t,e),ef.fromBufferAttribute(t,n),nf.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(tf,r.x),a.addScaledVector(ef,r.y),a.addScaledVector(nf,r.z),a}static isFrontFacing(t,e,n,i){return Gi.subVectors(n,e),bs.subVectors(t,e),Gi.cross(bs).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),bs.subVectors(this.a,this.b),Gi.cross(bs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Aa.subVectors(i,n),Ca.subVectors(r,n),Kd.subVectors(t,n);let l=Aa.dot(Kd),c=Ca.dot(Kd);if(l<=0&&c<=0)return e.copy(n);Qd.subVectors(t,i);let h=Aa.dot(Qd),f=Ca.dot(Qd);if(h>=0&&f<=h)return e.copy(i);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Aa,a);jd.subVectors(t,r);let u=Aa.dot(jd),p=Ca.dot(jd);if(p>=0&&u<=p)return e.copy(r);let g=u*c-l*p;if(g<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(Ca,o);let m=h*p-u*f;if(m<=0&&f-h>=0&&u-p>=0)return Lg.subVectors(r,i),o=(f-h)/(f-h+(u-p)),e.copy(i).addScaledVector(Lg,o);let _=1/(m+g+d);return a=g*_,o=d*_,e.copy(n).addScaledVector(Aa,a).addScaledVector(Ca,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rs=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Hi):Hi.fromBufferAttribute(r,a),Hi.applyMatrix4(t.matrixWorld),this.expandByPoint(Hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nc.copy(n.boundingBox)),Nc.applyMatrix4(t.matrixWorld),this.union(Nc)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hi),Hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),Oc.subVectors(this.max,zo),Ra.subVectors(t.a,zo),Pa.subVectors(t.b,zo),Ia.subVectors(t.c,zo),tr.subVectors(Pa,Ra),er.subVectors(Ia,Pa),Br.subVectors(Ra,Ia);let e=[0,-tr.z,tr.y,0,-er.z,er.y,0,-Br.z,Br.y,tr.z,0,-tr.x,er.z,0,-er.x,Br.z,0,-Br.x,-tr.y,tr.x,0,-er.y,er.x,0,-Br.y,Br.x,0];return!sf(e,Ra,Pa,Ia,Oc)||(e=[1,0,0,0,1,0,0,0,1],!sf(e,Ra,Pa,Ia,Oc))?!1:(Uc.crossVectors(tr,er),e=[Uc.x,Uc.y,Uc.z],sf(e,Ra,Pa,Ia,Oc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ts),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ts=[new $,new $,new $,new $,new $,new $,new $,new $],Hi=new $,Nc=new rs,Ra=new $,Pa=new $,Ia=new $,tr=new $,er=new $,Br=new $,zo=new $,Oc=new $,Uc=new $,kr=new $;function sf(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){kr.fromArray(s,r);let o=i.x*Math.abs(kr.x)+i.y*Math.abs(kr.y)+i.z*Math.abs(kr.z),l=t.dot(kr),c=e.dot(kr),h=n.dot(kr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var rn=new $,Fc=new Wt,yv=0,li=class extends ns{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=E0,this.updateRanges=[],this.gpuType=Ui,this.version=0,this._normalizationScale=t!==void 0?Xf(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fc.fromBufferAttribute(this,e),Fc.applyMatrix3(t),this.setXY(e,Fc.x,Fc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):I0(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):L0(t,this.array)}};var jo=class extends li{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var tl=class extends li{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xe=class extends li{constructor(t,e,n){super(new Float32Array(t),e,n)}},vv=new rs,Vo=new $,rf=new $,Rs=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):vv.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vo.subVectors(t,this.center);let e=Vo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Vo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vo.copy(t.center).add(rf)),this.expandByPoint(Vo.copy(t.center).sub(rf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Sv=0,Ni=new Ee,af=new vn,La=new $,Mi=new rs,Go=new rs,xn=new $,Sn=class s extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=Qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($y(t)?tl:jo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ni.makeRotationFromQuaternion(t),this.applyMatrix4(Ni),this}rotateX(t){return Ni.makeRotationX(t),this.applyMatrix4(Ni),this}rotateY(t){return Ni.makeRotationY(t),this.applyMatrix4(Ni),this}rotateZ(t){return Ni.makeRotationZ(t),this.applyMatrix4(Ni),this}translate(t,e,n){return Ni.makeTranslation(t,e,n),this.applyMatrix4(Ni),this}scale(t,e,n){return Ni.makeScale(t,e,n),this.applyMatrix4(Ni),this}lookAt(t){return af.lookAt(t),af.updateMatrix(),this.applyMatrix4(af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(La).negate(),this.translate(La.x,La.y,La.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Mi.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let n=this.boundingSphere.center;if(Mi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Go.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(Mi.min,Go.min),Mi.expandByPoint(xn),xn.addVectors(Mi.max,Go.max),Mi.expandByPoint(xn)):(Mi.expandByPoint(Go.min),Mi.expandByPoint(Go.max))}Mi.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)xn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(xn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xn.fromBufferAttribute(o,c),l&&(La.fromBufferAttribute(t,c),xn.add(La)),i=Math.max(i,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new li(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new $,l[P]=new $;let h=new $,f=new $,d=new $,u=new Wt,p=new Wt,g=new Wt,m=new $,_=new $;function y(P,A,D){c[P]=c[A]=c[D]=1,h.fromBufferAttribute(n,P),f.fromBufferAttribute(n,A),d.fromBufferAttribute(n,D),u.fromBufferAttribute(r,P),p.fromBufferAttribute(r,A),g.fromBufferAttribute(r,D),f.sub(h),d.sub(h),p.sub(u),g.sub(u);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(m.copy(f).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),_.copy(d).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(I),o[P].add(m),o[A].add(m),o[D].add(m),l[P].add(_),l[A].add(_),l[D].add(_))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let P=0,A=T.length;P<A;++P){let D=T[P],I=D.start,V=D.count;for(let L=I,G=I+V;L<G;L+=3)y(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let v=new $,M=new $,w=new $,x=new $;function S(P){w.fromBufferAttribute(i,P),x.copy(w);let A=o[P];v.copy(A),v.sub(w.multiplyScalar(w.dot(A))).normalize(),M.crossVectors(x,A);let I=M.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,I)}for(let P=0,A=n.count;P<A;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new li(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new $,r=new $,a=new $,o=new $,l=new $,c=new $,h=new $,f=new $;if(t)for(let d=0,u=t.count;d<u;d+=3){let p=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xn.fromBufferAttribute(t,e),xn.normalize(),t.setXYZ(e,xn.x,xn.y,xn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),u=0,p=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?u=l[g]*o.data.stride+o.offset:u=l[g]*h;for(let _=0;_<h;_++)d[p++]=c[u++]}return new li(d,h,f)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var of=new $,Mv=new $,bv=new Yt,Wi=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=of.subVectors(n,e).cross(Mv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(of),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||bv.getNormalMatrix(t),i=this.coplanarPoint(of).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},wv=0,as=class extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=Qa(),this.name="",this.type="Material",this.blending=ur,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bf,this.blendDst=wf,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eh,this.stencilZFail=eh,this.stencilZPass=eh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Wi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Es=new $,lf=new $,Bc=new $,kc=new $,el=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Es)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Es.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Es.copy(this.origin).addScaledVector(this.direction,e),Es.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){lf.copy(t).add(e).multiplyScalar(.5),Bc.copy(e).sub(t).normalize(),kc.copy(this.origin).sub(lf);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Bc),o=kc.dot(this.direction),l=-kc.dot(Bc),c=kc.lengthSq(),h=Math.abs(1-a*a),f,d,u,p;if(h>0)if(f=a*l-o,d=a*o-l,p=r*h,f>=0)if(d>=-p)if(d<=p){let g=1/h;f*=g,d*=g,u=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d<=-p?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=p?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(lf).addScaledVector(Bc,d),u}intersectSphere(t,e){if(t.radius<0)return null;Es.subVectors(t.center,this.origin);let n=Es.dot(this.direction),i=Es.dot(Es)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Es)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,d=t.y-a.y,u=t.z-a.z,p=e.x-a.x,g=e.y-a.y,m=e.z-a.z,_=n.x-a.x,y=n.y-a.y,T=n.z-a.z,v=Math.abs(l),M=Math.abs(c),w=Math.abs(h),x,S,P,A,D,I,V,L,G,O,N,F;if(v>=M&&v>=w?(P=l,I=f,G=p,F=_,l>=0?(x=c,S=h,A=d,D=u,V=g,L=m,O=y,N=T):(x=h,S=c,A=u,D=d,V=m,L=g,O=T,N=y)):M>=w?(P=c,I=d,G=g,F=y,c>=0?(x=h,S=l,A=u,D=f,V=m,L=p,O=T,N=_):(x=l,S=h,A=f,D=u,V=p,L=m,O=_,N=T)):(P=h,I=u,G=m,F=T,h>=0?(x=l,S=c,A=f,D=d,V=p,L=g,O=_,N=y):(x=c,S=l,A=d,D=f,V=g,L=p,O=y,N=_)),P===0)return null;let B=x/P,R=S/P,J=1/P,pt=A-B*I,Pt=D-R*I,Z=V-B*G,lt=L-R*G,gt=O-B*F,at=N-R*F,dt=gt*lt-at*Z,Lt=pt*at-Pt*gt,me=Z*Pt-lt*pt;if(i){if(dt<0||Lt<0||me<0)return null}else if((dt<0||Lt<0||me<0)&&(dt>0||Lt>0||me>0))return null;let Et=dt+Lt+me;if(Et===0)return null;let Xt=J*(dt*I+Lt*G+me*F);return(Et>0?Xt<0:Xt>0)?null:this.at(Xt/Et,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sr=class extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Dg=new Ee,zr=new el,zc=new Rs,Ng=new $,Vc=new $,Gc=new $,Hc=new $,cf=new $,Wc=new $,Og=new $,Xc=new $,ye=class extends vn{constructor(t=new Sn,e=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Wc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(cf.fromBufferAttribute(f,t),a?Wc.addScaledVector(cf,h):Wc.addScaledVector(cf.sub(e),h))}e.add(Wc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zc.copy(n.boundingSphere),zc.applyMatrix4(r),zr.copy(t.ray).recast(t.near),!(zc.containsPoint(zr.origin)===!1&&(zr.intersectSphere(zc,Ng)===null||zr.origin.distanceToSquared(Ng)>(t.far-t.near)**2))&&(Dg.copy(r).invert(),zr.copy(t.ray).applyMatrix4(Dg),!(n.boundingBox!==null&&zr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zr)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,g=d.length;p<g;p++){let m=d[p],_=a[m.materialIndex],y=Math.max(m.start,u.start),T=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let v=y,M=T;v<M;v+=3){let w=o.getX(v),x=o.getX(v+1),S=o.getX(v+2);i=$c(this,_,t,n,c,h,f,w,x,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let m=p,_=g;m<_;m+=3){let y=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);i=$c(this,a,t,n,c,h,f,y,T,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,g=d.length;p<g;p++){let m=d[p],_=a[m.materialIndex],y=Math.max(m.start,u.start),T=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let v=y,M=T;v<M;v+=3){let w=v,x=v+1,S=v+2;i=$c(this,_,t,n,c,h,f,w,x,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let m=p,_=g;m<_;m+=3){let y=m,T=m+1,v=m+2;i=$c(this,a,t,n,c,h,f,y,T,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Tv(s,t,e,n,i,r,a,o){let l;if(t.side===dn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===hr,o),l===null)return null;Xc.copy(o),Xc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Xc);return c<e.near||c>e.far?null:{distance:c,point:Xc.clone(),object:s}}function $c(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Vc),s.getVertexPosition(l,Gc),s.getVertexPosition(c,Hc);let h=Tv(s,t,e,n,Vc,Gc,Hc,Og);if(h){let f=new $;ir.getBarycoord(Og,Vc,Gc,Hc,f),i&&(h.uv=ir.getInterpolatedAttribute(i,o,l,c,f,new Wt)),r&&(h.uv1=ir.getInterpolatedAttribute(r,o,l,c,f,new Wt)),a&&(h.normal=ir.getInterpolatedAttribute(a,o,l,c,f,new $),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new $,materialIndex:0};ir.getNormal(Vc,Gc,Hc,d.normal),h.face=d,h.barycoord=f}return h}var nl=class extends ti{constructor(t=null,e=1,n=1,i,r,a,o,l,c=yn,h=yn,f,d){super(null,a,o,l,c,h,i,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var il=class extends li{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Da=new Ee,Ug=new Ee,qc=[],Fg=new rs,Ev=new Ee,Ho=new ye,Wo=new Rs,sl=class extends ye{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new il(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ev)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new rs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Da),Fg.copy(t.boundingBox).applyMatrix4(Da),this.boundingBox.union(Fg)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Da),Wo.copy(t.boundingSphere).applyMatrix4(Da),this.boundingSphere.union(Wo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ho.geometry=this.geometry,Ho.material=this.material,Ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wo.copy(this.boundingSphere),Wo.applyMatrix4(n),t.ray.intersectsSphere(Wo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Da),Ug.multiplyMatrices(n,Da),Ho.matrixWorld=Ug,Ho.raycast(t,qc);for(let a=0,o=qc.length;a<o;a++){let l=qc[a];l.instanceId=r,l.object=this,e.push(l)}qc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new il(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new nl(new Float32Array(i*this.count),i,this.count,Bh,Ui));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vr=new Rs,Av=new Wt(.5,.5),Yc=new $,rr=class{constructor(t=new Wi,e=new Wi,n=new Wi,i=new Wi,r=new Wi,a=new Wi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Oi,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],u=r[7],p=r[8],g=r[9],m=r[10],_=r[11],y=r[12],T=r[13],v=r[14],M=r[15];if(i[0].setComponents(c-a,u-h,_-p,M-y).normalize(),i[1].setComponents(c+a,u+h,_+p,M+y).normalize(),i[2].setComponents(c+o,u+f,_+g,M+T).normalize(),i[3].setComponents(c-o,u-f,_-g,M-T).normalize(),n)i[4].setComponents(l,d,m,v).normalize(),i[5].setComponents(c-l,u-d,_-m,M-v).normalize();else if(i[4].setComponents(c-l,u-d,_-m,M-v).normalize(),e===Oi)i[5].setComponents(c+l,u+d,_+m,M+v).normalize();else if(e===ka)i[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(t){Vr.center.set(0,0,0);let e=Av.distanceTo(t.center);return Vr.radius=.7071067811865476+e,Vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Yc.x=i.normal.x>0?t.max.x:t.min.x,Yc.y=i.normal.y>0?t.max.y:t.min.y,Yc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Yc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Bg=new Ee,mh=class s{constructor(){this.coordinateSystem=Oi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Bg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new rr),n[i].setFromProjectionMatrix(Bg,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new rr),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Wa=class extends as{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},kg=new Ee,mf=new el,Zc=new Rs,Jc=new $,rl=class extends vn{constructor(t=new Sn,e=new Wa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zc.copy(n.boundingSphere),Zc.applyMatrix4(i),Zc.radius+=r,t.ray.intersectsSphere(Zc)===!1)return;kg.copy(i).invert(),mf.copy(t.ray).applyMatrix4(kg);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let p=d,g=u;p<g;p++){let m=c.getX(p);Jc.fromBufferAttribute(f,m),zg(Jc,m,l,i,t,e,this)}}else{let d=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let p=d,g=u;p<g;p++)Jc.fromBufferAttribute(f,p),zg(Jc,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function zg(s,t,e,n,i,r,a){let o=mf.distanceSqToPoint(s);if(o<e){let l=new $;mf.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var al=class extends ti{constructor(t=[],e=Zr,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ps=class extends ti{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Is=class extends ti{constructor(t,e,n=Xi,i,r,a,o=yn,l=yn,c,h=Cs,f=1){if(h!==Cs&&h!==Ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ga(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ol=class extends Is{constructor(t,e=Xi,n=Zr,i,r,a=yn,o=yn,l,c=Cs){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ll=class extends ti{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ar=class s extends Sn{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,u=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(f,2));function p(g,m,_,y,T,v,M,w,x,S,P){let A=v/x,D=M/S,I=v/2,V=M/2,L=w/2,G=x+1,O=S+1,N=0,F=0,B=new $;for(let R=0;R<O;R++){let J=R*D-V;for(let pt=0;pt<G;pt++){let Pt=pt*A-I;B[g]=Pt*y,B[m]=J*T,B[_]=L,c.push(B.x,B.y,B.z),B[g]=0,B[m]=0,B[_]=w>0?1:-1,h.push(B.x,B.y,B.z),f.push(pt/x),f.push(1-R/S),N+=1}}for(let R=0;R<S;R++)for(let J=0;J<x;J++){let pt=d+J+G*R,Pt=d+J+G*(R+1),Z=d+(J+1)+G*(R+1),lt=d+(J+1)+G*R;l.push(pt,Pt,lt),l.push(Pt,Z,lt),F+=6}o.addGroup(u,F,P),u+=F,d+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Xa=class s extends Sn{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new $,h=new Wt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=n+f/e*i;c.x=t*Math.cos(u),c.y=t*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(o,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Wr=class s extends Sn{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],d=[],u=[],p=0,g=[],m=n/2,_=0;y(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(u,2));function y(){let v=new $,M=new $,w=0,x=(e-t)/n;for(let S=0;S<=r;S++){let P=[],A=S/r,D=A*(e-t)+t;for(let I=0;I<=i;I++){let V=I/i,L=V*l+o,G=Math.sin(L),O=Math.cos(L);M.x=D*G,M.y=-A*n+m,M.z=D*O,f.push(M.x,M.y,M.z),v.set(G,x,O).normalize(),d.push(v.x,v.y,v.z),u.push(V,1-A),P.push(p++)}g.push(P)}for(let S=0;S<i;S++)for(let P=0;P<r;P++){let A=g[P][S],D=g[P+1][S],I=g[P+1][S+1],V=g[P][S+1];(t>0||P!==0)&&(h.push(A,D,V),w+=3),(e>0||P!==r-1)&&(h.push(D,I,V),w+=3)}c.addGroup(_,w,0),_+=w}function T(v){let M=p,w=new Wt,x=new $,S=0,P=v===!0?t:e,A=v===!0?1:-1;for(let I=1;I<=i;I++)f.push(0,m*A,0),d.push(0,A,0),u.push(.5,.5),p++;let D=p;for(let I=0;I<=i;I++){let L=I/i*l+o,G=Math.cos(L),O=Math.sin(L);x.x=P*O,x.y=m*A,x.z=P*G,f.push(x.x,x.y,x.z),d.push(0,A,0),w.x=G*.5+.5,w.y=O*.5*A+.5,u.push(w.x,w.y),p++}for(let I=0;I<i;I++){let V=M+I,L=D+I;v===!0?h.push(L,L+1,V):h.push(L+1,L,V),S+=3}c.addGroup(_,S,v===!0?1:2),_+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},cl=class s extends Wr{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var hl=class s extends Sn{constructor(t=[new Wt(0,-.5),new Wt(.5,0),new Wt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=re(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,f=new $,d=new Wt,u=new $,p=new $,g=new $,m=0,_=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,_=t[y+1].y-t[y].y,u.x=_*1,u.y=-m,u.z=_*0,g.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:g.normalize(),l.push(g.x,g.y,g.z);break;default:m=t[y+1].x-t[y].x,_=t[y+1].y-t[y].y,u.x=_*1,u.y=-m,u.z=_*0,p.copy(u),u.x+=g.x,u.y+=g.y,u.z+=g.z,u.normalize(),l.push(u.x,u.y,u.z),g.copy(p)}for(let y=0;y<=e;y++){let T=n+y*h*i,v=Math.sin(T),M=Math.cos(T);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*v,f.y=t[w].y,f.z=t[w].x*M,a.push(f.x,f.y,f.z),d.x=y/e,d.y=w/(t.length-1),o.push(d.x,d.y);let x=l[3*w+0]*v,S=l[3*w+1],P=l[3*w+0]*M;c.push(x,S,P)}}for(let y=0;y<e;y++)for(let T=0;T<t.length-1;T++){let v=T+y*t.length,M=v,w=v+t.length,x=v+t.length+1,S=v+1;r.push(M,w,S),r.push(x,S,w)}this.setIndex(r),this.setAttribute("position",new xe(a,3)),this.setAttribute("uv",new xe(o,2)),this.setAttribute("normal",new xe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var ul=class s extends Sn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=t/o,d=e/l,u=[],p=[],g=[],m=[];for(let _=0;_<h;_++){let y=_*d-a;for(let T=0;T<c;T++){let v=T*f-r;p.push(v,-y,0),g.push(0,0,1),m.push(T/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<o;y++){let T=y+c*_,v=y+c*(_+1),M=y+1+c*(_+1),w=y+1+c*_;u.push(T,v,w),u.push(v,M,w)}this.setIndex(u),this.setAttribute("position",new xe(p,3)),this.setAttribute("normal",new xe(g,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},dl=class s extends Sn{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],f=t,d=(e-t)/i,u=new $,p=new Wt;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){let _=r+m/n*a;u.x=f*Math.cos(_),u.y=f*Math.sin(_),l.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(u.x/e+1)/2,p.y=(u.y/e+1)/2,h.push(p.x,p.y)}f+=d}for(let g=0;g<i;g++){let m=g*(n+1);for(let _=0;_<n;_++){let y=_+m,T=y,v=y+n+1,M=y+n+2,w=y+1;o.push(T,v,w),o.push(v,M,w)}}this.setIndex(o),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var $a=class s extends Sn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new $,d=new $,u=[],p=[],g=[],m=[];for(let _=0;_<=n;_++){let y=[],T=_/n,v=a+T*o,M=t*Math.cos(v),w=Math.sqrt(t*t-M*M),x=0;_===0&&a===0?x=.5/e:_===n&&l===Math.PI&&(x=-.5/e);for(let S=0;S<=e;S++){let P=S/e,A=i+P*r;f.x=-w*Math.cos(A),f.y=M,f.z=w*Math.sin(A),p.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),m.push(P+x,1-T),y.push(c++)}h.push(y)}for(let _=0;_<n;_++)for(let y=0;y<e;y++){let T=h[_][y+1],v=h[_][y],M=h[_+1][y],w=h[_+1][y+1];(_!==0||a>0)&&u.push(T,v,w),(_!==n-1||l<Math.PI)&&u.push(v,M,w)}this.setIndex(u),this.setAttribute("position",new xe(p,3)),this.setAttribute("normal",new xe(g,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var fl=class s extends Sn{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],f=[],d=new $,u=new $,p=new $;for(let g=0;g<=n;g++){let m=a+g/n*o;for(let _=0;_<=i;_++){let y=_/i*r;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),c.push(u.x,u.y,u.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),p.subVectors(u,d).normalize(),h.push(p.x,p.y,p.z),f.push(_/i),f.push(g/n)}}for(let g=1;g<=n;g++)for(let m=1;m<=i;m++){let _=(i+1)*g+m-1,y=(i+1)*(g-1)+m-1,T=(i+1)*(g-1)+m,v=(i+1)*g+m;l.push(_,y,v),l.push(y,T,v)}this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Qr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Vg(i))i.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Vg(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Hn(s){let t={};for(let e=0;e<s.length;e++){let n=Qr(s[e]);for(let i in n)t[i]=n[i]}return t}function Vg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Cv(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function $f(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var N0={clone:Qr,merge:Hn},Rv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,os=class extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rv,this.fragmentShader=Pv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qr(t.uniforms),this.uniformsGroups=Cv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Kt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Wt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new $().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ze().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ee().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},gh=class extends os{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Vn=class extends as{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},qa=class extends Vn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Wt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Gr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Gr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var pl=class extends as{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=Ih,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_h=class extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=x0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xh=class extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Na(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Kc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var or=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yh=class extends or{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:df,endingEnd:df}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ff:r=t,o=2*e-n;break;case pf:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ff:a=t,l=2*n-e;break;case pf:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),g=p*p,m=g*p,_=-d*m+2*d*g-d*p,y=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*p+1,T=(-1-u)*m+(1.5+u)*g+.5*p,v=u*m-u*g;for(let M=0;M!==o;++M)r[M]=_*a[h+M]+y*a[c+M]+T*a[l+M]+v*a[f+M];return r}},vh=class extends or{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),f=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*h;return r}},Sh=class extends or{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Mh=class extends or{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-e)/(i-e),g=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*g+a[l+m]*p;return r}let d=o*2,u=t-1;for(let p=0;p!==o;++p){let g=a[c+p],m=a[l+p],_=u*d+p*2,y=f[_],T=f[_+1],v=t*d+p*2,M=h[v],w=h[v+1],x=Lv(n,e,y,M,i);r[p]=O0(x,g,T,w,m)}return r}};function O0(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Iv(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Lv(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=O0(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let l=Iv(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ti=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Na(e,this.TimeBufferType),this.values=Na(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Na(t.times,Array),values:Na(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Kc(t.settings)&&(n.settings={inTangents:Na(t.settings.inTangents,Array),outTangents:Na(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Mh(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case qo:e=this.InterpolantFactoryMethodDiscrete;break;case uh:e=this.InterpolantFactoryMethodLinear;break;case th:e=this.InterpolantFactoryMethodSmooth;break;case uf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Gt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qo;case this.InterpolantFactoryMethodLinear:return uh;case this.InterpolantFactoryMethodSmooth:return th;case this.InterpolantFactoryMethodBezier:return uf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Kc(this.settings)&&(Gg(this.settings.inTangents,t),Gg(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Kc(this.settings)&&(Hg(this.settings.inTangents,t),Hg(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){qt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&qy(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){qt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===th,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let f=o*n,d=f-n,u=f+n;for(let p=0;p!==n;++p){let g=e[f+p];if(g!==e[d+p]||g!==e[u+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,d=a*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Kc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Gg(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function Hg(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Ti.prototype.ValueTypeName="";Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=uh;var lr=class extends Ti{constructor(t,e,n){super(t,e,n)}};lr.prototype.ValueTypeName="bool";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=qo;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;var bh=class extends Ti{constructor(t,e,n,i){super(t,e,n,i)}};bh.prototype.ValueTypeName="color";var wh=class extends Ti{constructor(t,e,n,i){super(t,e,n,i)}};wh.prototype.ValueTypeName="number";var Th=class extends or{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)is.slerpFlat(r,0,a,c-o,a,c,l);return r}},ml=class extends Ti{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Th(this.times,this.values,this.getValueSize(),t)}};ml.prototype.ValueTypeName="quaternion";ml.prototype.InterpolantFactoryMethodSmooth=void 0;var cr=class extends Ti{constructor(t,e,n){super(t,e,n)}};cr.prototype.ValueTypeName="string";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=qo;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Eh=class extends Ti{constructor(t,e,n,i){super(t,e,n,i)}};Eh.prototype.ValueTypeName="vector";var Ah=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],p=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},U0=new Ah,Ch=class{constructor(t){this.manager=t!==void 0?t:U0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ch.DEFAULT_MATERIAL_NAME="__DEFAULT";var gl=class extends vn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var hf=new Ee,Wg=new $,Xg=new $,_l=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Wg.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wg),Xg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xg),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){hf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(hf,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===ka||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(hf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Qc=new $,jc=new is,ts=new $,xl=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qc,jc,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,jc,ts.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Qc,jc,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,jc,ts.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},nr=new $,$g=new Wt,qg=new Wt,zn=class extends xl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Va*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(nr.x,nr.y).multiplyScalar(-t/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-t/nr.z)}getViewSize(t,e){return this.getViewBounds(t,$g,qg),e.subVectors(qg,$g)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var gf=class extends _l{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0}},Xr=class extends gl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},yl=class extends xl{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_f=class extends _l{constructor(){super(new yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends gl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new _f}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Oa=-90,Ua=1,Ya=class extends vn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new zn(Oa,Ua,t,e);i.layers=this.layers,this.add(i);let r=new zn(Oa,Ua,t,e);r.layers=this.layers,this.add(r);let a=new zn(Oa,Ua,t,e);a.layers=this.layers,this.add(a);let o=new zn(Oa,Ua,t,e);o.layers=this.layers,this.add(o);let l=new zn(Oa,Ua,t,e);l.layers=this.layers,this.add(l);let c=new zn(Oa,Ua,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=g,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Rh=class extends zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var qf="\\[\\]\\.:\\/",Dv=new RegExp("["+qf+"]","g"),Yf="[^"+qf+"]",Nv="[^"+qf.replace("\\.","")+"]",Ov=/((?:WC+[\/:])*)/.source.replace("WC",Yf),Uv=/(WCOD+)?/.source.replace("WCOD",Nv),Fv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yf),Bv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yf),kv=new RegExp("^"+Ov+Uv+Fv+Bv+"$"),zv=["material","materials","bones","map"],xf=class{constructor(t,e,n){let i=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dv,"")}static parseTrackName(t){let e=kv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);zv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=xf;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bT=new Float32Array(1);var tp=class tp{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};tp.prototype.isMatrix2=!0;var yf=tp;function Zf(s,t,e,n){let i=Vv(n);switch(e){case Uf:return s*t;case Bh:return s*t/i.components*i.byteLength;case kh:return s*t/i.components*i.byteLength;case fr:return s*t*2/i.components*i.byteLength;case zh:return s*t*2/i.components*i.byteLength;case Ff:return s*t*3/i.components*i.byteLength;case qi:return s*t*4/i.components*i.byteLength;case Vh:return s*t*4/i.components*i.byteLength;case bl:case wl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Tl:case El:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hh:case Xh:return Math.max(s,16)*Math.max(t,8)/4;case Gh:case Wh:return Math.max(s,8)*Math.max(t,8)/2;case $h:case qh:case Zh:case Jh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Yh:case Al:case Kh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Qh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case tu:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case eu:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case nu:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case iu:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case su:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ru:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case au:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ou:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case lu:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case cu:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case hu:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case uu:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case du:case fu:case pu:return Math.ceil(s/4)*Math.ceil(t/4)*16;case mu:case gu:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Cl:case _u:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vv(s){switch(s){case ci:case Lf:return{byteLength:1,components:1};case Ka:case Df:case $i:return{byteLength:2,components:1};case Uh:case Fh:return{byteLength:2,components:4};case Xi:case Oh:case Ui:return{byteLength:4,components:1};case Nf:case Of:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function s_(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Hv(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<f.length;u++){let p=f[d],g=f[u];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++d,f[d]=g)}f.length=d+1;for(let u=0,p=f.length;u<p;u++){let g=f[u];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Wv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$v=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,mS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_S=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yS="gl_FragColor = linearToOutputTexel( gl_FragColor );",vS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,MS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,bS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ES=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,OS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,US=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XS=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$S=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iM=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_M=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,EM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,RM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,BM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,GM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,HM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$M=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,KM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ib=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ab=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ob=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ub=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,db=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:Wv,alphahash_pars_fragment:Xv,alphamap_fragment:$v,alphamap_pars_fragment:qv,alphatest_fragment:Yv,alphatest_pars_fragment:Zv,aomap_fragment:Jv,aomap_pars_fragment:Kv,batching_pars_vertex:Qv,batching_vertex:jv,begin_vertex:tS,beginnormal_vertex:eS,bsdfs:nS,iridescence_fragment:iS,bumpmap_pars_fragment:sS,clipping_planes_fragment:rS,clipping_planes_pars_fragment:aS,clipping_planes_pars_vertex:oS,clipping_planes_vertex:lS,color_fragment:cS,color_pars_fragment:hS,color_pars_vertex:uS,color_vertex:dS,common:fS,defaultnormal_vertex:pS,displacementmap_pars_vertex:mS,displacementmap_vertex:gS,emissivemap_fragment:_S,emissivemap_pars_fragment:xS,colorspace_fragment:yS,colorspace_pars_fragment:vS,envmap_fragment:SS,envmap_common_pars_fragment:MS,envmap_pars_fragment:bS,envmap_pars_vertex:wS,envmap_physical_pars_fragment:OS,envmap_vertex:TS,fog_vertex:ES,fog_pars_vertex:AS,fog_fragment:CS,fog_pars_fragment:RS,gradientmap_pars_fragment:PS,lightmap_pars_fragment:IS,lights_lambert_fragment:LS,lights_lambert_pars_fragment:DS,lights_pars_begin:NS,lights_toon_fragment:US,lights_toon_pars_fragment:FS,lights_phong_fragment:BS,lights_phong_pars_fragment:kS,lights_physical_fragment:zS,lights_physical_pars_fragment:VS,lights_fragment_begin:GS,lights_fragment_maps:HS,lights_fragment_end:WS,lightprobes_pars_fragment:XS,logdepthbuf_fragment:$S,logdepthbuf_pars_fragment:qS,logdepthbuf_pars_vertex:YS,logdepthbuf_vertex:ZS,map_fragment:JS,map_pars_fragment:KS,map_particle_fragment:QS,map_particle_pars_fragment:jS,metalnessmap_fragment:tM,metalnessmap_pars_fragment:eM,morphinstance_vertex:nM,morphcolor_vertex:iM,morphnormal_vertex:sM,morphtarget_pars_vertex:rM,morphtarget_vertex:aM,normal_fragment_begin:oM,normal_fragment_maps:lM,normal_pars_fragment:cM,normal_pars_vertex:hM,normal_vertex:uM,normalmap_pars_fragment:dM,clearcoat_normal_fragment_begin:fM,clearcoat_normal_fragment_maps:pM,clearcoat_pars_fragment:mM,iridescence_pars_fragment:gM,opaque_fragment:_M,packing:xM,premultiplied_alpha_fragment:yM,project_vertex:vM,dithering_fragment:SM,dithering_pars_fragment:MM,roughnessmap_fragment:bM,roughnessmap_pars_fragment:wM,shadowmap_pars_fragment:TM,shadowmap_pars_vertex:EM,shadowmap_vertex:AM,shadowmask_pars_fragment:CM,skinbase_vertex:RM,skinning_pars_vertex:PM,skinning_vertex:IM,skinnormal_vertex:LM,specularmap_fragment:DM,specularmap_pars_fragment:NM,tonemapping_fragment:OM,tonemapping_pars_fragment:UM,transmission_fragment:FM,transmission_pars_fragment:BM,uv_pars_fragment:kM,uv_pars_vertex:zM,uv_vertex:VM,worldpos_vertex:GM,background_vert:HM,background_frag:WM,backgroundCube_vert:XM,backgroundCube_frag:$M,cube_vert:qM,cube_frag:YM,depth_vert:ZM,depth_frag:JM,distance_vert:KM,distance_frag:QM,equirect_vert:jM,equirect_frag:tb,linedashed_vert:eb,linedashed_frag:nb,meshbasic_vert:ib,meshbasic_frag:sb,meshlambert_vert:rb,meshlambert_frag:ab,meshmatcap_vert:ob,meshmatcap_frag:lb,meshnormal_vert:cb,meshnormal_frag:hb,meshphong_vert:ub,meshphong_frag:db,meshphysical_vert:fb,meshphysical_frag:pb,meshtoon_vert:mb,meshtoon_frag:gb,points_vert:_b,points_frag:xb,shadow_vert:yb,shadow_frag:vb,sprite_vert:Sb,sprite_frag:Mb},At={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},hs={basic:{uniforms:Hn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Hn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Hn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Hn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Hn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Kt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Hn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Hn([At.points,At.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Hn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Hn([At.common,At.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Hn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Hn([At.sprite,At.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:Hn([At.common,At.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:Hn([At.lights,At.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};hs.physical={uniforms:Hn([hs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var xu={r:0,b:0,g:0},bb=new Ee,r_=new Yt;r_.set(-1,0,0,0,1,0,0,0,1);function wb(s,t,e,n,i,r){let a=new Kt(0),o=i===!0?0:1,l,c,h=null,f=0,d=null;function u(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){let v=y.backgroundBlurriness>0;T=t.get(T,v)}return T}function p(y){let T=!1,v=u(y);v===null?m(a,o):v&&v.isColor&&(m(v,1),T=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(y,T){let v=u(T);v&&v.isCubeTexture?(c===void 0&&(c=new ye(new ar(1,1,1),new os({name:"BackgroundCubeMaterial",uniforms:Qr(hs.backgroundCube.uniforms),vertexShader:hs.backgroundCube.vertexShader,fragmentShader:hs.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bb.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(r_),c.material.toneMapped=he.getTransfer(v.colorSpace)!==be,(h!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ye(new ul(2,2),new os({name:"BackgroundMaterial",uniforms:Qr(hs.background.uniforms),vertexShader:hs.background.vertexShader,fragmentShader:hs.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=he.getTransfer(v.colorSpace)!==be,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,T){y.getRGB(xu,$f(s)),e.buffers.color.setClear(xu.r,xu.g,xu.b,T,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:p,addToRenderList:g,dispose:_}}function Tb(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(D,I,V,L,G){let O=!1,N=f(D,L,V,I);r!==N&&(r=N,c(r.object)),O=u(D,L,V,G),O&&p(D,L,V,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,v(D,I,V,L),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function f(D,I,V,L){let G=L.wireframe===!0,O=n[I.id];O===void 0&&(O={},n[I.id]=O);let N=D.isInstancedMesh===!0?D.id:0,F=O[N];F===void 0&&(F={},O[N]=F);let B=F[V.id];B===void 0&&(B={},F[V.id]=B);let R=B[G];return R===void 0&&(R=d(l()),B[G]=R),R}function d(D){let I=[],V=[],L=[];for(let G=0;G<e;G++)I[G]=0,V[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:L,object:D,attributes:{},index:null}}function u(D,I,V,L){let G=r.attributes,O=I.attributes,N=0,F=V.getAttributes();for(let B in F)if(F[B].location>=0){let J=G[B],pt=O[B];if(pt===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(pt=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(pt=D.instanceColor)),J===void 0||J.attribute!==pt||pt&&J.data!==pt.data)return!0;N++}return r.attributesNum!==N||r.index!==L}function p(D,I,V,L){let G={},O=I.attributes,N=0,F=V.getAttributes();for(let B in F)if(F[B].location>=0){let J=O[B];J===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));let pt={};pt.attribute=J,J&&J.data&&(pt.data=J.data),G[B]=pt,N++}r.attributes=G,r.attributesNum=N,r.index=L}function g(){let D=r.newAttributes;for(let I=0,V=D.length;I<V;I++)D[I]=0}function m(D){_(D,0)}function _(D,I){let V=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;V[D]=1,L[D]===0&&(s.enableVertexAttribArray(D),L[D]=1),G[D]!==I&&(s.vertexAttribDivisor(D,I),G[D]=I)}function y(){let D=r.newAttributes,I=r.enabledAttributes;for(let V=0,L=I.length;V<L;V++)I[V]!==D[V]&&(s.disableVertexAttribArray(V),I[V]=0)}function T(D,I,V,L,G,O,N){N===!0?s.vertexAttribIPointer(D,I,V,G,O):s.vertexAttribPointer(D,I,V,L,G,O)}function v(D,I,V,L){g();let G=L.attributes,O=V.getAttributes(),N=I.defaultAttributeValues;for(let F in O){let B=O[F];if(B.location>=0){let R=G[F];if(R===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),R!==void 0){let J=R.normalized,pt=R.itemSize,Pt=t.get(R);if(Pt===void 0)continue;let Z=Pt.buffer,lt=Pt.type,gt=Pt.bytesPerElement,at=lt===s.INT||lt===s.UNSIGNED_INT||R.gpuType===Oh;if(R.isInterleavedBufferAttribute){let dt=R.data,Lt=dt.isInterleavedBuffer===!0?dt.stride:dt.itemSize,me=R.offset;if(dt.isInstancedInterleavedBuffer||dt.isInstancedBufferAttribute){for(let Et=0;Et<B.locationSize;Et++)_(B.location+Et,dt.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Et=0;Et<B.locationSize;Et++)m(B.location+Et);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let Et=0;Et<B.locationSize;Et++)T(B.location+Et,pt/B.locationSize,lt,J,Lt*gt,(me+pt/B.locationSize*Et)*gt,at)}else{if(R.isInstancedBufferAttribute){for(let dt=0;dt<B.locationSize;dt++)_(B.location+dt,R.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let dt=0;dt<B.locationSize;dt++)m(B.location+dt);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let dt=0;dt<B.locationSize;dt++)T(B.location+dt,pt/B.locationSize,lt,J,pt*gt,pt/B.locationSize*dt*gt,at)}}else if(N!==void 0){let J=N[F];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(B.location,J);break;case 3:s.vertexAttrib3fv(B.location,J);break;case 4:s.vertexAttrib4fv(B.location,J);break;default:s.vertexAttrib1fv(B.location,J)}}}}y()}function M(){P();for(let D in n){let I=n[D];for(let V in I){let L=I[V];for(let G in L){let O=L[G];for(let N in O)h(O[N].object),delete O[N];delete L[G]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;let I=n[D.id];for(let V in I){let L=I[V];for(let G in L){let O=L[G];for(let N in O)h(O[N].object),delete O[N];delete L[G]}}delete n[D.id]}function x(D){for(let I in n){let V=n[I];for(let L in V){let G=V[L];if(G[D.id]===void 0)continue;let O=G[D.id];for(let N in O)h(O[N].object),delete O[N];delete G[D.id]}}}function S(D){for(let I in n){let V=n[I],L=D.isInstancedMesh===!0?D.id:0,G=V[L];if(G!==void 0){for(let O in G){let N=G[O];for(let F in N)h(N[F].object),delete N[F];delete G[O]}delete V[L],Object.keys(V).length===0&&delete n[I]}}}function P(){A(),a=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function Eb(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ab(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==qi&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let S=x===$i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==ci&&x!==Ui&&!S&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Gt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:v,maxSamples:M,samples:w}}function Cb(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Wi,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){let p=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,_=s.get(f);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,T=y*4,v=_.clippingState||null;l.value=v,v=h(p,d,T,u);for(let M=0;M!==T;++M)v[M]=e[M];_.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,p){let g=f!==null?f.length:0,m=null;if(g!==0){if(m=l.value,p!==!0||m===null){let _=u+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<_)&&(m=new Float32Array(_));for(let T=0,v=u;T!==g;++T,v+=4)a.copy(f[T]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}var Ll=class extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new al(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ar(5,5,5),r=new os({name:"CubemapFromEquirect",uniforms:Qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:qr});r.uniforms.tEquirect.value=e;let a=new ye(i,r),o=e.minFilter;return e.minFilter===Ls&&(e.minFilter=jn),new Ya(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},F0=256,Rb=3,Pb=20,a_=256,o_=16,Ib=3,Lb=new $,Db=new Kt,to=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ya(1,10,null),this._boxMesh=new ye(new ar(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=Lb}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,g=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(t.background=l.getClearColor(Db));let m=new Ya(n,i,h);return m.position.copy(o),m.update(l,t),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=u,l.autoClearStencil=p,t.background=g,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=k0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(F0,Wf(t))}_fromTexture(t,e){t.mapping===Zr||t.mapping===Ja?this._setSize(t.image.length===0?F0:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=B0(t,!1,!1),n=Math.log2(t)-Rb;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=B0(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Zr||t.mapping===Ja?(this._cubemapMaterial===null&&(this._cubemapMaterial=z0()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=k0()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Nb(),this._integrationMaterial=Ob());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/o_);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-Ib)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(a_*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Ub());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function B0(s,t,e){return new Ll(s,{minFilter:Ls,generateMipmaps:t,type:$i,colorSpace:Yo,depthBuffer:e})}function Dl(s,t,e){return new os({name:s,uniforms:t,vertexShader:te.cube_vert,fragmentShader:e,side:dn,blending:qr,depthTest:!1,depthWrite:!1})}function Nb(){return Dl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${a_}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ob(){return Dl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:o_}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ub(){return Dl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Pb}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function k0(){return Dl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function z0(){return Dl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Fb(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===Lh||u===Dh)if(t.has(d)){let p=t.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let g=new Ll(p.height);return g.fromEquirectangularTexture(s,d),t.set(d,g),d.addEventListener("dispose",c),o(g.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,p=u===Lh||u===Dh,g=u===Zr||u===Ja;if(p||g){let m=e.get(d),_=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new to(s)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(n===null&&(n=new to(s)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,u){return u===Lh?d.mapping=Zr:u===Dh&&(d.mapping=Ja),d}function l(d){let u=0,p=6;for(let g=0;g<p;g++)d[g]!==void 0&&u++;return u===p}function c(d){let u=d.target;u.removeEventListener("dispose",c);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Bb(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Gr("WebGLRenderer: "+n+" extension not supported."),i}}}function kb(s,t,e,n){let i={},r=new WeakMap,a=new FinalizationRegistry(p=>delete i[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete i[p.id],a.unregister(p);let g=r.get(p);g&&(t.remove(g),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,g){return i[g.id]!==void 0||(g.addEventListener("dispose",o),i[g.id]=new WeakRef(g),a.register(g,g.id,g),e.memory.geometries++),g}function h(p){let g=p.attributes;for(let m in g)t.update(g[m],s.ARRAY_BUFFER)}function f(p){let g=p.index,m=p.attributes.position,_=0;if(m===void 0)return;let y=g!==null?g.array.length:m.array.length/3-1,T=m.count>=65535?tl:jo,v=new T(Math.ceil(y/3)*6,1),M=v.array;if(g!==null){let x=g.array;_=g.version;for(let S=0,P=0;S<y;S+=3){let A=x[S+0],D=x[S+1],I=x[S+2];M[P++]=A,M[P++]=D,M[P++]=D,M[P++]=I,M[P++]=I,M[P++]=A}}else{_=m.version;for(let x=0,S=0;x<y;x+=3){let P=x+0,A=x+1,D=x+2;M[S++]=P,M[S++]=A,M[S++]=A,M[S++]=D,M[S++]=D,M[S++]=P}}v.version=_;let w=r.get(p);w&&t.remove(w),r.set(p,v)}function d(p){let g=r.get(p);if(g){let m=p.index;m!==null&&g.version<m.version&&f(p)}else f(p);return r.get(p)}function u(){for(let p in i){let g=i[p].deref();g!==void 0&&l(g)}}return{get:c,update:h,getWireframeAttribute:d,dispose:u}}function zb(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,u){u!==0&&(s.drawElementsInstanced(n,d,r,f*a,u),e.update(d,n,u))}function h(f,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,u);let g=0;for(let m=0;m<u;m++)g+=d[m];e.update(g,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Vb(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Gb(s,t,e){let n=new WeakMap,i=new ze;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let P=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],T=0;u===!0&&(T=1),p===!0&&(T=2),g===!0&&(T=3);let v=o.attributes.position.count*T,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*M*4*f),x=new Ko(w,v,M,f);x.type=Ui,x.needsUpdate=!0;let S=T*4;for(let A=0;A<f;A++){let D=m[A],I=_[A],V=y[A],L=v*M*4*A;for(let G=0;G<D.count;G++){let O=G*S;u===!0&&(i.fromBufferAttribute(D,G),w[L+O+0]=i.x,w[L+O+1]=i.y,w[L+O+2]=i.z,w[L+O+3]=0),p===!0&&(i.fromBufferAttribute(I,G),w[L+O+4]=i.x,w[L+O+5]=i.y,w[L+O+6]=i.z,w[L+O+7]=0),g===!0&&(i.fromBufferAttribute(V,G),w[L+O+8]=i.x,w[L+O+9]=i.y,w[L+O+10]=i.z,w[L+O+11]=V.itemSize===4?i.w:1)}}d={count:f,texture:x,size:new Wt(v,M)},n.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let u=0;for(let g=0;g<c.length;g++)u+=c[g];let p=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Hb(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,f=c.geometry,d=t.get(c,f);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Wb={[Tf]:"LINEAR_TONE_MAPPING",[Ef]:"REINHARD_TONE_MAPPING",[Af]:"CINEON_TONE_MAPPING",[Sl]:"ACES_FILMIC_TONE_MAPPING",[Rf]:"AGX_TONE_MAPPING",[Pf]:"NEUTRAL_TONE_MAPPING",[Cf]:"CUSTOM_TONE_MAPPING"};function Xb(s,t,e,n,i,r){let a=new wi(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Sn;h.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new xe([0,2,0,0,2,0],2));let f=new gh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ye(h,f),u=new yl(-1,1,1,-1,0,1),p=null,g=null,m=!1,_,y=null,T=[],v=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),l!==null&&l.setSize(M,w);for(let x=0;x<T.length;x++){let S=T[x];S.setSize&&S.setSize(M,w)}},this.setEffects=function(M){T=M,v=T.length>0&&T[0].isRenderPass===!0;let w=a.width,x=a.height;T.length>0&&o===null&&(o=new wi(w,x,{type:$i,depthBuffer:!1,stencilBuffer:!1}),l=new wi(w,x,{type:$i,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&T.some(P=>P.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Is(w,x),r===!0&&(c.format=Ds,c.type=Jr)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let P=0;P<T.length;P++){let A=T[P];A.setSize&&A.setSize(w,x),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(M,w){if(m||M.toneMapping===ls&&T.length===0)return!1;if(y=w,w!==null){let x=w.width,S=w.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return v===!1&&M.setRenderTarget(a),_=M.toneMapping,M.toneMapping=ls,!0},this.hasRenderPass=function(){return v},this.end=function(M,w){M.toneMapping=_,m=!0;let x=a,S=o;for(let P=0;P<T.length;P++){let A=T[P];A.enabled!==!1&&(A.render(M,S,x,w),A.needsSwap!==!1&&(x=S,S=S===o?l:o))}if(p!==M.outputColorSpace||g!==M.toneMapping){p=M.outputColorSpace,g=M.toneMapping,f.defines={},he.getTransfer(p)===be&&(f.defines.SRGB_TRANSFER="");let P=Wb[g];P&&(f.defines[P]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,M.setRenderTarget(y),M.render(d,u),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var l_=new ti,c_=new Is(1,1),h_=new ol(1),u_=new Ko,d_=new ph,f_=new al,V0=[],G0=[],H0=new Float32Array(16),W0=new Float32Array(9),X0=new Float32Array(4);function eo(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=V0[i];if(r===void 0&&(r=new Float32Array(i),V0[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function fn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function pn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Su(s,t){let e=G0[t];e===void 0&&(e=new Int32Array(t),G0[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function $b(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function qb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;s.uniform2fv(this.addr,t),pn(e,t)}}function Yb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fn(e,t))return;s.uniform3fv(this.addr,t),pn(e,t)}}function Zb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;s.uniform4fv(this.addr,t),pn(e,t)}}function Jb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,n))return;X0.set(n),s.uniformMatrix2fv(this.addr,!1,X0),pn(e,n)}}function Kb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,n))return;W0.set(n),s.uniformMatrix3fv(this.addr,!1,W0),pn(e,n)}}function Qb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,n))return;H0.set(n),s.uniformMatrix4fv(this.addr,!1,H0),pn(e,n)}}function jb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function t1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;s.uniform2iv(this.addr,t),pn(e,t)}}function e1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;s.uniform3iv(this.addr,t),pn(e,t)}}function n1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;s.uniform4iv(this.addr,t),pn(e,t)}}function i1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function s1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;s.uniform2uiv(this.addr,t),pn(e,t)}}function r1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;s.uniform3uiv(this.addr,t),pn(e,t)}}function a1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;s.uniform4uiv(this.addr,t),pn(e,t)}}function Mu(s){return s.version===0&&(s.compareFunction=zf,s.needsUpdate=!0),s}function o1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Mu(c_):r=l_,e.setTexture2D(t||r,i)}function l1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||d_,i)}function c1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Mu(h_):r=f_,e.setTextureCube(t||r,i)}function h1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||u_,i)}function u1(s){switch(s){case 5126:return $b;case 35664:return qb;case 35665:return Yb;case 35666:return Zb;case 35674:return Jb;case 35675:return Kb;case 35676:return Qb;case 5124:case 35670:return jb;case 35667:case 35671:return t1;case 35668:case 35672:return e1;case 35669:case 35673:return n1;case 5125:return i1;case 36294:return s1;case 36295:return r1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return l1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return h1}}function d1(s,t){s.uniform1fv(this.addr,t)}function f1(s,t){let e=eo(t,this.size,2);s.uniform2fv(this.addr,e)}function p1(s,t){let e=eo(t,this.size,3);s.uniform3fv(this.addr,e)}function m1(s,t){let e=eo(t,this.size,4);s.uniform4fv(this.addr,e)}function g1(s,t){let e=eo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function _1(s,t){let e=eo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function x1(s,t){let e=eo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function y1(s,t){s.uniform1iv(this.addr,t)}function v1(s,t){s.uniform2iv(this.addr,t)}function S1(s,t){s.uniform3iv(this.addr,t)}function M1(s,t){s.uniform4iv(this.addr,t)}function b1(s,t){s.uniform1uiv(this.addr,t)}function w1(s,t){s.uniform2uiv(this.addr,t)}function T1(s,t){s.uniform3uiv(this.addr,t)}function E1(s,t){s.uniform4uiv(this.addr,t)}function A1(s,t,e){let n=this.cache,i=t.length,r=Su(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Mu(c_):a=l_;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function C1(s,t,e){let n=this.cache,i=t.length,r=Su(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||d_,r[a])}function R1(s,t,e){let n=this.cache,i=t.length,r=Su(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Mu(h_):a=f_;for(let o=0;o!==i;++o)e.setTextureCube(t[o]||a,r[o])}function P1(s,t,e){let n=this.cache,i=t.length,r=Su(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||u_,r[a])}function I1(s){switch(s){case 5126:return d1;case 35664:return f1;case 35665:return p1;case 35666:return m1;case 35674:return g1;case 35675:return _1;case 35676:return x1;case 5124:case 35670:return y1;case 35667:case 35671:return v1;case 35668:case 35672:return S1;case 35669:case 35673:return M1;case 5125:return b1;case 36294:return w1;case 36295:return T1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return R1;case 36289:case 36303:case 36311:case 36292:return P1}}var ip=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=u1(e.type)}},sp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=I1(e.type)}},rp=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},ep=/(\w+)(\])?(\[|\.)?/g;function $0(s,t){s.seq.push(t),s.map[t.id]=t}function L1(s,t,e){let n=s.name,i=n.length;for(ep.lastIndex=0;;){let r=ep.exec(n),a=ep.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){$0(e,c===void 0?new ip(o,s,t):new sp(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new rp(o),$0(e,f)),e=f}}}var ja=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);L1(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function q0(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var D1=37297,N1=0;function O1(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Y0=new Yt;function U1(s){he._getMatrix(Y0,he.workingColorSpace,s);let t=`mat3( ${Y0.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(s)){case Zo:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Z0(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+O1(s.getShaderSource(t),o)}else return r}function F1(s,t){let e=U1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var B1={[Tf]:"Linear",[Ef]:"Reinhard",[Af]:"Cineon",[Sl]:"ACESFilmic",[Rf]:"AgX",[Pf]:"Neutral",[Cf]:"Custom"};function k1(s,t){let e=B1[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var yu=new $;function z1(){he.getLuminanceCoefficients(yu);let s=yu.x.toFixed(4),t=yu.y.toFixed(4),e=yu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Il).join(`
`)}function G1(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function H1(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Il(s){return s!==""}function J0(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function K0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var W1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(s){return s.replace(W1,X1)}function X1(s,t){let e=te[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ap(e)}var $1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q0(s){return s.replace($1,q1)}function q1(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function j0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Y1={[vl]:"SHADOWMAP_TYPE_PCF",[Za]:"SHADOWMAP_TYPE_VSM"};function Z1(s){return Y1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var J1={[Ja]:"ENVMAP_MODE_REFRACTION"};function K1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":J1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Q1={[Ih]:"ENVMAP_BLENDING_MULTIPLY",[m0]:"ENVMAP_BLENDING_MIX",[g0]:"ENVMAP_BLENDING_ADD"};function j1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Q1[s.combine]||"ENVMAP_BLENDING_NONE"}function tw(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Z1(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=K1(e),f=j1(e),d=V1(e),u=G1(r),p=i.createProgram(),g,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Il).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Il).join(`
`),m.length>0&&(m+=`
`)):(g=[j0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Il).join(`
`),m=[j0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ls?"#define TONE_MAPPING":"",e.toneMapping!==ls?te.tonemapping_pars_fragment:"",e.toneMapping!==ls?k1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,F1("linearToOutputTexel",e.outputColorSpace),z1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Il).join(`
`)),a=ap(a),a=J0(a,e),a=K0(a,e),o=ap(o),o=J0(o,e),o=K0(o,e),a=Q0(a),o=Q0(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Vf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=_+g+a,T=_+m+o,v=q0(i,i.VERTEX_SHADER,y),M=q0(i,i.FRAGMENT_SHADER,T);i.attachShader(p,v),i.attachShader(p,M),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function w(A){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(p)||"",I=i.getShaderInfoLog(v)||"",V=i.getShaderInfoLog(M)||"",L=D.trim(),G=I.trim(),O=V.trim(),N=!0,F=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(N=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,v,M);else{let B=Z0(i,v,"vertex"),R=Z0(i,M,"fragment");qt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+B+`
`+R)}else L!==""?Gt("WebGLProgram: Program Info Log:",L):(G===""||O==="")&&(F=!1);F&&(A.diagnostics={runnable:N,programLog:L,vertexShader:{log:G,prefix:g},fragmentShader:{log:O,prefix:m}})}i.deleteShader(v),i.deleteShader(M),x=new ja(i,p),S=H1(i,p)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(p,D1)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=N1++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=M,this}var ew=0,op=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new lp(t),e.set(t,n)),n}},lp=class{constructor(t){this.id=ew++,this.code=t,this.usedTimes=0}};function nw(s){return s===fr||s===Al||s===Cl}function iw(s,t,e,n,i,r){let a=new Qo,o=new op,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,S,P,A,D,I){let V=A.fog,L=D.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,N=t.get(x.envMap||G,O),F=d[x.type],B=n.precision;x.precision!==null&&(B=n.getMaxPrecision(x.precision),B!==x.precision&&Gt("WebGLProgram.getParameters:",x.precision,"not supported, using",B,"instead."));let R=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,J=R!==void 0?R.length:0,pt=0;L.morphAttributes.position!==void 0&&(pt=1),L.morphAttributes.normal!==void 0&&(pt=2),L.morphAttributes.color!==void 0&&(pt=3);let Pt,Z,lt,gt;if(F){let st=hs[F];Pt=st.vertexShader,Z=st.fragmentShader}else{Pt=x.vertexShader,Z=x.fragmentShader;let st=o.getVertexShaderStage(x),Ct=o.getFragmentShaderStage(x);o.update(x,st,Ct),lt=st.id,gt=Ct.id}let at=s.getRenderTarget(),dt=s.state.buffers.depth.getReversed(),Lt=D.isInstancedMesh===!0,me=D.isBatchedMesh===!0,Et=!!x.map,Xt=!!x.matcap,Nt=!!N,Bt=Nt&&N.isPMREMTexture===!0,fe=!!x.aoMap,ue=!!x.lightMap,q=!!x.bumpMap&&x.wireframe===!1,Qt=!!x.normalMap,Xe=!!x.displacementMap,ee=!!x.emissiveMap,ne=!!x.metalnessMap,Le=!!x.roughnessMap,Ae=x.anisotropy>0,z=x.clearcoat>0,pe=x.diffuseRoughness>0,oe=x.dispersion>0,Ht=x.retroreflectivity>0,Q=x.iridescence>0,Tt=x.sheen>0,St=x.transmission>0,It=Ae&&!!x.anisotropyMap,C=z&&!!x.clearcoatMap,b=z&&!!x.clearcoatNormalMap,H=z&&!!x.clearcoatRoughnessMap,ot=pe&&!!x.diffuseRoughnessMap,nt=Q&&!!x.iridescenceMap,ft=Q&&!!x.iridescenceThicknessMap,mt=Tt&&!!x.sheenColorMap,X=Tt&&!!x.sheenRoughnessMap,et=!!x.specularMap,ct=!!x.specularColorMap,U=!!x.specularIntensityMap,tt=St&&!!x.transmissionMap,j=St&&!!x.thicknessMap,_t=!!x.gradientMap,ut=!!x.alphaMap,xt=x.alphaTest>0,ht=!!x.alphaHash,yt=!!x.extensions,rt=ls;x.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(rt=s.toneMapping);let it=Bt?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,Mt={shaderID:F,shaderType:x.type,shaderName:x.name,vertexShader:Pt,fragmentShader:Z,defines:x.defines,customVertexShaderID:lt,customFragmentShaderID:gt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:B,batching:me,batchingColor:me&&D._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&D.instanceColor!==null,instancingMorph:Lt&&D.morphTexture!==null,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Et,matcap:Xt,envMap:Nt,envMapMode:Nt&&N.mapping,envMapPMREM:Bt,envMapMaxLod:Bt?it.length-1:null,envMapSize:Bt?it[0].width:null,aoMap:fe,lightMap:ue,bumpMap:q,normalMap:Qt,displacementMap:Xe,emissiveMap:ee,normalMapObjectSpace:Qt&&x.normalMapType===y0,normalMapTangentSpace:Qt&&x.normalMapType===Rl,packedNormalMap:Qt&&x.normalMapType===Rl&&nw(x.normalMap.format),metalnessMap:ne,roughnessMap:Le,anisotropy:Ae,anisotropyMap:It,clearcoat:z,clearcoatMap:C,clearcoatNormalMap:b,clearcoatRoughnessMap:H,diffuseRoughness:pe,diffuseRoughnessMap:ot,dispersion:oe,retroreflection:Ht,iridescence:Q,iridescenceMap:nt,iridescenceThicknessMap:ft,sheen:Tt,sheenColorMap:mt,sheenRoughnessMap:X,specularMap:et,specularColorMap:ct,specularIntensityMap:U,transmission:St,transmissionMap:tt,thicknessMap:j,gradientMap:_t,opaque:x.transparent===!1&&x.blending===ur&&x.alphaToCoverage===!1,alphaMap:ut,alphaTest:xt,alphaHash:ht,combine:x.combine,mapUv:Et&&u(x.map.channel),aoMapUv:fe&&u(x.aoMap.channel),lightMapUv:ue&&u(x.lightMap.channel),bumpMapUv:q&&u(x.bumpMap.channel),normalMapUv:Qt&&u(x.normalMap.channel),displacementMapUv:Xe&&u(x.displacementMap.channel),emissiveMapUv:ee&&u(x.emissiveMap.channel),metalnessMapUv:ne&&u(x.metalnessMap.channel),roughnessMapUv:Le&&u(x.roughnessMap.channel),anisotropyMapUv:It&&u(x.anisotropyMap.channel),clearcoatMapUv:C&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:X&&u(x.sheenRoughnessMap.channel),specularMapUv:et&&u(x.specularMap.channel),specularColorMapUv:ct&&u(x.specularColorMap.channel),specularIntensityMapUv:U&&u(x.specularIntensityMap.channel),transmissionMapUv:tt&&u(x.transmissionMap.channel),thicknessMapUv:j&&u(x.thicknessMap.channel),alphaMapUv:ut&&u(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Qt||Ae),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(Et||ut),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&Qt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:dt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:pt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:I.filter(st=>st.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:Et&&x.map.isVideoTexture===!0&&he.getTransfer(x.map.colorSpace)===be,decodeVideoTextureEmissive:ee&&x.emissiveMap.isVideoTexture===!0&&he.getTransfer(x.emissiveMap.colorSpace)===be,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gn,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:yt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&x.extensions.multiDraw===!0||me)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function g(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(S,x),_(S,x),S.push(s.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function m(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function _(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){let S=d[x.type],P;if(S){let A=hs[S];P=N0.clone(A.uniforms)}else P=x.uniforms;return P}function T(x,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new tw(s,S,x,i),c.push(P),h.set(S,P)),P}function v(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function M(x){o.remove(x)}function w(){o.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:y,acquireProgram:T,releaseProgram:v,releaseShaderCache:M,programs:c,dispose:w}}function sw(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function rw(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function t_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function e_(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,p,g,m,_){let y=s[t];return y===void 0?(y={id:d.id,object:d,geometry:u,material:p,materialVariant:a(d),groupOrder:g,renderOrder:d.renderOrder,z:m,group:_},s[t]=y):(y.id=d.id,y.object=d,y.geometry=u,y.material=p,y.materialVariant=a(d),y.groupOrder=g,y.renderOrder=d.renderOrder,y.z=m,y.group=_),t++,y}function l(d,u,p,g,m,_,y){y.reversedDepth===!0&&(m=-m);let T=o(d,u,p,g,m,_);p.transmission>0?n.push(T):p.transparent===!0?i.push(T):e.push(T)}function c(d,u,p,g,m,_){let y=o(d,u,p,g,m,_);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):e.unshift(y)}function h(d,u){e.length>1&&e.sort(d||rw),n.length>1&&n.sort(u||t_),i.length>1&&i.sort(u||t_)}function f(){for(let d=t,u=s.length;d<u;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function aw(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new e_,s.set(n,[a])):i>=r.length?(a=new e_,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function ow(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new Kt};break;case"SpotLight":e={position:new $,direction:new $,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[t.id]=e,e}}}function lw(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var cw=0;function hw(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function uw(s){let t=new ow,e=lw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);let i=new $,r=new Ee,a=new Ee;function o(c){let h=0,f=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let u=0,p=0,g=0,m=0,_=0,y=0,T=0,v=0,M=0,w=0,x=0,S=0,P=0,A=0;c.sort(hw);for(let I=0,V=c.length;I<V;I++){let L=c[I],G=L.color,O=L.intensity,N=L.distance,F=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===fr?F=L.shadow.map.texture:F=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=G.r*O,f+=G.g*O,d+=G.b*O;else if(L.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(L.sh.coefficients[B],O);A++}else if(L.isSunLight){let B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,J=e.get(L);J.shadowIntensity=R.intensity,J.shadowBias=R.bias,J.shadowNormalBias=R.normalBias,J.shadowRadius=R.radius,J.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[p]=J,n.sunShadowMap[p]=F;let pt=R.getViewportCount();for(let Pt=0;Pt<pt;Pt++)n.sunShadowMatrix[g+Pt]=R.getMatrix(Pt),n.sunShadowCascade[g+Pt]=R._cascadeData[Pt];g+=pt,p++}n.sun[u]=B,u++}else if(L.isDirectionalLight){let B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,J=e.get(L);J.shadowIntensity=R.intensity,J.shadowBias=R.bias,J.shadowNormalBias=R.normalBias,J.shadowRadius=R.radius,J.shadowMapSize=R.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=F,n.directionalShadowMatrix[m]=L.shadow.matrix,M++}n.directional[m]=B,m++}else if(L.isSpotLight){let B=t.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(G).multiplyScalar(O),B.distance=N,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,n.spot[y]=B;let R=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,R.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[y]=R.matrix,L.castShadow){let J=e.get(L);J.shadowIntensity=R.intensity,J.shadowBias=R.bias,J.shadowNormalBias=R.normalBias,J.shadowRadius=R.radius,J.shadowMapSize=R.mapSize,n.spotShadow[y]=J,n.spotShadowMap[y]=F,x++}y++}else if(L.isRectAreaLight){let B=t.get(L);B.color.copy(G).multiplyScalar(O),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),n.rectArea[T]=B,T++}else if(L.isPointLight){let B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){let R=L.shadow,J=e.get(L);J.shadowIntensity=R.intensity,J.shadowBias=R.bias,J.shadowNormalBias=R.normalBias,J.shadowRadius=R.radius,J.shadowMapSize=R.mapSize,J.shadowCameraNear=R.camera.near,J.shadowCameraFar=R.camera.far,n.pointShadow[_]=J,n.pointShadowMap[_]=F,n.pointShadowMatrix[_]=L.shadow.matrix,w++}n.point[_]=B,_++}else if(L.isHemisphereLight){let B=t.get(L);B.skyColor.copy(L.color).multiplyScalar(O),B.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[v]=B,v++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let D=n.hash;(D.sunLength!==u||D.directionalLength!==m||D.pointLength!==_||D.spotLength!==y||D.rectAreaLength!==T||D.hemiLength!==v||D.numSunShadows!==p||D.numDirectionalShadows!==M||D.numPointShadows!==w||D.numSpotShadows!==x||D.numSpotMaps!==S||D.numLightProbes!==A)&&(n.sun.length=u,n.directional.length=m,n.spot.length=y,n.rectArea.length=T,n.point.length=_,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-P,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,D.sunLength=u,D.directionalLength=m,D.pointLength=_,D.spotLength=y,D.rectAreaLength=T,D.hemiLength=v,D.numSunShadows=p,D.numDirectionalShadows=M,D.numPointShadows=w,D.numSpotShadows=x,D.numSpotMaps=S,D.numLightProbes=A,n.version=cw++)}function l(c,h){let f=0,d=0,u=0,p=0,g=0,m=0,_=h.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){let v=c[y];if(v.isSunLight){let M=n.sun[f];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(_),f++}else if(v.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(_),d++}else if(v.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(_),p++}else if(v.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),a.identity(),r.copy(v.matrixWorld),r.premultiply(_),a.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let M=n.point[u];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),u++}else if(v.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(_),m++}}}return{setup:o,setupView:l,state:n}}function n_(s){let t=new uw(s),e=[],n=[],i=[];function r(f){h.camera=f,e.length=0,n.length=0,i.length=0}function a(f){f.isLightProbeGrid?i.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),i.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function dw(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new n_(s),t.set(i,[o])):r>=a.length?(o=new n_(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var fw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mw=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],gw=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],i_=new Ee,Pl=new $,np=new $;function _w(s,t,e){let n=new rr,i=new Wt,r=new Wt,a=new ze,o=new _h,l=new xh,c={},h=e.maxTextureSize,f={[hr]:dn,[dn]:hr,[Gn]:Gn},d=new os({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:fw,fragmentShader:pw}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let p=new Sn;p.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ye(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vl;let _=this.type;this.render=function(w,x,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Jg&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vl);let P=s.getRenderTarget(),A=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),I=s.state;I.setBlending(qr),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let V=_!==this.type;V&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=w.length;L<G;L++){let O=w[L],N=O.shadow;if(N===void 0){Gt("WebGLShadowMap:",O,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);let F=N.getFrameExtents();i.multiply(F),r.copy(N.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/F.x),i.x=r.x*F.x,N.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/F.y),i.y=r.y*F.y,N.mapSize.y=r.y));let B=s.state.buffers.depth.getReversed();if(N.camera._reversedDepth=B,N.map===null||V===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Za){if(O.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new wi(i.x,i.y,{format:fr,type:$i,minFilter:jn,magFilter:jn,generateMipmaps:!1}),N.map.texture.name=O.name+".shadowMap",N.map.depthTexture=new Is(i.x,i.y,Ui),N.map.depthTexture.name=O.name+".shadowMapDepth",N.map.depthTexture.format=Cs,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=yn,N.map.depthTexture.magFilter=yn}else O.isPointLight?(N.map=new Ll(i.x),N.map.depthTexture=new ol(i.x,Xi)):(N.map=new wi(i.x,i.y),N.map.depthTexture=new Is(i.x,i.y,Xi)),N.map.depthTexture.name=O.name+".shadowMap",N.map.depthTexture.format=Cs,this.type===vl?(N.map.depthTexture.compareFunction=B?kf:Bf,N.map.depthTexture.minFilter=jn,N.map.depthTexture.magFilter=jn):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=yn,N.map.depthTexture.magFilter=yn);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==i.x||N.map.height!==i.y)&&N.map.setSize(i.x,i.y);let R=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();O.isPointLight!==!0&&N.updateMatrices(O,S);let J=(N.camera.layers.mask&4294967294)!==0?N.camera.layers:S.layers;for(let pt=0;pt<R;pt++){let Pt=N.getCamera(pt);if(O.isPointLight){let Z=N.camera,lt=N.matrix,gt=O.distance||Z.far;gt!==Z.far&&(Z.far=gt,Z.updateProjectionMatrix()),Pl.setFromMatrixPosition(O.matrixWorld),Z.position.copy(Pl),np.copy(Z.position),np.add(mw[pt]),Z.up.copy(gw[pt]),Z.lookAt(np),Z.updateMatrixWorld(),lt.makeTranslation(-Pl.x,-Pl.y,-Pl.z),i_.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),N._frustum.setFromProjectionMatrix(i_,Z.coordinateSystem,Z.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)s.setRenderTarget(N.map,pt),s.clear();else{pt===0&&(s.setRenderTarget(N.map),s.clear());let Z=N.getViewport(pt);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),I.viewport(a)}n=N.getFrustum(pt),v(x,S,Pt,O,J,this.type)}N.isPointLightShadow!==!0&&this.type===Za&&y(N,S),N.needsUpdate=!1}_=this.type,m.needsUpdate=!1,s.setRenderTarget(P,A,D)};function y(w,x){let S=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null?w.mapPass=new wi(i.x,i.y,{format:fr,type:$i}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(x,null,S,d,g,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(x,null,S,u,g,null)}function T(w,x,S,P){let A=null,D=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)A=D;else if(A=S.isPointLight===!0?l:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let I=A.uuid,V=x.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let G=L[V];G===void 0&&(G=A.clone(),L[V]=G,x.addEventListener("dispose",M)),A=G}if(A.visible=x.visible,A.wireframe=x.wireframe,P===Za?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:f[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let I=s.properties.get(A);I.light=S}return A}function v(w,x,S,P,A,D){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===Za)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let L=t.update(w),G=w.material;if(Array.isArray(G)){let O=L.groups;for(let N=0,F=O.length;N<F;N++){let B=O[N],R=G[B.materialIndex];if(R&&R.visible){let J=T(w,R,P,D);w.onBeforeShadow(s,w,x,S,L,J,B),s.renderBufferDirect(S,null,L,J,w,B),w.onAfterShadow(s,w,x,S,L,J,B)}}}else if(G.visible){let O=T(w,G,P,D);w.onBeforeShadow(s,w,x,S,L,O,null),s.renderBufferDirect(S,null,L,O,w,null),w.onAfterShadow(s,w,x,S,L,O,null)}}let V=w.children;for(let L=0,G=V.length;L<G;L++)v(V[L],x,S,P,A,D)}function M(w){w.target.removeEventListener("dispose",M);for(let S in c){let P=c[S],A=w.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function xw(s,t){function e(){let U=!1,tt=new ze,j=null,_t=new ze(0,0,0,0);return{setMask:function(ut){j!==ut&&!U&&(s.colorMask(ut,ut,ut,ut),j=ut)},setLocked:function(ut){U=ut},setClear:function(ut,xt,ht,yt,rt){rt===!0&&(ut*=yt,xt*=yt,ht*=yt),tt.set(ut,xt,ht,yt),_t.equals(tt)===!1&&(s.clearColor(ut,xt,ht,yt),_t.copy(tt))},reset:function(){U=!1,j=null,_t.set(-1,0,0,0)}}}function n(){let U=!1,tt=!1,j=null,_t=null,ut=null;return{setReversed:function(xt){if(tt!==xt){let ht=t.get("EXT_clip_control");xt?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT),tt=xt;let yt=ut;ut=null,this.setClear(yt)}},getReversed:function(){return tt},setTest:function(xt){xt?dt(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(xt){j!==xt&&!U&&(s.depthMask(xt),j=xt)},setFunc:function(xt){if(tt&&(xt=P0[xt]),_t!==xt){switch(xt){case nh:s.depthFunc(s.NEVER);break;case ih:s.depthFunc(s.ALWAYS);break;case sh:s.depthFunc(s.LESS);break;case Ba:s.depthFunc(s.LEQUAL);break;case rh:s.depthFunc(s.EQUAL);break;case ah:s.depthFunc(s.GEQUAL);break;case oh:s.depthFunc(s.GREATER);break;case lh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=xt}},setLocked:function(xt){U=xt},setClear:function(xt){ut!==xt&&(ut=xt,tt&&(xt=1-xt),s.clearDepth(xt))},reset:function(){U=!1,j=null,_t=null,ut=null,tt=!1}}}function i(){let U=!1,tt=null,j=null,_t=null,ut=null,xt=null,ht=null,yt=null,rt=null;return{setTest:function(it){U||(it?dt(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(it){tt!==it&&!U&&(s.stencilMask(it),tt=it)},setFunc:function(it,Mt,st){(j!==it||_t!==Mt||ut!==st)&&(s.stencilFunc(it,Mt,st),j=it,_t=Mt,ut=st)},setOp:function(it,Mt,st){(xt!==it||ht!==Mt||yt!==st)&&(s.stencilOp(it,Mt,st),xt=it,ht=Mt,yt=st)},setLocked:function(it){U=it},setClear:function(it){rt!==it&&(s.clearStencil(it),rt=it)},reset:function(){U=!1,tt=null,j=null,_t=null,ut=null,xt=null,ht=null,yt=null,rt=null}}}let r=new e,a=new n,o=new i,l={},c=new WeakMap,h={},f={},d={},u=new WeakMap,p=[],g=null,m=!1,_=null,y=null,T=null,v=null,M=null,w=null,x=null,S=new Kt(0,0,0),P=0,A=!1,D=null,I=null,V=null,L=null,G=null,O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,F=0,B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=F>=1):B.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=F>=2);let R=null,J={},pt=s.getParameter(s.SCISSOR_BOX),Pt=s.getParameter(s.VIEWPORT),Z=new ze().fromArray(pt),lt=new ze().fromArray(Pt);function gt(U,tt,j,_t){let ut=new Uint8Array(4),xt=s.createTexture();s.bindTexture(U,xt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ht=0;ht<j;ht++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(tt,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(tt+ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return xt}let at={};at[s.TEXTURE_2D]=gt(s.TEXTURE_2D,s.TEXTURE_2D,1),at[s.TEXTURE_CUBE_MAP]=gt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[s.TEXTURE_2D_ARRAY]=gt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),at[s.TEXTURE_3D]=gt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(s.DEPTH_TEST),a.setFunc(Ba),q(!1),Qt(vf),dt(s.CULL_FACE),fe(qr);function dt(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Lt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function me(U,tt){return d[U]!==tt?(s.bindFramebuffer(U,tt),d[U]=tt,U===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=tt),U===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=tt),!0):!1}function Et(U,tt){let j=p,_t=!1;if(U){j=u.get(tt),j===void 0&&(j=[],u.set(tt,j));let ut=U.textures;if(j.length!==ut.length||j[0]!==s.COLOR_ATTACHMENT0){for(let xt=0,ht=ut.length;xt<ht;xt++)j[xt]=s.COLOR_ATTACHMENT0+xt;j.length=ut.length,_t=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,_t=!0);_t&&s.drawBuffers(j)}function Xt(U){return g!==U?(s.useProgram(U),g=U,!0):!1}let Nt={[Yr]:s.FUNC_ADD,[Qg]:s.FUNC_SUBTRACT,[jg]:s.FUNC_REVERSE_SUBTRACT};Nt[t0]=s.MIN,Nt[e0]=s.MAX;let Bt={[n0]:s.ZERO,[i0]:s.ONE,[s0]:s.SRC_COLOR,[bf]:s.SRC_ALPHA,[h0]:s.SRC_ALPHA_SATURATE,[l0]:s.DST_COLOR,[a0]:s.DST_ALPHA,[r0]:s.ONE_MINUS_SRC_COLOR,[wf]:s.ONE_MINUS_SRC_ALPHA,[c0]:s.ONE_MINUS_DST_COLOR,[o0]:s.ONE_MINUS_DST_ALPHA,[u0]:s.CONSTANT_COLOR,[d0]:s.ONE_MINUS_CONSTANT_COLOR,[f0]:s.CONSTANT_ALPHA,[p0]:s.ONE_MINUS_CONSTANT_ALPHA};function fe(U,tt,j,_t,ut,xt,ht,yt,rt,it){if(U===qr){m===!0&&(Lt(s.BLEND),m=!1);return}if(m===!1&&(dt(s.BLEND),m=!0),U!==Kg){if(U!==_||it!==A){if((y!==Yr||M!==Yr)&&(s.blendEquation(s.FUNC_ADD),y=Yr,M=Yr),it)switch(U){case ur:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dr:s.blendFunc(s.ONE,s.ONE);break;case Sf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mf:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:qt("WebGLState: Invalid blending: ",U);break}else switch(U){case ur:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Sf:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mf:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",U);break}T=null,v=null,w=null,x=null,S.set(0,0,0),P=0,_=U,A=it}return}ut=ut||tt,xt=xt||j,ht=ht||_t,(tt!==y||ut!==M)&&(s.blendEquationSeparate(Nt[tt],Nt[ut]),y=tt,M=ut),(j!==T||_t!==v||xt!==w||ht!==x)&&(s.blendFuncSeparate(Bt[j],Bt[_t],Bt[xt],Bt[ht]),T=j,v=_t,w=xt,x=ht),(yt.equals(S)===!1||rt!==P)&&(s.blendColor(yt.r,yt.g,yt.b,rt),S.copy(yt),P=rt),_=U,A=!1}function ue(U,tt){U.side===Gn?Lt(s.CULL_FACE):dt(s.CULL_FACE);let j=U.side===dn;tt&&(j=!j),q(j),U.blending===ur&&U.transparent===!1?fe(qr):fe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let _t=U.stencilWrite;o.setTest(_t),_t&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ee(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function q(U){D!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),D=U)}function Qt(U){U!==Yg?(dt(s.CULL_FACE),U!==I&&(U===vf?s.cullFace(s.BACK):U===Zg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),I=U}function Xe(U){U!==V&&(N&&s.lineWidth(U),V=U)}function ee(U,tt,j){U?(dt(s.POLYGON_OFFSET_FILL),(L!==tt||G!==j)&&(L=tt,G=j,a.getReversed()&&(tt=-tt,j=-j),s.polygonOffset(tt,j))):Lt(s.POLYGON_OFFSET_FILL)}function ne(U){U?dt(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function Le(U){U===void 0&&(U=s.TEXTURE0+O-1),R!==U&&(s.activeTexture(U),R=U)}function Ae(U,tt,j){j===void 0&&(R===null?j=s.TEXTURE0+O-1:j=R);let _t=J[j];_t===void 0&&(_t={type:void 0,texture:void 0},J[j]=_t),(_t.type!==U||_t.texture!==tt)&&(R!==j&&(s.activeTexture(j),R=j),s.bindTexture(U,tt||at[U]),_t.type=U,_t.texture=tt)}function z(){let U=J[R];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function pe(){try{s.compressedTexImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function oe(){try{s.compressedTexImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function Ht(){try{s.texSubImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function Q(){try{s.texSubImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function Tt(){try{s.compressedTexSubImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function St(){try{s.compressedTexSubImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function It(){try{s.texStorage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function C(){try{s.texStorage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function b(){try{s.texImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function H(){try{s.texImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function ot(U){return f[U]!==void 0?f[U]:s.getParameter(U)}function nt(U,tt){f[U]!==tt&&(s.pixelStorei(U,tt),f[U]=tt)}function ft(U){Z.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Z.copy(U))}function mt(U){lt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),lt.copy(U))}function X(U,tt){let j=c.get(tt);j===void 0&&(j=new WeakMap,c.set(tt,j));let _t=j.get(U);_t===void 0&&(_t=s.getUniformBlockIndex(tt,U.name),s.uniformBlockBinding(tt,_t,_t),j.set(U,_t))}function et(U,tt,j){let ut=c.get(tt).get(U);l[ut]!==j&&(s.bindBufferBase(s.UNIFORM_BUFFER,ut,j),l[ut]=j)}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},R=null,J={},d={},l={},u=new WeakMap,p=[],g=null,m=!1,_=null,y=null,T=null,v=null,M=null,w=null,x=null,S=new Kt(0,0,0),P=0,A=!1,D=null,I=null,V=null,L=null,G=null,Z.set(0,0,s.canvas.width,s.canvas.height),lt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:Lt,bindFramebuffer:me,drawBuffers:Et,useProgram:Xt,setBlending:fe,setMaterial:ue,setFlipSided:q,setCullFace:Qt,setLineWidth:Xe,setPolygonOffset:ee,setScissorTest:ne,activeTexture:Le,bindTexture:Ae,unbindTexture:z,compressedTexImage2D:pe,compressedTexImage3D:oe,texImage2D:b,texImage3D:H,pixelStorei:nt,getParameter:ot,updateUBOMapping:X,uniformBlockBinding:et,texStorage2D:It,texStorage3D:C,texSubImage2D:Ht,texSubImage3D:Q,compressedTexSubImage2D:Tt,compressedTexSubImage3D:St,scissor:ft,viewport:mt,reset:ct}}function yw(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,h=new WeakMap,f=new Set,d,u=new WeakMap,p=new Set,g=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,b){return m?new OffscreenCanvas(C,b):Jo("canvas")}function y(C,b,H){let ot=1,nt=It(C);if((nt.width>H||nt.height>H)&&(ot=H/Math.max(nt.width,nt.height)),ot<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ft=Math.floor(ot*nt.width),mt=Math.floor(ot*nt.height);d===void 0&&(d=_(ft,mt));let X=b?_(ft,mt):d;return X.width=ft,X.height=mt,X.getContext("2d").drawImage(C,0,0,ft,mt),Gt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+ft+"x"+mt+")."),X}else return"data"in C&&Gt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function T(C){return C.generateMipmaps}function v(C){s.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(C,b,H,ot,nt,ft=!1){if(C!==null){if(s[C]!==void 0)return s[C];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let mt;ot&&(mt=t.get("EXT_texture_norm16"),mt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=b;if(b===s.RED&&(H===s.FLOAT&&(X=s.R32F),H===s.HALF_FLOAT&&(X=s.R16F),H===s.UNSIGNED_BYTE&&(X=s.R8),H===s.UNSIGNED_SHORT&&mt&&(X=mt.R16_EXT),H===s.SHORT&&mt&&(X=mt.R16_SNORM_EXT)),b===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(X=s.R8UI),H===s.UNSIGNED_SHORT&&(X=s.R16UI),H===s.UNSIGNED_INT&&(X=s.R32UI),H===s.BYTE&&(X=s.R8I),H===s.SHORT&&(X=s.R16I),H===s.INT&&(X=s.R32I)),b===s.RG&&(H===s.FLOAT&&(X=s.RG32F),H===s.HALF_FLOAT&&(X=s.RG16F),H===s.UNSIGNED_BYTE&&(X=s.RG8),H===s.UNSIGNED_SHORT&&mt&&(X=mt.RG16_EXT),H===s.SHORT&&mt&&(X=mt.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(X=s.RG8UI),H===s.UNSIGNED_SHORT&&(X=s.RG16UI),H===s.UNSIGNED_INT&&(X=s.RG32UI),H===s.BYTE&&(X=s.RG8I),H===s.SHORT&&(X=s.RG16I),H===s.INT&&(X=s.RG32I)),b===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(X=s.RGB8UI),H===s.UNSIGNED_SHORT&&(X=s.RGB16UI),H===s.UNSIGNED_INT&&(X=s.RGB32UI),H===s.BYTE&&(X=s.RGB8I),H===s.SHORT&&(X=s.RGB16I),H===s.INT&&(X=s.RGB32I)),b===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),H===s.UNSIGNED_INT&&(X=s.RGBA32UI),H===s.BYTE&&(X=s.RGBA8I),H===s.SHORT&&(X=s.RGBA16I),H===s.INT&&(X=s.RGBA32I)),b===s.RGB&&(H===s.UNSIGNED_SHORT&&mt&&(X=mt.RGB16_EXT),H===s.SHORT&&mt&&(X=mt.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),b===s.RGBA){let et=ft?Zo:he.getTransfer(nt);H===s.FLOAT&&(X=s.RGBA32F),H===s.HALF_FLOAT&&(X=s.RGBA16F),H===s.UNSIGNED_BYTE&&(X=et===be?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&mt&&(X=mt.RGBA16_EXT),H===s.SHORT&&mt&&(X=mt.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function x(C,b){let H;return C?b===null||b===Xi||b===Jr?H=s.DEPTH24_STENCIL8:b===Ui?H=s.DEPTH32F_STENCIL8:b===Ka&&(H=s.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xi||b===Jr?H=s.DEPTH_COMPONENT24:b===Ui?H=s.DEPTH_COMPONENT32F:b===Ka&&(H=s.DEPTH_COMPONENT16),H}function S(C,b){return T(C)===!0||C.isFramebufferTexture&&C.minFilter!==yn&&C.minFilter!==jn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function P(C){let b=new WeakRef(C);n.get(C).__ref=b,p.add(b),g.register(C,b,b)}function A(C){let b=n.get(C).__ref;b!==void 0&&(p.delete(b),g.unregister(b))}function D(C){V(C.target)}function I(C){L(C.target)}function V(C){C.removeEventListener("dispose",D),A(C),O(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&f.delete(C)}function L(C){C.removeEventListener("dispose",I),A(C),F(C)}function G(){for(let C of p){let b=C.deref();b!==void 0&&(b.isRenderTarget===!0?L(b):V(b))}p.clear(),f.clear()}function O(C){let b=n.get(C);if(b.__webglInit===void 0)return;let H=C.source,ot=u.get(H);if(ot){let nt=ot[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&N(C),Object.keys(ot).length===0&&u.delete(H)}n.remove(C)}function N(C){let b=n.get(C);s.deleteTexture(b.__webglTexture);let H=C.source,ot=u.get(H);delete ot[b.__cacheKey],a.memory.textures--}function F(C){let b=n.get(C);b.__depthDisposeCallback&&b.__depthDisposeCallback();let H=C.depthTexture;if(H&&H.renderTarget===C&&V(H),C.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(b.__webglFramebuffer[nt]))for(let ft=0;ft<b.__webglFramebuffer[nt].length;ft++)s.deleteFramebuffer(b.__webglFramebuffer[nt][ft]);else s.deleteFramebuffer(b.__webglFramebuffer[nt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[nt])}else{if(Array.isArray(b.__webglFramebuffer))for(let nt=0;nt<b.__webglFramebuffer.length;nt++)s.deleteFramebuffer(b.__webglFramebuffer[nt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let nt=0;nt<b.__webglColorRenderbuffer.length;nt++)b.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[nt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let ot=C.textures;for(let nt=0,ft=ot.length;nt<ft;nt++){let mt=n.get(ot[nt]);mt.__webglTexture&&(s.deleteTexture(mt.__webglTexture),a.memory.textures--),n.remove(ot[nt])}n.remove(C)}let B=0;function R(){B=0}function J(){return B}function pt(C){B=C}function Pt(){let C=B;return C>=i.maxTextures&&Gt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),B+=1,C}function Z(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.mipmapsAutoUpdate),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function lt(C,b){let H=n.get(C);if(C.isVideoTexture&&Tt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let ot=C.image;if(ot===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(H,C,b);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+b)}function gt(C,b){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){ue(H,C,b);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+b)}function at(C,b){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){ue(H,C,b);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+b)}function dt(C,b){let H=n.get(C);if(C.version>0&&H.__version!==C.version){q(H,C,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+b)}let Lt={[ch]:s.REPEAT,[es]:s.CLAMP_TO_EDGE,[hh]:s.MIRRORED_REPEAT},me={[yn]:s.NEAREST,[_0]:s.NEAREST_MIPMAP_NEAREST,[Ml]:s.NEAREST_MIPMAP_LINEAR,[jn]:s.LINEAR,[Nh]:s.LINEAR_MIPMAP_NEAREST,[Ls]:s.LINEAR_MIPMAP_LINEAR},Et={[S0]:s.NEVER,[zf]:s.ALWAYS,[M0]:s.LESS,[Bf]:s.LEQUAL,[b0]:s.EQUAL,[kf]:s.GEQUAL,[w0]:s.GREATER,[T0]:s.NOTEQUAL};function Xt(C,b){if(b.type===Ui&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===jn||b.magFilter===Nh||b.magFilter===Ml||b.magFilter===Ls||b.minFilter===jn||b.minFilter===Nh||b.minFilter===Ml||b.minFilter===Ls)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Lt[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Lt[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Lt[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,me[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,me[b.minFilter]),b.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Et[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===yn||b.minFilter!==Ml&&b.minFilter!==Ls||b.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Nt(C,b){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",D),P(b));let ot=b.source,nt=u.get(ot);nt===void 0&&(nt={},u.set(ot,nt));let ft=Z(b);if(ft!==C.__cacheKey){nt[ft]===void 0&&(nt[ft]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),nt[ft].usedTimes++;let mt=nt[C.__cacheKey];mt!==void 0&&(nt[C.__cacheKey].usedTimes--,mt.usedTimes===0&&N(b)),C.__cacheKey=ft,C.__webglTexture=nt[ft].texture}return H}function Bt(C,b,H){return Math.floor(Math.floor(C/H)/b)}function fe(C,b,H,ot){let ft=C.updateRanges;if(ft.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,H,ot,b.data);else{ft.sort((U,tt)=>U.start-tt.start);let mt=0;for(let U=1;U<ft.length;U++){let tt=ft[mt],j=ft[U],_t=tt.start+tt.count,ut=Bt(j.start,b.width,4),xt=Bt(tt.start,b.width,4);j.start<=_t+1&&ut===xt&&Bt(j.start+j.count-1,b.width,4)===ut?tt.count=Math.max(tt.count,j.start+j.count-tt.start):(++mt,ft[mt]=j)}ft.length=mt+1;let X=e.getParameter(s.UNPACK_ROW_LENGTH),et=e.getParameter(s.UNPACK_SKIP_PIXELS),ct=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let U=0,tt=ft.length;U<tt;U++){let j=ft[U],_t=Math.floor(j.start/4),ut=Math.ceil(j.count/4),xt=_t%b.width,ht=Math.floor(_t/b.width),yt=ut,rt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ht),e.texSubImage2D(s.TEXTURE_2D,0,xt,ht,yt,rt,H,ot,b.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,X),e.pixelStorei(s.UNPACK_SKIP_PIXELS,et),e.pixelStorei(s.UNPACK_SKIP_ROWS,ct)}}function ue(C,b,H){let ot=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ot=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ot=s.TEXTURE_3D);let nt=Nt(C,b),ft=b.source;e.bindTexture(ot,C.__webglTexture,s.TEXTURE0+H);let mt=n.get(ft);if(ft.version!==mt.__version||nt===!0){if(e.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let rt=he.getPrimaries(he.workingColorSpace),it=b.colorSpace===Ns?null:he.getPrimaries(b.colorSpace),Mt=b.colorSpace===Ns||rt===it?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let et=y(b.image,!1,i.maxTextureSize);et=St(b,et);let ct=r.convert(b.format,b.colorSpace),U=r.convert(b.type),tt=w(b.internalFormat,ct,U,b.normalized,b.colorSpace,b.isVideoTexture);Xt(ot,b);let j,_t=b.mipmaps,ut=b.isVideoTexture!==!0,xt=mt.__version===void 0||nt===!0,ht=ft.dataReady,yt=S(b,et);if(b.isDepthTexture)tt=x(b.format===Ds,b.type),xt&&(ut?e.texStorage2D(s.TEXTURE_2D,1,tt,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,tt,et.width,et.height,0,ct,U,null));else if(b.isDataTexture)if(_t.length>0){ut&&xt&&e.texStorage2D(s.TEXTURE_2D,yt,tt,_t[0].width,_t[0].height);for(let rt=0,it=_t.length;rt<it;rt++)j=_t[rt],ut?ht&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,j.width,j.height,ct,U,j.data):e.texImage2D(s.TEXTURE_2D,rt,tt,j.width,j.height,0,ct,U,j.data);b.generateMipmaps=!1}else ut?(xt&&e.texStorage2D(s.TEXTURE_2D,yt,tt,et.width,et.height),ht&&fe(b,et,ct,U)):e.texImage2D(s.TEXTURE_2D,0,tt,et.width,et.height,0,ct,U,et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ut&&xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,tt,_t[0].width,_t[0].height,et.depth);for(let rt=0,it=_t.length;rt<it;rt++)if(j=_t[rt],b.format!==qi)if(ct!==null)if(ut){if(ht)if(b.layerUpdates.size>0){let Mt=Zf(j.width,j.height,b.format,b.type);for(let st of b.layerUpdates){let Ct=j.data.subarray(st*Mt/j.data.BYTES_PER_ELEMENT,(st+1)*Mt/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,st,j.width,j.height,1,ct,Ct)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,j.width,j.height,et.depth,ct,j.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,tt,j.width,j.height,et.depth,0,j.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?ht&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,j.width,j.height,et.depth,ct,U,j.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,tt,j.width,j.height,et.depth,0,ct,U,j.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ut&&xt&&e.texStorage2D(s.TEXTURE_2D,yt,tt,_t[0].width,_t[0].height);for(let rt=0,it=_t.length;rt<it;rt++)j=_t[rt],b.format!==qi?ct!==null?ut?ht&&e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,j.width,j.height,ct,j.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,tt,j.width,j.height,0,j.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?ht&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,j.width,j.height,ct,U,j.data):e.texImage2D(s.TEXTURE_2D,rt,tt,j.width,j.height,0,ct,U,j.data)}else if(b.isDataArrayTexture)if(ut){if(xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,tt,et.width,et.height,et.depth),ht)if(b.layerUpdates.size>0){let rt=Zf(et.width,et.height,b.format,b.type);for(let it of b.layerUpdates){let Mt=et.data.subarray(it*rt/et.data.BYTES_PER_ELEMENT,(it+1)*rt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,et.width,et.height,1,ct,U,Mt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ct,U,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,et.width,et.height,et.depth,0,ct,U,et.data);else if(b.isData3DTexture)ut?(xt&&e.texStorage3D(s.TEXTURE_3D,yt,tt,et.width,et.height,et.depth),ht&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ct,U,et.data)):e.texImage3D(s.TEXTURE_3D,0,tt,et.width,et.height,et.depth,0,ct,U,et.data);else if(b.isFramebufferTexture){if(xt)if(ut)e.texStorage2D(s.TEXTURE_2D,yt,tt,et.width,et.height);else{let rt=et.width,it=et.height;for(let Mt=0;Mt<yt;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,tt,rt,it,0,ct,U,null),rt>>=1,it>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let rt=s.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),et.parentNode!==rt){rt.appendChild(et),f.add(b),rt.onpaint=it=>{let Mt=it.changedElements;for(let st of f)Mt.includes(st.image)&&(st.needsUpdate=!0)},rt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,et);else{let Mt=s.RGBA,st=s.RGBA,Ct=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Mt,st,Ct,et)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(_t.length>0){if(ut&&xt){let rt=It(_t[0]);e.texStorage2D(s.TEXTURE_2D,yt,tt,rt.width,rt.height)}for(let rt=0,it=_t.length;rt<it;rt++)j=_t[rt],ut?ht&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,ct,U,j):e.texImage2D(s.TEXTURE_2D,rt,tt,ct,U,j);b.generateMipmaps=!1}else if(ut){if(xt){let rt=It(et);e.texStorage2D(s.TEXTURE_2D,yt,tt,rt.width,rt.height)}ht&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,U,et)}else e.texImage2D(s.TEXTURE_2D,0,tt,ct,U,et);T(b)&&b.mipmapsAutoUpdate===!0&&v(ot),mt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function q(C,b,H){if(b.image.length!==6)return;let ot=Nt(C,b),nt=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+H);let ft=n.get(nt);if(nt.version!==ft.__version||ot===!0){e.activeTexture(s.TEXTURE0+H);let mt=he.getPrimaries(he.workingColorSpace),X=b.colorSpace===Ns?null:he.getPrimaries(b.colorSpace),et=b.colorSpace===Ns||mt===X?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ct=b.isCompressedTexture||b.image[0].isCompressedTexture,U=b.image[0]&&b.image[0].isDataTexture,tt=[];for(let st=0;st<6;st++)!ct&&!U?tt[st]=y(b.image[st],!0,i.maxCubemapSize):tt[st]=U?b.image[st].image:b.image[st],tt[st]=St(b,tt[st]);let j=tt[0],_t=r.convert(b.format,b.colorSpace),ut=r.convert(b.type),xt=w(b.internalFormat,_t,ut,b.normalized,b.colorSpace),ht=b.isVideoTexture!==!0,yt=ft.__version===void 0||ot===!0,rt=nt.dataReady,it=S(b,j);Xt(s.TEXTURE_CUBE_MAP,b);let Mt;if(b.isDepthTexture){if(xt=x(b.format===Ds,b.type),yt)if(ht)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,xt,j.width,j.height);else for(let st=0;st<6;st++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,xt,j.width,j.height,0,_t,ut,null)}else if(ct){ht&&yt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,it,xt,j.width,j.height);for(let st=0;st<6;st++){Mt=tt[st].mipmaps;for(let Ct=0;Ct<Mt.length;Ct++){let ae=Mt[Ct];b.format!==qi?_t!==null?ht?rt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,0,0,ae.width,ae.height,_t,ae.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,xt,ae.width,ae.height,0,ae.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,0,0,ae.width,ae.height,_t,ut,ae.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,xt,ae.width,ae.height,0,_t,ut,ae.data)}}}else{if(Mt=b.mipmaps,ht&&yt){Mt.length>0&&it++;let st=It(tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,it,xt,st.width,st.height)}for(let st=0;st<6;st++)if(U){ht?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,tt[st].width,tt[st].height,_t,ut,tt[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,xt,tt[st].width,tt[st].height,0,_t,ut,tt[st].data);for(let Ct=0;Ct<Mt.length;Ct++){let Zt=Mt[Ct].image[st].image;ht?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,0,0,Zt.width,Zt.height,_t,ut,Zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,xt,Zt.width,Zt.height,0,_t,ut,Zt.data)}}else{ht?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,_t,ut,tt[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,xt,_t,ut,tt[st]);for(let Ct=0;Ct<Mt.length;Ct++){let ae=Mt[Ct];ht?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,0,0,_t,ut,ae.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,xt,_t,ut,ae.image[st])}}}T(b)&&b.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),ft.__version=nt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Qt(C,b,H,ot,nt,ft){let mt=r.convert(H.format,H.colorSpace),X=r.convert(H.type),et=w(H.internalFormat,mt,X,H.normalized,H.colorSpace),ct=n.get(b),U=n.get(H);if(U.__renderTarget=b,!ct.__hasExternalTextures){let tt=Math.max(1,b.width>>ft),j=Math.max(1,b.height>>ft);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,ft,et,tt,j,b.depth,0,mt,X,null):e.texImage2D(nt,ft,et,tt,j,0,mt,X,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Q(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,nt,U.__webglTexture,0,Ht(b)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ot,nt,U.__webglTexture,ft),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(C,b,H){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer){let ot=b.depthTexture,nt=ot&&ot.isDepthTexture?ot.type:null,ft=x(b.stencilBuffer,nt),mt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Q(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(b),ft,b.width,b.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(b),ft,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ft,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,C)}else{let ot=b.textures;for(let nt=0;nt<ot.length;nt++){let ft=ot[nt],mt=r.convert(ft.format,ft.colorSpace),X=r.convert(ft.type),et=w(ft.internalFormat,mt,X,ft.normalized,ft.colorSpace);Q(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(b),et,b.width,b.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(b),et,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,et,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ee(C,b,H){let ot=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(b.depthTexture);nt.__renderTarget=b;let ft=ot?b.depthTexture.image[0]:b.depthTexture.image;(!nt.__webglTexture||ft.width!==b.width||ft.height!==b.height)&&(ft.width=b.width,ft.height=b.height,b.depthTexture.needsUpdate=!0),ot?dt(b.depthTexture,0):lt(b.depthTexture,0);let mt=nt.__webglTexture,X=Ht(b),et=ot?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,ct=b.depthTexture.format===Ds?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Cs)Q(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,et,mt,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,ct,et,mt,0);else if(b.depthTexture.format===Ds)Q(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,et,mt,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,ct,et,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(C){let b=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let ot=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ot){let nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ot.removeEventListener("dispose",nt)};ot.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=ot}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(H)for(let ot=0;ot<6;ot++)ee(b.__webglFramebuffer[ot],C,ot);else C.texture.mipmaps.length>0?ee(b.__webglFramebuffer[0],C,0):ee(b.__webglFramebuffer,C,0);else if(H){b.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ot]),b.__webglDepthbuffer[ot]===void 0)b.__webglDepthbuffer[ot]=s.createRenderbuffer(),Xe(b.__webglDepthbuffer[ot],C,!1);else{let nt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[ot];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,ft)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Xe(b.__webglDepthbuffer,C,!1);else{let nt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,ft)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(C,b,H){let ot=n.get(C);b!==void 0&&Qt(ot.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&ne(C)}function Ae(C){let b=C.texture,H=n.get(C),ot=n.get(b);C.addEventListener("dispose",I),P(C);let nt=C.textures,ft=C.isWebGLCubeRenderTarget===!0,mt=nt.length>1;if(mt||(ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture()),ot.__version=b.version,a.memory.textures++),ft){H.__webglFramebuffer=[];for(let X=0;X<6;X++)if(b.mipmaps.length>0){H.__webglFramebuffer[X]=[];for(let et=0;et<b.mipmaps.length;et++)H.__webglFramebuffer[X][et]=s.createFramebuffer()}else H.__webglFramebuffer[X]=s.createFramebuffer()}else{if(b.mipmaps.length>0){H.__webglFramebuffer=[];for(let X=0;X<b.mipmaps.length;X++)H.__webglFramebuffer[X]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(mt)for(let X=0,et=nt.length;X<et;X++){let ct=n.get(nt[X]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Q(C)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let X=0;X<nt.length;X++){let et=nt[X];H.__webglColorRenderbuffer[X]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[X]);let ct=r.convert(et.format,et.colorSpace),U=r.convert(et.type),tt=w(et.internalFormat,ct,U,et.normalized,et.colorSpace,C.isXRRenderTarget===!0),j=Ht(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,j,tt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+X,s.RENDERBUFFER,H.__webglColorRenderbuffer[X])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),Xt(s.TEXTURE_CUBE_MAP,b);for(let X=0;X<6;X++)if(b.mipmaps.length>0)for(let et=0;et<b.mipmaps.length;et++)Qt(H.__webglFramebuffer[X][et],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,et);else Qt(H.__webglFramebuffer[X],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);T(b)?v(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let X=0,et=nt.length;X<et;X++){let ct=nt[X],U=n.get(ct),tt=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(tt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,U.__webglTexture),Xt(tt,ct),Qt(H.__webglFramebuffer,C,ct,s.COLOR_ATTACHMENT0+X,tt,0),T(ct)&&v(tt)}e.unbindTexture()}else{let X=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(X=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(X,ot.__webglTexture),Xt(X,b),b.mipmaps.length>0)for(let et=0;et<b.mipmaps.length;et++)Qt(H.__webglFramebuffer[et],C,b,s.COLOR_ATTACHMENT0,X,et);else Qt(H.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,X,0);T(b)?v(X):b.mipmaps.length>0&&s.texParameteri(X,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&ne(C)}function z(C){let b=C.textures;for(let H=0,ot=b.length;H<ot;H++){let nt=b[H];if(T(nt)&&nt.mipmapsAutoUpdate===!0){let ft=M(C),mt=n.get(nt).__webglTexture;e.bindTexture(ft,mt),v(ft),e.unbindTexture()}}}let pe=[];function oe(C){if(C.samples>0){if(Q(C)===!1){let b=C.textures,H=C.width,ot=C.height,nt=s.COLOR_BUFFER_BIT,ft=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=n.get(C),X=b.length>1;if(X)for(let ct=0;ct<b.length;ct++)e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let ct=0;ct<b.length;ct++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),X){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,mt.__webglColorRenderbuffer[ct]);let U=n.get(b[ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,U,0)}s.blitFramebuffer(0,0,H,ot,0,0,H,ot,nt,s.NEAREST),l===!0&&(pe.length=0,pe.push(s.COLOR_ATTACHMENT0+ct),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&pe.push(ft),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),X)for(let ct=0;ct<b.length;ct++){e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,mt.__webglColorRenderbuffer[ct]);let U=n.get(b[ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,U,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let b=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Ht(C){return Math.min(i.maxSamples,C.samples)}function Q(C){let b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Tt(C){let b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function St(C,b){let H=C.colorSpace,ot=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Yo&&H!==Ns&&(he.getTransfer(H)===be?(ot!==qi||nt!==ci)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",H)),b}function It(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Pt,this.resetTextureUnits=R,this.getTextureUnits=J,this.setTextureUnits=pt,this.setTexture2D=lt,this.setTexture2DArray=gt,this.setTexture3D=at,this.setTextureCube=dt,this.rebindTextures=Le,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=Q,this.dispose=G}function vw(s,t){function e(n,i=Ns){let r,a=he.getTransfer(i);if(n===ci)return s.UNSIGNED_BYTE;if(n===Uh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Nf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Of)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lf)return s.BYTE;if(n===Df)return s.SHORT;if(n===Ka)return s.UNSIGNED_SHORT;if(n===Oh)return s.INT;if(n===Xi)return s.UNSIGNED_INT;if(n===Ui)return s.FLOAT;if(n===$i)return s.HALF_FLOAT;if(n===Uf)return s.ALPHA;if(n===Ff)return s.RGB;if(n===qi)return s.RGBA;if(n===Cs)return s.DEPTH_COMPONENT;if(n===Ds)return s.DEPTH_STENCIL;if(n===Bh)return s.RED;if(n===kh)return s.RED_INTEGER;if(n===fr)return s.RG;if(n===zh)return s.RG_INTEGER;if(n===Vh)return s.RGBA_INTEGER;if(n===bl||n===wl||n===Tl||n===El)if(a===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===El)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===El)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gh||n===Hh||n===Wh||n===Xh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$h||n===qh||n===Yh||n===Zh||n===Jh||n===Al||n===Kh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$h||n===qh)return a===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yh)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zh)return r.COMPRESSED_R11_EAC;if(n===Jh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Al)return r.COMPRESSED_RG11_EAC;if(n===Kh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qh||n===jh||n===tu||n===eu||n===nu||n===iu||n===su||n===ru||n===au||n===ou||n===lu||n===cu||n===hu||n===uu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qh)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jh)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tu)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eu)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nu)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===iu)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===su)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ru)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===au)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ou)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lu)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cu)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hu)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uu)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===du||n===fu||n===pu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===du)return a===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mu||n===gu||n===Cl||n===_u)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_u)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Jr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Sw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,cp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ll(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new os({vertexShader:Sw,fragmentShader:Mw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new ul(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hp=class extends ns{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,p=null,g=typeof XRWebGLBinding<"u",m=new cp,_={},y=e.getContextAttributes(),T=null,v=null,M=[],w=[],x=new Wt,S=null,P=null,A=new zn;A.viewport=new ze;let D=new zn;D.viewport=new ze;let I=[A,D],V=new Rh,L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let lt=M[Z];return lt===void 0&&(lt=new Ha,M[Z]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(Z){let lt=M[Z];return lt===void 0&&(lt=new Ha,M[Z]=lt),lt.getGripSpace()},this.getHand=function(Z){let lt=M[Z];return lt===void 0&&(lt=new Ha,M[Z]=lt),lt.getHandSpace()};function O(Z){let lt=w.indexOf(Z.inputSource);if(lt===-1)return;let gt=M[lt];gt!==void 0&&(gt.update(Z.inputSource,Z.frame,c||a),gt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function N(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",F);for(let Z=0;Z<M.length;Z++){let lt=w[Z];lt!==null&&(w[Z]=null,M[Z].disconnect(lt))}L=null,G=null,m.reset();for(let Z in _)delete _[Z];if(t.setRenderTarget(T),u=null,d=null,f=null,i=null,v=null,Pt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(x.width,x.height,!1),P!==null){let Z=P.camera;Z.fov=P.fov,Z.zoom=P.zoom,Z.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",N),i.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(x),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,at=null,dt=null;y.depth&&(dt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=y.stencil?Ds:Cs,at=y.stencil?Jr:Xi);let Lt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Lt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new wi(d.textureWidth,d.textureHeight,{format:qi,type:ci,depthTexture:new Is(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let gt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,gt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new wi(u.framebufferWidth,u.framebufferHeight,{format:qi,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Pt.setContext(i),Pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(Z){for(let lt=0;lt<Z.removed.length;lt++){let gt=Z.removed[lt],at=w.indexOf(gt);at>=0&&(w[at]=null,M[at].disconnect(gt))}for(let lt=0;lt<Z.added.length;lt++){let gt=Z.added[lt],at=w.indexOf(gt);if(at===-1){for(let Lt=0;Lt<M.length;Lt++)if(Lt>=w.length){w.push(gt),at=Lt;break}else if(w[Lt]===null){w[Lt]=gt,at=Lt;break}if(at===-1)break}let dt=M[at];dt&&dt.connect(gt)}}function B(Z,lt){lt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(lt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let lt=Z.near,gt=Z.far;m.texture!==null&&(m.depthNear>0&&(lt=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),V.near=D.near=A.near=lt,V.far=D.far=A.far=gt,(L!==V.near||G!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),L=V.near,G=V.far),V.layers.mask=Z.layers.mask|6,A.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;let at=Z.parent,dt=V.cameras;B(V,at);for(let Lt=0;Lt<dt.length;Lt++)B(dt[Lt],at);V.projectionMatrix.copy(A.projectionMatrix),V.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&Z.isPerspectiveCamera&&(P={camera:Z,fov:Z.fov,zoom:Z.zoom}),R(Z,V,at)};function R(Z,lt,gt){gt===null?Z.matrix.copy(lt.matrixWorld):(Z.matrix.copy(gt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(lt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(lt.projectionMatrix),Z.projectionMatrixInverse.copy(lt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Va*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(Z){return _[Z]};let J=null;function pt(Z,lt){if(h=lt.getViewerPose(c||a),p=lt,h!==null){let gt=h.views;u!==null&&(t.setRenderTargetFramebuffer(v,u.framebuffer),t.setRenderTarget(v));let at=!1;gt.length!==V.cameras.length&&(V.cameras.length=0,at=!0);for(let Et=0;Et<gt.length;Et++){let Xt=gt[Et],Nt=null;if(u!==null)Nt=u.getViewport(Xt);else{let fe=f.getViewSubImage(d,Xt);Nt=fe.viewport,Et===0&&(t.setRenderTargetTextures(v,fe.colorTexture,fe.depthStencilTexture),t.setRenderTarget(v))}let Bt=I[Et];Bt===void 0&&(Bt=new zn,Bt.layers.enable(Et),Bt.viewport=new ze,I[Et]=Bt),Bt.matrix.fromArray(Xt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Xt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Et===0&&(V.matrix.copy(Bt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),at===!0&&V.cameras.push(Bt)}let dt=i.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){f=n.getBinding();let Et=f.getDepthInformation(gt[0]);Et&&Et.isValid&&Et.texture&&m.init(Et,i.renderState)}if(dt&&dt.includes("camera-access")&&g){t.state.unbindTexture(),f=n.getBinding();for(let Et=0;Et<gt.length;Et++){let Xt=gt[Et].camera;if(Xt){let Nt=_[Xt];Nt||(Nt=new ll,_[Xt]=Nt);let Bt=f.getCameraImage(Xt);Nt.sourceTexture=Bt}}}}for(let gt=0;gt<M.length;gt++){let at=w[gt],dt=M[gt];at!==null&&dt!==void 0&&dt.update(at,lt,c||a)}J&&J(Z,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),p=null}let Pt=new s_;Pt.setAnimationLoop(pt),this.setAnimationLoop=function(Z){J=Z},this.dispose=function(){}}},bw=new Ee,p_=new Yt;p_.set(-1,0,0,0,1,0,0,0,1);function ww(s,t){function e(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,$f(s)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function i(m,_,y,T,v){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(m,_):_.isMeshLambertMaterial?(r(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(m,_),f(m,_)):_.isMeshPhongMaterial?(r(m,_),h(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(m,_),d(m,_),_.isMeshPhysicalMaterial&&u(m,_,v)):_.isMeshMatcapMaterial?(r(m,_),p(m,_)):_.isMeshDepthMaterial?r(m,_):_.isMeshDistanceMaterial?(r(m,_),g(m,_)):_.isMeshNormalMaterial?r(m,_):_.isLineBasicMaterial?(a(m,_),_.isLineDashedMaterial&&o(m,_)):_.isPointsMaterial?l(m,_,y,T):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,e(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===dn&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,e(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===dn&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,e(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,e(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);let y=t.get(_),T=y.envMap,v=y.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(bw.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(p_),m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,m.aoMapTransform))}function a(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform))}function o(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function l(m,_,y,T){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*y,m.scale.value=T*.5,_.map&&(m.map.value=_.map,e(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function h(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function f(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function d(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function u(m,_,y){m.ior.value=_.ior,_.diffuseRoughness>0&&(m.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=_.diffuseRoughnessMap,e(_.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===dn&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.retroreflectivity>0&&(m.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,_){_.matcap&&(m.matcap.value=_.matcap)}function g(m,_){let y=t.get(_).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Tw(s,t,e,n){let i={},r={};function a(y,T){let v=T.program;n.uniformBlockBinding(y,v,i[y.id])}function o(y,T){let v=i[y.id];v===void 0&&(p(y),v=l(y),i[y.id]=v,y.addEventListener("dispose",m));let M=T.program;n.updateUBOMapping(y,M);let w=t.render.frame;r[y.id]!==w&&(c(y),r[y.id]=w)}function l(y){let T=s.createBuffer(),v=y.__size,M=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,v,M),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(y){let T=i[y.id],v=y.uniforms,M=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let w=0,x=v.length;w<x;w++){let S=v[w];if(Array.isArray(S))for(let P=0,A=S.length;P<A;P++)h(S[P],w,P,M);else h(S,w,0,M)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,T,v,M){if(d(y,T,v,M)===!0){let w=y.__offset,x=y.value;if(Array.isArray(x)){let S=0;for(let P=0;P<x.length;P++){let A=x[P],D=g(A,!0);f(A,y.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,y.__data)}}function f(y,T,v){typeof y=="number"||typeof y=="boolean"?T[v]=y:y.isMatrix3?(T[v]=y.elements[0],T[v+1]=y.elements[1],T[v+2]=y.elements[2],T[v+3]=0,T[v+4]=y.elements[3],T[v+5]=y.elements[4],T[v+6]=y.elements[5],T[v+7]=0,T[v+8]=y.elements[6],T[v+9]=y.elements[7],T[v+10]=y.elements[8],T[v+11]=0):ArrayBuffer.isView(y)?T.set(y.subarray(0,T.length-v),v):y.toArray(T,v)}function d(y,T,v,M){let w=y.value,x=T+"_"+v;if(Array.isArray(w)){M[x]===void 0&&(M[x]=[]);let S=M[x],P=!1;for(let A=0;A<w.length;A++)u(w[A],S,A)===!0&&(P=!0);return P}return u(w,M,x)}function u(y,T,v){if(T[v]===void 0)return typeof y=="number"||typeof y=="boolean"?T[v]=y:ArrayBuffer.isView(y)?T[v]=y.slice():T[v]=y.clone(),!0;{let M=T[v];if(typeof y=="number"||typeof y=="boolean"){if(M!==y)return T[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(M.equals(y)===!1)return M.copy(y),!0}}return!1}function p(y){let T=y.uniforms,v=0,M=16;for(let x=0,S=T.length;x<S;x++){let P=Array.isArray(T[x])?T[x]:[T[x]];for(let A=0,D=P.length;A<D;A++){let I=P[A],V=Array.isArray(I.value)?I.value:[I.value],L=Array.isArray(T[x])||Array.isArray(I.value),G=v;for(let N=0,F=V.length;N<F;N++){let B=V[N],R=g(B,L),J=v%M,pt=J%R.boundary,Pt=J+pt;v+=pt,Pt!==0&&M-Pt<R.storage&&(v+=M-Pt),N===0&&(G=v),v+=R.storage}let O=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new O((v-G)/Float32Array.BYTES_PER_ELEMENT),I.__offset=G}}let w=v%M;return w>0&&(v+=M-w),y.__size=v,y.__cache={},this}function g(y,T){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",y),T===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(y){let T=y.target;T.removeEventListener("dispose",m),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function _(){for(let y in i)s.deleteBuffer(i[y]);i={},r={}}return{bind:a,update:o,dispose:_}}var Ew=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cs=null;function Aw(){return cs===null&&(cs=new nl(Ew,16,16,fr,$i),cs.name="DFG_LUT",cs.minFilter=jn,cs.magFilter=jn,cs.wrapS=es,cs.wrapT=es,cs.generateMipmaps=!1,cs.needsUpdate=!0),cs}var vu=class{constructor(t={}){let{canvas:e=A0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=ci}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=u,m=new Set([Vh,zh,kh]),_=new Set([ci,Xi,Ka,Jr,Uh,Fh]),y=new Uint32Array(4),T=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},M=null,w=null,x=[],S=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ls,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,D=!1,I=null,V=null,L=null,G=null;this._outputColorSpace=un;let O=0,N=0,F=null,B=-1,R=null,J=new ze,pt=new ze,Pt=null,Z=new Kt(0),lt=0,gt=e.width,at=e.height,dt=1,Lt=null,me=null,Et=new ze(0,0,gt,at),Xt=new ze(0,0,gt,at),Nt=!1,Bt=new rr,fe=new mh,ue=!1,q=!1,Qt=new Ee,Xe=new $,ee=new ze,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Le=!1;function Ae(){return F===null?dt:1}let z=n;function pe(E,k){return e.getContext(E,k)}let oe,Ht,Q,Tt,St,It,C,b,H,ot,nt,ft,mt,X,et,ct,U,tt,j,_t,ut,xt,ht;try{let E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",st,!1),z===null){let k="webgl2";if(z=pe(k,E),z===null)throw pe(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}yt()}catch(E){throw e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",st,!1),qt("WebGLRenderer: "+E.message),E}function yt(){oe=new Bb(z),oe.init(),ut=new vw(z,oe),Ht=new Ab(z,oe,t,ut),Q=new xw(z,oe),Ht.reversedDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),V=z.createFramebuffer(),L=z.createFramebuffer(),G=z.createFramebuffer(),Tt=new Vb(z),St=new sw,It=new yw(z,oe,Q,St,Ht,ut,Tt),C=new Fb(A),b=new Hv(z),xt=new Tb(z,b),H=new kb(z,b,Tt,xt),ot=new Hb(z,H,b,xt,Tt),tt=new Gb(z,Ht,It),et=new Cb(St),nt=new iw(A,C,oe,Ht,xt,et),ft=new ww(A,St),mt=new aw,X=new dw(oe),U=new wb(A,C,Q,ot,p,l),ct=new _w(A,ot,Ht),ht=new Tw(z,Tt,Ht,Q),j=new Eb(z,oe,Tt),_t=new zb(z,oe,Tt),Tt.programs=nt.programs,A.capabilities=Ht,A.extensions=oe,A.properties=St,A.renderLists=mt,A.shadowMap=ct,A.state=Q,A.info=Tt}g!==ci&&(P=new Xb(g,e.width,e.height,o,i,r));let rt=new hp(A,z);this.xr=rt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let E=oe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=oe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(E){E!==void 0&&(dt=E,this.setSize(gt,at,!1))},this.getSize=function(E){return E.set(gt,at)},this.setSize=function(E,k,K=!0){if(rt.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}gt=E,at=k,e.width=Math.floor(E*dt),e.height=Math.floor(k*dt),K===!0&&(e.style.width=E+"px",e.style.height=k+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(gt*dt,at*dt).floor()},this.setDrawingBufferSize=function(E,k,K){gt=E,at=k,dt=K,e.width=Math.floor(E*K),e.height=Math.floor(k*K),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(g===ci){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(J)},this.getViewport=function(E){return E.copy(Et)},this.setViewport=function(E,k,K,W){E.isVector4?Et.set(E.x,E.y,E.z,E.w):Et.set(E,k,K,W),Q.viewport(J.copy(Et).multiplyScalar(Ae()).round())},this.getScissor=function(E){return E.copy(Xt)},this.setScissor=function(E,k,K,W){E.isVector4?Xt.set(E.x,E.y,E.z,E.w):Xt.set(E,k,K,W),Q.scissor(pt.copy(Xt).multiplyScalar(Ae()).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(E){Q.setScissorTest(Nt=E)},this.setOpaqueSort=function(E){Lt=E},this.setTransparentSort=function(E){me=E},this.getClearColor=function(E){return E.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,K=!0){let W=0;if(E){let Y=!1;if(F!==null){let wt=F.texture.format;Y=m.has(wt)}if(Y){let wt=F.texture.type,Ot=_.has(wt),bt=U.getClearColor(),Rt=U.getClearAlpha(),kt=bt.r,Jt=bt.g,le=bt.b;Ot?(y[0]=kt,y[1]=Jt,y[2]=le,y[3]=Rt,z.clearBufferuiv(z.COLOR,0,y)):(T[0]=kt,T[1]=Jt,T[2]=le,T[3]=Rt,z.clearBufferiv(z.COLOR,0,T))}else W|=z.COLOR_BUFFER_BIT}k&&(W|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",st,!1),U.dispose(),mt.dispose(),X.dispose(),It.dispose(),St.dispose(),C.dispose(),ot.dispose(),H.dispose(),xt.dispose(),ht.dispose(),nt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Ce),rt.removeEventListener("sessionend",Se),an.stop()};function it(E){E.preventDefault(),Gf("WebGLRenderer: Context Lost."),D=!0}function Mt(){Gf("WebGLRenderer: Context Restored."),D=!1;let E=Tt.autoReset,k=ct.enabled,K=ct.autoUpdate,W=ct.needsUpdate,Y=ct.type;yt(),Tt.autoReset=E,ct.enabled=k,ct.autoUpdate=K,ct.needsUpdate=W,ct.type=Y}function st(E){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ct(E){let k=E.target;k.removeEventListener("dispose",Ct),ae(k)}function ae(E){Zt(E),St.remove(E)}function Zt(E){let k=St.get(E).programs;k!==void 0&&(k.forEach(function(K){nt.releaseProgram(K)}),E.isShaderMaterial&&nt.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,K,W,Y,wt){k===null&&(k=ne);let Ot=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,bt=Ai(E,k,K,W,Y);Q.setMaterial(W,Ot);let Rt=K.index,kt=1;if(W.wireframe===!0){if(Rt=H.getWireframeAttribute(K),Rt===void 0)return;kt=2}let Jt=K.drawRange,le=K.attributes.position,Ut=Jt.start*kt,ce=(Jt.start+Jt.count)*kt;wt!==null&&(Ut=Math.max(Ut,wt.start*kt),ce=Math.min(ce,(wt.start+wt.count)*kt)),Rt!==null?(Ut=Math.max(Ut,0),ce=Math.min(ce,Rt.count)):le!=null&&(Ut=Math.max(Ut,0),ce=Math.min(ce,le.count));let en=ce-Ut;if(en<0||en===1/0)return;xt.setup(Y,W,bt,K,Rt);let De,Pe=j;if(Rt!==null&&(De=b.get(Rt),Pe=_t,Pe.setIndex(De)),Y.isMesh)W.wireframe===!0?(Q.setLineWidth(W.wireframeLinewidth*Ae()),Pe.setMode(z.LINES)):Pe.setMode(z.TRIANGLES);else if(Y.isLine){let Rn=W.linewidth;Rn===void 0&&(Rn=1),Q.setLineWidth(Rn*Ae()),Y.isLineSegments?Pe.setMode(z.LINES):Y.isLineLoop?Pe.setMode(z.LINE_LOOP):Pe.setMode(z.LINE_STRIP)}else Y.isPoints?Pe.setMode(z.POINTS):Y.isSprite&&Pe.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Pe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Rn=Y._multiDrawStarts,Ft=Y._multiDrawCounts,Wn=Y._multiDrawCount,ve=Rt?b.get(Rt).bytesPerElement:1,_r=St.get(W).currentProgram.getUniforms();for(let Pn=0;Pn<Wn;Pn++)_r.setValue(z,"_gl_DrawID",Pn),Pe.render(Rn[Pn]/ve,Ft[Pn])}else if(Y.isInstancedMesh)Pe.renderInstances(Ut,en,Y.count);else if(K.isInstancedBufferGeometry){let Rn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ft=Math.min(K.instanceCount,Rn);Pe.renderInstances(Ut,en,Ft)}else Pe.render(Ut,en)};function Fe(E,k,K,W){I!==null&&E.isNodeMaterial&&I.setObject(W,E),ue===!0&&et.setState(E,K,!1),E.transparent===!0&&E.side===Gn&&E.forceSinglePass===!1?(E.side=dn,E.needsUpdate=!0,fi(E,k,W),E.side=hr,E.needsUpdate=!0,fi(E,k,W),E.side=Gn):fi(E,k,W)}this.compile=function(E,k,K=null){K===null&&(K=E),I!==null&&I.renderStart(E,k,K),w=X.get(K),w.init(k),S.push(w),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),E!==K&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),w.setupLights(),I!==null&&I.updateLights(w.state.lightsArray),q=this.localClippingEnabled,ue=et.init(this.clippingPlanes,q),ue===!0&&et.setGlobalState(this.clippingPlanes,k),I!==null&&ct.render(w.state.shadowsArray,K,k);let W=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let wt=Y.material;if(wt)if(Array.isArray(wt))for(let Ot=0;Ot<wt.length;Ot++){let bt=wt[Ot];Fe(bt,K,k,Y),W.add(bt)}else Fe(wt,K,k,Y),W.add(wt)}),w=S.pop(),I!==null&&I.renderEnd(),W},this.compileAsync=function(E,k,K=null){let W=this.compile(E,k,K);return new Promise(Y=>{function wt(){if(W.forEach(function(Ot){let Rt=St.get(Ot).currentProgram;(Rt===void 0||Rt.isReady())&&W.delete(Ot)}),W.size===0){Y(E);return}setTimeout(wt,10)}oe.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let je=null;function Be(E){je&&je(E)}function Ce(){an.stop()}function Se(){an.start()}let an=new s_;an.setAnimationLoop(Be),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(E){je=E,rt.setAnimationLoop(E),E===null?an.stop():an.start()},rt.addEventListener("sessionstart",Ce),rt.addEventListener("sessionend",Se),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(E,k);let K=rt.enabled===!0&&rt.isPresenting===!0,W=P!==null&&(F===null||K)&&P.begin(A,F);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(k),k=rt.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,k,F),w=X.get(E,S.length),w.init(k),w.state.textureUnits=It.getTextureUnits(),S.push(w),Qt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?fe.setFromArrayCamera(k):Bt.setFromProjectionMatrix(Qt,Oi,k.reversedDepth),q=this.localClippingEnabled,ue=et.init(this.clippingPlanes,q),M=mt.get(E,x.length),M.init(),x.push(M),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let Ot=A.xr.getDepthSensingMesh();Ot!==null&&Re(Ot,k,-1/0,A.sortObjects)}Re(E,k,0,A.sortObjects),M.finish(),I!==null&&I.updateLights(w.state.lightsArray),A.sortObjects===!0&&M.sort(Lt,me),Le=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Le&&U.addToRenderList(M,E),this.info.autoReset===!0&&this.info.reset(),ue===!0&&et.beginShadows();let Y=w.state.shadowsArray;if(ct.render(Y,E,k),ue===!0&&et.endShadows(),(W&&P.hasRenderPass())===!1){let Ot=M.opaque,bt=M.transmissive;if(w.setupLights(),k.isArrayCamera){let Rt=k.cameras;if(bt.length>0)for(let kt=0,Jt=Rt.length;kt<Jt;kt++){let le=Rt[kt];di(Ot,bt,E,le)}Le&&U.render(E);for(let kt=0,Jt=Rt.length;kt<Jt;kt++){let le=Rt[kt];Cn(M,E,le,le.viewport)}}else bt.length>0&&di(Ot,bt,E,k),Le&&U.render(E),Cn(M,E,k)}F!==null&&N===0&&(It.updateMultisampleRenderTarget(F),It.updateRenderTargetMipmap(F)),W&&P.end(A),E.isScene===!0&&E.onAfterRender(A,E,k),xt.resetDefaultState(),B=-1,R=null,S.pop(),S.length>0?(w=S[S.length-1],It.setTextureUnits(w.state.textureUnits),ue===!0&&et.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?M=x[x.length-1]:M=null,I!==null&&I.renderEnd()};function Re(E,k,K,W){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Ot=k.isArrayCamera?fe:Bt;if(!E.frustumCulled||E.intersectsFrustum(Ot)){W&&ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Qt);let bt=ot.update(E),Rt=E.material;Rt.visible&&M.push(E,bt,Rt,K,ee.z,null,k)}}else if(E.isMesh||E.isLine||E.isPoints){let Ot=k.isArrayCamera?fe:Bt;if(!E.frustumCulled||E.intersectsFrustum(Ot)){let bt=ot.update(E),Rt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ee.copy(E.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),ee.copy(bt.boundingSphere.center)),ee.applyMatrix4(E.matrixWorld).applyMatrix4(Qt)),Array.isArray(Rt)){let kt=bt.groups;for(let Jt=0,le=kt.length;Jt<le;Jt++){let Ut=kt[Jt],ce=Rt[Ut.materialIndex];ce&&ce.visible&&M.push(E,bt,ce,K,ee.z,Ut,k)}}else Rt.visible&&M.push(E,bt,Rt,K,ee.z,null,k)}}}let wt=E.children;for(let Ot=0,bt=wt.length;Ot<bt;Ot++)Re(wt[Ot],k,K,W)}function Cn(E,k,K,W){let{opaque:Y,transmissive:wt,transparent:Ot}=E;w.setupLightsView(K),ue===!0&&et.setGlobalState(A.clippingPlanes,K),W&&Q.viewport(J.copy(W)),Y.length>0&&$e(Y,k,K),wt.length>0&&$e(wt,k,K),Ot.length>0&&$e(Ot,k,K),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function di(E,k,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){let Ut=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new wi(1,1,{generateMipmaps:!0,type:Ut?$i:ci,minFilter:Ls,samples:Math.max(4,Ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let wt=w.state.transmissionRenderTarget[W.id],Ot=W.viewport||J;wt.setSize(Ot.z*A.transmissionResolutionScale,Ot.w*A.transmissionResolutionScale);let bt=A.getRenderTarget(),Rt=A.getActiveCubeFace(),kt=A.getActiveMipmapLevel();A.setRenderTarget(wt),A.getClearColor(Z),lt=A.getClearAlpha(),lt<1&&A.setClearColor(16777215,.5),A.clear(),Le&&U.render(K);let Jt=A.toneMapping;A.toneMapping=ls;let le=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),ue===!0&&et.setGlobalState(A.clippingPlanes,W),$e(E,K,W),It.updateMultisampleRenderTarget(wt),It.updateRenderTargetMipmap(wt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let ce=0,en=k.length;ce<en;ce++){let De=k[ce],{object:Pe,geometry:Rn,material:Ft,group:Wn}=De;if(Ft.side===Gn&&Pe.layers.test(W.layers)){let ve=Ft.side;Ft.side=dn,Ft.needsUpdate=!0,tn(Pe,K,W,Rn,Ft,Wn),Ft.side=ve,Ft.needsUpdate=!0,Ut=!0}}Ut===!0&&(It.updateMultisampleRenderTarget(wt),It.updateRenderTargetMipmap(wt))}A.setRenderTarget(bt,Rt,kt),A.setClearColor(Z,lt),le!==void 0&&(W.viewport=le),A.toneMapping=Jt}function $e(E,k,K){let W=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,wt=E.length;Y<wt;Y++){let Ot=E[Y],{object:bt,geometry:Rt,group:kt}=Ot,Jt=Ot.material;Jt.allowOverride===!0&&W!==null&&(Jt=W),bt.layers.test(K.layers)&&tn(bt,k,K,Rt,Jt,kt)}}function tn(E,k,K,W,Y,wt){I!==null&&Y.isNodeMaterial&&I.setObject(E,Y),E.onBeforeRender(A,k,K,W,Y,wt),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(A,k,K,W,E,wt),Y.transparent===!0&&Y.side===Gn&&Y.forceSinglePass===!1?(Y.side=dn,Y.needsUpdate=!0,A.renderBufferDirect(K,k,W,Y,E,wt),Y.side=hr,Y.needsUpdate=!0,A.renderBufferDirect(K,k,W,Y,E,wt),Y.side=Gn):A.renderBufferDirect(K,k,W,Y,E,wt),E.onAfterRender(A,k,K,W,Y,wt)}function on(E){let k=0;for(let K of E)K.texture!==null&&k++;return k}function fi(E,k,K){k.isScene!==!0&&(k=ne);let W=St.get(E),Y=w.state.lights,wt=w.state.shadowsArray,Ot=Y.state.version,bt=nt.getParameters(E,Y.state,wt,k,K,w.state.lightProbeGridArray),Rt=nt.getProgramCacheKey(bt),kt=W.programs;W.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,W.fog=k.fog;let Jt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;W.envMap=C.get(E.envMap||W.environment,Jt),W.envMapRotation=W.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,kt===void 0&&(E.addEventListener("dispose",Ct),kt=new Map,W.programs=kt,W.programVariants=new Map);let le=kt.get(Rt);if(le!==void 0){if(W.currentProgram===le&&W.lightsStateVersion===Ot)return qe(E,bt),le}else bt.uniforms=nt.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,K,bt),E.onBeforeCompile(bt,A),le=nt.acquireProgram(bt,Rt),kt.set(Rt,le),W.uniforms=bt.uniforms;let Ut=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=et.uniform),qe(E,bt),W.needsLights=zl(E),W.lightsStateVersion=Ot,W.needsLights&&(Ut.ambientLightColor.value=Y.state.ambient,Ut.lightProbe.value=Y.state.probe,Ut.sunLights.value=Y.state.sun,Ut.sunLightShadows.value=Y.state.sunShadow,Ut.directionalLights.value=Y.state.directional,Ut.directionalLightShadows.value=Y.state.directionalShadow,Ut.spotLights.value=Y.state.spot,Ut.spotLightShadows.value=Y.state.spotShadow,Ut.rectAreaLights.value=Y.state.rectArea,Ut.ltc_1.value=Y.state.rectAreaLTC1,Ut.ltc_2.value=Y.state.rectAreaLTC2,Ut.pointLights.value=Y.state.point,Ut.pointLightShadows.value=Y.state.pointShadow,Ut.hemisphereLights.value=Y.state.hemi,Ut.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ut.sunShadowCascade.value=Y.state.sunShadowCascade,Ut.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ut.spotLightMatrix.value=Y.state.spotLightMatrix,Ut.spotLightMap.value=Y.state.spotLightMap,Ut.pointShadowMatrix.value=Y.state.pointShadowMatrix),W.numLightProbeGrids=on(w.state.lightProbeGridArray),W.currentProgram=le,W.uniformsList=null,le}function ea(E,k,K,W,Y){let wt=St.get(E),Ot=wt.currentProgram.id+","+W+","+Y,bt=wt.programVariants.get(Ot);return bt===void 0?(bt=fi(E,k,K),wt.programVariants.set(Ot,bt)):(wt.currentProgram=bt,wt.uniformsList=null,wt.outputColorSpace=W,wt.toneMapping=Y),bt}function ln(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=ja.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function qe(E,k){let K=St.get(E);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function Ai(E,k,K,W,Y){k.isScene!==!0&&(k=ne),It.resetTextureUnits();let wt=k.fog,Ot=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?k.environment:null,bt=F===null?A.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:he.workingColorSpace,Rt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,kt=C.get(W.envMap||Ot,Rt),Jt=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,le=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ut=!!K.morphAttributes.position,ce=!!K.morphAttributes.normal,en=!!K.morphAttributes.color,De=ls;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(De=A.toneMapping);let Pe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Rn=Pe!==void 0?Pe.length:0,Ft=St.get(W),Wn=w.state.lights;if(ue===!0&&(q===!0||E!==R)){let Ve=E===R&&W.id===B;et.setState(W,E,Ve)}let ve=!1,_r=!1;W.version===Ft.__version?Ft.needsLights&&Ft.lightsStateVersion!==Wn.state.version||Y.isBatchedMesh&&Ft.batching===!1||!Y.isBatchedMesh&&Ft.batching===!0||Y.isBatchedMesh&&Ft.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ft.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ft.instancing===!1||!Y.isInstancedMesh&&Ft.instancing===!0||Y.isSkinnedMesh&&Ft.skinning===!1||!Y.isSkinnedMesh&&Ft.skinning===!0||Y.isInstancedMesh&&Ft.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ft.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ft.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ft.instancingMorph===!1&&Y.morphTexture!==null||Ft.envMap!==kt||W.fog===!0&&Ft.fog!==wt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==et.numPlanes||Ft.numIntersection!==et.numIntersection)||Ft.vertexAlphas!==Jt||Ft.vertexTangents!==le||Ft.morphTargets!==Ut||Ft.morphNormals!==ce||Ft.morphColors!==en||Ft.morphTargetsCount!==Rn||Ft.numLightProbeGrids!==on(w.state.lightProbeGridArray)?ve=!0:(Ft.outputColorSpace!==bt||Ft.toneMapping!==De)&&(_r=!0):(ve=!0,Ft.__version=W.version);let Pn=Ft.currentProgram;(ve===!0||_r===!0)&&(Pn=_r===!0?ea(W,k,Y,bt,De):fi(W,k,Y),I&&W.isNodeMaterial&&I.onUpdateProgram(W,Pn,Ft));let Vl=!1,Fs=!1,xr=!1,ge=Pn.getUniforms(),wn=Ft.uniforms;if(Q.useProgram(Pn.program)&&(Vl=!0,Fs=!0,xr=!0),W.id!==B&&(B=W.id,Fs=!0),Vl||R!==E){Q.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ge.setValue(z,"projectionMatrix",E.projectionMatrix),ge.setValue(z,"viewMatrix",E.matrixWorldInverse);let mn=ge.map.cameraPosition;mn!==void 0&&mn.setValue(z,Xe.setFromMatrixPosition(E.matrixWorld)),Ht.logarithmicDepthBuffer&&ge.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ge.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),R!==E&&(R=E,Fs=!0,xr=!0)}if(Ft.needsLights&&(Wn.state.sunShadowMap.length>0&&ge.setValue(z,"sunShadowMap",Wn.state.sunShadowMap,It),Wn.state.directionalShadowMap.length>0&&ge.setValue(z,"directionalShadowMap",Wn.state.directionalShadowMap,It),Wn.state.spotShadowMap.length>0&&ge.setValue(z,"spotShadowMap",Wn.state.spotShadowMap,It),Wn.state.pointShadowMap.length>0&&ge.setValue(z,"pointShadowMap",Wn.state.pointShadowMap,It)),Y.isSkinnedMesh){ge.setOptional(z,Y,"bindMatrix"),ge.setOptional(z,Y,"bindMatrixInverse");let Ve=Y.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),ge.setValue(z,"boneTexture",Ve.boneTexture,It))}Y.isBatchedMesh&&(ge.setOptional(z,Y,"batchingTexture"),ge.setValue(z,"batchingTexture",Y._matricesTexture,It),ge.setOptional(z,Y,"batchingIdTexture"),ge.setValue(z,"batchingIdTexture",Y._indirectTexture,It),ge.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ge.setValue(z,"batchingColorTexture",Y._colorsTexture,It));let Bi=K.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&tt.update(Y,K,Pn),(Fs||Ft.receiveShadow!==Y.receiveShadow)&&(Ft.receiveShadow=Y.receiveShadow,ge.setValue(z,"receiveShadow",Y.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&k.environment!==null&&(wn.envMapIntensity.value=k.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=Aw()),Fs){if(ge.setValue(z,"toneMappingExposure",A.toneMappingExposure),Ft.needsLights&&ro(wn,xr),wt&&W.fog===!0&&ft.refreshFogUniforms(wn,wt),ft.refreshMaterialUniforms(wn,W,dt,at,w.state.transmissionRenderTarget[E.id]),Ft.needsLights&&Ft.numLightProbeGrids>0){let Ve=v,mn=0;for(let us of w.state.lightProbeGridArray)us.texture!==null&&(Ve.textures[mn]=us.texture,Ve.min[mn]=us.boundingBox.min,Ve.max[mn]=us.boundingBox.max,Ve.resolution[mn]=us.resolution,mn++);for(let us in Ve)Ve[us].length=mn;wn.probesSH.value=Ve.textures,wn.probesMin.value=Ve.min,wn.probesMax.value=Ve.max,wn.probesResolution.value=Ve.resolution}ja.upload(z,ln(Ft),wn,It)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ja.upload(z,ln(Ft),wn,It),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ge.setValue(z,"center",Y.center),ge.setValue(z,"modelViewMatrix",Y.modelViewMatrix),ge.setValue(z,"normalMatrix",Y.normalMatrix),ge.setValue(z,"modelMatrix",Y.matrixWorld),W.uniformsGroups!==void 0){let Ve=W.uniformsGroups;for(let mn=0,us=Ve.length;mn<us;mn++){let yp=Ve[mn];ht.update(yp,Pn),ht.bind(yp,Pn)}}return Pn}function ro(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.sunLights.needsUpdate=k,E.sunLightShadows.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function zl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,k,K){let W=St.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),St.get(E.texture).__webglTexture=k,St.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let K=St.get(E);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,K=0){F=E,O=k,N=K;let W=null,Y=!1,wt=!1;if(E){let bt=St.get(E);if(bt.__useDefaultFramebuffer!==void 0){Q.bindFramebuffer(z.FRAMEBUFFER,bt.__webglFramebuffer),J.copy(E.viewport),pt.copy(E.scissor),Pt=E.scissorTest,Q.viewport(J),Q.scissor(pt),Q.setScissorTest(Pt),B=-1;return}else if(bt.__webglFramebuffer===void 0)It.setupRenderTarget(E);else if(bt.__hasExternalTextures)It.rebindTextures(E,St.get(E.texture).__webglTexture,St.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Jt=E.depthTexture;if(bt.__boundDepthTexture!==Jt){if(Jt!==null&&St.has(Jt)&&(E.width!==Jt.image.width||E.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");It.setupDepthRenderbuffer(E)}}let Rt=E.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(wt=!0);let kt=St.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(kt[k])?W=kt[k][K]:W=kt[k],Y=!0):E.samples>0&&It.useMultisampledRTT(E)===!1?W=St.get(E).__webglMultisampledFramebuffer:Array.isArray(kt)?W=kt[K]:W=kt,J.copy(E.viewport),pt.copy(E.scissor),Pt=E.scissorTest}else J.copy(Et).multiplyScalar(dt).floor(),pt.copy(Xt).multiplyScalar(dt).floor(),Pt=Nt;if(K!==0&&(W=V),Q.bindFramebuffer(z.FRAMEBUFFER,W)&&Q.drawBuffers(E,W),Q.viewport(J),Q.scissor(pt),Q.setScissorTest(Pt),Y){let bt=St.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,bt.__webglTexture,K)}else if(wt){let bt=k;for(let Rt=0;Rt<E.textures.length;Rt++){let kt=St.get(E.textures[Rt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Rt,kt.__webglTexture,K,bt)}}else if(E!==null&&K!==0){let bt=St.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,bt.__webglTexture,K)}B=-1};function Us(E){let k=St.get(E);return(k.__readFormat!==E.format||k.__readType!==E.type)&&(k.__readFormat=E.format,k.__readType=E.type,k.__formatReadable=Ht.textureFormatReadable(E.format),k.__typeReadable=Ht.textureTypeReadable(E.type)),k}this.readRenderTargetPixels=function(E,k,K,W,Y,wt,Ot,bt=0){if(!(E&&E.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ot!==void 0&&(Rt=Rt[Ot],Array.isArray(Rt)&&(Rt=Rt[0])),Rt){Q.bindFramebuffer(z.FRAMEBUFFER,Rt);try{let kt=E.textures[bt],Jt=kt.format,le=kt.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+bt);let Ut=Us(kt);if(Ut.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-W&&K>=0&&K<=E.height-Y&&z.readPixels(k,K,W,Y,ut.convert(Jt),ut.convert(le),wt)}finally{let kt=F!==null?St.get(F).__webglFramebuffer:null;Q.bindFramebuffer(z.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(E,k,K,W,Y,wt,Ot,bt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ot!==void 0&&(Rt=Rt[Ot],Array.isArray(Rt)&&(Rt=Rt[0])),Rt)if(k>=0&&k<=E.width-W&&K>=0&&K<=E.height-Y){Q.bindFramebuffer(z.FRAMEBUFFER,Rt);let kt=E.textures[bt],Jt=kt.format,le=kt.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+bt);let Ut=Us(kt);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ce),z.bufferData(z.PIXEL_PACK_BUFFER,wt.byteLength,z.STREAM_READ),z.readPixels(k,K,W,Y,ut.convert(Jt),ut.convert(le),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let en=F!==null?St.get(F).__webglFramebuffer:null;Q.bindFramebuffer(z.FRAMEBUFFER,en);let De=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await R0(z,De,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ce),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,wt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ce),z.deleteSync(De),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,K=0){let W=Math.pow(2,-K),Y=Math.floor(E.image.width*W),wt=Math.floor(E.image.height*W),Ot=k!==null?k.x:0,bt=k!==null?k.y:0;It.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,K,0,0,Ot,bt,Y,wt),Q.unbindTexture()},this.copyTextureToTexture=function(E,k,K=null,W=null,Y=0,wt=0){let Ot,bt,Rt,kt,Jt,le,Ut,ce,en,De=E.isCompressedTexture?E.mipmaps[wt]:E.image;if(K!==null)Ot=K.max.x-K.min.x,bt=K.max.y-K.min.y,Rt=K.isBox3?K.max.z-K.min.z:1,kt=K.min.x,Jt=K.min.y,le=K.isBox3?K.min.z:0;else{let ge=Math.pow(2,-Y);Ot=Math.floor(De.width*ge),bt=Math.floor(De.height*ge),E.isDataArrayTexture?Rt=De.depth:E.isData3DTexture?Rt=Math.floor(De.depth*ge):Rt=1,kt=0,Jt=0,le=0}W!==null?(Ut=W.x,ce=W.y,en=W.z):(Ut=0,ce=0,en=0);let Pe=ut.convert(k.format),Rn=ut.convert(k.type),Ft;k.isData3DTexture?(It.setTexture3D(k,0),Ft=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(It.setTexture2DArray(k,0),Ft=z.TEXTURE_2D_ARRAY):(It.setTexture2D(k,0),Ft=z.TEXTURE_2D),Q.activeTexture(z.TEXTURE0),Q.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),Q.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),Q.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);let Wn=Q.getParameter(z.UNPACK_ROW_LENGTH),ve=Q.getParameter(z.UNPACK_IMAGE_HEIGHT),_r=Q.getParameter(z.UNPACK_SKIP_PIXELS),Pn=Q.getParameter(z.UNPACK_SKIP_ROWS),Vl=Q.getParameter(z.UNPACK_SKIP_IMAGES);Q.pixelStorei(z.UNPACK_ROW_LENGTH,De.width),Q.pixelStorei(z.UNPACK_IMAGE_HEIGHT,De.height),Q.pixelStorei(z.UNPACK_SKIP_PIXELS,kt),Q.pixelStorei(z.UNPACK_SKIP_ROWS,Jt),Q.pixelStorei(z.UNPACK_SKIP_IMAGES,le);let Fs=E.isDataArrayTexture||E.isData3DTexture,xr=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let ge=St.get(E),wn=St.get(k),Bi=St.get(ge.__renderTarget),Ve=St.get(wn.__renderTarget);Q.bindFramebuffer(z.READ_FRAMEBUFFER,Bi.__webglFramebuffer),Q.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let mn=0;mn<Rt;mn++)Fs&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,St.get(E).__webglTexture,Y,le+mn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,St.get(k).__webglTexture,wt,en+mn)),z.blitFramebuffer(kt,Jt,kt+Ot,Jt+bt,Ut,ce,Ut+Ot,ce+bt,z.DEPTH_BUFFER_BIT,z.NEAREST);Q.bindFramebuffer(z.READ_FRAMEBUFFER,null),Q.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||E.isRenderTargetTexture||St.has(E)){let ge=St.get(E),wn=St.get(k);Q.bindFramebuffer(z.READ_FRAMEBUFFER,L),Q.bindFramebuffer(z.DRAW_FRAMEBUFFER,G);for(let Bi=0;Bi<Rt;Bi++)Fs?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ge.__webglTexture,Y,le+Bi):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ge.__webglTexture,Y),xr?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,wn.__webglTexture,wt,en+Bi):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,wn.__webglTexture,wt),Y!==0?z.blitFramebuffer(kt,Jt,kt+Ot,Jt+bt,Ut,ce,Ut+Ot,ce+bt,z.COLOR_BUFFER_BIT,z.NEAREST):xr?z.copyTexSubImage3D(Ft,wt,Ut,ce,en+Bi,kt,Jt,Ot,bt):z.copyTexSubImage2D(Ft,wt,Ut,ce,kt,Jt,Ot,bt);Q.bindFramebuffer(z.READ_FRAMEBUFFER,null),Q.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else xr?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Ft,wt,Ut,ce,en,Ot,bt,Rt,Pe,Rn,De.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(Ft,wt,Ut,ce,en,Ot,bt,Rt,Pe,De.data):z.texSubImage3D(Ft,wt,Ut,ce,en,Ot,bt,Rt,Pe,Rn,De):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,wt,Ut,ce,Ot,bt,Pe,Rn,De.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,wt,Ut,ce,De.width,De.height,Pe,De.data):z.texSubImage2D(z.TEXTURE_2D,wt,Ut,ce,Ot,bt,Pe,Rn,De);Q.pixelStorei(z.UNPACK_ROW_LENGTH,Wn),Q.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ve),Q.pixelStorei(z.UNPACK_SKIP_PIXELS,_r),Q.pixelStorei(z.UNPACK_SKIP_ROWS,Pn),Q.pixelStorei(z.UNPACK_SKIP_IMAGES,Vl),wt===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&z.generateMipmap(Ft),Q.unbindTexture()},this.initRenderTarget=function(E){St.get(E).__webglFramebuffer===void 0&&It.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?It.setTextureCube(E,0):E.isData3DTexture?It.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?It.setTexture2DArray(E,0):It.setTexture2D(E,0),Q.unbindTexture()},this.resetState=function(){O=0,N=0,F=null,Q.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var bu=class extends Hr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ar;t.deleteAttribute("uv");let e=new Vn({side:dn}),n=new Vn,i=new Xr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new ye(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new sl(t,n,6),o=new vn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new ye(t,no(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ye(t,no(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ye(t,no(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new ye(t,no(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let d=new ye(t,no(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let u=new ye(t,no(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function no(s){return new pl({color:0,emissive:16777215,emissiveIntensity:s})}var m_=9,wu=1.19,Os=1.26,up=1.3,Cw=.46,Rw=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2;function Pw(s,{size:t=2048,inner:e,outer:n,font:i,color:r,ticks:a=0,tickColor:o,accentArc:l}){let c=document.createElement("canvas");c.width=c.height=t;let h=c.getContext("2d"),f=t/2;h.fillStyle="#17110d",h.fillRect(0,0,t,t);for(let m=0;m<40;m++){let _=(e+(n-e)*(m/40))/n*f;h.strokeStyle=`rgba(255,240,220,${m%2?.018:.035})`,h.lineWidth=2,h.beginPath(),h.arc(f,f,_,0,Math.PI*2),h.stroke()}let d=(e+(n-e)*.36)/n*f;h.translate(f,f),h.fillStyle=r,h.font=i,h.textAlign="center",h.textBaseline="middle";let u=[...s],p=Math.PI*2/u.length;if(u.forEach((m,_)=>{h.save(),h.rotate(_*p-Math.PI/2+Math.PI/2),h.translate(0,-d),h.fillText(m,0,0),h.restore()}),a){h.strokeStyle=o||r,h.lineWidth=3;for(let m=0;m<a;m++){h.save(),h.rotate(m/a*Math.PI*2);let _=(n-.025)/n*f,y=(n-(m%5?.045:.075))/n*f;h.beginPath(),h.moveTo(0,-_),h.lineTo(0,-y),h.stroke(),h.restore()}}l&&(h.strokeStyle=l,h.lineWidth=7,h.beginPath(),h.arc(0,0,(e+.03)/n*f,0,Math.PI*2),h.stroke());let g=new Ps(c);return g.colorSpace=un,g.anisotropy=8,g}function Iw(s,{w:t=2048,h:e=90,color:n,accent:i}){let r=document.createElement("canvas");r.width=t,r.height=e;let a=r.getContext("2d");a.fillStyle="#16100c",a.fillRect(0,0,t,e),a.fillStyle=n,a.font=`500 ${e*.34}px "Hanken Grotesk", Arial, sans-serif`,a.textAlign="center",a.textBaseline="middle";let o=s.length;for(let c=0;c<2;c++)s.forEach((h,f)=>{let d=(f+c*o)/(o*2)*t+t/(o*4);a.fillStyle=h.accent?i:n,a.fillText(h.t,d,e*.58),a.fillRect(d-1.5,4,3,e*.18)});let l=new Ps(r);return l.colorSpace=un,l.anisotropy=8,l}function Lw(s){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d"),n=e.createRadialGradient(256,256,0,256,256,256);s.forEach(([r,a])=>n.addColorStop(r,a)),e.fillStyle=n,e.fillRect(0,0,512,512);let i=new Ps(t);return i.colorSpace=un,i}function Dw(){let s=document.createElement("canvas");s.width=8,s.height=256;let t=s.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"rgba(255,230,200,.9)"),e.addColorStop(.4,"rgba(255,214,170,.25)"),e.addColorStop(1,"rgba(255,220,180,0)"),t.fillStyle=e,t.fillRect(0,0,8,256);let n=new Ps(s);return n.colorSpace=un,n}function Nw(){let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Ps(s)}var pr=36;function Ow(){let s=new Sn,t=new Float32Array((pr+1)*3),e=[];for(let n=1;n<pr;n++)e.push(0,n+1,n);return e.push(0,1,pr),s.setAttribute("position",new li(t,3)),s.setAttribute("normal",new xe(new Array((pr+1)*3).fill(0).map((n,i)=>i%3===2?1:0),3)),s.setIndex(e),s}function Uw(s,t){let e=s.attributes.position.array;t=Math.min(t,Os-.001);let n=Math.acos(t/Os);e[0]=(t+Os)/2,e[1]=0,e[2]=0;for(let i=0;i<pr;i++){let r=n-i/(pr-1)*n*2;e[(i+1)*3]=Math.cos(r)*Os,e[(i+1)*3+1]=Math.sin(r)*Os,e[(i+1)*3+2]=0}e[3]=t,e[4]=Math.sqrt(Os*Os-t*t),e[pr*3]=t,e[pr*3+1]=-Math.sqrt(Os*Os-t*t),s.attributes.position.needsUpdate=!0,s.computeBoundingSphere()}function g_(s,{reduced:t=!1,onFrame:e,getAvoid:n}={}){let i;try{i=new vu({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return null}if(!i.getContext())return null;let r=()=>innerWidth<760;i.setPixelRatio(Math.min(devicePixelRatio||1,r()?1.5:1.75)),i.outputColorSpace=un,i.toneMapping=Sl,i.toneMappingExposure=1.05,i.setClearColor(0,0);let a=new Hr,o=new to(i);a.environment=o.fromScene(new bu,.04).texture,a.environmentIntensity=.62;let l=new zn(30,1,.1,100);l.position.set(0,0,9);let c=new bi,h=new bi;c.add(h),a.add(c);let f=new Vn({color:"#1b1511",metalness:.78,roughness:.36,envMapIntensity:1.1,side:Gn}),d=new Vn({color:"#211913",metalness:.55,roughness:.5,envMapIntensity:.9,side:Gn}),u=new Vn({color:"#130e0b",metalness:.15,roughness:.78,side:Gn}),p=new Vn({color:"#0a0705",metalness:.1,roughness:.95,side:dn}),g=(Q,Tt,St=128)=>{let It=new hl(Q.map(([b,H])=>new Wt(b,H)),St);It.rotateX(-Math.PI/2);let C=new ye(It,Tt);return h.add(C),C};g([[1.06,2.6],[1.08,2.3],[1.22,2.25],[1.24,1.5],[1.36,1.45],[1.37,1]],d);let m=[];for(let Q=0;Q<=34;Q++){let Tt=1-Q*.026;m.push([Q%2?1.47:1.5,Tt])}g([[1.37,1],...m,[1.44,.1]],u,160),g([[1.44,.1],[1.55,.05],[1.56,-.24],[1.52,-.3],[1.43,-.32]],f);let _=new ye(new Wr(1.372,1.372,.38,160,1,!0),new Vn({map:Iw([{t:"1.4"},{t:"2"},{t:"2.8",accent:!0},{t:"4"},{t:"5.6"},{t:"8"},{t:"11"},{t:"16"}],{color:"#d8c8ae",accent:"#e2a05b"}),metalness:.4,roughness:.55}));_.rotation.x=Math.PI/2,_.position.z=-1.22,h.add(_);let y=Pw("SHIRLY P. DELANKAWALA  \u2022  TELEDRAMA DIRECTOR  \u2022  COLOMBO  \u2022  T1.5  \u2022  \xD8 95 MM  \u2022  ",{inner:wu,outer:1.43,font:'600 40px "Hanken Grotesk", Arial, sans-serif',color:"rgba(222,206,180,.92)",ticks:120,tickColor:"rgba(222,206,180,.35)"}),T=new ye(new dl(wu,1.43,160,1),new Vn({map:y,metalness:.5,roughness:.42}));T.position.z=.32,h.add(T);let v=new Vn({color:"#c9803f",metalness:.6,roughness:.28,emissive:"#5a2e0c",emissiveIntensity:.4}),M=new ye(new fl(1.495,.018,12,200),v);M.position.z=.02,h.add(M);let w=new ye(new Wr(wu,wu,.9,128,1,!0),p);w.rotation.x=Math.PI/2,w.position.z=-.1,h.add(w);let x=new bi;x.position.z=-.38,h.add(x);let S=new Vn({color:"#2a211b",metalness:.7,roughness:.42,side:Gn,envMapIntensity:.55}),P=[];for(let Q=0;Q<m_;Q++){let Tt=new bi;Tt.rotation.z=Q/m_*Math.PI*2;let St=new bi;St.rotation.x=.12,St.rotation.y=-.06,St.position.z=Q*.0015;let It=Ow(),C=new ye(It,S);St.add(C),Tt.add(St),x.add(Tt),P.push(It)}let A=new sr({map:Lw([[0,"rgba(255,246,228,1)"],[.25,"rgba(255,214,164,.95)"],[.6,"rgba(214,132,70,.45)"],[1,"rgba(120,60,20,0)"]]),transparent:!0,depthWrite:!1,blending:dr}),D=new ye(new Xa(1.22,64),A);D.position.z=-1,h.add(D);let I=new ye(new Xa(1.2,64),new sr({color:"#0d0907"}));I.position.z=-1.05,h.add(I);let V=new ye(new $a(2.6,64,16,0,Math.PI*2,0,.45),new qa({color:"#ffffff",metalness:0,roughness:.04,transparent:!0,opacity:.05,envMapIntensity:1.1,iridescence:.8,iridescenceIOR:1.35,depthWrite:!1}));V.rotation.x=Math.PI/2,V.position.z=-3.2,h.add(V);let L=new ye(new $a(3.2,96,20,0,Math.PI*2,0,.385),new qa({color:"#ffffff",metalness:0,roughness:.02,transparent:!0,opacity:.045,envMapIntensity:1.3,clearcoat:1,clearcoatRoughness:.02,iridescence:1,iridescenceIOR:1.32,depthWrite:!1}));L.rotation.x=Math.PI/2,L.position.z=-2.86,h.add(L);let G=new ye(new cl(2.2,7,64,1,!0),new sr({map:Dw(),transparent:!0,opacity:.07,depthWrite:!1,blending:dr,side:Gn}));G.rotation.x=-Math.PI/2,G.position.z=3.8,h.add(G);let O=r()?90:170,N=new Sn,F=new Float32Array(O*3),B=new Float32Array(O);for(let Q=0;Q<O;Q++){let Tt=Math.random(),St=Math.sqrt(Math.random())*(.5+Tt*1.5),It=Math.random()*Math.PI*2;F[Q*3]=Math.cos(It)*St,F[Q*3+1]=Math.sin(It)*St,F[Q*3+2]=.5+Tt*4.8,B[Q]=Math.random()*100}N.setAttribute("position",new li(F,3));let R=F.slice(),J=new Wa({size:.022,map:Nw(),transparent:!0,opacity:.55,depthWrite:!1,blending:dr,color:new Kt("#ffdcb0"),sizeAttenuation:!0}),pt=new rl(N,J);h.add(pt);let Pt=new $r("#ffd4a3",2.4);Pt.position.set(-4,3,6),a.add(Pt);let Z=new $r("#ffe2bd",1.7);Z.position.set(5,2,-4),a.add(Z);let lt=new $r("#ffe6c8",.5);lt.position.set(0,-4,3),a.add(lt);let gt=new Xr("#ffe2bf",7,12,1.6);gt.position.set(0,0,3.5),a.add(gt);let at={open:0,progress:0,pointer:new Wt(0,0),pointerT:new Wt(0,0),theme:"night",visible:!0,active:!0,shut:1,t:0,lastR:-1},dt=new Wt(.68,.45),Lt=new $,me=new $,Et={x:.68,y:.44,r:.18},Xt=1,Nt=1,Bt=1,fe=9,ue=1.56,q=null;function Qt(){let Q=s.clientWidth||innerWidth,Tt=s.clientHeight||innerHeight;i.setSize(Q,Tt,!1),l.aspect=Q/Tt,l.updateProjectionMatrix();let St=Math.tan(Kr.degToRad(l.fov/2))*fe;Nt=St*l.aspect,Bt=St;let It=Tt/(2*St);q=n?.()||q;let C=(q?.bar??76)+10,b,H,ot;if(Q<600||Q<Tt*.9){let nt=q?q.copyTop-C-12:Tt*.4;b=Math.max(Q*.26,Math.min(Q*.4,nt/2)),H=Q*.46,ot=C+b+4}else{b=Math.min(Q*.19,Tt*.34);let nt=Math.min(Q*.12,Tt*.2),ft=Math.max(Q*.075,56);for(;H=Math.min(Q,q?.copyRight??Q)-ft-b*1.18,ot=C+b,!(!q||b<=nt);){let mt=Math.max(0,H-q.right),X=Math.max(0,q.top-ot);if(Math.hypot(mt,X)>=b*.88)break;b*=.96}q&&(ot+=Math.max(0,q.top-(ot+b))*.35)}dt.set(H/Q,ot/Tt),Xt=b/(ue*It)}function Xe(Q){at.theme=Q;let Tt=Q==="night";J.blending=Tt?dr:ur,J.color.set(Tt?"#ffdcb0":"#6b4a33"),J.opacity=Tt?.55:.35,J.needsUpdate=!0,G.visible=Tt,i.toneMappingExposure=Tt?1.05:1.12,Pt.intensity=Tt?2.4:2.8,t&&ee()}function ee(){let Q=at.progress,Tt=Rw(Math.min(1,Q*1.05)),St=t?0:Math.sin(at.t*.55)*.025,It=Cw*at.open+St*at.open,C=Kr.lerp(It,up,Math.pow(Tt,1.4))*at.shut;Math.abs(C-at.lastR)>5e-4&&(P.forEach(ct=>Uw(ct,Math.max(1e-4,C))),at.lastR=C),x.rotation.z=(1-C/up)*1.15+.2,A.opacity=.35+C/up*.65,at.pointer.lerp(at.pointerT,t?1:.06);let b=at.pointer.x,H=at.pointer.y,ot=Kr.lerp(dt.x,.5,Tt),nt=Kr.lerp(dt.y,.5,Tt);c.position.x=(ot-.5)*2*Nt,c.position.y=-(nt-.5)*2*Bt;let ft=Xt*(1+Tt*.15);c.scale.setScalar(ft);let mt=1-Tt;if(h.rotation.y=(-.42+b*.22)*mt,h.rotation.x=(.14-H*.16)*mt,h.rotation.z=at.t*.01,l.position.z=Kr.lerp(9,1.15,Math.pow(Tt,1.8)),l.position.x=c.position.x*Math.pow(Tt,1.5),l.position.y=c.position.y*Math.pow(Tt,1.5),l.lookAt(c.position.x*Tt,c.position.y*Tt,0),gt.position.set(c.position.x-1.8+b*3.2,c.position.y+1.4-H*2.4,2.4),!t){let ct=N.attributes.position.array;for(let U=0;U<O;U++){let tt=B[U];ct[U*3]=R[U*3]+Math.sin(at.t*.2+tt)*.12,ct[U*3+1]=R[U*3+1]+Math.sin(at.t*.07+tt*1.7)*.5+Math.cos(at.t*.3+tt)*.06}N.attributes.position.needsUpdate=!0}J.opacity=(at.theme==="night"?.55:.35)*at.open*(1-Tt),G.material.opacity=.07*at.open*(1-Tt),i.render(a,l);let X=Lt.setFromMatrixPosition(c.matrixWorld).project(l);Et.x=(X.x+1)/2,Et.y=(1-X.y)/2;let et=me.set(1.55,0,0).applyMatrix4(c.matrixWorld).project(l);Et.r=Math.abs(et.x-X.x)/2,e&&e({x:Et.x,y:Et.y,r:C,progress:Q})}let ne=0,Le=performance.now(),Ae=0,z=Math.min(devicePixelRatio||1,r()?1.5:1.75);function pe(Q){if(ne=requestAnimationFrame(pe),!at.visible||!at.active||document.hidden){Le=Q;return}let Tt=Q-Le,St=Math.min(.05,Tt/1e3);Le=Q,at.t+=St,Tt>28&&Tt<400?Ae++:Ae>0&&(Ae-=.5),Ae>40&&z>1&&(z=Math.max(1,z-.35),Ae=0,i.setPixelRatio(z),Qt()),ee()}Qt();let oe=new ResizeObserver(()=>{Qt(),ee()});oe.observe(s);let Ht=new IntersectionObserver(([Q])=>{at.visible=Q.isIntersecting},{threshold:0});return Ht.observe(s),t||(ne=requestAnimationFrame(pe)),ee(),{setPointer(Q,Tt){at.pointerT.set(Q,Tt),t&&ee()},setProgress(Q){at.progress=Q,t&&ee()},setOpen(Q){at.open=Q,t&&ee()},setActive(Q){at.active=Q,Q&&ee()},setShutter(Q){at.shut=Q,(t||!at.active)&&ee()},hit(Q,Tt){let St=s.getBoundingClientRect(),It=Q-(St.left+Et.x*St.width),C=Tt-(St.top+Et.y*St.height);return Math.hypot(It,C)<Et.r*St.width*1.05},get progress(){return at.progress},get open(){return at.open},setTheme:Xe,relayout(){Qt(),ee()},render:ee,destroy(){cancelAnimationFrame(ne),oe.disconnect(),Ht.disconnect(),i.dispose()}}}function __(s){let t=s.getContext("2d"),e=0,n=0,i=0,r=0,a=0,o=1,l=0;function c(){let p=Math.min(devicePixelRatio||1,1.5);e=innerWidth,n=innerHeight,s.width=Math.round(e*p),s.height=Math.round(n*p),t.setTransform(p,0,0,p,0,0),i=e/2,r=n/2,a=Math.hypot(e,n)/2+60,h(o)}function h(p){if(o=p,t.clearRect(0,0,e,n),p>=1)return;let g=Math.max(0,p)*a,m=(1-p)*1.05,_=a*2.4;for(let y=0;y<9;y++){let T=y/9*Math.PI*2+m,v=Math.cos(T),M=Math.sin(T),w=-M,x=v,S=i+v*g,P=r+M*g,A=_;t.beginPath(),t.moveTo(S-w*A,P-x*A),t.lineTo(S+w*A*.35,P+x*A*.35),t.lineTo(S+w*A*.35+v*_,P+x*A*.35+M*_),t.lineTo(S-w*A+v*_,P-x*A+M*_),t.closePath();let D=t.createLinearGradient(S,P,S+v*a,P+M*a);D.addColorStop(0,y%2?"#2A1F17":"#261C15"),D.addColorStop(.35,"#1C140F"),D.addColorStop(1,"#130D0A"),t.fillStyle=D,t.shadowColor="rgba(0,0,0,.55)",t.shadowBlur=28,t.fill(),t.shadowBlur=0,t.beginPath(),t.moveTo(S-w*A,P-x*A),t.lineTo(S+w*A*.35,P+x*A*.35),t.strokeStyle="rgba(234,223,204,.16)",t.lineWidth=1.2,t.stroke()}if(p<.25){let y=t.createRadialGradient(i,r,0,i,r,160);y.addColorStop(0,`rgba(226,160,91,${.14*(1-p*4)})`),y.addColorStop(1,"rgba(226,160,91,0)"),t.fillStyle=y,t.fillRect(i-160,r-160,320,320)}}function f(p,g,m){cancelAnimationFrame(l),s.classList.remove("is-idle");let _=o,y=performance.now();return new Promise(T=>{let v=M=>{let w=Math.min(1,(M-y)/g);h(_+(p-_)*m(w)),w<1?l=requestAnimationFrame(v):(p>=1&&s.classList.add("is-idle"),T())};l=requestAnimationFrame(v)})}let d=p=>p*p*p,u=p=>1-Math.pow(1-p,4);return addEventListener("resize",c),c(),{set(p){s.classList.toggle("is-idle",p>=1),h(p)},open:(p=1100)=>f(1,p,u),close:(p=520)=>f(0,p,d),async transition(p){s.style.pointerEvents="auto",await f(0,520,d),await p?.(),await new Promise(g=>setTimeout(g,90)),await f(1,780,u),s.style.pointerEvents=""}}}var Fi=(s,t,e="")=>`<svg viewBox="0 0 2390 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="${s}-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" style="stop-color:var(--art-bg)"/>
        <stop offset="1" style="stop-color:var(--art-low)"/>
      </linearGradient>
      <radialGradient id="${s}-halo" cx="50%" cy="50%" r="50%">
        <stop offset="0" style="stop-color:var(--art-ink);stop-opacity:.22"/>
        <stop offset="1" style="stop-color:var(--art-ink);stop-opacity:0"/>
      </radialGradient>
      ${e}
    </defs>
    ${t}
  </svg>`,Ei=(s,t)=>Array.from({length:s},(e,n)=>t(n)).join(""),Fw=(s,t)=>Math.sin(s*.0021+t)*.55+Math.sin(s*.0057+t*2.3)*.3+Math.sin(s*.013+t*4.1)*.15,Nl=(s,t,e)=>{let n="M -40 1000";for(let i=-40;i<=2430;i+=60)n+=` L ${i} ${(s-Fw(i,e)*t).toFixed(1)}`;return n+" L 2430 1000 Z"},x_={ridge(s){return Fi(s,`
      <rect width="2390" height="1000" fill="url(#${s}-sky)"/>
      <g fill="none" class="a-ink-stroke">
        ${Ei(7,n=>`<path class="anim-ripple" style="animation-delay:${n*-1.1}s" d="M ${965-n*85} 470 A ${90+n*85} ${90+n*85} 0 0 1 ${1145+n*85} 470" stroke-width="${2-n*.16}" opacity="${.55-n*.07}"/>`)}
      </g>
      <circle cx="1055" cy="470" r="9" class="a-acc"/>
      <circle cx="1055" cy="470" r="160" fill="url(#${s}-halo)"/>
      <g class="anim-drift"><path d="${Nl(600,130,1.3)}" class="a-low" opacity=".7"/></g>
      <path d="${Nl(680,110,2.9)}" class="a-mid" opacity=".75"/>
      <path d="${Nl(770,90,4.4)}" class="a-mid"/>
      <path d="${Nl(860,60,6.1)}" class="a-bg"/>
      <path d="${Nl(860,60,6.1).replace(/ L [-\d.]+ 1000 Z$/,"").replace(/^M -40 1000/,"M -40 860")}" fill="none" class="a-ink-stroke" stroke-width="1.6" opacity=".35"/>
    `)},dusk(s){return Fi(s,`
      <rect width="2390" height="1000" fill="url(#${s}-sky)"/>
      <circle cx="1195" cy="640" r="520" fill="url(#${s}-halo)"/>
      <g class="anim-sink" clip-path="url(#${s}-above)">
        <circle cx="1195" cy="680" r="250" class="a-ink" opacity=".92"/>
        ${Ei(7,e=>`<rect x="895" y="${620-e*34+e*e*1.2}" width="600" height="${10-e*1.2}" class="a-bg"/>`)}
      </g>
      <rect y="640" width="2390" height="360" class="a-mid"/>
      <line x1="0" x2="2390" y1="640" y2="640" class="a-acc-stroke" stroke-width="3"/>
      ${Ei(9,e=>{let n=460-e*44+e%2*60;return`<rect class="a-ink anim-shimmer" style="animation-delay:${e*-.4}s" x="${1195-n/2}" y="${666+e*30}" width="${n}" height="${5-e*.35}" opacity="${.5-e*.045}"/>`})}
    `,`<clipPath id="${s}-above"><rect width="2390" height="640"/></clipPath>`)},ripples(s){return Fi(s,`
      <rect width="2390" height="1000" class="a-bg"/>
      <rect y="300" width="2390" height="700" fill="url(#${s}-sky)" opacity=".9"/>
      <g fill="none" class="a-ink-stroke">
        ${Ei(12,e=>{let n=160+e*e*14+e*60;return`<ellipse class="anim-ripple" style="animation-delay:${e*-.7}s" cx="1195" cy="600" rx="${n}" ry="${n*.26}" stroke-width="${2.2-e*.12}" opacity="${.75-e*.055}"/>`})}
      </g>
      <g class="anim-float">
        ${(()=>{let a=p=>[1345+250*Math.cos(p*Math.PI/180),610+64*Math.sin(p*Math.PI/180)],[o,l]=a(166),[c,h]=a(194),f=1345-250*.62,d=604,u=(p,g,m,_)=>{let y=(p-90)*Math.PI/180,T=y+Math.PI/2,v=f+Math.cos(y)*g,M=d+Math.sin(y)*g,w=f+Math.cos(y)*g*.5,x=d+Math.sin(y)*g*.5;return`<path class="${_}" d="M ${f} ${d} Q ${w+Math.cos(T)*m} ${x+Math.sin(T)*m} ${v} ${M} Q ${w-Math.cos(T)*m} ${x-Math.sin(T)*m} ${f} ${d} Z"/>`};return`
            <ellipse cx="1345" cy="620" rx="280" ry="${38.4}" class="a-bg" opacity=".5"/>
            <path d="M 1345 610 L ${o} ${l} A 250 64 0 1 0 ${c} ${h} Z" class="a-mid"/>
            <path d="M 1345 610 L 1570 602" class="a-ink-stroke" stroke-width="1.5" opacity=".35"/>
            ${u(-58,92,24,"a-low")}${u(58,92,24,"a-low")}
            ${u(-32,120,26,"a-ink")}${u(32,120,26,"a-ink")}
            ${u(0,140,28,"a-acc")}`})()}
      </g>
    `)},facets(s){return Fi(s,`
      <rect width="2390" height="1000" fill="url(#${s}-sky)"/>
      <g class="a-ink-stroke" stroke-width="1.4" opacity=".28" fill="none">
        <line x1="0" y1="500" x2="2390" y2="500"/>
        <line x1="1195" y1="0" x2="1195" y2="1000"/>
        <circle cx="1195" cy="500" r="${468.59999999999997}"/>
        <line x1="295" y1="0" x2="2095" y2="1000"/>
        <line x1="2095" y1="0" x2="295" y2="1000"/>
      </g>
      <g class="anim-turn" style="transform-origin:1195px 500px">
        <polygon points="1195,170 1525,500 1195,500" class="a-mid"/>
        <polygon points="1525,500 1195,830 1195,500" class="a-low"/>
        <polygon points="1195,830 865,500 1195,500" class="a-ink" opacity=".86"/>
        <polygon points="865,500 1195,170 1195,500" class="a-low" opacity=".6"/>
        <polygon points="1195,170 1360,335 1195,434" class="a-acc"/>
      </g>
    `)},between(s){return Fi(s,`
      <rect width="2390" height="1000" fill="url(#${s}-sky)"/>
      <circle cx="1195" cy="250" r="16" class="a-acc"/>
      <circle cx="1195" cy="250" r="180" fill="url(#${s}-halo)"/>
      <path d="M -105 1000 C 295 440, 775 500, 1075 1000 Z" class="a-mid"/>
      <path d="M 2495 1000 C 2095 420, 1615 520, 1315 1000 Z" class="a-low"/>
      ${Ei(6,e=>`<rect x="${555+e*52}" y="${600-Math.sin(e/1.6)*40}" width="30" height="${36+e%3*14}" class="a-ink" opacity=".8"/>`)}
      ${Ei(5,e=>`<rect x="${1575+e*56}" y="${590-Math.cos(e/1.4)*34}" width="30" height="${34+e%2*16}" class="a-ink" opacity=".75"/>`)}
      <path class="a-ink-stroke anim-dash" fill="none" stroke-width="4" stroke-dasharray="18 22"
        d="M 1195 1010 C 1115 840, 1315 740, 1205 660 S 1165 550, 1195 280"/>
    `)},altar(s){return Fi(s,`
      <rect width="2390" height="1000" fill="url(#${s}-sky)"/>
      ${Ei(5,r=>`<rect x="${295+r*360}" y="0" width="2" height="1000" class="a-ink" opacity=".07"/>`)}
      <path d="M 1015 850 V 370 A 180 180 0 0 1 1375 370 V 850 Z" class="a-mid"/>
      <path d="M 1065 850 V 390 A 130 130 0 0 1 1325 390 V 850 Z" class="a-bg"/>
      <circle cx="1195" cy="560" r="210" fill="url(#${s}-halo)" class="anim-flicker"/>
      <g class="anim-flicker" style="transform-origin:1195px 640px">
        <path d="M 1195 490 C 1235 560, 1229 616, 1195 630 C 1161 616, 1155 560, 1195 490 Z" class="a-ink"/>
        <path d="M 1195 550 C 1211 584, 1209 616, 1195 624 C 1181 616, 1179 584, 1195 550 Z" class="a-acc"/>
      </g>
      <rect x="1155" y="632" width="80" height="18" class="a-ink" opacity=".7"/>
      ${Ei(3,r=>`<rect x="${935-r*70}" y="${850+r*34}" width="${520+r*140}" height="34" class="${r%2?"a-low":"a-mid"}"/>`)}
    `)},bloom(s){return Fi(s,`
      <rect width="2390" height="1000" fill="url(#${s}-sky)"/>
      <circle cx="1195" cy="500" r="420" fill="none" class="a-ink-stroke" stroke-width="1.5" opacity=".25"/>
      <circle cx="1195" cy="500" r="300" fill="url(#${s}-halo)"/>
      <g class="anim-spin" style="transform-origin:1195px 500px">
        ${Ei(5,e=>`<ellipse cx="1195" cy="350" rx="96" ry="160" transform="rotate(${e*72} 1195 500)" class="a-mid" stroke-width="2" style="stroke:var(--art-ink);stroke-opacity:.5"/>`)}
        ${Ei(5,e=>`<line x1="1195" y1="500" x2="1195" y2="270" transform="rotate(${e*72} 1195 500)" class="a-ink-stroke" stroke-width="1.5" opacity=".45"/>`)}
      </g>
      <circle cx="1195" cy="500" r="44" class="a-acc"/>
      <circle cx="1195" cy="500" r="18" class="a-ink"/>
    `)},plume(s){return Fi(s,`
      <rect width="2390" height="1000" fill="url(#${s}-sky)"/>
      <g class="anim-sway" style="transform-origin:815px 1000px" fill="none">
        ${Ei(22,t=>{let e=t/21,n=995+e*700,i=120+Math.sin(e*Math.PI)*120;return`<path d="M 815 1020 C ${895+e*120} ${700-e*140}, ${1075+e*360} ${360-e*60}, ${n} ${i}" class="${t===14?"a-acc-stroke":"a-ink-stroke"}" stroke-width="${t===14?5:2.2}" opacity="${t===14?1:.2+Math.sin(e*Math.PI)*.55}"/>`})}
      </g>
      <circle cx="1755" cy="240" r="60" class="a-mid"/>
    `)},junction(s){return Fi(s,`
      <rect width="2390" height="380" fill="url(#${s}-sky)"/>
      <rect y="380" width="2390" height="620" class="a-low"/>
      <polygon points="1165,380 1225,380 1495,1000 895,1000" class="a-mid"/>
      <polygon points="1169,384 1191,384 -55,1000 -55,790" class="a-mid"/>
      <polygon points="1199,384 1221,384 2445,790 2445,1000" class="a-mid"/>
      <g class="a-ink-stroke anim-dash" stroke-width="5" stroke-dasharray="30 34" fill="none" opacity=".75">
        <line x1="1195" y1="1000" x2="1195" y2="388"/>
        <line x1="-55" y1="900" x2="1181" y2="386"/>
        <line x1="2445" y1="900" x2="1209" y2="386"/>
      </g>
      <line x1="0" x2="2390" y1="380" y2="380" class="a-ink-stroke" stroke-width="2" opacity=".5"/>
      <circle cx="1195" cy="380" r="12" class="a-acc"/>
      <circle cx="1195" cy="380" r="240" fill="url(#${s}-halo)"/>
    `)},seven(s){return Fi(s,`
      <rect width="2390" height="1000" fill="url(#${s}-sky)"/>
      <g class="anim-drift"><circle cx="1525" cy="210" r="54" class="a-acc"/></g>
      ${[300,420,360,560,400,470,330].map((n,i)=>{let a=721+i*138;return`<path d="M ${a} 860 V ${860-n+60} A 60 60 0 0 1 ${a+120} ${860-n+60} V 860 Z" class="${i%2?"a-low":"a-mid"}"/>`}).join("")}
      <rect y="860" width="2390" height="140" class="a-mid"/>
      <line x1="0" x2="2390" y1="860" y2="860" class="a-ink-stroke" stroke-width="2" opacity=".55"/>
    `)},monolith(s){return Fi(s,`
      <rect width="2390" height="1000" fill="url(#${s}-sky)"/>
      <g class="a-ink-stroke anim-rain" stroke-width="2" opacity=".22">
        ${Ei(40,t=>`<line x1="${-400+t*80}" y1="-40" x2="${-100+t*80}" y2="1040"/>`)}
      </g>
      <rect x="1085" y="160" width="220" height="700" class="a-mid"/>
      <rect x="1085" y="160" width="220" height="700" fill="url(#${s}-halo)"/>
      <rect x="1085" y="160" width="220" height="5" class="a-acc"/>
      <rect y="860" width="2390" height="140" class="a-low"/>
      <ellipse cx="1195" cy="864" rx="300" ry="14" class="a-ink" opacity=".18"/>
    `)},pages(s){return Fi(s,`
      <rect width="2390" height="1000" fill="url(#${s}-sky)"/>
      <g class="anim-fan">
        ${Ei(11,n=>`<rect x="1189" y="260" width="12" height="600" rx="2" transform="rotate(${-50+n*10} 1195 860)" class="${n===7?"a-acc":n%2?"a-mid":"a-ink"}" opacity="${n===7?1:.35+n%3*.2}"/>`)}
      </g>
      <path d="M 575 860 Q 1195 790 1815 860" fill="none" class="a-ink-stroke" stroke-width="3" opacity=".6"/>
      <rect y="860" width="2390" height="140" class="a-mid"/>
    `)}};function y_(s,t){return(x_[s]||x_.facets)(t)}var _e=null,jr=null,Fl=null,Ul=null,mr=!1,v_=new Set;function Bw(){if(_e)return;let s=window.AudioContext||window.webkitAudioContext;if(!s)return;_e=new s,jr=_e.createGain(),jr.gain.value=.9,jr.connect(_e.destination);let t=_e.sampleRate*2;Fl=_e.createBuffer(1,t,_e.sampleRate);let e=Fl.getChannelData(0),n=0;for(let i=0;i<t;i++){let r=Math.random()*2-1;n=(n+.02*r)/1.02,e[i]=i%2?r*.5:n*3.5}}function Ol({t:s=0,dur:t=.012,freq:e=4200,q:n=1.5,gain:i=.05,type:r="bandpass"}={}){if(!mr||!_e)return;let a=_e.currentTime+s,o=_e.createBufferSource();o.buffer=Fl;let l=_e.createBiquadFilter();l.type=r,l.frequency.value=e,l.Q.value=n;let c=_e.createGain();c.gain.setValueAtTime(0,a),c.gain.linearRampToValueAtTime(i,a+.002),c.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l).connect(c).connect(jr),o.start(a,Math.random()*1.5),o.stop(a+t+.05)}function S_(s=0,t=90,e=.06){if(!mr||!_e)return;let n=_e.currentTime+s,i=_e.createOscillator();i.frequency.setValueAtTime(t,n),i.frequency.exponentialRampToValueAtTime(t*.5,n+.08);let r=_e.createGain();r.gain.setValueAtTime(e,n),r.gain.exponentialRampToValueAtTime(1e-4,n+.1),i.connect(r).connect(jr),i.start(n),i.stop(n+.12)}function kw(){if(!_e||Ul)return;let s=_e.createBufferSource();s.buffer=Fl,s.loop=!0;let t=_e.createBiquadFilter();t.type="lowpass",t.frequency.value=520;let e=_e.createGain();e.gain.value=0;let n=_e.createOscillator();n.frequency.value=24;let i=_e.createGain();i.gain.value=.006,n.connect(i).connect(e.gain),s.connect(t).connect(e).connect(jr),s.start(),n.start(),e.gain.linearRampToValueAtTime(.016,_e.currentTime+1.2),Ul={src:s,lfo:n,g:e}}function zw(){if(!Ul)return;let{src:s,lfo:t,g:e}=Ul;e.gain.cancelScheduledValues(_e.currentTime),e.gain.setValueAtTime(e.gain.value,_e.currentTime),e.gain.linearRampToValueAtTime(0,_e.currentTime+.4),setTimeout(()=>{try{s.stop(),t.stop()}catch{}},500),Ul=null}var ei={get enabled(){return mr},onChange(s){v_.add(s)},async set(s){if(s){if(Bw(),!_e)return;try{await _e.resume()}catch{return}mr=!0,kw(),this.shutter()}else mr=!1,zw();try{localStorage.setItem("spd-sound",s?"1":"0")}catch{}v_.forEach(t=>t(mr))},toggle(){return this.set(!mr)},tick(){Ol({dur:.01,freq:5200,gain:.018})},click(){Ol({dur:.02,freq:2600,gain:.05}),S_(0,140,.025)},shutter(){Ol({dur:.025,freq:3200,gain:.07}),S_(0,110,.04),Ol({t:.06,dur:.03,freq:2400,gain:.05})},whoosh(s=.55){if(!mr||!_e)return;let t=_e.currentTime,e=_e.createBufferSource();e.buffer=Fl;let n=_e.createBiquadFilter();n.type="bandpass",n.Q.value=.9,n.frequency.setValueAtTime(300,t),n.frequency.exponentialRampToValueAtTime(2600,t+s*.6),n.frequency.exponentialRampToValueAtTime(900,t+s);let i=_e.createGain();i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.07,t+s*.35),i.gain.linearRampToValueAtTime(0,t+s),e.connect(n).connect(i).connect(jr),e.start(t,Math.random()),e.stop(t+s+.05)},iris(){this.whoosh(.7);for(let s=0;s<6;s++)Ol({t:s*.05,dur:.012,freq:3e3+s*300,gain:.02})}};var dp=s=>String(s).padStart(2,"0"),hi=s=>String(s??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Vw=s=>s.split(" ").map(t=>`<span class="word">${[...t].map(e=>`<span class="ch">${hi(e)}</span>`).join("")}</span>`).join(" "),Tu=s=>s.years[1]&&s.years[1]!==s.years[0]?`${s.years[0]}\u2013${s.years[1]}`:`${s.years[0]}`,fp=s=>({won:(s.awards||[]).filter(t=>t[0]==="won").length,nom:(s.awards||[]).filter(t=>t[0]==="nominated").length}),M_=(s,t,e)=>`${s} ${s===1?t:e}`;function b_(s,t,{gsap:e,reduced:n,onAwards:i}){let r=s.querySelector("#showFrame"),a=s.querySelector("#showSlides"),o=s.querySelector("#showText"),l=s.querySelector(".show__leak"),c=s.querySelector("#sheet"),h=document.getElementById("slideNow"),f=s.querySelector("#pauseSlide");document.getElementById("slideAll").textContent=dp(t.length);let d=(F,B)=>F.still?`<img src="${hi(F.still)}" alt="" loading="lazy" decoding="async">`:y_(F.art,B);a.innerHTML=t.map((F,B)=>`
    <article class="slide" data-i="${B}" aria-roledescription="slide" aria-label="${B+1} of ${t.length}: ${hi(F.title)}">
      <div class="slide__art">${d(F,`a${B}`)}</div>
      <div class="slide__vignette"></div>
      <p class="slide__year">${F.isNew?'<span class="slide__new">New</span>':""}${hi(Tu(F))}</p>
      <h3 class="slide__title${F.title.length>13?" is-long":""}" aria-label="${hi(F.title)}"><span aria-hidden="true">${Vw(F.title)}</span></h3>
    </article>`).join(""),c.innerHTML=t.map((F,B)=>`
    <li><button type="button" class="cell" data-go="${B}" aria-current="false" aria-label="${hi(F.title)}, ${hi(Tu(F))}">
      <span class="cell__art">${d(F,`t${B}`)}<span class="cell__n">${dp(B+1)}</span></span>
      <span class="cell__cap"><span class="cell__title">${hi(F.title)}</span><span class="cell__year">${hi(Tu(F))}</span></span>
    </button></li>`).join("");let u=[...c.querySelectorAll(".cell")],p=[...a.children],g=0,m=!1,_=!1,y=!1,T=!1,v=!1,M=null,w=7,x=(F,B)=>{let R=fp(F),J=[F.channel,F.episodes?`${F.episodes} episodes`:""].filter(Boolean).join(", "),pt=R.won||R.nom?`<button type="button" class="show__awards" data-awards="${B}">${[R.won?M_(R.won,"award","awards"):"",R.nom?M_(R.nom,"nomination","nominations"):""].filter(Boolean).join(" and ")}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg></button>`:"";return`
      <div class="show__meta">
        <span class="show__type">${hi(F.type||"Teledrama")}</span>
        <strong>${hi(F.title)}</strong>
        ${J?`<span>${hi(J)}</span>`:""}
        <span>${hi(Tu(F))}</span>
      </div>
      <div class="show__desc">
        <p class="show__note">${hi(F.note)}</p>
        ${pt}
      </div>`};function S(F){if(u.forEach((B,R)=>{B.classList.toggle("is-active",R===F),B.setAttribute("aria-current",R===F?"true":"false"),R!==F&&B.style.setProperty("--p",0)}),h.textContent=dp(F+1),c.scrollWidth>c.clientWidth+4){let B=u[F].parentElement;c.scrollTo({left:B.offsetLeft-(c.clientWidth-B.offsetWidth)/2,behavior:n?"auto":"smooth"})}}p[0].classList.add("is-active"),o.innerHTML=x(t[0],0),S(0),c.addEventListener("click",F=>{let B=F.target.closest(".cell");B&&I(+B.dataset.go)}),o.addEventListener("click",F=>{let B=F.target.closest("[data-awards]");B&&i&&i(+B.dataset.awards)});let P=()=>o.setAttribute("aria-live",v||n?"polite":"off");function A(){if(D(),P(),n||v||!_||y||T||document.hidden)return;let F=u[g],B={p:parseFloat(F.style.getPropertyValue("--p"))||0};M=e.to(B,{p:1,duration:w*(1-B.p),ease:"none",onUpdate:()=>F.style.setProperty("--p",B.p.toFixed(4)),onComplete:()=>I(g+1,1,!0)})}function D(){M&&(M.kill(),M=null)}n&&(v=!0,f.hidden=!0),f.addEventListener("click",()=>{v=!v,f.setAttribute("aria-pressed",v?"true":"false"),f.setAttribute("aria-label",v?"Play slideshow":"Pause slideshow"),f.classList.toggle("is-paused",v),v?D():A(),P()});function I(F,B,R=!1){let J=t.length;if(F=(F+J)%J,m||F===g)return;m=!0,D(),R||ei.whoosh(.6),B=B||(F>g?1:-1);let pt=p[g],Pt=p[F],Z=pt.querySelector(".slide__art"),lt=Pt.querySelector(".slide__art"),gt=Pt.querySelectorAll(".slide__title .ch"),at=pt.querySelectorAll(".slide__title .ch"),dt=Pt.querySelector(".slide__year");if(g=F,S(F),pt.classList.add("is-leaving"),pt.classList.remove("is-active"),Pt.classList.add("is-active"),n){pt.classList.remove("is-leaving"),o.innerHTML=x(t[F],F),m=!1;return}let Lt=e.timeline({defaults:{ease:"expo.inOut"},onComplete:()=>{pt.classList.remove("is-leaving"),e.set([Z,...at],{clearProps:"transform,opacity,filter"}),e.set(Pt,{clearProps:"clipPath"}),m=!1,A()}});Lt.fromTo(Pt,{clipPath:B>0?"inset(0% 0% 0% 100%)":"inset(0% 100% 0% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1.25},0).fromTo(lt,{scale:1.22,xPercent:B*8},{scale:1,xPercent:0,duration:1.6,ease:"expo.out"},.1).to(Z,{xPercent:-B*14,scale:1.08,duration:1.25},0).to(at,{yPercent:-60,opacity:0,filter:"blur(8px)",stagger:.012,duration:.6,ease:"power3.in"},0).fromTo(gt,{yPercent:70,opacity:0,filter:"blur(12px)"},{yPercent:0,opacity:1,filter:"blur(0px)",stagger:.03,duration:1.1,ease:"expo.out"},.55).fromTo(dt,{opacity:0,y:-8},{opacity:.8,y:0,duration:.8,ease:"power2.out"},.8).fromTo(l,{opacity:0,"--lx":B>0?"90%":"10%"},{opacity:.9,"--lx":"50%",duration:.55,ease:"power2.in"},.15).to(l,{opacity:0,"--lx":B>0?"10%":"90%",duration:.9,ease:"power2.out"},.7);let me=[...o.children];Lt.to(me,{opacity:0,y:-10,duration:.4,stagger:.05,ease:"power2.in"},0).add(()=>{o.innerHTML=x(t[F],F),e.fromTo(o.children,{opacity:0,y:14},{opacity:1,y:0,duration:.9,stagger:.08,ease:"expo.out"})},.45)}s.querySelector("#nextSlide").addEventListener("click",()=>I(g+1,1)),s.querySelector("#prevSlide").addEventListener("click",()=>I(g-1,-1)),addEventListener("keydown",F=>{!_||F.target.closest("input, textarea")||(F.key==="ArrowRight"&&I(g+1,1),F.key==="ArrowLeft"&&I(g-1,-1))});let V=0,L=0,G=!1,O=0;r.addEventListener("pointerdown",F=>{m||(G=!0,V=F.clientX,L=F.clientY,O=0,r.setPointerCapture?.(F.pointerId),D())}),r.addEventListener("pointermove",F=>{let B=r.getBoundingClientRect(),R=(F.clientX-B.left)/B.width-.5,J=(F.clientY-B.top)/B.height-.5;if(G){if(O=F.clientX-V,Math.abs(F.clientY-L)>Math.abs(O)&&F.pointerType!=="mouse")return;e.to(p[g].querySelector(".slide__art"),{x:O*.2,duration:.4,ease:"power3.out",overwrite:"auto"})}else if(!n&&F.pointerType==="mouse"&&!m){let pt=p[g];e.to(pt.querySelector(".slide__art"),{x:-R*26,y:-J*16,duration:1.2,ease:"power3.out",overwrite:"auto"}),e.to(pt.querySelector(".slide__title"),{x:R*14,y:J*8,duration:1.2,ease:"power3.out",overwrite:"auto"})}});let N=()=>{G&&(G=!1,e.to(p[g].querySelector(".slide__art"),{x:0,duration:.6,ease:"power3.out"}),O<-60?I(g+1,1):O>60?I(g-1,-1):A())};return r.addEventListener("pointerup",N),r.addEventListener("pointercancel",N),r.addEventListener("pointerleave",()=>{let F=p[g];e.to([F.querySelector(".slide__art"),F.querySelector(".slide__title")],{x:0,y:0,duration:1.2,ease:"power3.out"})}),s.addEventListener("pointerenter",F=>{F.pointerType==="mouse"&&(y=!0,D())}),s.addEventListener("pointerleave",()=>{y=!1,A()}),s.addEventListener("focusin",()=>{T=!0,D()}),s.addEventListener("focusout",()=>{T=!1,A()}),document.addEventListener("visibilitychange",()=>document.hidden?D():A()),new IntersectionObserver(([F])=>{_=F.isIntersecting,_?A():D()},{threshold:.45}).observe(r),{go:I,get index(){return g}}}var Eu=s=>String(s??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Gw=["State Television Awards","Sumathi Awards","Raigam Tele Awards","SLIM Awards","OCIC Awards"],w_=s=>/direct(or|ion)/i.test(s)&&!/photography|art director/i.test(s),Hw=s=>s.years[1]&&s.years[1]!==s.years[0]?`${s.years[0]}\u2013${s.years[1]}`:`${s.years[0]}`,Au=s=>Gw.indexOf(s)+1||99;function T_({works:s,list:t,sum:e,gsap:n,reduced:i}){let r=s.map((p,g)=>({w:p,i:g})).filter(({w:p})=>(p.awards||[]).length);if(!r.length)return t.closest(".record")?.setAttribute("hidden",""),e.textContent="",{show(){}};let a=[...new Set(r.flatMap(({w:p})=>p.awards.map(g=>g[2])))].sort((p,g)=>Au(p)-Au(g)||p.localeCompare(g)),o=r.reduce((p,{w:g})=>p+g.awards.filter(m=>m[0]==="won").length,0),l=r.reduce((p,{w:g})=>p+g.awards.filter(m=>m[0]==="nominated").length,0),c=a.map(p=>p.replace(/ Awards$/,"").replace(/ Tele$/,"")),h=c.length>1?`${c.slice(0,-1).join(", ")} and ${c.slice(-1)}`:c[0];e.textContent=`${o} awards and ${l} nominations across ${r.length} productions, at the ${h} awards.`,t.innerHTML=r.map(({w:p,i:g})=>{let m=p.awards.filter(v=>v[0]==="won").length,_=p.awards.length-m,y={};p.awards.forEach(v=>{let M=`${v[2]} ${v[3]}`;(y[M]=y[M]||{c:v[2],rows:[]}).rows.push(v)});let T=Object.entries(y).sort((v,M)=>Au(v[1].c)-Au(M[1].c)).map(([v,M])=>`
          <div class="lgroup">
            <p class="lgroup__name">${Eu(v)}</p>
            <ul>${M.rows.slice().sort((w,x)=>(w[0]==="won"?0:1)-(x[0]==="won"?0:1)).map(w=>`<li class="${w[0]==="won"?"is-won":""}">${Eu(w[1])}<span class="sr">, ${w[0]==="won"?"won":"nominated"}</span></li>`).join("")}</ul>
          </div>`).join("");return`
      <li class="ledger__item" data-i="${g}">
        <button type="button" class="ledger__row" id="recb-${g}" aria-expanded="false" aria-controls="rec-${g}">
          <span class="ledger__year">${Eu(Hw(p))}</span>
          <span class="ledger__title">${Eu(p.title)}</span>
          <span class="ledger__tally">${m?`<b>${m} won</b>`:""}${_?`<span>${_} nominated</span>`:""}</span>
          <span class="ledger__sign" aria-hidden="true"></span>
        </button>
        <div class="ledger__body" id="rec-${g}" role="region" aria-labelledby="recb-${g}" hidden>
          <div class="ledger__in">${T}</div>
        </div>
      </li>`}).join("");let f=p=>t.querySelector(`.ledger__item[data-i="${p}"]`);function d(p,g,m=!0){let _=p.querySelector(".ledger__row"),y=p.querySelector(".ledger__body");if(_.getAttribute("aria-expanded")==="true"!==g){if(_.setAttribute("aria-expanded",g?"true":"false"),n.killTweensOf(y),i||!m){y.hidden=!g,y.style.height="";return}g?(y.hidden=!1,n.fromTo(y,{height:0},{height:"auto",duration:.7,ease:"expo.out",clearProps:"height"}),n.fromTo(y.querySelectorAll(".lgroup"),{opacity:0,y:12},{opacity:1,y:0,duration:.8,stagger:.06,ease:"expo.out",overwrite:!0})):n.to(y,{height:0,duration:.5,ease:"expo.out",onComplete:()=>{y.hidden=!0,y.style.height=""}})}}t.addEventListener("click",p=>{let g=p.target.closest(".ledger__row");g&&d(g.parentElement,g.getAttribute("aria-expanded")!=="true")});function u(p){let g=f(p);return g?(t.querySelectorAll(".ledger__item").forEach(m=>{m!==g&&d(m,!1,!1)}),d(g,!0),g):null}return{show:u,row:f}}var Cu=s=>String(s??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function E_({data:s,root:t,intro:e,monitor:n,gsap:i,reduced:r}){let a=s.groups||[];e.textContent=s.intro||"";let o=[];t.innerHTML=a.map(D=>`
    <div class="guide__group">
      <p class="guide__head"><span class="guide__role">${Cu(D.role)}</span><span class="guide__where">${Cu([D.place,D.years].filter(Boolean).join(", "))}</span></p>
      <ul class="guide">
        ${(D.programmes||[]).map(I=>{let V=o.push({...I,place:D.place})-1,L=[I.format,I.when,I.live?"live":""].filter(Boolean).join(", ");return`<li class="guide__cell"><span class="guide__item" data-i="${V}" data-lock tabindex="0"><span class="guide__title">${Cu(I.title)}</span>${I.live?'<i class="guide__live" aria-hidden="true"></i>':""}${L?`<span class="sr">, ${Cu(L)}</span>`:""}</span><span class="guide__sep" aria-hidden="true">/</span></li>`}).join("")}
      </ul>
    </div>`).join("");let l=[...t.querySelectorAll(".guide__item")];if(!n||!o.length)return;let c=n.querySelector("#monitorStatic"),h=c.getContext("2d"),f=h.createImageData(c.width,c.height),d=n.querySelector(".monitor__card"),u=n.querySelector(".monitor__title"),p=n.querySelector(".monitor__meta"),g=n.querySelector(".monitor__live"),m=n.querySelector(".monitor__base span"),_=0,y=0,T=-1;function v(){let D=f.data;for(let I=0;I<D.length;I+=4){let V=Math.random()*230;D[I]=V,D[I+1]=V*.92,D[I+2]=V*.82,D[I+3]=255}h.putImageData(f,0,0),performance.now()<y?_=requestAnimationFrame(v):n.classList.remove("is-tuning")}function M(D){if(D===T)return;T=D;let I=o[D];l.forEach((V,L)=>V.classList.toggle("is-on",L===D)),n.classList.add("is-on"),u.textContent=I.title,p.textContent=[I.format,I.when].filter(Boolean).join(", "),g.hidden=!I.live,m.textContent=(I.place||"").toUpperCase(),!r&&(n.classList.add("is-tuning"),cancelAnimationFrame(_),y=performance.now()+240,v(),i.fromTo(d,{opacity:0,scaleY:.7},{opacity:1,scaleY:1,duration:.5,delay:.2,ease:"expo.out",overwrite:!0}))}let w=0,x=!1,S=!1,P=()=>{clearInterval(w),!(r||!x||S||document.hidden)&&(w=setInterval(()=>M((T+1)%o.length),3200))},A=D=>{S=D,P()};l.forEach(D=>{let I=+D.dataset.i;D.addEventListener("pointerenter",V=>{V.pointerType==="mouse"&&(A(!0),M(I))}),D.addEventListener("focus",()=>{A(!0),M(I)}),D.addEventListener("click",()=>{M(I),P()})}),t.addEventListener("pointerleave",()=>A(!1)),t.addEventListener("focusout",D=>{t.contains(D.relatedTarget)||A(!1)}),document.addEventListener("visibilitychange",P),new IntersectionObserver(([D])=>{x=D.isIntersecting,x&&T<0&&M(0),P()},{threshold:.3}).observe(n)}var Ww="a, button, [data-lock]";function A_(s,{reduced:t}){if(!matchMedia("(hover: hover) and (pointer: fine)").matches||!s)return null;document.documentElement.classList.add("has-cursor"),s.innerHTML=`
    <div class="cursor__box">
      <span class="cursor__b cursor__b--tl"></span><span class="cursor__b cursor__b--tr"></span>
      <span class="cursor__b cursor__b--bl"></span><span class="cursor__b cursor__b--br"></span>
      <span class="cursor__label"></span>
    </div>
    <span class="cursor__dot"></span>`;let n=s.querySelector(".cursor__box"),i=s.querySelector(".cursor__dot"),r=s.querySelector(".cursor__label"),a=26,o={x:innerWidth/2,y:innerHeight/2},l={x:o.x-a/2,y:o.y-a/2,w:a,h:a},c={...l},h=null,f=!1,d="",u=t?1:.2;function p(){if(h&&h.isConnected){let m=h.getBoundingClientRect(),_=7;c.x=m.left-_,c.y=m.top-_,c.w=m.width+_*2,c.h=m.height+_*2}else{let m=d?58:a;c.x=o.x-m/2,c.y=o.y-m/2,c.w=m,c.h=m}}function g(){p(),l.x+=(c.x-l.x)*u,l.y+=(c.y-l.y)*u,l.w+=(c.w-l.w)*u,l.h+=(c.h-l.h)*u,n.style.transform=`translate3d(${l.x}px, ${l.y}px, 0)`,n.style.width=l.w+"px",n.style.height=l.h+"px",i.style.transform=`translate3d(${o.x-2}px, ${o.y-2}px, 0)`,requestAnimationFrame(g)}return requestAnimationFrame(g),addEventListener("pointermove",m=>{if(m.pointerType!=="mouse")return;o.x=m.clientX,o.y=m.clientY,f||(f=!0,s.style.opacity=1);let _=m.target.closest?.(Ww),y=_&&_.getBoundingClientRect().width>520,T=_&&!y&&!_.matches("input, textarea")?_:null;T!==h&&(h=T,s.classList.toggle("is-locked",!!h),h&&ei.tick());let v=m.target.closest?.("[data-cursor]"),M=!h&&v?v.getAttribute("data-cursor"):"";M!==d&&(d=M,r.textContent=M,s.classList.toggle("has-label",!!M)),s.classList.toggle("is-text",!!m.target.closest?.("input, textarea"))},{passive:!0}),document.addEventListener("pointerleave",()=>{f=!1,s.style.opacity=0}),addEventListener("pointerdown",()=>s.classList.add("is-down")),addEventListener("pointerup",()=>s.classList.remove("is-down")),addEventListener("scroll",()=>{h&&p()},{passive:!0}),{release(){h=null,s.classList.remove("is-locked")}}}function C_(s){matchMedia("(hover: hover) and (pointer: fine)").matches&&document.querySelectorAll("[data-magnetic]").forEach(t=>{let e=s.quickTo(t,"x",{duration:.6,ease:"power3.out"}),n=s.quickTo(t,"y",{duration:.6,ease:"power3.out"});t.addEventListener("pointermove",i=>{let r=t.getBoundingClientRect();e((i.clientX-(r.left+r.width/2))*.28),n((i.clientY-(r.top+r.height/2))*.38)}),t.addEventListener("pointerleave",()=>{e(0),n(0)})})}var ui=s=>+s.toFixed(2),Bl=s=>s*Math.PI/180;function pp(s,t,e,n,i){let r=s+Math.cos(e)*n,a=t+Math.sin(e)*n,o=s+Math.cos(e)*n*.5,l=t+Math.sin(e)*n*.5,c=Math.cos(e+Math.PI/2)*i,h=Math.sin(e+Math.PI/2)*i;return`M${ui(s)} ${ui(t)}Q${ui(o+c)} ${ui(l+h)} ${ui(r)} ${ui(a)}Q${ui(o-c)} ${ui(l-h)} ${ui(s)} ${ui(t)}Z`}var mp="";function Xw(){if(mp)return mp;let s=54,t=48,e=42,n=116,i=246,r=f=>[s+e*Math.cos(Bl(f)),t+e*Math.sin(Bl(f))],[a,o]=r(n),[l,c]=r(i),h=`<path class="laurel__stem" d="M${ui(a)} ${ui(o)}A${e} ${e} 0 0 1 ${ui(l)} ${ui(c)}"/>`;for(let f=0;f<7;f++){let d=n+(f+.55)/7*(i-n),[u,p]=r(d),g=d+90,m=1-f/7*.3;h+=`<path class="laurel__leaf" d="${pp(u,p,Bl(g-44),14*m,3.6*m)}"/>`,h+=`<path class="laurel__leaf" d="${pp(u,p,Bl(g+40),11.5*m,3.2*m)}"/>`}return h+=`<path class="laurel__leaf" d="${pp(l,c,Bl(i+90),10,3)}"/>`,mp=h}var gp=15,kl=(s=!1)=>`<svg class="laurel__b${s?" laurel__b--r":""}" viewBox="0 0 48 96" aria-hidden="true" focusable="false">${Xw()}</svg>`;var ta=(s,t="")=>`<svg viewBox="0 0 32 32" class="${t}" aria-hidden="true" focusable="false">${s}</svg>`,io={stage:ta('<path d="M4 6h24M5 6c0 9 3 15 7 19M27 6c0 9-3 15-7 19M5 6c2 5 4 7 7 8M27 6c-2 5-4 7-7 8M3 27h26"/>'),camera:ta('<rect x="4" y="11" width="17" height="11" rx="1.5"/><path d="m21 14 7-3v11l-7-3M8 11V8h6v3M9 26l3-4M17 26l-3-4"/><circle cx="9" cy="16.5" r="2"/>'),clapper:ta('<rect x="4" y="13" width="24" height="14" rx="1"/><path d="m4 13 22-6 1.2 4.2L5 13M10 11.4l2.8 3.4M16 9.8l2.8 3.4M22 8.2l2.6 3.2M4 19h24"/>'),screen:ta('<rect x="3" y="8" width="26" height="18" rx="3"/><rect x="7" y="12" width="15" height="10" rx="2"/><path d="m11 3 5 5 5-5M25 13v.01M25 17v.01M10 26l-1 3M22 26l1 3"/>'),broadcast:ta('<path d="M16 14v15M11 29l5-15 5 15M12.6 24h6.8"/><circle cx="16" cy="12" r="2"/><path d="M11 7a7 7 0 0 0 0 10M21 7a7 7 0 0 1 0 10M7.5 4a12 12 0 0 0 0 16M24.5 4a12 12 0 0 1 0 16"/>'),board:ta('<path d="M4 12 16 5l12 7M6 12v12M11 12v12M16 12v12M21 12v12M26 12v12M3 27h26M4 24h24"/>'),film:ta('<circle cx="14" cy="15" r="10"/><circle cx="14" cy="15" r="2"/><circle cx="14" cy="9" r="2.2"/><circle cx="14" cy="21" r="2.2"/><circle cx="8" cy="15" r="2.2"/><circle cx="20" cy="15" r="2.2"/><path d="M14 25h14"/>'),mail:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3.5 6 8.5 7 8.5-7"/></svg>',whatsapp:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l1.2-4A8 8 0 1 1 8.3 19Z"/><path d="M9.2 8.6c.2 2.9 2.9 5.7 6 6.1l1-1.3-1.9-1-.9.8a4.6 4.6 0 0 1-2.6-2.6l.8-.9-1-1.9Z"/></svg>',out:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>',facebook:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.6V7.2c0-.9.6-1.5 1.5-1.5H17V2.6h-2.4A4.4 4.4 0 0 0 10.2 7v1.6H7.6v3.1h2.6v9.7H14v-9.7h2.6l.5-3.1Z"/></svg>',instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.4" y="3.4" width="17.2" height="17.2" rx="4.8"/><circle cx="12" cy="12" r="3.9"/><path d="M17.1 6.9v.01"/></svg>',linkedin:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.4" y="3.4" width="17.2" height="17.2" rx="2.6"/><path d="M8 10.6v6M8 7.5v.01M11.6 16.6v-6M11.6 13.2a2.25 2.25 0 0 1 4.5 0v3.4"/></svg>',youtube:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.6" y="5.8" width="18.8" height="12.4" rx="3.6"/><path d="m10.3 9.5 4.4 2.5-4.4 2.5Z"/></svg>'};Vt.registerPlugin($t);$t.config({ignoreMobileResize:!0});var bn=window.SITE||{},R_=s=>(s.years||[0])[1]||(s.years||[0])[0],gr=(bn.works||[]).map((s,t)=>({w:s,i:t})).sort((s,t)=>R_(t.w)-R_(s.w)||t.w.years[0]-s.w.years[0]||s.i-t.i).map(s=>s.w),I_=new Date().getFullYear(),vt=(s,t=document)=>t.querySelector(s),Ne=(s,t=document)=>[...t.querySelectorAll(s)],Ue=s=>String(s??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),$w=s=>Ue(s).replace(/\*([^*]+)\*/g,'<mark class="hl">$1</mark>'),so=document.documentElement,Qe=matchMedia("(prefers-reduced-motion: reduce)").matches,Pu=matchMedia("(hover: hover) and (pointer: fine)").matches;Qe||so.classList.add("motion");var L_=(s,t)=>(s.setAttribute("aria-label",t),s.innerHTML=`<span aria-hidden="true">${t.split(" ").map(e=>`<span class="word">${[...e].map(n=>`<span class="ch">${Ue(n)}</span>`).join("")}</span>`).join(" ")}</span>`,Ne(".ch",s));function qw(){let s=gr.reduce((t,e)=>{let n=fp(e);return t.won+=n.won,t.nom+=n.nom,t},{won:0,nom:0});return[{n:I_-(bn.careerStart||1988),label:"years in drama and television"},{n:gr.length,label:"films and teledramas directed"},{n:gr.reduce((t,e)=>t+(e.episodes||0),0),label:"episodes directed"},{n:s.won,label:"awards won by his productions"}]}function Yw(){let s=(bn.honours||[]).filter(t=>t&&t.award);return s.length||(gr.forEach(t=>(t.awards||[]).forEach(([e,n,i,r])=>{let a=w_(n);e==="won"&&(a||/\b(series|film|picture)\b/i.test(n))&&s.push({award:n,ceremony:i,year:r,work:t.title,dir:a})})),s=s.sort((t,e)=>e.dir-t.dir||e.year-t.year).slice(0,6)),s.map(t=>({...t,i:gr.findIndex(e=>e.title===t.work)}))}function Zw(){let s=bn.name||{};vt("[data-first]").textContent=s.first||"",L_(vt("[data-last]"),s.last||""),vt("[data-role]").textContent=bn.role||"",vt("[data-position]").textContent=bn.position||"",vt("#heroName").setAttribute("aria-label",`${s.first||""} ${s.last||""}`.trim());let t=bn.latest,e=vt("#latest");if(t&&t.title){let p=Math.max(0,gr.findIndex(g=>g.title===t.title));e.dataset.slide=p,vt(".latest__label",e).textContent=t.label||"",vt(".latest__title",e).textContent=t.title,e.setAttribute("aria-label",`${t.label||""} ${t.title}, view in Work`.trim()),e.hidden=!1}let n=Yw(),i=p=>`${Ue(p.ceremony||"")}${p.year?` ${Ue(p.year)}`:""}`.trim();vt("#heroLaurels").innerHTML=n.slice(0,Math.max(0,bn.heroHonours??2)).map(p=>`
    <li class="laurel">${kl()}<p class="laurel__t"><span class="laurel__a">${Ue(p.award)}</span><span class="laurel__c">${i(p)}</span></p>${kl(!0)}</li>`).join("");let r=p=>`
      <span class="plaque__in">
        ${kl()}
        <span class="plaque__t">
          <span class="plaque__k">Winner</span>
          <span class="plaque__a">${Ue(p.award)}</span>
          <span class="plaque__c">${i(p)}</span>
          ${p.work?`<span class="plaque__w">${Ue(p.work)}${p.i>=0?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"/></svg>':""}</span>`:""}
        </span>
        ${kl(!0)}
      </span>`,a=vt("#laurels");a.innerHTML=n.map(p=>p.i>=0?`<li><button type="button" class="plaque" data-work="${p.i}">${r(p)}<span class="sr">. Show its full record</span></button></li>`:`<li><div class="plaque">${r(p)}</div></li>`).join(""),a.hidden=!n.length;let o=bn.about||{};vt("#aboutBody").innerHTML=(o.paragraphs||[]).map(p=>`<p>${$w(p)}</p>`).join(""),vt("#aboutQuote p").textContent=o.quote||"",vt("#aboutQuote").hidden=!o.quote,vt("#stats").innerHTML=qw().map(p=>`
    <div class="stat">
      <dt>${Ue(p.label)}</dt>
      <dd class="odo" aria-label="${p.n}" data-n="${p.n}">${[...String(p.n)].map(g=>`<span class="odo__d" aria-hidden="true"><span class="odo__col" data-d="${g}">${"0123456789".repeat(3).split("").map(m=>`<span>${m}</span>`).join("")}</span></span>`).join("")}</dd>
    </div>`).join("");let l=[...bn.career||[]].sort((p,g)=>p.start-g.start),c='<li class="frame frame--leader" aria-hidden="true"><div class="frame__inner"></div></li>'.repeat(2);vt("#reelTrack").innerHTML=c+l.map(p=>{let g=p.end===""||p.end==null,m=g?"to present":p.end!==p.start?`to ${p.end}`:"";return`
    <li class="frame${g?" is-open":""}">
      <div class="frame__inner">
        <div class="frame__top">
          <p class="frame__year">${Ue(p.start)}<span>${Ue(m)}</span></p>
          ${(io[p.icon]||"").replace('class=""','class="frame__icon"')}
        </div>
        <div>
          <p class="frame__role">${Ue(p.role)}</p>
          <p class="frame__place">${Ue(p.place)}</p>
          <p class="frame__text">${Ue(p.text)}</p>
        </div>
      </div>
    </li>`}).join("")+c,l.length&&(vt("#careerHint").textContent=`Since ${l[0].start}`);let h=(bn.acknowledgements||[]).filter(p=>p&&p.title);vt("#ackList").innerHTML=h.map(p=>`
    <li><span class="ack__year">${Ue(p.years||"")}</span><span class="ack__title">${Ue(p.title)}</span><span class="ack__role">${Ue(p.role||"")}</span></li>`).join(""),vt("#ack").hidden=!h.length,vt("#creditsRoll").innerHTML=(bn.credits||[]).map(p=>`
    <div class="credits__group">
      <h3 data-roll>${Ue(p.group)}</h3>
      <ul>${p.items.map(([g,m])=>`<li class="credits__row" data-roll><span class="credits__role">${Ue(g)}</span><span class="credits__name">${Ue(m)}</span></li>`).join("")}</ul>
    </div>`).join(""),vt("#credits").hidden=!(bn.credits||[]).length;let f=bn.contact||{};f.heading&&(vt("#contactTitle").textContent=f.heading),f.sub&&(vt("#contactSub").textContent=f.sub);let d=[];f.email&&d.push(`<li><a href="mailto:${Ue(f.email)}" data-lock><span class="direct__k">Email</span><span class="direct__v">${Ue(f.email)}</span>${io.mail}</a></li>`),f.whatsapp&&d.push(`<li><a href="https://wa.me/${Ue(f.whatsapp)}" target="_blank" rel="noopener" data-lock><span class="direct__k">WhatsApp</span><span class="direct__v">${Ue(f.whatsappDisplay||f.whatsapp)}</span>${io.whatsapp}<span class="sr"> (opens in a new tab)</span></a></li>`),vt("#direct").innerHTML=d.join(""),vt("#social").innerHTML=(bn.social||[]).filter(p=>p.url&&/^https?:\/\//i.test(p.url)).map(p=>`<li><a href="${Ue(p.url)}" target="_blank" rel="noopener me">${io[String(p.label).toLowerCase()]||io.out}${Ue(p.label)}<span class="sr"> (opens in a new tab)</span></a></li>`).join("");let u=bn.madeBy;if(u&&u.label){let p=vt("#madeBy a");p.textContent=u.label,u.url?p.href=u.url:p.removeAttribute("target"),vt("#madeBy").hidden=!1}vt("#year").textContent=I_}function Jw(){let s=document.createElement("canvas");s.width=s.height=160;let t=s.getContext("2d"),e=t.createImageData(160,160);for(let n=0;n<e.data.length;n+=4){let i=Math.random()>.5,r=i?255:0;e.data[n]=e.data[n+1]=e.data[n+2]=r,e.data[n+3]=Math.random()*(i?46:60)}t.putImageData(e,0,0),vt(".grain").style.backgroundImage=`url(${s.toDataURL("image/png")})`}var Mn=null;function Ru(s,t=!0){if(so.setAttribute("data-theme",s),vt('meta[name="theme-color"]').setAttribute("content",s==="day"?"#E9DFCF":"#18110C"),vt("#themeToggle").setAttribute("aria-label",s==="day"?"Switch to night mode":"Switch to day mode"),t)try{localStorage.setItem("spd-theme",s)}catch{}Mn?.setTheme(s)}function Kw(){let s=vt("#themeToggle");s.addEventListener("click",()=>{let t=so.getAttribute("data-theme")==="day"?"night":"day";if(ei.shutter(),!document.startViewTransition||Qe){Ru(t);return}let e=s.getBoundingClientRect(),n=e.left+e.width/2,i=e.top+e.height/2,r=Math.hypot(Math.max(n,innerWidth-n),Math.max(i,innerHeight-i))*1.25;document.startViewTransition(()=>Ru(t)).ready.then(()=>{let o=[];for(let l=0;l<=12;l++){let c=l/12,h=1-Math.pow(1-c,3),f=Math.max(.5,h*r),d=(1-h)*1.2,u=[];for(let p=0;p<9;p++){let g=d+p/9*Math.PI*2;u.push(`${(n+Math.cos(g)*f).toFixed(1)}px ${(i+Math.sin(g)*f).toFixed(1)}px`)}o.push({clipPath:`polygon(${u.join(",")})`})}so.animate(o,{duration:950,easing:"linear",pseudoElement:"::view-transition-new(root)"})}).catch(()=>{})}),matchMedia("(prefers-color-scheme: light)").addEventListener?.("change",t=>{let e=null;try{e=localStorage.getItem("spd-theme")}catch{}e||Ru(t.matches?"day":"night",!1)}),Ru(so.getAttribute("data-theme")||"night",!1)}function Qw(){let s=vt("#soundToggle"),t=n=>{s.setAttribute("aria-pressed",n?"true":"false"),s.setAttribute("aria-label",n?"Turn sound off":"Turn sound on")};ei.onChange(t),s.addEventListener("click",()=>ei.toggle());let e=null;try{e=localStorage.getItem("spd-sound")}catch{}e==="1"&&addEventListener("pointerdown",()=>ei.set(!0),{once:!0}),document.addEventListener("click",n=>{n.target.closest("a, button:not(#soundToggle)")&&ei.click()})}var xp=0;function jw(s){let t=vt("#bar"),e=vt(".bar__progress"),n=CSS.supports?.("animation-timeline: scroll()");n&&e.classList.add("is-css");let i=0;return()=>{let r=s();t.classList.toggle("is-scrolled",r>30);let o=!vt("#menu").hidden||t.contains(document.activeElement);if(performance.now()<xp||o?t.classList.remove("is-hidden"):r>i+2&&r>innerHeight*.8?t.classList.add("is-hidden"):r<i-2&&t.classList.remove("is-hidden"),!n){let l=document.documentElement.scrollHeight-innerHeight;e.style.transform=`scaleX(${l>0?(r/l).toFixed(4):0})`}i=r}}function _p(s,t,e=7){if(!s||!t||!Pu)return;let n=Qe?null:Vt.quickTo(t,"rotationX",{duration:.8,ease:"power3.out"}),i=Qe?null:Vt.quickTo(t,"rotationY",{duration:.8,ease:"power3.out"});s.addEventListener("pointermove",r=>{let a=s.getBoundingClientRect(),o=(r.clientX-a.left)/a.width,l=(r.clientY-a.top)/a.height;i?.((o-.5)*e*2),n?.(-(l-.5)*e*1.6),s.style.setProperty("--gx",(o*100).toFixed(1)+"%"),s.style.setProperty("--gy",(l*100).toFixed(1)+"%")}),s.addEventListener("pointerleave",()=>{n?.(0),i?.(0)})}function P_(){let s=/^#[a-z-]+$/.test(location.hash)&&document.querySelector(location.hash)?location.hash:"";"scrollRestoration"in history&&(history.scrollRestoration="manual"),scrollTo(0,0),Zw(),vt(".about__photo img")?.decode?.().catch(()=>{}),Jw(),Kw(),Qw();let t=vt("#bar"),e=__(vt("#iris")),n=vt("#leader");Pu||(vt("#leaderHint").textContent="Tap to skip");let i=null;Qe||(i=new yg({lerp:.1,wheelMultiplier:.95,smoothWheel:!0}),i.on("scroll",$t.update),Vt.ticker.add(O=>i.raf(O*1e3)),Vt.ticker.lagSmoothing(0),i.stop());let r=()=>i?i.scroll:scrollY,a=jw(r),o=()=>a();i?i.on("scroll",o):addEventListener("scroll",o,{passive:!0}),t.addEventListener("focusin",o),o(),A_(vt("#cursor"),{reduced:Qe}),C_(Vt);let l=vt(".hero__stage"),c=vt(".hero__last"),h=vt("#heroCopy"),f=vt("#lens");if(Mn=g_(f,{reduced:Qe,getAvoid:()=>{if(r()>4)return null;let O=l.getBoundingClientRect(),N=c.getBoundingClientRect(),F=parseFloat(getComputedStyle(c).fontSize)||0;return{right:N.right-O.left,top:N.top-O.top+F*.08,copyTop:h.getBoundingClientRect().top-O.top,copyRight:h.getBoundingClientRect().right-O.left,bar:t.offsetHeight}},onFrame:({x:O,y:N})=>{l.style.setProperty("--fx",(O*100).toFixed(2)+"%"),l.style.setProperty("--fy",(N*100).toFixed(2)+"%")}}),Mn){Mn.setTheme(so.getAttribute("data-theme")),Qe||Mn.setActive(!1),addEventListener("pointermove",N=>{Mn.setPointer(N.clientX/innerWidth*2-1,N.clientY/innerHeight*2-1)},{passive:!0});let O=!1;f.addEventListener("pointermove",N=>{let F=Mn.progress<.05&&Mn.hit(N.clientX,N.clientY);F?f.setAttribute("data-cursor","Capture"):f.removeAttribute("data-cursor"),f.style.cursor=F?"pointer":""}),f.addEventListener("click",N=>{if(O||Mn.progress>.05||!Mn.hit(N.clientX,N.clientY))return;O=!0,ei.shutter();let F={v:1};Vt.timeline({onComplete:()=>{O=!1}}).to(F,{v:0,duration:.13,ease:"power2.in",onUpdate:()=>Mn.setShutter(F.v)}).to("#flash",{opacity:.16,duration:.05},.12).to("#flash",{opacity:0,duration:.7,ease:"power2.out"},.17).to(F,{v:1,duration:.9,ease:"expo.out",onUpdate:()=>Mn.setShutter(F.v)},.16)})}else f.remove();let d=T_({works:gr,list:vt("#awardsList"),sum:vt("#recSum"),gsap:Vt,reduced:Qe}),u=()=>{},p=b_(vt("#show"),gr,{gsap:Vt,reduced:Qe,onAwards:O=>{d.show(O),u("#record")}});E_({data:bn.television||{},root:vt("#guide"),intro:vt("#tvIntro"),monitor:vt("#monitor"),gsap:Vt,reduced:Qe});let g=()=>vt('.ledger__row[aria-expanded="true"]')?.parentElement||vt("#record");vt("#laurels").addEventListener("click",O=>{let N=O.target.closest(".plaque[data-work]");if(!N)return;let F=d.show(+N.dataset.work)||vt("#record");xp=performance.now()+1600,i?i.scrollTo(F,{offset:-(t.offsetHeight+16),duration:1.2}):scrollTo(0,F.getBoundingClientRect().top+scrollY-t.offsetHeight-16),vt(".ledger__row",F)?.focus({preventScroll:!0})}),Ne("#laurels .plaque").forEach(O=>_p(O,vt(".plaque__in",O),6));let m=Ne(".hero__last .ch"),_=[],y=()=>{r()>10||(_=m.map(O=>{let N=O.getBoundingClientRect();return[N.left+N.width/2,N.top+N.height/2]}))};if(!Qe&&Pu){let O=m.map(()=>340),N=-9999,F=-9999;addEventListener("pointermove",B=>{N=B.clientX,F=B.clientY},{passive:!0}),addEventListener("resize",()=>setTimeout(y,100)),Vt.ticker.add(()=>{r()>innerHeight*.5||!_.length||m.forEach((R,J)=>{let pt=Math.hypot(N-_[J][0],F-_[J][1]),Pt=340+Math.max(0,1-pt/320)*380,Z=O[J]+(Pt-O[J])*.12;Math.abs(Z-O[J])>.3&&(O[J]=Z,R.style.fontWeight=Z.toFixed(0))})})}let T=vt("[data-first]"),v=[".latest",".hero__meta",".hero__laurels",".hero__cta",".hero__scroll",".bar"];Qe||(Vt.set(m,{yPercent:40,rotateX:-80,opacity:0,transformPerspective:900,transformOrigin:"50% 100%"}),Vt.set(T,{opacity:0,y:20,filter:"blur(10px)"}),Vt.set(v,{opacity:0}),Vt.set(".finder__c",{scale:2.4,opacity:0}));let M=()=>{if(i?.start(),Mn?.setActive(!0),s&&setTimeout(()=>u(s),Qe?0:900),Qe){Mn?.setOpen(1),y();return}let O=Vt.timeline({defaults:{ease:"expo.out"},onComplete:y});if(Mn){let N={v:0};O.to(N,{v:1,duration:2.6,ease:"expo.out",onUpdate:()=>Mn.setOpen(N.v)},0)}O.to(m,{yPercent:0,rotateX:0,opacity:1,duration:1.6,stagger:.05,clearProps:"transform"},.15).to(T,{opacity:1,y:0,filter:"blur(0px)",duration:1.4,clearProps:"filter"},.3).to(".finder__c",{scale:1,opacity:.38,duration:1.4,stagger:.06},.4).to(v,{opacity:1,duration:1.2,stagger:.08,clearProps:"opacity"},.8).from(".hero__laurels .laurel__leaf",{scale:0,opacity:0,transformOrigin:"50% 50%",duration:.7,ease:"back.out(2.2)",stagger:N=>N%gp*.035},1.15)},w=!1;try{w=sessionStorage.getItem("spd-seen")==="1",sessionStorage.setItem("spd-seen","1")}catch{}let x=!1,S=async()=>{x||(x=!0,e.set(0),n.classList.add("is-clear"),Vt.to(n.querySelector(".leader__frame"),{opacity:0,scale:.9,duration:.35,ease:"power2.in"}),Vt.to(n.querySelector(".leader__hint"),{opacity:0,duration:.25}),ei.iris(),setTimeout(M,380),await e.open(1300),n.classList.add("is-done"))};if(Qe)n.classList.add("is-done"),e.set(1),M();else{n.addEventListener("click",S),addEventListener("keydown",function R(J){(J.key==="Escape"||J.key==="Enter"||J.key===" ")&&(S(),removeEventListener("keydown",R))});let O=vt("#leaderNum"),N=vt(".leader__sweep"),F=w?[1]:[3,2,1],B=()=>{let J=performance.now(),pt=Pt=>{if(x)return;let Z=Math.max(0,Pt-J),lt=Math.floor(Z/560);if(lt>=F.length){S();return}O.textContent=F[lt];let gt=Z%560/560*Math.PI*2,at=100+Math.sin(gt)*92,dt=100-Math.cos(gt)*92;N.setAttribute("d",`M100 100 L100 8 A92 92 0 ${gt>Math.PI?1:0} 1 ${at.toFixed(2)} ${dt.toFixed(2)} Z`),requestAnimationFrame(pt)};requestAnimationFrame(pt)};Promise.race([document.fonts?.ready||Promise.resolve(),new Promise(R=>setTimeout(R,1200))]).then(B),setTimeout(S,6e3)}let P=vt("#menu"),A=vt("#menuToggle"),D=[vt("main"),vt(".foot")],I=O=>{P.hidden=!O,A.setAttribute("aria-expanded",O?"true":"false"),A.setAttribute("aria-label",O?"Close menu":"Open menu"),D.forEach(N=>{N.inert=O}),O?i?.stop():i?.start(),O&&(Qe||Vt.fromTo(Ne("a",P),{yPercent:60,opacity:0},{yPercent:0,opacity:1,stagger:.06,duration:1,ease:"expo.out"}),vt("a",P)?.focus({preventScroll:!0}))};A.addEventListener("click",()=>I(P.hidden)),addEventListener("keydown",O=>{O.key==="Escape"&&!P.hidden&&(I(!1),A.focus())}),matchMedia("(min-width: 861px)").addEventListener?.("change",O=>{O.matches&&!P.hidden&&I(!1)});let V=O=>{xp=performance.now()+1400;let N=O==="#top"?null:O==="#record"?g():vt(O),F=N&&!N.matches("section")?-(t.offsetHeight+16):0;i?(i.start(),i.scrollTo(N||0,{immediate:!0,force:!0,offset:F})):scrollTo(0,N?N.getBoundingClientRect().top+scrollY+F:0),$t.update();let B=N?vt("h2, h3",N)||N:vt("#heroName");B&&(B.setAttribute("tabindex","-1"),B.focus({preventScroll:!0}))},L=!1;if(u=(O,N)=>{if(L||O!=="#top"&&!vt(O))return;let F=!P.hidden;if(O!=="#top")try{history.replaceState(null,"",O)}catch{}else try{history.replaceState(null,"",location.pathname+location.search)}catch{}if(Qe){F&&I(!1),V(O),N?.();return}L=!0,ei.iris(),e.transition(()=>{F&&I(!1),V(O)}).then(()=>{L=!1,N?.()})},document.addEventListener("click",O=>{let N=O.target.closest("[data-nav]");if(!N)return;let F=N.getAttribute("href");if(!F||!F.startsWith("#"))return;O.preventDefault();let B=N.dataset.slide;u(F,B!=null?()=>p.go(+B):null)}),vt("#rewind").addEventListener("click",()=>{ei.whoosh(1.6),i?i.scrollTo(0,{duration:2.4,easing:O=>O<.5?4*O*O*O:1-Math.pow(-2*O+2,3)/2}):scrollTo({top:0,behavior:"auto"})}),_p(vt("#portrait"),vt(".about__print"),5),_p(vt("#monitor"),vt(".monitor__screen"),6),Qe?(Ne(".odo").forEach(O=>Ne(".odo__col",O).forEach(N=>N.style.transform=`translateY(${-(+N.dataset.d+20)}em)`)),Ne(".hl").forEach(O=>O.classList.add("is-in"))):tT(),eT(),["work","recognition","about","contact"].forEach(O=>{$t.create({trigger:`#${O}`,start:"top 55%",end:"bottom 55%",onToggle:N=>Ne(`.bar__nav a[href="#${O}"]`).forEach(F=>{F.classList.toggle("is-active",N.isActive),N.isActive?F.setAttribute("aria-current","true"):F.removeAttribute("aria-current")})})}),$t.sort(),$t.refresh(),"ResizeObserver"in window){let O=0,N=0;new ResizeObserver(([F])=>{let B=Math.round(F.contentRect.height);O&&Math.abs(B-O)>2&&(clearTimeout(N),N=setTimeout(()=>$t.refresh(),250)),O=B}).observe(vt("#awardsList"))}nT();let G=()=>{Mn?.relayout(),$t.refresh(),y()};document.fonts?.ready.then(G),addEventListener("load",G)}function tT(){let s=Vt.matchMedia(),t=vt(".hero__copy"),e=vt(".hero__flood");Vt.timeline({scrollTrigger:{trigger:".hero",start:"top top",end:()=>"+="+innerHeight*(innerWidth<760?.75:1),pin:!0,scrub:!0,anticipatePin:1,onUpdate:r=>{Mn?.setProgress(r.progress);let a=Math.max(0,Math.min(1,(r.progress-.62)/.38));e.style.clipPath=a>0?`circle(${(Math.pow(a,1.6)*80).toFixed(2)}% at var(--fx, 50%) var(--fy, 50%))`:"circle(0% at 50% 50%)"}}}).to(t,{yPercent:-16,opacity:0,ease:"power2.in",duration:.5},0).to(".hero__last",{letterSpacing:".06em",ease:"power1.in",duration:.5},0).to(".hero__scroll",{opacity:0,duration:.2},0).to({},{duration:.5},.5),Ne("[data-focus]").forEach(r=>{if(r.matches("h2")){let a=L_(r,r.textContent.trim());Vt.set(r,{opacity:1}),Vt.fromTo(a,{opacity:0,filter:"blur(16px)",yPercent:30,scale:1.15},{opacity:1,filter:"blur(0px)",yPercent:0,scale:1,duration:1.5,stagger:.04,ease:"expo.out",clearProps:"filter",scrollTrigger:{trigger:r,start:"top 88%"}})}else Vt.fromTo(r,{opacity:0,filter:"blur(14px)",y:24},{opacity:1,filter:"blur(0px)",y:0,duration:1.6,ease:"expo.out",clearProps:"filter",scrollTrigger:{trigger:r,start:"top 86%"}})}),Ne(".head").forEach(r=>{let a=Ne(".head__aside, .head__note",r);a.length&&Vt.from(a,{opacity:0,y:16,duration:1.2,delay:.15,ease:"expo.out",scrollTrigger:{trigger:r,start:"top 88%"}})}),Vt.fromTo("#showFrame",{rotateX:10,y:80,scale:.94,transformPerspective:1600,transformOrigin:"50% 100%"},{rotateX:0,y:0,scale:1,ease:"none",scrollTrigger:{trigger:"#show",start:"top 100%",end:"top 35%",scrub:!0}}),Vt.from("#sheet > li",{opacity:0,y:26,duration:1.1,stagger:.05,ease:"expo.out",scrollTrigger:{trigger:"#sheet",start:"top 92%"}}),Vt.from("#laurels",{opacity:0,y:36,duration:1.3,ease:"expo.out",scrollTrigger:{trigger:"#laurels",start:"top 86%"}}),Ne("#laurels .plaque").forEach((r,a)=>{let o=Ne(".laurel__stem",r);Vt.set(o,{strokeDasharray:100}),Vt.timeline({delay:.15+a%3*.12,scrollTrigger:{trigger:r,start:"top 90%"}}).from(o,{strokeDashoffset:100,duration:1,ease:"power2.out"},0).from(Ne(".laurel__leaf",r),{scale:0,opacity:0,transformOrigin:"50% 50%",duration:.7,ease:"back.out(2.2)",stagger:l=>l%gp*.04},.05).from(Ne(".plaque__t > *",r),{opacity:0,y:14,duration:1,stagger:.07,ease:"expo.out"},.15)}),Ne(".split").forEach(r=>{Vt.from(Ne(".split__label > *",r),{opacity:0,y:18,duration:1.1,stagger:.08,ease:"expo.out",scrollTrigger:{trigger:r,start:"top 86%"}}),Vt.from(Ne(".ledger__item, .acklist li",r),{opacity:0,y:18,duration:1,stagger:.05,ease:"expo.out",scrollTrigger:{trigger:r,start:"top 84%"}})});let n=vt(".about__photo"),i=vt(".about__photo img");Vt.fromTo(n,{"--develop":1},{"--develop":0,ease:"none",scrollTrigger:{trigger:"#portrait",start:"top 85%",end:"center 55%",scrub:!0}}),Vt.fromTo(i,{scale:1.1,yPercent:5,transformOrigin:"50% 100%"},{scale:1,yPercent:0,ease:"none",scrollTrigger:{trigger:"#portrait",start:"top 100%",end:"bottom 40%",scrub:!0}}),Vt.from(".about__bracket",{scale:2,opacity:0,duration:1.4,ease:"expo.out",stagger:.1,scrollTrigger:{trigger:"#portrait",start:"top 70%"}}),Vt.from(".about__portrait figcaption",{opacity:0,y:10,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:"#portrait",start:"center 80%"}}),Vt.from("#aboutBody p",{opacity:0,y:26,duration:1.3,stagger:.12,ease:"expo.out",scrollTrigger:{trigger:"#aboutBody",start:"top 85%"}}),$t.create({trigger:"#stats",start:"top 85%",once:!0,onEnter:()=>{Ne(".stat").forEach((r,a)=>{Vt.from(r,{opacity:0,y:30,duration:1.2,delay:a*.1,ease:"expo.out"}),Ne(".odo__col",r).forEach((o,l,c)=>{Vt.fromTo(o,{yPercent:0},{yPercent:-((+o.dataset.d+20)*100)/30,duration:2.2+(c.length-l)*.25,delay:a*.1,ease:"expo.out"})})}),ei.whoosh(1)}}),s.add("(min-width: 761px)",()=>{let r=vt("#reelTrack"),a=Ne(".frame",r),o=a.filter(g=>!g.classList.contains("frame--leader"));if(!o.length)return;let l=[],c=0,h=0,f=2e3,d=()=>{let g=vt(".career .head").getBoundingClientRect().left,m=o[o.length-1];l=a.map(_=>_.offsetLeft+_.offsetWidth/2),c=g-o[0].offsetLeft,h=Math.min(c,innerWidth-g-(m.offsetLeft+m.offsetWidth)),f=Math.max(1500,innerWidth*1.45)},u=()=>{let g=+Vt.getProperty(r,"x"),m=innerWidth/2;a.forEach((_,y)=>{let T=l[y]+g-m,v=Math.max(-1.3,Math.min(1.3,T/f));_.style.transform=`translate3d(${(f*Math.sin(v)-T).toFixed(1)}px,0,${(f*Math.cos(v)-f).toFixed(1)}px) rotateY(${(v*57.2958).toFixed(2)}deg)`})};d();let p=Vt.fromTo(r,{x:()=>c},{x:()=>h,ease:"none",onUpdate:u,scrollTrigger:{trigger:".career",start:"top top",end:()=>"+="+Math.max(1,c-h),pin:!0,scrub:.6,invalidateOnRefresh:!0,onRefreshInit:d,onRefresh:u}});return u(),()=>{p.scrollTrigger?.kill(),p.kill(),Vt.set(r,{clearProps:"transform"}),a.forEach(g=>g.style.transform="")}}),s.add("(max-width: 760px)",()=>{Ne(".frame:not(.frame--leader)").forEach(r=>Vt.from(r,{opacity:0,y:40,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:r,start:"top 88%"}}))}),Vt.from(".guide__group",{opacity:0,y:30,duration:1.2,stagger:.15,ease:"expo.out",scrollTrigger:{trigger:"#guide",start:"top 85%"}}),Vt.from("#monitor",{opacity:0,y:40,rotateY:-16,transformPerspective:900,duration:1.5,ease:"expo.out",scrollTrigger:{trigger:"#monitor",start:"top 88%"}}),Ne("[data-roll]").forEach(r=>{Vt.fromTo(r,{opacity:0,y:24},{opacity:1,y:0,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:r,start:"top 92%"}})}),Ne(".hl").forEach(r=>$t.create({trigger:r,start:"top 82%",once:!0,onEnter:()=>r.classList.add("is-in")})),Vt.from(".direct li, .social li",{opacity:0,y:20,duration:1,stagger:.07,ease:"expo.out",scrollTrigger:{trigger:"#direct",start:"top 90%"}}),Vt.from(".field, .form__actions",{opacity:0,y:24,duration:1.1,stagger:.08,ease:"expo.out",scrollTrigger:{trigger:"#form",start:"top 85%"}}),Vt.fromTo("#sign",{yPercent:30},{yPercent:0,ease:"none",scrollTrigger:{trigger:".foot",start:"top bottom",end:"bottom bottom",scrub:!0}})}function eT(){let s=vt("#sign");if(s)if(Pu&&!Qe){let t=Vt.quickTo(s,"--mx",{duration:.9,ease:"power3.out"}),e=Vt.quickTo(s,"--my",{duration:.9,ease:"power3.out"});Vt.set(s,{"--mx":50,"--my":50}),vt(".foot").addEventListener("pointermove",n=>{let i=s.getBoundingClientRect();t((n.clientX-i.left)/i.width*100),e((n.clientY-i.top)/i.height*100)})}else Qe?(s.style.setProperty("--mx",50),s.style.setProperty("--my",50)):Vt.fromTo(s,{"--mx":10},{"--mx":90,"--my":50,duration:6,ease:"sine.inOut",repeat:-1,yoyo:!0})}function nT(){let s=vt("#form"),t=vt("#formStatus"),e=bn.contact||{},n=Ne(".field",s).map(l=>({f:l,input:vt("input, textarea",l),err:vt(".field__err",l)})),i=Ne("[data-channel]",s);i.forEach(l=>{let c=l.dataset.channel==="whatsapp"?!!e.whatsapp:!!(e.email||e.formEndpoint);l.hidden=!c}),e.formEndpoint&&(vt('[data-channel="email"]',s).textContent="Send message");let r=({f:l,input:c,err:h})=>{let f=c.value.trim(),d=!f||c.type==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f);return l.classList.toggle("is-invalid",d),c.setAttribute("aria-invalid",d?"true":"false"),h&&(h.hidden=!d),!d},a=(l,c)=>{if(t.textContent=l,!c)return;let h=Object.assign(document.createElement("a"),{href:c.href,textContent:c.text});c.blank&&(h.target="_blank",h.rel="noopener"),t.append(" ",h,".")},o="email";i.forEach(l=>l.addEventListener("click",()=>{o=l.dataset.channel})),s.addEventListener("submit",async l=>{l.preventDefault();let c=l.submitter?.dataset.channel||o,h=n.filter(m=>!r(m));if(h.length){a(h.length===1?"One field needs another look.":`${h.length} fields need another look.`),h[0].input.focus();return}let f=Object.fromEntries(new FormData(s));if(f._gotcha)return;let d=f.name.trim(),u=f.email.trim(),p=f.message.trim();if(c==="whatsapp"&&e.whatsapp){let m=`https://wa.me/${encodeURIComponent(e.whatsapp)}?text=${encodeURIComponent(`Hello Shirly, I'm ${d}.

${p}

${u}`)}`,_=Object.assign(document.createElement("a"),{href:m,target:"_blank",rel:"noopener"});document.body.append(_),_.click(),_.remove(),a("WhatsApp should open with your message ready to send. If it doesn't,",{href:m,text:"open WhatsApp here",blank:!0});return}if(e.formEndpoint){a("Sending\u2026"),i.forEach(m=>m.disabled=!0);try{let m=await fetch(e.formEndpoint,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:d,email:u,message:p})});if(!m.ok)throw new Error(String(m.status));s.reset(),a("Message sent. Thank you, I will reply soon.")}catch{a("The message didn't go through. Please write to",{href:`mailto:${e.email}`,text:e.email})}finally{i.forEach(m=>m.disabled=!1)}return}let g=`mailto:${e.email}?subject=${encodeURIComponent("Project enquiry from "+d)}&body=${encodeURIComponent(`${p}

${d} (${u})`)}`;location.href=g,a("Your email app should open with the message ready to send. If it doesn't, write to",{href:g,text:e.email})}),s.addEventListener("input",l=>{let c=n.find(h=>h.input===l.target);c&&c.f.classList.contains("is-invalid")&&r(c)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",P_):P_();})();

// $Id: jquery.js,v 1.12.2.3 2008/06/25 09:38:39 goba Exp $ 

/*
 * jQuery 1.2.6 - New Wave Javascript
 *
 * Copyright (c) 2008 John Resig (jquery.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Date: 2008-05-24 14:22:17 -0400 (Sat, 24 May 2008)
 * Rev: 5685
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(H(){J w=1b.4M,3m$=1b.$;J D=1b.4M=1b.$=H(a,b){I 2B D.17.5j(a,b)};J u=/^[^<]*(<(.|\\s)+>)[^>]*$|^#(\\w+)$/,62=/^.[^:#\\[\\.]*$/,12;D.17=D.44={5j:H(d,b){d=d||S;G(d.16){7[0]=d;7.K=1;I 7}G(1j d=="23"){J c=u.2D(d);G(c&&(c[1]||!b)){G(c[1])d=D.4h([c[1]],b);N{J a=S.61(c[3]);G(a){G(a.2v!=c[3])I D().2q(d);I D(a)}d=[]}}N I D(b).2q(d)}N G(D.1D(d))I D(S)[D.17.27?"27":"43"](d);I 7.6Y(D.2d(d))},5w:"1.2.6",8G:H(){I 7.K},K:0,3p:H(a){I a==12?D.2d(7):7[a]},2I:H(b){J a=D(b);a.5n=7;I a},6Y:H(a){7.K=0;2p.44.1p.1w(7,a);I 7},P:H(a,b){I D.P(7,a,b)},5i:H(b){J a=-1;I D.2L(b&&b.5w?b[0]:b,7)},1K:H(c,a,b){J d=c;G(c.1q==56)G(a===12)I 7[0]&&D[b||"1K"](7[0],c);N{d={};d[c]=a}I 7.P(H(i){R(c 1n d)D.1K(b?7.V:7,c,D.1i(7,d[c],b,i,c))})},1g:H(b,a){G((b==\'2h\'||b==\'1Z\')&&3d(a)<0)a=12;I 7.1K(b,a,"2a")},1r:H(b){G(1j b!="49"&&b!=U)I 7.4E().3v((7[0]&&7[0].2z||S).5F(b));J a="";D.P(b||7,H(){D.P(7.3t,H(){G(7.16!=8)a+=7.16!=1?7.76:D.17.1r([7])})});I a},5z:H(b){G(7[0])D(b,7[0].2z).5y().39(7[0]).2l(H(){J a=7;1B(a.1x)a=a.1x;I a}).3v(7);I 7},8Y:H(a){I 7.P(H(){D(7).6Q().5z(a)})},8R:H(a){I 7.P(H(){D(7).5z(a)})},3v:H(){I 7.3W(19,M,Q,H(a){G(7.16==1)7.3U(a)})},6F:H(){I 7.3W(19,M,M,H(a){G(7.16==1)7.39(a,7.1x)})},6E:H(){I 7.3W(19,Q,Q,H(a){7.1d.39(a,7)})},5q:H(){I 7.3W(19,Q,M,H(a){7.1d.39(a,7.2H)})},3l:H(){I 7.5n||D([])},2q:H(b){J c=D.2l(7,H(a){I D.2q(b,a)});I 7.2I(/[^+>] [^+>]/.11(b)||b.1h("..")>-1?D.4r(c):c)},5y:H(e){J f=7.2l(H(){G(D.14.1f&&!D.4n(7)){J a=7.6o(M),5h=S.3h("1v");5h.3U(a);I D.4h([5h.4H])[0]}N I 7.6o(M)});J d=f.2q("*").5c().P(H(){G(7[E]!=12)7[E]=U});G(e===M)7.2q("*").5c().P(H(i){G(7.16==3)I;J c=D.L(7,"3w");R(J a 1n c)R(J b 1n c[a])D.W.1e(d[i],a,c[a][b],c[a][b].L)});I f},1E:H(b){I 7.2I(D.1D(b)&&D.3C(7,H(a,i){I b.1k(a,i)})||D.3g(b,7))},4Y:H(b){G(b.1q==56)G(62.11(b))I 7.2I(D.3g(b,7,M));N b=D.3g(b,7);J a=b.K&&b[b.K-1]!==12&&!b.16;I 7.1E(H(){I a?D.2L(7,b)<0:7!=b})},1e:H(a){I 7.2I(D.4r(D.2R(7.3p(),1j a==\'23\'?D(a):D.2d(a))))},3F:H(a){I!!a&&D.3g(a,7).K>0},7T:H(a){I 7.3F("."+a)},6e:H(b){G(b==12){G(7.K){J c=7[0];G(D.Y(c,"2A")){J e=c.64,63=[],15=c.15,2V=c.O=="2A-2V";G(e<0)I U;R(J i=2V?e:0,2f=2V?e+1:15.K;i<2f;i++){J d=15[i];G(d.2W){b=D.14.1f&&!d.at.2x.an?d.1r:d.2x;G(2V)I b;63.1p(b)}}I 63}N I(7[0].2x||"").1o(/\\r/g,"")}I 12}G(b.1q==4L)b+=\'\';I 7.P(H(){G(7.16!=1)I;G(b.1q==2p&&/5O|5L/.11(7.O))7.4J=(D.2L(7.2x,b)>=0||D.2L(7.34,b)>=0);N G(D.Y(7,"2A")){J a=D.2d(b);D("9R",7).P(H(){7.2W=(D.2L(7.2x,a)>=0||D.2L(7.1r,a)>=0)});G(!a.K)7.64=-1}N 7.2x=b})},2K:H(a){I a==12?(7[0]?7[0].4H:U):7.4E().3v(a)},7b:H(a){I 7.5q(a).21()},79:H(i){I 7.3s(i,i+1)},3s:H(){I 7.2I(2p.44.3s.1w(7,19))},2l:H(b){I 7.2I(D.2l(7,H(a,i){I b.1k(a,i,a)}))},5c:H(){I 7.1e(7.5n)},L:H(d,b){J a=d.1R(".");a[1]=a[1]?"."+a[1]:"";G(b===12){J c=7.5C("9z"+a[1]+"!",[a[0]]);G(c===12&&7.K)c=D.L(7[0],d);I c===12&&a[1]?7.L(a[0]):c}N I 7.1P("9u"+a[1]+"!",[a[0],b]).P(H(){D.L(7,d,b)})},3b:H(a){I 7.P(H(){D.3b(7,a)})},3W:H(g,f,h,d){J e=7.K>1,3x;I 7.P(H(){G(!3x){3x=D.4h(g,7.2z);G(h)3x.9o()}J b=7;G(f&&D.Y(7,"1T")&&D.Y(3x[0],"4F"))b=7.3H("22")[0]||7.3U(7.2z.3h("22"));J c=D([]);D.P(3x,H(){J a=e?D(7).5y(M)[0]:7;G(D.Y(a,"1m"))c=c.1e(a);N{G(a.16==1)c=c.1e(D("1m",a).21());d.1k(b,a)}});c.P(6T)})}};D.17.5j.44=D.17;H 6T(i,a){G(a.4d)D.3Y({1a:a.4d,31:Q,1O:"1m"});N D.5u(a.1r||a.6O||a.4H||"");G(a.1d)a.1d.37(a)}H 1z(){I+2B 8J}D.1l=D.17.1l=H(){J b=19[0]||{},i=1,K=19.K,4x=Q,15;G(b.1q==8I){4x=b;b=19[1]||{};i=2}G(1j b!="49"&&1j b!="H")b={};G(K==i){b=7;--i}R(;i<K;i++)G((15=19[i])!=U)R(J c 1n 15){J a=b[c],2w=15[c];G(b===2w)6M;G(4x&&2w&&1j 2w=="49"&&!2w.16)b[c]=D.1l(4x,a||(2w.K!=U?[]:{}),2w);N G(2w!==12)b[c]=2w}I b};J E="4M"+1z(),6K=0,5r={},6G=/z-?5i|8B-?8A|1y|6B|8v-?1Z/i,3P=S.3P||{};D.1l({8u:H(a){1b.$=3m$;G(a)1b.4M=w;I D},1D:H(a){I!!a&&1j a!="23"&&!a.Y&&a.1q!=2p&&/^[\\s[]?H/.11(a+"")},4n:H(a){I a.1C&&!a.1c||a.2j&&a.2z&&!a.2z.1c},5u:H(a){a=D.3k(a);G(a){J b=S.3H("6w")[0]||S.1C,1m=S.3h("1m");1m.O="1r/4t";G(D.14.1f)1m.1r=a;N 1m.3U(S.5F(a));b.39(1m,b.1x);b.37(1m)}},Y:H(b,a){I b.Y&&b.Y.2r()==a.2r()},1Y:{},L:H(c,d,b){c=c==1b?5r:c;J a=c[E];G(!a)a=c[E]=++6K;G(d&&!D.1Y[a])D.1Y[a]={};G(b!==12)D.1Y[a][d]=b;I d?D.1Y[a][d]:a},3b:H(c,b){c=c==1b?5r:c;J a=c[E];G(b){G(D.1Y[a]){2U D.1Y[a][b];b="";R(b 1n D.1Y[a])1X;G(!b)D.3b(c)}}N{1U{2U c[E]}1V(e){G(c.5l)c.5l(E)}2U D.1Y[a]}},P:H(d,a,c){J e,i=0,K=d.K;G(c){G(K==12){R(e 1n d)G(a.1w(d[e],c)===Q)1X}N R(;i<K;)G(a.1w(d[i++],c)===Q)1X}N{G(K==12){R(e 1n d)G(a.1k(d[e],e,d[e])===Q)1X}N R(J b=d[0];i<K&&a.1k(b,i,b)!==Q;b=d[++i]){}}I d},1i:H(b,a,c,i,d){G(D.1D(a))a=a.1k(b,i);I a&&a.1q==4L&&c=="2a"&&!6G.11(d)?a+"2X":a},1F:{1e:H(c,b){D.P((b||"").1R(/\\s+/),H(i,a){G(c.16==1&&!D.1F.3T(c.1F,a))c.1F+=(c.1F?" ":"")+a})},21:H(c,b){G(c.16==1)c.1F=b!=12?D.3C(c.1F.1R(/\\s+/),H(a){I!D.1F.3T(b,a)}).6s(" "):""},3T:H(b,a){I D.2L(a,(b.1F||b).6r().1R(/\\s+/))>-1}},6q:H(b,c,a){J e={};R(J d 1n c){e[d]=b.V[d];b.V[d]=c[d]}a.1k(b);R(J d 1n c)b.V[d]=e[d]},1g:H(d,e,c){G(e=="2h"||e=="1Z"){J b,3X={30:"5x",5g:"1G",18:"3I"},35=e=="2h"?["5e","6k"]:["5G","6i"];H 5b(){b=e=="2h"?d.8f:d.8c;J a=0,2C=0;D.P(35,H(){a+=3d(D.2a(d,"57"+7,M))||0;2C+=3d(D.2a(d,"2C"+7+"4b",M))||0});b-=29.83(a+2C)}G(D(d).3F(":4j"))5b();N D.6q(d,3X,5b);I 29.2f(0,b)}I D.2a(d,e,c)},2a:H(f,l,k){J e,V=f.V;H 3E(b){G(!D.14.2k)I Q;J a=3P.54(b,U);I!a||a.52("3E")==""}G(l=="1y"&&D.14.1f){e=D.1K(V,"1y");I e==""?"1":e}G(D.14.2G&&l=="18"){J d=V.50;V.50="0 7Y 7W";V.50=d}G(l.1I(/4i/i))l=y;G(!k&&V&&V[l])e=V[l];N G(3P.54){G(l.1I(/4i/i))l="4i";l=l.1o(/([A-Z])/g,"-$1").3y();J c=3P.54(f,U);G(c&&!3E(f))e=c.52(l);N{J g=[],2E=[],a=f,i=0;R(;a&&3E(a);a=a.1d)2E.6h(a);R(;i<2E.K;i++)G(3E(2E[i])){g[i]=2E[i].V.18;2E[i].V.18="3I"}e=l=="18"&&g[2E.K-1]!=U?"2F":(c&&c.52(l))||"";R(i=0;i<g.K;i++)G(g[i]!=U)2E[i].V.18=g[i]}G(l=="1y"&&e=="")e="1"}N G(f.4g){J h=l.1o(/\\-(\\w)/g,H(a,b){I b.2r()});e=f.4g[l]||f.4g[h];G(!/^\\d+(2X)?$/i.11(e)&&/^\\d/.11(e)){J j=V.1A,66=f.65.1A;f.65.1A=f.4g.1A;V.1A=e||0;e=V.aM+"2X";V.1A=j;f.65.1A=66}}I e},4h:H(l,h){J k=[];h=h||S;G(1j h.3h==\'12\')h=h.2z||h[0]&&h[0].2z||S;D.P(l,H(i,d){G(!d)I;G(d.1q==4L)d+=\'\';G(1j d=="23"){d=d.1o(/(<(\\w+)[^>]*?)\\/>/g,H(b,a,c){I c.1I(/^(aK|4f|7E|aG|4T|7A|aB|3n|az|ay|av)$/i)?b:a+"></"+c+">"});J f=D.3k(d).3y(),1v=h.3h("1v");J e=!f.1h("<au")&&[1,"<2A 7w=\'7w\'>","</2A>"]||!f.1h("<ar")&&[1,"<7v>","</7v>"]||f.1I(/^<(aq|22|am|ak|ai)/)&&[1,"<1T>","</1T>"]||!f.1h("<4F")&&[2,"<1T><22>","</22></1T>"]||(!f.1h("<af")||!f.1h("<ad"))&&[3,"<1T><22><4F>","</4F></22></1T>"]||!f.1h("<7E")&&[2,"<1T><22></22><7q>","</7q></1T>"]||D.14.1f&&[1,"1v<1v>","</1v>"]||[0,"",""];1v.4H=e[1]+d+e[2];1B(e[0]--)1v=1v.5T;G(D.14.1f){J g=!f.1h("<1T")&&f.1h("<22")<0?1v.1x&&1v.1x.3t:e[1]=="<1T>"&&f.1h("<22")<0?1v.3t:[];R(J j=g.K-1;j>=0;--j)G(D.Y(g[j],"22")&&!g[j].3t.K)g[j].1d.37(g[j]);G(/^\\s/.11(d))1v.39(h.5F(d.1I(/^\\s*/)[0]),1v.1x)}d=D.2d(1v.3t)}G(d.K===0&&(!D.Y(d,"3V")&&!D.Y(d,"2A")))I;G(d[0]==12||D.Y(d,"3V")||d.15)k.1p(d);N k=D.2R(k,d)});I k},1K:H(d,f,c){G(!d||d.16==3||d.16==8)I 12;J e=!D.4n(d),40=c!==12,1f=D.14.1f;f=e&&D.3X[f]||f;G(d.2j){J g=/5Q|4d|V/.11(f);G(f=="2W"&&D.14.2k)d.1d.64;G(f 1n d&&e&&!g){G(40){G(f=="O"&&D.Y(d,"4T")&&d.1d)7p"O a3 a1\'t 9V 9U";d[f]=c}G(D.Y(d,"3V")&&d.7i(f))I d.7i(f).76;I d[f]}G(1f&&e&&f=="V")I D.1K(d.V,"9T",c);G(40)d.9Q(f,""+c);J h=1f&&e&&g?d.4G(f,2):d.4G(f);I h===U?12:h}G(1f&&f=="1y"){G(40){d.6B=1;d.1E=(d.1E||"").1o(/7f\\([^)]*\\)/,"")+(3r(c)+\'\'=="9L"?"":"7f(1y="+c*7a+")")}I d.1E&&d.1E.1h("1y=")>=0?(3d(d.1E.1I(/1y=([^)]*)/)[1])/7a)+\'\':""}f=f.1o(/-([a-z])/9H,H(a,b){I b.2r()});G(40)d[f]=c;I d[f]},3k:H(a){I(a||"").1o(/^\\s+|\\s+$/g,"")},2d:H(b){J a=[];G(b!=U){J i=b.K;G(i==U||b.1R||b.4I||b.1k)a[0]=b;N 1B(i)a[--i]=b[i]}I a},2L:H(b,a){R(J i=0,K=a.K;i<K;i++)G(a[i]===b)I i;I-1},2R:H(a,b){J i=0,T,2S=a.K;G(D.14.1f){1B(T=b[i++])G(T.16!=8)a[2S++]=T}N 1B(T=b[i++])a[2S++]=T;I a},4r:H(a){J c=[],2o={};1U{R(J i=0,K=a.K;i<K;i++){J b=D.L(a[i]);G(!2o[b]){2o[b]=M;c.1p(a[i])}}}1V(e){c=a}I c},3C:H(c,a,d){J b=[];R(J i=0,K=c.K;i<K;i++)G(!d!=!a(c[i],i))b.1p(c[i]);I b},2l:H(d,a){J c=[];R(J i=0,K=d.K;i<K;i++){J b=a(d[i],i);G(b!=U)c[c.K]=b}I c.7d.1w([],c)}});J v=9B.9A.3y();D.14={5B:(v.1I(/.+(?:9y|9x|9w|9v)[\\/: ]([\\d.]+)/)||[])[1],2k:/75/.11(v),2G:/2G/.11(v),1f:/1f/.11(v)&&!/2G/.11(v),42:/42/.11(v)&&!/(9s|75)/.11(v)};J y=D.14.1f?"7o":"72";D.1l({71:!D.14.1f||S.70=="6Z",3X:{"R":"9n","9k":"1F","4i":y,72:y,7o:y,9h:"9f",9e:"9d",9b:"99"}});D.P({6W:H(a){I a.1d},97:H(a){I D.4S(a,"1d")},95:H(a){I D.3a(a,2,"2H")},91:H(a){I D.3a(a,2,"4l")},8Z:H(a){I D.4S(a,"2H")},8X:H(a){I D.4S(a,"4l")},8W:H(a){I D.5v(a.1d.1x,a)},8V:H(a){I D.5v(a.1x)},6Q:H(a){I D.Y(a,"8U")?a.8T||a.8S.S:D.2d(a.3t)}},H(c,d){D.17[c]=H(b){J a=D.2l(7,d);G(b&&1j b=="23")a=D.3g(b,a);I 7.2I(D.4r(a))}});D.P({6P:"3v",8Q:"6F",39:"6E",8P:"5q",8O:"7b"},H(c,b){D.17[c]=H(){J a=19;I 7.P(H(){R(J i=0,K=a.K;i<K;i++)D(a[i])[b](7)})}});D.P({8N:H(a){D.1K(7,a,"");G(7.16==1)7.5l(a)},8M:H(a){D.1F.1e(7,a)},8L:H(a){D.1F.21(7,a)},8K:H(a){D.1F[D.1F.3T(7,a)?"21":"1e"](7,a)},21:H(a){G(!a||D.1E(a,[7]).r.K){D("*",7).1e(7).P(H(){D.W.21(7);D.3b(7)});G(7.1d)7.1d.37(7)}},4E:H(){D(">*",7).21();1B(7.1x)7.37(7.1x)}},H(a,b){D.17[a]=H(){I 7.P(b,19)}});D.P(["6N","4b"],H(i,c){J b=c.3y();D.17[b]=H(a){I 7[0]==1b?D.14.2G&&S.1c["5t"+c]||D.14.2k&&1b["5s"+c]||S.70=="6Z"&&S.1C["5t"+c]||S.1c["5t"+c]:7[0]==S?29.2f(29.2f(S.1c["4y"+c],S.1C["4y"+c]),29.2f(S.1c["2i"+c],S.1C["2i"+c])):a==12?(7.K?D.1g(7[0],b):U):7.1g(b,a.1q==56?a:a+"2X")}});H 25(a,b){I a[0]&&3r(D.2a(a[0],b,M),10)||0}J C=D.14.2k&&3r(D.14.5B)<8H?"(?:[\\\\w*3m-]|\\\\\\\\.)":"(?:[\\\\w\\8F-\\8E*3m-]|\\\\\\\\.)",6L=2B 4v("^>\\\\s*("+C+"+)"),6J=2B 4v("^("+C+"+)(#)("+C+"+)"),6I=2B 4v("^([#.]?)("+C+"*)");D.1l({6H:{"":H(a,i,m){I m[2]=="*"||D.Y(a,m[2])},"#":H(a,i,m){I a.4G("2v")==m[2]},":":{8D:H(a,i,m){I i<m[3]-0},8C:H(a,i,m){I i>m[3]-0},3a:H(a,i,m){I m[3]-0==i},79:H(a,i,m){I m[3]-0==i},3o:H(a,i){I i==0},3S:H(a,i,m,r){I i==r.K-1},6D:H(a,i){I i%2==0},6C:H(a,i){I i%2},"3o-4u":H(a){I a.1d.3H("*")[0]==a},"3S-4u":H(a){I D.3a(a.1d.5T,1,"4l")==a},"8z-4u":H(a){I!D.3a(a.1d.5T,2,"4l")},6W:H(a){I a.1x},4E:H(a){I!a.1x},8y:H(a,i,m){I(a.6O||a.8x||D(a).1r()||"").1h(m[3])>=0},4j:H(a){I"1G"!=a.O&&D.1g(a,"18")!="2F"&&D.1g(a,"5g")!="1G"},1G:H(a){I"1G"==a.O||D.1g(a,"18")=="2F"||D.1g(a,"5g")=="1G"},8w:H(a){I!a.3R},3R:H(a){I a.3R},4J:H(a){I a.4J},2W:H(a){I a.2W||D.1K(a,"2W")},1r:H(a){I"1r"==a.O},5O:H(a){I"5O"==a.O},5L:H(a){I"5L"==a.O},5p:H(a){I"5p"==a.O},3Q:H(a){I"3Q"==a.O},5o:H(a){I"5o"==a.O},6A:H(a){I"6A"==a.O},6z:H(a){I"6z"==a.O},2s:H(a){I"2s"==a.O||D.Y(a,"2s")},4T:H(a){I/4T|2A|6y|2s/i.11(a.Y)},3T:H(a,i,m){I D.2q(m[3],a).K},8t:H(a){I/h\\d/i.11(a.Y)},8s:H(a){I D.3C(D.3O,H(b){I a==b.T}).K}}},6x:[/^(\\[) *@?([\\w-]+) *([!*$^~=]*) *(\'?"?)(.*?)\\4 *\\]/,/^(:)([\\w-]+)\\("?\'?(.*?(\\(.*?\\))?[^(]*?)"?\'?\\)/,2B 4v("^([:.#]*)("+C+"+)")],3g:H(a,c,b){J d,1t=[];1B(a&&a!=d){d=a;J f=D.1E(a,c,b);a=f.t.1o(/^\\s*,\\s*/,"");1t=b?c=f.r:D.2R(1t,f.r)}I 1t},2q:H(t,o){G(1j t!="23")I[t];G(o&&o.16!=1&&o.16!=9)I[];o=o||S;J d=[o],2o=[],3S,Y;1B(t&&3S!=t){J r=[];3S=t;t=D.3k(t);J l=Q,3j=6L,m=3j.2D(t);G(m){Y=m[1].2r();R(J i=0;d[i];i++)R(J c=d[i].1x;c;c=c.2H)G(c.16==1&&(Y=="*"||c.Y.2r()==Y))r.1p(c);d=r;t=t.1o(3j,"");G(t.1h(" ")==0)6M;l=M}N{3j=/^([>+~])\\s*(\\w*)/i;G((m=3j.2D(t))!=U){r=[];J k={};Y=m[2].2r();m=m[1];R(J j=0,3i=d.K;j<3i;j++){J n=m=="~"||m=="+"?d[j].2H:d[j].1x;R(;n;n=n.2H)G(n.16==1){J g=D.L(n);G(m=="~"&&k[g])1X;G(!Y||n.Y.2r()==Y){G(m=="~")k[g]=M;r.1p(n)}G(m=="+")1X}}d=r;t=D.3k(t.1o(3j,""));l=M}}G(t&&!l){G(!t.1h(",")){G(o==d[0])d.4s();2o=D.2R(2o,d);r=d=[o];t=" "+t.6v(1,t.K)}N{J h=6J;J m=h.2D(t);G(m){m=[0,m[2],m[3],m[1]]}N{h=6I;m=h.2D(t)}m[2]=m[2].1o(/\\\\/g,"");J f=d[d.K-1];G(m[1]=="#"&&f&&f.61&&!D.4n(f)){J p=f.61(m[2]);G((D.14.1f||D.14.2G)&&p&&1j p.2v=="23"&&p.2v!=m[2])p=D(\'[@2v="\'+m[2]+\'"]\',f)[0];d=r=p&&(!m[3]||D.Y(p,m[3]))?[p]:[]}N{R(J i=0;d[i];i++){J a=m[1]=="#"&&m[3]?m[3]:m[1]!=""||m[0]==""?"*":m[2];G(a=="*"&&d[i].Y.3y()=="49")a="3n";r=D.2R(r,d[i].3H(a))}G(m[1]==".")r=D.5m(r,m[2]);G(m[1]=="#"){J e=[];R(J i=0;r[i];i++)G(r[i].4G("2v")==m[2]){e=[r[i]];1X}r=e}d=r}t=t.1o(h,"")}}G(t){J b=D.1E(t,r);d=r=b.r;t=D.3k(b.t)}}G(t)d=[];G(d&&o==d[0])d.4s();2o=D.2R(2o,d);I 2o},5m:H(r,m,a){m=" "+m+" ";J c=[];R(J i=0;r[i];i++){J b=(" "+r[i].1F+" ").1h(m)>=0;G(!a&&b||a&&!b)c.1p(r[i])}I c},1E:H(t,r,h){J d;1B(t&&t!=d){d=t;J p=D.6x,m;R(J i=0;p[i];i++){m=p[i].2D(t);G(m){t=t.8r(m[0].K);m[2]=m[2].1o(/\\\\/g,"");1X}}G(!m)1X;G(m[1]==":"&&m[2]=="4Y")r=62.11(m[3])?D.1E(m[3],r,M).r:D(r).4Y(m[3]);N G(m[1]==".")r=D.5m(r,m[2],h);N G(m[1]=="["){J g=[],O=m[3];R(J i=0,3i=r.K;i<3i;i++){J a=r[i],z=a[D.3X[m[2]]||m[2]];G(z==U||/5Q|4d|2W/.11(m[2]))z=D.1K(a,m[2])||\'\';G((O==""&&!!z||O=="="&&z==m[5]||O=="!="&&z!=m[5]||O=="^="&&z&&!z.1h(m[5])||O=="$="&&z.6v(z.K-m[5].K)==m[5]||(O=="*="||O=="~=")&&z.1h(m[5])>=0)^h)g.1p(a)}r=g}N G(m[1]==":"&&m[2]=="3a-4u"){J e={},g=[],11=/(-?)(\\d*)n((?:\\+|-)?\\d*)/.2D(m[3]=="6D"&&"2n"||m[3]=="6C"&&"2n+1"||!/\\D/.11(m[3])&&"8q+"+m[3]||m[3]),3o=(11[1]+(11[2]||1))-0,d=11[3]-0;R(J i=0,3i=r.K;i<3i;i++){J j=r[i],1d=j.1d,2v=D.L(1d);G(!e[2v]){J c=1;R(J n=1d.1x;n;n=n.2H)G(n.16==1)n.4q=c++;e[2v]=M}J b=Q;G(3o==0){G(j.4q==d)b=M}N G((j.4q-d)%3o==0&&(j.4q-d)/3o>=0)b=M;G(b^h)g.1p(j)}r=g}N{J f=D.6H[m[1]];G(1j f=="49")f=f[m[2]];G(1j f=="23")f=6u("Q||H(a,i){I "+f+";}");r=D.3C(r,H(a,i){I f(a,i,m,r)},h)}}I{r:r,t:t}},4S:H(b,c){J a=[],1t=b[c];1B(1t&&1t!=S){G(1t.16==1)a.1p(1t);1t=1t[c]}I a},3a:H(a,e,c,b){e=e||1;J d=0;R(;a;a=a[c])G(a.16==1&&++d==e)1X;I a},5v:H(n,a){J r=[];R(;n;n=n.2H){G(n.16==1&&n!=a)r.1p(n)}I r}});D.W={1e:H(f,i,g,e){G(f.16==3||f.16==8)I;G(D.14.1f&&f.4I)f=1b;G(!g.24)g.24=7.24++;G(e!=12){J h=g;g=7.3M(h,H(){I h.1w(7,19)});g.L=e}J j=D.L(f,"3w")||D.L(f,"3w",{}),1H=D.L(f,"1H")||D.L(f,"1H",H(){G(1j D!="12"&&!D.W.5k)I D.W.1H.1w(19.3L.T,19)});1H.T=f;D.P(i.1R(/\\s+/),H(c,b){J a=b.1R(".");b=a[0];g.O=a[1];J d=j[b];G(!d){d=j[b]={};G(!D.W.2t[b]||D.W.2t[b].4p.1k(f)===Q){G(f.3K)f.3K(b,1H,Q);N G(f.6t)f.6t("4o"+b,1H)}}d[g.24]=g;D.W.26[b]=M});f=U},24:1,26:{},21:H(e,h,f){G(e.16==3||e.16==8)I;J i=D.L(e,"3w"),1L,5i;G(i){G(h==12||(1j h=="23"&&h.8p(0)=="."))R(J g 1n i)7.21(e,g+(h||""));N{G(h.O){f=h.2y;h=h.O}D.P(h.1R(/\\s+/),H(b,a){J c=a.1R(".");a=c[0];G(i[a]){G(f)2U i[a][f.24];N R(f 1n i[a])G(!c[1]||i[a][f].O==c[1])2U i[a][f];R(1L 1n i[a])1X;G(!1L){G(!D.W.2t[a]||D.W.2t[a].4A.1k(e)===Q){G(e.6p)e.6p(a,D.L(e,"1H"),Q);N G(e.6n)e.6n("4o"+a,D.L(e,"1H"))}1L=U;2U i[a]}}})}R(1L 1n i)1X;G(!1L){J d=D.L(e,"1H");G(d)d.T=U;D.3b(e,"3w");D.3b(e,"1H")}}},1P:H(h,c,f,g,i){c=D.2d(c);G(h.1h("!")>=0){h=h.3s(0,-1);J a=M}G(!f){G(7.26[h])D("*").1e([1b,S]).1P(h,c)}N{G(f.16==3||f.16==8)I 12;J b,1L,17=D.1D(f[h]||U),W=!c[0]||!c[0].32;G(W){c.6h({O:h,2J:f,32:H(){},3J:H(){},4C:1z()});c[0][E]=M}c[0].O=h;G(a)c[0].6m=M;J d=D.L(f,"1H");G(d)b=d.1w(f,c);G((!17||(D.Y(f,\'a\')&&h=="4V"))&&f["4o"+h]&&f["4o"+h].1w(f,c)===Q)b=Q;G(W)c.4s();G(i&&D.1D(i)){1L=i.1w(f,b==U?c:c.7d(b));G(1L!==12)b=1L}G(17&&g!==Q&&b!==Q&&!(D.Y(f,\'a\')&&h=="4V")){7.5k=M;1U{f[h]()}1V(e){}}7.5k=Q}I b},1H:H(b){J a,1L,38,5f,4m;b=19[0]=D.W.6l(b||1b.W);38=b.O.1R(".");b.O=38[0];38=38[1];5f=!38&&!b.6m;4m=(D.L(7,"3w")||{})[b.O];R(J j 1n 4m){J c=4m[j];G(5f||c.O==38){b.2y=c;b.L=c.L;1L=c.1w(7,19);G(a!==Q)a=1L;G(1L===Q){b.32();b.3J()}}}I a},6l:H(b){G(b[E]==M)I b;J d=b;b={8o:d};J c="8n 8m 8l 8k 2s 8j 47 5d 6j 5E 8i L 8h 8g 4K 2y 5a 59 8e 8b 58 6f 8a 88 4k 87 86 84 6d 2J 4C 6c O 82 81 35".1R(" ");R(J i=c.K;i;i--)b[c[i]]=d[c[i]];b[E]=M;b.32=H(){G(d.32)d.32();d.80=Q};b.3J=H(){G(d.3J)d.3J();d.7Z=M};b.4C=b.4C||1z();G(!b.2J)b.2J=b.6d||S;G(b.2J.16==3)b.2J=b.2J.1d;G(!b.4k&&b.4K)b.4k=b.4K==b.2J?b.6c:b.4K;G(b.58==U&&b.5d!=U){J a=S.1C,1c=S.1c;b.58=b.5d+(a&&a.2e||1c&&1c.2e||0)-(a.6b||0);b.6f=b.6j+(a&&a.2c||1c&&1c.2c||0)-(a.6a||0)}G(!b.35&&((b.47||b.47===0)?b.47:b.5a))b.35=b.47||b.5a;G(!b.59&&b.5E)b.59=b.5E;G(!b.35&&b.2s)b.35=(b.2s&1?1:(b.2s&2?3:(b.2s&4?2:0)));I b},3M:H(a,b){b.24=a.24=a.24||b.24||7.24++;I b},2t:{27:{4p:H(){55();I},4A:H(){I}},3D:{4p:H(){G(D.14.1f)I Q;D(7).2O("53",D.W.2t.3D.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("53",D.W.2t.3D.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3D";I D.W.1H.1w(7,19)}},3N:{4p:H(){G(D.14.1f)I Q;D(7).2O("51",D.W.2t.3N.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("51",D.W.2t.3N.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3N";I D.W.1H.1w(7,19)}}}};D.17.1l({2O:H(c,a,b){I c=="4X"?7.2V(c,a,b):7.P(H(){D.W.1e(7,c,b||a,b&&a)})},2V:H(d,b,c){J e=D.W.3M(c||b,H(a){D(7).4e(a,e);I(c||b).1w(7,19)});I 7.P(H(){D.W.1e(7,d,e,c&&b)})},4e:H(a,b){I 7.P(H(){D.W.21(7,a,b)})},1P:H(c,a,b){I 7.P(H(){D.W.1P(c,a,7,M,b)})},5C:H(c,a,b){I 7[0]&&D.W.1P(c,a,7[0],Q,b)},2m:H(b){J c=19,i=1;1B(i<c.K)D.W.3M(b,c[i++]);I 7.4V(D.W.3M(b,H(a){7.4Z=(7.4Z||0)%i;a.32();I c[7.4Z++].1w(7,19)||Q}))},7X:H(a,b){I 7.2O(\'3D\',a).2O(\'3N\',b)},27:H(a){55();G(D.2Q)a.1k(S,D);N D.3A.1p(H(){I a.1k(7,D)});I 7}});D.1l({2Q:Q,3A:[],27:H(){G(!D.2Q){D.2Q=M;G(D.3A){D.P(D.3A,H(){7.1k(S)});D.3A=U}D(S).5C("27")}}});J x=Q;H 55(){G(x)I;x=M;G(S.3K&&!D.14.2G)S.3K("69",D.27,Q);G(D.14.1f&&1b==1S)(H(){G(D.2Q)I;1U{S.1C.7V("1A")}1V(3e){3B(19.3L,0);I}D.27()})();G(D.14.2G)S.3K("69",H(){G(D.2Q)I;R(J i=0;i<S.4W.K;i++)G(S.4W[i].3R){3B(19.3L,0);I}D.27()},Q);G(D.14.2k){J a;(H(){G(D.2Q)I;G(S.3f!="68"&&S.3f!="1J"){3B(19.3L,0);I}G(a===12)a=D("V, 7A[7U=7S]").K;G(S.4W.K!=a){3B(19.3L,0);I}D.27()})()}D.W.1e(1b,"43",D.27)}D.P(("7R,7Q,43,85,4y,4X,4V,7P,"+"7O,7N,89,53,51,7M,2A,"+"5o,7L,7K,8d,3e").1R(","),H(i,b){D.17[b]=H(a){I a?7.2O(b,a):7.1P(b)}});J F=H(a,c){J b=a.4k;1B(b&&b!=c)1U{b=b.1d}1V(3e){b=c}I b==c};D(1b).2O("4X",H(){D("*").1e(S).4e()});D.17.1l({67:D.17.43,43:H(g,d,c){G(1j g!=\'23\')I 7.67(g);J e=g.1h(" ");G(e>=0){J i=g.3s(e,g.K);g=g.3s(0,e)}c=c||H(){};J f="2P";G(d)G(D.1D(d)){c=d;d=U}N{d=D.3n(d);f="6g"}J h=7;D.3Y({1a:g,O:f,1O:"2K",L:d,1J:H(a,b){G(b=="1W"||b=="7J")h.2K(i?D("<1v/>").3v(a.4U.1o(/<1m(.|\\s)*?\\/1m>/g,"")).2q(i):a.4U);h.P(c,[a.4U,b,a])}});I 7},aL:H(){I D.3n(7.7I())},7I:H(){I 7.2l(H(){I D.Y(7,"3V")?D.2d(7.aH):7}).1E(H(){I 7.34&&!7.3R&&(7.4J||/2A|6y/i.11(7.Y)||/1r|1G|3Q/i.11(7.O))}).2l(H(i,c){J b=D(7).6e();I b==U?U:b.1q==2p?D.2l(b,H(a,i){I{34:c.34,2x:a}}):{34:c.34,2x:b}}).3p()}});D.P("7H,7G,7F,7D,7C,7B".1R(","),H(i,o){D.17[o]=H(f){I 7.2O(o,f)}});J B=1z();D.1l({3p:H(d,b,a,c){G(D.1D(b)){a=b;b=U}I D.3Y({O:"2P",1a:d,L:b,1W:a,1O:c})},aE:H(b,a){I D.3p(b,U,a,"1m")},aD:H(c,b,a){I D.3p(c,b,a,"3z")},aC:H(d,b,a,c){G(D.1D(b)){a=b;b={}}I D.3Y({O:"6g",1a:d,L:b,1W:a,1O:c})},aA:H(a){D.1l(D.60,a)},60:{1a:5Z.5Q,26:M,O:"2P",2T:0,7z:"4R/x-ax-3V-aw",7x:M,31:M,L:U,5Y:U,3Q:U,4Q:{2N:"4R/2N, 1r/2N",2K:"1r/2K",1m:"1r/4t, 4R/4t",3z:"4R/3z, 1r/4t",1r:"1r/as",4w:"*/*"}},4z:{},3Y:H(s){s=D.1l(M,s,D.1l(M,{},D.60,s));J g,2Z=/=\\?(&|$)/g,1u,L,O=s.O.2r();G(s.L&&s.7x&&1j s.L!="23")s.L=D.3n(s.L);G(s.1O=="4P"){G(O=="2P"){G(!s.1a.1I(2Z))s.1a+=(s.1a.1I(/\\?/)?"&":"?")+(s.4P||"7u")+"=?"}N G(!s.L||!s.L.1I(2Z))s.L=(s.L?s.L+"&":"")+(s.4P||"7u")+"=?";s.1O="3z"}G(s.1O=="3z"&&(s.L&&s.L.1I(2Z)||s.1a.1I(2Z))){g="4P"+B++;G(s.L)s.L=(s.L+"").1o(2Z,"="+g+"$1");s.1a=s.1a.1o(2Z,"="+g+"$1");s.1O="1m";1b[g]=H(a){L=a;1W();1J();1b[g]=12;1U{2U 1b[g]}1V(e){}G(i)i.37(h)}}G(s.1O=="1m"&&s.1Y==U)s.1Y=Q;G(s.1Y===Q&&O=="2P"){J j=1z();J k=s.1a.1o(/(\\?|&)3m=.*?(&|$)/,"$ap="+j+"$2");s.1a=k+((k==s.1a)?(s.1a.1I(/\\?/)?"&":"?")+"3m="+j:"")}G(s.L&&O=="2P"){s.1a+=(s.1a.1I(/\\?/)?"&":"?")+s.L;s.L=U}G(s.26&&!D.4O++)D.W.1P("7H");J n=/^(?:\\w+:)?\\/\\/([^\\/?#]+)/;G(s.1O=="1m"&&O=="2P"&&n.11(s.1a)&&n.2D(s.1a)[1]!=5Z.al){J i=S.3H("6w")[0];J h=S.3h("1m");h.4d=s.1a;G(s.7t)h.aj=s.7t;G(!g){J l=Q;h.ah=h.ag=H(){G(!l&&(!7.3f||7.3f=="68"||7.3f=="1J")){l=M;1W();1J();i.37(h)}}}i.3U(h);I 12}J m=Q;J c=1b.7s?2B 7s("ae.ac"):2B 7r();G(s.5Y)c.6R(O,s.1a,s.31,s.5Y,s.3Q);N c.6R(O,s.1a,s.31);1U{G(s.L)c.4B("ab-aa",s.7z);G(s.5S)c.4B("a9-5R-a8",D.4z[s.1a]||"a7, a6 a5 a4 5N:5N:5N a2");c.4B("X-9Z-9Y","7r");c.4B("9W",s.1O&&s.4Q[s.1O]?s.4Q[s.1O]+", */*":s.4Q.4w)}1V(e){}G(s.7m&&s.7m(c,s)===Q){s.26&&D.4O--;c.7l();I Q}G(s.26)D.W.1P("7B",[c,s]);J d=H(a){G(!m&&c&&(c.3f==4||a=="2T")){m=M;G(f){7k(f);f=U}1u=a=="2T"&&"2T"||!D.7j(c)&&"3e"||s.5S&&D.7h(c,s.1a)&&"7J"||"1W";G(1u=="1W"){1U{L=D.6X(c,s.1O,s.9S)}1V(e){1u="5J"}}G(1u=="1W"){J b;1U{b=c.5I("7g-5R")}1V(e){}G(s.5S&&b)D.4z[s.1a]=b;G(!g)1W()}N D.5H(s,c,1u);1J();G(s.31)c=U}};G(s.31){J f=4I(d,13);G(s.2T>0)3B(H(){G(c){c.7l();G(!m)d("2T")}},s.2T)}1U{c.9P(s.L)}1V(e){D.5H(s,c,U,e)}G(!s.31)d();H 1W(){G(s.1W)s.1W(L,1u);G(s.26)D.W.1P("7C",[c,s])}H 1J(){G(s.1J)s.1J(c,1u);G(s.26)D.W.1P("7F",[c,s]);G(s.26&&!--D.4O)D.W.1P("7G")}I c},5H:H(s,a,b,e){G(s.3e)s.3e(a,b,e);G(s.26)D.W.1P("7D",[a,s,e])},4O:0,7j:H(a){1U{I!a.1u&&5Z.9O=="5p:"||(a.1u>=7e&&a.1u<9N)||a.1u==7c||a.1u==9K||D.14.2k&&a.1u==12}1V(e){}I Q},7h:H(a,c){1U{J b=a.5I("7g-5R");I a.1u==7c||b==D.4z[c]||D.14.2k&&a.1u==12}1V(e){}I Q},6X:H(a,c,b){J d=a.5I("9J-O"),2N=c=="2N"||!c&&d&&d.1h("2N")>=0,L=2N?a.9I:a.4U;G(2N&&L.1C.2j=="5J")7p"5J";G(b)L=b(L,c);G(c=="1m")D.5u(L);G(c=="3z")L=6u("("+L+")");I L},3n:H(a){J s=[];G(a.1q==2p||a.5w)D.P(a,H(){s.1p(3u(7.34)+"="+3u(7.2x))});N R(J j 1n a)G(a[j]&&a[j].1q==2p)D.P(a[j],H(){s.1p(3u(j)+"="+3u(7))});N s.1p(3u(j)+"="+3u(D.1D(a[j])?a[j]():a[j]));I s.6s("&").1o(/%20/g,"+")}});D.17.1l({1N:H(c,b){I c?7.2g({1Z:"1N",2h:"1N",1y:"1N"},c,b):7.1E(":1G").P(H(){7.V.18=7.5D||"";G(D.1g(7,"18")=="2F"){J a=D("<"+7.2j+" />").6P("1c");7.V.18=a.1g("18");G(7.V.18=="2F")7.V.18="3I";a.21()}}).3l()},1M:H(b,a){I b?7.2g({1Z:"1M",2h:"1M",1y:"1M"},b,a):7.1E(":4j").P(H(){7.5D=7.5D||D.1g(7,"18");7.V.18="2F"}).3l()},78:D.17.2m,2m:H(a,b){I D.1D(a)&&D.1D(b)?7.78.1w(7,19):a?7.2g({1Z:"2m",2h:"2m",1y:"2m"},a,b):7.P(H(){D(7)[D(7).3F(":1G")?"1N":"1M"]()})},9G:H(b,a){I 7.2g({1Z:"1N"},b,a)},9F:H(b,a){I 7.2g({1Z:"1M"},b,a)},9E:H(b,a){I 7.2g({1Z:"2m"},b,a)},9D:H(b,a){I 7.2g({1y:"1N"},b,a)},9M:H(b,a){I 7.2g({1y:"1M"},b,a)},9C:H(c,a,b){I 7.2g({1y:a},c,b)},2g:H(k,j,i,g){J h=D.77(j,i,g);I 7[h.36===Q?"P":"36"](H(){G(7.16!=1)I Q;J f=D.1l({},h),p,1G=D(7).3F(":1G"),46=7;R(p 1n k){G(k[p]=="1M"&&1G||k[p]=="1N"&&!1G)I f.1J.1k(7);G(p=="1Z"||p=="2h"){f.18=D.1g(7,"18");f.33=7.V.33}}G(f.33!=U)7.V.33="1G";f.45=D.1l({},k);D.P(k,H(c,a){J e=2B D.28(46,f,c);G(/2m|1N|1M/.11(a))e[a=="2m"?1G?"1N":"1M":a](k);N{J b=a.6r().1I(/^([+-]=)?([\\d+-.]+)(.*)$/),2b=e.1t(M)||0;G(b){J d=3d(b[2]),2M=b[3]||"2X";G(2M!="2X"){46.V[c]=(d||1)+2M;2b=((d||1)/e.1t(M))*2b;46.V[c]=2b+2M}G(b[1])d=((b[1]=="-="?-1:1)*d)+2b;e.3G(2b,d,2M)}N e.3G(2b,a,"")}});I M})},36:H(a,b){G(D.1D(a)||(a&&a.1q==2p)){b=a;a="28"}G(!a||(1j a=="23"&&!b))I A(7[0],a);I 7.P(H(){G(b.1q==2p)A(7,a,b);N{A(7,a).1p(b);G(A(7,a).K==1)b.1k(7)}})},9X:H(b,c){J a=D.3O;G(b)7.36([]);7.P(H(){R(J i=a.K-1;i>=0;i--)G(a[i].T==7){G(c)a[i](M);a.7n(i,1)}});G(!c)7.5A();I 7}});J A=H(b,c,a){G(b){c=c||"28";J q=D.L(b,c+"36");G(!q||a)q=D.L(b,c+"36",D.2d(a))}I q};D.17.5A=H(a){a=a||"28";I 7.P(H(){J q=A(7,a);q.4s();G(q.K)q[0].1k(7)})};D.1l({77:H(b,a,c){J d=b&&b.1q==a0?b:{1J:c||!c&&a||D.1D(b)&&b,2u:b,41:c&&a||a&&a.1q!=9t&&a};d.2u=(d.2u&&d.2u.1q==4L?d.2u:D.28.5K[d.2u])||D.28.5K.74;d.5M=d.1J;d.1J=H(){G(d.36!==Q)D(7).5A();G(D.1D(d.5M))d.5M.1k(7)};I d},41:{73:H(p,n,b,a){I b+a*p},5P:H(p,n,b,a){I((-29.9r(p*29.9q)/2)+0.5)*a+b}},3O:[],48:U,28:H(b,c,a){7.15=c;7.T=b;7.1i=a;G(!c.3Z)c.3Z={}}});D.28.44={4D:H(){G(7.15.2Y)7.15.2Y.1k(7.T,7.1z,7);(D.28.2Y[7.1i]||D.28.2Y.4w)(7);G(7.1i=="1Z"||7.1i=="2h")7.T.V.18="3I"},1t:H(a){G(7.T[7.1i]!=U&&7.T.V[7.1i]==U)I 7.T[7.1i];J r=3d(D.1g(7.T,7.1i,a));I r&&r>-9p?r:3d(D.2a(7.T,7.1i))||0},3G:H(c,b,d){7.5V=1z();7.2b=c;7.3l=b;7.2M=d||7.2M||"2X";7.1z=7.2b;7.2S=7.4N=0;7.4D();J e=7;H t(a){I e.2Y(a)}t.T=7.T;D.3O.1p(t);G(D.48==U){D.48=4I(H(){J a=D.3O;R(J i=0;i<a.K;i++)G(!a[i]())a.7n(i--,1);G(!a.K){7k(D.48);D.48=U}},13)}},1N:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1N=M;7.3G(0,7.1t());G(7.1i=="2h"||7.1i=="1Z")7.T.V[7.1i]="9m";D(7.T).1N()},1M:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1M=M;7.3G(7.1t(),0)},2Y:H(a){J t=1z();G(a||t>7.15.2u+7.5V){7.1z=7.3l;7.2S=7.4N=1;7.4D();7.15.45[7.1i]=M;J b=M;R(J i 1n 7.15.45)G(7.15.45[i]!==M)b=Q;G(b){G(7.15.18!=U){7.T.V.33=7.15.33;7.T.V.18=7.15.18;G(D.1g(7.T,"18")=="2F")7.T.V.18="3I"}G(7.15.1M)7.T.V.18="2F";G(7.15.1M||7.15.1N)R(J p 1n 7.15.45)D.1K(7.T.V,p,7.15.3Z[p])}G(b)7.15.1J.1k(7.T);I Q}N{J n=t-7.5V;7.4N=n/7.15.2u;7.2S=D.41[7.15.41||(D.41.5P?"5P":"73")](7.4N,n,0,1,7.15.2u);7.1z=7.2b+((7.3l-7.2b)*7.2S);7.4D()}I M}};D.1l(D.28,{5K:{9l:9j,9i:7e,74:9g},2Y:{2e:H(a){a.T.2e=a.1z},2c:H(a){a.T.2c=a.1z},1y:H(a){D.1K(a.T.V,"1y",a.1z)},4w:H(a){a.T.V[a.1i]=a.1z+a.2M}}});D.17.2i=H(){J b=0,1S=0,T=7[0],3q;G(T)ao(D.14){J d=T.1d,4a=T,1s=T.1s,1Q=T.2z,5U=2k&&3r(5B)<9c&&!/9a/i.11(v),1g=D.2a,3c=1g(T,"30")=="3c";G(T.7y){J c=T.7y();1e(c.1A+29.2f(1Q.1C.2e,1Q.1c.2e),c.1S+29.2f(1Q.1C.2c,1Q.1c.2c));1e(-1Q.1C.6b,-1Q.1C.6a)}N{1e(T.5X,T.5W);1B(1s){1e(1s.5X,1s.5W);G(42&&!/^t(98|d|h)$/i.11(1s.2j)||2k&&!5U)2C(1s);G(!3c&&1g(1s,"30")=="3c")3c=M;4a=/^1c$/i.11(1s.2j)?4a:1s;1s=1s.1s}1B(d&&d.2j&&!/^1c|2K$/i.11(d.2j)){G(!/^96|1T.*$/i.11(1g(d,"18")))1e(-d.2e,-d.2c);G(42&&1g(d,"33")!="4j")2C(d);d=d.1d}G((5U&&(3c||1g(4a,"30")=="5x"))||(42&&1g(4a,"30")!="5x"))1e(-1Q.1c.5X,-1Q.1c.5W);G(3c)1e(29.2f(1Q.1C.2e,1Q.1c.2e),29.2f(1Q.1C.2c,1Q.1c.2c))}3q={1S:1S,1A:b}}H 2C(a){1e(D.2a(a,"6V",M),D.2a(a,"6U",M))}H 1e(l,t){b+=3r(l,10)||0;1S+=3r(t,10)||0}I 3q};D.17.1l({30:H(){J a=0,1S=0,3q;G(7[0]){J b=7.1s(),2i=7.2i(),4c=/^1c|2K$/i.11(b[0].2j)?{1S:0,1A:0}:b.2i();2i.1S-=25(7,\'94\');2i.1A-=25(7,\'aF\');4c.1S+=25(b,\'6U\');4c.1A+=25(b,\'6V\');3q={1S:2i.1S-4c.1S,1A:2i.1A-4c.1A}}I 3q},1s:H(){J a=7[0].1s;1B(a&&(!/^1c|2K$/i.11(a.2j)&&D.1g(a,\'30\')==\'93\'))a=a.1s;I D(a)}});D.P([\'5e\',\'5G\'],H(i,b){J c=\'4y\'+b;D.17[c]=H(a){G(!7[0])I;I a!=12?7.P(H(){7==1b||7==S?1b.92(!i?a:D(1b).2e(),i?a:D(1b).2c()):7[c]=a}):7[0]==1b||7[0]==S?46[i?\'aI\':\'aJ\']||D.71&&S.1C[c]||S.1c[c]:7[0][c]}});D.P(["6N","4b"],H(i,b){J c=i?"5e":"5G",4f=i?"6k":"6i";D.17["5s"+b]=H(){I 7[b.3y()]()+25(7,"57"+c)+25(7,"57"+4f)};D.17["90"+b]=H(a){I 7["5s"+b]()+25(7,"2C"+c+"4b")+25(7,"2C"+4f+"4b")+(a?25(7,"6S"+c)+25(7,"6S"+4f):0)}})})();',62,669,'|||||||this|||||||||||||||||||||||||||||||||||if|function|return|var|length|data|true|else|type|each|false|for|document|elem|null|style|event||nodeName|||test|undefined||browser|options|nodeType|fn|display|arguments|url|window|body|parentNode|add|msie|css|indexOf|prop|typeof|call|extend|script|in|replace|push|constructor|text|offsetParent|cur|status|div|apply|firstChild|opacity|now|left|while|documentElement|isFunction|filter|className|hidden|handle|match|complete|attr|ret|hide|show|dataType|trigger|doc|split|top|table|try|catch|success|break|cache|height||remove|tbody|string|guid|num|global|ready|fx|Math|curCSS|start|scrollTop|makeArray|scrollLeft|max|animate|width|offset|tagName|safari|map|toggle||done|Array|find|toUpperCase|button|special|duration|id|copy|value|handler|ownerDocument|select|new|border|exec|stack|none|opera|nextSibling|pushStack|target|html|inArray|unit|xml|bind|GET|isReady|merge|pos|timeout|delete|one|selected|px|step|jsre|position|async|preventDefault|overflow|name|which|queue|removeChild|namespace|insertBefore|nth|removeData|fixed|parseFloat|error|readyState|multiFilter|createElement|rl|re|trim|end|_|param|first|get|results|parseInt|slice|childNodes|encodeURIComponent|append|events|elems|toLowerCase|json|readyList|setTimeout|grep|mouseenter|color|is|custom|getElementsByTagName|block|stopPropagation|addEventListener|callee|proxy|mouseleave|timers|defaultView|password|disabled|last|has|appendChild|form|domManip|props|ajax|orig|set|easing|mozilla|load|prototype|curAnim|self|charCode|timerId|object|offsetChild|Width|parentOffset|src|unbind|br|currentStyle|clean|float|visible|relatedTarget|previousSibling|handlers|isXMLDoc|on|setup|nodeIndex|unique|shift|javascript|child|RegExp|_default|deep|scroll|lastModified|teardown|setRequestHeader|timeStamp|update|empty|tr|getAttribute|innerHTML|setInterval|checked|fromElement|Number|jQuery|state|active|jsonp|accepts|application|dir|input|responseText|click|styleSheets|unload|not|lastToggle|outline|mouseout|getPropertyValue|mouseover|getComputedStyle|bindReady|String|padding|pageX|metaKey|keyCode|getWH|andSelf|clientX|Left|all|visibility|container|index|init|triggered|removeAttribute|classFilter|prevObject|submit|file|after|windowData|inner|client|globalEval|sibling|jquery|absolute|clone|wrapAll|dequeue|version|triggerHandler|oldblock|ctrlKey|createTextNode|Top|handleError|getResponseHeader|parsererror|speeds|checkbox|old|00|radio|swing|href|Modified|ifModified|lastChild|safari2|startTime|offsetTop|offsetLeft|username|location|ajaxSettings|getElementById|isSimple|values|selectedIndex|runtimeStyle|rsLeft|_load|loaded|DOMContentLoaded|clientTop|clientLeft|toElement|srcElement|val|pageY|POST|unshift|Bottom|clientY|Right|fix|exclusive|detachEvent|cloneNode|removeEventListener|swap|toString|join|attachEvent|eval|substr|head|parse|textarea|reset|image|zoom|odd|even|before|prepend|exclude|expr|quickClass|quickID|uuid|quickChild|continue|Height|textContent|appendTo|contents|open|margin|evalScript|borderTopWidth|borderLeftWidth|parent|httpData|setArray|CSS1Compat|compatMode|boxModel|cssFloat|linear|def|webkit|nodeValue|speed|_toggle|eq|100|replaceWith|304|concat|200|alpha|Last|httpNotModified|getAttributeNode|httpSuccess|clearInterval|abort|beforeSend|splice|styleFloat|throw|colgroup|XMLHttpRequest|ActiveXObject|scriptCharset|callback|fieldset|multiple|processData|getBoundingClientRect|contentType|link|ajaxSend|ajaxSuccess|ajaxError|col|ajaxComplete|ajaxStop|ajaxStart|serializeArray|notmodified|keypress|keydown|change|mouseup|mousedown|dblclick|focus|blur|stylesheet|hasClass|rel|doScroll|black|hover|solid|cancelBubble|returnValue|wheelDelta|view|round|shiftKey|resize|screenY|screenX|relatedNode|mousemove|prevValue|originalTarget|offsetHeight|keyup|newValue|offsetWidth|eventPhase|detail|currentTarget|cancelable|bubbles|attrName|attrChange|altKey|originalEvent|charAt|0n|substring|animated|header|noConflict|line|enabled|innerText|contains|only|weight|font|gt|lt|uFFFF|u0128|size|417|Boolean|Date|toggleClass|removeClass|addClass|removeAttr|replaceAll|insertAfter|prependTo|wrap|contentWindow|contentDocument|iframe|children|siblings|prevAll|wrapInner|nextAll|outer|prev|scrollTo|static|marginTop|next|inline|parents|able|cellSpacing|adobeair|cellspacing|522|maxLength|maxlength|readOnly|400|readonly|fast|600|class|slow|1px|htmlFor|reverse|10000|PI|cos|compatible|Function|setData|ie|ra|it|rv|getData|userAgent|navigator|fadeTo|fadeIn|slideToggle|slideUp|slideDown|ig|responseXML|content|1223|NaN|fadeOut|300|protocol|send|setAttribute|option|dataFilter|cssText|changed|be|Accept|stop|With|Requested|Object|can|GMT|property|1970|Jan|01|Thu|Since|If|Type|Content|XMLHTTP|th|Microsoft|td|onreadystatechange|onload|cap|charset|colg|host|tfoot|specified|with|1_|thead|leg|plain|attributes|opt|embed|urlencoded|www|area|hr|ajaxSetup|meta|post|getJSON|getScript|marginLeft|img|elements|pageYOffset|pageXOffset|abbr|serialize|pixelLeft'.split('|'),0,{}));
// $Id: drupal.js,v 1.41.2.4 2009/07/21 08:59:10 goba Exp $

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = document.getElementsByTagName && document.createElement && document.createTextNode && document.documentElement && document.getElementById;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  if (Drupal.jsEnabled) {
    // Execute all of them.
    jQuery.each(Drupal.behaviors, function() {
      this(context);
    });
  }
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'));
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim($(xmlhttp.responseText).text())) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri, '@text': xmlhttp.responseText });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message;
}

// Global Killswitch on the <html> element
if (Drupal.jsEnabled) {
  // Global Killswitch on the <html> element
  $(document.documentElement).addClass('js');
  // 'js enabled' cookie
  document.cookie = 'has_js=1; path=/';
  // Attach all behaviors.
  $(document).ready(function() {
    Drupal.attachBehaviors(this);
  });
}

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;
// $Id: googleanalytics.js,v 1.9.2.4 2010/09/19 11:39:20 hass Exp $

$(document).ready(function() {

  // Attach onclick event to document only and catch clicks on all elements.
  $(document.body).click(function(event) {
    // Catch only the first parent link of a clicked element.
    $(event.target).parents("a:first,area:first").andSelf().filter("a,area").each(function() {

      var ga = Drupal.settings.googleanalytics;
      // Expression to check for absolute internal links.
      var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
      // Expression to check for special links like gotwo.module /go/* links.
      var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
      // Expression to check for download links.
      var isDownload = new RegExp("\\.(" + ga.trackDownloadExtensions + ")$", "i");

      // Is the clicked URL internal?
      if (isInternal.test(this.href)) {
        // Is download tracking activated and the file extension configured for download tracking?
        if (ga.trackDownload && isDownload.test(this.href)) {
          // Download link clicked.
          var extension = isDownload.exec(this.href);
          _gaq.push(["_trackEvent", "Downloads", extension[1].toUpperCase(), this.href.replace(isInternal, '')]);
        }
        else if (isInternalSpecial.test(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          _gaq.push(["_trackPageview", this.href.replace(isInternal, '')]);
        }
      }
      else {
        if (ga.trackMailto && $(this).is("a[href^=mailto:],area[href^=mailto:]")) {
          // Mailto link clicked.
          _gaq.push(["_trackEvent", "Mails", "Click", this.href.substring(7)]);
        }
        else if (ga.trackOutgoing && this.href) {
          // External link clicked.
          _gaq.push(["_trackEvent", "Outgoing links", "Click", this.href]);
        }
      }

    });
  });
});
;
$(document).ready(function () {
  $('.graph-bar span').hover(
    function () { $(this).children('.label').show(); },
    function () { $(this).children('.label').hide(); }
  );
});;
// $Id: tableheader.js,v 1.16.2.2 2009/03/30 12:48:09 goba Exp $

Drupal.tableHeaderDoScroll = function() {
  if (typeof(Drupal.tableHeaderOnScroll)=='function') {
    Drupal.tableHeaderOnScroll();
  }
};

Drupal.behaviors.tableHeader = function (context) {
  // This breaks in anything less than IE 7. Prevent it from running.
  if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 7) {
    return;
  }

  // Keep track of all cloned table headers.
  var headers = [];

  $('table.sticky-enabled thead:not(.tableHeader-processed)', context).each(function () {
    // Clone thead so it inherits original jQuery properties.
    var headerClone = $(this).clone(true).insertBefore(this.parentNode).wrap('<table class="sticky-header"></table>').parent().css({
      position: 'fixed',
      top: '0px'
    });

    headerClone = $(headerClone)[0];
    headers.push(headerClone);

    // Store parent table.
    var table = $(this).parent('table')[0];
    headerClone.table = table;
    // Finish initialzing header positioning.
    tracker(headerClone);

    $(table).addClass('sticky-table');
    $(this).addClass('tableHeader-processed');
  });

  // Define the anchor holding var.
  var prevAnchor = '';

  // Track positioning and visibility.
  function tracker(e) {
    // Save positioning data.
    var viewHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    if (e.viewHeight != viewHeight) {
      e.viewHeight = viewHeight;
      e.vPosition = $(e.table).offset().top - 4;
      e.hPosition = $(e.table).offset().left;
      e.vLength = e.table.clientHeight - 100;
      // Resize header and its cell widths.
      var parentCell = $('th', e.table);
      $('th', e).each(function(index) {
        var cellWidth = parentCell.eq(index).css('width');
        // Exception for IE7.
        if (cellWidth == 'auto') {
          cellWidth = parentCell.get(index).clientWidth +'px';
        }
        $(this).css('width', cellWidth);
      });
      $(e).css('width', $(e.table).css('width'));
    }

    // Track horizontal positioning relative to the viewport and set visibility.
    var hScroll = document.documentElement.scrollLeft || document.body.scrollLeft;
    var vOffset = (document.documentElement.scrollTop || document.body.scrollTop) - e.vPosition;
    var visState = (vOffset > 0 && vOffset < e.vLength) ? 'visible' : 'hidden';
    $(e).css({left: -hScroll + e.hPosition +'px', visibility: visState});

    // Check the previous anchor to see if we need to scroll to make room for the header.
    // Get the height of the header table and scroll up that amount.
    if (prevAnchor != location.hash) {
      if (location.hash != '') {
        var offset = $('td' + location.hash).offset();
        if (offset) {
          var top = offset.top;
          var scrollLocation = top - $(e).height();
          $('body, html').scrollTop(scrollLocation);
        }
      }
      prevAnchor = location.hash;
    }
  }

  // Only attach to scrollbars once, even if Drupal.attachBehaviors is called
  //  multiple times.
  if (!$('body').hasClass('tableHeader-processed')) {
    $('body').addClass('tableHeader-processed');
    $(window).scroll(Drupal.tableHeaderDoScroll);
    $(document.documentElement).scroll(Drupal.tableHeaderDoScroll);
  }

  // Track scrolling.
  Drupal.tableHeaderOnScroll = function() {
    $(headers).each(function () {
      tracker(this);
    });
  };

  // Track resizing.
  var time = null;
  var resize = function () {
    // Ensure minimum time between adjustments.
    if (time) {
      return;
    }
    time = setTimeout(function () {
      $('table.sticky-header').each(function () {
        // Force cell width calculation.
        this.viewHeight = 0;
        tracker(this);
      });
      // Reset timer
      time = null;
    }, 250);
  };
  $(window).resize(resize);
};
;
// $Id: ajax-responder.js,v 1.18.2.24 2010/08/27 22:09:48 merlinofchaos Exp $
/**
 * @file
 *
 * CTools flexible AJAX responder object.
 */

(function ($) {
  Drupal.CTools = Drupal.CTools || {};
  Drupal.CTools.AJAX = Drupal.CTools.AJAX || {};
  Drupal.CTools.AJAX.commands = Drupal.CTools.AJAX.commands || {};
  Drupal.CTools.AJAX.commandCache = Drupal.CTools.AJAX.comandCache || {} ;
  Drupal.CTools.AJAX.scripts = {};
  Drupal.CTools.AJAX.css = {};

  /**
   * Success callback for an ajax request.
   *
   * This function expects to receive a packet of data from a JSON object
   * which is essentially a list of commands. Each commands must have a
   * 'command' setting and this setting must resolve to a function in the
   * Drupal.CTools.AJAX.commands space.
   */
  Drupal.CTools.AJAX.respond = function(data) {
    for (i in data) {
      if (data[i]['command'] && Drupal.CTools.AJAX.commands[data[i]['command']]) {
        Drupal.CTools.AJAX.commands[data[i]['command']](data[i]);
      }
    }
  };

  /**
   * Grab the response from the server and store it.
   */
  Drupal.CTools.AJAX.warmCache = function () {
    // Store this expression for a minor speed improvement.
    $this = $(this);
    var old_url = $this.attr('href');
    // If we are currently fetching, or if we have fetched this already which is
    // ideal for things like pagers, where the previous page might already have
    // been seen in the cache.
    if ($this.hasClass('ctools-fetching') || Drupal.CTools.AJAX.commandCache[old_url]) {
      return false;
    }

    // Grab all the links that match this url and add the fetching class.
    // This allows the caching system to grab each url once and only once
    // instead of grabbing the url once per <a>.
    var $objects = $('a[href=' + old_url + ']')
    $objects.addClass('ctools-fetching');
    try {
      url = old_url.replace(/\/nojs(\/|$)/g, '/ajax$1');
      $.ajax({
        type: "POST",
        url: url,
        data: { 'js': 1, 'ctools_ajax': 1},
        global: true,
        success: function (data) {
          Drupal.CTools.AJAX.commandCache[old_url] = data;
          $objects.addClass('ctools-cache-warmed').trigger('ctools-cache-warm', [data]);
        },
        complete: function() {
          $objects.removeClass('ctools-fetching');
        },
        dataType: 'json'
      });
    }
    catch (err) {
      $objects.removeClass('ctools-fetching');
      return false;
    }

    return false;
  };

  /**
   * Cachable click handler to fetch the commands out of the cache or from url.
   */
  Drupal.CTools.AJAX.clickAJAXCacheLink = function () {
    $this = $(this);
    if ($this.hasClass('ctools-fetching')) {
      $this.bind('ctools-cache-warm', function (event, data) {
        Drupal.CTools.AJAX.respond(data);
      });
      return false;
    }
    else {
      if ($this.hasClass('ctools-cache-warmed') && Drupal.CTools.AJAX.commandCache[$this.attr('href')]) {
        Drupal.CTools.AJAX.respond(Drupal.CTools.AJAX.commandCache[$this.attr('href')]);
        return false;
      }
      else {
        return Drupal.CTools.AJAX.clickAJAXLink.apply(this);
      }
    }
  };

  /**
   * Generic replacement click handler to open the modal with the destination
   * specified by the href of the link.
   */
  Drupal.CTools.AJAX.clickAJAXLink = function() {
    if ($(this).hasClass('ctools-ajaxing')) {
      return false;
    }

    var url = $(this).attr('href');
    var object = $(this);
    $(this).addClass('ctools-ajaxing');
    try {
      url = url.replace(/\/nojs(\/|$)/g, '/ajax$1');
      $.ajax({
        type: "POST",
        url: url,
        data: { 'js': 1, 'ctools_ajax': 1},
        global: true,
        success: Drupal.CTools.AJAX.respond,
        error: function(xhr) {
          Drupal.CTools.AJAX.handleErrors(xhr, url);
        },
        complete: function() {
          $('.ctools-ajaxing').removeClass('ctools-ajaxing');
        },
        dataType: 'json'
      });
    }
    catch (err) {
      alert("An error occurred while attempting to process " + url);
      $('.ctools-ajaxing').removeClass('ctools-ajaxing');
      return false;
    }

    return false;
  };

  /**
   * Generic replacement click handler to open the modal with the destination
   * specified by the href of the link.
   */
  Drupal.CTools.AJAX.clickAJAXButton = function() {
    if ($(this).hasClass('ctools-ajaxing')) {
      return false;
    }

    // Put our button in.
    this.form.clk = this;

    var url = Drupal.CTools.AJAX.findURL(this);
    $(this).addClass('ctools-ajaxing');
    var object = $(this);
    try {
      if (url) {
        url = url.replace(/\/nojs(\/|$)/g, '/ajax$1');
        $.ajax({
          type: "POST",
          url: url,
          data: { 'js': 1, 'ctools_ajax': 1},
          global: true,
          success: Drupal.CTools.AJAX.respond,
          error: function(xhr) {
            Drupal.CTools.AJAX.handleErrors(xhr, url);
          },
          complete: function() {
            $('.ctools-ajaxing').removeClass('ctools-ajaxing');
          },
          dataType: 'json'
        });
      }
      else {
        var form = this.form;
        url = $(form).attr('action');
        setTimeout(function() { Drupal.CTools.AJAX.ajaxSubmit(form, url); }, 1);
      }
    }
    catch (err) {
      alert("An error occurred while attempting to process " + url);
      $(this).removeClass('ctools-ajaxing');
      return false;
    }
    return false;
  };

  /**
   * Event handler to submit an AJAX form.
   *
   * Using a secondary event ensures that our form submission is last, which
   * is needed when submitting wysiwyg controlled forms, for example.
   */
  Drupal.CTools.AJAX.ajaxSubmit = function (form, url) {
    $form = $(form);

    if ($form.hasClass('ctools-ajaxing')) {
      return false;
    }

    $form.addClass('ctools-ajaxing');

    try {
      url = url.replace(/\/nojs(\/|$)/g, '/ajax$1');

      var ajaxOptions = {
        type: 'POST',
        url: url,
        data: { 'js': 1, 'ctools_ajax': 1},
        global: true,
        success: Drupal.CTools.AJAX.respond,
        error: function(xhr) {
          Drupal.CTools.AJAX.handleErrors(xhr, url);
        },
        complete: function() {
          $('.ctools-ajaxing').removeClass('ctools-ajaxing');
          $('div.ctools-ajaxing-temporary').remove();
        },
        dataType: 'json'
      };

      // If the form requires uploads, use an iframe instead and add data to
      // the submit to support this and use the proper response.
      if ($form.attr('enctype') == 'multipart/form-data') {
        $form.append('<input type="hidden" name="ctools_multipart" value="1">');
        ajaxIframeOptions = {
          success: Drupal.CTools.AJAX.iFrameJsonRespond,
          iframe: true
        };
        ajaxOptions = $.extend(ajaxOptions, ajaxIframeOptions);
      }

      $form.ajaxSubmit(ajaxOptions);
    }
    catch (err) {
      alert("An error occurred while attempting to process " + url);
      $('.ctools-ajaxing').removeClass('ctools-ajaxing');
      $('div.ctools-ajaxing-temporary').remove();
      return false;
    }
  };

  /**
   * Wrapper for handling JSON responses from an iframe submission
   */
  Drupal.CTools.AJAX.iFrameJsonRespond = function(data) {
    var myJson = eval(data);
    Drupal.CTools.AJAX.respond(myJson);
  }

  /**
   * Display error in a more fashion way
   */
  Drupal.CTools.AJAX.handleErrors = function(xhr, path) {
    var error_text = '';

    if ((xhr.status == 500 && xhr.responseText) || xhr.status == 200) {
      error_text = xhr.responseText;

      // Replace all &lt; and &gt; by < and >
      error_text = error_text.replace("/&(lt|gt);/g", function (m, p) {
        return (p == "lt")? "<" : ">";
      });

      // Now, replace all html tags by empty spaces
      error_text = error_text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,"");

      // Fix end lines
      error_text = error_text.replace(/[\n]+\s+/g,"\n");
    }
    else if (xhr.status == 500) {
      error_text = xhr.status + ': ' + Drupal.t("Internal server error. Please see server or PHP logs for error information.");
    }
    else {
      error_text = xhr.status + ': ' + xhr.statusText;
    }

    alert(Drupal.t("An error occurred at @path.\n\nError Description: @error", {'@path': path, '@error': error_text}));
  }

  /**
   * Generic replacement for change handler to execute ajax method.
   */
  Drupal.CTools.AJAX.changeAJAX = function () {
    if ($(this).hasClass('ctools-ajaxing')) {
      return false;
    }

    var url = Drupal.CTools.AJAX.findURL(this);
    $(this).addClass('ctools-ajaxing');
    var object = $(this);
    var form_id = $(object).parents('form').get(0).id;
    try {
      if (url) {
        url = url.replace(/\/nojs(\/|$)/g, '/ajax$1');
        $.ajax({
          type: "POST",
          url: url,
          data: {'ctools_changed': $(this).val(), 'js': 1, 'ctools_ajax': 1 },
          global: true,
          success: Drupal.CTools.AJAX.respond,
          error: function(xhr) {
            Drupal.CTools.AJAX.handleErrors(xhr, url);
          },
          complete: function() {
            $('.ctools-ajaxing').removeClass('ctools-ajaxing');
            if ($(object).hasClass('ctools-ajax-submit-onchange')) {
              $('form#' + form_id).submit();
            }
          },
          dataType: 'json'
        });
      }
      else {
        if ($(object).hasClass('ctools-ajax-submit-onchange')) {
          $('form#' + form_id).submit();
        }
        return false;
      }
    }
    catch (err) {
      alert("An error occurred while attempting to process " + url);
      $('.ctools-ajaxing').removeClass('ctools-ajaxing');
      return false;
    }
    return false;
  };

  /**
   * Find a URL for an AJAX button.
   *
   * The URL for this gadget will be composed of the values of items by
   * taking the ID of this item and adding -url and looking for that
   * class. They need to be in the form in order since we will
   * concat them all together using '/'.
   */
  Drupal.CTools.AJAX.findURL = function(item) {
    var url = '';
    var url_class = '.' + $(item).attr('id') + '-url';
    $(url_class).each(
      function() {
        if (url && $(this).val()) {
          url += '/';
        }
        url += $(this).val();
      });
    return url;
  };

  Drupal.CTools.AJAX.getPath = function (link) {
    if (!link) {
      return;
    }

    var index = link.indexOf('?');
    if (index != -1) {
      link = link.substr(0, index);
    }

    return link;
  }

  Drupal.CTools.AJAX.commands.prepend = function(data) {
    $(data.selector).prepend(data.data);
    Drupal.attachBehaviors($(data.selector));
  };

  Drupal.CTools.AJAX.commands.append = function(data) {
    $(data.selector).append(data.data);
    Drupal.attachBehaviors($(data.selector));
  };

  Drupal.CTools.AJAX.commands.replace = function(data) {
    $(data.selector).replaceWith(data.data);
    Drupal.attachBehaviors($(data.selector));
  };

  Drupal.CTools.AJAX.commands.after = function(data) {
    var object = $(data.data);
    $(data.selector).after(object);
    Drupal.attachBehaviors(object);
  };

  Drupal.CTools.AJAX.commands.before = function(data) {
    var object = $(data.data);
    $(data.selector).before(object);
    Drupal.attachBehaviors(object);
  };

  Drupal.CTools.AJAX.commands.html = function(data) {
    $(data.selector).html(data.data);
    Drupal.attachBehaviors($(data.selector));
  };

  Drupal.CTools.AJAX.commands.remove = function(data) {
    $(data.selector).remove();
  };

  Drupal.CTools.AJAX.commands.changed = function(data) {
    if (!$(data.selector).hasClass('changed')) {
      $(data.selector).addClass('changed');
      if (data.star) {
        $(data.selector).find(data.star).append(' <span class="star">*</span> ');
      }
    }
  };

  Drupal.CTools.AJAX.commands.alert = function(data) {
    alert(data.text, data.title);
  };

  Drupal.CTools.AJAX.commands.css = function(data) {
  /*
    if (data.selector && data.selector.contains('* html ')) {
      // This indicates an IE hack and we should only do it if we are IE.
      if (!jQuery.browser.msie) {
        return;
      }
      data.selector = data.selector.replace('* html ', '');
    }
  */
    $(data.selector).css(data.argument);
  };

  Drupal.CTools.AJAX.commands.css_files = function(data) {
    // Build a list of css files already loaded:
    $('link:not(.ctools-temporary-css)').each(function () {
      if ($(this).attr('type') == 'text/css') {
        var link = Drupal.CTools.AJAX.getPath($(this).attr('href'));
        if (link) {
          Drupal.CTools.AJAX.css[link] = $(this).attr('href');
        }
      }
    });

    var html = '';
    for (i in data.argument) {
      var link = Drupal.CTools.AJAX.getPath(data.argument[i].file);
      if (!Drupal.CTools.AJAX.css[link]) {
        html += '<link class="ctools-temporary-css" type="text/css" rel="stylesheet" media="' + data.argument[i].media +
          '" href="' + data.argument[i].file + '" />';
      }
    }

    if (html) {
      $('link.ctools-temporary-css').remove();
      $('body').append($(html));
    }
  };

  Drupal.CTools.AJAX.commands.settings = function(data) {
    $.extend(Drupal.settings, data.argument);
  };

  Drupal.CTools.AJAX.commands.scripts = function(data) {
    // Build a list of scripts already loaded:
    var scripts = {};
    $('script').each(function () {
      var link = Drupal.CTools.AJAX.getPath($(this).attr('src'));
      if (link) {
        Drupal.CTools.AJAX.scripts[link] = $(this).attr('src');
      }
    });

    var html = '';
    var head = document.getElementsByTagName('head')[0];
    for (i in data.argument) {
      var link = Drupal.CTools.AJAX.getPath(data.argument[i]);
      if (!Drupal.CTools.AJAX.scripts[link]) {
        Drupal.CTools.AJAX.scripts[link] = link;
        // Use this to actually get the script tag into the dom, which is
        // needed for scripts that self-reference to determine paths.
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = data.argument[i];
        head.appendChild(script);
        html += '<script type="text/javascript" src="' + data.argument[i] + '"></script>';
      }
    }

    if (html) {
      $('body').append($(html));
    }
  };

  Drupal.CTools.AJAX.commands.data = function(data) {
    $(data.selector).data(data.name, data.value);
  };

  Drupal.CTools.AJAX.commands.attr = function(data) {
    $(data.selector).attr(data.name, data.value);
  };

  Drupal.CTools.AJAX.commands.restripe = function(data) {
    // :even and :odd are reversed because jquery counts from 0 and
    // we count from 1, so we're out of sync.
    $('tbody tr:not(:hidden)', $(data.selector))
      .removeClass('even')
      .removeClass('odd')
      .filter(':even')
        .addClass('odd')
      .end()
      .filter(':odd')
        .addClass('even');
  };

  Drupal.CTools.AJAX.commands.redirect = function(data) {
    if (data.delay > 0) {
      setTimeout(function () {
        location.href = data.url;
      }, data.delay);
    }
    else {
      location.href = data.url;
    }
  };

  Drupal.CTools.AJAX.commands.reload = function(data) {
    location.reload();
  };

  Drupal.CTools.AJAX.commands.submit = function(data) {
    $(data.selector).submit();
  }


  /**
   * Bind links that will open modals to the appropriate function.
   */
  Drupal.behaviors.CToolsAJAX = function(context) {
    // Bind links

    // Note that doing so in this order means that the two classes can be
    // used together safely.
    $('a.ctools-use-ajax-cache:not(.ctools-use-ajax-processed)', context)
      .addClass('ctools-use-ajax-processed')
      .click(Drupal.CTools.AJAX.clickAJAXCacheLink)
      .each(function () {
        Drupal.CTools.AJAX.warmCache.apply(this);
      });

    $('a.ctools-use-ajax:not(.ctools-use-ajax-processed)', context)
      .addClass('ctools-use-ajax-processed')
      .click(Drupal.CTools.AJAX.clickAJAXLink);


    // Bind buttons
    $('input.ctools-use-ajax:not(.ctools-use-ajax-processed), button.ctools-use-ajax:not(.ctools-use-ajax-processed)', context)
      .addClass('ctools-use-ajax-processed')
      .click(Drupal.CTools.AJAX.clickAJAXButton);

    // Bind select
    $('select, input:text, input:radio, input:checkbox', context)
       .filter('.ctools-use-ajax-onchange:not(.ctools-use-ajax-processed)')
       .addClass('ctools-use-ajax-processed')
       .change(Drupal.CTools.AJAX.changeAJAX);

    // Add information about loaded CSS and JS files.
    if (Drupal.settings.CToolsAJAX && Drupal.settings.CToolsAJAX.css) {
      $.extend(Drupal.CTools.AJAX.css, Drupal.settings.CToolsAJAX.css);
    }
    if (Drupal.settings.CToolsAJAX && Drupal.settings.CToolsAJAX.scripts) {
      $.extend(Drupal.CTools.AJAX.scripts, Drupal.settings.CToolsAJAX.scripts);
    }
  };
})(jQuery);
;
// $Id: boxes.js,v 1.2.2.4 2010/08/05 20:16:28 yhahn Exp $

Drupal.behaviors.boxes = function(context) {
  Drupal.CTools.AJAX.commands.getBlock = function(data) {
    $.ajax({
      type: "GET",
      url: data.url,
      data: { 'boxes_delta': data.delta },
      global: true,
      success: Drupal.CTools.AJAX.respond,
      error: function(xhr) {
        Drupal.CTools.AJAX.handleErrors(xhr, url);
      },
      dataType: 'json'
    });
  };
  $('div.boxes-box-controls a:not(.boxes-processed)')
    .addClass('boxes-processed')
    .click(function() {
      var box = $(this).parents('.boxes-box');
      if (box.is('.boxes-box-editing')) {
        box.removeClass('boxes-box-editing').find('.box-editor').remove().end().find('.boxes-box-content').show();
      }
      else {
        // Show editing form - the form itself gets loaded via CTools ajax..
        box.find('.boxes-box-content').hide().end().addClass('boxes-box-editing').append('<div class="box-editor"><div class="swirly"></div></div>');
      }
      return false;
    });
  $('.boxes-ajax').click(function() {
      if ($(this).hasClass('boxes-ajaxing')) {
        return false;
      }
      // Put our button in.
      this.form.clk = this;
      var object = $(this), form = this.form, url = $(form).attr('action');
      $(this).addClass('boxes-ajaxing').parents('.box-editor').html('<div class="swirly"></div>').end();
      $(form).ajaxSubmit({
        type: "POST",
        url: url,
        data: { 'js': 1, 'ctools_ajax': 1 },
        global: true,
        success: Drupal.CTools.AJAX.respond,
        error: function(xhr) {
          Drupal.CTools.AJAX.handleErrors(xhr, url);
        },
        complete: function() {
          object.removeClass('boxes-ajaxing');
        },
        dataType: 'json'
      });
      return false;
  });

  Drupal.CTools.AJAX.commands.preReplaceContextBlock = function(data) {
    Drupal.settings.boxes = Drupal.settings.boxes || {};
    var e = $('#' + data.id + ' a.context-block:first').clone();
    Drupal.settings.boxes[data.id] =  e;
  };

  Drupal.CTools.AJAX.commands.postReplaceContextBlock = function(data) {
    $('#' + data.id).append(Drupal.settings.boxes[data.id]);
    $('form.context-editor.context-editing').each(function() {
      var id = $(this).attr('id');
      if (Drupal.contextBlockEditor[id]) {
        Drupal.contextBlockEditor[id].initBlocks($('#' + data.id));
      }
    });
  };
};

;
// $Id: jquery.form.js,v 1.2 2007/11/19 10:05:48 goba Exp $

/*
 * jQuery Form Plugin
 * version: 2.01 (10/31/2007)
 * @requires jQuery v1.1 or later
 *
 * Examples at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(5($){$.7.1j=5(o){2(P o==\'5\')o={L:o};o=$.2h({1h:4.X(\'2i\')||1E.2u.3D(),I:4.X(\'2g\')||\'29\'},o||{});3 p={};$.M.N(\'R.2P.2L\',[4,o,p]);2(p.1Q)6 4;3 a=4.1z(o.2r);2(o.V){H(3 n 3u o.V)a.C({z:n,A:o.V[n]})}2(o.28&&o.28(a,4,o)===E)6 4;$.M.N(\'R.K.36\',[a,4,o,p]);2(p.1Q)6 4;3 q=$.1x(a);2(o.I.31()==\'29\'){o.1h+=(o.1h.2Z(\'?\')>=0?\'&\':\'?\')+q;o.V=B}8 o.V=q;3 r=4,U=[];2(o.1r)U.C(5(){r.1r()});2(o.1o)U.C(5(){r.1o()});2(!o.18&&o.14){3 u=o.L||5(){};U.C(5(a){2(4.1N)$(o.14).X("1M",a).1N().D(u,1L);8 $(o.14).2t(a).D(u,1L)})}8 2(o.L)U.C(o.L);o.L=5(a,b){H(3 i=0,F=U.G;i<F;i++)U[i](a,b,r)};3 v=$(\'19:3v\',4).15();3 w=E;H(3 j=0;j<v.G;j++)2(v[j])w=T;2(o.2f||w){2($.1i.3o&&o.2a)$.3l(o.2a,1l);8 1l()}8 $.3h(o);$.M.N(\'R.K.3f\',[4,o]);6 4;5 1l(){3 d=r[0];3 f=$.2h({},$.39,o);3 h=\'35\'+$.7.1j.1a++;3 i=$(\'<2f 33="\'+h+\'" z="\'+h+\'" />\');3 j=i[0];3 k=$.1i.20&&1E.20.30()<9;2($.1i.1X||k)j.2Y=\'2W:E;1w.2U("");\';i.2S({2R:\'2Q\',23:\'-24\',1R:\'-24\'});3 l={Z:B,1b:B,2K:0,2J:\'n/a\',2H:5(){},2F:5(){},2E:5(){}};3 g=f.2B;2(g&&!$.1O++)$.M.N("2x");2(g)$.M.N("2w",[l,f]);3 m=0;3 n=0;1f(5(){i.2v(\'1n\');j.1K?j.1K(\'1J\',12):j.2s(\'1I\',12,E);3 a=d.1H?\'1H\':\'2q\';3 t=r.X(\'14\');r.X({14:h,2g:\'3C\',2i:f.1h});d[a]=\'3B/R-V\';2(f.1G)1f(5(){n=T;12()},f.1G);d.K();r.X(\'14\',t)},10);5 12(){2(m++)6;j.2o?j.2o(\'1J\',12):j.3A(\'1I\',12,E);3 a=T;3z{2(n)3x\'1G\';3 b,O;O=j.2n?j.2n.1w:j.2l?j.2l:j.1w;l.Z=O.1n?O.1n.1M:B;l.1b=O.2k?O.2k:O;2(f.18==\'2j\'||f.18==\'3s\'){3 c=O.1D(\'1C\')[0];b=c?c.A:l.Z;2(f.18==\'2j\')3r("V = "+b);8 $.3q(b)}8 2(f.18==\'2m\'){b=l.1b;2(!b&&l.Z!=B)b=2d(l.Z)}8{b=l.Z}}3p(e){a=E;$.3n(f,l,\'2b\',e)}2(a){f.L(b,\'L\');2(g)$.M.N("3m",[l,f])}2(g)$.M.N("3k",[l,f]);2(g&&!--$.1O)$.M.N("3j");2(f.27)f.27(l,a?\'L\':\'2b\');1f(5(){i.3i();l.1b=B},3g)};5 2d(s,a){2(1E.26){a=25 26(\'3d.3c\');a.3b=\'E\';a.3a(s)}8 a=(25 38()).37(s,\'1A/2m\');6(a&&a.22&&a.22.1e!=\'34\')?a:B}}};$.7.1j.1a=0;$.7.W=5(a){6 4.21().K(1m).D(5(){4.1u=$.7.W.1a++;$.7.W.1t[4.1u]=a;$(":K,19:Y",4).1Z(1s)})};$.7.W.1a=1;$.7.W.1t={};5 1s(e){3 a=4.R;a.Q=4;2(4.I==\'Y\'){2(e.1Y!=S){a.11=e.1Y;a.16=e.2X}8 2(P $.7.1U==\'5\'){3 b=$(4).1U();a.11=e.1V-b.1R;a.16=e.1W-b.23}8{a.11=e.1V-4.2V;a.16=e.1W-4.32}}1f(5(){a.Q=a.11=a.16=B},10)};5 1m(){3 a=4.1u;3 b=$.7.W.1t[a];$(4).1j(b);6 E};$.7.21=5(){4.1T(\'K\',1m);6 4.D(5(){$(":K,19:Y",4).1T(\'1Z\',1s)})};$.7.1z=5(b){3 a=[];2(4.G==0)6 a;3 c=4[0];3 d=b?c.1D(\'*\'):c.2T;2(!d)6 a;H(3 i=0,F=d.G;i<F;i++){3 e=d[i];3 n=e.z;2(!n)1v;2(b&&c.Q&&e.I=="Y"){2(!e.1d&&c.Q==e)a.C({z:n+\'.x\',A:c.11},{z:n+\'.y\',A:c.16});1v}3 v=$.15(e,T);2(v&&v.1c==1g){H(3 j=0,1S=v.G;j<1S;j++)a.C({z:n,A:v[j]})}8 2(v!==B&&P v!=\'S\')a.C({z:n,A:v})}2(!b&&c.Q){3 f=c.1D("19");H(3 i=0,F=f.G;i<F;i++){3 g=f[i];3 n=g.z;2(n&&!g.1d&&g.I=="Y"&&c.Q==g)a.C({z:n+\'.x\',A:c.11},{z:n+\'.y\',A:c.16})}}6 a};$.7.2O=5(a){6 $.1x(4.1z(a))};$.7.2N=5(b){3 a=[];4.D(5(){3 n=4.z;2(!n)6;3 v=$.15(4,b);2(v&&v.1c==1g){H(3 i=0,F=v.G;i<F;i++)a.C({z:n,A:v[i]})}8 2(v!==B&&P v!=\'S\')a.C({z:4.z,A:v})});6 $.1x(a)};$.7.15=5(a){H(3 b=[],i=0,F=4.G;i<F;i++){3 c=4[i];3 v=$.15(c,a);2(v===B||P v==\'S\'||(v.1c==1g&&!v.G))1v;v.1c==1g?$.3e(b,v):b.C(v)}6 b};$.15=5(b,c){3 n=b.z,t=b.I,13=b.1e.1F();2(P c==\'S\')c=T;2(c&&(!n||b.1d||t==\'17\'||t==\'2M\'||(t==\'1q\'||t==\'1B\')&&!b.1p||(t==\'K\'||t==\'Y\')&&b.R&&b.R.Q!=b||13==\'J\'&&b.1y==-1))6 B;2(13==\'J\'){3 d=b.1y;2(d<0)6 B;3 a=[],1k=b.2I;3 e=(t==\'J-2e\');3 f=(e?d+1:1k.G);H(3 i=(e?d:0);i<f;i++){3 g=1k[i];2(g.2c){3 v=$.1i.1X&&!(g.2G[\'A\'].3t)?g.1A:g.A;2(e)6 v;a.C(v)}}6 a}6 b.A};$.7.1o=5(){6 4.D(5(){$(\'19,J,1C\',4).2p()})};$.7.2p=$.7.2D=5(){6 4.D(5(){3 t=4.I,13=4.1e.1F();2(t==\'1A\'||t==\'3w\'||13==\'1C\')4.A=\'\';8 2(t==\'1q\'||t==\'1B\')4.1p=E;8 2(13==\'J\')4.1y=-1})};$.7.1r=5(){6 4.D(5(){2(P 4.17==\'5\'||(P 4.17==\'2C\'&&!4.17.3y))4.17()})};$.7.2A=5(b){2(b==S)b=T;6 4.D(5(){4.1d=!b})};$.7.J=5(b){2(b==S)b=T;6 4.D(5(){3 t=4.I;2(t==\'1q\'||t==\'1B\')4.1p=b;8 2(4.1e.1F()==\'1P\'){3 a=$(4).2z(\'J\');2(b&&a[0]&&a[0].I==\'J-2e\'){a.2y(\'1P\').J(E)}4.2c=b}})}})(3E);',62,227,'||if|var|this|function|return|fn|else|||||||||||||||||||||||||||name|value|null|push|each|false|max|length|for|type|select|submit|success|event|trigger|doc|typeof|clk|form|undefined|true|callbacks|data|ajaxForm|attr|image|responseText||clk_x|cb|tag|target|fieldValue|clk_y|reset|dataType|input|counter|responseXML|constructor|disabled|tagName|setTimeout|Array|url|browser|ajaxSubmit|ops|fileUpload|submitHandler|body|clearForm|checked|checkbox|resetForm|clickHandler|optionHash|formPluginId|continue|document|param|selectedIndex|formToArray|text|radio|textarea|getElementsByTagName|window|toLowerCase|timeout|encoding|load|onload|attachEvent|arguments|innerHTML|evalScripts|active|option|veto|left|jmax|unbind|offset|pageX|pageY|msie|offsetX|click|opera|ajaxFormUnbind|documentElement|top|1000px|new|ActiveXObject|complete|beforeSubmit|GET|closeKeepAlive|error|selected|toXml|one|iframe|method|extend|action|json|XMLDocument|contentDocument|xml|contentWindow|detachEvent|clearFields|enctype|semantic|addEventListener|html|location|appendTo|ajaxSend|ajaxStart|find|parent|enable|global|object|clearInputs|setRequestHeader|getResponseHeader|attributes|getAllResponseHeaders|options|statusText|status|serialize|button|fieldSerialize|formSerialize|pre|absolute|position|css|elements|write|offsetLeft|javascript|offsetY|src|indexOf|version|toUpperCase|offsetTop|id|parsererror|jqFormIO|validate|parseFromString|DOMParser|ajaxSettings|loadXML|async|XMLDOM|Microsoft|merge|notify|100|ajax|remove|ajaxStop|ajaxComplete|get|ajaxSuccess|handleError|safari|catch|globalEval|eval|script|specified|in|file|password|throw|nodeType|try|removeEventListener|multipart|POST|toString|jQuery'.split('|'),0,{}))
;
/*

  OpenLayers.js -- OpenLayers Map Viewer Library

  Copyright 2005-2010 OpenLayers Contributors, released under the Clear BSD
  license. Please see http://svn.openlayers.org/trunk/openlayers/license.txt
  for the full text of the license.

  Includes compressed code under the following licenses:

  (For uncompressed versions of the code used please see the
  OpenLayers SVN repository: <http://openlayers.org/>)

*/

/* Contains portions of Prototype.js:
 *
 * Prototype JavaScript framework, version 1.4.0
 *  (c) 2005 Sam Stephenson <sam@conio.net>
 *
 *  Prototype is freely distributable under the terms of an MIT-style license.
 *  For details, see the Prototype web site: http://prototype.conio.net/
 *
 *--------------------------------------------------------------------------*/

/**  
*  
*  Contains portions of Rico <http://openrico.org/>
* 
*  Copyright 2005 Sabre Airline Solutions  
*  
*  Licensed under the Apache License, Version 2.0 (the "License"); you
*  may not use this file except in compliance with the License. You
*  may obtain a copy of the License at
*  
*         http://www.apache.org/licenses/LICENSE-2.0  
*  
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
*  implied. See the License for the specific language governing
*  permissions and limitations under the License. 
*
**/

/**
 * Contains XMLHttpRequest.js <http://code.google.com/p/xmlhttprequest/>
 * Copyright 2007 Sergey Ilinsky (http://www.ilinsky.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * Contains portions of Gears <http://code.google.com/apis/gears/>
 *
 * Copyright 2007, Google Inc.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  1. Redistributions of source code must retain the above copyright notice,
 *     this list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *  3. Neither the name of Google Inc. nor the names of its contributors may be
 *     used to endorse or promote products derived from this software without
 *     specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 * EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Sets up google.gears.*, which is *the only* supported way to access Gears.
 *
 * Circumvent this file at your own risk!
 *
 * In the future, Gears may automatically define google.gears.* without this
 * file. Gears may use these objects to transparently fix bugs and compatibility
 * issues. Applications that use the code below will continue to work seamlessly
 * when that happens.
 */

/**
 * OpenLayers.Util.pagePosition is based on Yahoo's getXY method, which is
 * Copyright (c) 2006, Yahoo! Inc.
 * All rights reserved.
 * 
 * Redistribution and use of this software in source and binary forms, with or
 * without modification, are permitted provided that the following conditions
 * are met:
 * 
 * * Redistributions of source code must retain the above copyright notice,
 *   this list of conditions and the following disclaimer.
 * 
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 * 
 * * Neither the name of Yahoo! Inc. nor the names of its contributors may be
 *   used to endorse or promote products derived from this software without
 *   specific prior written permission of Yahoo! Inc.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
 * POSSIBILITY OF SUCH DAMAGE.
 */var OpenLayers={VERSION_NUMBER:"$Revision: 10862 $",singleFile:true,_getScriptLocation:(function(){var r=new RegExp("(^|(.*?\\/))(OpenLayers\.js)(\\?|$)"),s=document.getElementsByTagName('script'),src,m,l="";for(var i=0,len=s.length;i<len;i++){src=s[i].getAttribute('src');if(src){var m=src.match(r);if(m){l=m[1];break;}}}
return(function(){return l;});})()};(function(){var singleFile=(typeof OpenLayers=="object"&&OpenLayers.singleFile);var scriptName=(!singleFile)?"lib/OpenLayers.js":"OpenLayers.js";window.OpenLayers={_getScriptLocation:(function(){var r=new RegExp("(^|(.*?\\/))("+scriptName+")(\\?|$)"),s=document.getElementsByTagName('script'),src,m,l="";for(var i=0,len=s.length;i<len;i++){src=s[i].getAttribute('src');if(src){var m=src.match(r);if(m){l=m[1];break;}}}
return(function(){return l;});})()};if(!singleFile){var jsfiles=new Array("OpenLayers/Util.js","OpenLayers/BaseTypes.js","OpenLayers/BaseTypes/Class.js","OpenLayers/BaseTypes/Bounds.js","OpenLayers/BaseTypes/Element.js","OpenLayers/BaseTypes/LonLat.js","OpenLayers/BaseTypes/Pixel.js","OpenLayers/BaseTypes/Size.js","OpenLayers/Console.js","OpenLayers/Tween.js","Rico/Corner.js","Rico/Color.js","OpenLayers/Ajax.js","OpenLayers/Events.js","OpenLayers/Request.js","OpenLayers/Request/XMLHttpRequest.js","OpenLayers/Projection.js","OpenLayers/Map.js","OpenLayers/Layer.js","OpenLayers/Icon.js","OpenLayers/Marker.js","OpenLayers/Marker/Box.js","OpenLayers/Popup.js","OpenLayers/Tile.js","OpenLayers/Tile/Image.js","OpenLayers/Tile/Image/IFrame.js","OpenLayers/Tile/WFS.js","OpenLayers/Layer/Image.js","OpenLayers/Layer/SphericalMercator.js","OpenLayers/Layer/EventPane.js","OpenLayers/Layer/FixedZoomLevels.js","OpenLayers/Layer/Google.js","OpenLayers/Layer/Google/v3.js","OpenLayers/Layer/VirtualEarth.js","OpenLayers/Layer/Yahoo.js","OpenLayers/Layer/HTTPRequest.js","OpenLayers/Layer/Grid.js","OpenLayers/Layer/MapGuide.js","OpenLayers/Layer/MapServer.js","OpenLayers/Layer/MapServer/Untiled.js","OpenLayers/Layer/KaMap.js","OpenLayers/Layer/KaMapCache.js","OpenLayers/Layer/MultiMap.js","OpenLayers/Layer/Markers.js","OpenLayers/Layer/Text.js","OpenLayers/Layer/WorldWind.js","OpenLayers/Layer/ArcGIS93Rest.js","OpenLayers/Layer/WMS.js","OpenLayers/Layer/WMS/Untiled.js","OpenLayers/Layer/WMS/Post.js","OpenLayers/Layer/WMTS.js","OpenLayers/Layer/ArcIMS.js","OpenLayers/Layer/GeoRSS.js","OpenLayers/Layer/Boxes.js","OpenLayers/Layer/XYZ.js","OpenLayers/Layer/TMS.js","OpenLayers/Layer/TileCache.js","OpenLayers/Layer/Zoomify.js","OpenLayers/Popup/Anchored.js","OpenLayers/Popup/AnchoredBubble.js","OpenLayers/Popup/Framed.js","OpenLayers/Popup/FramedCloud.js","OpenLayers/Feature.js","OpenLayers/Feature/Vector.js","OpenLayers/Feature/WFS.js","OpenLayers/Handler.js","OpenLayers/Handler/Click.js","OpenLayers/Handler/Hover.js","OpenLayers/Handler/Point.js","OpenLayers/Handler/Path.js","OpenLayers/Handler/Polygon.js","OpenLayers/Handler/Feature.js","OpenLayers/Handler/Drag.js","OpenLayers/Handler/RegularPolygon.js","OpenLayers/Handler/Box.js","OpenLayers/Handler/MouseWheel.js","OpenLayers/Handler/Keyboard.js","OpenLayers/Control.js","OpenLayers/Control/Attribution.js","OpenLayers/Control/Button.js","OpenLayers/Control/ZoomBox.js","OpenLayers/Control/ZoomToMaxExtent.js","OpenLayers/Control/DragPan.js","OpenLayers/Control/Navigation.js","OpenLayers/Control/MouseDefaults.js","OpenLayers/Control/MousePosition.js","OpenLayers/Control/OverviewMap.js","OpenLayers/Control/KeyboardDefaults.js","OpenLayers/Control/PanZoom.js","OpenLayers/Control/PanZoomBar.js","OpenLayers/Control/ArgParser.js","OpenLayers/Control/Permalink.js","OpenLayers/Control/Scale.js","OpenLayers/Control/ScaleLine.js","OpenLayers/Control/Snapping.js","OpenLayers/Control/Split.js","OpenLayers/Control/LayerSwitcher.js","OpenLayers/Control/DrawFeature.js","OpenLayers/Control/DragFeature.js","OpenLayers/Control/ModifyFeature.js","OpenLayers/Control/Panel.js","OpenLayers/Control/SelectFeature.js","OpenLayers/Control/NavigationHistory.js","OpenLayers/Control/Measure.js","OpenLayers/Control/WMSGetFeatureInfo.js","OpenLayers/Control/WMTSGetFeatureInfo.js","OpenLayers/Control/Graticule.js","OpenLayers/Control/TransformFeature.js","OpenLayers/Control/SLDSelect.js","OpenLayers/Geometry.js","OpenLayers/Geometry/Rectangle.js","OpenLayers/Geometry/Collection.js","OpenLayers/Geometry/Point.js","OpenLayers/Geometry/MultiPoint.js","OpenLayers/Geometry/Curve.js","OpenLayers/Geometry/LineString.js","OpenLayers/Geometry/LinearRing.js","OpenLayers/Geometry/Polygon.js","OpenLayers/Geometry/MultiLineString.js","OpenLayers/Geometry/MultiPolygon.js","OpenLayers/Geometry/Surface.js","OpenLayers/Renderer.js","OpenLayers/Renderer/Elements.js","OpenLayers/Renderer/SVG.js","OpenLayers/Renderer/Canvas.js","OpenLayers/Renderer/VML.js","OpenLayers/Layer/Vector.js","OpenLayers/Layer/Vector/RootContainer.js","OpenLayers/Strategy.js","OpenLayers/Strategy/Filter.js","OpenLayers/Strategy/Fixed.js","OpenLayers/Strategy/Cluster.js","OpenLayers/Strategy/Paging.js","OpenLayers/Strategy/BBOX.js","OpenLayers/Strategy/Save.js","OpenLayers/Strategy/Refresh.js","OpenLayers/Filter.js","OpenLayers/Filter/FeatureId.js","OpenLayers/Filter/Logical.js","OpenLayers/Filter/Comparison.js","OpenLayers/Filter/Spatial.js","OpenLayers/Protocol.js","OpenLayers/Protocol/HTTP.js","OpenLayers/Protocol/SQL.js","OpenLayers/Protocol/SQL/Gears.js","OpenLayers/Protocol/WFS.js","OpenLayers/Protocol/WFS/v1.js","OpenLayers/Protocol/WFS/v1_0_0.js","OpenLayers/Protocol/WFS/v1_1_0.js","OpenLayers/Protocol/SOS.js","OpenLayers/Protocol/SOS/v1_0_0.js","OpenLayers/Layer/PointTrack.js","OpenLayers/Layer/GML.js","OpenLayers/Style.js","OpenLayers/Style2.js","OpenLayers/StyleMap.js","OpenLayers/Rule.js","OpenLayers/Format.js","OpenLayers/Format/XML.js","OpenLayers/Format/Context.js","OpenLayers/Format/ArcXML.js","OpenLayers/Format/ArcXML/Features.js","OpenLayers/Format/GML.js","OpenLayers/Format/GML/Base.js","OpenLayers/Format/GML/v2.js","OpenLayers/Format/GML/v3.js","OpenLayers/Format/Atom.js","OpenLayers/Format/KML.js","OpenLayers/Format/GeoRSS.js","OpenLayers/Format/WFS.js","OpenLayers/Format/WFSCapabilities.js","OpenLayers/Format/WFSCapabilities/v1.js","OpenLayers/Format/WFSCapabilities/v1_0_0.js","OpenLayers/Format/WFSCapabilities/v1_1_0.js","OpenLayers/Format/WFSDescribeFeatureType.js","OpenLayers/Format/WMSDescribeLayer.js","OpenLayers/Format/WMSDescribeLayer/v1_1.js","OpenLayers/Format/WKT.js","OpenLayers/Format/OSM.js","OpenLayers/Format/GPX.js","OpenLayers/Format/Filter.js","OpenLayers/Format/Filter/v1.js","OpenLayers/Format/Filter/v1_0_0.js","OpenLayers/Format/Filter/v1_1_0.js","OpenLayers/Format/SLD.js","OpenLayers/Format/SLD/v1.js","OpenLayers/Format/SLD/v1_0_0.js","OpenLayers/Format/OWSCommon/v1.js","OpenLayers/Format/OWSCommon/v1_0_0.js","OpenLayers/Format/OWSCommon/v1_1_0.js","OpenLayers/Format/CSWGetDomain.js","OpenLayers/Format/CSWGetDomain/v2_0_2.js","OpenLayers/Format/CSWGetRecords.js","OpenLayers/Format/CSWGetRecords/v2_0_2.js","OpenLayers/Format/WFST.js","OpenLayers/Format/WFST/v1.js","OpenLayers/Format/WFST/v1_0_0.js","OpenLayers/Format/WFST/v1_1_0.js","OpenLayers/Format/Text.js","OpenLayers/Format/JSON.js","OpenLayers/Format/GeoJSON.js","OpenLayers/Format/WMC.js","OpenLayers/Format/WMC/v1.js","OpenLayers/Format/WMC/v1_0_0.js","OpenLayers/Format/WMC/v1_1_0.js","OpenLayers/Format/WMSCapabilities.js","OpenLayers/Format/WMSCapabilities/v1.js","OpenLayers/Format/WMSCapabilities/v1_1.js","OpenLayers/Format/WMSCapabilities/v1_1_0.js","OpenLayers/Format/WMSCapabilities/v1_1_1.js","OpenLayers/Format/WMSCapabilities/v1_3.js","OpenLayers/Format/WMSCapabilities/v1_3_0.js","OpenLayers/Format/WMSGetFeatureInfo.js","OpenLayers/Format/SOSCapabilities.js","OpenLayers/Format/SOSCapabilities/v1_0_0.js","OpenLayers/Format/SOSGetObservation.js","OpenLayers/Format/SOSGetFeatureOfInterest.js","OpenLayers/Format/OWSContext.js","OpenLayers/Format/OWSContext/v0_3_1.js","OpenLayers/Format/WMTSCapabilities.js","OpenLayers/Format/WMTSCapabilities/v1_0_0.js","OpenLayers/Layer/WFS.js","OpenLayers/Control/GetFeature.js","OpenLayers/Control/MouseToolbar.js","OpenLayers/Control/NavToolbar.js","OpenLayers/Control/PanPanel.js","OpenLayers/Control/Pan.js","OpenLayers/Control/ZoomIn.js","OpenLayers/Control/ZoomOut.js","OpenLayers/Control/ZoomPanel.js","OpenLayers/Control/EditingToolbar.js","OpenLayers/Symbolizer.js","OpenLayers/Symbolizer/Point.js","OpenLayers/Symbolizer/Line.js","OpenLayers/Symbolizer/Polygon.js","OpenLayers/Symbolizer/Text.js","OpenLayers/Symbolizer/Raster.js","OpenLayers/Lang.js","OpenLayers/Lang/en.js");var agent=navigator.userAgent;var docWrite=(agent.match("MSIE")||agent.match("Safari"));if(docWrite){var allScriptTags=new Array(jsfiles.length);}
var host=OpenLayers._getScriptLocation()+"lib/";for(var i=0,len=jsfiles.length;i<len;i++){if(docWrite){allScriptTags[i]="<script src='"+host+jsfiles[i]+"'></script>";}else{var s=document.createElement("script");s.src=host+jsfiles[i];var h=document.getElementsByTagName("head").length?document.getElementsByTagName("head")[0]:document.body;h.appendChild(s);}}
if(docWrite){document.write(allScriptTags.join(""));}}})();OpenLayers.VERSION_NUMBER="$Revision: 10862 $";OpenLayers.String={startsWith:function(str,sub){return(str.indexOf(sub)==0);},contains:function(str,sub){return(str.indexOf(sub)!=-1);},trim:function(str){return str.replace(/^\s\s*/,'').replace(/\s\s*$/,'');},camelize:function(str){var oStringList=str.split('-');var camelizedString=oStringList[0];for(var i=1,len=oStringList.length;i<len;i++){var s=oStringList[i];camelizedString+=s.charAt(0).toUpperCase()+s.substring(1);}
return camelizedString;},format:function(template,context,args){if(!context){context=window;}
var replacer=function(str,match){var replacement;var subs=match.split(/\.+/);for(var i=0;i<subs.length;i++){if(i==0){replacement=context;}
replacement=replacement[subs[i]];}
if(typeof replacement=="function"){replacement=args?replacement.apply(null,args):replacement();}
if(typeof replacement=='undefined'){return'undefined';}else{return replacement;}};return template.replace(OpenLayers.String.tokenRegEx,replacer);},tokenRegEx:/\$\{([\w.]+?)\}/g,numberRegEx:/^([+-]?)(?=\d|\.\d)\d*(\.\d*)?([Ee]([+-]?\d+))?$/,isNumeric:function(value){return OpenLayers.String.numberRegEx.test(value);},numericIf:function(value){return OpenLayers.String.isNumeric(value)?parseFloat(value):value;}};if(!String.prototype.startsWith){String.prototype.startsWith=function(sStart){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.startsWith'}));return OpenLayers.String.startsWith(this,sStart);};}
if(!String.prototype.contains){String.prototype.contains=function(str){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.contains'}));return OpenLayers.String.contains(this,str);};}
if(!String.prototype.trim){String.prototype.trim=function(){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.trim'}));return OpenLayers.String.trim(this);};}
if(!String.prototype.camelize){String.prototype.camelize=function(){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.camelize'}));return OpenLayers.String.camelize(this);};}
OpenLayers.Number={decimalSeparator:".",thousandsSeparator:",",limitSigDigs:function(num,sig){var fig=0;if(sig>0){fig=parseFloat(num.toPrecision(sig));}
return fig;},format:function(num,dec,tsep,dsep){dec=(typeof dec!="undefined")?dec:0;tsep=(typeof tsep!="undefined")?tsep:OpenLayers.Number.thousandsSeparator;dsep=(typeof dsep!="undefined")?dsep:OpenLayers.Number.decimalSeparator;if(dec!=null){num=parseFloat(num.toFixed(dec));}
var parts=num.toString().split(".");if(parts.length==1&&dec==null){dec=0;}
var integer=parts[0];if(tsep){var thousands=/(-?[0-9]+)([0-9]{3})/;while(thousands.test(integer)){integer=integer.replace(thousands,"$1"+tsep+"$2");}}
var str;if(dec==0){str=integer;}else{var rem=parts.length>1?parts[1]:"0";if(dec!=null){rem=rem+new Array(dec-rem.length+1).join("0");}
str=integer+dsep+rem;}
return str;}};if(!Number.prototype.limitSigDigs){Number.prototype.limitSigDigs=function(sig){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.Number.limitSigDigs'}));return OpenLayers.Number.limitSigDigs(this,sig);};}
OpenLayers.Function={bind:function(func,object){var args=Array.prototype.slice.apply(arguments,[2]);return function(){var newArgs=args.concat(Array.prototype.slice.apply(arguments,[0]));return func.apply(object,newArgs);};},bindAsEventListener:function(func,object){return function(event){return func.call(object,event||window.event);};},False:function(){return false;},True:function(){return true;}};if(!Function.prototype.bind){Function.prototype.bind=function(){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.Function.bind'}));Array.prototype.unshift.apply(arguments,[this]);return OpenLayers.Function.bind.apply(null,arguments);};}
if(!Function.prototype.bindAsEventListener){Function.prototype.bindAsEventListener=function(object){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.Function.bindAsEventListener'}));return OpenLayers.Function.bindAsEventListener(this,object);};}
OpenLayers.Array={filter:function(array,callback,caller){var selected=[];if(Array.prototype.filter){selected=array.filter(callback,caller);}else{var len=array.length;if(typeof callback!="function"){throw new TypeError();}
for(var i=0;i<len;i++){if(i in array){var val=array[i];if(callback.call(caller,val,i,array)){selected.push(val);}}}}
return selected;}};OpenLayers.Date={toISOString:(function(){if("toISOString"in Date.prototype){return function(date){return date.toISOString();};}else{function pad(num,len){var str=num+"";while(str.length<len){str="0"+str;}
return str;}
return function(date){var str;if(isNaN(date.getTime())){str="Invalid Date";}else{str=date.getUTCFullYear()+"-"+
pad(date.getUTCMonth()+1,2)+"-"+
pad(date.getUTCDate(),2)+"T"+
pad(date.getUTCHours(),2)+":"+
pad(date.getUTCMinutes(),2)+":"+
pad(date.getUTCSeconds(),2)+"."+
pad(date.getUTCMilliseconds(),3)+"Z";}
return str;};}})(),parse:function(str){var date;var elapsed=Date.parse(str);if(!isNaN(elapsed)){date=new Date(elapsed);}else{var match=str.match(/^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{1,2}):(\d{2}):(\d{2}(?:\.\d+)?)(Z|(?:[+-]\d{1,2}(?::(\d{2}))?)))?$/);if(match&&(match[1]||match[7])){var year=parseInt(match[1],10)||0;var month=(parseInt(match[2],10)-1)||0;var day=parseInt(match[3],10)||1;date=new Date(Date.UTC(year,month,day));var type=match[7];if(type){var hours=parseInt(match[4],10);var minutes=parseInt(match[5],10);var secFrac=parseFloat(match[6]);var seconds=secFrac|0;var milliseconds=Math.round(1000*(secFrac-seconds));date.setUTCHours(hours,minutes,seconds,milliseconds);if(type!=="Z"){var hoursOffset=parseInt(type,10);var minutesOffset=parseInt(match[8])||0;var offset=-1000*(60*(hoursOffset*60)+minutesOffset*60);date=new Date(date.getTime()+offset);}}}else{date=new Date("invalid");}}
return date;}};OpenLayers.Class=function(){var len=arguments.length;var P=arguments[0];var F=arguments[len-1];var C=typeof F.initialize=="function"?F.initialize:function(){P.apply(this,arguments);};if(len>1){var newArgs=[C,P].concat(Array.prototype.slice.call(arguments).slice(1,len-1),F);OpenLayers.inherit.apply(null,newArgs);}else{C.prototype=F;}
return C;};OpenLayers.Class.isPrototype=function(){};OpenLayers.Class.create=function(){return function(){if(arguments&&arguments[0]!=OpenLayers.Class.isPrototype){this.initialize.apply(this,arguments);}};};OpenLayers.Class.inherit=function(P){var C=function(){P.call(this);};var newArgs=[C].concat(Array.prototype.slice.call(arguments));OpenLayers.inherit.apply(null,newArgs);return C.prototype;};OpenLayers.inherit=function(C,P){var F=function(){};F.prototype=P.prototype;C.prototype=new F;var i,l,o;for(i=2,l=arguments.length;i<l;i++){o=arguments[i];if(typeof o==="function"){o=o.prototype;}
OpenLayers.Util.extend(C.prototype,o);}};OpenLayers.Util={};OpenLayers.Util.getElement=function(){var elements=[];for(var i=0,len=arguments.length;i<len;i++){var element=arguments[i];if(typeof element=='string'){element=document.getElementById(element);}
if(arguments.length==1){return element;}
elements.push(element);}
return elements;};OpenLayers.Util.isElement=function(o){return!!(o&&o.nodeType===1);};if(typeof window.$==="undefined"){window.$=OpenLayers.Util.getElement;}
OpenLayers.Util.extend=function(destination,source){destination=destination||{};if(source){for(var property in source){var value=source[property];if(value!==undefined){destination[property]=value;}}
var sourceIsEvt=typeof window.Event=="function"&&source instanceof window.Event;if(!sourceIsEvt&&source.hasOwnProperty&&source.hasOwnProperty('toString')){destination.toString=source.toString;}}
return destination;};OpenLayers.Util.removeItem=function(array,item){for(var i=array.length-1;i>=0;i--){if(array[i]==item){array.splice(i,1);}}
return array;};OpenLayers.Util.clearArray=function(array){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'array = []'}));array.length=0;};OpenLayers.Util.indexOf=function(array,obj){if(typeof array.indexOf=="function"){return array.indexOf(obj);}else{for(var i=0,len=array.length;i<len;i++){if(array[i]==obj){return i;}}
return-1;}};OpenLayers.Util.modifyDOMElement=function(element,id,px,sz,position,border,overflow,opacity){if(id){element.id=id;}
if(px){element.style.left=px.x+"px";element.style.top=px.y+"px";}
if(sz){element.style.width=sz.w+"px";element.style.height=sz.h+"px";}
if(position){element.style.position=position;}
if(border){element.style.border=border;}
if(overflow){element.style.overflow=overflow;}
if(parseFloat(opacity)>=0.0&&parseFloat(opacity)<1.0){element.style.filter='alpha(opacity='+(opacity*100)+')';element.style.opacity=opacity;}else if(parseFloat(opacity)==1.0){element.style.filter='';element.style.opacity='';}};OpenLayers.Util.createDiv=function(id,px,sz,imgURL,position,border,overflow,opacity){var dom=document.createElement('div');if(imgURL){dom.style.backgroundImage='url('+imgURL+')';}
if(!id){id=OpenLayers.Util.createUniqueID("OpenLayersDiv");}
if(!position){position="absolute";}
OpenLayers.Util.modifyDOMElement(dom,id,px,sz,position,border,overflow,opacity);return dom;};OpenLayers.Util.createImage=function(id,px,sz,imgURL,position,border,opacity,delayDisplay){var image=document.createElement("img");if(!id){id=OpenLayers.Util.createUniqueID("OpenLayersDiv");}
if(!position){position="relative";}
OpenLayers.Util.modifyDOMElement(image,id,px,sz,position,border,null,opacity);if(delayDisplay){image.style.display="none";OpenLayers.Event.observe(image,"load",OpenLayers.Function.bind(OpenLayers.Util.onImageLoad,image));OpenLayers.Event.observe(image,"error",OpenLayers.Function.bind(OpenLayers.Util.onImageLoadError,image));}
image.style.alt=id;image.galleryImg="no";if(imgURL){image.src=imgURL;}
return image;};OpenLayers.Util.setOpacity=function(element,opacity){OpenLayers.Util.modifyDOMElement(element,null,null,null,null,null,null,opacity);};OpenLayers.Util.onImageLoad=function(){if(!this.viewRequestID||(this.map&&this.viewRequestID==this.map.viewRequestID)){this.style.display="";}
OpenLayers.Element.removeClass(this,"olImageLoadError");};OpenLayers.IMAGE_RELOAD_ATTEMPTS=0;OpenLayers.Util.onImageLoadError=function(){this._attempts=(this._attempts)?(this._attempts+1):1;if(this._attempts<=OpenLayers.IMAGE_RELOAD_ATTEMPTS){var urls=this.urls;if(urls&&urls instanceof Array&&urls.length>1){var src=this.src.toString();var current_url,k;for(k=0;current_url=urls[k];k++){if(src.indexOf(current_url)!=-1){break;}}
var guess=Math.floor(urls.length*Math.random());var new_url=urls[guess];k=0;while(new_url==current_url&&k++<4){guess=Math.floor(urls.length*Math.random());new_url=urls[guess];}
this.src=src.replace(current_url,new_url);}else{this.src=this.src;}}else{OpenLayers.Element.addClass(this,"olImageLoadError");}
this.style.display="";};OpenLayers.Util.alphaHackNeeded=null;OpenLayers.Util.alphaHack=function(){if(OpenLayers.Util.alphaHackNeeded==null){var arVersion=navigator.appVersion.split("MSIE");var version=parseFloat(arVersion[1]);var filter=false;try{filter=!!(document.body.filters);}catch(e){}
OpenLayers.Util.alphaHackNeeded=(filter&&(version>=5.5)&&(version<7));}
return OpenLayers.Util.alphaHackNeeded;};OpenLayers.Util.modifyAlphaImageDiv=function(div,id,px,sz,imgURL,position,border,sizing,opacity){OpenLayers.Util.modifyDOMElement(div,id,px,sz,position,null,null,opacity);var img=div.childNodes[0];if(imgURL){img.src=imgURL;}
OpenLayers.Util.modifyDOMElement(img,div.id+"_innerImage",null,sz,"relative",border);if(OpenLayers.Util.alphaHack()){if(div.style.display!="none"){div.style.display="inline-block";}
if(sizing==null){sizing="scale";}
div.style.filter="progid:DXImageTransform.Microsoft"+".AlphaImageLoader(src='"+img.src+"', "+"sizingMethod='"+sizing+"')";if(parseFloat(div.style.opacity)>=0.0&&parseFloat(div.style.opacity)<1.0){div.style.filter+=" alpha(opacity="+div.style.opacity*100+")";}
img.style.filter="alpha(opacity=0)";}};OpenLayers.Util.createAlphaImageDiv=function(id,px,sz,imgURL,position,border,sizing,opacity,delayDisplay){var div=OpenLayers.Util.createDiv();var img=OpenLayers.Util.createImage(null,null,null,null,null,null,null,false);div.appendChild(img);if(delayDisplay){img.style.display="none";OpenLayers.Event.observe(img,"load",OpenLayers.Function.bind(OpenLayers.Util.onImageLoad,div));OpenLayers.Event.observe(img,"error",OpenLayers.Function.bind(OpenLayers.Util.onImageLoadError,div));}
OpenLayers.Util.modifyAlphaImageDiv(div,id,px,sz,imgURL,position,border,sizing,opacity);return div;};OpenLayers.Util.upperCaseObject=function(object){var uObject={};for(var key in object){uObject[key.toUpperCase()]=object[key];}
return uObject;};OpenLayers.Util.applyDefaults=function(to,from){to=to||{};var fromIsEvt=typeof window.Event=="function"&&from instanceof window.Event;for(var key in from){if(to[key]===undefined||(!fromIsEvt&&from.hasOwnProperty&&from.hasOwnProperty(key)&&!to.hasOwnProperty(key))){to[key]=from[key];}}
if(!fromIsEvt&&from&&from.hasOwnProperty&&from.hasOwnProperty('toString')&&!to.hasOwnProperty('toString')){to.toString=from.toString;}
return to;};OpenLayers.Util.getParameterString=function(params){var paramsArray=[];for(var key in params){var value=params[key];if((value!=null)&&(typeof value!='function')){var encodedValue;if(typeof value=='object'&&value.constructor==Array){var encodedItemArray=[];var item;for(var itemIndex=0,len=value.length;itemIndex<len;itemIndex++){item=value[itemIndex];encodedItemArray.push(encodeURIComponent((item===null||item===undefined)?"":item));}
encodedValue=encodedItemArray.join(",");}
else{encodedValue=encodeURIComponent(value);}
paramsArray.push(encodeURIComponent(key)+"="+encodedValue);}}
return paramsArray.join("&");};OpenLayers.Util.urlAppend=function(url,paramStr){var newUrl=url;if(paramStr){var parts=(url+" ").split(/[?&]/);newUrl+=(parts.pop()===" "?paramStr:parts.length?"&"+paramStr:"?"+paramStr);}
return newUrl;};OpenLayers.ImgPath='';OpenLayers.Util.getImagesLocation=function(){return OpenLayers.ImgPath||(OpenLayers._getScriptLocation()+"img/");};OpenLayers.Util.Try=function(){var returnValue=null;for(var i=0,len=arguments.length;i<len;i++){var lambda=arguments[i];try{returnValue=lambda();break;}catch(e){}}
return returnValue;};OpenLayers.Util.getNodes=function(p,tagName){var nodes=OpenLayers.Util.Try(function(){return OpenLayers.Util._getNodes(p.documentElement.childNodes,tagName);},function(){return OpenLayers.Util._getNodes(p.childNodes,tagName);});return nodes;};OpenLayers.Util._getNodes=function(nodes,tagName){var retArray=[];for(var i=0,len=nodes.length;i<len;i++){if(nodes[i].nodeName==tagName){retArray.push(nodes[i]);}}
return retArray;};OpenLayers.Util.getTagText=function(parent,item,index){var result=OpenLayers.Util.getNodes(parent,item);if(result&&(result.length>0))
{if(!index){index=0;}
if(result[index].childNodes.length>1){return result.childNodes[1].nodeValue;}
else if(result[index].childNodes.length==1){return result[index].firstChild.nodeValue;}}else{return"";}};OpenLayers.Util.getXmlNodeValue=function(node){var val=null;OpenLayers.Util.Try(function(){val=node.text;if(!val){val=node.textContent;}
if(!val){val=node.firstChild.nodeValue;}},function(){val=node.textContent;});return val;};OpenLayers.Util.mouseLeft=function(evt,div){var target=(evt.relatedTarget)?evt.relatedTarget:evt.toElement;while(target!=div&&target!=null){target=target.parentNode;}
return(target!=div);};OpenLayers.Util.DEFAULT_PRECISION=14;OpenLayers.Util.toFloat=function(number,precision){if(precision==null){precision=OpenLayers.Util.DEFAULT_PRECISION;}
var number;if(precision==0){number=parseFloat(number);}else{number=parseFloat(parseFloat(number).toPrecision(precision));}
return number;};OpenLayers.Util.rad=function(x){return x*Math.PI/180;};OpenLayers.Util.deg=function(x){return x*180/Math.PI;};OpenLayers.Util.VincentyConstants={a:6378137,b:6356752.3142,f:1/298.257223563};OpenLayers.Util.distVincenty=function(p1,p2){var ct=OpenLayers.Util.VincentyConstants;var a=ct.a,b=ct.b,f=ct.f;var L=OpenLayers.Util.rad(p2.lon-p1.lon);var U1=Math.atan((1-f)*Math.tan(OpenLayers.Util.rad(p1.lat)));var U2=Math.atan((1-f)*Math.tan(OpenLayers.Util.rad(p2.lat)));var sinU1=Math.sin(U1),cosU1=Math.cos(U1);var sinU2=Math.sin(U2),cosU2=Math.cos(U2);var lambda=L,lambdaP=2*Math.PI;var iterLimit=20;while(Math.abs(lambda-lambdaP)>1e-12&&--iterLimit>0){var sinLambda=Math.sin(lambda),cosLambda=Math.cos(lambda);var sinSigma=Math.sqrt((cosU2*sinLambda)*(cosU2*sinLambda)+
(cosU1*sinU2-sinU1*cosU2*cosLambda)*(cosU1*sinU2-sinU1*cosU2*cosLambda));if(sinSigma==0){return 0;}
var cosSigma=sinU1*sinU2+cosU1*cosU2*cosLambda;var sigma=Math.atan2(sinSigma,cosSigma);var alpha=Math.asin(cosU1*cosU2*sinLambda/sinSigma);var cosSqAlpha=Math.cos(alpha)*Math.cos(alpha);var cos2SigmaM=cosSigma-2*sinU1*sinU2/cosSqAlpha;var C=f/16*cosSqAlpha*(4+f*(4-3*cosSqAlpha));lambdaP=lambda;lambda=L+(1-C)*f*Math.sin(alpha)*(sigma+C*sinSigma*(cos2SigmaM+C*cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)));}
if(iterLimit==0){return NaN;}
var uSq=cosSqAlpha*(a*a-b*b)/(b*b);var A=1+uSq/16384*(4096+uSq*(-768+uSq*(320-175*uSq)));var B=uSq/1024*(256+uSq*(-128+uSq*(74-47*uSq)));var deltaSigma=B*sinSigma*(cos2SigmaM+B/4*(cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)-
B/6*cos2SigmaM*(-3+4*sinSigma*sinSigma)*(-3+4*cos2SigmaM*cos2SigmaM)));var s=b*A*(sigma-deltaSigma);var d=s.toFixed(3)/1000;return d;};OpenLayers.Util.destinationVincenty=function(lonlat,brng,dist){var u=OpenLayers.Util;var ct=u.VincentyConstants;var a=ct.a,b=ct.b,f=ct.f;var lon1=lonlat.lon;var lat1=lonlat.lat;var s=dist;var alpha1=u.rad(brng);var sinAlpha1=Math.sin(alpha1);var cosAlpha1=Math.cos(alpha1);var tanU1=(1-f)*Math.tan(u.rad(lat1));var cosU1=1/Math.sqrt((1+tanU1*tanU1)),sinU1=tanU1*cosU1;var sigma1=Math.atan2(tanU1,cosAlpha1);var sinAlpha=cosU1*sinAlpha1;var cosSqAlpha=1-sinAlpha*sinAlpha;var uSq=cosSqAlpha*(a*a-b*b)/(b*b);var A=1+uSq/16384*(4096+uSq*(-768+uSq*(320-175*uSq)));var B=uSq/1024*(256+uSq*(-128+uSq*(74-47*uSq)));var sigma=s/(b*A),sigmaP=2*Math.PI;while(Math.abs(sigma-sigmaP)>1e-12){var cos2SigmaM=Math.cos(2*sigma1+sigma);var sinSigma=Math.sin(sigma);var cosSigma=Math.cos(sigma);var deltaSigma=B*sinSigma*(cos2SigmaM+B/4*(cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)-
B/6*cos2SigmaM*(-3+4*sinSigma*sinSigma)*(-3+4*cos2SigmaM*cos2SigmaM)));sigmaP=sigma;sigma=s/(b*A)+deltaSigma;}
var tmp=sinU1*sinSigma-cosU1*cosSigma*cosAlpha1;var lat2=Math.atan2(sinU1*cosSigma+cosU1*sinSigma*cosAlpha1,(1-f)*Math.sqrt(sinAlpha*sinAlpha+tmp*tmp));var lambda=Math.atan2(sinSigma*sinAlpha1,cosU1*cosSigma-sinU1*sinSigma*cosAlpha1);var C=f/16*cosSqAlpha*(4+f*(4-3*cosSqAlpha));var L=lambda-(1-C)*f*sinAlpha*(sigma+C*sinSigma*(cos2SigmaM+C*cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)));var revAz=Math.atan2(sinAlpha,-tmp);return new OpenLayers.LonLat(lon1+u.deg(L),u.deg(lat2));};OpenLayers.Util.getParameters=function(url){url=url||window.location.href;var paramsString="";if(OpenLayers.String.contains(url,'?')){var start=url.indexOf('?')+1;var end=OpenLayers.String.contains(url,"#")?url.indexOf('#'):url.length;paramsString=url.substring(start,end);}
var parameters={};var pairs=paramsString.split(/[&;]/);for(var i=0,len=pairs.length;i<len;++i){var keyValue=pairs[i].split('=');if(keyValue[0]){var key=keyValue[0];try{key=decodeURIComponent(key);}catch(err){key=unescape(key);}
var value=(keyValue[1]||'').replace(/\+/g," ");try{value=decodeURIComponent(value);}catch(err){value=unescape(value);}
value=value.split(",")
if(value.length==1){value=value[0];}
parameters[key]=value;}}
return parameters;};OpenLayers.Util.getArgs=function(url){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.Util.getParameters'}));return OpenLayers.Util.getParameters(url);};OpenLayers.Util.lastSeqID=0;OpenLayers.Util.createUniqueID=function(prefix){if(prefix==null){prefix="id_";}
OpenLayers.Util.lastSeqID+=1;return prefix+OpenLayers.Util.lastSeqID;};OpenLayers.INCHES_PER_UNIT={'inches':1.0,'ft':12.0,'mi':63360.0,'m':39.3701,'km':39370.1,'dd':4374754,'yd':36};OpenLayers.INCHES_PER_UNIT["in"]=OpenLayers.INCHES_PER_UNIT.inches;OpenLayers.INCHES_PER_UNIT["degrees"]=OpenLayers.INCHES_PER_UNIT.dd;OpenLayers.INCHES_PER_UNIT["nmi"]=1852*OpenLayers.INCHES_PER_UNIT.m;OpenLayers.METERS_PER_INCH=0.02540005080010160020;OpenLayers.Util.extend(OpenLayers.INCHES_PER_UNIT,{"Inch":OpenLayers.INCHES_PER_UNIT.inches,"Meter":1.0/OpenLayers.METERS_PER_INCH,"Foot":0.30480060960121920243/OpenLayers.METERS_PER_INCH,"IFoot":0.30480000000000000000/OpenLayers.METERS_PER_INCH,"ClarkeFoot":0.3047972651151/OpenLayers.METERS_PER_INCH,"SearsFoot":0.30479947153867624624/OpenLayers.METERS_PER_INCH,"GoldCoastFoot":0.30479971018150881758/OpenLayers.METERS_PER_INCH,"IInch":0.02540000000000000000/OpenLayers.METERS_PER_INCH,"MicroInch":0.00002540000000000000/OpenLayers.METERS_PER_INCH,"Mil":0.00000002540000000000/OpenLayers.METERS_PER_INCH,"Centimeter":0.01000000000000000000/OpenLayers.METERS_PER_INCH,"Kilometer":1000.00000000000000000000/OpenLayers.METERS_PER_INCH,"Yard":0.91440182880365760731/OpenLayers.METERS_PER_INCH,"SearsYard":0.914398414616029/OpenLayers.METERS_PER_INCH,"IndianYard":0.91439853074444079983/OpenLayers.METERS_PER_INCH,"IndianYd37":0.91439523/OpenLayers.METERS_PER_INCH,"IndianYd62":0.9143988/OpenLayers.METERS_PER_INCH,"IndianYd75":0.9143985/OpenLayers.METERS_PER_INCH,"IndianFoot":0.30479951/OpenLayers.METERS_PER_INCH,"IndianFt37":0.30479841/OpenLayers.METERS_PER_INCH,"IndianFt62":0.3047996/OpenLayers.METERS_PER_INCH,"IndianFt75":0.3047995/OpenLayers.METERS_PER_INCH,"Mile":1609.34721869443738887477/OpenLayers.METERS_PER_INCH,"IYard":0.91440000000000000000/OpenLayers.METERS_PER_INCH,"IMile":1609.34400000000000000000/OpenLayers.METERS_PER_INCH,"NautM":1852.00000000000000000000/OpenLayers.METERS_PER_INCH,"Lat-66":110943.316488932731/OpenLayers.METERS_PER_INCH,"Lat-83":110946.25736872234125/OpenLayers.METERS_PER_INCH,"Decimeter":0.10000000000000000000/OpenLayers.METERS_PER_INCH,"Millimeter":0.00100000000000000000/OpenLayers.METERS_PER_INCH,"Dekameter":10.00000000000000000000/OpenLayers.METERS_PER_INCH,"Decameter":10.00000000000000000000/OpenLayers.METERS_PER_INCH,"Hectometer":100.00000000000000000000/OpenLayers.METERS_PER_INCH,"GermanMeter":1.0000135965/OpenLayers.METERS_PER_INCH,"CaGrid":0.999738/OpenLayers.METERS_PER_INCH,"ClarkeChain":20.1166194976/OpenLayers.METERS_PER_INCH,"GunterChain":20.11684023368047/OpenLayers.METERS_PER_INCH,"BenoitChain":20.116782494375872/OpenLayers.METERS_PER_INCH,"SearsChain":20.11676512155/OpenLayers.METERS_PER_INCH,"ClarkeLink":0.201166194976/OpenLayers.METERS_PER_INCH,"GunterLink":0.2011684023368047/OpenLayers.METERS_PER_INCH,"BenoitLink":0.20116782494375872/OpenLayers.METERS_PER_INCH,"SearsLink":0.2011676512155/OpenLayers.METERS_PER_INCH,"Rod":5.02921005842012/OpenLayers.METERS_PER_INCH,"IntnlChain":20.1168/OpenLayers.METERS_PER_INCH,"IntnlLink":0.201168/OpenLayers.METERS_PER_INCH,"Perch":5.02921005842012/OpenLayers.METERS_PER_INCH,"Pole":5.02921005842012/OpenLayers.METERS_PER_INCH,"Furlong":201.1684023368046/OpenLayers.METERS_PER_INCH,"Rood":3.778266898/OpenLayers.METERS_PER_INCH,"CapeFoot":0.3047972615/OpenLayers.METERS_PER_INCH,"Brealey":375.00000000000000000000/OpenLayers.METERS_PER_INCH,"ModAmFt":0.304812252984505969011938/OpenLayers.METERS_PER_INCH,"Fathom":1.8288/OpenLayers.METERS_PER_INCH,"NautM-UK":1853.184/OpenLayers.METERS_PER_INCH,"50kilometers":50000.0/OpenLayers.METERS_PER_INCH,"150kilometers":150000.0/OpenLayers.METERS_PER_INCH});OpenLayers.Util.extend(OpenLayers.INCHES_PER_UNIT,{"mm":OpenLayers.INCHES_PER_UNIT["Meter"]/1000.0,"cm":OpenLayers.INCHES_PER_UNIT["Meter"]/100.0,"dm":OpenLayers.INCHES_PER_UNIT["Meter"]*100.0,"km":OpenLayers.INCHES_PER_UNIT["Meter"]*1000.0,"kmi":OpenLayers.INCHES_PER_UNIT["nmi"],"fath":OpenLayers.INCHES_PER_UNIT["Fathom"],"ch":OpenLayers.INCHES_PER_UNIT["IntnlChain"],"link":OpenLayers.INCHES_PER_UNIT["IntnlLink"],"us-in":OpenLayers.INCHES_PER_UNIT["inches"],"us-ft":OpenLayers.INCHES_PER_UNIT["Foot"],"us-yd":OpenLayers.INCHES_PER_UNIT["Yard"],"us-ch":OpenLayers.INCHES_PER_UNIT["GunterChain"],"us-mi":OpenLayers.INCHES_PER_UNIT["Mile"],"ind-yd":OpenLayers.INCHES_PER_UNIT["IndianYd37"],"ind-ft":OpenLayers.INCHES_PER_UNIT["IndianFt37"],"ind-ch":20.11669506/OpenLayers.METERS_PER_INCH});OpenLayers.DOTS_PER_INCH=72;OpenLayers.Util.normalizeScale=function(scale){var normScale=(scale>1.0)?(1.0/scale):scale;return normScale;};OpenLayers.Util.getResolutionFromScale=function(scale,units){var resolution;if(scale){if(units==null){units="degrees";}
var normScale=OpenLayers.Util.normalizeScale(scale);resolution=1/(normScale*OpenLayers.INCHES_PER_UNIT[units]*OpenLayers.DOTS_PER_INCH);}
return resolution;};OpenLayers.Util.getScaleFromResolution=function(resolution,units){if(units==null){units="degrees";}
var scale=resolution*OpenLayers.INCHES_PER_UNIT[units]*OpenLayers.DOTS_PER_INCH;return scale;};OpenLayers.Util.safeStopPropagation=function(evt){OpenLayers.Event.stop(evt,true);};OpenLayers.Util.pagePosition=function(forElement){var pos=[0,0];var viewportElement=OpenLayers.Util.getViewportElement();if(!forElement||forElement==window||forElement==viewportElement){return pos;}
var BUGGY_GECKO_BOX_OBJECT=OpenLayers.IS_GECKO&&document.getBoxObjectFor&&OpenLayers.Element.getStyle(forElement,'position')=='absolute'&&(forElement.style.top==''||forElement.style.left=='');var parent=null;var box;if(forElement.getBoundingClientRect){box=forElement.getBoundingClientRect();var scrollTop=viewportElement.scrollTop;var scrollLeft=viewportElement.scrollLeft;pos[0]=box.left+scrollLeft;pos[1]=box.top+scrollTop;}else if(document.getBoxObjectFor&&!BUGGY_GECKO_BOX_OBJECT){box=document.getBoxObjectFor(forElement);var vpBox=document.getBoxObjectFor(viewportElement);pos[0]=box.screenX-vpBox.screenX;pos[1]=box.screenY-vpBox.screenY;}else{pos[0]=forElement.offsetLeft;pos[1]=forElement.offsetTop;parent=forElement.offsetParent;if(parent!=forElement){while(parent){pos[0]+=parent.offsetLeft;pos[1]+=parent.offsetTop;parent=parent.offsetParent;}}
var browser=OpenLayers.BROWSER_NAME;if(browser=="opera"||(browser=="safari"&&OpenLayers.Element.getStyle(forElement,'position')=='absolute')){pos[1]-=document.body.offsetTop;}
parent=forElement.offsetParent;while(parent&&parent!=document.body){pos[0]-=parent.scrollLeft;if(browser!="opera"||parent.tagName!='TR'){pos[1]-=parent.scrollTop;}
parent=parent.offsetParent;}}
return pos;};OpenLayers.Util.getViewportElement=function(){var viewportElement=arguments.callee.viewportElement;if(viewportElement==undefined){viewportElement=(OpenLayers.BROWSER_NAME=="msie"&&document.compatMode!='CSS1Compat')?document.body:document.documentElement;arguments.callee.viewportElement=viewportElement;}
return viewportElement;};OpenLayers.Util.isEquivalentUrl=function(url1,url2,options){options=options||{};OpenLayers.Util.applyDefaults(options,{ignoreCase:true,ignorePort80:true,ignoreHash:true});var urlObj1=OpenLayers.Util.createUrlObject(url1,options);var urlObj2=OpenLayers.Util.createUrlObject(url2,options);for(var key in urlObj1){if(key!=="args"){if(urlObj1[key]!=urlObj2[key]){return false;}}}
for(var key in urlObj1.args){if(urlObj1.args[key]!=urlObj2.args[key]){return false;}
delete urlObj2.args[key];}
for(var key in urlObj2.args){return false;}
return true;};OpenLayers.Util.createUrlObject=function(url,options){options=options||{};if(!(/^\w+:\/\//).test(url)){var loc=window.location;var port=loc.port?":"+loc.port:"";var fullUrl=loc.protocol+"//"+loc.host.split(":").shift()+port;if(url.indexOf("/")===0){url=fullUrl+url;}else{var parts=loc.pathname.split("/");parts.pop();url=fullUrl+parts.join("/")+"/"+url;}}
if(options.ignoreCase){url=url.toLowerCase();}
var a=document.createElement('a');a.href=url;var urlObject={};urlObject.host=a.host.split(":").shift();urlObject.protocol=a.protocol;if(options.ignorePort80){urlObject.port=(a.port=="80"||a.port=="0")?"":a.port;}else{urlObject.port=(a.port==""||a.port=="0")?"80":a.port;}
urlObject.hash=(options.ignoreHash||a.hash==="#")?"":a.hash;var queryString=a.search;if(!queryString){var qMark=url.indexOf("?");queryString=(qMark!=-1)?url.substr(qMark):"";}
urlObject.args=OpenLayers.Util.getParameters(queryString);urlObject.pathname=(a.pathname.charAt(0)=="/")?a.pathname:"/"+a.pathname;return urlObject;};OpenLayers.Util.removeTail=function(url){var head=null;var qMark=url.indexOf("?");var hashMark=url.indexOf("#");if(qMark==-1){head=(hashMark!=-1)?url.substr(0,hashMark):url;}else{head=(hashMark!=-1)?url.substr(0,Math.min(qMark,hashMark)):url.substr(0,qMark);}
return head;};OpenLayers.IS_GECKO=(function(){return navigator.userAgent.toLowerCase().indexOf("gecko")!=-1;})();OpenLayers.BROWSER_NAME=(function(){var name="";var ua=navigator.userAgent.toLowerCase();if(ua.indexOf("opera")!=-1){name="opera";}else if(ua.indexOf("msie")!=-1){name="msie";}else if(ua.indexOf("safari")!=-1){name="safari";}else if(ua.indexOf("mozilla")!=-1){if(ua.indexOf("firefox")!=-1){name="firefox";}else{name="mozilla";}}
return name;})();OpenLayers.Util.getBrowserName=function(){return OpenLayers.BROWSER_NAME;};OpenLayers.Util.getRenderedDimensions=function(contentHTML,size,options){var w,h;var container=document.createElement("div");container.style.visibility="hidden";var containerElement=(options&&options.containerElement)?options.containerElement:document.body;if(size){if(size.w){w=size.w;container.style.width=w+"px";}else if(size.h){h=size.h;container.style.height=h+"px";}}
if(options&&options.displayClass){container.className=options.displayClass;}
var content=document.createElement("div");content.innerHTML=contentHTML;content.style.overflow="visible";if(content.childNodes){for(var i=0,l=content.childNodes.length;i<l;i++){if(!content.childNodes[i].style)continue;content.childNodes[i].style.overflow="visible";}}
container.appendChild(content);containerElement.appendChild(container);var parentHasPositionAbsolute=false;var parent=container.parentNode;while(parent&&parent.tagName.toLowerCase()!="body"){var parentPosition=OpenLayers.Element.getStyle(parent,"position");if(parentPosition=="absolute"){parentHasPositionAbsolute=true;break;}else if(parentPosition&&parentPosition!="static"){break;}
parent=parent.parentNode;}
if(!parentHasPositionAbsolute){container.style.position="absolute";}
if(!w){w=parseInt(content.scrollWidth);container.style.width=w+"px";}
if(!h){h=parseInt(content.scrollHeight);}
container.removeChild(content);containerElement.removeChild(container);return new OpenLayers.Size(w,h);};OpenLayers.Util.getScrollbarWidth=function(){var scrollbarWidth=OpenLayers.Util._scrollbarWidth;if(scrollbarWidth==null){var scr=null;var inn=null;var wNoScroll=0;var wScroll=0;scr=document.createElement('div');scr.style.position='absolute';scr.style.top='-1000px';scr.style.left='-1000px';scr.style.width='100px';scr.style.height='50px';scr.style.overflow='hidden';inn=document.createElement('div');inn.style.width='100%';inn.style.height='200px';scr.appendChild(inn);document.body.appendChild(scr);wNoScroll=inn.offsetWidth;scr.style.overflow='scroll';wScroll=inn.offsetWidth;document.body.removeChild(document.body.lastChild);OpenLayers.Util._scrollbarWidth=(wNoScroll-wScroll);scrollbarWidth=OpenLayers.Util._scrollbarWidth;}
return scrollbarWidth;};OpenLayers.Util.getFormattedLonLat=function(coordinate,axis,dmsOption){if(!dmsOption){dmsOption='dms';}
var abscoordinate=Math.abs(coordinate)
var coordinatedegrees=Math.floor(abscoordinate);var coordinateminutes=(abscoordinate-coordinatedegrees)/(1/60);var tempcoordinateminutes=coordinateminutes;coordinateminutes=Math.floor(coordinateminutes);var coordinateseconds=(tempcoordinateminutes-coordinateminutes)/(1/60);coordinateseconds=Math.round(coordinateseconds*10);coordinateseconds/=10;if(coordinatedegrees<10){coordinatedegrees="0"+coordinatedegrees;}
var str=coordinatedegrees+"\u00B0";if(dmsOption.indexOf('dm')>=0){if(coordinateminutes<10){coordinateminutes="0"+coordinateminutes;}
str+=coordinateminutes+"'";if(dmsOption.indexOf('dms')>=0){if(coordinateseconds<10){coordinateseconds="0"+coordinateseconds;}
str+=coordinateseconds+'"';}}
if(axis=="lon"){str+=coordinate<0?OpenLayers.i18n("W"):OpenLayers.i18n("E");}else{str+=coordinate<0?OpenLayers.i18n("S"):OpenLayers.i18n("N");}
return str;};OpenLayers.Rico=new Object();OpenLayers.Rico.Corner={round:function(e,options){e=OpenLayers.Util.getElement(e);this._setOptions(options);var color=this.options.color;if(this.options.color=="fromElement"){color=this._background(e);}
var bgColor=this.options.bgColor;if(this.options.bgColor=="fromParent"){bgColor=this._background(e.offsetParent);}
this._roundCornersImpl(e,color,bgColor);},changeColor:function(theDiv,newColor){theDiv.style.backgroundColor=newColor;var spanElements=theDiv.parentNode.getElementsByTagName("span");for(var currIdx=0;currIdx<spanElements.length;currIdx++){spanElements[currIdx].style.backgroundColor=newColor;}},changeOpacity:function(theDiv,newOpacity){var mozillaOpacity=newOpacity;var ieOpacity='alpha(opacity='+newOpacity*100+')';theDiv.style.opacity=mozillaOpacity;theDiv.style.filter=ieOpacity;var spanElements=theDiv.parentNode.getElementsByTagName("span");for(var currIdx=0;currIdx<spanElements.length;currIdx++){spanElements[currIdx].style.opacity=mozillaOpacity;spanElements[currIdx].style.filter=ieOpacity;}},reRound:function(theDiv,options){var topRico=theDiv.parentNode.childNodes[0];var bottomRico=theDiv.parentNode.childNodes[2];theDiv.parentNode.removeChild(topRico);theDiv.parentNode.removeChild(bottomRico);this.round(theDiv.parentNode,options);},_roundCornersImpl:function(e,color,bgColor){if(this.options.border){this._renderBorder(e,bgColor);}
if(this._isTopRounded()){this._roundTopCorners(e,color,bgColor);}
if(this._isBottomRounded()){this._roundBottomCorners(e,color,bgColor);}},_renderBorder:function(el,bgColor){var borderValue="1px solid "+this._borderColor(bgColor);var borderL="border-left: "+borderValue;var borderR="border-right: "+borderValue;var style="style='"+borderL+";"+borderR+"'";el.innerHTML="<div "+style+">"+el.innerHTML+"</div>";},_roundTopCorners:function(el,color,bgColor){var corner=this._createCorner(bgColor);for(var i=0;i<this.options.numSlices;i++){corner.appendChild(this._createCornerSlice(color,bgColor,i,"top"));}
el.style.paddingTop=0;el.insertBefore(corner,el.firstChild);},_roundBottomCorners:function(el,color,bgColor){var corner=this._createCorner(bgColor);for(var i=(this.options.numSlices-1);i>=0;i--){corner.appendChild(this._createCornerSlice(color,bgColor,i,"bottom"));}
el.style.paddingBottom=0;el.appendChild(corner);},_createCorner:function(bgColor){var corner=document.createElement("div");corner.style.backgroundColor=(this._isTransparent()?"transparent":bgColor);return corner;},_createCornerSlice:function(color,bgColor,n,position){var slice=document.createElement("span");var inStyle=slice.style;inStyle.backgroundColor=color;inStyle.display="block";inStyle.height="1px";inStyle.overflow="hidden";inStyle.fontSize="1px";var borderColor=this._borderColor(color,bgColor);if(this.options.border&&n==0){inStyle.borderTopStyle="solid";inStyle.borderTopWidth="1px";inStyle.borderLeftWidth="0px";inStyle.borderRightWidth="0px";inStyle.borderBottomWidth="0px";inStyle.height="0px";inStyle.borderColor=borderColor;}
else if(borderColor){inStyle.borderColor=borderColor;inStyle.borderStyle="solid";inStyle.borderWidth="0px 1px";}
if(!this.options.compact&&(n==(this.options.numSlices-1))){inStyle.height="2px";}
this._setMargin(slice,n,position);this._setBorder(slice,n,position);return slice;},_setOptions:function(options){this.options={corners:"all",color:"fromElement",bgColor:"fromParent",blend:true,border:false,compact:false};OpenLayers.Util.extend(this.options,options||{});this.options.numSlices=this.options.compact?2:4;if(this._isTransparent()){this.options.blend=false;}},_whichSideTop:function(){if(this._hasString(this.options.corners,"all","top")){return"";}
if(this.options.corners.indexOf("tl")>=0&&this.options.corners.indexOf("tr")>=0){return"";}
if(this.options.corners.indexOf("tl")>=0){return"left";}else if(this.options.corners.indexOf("tr")>=0){return"right";}
return"";},_whichSideBottom:function(){if(this._hasString(this.options.corners,"all","bottom")){return"";}
if(this.options.corners.indexOf("bl")>=0&&this.options.corners.indexOf("br")>=0){return"";}
if(this.options.corners.indexOf("bl")>=0){return"left";}else if(this.options.corners.indexOf("br")>=0){return"right";}
return"";},_borderColor:function(color,bgColor){if(color=="transparent"){return bgColor;}else if(this.options.border){return this.options.border;}else if(this.options.blend){return this._blend(bgColor,color);}else{return"";}},_setMargin:function(el,n,corners){var marginSize=this._marginSize(n);var whichSide=corners=="top"?this._whichSideTop():this._whichSideBottom();if(whichSide=="left"){el.style.marginLeft=marginSize+"px";el.style.marginRight="0px";}
else if(whichSide=="right"){el.style.marginRight=marginSize+"px";el.style.marginLeft="0px";}
else{el.style.marginLeft=marginSize+"px";el.style.marginRight=marginSize+"px";}},_setBorder:function(el,n,corners){var borderSize=this._borderSize(n);var whichSide=corners=="top"?this._whichSideTop():this._whichSideBottom();if(whichSide=="left"){el.style.borderLeftWidth=borderSize+"px";el.style.borderRightWidth="0px";}
else if(whichSide=="right"){el.style.borderRightWidth=borderSize+"px";el.style.borderLeftWidth="0px";}
else{el.style.borderLeftWidth=borderSize+"px";el.style.borderRightWidth=borderSize+"px";}
if(this.options.border!=false){el.style.borderLeftWidth=borderSize+"px";el.style.borderRightWidth=borderSize+"px";}},_marginSize:function(n){if(this._isTransparent()){return 0;}
var marginSizes=[5,3,2,1];var blendedMarginSizes=[3,2,1,0];var compactMarginSizes=[2,1];var smBlendedMarginSizes=[1,0];if(this.options.compact&&this.options.blend){return smBlendedMarginSizes[n];}else if(this.options.compact){return compactMarginSizes[n];}else if(this.options.blend){return blendedMarginSizes[n];}else{return marginSizes[n];}},_borderSize:function(n){var transparentBorderSizes=[5,3,2,1];var blendedBorderSizes=[2,1,1,1];var compactBorderSizes=[1,0];var actualBorderSizes=[0,2,0,0];if(this.options.compact&&(this.options.blend||this._isTransparent())){return 1;}else if(this.options.compact){return compactBorderSizes[n];}else if(this.options.blend){return blendedBorderSizes[n];}else if(this.options.border){return actualBorderSizes[n];}else if(this._isTransparent()){return transparentBorderSizes[n];}
return 0;},_hasString:function(str){for(var i=1;i<arguments.length;i++)if(str.indexOf(arguments[i])>=0){return true;}return false;},_blend:function(c1,c2){var cc1=OpenLayers.Rico.Color.createFromHex(c1);cc1.blend(OpenLayers.Rico.Color.createFromHex(c2));return cc1;},_background:function(el){try{return OpenLayers.Rico.Color.createColorFromBackground(el).asHex();}catch(err){return"#ffffff";}},_isTransparent:function(){return this.options.color=="transparent";},_isTopRounded:function(){return this._hasString(this.options.corners,"all","top","tl","tr");},_isBottomRounded:function(){return this._hasString(this.options.corners,"all","bottom","bl","br");},_hasSingleTextChild:function(el){return el.childNodes.length==1&&el.childNodes[0].nodeType==3;}};OpenLayers.Element={visible:function(element){return OpenLayers.Util.getElement(element).style.display!='none';},toggle:function(){for(var i=0,len=arguments.length;i<len;i++){var element=OpenLayers.Util.getElement(arguments[i]);var display=OpenLayers.Element.visible(element)?'hide':'show';OpenLayers.Element[display](element);}},hide:function(){for(var i=0,len=arguments.length;i<len;i++){var element=OpenLayers.Util.getElement(arguments[i]);if(element){element.style.display='none';}}},show:function(){for(var i=0,len=arguments.length;i<len;i++){var element=OpenLayers.Util.getElement(arguments[i]);if(element){element.style.display='';}}},remove:function(element){element=OpenLayers.Util.getElement(element);element.parentNode.removeChild(element);},getHeight:function(element){element=OpenLayers.Util.getElement(element);return element.offsetHeight;},getDimensions:function(element){element=OpenLayers.Util.getElement(element);if(OpenLayers.Element.getStyle(element,'display')!='none'){return{width:element.offsetWidth,height:element.offsetHeight};}
var els=element.style;var originalVisibility=els.visibility;var originalPosition=els.position;var originalDisplay=els.display;els.visibility='hidden';els.position='absolute';els.display='';var originalWidth=element.clientWidth;var originalHeight=element.clientHeight;els.display=originalDisplay;els.position=originalPosition;els.visibility=originalVisibility;return{width:originalWidth,height:originalHeight};},hasClass:function(element,name){var names=element.className;return(!!names&&new RegExp("(^|\\s)"+name+"(\\s|$)").test(names));},addClass:function(element,name){if(!OpenLayers.Element.hasClass(element,name)){element.className+=(element.className?" ":"")+name;}
return element;},removeClass:function(element,name){var names=element.className;if(names){element.className=OpenLayers.String.trim(names.replace(new RegExp("(^|\\s+)"+name+"(\\s+|$)")," "));}
return element;},toggleClass:function(element,name){if(OpenLayers.Element.hasClass(element,name)){OpenLayers.Element.removeClass(element,name);}else{OpenLayers.Element.addClass(element,name);}
return element;},getStyle:function(element,style){element=OpenLayers.Util.getElement(element);var value=null;if(element&&element.style){value=element.style[OpenLayers.String.camelize(style)];if(!value){if(document.defaultView&&document.defaultView.getComputedStyle){var css=document.defaultView.getComputedStyle(element,null);value=css?css.getPropertyValue(style):null;}else if(element.currentStyle){value=element.currentStyle[OpenLayers.String.camelize(style)];}}
var positions=['left','top','right','bottom'];if(window.opera&&(OpenLayers.Util.indexOf(positions,style)!=-1)&&(OpenLayers.Element.getStyle(element,'position')=='static')){value='auto';}}
return value=='auto'?null:value;}};OpenLayers.Size=OpenLayers.Class({w:0.0,h:0.0,initialize:function(w,h){this.w=parseFloat(w);this.h=parseFloat(h);},toString:function(){return("w="+this.w+",h="+this.h);},clone:function(){return new OpenLayers.Size(this.w,this.h);},equals:function(sz){var equals=false;if(sz!=null){equals=((this.w==sz.w&&this.h==sz.h)||(isNaN(this.w)&&isNaN(this.h)&&isNaN(sz.w)&&isNaN(sz.h)));}
return equals;},CLASS_NAME:"OpenLayers.Size"});OpenLayers.Console={log:function(){},debug:function(){},info:function(){},warn:function(){},error:function(){},userError:function(error){alert(error);},assert:function(){},dir:function(){},dirxml:function(){},trace:function(){},group:function(){},groupEnd:function(){},time:function(){},timeEnd:function(){},profile:function(){},profileEnd:function(){},count:function(){},CLASS_NAME:"OpenLayers.Console"};(function(){var scripts=document.getElementsByTagName("script");for(var i=0,len=scripts.length;i<len;++i){if(scripts[i].src.indexOf("firebug.js")!=-1){if(console){OpenLayers.Util.extend(OpenLayers.Console,console);break;}}}})();OpenLayers.Icon=OpenLayers.Class({url:null,size:null,offset:null,calculateOffset:null,imageDiv:null,px:null,initialize:function(url,size,offset,calculateOffset){this.url=url;this.size=(size)?size:new OpenLayers.Size(20,20);this.offset=offset?offset:new OpenLayers.Pixel(-(this.size.w/2),-(this.size.h/2));this.calculateOffset=calculateOffset;var id=OpenLayers.Util.createUniqueID("OL_Icon_");this.imageDiv=OpenLayers.Util.createAlphaImageDiv(id);},destroy:function(){this.erase();OpenLayers.Event.stopObservingElement(this.imageDiv.firstChild);this.imageDiv.innerHTML="";this.imageDiv=null;},clone:function(){return new OpenLayers.Icon(this.url,this.size,this.offset,this.calculateOffset);},setSize:function(size){if(size!=null){this.size=size;}
this.draw();},setUrl:function(url){if(url!=null){this.url=url;}
this.draw();},draw:function(px){OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,null,this.size,this.url,"absolute");this.moveTo(px);return this.imageDiv;},erase:function(){if(this.imageDiv!=null&&this.imageDiv.parentNode!=null){OpenLayers.Element.remove(this.imageDiv);}},setOpacity:function(opacity){OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,null,null,null,null,null,null,opacity);},moveTo:function(px){if(px!=null){this.px=px;}
if(this.imageDiv!=null){if(this.px==null){this.display(false);}else{if(this.calculateOffset){this.offset=this.calculateOffset(this.size);}
var offsetPx=this.px.offset(this.offset);OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,offsetPx);}}},display:function(display){this.imageDiv.style.display=(display)?"":"none";},isDrawn:function(){var isDrawn=(this.imageDiv&&this.imageDiv.parentNode&&(this.imageDiv.parentNode.nodeType!=11));return isDrawn;},CLASS_NAME:"OpenLayers.Icon"});OpenLayers.Popup=OpenLayers.Class({events:null,id:"",lonlat:null,div:null,contentSize:null,size:null,contentHTML:null,backgroundColor:"",opacity:"",border:"",contentDiv:null,groupDiv:null,closeDiv:null,autoSize:false,minSize:null,maxSize:null,displayClass:"olPopup",contentDisplayClass:"olPopupContent",padding:0,disableFirefoxOverflowHack:false,fixPadding:function(){if(typeof this.padding=="number"){this.padding=new OpenLayers.Bounds(this.padding,this.padding,this.padding,this.padding);}},panMapIfOutOfView:false,keepInMap:false,closeOnMove:false,map:null,initialize:function(id,lonlat,contentSize,contentHTML,closeBox,closeBoxCallback){if(id==null){id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");}
this.id=id;this.lonlat=lonlat;this.contentSize=(contentSize!=null)?contentSize:new OpenLayers.Size(OpenLayers.Popup.WIDTH,OpenLayers.Popup.HEIGHT);if(contentHTML!=null){this.contentHTML=contentHTML;}
this.backgroundColor=OpenLayers.Popup.COLOR;this.opacity=OpenLayers.Popup.OPACITY;this.border=OpenLayers.Popup.BORDER;this.div=OpenLayers.Util.createDiv(this.id,null,null,null,null,null,"hidden");this.div.className=this.displayClass;var groupDivId=this.id+"_GroupDiv";this.groupDiv=OpenLayers.Util.createDiv(groupDivId,null,null,null,"relative",null,"hidden");var id=this.div.id+"_contentDiv";this.contentDiv=OpenLayers.Util.createDiv(id,null,this.contentSize.clone(),null,"relative");this.contentDiv.className=this.contentDisplayClass;this.groupDiv.appendChild(this.contentDiv);this.div.appendChild(this.groupDiv);if(closeBox){this.addCloseBox(closeBoxCallback);}
this.registerEvents();},destroy:function(){this.id=null;this.lonlat=null;this.size=null;this.contentHTML=null;this.backgroundColor=null;this.opacity=null;this.border=null;if(this.closeOnMove&&this.map){this.map.events.unregister("movestart",this,this.hide);}
this.events.destroy();this.events=null;if(this.closeDiv){OpenLayers.Event.stopObservingElement(this.closeDiv);this.groupDiv.removeChild(this.closeDiv);}
this.closeDiv=null;this.div.removeChild(this.groupDiv);this.groupDiv=null;if(this.map!=null){this.map.removePopup(this);}
this.map=null;this.div=null;this.autoSize=null;this.minSize=null;this.maxSize=null;this.padding=null;this.panMapIfOutOfView=null;},draw:function(px){if(px==null){if((this.lonlat!=null)&&(this.map!=null)){px=this.map.getLayerPxFromLonLat(this.lonlat);}}
if(this.closeOnMove){this.map.events.register("movestart",this,this.hide);}
if(!this.disableFirefoxOverflowHack&&OpenLayers.BROWSER_NAME=='firefox'){this.map.events.register("movestart",this,function(){var style=document.defaultView.getComputedStyle(this.contentDiv,null);var currentOverflow=style.getPropertyValue("overflow");if(currentOverflow!="hidden"){this.contentDiv._oldOverflow=currentOverflow;this.contentDiv.style.overflow="hidden";}});this.map.events.register("moveend",this,function(){var oldOverflow=this.contentDiv._oldOverflow;if(oldOverflow){this.contentDiv.style.overflow=oldOverflow;this.contentDiv._oldOverflow=null;}});}
this.moveTo(px);if(!this.autoSize&&!this.size){this.setSize(this.contentSize);}
this.setBackgroundColor();this.setOpacity();this.setBorder();this.setContentHTML();if(this.panMapIfOutOfView){this.panIntoView();}
return this.div;},updatePosition:function(){if((this.lonlat)&&(this.map)){var px=this.map.getLayerPxFromLonLat(this.lonlat);if(px){this.moveTo(px);}}},moveTo:function(px){if((px!=null)&&(this.div!=null)){this.div.style.left=px.x+"px";this.div.style.top=px.y+"px";}},visible:function(){return OpenLayers.Element.visible(this.div);},toggle:function(){if(this.visible()){this.hide();}else{this.show();}},show:function(){OpenLayers.Element.show(this.div);if(this.panMapIfOutOfView){this.panIntoView();}},hide:function(){OpenLayers.Element.hide(this.div);},setSize:function(contentSize){this.size=contentSize.clone();var contentDivPadding=this.getContentDivPadding();var wPadding=contentDivPadding.left+contentDivPadding.right;var hPadding=contentDivPadding.top+contentDivPadding.bottom;this.fixPadding();wPadding+=this.padding.left+this.padding.right;hPadding+=this.padding.top+this.padding.bottom;if(this.closeDiv){var closeDivWidth=parseInt(this.closeDiv.style.width);wPadding+=closeDivWidth+contentDivPadding.right;}
this.size.w+=wPadding;this.size.h+=hPadding;if(OpenLayers.BROWSER_NAME=="msie"){this.contentSize.w+=contentDivPadding.left+contentDivPadding.right;this.contentSize.h+=contentDivPadding.bottom+contentDivPadding.top;}
if(this.div!=null){this.div.style.width=this.size.w+"px";this.div.style.height=this.size.h+"px";}
if(this.contentDiv!=null){this.contentDiv.style.width=contentSize.w+"px";this.contentDiv.style.height=contentSize.h+"px";}},updateSize:function(){var preparedHTML="<div class='"+this.contentDisplayClass+"'>"+
this.contentDiv.innerHTML+"</div>";var containerElement=(this.map)?this.map.layerContainerDiv:document.body;var realSize=OpenLayers.Util.getRenderedDimensions(preparedHTML,null,{displayClass:this.displayClass,containerElement:containerElement});var safeSize=this.getSafeContentSize(realSize);var newSize=null;if(safeSize.equals(realSize)){newSize=realSize;}else{var fixedSize=new OpenLayers.Size();fixedSize.w=(safeSize.w<realSize.w)?safeSize.w:null;fixedSize.h=(safeSize.h<realSize.h)?safeSize.h:null;if(fixedSize.w&&fixedSize.h){newSize=safeSize;}else{var clippedSize=OpenLayers.Util.getRenderedDimensions(preparedHTML,fixedSize,{displayClass:this.contentDisplayClass,containerElement:containerElement});var currentOverflow=OpenLayers.Element.getStyle(this.contentDiv,"overflow");if((currentOverflow!="hidden")&&(clippedSize.equals(safeSize))){var scrollBar=OpenLayers.Util.getScrollbarWidth();if(fixedSize.w){clippedSize.h+=scrollBar;}else{clippedSize.w+=scrollBar;}}
newSize=this.getSafeContentSize(clippedSize);}}
this.setSize(newSize);},setBackgroundColor:function(color){if(color!=undefined){this.backgroundColor=color;}
if(this.div!=null){this.div.style.backgroundColor=this.backgroundColor;}},setOpacity:function(opacity){if(opacity!=undefined){this.opacity=opacity;}
if(this.div!=null){this.div.style.opacity=this.opacity;this.div.style.filter='alpha(opacity='+this.opacity*100+')';}},setBorder:function(border){if(border!=undefined){this.border=border;}
if(this.div!=null){this.div.style.border=this.border;}},setContentHTML:function(contentHTML){if(contentHTML!=null){this.contentHTML=contentHTML;}
if((this.contentDiv!=null)&&(this.contentHTML!=null)&&(this.contentHTML!=this.contentDiv.innerHTML)){this.contentDiv.innerHTML=this.contentHTML;if(this.autoSize){this.registerImageListeners();this.updateSize();}}},registerImageListeners:function(){var onImgLoad=function(){this.popup.updateSize();if(this.popup.visible()&&this.popup.panMapIfOutOfView){this.popup.panIntoView();}
OpenLayers.Event.stopObserving(this.img,"load",this.img._onImageLoad);};var images=this.contentDiv.getElementsByTagName("img");for(var i=0,len=images.length;i<len;i++){var img=images[i];if(img.width==0||img.height==0){var context={'popup':this,'img':img};img._onImgLoad=OpenLayers.Function.bind(onImgLoad,context);OpenLayers.Event.observe(img,'load',img._onImgLoad);}}},getSafeContentSize:function(size){var safeContentSize=size.clone();var contentDivPadding=this.getContentDivPadding();var wPadding=contentDivPadding.left+contentDivPadding.right;var hPadding=contentDivPadding.top+contentDivPadding.bottom;this.fixPadding();wPadding+=this.padding.left+this.padding.right;hPadding+=this.padding.top+this.padding.bottom;if(this.closeDiv){var closeDivWidth=parseInt(this.closeDiv.style.width);wPadding+=closeDivWidth+contentDivPadding.right;}
if(this.minSize){safeContentSize.w=Math.max(safeContentSize.w,(this.minSize.w-wPadding));safeContentSize.h=Math.max(safeContentSize.h,(this.minSize.h-hPadding));}
if(this.maxSize){safeContentSize.w=Math.min(safeContentSize.w,(this.maxSize.w-wPadding));safeContentSize.h=Math.min(safeContentSize.h,(this.maxSize.h-hPadding));}
if(this.map&&this.map.size){var extraX=0,extraY=0;if(this.keepInMap&&!this.panMapIfOutOfView){var px=this.map.getPixelFromLonLat(this.lonlat);switch(this.relativePosition){case"tr":extraX=px.x;extraY=this.map.size.h-px.y;break;case"tl":extraX=this.map.size.w-px.x;extraY=this.map.size.h-px.y;break;case"bl":extraX=this.map.size.w-px.x;extraY=px.y;break;case"br":extraX=px.x;extraY=px.y;break;default:extraX=px.x;extraY=this.map.size.h-px.y;break;}}
var maxY=this.map.size.h-
this.map.paddingForPopups.top-
this.map.paddingForPopups.bottom-
hPadding-extraY;var maxX=this.map.size.w-
this.map.paddingForPopups.left-
this.map.paddingForPopups.right-
wPadding-extraX;safeContentSize.w=Math.min(safeContentSize.w,maxX);safeContentSize.h=Math.min(safeContentSize.h,maxY);}
return safeContentSize;},getContentDivPadding:function(){var contentDivPadding=this._contentDivPadding;if(!contentDivPadding){if(this.div.parentNode==null){this.div.style.display="none";document.body.appendChild(this.div);}
contentDivPadding=new OpenLayers.Bounds(OpenLayers.Element.getStyle(this.contentDiv,"padding-left"),OpenLayers.Element.getStyle(this.contentDiv,"padding-bottom"),OpenLayers.Element.getStyle(this.contentDiv,"padding-right"),OpenLayers.Element.getStyle(this.contentDiv,"padding-top"));this._contentDivPadding=contentDivPadding;if(this.div.parentNode==document.body){document.body.removeChild(this.div);this.div.style.display="";}}
return contentDivPadding;},addCloseBox:function(callback){this.closeDiv=OpenLayers.Util.createDiv(this.id+"_close",null,new OpenLayers.Size(17,17));this.closeDiv.className="olPopupCloseBox";var contentDivPadding=this.getContentDivPadding();this.closeDiv.style.right=contentDivPadding.right+"px";this.closeDiv.style.top=contentDivPadding.top+"px";this.groupDiv.appendChild(this.closeDiv);var closePopup=callback||function(e){this.hide();OpenLayers.Event.stop(e);};OpenLayers.Event.observe(this.closeDiv,"click",OpenLayers.Function.bindAsEventListener(closePopup,this));},panIntoView:function(){var mapSize=this.map.getSize();var origTL=this.map.getViewPortPxFromLayerPx(new OpenLayers.Pixel(parseInt(this.div.style.left),parseInt(this.div.style.top)));var newTL=origTL.clone();if(origTL.x<this.map.paddingForPopups.left){newTL.x=this.map.paddingForPopups.left;}else
if((origTL.x+this.size.w)>(mapSize.w-this.map.paddingForPopups.right)){newTL.x=mapSize.w-this.map.paddingForPopups.right-this.size.w;}
if(origTL.y<this.map.paddingForPopups.top){newTL.y=this.map.paddingForPopups.top;}else
if((origTL.y+this.size.h)>(mapSize.h-this.map.paddingForPopups.bottom)){newTL.y=mapSize.h-this.map.paddingForPopups.bottom-this.size.h;}
var dx=origTL.x-newTL.x;var dy=origTL.y-newTL.y;this.map.pan(dx,dy);},registerEvents:function(){this.events=new OpenLayers.Events(this,this.div,null,true);this.events.on({"mousedown":this.onmousedown,"mousemove":this.onmousemove,"mouseup":this.onmouseup,"click":this.onclick,"mouseout":this.onmouseout,"dblclick":this.ondblclick,scope:this});},onmousedown:function(evt){this.mousedown=true;OpenLayers.Event.stop(evt,true);},onmousemove:function(evt){if(this.mousedown){OpenLayers.Event.stop(evt,true);}},onmouseup:function(evt){if(this.mousedown){this.mousedown=false;OpenLayers.Event.stop(evt,true);}},onclick:function(evt){OpenLayers.Event.stop(evt,true);},onmouseout:function(evt){this.mousedown=false;},ondblclick:function(evt){OpenLayers.Event.stop(evt,true);},CLASS_NAME:"OpenLayers.Popup"});OpenLayers.Popup.WIDTH=200;OpenLayers.Popup.HEIGHT=200;OpenLayers.Popup.COLOR="white";OpenLayers.Popup.OPACITY=1;OpenLayers.Popup.BORDER="0px";OpenLayers.Renderer=OpenLayers.Class({container:null,root:null,extent:null,locked:false,size:null,resolution:null,map:null,initialize:function(containerID,options){this.container=OpenLayers.Util.getElement(containerID);},destroy:function(){this.container=null;this.extent=null;this.size=null;this.resolution=null;this.map=null;},supported:function(){return false;},setExtent:function(extent,resolutionChanged){this.extent=extent.clone();if(resolutionChanged){this.resolution=null;}},setSize:function(size){this.size=size.clone();this.resolution=null;},getResolution:function(){this.resolution=this.resolution||this.map.getResolution();return this.resolution;},drawFeature:function(feature,style){if(style==null){style=feature.style;}
if(feature.geometry){var bounds=feature.geometry.getBounds();if(bounds){if(!bounds.intersectsBounds(this.extent)){style={display:"none"};}
var rendered=this.drawGeometry(feature.geometry,style,feature.id);if(style.display!="none"&&style.label&&rendered!==false){var location=feature.geometry.getCentroid();if(style.labelXOffset||style.labelYOffset){xOffset=isNaN(style.labelXOffset)?0:style.labelXOffset;yOffset=isNaN(style.labelYOffset)?0:style.labelYOffset;var res=this.getResolution();location.move(xOffset*res,yOffset*res);}
this.drawText(feature.id,style,location);}else{this.removeText(feature.id);}
return rendered;}}},drawGeometry:function(geometry,style,featureId){},drawText:function(featureId,style,location){},removeText:function(featureId){},clear:function(){},getFeatureIdFromEvent:function(evt){},eraseFeatures:function(features){if(!(features instanceof Array)){features=[features];}
for(var i=0,len=features.length;i<len;++i){var feature=features[i];this.eraseGeometry(feature.geometry,feature.id);this.removeText(feature.id);}},eraseGeometry:function(geometry,featureId){},moveRoot:function(renderer){},getRenderLayerId:function(){return this.container.id;},applyDefaultSymbolizer:function(symbolizer){var result=OpenLayers.Util.extend({},OpenLayers.Renderer.defaultSymbolizer);if(symbolizer.stroke===false){delete result.strokeWidth;delete result.strokeColor;}
if(symbolizer.fill===false){delete result.fillColor;}
OpenLayers.Util.extend(result,symbolizer);return result;},CLASS_NAME:"OpenLayers.Renderer"});OpenLayers.Renderer.defaultSymbolizer={fillColor:"#000000",strokeColor:"#000000",strokeWidth:2,fillOpacity:1,strokeOpacity:1,pointRadius:0};OpenLayers.Symbolizer=OpenLayers.Class({zIndex:0,initialize:function(config){OpenLayers.Util.extend(this,config);},clone:function(){var Type=eval(this.CLASS_NAME);return new Type(OpenLayers.Util.extend({},this));},CLASS_NAME:"OpenLayers.Symbolizer"});OpenLayers.Bounds=OpenLayers.Class({left:null,bottom:null,right:null,top:null,centerLonLat:null,initialize:function(left,bottom,right,top){if(left!=null){this.left=OpenLayers.Util.toFloat(left);}
if(bottom!=null){this.bottom=OpenLayers.Util.toFloat(bottom);}
if(right!=null){this.right=OpenLayers.Util.toFloat(right);}
if(top!=null){this.top=OpenLayers.Util.toFloat(top);}},clone:function(){return new OpenLayers.Bounds(this.left,this.bottom,this.right,this.top);},equals:function(bounds){var equals=false;if(bounds!=null){equals=((this.left==bounds.left)&&(this.right==bounds.right)&&(this.top==bounds.top)&&(this.bottom==bounds.bottom));}
return equals;},toString:function(){return("left-bottom=("+this.left+","+this.bottom+")"
+" right-top=("+this.right+","+this.top+")");},toArray:function(reverseAxisOrder){if(reverseAxisOrder===true){return[this.bottom,this.left,this.top,this.right];}else{return[this.left,this.bottom,this.right,this.top];}},toBBOX:function(decimal,reverseAxisOrder){if(decimal==null){decimal=6;}
var mult=Math.pow(10,decimal);var xmin=Math.round(this.left*mult)/mult;var ymin=Math.round(this.bottom*mult)/mult;var xmax=Math.round(this.right*mult)/mult;var ymax=Math.round(this.top*mult)/mult;if(reverseAxisOrder===true){return ymin+","+xmin+","+ymax+","+xmax;}else{return xmin+","+ymin+","+xmax+","+ymax;}},toGeometry:function(){return new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing([new OpenLayers.Geometry.Point(this.left,this.bottom),new OpenLayers.Geometry.Point(this.right,this.bottom),new OpenLayers.Geometry.Point(this.right,this.top),new OpenLayers.Geometry.Point(this.left,this.top)])]);},getWidth:function(){return(this.right-this.left);},getHeight:function(){return(this.top-this.bottom);},getSize:function(){return new OpenLayers.Size(this.getWidth(),this.getHeight());},getCenterPixel:function(){return new OpenLayers.Pixel((this.left+this.right)/2,(this.bottom+this.top)/2);},getCenterLonLat:function(){if(!this.centerLonLat){this.centerLonLat=new OpenLayers.LonLat((this.left+this.right)/2,(this.bottom+this.top)/2);}
return this.centerLonLat;},scale:function(ratio,origin){if(origin==null){origin=this.getCenterLonLat();}
var origx,origy;if(origin.CLASS_NAME=="OpenLayers.LonLat"){origx=origin.lon;origy=origin.lat;}else{origx=origin.x;origy=origin.y;}
var left=(this.left-origx)*ratio+origx;var bottom=(this.bottom-origy)*ratio+origy;var right=(this.right-origx)*ratio+origx;var top=(this.top-origy)*ratio+origy;return new OpenLayers.Bounds(left,bottom,right,top);},add:function(x,y){if((x==null)||(y==null)){var msg=OpenLayers.i18n("boundsAddError");OpenLayers.Console.error(msg);return null;}
return new OpenLayers.Bounds(this.left+x,this.bottom+y,this.right+x,this.top+y);},extend:function(object){var bounds=null;if(object){switch(object.CLASS_NAME){case"OpenLayers.LonLat":bounds=new OpenLayers.Bounds(object.lon,object.lat,object.lon,object.lat);break;case"OpenLayers.Geometry.Point":bounds=new OpenLayers.Bounds(object.x,object.y,object.x,object.y);break;case"OpenLayers.Bounds":bounds=object;break;}
if(bounds){this.centerLonLat=null;if((this.left==null)||(bounds.left<this.left)){this.left=bounds.left;}
if((this.bottom==null)||(bounds.bottom<this.bottom)){this.bottom=bounds.bottom;}
if((this.right==null)||(bounds.right>this.right)){this.right=bounds.right;}
if((this.top==null)||(bounds.top>this.top)){this.top=bounds.top;}}}},containsLonLat:function(ll,inclusive){return this.contains(ll.lon,ll.lat,inclusive);},containsPixel:function(px,inclusive){return this.contains(px.x,px.y,inclusive);},contains:function(x,y,inclusive){if(inclusive==null){inclusive=true;}
if(x==null||y==null){return false;}
x=OpenLayers.Util.toFloat(x);y=OpenLayers.Util.toFloat(y);var contains=false;if(inclusive){contains=((x>=this.left)&&(x<=this.right)&&(y>=this.bottom)&&(y<=this.top));}else{contains=((x>this.left)&&(x<this.right)&&(y>this.bottom)&&(y<this.top));}
return contains;},intersectsBounds:function(bounds,inclusive){if(inclusive==null){inclusive=true;}
var intersects=false;var mightTouch=(this.left==bounds.right||this.right==bounds.left||this.top==bounds.bottom||this.bottom==bounds.top);if(inclusive||!mightTouch){var inBottom=(((bounds.bottom>=this.bottom)&&(bounds.bottom<=this.top))||((this.bottom>=bounds.bottom)&&(this.bottom<=bounds.top)));var inTop=(((bounds.top>=this.bottom)&&(bounds.top<=this.top))||((this.top>bounds.bottom)&&(this.top<bounds.top)));var inLeft=(((bounds.left>=this.left)&&(bounds.left<=this.right))||((this.left>=bounds.left)&&(this.left<=bounds.right)));var inRight=(((bounds.right>=this.left)&&(bounds.right<=this.right))||((this.right>=bounds.left)&&(this.right<=bounds.right)));intersects=((inBottom||inTop)&&(inLeft||inRight));}
return intersects;},containsBounds:function(bounds,partial,inclusive){if(partial==null){partial=false;}
if(inclusive==null){inclusive=true;}
var bottomLeft=this.contains(bounds.left,bounds.bottom,inclusive);var bottomRight=this.contains(bounds.right,bounds.bottom,inclusive);var topLeft=this.contains(bounds.left,bounds.top,inclusive);var topRight=this.contains(bounds.right,bounds.top,inclusive);return(partial)?(bottomLeft||bottomRight||topLeft||topRight):(bottomLeft&&bottomRight&&topLeft&&topRight);},determineQuadrant:function(lonlat){var quadrant="";var center=this.getCenterLonLat();quadrant+=(lonlat.lat<center.lat)?"b":"t";quadrant+=(lonlat.lon<center.lon)?"l":"r";return quadrant;},transform:function(source,dest){this.centerLonLat=null;var ll=OpenLayers.Projection.transform({'x':this.left,'y':this.bottom},source,dest);var lr=OpenLayers.Projection.transform({'x':this.right,'y':this.bottom},source,dest);var ul=OpenLayers.Projection.transform({'x':this.left,'y':this.top},source,dest);var ur=OpenLayers.Projection.transform({'x':this.right,'y':this.top},source,dest);this.left=Math.min(ll.x,ul.x);this.bottom=Math.min(ll.y,lr.y);this.right=Math.max(lr.x,ur.x);this.top=Math.max(ul.y,ur.y);return this;},wrapDateLine:function(maxExtent,options){options=options||{};var leftTolerance=options.leftTolerance||0;var rightTolerance=options.rightTolerance||0;var newBounds=this.clone();if(maxExtent){while(newBounds.left<maxExtent.left&&(newBounds.right-rightTolerance)<=maxExtent.left){newBounds=newBounds.add(maxExtent.getWidth(),0);}
while((newBounds.left+leftTolerance)>=maxExtent.right&&newBounds.right>maxExtent.right){newBounds=newBounds.add(-maxExtent.getWidth(),0);}}
return newBounds;},CLASS_NAME:"OpenLayers.Bounds"});OpenLayers.Bounds.fromString=function(str){var bounds=str.split(",");return OpenLayers.Bounds.fromArray(bounds);};OpenLayers.Bounds.fromArray=function(bbox){return new OpenLayers.Bounds(parseFloat(bbox[0]),parseFloat(bbox[1]),parseFloat(bbox[2]),parseFloat(bbox[3]));};OpenLayers.Bounds.fromSize=function(size){return new OpenLayers.Bounds(0,size.h,size.w,0);};OpenLayers.Bounds.oppositeQuadrant=function(quadrant){var opp="";opp+=(quadrant.charAt(0)=='t')?'b':'t';opp+=(quadrant.charAt(1)=='l')?'r':'l';return opp;};OpenLayers.LonLat=OpenLayers.Class({lon:0.0,lat:0.0,initialize:function(lon,lat){this.lon=OpenLayers.Util.toFloat(lon);this.lat=OpenLayers.Util.toFloat(lat);},toString:function(){return("lon="+this.lon+",lat="+this.lat);},toShortString:function(){return(this.lon+", "+this.lat);},clone:function(){return new OpenLayers.LonLat(this.lon,this.lat);},add:function(lon,lat){if((lon==null)||(lat==null)){var msg=OpenLayers.i18n("lonlatAddError");OpenLayers.Console.error(msg);return null;}
return new OpenLayers.LonLat(this.lon+OpenLayers.Util.toFloat(lon),this.lat+OpenLayers.Util.toFloat(lat));},equals:function(ll){var equals=false;if(ll!=null){equals=((this.lon==ll.lon&&this.lat==ll.lat)||(isNaN(this.lon)&&isNaN(this.lat)&&isNaN(ll.lon)&&isNaN(ll.lat)));}
return equals;},transform:function(source,dest){var point=OpenLayers.Projection.transform({'x':this.lon,'y':this.lat},source,dest);this.lon=point.x;this.lat=point.y;return this;},wrapDateLine:function(maxExtent){var newLonLat=this.clone();if(maxExtent){while(newLonLat.lon<maxExtent.left){newLonLat.lon+=maxExtent.getWidth();}
while(newLonLat.lon>maxExtent.right){newLonLat.lon-=maxExtent.getWidth();}}
return newLonLat;},CLASS_NAME:"OpenLayers.LonLat"});OpenLayers.LonLat.fromString=function(str){var pair=str.split(",");return new OpenLayers.LonLat(pair[0],pair[1]);};OpenLayers.Pixel=OpenLayers.Class({x:0.0,y:0.0,initialize:function(x,y){this.x=parseFloat(x);this.y=parseFloat(y);},toString:function(){return("x="+this.x+",y="+this.y);},clone:function(){return new OpenLayers.Pixel(this.x,this.y);},equals:function(px){var equals=false;if(px!=null){equals=((this.x==px.x&&this.y==px.y)||(isNaN(this.x)&&isNaN(this.y)&&isNaN(px.x)&&isNaN(px.y)));}
return equals;},add:function(x,y){if((x==null)||(y==null)){var msg=OpenLayers.i18n("pixelAddError");OpenLayers.Console.error(msg);return null;}
return new OpenLayers.Pixel(this.x+x,this.y+y);},offset:function(px){var newPx=this.clone();if(px){newPx=this.add(px.x,px.y);}
return newPx;},CLASS_NAME:"OpenLayers.Pixel"});OpenLayers.Control=OpenLayers.Class({id:null,map:null,div:null,type:null,allowSelection:false,displayClass:"",title:"",autoActivate:false,active:null,handler:null,eventListeners:null,events:null,EVENT_TYPES:["activate","deactivate"],initialize:function(options){this.displayClass=this.CLASS_NAME.replace("OpenLayers.","ol").replace(/\./g,"");OpenLayers.Util.extend(this,options);this.events=new OpenLayers.Events(this,null,this.EVENT_TYPES);if(this.eventListeners instanceof Object){this.events.on(this.eventListeners);}
if(this.id==null){this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");}},destroy:function(){if(this.events){if(this.eventListeners){this.events.un(this.eventListeners);}
this.events.destroy();this.events=null;}
this.eventListeners=null;if(this.handler){this.handler.destroy();this.handler=null;}
if(this.handlers){for(var key in this.handlers){if(this.handlers.hasOwnProperty(key)&&typeof this.handlers[key].destroy=="function"){this.handlers[key].destroy();}}
this.handlers=null;}
if(this.map){this.map.removeControl(this);this.map=null;}},setMap:function(map){this.map=map;if(this.handler){this.handler.setMap(map);}},draw:function(px){if(this.div==null){this.div=OpenLayers.Util.createDiv(this.id);this.div.className=this.displayClass;if(!this.allowSelection){this.div.className+=" olControlNoSelect";this.div.setAttribute("unselectable","on",0);this.div.onselectstart=OpenLayers.Function.False;}
if(this.title!=""){this.div.title=this.title;}}
if(px!=null){this.position=px.clone();}
this.moveTo(this.position);return this.div;},moveTo:function(px){if((px!=null)&&(this.div!=null)){this.div.style.left=px.x+"px";this.div.style.top=px.y+"px";}},activate:function(){if(this.active){return false;}
if(this.handler){this.handler.activate();}
this.active=true;if(this.map){OpenLayers.Element.addClass(this.map.viewPortDiv,this.displayClass.replace(/ /g,"")+"Active");}
this.events.triggerEvent("activate");return true;},deactivate:function(){if(this.active){if(this.handler){this.handler.deactivate();}
this.active=false;if(this.map){OpenLayers.Element.removeClass(this.map.viewPortDiv,this.displayClass.replace(/ /g,"")+"Active");}
this.events.triggerEvent("deactivate");return true;}
return false;},CLASS_NAME:"OpenLayers.Control"});OpenLayers.Control.TYPE_BUTTON=1;OpenLayers.Control.TYPE_TOGGLE=2;OpenLayers.Control.TYPE_TOOL=3;OpenLayers.Lang={code:null,defaultCode:"en",getCode:function(){if(!OpenLayers.Lang.code){OpenLayers.Lang.setCode();}
return OpenLayers.Lang.code;},setCode:function(code){var lang;if(!code){code=(OpenLayers.BROWSER_NAME=="msie")?navigator.userLanguage:navigator.language;}
var parts=code.split('-');parts[0]=parts[0].toLowerCase();if(typeof OpenLayers.Lang[parts[0]]=="object"){lang=parts[0];}
if(parts[1]){var testLang=parts[0]+'-'+parts[1].toUpperCase();if(typeof OpenLayers.Lang[testLang]=="object"){lang=testLang;}}
if(!lang){OpenLayers.Console.warn('Failed to find OpenLayers.Lang.'+parts.join("-")+' dictionary, falling back to default language');lang=OpenLayers.Lang.defaultCode;}
OpenLayers.Lang.code=lang;},translate:function(key,context){var dictionary=OpenLayers.Lang[OpenLayers.Lang.getCode()];var message=dictionary[key];if(!message){message=key;}
if(context){message=OpenLayers.String.format(message,context);}
return message;}};OpenLayers.i18n=OpenLayers.Lang.translate;OpenLayers.Popup.Anchored=OpenLayers.Class(OpenLayers.Popup,{relativePosition:null,keepInMap:true,anchor:null,initialize:function(id,lonlat,contentSize,contentHTML,anchor,closeBox,closeBoxCallback){var newArguments=[id,lonlat,contentSize,contentHTML,closeBox,closeBoxCallback];OpenLayers.Popup.prototype.initialize.apply(this,newArguments);this.anchor=(anchor!=null)?anchor:{size:new OpenLayers.Size(0,0),offset:new OpenLayers.Pixel(0,0)};},destroy:function(){this.anchor=null;this.relativePosition=null;OpenLayers.Popup.prototype.destroy.apply(this,arguments);},show:function(){this.updatePosition();OpenLayers.Popup.prototype.show.apply(this,arguments);},moveTo:function(px){var oldRelativePosition=this.relativePosition;this.relativePosition=this.calculateRelativePosition(px);var newPx=this.calculateNewPx(px);var newArguments=new Array(newPx);OpenLayers.Popup.prototype.moveTo.apply(this,newArguments);if(this.relativePosition!=oldRelativePosition){this.updateRelativePosition();}},setSize:function(contentSize){OpenLayers.Popup.prototype.setSize.apply(this,arguments);if((this.lonlat)&&(this.map)){var px=this.map.getLayerPxFromLonLat(this.lonlat);this.moveTo(px);}},calculateRelativePosition:function(px){var lonlat=this.map.getLonLatFromLayerPx(px);var extent=this.map.getExtent();var quadrant=extent.determineQuadrant(lonlat);return OpenLayers.Bounds.oppositeQuadrant(quadrant);},updateRelativePosition:function(){},calculateNewPx:function(px){var newPx=px.offset(this.anchor.offset);var size=this.size||this.contentSize;var top=(this.relativePosition.charAt(0)=='t');newPx.y+=(top)?-(size.h+this.anchor.size.h):this.anchor.size.h;var left=(this.relativePosition.charAt(1)=='l');newPx.x+=(left)?-(size.w+this.anchor.size.w):this.anchor.size.w;return newPx;},CLASS_NAME:"OpenLayers.Popup.Anchored"});OpenLayers.Renderer.Canvas=OpenLayers.Class(OpenLayers.Renderer,{canvas:null,features:null,initialize:function(containerID){OpenLayers.Renderer.prototype.initialize.apply(this,arguments);this.root=document.createElement("canvas");this.container.appendChild(this.root);this.canvas=this.root.getContext("2d");this.features={};},eraseGeometry:function(geometry,featureId){this.eraseFeatures(this.features[featureId][0]);},supported:function(){var canvas=document.createElement("canvas");return!!canvas.getContext;},setSize:function(size){this.size=size.clone();this.root.style.width=size.w+"px";this.root.style.height=size.h+"px";this.root.width=size.w;this.root.height=size.h;this.resolution=null;},drawFeature:function(feature,style){style=style||feature.style;style=this.applyDefaultSymbolizer(style);this.features[feature.id]=[feature,style];this.redraw();},drawGeometry:function(geometry,style){var className=geometry.CLASS_NAME;if((className=="OpenLayers.Geometry.Collection")||(className=="OpenLayers.Geometry.MultiPoint")||(className=="OpenLayers.Geometry.MultiLineString")||(className=="OpenLayers.Geometry.MultiPolygon")){for(var i=0;i<geometry.components.length;i++){this.drawGeometry(geometry.components[i],style);}
return;}
switch(geometry.CLASS_NAME){case"OpenLayers.Geometry.Point":this.drawPoint(geometry,style);break;case"OpenLayers.Geometry.LineString":this.drawLineString(geometry,style);break;case"OpenLayers.Geometry.LinearRing":this.drawLinearRing(geometry,style);break;case"OpenLayers.Geometry.Polygon":this.drawPolygon(geometry,style);break;default:break;}},drawExternalGraphic:function(pt,style){var img=new Image();if(style.graphicTitle){img.title=style.graphicTitle;}
var width=style.graphicWidth||style.graphicHeight;var height=style.graphicHeight||style.graphicWidth;width=width?width:style.pointRadius*2;height=height?height:style.pointRadius*2;var xOffset=(style.graphicXOffset!=undefined)?style.graphicXOffset:-(0.5*width);var yOffset=(style.graphicYOffset!=undefined)?style.graphicYOffset:-(0.5*height);var context={img:img,x:(pt[0]+xOffset),y:(pt[1]+yOffset),width:width,height:height,opacity:style.graphicOpacity||style.fillOpacity,canvas:this.canvas};img.onload=OpenLayers.Function.bind(function(){this.canvas.globalAlpha=this.opacity;this.canvas.drawImage(this.img,this.x,this.y,this.width,this.height);},context);img.src=style.externalGraphic;},setCanvasStyle:function(type,style){if(type=="fill"){this.canvas.globalAlpha=style['fillOpacity'];this.canvas.fillStyle=style['fillColor'];}else if(type=="stroke"){this.canvas.globalAlpha=style['strokeOpacity'];this.canvas.strokeStyle=style['strokeColor'];this.canvas.lineWidth=style['strokeWidth'];}else{this.canvas.globalAlpha=0;this.canvas.lineWidth=1;}},drawPoint:function(geometry,style){if(style.graphic!==false){var pt=this.getLocalXY(geometry);if(style.externalGraphic){this.drawExternalGraphic(pt,style);}else{if(style.fill!==false){this.setCanvasStyle("fill",style);this.canvas.beginPath();this.canvas.arc(pt[0],pt[1],style.pointRadius,0,Math.PI*2,true);this.canvas.fill();}
if(style.stroke!==false){this.setCanvasStyle("stroke",style);this.canvas.beginPath();this.canvas.arc(pt[0],pt[1],style.pointRadius,0,Math.PI*2,true);this.canvas.stroke();this.setCanvasStyle("reset");}}}},drawLineString:function(geometry,style){if(style.stroke!==false){this.setCanvasStyle("stroke",style);this.canvas.beginPath();var start=this.getLocalXY(geometry.components[0]);this.canvas.moveTo(start[0],start[1]);for(var i=1;i<geometry.components.length;i++){var pt=this.getLocalXY(geometry.components[i]);this.canvas.lineTo(pt[0],pt[1]);}
this.canvas.stroke();}
this.setCanvasStyle("reset");},drawLinearRing:function(geometry,style){if(style.fill!==false){this.setCanvasStyle("fill",style);this.canvas.beginPath();var start=this.getLocalXY(geometry.components[0]);this.canvas.moveTo(start[0],start[1]);for(var i=1;i<geometry.components.length-1;i++){var pt=this.getLocalXY(geometry.components[i]);this.canvas.lineTo(pt[0],pt[1]);}
this.canvas.fill();}
if(style.stroke!==false){this.setCanvasStyle("stroke",style);this.canvas.beginPath();var start=this.getLocalXY(geometry.components[0]);this.canvas.moveTo(start[0],start[1]);for(var i=1;i<geometry.components.length;i++){var pt=this.getLocalXY(geometry.components[i]);this.canvas.lineTo(pt[0],pt[1]);}
this.canvas.stroke();}
this.setCanvasStyle("reset");},drawPolygon:function(geometry,style){this.drawLinearRing(geometry.components[0],style);for(var i=1;i<geometry.components.length;i++){this.drawLinearRing(geometry.components[i],{fillOpacity:0,strokeWidth:0,strokeOpacity:0,strokeColor:'#000000',fillColor:'#000000'});}},drawText:function(location,style){style=OpenLayers.Util.extend({fontColor:"#000000",labelAlign:"cm"},style);var pt=this.getLocalXY(location);this.setCanvasStyle("reset");this.canvas.fillStyle=style.fontColor;this.canvas.globalAlpha=style.fontOpacity||1.0;var fontStyle=style.fontWeight+" "+style.fontSize+" "+style.fontFamily;if(this.canvas.fillText){var labelAlign=OpenLayers.Renderer.Canvas.LABEL_ALIGN[style.labelAlign[0]]||"center";this.canvas.font=fontStyle;this.canvas.textAlign=labelAlign;this.canvas.fillText(style.label,pt[0],pt[1]);}else if(this.canvas.mozDrawText){this.canvas.mozTextStyle=fontStyle;var len=this.canvas.mozMeasureText(style.label);switch(style.labelAlign[0]){case"l":break;case"r":pt[0]-=len;break;case"c":default:pt[0]-=len/2;}
this.canvas.translate(pt[0],pt[1]);this.canvas.mozDrawText(style.label);this.canvas.translate(-1*pt[0],-1*pt[1]);}
this.setCanvasStyle("reset");},getLocalXY:function(point){var resolution=this.getResolution();var extent=this.extent;var x=(point.x/resolution+(-extent.left/resolution));var y=((extent.top/resolution)-point.y/resolution);return[x,y];},clear:function(){this.canvas.clearRect(0,0,this.root.width,this.root.height);this.features={};},getFeatureIdFromEvent:function(evt){var loc=this.map.getLonLatFromPixel(evt.xy);var resolution=this.getResolution();var bounds=new OpenLayers.Bounds(loc.lon-resolution*5,loc.lat-resolution*5,loc.lon+resolution*5,loc.lat+resolution*5);var geom=bounds.toGeometry();for(var feat in this.features){if(!this.features.hasOwnProperty(feat)){continue;}
if(this.features[feat][0].geometry.intersects(geom)){return feat;}}
return null;},eraseFeatures:function(features){if(!(features instanceof Array)){features=[features];}
for(var i=0;i<features.length;++i){delete this.features[features[i].id];}
this.redraw();},redraw:function(){if(!this.locked){this.canvas.clearRect(0,0,this.root.width,this.root.height);var labelMap=[];var feature,style;for(var id in this.features){if(!this.features.hasOwnProperty(id)){continue;}
feature=this.features[id][0];style=this.features[id][1];if(!feature.geometry){continue;}
this.drawGeometry(feature.geometry,style);if(style.label){labelMap.push([feature,style]);}}
var item;for(var i=0,len=labelMap.length;i<len;++i){item=labelMap[i];this.drawText(item[0].geometry.getCentroid(),item[1]);}}},CLASS_NAME:"OpenLayers.Renderer.Canvas"});OpenLayers.Renderer.Canvas.LABEL_ALIGN={"l":"left","r":"right"};OpenLayers.ElementsIndexer=OpenLayers.Class({maxZIndex:null,order:null,indices:null,compare:null,initialize:function(yOrdering){this.compare=yOrdering?OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER_Y_ORDER:OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER_DRAWING_ORDER;this.order=[];this.indices={};this.maxZIndex=0;},insert:function(newNode){if(this.exists(newNode)){this.remove(newNode);}
var nodeId=newNode.id;this.determineZIndex(newNode);var leftIndex=-1;var rightIndex=this.order.length;var middle;while(rightIndex-leftIndex>1){middle=parseInt((leftIndex+rightIndex)/2);var placement=this.compare(this,newNode,OpenLayers.Util.getElement(this.order[middle]));if(placement>0){leftIndex=middle;}else{rightIndex=middle;}}
this.order.splice(rightIndex,0,nodeId);this.indices[nodeId]=this.getZIndex(newNode);return this.getNextElement(rightIndex);},remove:function(node){var nodeId=node.id;var arrayIndex=OpenLayers.Util.indexOf(this.order,nodeId);if(arrayIndex>=0){this.order.splice(arrayIndex,1);delete this.indices[nodeId];if(this.order.length>0){var lastId=this.order[this.order.length-1];this.maxZIndex=this.indices[lastId];}else{this.maxZIndex=0;}}},clear:function(){this.order=[];this.indices={};this.maxZIndex=0;},exists:function(node){return(this.indices[node.id]!=null);},getZIndex:function(node){return node._style.graphicZIndex;},determineZIndex:function(node){var zIndex=node._style.graphicZIndex;if(zIndex==null){zIndex=this.maxZIndex;node._style.graphicZIndex=zIndex;}else if(zIndex>this.maxZIndex){this.maxZIndex=zIndex;}},getNextElement:function(index){var nextIndex=index+1;if(nextIndex<this.order.length){var nextElement=OpenLayers.Util.getElement(this.order[nextIndex]);if(nextElement==undefined){nextElement=this.getNextElement(nextIndex);}
return nextElement;}else{return null;}},CLASS_NAME:"OpenLayers.ElementsIndexer"});OpenLayers.ElementsIndexer.IndexingMethods={Z_ORDER:function(indexer,newNode,nextNode){var newZIndex=indexer.getZIndex(newNode);var returnVal=0;if(nextNode){var nextZIndex=indexer.getZIndex(nextNode);returnVal=newZIndex-nextZIndex;}
return returnVal;},Z_ORDER_DRAWING_ORDER:function(indexer,newNode,nextNode){var returnVal=OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER(indexer,newNode,nextNode);if(nextNode&&returnVal==0){returnVal=1;}
return returnVal;},Z_ORDER_Y_ORDER:function(indexer,newNode,nextNode){var returnVal=OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER(indexer,newNode,nextNode);if(nextNode&&returnVal===0){var result=nextNode._boundsBottom-newNode._boundsBottom;returnVal=(result===0)?1:result;}
return returnVal;}};OpenLayers.Renderer.Elements=OpenLayers.Class(OpenLayers.Renderer,{rendererRoot:null,root:null,vectorRoot:null,textRoot:null,xmlns:null,indexer:null,BACKGROUND_ID_SUFFIX:"_background",LABEL_ID_SUFFIX:"_label",initialize:function(containerID,options){OpenLayers.Renderer.prototype.initialize.apply(this,arguments);this.rendererRoot=this.createRenderRoot();this.root=this.createRoot("_root");this.vectorRoot=this.createRoot("_vroot");this.textRoot=this.createRoot("_troot");this.root.appendChild(this.vectorRoot);this.root.appendChild(this.textRoot);this.rendererRoot.appendChild(this.root);this.container.appendChild(this.rendererRoot);if(options&&(options.zIndexing||options.yOrdering)){this.indexer=new OpenLayers.ElementsIndexer(options.yOrdering);}},destroy:function(){this.clear();this.rendererRoot=null;this.root=null;this.xmlns=null;OpenLayers.Renderer.prototype.destroy.apply(this,arguments);},clear:function(){var child;var root=this.vectorRoot;if(root){while(child=root.firstChild){root.removeChild(child);}}
root=this.textRoot;if(root){while(child=root.firstChild){root.removeChild(child);}}
if(this.indexer){this.indexer.clear();}},getNodeType:function(geometry,style){},drawGeometry:function(geometry,style,featureId){var className=geometry.CLASS_NAME;var rendered=true;if((className=="OpenLayers.Geometry.Collection")||(className=="OpenLayers.Geometry.MultiPoint")||(className=="OpenLayers.Geometry.MultiLineString")||(className=="OpenLayers.Geometry.MultiPolygon")){for(var i=0,len=geometry.components.length;i<len;i++){rendered=this.drawGeometry(geometry.components[i],style,featureId)&&rendered;}
return rendered;};rendered=false;var removeBackground=false;if(style.display!="none"){if(style.backgroundGraphic){this.redrawBackgroundNode(geometry.id,geometry,style,featureId);}else{removeBackground=true;}
rendered=this.redrawNode(geometry.id,geometry,style,featureId);}
if(rendered==false){var node=document.getElementById(geometry.id);if(node){if(node._style.backgroundGraphic){removeBackground=true;}
node.parentNode.removeChild(node);}}
if(removeBackground){var node=document.getElementById(geometry.id+this.BACKGROUND_ID_SUFFIX);if(node){node.parentNode.removeChild(node);}}
return rendered;},redrawNode:function(id,geometry,style,featureId){style=this.applyDefaultSymbolizer(style);var node=this.nodeFactory(id,this.getNodeType(geometry,style));node._featureId=featureId;node._boundsBottom=geometry.getBounds().bottom;node._geometryClass=geometry.CLASS_NAME;node._style=style;var drawResult=this.drawGeometryNode(node,geometry,style);if(drawResult===false){return false;}
node=drawResult.node;if(this.indexer){var insert=this.indexer.insert(node);if(insert){this.vectorRoot.insertBefore(node,insert);}else{this.vectorRoot.appendChild(node);}}else{if(node.parentNode!==this.vectorRoot){this.vectorRoot.appendChild(node);}}
this.postDraw(node);return drawResult.complete;},redrawBackgroundNode:function(id,geometry,style,featureId){var backgroundStyle=OpenLayers.Util.extend({},style);backgroundStyle.externalGraphic=backgroundStyle.backgroundGraphic;backgroundStyle.graphicXOffset=backgroundStyle.backgroundXOffset;backgroundStyle.graphicYOffset=backgroundStyle.backgroundYOffset;backgroundStyle.graphicZIndex=backgroundStyle.backgroundGraphicZIndex;backgroundStyle.graphicWidth=backgroundStyle.backgroundWidth||backgroundStyle.graphicWidth;backgroundStyle.graphicHeight=backgroundStyle.backgroundHeight||backgroundStyle.graphicHeight;backgroundStyle.backgroundGraphic=null;backgroundStyle.backgroundXOffset=null;backgroundStyle.backgroundYOffset=null;backgroundStyle.backgroundGraphicZIndex=null;return this.redrawNode(id+this.BACKGROUND_ID_SUFFIX,geometry,backgroundStyle,null);},drawGeometryNode:function(node,geometry,style){style=style||node._style;var options={'isFilled':style.fill===undefined?true:style.fill,'isStroked':style.stroke===undefined?!!style.strokeWidth:style.stroke};var drawn;switch(geometry.CLASS_NAME){case"OpenLayers.Geometry.Point":if(style.graphic===false){options.isFilled=false;options.isStroked=false;}
drawn=this.drawPoint(node,geometry);break;case"OpenLayers.Geometry.LineString":options.isFilled=false;drawn=this.drawLineString(node,geometry);break;case"OpenLayers.Geometry.LinearRing":drawn=this.drawLinearRing(node,geometry);break;case"OpenLayers.Geometry.Polygon":drawn=this.drawPolygon(node,geometry);break;case"OpenLayers.Geometry.Surface":drawn=this.drawSurface(node,geometry);break;case"OpenLayers.Geometry.Rectangle":drawn=this.drawRectangle(node,geometry);break;default:break;}
node._options=options;if(drawn!=false){return{node:this.setStyle(node,style,options,geometry),complete:drawn};}else{return false;}},postDraw:function(node){},drawPoint:function(node,geometry){},drawLineString:function(node,geometry){},drawLinearRing:function(node,geometry){},drawPolygon:function(node,geometry){},drawRectangle:function(node,geometry){},drawCircle:function(node,geometry){},drawSurface:function(node,geometry){},removeText:function(featureId){var label=document.getElementById(featureId+this.LABEL_ID_SUFFIX);if(label){this.textRoot.removeChild(label);}},getFeatureIdFromEvent:function(evt){var target=evt.target;var useElement=target&&target.correspondingUseElement;var node=useElement?useElement:(target||evt.srcElement);var featureId=node._featureId;return featureId;},eraseGeometry:function(geometry,featureId){if((geometry.CLASS_NAME=="OpenLayers.Geometry.MultiPoint")||(geometry.CLASS_NAME=="OpenLayers.Geometry.MultiLineString")||(geometry.CLASS_NAME=="OpenLayers.Geometry.MultiPolygon")||(geometry.CLASS_NAME=="OpenLayers.Geometry.Collection")){for(var i=0,len=geometry.components.length;i<len;i++){this.eraseGeometry(geometry.components[i],featureId);}}else{var element=OpenLayers.Util.getElement(geometry.id);if(element&&element.parentNode){if(element.geometry){element.geometry.destroy();element.geometry=null;}
element.parentNode.removeChild(element);if(this.indexer){this.indexer.remove(element);}
if(element._style.backgroundGraphic){var backgroundId=geometry.id+this.BACKGROUND_ID_SUFFIX;var bElem=OpenLayers.Util.getElement(backgroundId);if(bElem&&bElem.parentNode){bElem.parentNode.removeChild(bElem);}}}}},nodeFactory:function(id,type){var node=OpenLayers.Util.getElement(id);if(node){if(!this.nodeTypeCompare(node,type)){node.parentNode.removeChild(node);node=this.nodeFactory(id,type);}}else{node=this.createNode(type,id);}
return node;},nodeTypeCompare:function(node,type){},createNode:function(type,id){},moveRoot:function(renderer){var root=this.root;if(renderer.root.parentNode==this.rendererRoot){root=renderer.root;}
root.parentNode.removeChild(root);renderer.rendererRoot.appendChild(root);},getRenderLayerId:function(){return this.root.parentNode.parentNode.id;},isComplexSymbol:function(graphicName){return(graphicName!="circle")&&!!graphicName;},CLASS_NAME:"OpenLayers.Renderer.Elements"});OpenLayers.Renderer.symbol={"star":[350,75,379,161,469,161,397,215,423,301,350,250,277,301,303,215,231,161,321,161,350,75],"cross":[4,0,6,0,6,4,10,4,10,6,6,6,6,10,4,10,4,6,0,6,0,4,4,4,4,0],"x":[0,0,25,0,50,35,75,0,100,0,65,50,100,100,75,100,50,65,25,100,0,100,35,50,0,0],"square":[0,0,0,1,1,1,1,0,0,0],"triangle":[0,10,10,10,5,0,0,10]};OpenLayers.Symbolizer.Line=OpenLayers.Class(OpenLayers.Symbolizer,{initialize:function(config){OpenLayers.Symbolizer.prototype.initialize.apply(this,arguments);},CLASS_NAME:"OpenLayers.Symbolizer.Line"});OpenLayers.Symbolizer.Point=OpenLayers.Class(OpenLayers.Symbolizer,{initialize:function(config){OpenLayers.Symbolizer.prototype.initialize.apply(this,arguments);},CLASS_NAME:"OpenLayers.Symbolizer.Point"});OpenLayers.Symbolizer.Polygon=OpenLayers.Class(OpenLayers.Symbolizer,{initialize:function(config){OpenLayers.Symbolizer.prototype.initialize.apply(this,arguments);},CLASS_NAME:"OpenLayers.Symbolizer.Polygon"});OpenLayers.Symbolizer.Raster=OpenLayers.Class(OpenLayers.Symbolizer,{initialize:function(config){OpenLayers.Symbolizer.prototype.initialize.apply(this,arguments);},CLASS_NAME:"OpenLayers.Symbolizer.Raster"});OpenLayers.Symbolizer.Text=OpenLayers.Class(OpenLayers.Symbolizer,{initialize:function(config){OpenLayers.Symbolizer.prototype.initialize.apply(this,arguments);},CLASS_NAME:"OpenLayers.Symbolizer.Text"});OpenLayers.Tween=OpenLayers.Class({INTERVAL:10,easing:null,begin:null,finish:null,duration:null,callbacks:null,time:null,interval:null,playing:false,initialize:function(easing){this.easing=(easing)?easing:OpenLayers.Easing.Expo.easeOut;},start:function(begin,finish,duration,options){this.playing=true;this.begin=begin;this.finish=finish;this.duration=duration;this.callbacks=options.callbacks;this.time=0;if(this.interval){window.clearInterval(this.interval);this.interval=null;}
if(this.callbacks&&this.callbacks.start){this.callbacks.start.call(this,this.begin);}
this.interval=window.setInterval(OpenLayers.Function.bind(this.play,this),this.INTERVAL);},stop:function(){if(!this.playing){return;}
if(this.callbacks&&this.callbacks.done){this.callbacks.done.call(this,this.finish);}
window.clearInterval(this.interval);this.interval=null;this.playing=false;},play:function(){var value={};for(var i in this.begin){var b=this.begin[i];var f=this.finish[i];if(b==null||f==null||isNaN(b)||isNaN(f)){OpenLayers.Console.error('invalid value for Tween');}
var c=f-b;value[i]=this.easing.apply(this,[this.time,b,c,this.duration]);}
this.time++;if(this.callbacks&&this.callbacks.eachStep){this.callbacks.eachStep.call(this,value);}
if(this.time>this.duration){this.stop();}},CLASS_NAME:"OpenLayers.Tween"});OpenLayers.Easing={CLASS_NAME:"OpenLayers.Easing"};OpenLayers.Easing.Linear={easeIn:function(t,b,c,d){return c*t/d+b;},easeOut:function(t,b,c,d){return c*t/d+b;},easeInOut:function(t,b,c,d){return c*t/d+b;},CLASS_NAME:"OpenLayers.Easing.Linear"};OpenLayers.Easing.Expo={easeIn:function(t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOut:function(t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOut:function(t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},CLASS_NAME:"OpenLayers.Easing.Expo"};OpenLayers.Easing.Quad={easeIn:function(t,b,c,d){return c*(t/=d)*t+b;},easeOut:function(t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOut:function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},CLASS_NAME:"OpenLayers.Easing.Quad"};OpenLayers.Control.ArgParser=OpenLayers.Class(OpenLayers.Control,{center:null,zoom:null,layers:null,displayProjection:null,initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,arguments);},setMap:function(map){OpenLayers.Control.prototype.setMap.apply(this,arguments);for(var i=0,len=this.map.controls.length;i<len;i++){var control=this.map.controls[i];if((control!=this)&&(control.CLASS_NAME=="OpenLayers.Control.ArgParser")){if(control.displayProjection!=this.displayProjection){this.displayProjection=control.displayProjection;}
break;}}
if(i==this.map.controls.length){var args=OpenLayers.Util.getParameters();if(args.layers){this.layers=args.layers;this.map.events.register('addlayer',this,this.configureLayers);this.configureLayers();}
if(args.lat&&args.lon){this.center=new OpenLayers.LonLat(parseFloat(args.lon),parseFloat(args.lat));if(args.zoom){this.zoom=parseInt(args.zoom);}
this.map.events.register('changebaselayer',this,this.setCenter);this.setCenter();}}},setCenter:function(){if(this.map.baseLayer){this.map.events.unregister('changebaselayer',this,this.setCenter);if(this.displayProjection){this.center.transform(this.displayProjection,this.map.getProjectionObject());}
this.map.setCenter(this.center,this.zoom);}},configureLayers:function(){if(this.layers.length==this.map.layers.length){this.map.events.unregister('addlayer',this,this.configureLayers);for(var i=0,len=this.layers.length;i<len;i++){var layer=this.map.layers[i];var c=this.layers.charAt(i);if(c=="B"){this.map.setBaseLayer(layer);}else if((c=="T")||(c=="F")){layer.setVisibility(c=="T");}}}},CLASS_NAME:"OpenLayers.Control.ArgParser"});OpenLayers.Control.Attribution=OpenLayers.Class(OpenLayers.Control,{separator:", ",initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,arguments);},destroy:function(){this.map.events.un({"removelayer":this.updateAttribution,"addlayer":this.updateAttribution,"changelayer":this.updateAttribution,"changebaselayer":this.updateAttribution,scope:this});OpenLayers.Control.prototype.destroy.apply(this,arguments);},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);this.map.events.on({'changebaselayer':this.updateAttribution,'changelayer':this.updateAttribution,'addlayer':this.updateAttribution,'removelayer':this.updateAttribution,scope:this});this.updateAttribution();return this.div;},updateAttribution:function(){var attributions=[];if(this.map&&this.map.layers){for(var i=0,len=this.map.layers.length;i<len;i++){var layer=this.map.layers[i];if(layer.attribution&&layer.getVisibility()){if(OpenLayers.Util.indexOf(attributions,layer.attribution)===-1){attributions.push(layer.attribution);}}}
this.div.innerHTML=attributions.join(this.separator);}},CLASS_NAME:"OpenLayers.Control.Attribution"});OpenLayers.Control.Button=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_BUTTON,trigger:function(){},CLASS_NAME:"OpenLayers.Control.Button"});OpenLayers.Control.LayerSwitcher=OpenLayers.Class(OpenLayers.Control,{roundedCorner:true,roundedCornerColor:"darkblue",layerStates:null,layersDiv:null,baseLayersDiv:null,baseLayers:null,dataLbl:null,dataLayersDiv:null,dataLayers:null,minimizeDiv:null,maximizeDiv:null,ascending:true,initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,arguments);this.layerStates=[];},destroy:function(){OpenLayers.Event.stopObservingElement(this.div);OpenLayers.Event.stopObservingElement(this.minimizeDiv);OpenLayers.Event.stopObservingElement(this.maximizeDiv);this.clearLayersArray("base");this.clearLayersArray("data");this.map.events.un({"addlayer":this.redraw,"changelayer":this.redraw,"removelayer":this.redraw,"changebaselayer":this.redraw,scope:this});OpenLayers.Control.prototype.destroy.apply(this,arguments);},setMap:function(map){OpenLayers.Control.prototype.setMap.apply(this,arguments);this.map.events.on({"addlayer":this.redraw,"changelayer":this.redraw,"removelayer":this.redraw,"changebaselayer":this.redraw,scope:this});},draw:function(){OpenLayers.Control.prototype.draw.apply(this);this.loadContents();if(!this.outsideViewport){this.minimizeControl();}
this.redraw();return this.div;},clearLayersArray:function(layersType){var layers=this[layersType+"Layers"];if(layers){for(var i=0,len=layers.length;i<len;i++){var layer=layers[i];OpenLayers.Event.stopObservingElement(layer.inputElem);OpenLayers.Event.stopObservingElement(layer.labelSpan);}}
this[layersType+"LayersDiv"].innerHTML="";this[layersType+"Layers"]=[];},checkRedraw:function(){var redraw=false;if(!this.layerStates.length||(this.map.layers.length!=this.layerStates.length)){redraw=true;}else{for(var i=0,len=this.layerStates.length;i<len;i++){var layerState=this.layerStates[i];var layer=this.map.layers[i];if((layerState.name!=layer.name)||(layerState.inRange!=layer.inRange)||(layerState.id!=layer.id)||(layerState.visibility!=layer.visibility)){redraw=true;break;}}}
return redraw;},redraw:function(){if(!this.checkRedraw()){return this.div;}
this.clearLayersArray("base");this.clearLayersArray("data");var containsOverlays=false;var containsBaseLayers=false;var len=this.map.layers.length;this.layerStates=new Array(len);for(var i=0;i<len;i++){var layer=this.map.layers[i];this.layerStates[i]={'name':layer.name,'visibility':layer.visibility,'inRange':layer.inRange,'id':layer.id};}
var layers=this.map.layers.slice();if(!this.ascending){layers.reverse();}
for(var i=0,len=layers.length;i<len;i++){var layer=layers[i];var baseLayer=layer.isBaseLayer;if(layer.displayInLayerSwitcher){if(baseLayer){containsBaseLayers=true;}else{containsOverlays=true;}
var checked=(baseLayer)?(layer==this.map.baseLayer):layer.getVisibility();var inputElem=document.createElement("input");inputElem.id=this.id+"_input_"+layer.name;inputElem.name=(baseLayer)?this.id+"_baseLayers":layer.name;inputElem.type=(baseLayer)?"radio":"checkbox";inputElem.value=layer.name;inputElem.checked=checked;inputElem.defaultChecked=checked;if(!baseLayer&&!layer.inRange){inputElem.disabled=true;}
var context={'inputElem':inputElem,'layer':layer,'layerSwitcher':this};OpenLayers.Event.observe(inputElem,"mouseup",OpenLayers.Function.bindAsEventListener(this.onInputClick,context));var labelSpan=document.createElement("span");OpenLayers.Element.addClass(labelSpan,"labelSpan")
if(!baseLayer&&!layer.inRange){labelSpan.style.color="gray";}
labelSpan.innerHTML=layer.name;labelSpan.style.verticalAlign=(baseLayer)?"bottom":"baseline";OpenLayers.Event.observe(labelSpan,"click",OpenLayers.Function.bindAsEventListener(this.onInputClick,context));var br=document.createElement("br");var groupArray=(baseLayer)?this.baseLayers:this.dataLayers;groupArray.push({'layer':layer,'inputElem':inputElem,'labelSpan':labelSpan});var groupDiv=(baseLayer)?this.baseLayersDiv:this.dataLayersDiv;groupDiv.appendChild(inputElem);groupDiv.appendChild(labelSpan);groupDiv.appendChild(br);}}
this.dataLbl.style.display=(containsOverlays)?"":"none";this.baseLbl.style.display=(containsBaseLayers)?"":"none";return this.div;},onInputClick:function(e){if(!this.inputElem.disabled){if(this.inputElem.type=="radio"){this.inputElem.checked=true;this.layer.map.setBaseLayer(this.layer);}else{this.inputElem.checked=!this.inputElem.checked;this.layerSwitcher.updateMap();}}
OpenLayers.Event.stop(e);},onLayerClick:function(e){this.updateMap();},updateMap:function(){for(var i=0,len=this.baseLayers.length;i<len;i++){var layerEntry=this.baseLayers[i];if(layerEntry.inputElem.checked){this.map.setBaseLayer(layerEntry.layer,false);}}
for(var i=0,len=this.dataLayers.length;i<len;i++){var layerEntry=this.dataLayers[i];layerEntry.layer.setVisibility(layerEntry.inputElem.checked);}},maximizeControl:function(e){this.div.style.width="";this.div.style.height="";this.showControls(false);if(e!=null){OpenLayers.Event.stop(e);}},minimizeControl:function(e){this.div.style.width="0px";this.div.style.height="0px";this.showControls(true);if(e!=null){OpenLayers.Event.stop(e);}},showControls:function(minimize){this.maximizeDiv.style.display=minimize?"":"none";this.minimizeDiv.style.display=minimize?"none":"";this.layersDiv.style.display=minimize?"none":"";},loadContents:function(){OpenLayers.Event.observe(this.div,"mouseup",OpenLayers.Function.bindAsEventListener(this.mouseUp,this));OpenLayers.Event.observe(this.div,"click",this.ignoreEvent);OpenLayers.Event.observe(this.div,"mousedown",OpenLayers.Function.bindAsEventListener(this.mouseDown,this));OpenLayers.Event.observe(this.div,"dblclick",this.ignoreEvent);this.layersDiv=document.createElement("div");this.layersDiv.id=this.id+"_layersDiv";OpenLayers.Element.addClass(this.layersDiv,"layersDiv");this.baseLbl=document.createElement("div");this.baseLbl.innerHTML=OpenLayers.i18n("baseLayer");OpenLayers.Element.addClass(this.baseLbl,"baseLbl");this.baseLayersDiv=document.createElement("div");OpenLayers.Element.addClass(this.baseLayersDiv,"baseLayersDiv");this.dataLbl=document.createElement("div");this.dataLbl.innerHTML=OpenLayers.i18n("overlays");OpenLayers.Element.addClass(this.dataLbl,"dataLbl");this.dataLayersDiv=document.createElement("div");OpenLayers.Element.addClass(this.dataLayersDiv,"dataLayersDiv");if(this.ascending){this.layersDiv.appendChild(this.baseLbl);this.layersDiv.appendChild(this.baseLayersDiv);this.layersDiv.appendChild(this.dataLbl);this.layersDiv.appendChild(this.dataLayersDiv);}else{this.layersDiv.appendChild(this.dataLbl);this.layersDiv.appendChild(this.dataLayersDiv);this.layersDiv.appendChild(this.baseLbl);this.layersDiv.appendChild(this.baseLayersDiv);}
this.div.appendChild(this.layersDiv);if(this.roundedCorner){OpenLayers.Rico.Corner.round(this.div,{corners:"tl bl",bgColor:"transparent",color:this.roundedCornerColor,blend:false});OpenLayers.Rico.Corner.changeOpacity(this.layersDiv,0.75);}
var imgLocation=OpenLayers.Util.getImagesLocation();var sz=new OpenLayers.Size(18,18);var img=imgLocation+'layer-switcher-maximize.png';this.maximizeDiv=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MaximizeDiv",null,sz,img,"absolute");OpenLayers.Element.addClass(this.maximizeDiv,"maximizeDiv");this.maximizeDiv.style.display="none";OpenLayers.Event.observe(this.maximizeDiv,"click",OpenLayers.Function.bindAsEventListener(this.maximizeControl,this));this.div.appendChild(this.maximizeDiv);var img=imgLocation+'layer-switcher-minimize.png';var sz=new OpenLayers.Size(18,18);this.minimizeDiv=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MinimizeDiv",null,sz,img,"absolute");OpenLayers.Element.addClass(this.minimizeDiv,"minimizeDiv");this.minimizeDiv.style.display="none";OpenLayers.Event.observe(this.minimizeDiv,"click",OpenLayers.Function.bindAsEventListener(this.minimizeControl,this));this.div.appendChild(this.minimizeDiv);},ignoreEvent:function(evt){OpenLayers.Event.stop(evt);},mouseDown:function(evt){this.isMouseDown=true;this.ignoreEvent(evt);},mouseUp:function(evt){if(this.isMouseDown){this.isMouseDown=false;this.ignoreEvent(evt);}},CLASS_NAME:"OpenLayers.Control.LayerSwitcher"});OpenLayers.Control.Pan=OpenLayers.Class(OpenLayers.Control,{slideFactor:50,direction:null,type:OpenLayers.Control.TYPE_BUTTON,initialize:function(direction,options){this.direction=direction;this.CLASS_NAME+=this.direction;OpenLayers.Control.prototype.initialize.apply(this,[options]);},trigger:function(){switch(this.direction){case OpenLayers.Control.Pan.NORTH:this.map.pan(0,-this.slideFactor);break;case OpenLayers.Control.Pan.SOUTH:this.map.pan(0,this.slideFactor);break;case OpenLayers.Control.Pan.WEST:this.map.pan(-this.slideFactor,0);break;case OpenLayers.Control.Pan.EAST:this.map.pan(this.slideFactor,0);break;}},CLASS_NAME:"OpenLayers.Control.Pan"});OpenLayers.Control.Pan.NORTH="North";OpenLayers.Control.Pan.SOUTH="South";OpenLayers.Control.Pan.EAST="East";OpenLayers.Control.Pan.WEST="West";OpenLayers.Control.PanZoom=OpenLayers.Class(OpenLayers.Control,{slideFactor:50,slideRatio:null,buttons:null,position:null,initialize:function(options){this.position=new OpenLayers.Pixel(OpenLayers.Control.PanZoom.X,OpenLayers.Control.PanZoom.Y);OpenLayers.Control.prototype.initialize.apply(this,arguments);},destroy:function(){OpenLayers.Control.prototype.destroy.apply(this,arguments);this.removeButtons();this.buttons=null;this.position=null;},draw:function(px){OpenLayers.Control.prototype.draw.apply(this,arguments);px=this.position;this.buttons=[];var sz=new OpenLayers.Size(18,18);var centered=new OpenLayers.Pixel(px.x+sz.w/2,px.y);this._addButton("panup","north-mini.png",centered,sz);px.y=centered.y+sz.h;this._addButton("panleft","west-mini.png",px,sz);this._addButton("panright","east-mini.png",px.add(sz.w,0),sz);this._addButton("pandown","south-mini.png",centered.add(0,sz.h*2),sz);this._addButton("zoomin","zoom-plus-mini.png",centered.add(0,sz.h*3+5),sz);this._addButton("zoomworld","zoom-world-mini.png",centered.add(0,sz.h*4+5),sz);this._addButton("zoomout","zoom-minus-mini.png",centered.add(0,sz.h*5+5),sz);return this.div;},_addButton:function(id,img,xy,sz){var imgLocation=OpenLayers.Util.getImagesLocation()+img;var btn=OpenLayers.Util.createAlphaImageDiv(this.id+"_"+id,xy,sz,imgLocation,"absolute");this.div.appendChild(btn);OpenLayers.Event.observe(btn,"mousedown",OpenLayers.Function.bindAsEventListener(this.buttonDown,btn));OpenLayers.Event.observe(btn,"dblclick",OpenLayers.Function.bindAsEventListener(this.doubleClick,btn));OpenLayers.Event.observe(btn,"click",OpenLayers.Function.bindAsEventListener(this.doubleClick,btn));btn.action=id;btn.map=this.map;if(!this.slideRatio){var slideFactorPixels=this.slideFactor;var getSlideFactor=function(){return slideFactorPixels;};}else{var slideRatio=this.slideRatio;var getSlideFactor=function(dim){return this.map.getSize()[dim]*slideRatio;};}
btn.getSlideFactor=getSlideFactor;this.buttons.push(btn);return btn;},_removeButton:function(btn){OpenLayers.Event.stopObservingElement(btn);btn.map=null;btn.getSlideFactor=null;this.div.removeChild(btn);OpenLayers.Util.removeItem(this.buttons,btn);},removeButtons:function(){for(var i=this.buttons.length-1;i>=0;--i){this._removeButton(this.buttons[i]);}},doubleClick:function(evt){OpenLayers.Event.stop(evt);return false;},buttonDown:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
switch(this.action){case"panup":this.map.pan(0,-this.getSlideFactor("h"));break;case"pandown":this.map.pan(0,this.getSlideFactor("h"));break;case"panleft":this.map.pan(-this.getSlideFactor("w"),0);break;case"panright":this.map.pan(this.getSlideFactor("w"),0);break;case"zoomin":this.map.zoomIn();break;case"zoomout":this.map.zoomOut();break;case"zoomworld":this.map.zoomToMaxExtent();break;}
OpenLayers.Event.stop(evt);},CLASS_NAME:"OpenLayers.Control.PanZoom"});OpenLayers.Control.PanZoom.X=4;OpenLayers.Control.PanZoom.Y=4;OpenLayers.Control.Panel=OpenLayers.Class(OpenLayers.Control,{controls:null,autoActivate:true,defaultControl:null,saveState:false,activeState:null,initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,[options]);this.controls=[];this.activeState={};},destroy:function(){OpenLayers.Control.prototype.destroy.apply(this,arguments);for(var i=this.controls.length-1;i>=0;i--){if(this.controls[i].events){this.controls[i].events.un({"activate":this.redraw,"deactivate":this.redraw,scope:this});}
OpenLayers.Event.stopObservingElement(this.controls[i].panel_div);this.controls[i].panel_div=null;}
this.activeState=null;},activate:function(){if(OpenLayers.Control.prototype.activate.apply(this,arguments)){var control;for(var i=0,len=this.controls.length;i<len;i++){control=this.controls[i];if(control===this.defaultControl||(this.saveState&&this.activeState[control.id])){control.activate();}}
if(this.saveState===true){this.defaultControl=null;}
this.redraw();return true;}else{return false;}},deactivate:function(){if(OpenLayers.Control.prototype.deactivate.apply(this,arguments)){var control;for(var i=0,len=this.controls.length;i<len;i++){control=this.controls[i];this.activeState[control.id]=control.deactivate();}
this.redraw();return true;}else{return false;}},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);this.addControlsToMap(this.controls);return this.div;},redraw:function(){for(var l=this.div.childNodes.length,i=l-1;i>=0;i--){this.div.removeChild(this.div.childNodes[i]);}
this.div.innerHTML="";if(this.active){for(var i=0,len=this.controls.length;i<len;i++){var element=this.controls[i].panel_div;if(this.controls[i].active){element.className=this.controls[i].displayClass+"ItemActive";}else{element.className=this.controls[i].displayClass+"ItemInactive";}
this.div.appendChild(element);}}},activateControl:function(control){if(!this.active){return false;}
if(control.type==OpenLayers.Control.TYPE_BUTTON){control.trigger();this.redraw();return;}
if(control.type==OpenLayers.Control.TYPE_TOGGLE){if(control.active){control.deactivate();}else{control.activate();}
return;}
var c;for(var i=0,len=this.controls.length;i<len;i++){c=this.controls[i];if(c!=control&&(c.type===OpenLayers.Control.TYPE_TOOL||c.type==null)){c.deactivate();}}
control.activate();},addControls:function(controls){if(!(controls instanceof Array)){controls=[controls];}
this.controls=this.controls.concat(controls);for(var i=0,len=controls.length;i<len;i++){var element=document.createElement("div");controls[i].panel_div=element;if(controls[i].title!=""){controls[i].panel_div.title=controls[i].title;}
OpenLayers.Event.observe(controls[i].panel_div,"click",OpenLayers.Function.bind(this.onClick,this,controls[i]));OpenLayers.Event.observe(controls[i].panel_div,"dblclick",OpenLayers.Function.bind(this.onDoubleClick,this,controls[i]));OpenLayers.Event.observe(controls[i].panel_div,"mousedown",OpenLayers.Function.bindAsEventListener(OpenLayers.Event.stop));}
if(this.map){this.addControlsToMap(controls);this.redraw();}},addControlsToMap:function(controls){var control;for(var i=0,len=controls.length;i<len;i++){control=controls[i];if(control.autoActivate===true){control.autoActivate=false;this.map.addControl(control);control.autoActivate=true;}else{this.map.addControl(control);control.deactivate();}
control.events.on({"activate":this.redraw,"deactivate":this.redraw,scope:this});}},onClick:function(ctrl,evt){OpenLayers.Event.stop(evt?evt:window.event);this.activateControl(ctrl);},onDoubleClick:function(ctrl,evt){OpenLayers.Event.stop(evt?evt:window.event);},getControlsBy:function(property,match){var test=(typeof match.test=="function");var found=OpenLayers.Array.filter(this.controls,function(item){return item[property]==match||(test&&match.test(item[property]));});return found;},getControlsByName:function(match){return this.getControlsBy("name",match);},getControlsByClass:function(match){return this.getControlsBy("CLASS_NAME",match);},CLASS_NAME:"OpenLayers.Control.Panel"});OpenLayers.Control.ScaleLine=OpenLayers.Class(OpenLayers.Control,{maxWidth:100,topOutUnits:"km",topInUnits:"m",bottomOutUnits:"mi",bottomInUnits:"ft",eTop:null,eBottom:null,geodesic:false,initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,[options]);},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);if(!this.eTop){this.eTop=document.createElement("div");this.eTop.className=this.displayClass+"Top";var theLen=this.topInUnits.length;this.div.appendChild(this.eTop);if((this.topOutUnits=="")||(this.topInUnits=="")){this.eTop.style.visibility="hidden";}else{this.eTop.style.visibility="visible";}
this.eBottom=document.createElement("div");this.eBottom.className=this.displayClass+"Bottom";this.div.appendChild(this.eBottom);if((this.bottomOutUnits=="")||(this.bottomInUnits=="")){this.eBottom.style.visibility="hidden";}else{this.eBottom.style.visibility="visible";}}
this.map.events.register('moveend',this,this.update);this.update();return this.div;},getBarLen:function(maxLen){var digits=parseInt(Math.log(maxLen)/Math.log(10));var pow10=Math.pow(10,digits);var firstChar=parseInt(maxLen/pow10);var barLen;if(firstChar>5){barLen=5;}else if(firstChar>2){barLen=2;}else{barLen=1;}
return barLen*pow10;},update:function(){var res=this.map.getResolution();if(!res){return;}
var curMapUnits=this.map.getUnits();var inches=OpenLayers.INCHES_PER_UNIT;var maxSizeData=this.maxWidth*res*inches[curMapUnits];var geodesicRatio=1;if(this.geodesic===true){var maxSizeGeodesic=(this.map.getGeodesicPixelSize().w||0.000001)*this.maxWidth;var maxSizeKilometers=maxSizeData/inches["km"];geodesicRatio=maxSizeGeodesic/maxSizeKilometers;maxSizeData*=geodesicRatio;}
var topUnits;var bottomUnits;if(maxSizeData>100000){topUnits=this.topOutUnits;bottomUnits=this.bottomOutUnits;}else{topUnits=this.topInUnits;bottomUnits=this.bottomInUnits;}
var topMax=maxSizeData/inches[topUnits];var bottomMax=maxSizeData/inches[bottomUnits];var topRounded=this.getBarLen(topMax);var bottomRounded=this.getBarLen(bottomMax);topMax=topRounded/inches[curMapUnits]*inches[topUnits];bottomMax=bottomRounded/inches[curMapUnits]*inches[bottomUnits];var topPx=topMax/res/geodesicRatio;var bottomPx=bottomMax/res/geodesicRatio;if(this.eBottom.style.visibility=="visible"){this.eBottom.style.width=Math.round(bottomPx)+"px";this.eBottom.innerHTML=bottomRounded+" "+bottomUnits;}
if(this.eTop.style.visibility=="visible"){this.eTop.style.width=Math.round(topPx)+"px";this.eTop.innerHTML=topRounded+" "+topUnits;}},CLASS_NAME:"OpenLayers.Control.ScaleLine"});OpenLayers.Control.ZoomIn=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_BUTTON,trigger:function(){this.map.zoomIn();},CLASS_NAME:"OpenLayers.Control.ZoomIn"});OpenLayers.Control.ZoomOut=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_BUTTON,trigger:function(){this.map.zoomOut();},CLASS_NAME:"OpenLayers.Control.ZoomOut"});OpenLayers.Control.ZoomToMaxExtent=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_BUTTON,trigger:function(){if(this.map){this.map.zoomToMaxExtent();}},CLASS_NAME:"OpenLayers.Control.ZoomToMaxExtent"});OpenLayers.Event={observers:false,KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,element:function(event){return event.target||event.srcElement;},isLeftClick:function(event){return(((event.which)&&(event.which==1))||((event.button)&&(event.button==1)));},isRightClick:function(event){return(((event.which)&&(event.which==3))||((event.button)&&(event.button==2)));},stop:function(event,allowDefault){if(!allowDefault){if(event.preventDefault){event.preventDefault();}else{event.returnValue=false;}}
if(event.stopPropagation){event.stopPropagation();}else{event.cancelBubble=true;}},findElement:function(event,tagName){var element=OpenLayers.Event.element(event);while(element.parentNode&&(!element.tagName||(element.tagName.toUpperCase()!=tagName.toUpperCase()))){element=element.parentNode;}
return element;},observe:function(elementParam,name,observer,useCapture){var element=OpenLayers.Util.getElement(elementParam);useCapture=useCapture||false;if(name=='keypress'&&(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||element.attachEvent)){name='keydown';}
if(!this.observers){this.observers={};}
if(!element._eventCacheID){var idPrefix="eventCacheID_";if(element.id){idPrefix=element.id+"_"+idPrefix;}
element._eventCacheID=OpenLayers.Util.createUniqueID(idPrefix);}
var cacheID=element._eventCacheID;if(!this.observers[cacheID]){this.observers[cacheID]=[];}
this.observers[cacheID].push({'element':element,'name':name,'observer':observer,'useCapture':useCapture});if(element.addEventListener){element.addEventListener(name,observer,useCapture);}else if(element.attachEvent){element.attachEvent('on'+name,observer);}},stopObservingElement:function(elementParam){var element=OpenLayers.Util.getElement(elementParam);var cacheID=element._eventCacheID;this._removeElementObservers(OpenLayers.Event.observers[cacheID]);},_removeElementObservers:function(elementObservers){if(elementObservers){for(var i=elementObservers.length-1;i>=0;i--){var entry=elementObservers[i];var args=new Array(entry.element,entry.name,entry.observer,entry.useCapture);var removed=OpenLayers.Event.stopObserving.apply(this,args);}}},stopObserving:function(elementParam,name,observer,useCapture){useCapture=useCapture||false;var element=OpenLayers.Util.getElement(elementParam);var cacheID=element._eventCacheID;if(name=='keypress'){if(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||element.detachEvent){name='keydown';}}
var foundEntry=false;var elementObservers=OpenLayers.Event.observers[cacheID];if(elementObservers){var i=0;while(!foundEntry&&i<elementObservers.length){var cacheEntry=elementObservers[i];if((cacheEntry.name==name)&&(cacheEntry.observer==observer)&&(cacheEntry.useCapture==useCapture)){elementObservers.splice(i,1);if(elementObservers.length==0){delete OpenLayers.Event.observers[cacheID];}
foundEntry=true;break;}
i++;}}
if(foundEntry){if(element.removeEventListener){element.removeEventListener(name,observer,useCapture);}else if(element&&element.detachEvent){element.detachEvent('on'+name,observer);}}
return foundEntry;},unloadCache:function(){if(OpenLayers.Event&&OpenLayers.Event.observers){for(var cacheID in OpenLayers.Event.observers){var elementObservers=OpenLayers.Event.observers[cacheID];OpenLayers.Event._removeElementObservers.apply(this,[elementObservers]);}
OpenLayers.Event.observers=false;}},CLASS_NAME:"OpenLayers.Event"};OpenLayers.Event.observe(window,'unload',OpenLayers.Event.unloadCache,false);if(window.Event){OpenLayers.Util.applyDefaults(window.Event,OpenLayers.Event);}else{var Event=OpenLayers.Event;}
OpenLayers.Events=OpenLayers.Class({BROWSER_EVENTS:["mouseover","mouseout","mousedown","mouseup","mousemove","click","dblclick","rightclick","dblrightclick","resize","focus","blur"],listeners:null,object:null,element:null,eventTypes:null,eventHandler:null,fallThrough:null,includeXY:false,clearMouseListener:null,initialize:function(object,element,eventTypes,fallThrough,options){OpenLayers.Util.extend(this,options);this.object=object;this.fallThrough=fallThrough;this.listeners={};this.eventHandler=OpenLayers.Function.bindAsEventListener(this.handleBrowserEvent,this);this.clearMouseListener=OpenLayers.Function.bind(this.clearMouseCache,this);this.eventTypes=[];if(eventTypes!=null){for(var i=0,len=eventTypes.length;i<len;i++){this.addEventType(eventTypes[i]);}}
if(element!=null){this.attachToElement(element);}},destroy:function(){if(this.element){OpenLayers.Event.stopObservingElement(this.element);if(this.element.hasScrollEvent){OpenLayers.Event.stopObserving(window,"scroll",this.clearMouseListener);}}
this.element=null;this.listeners=null;this.object=null;this.eventTypes=null;this.fallThrough=null;this.eventHandler=null;},addEventType:function(eventName){if(!this.listeners[eventName]){this.eventTypes.push(eventName);this.listeners[eventName]=[];}},attachToElement:function(element){if(this.element){OpenLayers.Event.stopObservingElement(this.element);}
this.element=element;for(var i=0,len=this.BROWSER_EVENTS.length;i<len;i++){var eventType=this.BROWSER_EVENTS[i];this.addEventType(eventType);OpenLayers.Event.observe(element,eventType,this.eventHandler);}
OpenLayers.Event.observe(element,"dragstart",OpenLayers.Event.stop);},on:function(object){for(var type in object){if(type!="scope"){this.register(type,object.scope,object[type]);}}},register:function(type,obj,func){if((func!=null)&&(OpenLayers.Util.indexOf(this.eventTypes,type)!=-1)){if(obj==null){obj=this.object;}
var listeners=this.listeners[type];listeners.push({obj:obj,func:func});}},registerPriority:function(type,obj,func){if(func!=null){if(obj==null){obj=this.object;}
var listeners=this.listeners[type];if(listeners!=null){listeners.unshift({obj:obj,func:func});}}},un:function(object){for(var type in object){if(type!="scope"){this.unregister(type,object.scope,object[type]);}}},unregister:function(type,obj,func){if(obj==null){obj=this.object;}
var listeners=this.listeners[type];if(listeners!=null){for(var i=0,len=listeners.length;i<len;i++){if(listeners[i].obj==obj&&listeners[i].func==func){listeners.splice(i,1);break;}}}},remove:function(type){if(this.listeners[type]!=null){this.listeners[type]=[];}},triggerEvent:function(type,evt){var listeners=this.listeners[type];if(!listeners||listeners.length==0){return;}
if(evt==null){evt={};}
evt.object=this.object;evt.element=this.element;if(!evt.type){evt.type=type;}
var listeners=listeners.slice(),continueChain;for(var i=0,len=listeners.length;i<len;i++){var callback=listeners[i];continueChain=callback.func.apply(callback.obj,[evt]);if((continueChain!=undefined)&&(continueChain==false)){break;}}
if(!this.fallThrough){OpenLayers.Event.stop(evt,true);}
return continueChain;},handleBrowserEvent:function(evt){var type=evt.type,listeners=this.listeners[type];if(!listeners||listeners.length==0){return;}
if(this.includeXY){evt.xy=this.getMousePosition(evt);}
this.triggerEvent(type,evt);},clearMouseCache:function(){this.element.scrolls=null;this.element.lefttop=null;this.element.offsets=null;},getMousePosition:function(evt){if(!this.includeXY){this.clearMouseCache();}else if(!this.element.hasScrollEvent){OpenLayers.Event.observe(window,"scroll",this.clearMouseListener);this.element.hasScrollEvent=true;}
if(!this.element.scrolls){var viewportElement=OpenLayers.Util.getViewportElement();this.element.scrolls=[viewportElement.scrollLeft,viewportElement.scrollTop];}
if(!this.element.lefttop){this.element.lefttop=[(document.documentElement.clientLeft||0),(document.documentElement.clientTop||0)];}
if(!this.element.offsets){this.element.offsets=OpenLayers.Util.pagePosition(this.element);}
return new OpenLayers.Pixel((evt.clientX+this.element.scrolls[0])-this.element.offsets[0]
-this.element.lefttop[0],(evt.clientY+this.element.scrolls[1])-this.element.offsets[1]
-this.element.lefttop[1]);},CLASS_NAME:"OpenLayers.Events"});OpenLayers.Format=OpenLayers.Class({options:null,externalProjection:null,internalProjection:null,data:null,keepData:false,initialize:function(options){OpenLayers.Util.extend(this,options);this.options=options;},destroy:function(){},read:function(data){OpenLayers.Console.userError(OpenLayers.i18n("readNotImplemented"));},write:function(object){OpenLayers.Console.userError(OpenLayers.i18n("writeNotImplemented"));},CLASS_NAME:"OpenLayers.Format"});OpenLayers.Lang.en={'unhandledRequest':"Unhandled request return ${statusText}",'permalink':"Permalink",'overlays':"Overlays",'baseLayer':"Base Layer",'sameProjection':"The overview map only works when it is in the same projection as the main map",'readNotImplemented':"Read not implemented.",'writeNotImplemented':"Write not implemented.",'noFID':"Can't update a feature for which there is no FID.",'errorLoadingGML':"Error in loading GML file ${url}",'browserNotSupported':"Your browser does not support vector rendering. Currently supported renderers are:\n${renderers}",'componentShouldBe':"addFeatures : component should be an ${geomType}",'getFeatureError':"getFeatureFromEvent called on layer with no renderer. This usually means you "+"destroyed a layer, but not some handler which is associated with it.",'minZoomLevelError':"The minZoomLevel property is only intended for use "+"with the FixedZoomLevels-descendent layers. That this "+"wfs layer checks for minZoomLevel is a relic of the"+"past. We cannot, however, remove it without possibly "+"breaking OL based applications that may depend on it."+" Therefore we are deprecating it -- the minZoomLevel "+"check below will be removed at 3.0. Please instead "+"use min/max resolution setting as described here: "+"http://trac.openlayers.org/wiki/SettingZoomLevels",'commitSuccess':"WFS Transaction: SUCCESS ${response}",'commitFailed':"WFS Transaction: FAILED ${response}",'googleWarning':"The Google Layer was unable to load correctly.<br><br>"+"To get rid of this message, select a new BaseLayer "+"in the layer switcher in the upper-right corner.<br><br>"+"Most likely, this is because the Google Maps library "+"script was either not included, or does not contain the "+"correct API key for your site.<br><br>"+"Developers: For help getting this working correctly, "+"<a href='http://trac.openlayers.org/wiki/Google' "+"target='_blank'>click here</a>",'getLayerWarning':"The ${layerType} Layer was unable to load correctly.<br><br>"+"To get rid of this message, select a new BaseLayer "+"in the layer switcher in the upper-right corner.<br><br>"+"Most likely, this is because the ${layerLib} library "+"script was not correctly included.<br><br>"+"Developers: For help getting this working correctly, "+"<a href='http://trac.openlayers.org/wiki/${layerLib}' "+"target='_blank'>click here</a>",'scale':"Scale = 1 : ${scaleDenom}",'W':'W','E':'E','N':'N','S':'S','graticule':'Graticule','layerAlreadyAdded':"You tried to add the layer: ${layerName} to the map, but it has already been added",'reprojectDeprecated':"You are using the 'reproject' option "+"on the ${layerName} layer. This option is deprecated: "+"its use was designed to support displaying data over commercial "+"basemaps, but that functionality should now be achieved by using "+"Spherical Mercator support. More information is available from "+"http://trac.openlayers.org/wiki/SphericalMercator.",'methodDeprecated':"This method has been deprecated and will be removed in 3.0. "+"Please use ${newMethod} instead.",'boundsAddError':"You must pass both x and y values to the add function.",'lonlatAddError':"You must pass both lon and lat values to the add function.",'pixelAddError':"You must pass both x and y values to the add function.",'unsupportedGeometryType':"Unsupported geometry type: ${geomType}",'pagePositionFailed':"OpenLayers.Util.pagePosition failed: element with id ${elemId} may be misplaced.",'filterEvaluateNotImplemented':"evaluate is not implemented for this filter type.",'end':''};OpenLayers.Popup.AnchoredBubble=OpenLayers.Class(OpenLayers.Popup.Anchored,{rounded:false,initialize:function(id,lonlat,contentSize,contentHTML,anchor,closeBox,closeBoxCallback){this.padding=new OpenLayers.Bounds(0,OpenLayers.Popup.AnchoredBubble.CORNER_SIZE,0,OpenLayers.Popup.AnchoredBubble.CORNER_SIZE);OpenLayers.Popup.Anchored.prototype.initialize.apply(this,arguments);},draw:function(px){OpenLayers.Popup.Anchored.prototype.draw.apply(this,arguments);this.setContentHTML();this.setBackgroundColor();this.setOpacity();return this.div;},updateRelativePosition:function(){this.setRicoCorners();},setSize:function(contentSize){OpenLayers.Popup.Anchored.prototype.setSize.apply(this,arguments);this.setRicoCorners();},setBackgroundColor:function(color){if(color!=undefined){this.backgroundColor=color;}
if(this.div!=null){if(this.contentDiv!=null){this.div.style.background="transparent";OpenLayers.Rico.Corner.changeColor(this.groupDiv,this.backgroundColor);}}},setOpacity:function(opacity){OpenLayers.Popup.Anchored.prototype.setOpacity.call(this,opacity);if(this.div!=null){if(this.groupDiv!=null){OpenLayers.Rico.Corner.changeOpacity(this.groupDiv,this.opacity);}}},setBorder:function(border){this.border=0;},setRicoCorners:function(){var corners=this.getCornersToRound(this.relativePosition);var options={corners:corners,color:this.backgroundColor,bgColor:"transparent",blend:false};if(!this.rounded){OpenLayers.Rico.Corner.round(this.div,options);this.rounded=true;}else{OpenLayers.Rico.Corner.reRound(this.groupDiv,options);this.setBackgroundColor();this.setOpacity();}},getCornersToRound:function(){var corners=['tl','tr','bl','br'];var corner=OpenLayers.Bounds.oppositeQuadrant(this.relativePosition);OpenLayers.Util.removeItem(corners,corner);return corners.join(" ");},CLASS_NAME:"OpenLayers.Popup.AnchoredBubble"});OpenLayers.Popup.AnchoredBubble.CORNER_SIZE=5;OpenLayers.Projection=OpenLayers.Class({proj:null,projCode:null,titleRegEx:/\+title=[^\+]*/,initialize:function(projCode,options){OpenLayers.Util.extend(this,options);this.projCode=projCode;if(window.Proj4js){this.proj=new Proj4js.Proj(projCode);}},getCode:function(){return this.proj?this.proj.srsCode:this.projCode;},getUnits:function(){return this.proj?this.proj.units:null;},toString:function(){return this.getCode();},equals:function(projection){var p=projection,equals=false;if(p){if(window.Proj4js&&this.proj.defData&&p.proj.defData){equals=this.proj.defData.replace(this.titleRegEx,"")==p.proj.defData.replace(this.titleRegEx,"");}else if(p.getCode){var source=this.getCode(),target=p.getCode();equals=source==target||!!OpenLayers.Projection.transforms[source]&&OpenLayers.Projection.transforms[source][target]===OpenLayers.Projection.nullTransform;}}
return equals;},destroy:function(){delete this.proj;delete this.projCode;},CLASS_NAME:"OpenLayers.Projection"});OpenLayers.Projection.transforms={};OpenLayers.Projection.addTransform=function(from,to,method){if(!OpenLayers.Projection.transforms[from]){OpenLayers.Projection.transforms[from]={};}
OpenLayers.Projection.transforms[from][to]=method;};OpenLayers.Projection.transform=function(point,source,dest){if(source.proj&&dest.proj){point=Proj4js.transform(source.proj,dest.proj,point);}else if(source&&dest&&OpenLayers.Projection.transforms[source.getCode()]&&OpenLayers.Projection.transforms[source.getCode()][dest.getCode()]){OpenLayers.Projection.transforms[source.getCode()][dest.getCode()](point);}
return point;};OpenLayers.Projection.nullTransform=function(point){return point;};OpenLayers.Renderer.SVG=OpenLayers.Class(OpenLayers.Renderer.Elements,{xmlns:"http://www.w3.org/2000/svg",xlinkns:"http://www.w3.org/1999/xlink",MAX_PIXEL:15000,translationParameters:null,symbolMetrics:null,supportUse:null,initialize:function(containerID){if(!this.supported()){return;}
OpenLayers.Renderer.Elements.prototype.initialize.apply(this,arguments);this.translationParameters={x:0,y:0};this.supportUse=(navigator.userAgent.toLowerCase().indexOf("applewebkit/5")==-1);this.symbolMetrics={};},destroy:function(){OpenLayers.Renderer.Elements.prototype.destroy.apply(this,arguments);},supported:function(){var svgFeature="http://www.w3.org/TR/SVG11/feature#";return(document.implementation&&(document.implementation.hasFeature("org.w3c.svg","1.0")||document.implementation.hasFeature(svgFeature+"SVG","1.1")||document.implementation.hasFeature(svgFeature+"BasicStructure","1.1")));},inValidRange:function(x,y,xyOnly){var left=x+(xyOnly?0:this.translationParameters.x);var top=y+(xyOnly?0:this.translationParameters.y);return(left>=-this.MAX_PIXEL&&left<=this.MAX_PIXEL&&top>=-this.MAX_PIXEL&&top<=this.MAX_PIXEL);},setExtent:function(extent,resolutionChanged){OpenLayers.Renderer.Elements.prototype.setExtent.apply(this,arguments);var resolution=this.getResolution();var left=-extent.left/resolution;var top=extent.top/resolution;if(resolutionChanged){this.left=left;this.top=top;var extentString="0 0 "+this.size.w+" "+this.size.h;this.rendererRoot.setAttributeNS(null,"viewBox",extentString);this.translate(0,0);return true;}else{var inRange=this.translate(left-this.left,top-this.top);if(!inRange){this.setExtent(extent,true);}
return inRange;}},translate:function(x,y){if(!this.inValidRange(x,y,true)){return false;}else{var transformString="";if(x||y){transformString="translate("+x+","+y+")";}
this.root.setAttributeNS(null,"transform",transformString);this.translationParameters={x:x,y:y};return true;}},setSize:function(size){OpenLayers.Renderer.prototype.setSize.apply(this,arguments);this.rendererRoot.setAttributeNS(null,"width",this.size.w);this.rendererRoot.setAttributeNS(null,"height",this.size.h);},getNodeType:function(geometry,style){var nodeType=null;switch(geometry.CLASS_NAME){case"OpenLayers.Geometry.Point":if(style.externalGraphic){nodeType="image";}else if(this.isComplexSymbol(style.graphicName)){nodeType=this.supportUse===false?"svg":"use";}else{nodeType="circle";}
break;case"OpenLayers.Geometry.Rectangle":nodeType="rect";break;case"OpenLayers.Geometry.LineString":nodeType="polyline";break;case"OpenLayers.Geometry.LinearRing":nodeType="polygon";break;case"OpenLayers.Geometry.Polygon":case"OpenLayers.Geometry.Curve":case"OpenLayers.Geometry.Surface":nodeType="path";break;default:break;}
return nodeType;},setStyle:function(node,style,options){style=style||node._style;options=options||node._options;var r=parseFloat(node.getAttributeNS(null,"r"));var widthFactor=1;var pos;if(node._geometryClass=="OpenLayers.Geometry.Point"&&r){node.style.visibility="";if(style.graphic===false){node.style.visibility="hidden";}else if(style.externalGraphic){pos=this.getPosition(node);if(style.graphicTitle){node.setAttributeNS(null,"title",style.graphicTitle);}
if(style.graphicWidth&&style.graphicHeight){node.setAttributeNS(null,"preserveAspectRatio","none");}
var width=style.graphicWidth||style.graphicHeight;var height=style.graphicHeight||style.graphicWidth;width=width?width:style.pointRadius*2;height=height?height:style.pointRadius*2;var xOffset=(style.graphicXOffset!=undefined)?style.graphicXOffset:-(0.5*width);var yOffset=(style.graphicYOffset!=undefined)?style.graphicYOffset:-(0.5*height);var opacity=style.graphicOpacity||style.fillOpacity;node.setAttributeNS(null,"x",(pos.x+xOffset).toFixed());node.setAttributeNS(null,"y",(pos.y+yOffset).toFixed());node.setAttributeNS(null,"width",width);node.setAttributeNS(null,"height",height);node.setAttributeNS(this.xlinkns,"href",style.externalGraphic);node.setAttributeNS(null,"style","opacity: "+opacity);}else if(this.isComplexSymbol(style.graphicName)){var offset=style.pointRadius*3;var size=offset*2;var id=this.importSymbol(style.graphicName);pos=this.getPosition(node);widthFactor=this.symbolMetrics[id][0]*3/size;var parent=node.parentNode;var nextSibling=node.nextSibling;if(parent){parent.removeChild(node);}
if(this.supportUse===false){var src=document.getElementById(id);node.firstChild&&node.removeChild(node.firstChild);node.appendChild(src.firstChild.cloneNode(true));node.setAttributeNS(null,"viewBox",src.getAttributeNS(null,"viewBox"));}else{node.setAttributeNS(this.xlinkns,"href","#"+id);}
node.setAttributeNS(null,"width",size);node.setAttributeNS(null,"height",size);node.setAttributeNS(null,"x",pos.x-offset);node.setAttributeNS(null,"y",pos.y-offset);if(nextSibling){parent.insertBefore(node,nextSibling);}else if(parent){parent.appendChild(node);}}else{node.setAttributeNS(null,"r",style.pointRadius);}
var rotation=style.rotation;if((rotation!==undefined||node._rotation!==undefined)&&pos){node._rotation=rotation;rotation|=0;if(node.nodeName!=="svg"){node.setAttributeNS(null,"transform","rotate("+rotation+" "+pos.x+" "+
pos.y+")");}else{var metrics=this.symbolMetrics[id];node.firstChild.setAttributeNS(null,"transform","rotate("+style.rotation+" "+metrics[1]+" "+metrics[2]+")");}}}
if(options.isFilled){node.setAttributeNS(null,"fill",style.fillColor);node.setAttributeNS(null,"fill-opacity",style.fillOpacity);}else{node.setAttributeNS(null,"fill","none");}
if(options.isStroked){node.setAttributeNS(null,"stroke",style.strokeColor);node.setAttributeNS(null,"stroke-opacity",style.strokeOpacity);node.setAttributeNS(null,"stroke-width",style.strokeWidth*widthFactor);node.setAttributeNS(null,"stroke-linecap",style.strokeLinecap||"round");node.setAttributeNS(null,"stroke-linejoin","round");style.strokeDashstyle&&node.setAttributeNS(null,"stroke-dasharray",this.dashStyle(style,widthFactor));}else{node.setAttributeNS(null,"stroke","none");}
if(style.pointerEvents){node.setAttributeNS(null,"pointer-events",style.pointerEvents);}
if(style.cursor!=null){node.setAttributeNS(null,"cursor",style.cursor);}
return node;},dashStyle:function(style,widthFactor){var w=style.strokeWidth*widthFactor;var str=style.strokeDashstyle;switch(str){case'solid':return'none';case'dot':return[1,4*w].join();case'dash':return[4*w,4*w].join();case'dashdot':return[4*w,4*w,1,4*w].join();case'longdash':return[8*w,4*w].join();case'longdashdot':return[8*w,4*w,1,4*w].join();default:return OpenLayers.String.trim(str).replace(/\s+/g,",");}},createNode:function(type,id){var node=document.createElementNS(this.xmlns,type);if(id){node.setAttributeNS(null,"id",id);}
return node;},nodeTypeCompare:function(node,type){return(type==node.nodeName);},createRenderRoot:function(){return this.nodeFactory(this.container.id+"_svgRoot","svg");},createRoot:function(suffix){return this.nodeFactory(this.container.id+suffix,"g");},createDefs:function(){var defs=this.nodeFactory(this.container.id+"_defs","defs");this.rendererRoot.appendChild(defs);return defs;},drawPoint:function(node,geometry){return this.drawCircle(node,geometry,1);},drawCircle:function(node,geometry,radius){var resolution=this.getResolution();var x=(geometry.x/resolution+this.left);var y=(this.top-geometry.y/resolution);if(this.inValidRange(x,y)){node.setAttributeNS(null,"cx",x);node.setAttributeNS(null,"cy",y);node.setAttributeNS(null,"r",radius);return node;}else{return false;}},drawLineString:function(node,geometry){var componentsResult=this.getComponentsString(geometry.components);if(componentsResult.path){node.setAttributeNS(null,"points",componentsResult.path);return(componentsResult.complete?node:null);}else{return false;}},drawLinearRing:function(node,geometry){var componentsResult=this.getComponentsString(geometry.components);if(componentsResult.path){node.setAttributeNS(null,"points",componentsResult.path);return(componentsResult.complete?node:null);}else{return false;}},drawPolygon:function(node,geometry){var d="";var draw=true;var complete=true;var linearRingResult,path;for(var j=0,len=geometry.components.length;j<len;j++){d+=" M";linearRingResult=this.getComponentsString(geometry.components[j].components," ");path=linearRingResult.path;if(path){d+=" "+path;complete=linearRingResult.complete&&complete;}else{draw=false;}}
d+=" z";if(draw){node.setAttributeNS(null,"d",d);node.setAttributeNS(null,"fill-rule","evenodd");return complete?node:null;}else{return false;}},drawRectangle:function(node,geometry){var resolution=this.getResolution();var x=(geometry.x/resolution+this.left);var y=(this.top-geometry.y/resolution);if(this.inValidRange(x,y)){node.setAttributeNS(null,"x",x);node.setAttributeNS(null,"y",y);node.setAttributeNS(null,"width",geometry.width/resolution);node.setAttributeNS(null,"height",geometry.height/resolution);return node;}else{return false;}},drawSurface:function(node,geometry){var d=null;var draw=true;for(var i=0,len=geometry.components.length;i<len;i++){if((i%3)==0&&(i/3)==0){var component=this.getShortString(geometry.components[i]);if(!component){draw=false;}
d="M "+component;}else if((i%3)==1){var component=this.getShortString(geometry.components[i]);if(!component){draw=false;}
d+=" C "+component;}else{var component=this.getShortString(geometry.components[i]);if(!component){draw=false;}
d+=" "+component;}}
d+=" Z";if(draw){node.setAttributeNS(null,"d",d);return node;}else{return false;}},drawText:function(featureId,style,location){var resolution=this.getResolution();var x=(location.x/resolution+this.left);var y=(location.y/resolution-this.top);var label=this.nodeFactory(featureId+this.LABEL_ID_SUFFIX,"text");var tspan=this.nodeFactory(featureId+this.LABEL_ID_SUFFIX+"_tspan","tspan");label.setAttributeNS(null,"x",x);label.setAttributeNS(null,"y",-y);if(style.fontColor){label.setAttributeNS(null,"fill",style.fontColor);}
if(style.fontOpacity){label.setAttributeNS(null,"opacity",style.fontOpacity);}
if(style.fontFamily){label.setAttributeNS(null,"font-family",style.fontFamily);}
if(style.fontSize){label.setAttributeNS(null,"font-size",style.fontSize);}
if(style.fontWeight){label.setAttributeNS(null,"font-weight",style.fontWeight);}
if(style.labelSelect===true){label.setAttributeNS(null,"pointer-events","visible");label._featureId=featureId;tspan._featureId=featureId;tspan._geometry=location;tspan._geometryClass=location.CLASS_NAME;}else{label.setAttributeNS(null,"pointer-events","none");}
var align=style.labelAlign||"cm";label.setAttributeNS(null,"text-anchor",OpenLayers.Renderer.SVG.LABEL_ALIGN[align[0]]||"middle");if(OpenLayers.IS_GECKO===true){label.setAttributeNS(null,"dominant-baseline",OpenLayers.Renderer.SVG.LABEL_ALIGN[align[1]]||"central");}else{tspan.setAttributeNS(null,"baseline-shift",OpenLayers.Renderer.SVG.LABEL_VSHIFT[align[1]]||"-35%");}
tspan.textContent=style.label;if(!label.parentNode){label.appendChild(tspan);this.textRoot.appendChild(label);}},getComponentsString:function(components,separator){var renderCmp=[];var complete=true;var len=components.length;var strings=[];var str,component;for(var i=0;i<len;i++){component=components[i];renderCmp.push(component);str=this.getShortString(component);if(str){strings.push(str);}else{if(i>0){if(this.getShortString(components[i-1])){strings.push(this.clipLine(components[i],components[i-1]));}}
if(i<len-1){if(this.getShortString(components[i+1])){strings.push(this.clipLine(components[i],components[i+1]));}}
complete=false;}}
return{path:strings.join(separator||","),complete:complete};},clipLine:function(badComponent,goodComponent){if(goodComponent.equals(badComponent)){return"";}
var resolution=this.getResolution();var maxX=this.MAX_PIXEL-this.translationParameters.x;var maxY=this.MAX_PIXEL-this.translationParameters.y;var x1=goodComponent.x/resolution+this.left;var y1=this.top-goodComponent.y/resolution;var x2=badComponent.x/resolution+this.left;var y2=this.top-badComponent.y/resolution;var k;if(x2<-maxX||x2>maxX){k=(y2-y1)/(x2-x1);x2=x2<0?-maxX:maxX;y2=y1+(x2-x1)*k;}
if(y2<-maxY||y2>maxY){k=(x2-x1)/(y2-y1);y2=y2<0?-maxY:maxY;x2=x1+(y2-y1)*k;}
return x2+","+y2;},getShortString:function(point){var resolution=this.getResolution();var x=(point.x/resolution+this.left);var y=(this.top-point.y/resolution);if(this.inValidRange(x,y)){return x+","+y;}else{return false;}},getPosition:function(node){return({x:parseFloat(node.getAttributeNS(null,"cx")),y:parseFloat(node.getAttributeNS(null,"cy"))});},importSymbol:function(graphicName){if(!this.defs){this.defs=this.createDefs();}
var id=this.container.id+"-"+graphicName;if(document.getElementById(id)!=null){return id;}
var symbol=OpenLayers.Renderer.symbol[graphicName];if(!symbol){throw new Error(graphicName+' is not a valid symbol name');}
var symbolNode=this.nodeFactory(id,"symbol");var node=this.nodeFactory(null,"polygon");symbolNode.appendChild(node);var symbolExtent=new OpenLayers.Bounds(Number.MAX_VALUE,Number.MAX_VALUE,0,0);var points=[];var x,y;for(var i=0;i<symbol.length;i=i+2){x=symbol[i];y=symbol[i+1];symbolExtent.left=Math.min(symbolExtent.left,x);symbolExtent.bottom=Math.min(symbolExtent.bottom,y);symbolExtent.right=Math.max(symbolExtent.right,x);symbolExtent.top=Math.max(symbolExtent.top,y);points.push(x,",",y);}
node.setAttributeNS(null,"points",points.join(" "));var width=symbolExtent.getWidth();var height=symbolExtent.getHeight();var viewBox=[symbolExtent.left-width,symbolExtent.bottom-height,width*3,height*3];symbolNode.setAttributeNS(null,"viewBox",viewBox.join(" "));this.symbolMetrics[id]=[Math.max(width,height),symbolExtent.getCenterLonLat().lon,symbolExtent.getCenterLonLat().lat];this.defs.appendChild(symbolNode);return symbolNode.id;},getFeatureIdFromEvent:function(evt){var featureId=OpenLayers.Renderer.Elements.prototype.getFeatureIdFromEvent.apply(this,arguments);if(this.supportUse===false&&!featureId){var target=evt.target;featureId=target.parentNode&&target!=this.rendererRoot&&target.parentNode._featureId;}
return featureId;},CLASS_NAME:"OpenLayers.Renderer.SVG"});OpenLayers.Renderer.SVG.LABEL_ALIGN={"l":"start","r":"end","b":"bottom","t":"hanging"};OpenLayers.Renderer.SVG.LABEL_VSHIFT={"t":"-70%","b":"0"};OpenLayers.Renderer.VML=OpenLayers.Class(OpenLayers.Renderer.Elements,{xmlns:"urn:schemas-microsoft-com:vml",symbolCache:{},offset:null,initialize:function(containerID){if(!this.supported()){return;}
if(!document.namespaces.olv){document.namespaces.add("olv",this.xmlns);var style=document.createStyleSheet();var shapes=['shape','rect','oval','fill','stroke','imagedata','group','textbox'];for(var i=0,len=shapes.length;i<len;i++){style.addRule('olv\\:'+shapes[i],"behavior: url(#default#VML); "+"position: absolute; display: inline-block;");}}
OpenLayers.Renderer.Elements.prototype.initialize.apply(this,arguments);},destroy:function(){OpenLayers.Renderer.Elements.prototype.destroy.apply(this,arguments);},supported:function(){return!!(document.namespaces);},setExtent:function(extent,resolutionChanged){OpenLayers.Renderer.Elements.prototype.setExtent.apply(this,arguments);var resolution=this.getResolution();var left=(extent.left/resolution)|0;var top=(extent.top/resolution-this.size.h)|0;if(resolutionChanged||!this.offset){this.offset={x:left,y:top};left=0;top=0;}else{left=left-this.offset.x;top=top-this.offset.y;}
var org=left+" "+top;this.root.coordorigin=org;var roots=[this.root,this.vectorRoot,this.textRoot];var root;for(var i=0,len=roots.length;i<len;++i){root=roots[i];var size=this.size.w+" "+this.size.h;root.coordsize=size;}
this.root.style.flip="y";return true;},setSize:function(size){OpenLayers.Renderer.prototype.setSize.apply(this,arguments);var roots=[this.rendererRoot,this.root,this.vectorRoot,this.textRoot];var w=this.size.w+"px";var h=this.size.h+"px";var root;for(var i=0,len=roots.length;i<len;++i){root=roots[i];root.style.width=w;root.style.height=h;}},getNodeType:function(geometry,style){var nodeType=null;switch(geometry.CLASS_NAME){case"OpenLayers.Geometry.Point":if(style.externalGraphic){nodeType="olv:rect";}else if(this.isComplexSymbol(style.graphicName)){nodeType="olv:shape";}else{nodeType="olv:oval";}
break;case"OpenLayers.Geometry.Rectangle":nodeType="olv:rect";break;case"OpenLayers.Geometry.LineString":case"OpenLayers.Geometry.LinearRing":case"OpenLayers.Geometry.Polygon":case"OpenLayers.Geometry.Curve":case"OpenLayers.Geometry.Surface":nodeType="olv:shape";break;default:break;}
return nodeType;},setStyle:function(node,style,options,geometry){style=style||node._style;options=options||node._options;var fillColor=style.fillColor;if(node._geometryClass==="OpenLayers.Geometry.Point"){if(style.externalGraphic){if(style.graphicTitle){node.title=style.graphicTitle;}
var width=style.graphicWidth||style.graphicHeight;var height=style.graphicHeight||style.graphicWidth;width=width?width:style.pointRadius*2;height=height?height:style.pointRadius*2;var resolution=this.getResolution();var xOffset=(style.graphicXOffset!=undefined)?style.graphicXOffset:-(0.5*width);var yOffset=(style.graphicYOffset!=undefined)?style.graphicYOffset:-(0.5*height);node.style.left=(((geometry.x/resolution-this.offset.x)+xOffset)|0)+"px";node.style.top=(((geometry.y/resolution-this.offset.y)-(yOffset+height))|0)+"px";node.style.width=width+"px";node.style.height=height+"px";node.style.flip="y";fillColor="none";options.isStroked=false;}else if(this.isComplexSymbol(style.graphicName)){var cache=this.importSymbol(style.graphicName);node.path=cache.path;node.coordorigin=cache.left+","+cache.bottom;var size=cache.size;node.coordsize=size+","+size;this.drawCircle(node,geometry,style.pointRadius);node.style.flip="y";}else{this.drawCircle(node,geometry,style.pointRadius);}}
if(options.isFilled){node.fillcolor=fillColor;}else{node.filled="false";}
var fills=node.getElementsByTagName("fill");var fill=(fills.length==0)?null:fills[0];if(!options.isFilled){if(fill){node.removeChild(fill);}}else{if(!fill){fill=this.createNode('olv:fill',node.id+"_fill");}
fill.opacity=style.fillOpacity;if(node._geometryClass==="OpenLayers.Geometry.Point"&&style.externalGraphic){if(style.graphicOpacity){fill.opacity=style.graphicOpacity;}
fill.src=style.externalGraphic;fill.type="frame";if(!(style.graphicWidth&&style.graphicHeight)){fill.aspect="atmost";}}
if(fill.parentNode!=node){node.appendChild(fill);}}
var rotation=style.rotation;if((rotation!==undefined||node._rotation!==undefined)){node._rotation=rotation;if(style.externalGraphic){this.graphicRotate(node,xOffset,yOffset,style);fill.opacity=0;}else if(node._geometryClass==="OpenLayers.Geometry.Point"){node.style.rotation=rotation||0;}}
var strokes=node.getElementsByTagName("stroke");var stroke=(strokes.length==0)?null:strokes[0];if(!options.isStroked){node.stroked=false;if(stroke){stroke.on=false;}}else{if(!stroke){stroke=this.createNode('olv:stroke',node.id+"_stroke");node.appendChild(stroke);}
stroke.on=true;stroke.color=style.strokeColor;stroke.weight=style.strokeWidth+"px";stroke.opacity=style.strokeOpacity;stroke.endcap=style.strokeLinecap=='butt'?'flat':(style.strokeLinecap||'round');if(style.strokeDashstyle){stroke.dashstyle=this.dashStyle(style);}}
if(style.cursor!="inherit"&&style.cursor!=null){node.style.cursor=style.cursor;}
return node;},graphicRotate:function(node,xOffset,yOffset,style){var style=style||node._style;var rotation=style.rotation||0;var aspectRatio,size;if(!(style.graphicWidth&&style.graphicHeight)){var img=new Image();img.onreadystatechange=OpenLayers.Function.bind(function(){if(img.readyState=="complete"||img.readyState=="interactive"){aspectRatio=img.width/img.height;size=Math.max(style.pointRadius*2,style.graphicWidth||0,style.graphicHeight||0);xOffset=xOffset*aspectRatio;style.graphicWidth=size*aspectRatio;style.graphicHeight=size;this.graphicRotate(node,xOffset,yOffset,style);}},this);img.src=style.externalGraphic;return;}else{size=Math.max(style.graphicWidth,style.graphicHeight);aspectRatio=style.graphicWidth/style.graphicHeight;}
var width=Math.round(style.graphicWidth||size*aspectRatio);var height=Math.round(style.graphicHeight||size);node.style.width=width+"px";node.style.height=height+"px";var image=document.getElementById(node.id+"_image");if(!image){image=this.createNode("olv:imagedata",node.id+"_image");node.appendChild(image);}
image.style.width=width+"px";image.style.height=height+"px";image.src=style.externalGraphic;image.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader("+"src='', sizingMethod='scale')";var rot=rotation*Math.PI/180;var sintheta=Math.sin(rot);var costheta=Math.cos(rot);var filter="progid:DXImageTransform.Microsoft.Matrix(M11="+costheta+",M12="+(-sintheta)+",M21="+sintheta+",M22="+costheta+",SizingMethod='auto expand')\n";var opacity=style.graphicOpacity||style.fillOpacity;if(opacity&&opacity!=1){filter+="progid:DXImageTransform.Microsoft.BasicImage(opacity="+
opacity+")\n";}
node.style.filter=filter;var centerPoint=new OpenLayers.Geometry.Point(-xOffset,-yOffset);var imgBox=new OpenLayers.Bounds(0,0,width,height).toGeometry();imgBox.rotate(style.rotation,centerPoint);var imgBounds=imgBox.getBounds();node.style.left=Math.round(parseInt(node.style.left)+imgBounds.left)+"px";node.style.top=Math.round(parseInt(node.style.top)-imgBounds.bottom)+"px";},postDraw:function(node){node.style.visibility="visible";var fillColor=node._style.fillColor;var strokeColor=node._style.strokeColor;if(fillColor=="none"&&node.fillcolor!=fillColor){node.fillcolor=fillColor;}
if(strokeColor=="none"&&node.strokecolor!=strokeColor){node.strokecolor=strokeColor;}},setNodeDimension:function(node,geometry){var bbox=geometry.getBounds();if(bbox){var resolution=this.getResolution();var scaledBox=new OpenLayers.Bounds((bbox.left/resolution-this.offset.x)|0,(bbox.bottom/resolution-this.offset.y)|0,(bbox.right/resolution-this.offset.x)|0,(bbox.top/resolution-this.offset.y)|0);node.style.left=scaledBox.left+"px";node.style.top=scaledBox.top+"px";node.style.width=scaledBox.getWidth()+"px";node.style.height=scaledBox.getHeight()+"px";node.coordorigin=scaledBox.left+" "+scaledBox.top;node.coordsize=scaledBox.getWidth()+" "+scaledBox.getHeight();}},dashStyle:function(style){var dash=style.strokeDashstyle;switch(dash){case'solid':case'dot':case'dash':case'dashdot':case'longdash':case'longdashdot':return dash;default:var parts=dash.split(/[ ,]/);if(parts.length==2){if(1*parts[0]>=2*parts[1]){return"longdash";}
return(parts[0]==1||parts[1]==1)?"dot":"dash";}else if(parts.length==4){return(1*parts[0]>=2*parts[1])?"longdashdot":"dashdot";}
return"solid";}},createNode:function(type,id){var node=document.createElement(type);if(id){node.id=id;}
node.unselectable='on';node.onselectstart=OpenLayers.Function.False;return node;},nodeTypeCompare:function(node,type){var subType=type;var splitIndex=subType.indexOf(":");if(splitIndex!=-1){subType=subType.substr(splitIndex+1);}
var nodeName=node.nodeName;splitIndex=nodeName.indexOf(":");if(splitIndex!=-1){nodeName=nodeName.substr(splitIndex+1);}
return(subType==nodeName);},createRenderRoot:function(){return this.nodeFactory(this.container.id+"_vmlRoot","div");},createRoot:function(suffix){return this.nodeFactory(this.container.id+suffix,"olv:group");},drawPoint:function(node,geometry){return this.drawCircle(node,geometry,1);},drawCircle:function(node,geometry,radius){if(!isNaN(geometry.x)&&!isNaN(geometry.y)){var resolution=this.getResolution();node.style.left=(((geometry.x/resolution-this.offset.x)|0)-radius)+"px";node.style.top=(((geometry.y/resolution-this.offset.y)|0)-radius)+"px";var diameter=radius*2;node.style.width=diameter+"px";node.style.height=diameter+"px";return node;}
return false;},drawLineString:function(node,geometry){return this.drawLine(node,geometry,false);},drawLinearRing:function(node,geometry){return this.drawLine(node,geometry,true);},drawLine:function(node,geometry,closeLine){this.setNodeDimension(node,geometry);var resolution=this.getResolution();var numComponents=geometry.components.length;var parts=new Array(numComponents);var comp,x,y;for(var i=0;i<numComponents;i++){comp=geometry.components[i];x=(comp.x/resolution-this.offset.x)|0;y=(comp.y/resolution-this.offset.y)|0;parts[i]=" "+x+","+y+" l ";}
var end=(closeLine)?" x e":" e";node.path="m"+parts.join("")+end;return node;},drawPolygon:function(node,geometry){this.setNodeDimension(node,geometry);var resolution=this.getResolution();var path=[];var j,jj,points,area,first,second,i,ii,comp,pathComp,x,y;for(j=0,jj=geometry.components.length;j<jj;j++){path.push("m");points=geometry.components[j].components;area=(j===0);first=null;second=null;for(i=0,ii=points.length;i<ii;i++){comp=points[i];x=(comp.x/resolution-this.offset.x)|0;y=(comp.y/resolution-this.offset.y)|0;pathComp=" "+x+","+y;path.push(pathComp)
if(i==0){path.push(" l");}
if(!area){if(!first){first=pathComp;}else if(first!=pathComp){if(!second){second=pathComp;}else if(second!=pathComp){area=true;}}}}
path.push(area?" x ":" ");}
path.push("e");node.path=path.join("");return node;},drawRectangle:function(node,geometry){var resolution=this.getResolution();node.style.left=((geometry.x/resolution-this.offset.x)|0)+"px";node.style.top=((geometry.y/resolution-this.offset.y)|0)+"px";node.style.width=((geometry.width/resolution)|0)+"px";node.style.height=((geometry.height/resolution)|0)+"px";return node;},drawText:function(featureId,style,location){var label=this.nodeFactory(featureId+this.LABEL_ID_SUFFIX,"olv:rect");var textbox=this.nodeFactory(featureId+this.LABEL_ID_SUFFIX+"_textbox","olv:textbox");var resolution=this.getResolution();label.style.left=((location.x/resolution-this.offset.x)|0)+"px";label.style.top=((location.y/resolution-this.offset.y)|0)+"px";label.style.flip="y";textbox.innerText=style.label;if(style.fontColor){textbox.style.color=style.fontColor;}
if(style.fontOpacity){textbox.style.filter='alpha(opacity='+(style.fontOpacity*100)+')';}
if(style.fontFamily){textbox.style.fontFamily=style.fontFamily;}
if(style.fontSize){textbox.style.fontSize=style.fontSize;}
if(style.fontWeight){textbox.style.fontWeight=style.fontWeight;}
if(style.labelSelect===true){label._featureId=featureId;textbox._featureId=featureId;textbox._geometry=location;textbox._geometryClass=location.CLASS_NAME;}
textbox.style.whiteSpace="nowrap";textbox.inset="1px,0px,0px,0px";if(!label.parentNode){label.appendChild(textbox);this.textRoot.appendChild(label);}
var align=style.labelAlign||"cm";if(align.length==1){align+="m";}
var xshift=textbox.clientWidth*(OpenLayers.Renderer.VML.LABEL_SHIFT[align.substr(0,1)]);var yshift=textbox.clientHeight*(OpenLayers.Renderer.VML.LABEL_SHIFT[align.substr(1,1)]);label.style.left=parseInt(label.style.left)-xshift-1+"px";label.style.top=parseInt(label.style.top)+yshift+"px";},drawSurface:function(node,geometry){this.setNodeDimension(node,geometry);var resolution=this.getResolution();var path=[];var comp,x,y;for(var i=0,len=geometry.components.length;i<len;i++){comp=geometry.components[i];x=(comp.x/resolution-this.offset.x)|0;y=(comp.y/resolution-this.offset.y)|0;if((i%3)==0&&(i/3)==0){path.push("m");}else if((i%3)==1){path.push(" c");}
path.push(" "+x+","+y);}
path.push(" x e");node.path=path.join("");return node;},moveRoot:function(renderer){var layer=this.map.getLayer(renderer.container.id);if(layer instanceof OpenLayers.Layer.Vector.RootContainer){layer=this.map.getLayer(this.container.id);}
layer&&layer.renderer.clear();OpenLayers.Renderer.Elements.prototype.moveRoot.apply(this,arguments);layer&&layer.redraw();},importSymbol:function(graphicName){var id=this.container.id+"-"+graphicName;var cache=this.symbolCache[id];if(cache){return cache;}
var symbol=OpenLayers.Renderer.symbol[graphicName];if(!symbol){throw new Error(graphicName+' is not a valid symbol name');}
var symbolExtent=new OpenLayers.Bounds(Number.MAX_VALUE,Number.MAX_VALUE,0,0);var pathitems=["m"];for(var i=0;i<symbol.length;i=i+2){var x=symbol[i];var y=symbol[i+1];symbolExtent.left=Math.min(symbolExtent.left,x);symbolExtent.bottom=Math.min(symbolExtent.bottom,y);symbolExtent.right=Math.max(symbolExtent.right,x);symbolExtent.top=Math.max(symbolExtent.top,y);pathitems.push(x);pathitems.push(y);if(i==0){pathitems.push("l");}}
pathitems.push("x e");var path=pathitems.join(" ");var diff=(symbolExtent.getWidth()-symbolExtent.getHeight())/2;if(diff>0){symbolExtent.bottom=symbolExtent.bottom-diff;symbolExtent.top=symbolExtent.top+diff;}else{symbolExtent.left=symbolExtent.left+diff;symbolExtent.right=symbolExtent.right-diff;}
cache={path:path,size:symbolExtent.getWidth(),left:symbolExtent.left,bottom:symbolExtent.bottom};this.symbolCache[id]=cache;return cache;},CLASS_NAME:"OpenLayers.Renderer.VML"});OpenLayers.Renderer.VML.LABEL_SHIFT={"l":0,"c":.5,"r":1,"t":0,"m":.5,"b":1};OpenLayers.Tile=OpenLayers.Class({EVENT_TYPES:["loadstart","loadend","reload","unload"],events:null,id:null,layer:null,url:null,bounds:null,size:null,position:null,isLoading:false,initialize:function(layer,position,bounds,url,size,options){this.layer=layer;this.position=position.clone();this.bounds=bounds.clone();this.url=url;this.size=size.clone();this.id=OpenLayers.Util.createUniqueID("Tile_");this.events=new OpenLayers.Events(this,null,this.EVENT_TYPES);OpenLayers.Util.extend(this,options);},unload:function(){if(this.isLoading){this.isLoading=false;this.events.triggerEvent("unload");}},destroy:function(){this.layer=null;this.bounds=null;this.size=null;this.position=null;this.events.destroy();this.events=null;},clone:function(obj){if(obj==null){obj=new OpenLayers.Tile(this.layer,this.position,this.bounds,this.url,this.size);}
OpenLayers.Util.applyDefaults(obj,this);return obj;},draw:function(){var maxExtent=this.layer.maxExtent;var withinMaxExtent=(maxExtent&&this.bounds.intersectsBounds(maxExtent,false));this.shouldDraw=(withinMaxExtent||this.layer.displayOutsideMaxExtent);this.clear();return this.shouldDraw;},moveTo:function(bounds,position,redraw){if(redraw==null){redraw=true;}
this.bounds=bounds.clone();this.position=position.clone();if(redraw){this.draw();}},clear:function(){},getBoundsFromBaseLayer:function(position){var msg=OpenLayers.i18n('reprojectDeprecated',{'layerName':this.layer.name});OpenLayers.Console.warn(msg);var topLeft=this.layer.map.getLonLatFromLayerPx(position);var bottomRightPx=position.clone();bottomRightPx.x+=this.size.w;bottomRightPx.y+=this.size.h;var bottomRight=this.layer.map.getLonLatFromLayerPx(bottomRightPx);if(topLeft.lon>bottomRight.lon){if(topLeft.lon<0){topLeft.lon=-180-(topLeft.lon+180);}else{bottomRight.lon=180+bottomRight.lon+180;}}
var bounds=new OpenLayers.Bounds(topLeft.lon,bottomRight.lat,bottomRight.lon,topLeft.lat);return bounds;},showTile:function(){if(this.shouldDraw){this.show();}},show:function(){},hide:function(){},CLASS_NAME:"OpenLayers.Tile"});OpenLayers.Control.PanZoomBar=OpenLayers.Class(OpenLayers.Control.PanZoom,{zoomStopWidth:18,zoomStopHeight:11,slider:null,sliderEvents:null,zoombarDiv:null,divEvents:null,zoomWorldIcon:false,forceFixedZoomLevel:false,mouseDragStart:null,zoomStart:null,initialize:function(){OpenLayers.Control.PanZoom.prototype.initialize.apply(this,arguments);},destroy:function(){this._removeZoomBar();this.map.events.un({"changebaselayer":this.redraw,scope:this});OpenLayers.Control.PanZoom.prototype.destroy.apply(this,arguments);delete this.mouseDragStart;delete this.zoomStart;},setMap:function(map){OpenLayers.Control.PanZoom.prototype.setMap.apply(this,arguments);this.map.events.register("changebaselayer",this,this.redraw);},redraw:function(){if(this.div!=null){this.removeButtons();this._removeZoomBar();}
this.draw();},draw:function(px){OpenLayers.Control.prototype.draw.apply(this,arguments);px=this.position.clone();this.buttons=[];var sz=new OpenLayers.Size(18,18);var centered=new OpenLayers.Pixel(px.x+sz.w/2,px.y);var wposition=sz.w;if(this.zoomWorldIcon){centered=new OpenLayers.Pixel(px.x+sz.w,px.y);}
this._addButton("panup","north-mini.png",centered,sz);px.y=centered.y+sz.h;this._addButton("panleft","west-mini.png",px,sz);if(this.zoomWorldIcon){this._addButton("zoomworld","zoom-world-mini.png",px.add(sz.w,0),sz);wposition*=2;}
this._addButton("panright","east-mini.png",px.add(wposition,0),sz);this._addButton("pandown","south-mini.png",centered.add(0,sz.h*2),sz);this._addButton("zoomin","zoom-plus-mini.png",centered.add(0,sz.h*3+5),sz);centered=this._addZoomBar(centered.add(0,sz.h*4+5));this._addButton("zoomout","zoom-minus-mini.png",centered,sz);return this.div;},_addZoomBar:function(centered){var imgLocation=OpenLayers.Util.getImagesLocation();var id=this.id+"_"+this.map.id;var zoomsToEnd=this.map.getNumZoomLevels()-1-this.map.getZoom();var slider=OpenLayers.Util.createAlphaImageDiv(id,centered.add(-1,zoomsToEnd*this.zoomStopHeight),new OpenLayers.Size(20,9),imgLocation+"slider.png","absolute");this.slider=slider;this.sliderEvents=new OpenLayers.Events(this,slider,null,true,{includeXY:true});this.sliderEvents.on({"mousedown":this.zoomBarDown,"mousemove":this.zoomBarDrag,"mouseup":this.zoomBarUp,"dblclick":this.doubleClick,"click":this.doubleClick});var sz=new OpenLayers.Size();sz.h=this.zoomStopHeight*this.map.getNumZoomLevels();sz.w=this.zoomStopWidth;var div=null;if(OpenLayers.Util.alphaHack()){var id=this.id+"_"+this.map.id;div=OpenLayers.Util.createAlphaImageDiv(id,centered,new OpenLayers.Size(sz.w,this.zoomStopHeight),imgLocation+"zoombar.png","absolute",null,"crop");div.style.height=sz.h+"px";}else{div=OpenLayers.Util.createDiv('OpenLayers_Control_PanZoomBar_Zoombar'+this.map.id,centered,sz,imgLocation+"zoombar.png");}
this.zoombarDiv=div;this.divEvents=new OpenLayers.Events(this,div,null,true,{includeXY:true});this.divEvents.on({"mousedown":this.divClick,"mousemove":this.passEventToSlider,"dblclick":this.doubleClick,"click":this.doubleClick});this.div.appendChild(div);this.startTop=parseInt(div.style.top);this.div.appendChild(slider);this.map.events.register("zoomend",this,this.moveZoomBar);centered=centered.add(0,this.zoomStopHeight*this.map.getNumZoomLevels());return centered;},_removeZoomBar:function(){this.sliderEvents.un({"mousedown":this.zoomBarDown,"mousemove":this.zoomBarDrag,"mouseup":this.zoomBarUp,"dblclick":this.doubleClick,"click":this.doubleClick});this.sliderEvents.destroy();this.divEvents.un({"mousedown":this.divClick,"mousemove":this.passEventToSlider,"dblclick":this.doubleClick,"click":this.doubleClick});this.divEvents.destroy();this.div.removeChild(this.zoombarDiv);this.zoombarDiv=null;this.div.removeChild(this.slider);this.slider=null;this.map.events.unregister("zoomend",this,this.moveZoomBar);},passEventToSlider:function(evt){this.sliderEvents.handleBrowserEvent(evt);},divClick:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
var levels=evt.xy.y/this.zoomStopHeight;if(this.forceFixedZoomLevel||!this.map.fractionalZoom){levels=Math.floor(levels);}
var zoom=(this.map.getNumZoomLevels()-1)-levels;zoom=Math.min(Math.max(zoom,0),this.map.getNumZoomLevels()-1);this.map.zoomTo(zoom);OpenLayers.Event.stop(evt);},zoomBarDown:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
this.map.events.on({"mousemove":this.passEventToSlider,"mouseup":this.passEventToSlider,scope:this});this.mouseDragStart=evt.xy.clone();this.zoomStart=evt.xy.clone();this.div.style.cursor="move";this.zoombarDiv.offsets=null;OpenLayers.Event.stop(evt);},zoomBarDrag:function(evt){if(this.mouseDragStart!=null){var deltaY=this.mouseDragStart.y-evt.xy.y;var offsets=OpenLayers.Util.pagePosition(this.zoombarDiv);if((evt.clientY-offsets[1])>0&&(evt.clientY-offsets[1])<parseInt(this.zoombarDiv.style.height)-2){var newTop=parseInt(this.slider.style.top)-deltaY;this.slider.style.top=newTop+"px";this.mouseDragStart=evt.xy.clone();}
OpenLayers.Event.stop(evt);}},zoomBarUp:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
if(this.mouseDragStart){this.div.style.cursor="";this.map.events.un({"mouseup":this.passEventToSlider,"mousemove":this.passEventToSlider,scope:this});var deltaY=this.zoomStart.y-evt.xy.y;var zoomLevel=this.map.zoom;if(!this.forceFixedZoomLevel&&this.map.fractionalZoom){zoomLevel+=deltaY/this.zoomStopHeight;zoomLevel=Math.min(Math.max(zoomLevel,0),this.map.getNumZoomLevels()-1);}else{zoomLevel+=Math.round(deltaY/this.zoomStopHeight);}
this.map.zoomTo(zoomLevel);this.mouseDragStart=null;this.zoomStart=null;OpenLayers.Event.stop(evt);}},moveZoomBar:function(){var newTop=((this.map.getNumZoomLevels()-1)-this.map.getZoom())*this.zoomStopHeight+this.startTop+1;this.slider.style.top=newTop+"px";},CLASS_NAME:"OpenLayers.Control.PanZoomBar"});OpenLayers.Control.Permalink=OpenLayers.Class(OpenLayers.Control,{argParserClass:OpenLayers.Control.ArgParser,element:null,base:'',displayProjection:null,initialize:function(element,base,options){OpenLayers.Control.prototype.initialize.apply(this,[options]);this.element=OpenLayers.Util.getElement(element);this.base=base||document.location.href;},destroy:function(){if(this.element.parentNode==this.div){this.div.removeChild(this.element);}
this.element=null;this.map.events.unregister('moveend',this,this.updateLink);OpenLayers.Control.prototype.destroy.apply(this,arguments);},setMap:function(map){OpenLayers.Control.prototype.setMap.apply(this,arguments);for(var i=0,len=this.map.controls.length;i<len;i++){var control=this.map.controls[i];if(control.CLASS_NAME==this.argParserClass.CLASS_NAME){if(control.displayProjection!=this.displayProjection){this.displayProjection=control.displayProjection;}
break;}}
if(i==this.map.controls.length){this.map.addControl(new this.argParserClass({'displayProjection':this.displayProjection}));}},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);if(!this.element){this.element=document.createElement("a");this.element.innerHTML=OpenLayers.i18n("permalink");this.element.href="";this.div.appendChild(this.element);}
this.map.events.on({'moveend':this.updateLink,'changelayer':this.updateLink,'changebaselayer':this.updateLink,scope:this});this.updateLink();return this.div;},updateLink:function(){var href=this.base;if(href.indexOf('?')!=-1){href=href.substring(0,href.indexOf('?'));}
href+='?'+OpenLayers.Util.getParameterString(this.createParams());this.element.href=href;},createParams:function(center,zoom,layers){center=center||this.map.getCenter();var params=OpenLayers.Util.getParameters(this.base);if(center){params.zoom=zoom||this.map.getZoom();var lat=center.lat;var lon=center.lon;if(this.displayProjection){var mapPosition=OpenLayers.Projection.transform({x:lon,y:lat},this.map.getProjectionObject(),this.displayProjection);lon=mapPosition.x;lat=mapPosition.y;}
params.lat=Math.round(lat*100000)/100000;params.lon=Math.round(lon*100000)/100000;layers=layers||this.map.layers;params.layers='';for(var i=0,len=layers.length;i<len;i++){var layer=layers[i];if(layer.isBaseLayer){params.layers+=(layer==this.map.baseLayer)?"B":"0";}else{params.layers+=(layer.getVisibility())?"T":"F";}}}
return params;},CLASS_NAME:"OpenLayers.Control.Permalink"});OpenLayers.Control.ZoomPanel=OpenLayers.Class(OpenLayers.Control.Panel,{initialize:function(options){OpenLayers.Control.Panel.prototype.initialize.apply(this,[options]);this.addControls([new OpenLayers.Control.ZoomIn(),new OpenLayers.Control.ZoomToMaxExtent(),new OpenLayers.Control.ZoomOut()]);},CLASS_NAME:"OpenLayers.Control.ZoomPanel"});OpenLayers.Format.JSON=OpenLayers.Class(OpenLayers.Format,{indent:"    ",space:" ",newline:"\n",level:0,pretty:false,initialize:function(options){OpenLayers.Format.prototype.initialize.apply(this,[options]);},read:function(json,filter){try{if(/^[\],:{}\s]*$/.test(json.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){var object=eval('('+json+')');if(typeof filter==='function'){function walk(k,v){if(v&&typeof v==='object'){for(var i in v){if(v.hasOwnProperty(i)){v[i]=walk(i,v[i]);}}}
return filter(k,v);}
object=walk('',object);}
if(this.keepData){this.data=object;}
return object;}}catch(e){}
return null;},write:function(value,pretty){this.pretty=!!pretty;var json=null;var type=typeof value;if(this.serialize[type]){try{json=this.serialize[type].apply(this,[value]);}catch(err){OpenLayers.Console.error("Trouble serializing: "+err);}}
return json;},writeIndent:function(){var pieces=[];if(this.pretty){for(var i=0;i<this.level;++i){pieces.push(this.indent);}}
return pieces.join('');},writeNewline:function(){return(this.pretty)?this.newline:'';},writeSpace:function(){return(this.pretty)?this.space:'';},serialize:{'object':function(object){if(object==null){return"null";}
if(object.constructor==Date){return this.serialize.date.apply(this,[object]);}
if(object.constructor==Array){return this.serialize.array.apply(this,[object]);}
var pieces=['{'];this.level+=1;var key,keyJSON,valueJSON;var addComma=false;for(key in object){if(object.hasOwnProperty(key)){keyJSON=OpenLayers.Format.JSON.prototype.write.apply(this,[key,this.pretty]);valueJSON=OpenLayers.Format.JSON.prototype.write.apply(this,[object[key],this.pretty]);if(keyJSON!=null&&valueJSON!=null){if(addComma){pieces.push(',');}
pieces.push(this.writeNewline(),this.writeIndent(),keyJSON,':',this.writeSpace(),valueJSON);addComma=true;}}}
this.level-=1;pieces.push(this.writeNewline(),this.writeIndent(),'}');return pieces.join('');},'array':function(array){var json;var pieces=['['];this.level+=1;for(var i=0,len=array.length;i<len;++i){json=OpenLayers.Format.JSON.prototype.write.apply(this,[array[i],this.pretty]);if(json!=null){if(i>0){pieces.push(',');}
pieces.push(this.writeNewline(),this.writeIndent(),json);}}
this.level-=1;pieces.push(this.writeNewline(),this.writeIndent(),']');return pieces.join('');},'string':function(string){var m={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};if(/["\\\x00-\x1f]/.test(string)){return'"'+string.replace(/([\x00-\x1f\\"])/g,function(a,b){var c=m[b];if(c){return c;}
c=b.charCodeAt();return'\\u00'+
Math.floor(c/16).toString(16)+
(c%16).toString(16);})+'"';}
return'"'+string+'"';},'number':function(number){return isFinite(number)?String(number):"null";},'boolean':function(bool){return String(bool);},'date':function(date){function format(number){return(number<10)?'0'+number:number;}
return'"'+date.getFullYear()+'-'+
format(date.getMonth()+1)+'-'+
format(date.getDate())+'T'+
format(date.getHours())+':'+
format(date.getMinutes())+':'+
format(date.getSeconds())+'"';}},CLASS_NAME:"OpenLayers.Format.JSON"});OpenLayers.Format.XML=OpenLayers.Class(OpenLayers.Format,{namespaces:null,namespaceAlias:null,defaultPrefix:null,readers:{},writers:{},xmldom:null,initialize:function(options){if(window.ActiveXObject){this.xmldom=new ActiveXObject("Microsoft.XMLDOM");}
OpenLayers.Format.prototype.initialize.apply(this,[options]);this.namespaces=OpenLayers.Util.extend({},this.namespaces);this.namespaceAlias={};for(var alias in this.namespaces){this.namespaceAlias[this.namespaces[alias]]=alias;}},destroy:function(){this.xmldom=null;OpenLayers.Format.prototype.destroy.apply(this,arguments);},setNamespace:function(alias,uri){this.namespaces[alias]=uri;this.namespaceAlias[uri]=alias;},read:function(text){var index=text.indexOf('<');if(index>0){text=text.substring(index);}
var node=OpenLayers.Util.Try(OpenLayers.Function.bind((function(){var xmldom;if(window.ActiveXObject&&!this.xmldom){xmldom=new ActiveXObject("Microsoft.XMLDOM");}else{xmldom=this.xmldom;}
xmldom.loadXML(text);return xmldom;}),this),function(){return new DOMParser().parseFromString(text,'text/xml');},function(){var req=new XMLHttpRequest();req.open("GET","data:"+"text/xml"+";charset=utf-8,"+encodeURIComponent(text),false);if(req.overrideMimeType){req.overrideMimeType("text/xml");}
req.send(null);return req.responseXML;});if(this.keepData){this.data=node;}
return node;},write:function(node){var data;if(this.xmldom){data=node.xml;}else{var serializer=new XMLSerializer();if(node.nodeType==1){var doc=document.implementation.createDocument("","",null);if(doc.importNode){node=doc.importNode(node,true);}
doc.appendChild(node);data=serializer.serializeToString(doc);}else{data=serializer.serializeToString(node);}}
return data;},createElementNS:function(uri,name){var element;if(this.xmldom){if(typeof uri=="string"){element=this.xmldom.createNode(1,name,uri);}else{element=this.xmldom.createNode(1,name,"");}}else{element=document.createElementNS(uri,name);}
return element;},createTextNode:function(text){var node;if(typeof text!=="string"){text=String(text);}
if(this.xmldom){node=this.xmldom.createTextNode(text);}else{node=document.createTextNode(text);}
return node;},getElementsByTagNameNS:function(node,uri,name){var elements=[];if(node.getElementsByTagNameNS){elements=node.getElementsByTagNameNS(uri,name);}else{var allNodes=node.getElementsByTagName("*");var potentialNode,fullName;for(var i=0,len=allNodes.length;i<len;++i){potentialNode=allNodes[i];fullName=(potentialNode.prefix)?(potentialNode.prefix+":"+name):name;if((name=="*")||(fullName==potentialNode.nodeName)){if((uri=="*")||(uri==potentialNode.namespaceURI)){elements.push(potentialNode);}}}}
return elements;},getAttributeNodeNS:function(node,uri,name){var attributeNode=null;if(node.getAttributeNodeNS){attributeNode=node.getAttributeNodeNS(uri,name);}else{var attributes=node.attributes;var potentialNode,fullName;for(var i=0,len=attributes.length;i<len;++i){potentialNode=attributes[i];if(potentialNode.namespaceURI==uri){fullName=(potentialNode.prefix)?(potentialNode.prefix+":"+name):name;if(fullName==potentialNode.nodeName){attributeNode=potentialNode;break;}}}}
return attributeNode;},getAttributeNS:function(node,uri,name){var attributeValue="";if(node.getAttributeNS){attributeValue=node.getAttributeNS(uri,name)||"";}else{var attributeNode=this.getAttributeNodeNS(node,uri,name);if(attributeNode){attributeValue=attributeNode.nodeValue;}}
return attributeValue;},getChildValue:function(node,def){var value=def||"";if(node){for(var child=node.firstChild;child;child=child.nextSibling){switch(child.nodeType){case 3:case 4:value+=child.nodeValue;}}}
return value;},concatChildValues:function(node,def){var value="";var child=node.firstChild;var childValue;while(child){childValue=child.nodeValue;if(childValue){value+=childValue;}
child=child.nextSibling;}
if(value==""&&def!=undefined){value=def;}
return value;},isSimpleContent:function(node){var simple=true;for(var child=node.firstChild;child;child=child.nextSibling){if(child.nodeType===1){simple=false;break;}}
return simple;},contentType:function(node){var simple=false,complex=false;var type=OpenLayers.Format.XML.CONTENT_TYPE.EMPTY;for(var child=node.firstChild;child;child=child.nextSibling){switch(child.nodeType){case 1:complex=true;break;case 8:break;default:simple=true;}
if(complex&&simple){break;}}
if(complex&&simple){type=OpenLayers.Format.XML.CONTENT_TYPE.MIXED;}else if(complex){return OpenLayers.Format.XML.CONTENT_TYPE.COMPLEX;}else if(simple){return OpenLayers.Format.XML.CONTENT_TYPE.SIMPLE;}
return type;},hasAttributeNS:function(node,uri,name){var found=false;if(node.hasAttributeNS){found=node.hasAttributeNS(uri,name);}else{found=!!this.getAttributeNodeNS(node,uri,name);}
return found;},setAttributeNS:function(node,uri,name,value){if(node.setAttributeNS){node.setAttributeNS(uri,name,value);}else{if(this.xmldom){if(uri){var attribute=node.ownerDocument.createNode(2,name,uri);attribute.nodeValue=value;node.setAttributeNode(attribute);}else{node.setAttribute(name,value);}}else{throw"setAttributeNS not implemented";}}},createElementNSPlus:function(name,options){options=options||{};var uri=options.uri||this.namespaces[options.prefix];if(!uri){var loc=name.indexOf(":");uri=this.namespaces[name.substring(0,loc)];}
if(!uri){uri=this.namespaces[this.defaultPrefix];}
var node=this.createElementNS(uri,name);if(options.attributes){this.setAttributes(node,options.attributes);}
var value=options.value;if(value!=null){node.appendChild(this.createTextNode(value));}
return node;},setAttributes:function(node,obj){var value,uri;for(var name in obj){if(obj[name]!=null&&obj[name].toString){value=obj[name].toString();uri=this.namespaces[name.substring(0,name.indexOf(":"))]||null;this.setAttributeNS(node,uri,name,value);}}},readNode:function(node,obj){if(!obj){obj={};}
var group=this.readers[node.namespaceURI?this.namespaceAlias[node.namespaceURI]:this.defaultPrefix];if(group){var local=node.localName||node.nodeName.split(":").pop();var reader=group[local]||group["*"];if(reader){reader.apply(this,[node,obj]);}}
return obj;},readChildNodes:function(node,obj){if(!obj){obj={};}
var children=node.childNodes;var child;for(var i=0,len=children.length;i<len;++i){child=children[i];if(child.nodeType==1){this.readNode(child,obj);}}
return obj;},writeNode:function(name,obj,parent){var prefix,local;var split=name.indexOf(":");if(split>0){prefix=name.substring(0,split);local=name.substring(split+1);}else{if(parent){prefix=this.namespaceAlias[parent.namespaceURI];}else{prefix=this.defaultPrefix;}
local=name;}
var child=this.writers[prefix][local].apply(this,[obj]);if(parent){parent.appendChild(child);}
return child;},getChildEl:function(node,name,uri){return node&&this.getThisOrNextEl(node.firstChild,name,uri);},getNextEl:function(node,name,uri){return node&&this.getThisOrNextEl(node.nextSibling,name,uri);},getThisOrNextEl:function(node,name,uri){outer:for(var sibling=node;sibling;sibling=sibling.nextSibling){switch(sibling.nodeType){case 1:if((!name||name===(sibling.localName||sibling.nodeName.split(":").pop()))&&(!uri||uri===sibling.namespaceURI)){break outer;}
sibling=null;break outer;case 3:if(/^\s*$/.test(sibling.nodeValue)){break;}
case 4:case 6:case 12:case 10:case 11:sibling=null;break outer;}}
return sibling||null;},lookupNamespaceURI:function(node,prefix){var uri=null;if(node){if(node.lookupNamespaceURI){uri=node.lookupNamespaceURI(prefix);}else{outer:switch(node.nodeType){case 1:if(node.namespaceURI!==null&&node.prefix===prefix){uri=node.namespaceURI;break outer;}
var len=node.attributes.length;if(len){var attr;for(var i=0;i<len;++i){attr=node.attributes[i];if(attr.prefix==="xmlns"&&attr.name==="xmlns:"+prefix){uri=attr.value||null;break outer;}else if(attr.name==="xmlns"&&prefix===null){uri=attr.value||null;break outer;}}}
uri=this.lookupNamespaceURI(node.parentNode,prefix);break outer;case 2:uri=this.lookupNamespaceURI(node.ownerElement,prefix);break outer;case 9:uri=this.lookupNamespaceURI(node.documentElement,prefix);break outer;case 6:case 12:case 10:case 11:break outer;default:uri=this.lookupNamespaceURI(node.parentNode,prefix);break outer;}}}
return uri;},CLASS_NAME:"OpenLayers.Format.XML"});OpenLayers.Format.XML.CONTENT_TYPE={EMPTY:0,SIMPLE:1,COMPLEX:2,MIXED:3};OpenLayers.Format.XML.lookupNamespaceURI=OpenLayers.Function.bind(OpenLayers.Format.XML.prototype.lookupNamespaceURI,OpenLayers.Format.XML.prototype);OpenLayers.Handler=OpenLayers.Class({id:null,control:null,map:null,keyMask:null,active:false,evt:null,initialize:function(control,callbacks,options){OpenLayers.Util.extend(this,options);this.control=control;this.callbacks=callbacks;var map=this.map||control.map;if(map){this.setMap(map);}
this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");},setMap:function(map){this.map=map;},checkModifiers:function(evt){if(this.keyMask==null){return true;}
var keyModifiers=(evt.shiftKey?OpenLayers.Handler.MOD_SHIFT:0)|(evt.ctrlKey?OpenLayers.Handler.MOD_CTRL:0)|(evt.altKey?OpenLayers.Handler.MOD_ALT:0);return(keyModifiers==this.keyMask);},activate:function(){if(this.active){return false;}
var events=OpenLayers.Events.prototype.BROWSER_EVENTS;for(var i=0,len=events.length;i<len;i++){if(this[events[i]]){this.register(events[i],this[events[i]]);}}
this.active=true;return true;},deactivate:function(){if(!this.active){return false;}
var events=OpenLayers.Events.prototype.BROWSER_EVENTS;for(var i=0,len=events.length;i<len;i++){if(this[events[i]]){this.unregister(events[i],this[events[i]]);}}
this.active=false;return true;},callback:function(name,args){if(name&&this.callbacks[name]){this.callbacks[name].apply(this.control,args);}},register:function(name,method){this.map.events.registerPriority(name,this,method);this.map.events.registerPriority(name,this,this.setEvent);},unregister:function(name,method){this.map.events.unregister(name,this,method);this.map.events.unregister(name,this,this.setEvent);},setEvent:function(evt){this.evt=evt;return true;},destroy:function(){this.deactivate();this.control=this.map=null;},CLASS_NAME:"OpenLayers.Handler"});OpenLayers.Handler.MOD_NONE=0;OpenLayers.Handler.MOD_SHIFT=1;OpenLayers.Handler.MOD_CTRL=2;OpenLayers.Handler.MOD_ALT=4;OpenLayers.Map=OpenLayers.Class({Z_INDEX_BASE:{BaseLayer:100,Overlay:325,Feature:725,Popup:750,Control:1000},EVENT_TYPES:["preaddlayer","addlayer","removelayer","changelayer","movestart","move","moveend","zoomend","popupopen","popupclose","addmarker","removemarker","clearmarkers","mouseover","mouseout","mousemove","dragstart","drag","dragend","changebaselayer"],id:null,fractionalZoom:false,events:null,allOverlays:false,div:null,dragging:false,size:null,viewPortDiv:null,layerContainerOrigin:null,layerContainerDiv:null,layers:null,controls:null,popups:null,baseLayer:null,center:null,resolution:null,zoom:0,panRatio:1.5,viewRequestID:0,tileSize:null,projection:"EPSG:4326",units:'degrees',resolutions:null,maxResolution:1.40625,minResolution:null,maxScale:null,minScale:null,maxExtent:null,minExtent:null,restrictedExtent:null,numZoomLevels:16,theme:null,displayProjection:null,fallThrough:true,panTween:null,eventListeners:null,panMethod:OpenLayers.Easing.Expo.easeOut,panDuration:50,paddingForPopups:null,initialize:function(div,options){if(arguments.length===1&&typeof div==="object"){options=div;div=options&&options.div;}
this.tileSize=new OpenLayers.Size(OpenLayers.Map.TILE_WIDTH,OpenLayers.Map.TILE_HEIGHT);this.maxExtent=new OpenLayers.Bounds(-180,-90,180,90);this.paddingForPopups=new OpenLayers.Bounds(15,15,15,15);this.theme=OpenLayers._getScriptLocation()+'theme/default/style.css';OpenLayers.Util.extend(this,options);this.layers=[];this.id=OpenLayers.Util.createUniqueID("OpenLayers.Map_");this.div=OpenLayers.Util.getElement(div);if(!this.div){this.div=document.createElement("div");this.div.style.height="1px";this.div.style.width="1px";}
OpenLayers.Element.addClass(this.div,'olMap');var id=this.id+"_OpenLayers_ViewPort";this.viewPortDiv=OpenLayers.Util.createDiv(id,null,null,null,"relative",null,"hidden");this.viewPortDiv.style.width="100%";this.viewPortDiv.style.height="100%";this.viewPortDiv.className="olMapViewport";this.div.appendChild(this.viewPortDiv);id=this.id+"_OpenLayers_Container";this.layerContainerDiv=OpenLayers.Util.createDiv(id);this.layerContainerDiv.style.zIndex=this.Z_INDEX_BASE['Popup']-1;this.viewPortDiv.appendChild(this.layerContainerDiv);this.events=new OpenLayers.Events(this,this.viewPortDiv,this.EVENT_TYPES,this.fallThrough,{includeXY:true});this.updateSize();if(this.eventListeners instanceof Object){this.events.on(this.eventListeners);}
this.events.register("movestart",this,this.updateSize);if(OpenLayers.String.contains(navigator.appName,"Microsoft")){this.events.register("resize",this,this.updateSize);}else{this.updateSizeDestroy=OpenLayers.Function.bind(this.updateSize,this);OpenLayers.Event.observe(window,'resize',this.updateSizeDestroy);}
if(this.theme){var addNode=true;var nodes=document.getElementsByTagName('link');for(var i=0,len=nodes.length;i<len;++i){if(OpenLayers.Util.isEquivalentUrl(nodes.item(i).href,this.theme)){addNode=false;break;}}
if(addNode){var cssNode=document.createElement('link');cssNode.setAttribute('rel','stylesheet');cssNode.setAttribute('type','text/css');cssNode.setAttribute('href',this.theme);document.getElementsByTagName('head')[0].appendChild(cssNode);}}
if(this.controls==null){if(OpenLayers.Control!=null){this.controls=[new OpenLayers.Control.Navigation(),new OpenLayers.Control.PanZoom(),new OpenLayers.Control.ArgParser(),new OpenLayers.Control.Attribution()];}else{this.controls=[];}}
for(var i=0,len=this.controls.length;i<len;i++){this.addControlToMap(this.controls[i]);}
this.popups=[];this.unloadDestroy=OpenLayers.Function.bind(this.destroy,this);OpenLayers.Event.observe(window,'unload',this.unloadDestroy);if(options&&options.layers){this.addLayers(options.layers);if(options.center){this.setCenter(options.center,options.zoom);}}},render:function(div){this.div=OpenLayers.Util.getElement(div);OpenLayers.Element.addClass(this.div,'olMap');this.viewPortDiv.parentNode.removeChild(this.viewPortDiv);this.div.appendChild(this.viewPortDiv);this.updateSize();},unloadDestroy:null,updateSizeDestroy:null,destroy:function(){if(!this.unloadDestroy){return false;}
if(this.panTween){this.panTween.stop();this.panTween=null;}
OpenLayers.Event.stopObserving(window,'unload',this.unloadDestroy);this.unloadDestroy=null;if(this.updateSizeDestroy){OpenLayers.Event.stopObserving(window,'resize',this.updateSizeDestroy);}else{this.events.unregister("resize",this,this.updateSize);}
this.paddingForPopups=null;if(this.controls!=null){for(var i=this.controls.length-1;i>=0;--i){this.controls[i].destroy();}
this.controls=null;}
if(this.layers!=null){for(var i=this.layers.length-1;i>=0;--i){this.layers[i].destroy(false);}
this.layers=null;}
if(this.viewPortDiv){this.div.removeChild(this.viewPortDiv);}
this.viewPortDiv=null;if(this.eventListeners){this.events.un(this.eventListeners);this.eventListeners=null;}
this.events.destroy();this.events=null;},setOptions:function(options){OpenLayers.Util.extend(this,options);},getTileSize:function(){return this.tileSize;},getBy:function(array,property,match){var test=(typeof match.test=="function");var found=OpenLayers.Array.filter(this[array],function(item){return item[property]==match||(test&&match.test(item[property]));});return found;},getLayersBy:function(property,match){return this.getBy("layers",property,match);},getLayersByName:function(match){return this.getLayersBy("name",match);},getLayersByClass:function(match){return this.getLayersBy("CLASS_NAME",match);},getControlsBy:function(property,match){return this.getBy("controls",property,match);},getControlsByClass:function(match){return this.getControlsBy("CLASS_NAME",match);},getLayer:function(id){var foundLayer=null;for(var i=0,len=this.layers.length;i<len;i++){var layer=this.layers[i];if(layer.id==id){foundLayer=layer;break;}}
return foundLayer;},setLayerZIndex:function(layer,zIdx){layer.setZIndex(this.Z_INDEX_BASE[layer.isBaseLayer?'BaseLayer':'Overlay']
+zIdx*5);},resetLayersZIndex:function(){for(var i=0,len=this.layers.length;i<len;i++){var layer=this.layers[i];this.setLayerZIndex(layer,i);}},addLayer:function(layer){for(var i=0,len=this.layers.length;i<len;i++){if(this.layers[i]==layer){var msg=OpenLayers.i18n('layerAlreadyAdded',{'layerName':layer.name});OpenLayers.Console.warn(msg);return false;}}
if(this.allOverlays){layer.isBaseLayer=false;}
if(this.events.triggerEvent("preaddlayer",{layer:layer})===false){return;}
layer.div.className="olLayerDiv";layer.div.style.overflow="";this.setLayerZIndex(layer,this.layers.length);if(layer.isFixed){this.viewPortDiv.appendChild(layer.div);}else{this.layerContainerDiv.appendChild(layer.div);}
this.layers.push(layer);layer.setMap(this);if(layer.isBaseLayer||(this.allOverlays&&!this.baseLayer)){if(this.baseLayer==null){this.setBaseLayer(layer);}else{layer.setVisibility(false);}}else{layer.redraw();}
this.events.triggerEvent("addlayer",{layer:layer});layer.afterAdd();},addLayers:function(layers){for(var i=0,len=layers.length;i<len;i++){this.addLayer(layers[i]);}},removeLayer:function(layer,setNewBaseLayer){if(setNewBaseLayer==null){setNewBaseLayer=true;}
if(layer.isFixed){this.viewPortDiv.removeChild(layer.div);}else{this.layerContainerDiv.removeChild(layer.div);}
OpenLayers.Util.removeItem(this.layers,layer);layer.removeMap(this);layer.map=null;if(this.baseLayer==layer){this.baseLayer=null;if(setNewBaseLayer){for(var i=0,len=this.layers.length;i<len;i++){var iLayer=this.layers[i];if(iLayer.isBaseLayer||this.allOverlays){this.setBaseLayer(iLayer);break;}}}}
this.resetLayersZIndex();this.events.triggerEvent("removelayer",{layer:layer});},getNumLayers:function(){return this.layers.length;},getLayerIndex:function(layer){return OpenLayers.Util.indexOf(this.layers,layer);},setLayerIndex:function(layer,idx){var base=this.getLayerIndex(layer);if(idx<0){idx=0;}else if(idx>this.layers.length){idx=this.layers.length;}
if(base!=idx){this.layers.splice(base,1);this.layers.splice(idx,0,layer);for(var i=0,len=this.layers.length;i<len;i++){this.setLayerZIndex(this.layers[i],i);}
this.events.triggerEvent("changelayer",{layer:layer,property:"order"});if(this.allOverlays){if(idx===0){this.setBaseLayer(layer);}else if(this.baseLayer!==this.layers[0]){this.setBaseLayer(this.layers[0]);}}}},raiseLayer:function(layer,delta){var idx=this.getLayerIndex(layer)+delta;this.setLayerIndex(layer,idx);},setBaseLayer:function(newBaseLayer){if(newBaseLayer!=this.baseLayer){if(OpenLayers.Util.indexOf(this.layers,newBaseLayer)!=-1){var center=this.getCenter();var newResolution=OpenLayers.Util.getResolutionFromScale(this.getScale(),newBaseLayer.units);if(this.baseLayer!=null&&!this.allOverlays){this.baseLayer.setVisibility(false);}
this.baseLayer=newBaseLayer;this.viewRequestID++;if(!this.allOverlays||this.baseLayer.visibility){this.baseLayer.setVisibility(true);}
if(center!=null){var newZoom=this.getZoomForResolution(newResolution||this.resolution,true);this.setCenter(center,newZoom,false,true);}
this.events.triggerEvent("changebaselayer",{layer:this.baseLayer});}}},addControl:function(control,px){this.controls.push(control);this.addControlToMap(control,px);},addControls:function(controls,pixels){var pxs=(arguments.length===1)?[]:pixels;for(var i=0,len=controls.length;i<len;i++){var ctrl=controls[i];var px=(pxs[i])?pxs[i]:null;this.addControl(ctrl,px);}},addControlToMap:function(control,px){control.outsideViewport=(control.div!=null);if(this.displayProjection&&!control.displayProjection){control.displayProjection=this.displayProjection;}
control.setMap(this);var div=control.draw(px);if(div){if(!control.outsideViewport){div.style.zIndex=this.Z_INDEX_BASE['Control']+
this.controls.length;this.viewPortDiv.appendChild(div);}}
if(control.autoActivate){control.activate();}},getControl:function(id){var returnControl=null;for(var i=0,len=this.controls.length;i<len;i++){var control=this.controls[i];if(control.id==id){returnControl=control;break;}}
return returnControl;},removeControl:function(control){if((control)&&(control==this.getControl(control.id))){if(control.div&&(control.div.parentNode==this.viewPortDiv)){this.viewPortDiv.removeChild(control.div);}
OpenLayers.Util.removeItem(this.controls,control);}},addPopup:function(popup,exclusive){if(exclusive){for(var i=this.popups.length-1;i>=0;--i){this.removePopup(this.popups[i]);}}
popup.map=this;this.popups.push(popup);var popupDiv=popup.draw();if(popupDiv){popupDiv.style.zIndex=this.Z_INDEX_BASE['Popup']+
this.popups.length;this.layerContainerDiv.appendChild(popupDiv);}},removePopup:function(popup){OpenLayers.Util.removeItem(this.popups,popup);if(popup.div){try{this.layerContainerDiv.removeChild(popup.div);}
catch(e){}}
popup.map=null;},getSize:function(){var size=null;if(this.size!=null){size=this.size.clone();}
return size;},updateSize:function(){var newSize=this.getCurrentSize();if(newSize&&!isNaN(newSize.h)&&!isNaN(newSize.w)){this.events.clearMouseCache();var oldSize=this.getSize();if(oldSize==null){this.size=oldSize=newSize;}
if(!newSize.equals(oldSize)){this.size=newSize;for(var i=0,len=this.layers.length;i<len;i++){this.layers[i].onMapResize();}
var center=this.getCenter();if(this.baseLayer!=null&&center!=null){var zoom=this.getZoom();this.zoom=null;this.setCenter(center,zoom);}}}},getCurrentSize:function(){var size=new OpenLayers.Size(this.div.clientWidth,this.div.clientHeight);if(size.w==0&&size.h==0||isNaN(size.w)&&isNaN(size.h)){size.w=this.div.offsetWidth;size.h=this.div.offsetHeight;}
if(size.w==0&&size.h==0||isNaN(size.w)&&isNaN(size.h)){size.w=parseInt(this.div.style.width);size.h=parseInt(this.div.style.height);}
return size;},calculateBounds:function(center,resolution){var extent=null;if(center==null){center=this.getCenter();}
if(resolution==null){resolution=this.getResolution();}
if((center!=null)&&(resolution!=null)){var size=this.getSize();var w_deg=size.w*resolution;var h_deg=size.h*resolution;extent=new OpenLayers.Bounds(center.lon-w_deg/2,center.lat-h_deg/2,center.lon+w_deg/2,center.lat+h_deg/2);}
return extent;},getCenter:function(){var center=null;if(this.center){center=this.center.clone();}
return center;},getZoom:function(){return this.zoom;},pan:function(dx,dy,options){options=OpenLayers.Util.applyDefaults(options,{animate:true,dragging:false});var centerPx=this.getViewPortPxFromLonLat(this.getCenter());var newCenterPx=centerPx.add(dx,dy);if(!options.dragging||!newCenterPx.equals(centerPx)){var newCenterLonLat=this.getLonLatFromViewPortPx(newCenterPx);if(options.animate){this.panTo(newCenterLonLat);}else{this.setCenter(newCenterLonLat,null,options.dragging);}}},panTo:function(lonlat){if(this.panMethod&&this.getExtent().scale(this.panRatio).containsLonLat(lonlat)){if(!this.panTween){this.panTween=new OpenLayers.Tween(this.panMethod);}
var center=this.getCenter();if(lonlat.lon==center.lon&&lonlat.lat==center.lat){return;}
var from={lon:center.lon,lat:center.lat};var to={lon:lonlat.lon,lat:lonlat.lat};this.panTween.start(from,to,this.panDuration,{callbacks:{start:OpenLayers.Function.bind(function(lonlat){this.events.triggerEvent("movestart");},this),eachStep:OpenLayers.Function.bind(function(lonlat){lonlat=new OpenLayers.LonLat(lonlat.lon,lonlat.lat);this.moveTo(lonlat,this.zoom,{'dragging':true,'noEvent':true});},this),done:OpenLayers.Function.bind(function(lonlat){lonlat=new OpenLayers.LonLat(lonlat.lon,lonlat.lat);this.moveTo(lonlat,this.zoom,{'noEvent':true});this.events.triggerEvent("moveend");},this)}});}else{this.setCenter(lonlat);}},setCenter:function(lonlat,zoom,dragging,forceZoomChange){this.moveTo(lonlat,zoom,{'dragging':dragging,'forceZoomChange':forceZoomChange,'caller':'setCenter'});},moveTo:function(lonlat,zoom,options){if(!options){options={};}
if(zoom!=null){zoom=parseFloat(zoom);if(!this.fractionalZoom){zoom=Math.round(zoom);}}
var dragging=options.dragging;var forceZoomChange=options.forceZoomChange;var noEvent=options.noEvent;if(this.panTween&&options.caller=="setCenter"){this.panTween.stop();}
if(!this.center&&!this.isValidLonLat(lonlat)){lonlat=this.maxExtent.getCenterLonLat();}
if(this.restrictedExtent!=null){if(lonlat==null){lonlat=this.getCenter();}
if(zoom==null){zoom=this.getZoom();}
var resolution=this.getResolutionForZoom(zoom);var extent=this.calculateBounds(lonlat,resolution);if(!this.restrictedExtent.containsBounds(extent)){var maxCenter=this.restrictedExtent.getCenterLonLat();if(extent.getWidth()>this.restrictedExtent.getWidth()){lonlat=new OpenLayers.LonLat(maxCenter.lon,lonlat.lat);}else if(extent.left<this.restrictedExtent.left){lonlat=lonlat.add(this.restrictedExtent.left-
extent.left,0);}else if(extent.right>this.restrictedExtent.right){lonlat=lonlat.add(this.restrictedExtent.right-
extent.right,0);}
if(extent.getHeight()>this.restrictedExtent.getHeight()){lonlat=new OpenLayers.LonLat(lonlat.lon,maxCenter.lat);}else if(extent.bottom<this.restrictedExtent.bottom){lonlat=lonlat.add(0,this.restrictedExtent.bottom-
extent.bottom);}
else if(extent.top>this.restrictedExtent.top){lonlat=lonlat.add(0,this.restrictedExtent.top-
extent.top);}}}
var zoomChanged=forceZoomChange||((this.isValidZoomLevel(zoom))&&(zoom!=this.getZoom()));var centerChanged=(this.isValidLonLat(lonlat))&&(!lonlat.equals(this.center));if(zoomChanged||centerChanged||!dragging){if(!this.dragging&&!noEvent){this.events.triggerEvent("movestart");}
if(centerChanged){if((!zoomChanged)&&(this.center)){this.centerLayerContainer(lonlat);}
this.center=lonlat.clone();}
if((zoomChanged)||(this.layerContainerOrigin==null)){this.layerContainerOrigin=this.center.clone();this.layerContainerDiv.style.left="0px";this.layerContainerDiv.style.top="0px";}
if(zoomChanged){this.zoom=zoom;this.resolution=this.getResolutionForZoom(zoom);this.viewRequestID++;}
var bounds=this.getExtent();if(this.baseLayer.visibility){this.baseLayer.moveTo(bounds,zoomChanged,dragging);if(dragging){this.baseLayer.events.triggerEvent("move");}else{this.baseLayer.events.triggerEvent("moveend",{"zoomChanged":zoomChanged});}}
bounds=this.baseLayer.getExtent();for(var i=0,len=this.layers.length;i<len;i++){var layer=this.layers[i];if(layer!==this.baseLayer&&!layer.isBaseLayer){var inRange=layer.calculateInRange();if(layer.inRange!=inRange){layer.inRange=inRange;if(!inRange){layer.display(false);}
this.events.triggerEvent("changelayer",{layer:layer,property:"visibility"});}
if(inRange&&layer.visibility){layer.moveTo(bounds,zoomChanged,dragging);if(dragging){layer.events.triggerEvent("move");}else{layer.events.triggerEvent("moveend",{"zoomChanged":zoomChanged});}}}}
if(zoomChanged){for(var i=0,len=this.popups.length;i<len;i++){this.popups[i].updatePosition();}}
this.events.triggerEvent("move");if(zoomChanged){this.events.triggerEvent("zoomend");}}
if(!dragging&&!noEvent){this.events.triggerEvent("moveend");}
this.dragging=!!dragging;},centerLayerContainer:function(lonlat){var originPx=this.getViewPortPxFromLonLat(this.layerContainerOrigin);var newPx=this.getViewPortPxFromLonLat(lonlat);if((originPx!=null)&&(newPx!=null)){this.layerContainerDiv.style.left=Math.round(originPx.x-newPx.x)+"px";this.layerContainerDiv.style.top=Math.round(originPx.y-newPx.y)+"px";}},isValidZoomLevel:function(zoomLevel){return((zoomLevel!=null)&&(zoomLevel>=0)&&(zoomLevel<this.getNumZoomLevels()));},isValidLonLat:function(lonlat){var valid=false;if(lonlat!=null){var maxExtent=this.getMaxExtent();valid=maxExtent.containsLonLat(lonlat);}
return valid;},getProjection:function(){var projection=this.getProjectionObject();return projection?projection.getCode():null;},getProjectionObject:function(){var projection=null;if(this.baseLayer!=null){projection=this.baseLayer.projection;}
return projection;},getMaxResolution:function(){var maxResolution=null;if(this.baseLayer!=null){maxResolution=this.baseLayer.maxResolution;}
return maxResolution;},getMaxExtent:function(options){var maxExtent=null;if(options&&options.restricted&&this.restrictedExtent){maxExtent=this.restrictedExtent;}else if(this.baseLayer!=null){maxExtent=this.baseLayer.maxExtent;}
return maxExtent;},getNumZoomLevels:function(){var numZoomLevels=null;if(this.baseLayer!=null){numZoomLevels=this.baseLayer.numZoomLevels;}
return numZoomLevels;},getExtent:function(){var extent=null;if(this.baseLayer!=null){extent=this.baseLayer.getExtent();}
return extent;},getResolution:function(){var resolution=null;if(this.baseLayer!=null){resolution=this.baseLayer.getResolution();}else if(this.allOverlays===true&&this.layers.length>0){resolution=this.layers[0].getResolution();}
return resolution;},getUnits:function(){var units=null;if(this.baseLayer!=null){units=this.baseLayer.units;}
return units;},getScale:function(){var scale=null;if(this.baseLayer!=null){var res=this.getResolution();var units=this.baseLayer.units;scale=OpenLayers.Util.getScaleFromResolution(res,units);}
return scale;},getZoomForExtent:function(bounds,closest){var zoom=null;if(this.baseLayer!=null){zoom=this.baseLayer.getZoomForExtent(bounds,closest);}
return zoom;},getResolutionForZoom:function(zoom){var resolution=null;if(this.baseLayer){resolution=this.baseLayer.getResolutionForZoom(zoom);}
return resolution;},getZoomForResolution:function(resolution,closest){var zoom=null;if(this.baseLayer!=null){zoom=this.baseLayer.getZoomForResolution(resolution,closest);}
return zoom;},zoomTo:function(zoom){if(this.isValidZoomLevel(zoom)){this.setCenter(null,zoom);}},zoomIn:function(){this.zoomTo(this.getZoom()+1);},zoomOut:function(){this.zoomTo(this.getZoom()-1);},zoomToExtent:function(bounds,closest){var center=bounds.getCenterLonLat();if(this.baseLayer.wrapDateLine){var maxExtent=this.getMaxExtent();bounds=bounds.clone();while(bounds.right<bounds.left){bounds.right+=maxExtent.getWidth();}
center=bounds.getCenterLonLat().wrapDateLine(maxExtent);}
this.setCenter(center,this.getZoomForExtent(bounds,closest));},zoomToMaxExtent:function(options){var restricted=(options)?options.restricted:true;var maxExtent=this.getMaxExtent({'restricted':restricted});this.zoomToExtent(maxExtent);},zoomToScale:function(scale,closest){var res=OpenLayers.Util.getResolutionFromScale(scale,this.baseLayer.units);var size=this.getSize();var w_deg=size.w*res;var h_deg=size.h*res;var center=this.getCenter();var extent=new OpenLayers.Bounds(center.lon-w_deg/2,center.lat-h_deg/2,center.lon+w_deg/2,center.lat+h_deg/2);this.zoomToExtent(extent,closest);},getLonLatFromViewPortPx:function(viewPortPx){var lonlat=null;if(this.baseLayer!=null){lonlat=this.baseLayer.getLonLatFromViewPortPx(viewPortPx);}
return lonlat;},getViewPortPxFromLonLat:function(lonlat){var px=null;if(this.baseLayer!=null){px=this.baseLayer.getViewPortPxFromLonLat(lonlat);}
return px;},getLonLatFromPixel:function(px){return this.getLonLatFromViewPortPx(px);},getPixelFromLonLat:function(lonlat){var px=this.getViewPortPxFromLonLat(lonlat);px.x=Math.round(px.x);px.y=Math.round(px.y);return px;},getGeodesicPixelSize:function(px){var lonlat=px?this.getLonLatFromPixel(px):(this.getCenter()||new OpenLayers.LonLat(0,0));var res=this.getResolution();var left=lonlat.add(-res/2,0);var right=lonlat.add(res/2,0);var bottom=lonlat.add(0,-res/2);var top=lonlat.add(0,res/2);var dest=new OpenLayers.Projection("EPSG:4326");var source=this.getProjectionObject()||dest;if(!source.equals(dest)){left.transform(source,dest);right.transform(source,dest);bottom.transform(source,dest);top.transform(source,dest);}
return new OpenLayers.Size(OpenLayers.Util.distVincenty(left,right),OpenLayers.Util.distVincenty(bottom,top));},getViewPortPxFromLayerPx:function(layerPx){var viewPortPx=null;if(layerPx!=null){var dX=parseInt(this.layerContainerDiv.style.left);var dY=parseInt(this.layerContainerDiv.style.top);viewPortPx=layerPx.add(dX,dY);}
return viewPortPx;},getLayerPxFromViewPortPx:function(viewPortPx){var layerPx=null;if(viewPortPx!=null){var dX=-parseInt(this.layerContainerDiv.style.left);var dY=-parseInt(this.layerContainerDiv.style.top);layerPx=viewPortPx.add(dX,dY);if(isNaN(layerPx.x)||isNaN(layerPx.y)){layerPx=null;}}
return layerPx;},getLonLatFromLayerPx:function(px){px=this.getViewPortPxFromLayerPx(px);return this.getLonLatFromViewPortPx(px);},getLayerPxFromLonLat:function(lonlat){var px=this.getPixelFromLonLat(lonlat);return this.getLayerPxFromViewPortPx(px);},CLASS_NAME:"OpenLayers.Map"});OpenLayers.Map.TILE_WIDTH=256;OpenLayers.Map.TILE_HEIGHT=256;OpenLayers.Marker=OpenLayers.Class({icon:null,lonlat:null,events:null,map:null,initialize:function(lonlat,icon){this.lonlat=lonlat;var newIcon=(icon)?icon:OpenLayers.Marker.defaultIcon();if(this.icon==null){this.icon=newIcon;}else{this.icon.url=newIcon.url;this.icon.size=newIcon.size;this.icon.offset=newIcon.offset;this.icon.calculateOffset=newIcon.calculateOffset;}
this.events=new OpenLayers.Events(this,this.icon.imageDiv,null);},destroy:function(){this.erase();this.map=null;this.events.destroy();this.events=null;if(this.icon!=null){this.icon.destroy();this.icon=null;}},draw:function(px){return this.icon.draw(px);},erase:function(){if(this.icon!=null){this.icon.erase();}},moveTo:function(px){if((px!=null)&&(this.icon!=null)){this.icon.moveTo(px);}
this.lonlat=this.map.getLonLatFromLayerPx(px);},isDrawn:function(){var isDrawn=(this.icon&&this.icon.isDrawn());return isDrawn;},onScreen:function(){var onScreen=false;if(this.map){var screenBounds=this.map.getExtent();onScreen=screenBounds.containsLonLat(this.lonlat);}
return onScreen;},inflate:function(inflate){if(this.icon){var newSize=new OpenLayers.Size(this.icon.size.w*inflate,this.icon.size.h*inflate);this.icon.setSize(newSize);}},setOpacity:function(opacity){this.icon.setOpacity(opacity);},setUrl:function(url){this.icon.setUrl(url);},display:function(display){this.icon.display(display);},CLASS_NAME:"OpenLayers.Marker"});OpenLayers.Marker.defaultIcon=function(){var url=OpenLayers.Util.getImagesLocation()+"marker.png";var size=new OpenLayers.Size(21,25);var calculateOffset=function(size){return new OpenLayers.Pixel(-(size.w/2),-size.h);};return new OpenLayers.Icon(url,size,null,calculateOffset);};OpenLayers.Request={DEFAULT_CONFIG:{method:"GET",url:window.location.href,async:true,user:undefined,password:undefined,params:null,proxy:OpenLayers.ProxyHost,headers:{},data:null,callback:function(){},success:null,failure:null,scope:null},events:new OpenLayers.Events(this,null,["complete","success","failure"]),issue:function(config){var defaultConfig=OpenLayers.Util.extend(this.DEFAULT_CONFIG,{proxy:OpenLayers.ProxyHost});config=OpenLayers.Util.applyDefaults(config,defaultConfig);var request=new OpenLayers.Request.XMLHttpRequest();var url=config.url;if(config.params){var paramString=OpenLayers.Util.getParameterString(config.params);if(paramString.length>0){var separator=(url.indexOf('?')>-1)?'&':'?';url+=separator+paramString;}}
if(config.proxy&&(url.indexOf("http")==0)){if(typeof config.proxy=="function"){url=config.proxy(url);}else{url=config.proxy+encodeURIComponent(url);}}
request.open(config.method,url,config.async,config.user,config.password);for(var header in config.headers){request.setRequestHeader(header,config.headers[header]);}
var events=this.events;var self=this;request.onreadystatechange=function(){if(request.readyState==OpenLayers.Request.XMLHttpRequest.DONE){var proceed=events.triggerEvent("complete",{request:request,config:config,requestUrl:url});if(proceed!==false){self.runCallbacks({request:request,config:config,requestUrl:url});}}};if(config.async===false){request.send(config.data);}else{window.setTimeout(function(){if(request._aborted!==true){request.send(config.data);}},0);}
return request;},runCallbacks:function(options){var request=options.request;var config=options.config;var complete=(config.scope)?OpenLayers.Function.bind(config.callback,config.scope):config.callback;var success;if(config.success){success=(config.scope)?OpenLayers.Function.bind(config.success,config.scope):config.success;}
var failure;if(config.failure){failure=(config.scope)?OpenLayers.Function.bind(config.failure,config.scope):config.failure;}
complete(request);if(!request.status||(request.status>=200&&request.status<300)){this.events.triggerEvent("success",options);if(success){success(request);}}
if(request.status&&(request.status<200||request.status>=300)){this.events.triggerEvent("failure",options);if(failure){failure(request);}}},GET:function(config){config=OpenLayers.Util.extend(config,{method:"GET"});return OpenLayers.Request.issue(config);},POST:function(config){config=OpenLayers.Util.extend(config,{method:"POST"});config.headers=config.headers?config.headers:{};if(!("CONTENT-TYPE"in OpenLayers.Util.upperCaseObject(config.headers))){config.headers["Content-Type"]="application/xml";}
return OpenLayers.Request.issue(config);},PUT:function(config){config=OpenLayers.Util.extend(config,{method:"PUT"});config.headers=config.headers?config.headers:{};if(!("CONTENT-TYPE"in OpenLayers.Util.upperCaseObject(config.headers))){config.headers["Content-Type"]="application/xml";}
return OpenLayers.Request.issue(config);},DELETE:function(config){config=OpenLayers.Util.extend(config,{method:"DELETE"});return OpenLayers.Request.issue(config);},HEAD:function(config){config=OpenLayers.Util.extend(config,{method:"HEAD"});return OpenLayers.Request.issue(config);},OPTIONS:function(config){config=OpenLayers.Util.extend(config,{method:"OPTIONS"});return OpenLayers.Request.issue(config);}};OpenLayers.Tile.Image=OpenLayers.Class(OpenLayers.Tile,{url:null,imgDiv:null,frame:null,layerAlphaHack:null,isBackBuffer:false,lastRatio:1,isFirstDraw:true,backBufferTile:null,maxGetUrlLength:null,initialize:function(layer,position,bounds,url,size,options){OpenLayers.Tile.prototype.initialize.apply(this,arguments);if(this.maxGetUrlLength!=null){OpenLayers.Util.extend(this,OpenLayers.Tile.Image.IFrame);}
this.url=url;this.frame=document.createElement('div');this.frame.style.overflow='hidden';this.frame.style.position='absolute';this.layerAlphaHack=this.layer.alpha&&OpenLayers.Util.alphaHack();},destroy:function(){if(this.imgDiv!=null){this.removeImgDiv();}
this.imgDiv=null;if((this.frame!=null)&&(this.frame.parentNode==this.layer.div)){this.layer.div.removeChild(this.frame);}
this.frame=null;if(this.backBufferTile){this.backBufferTile.destroy();this.backBufferTile=null;}
this.layer.events.unregister("loadend",this,this.resetBackBuffer);OpenLayers.Tile.prototype.destroy.apply(this,arguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Tile.Image(this.layer,this.position,this.bounds,this.url,this.size);}
obj=OpenLayers.Tile.prototype.clone.apply(this,[obj]);obj.imgDiv=null;return obj;},draw:function(){if(this.layer!=this.layer.map.baseLayer&&this.layer.reproject){this.bounds=this.getBoundsFromBaseLayer(this.position);}
var drawTile=OpenLayers.Tile.prototype.draw.apply(this,arguments);if((OpenLayers.Util.indexOf(this.layer.SUPPORTED_TRANSITIONS,this.layer.transitionEffect)!=-1)||this.layer.singleTile){if(drawTile){if(!this.backBufferTile){this.backBufferTile=this.clone();this.backBufferTile.hide();this.backBufferTile.isBackBuffer=true;this.events.register('loadend',this,this.resetBackBuffer);this.layer.events.register("loadend",this,this.resetBackBuffer);}
this.startTransition();}else{if(this.backBufferTile){this.backBufferTile.clear();}}}else{if(drawTile&&this.isFirstDraw){this.events.register('loadend',this,this.showTile);this.isFirstDraw=false;}}
if(!drawTile){return false;}
if(this.isLoading){this.events.triggerEvent("reload");}else{this.isLoading=true;this.events.triggerEvent("loadstart");}
return this.renderTile();},resetBackBuffer:function(){this.showTile();if(this.backBufferTile&&(this.isFirstDraw||!this.layer.numLoadingTiles)){this.isFirstDraw=false;var maxExtent=this.layer.maxExtent;var withinMaxExtent=(maxExtent&&this.bounds.intersectsBounds(maxExtent,false));if(withinMaxExtent){this.backBufferTile.position=this.position;this.backBufferTile.bounds=this.bounds;this.backBufferTile.size=this.size;this.backBufferTile.imageSize=this.layer.getImageSize(this.bounds)||this.size;this.backBufferTile.imageOffset=this.layer.imageOffset;this.backBufferTile.resolution=this.layer.getResolution();this.backBufferTile.renderTile();}
this.backBufferTile.hide();}},renderTile:function(){if(this.layer.async){this.initImgDiv();this.layer.getURLasync(this.bounds,this,"url",this.positionImage);}else{this.url=this.layer.getURL(this.bounds);this.initImgDiv();this.positionImage();}
return true;},positionImage:function(){if(this.layer===null){return;}
OpenLayers.Util.modifyDOMElement(this.frame,null,this.position,this.size);var imageSize=this.layer.getImageSize(this.bounds);if(this.layerAlphaHack){OpenLayers.Util.modifyAlphaImageDiv(this.imgDiv,null,null,imageSize,this.url);}else{OpenLayers.Util.modifyDOMElement(this.imgDiv,null,null,imageSize);this.imgDiv.src=this.url;}},clear:function(){if(this.imgDiv){this.hide();if(OpenLayers.Tile.Image.useBlankTile){this.imgDiv.src=OpenLayers.Util.getImagesLocation()+"blank.gif";}}},initImgDiv:function(){if(this.imgDiv==null){var offset=this.layer.imageOffset;var size=this.layer.getImageSize(this.bounds);if(this.layerAlphaHack){this.imgDiv=OpenLayers.Util.createAlphaImageDiv(null,offset,size,null,"relative",null,null,null,true);}else{this.imgDiv=OpenLayers.Util.createImage(null,offset,size,null,"relative",null,null,true);}
if(this.layer.url instanceof Array){this.imgDiv.urls=this.layer.url.slice();}
this.imgDiv.className='olTileImage';this.frame.style.zIndex=this.isBackBuffer?0:1;this.frame.appendChild(this.imgDiv);this.layer.div.appendChild(this.frame);if(this.layer.opacity!=null){OpenLayers.Util.modifyDOMElement(this.imgDiv,null,null,null,null,null,null,this.layer.opacity);}
this.imgDiv.map=this.layer.map;var onload=function(){if(this.isLoading){this.isLoading=false;this.events.triggerEvent("loadend");}};if(this.layerAlphaHack){OpenLayers.Event.observe(this.imgDiv.childNodes[0],'load',OpenLayers.Function.bind(onload,this));}else{OpenLayers.Event.observe(this.imgDiv,'load',OpenLayers.Function.bind(onload,this));}
var onerror=function(){if(this.imgDiv._attempts>OpenLayers.IMAGE_RELOAD_ATTEMPTS){onload.call(this);}};OpenLayers.Event.observe(this.imgDiv,"error",OpenLayers.Function.bind(onerror,this));}
this.imgDiv.viewRequestID=this.layer.map.viewRequestID;},removeImgDiv:function(){OpenLayers.Event.stopObservingElement(this.imgDiv);if(this.imgDiv.parentNode==this.frame){this.frame.removeChild(this.imgDiv);this.imgDiv.map=null;}
this.imgDiv.urls=null;var child=this.imgDiv.firstChild;if(child){OpenLayers.Event.stopObservingElement(child);this.imgDiv.removeChild(child);delete child;}else{this.imgDiv.src=OpenLayers.Util.getImagesLocation()+"blank.gif";}},checkImgURL:function(){if(this.layer){var loaded=this.layerAlphaHack?this.imgDiv.firstChild.src:this.imgDiv.src;if(!OpenLayers.Util.isEquivalentUrl(loaded,this.url)){this.hide();}}},startTransition:function(){if(!this.backBufferTile||!this.backBufferTile.imgDiv){return;}
var ratio=1;if(this.backBufferTile.resolution){ratio=this.backBufferTile.resolution/this.layer.getResolution();}
if(ratio!=this.lastRatio){if(this.layer.transitionEffect=='resize'){var upperLeft=new OpenLayers.LonLat(this.backBufferTile.bounds.left,this.backBufferTile.bounds.top);var size=new OpenLayers.Size(this.backBufferTile.size.w*ratio,this.backBufferTile.size.h*ratio);var px=this.layer.map.getLayerPxFromLonLat(upperLeft);OpenLayers.Util.modifyDOMElement(this.backBufferTile.frame,null,px,size);var imageSize=this.backBufferTile.imageSize;imageSize=new OpenLayers.Size(imageSize.w*ratio,imageSize.h*ratio);var imageOffset=this.backBufferTile.imageOffset;if(imageOffset){imageOffset=new OpenLayers.Pixel(imageOffset.x*ratio,imageOffset.y*ratio);}
OpenLayers.Util.modifyDOMElement(this.backBufferTile.imgDiv,null,imageOffset,imageSize);this.backBufferTile.show();}}else{if(this.layer.singleTile){this.backBufferTile.show();}else{this.backBufferTile.hide();}}
this.lastRatio=ratio;},show:function(){this.frame.style.display='';if(OpenLayers.Util.indexOf(this.layer.SUPPORTED_TRANSITIONS,this.layer.transitionEffect)!=-1){if(OpenLayers.IS_GECKO===true){this.frame.scrollLeft=this.frame.scrollLeft;}}},hide:function(){this.frame.style.display='none';},CLASS_NAME:"OpenLayers.Tile.Image"});OpenLayers.Tile.Image.useBlankTile=(OpenLayers.BROWSER_NAME=="safari"||OpenLayers.BROWSER_NAME=="opera");OpenLayers.Feature=OpenLayers.Class({layer:null,id:null,lonlat:null,data:null,marker:null,popupClass:OpenLayers.Popup.AnchoredBubble,popup:null,initialize:function(layer,lonlat,data){this.layer=layer;this.lonlat=lonlat;this.data=(data!=null)?data:{};this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");},destroy:function(){if((this.layer!=null)&&(this.layer.map!=null)){if(this.popup!=null){this.layer.map.removePopup(this.popup);}}
if(this.layer!=null&&this.marker!=null){this.layer.removeMarker(this.marker);}
this.layer=null;this.id=null;this.lonlat=null;this.data=null;if(this.marker!=null){this.destroyMarker(this.marker);this.marker=null;}
if(this.popup!=null){this.destroyPopup(this.popup);this.popup=null;}},onScreen:function(){var onScreen=false;if((this.layer!=null)&&(this.layer.map!=null)){var screenBounds=this.layer.map.getExtent();onScreen=screenBounds.containsLonLat(this.lonlat);}
return onScreen;},createMarker:function(){if(this.lonlat!=null){this.marker=new OpenLayers.Marker(this.lonlat,this.data.icon);}
return this.marker;},destroyMarker:function(){this.marker.destroy();},createPopup:function(closeBox){if(this.lonlat!=null){var id=this.id+"_popup";var anchor=(this.marker)?this.marker.icon:null;if(!this.popup){this.popup=new this.popupClass(id,this.lonlat,this.data.popupSize,this.data.popupContentHTML,anchor,closeBox);}
if(this.data.overflow!=null){this.popup.contentDiv.style.overflow=this.data.overflow;}
this.popup.feature=this;}
return this.popup;},destroyPopup:function(){if(this.popup){this.popup.feature=null;this.popup.destroy();this.popup=null;}},CLASS_NAME:"OpenLayers.Feature"});OpenLayers.Handler.Click=OpenLayers.Class(OpenLayers.Handler,{delay:300,single:true,'double':false,pixelTolerance:0,stopSingle:false,stopDouble:false,timerId:null,down:null,rightclickTimerId:null,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);if(this.pixelTolerance!=null){this.mousedown=function(evt){this.down=evt.xy;return true;};}},mousedown:null,mouseup:function(evt){var propagate=true;if(this.checkModifiers(evt)&&this.control.handleRightClicks&&OpenLayers.Event.isRightClick(evt)){propagate=this.rightclick(evt);}
return propagate;},rightclick:function(evt){if(this.passesTolerance(evt)){if(this.rightclickTimerId!=null){this.clearTimer();this.callback('dblrightclick',[evt]);return!this.stopDouble;}else{var clickEvent=this['double']?OpenLayers.Util.extend({},evt):this.callback('rightclick',[evt]);var delayedRightCall=OpenLayers.Function.bind(this.delayedRightCall,this,clickEvent);this.rightclickTimerId=window.setTimeout(delayedRightCall,this.delay);}}
return!this.stopSingle;},delayedRightCall:function(evt){this.rightclickTimerId=null;if(evt){this.callback('rightclick',[evt]);}
return!this.stopSingle;},dblclick:function(evt){if(this.passesTolerance(evt)){if(this["double"]){this.callback('dblclick',[evt]);}
this.clearTimer();}
return!this.stopDouble;},click:function(evt){if(this.passesTolerance(evt)){if(this.timerId!=null){this.clearTimer();}else{var clickEvent=this.single?OpenLayers.Util.extend({},evt):null;this.timerId=window.setTimeout(OpenLayers.Function.bind(this.delayedCall,this,clickEvent),this.delay);}}
return!this.stopSingle;},passesTolerance:function(evt){var passes=true;if(this.pixelTolerance!=null&&this.down){var dpx=Math.sqrt(Math.pow(this.down.x-evt.xy.x,2)+
Math.pow(this.down.y-evt.xy.y,2));if(dpx>this.pixelTolerance){passes=false;}}
return passes;},clearTimer:function(){if(this.timerId!=null){window.clearTimeout(this.timerId);this.timerId=null;}
if(this.rightclickTimerId!=null){window.clearTimeout(this.rightclickTimerId);this.rightclickTimerId=null;}},delayedCall:function(evt){this.timerId=null;if(evt){this.callback('click',[evt]);}},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){this.clearTimer();this.down=null;deactivated=true;}
return deactivated;},CLASS_NAME:"OpenLayers.Handler.Click"});OpenLayers.Handler.Drag=OpenLayers.Class(OpenLayers.Handler,{started:false,stopDown:true,dragging:false,last:null,start:null,oldOnselectstart:null,interval:0,timeoutId:null,documentDrag:false,documentEvents:null,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);},down:function(evt){},move:function(evt){},up:function(evt){},out:function(evt){},mousedown:function(evt){var propagate=true;this.dragging=false;if(this.checkModifiers(evt)&&OpenLayers.Event.isLeftClick(evt)){this.started=true;this.start=evt.xy;this.last=evt.xy;OpenLayers.Element.addClass(this.map.viewPortDiv,"olDragDown");this.down(evt);this.callback("down",[evt.xy]);OpenLayers.Event.stop(evt);if(!this.oldOnselectstart){this.oldOnselectstart=(document.onselectstart)?document.onselectstart:OpenLayers.Function.True;}
document.onselectstart=OpenLayers.Function.False;propagate=!this.stopDown;}else{this.started=false;this.start=null;this.last=null;}
return propagate;},mousemove:function(evt){if(this.started&&!this.timeoutId&&(evt.xy.x!=this.last.x||evt.xy.y!=this.last.y)){if(this.documentDrag===true&&this.documentEvents){if(evt.element===document){this.adjustXY(evt);this.setEvent(evt);}else{this.destroyDocumentEvents();}}
if(this.interval>0){this.timeoutId=setTimeout(OpenLayers.Function.bind(this.removeTimeout,this),this.interval);}
this.dragging=true;this.move(evt);this.callback("move",[evt.xy]);if(!this.oldOnselectstart){this.oldOnselectstart=document.onselectstart;document.onselectstart=OpenLayers.Function.False;}
this.last=this.evt.xy;}
return true;},removeTimeout:function(){this.timeoutId=null;},mouseup:function(evt){if(this.started){if(this.documentDrag===true&&this.documentEvents){this.adjustXY(evt);this.destroyDocumentEvents();}
var dragged=(this.start!=this.last);this.started=false;this.dragging=false;OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDragDown");this.up(evt);this.callback("up",[evt.xy]);if(dragged){this.callback("done",[evt.xy]);}
document.onselectstart=this.oldOnselectstart;}
return true;},mouseout:function(evt){if(this.started&&OpenLayers.Util.mouseLeft(evt,this.map.div)){if(this.documentDrag===true){this.documentEvents=new OpenLayers.Events(this,document,null,null,{includeXY:true});this.documentEvents.on({mousemove:this.mousemove,mouseup:this.mouseup});OpenLayers.Element.addClass(document.body,"olDragDown");}else{var dragged=(this.start!=this.last);this.started=false;this.dragging=false;OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDragDown");this.out(evt);this.callback("out",[]);if(dragged){this.callback("done",[evt.xy]);}
if(document.onselectstart){document.onselectstart=this.oldOnselectstart;}}}
return true;},click:function(evt){return(this.start==this.last);},activate:function(){var activated=false;if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){this.dragging=false;activated=true;}
return activated;},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){this.started=false;this.dragging=false;this.start=null;this.last=null;deactivated=true;OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDragDown");}
return deactivated;},adjustXY:function(evt){var pos=OpenLayers.Util.pagePosition(this.map.viewPortDiv);evt.xy.x-=pos[0];evt.xy.y-=pos[1];},destroyDocumentEvents:function(){OpenLayers.Element.removeClass(document.body,"olDragDown");this.documentEvents.destroy();this.documentEvents=null;},CLASS_NAME:"OpenLayers.Handler.Drag"});OpenLayers.Handler.Feature=OpenLayers.Class(OpenLayers.Handler,{EVENTMAP:{'click':{'in':'click','out':'clickout'},'mousemove':{'in':'over','out':'out'},'dblclick':{'in':'dblclick','out':null},'mousedown':{'in':null,'out':null},'mouseup':{'in':null,'out':null}},feature:null,lastFeature:null,down:null,up:null,clickTolerance:4,geometryTypes:null,stopClick:true,stopDown:true,stopUp:false,initialize:function(control,layer,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,[control,callbacks,options]);this.layer=layer;},mousedown:function(evt){this.down=evt.xy;return this.handle(evt)?!this.stopDown:true;},mouseup:function(evt){this.up=evt.xy;return this.handle(evt)?!this.stopUp:true;},click:function(evt){return this.handle(evt)?!this.stopClick:true;},mousemove:function(evt){if(!this.callbacks['over']&&!this.callbacks['out']){return true;}
this.handle(evt);return true;},dblclick:function(evt){return!this.handle(evt);},geometryTypeMatches:function(feature){return this.geometryTypes==null||OpenLayers.Util.indexOf(this.geometryTypes,feature.geometry.CLASS_NAME)>-1;},handle:function(evt){if(this.feature&&!this.feature.layer){this.feature=null;}
var type=evt.type;var handled=false;var previouslyIn=!!(this.feature);var click=(type=="click"||type=="dblclick");this.feature=this.layer.getFeatureFromEvent(evt);if(this.feature&&!this.feature.layer){this.feature=null;}
if(this.lastFeature&&!this.lastFeature.layer){this.lastFeature=null;}
if(this.feature){var inNew=(this.feature!=this.lastFeature);if(this.geometryTypeMatches(this.feature)){if(previouslyIn&&inNew){if(this.lastFeature){this.triggerCallback(type,'out',[this.lastFeature]);}
this.triggerCallback(type,'in',[this.feature]);}else if(!previouslyIn||click){this.triggerCallback(type,'in',[this.feature]);}
this.lastFeature=this.feature;handled=true;}else{if(this.lastFeature&&(previouslyIn&&inNew||click)){this.triggerCallback(type,'out',[this.lastFeature]);}
this.feature=null;}}else{if(this.lastFeature&&(previouslyIn||click)){this.triggerCallback(type,'out',[this.lastFeature]);}}
return handled;},triggerCallback:function(type,mode,args){var key=this.EVENTMAP[type][mode];if(key){if(type=='click'&&this.up&&this.down){var dpx=Math.sqrt(Math.pow(this.up.x-this.down.x,2)+
Math.pow(this.up.y-this.down.y,2));if(dpx<=this.clickTolerance){this.callback(key,args);}}else{this.callback(key,args);}}},activate:function(){var activated=false;if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){this.moveLayerToTop();this.map.events.on({"removelayer":this.handleMapEvents,"changelayer":this.handleMapEvents,scope:this});activated=true;}
return activated;},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){this.moveLayerBack();this.feature=null;this.lastFeature=null;this.down=null;this.up=null;this.map.events.un({"removelayer":this.handleMapEvents,"changelayer":this.handleMapEvents,scope:this});deactivated=true;}
return deactivated;},handleMapEvents:function(evt){if(!evt.property||evt.property=="order"){this.moveLayerToTop();}},moveLayerToTop:function(){var index=Math.max(this.map.Z_INDEX_BASE['Feature']-1,this.layer.getZIndex())+1;this.layer.setZIndex(index);},moveLayerBack:function(){var index=this.layer.getZIndex()-1;if(index>=this.map.Z_INDEX_BASE['Feature']){this.layer.setZIndex(index);}else{this.map.setLayerZIndex(this.layer,this.map.getLayerIndex(this.layer));}},CLASS_NAME:"OpenLayers.Handler.Feature"});OpenLayers.Handler.Hover=OpenLayers.Class(OpenLayers.Handler,{delay:500,pixelTolerance:null,stopMove:false,px:null,timerId:null,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);},mousemove:function(evt){if(this.passesTolerance(evt.xy)){this.clearTimer();this.callback('move',[evt]);this.px=evt.xy;evt=OpenLayers.Util.extend({},evt);this.timerId=window.setTimeout(OpenLayers.Function.bind(this.delayedCall,this,evt),this.delay);}
return!this.stopMove;},mouseout:function(evt){if(OpenLayers.Util.mouseLeft(evt,this.map.div)){this.clearTimer();this.callback('move',[evt]);}
return true;},passesTolerance:function(px){var passes=true;if(this.pixelTolerance&&this.px){var dpx=Math.sqrt(Math.pow(this.px.x-px.x,2)+
Math.pow(this.px.y-px.y,2));if(dpx<this.pixelTolerance){passes=false;}}
return passes;},clearTimer:function(){if(this.timerId!=null){window.clearTimeout(this.timerId);this.timerId=null;}},delayedCall:function(evt){this.callback('pause',[evt]);},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){this.clearTimer();deactivated=true;}
return deactivated;},CLASS_NAME:"OpenLayers.Handler.Hover"});OpenLayers.Handler.Keyboard=OpenLayers.Class(OpenLayers.Handler,{KEY_EVENTS:["keydown","keyup"],eventListener:null,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);this.eventListener=OpenLayers.Function.bindAsEventListener(this.handleKeyEvent,this);},destroy:function(){this.deactivate();this.eventListener=null;OpenLayers.Handler.prototype.destroy.apply(this,arguments);},activate:function(){if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){for(var i=0,len=this.KEY_EVENTS.length;i<len;i++){OpenLayers.Event.observe(document,this.KEY_EVENTS[i],this.eventListener);}
return true;}else{return false;}},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){for(var i=0,len=this.KEY_EVENTS.length;i<len;i++){OpenLayers.Event.stopObserving(document,this.KEY_EVENTS[i],this.eventListener);}
deactivated=true;}
return deactivated;},handleKeyEvent:function(evt){if(this.checkModifiers(evt)){this.callback(evt.type,[evt]);}},CLASS_NAME:"OpenLayers.Handler.Keyboard"});OpenLayers.Handler.MouseWheel=OpenLayers.Class(OpenLayers.Handler,{wheelListener:null,mousePosition:null,interval:0,delta:0,cumulative:true,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);this.wheelListener=OpenLayers.Function.bindAsEventListener(this.onWheelEvent,this);},destroy:function(){OpenLayers.Handler.prototype.destroy.apply(this,arguments);this.wheelListener=null;},onWheelEvent:function(e){if(!this.map||!this.checkModifiers(e)){return;}
var overScrollableDiv=false;var overLayerDiv=false;var overMapDiv=false;var elem=OpenLayers.Event.element(e);while((elem!=null)&&!overMapDiv&&!overScrollableDiv){if(!overScrollableDiv){try{if(elem.currentStyle){overflow=elem.currentStyle["overflow"];}else{var style=document.defaultView.getComputedStyle(elem,null);var overflow=style.getPropertyValue("overflow");}
overScrollableDiv=(overflow&&(overflow=="auto")||(overflow=="scroll"));}catch(err){}}
if(!overLayerDiv){for(var i=0,len=this.map.layers.length;i<len;i++){if(elem==this.map.layers[i].div||elem==this.map.layers[i].pane){overLayerDiv=true;break;}}}
overMapDiv=(elem==this.map.div);elem=elem.parentNode;}
if(!overScrollableDiv&&overMapDiv){if(overLayerDiv){var delta=0;if(!e){e=window.event;}
if(e.wheelDelta){delta=e.wheelDelta/120;if(window.opera&&window.opera.version()<9.2){delta=-delta;}}else if(e.detail){delta=-e.detail/3;}
this.delta=this.delta+delta;if(this.interval){window.clearTimeout(this._timeoutId);this._timeoutId=window.setTimeout(OpenLayers.Function.bind(function(){this.wheelZoom(e);},this),this.interval);}else{this.wheelZoom(e);}}
OpenLayers.Event.stop(e);}},wheelZoom:function(e){var delta=this.delta;this.delta=0;if(delta){if(this.mousePosition){e.xy=this.mousePosition;}
if(!e.xy){e.xy=this.map.getPixelFromLonLat(this.map.getCenter());}
if(delta<0){this.callback("down",[e,this.cumulative?delta:-1]);}else{this.callback("up",[e,this.cumulative?delta:1]);}}},mousemove:function(evt){this.mousePosition=evt.xy;},activate:function(evt){if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){var wheelListener=this.wheelListener;OpenLayers.Event.observe(window,"DOMMouseScroll",wheelListener);OpenLayers.Event.observe(window,"mousewheel",wheelListener);OpenLayers.Event.observe(document,"mousewheel",wheelListener);return true;}else{return false;}},deactivate:function(evt){if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){var wheelListener=this.wheelListener;OpenLayers.Event.stopObserving(window,"DOMMouseScroll",wheelListener);OpenLayers.Event.stopObserving(window,"mousewheel",wheelListener);OpenLayers.Event.stopObserving(document,"mousewheel",wheelListener);return true;}else{return false;}},CLASS_NAME:"OpenLayers.Handler.MouseWheel"});OpenLayers.Layer=OpenLayers.Class({id:null,name:null,div:null,opacity:null,alwaysInRange:null,EVENT_TYPES:["loadstart","loadend","loadcancel","visibilitychanged","move","moveend"],RESOLUTION_PROPERTIES:['scales','resolutions','maxScale','minScale','maxResolution','minResolution','numZoomLevels','maxZoomLevel'],events:null,map:null,isBaseLayer:false,alpha:false,displayInLayerSwitcher:true,visibility:true,attribution:null,inRange:false,imageSize:null,imageOffset:null,options:null,eventListeners:null,gutter:0,projection:null,units:null,scales:null,resolutions:null,maxExtent:null,minExtent:null,maxResolution:null,minResolution:null,numZoomLevels:null,minScale:null,maxScale:null,displayOutsideMaxExtent:false,wrapDateLine:false,transitionEffect:null,SUPPORTED_TRANSITIONS:['resize'],metadata:{},initialize:function(name,options){this.addOptions(options);this.name=name;if(this.id==null){this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");this.div=OpenLayers.Util.createDiv(this.id);this.div.style.width="100%";this.div.style.height="100%";this.div.dir="ltr";this.events=new OpenLayers.Events(this,this.div,this.EVENT_TYPES);if(this.eventListeners instanceof Object){this.events.on(this.eventListeners);}}
if(this.wrapDateLine){this.displayOutsideMaxExtent=true;}},destroy:function(setNewBaseLayer){if(setNewBaseLayer==null){setNewBaseLayer=true;}
if(this.map!=null){this.map.removeLayer(this,setNewBaseLayer);}
this.projection=null;this.map=null;this.name=null;this.div=null;this.options=null;if(this.events){if(this.eventListeners){this.events.un(this.eventListeners);}
this.events.destroy();}
this.eventListeners=null;this.events=null;},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer(this.name,this.getOptions());}
OpenLayers.Util.applyDefaults(obj,this);obj.map=null;return obj;},getOptions:function(){var options={};for(var o in this.options){options[o]=this[o];}
return options;},setName:function(newName){if(newName!=this.name){this.name=newName;if(this.map!=null){this.map.events.triggerEvent("changelayer",{layer:this,property:"name"});}}},addOptions:function(newOptions){if(this.options==null){this.options={};}
OpenLayers.Util.extend(this.options,newOptions);OpenLayers.Util.extend(this,newOptions);if(typeof this.projection=="string"){this.projection=new OpenLayers.Projection(this.projection);}
if(this.projection&&this.projection.getUnits()){this.units=this.projection.getUnits();}
if(this.map){var properties=this.RESOLUTION_PROPERTIES.concat(["projection","units","minExtent","maxExtent"]);for(var o in newOptions){if(newOptions.hasOwnProperty(o)&&OpenLayers.Util.indexOf(properties,o)>=0){this.initResolutions();break;}}}},onMapResize:function(){},redraw:function(){var redrawn=false;if(this.map){this.inRange=this.calculateInRange();var extent=this.getExtent();if(extent&&this.inRange&&this.visibility){var zoomChanged=true;this.moveTo(extent,zoomChanged,false);this.events.triggerEvent("moveend",{"zoomChanged":zoomChanged});redrawn=true;}}
return redrawn;},moveTo:function(bounds,zoomChanged,dragging){var display=this.visibility;if(!this.isBaseLayer){display=display&&this.inRange;}
this.display(display);},setMap:function(map){if(this.map==null){this.map=map;this.maxExtent=this.maxExtent||this.map.maxExtent;this.minExtent=this.minExtent||this.map.minExtent;this.projection=this.projection||this.map.projection;if(typeof this.projection=="string"){this.projection=new OpenLayers.Projection(this.projection);}
this.units=this.projection.getUnits()||this.units||this.map.units;this.initResolutions();if(!this.isBaseLayer){this.inRange=this.calculateInRange();var show=((this.visibility)&&(this.inRange));this.div.style.display=show?"":"none";}
this.setTileSize();}},afterAdd:function(){},removeMap:function(map){},getImageSize:function(bounds){return(this.imageSize||this.tileSize);},setTileSize:function(size){var tileSize=(size)?size:((this.tileSize)?this.tileSize:this.map.getTileSize());this.tileSize=tileSize;if(this.gutter){this.imageOffset=new OpenLayers.Pixel(-this.gutter,-this.gutter);this.imageSize=new OpenLayers.Size(tileSize.w+(2*this.gutter),tileSize.h+(2*this.gutter));}},getVisibility:function(){return this.visibility;},setVisibility:function(visibility){if(visibility!=this.visibility){this.visibility=visibility;this.display(visibility);this.redraw();if(this.map!=null){this.map.events.triggerEvent("changelayer",{layer:this,property:"visibility"});}
this.events.triggerEvent("visibilitychanged");}},display:function(display){if(display!=(this.div.style.display!="none")){this.div.style.display=(display&&this.calculateInRange())?"block":"none";}},calculateInRange:function(){var inRange=false;if(this.alwaysInRange){inRange=true;}else{if(this.map){var resolution=this.map.getResolution();inRange=((resolution>=this.minResolution)&&(resolution<=this.maxResolution));}}
return inRange;},setIsBaseLayer:function(isBaseLayer){if(isBaseLayer!=this.isBaseLayer){this.isBaseLayer=isBaseLayer;if(this.map!=null){this.map.events.triggerEvent("changebaselayer",{layer:this});}}},initResolutions:function(){var i,len;var props={},alwaysInRange=true;for(i=0,len=this.RESOLUTION_PROPERTIES.length;i<len;i++){var p=this.RESOLUTION_PROPERTIES[i];props[p]=this.options[p];if(alwaysInRange&&this.options[p]){alwaysInRange=false;}}
if(this.alwaysInRange==null){this.alwaysInRange=alwaysInRange;}
if(props.resolutions==null){props.resolutions=this.resolutionsFromScales(props.scales);}
if(props.resolutions==null){props.resolutions=this.calculateResolutions(props);}
if(props.resolutions==null){for(i=0,len=this.RESOLUTION_PROPERTIES.length;i<len;i++){var p=this.RESOLUTION_PROPERTIES[i];props[p]=this.options[p]!=null?this.options[p]:this.map[p];}
if(props.resolutions==null){props.resolutions=this.resolutionsFromScales(props.scales);}
if(props.resolutions==null){props.resolutions=this.calculateResolutions(props);}}
var maxResolution;if(this.options.maxResolution&&this.options.maxResolution!=="auto"){maxResolution=this.options.maxResolution;}
if(this.options.minScale){maxResolution=OpenLayers.Util.getResolutionFromScale(this.options.minScale,this.units);}
var minResolution;if(this.options.minResolution&&this.options.minResolution!=="auto"){minResolution=this.options.minResolution;}
if(this.options.maxScale){minResolution=OpenLayers.Util.getResolutionFromScale(this.options.maxScale,this.units);}
if(props.resolutions){props.resolutions.sort(function(a,b){return(b-a);});if(!maxResolution){maxResolution=props.resolutions[0];}
if(!minResolution){var lastIdx=props.resolutions.length-1;minResolution=props.resolutions[lastIdx];}}
this.resolutions=props.resolutions;if(this.resolutions){len=this.resolutions.length;this.scales=new Array(len);for(i=0;i<len;i++){this.scales[i]=OpenLayers.Util.getScaleFromResolution(this.resolutions[i],this.units);}
this.numZoomLevels=len;}
this.minResolution=minResolution;if(minResolution){this.maxScale=OpenLayers.Util.getScaleFromResolution(minResolution,this.units);}
this.maxResolution=maxResolution;if(maxResolution){this.minScale=OpenLayers.Util.getScaleFromResolution(maxResolution,this.units);}},resolutionsFromScales:function(scales){if(scales==null){return;}
var resolutions,i,len;len=scales.length;resolutions=new Array(len);for(i=0;i<len;i++){resolutions[i]=OpenLayers.Util.getResolutionFromScale(scales[i],this.units);}
return resolutions;},calculateResolutions:function(props){var maxResolution=props.maxResolution;if(props.minScale!=null){maxResolution=OpenLayers.Util.getResolutionFromScale(props.minScale,this.units);}else if(maxResolution=="auto"&&this.maxExtent!=null){var viewSize=this.map.getSize();var wRes=this.maxExtent.getWidth()/viewSize.w;var hRes=this.maxExtent.getHeight()/viewSize.h;maxResolution=Math.max(wRes,hRes);}
var minResolution=props.minResolution;if(props.maxScale!=null){minResolution=OpenLayers.Util.getResolutionFromScale(props.maxScale,this.units);}else if(props.minResolution=="auto"&&this.minExtent!=null){var viewSize=this.map.getSize();var wRes=this.minExtent.getWidth()/viewSize.w;var hRes=this.minExtent.getHeight()/viewSize.h;minResolution=Math.max(wRes,hRes);}
var maxZoomLevel=props.maxZoomLevel;var numZoomLevels=props.numZoomLevels;if(typeof minResolution==="number"&&typeof maxResolution==="number"&&numZoomLevels===undefined){var ratio=maxResolution/minResolution;numZoomLevels=Math.floor(Math.log(ratio)/Math.log(2))+1;}else if(numZoomLevels===undefined&&maxZoomLevel!=null){numZoomLevels=maxZoomLevel+1;}
if(typeof numZoomLevels!=="number"||numZoomLevels<=0||(typeof maxResolution!=="number"&&typeof minResolution!=="number")){return;}
var resolutions=new Array(numZoomLevels);var base=2;if(typeof minResolution=="number"&&typeof maxResolution=="number"){base=Math.pow((maxResolution/minResolution),(1/(numZoomLevels-1)));}
var i;if(typeof maxResolution==="number"){for(i=0;i<numZoomLevels;i++){resolutions[i]=maxResolution/Math.pow(base,i);}}else{for(i=0;i<numZoomLevels;i++){resolutions[numZoomLevels-1-i]=minResolution*Math.pow(base,i);}}
return resolutions;},getResolution:function(){var zoom=this.map.getZoom();return this.getResolutionForZoom(zoom);},getExtent:function(){return this.map.calculateBounds();},getZoomForExtent:function(extent,closest){var viewSize=this.map.getSize();var idealResolution=Math.max(extent.getWidth()/viewSize.w,extent.getHeight()/viewSize.h);return this.getZoomForResolution(idealResolution,closest);},getDataExtent:function(){},getResolutionForZoom:function(zoom){zoom=Math.max(0,Math.min(zoom,this.resolutions.length-1));var resolution;if(this.map.fractionalZoom){var low=Math.floor(zoom);var high=Math.ceil(zoom);resolution=this.resolutions[low]-
((zoom-low)*(this.resolutions[low]-this.resolutions[high]));}else{resolution=this.resolutions[Math.round(zoom)];}
return resolution;},getZoomForResolution:function(resolution,closest){var zoom;if(this.map.fractionalZoom){var lowZoom=0;var highZoom=this.resolutions.length-1;var highRes=this.resolutions[lowZoom];var lowRes=this.resolutions[highZoom];var res;for(var i=0,len=this.resolutions.length;i<len;++i){res=this.resolutions[i];if(res>=resolution){highRes=res;lowZoom=i;}
if(res<=resolution){lowRes=res;highZoom=i;break;}}
var dRes=highRes-lowRes;if(dRes>0){zoom=lowZoom+((highRes-resolution)/dRes);}else{zoom=lowZoom;}}else{var diff;var minDiff=Number.POSITIVE_INFINITY;for(var i=0,len=this.resolutions.length;i<len;i++){if(closest){diff=Math.abs(this.resolutions[i]-resolution);if(diff>minDiff){break;}
minDiff=diff;}else{if(this.resolutions[i]<resolution){break;}}}
zoom=Math.max(0,i-1);}
return zoom;},getLonLatFromViewPortPx:function(viewPortPx){var lonlat=null;if(viewPortPx!=null){var size=this.map.getSize();var center=this.map.getCenter();if(center){var res=this.map.getResolution();var delta_x=viewPortPx.x-(size.w/2);var delta_y=viewPortPx.y-(size.h/2);lonlat=new OpenLayers.LonLat(center.lon+delta_x*res,center.lat-delta_y*res);if(this.wrapDateLine){lonlat=lonlat.wrapDateLine(this.maxExtent);}}}
return lonlat;},getViewPortPxFromLonLat:function(lonlat){var px=null;if(lonlat!=null){var resolution=this.map.getResolution();var extent=this.map.getExtent();px=new OpenLayers.Pixel((1/resolution*(lonlat.lon-extent.left)),(1/resolution*(extent.top-lonlat.lat)));}
return px;},setOpacity:function(opacity){if(opacity!=this.opacity){this.opacity=opacity;for(var i=0,len=this.div.childNodes.length;i<len;++i){var element=this.div.childNodes[i].firstChild;OpenLayers.Util.modifyDOMElement(element,null,null,null,null,null,null,opacity);}
if(this.map!=null){this.map.events.triggerEvent("changelayer",{layer:this,property:"opacity"});}}},getZIndex:function(){return this.div.style.zIndex;},setZIndex:function(zIndex){this.div.style.zIndex=zIndex;},adjustBounds:function(bounds){if(this.gutter){var mapGutter=this.gutter*this.map.getResolution();bounds=new OpenLayers.Bounds(bounds.left-mapGutter,bounds.bottom-mapGutter,bounds.right+mapGutter,bounds.top+mapGutter);}
if(this.wrapDateLine){var wrappingOptions={'rightTolerance':this.getResolution()};bounds=bounds.wrapDateLine(this.maxExtent,wrappingOptions);}
return bounds;},CLASS_NAME:"OpenLayers.Layer"});(function(){var oXMLHttpRequest=window.XMLHttpRequest;var bGecko=!!window.controllers,bIE=window.document.all&&!window.opera,bIE7=bIE&&window.navigator.userAgent.match(/MSIE ([\.0-9]+)/)&&RegExp.$1==7;function cXMLHttpRequest(){this._object=oXMLHttpRequest&&!bIE7?new oXMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");this._listeners=[];};if(bGecko&&oXMLHttpRequest.wrapped)
cXMLHttpRequest.wrapped=oXMLHttpRequest.wrapped;cXMLHttpRequest.UNSENT=0;cXMLHttpRequest.OPENED=1;cXMLHttpRequest.HEADERS_RECEIVED=2;cXMLHttpRequest.LOADING=3;cXMLHttpRequest.DONE=4;cXMLHttpRequest.prototype.readyState=cXMLHttpRequest.UNSENT;cXMLHttpRequest.prototype.responseText='';cXMLHttpRequest.prototype.responseXML=null;cXMLHttpRequest.prototype.status=0;cXMLHttpRequest.prototype.statusText='';cXMLHttpRequest.prototype.onreadystatechange=null;cXMLHttpRequest.onreadystatechange=null;cXMLHttpRequest.onopen=null;cXMLHttpRequest.onsend=null;cXMLHttpRequest.onabort=null;cXMLHttpRequest.prototype.open=function(sMethod,sUrl,bAsync,sUser,sPassword){delete this._headers;if(arguments.length<3)
bAsync=true;this._async=bAsync;var oRequest=this,nState=this.readyState,fOnUnload;if(bIE&&bAsync){fOnUnload=function(){if(nState!=cXMLHttpRequest.DONE){fCleanTransport(oRequest);oRequest.abort();}};window.attachEvent("onunload",fOnUnload);}
if(cXMLHttpRequest.onopen)
cXMLHttpRequest.onopen.apply(this,arguments);if(arguments.length>4)
this._object.open(sMethod,sUrl,bAsync,sUser,sPassword);else
if(arguments.length>3)
this._object.open(sMethod,sUrl,bAsync,sUser);else
this._object.open(sMethod,sUrl,bAsync);if(!bGecko&&!bIE){this.readyState=cXMLHttpRequest.OPENED;fReadyStateChange(this);}
this._object.onreadystatechange=function(){if(bGecko&&!bAsync)
return;oRequest.readyState=oRequest._object.readyState;fSynchronizeValues(oRequest);if(oRequest._aborted){oRequest.readyState=cXMLHttpRequest.UNSENT;return;}
if(oRequest.readyState==cXMLHttpRequest.DONE){fCleanTransport(oRequest);if(bIE&&bAsync)
window.detachEvent("onunload",fOnUnload);}
if(nState!=oRequest.readyState)
fReadyStateChange(oRequest);nState=oRequest.readyState;}};cXMLHttpRequest.prototype.send=function(vData){if(cXMLHttpRequest.onsend)
cXMLHttpRequest.onsend.apply(this,arguments);if(vData&&vData.nodeType){vData=window.XMLSerializer?new window.XMLSerializer().serializeToString(vData):vData.xml;if(!this._headers["Content-Type"])
this._object.setRequestHeader("Content-Type","application/xml");}
this._object.send(vData);if(bGecko&&!this._async){this.readyState=cXMLHttpRequest.OPENED;fSynchronizeValues(this);while(this.readyState<cXMLHttpRequest.DONE){this.readyState++;fReadyStateChange(this);if(this._aborted)
return;}}};cXMLHttpRequest.prototype.abort=function(){if(cXMLHttpRequest.onabort)
cXMLHttpRequest.onabort.apply(this,arguments);if(this.readyState>cXMLHttpRequest.UNSENT)
this._aborted=true;this._object.abort();fCleanTransport(this);};cXMLHttpRequest.prototype.getAllResponseHeaders=function(){return this._object.getAllResponseHeaders();};cXMLHttpRequest.prototype.getResponseHeader=function(sName){return this._object.getResponseHeader(sName);};cXMLHttpRequest.prototype.setRequestHeader=function(sName,sValue){if(!this._headers)
this._headers={};this._headers[sName]=sValue;return this._object.setRequestHeader(sName,sValue);};cXMLHttpRequest.prototype.addEventListener=function(sName,fHandler,bUseCapture){for(var nIndex=0,oListener;oListener=this._listeners[nIndex];nIndex++)
if(oListener[0]==sName&&oListener[1]==fHandler&&oListener[2]==bUseCapture)
return;this._listeners.push([sName,fHandler,bUseCapture]);};cXMLHttpRequest.prototype.removeEventListener=function(sName,fHandler,bUseCapture){for(var nIndex=0,oListener;oListener=this._listeners[nIndex];nIndex++)
if(oListener[0]==sName&&oListener[1]==fHandler&&oListener[2]==bUseCapture)
break;if(oListener)
this._listeners.splice(nIndex,1);};cXMLHttpRequest.prototype.dispatchEvent=function(oEvent){var oEventPseudo={'type':oEvent.type,'target':this,'currentTarget':this,'eventPhase':2,'bubbles':oEvent.bubbles,'cancelable':oEvent.cancelable,'timeStamp':oEvent.timeStamp,'stopPropagation':function(){},'preventDefault':function(){},'initEvent':function(){}};if(oEventPseudo.type=="readystatechange"&&this.onreadystatechange)
(this.onreadystatechange.handleEvent||this.onreadystatechange).apply(this,[oEventPseudo]);for(var nIndex=0,oListener;oListener=this._listeners[nIndex];nIndex++)
if(oListener[0]==oEventPseudo.type&&!oListener[2])
(oListener[1].handleEvent||oListener[1]).apply(this,[oEventPseudo]);};cXMLHttpRequest.prototype.toString=function(){return'['+"object"+' '+"XMLHttpRequest"+']';};cXMLHttpRequest.toString=function(){return'['+"XMLHttpRequest"+']';};function fReadyStateChange(oRequest){if(cXMLHttpRequest.onreadystatechange)
cXMLHttpRequest.onreadystatechange.apply(oRequest);oRequest.dispatchEvent({'type':"readystatechange",'bubbles':false,'cancelable':false,'timeStamp':new Date+0});};function fGetDocument(oRequest){var oDocument=oRequest.responseXML,sResponse=oRequest.responseText;if(bIE&&sResponse&&oDocument&&!oDocument.documentElement&&oRequest.getResponseHeader("Content-Type").match(/[^\/]+\/[^\+]+\+xml/)){oDocument=new window.ActiveXObject("Microsoft.XMLDOM");oDocument.async=false;oDocument.validateOnParse=false;oDocument.loadXML(sResponse);}
if(oDocument)
if((bIE&&oDocument.parseError!=0)||!oDocument.documentElement||(oDocument.documentElement&&oDocument.documentElement.tagName=="parsererror"))
return null;return oDocument;};function fSynchronizeValues(oRequest){try{oRequest.responseText=oRequest._object.responseText;}catch(e){}
try{oRequest.responseXML=fGetDocument(oRequest._object);}catch(e){}
try{oRequest.status=oRequest._object.status;}catch(e){}
try{oRequest.statusText=oRequest._object.statusText;}catch(e){}};function fCleanTransport(oRequest){oRequest._object.onreadystatechange=new window.Function;};if(!window.Function.prototype.apply){window.Function.prototype.apply=function(oRequest,oArguments){if(!oArguments)
oArguments=[];oRequest.__func=this;oRequest.__func(oArguments[0],oArguments[1],oArguments[2],oArguments[3],oArguments[4]);delete oRequest.__func;};};OpenLayers.Request.XMLHttpRequest=cXMLHttpRequest;})();OpenLayers.Control.DragPan=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_TOOL,panned:false,interval:25,documentDrag:false,draw:function(){this.handler=new OpenLayers.Handler.Drag(this,{"move":this.panMap,"done":this.panMapDone},{interval:this.interval,documentDrag:this.documentDrag});},panMap:function(xy){this.panned=true;this.map.pan(this.handler.last.x-xy.x,this.handler.last.y-xy.y,{dragging:this.handler.dragging,animate:false});},panMapDone:function(xy){if(this.panned){this.panMap(xy);this.panned=false;}},CLASS_NAME:"OpenLayers.Control.DragPan"});OpenLayers.Control.KeyboardDefaults=OpenLayers.Class(OpenLayers.Control,{autoActivate:true,slideFactor:75,initialize:function(){OpenLayers.Control.prototype.initialize.apply(this,arguments);},destroy:function(){if(this.handler){this.handler.destroy();}
this.handler=null;OpenLayers.Control.prototype.destroy.apply(this,arguments);},draw:function(){this.handler=new OpenLayers.Handler.Keyboard(this,{"keydown":this.defaultKeyPress});},defaultKeyPress:function(evt){switch(evt.keyCode){case OpenLayers.Event.KEY_LEFT:this.map.pan(-this.slideFactor,0);break;case OpenLayers.Event.KEY_RIGHT:this.map.pan(this.slideFactor,0);break;case OpenLayers.Event.KEY_UP:this.map.pan(0,-this.slideFactor);break;case OpenLayers.Event.KEY_DOWN:this.map.pan(0,this.slideFactor);break;case 33:var size=this.map.getSize();this.map.pan(0,-0.75*size.h);break;case 34:var size=this.map.getSize();this.map.pan(0,0.75*size.h);break;case 35:var size=this.map.getSize();this.map.pan(0.75*size.w,0);break;case 36:var size=this.map.getSize();this.map.pan(-0.75*size.w,0);break;case 43:case 61:case 187:case 107:this.map.zoomIn();break;case 45:case 109:case 189:case 95:this.map.zoomOut();break;}},CLASS_NAME:"OpenLayers.Control.KeyboardDefaults"});OpenLayers.State={UNKNOWN:'Unknown',INSERT:'Insert',UPDATE:'Update',DELETE:'Delete'};OpenLayers.Feature.Vector=OpenLayers.Class(OpenLayers.Feature,{fid:null,geometry:null,attributes:null,bounds:null,state:null,style:null,url:null,renderIntent:"default",initialize:function(geometry,attributes,style){OpenLayers.Feature.prototype.initialize.apply(this,[null,null,attributes]);this.lonlat=null;this.geometry=geometry?geometry:null;this.state=null;this.attributes={};if(attributes){this.attributes=OpenLayers.Util.extend(this.attributes,attributes);}
this.style=style?style:null;},destroy:function(){if(this.layer){this.layer.removeFeatures(this);this.layer=null;}
this.geometry=null;OpenLayers.Feature.prototype.destroy.apply(this,arguments);},clone:function(){return new OpenLayers.Feature.Vector(this.geometry?this.geometry.clone():null,this.attributes,this.style);},onScreen:function(boundsOnly){var onScreen=false;if(this.layer&&this.layer.map){var screenBounds=this.layer.map.getExtent();if(boundsOnly){var featureBounds=this.geometry.getBounds();onScreen=screenBounds.intersectsBounds(featureBounds);}else{var screenPoly=screenBounds.toGeometry();onScreen=screenPoly.intersects(this.geometry);}}
return onScreen;},getVisibility:function(){return!(this.style&&this.style.display=='none'||!this.layer||this.layer&&this.layer.styleMap&&this.layer.styleMap.createSymbolizer(this,this.renderIntent).display=='none'||this.layer&&!this.layer.getVisibility());},createMarker:function(){return null;},destroyMarker:function(){},createPopup:function(){return null;},atPoint:function(lonlat,toleranceLon,toleranceLat){var atPoint=false;if(this.geometry){atPoint=this.geometry.atPoint(lonlat,toleranceLon,toleranceLat);}
return atPoint;},destroyPopup:function(){},move:function(location){if(!this.layer||!this.geometry.move){return;}
var pixel;if(location.CLASS_NAME=="OpenLayers.LonLat"){pixel=this.layer.getViewPortPxFromLonLat(location);}else{pixel=location;}
var lastPixel=this.layer.getViewPortPxFromLonLat(this.geometry.getBounds().getCenterLonLat());var res=this.layer.map.getResolution();this.geometry.move(res*(pixel.x-lastPixel.x),res*(lastPixel.y-pixel.y));this.layer.drawFeature(this);return lastPixel;},toState:function(state){if(state==OpenLayers.State.UPDATE){switch(this.state){case OpenLayers.State.UNKNOWN:case OpenLayers.State.DELETE:this.state=state;break;case OpenLayers.State.UPDATE:case OpenLayers.State.INSERT:break;}}else if(state==OpenLayers.State.INSERT){switch(this.state){case OpenLayers.State.UNKNOWN:break;default:this.state=state;break;}}else if(state==OpenLayers.State.DELETE){switch(this.state){case OpenLayers.State.INSERT:break;case OpenLayers.State.DELETE:break;case OpenLayers.State.UNKNOWN:case OpenLayers.State.UPDATE:this.state=state;break;}}else if(state==OpenLayers.State.UNKNOWN){this.state=state;}},CLASS_NAME:"OpenLayers.Feature.Vector"});OpenLayers.Feature.Vector.style={'default':{fillColor:"#ee9900",fillOpacity:0.4,hoverFillColor:"white",hoverFillOpacity:0.8,strokeColor:"#ee9900",strokeOpacity:1,strokeWidth:1,strokeLinecap:"round",strokeDashstyle:"solid",hoverStrokeColor:"red",hoverStrokeOpacity:1,hoverStrokeWidth:0.2,pointRadius:6,hoverPointRadius:1,hoverPointUnit:"%",pointerEvents:"visiblePainted",cursor:"inherit"},'select':{fillColor:"blue",fillOpacity:0.4,hoverFillColor:"white",hoverFillOpacity:0.8,strokeColor:"blue",strokeOpacity:1,strokeWidth:2,strokeLinecap:"round",strokeDashstyle:"solid",hoverStrokeColor:"red",hoverStrokeOpacity:1,hoverStrokeWidth:0.2,pointRadius:6,hoverPointRadius:1,hoverPointUnit:"%",pointerEvents:"visiblePainted",cursor:"pointer"},'temporary':{fillColor:"#66cccc",fillOpacity:0.2,hoverFillColor:"white",hoverFillOpacity:0.8,strokeColor:"#66cccc",strokeOpacity:1,strokeLinecap:"round",strokeWidth:2,strokeDashstyle:"solid",hoverStrokeColor:"red",hoverStrokeOpacity:1,hoverStrokeWidth:0.2,pointRadius:6,hoverPointRadius:1,hoverPointUnit:"%",pointerEvents:"visiblePainted",cursor:"inherit"},'delete':{display:"none"}};OpenLayers.Handler.Box=OpenLayers.Class(OpenLayers.Handler,{dragHandler:null,boxDivClassName:'olHandlerBoxZoomBox',boxCharacteristics:null,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);var callbacks={"down":this.startBox,"move":this.moveBox,"out":this.removeBox,"up":this.endBox};this.dragHandler=new OpenLayers.Handler.Drag(this,callbacks,{keyMask:this.keyMask});},destroy:function(){if(this.dragHandler){this.dragHandler.destroy();this.dragHandler=null;}
OpenLayers.Handler.prototype.destroy.apply(this,arguments);},setMap:function(map){OpenLayers.Handler.prototype.setMap.apply(this,arguments);if(this.dragHandler){this.dragHandler.setMap(map);}},startBox:function(xy){this.zoomBox=OpenLayers.Util.createDiv('zoomBox',this.dragHandler.start);this.zoomBox.className=this.boxDivClassName;this.zoomBox.style.zIndex=this.map.Z_INDEX_BASE["Popup"]-1;this.map.viewPortDiv.appendChild(this.zoomBox);OpenLayers.Element.addClass(this.map.viewPortDiv,"olDrawBox");},moveBox:function(xy){var startX=this.dragHandler.start.x;var startY=this.dragHandler.start.y;var deltaX=Math.abs(startX-xy.x);var deltaY=Math.abs(startY-xy.y);this.zoomBox.style.width=Math.max(1,deltaX)+"px";this.zoomBox.style.height=Math.max(1,deltaY)+"px";this.zoomBox.style.left=xy.x<startX?xy.x+"px":startX+"px";this.zoomBox.style.top=xy.y<startY?xy.y+"px":startY+"px";var box=this.getBoxCharacteristics();if(box.newBoxModel){if(xy.x>startX){this.zoomBox.style.width=Math.max(1,deltaX-box.xOffset)+"px";}
if(xy.y>startY){this.zoomBox.style.height=Math.max(1,deltaY-box.yOffset)+"px";}}},endBox:function(end){var result;if(Math.abs(this.dragHandler.start.x-end.x)>5||Math.abs(this.dragHandler.start.y-end.y)>5){var start=this.dragHandler.start;var top=Math.min(start.y,end.y);var bottom=Math.max(start.y,end.y);var left=Math.min(start.x,end.x);var right=Math.max(start.x,end.x);result=new OpenLayers.Bounds(left,bottom,right,top);}else{result=this.dragHandler.start.clone();}
this.removeBox();this.callback("done",[result]);},removeBox:function(){this.map.viewPortDiv.removeChild(this.zoomBox);this.zoomBox=null;this.boxCharacteristics=null;OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDrawBox");},activate:function(){if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){this.dragHandler.activate();return true;}else{return false;}},deactivate:function(){if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){this.dragHandler.deactivate();return true;}else{return false;}},getBoxCharacteristics:function(){if(!this.boxCharacteristics){var xOffset=parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-left-width"))+parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-right-width"))+1;var yOffset=parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-top-width"))+parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-bottom-width"))+1;var newBoxModel=OpenLayers.BROWSER_NAME=="msie"?document.compatMode!="BackCompat":true;this.boxCharacteristics={xOffset:xOffset,yOffset:yOffset,newBoxModel:newBoxModel};}
return this.boxCharacteristics;},CLASS_NAME:"OpenLayers.Handler.Box"});OpenLayers.Handler.RegularPolygon=OpenLayers.Class(OpenLayers.Handler.Drag,{sides:4,radius:null,snapAngle:null,snapToggle:'shiftKey',layerOptions:null,persist:false,irregular:false,angle:null,fixedRadius:false,feature:null,layer:null,origin:null,initialize:function(control,callbacks,options){if(!(options&&options.layerOptions&&options.layerOptions.styleMap)){this.style=OpenLayers.Util.extend(OpenLayers.Feature.Vector.style['default'],{});}
OpenLayers.Handler.prototype.initialize.apply(this,[control,callbacks,options]);this.options=(options)?options:{};},setOptions:function(newOptions){OpenLayers.Util.extend(this.options,newOptions);OpenLayers.Util.extend(this,newOptions);},activate:function(){var activated=false;if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){var options=OpenLayers.Util.extend({displayInLayerSwitcher:false,calculateInRange:OpenLayers.Function.True},this.layerOptions);this.layer=new OpenLayers.Layer.Vector(this.CLASS_NAME,options);this.map.addLayer(this.layer);activated=true;}
return activated;},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.Drag.prototype.deactivate.apply(this,arguments)){if(this.dragging){this.cancel();}
if(this.layer.map!=null){this.layer.destroy(false);if(this.feature){this.feature.destroy();}}
this.layer=null;this.feature=null;deactivated=true;}
return deactivated;},down:function(evt){this.fixedRadius=!!(this.radius);var maploc=this.map.getLonLatFromPixel(evt.xy);this.origin=new OpenLayers.Geometry.Point(maploc.lon,maploc.lat);if(!this.fixedRadius||this.irregular){this.radius=this.map.getResolution();}
if(this.persist){this.clear();}
this.feature=new OpenLayers.Feature.Vector();this.createGeometry();this.callback("create",[this.origin,this.feature]);this.layer.addFeatures([this.feature],{silent:true});this.layer.drawFeature(this.feature,this.style);},move:function(evt){var maploc=this.map.getLonLatFromPixel(evt.xy);var point=new OpenLayers.Geometry.Point(maploc.lon,maploc.lat);if(this.irregular){var ry=Math.sqrt(2)*Math.abs(point.y-this.origin.y)/2;this.radius=Math.max(this.map.getResolution()/2,ry);}else if(this.fixedRadius){this.origin=point;}else{this.calculateAngle(point,evt);this.radius=Math.max(this.map.getResolution()/2,point.distanceTo(this.origin));}
this.modifyGeometry();if(this.irregular){var dx=point.x-this.origin.x;var dy=point.y-this.origin.y;var ratio;if(dy==0){ratio=dx/(this.radius*Math.sqrt(2));}else{ratio=dx/dy;}
this.feature.geometry.resize(1,this.origin,ratio);this.feature.geometry.move(dx/2,dy/2);}
this.layer.drawFeature(this.feature,this.style);},up:function(evt){this.finalize();if(this.start==this.last){this.callback("done",[evt.xy]);}},out:function(evt){this.finalize();},createGeometry:function(){this.angle=Math.PI*((1/this.sides)-(1/2));if(this.snapAngle){this.angle+=this.snapAngle*(Math.PI/180);}
this.feature.geometry=OpenLayers.Geometry.Polygon.createRegularPolygon(this.origin,this.radius,this.sides,this.snapAngle);},modifyGeometry:function(){var angle,point;var ring=this.feature.geometry.components[0];if(ring.components.length!=(this.sides+1)){this.createGeometry();ring=this.feature.geometry.components[0];}
for(var i=0;i<this.sides;++i){point=ring.components[i];angle=this.angle+(i*2*Math.PI/this.sides);point.x=this.origin.x+(this.radius*Math.cos(angle));point.y=this.origin.y+(this.radius*Math.sin(angle));point.clearBounds();}},calculateAngle:function(point,evt){var alpha=Math.atan2(point.y-this.origin.y,point.x-this.origin.x);if(this.snapAngle&&(this.snapToggle&&!evt[this.snapToggle])){var snapAngleRad=(Math.PI/180)*this.snapAngle;this.angle=Math.round(alpha/snapAngleRad)*snapAngleRad;}else{this.angle=alpha;}},cancel:function(){this.callback("cancel",null);this.finalize();},finalize:function(){this.origin=null;this.radius=this.options.radius;},clear:function(){if(this.layer){this.layer.renderer.clear();this.layer.destroyFeatures();}},callback:function(name,args){if(this.callbacks[name]){this.callbacks[name].apply(this.control,[this.feature.geometry.clone()]);}
if(!this.persist&&(name=="done"||name=="cancel")){this.clear();}},CLASS_NAME:"OpenLayers.Handler.RegularPolygon"});OpenLayers.Layer.HTTPRequest=OpenLayers.Class(OpenLayers.Layer,{URL_HASH_FACTOR:(Math.sqrt(5)-1)/2,url:null,params:null,reproject:false,initialize:function(name,url,params,options){var newArguments=arguments;newArguments=[name,options];OpenLayers.Layer.prototype.initialize.apply(this,newArguments);this.url=url;this.params=OpenLayers.Util.extend({},params);},destroy:function(){this.url=null;this.params=null;OpenLayers.Layer.prototype.destroy.apply(this,arguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.HTTPRequest(this.name,this.url,this.params,this.getOptions());}
obj=OpenLayers.Layer.prototype.clone.apply(this,[obj]);return obj;},setUrl:function(newUrl){this.url=newUrl;},mergeNewParams:function(newParams){this.params=OpenLayers.Util.extend(this.params,newParams);var ret=this.redraw();if(this.map!=null){this.map.events.triggerEvent("changelayer",{layer:this,property:"params"});}
return ret;},redraw:function(force){if(force){return this.mergeNewParams({"_olSalt":Math.random()});}else{return OpenLayers.Layer.prototype.redraw.apply(this,[]);}},selectUrl:function(paramString,urls){var product=1;for(var i=0,len=paramString.length;i<len;i++){product*=paramString.charCodeAt(i)*this.URL_HASH_FACTOR;product-=Math.floor(product);}
return urls[Math.floor(product*urls.length)];},getFullRequestString:function(newParams,altUrl){var url=altUrl||this.url;var allParams=OpenLayers.Util.extend({},this.params);allParams=OpenLayers.Util.extend(allParams,newParams);var paramsString=OpenLayers.Util.getParameterString(allParams);if(url instanceof Array){url=this.selectUrl(paramsString,url);}
var urlParams=OpenLayers.Util.upperCaseObject(OpenLayers.Util.getParameters(url));for(var key in allParams){if(key.toUpperCase()in urlParams){delete allParams[key];}}
paramsString=OpenLayers.Util.getParameterString(allParams);return OpenLayers.Util.urlAppend(url,paramsString);},CLASS_NAME:"OpenLayers.Layer.HTTPRequest"});OpenLayers.Layer.SphericalMercator={getExtent:function(){var extent=null;if(this.sphericalMercator){extent=this.map.calculateBounds();}else{extent=OpenLayers.Layer.FixedZoomLevels.prototype.getExtent.apply(this);}
return extent;},getLonLatFromViewPortPx:function(viewPortPx){return OpenLayers.Layer.prototype.getLonLatFromViewPortPx.apply(this,arguments);},getViewPortPxFromLonLat:function(lonlat){return OpenLayers.Layer.prototype.getViewPortPxFromLonLat.apply(this,arguments);},initMercatorParameters:function(){this.RESOLUTIONS=[];var maxResolution=156543.0339;for(var zoom=0;zoom<=this.MAX_ZOOM_LEVEL;++zoom){this.RESOLUTIONS[zoom]=maxResolution/Math.pow(2,zoom);}
this.units="m";this.projection=this.projection||"EPSG:900913";},forwardMercator:function(lon,lat){var x=lon*20037508.34/180;var y=Math.log(Math.tan((90+lat)*Math.PI/360))/(Math.PI/180);y=y*20037508.34/180;return new OpenLayers.LonLat(x,y);},inverseMercator:function(x,y){var lon=(x/20037508.34)*180;var lat=(y/20037508.34)*180;lat=180/Math.PI*(2*Math.atan(Math.exp(lat*Math.PI/180))-Math.PI/2);return new OpenLayers.LonLat(lon,lat);},projectForward:function(point){var lonlat=OpenLayers.Layer.SphericalMercator.forwardMercator(point.x,point.y);point.x=lonlat.lon;point.y=lonlat.lat;return point;},projectInverse:function(point){var lonlat=OpenLayers.Layer.SphericalMercator.inverseMercator(point.x,point.y);point.x=lonlat.lon;point.y=lonlat.lat;return point;}};(function(){var codes=["EPSG:900913","EPSG:3857","EPSG:102113","EPSG:102100"];var add=OpenLayers.Projection.addTransform;var merc=OpenLayers.Layer.SphericalMercator;var same=OpenLayers.Projection.nullTransform;var i,len,code,other,j;for(i=0,len=codes.length;i<len;++i){code=codes[i];add("EPSG:4326",code,merc.projectForward);add(code,"EPSG:4326",merc.projectInverse);for(j=i+1;j<len;++j){other=codes[j];add(code,other,same);add(other,code,same);}}})();OpenLayers.Control.DrawFeature=OpenLayers.Class(OpenLayers.Control,{layer:null,callbacks:null,EVENT_TYPES:["featureadded"],multi:false,featureAdded:function(){},handlerOptions:null,initialize:function(layer,handler,options){this.EVENT_TYPES=OpenLayers.Control.DrawFeature.prototype.EVENT_TYPES.concat(OpenLayers.Control.prototype.EVENT_TYPES);OpenLayers.Control.prototype.initialize.apply(this,[options]);this.callbacks=OpenLayers.Util.extend({done:this.drawFeature,modify:function(vertex,feature){this.layer.events.triggerEvent("sketchmodified",{vertex:vertex,feature:feature});},create:function(vertex,feature){this.layer.events.triggerEvent("sketchstarted",{vertex:vertex,feature:feature});}},this.callbacks);this.layer=layer;this.handlerOptions=this.handlerOptions||{};if(!("multi"in this.handlerOptions)){this.handlerOptions.multi=this.multi;}
var sketchStyle=this.layer.styleMap&&this.layer.styleMap.styles.temporary;if(sketchStyle){this.handlerOptions.layerOptions=OpenLayers.Util.applyDefaults(this.handlerOptions.layerOptions,{styleMap:new OpenLayers.StyleMap({"default":sketchStyle})});}
this.handler=new handler(this,this.callbacks,this.handlerOptions);},drawFeature:function(geometry){var feature=new OpenLayers.Feature.Vector(geometry);var proceed=this.layer.events.triggerEvent("sketchcomplete",{feature:feature});if(proceed!==false){feature.state=OpenLayers.State.INSERT;this.layer.addFeatures([feature]);this.featureAdded(feature);this.events.triggerEvent("featureadded",{feature:feature});}},CLASS_NAME:"OpenLayers.Control.DrawFeature"});OpenLayers.Control.ZoomBox=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_TOOL,out:false,alwaysZoom:false,draw:function(){this.handler=new OpenLayers.Handler.Box(this,{done:this.zoomBox},{keyMask:this.keyMask});},zoomBox:function(position){if(position instanceof OpenLayers.Bounds){var bounds;if(!this.out){var minXY=this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.left,position.bottom));var maxXY=this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.right,position.top));bounds=new OpenLayers.Bounds(minXY.lon,minXY.lat,maxXY.lon,maxXY.lat);}else{var pixWidth=Math.abs(position.right-position.left);var pixHeight=Math.abs(position.top-position.bottom);var zoomFactor=Math.min((this.map.size.h/pixHeight),(this.map.size.w/pixWidth));var extent=this.map.getExtent();var center=this.map.getLonLatFromPixel(position.getCenterPixel());var xmin=center.lon-(extent.getWidth()/2)*zoomFactor;var xmax=center.lon+(extent.getWidth()/2)*zoomFactor;var ymin=center.lat-(extent.getHeight()/2)*zoomFactor;var ymax=center.lat+(extent.getHeight()/2)*zoomFactor;bounds=new OpenLayers.Bounds(xmin,ymin,xmax,ymax);}
var lastZoom=this.map.getZoom();this.map.zoomToExtent(bounds);if(lastZoom==this.map.getZoom()&&this.alwaysZoom==true){this.map.zoomTo(lastZoom+(this.out?-1:1));}}else{if(!this.out){this.map.setCenter(this.map.getLonLatFromPixel(position),this.map.getZoom()+1);}else{this.map.setCenter(this.map.getLonLatFromPixel(position),this.map.getZoom()-1);}}},CLASS_NAME:"OpenLayers.Control.ZoomBox"});OpenLayers.Format.WKT=OpenLayers.Class(OpenLayers.Format,{initialize:function(options){this.regExes={'typeStr':/^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,'spaces':/\s+/,'parenComma':/\)\s*,\s*\(/,'doubleParenComma':/\)\s*\)\s*,\s*\(\s*\(/,'trimParens':/^\s*\(?(.*?)\)?\s*$/};OpenLayers.Format.prototype.initialize.apply(this,[options]);},read:function(wkt){var features,type,str;var matches=this.regExes.typeStr.exec(wkt);if(matches){type=matches[1].toLowerCase();str=matches[2];if(this.parse[type]){features=this.parse[type].apply(this,[str]);}
if(this.internalProjection&&this.externalProjection){if(features&&features.CLASS_NAME=="OpenLayers.Feature.Vector"){features.geometry.transform(this.externalProjection,this.internalProjection);}else if(features&&type!="geometrycollection"&&typeof features=="object"){for(var i=0,len=features.length;i<len;i++){var component=features[i];component.geometry.transform(this.externalProjection,this.internalProjection);}}}}
return features;},write:function(features){var collection,geometry,type,data,isCollection;if(features.constructor==Array){collection=features;isCollection=true;}else{collection=[features];isCollection=false;}
var pieces=[];if(isCollection){pieces.push('GEOMETRYCOLLECTION(');}
for(var i=0,len=collection.length;i<len;++i){if(isCollection&&i>0){pieces.push(',');}
geometry=collection[i].geometry;type=geometry.CLASS_NAME.split('.')[2].toLowerCase();if(!this.extract[type]){return null;}
if(this.internalProjection&&this.externalProjection){geometry=geometry.clone();geometry.transform(this.internalProjection,this.externalProjection);}
data=this.extract[type].apply(this,[geometry]);pieces.push(type.toUpperCase()+'('+data+')');}
if(isCollection){pieces.push(')');}
return pieces.join('');},extract:{'point':function(point){return point.x+' '+point.y;},'multipoint':function(multipoint){var array=[];for(var i=0,len=multipoint.components.length;i<len;++i){array.push('('+
this.extract.point.apply(this,[multipoint.components[i]])+')');}
return array.join(',');},'linestring':function(linestring){var array=[];for(var i=0,len=linestring.components.length;i<len;++i){array.push(this.extract.point.apply(this,[linestring.components[i]]));}
return array.join(',');},'multilinestring':function(multilinestring){var array=[];for(var i=0,len=multilinestring.components.length;i<len;++i){array.push('('+
this.extract.linestring.apply(this,[multilinestring.components[i]])+')');}
return array.join(',');},'polygon':function(polygon){var array=[];for(var i=0,len=polygon.components.length;i<len;++i){array.push('('+
this.extract.linestring.apply(this,[polygon.components[i]])+')');}
return array.join(',');},'multipolygon':function(multipolygon){var array=[];for(var i=0,len=multipolygon.components.length;i<len;++i){array.push('('+
this.extract.polygon.apply(this,[multipolygon.components[i]])+')');}
return array.join(',');}},parse:{'point':function(str){var coords=OpenLayers.String.trim(str).split(this.regExes.spaces);return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(coords[0],coords[1]));},'multipoint':function(str){var point;var points=OpenLayers.String.trim(str).split(this.regExes.parenComma);var components=[];for(var i=0,len=points.length;i<len;++i){point=points[i].replace(this.regExes.trimParens,'$1');components.push(this.parse.point.apply(this,[point]).geometry);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiPoint(components));},'linestring':function(str){var points=OpenLayers.String.trim(str).split(',');var components=[];for(var i=0,len=points.length;i<len;++i){components.push(this.parse.point.apply(this,[points[i]]).geometry);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LineString(components));},'multilinestring':function(str){var line;var lines=OpenLayers.String.trim(str).split(this.regExes.parenComma);var components=[];for(var i=0,len=lines.length;i<len;++i){line=lines[i].replace(this.regExes.trimParens,'$1');components.push(this.parse.linestring.apply(this,[line]).geometry);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiLineString(components));},'polygon':function(str){var ring,linestring,linearring;var rings=OpenLayers.String.trim(str).split(this.regExes.parenComma);var components=[];for(var i=0,len=rings.length;i<len;++i){ring=rings[i].replace(this.regExes.trimParens,'$1');linestring=this.parse.linestring.apply(this,[ring]).geometry;linearring=new OpenLayers.Geometry.LinearRing(linestring.components);components.push(linearring);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Polygon(components));},'multipolygon':function(str){var polygon;var polygons=OpenLayers.String.trim(str).split(this.regExes.doubleParenComma);var components=[];for(var i=0,len=polygons.length;i<len;++i){polygon=polygons[i].replace(this.regExes.trimParens,'$1');components.push(this.parse.polygon.apply(this,[polygon]).geometry);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiPolygon(components));},'geometrycollection':function(str){str=str.replace(/,\s*([A-Za-z])/g,'|$1');var wktArray=OpenLayers.String.trim(str).split('|');var components=[];for(var i=0,len=wktArray.length;i<len;++i){components.push(OpenLayers.Format.WKT.prototype.read.apply(this,[wktArray[i]]));}
return components;}},CLASS_NAME:"OpenLayers.Format.WKT"});OpenLayers.Layer.Grid=OpenLayers.Class(OpenLayers.Layer.HTTPRequest,{tileSize:null,tileOptions:null,grid:null,singleTile:false,ratio:1.5,buffer:2,numLoadingTiles:0,initialize:function(name,url,params,options){OpenLayers.Layer.HTTPRequest.prototype.initialize.apply(this,arguments);this.events.addEventType("tileloaded");this.grid=[];},destroy:function(){this.clearGrid();this.grid=null;this.tileSize=null;OpenLayers.Layer.HTTPRequest.prototype.destroy.apply(this,arguments);},clearGrid:function(){if(this.grid){for(var iRow=0,len=this.grid.length;iRow<len;iRow++){var row=this.grid[iRow];for(var iCol=0,clen=row.length;iCol<clen;iCol++){var tile=row[iCol];this.removeTileMonitoringHooks(tile);tile.destroy();}}
this.grid=[];}},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.Grid(this.name,this.url,this.params,this.getOptions());}
obj=OpenLayers.Layer.HTTPRequest.prototype.clone.apply(this,[obj]);if(this.tileSize!=null){obj.tileSize=this.tileSize.clone();}
obj.grid=[];return obj;},moveTo:function(bounds,zoomChanged,dragging){OpenLayers.Layer.HTTPRequest.prototype.moveTo.apply(this,arguments);bounds=bounds||this.map.getExtent();if(bounds!=null){var forceReTile=!this.grid.length||zoomChanged;var tilesBounds=this.getTilesBounds();if(this.singleTile){if(forceReTile||(!dragging&&!tilesBounds.containsBounds(bounds))){this.initSingleTile(bounds);}}else{if(forceReTile||!tilesBounds.containsBounds(bounds,true)){this.initGriddedTiles(bounds);}else{this.moveGriddedTiles(bounds);}}}},setTileSize:function(size){if(this.singleTile){size=this.map.getSize();size.h=parseInt(size.h*this.ratio);size.w=parseInt(size.w*this.ratio);}
OpenLayers.Layer.HTTPRequest.prototype.setTileSize.apply(this,[size]);},getGridBounds:function(){var msg="The getGridBounds() function is deprecated. It will be "+"removed in 3.0. Please use getTilesBounds() instead.";OpenLayers.Console.warn(msg);return this.getTilesBounds();},getTilesBounds:function(){var bounds=null;if(this.grid.length){var bottom=this.grid.length-1;var bottomLeftTile=this.grid[bottom][0];var right=this.grid[0].length-1;var topRightTile=this.grid[0][right];bounds=new OpenLayers.Bounds(bottomLeftTile.bounds.left,bottomLeftTile.bounds.bottom,topRightTile.bounds.right,topRightTile.bounds.top);}
return bounds;},initSingleTile:function(bounds){var center=bounds.getCenterLonLat();var tileWidth=bounds.getWidth()*this.ratio;var tileHeight=bounds.getHeight()*this.ratio;var tileBounds=new OpenLayers.Bounds(center.lon-(tileWidth/2),center.lat-(tileHeight/2),center.lon+(tileWidth/2),center.lat+(tileHeight/2));var ul=new OpenLayers.LonLat(tileBounds.left,tileBounds.top);var px=this.map.getLayerPxFromLonLat(ul);if(!this.grid.length){this.grid[0]=[];}
var tile=this.grid[0][0];if(!tile){tile=this.addTile(tileBounds,px);this.addTileMonitoringHooks(tile);tile.draw();this.grid[0][0]=tile;}else{tile.moveTo(tileBounds,px);}
this.removeExcessTiles(1,1);},calculateGridLayout:function(bounds,extent,resolution){var tilelon=resolution*this.tileSize.w;var tilelat=resolution*this.tileSize.h;var offsetlon=bounds.left-extent.left;var tilecol=Math.floor(offsetlon/tilelon)-this.buffer;var tilecolremain=offsetlon/tilelon-tilecol;var tileoffsetx=-tilecolremain*this.tileSize.w;var tileoffsetlon=extent.left+tilecol*tilelon;var offsetlat=bounds.top-(extent.bottom+tilelat);var tilerow=Math.ceil(offsetlat/tilelat)+this.buffer;var tilerowremain=tilerow-offsetlat/tilelat;var tileoffsety=-tilerowremain*this.tileSize.h;var tileoffsetlat=extent.bottom+tilerow*tilelat;return{tilelon:tilelon,tilelat:tilelat,tileoffsetlon:tileoffsetlon,tileoffsetlat:tileoffsetlat,tileoffsetx:tileoffsetx,tileoffsety:tileoffsety};},initGriddedTiles:function(bounds){var viewSize=this.map.getSize();var minRows=Math.ceil(viewSize.h/this.tileSize.h)+
Math.max(1,2*this.buffer);var minCols=Math.ceil(viewSize.w/this.tileSize.w)+
Math.max(1,2*this.buffer);var extent=this.getMaxExtent();var resolution=this.map.getResolution();var tileLayout=this.calculateGridLayout(bounds,extent,resolution);var tileoffsetx=Math.round(tileLayout.tileoffsetx);var tileoffsety=Math.round(tileLayout.tileoffsety);var tileoffsetlon=tileLayout.tileoffsetlon;var tileoffsetlat=tileLayout.tileoffsetlat;var tilelon=tileLayout.tilelon;var tilelat=tileLayout.tilelat;this.origin=new OpenLayers.Pixel(tileoffsetx,tileoffsety);var startX=tileoffsetx;var startLon=tileoffsetlon;var rowidx=0;var layerContainerDivLeft=parseInt(this.map.layerContainerDiv.style.left);var layerContainerDivTop=parseInt(this.map.layerContainerDiv.style.top);do{var row=this.grid[rowidx++];if(!row){row=[];this.grid.push(row);}
tileoffsetlon=startLon;tileoffsetx=startX;var colidx=0;do{var tileBounds=new OpenLayers.Bounds(tileoffsetlon,tileoffsetlat,tileoffsetlon+tilelon,tileoffsetlat+tilelat);var x=tileoffsetx;x-=layerContainerDivLeft;var y=tileoffsety;y-=layerContainerDivTop;var px=new OpenLayers.Pixel(x,y);var tile=row[colidx++];if(!tile){tile=this.addTile(tileBounds,px);this.addTileMonitoringHooks(tile);row.push(tile);}else{tile.moveTo(tileBounds,px,false);}
tileoffsetlon+=tilelon;tileoffsetx+=this.tileSize.w;}while((tileoffsetlon<=bounds.right+tilelon*this.buffer)||colidx<minCols);tileoffsetlat-=tilelat;tileoffsety+=this.tileSize.h;}while((tileoffsetlat>=bounds.bottom-tilelat*this.buffer)||rowidx<minRows);this.removeExcessTiles(rowidx,colidx);this.spiralTileLoad();},getMaxExtent:function(){return this.maxExtent;},spiralTileLoad:function(){var tileQueue=[];var directions=["right","down","left","up"];var iRow=0;var iCell=-1;var direction=OpenLayers.Util.indexOf(directions,"right");var directionsTried=0;while(directionsTried<directions.length){var testRow=iRow;var testCell=iCell;switch(directions[direction]){case"right":testCell++;break;case"down":testRow++;break;case"left":testCell--;break;case"up":testRow--;break;}
var tile=null;if((testRow<this.grid.length)&&(testRow>=0)&&(testCell<this.grid[0].length)&&(testCell>=0)){tile=this.grid[testRow][testCell];}
if((tile!=null)&&(!tile.queued)){tileQueue.unshift(tile);tile.queued=true;directionsTried=0;iRow=testRow;iCell=testCell;}else{direction=(direction+1)%4;directionsTried++;}}
for(var i=0,len=tileQueue.length;i<len;i++){var tile=tileQueue[i];tile.draw();tile.queued=false;}},addTile:function(bounds,position){},addTileMonitoringHooks:function(tile){tile.onLoadStart=function(){if(this.numLoadingTiles==0){this.events.triggerEvent("loadstart");}
this.numLoadingTiles++;};tile.events.register("loadstart",this,tile.onLoadStart);tile.onLoadEnd=function(){this.numLoadingTiles--;this.events.triggerEvent("tileloaded");if(this.numLoadingTiles==0){this.events.triggerEvent("loadend");}};tile.events.register("loadend",this,tile.onLoadEnd);tile.events.register("unload",this,tile.onLoadEnd);},removeTileMonitoringHooks:function(tile){tile.unload();tile.events.un({"loadstart":tile.onLoadStart,"loadend":tile.onLoadEnd,"unload":tile.onLoadEnd,scope:this});},moveGriddedTiles:function(bounds){var buffer=this.buffer||1;while(true){var tlLayer=this.grid[0][0].position;var tlViewPort=this.map.getViewPortPxFromLayerPx(tlLayer);if(tlViewPort.x>-this.tileSize.w*(buffer-1)){this.shiftColumn(true);}else if(tlViewPort.x<-this.tileSize.w*buffer){this.shiftColumn(false);}else if(tlViewPort.y>-this.tileSize.h*(buffer-1)){this.shiftRow(true);}else if(tlViewPort.y<-this.tileSize.h*buffer){this.shiftRow(false);}else{break;}};},shiftRow:function(prepend){var modelRowIndex=(prepend)?0:(this.grid.length-1);var grid=this.grid;var modelRow=grid[modelRowIndex];var resolution=this.map.getResolution();var deltaY=(prepend)?-this.tileSize.h:this.tileSize.h;var deltaLat=resolution*-deltaY;var row=(prepend)?grid.pop():grid.shift();for(var i=0,len=modelRow.length;i<len;i++){var modelTile=modelRow[i];var bounds=modelTile.bounds.clone();var position=modelTile.position.clone();bounds.bottom=bounds.bottom+deltaLat;bounds.top=bounds.top+deltaLat;position.y=position.y+deltaY;row[i].moveTo(bounds,position);}
if(prepend){grid.unshift(row);}else{grid.push(row);}},shiftColumn:function(prepend){var deltaX=(prepend)?-this.tileSize.w:this.tileSize.w;var resolution=this.map.getResolution();var deltaLon=resolution*deltaX;for(var i=0,len=this.grid.length;i<len;i++){var row=this.grid[i];var modelTileIndex=(prepend)?0:(row.length-1);var modelTile=row[modelTileIndex];var bounds=modelTile.bounds.clone();var position=modelTile.position.clone();bounds.left=bounds.left+deltaLon;bounds.right=bounds.right+deltaLon;position.x=position.x+deltaX;var tile=prepend?this.grid[i].pop():this.grid[i].shift();tile.moveTo(bounds,position);if(prepend){row.unshift(tile);}else{row.push(tile);}}},removeExcessTiles:function(rows,columns){while(this.grid.length>rows){var row=this.grid.pop();for(var i=0,l=row.length;i<l;i++){var tile=row[i];this.removeTileMonitoringHooks(tile);tile.destroy();}}
while(this.grid[0].length>columns){for(var i=0,l=this.grid.length;i<l;i++){var row=this.grid[i];var tile=row.pop();this.removeTileMonitoringHooks(tile);tile.destroy();}}},onMapResize:function(){if(this.singleTile){this.clearGrid();this.setTileSize();}},getTileBounds:function(viewPortPx){var maxExtent=this.maxExtent;var resolution=this.getResolution();var tileMapWidth=resolution*this.tileSize.w;var tileMapHeight=resolution*this.tileSize.h;var mapPoint=this.getLonLatFromViewPortPx(viewPortPx);var tileLeft=maxExtent.left+(tileMapWidth*Math.floor((mapPoint.lon-
maxExtent.left)/tileMapWidth));var tileBottom=maxExtent.bottom+(tileMapHeight*Math.floor((mapPoint.lat-
maxExtent.bottom)/tileMapHeight));return new OpenLayers.Bounds(tileLeft,tileBottom,tileLeft+tileMapWidth,tileBottom+tileMapHeight);},CLASS_NAME:"OpenLayers.Layer.Grid"});OpenLayers.Style=OpenLayers.Class({id:null,name:null,title:null,description:null,layerName:null,isDefault:false,rules:null,context:null,defaultStyle:null,defaultsPerSymbolizer:false,propertyStyles:null,initialize:function(style,options){OpenLayers.Util.extend(this,options);this.rules=[];if(options&&options.rules){this.addRules(options.rules);}
this.setDefaultStyle(style||OpenLayers.Feature.Vector.style["default"]);this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");},destroy:function(){for(var i=0,len=this.rules.length;i<len;i++){this.rules[i].destroy();this.rules[i]=null;}
this.rules=null;this.defaultStyle=null;},createSymbolizer:function(feature){var style=this.defaultsPerSymbolizer?{}:this.createLiterals(OpenLayers.Util.extend({},this.defaultStyle),feature);var rules=this.rules;var rule,context;var elseRules=[];var appliedRules=false;for(var i=0,len=rules.length;i<len;i++){rule=rules[i];var applies=rule.evaluate(feature);if(applies){if(rule instanceof OpenLayers.Rule&&rule.elseFilter){elseRules.push(rule);}else{appliedRules=true;this.applySymbolizer(rule,style,feature);}}}
if(appliedRules==false&&elseRules.length>0){appliedRules=true;for(var i=0,len=elseRules.length;i<len;i++){this.applySymbolizer(elseRules[i],style,feature);}}
if(rules.length>0&&appliedRules==false){style.display="none";}
return style;},applySymbolizer:function(rule,style,feature){var symbolizerPrefix=feature.geometry?this.getSymbolizerPrefix(feature.geometry):OpenLayers.Style.SYMBOLIZER_PREFIXES[0];var symbolizer=rule.symbolizer[symbolizerPrefix]||rule.symbolizer;if(this.defaultsPerSymbolizer===true){var defaults=this.defaultStyle;OpenLayers.Util.applyDefaults(symbolizer,{pointRadius:defaults.pointRadius});if(symbolizer.stroke===true||symbolizer.graphic===true){OpenLayers.Util.applyDefaults(symbolizer,{strokeWidth:defaults.strokeWidth,strokeColor:defaults.strokeColor,strokeOpacity:defaults.strokeOpacity,strokeDashstyle:defaults.strokeDashstyle,strokeLinecap:defaults.strokeLinecap});}
if(symbolizer.fill===true||symbolizer.graphic===true){OpenLayers.Util.applyDefaults(symbolizer,{fillColor:defaults.fillColor,fillOpacity:defaults.fillOpacity});}
if(symbolizer.graphic===true){OpenLayers.Util.applyDefaults(symbolizer,{pointRadius:this.defaultStyle.pointRadius,externalGraphic:this.defaultStyle.externalGraphic,graphicName:this.defaultStyle.graphicName,graphicOpacity:this.defaultStyle.graphicOpacity,graphicWidth:this.defaultStyle.graphicWidth,graphicHeight:this.defaultStyle.graphicHeight,graphicXOffset:this.defaultStyle.graphicXOffset,graphicYOffset:this.defaultStyle.graphicYOffset});}}
return this.createLiterals(OpenLayers.Util.extend(style,symbolizer),feature);},createLiterals:function(style,feature){var context=OpenLayers.Util.extend({},feature.attributes||feature.data);OpenLayers.Util.extend(context,this.context);for(var i in this.propertyStyles){style[i]=OpenLayers.Style.createLiteral(style[i],context,feature,i);}
return style;},findPropertyStyles:function(){var propertyStyles={};var style=this.defaultStyle;this.addPropertyStyles(propertyStyles,style);var rules=this.rules;var symbolizer,value;for(var i=0,len=rules.length;i<len;i++){symbolizer=rules[i].symbolizer;for(var key in symbolizer){value=symbolizer[key];if(typeof value=="object"){this.addPropertyStyles(propertyStyles,value);}else{this.addPropertyStyles(propertyStyles,symbolizer);break;}}}
return propertyStyles;},addPropertyStyles:function(propertyStyles,symbolizer){var property;for(var key in symbolizer){property=symbolizer[key];if(typeof property=="string"&&property.match(/\$\{\w+\}/)){propertyStyles[key]=true;}}
return propertyStyles;},addRules:function(rules){Array.prototype.push.apply(this.rules,rules);this.propertyStyles=this.findPropertyStyles();},setDefaultStyle:function(style){this.defaultStyle=style;this.propertyStyles=this.findPropertyStyles();},getSymbolizerPrefix:function(geometry){var prefixes=OpenLayers.Style.SYMBOLIZER_PREFIXES;for(var i=0,len=prefixes.length;i<len;i++){if(geometry.CLASS_NAME.indexOf(prefixes[i])!=-1){return prefixes[i];}}},clone:function(){var options=OpenLayers.Util.extend({},this);if(this.rules){options.rules=[];for(var i=0,len=this.rules.length;i<len;++i){options.rules.push(this.rules[i].clone());}}
options.context=this.context&&OpenLayers.Util.extend({},this.context);var defaultStyle=OpenLayers.Util.extend({},this.defaultStyle);return new OpenLayers.Style(defaultStyle,options);},CLASS_NAME:"OpenLayers.Style"});OpenLayers.Style.createLiteral=function(value,context,feature,property){if(typeof value=="string"&&value.indexOf("${")!=-1){value=OpenLayers.String.format(value,context,[feature,property]);value=(isNaN(value)||!value)?value:parseFloat(value);}
return value;};OpenLayers.Style.SYMBOLIZER_PREFIXES=['Point','Line','Polygon','Text','Raster'];OpenLayers.Control.Navigation=OpenLayers.Class(OpenLayers.Control,{dragPan:null,dragPanOptions:null,documentDrag:false,zoomBox:null,zoomBoxEnabled:true,zoomWheelEnabled:true,mouseWheelOptions:null,handleRightClicks:false,zoomBoxKeyMask:OpenLayers.Handler.MOD_SHIFT,autoActivate:true,initialize:function(options){this.handlers={};OpenLayers.Control.prototype.initialize.apply(this,arguments);},destroy:function(){this.deactivate();if(this.dragPan){this.dragPan.destroy();}
this.dragPan=null;if(this.zoomBox){this.zoomBox.destroy();}
this.zoomBox=null;OpenLayers.Control.prototype.destroy.apply(this,arguments);},activate:function(){this.dragPan.activate();if(this.zoomWheelEnabled){this.handlers.wheel.activate();}
this.handlers.click.activate();if(this.zoomBoxEnabled){this.zoomBox.activate();}
return OpenLayers.Control.prototype.activate.apply(this,arguments);},deactivate:function(){this.zoomBox.deactivate();this.dragPan.deactivate();this.handlers.click.deactivate();this.handlers.wheel.deactivate();return OpenLayers.Control.prototype.deactivate.apply(this,arguments);},draw:function(){if(this.handleRightClicks){this.map.viewPortDiv.oncontextmenu=OpenLayers.Function.False;}
var clickCallbacks={'dblclick':this.defaultDblClick,'dblrightclick':this.defaultDblRightClick};var clickOptions={'double':true,'stopDouble':true};this.handlers.click=new OpenLayers.Handler.Click(this,clickCallbacks,clickOptions);this.dragPan=new OpenLayers.Control.DragPan(OpenLayers.Util.extend({map:this.map,documentDrag:this.documentDrag},this.dragPanOptions));this.zoomBox=new OpenLayers.Control.ZoomBox({map:this.map,keyMask:this.zoomBoxKeyMask});this.dragPan.draw();this.zoomBox.draw();this.handlers.wheel=new OpenLayers.Handler.MouseWheel(this,{"up":this.wheelUp,"down":this.wheelDown},this.mouseWheelOptions);},defaultDblClick:function(evt){var newCenter=this.map.getLonLatFromViewPortPx(evt.xy);this.map.setCenter(newCenter,this.map.zoom+1);},defaultDblRightClick:function(evt){var newCenter=this.map.getLonLatFromViewPortPx(evt.xy);this.map.setCenter(newCenter,this.map.zoom-1);},wheelChange:function(evt,deltaZ){var currentZoom=this.map.getZoom();var newZoom=this.map.getZoom()+Math.round(deltaZ);newZoom=Math.max(newZoom,0);newZoom=Math.min(newZoom,this.map.getNumZoomLevels());if(newZoom===currentZoom){return;}
var size=this.map.getSize();var deltaX=size.w/2-evt.xy.x;var deltaY=evt.xy.y-size.h/2;var newRes=this.map.baseLayer.getResolutionForZoom(newZoom);var zoomPoint=this.map.getLonLatFromPixel(evt.xy);var newCenter=new OpenLayers.LonLat(zoomPoint.lon+deltaX*newRes,zoomPoint.lat+deltaY*newRes);this.map.setCenter(newCenter,newZoom);},wheelUp:function(evt,delta){this.wheelChange(evt,delta||1);},wheelDown:function(evt,delta){this.wheelChange(evt,delta||-1);},disableZoomBox:function(){this.zoomBoxEnabled=false;this.zoomBox.deactivate();},enableZoomBox:function(){this.zoomBoxEnabled=true;if(this.active){this.zoomBox.activate();}},disableZoomWheel:function(){this.zoomWheelEnabled=false;this.handlers.wheel.deactivate();},enableZoomWheel:function(){this.zoomWheelEnabled=true;if(this.active){this.handlers.wheel.activate();}},CLASS_NAME:"OpenLayers.Control.Navigation"});OpenLayers.Filter=OpenLayers.Class({initialize:function(options){OpenLayers.Util.extend(this,options);},destroy:function(){},evaluate:function(context){return true;},clone:function(){return null;},CLASS_NAME:"OpenLayers.Filter"});OpenLayers.Geometry=OpenLayers.Class({id:null,parent:null,bounds:null,initialize:function(){this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");},destroy:function(){this.id=null;this.bounds=null;},clone:function(){return new OpenLayers.Geometry();},setBounds:function(bounds){if(bounds){this.bounds=bounds.clone();}},clearBounds:function(){this.bounds=null;if(this.parent){this.parent.clearBounds();}},extendBounds:function(newBounds){var bounds=this.getBounds();if(!bounds){this.setBounds(newBounds);}else{this.bounds.extend(newBounds);}},getBounds:function(){if(this.bounds==null){this.calculateBounds();}
return this.bounds;},calculateBounds:function(){},distanceTo:function(geometry,options){},getVertices:function(nodes){},atPoint:function(lonlat,toleranceLon,toleranceLat){var atPoint=false;var bounds=this.getBounds();if((bounds!=null)&&(lonlat!=null)){var dX=(toleranceLon!=null)?toleranceLon:0;var dY=(toleranceLat!=null)?toleranceLat:0;var toleranceBounds=new OpenLayers.Bounds(this.bounds.left-dX,this.bounds.bottom-dY,this.bounds.right+dX,this.bounds.top+dY);atPoint=toleranceBounds.containsLonLat(lonlat);}
return atPoint;},getLength:function(){return 0.0;},getArea:function(){return 0.0;},getCentroid:function(){return null;},toString:function(){return OpenLayers.Format.WKT.prototype.write(new OpenLayers.Feature.Vector(this));},CLASS_NAME:"OpenLayers.Geometry"});OpenLayers.Geometry.fromWKT=function(wkt){var format=arguments.callee.format;if(!format){format=new OpenLayers.Format.WKT();arguments.callee.format=format;}
var geom;var result=format.read(wkt);if(result instanceof OpenLayers.Feature.Vector){geom=result.geometry;}else if(result instanceof Array){var len=result.length;var components=new Array(len);for(var i=0;i<len;++i){components[i]=result[i].geometry;}
geom=new OpenLayers.Geometry.Collection(components);}
return geom;};OpenLayers.Geometry.segmentsIntersect=function(seg1,seg2,options){var point=options&&options.point;var tolerance=options&&options.tolerance;var intersection=false;var x11_21=seg1.x1-seg2.x1;var y11_21=seg1.y1-seg2.y1;var x12_11=seg1.x2-seg1.x1;var y12_11=seg1.y2-seg1.y1;var y22_21=seg2.y2-seg2.y1;var x22_21=seg2.x2-seg2.x1;var d=(y22_21*x12_11)-(x22_21*y12_11);var n1=(x22_21*y11_21)-(y22_21*x11_21);var n2=(x12_11*y11_21)-(y12_11*x11_21);if(d==0){if(n1==0&&n2==0){intersection=true;}}else{var along1=n1/d;var along2=n2/d;if(along1>=0&&along1<=1&&along2>=0&&along2<=1){if(!point){intersection=true;}else{var x=seg1.x1+(along1*x12_11);var y=seg1.y1+(along1*y12_11);intersection=new OpenLayers.Geometry.Point(x,y);}}}
if(tolerance){var dist;if(intersection){if(point){var segs=[seg1,seg2];var seg,x,y;outer:for(var i=0;i<2;++i){seg=segs[i];for(var j=1;j<3;++j){x=seg["x"+j];y=seg["y"+j];dist=Math.sqrt(Math.pow(x-intersection.x,2)+
Math.pow(y-intersection.y,2));if(dist<tolerance){intersection.x=x;intersection.y=y;break outer;}}}}}else{var segs=[seg1,seg2];var source,target,x,y,p,result;outer:for(var i=0;i<2;++i){source=segs[i];target=segs[(i+1)%2];for(var j=1;j<3;++j){p={x:source["x"+j],y:source["y"+j]};result=OpenLayers.Geometry.distanceToSegment(p,target);if(result.distance<tolerance){if(point){intersection=new OpenLayers.Geometry.Point(p.x,p.y);}else{intersection=true;}
break outer;}}}}}
return intersection;};OpenLayers.Geometry.distanceToSegment=function(point,segment){var x0=point.x;var y0=point.y;var x1=segment.x1;var y1=segment.y1;var x2=segment.x2;var y2=segment.y2;var dx=x2-x1;var dy=y2-y1;var along=((dx*(x0-x1))+(dy*(y0-y1)))/(Math.pow(dx,2)+Math.pow(dy,2));var x,y;if(along<=0.0){x=x1;y=y1;}else if(along>=1.0){x=x2;y=y2;}else{x=x1+along*dx;y=y1+along*dy;}
return{distance:Math.sqrt(Math.pow(x-x0,2)+Math.pow(y-y0,2)),x:x,y:y};};OpenLayers.Layer.TMS=OpenLayers.Class(OpenLayers.Layer.Grid,{serviceVersion:"1.0.0",isBaseLayer:true,tileOrigin:null,serverResolutions:null,zoomOffset:0,initialize:function(name,url,options){var newArguments=[];newArguments.push(name,url,{},options);OpenLayers.Layer.Grid.prototype.initialize.apply(this,newArguments);},destroy:function(){OpenLayers.Layer.Grid.prototype.destroy.apply(this,arguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.TMS(this.name,this.url,this.getOptions());}
obj=OpenLayers.Layer.Grid.prototype.clone.apply(this,[obj]);return obj;},getURL:function(bounds){bounds=this.adjustBounds(bounds);var res=this.map.getResolution();var x=Math.round((bounds.left-this.tileOrigin.lon)/(res*this.tileSize.w));var y=Math.round((bounds.bottom-this.tileOrigin.lat)/(res*this.tileSize.h));var z=this.serverResolutions!=null?OpenLayers.Util.indexOf(this.serverResolutions,res):this.map.getZoom()+this.zoomOffset;var path=this.serviceVersion+"/"+this.layername+"/"+z+"/"+x+"/"+y+"."+this.type;var url=this.url;if(url instanceof Array){url=this.selectUrl(path,url);}
return url+path;},addTile:function(bounds,position){return new OpenLayers.Tile.Image(this,position,bounds,null,this.tileSize);},setMap:function(map){OpenLayers.Layer.Grid.prototype.setMap.apply(this,arguments);if(!this.tileOrigin){this.tileOrigin=new OpenLayers.LonLat(this.map.maxExtent.left,this.map.maxExtent.bottom);}},CLASS_NAME:"OpenLayers.Layer.TMS"});OpenLayers.Layer.XYZ=OpenLayers.Class(OpenLayers.Layer.Grid,{isBaseLayer:true,sphericalMercator:false,zoomOffset:0,initialize:function(name,url,options){if(options&&options.sphericalMercator||this.sphericalMercator){options=OpenLayers.Util.extend({maxExtent:new OpenLayers.Bounds(-128*156543.0339,-128*156543.0339,128*156543.0339,128*156543.0339),maxResolution:156543.0339,numZoomLevels:19,units:"m",projection:"EPSG:900913"},options);}
url=url||this.url;name=name||this.name;var newArguments=[name,url,{},options];OpenLayers.Layer.Grid.prototype.initialize.apply(this,newArguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.XYZ(this.name,this.url,this.getOptions());}
obj=OpenLayers.Layer.Grid.prototype.clone.apply(this,[obj]);return obj;},getURL:function(bounds){var res=this.map.getResolution();var x=Math.round((bounds.left-this.maxExtent.left)/(res*this.tileSize.w));var y=Math.round((this.maxExtent.top-bounds.top)/(res*this.tileSize.h));var z=this.map.getZoom()+this.zoomOffset;var url=this.url;var s=''+x+y+z;if(url instanceof Array)
{url=this.selectUrl(s,url);}
var path=OpenLayers.String.format(url,{'x':x,'y':y,'z':z});return path;},addTile:function(bounds,position){return new OpenLayers.Tile.Image(this,position,bounds,null,this.tileSize);},setMap:function(map){OpenLayers.Layer.Grid.prototype.setMap.apply(this,arguments);if(!this.tileOrigin){this.tileOrigin=new OpenLayers.LonLat(this.maxExtent.left,this.maxExtent.bottom);}},CLASS_NAME:"OpenLayers.Layer.XYZ"});OpenLayers.Layer.OSM=OpenLayers.Class(OpenLayers.Layer.XYZ,{name:"OpenStreetMap",attribution:"Data CC-By-SA by <a href='http://openstreetmap.org/'>OpenStreetMap</a>",sphericalMercator:true,url:'http://tile.openstreetmap.org/${z}/${x}/${y}.png',clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.OSM(this.name,this.url,this.getOptions());}
obj=OpenLayers.Layer.XYZ.prototype.clone.apply(this,[obj]);return obj;},CLASS_NAME:"OpenLayers.Layer.OSM"});OpenLayers.Rule=OpenLayers.Class({id:null,name:null,title:null,description:null,context:null,filter:null,elseFilter:false,symbolizer:null,symbolizers:null,minScaleDenominator:null,maxScaleDenominator:null,initialize:function(options){this.symbolizer={};OpenLayers.Util.extend(this,options);if(this.symbolizers){delete this.symbolizer;}
this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");},destroy:function(){for(var i in this.symbolizer){this.symbolizer[i]=null;}
this.symbolizer=null;delete this.symbolizers;},evaluate:function(feature){var context=this.getContext(feature);var applies=true;if(this.minScaleDenominator||this.maxScaleDenominator){var scale=feature.layer.map.getScale();}
if(this.minScaleDenominator){applies=scale>=OpenLayers.Style.createLiteral(this.minScaleDenominator,context);}
if(applies&&this.maxScaleDenominator){applies=scale<OpenLayers.Style.createLiteral(this.maxScaleDenominator,context);}
if(applies&&this.filter){if(this.filter.CLASS_NAME=="OpenLayers.Filter.FeatureId"){applies=this.filter.evaluate(feature);}else{applies=this.filter.evaluate(context);}}
return applies;},getContext:function(feature){var context=this.context;if(!context){context=feature.attributes||feature.data;}
if(typeof this.context=="function"){context=this.context(feature);}
return context;},clone:function(){var options=OpenLayers.Util.extend({},this);if(this.symbolizers){var len=this.symbolizers.length;options.symbolizers=new Array(len);for(var i=0;i<len;++i){options.symbolizers[i]=this.symbolizers[i].clone();}}else{options.symbolizer={};var value,type;for(var key in this.symbolizer){value=this.symbolizer[key];type=typeof value;if(type==="object"){options.symbolizer[key]=OpenLayers.Util.extend({},value);}else if(type==="string"){options.symbolizer[key]=value;}}}
options.filter=this.filter&&this.filter.clone();options.context=this.context&&OpenLayers.Util.extend({},this.context);return new OpenLayers.Rule(options);},CLASS_NAME:"OpenLayers.Rule"});OpenLayers.StyleMap=OpenLayers.Class({styles:null,extendDefault:true,initialize:function(style,options){this.styles={"default":new OpenLayers.Style(OpenLayers.Feature.Vector.style["default"]),"select":new OpenLayers.Style(OpenLayers.Feature.Vector.style["select"]),"temporary":new OpenLayers.Style(OpenLayers.Feature.Vector.style["temporary"]),"delete":new OpenLayers.Style(OpenLayers.Feature.Vector.style["delete"])};if(style instanceof OpenLayers.Style){this.styles["default"]=style;this.styles["select"]=style;this.styles["temporary"]=style;this.styles["delete"]=style;}else if(typeof style=="object"){for(var key in style){if(style[key]instanceof OpenLayers.Style){this.styles[key]=style[key];}else if(typeof style[key]=="object"){this.styles[key]=new OpenLayers.Style(style[key]);}else{this.styles["default"]=new OpenLayers.Style(style);this.styles["select"]=new OpenLayers.Style(style);this.styles["temporary"]=new OpenLayers.Style(style);this.styles["delete"]=new OpenLayers.Style(style);break;}}}
OpenLayers.Util.extend(this,options);},destroy:function(){for(var key in this.styles){this.styles[key].destroy();}
this.styles=null;},createSymbolizer:function(feature,intent){if(!feature){feature=new OpenLayers.Feature.Vector();}
if(!this.styles[intent]){intent="default";}
feature.renderIntent=intent;var defaultSymbolizer={};if(this.extendDefault&&intent!="default"){defaultSymbolizer=this.styles["default"].createSymbolizer(feature);}
return OpenLayers.Util.extend(defaultSymbolizer,this.styles[intent].createSymbolizer(feature));},addUniqueValueRules:function(renderIntent,property,symbolizers,context){var rules=[];for(var value in symbolizers){rules.push(new OpenLayers.Rule({symbolizer:symbolizers[value],context:context,filter:new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.EQUAL_TO,property:property,value:value})}));}
this.styles[renderIntent].addRules(rules);},CLASS_NAME:"OpenLayers.StyleMap"});OpenLayers.Filter.Comparison=OpenLayers.Class(OpenLayers.Filter,{type:null,property:null,value:null,matchCase:true,lowerBoundary:null,upperBoundary:null,initialize:function(options){OpenLayers.Filter.prototype.initialize.apply(this,[options]);},evaluate:function(context){if(context instanceof OpenLayers.Feature.Vector){context=context.attributes;}
var result=false;var got=context[this.property];switch(this.type){case OpenLayers.Filter.Comparison.EQUAL_TO:var exp=this.value;if(!this.matchCase&&typeof got=="string"&&typeof exp=="string"){result=(got.toUpperCase()==exp.toUpperCase());}else{result=(got==exp);}
break;case OpenLayers.Filter.Comparison.NOT_EQUAL_TO:var exp=this.value;if(!this.matchCase&&typeof got=="string"&&typeof exp=="string"){result=(got.toUpperCase()!=exp.toUpperCase());}else{result=(got!=exp);}
break;case OpenLayers.Filter.Comparison.LESS_THAN:result=got<this.value;break;case OpenLayers.Filter.Comparison.GREATER_THAN:result=got>this.value;break;case OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO:result=got<=this.value;break;case OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO:result=got>=this.value;break;case OpenLayers.Filter.Comparison.BETWEEN:result=(got>=this.lowerBoundary)&&(got<=this.upperBoundary);break;case OpenLayers.Filter.Comparison.LIKE:var regexp=new RegExp(this.value,"gi");result=regexp.test(got);break;}
return result;},value2regex:function(wildCard,singleChar,escapeChar){if(wildCard=="."){var msg="'.' is an unsupported wildCard character for "+"OpenLayers.Filter.Comparison";OpenLayers.Console.error(msg);return null;}
wildCard=wildCard?wildCard:"*";singleChar=singleChar?singleChar:".";escapeChar=escapeChar?escapeChar:"!";this.value=this.value.replace(new RegExp("\\"+escapeChar+"(.|$)","g"),"\\$1");this.value=this.value.replace(new RegExp("\\"+singleChar,"g"),".");this.value=this.value.replace(new RegExp("\\"+wildCard,"g"),".*");this.value=this.value.replace(new RegExp("\\\\.\\*","g"),"\\"+wildCard);this.value=this.value.replace(new RegExp("\\\\\\.","g"),"\\"+singleChar);return this.value;},regex2value:function(){var value=this.value;value=value.replace(/!/g,"!!");value=value.replace(/(\\)?\\\./g,function($0,$1){return $1?$0:"!.";});value=value.replace(/(\\)?\\\*/g,function($0,$1){return $1?$0:"!*";});value=value.replace(/\\\\/g,"\\");value=value.replace(/\.\*/g,"*");return value;},clone:function(){return OpenLayers.Util.extend(new OpenLayers.Filter.Comparison(),this);},CLASS_NAME:"OpenLayers.Filter.Comparison"});OpenLayers.Filter.Comparison.EQUAL_TO="==";OpenLayers.Filter.Comparison.NOT_EQUAL_TO="!=";OpenLayers.Filter.Comparison.LESS_THAN="<";OpenLayers.Filter.Comparison.GREATER_THAN=">";OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO="<=";OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO=">=";OpenLayers.Filter.Comparison.BETWEEN="..";OpenLayers.Filter.Comparison.LIKE="~";OpenLayers.Geometry.Collection=OpenLayers.Class(OpenLayers.Geometry,{components:null,componentTypes:null,initialize:function(components){OpenLayers.Geometry.prototype.initialize.apply(this,arguments);this.components=[];if(components!=null){this.addComponents(components);}},destroy:function(){this.components.length=0;this.components=null;OpenLayers.Geometry.prototype.destroy.apply(this,arguments);},clone:function(){var geometry=eval("new "+this.CLASS_NAME+"()");for(var i=0,len=this.components.length;i<len;i++){geometry.addComponent(this.components[i].clone());}
OpenLayers.Util.applyDefaults(geometry,this);return geometry;},getComponentsString:function(){var strings=[];for(var i=0,len=this.components.length;i<len;i++){strings.push(this.components[i].toShortString());}
return strings.join(",");},calculateBounds:function(){this.bounds=null;if(this.components&&this.components.length>0){this.setBounds(this.components[0].getBounds());for(var i=1,len=this.components.length;i<len;i++){this.extendBounds(this.components[i].getBounds());}}},addComponents:function(components){if(!(components instanceof Array)){components=[components];}
for(var i=0,len=components.length;i<len;i++){this.addComponent(components[i]);}},addComponent:function(component,index){var added=false;if(component){if(this.componentTypes==null||(OpenLayers.Util.indexOf(this.componentTypes,component.CLASS_NAME)>-1)){if(index!=null&&(index<this.components.length)){var components1=this.components.slice(0,index);var components2=this.components.slice(index,this.components.length);components1.push(component);this.components=components1.concat(components2);}else{this.components.push(component);}
component.parent=this;this.clearBounds();added=true;}}
return added;},removeComponents:function(components){if(!(components instanceof Array)){components=[components];}
for(var i=components.length-1;i>=0;--i){this.removeComponent(components[i]);}},removeComponent:function(component){OpenLayers.Util.removeItem(this.components,component);this.clearBounds();},getLength:function(){var length=0.0;for(var i=0,len=this.components.length;i<len;i++){length+=this.components[i].getLength();}
return length;},getArea:function(){var area=0.0;for(var i=0,len=this.components.length;i<len;i++){area+=this.components[i].getArea();}
return area;},getGeodesicArea:function(projection){var area=0.0;for(var i=0,len=this.components.length;i<len;i++){area+=this.components[i].getGeodesicArea(projection);}
return area;},getCentroid:function(weighted){if(!weighted){return this.components.length&&this.components[0].getCentroid();}
var len=this.components.length;if(!len){return false;}
var areas=[];var centroids=[];var areaSum=0;var minArea=Number.MAX_VALUE;var component;for(var i=0;i<len;++i){component=this.components[i];var area=component.getArea();var centroid=component.getCentroid(true);if(isNaN(area)||isNaN(centroid.x)||isNaN(centroid.y)){continue;}
areas.push(area);areaSum+=area;minArea=(area<minArea&&area>0)?area:minArea;centroids.push(centroid);}
len=areas.length;if(areaSum===0){for(var i=0;i<len;++i){areas[i]=1;}
areaSum=areas.length;}else{for(var i=0;i<len;++i){areas[i]/=minArea;}
areaSum/=minArea;}
var xSum=0,ySum=0,centroid,area;for(var i=0;i<len;++i){centroid=centroids[i];area=areas[i];xSum+=centroid.x*area;ySum+=centroid.y*area;}
return new OpenLayers.Geometry.Point(xSum/areaSum,ySum/areaSum);},getGeodesicLength:function(projection){var length=0.0;for(var i=0,len=this.components.length;i<len;i++){length+=this.components[i].getGeodesicLength(projection);}
return length;},move:function(x,y){for(var i=0,len=this.components.length;i<len;i++){this.components[i].move(x,y);}},rotate:function(angle,origin){for(var i=0,len=this.components.length;i<len;++i){this.components[i].rotate(angle,origin);}},resize:function(scale,origin,ratio){for(var i=0;i<this.components.length;++i){this.components[i].resize(scale,origin,ratio);}
return this;},distanceTo:function(geometry,options){var edge=!(options&&options.edge===false);var details=edge&&options&&options.details;var result,best,distance;var min=Number.POSITIVE_INFINITY;for(var i=0,len=this.components.length;i<len;++i){result=this.components[i].distanceTo(geometry,options);distance=details?result.distance:result;if(distance<min){min=distance;best=result;if(min==0){break;}}}
return best;},equals:function(geometry){var equivalent=true;if(!geometry||!geometry.CLASS_NAME||(this.CLASS_NAME!=geometry.CLASS_NAME)){equivalent=false;}else if(!(geometry.components instanceof Array)||(geometry.components.length!=this.components.length)){equivalent=false;}else{for(var i=0,len=this.components.length;i<len;++i){if(!this.components[i].equals(geometry.components[i])){equivalent=false;break;}}}
return equivalent;},transform:function(source,dest){if(source&&dest){for(var i=0,len=this.components.length;i<len;i++){var component=this.components[i];component.transform(source,dest);}
this.bounds=null;}
return this;},intersects:function(geometry){var intersect=false;for(var i=0,len=this.components.length;i<len;++i){intersect=geometry.intersects(this.components[i]);if(intersect){break;}}
return intersect;},getVertices:function(nodes){var vertices=[];for(var i=0,len=this.components.length;i<len;++i){Array.prototype.push.apply(vertices,this.components[i].getVertices(nodes));}
return vertices;},CLASS_NAME:"OpenLayers.Geometry.Collection"});OpenLayers.Geometry.Point=OpenLayers.Class(OpenLayers.Geometry,{x:null,y:null,initialize:function(x,y){OpenLayers.Geometry.prototype.initialize.apply(this,arguments);this.x=parseFloat(x);this.y=parseFloat(y);},clone:function(obj){if(obj==null){obj=new OpenLayers.Geometry.Point(this.x,this.y);}
OpenLayers.Util.applyDefaults(obj,this);return obj;},calculateBounds:function(){this.bounds=new OpenLayers.Bounds(this.x,this.y,this.x,this.y);},distanceTo:function(geometry,options){var edge=!(options&&options.edge===false);var details=edge&&options&&options.details;var distance,x0,y0,x1,y1,result;if(geometry instanceof OpenLayers.Geometry.Point){x0=this.x;y0=this.y;x1=geometry.x;y1=geometry.y;distance=Math.sqrt(Math.pow(x0-x1,2)+Math.pow(y0-y1,2));result=!details?distance:{x0:x0,y0:y0,x1:x1,y1:y1,distance:distance};}else{result=geometry.distanceTo(this,options);if(details){result={x0:result.x1,y0:result.y1,x1:result.x0,y1:result.y0,distance:result.distance};}}
return result;},equals:function(geom){var equals=false;if(geom!=null){equals=((this.x==geom.x&&this.y==geom.y)||(isNaN(this.x)&&isNaN(this.y)&&isNaN(geom.x)&&isNaN(geom.y)));}
return equals;},toShortString:function(){return(this.x+", "+this.y);},move:function(x,y){this.x=this.x+x;this.y=this.y+y;this.clearBounds();},rotate:function(angle,origin){angle*=Math.PI/180;var radius=this.distanceTo(origin);var theta=angle+Math.atan2(this.y-origin.y,this.x-origin.x);this.x=origin.x+(radius*Math.cos(theta));this.y=origin.y+(radius*Math.sin(theta));this.clearBounds();},getCentroid:function(){return new OpenLayers.Geometry.Point(this.x,this.y);},resize:function(scale,origin,ratio){ratio=(ratio==undefined)?1:ratio;this.x=origin.x+(scale*ratio*(this.x-origin.x));this.y=origin.y+(scale*(this.y-origin.y));this.clearBounds();return this;},intersects:function(geometry){var intersect=false;if(geometry.CLASS_NAME=="OpenLayers.Geometry.Point"){intersect=this.equals(geometry);}else{intersect=geometry.intersects(this);}
return intersect;},transform:function(source,dest){if((source&&dest)){OpenLayers.Projection.transform(this,source,dest);this.bounds=null;}
return this;},getVertices:function(nodes){return[this];},CLASS_NAME:"OpenLayers.Geometry.Point"});OpenLayers.Layer.Vector=OpenLayers.Class(OpenLayers.Layer,{EVENT_TYPES:["beforefeatureadded","beforefeaturesadded","featureadded","featuresadded","beforefeatureremoved","beforefeaturesremoved","featureremoved","featuresremoved","beforefeatureselected","featureselected","featureunselected","beforefeaturemodified","featuremodified","afterfeaturemodified","vertexmodified","sketchstarted","sketchmodified","sketchcomplete","refresh"],isBaseLayer:false,isFixed:false,features:null,filter:null,selectedFeatures:null,unrenderedFeatures:null,reportError:true,style:null,styleMap:null,strategies:null,protocol:null,renderers:['SVG','VML','Canvas'],renderer:null,rendererOptions:null,geometryType:null,drawn:false,initialize:function(name,options){this.EVENT_TYPES=OpenLayers.Layer.Vector.prototype.EVENT_TYPES.concat(OpenLayers.Layer.prototype.EVENT_TYPES);OpenLayers.Layer.prototype.initialize.apply(this,arguments);if(!this.renderer||!this.renderer.supported()){this.assignRenderer();}
if(!this.renderer||!this.renderer.supported()){this.renderer=null;this.displayError();}
if(!this.styleMap){this.styleMap=new OpenLayers.StyleMap();}
this.features=[];this.selectedFeatures=[];this.unrenderedFeatures={};if(this.strategies){for(var i=0,len=this.strategies.length;i<len;i++){this.strategies[i].setLayer(this);}}},destroy:function(){if(this.strategies){var strategy,i,len;for(i=0,len=this.strategies.length;i<len;i++){strategy=this.strategies[i];if(strategy.autoDestroy){strategy.destroy();}}
this.strategies=null;}
if(this.protocol){if(this.protocol.autoDestroy){this.protocol.destroy();}
this.protocol=null;}
this.destroyFeatures();this.features=null;this.selectedFeatures=null;this.unrenderedFeatures=null;if(this.renderer){this.renderer.destroy();}
this.renderer=null;this.geometryType=null;this.drawn=null;OpenLayers.Layer.prototype.destroy.apply(this,arguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.Vector(this.name,this.getOptions());}
obj=OpenLayers.Layer.prototype.clone.apply(this,[obj]);var features=this.features;var len=features.length;var clonedFeatures=new Array(len);for(var i=0;i<len;++i){clonedFeatures[i]=features[i].clone();}
obj.features=clonedFeatures;return obj;},refresh:function(obj){if(this.calculateInRange()&&this.visibility){this.events.triggerEvent("refresh",obj);}},assignRenderer:function(){for(var i=0,len=this.renderers.length;i<len;i++){var rendererClass=this.renderers[i];var renderer=(typeof rendererClass=="function")?rendererClass:OpenLayers.Renderer[rendererClass];if(renderer&&renderer.prototype.supported()){this.renderer=new renderer(this.div,this.rendererOptions);break;}}},displayError:function(){if(this.reportError){OpenLayers.Console.userError(OpenLayers.i18n("browserNotSupported",{'renderers':this.renderers.join("\n")}));}},setMap:function(map){OpenLayers.Layer.prototype.setMap.apply(this,arguments);if(!this.renderer){this.map.removeLayer(this);}else{this.renderer.map=this.map;this.renderer.setSize(this.map.getSize());}},afterAdd:function(){if(this.strategies){var strategy,i,len;for(i=0,len=this.strategies.length;i<len;i++){strategy=this.strategies[i];if(strategy.autoActivate){strategy.activate();}}}},removeMap:function(map){this.drawn=false;if(this.strategies){var strategy,i,len;for(i=0,len=this.strategies.length;i<len;i++){strategy=this.strategies[i];if(strategy.autoActivate){strategy.deactivate();}}}},onMapResize:function(){OpenLayers.Layer.prototype.onMapResize.apply(this,arguments);this.renderer.setSize(this.map.getSize());},moveTo:function(bounds,zoomChanged,dragging){OpenLayers.Layer.prototype.moveTo.apply(this,arguments);var coordSysUnchanged=true;if(!dragging){this.renderer.root.style.visibility="hidden";this.div.style.left=-parseInt(this.map.layerContainerDiv.style.left)+"px";this.div.style.top=-parseInt(this.map.layerContainerDiv.style.top)+"px";var extent=this.map.getExtent();coordSysUnchanged=this.renderer.setExtent(extent,zoomChanged);this.renderer.root.style.visibility="visible";if(OpenLayers.IS_GECKO===true){this.div.scrollLeft=this.div.scrollLeft;}
if(!zoomChanged&&coordSysUnchanged){for(var i in this.unrenderedFeatures){var feature=this.unrenderedFeatures[i];this.drawFeature(feature);}}}
if(!this.drawn||zoomChanged||!coordSysUnchanged){this.drawn=true;var feature;for(var i=0,len=this.features.length;i<len;i++){this.renderer.locked=(i!==(len-1));feature=this.features[i];this.drawFeature(feature);}}},display:function(display){OpenLayers.Layer.prototype.display.apply(this,arguments);var currentDisplay=this.div.style.display;if(currentDisplay!=this.renderer.root.style.display){this.renderer.root.style.display=currentDisplay;}},addFeatures:function(features,options){if(!(features instanceof Array)){features=[features];}
var notify=!options||!options.silent;if(notify){var event={features:features};var ret=this.events.triggerEvent("beforefeaturesadded",event);if(ret===false){return;}
features=event.features;}
var featuresAdded=[];for(var i=0,len=features.length;i<len;i++){if(i!=(features.length-1)){this.renderer.locked=true;}else{this.renderer.locked=false;}
var feature=features[i];if(this.geometryType&&!(feature.geometry instanceof this.geometryType)){var throwStr=OpenLayers.i18n('componentShouldBe',{'geomType':this.geometryType.prototype.CLASS_NAME});throw throwStr;}
feature.layer=this;if(!feature.style&&this.style){feature.style=OpenLayers.Util.extend({},this.style);}
if(notify){if(this.events.triggerEvent("beforefeatureadded",{feature:feature})===false){continue;};this.preFeatureInsert(feature);}
featuresAdded.push(feature);this.features.push(feature);this.drawFeature(feature);if(notify){this.events.triggerEvent("featureadded",{feature:feature});this.onFeatureInsert(feature);}}
if(notify){this.events.triggerEvent("featuresadded",{features:featuresAdded});}},removeFeatures:function(features,options){if(!features||features.length===0){return;}
if(features===this.features){return this.removeAllFeatures(options);}
if(!(features instanceof Array)){features=[features];}
if(features===this.selectedFeatures){features=features.slice();}
var notify=!options||!options.silent;if(notify){this.events.triggerEvent("beforefeaturesremoved",{features:features});}
for(var i=features.length-1;i>=0;i--){if(i!=0&&features[i-1].geometry){this.renderer.locked=true;}else{this.renderer.locked=false;}
var feature=features[i];delete this.unrenderedFeatures[feature.id];if(notify){this.events.triggerEvent("beforefeatureremoved",{feature:feature});}
this.features=OpenLayers.Util.removeItem(this.features,feature);feature.layer=null;if(feature.geometry){this.renderer.eraseFeatures(feature);}
if(OpenLayers.Util.indexOf(this.selectedFeatures,feature)!=-1){OpenLayers.Util.removeItem(this.selectedFeatures,feature);}
if(notify){this.events.triggerEvent("featureremoved",{feature:feature});}}
if(notify){this.events.triggerEvent("featuresremoved",{features:features});}},removeAllFeatures:function(options){var notify=!options||!options.silent;var features=this.features;if(notify){this.events.triggerEvent("beforefeaturesremoved",{features:features});}
var feature;for(var i=features.length-1;i>=0;i--){feature=features[i];if(notify){this.events.triggerEvent("beforefeatureremoved",{feature:feature});}
feature.layer=null;if(notify){this.events.triggerEvent("featureremoved",{feature:feature});}}
this.renderer.clear();this.features=[];this.unrenderedFeatures={};this.selectedFeatures=[];if(notify){this.events.triggerEvent("featuresremoved",{features:features});}},destroyFeatures:function(features,options){var all=(features==undefined);if(all){features=this.features;}
if(features){this.removeFeatures(features,options);for(var i=features.length-1;i>=0;i--){features[i].destroy();}}},drawFeature:function(feature,style){if(!this.drawn){return}
if(typeof style!="object"){if(!style&&feature.state===OpenLayers.State.DELETE){style="delete";}
var renderIntent=style||feature.renderIntent;style=feature.style||this.style;if(!style){style=this.styleMap.createSymbolizer(feature,renderIntent);}}
if(!this.renderer.drawFeature(feature,style)){this.unrenderedFeatures[feature.id]=feature;}else{delete this.unrenderedFeatures[feature.id];};},eraseFeatures:function(features){this.renderer.eraseFeatures(features);},getFeatureFromEvent:function(evt){if(!this.renderer){OpenLayers.Console.error(OpenLayers.i18n("getFeatureError"));return null;}
var featureId=this.renderer.getFeatureIdFromEvent(evt);return this.getFeatureById(featureId);},getFeatureBy:function(property,value){var feature=null;for(var i=0,len=this.features.length;i<len;++i){if(this.features[i][property]==value){feature=this.features[i];break;}}
return feature;},getFeatureById:function(featureId){return this.getFeatureBy('id',featureId);},getFeatureByFid:function(featureFid){return this.getFeatureBy('fid',featureFid);},onFeatureInsert:function(feature){},preFeatureInsert:function(feature){},getDataExtent:function(){var maxExtent=null;var features=this.features;if(features&&(features.length>0)){maxExtent=new OpenLayers.Bounds();var geometry=null;for(var i=0,len=features.length;i<len;i++){geometry=features[i].geometry;if(geometry){maxExtent.extend(geometry.getBounds());}}}
return maxExtent;},CLASS_NAME:"OpenLayers.Layer.Vector"});OpenLayers.Geometry.MultiPoint=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.Point"],initialize:function(components){OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);},addPoint:function(point,index){this.addComponent(point,index);},removePoint:function(point){this.removeComponent(point);},CLASS_NAME:"OpenLayers.Geometry.MultiPoint"});OpenLayers.Handler.Point=OpenLayers.Class(OpenLayers.Handler,{point:null,layer:null,multi:false,drawing:false,mouseDown:false,lastDown:null,lastUp:null,persist:false,layerOptions:null,initialize:function(control,callbacks,options){if(!(options&&options.layerOptions&&options.layerOptions.styleMap)){this.style=OpenLayers.Util.extend(OpenLayers.Feature.Vector.style['default'],{});}
OpenLayers.Handler.prototype.initialize.apply(this,arguments);},activate:function(){if(!OpenLayers.Handler.prototype.activate.apply(this,arguments)){return false;}
var options=OpenLayers.Util.extend({displayInLayerSwitcher:false,calculateInRange:OpenLayers.Function.True},this.layerOptions);this.layer=new OpenLayers.Layer.Vector(this.CLASS_NAME,options);this.map.addLayer(this.layer);return true;},createFeature:function(pixel){var lonlat=this.map.getLonLatFromPixel(pixel);this.point=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(lonlat.lon,lonlat.lat));this.callback("create",[this.point.geometry,this.point]);this.point.geometry.clearBounds();this.layer.addFeatures([this.point],{silent:true});},deactivate:function(){if(!OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){return false;}
if(this.drawing){this.cancel();}
this.destroyFeature();if(this.layer.map!=null){this.layer.destroy(false);}
this.layer=null;return true;},destroyFeature:function(){if(this.layer){this.layer.destroyFeatures();}
this.point=null;},finalize:function(cancel){var key=cancel?"cancel":"done";this.drawing=false;this.mouseDown=false;this.lastDown=null;this.lastUp=null;this.callback(key,[this.geometryClone()]);if(cancel||!this.persist){this.destroyFeature();}},cancel:function(){this.finalize(true);},click:function(evt){OpenLayers.Event.stop(evt);return false;},dblclick:function(evt){OpenLayers.Event.stop(evt);return false;},modifyFeature:function(pixel){var lonlat=this.map.getLonLatFromPixel(pixel);this.point.geometry.x=lonlat.lon;this.point.geometry.y=lonlat.lat;this.callback("modify",[this.point.geometry,this.point]);this.point.geometry.clearBounds();this.drawFeature();},drawFeature:function(){this.layer.drawFeature(this.point,this.style);},getGeometry:function(){var geometry=this.point&&this.point.geometry;if(geometry&&this.multi){geometry=new OpenLayers.Geometry.MultiPoint([geometry]);}
return geometry;},geometryClone:function(){var geom=this.getGeometry();return geom&&geom.clone();},mousedown:function(evt){if(!this.checkModifiers(evt)){return true;}
if(this.lastDown&&this.lastDown.equals(evt.xy)){return true;}
this.drawing=true;if(this.lastDown==null){if(this.persist){this.destroyFeature();}
this.createFeature(evt.xy);}else{this.modifyFeature(evt.xy);}
this.lastDown=evt.xy;return false;},mousemove:function(evt){if(this.drawing){this.modifyFeature(evt.xy);}
return true;},mouseup:function(evt){if(this.drawing){this.finalize();return false;}else{return true;}},CLASS_NAME:"OpenLayers.Handler.Point"});OpenLayers.Layer.Vector.RootContainer=OpenLayers.Class(OpenLayers.Layer.Vector,{displayInLayerSwitcher:false,layers:null,initialize:function(name,options){OpenLayers.Layer.Vector.prototype.initialize.apply(this,arguments);},display:function(){},getFeatureFromEvent:function(evt){var layers=this.layers;var feature;for(var i=0;i<layers.length;i++){feature=layers[i].getFeatureFromEvent(evt);if(feature){return feature;}}},setMap:function(map){OpenLayers.Layer.Vector.prototype.setMap.apply(this,arguments);this.collectRoots();map.events.register("changelayer",this,this.handleChangeLayer);},removeMap:function(map){map.events.unregister("changelayer",this,this.handleChangeLayer);this.resetRoots();OpenLayers.Layer.Vector.prototype.removeMap.apply(this,arguments);},collectRoots:function(){var layer;for(var i=0;i<this.map.layers.length;++i){layer=this.map.layers[i];if(OpenLayers.Util.indexOf(this.layers,layer)!=-1){layer.renderer.moveRoot(this.renderer);}}},resetRoots:function(){var layer;for(var i=0;i<this.layers.length;++i){layer=this.layers[i];if(this.renderer&&layer.renderer.getRenderLayerId()==this.id){this.renderer.moveRoot(layer.renderer);}}},handleChangeLayer:function(evt){var layer=evt.layer;if(evt.property=="order"&&OpenLayers.Util.indexOf(this.layers,layer)!=-1){this.resetRoots();this.collectRoots();}},CLASS_NAME:"OpenLayers.Layer.Vector.RootContainer"});OpenLayers.Control.SelectFeature=OpenLayers.Class(OpenLayers.Control,{EVENT_TYPES:["beforefeaturehighlighted","featurehighlighted","featureunhighlighted"],multipleKey:null,toggleKey:null,multiple:false,clickout:true,toggle:false,hover:false,highlightOnly:false,box:false,onBeforeSelect:function(){},onSelect:function(){},onUnselect:function(){},scope:null,geometryTypes:null,layer:null,layers:null,callbacks:null,selectStyle:null,renderIntent:"select",handlers:null,initialize:function(layers,options){this.EVENT_TYPES=OpenLayers.Control.SelectFeature.prototype.EVENT_TYPES.concat(OpenLayers.Control.prototype.EVENT_TYPES);OpenLayers.Control.prototype.initialize.apply(this,[options]);if(this.scope===null){this.scope=this;}
this.initLayer(layers);var callbacks={click:this.clickFeature,clickout:this.clickoutFeature};if(this.hover){callbacks.over=this.overFeature;callbacks.out=this.outFeature;}
this.callbacks=OpenLayers.Util.extend(callbacks,this.callbacks);this.handlers={feature:new OpenLayers.Handler.Feature(this,this.layer,this.callbacks,{geometryTypes:this.geometryTypes})};if(this.box){this.handlers.box=new OpenLayers.Handler.Box(this,{done:this.selectBox},{boxDivClassName:"olHandlerBoxSelectFeature"});}},initLayer:function(layers){if(layers instanceof Array){this.layers=layers;this.layer=new OpenLayers.Layer.Vector.RootContainer(this.id+"_container",{layers:layers});}else{this.layer=layers;}},destroy:function(){if(this.active&&this.layers){this.map.removeLayer(this.layer);}
OpenLayers.Control.prototype.destroy.apply(this,arguments);if(this.layers){this.layer.destroy();}},activate:function(){if(!this.active){if(this.layers){this.map.addLayer(this.layer);}
this.handlers.feature.activate();if(this.box&&this.handlers.box){this.handlers.box.activate();}}
return OpenLayers.Control.prototype.activate.apply(this,arguments);},deactivate:function(){if(this.active){this.handlers.feature.deactivate();if(this.handlers.box){this.handlers.box.deactivate();}
if(this.layers){this.map.removeLayer(this.layer);}}
return OpenLayers.Control.prototype.deactivate.apply(this,arguments);},unselectAll:function(options){var layers=this.layers||[this.layer];var layer,feature;for(var l=0;l<layers.length;++l){layer=layers[l];for(var i=layer.selectedFeatures.length-1;i>=0;--i){feature=layer.selectedFeatures[i];if(!options||options.except!=feature){this.unselect(feature);}}}},clickFeature:function(feature){if(!this.hover){var selected=(OpenLayers.Util.indexOf(feature.layer.selectedFeatures,feature)>-1);if(selected){if(this.toggleSelect()){this.unselect(feature);}else if(!this.multipleSelect()){this.unselectAll({except:feature});}}else{if(!this.multipleSelect()){this.unselectAll({except:feature});}
this.select(feature);}}},multipleSelect:function(){return this.multiple||(this.handlers.feature.evt&&this.handlers.feature.evt[this.multipleKey]);},toggleSelect:function(){return this.toggle||(this.handlers.feature.evt&&this.handlers.feature.evt[this.toggleKey]);},clickoutFeature:function(feature){if(!this.hover&&this.clickout){this.unselectAll();}},overFeature:function(feature){var layer=feature.layer;if(this.hover){if(this.highlightOnly){this.highlight(feature);}else if(OpenLayers.Util.indexOf(layer.selectedFeatures,feature)==-1){this.select(feature);}}},outFeature:function(feature){if(this.hover){if(this.highlightOnly){if(feature._lastHighlighter==this.id){if(feature._prevHighlighter&&feature._prevHighlighter!=this.id){delete feature._lastHighlighter;var control=this.map.getControl(feature._prevHighlighter);if(control){control.highlight(feature);}}else{this.unhighlight(feature);}}}else{this.unselect(feature);}}},highlight:function(feature){var layer=feature.layer;var cont=this.events.triggerEvent("beforefeaturehighlighted",{feature:feature});if(cont!==false){feature._prevHighlighter=feature._lastHighlighter;feature._lastHighlighter=this.id;var style=this.selectStyle||this.renderIntent;layer.drawFeature(feature,style);this.events.triggerEvent("featurehighlighted",{feature:feature});}},unhighlight:function(feature){var layer=feature.layer;feature._lastHighlighter=feature._prevHighlighter;delete feature._prevHighlighter;layer.drawFeature(feature,feature.style||feature.layer.style||"default");this.events.triggerEvent("featureunhighlighted",{feature:feature});},select:function(feature){var cont=this.onBeforeSelect.call(this.scope,feature);var layer=feature.layer;if(cont!==false){cont=layer.events.triggerEvent("beforefeatureselected",{feature:feature});if(cont!==false){layer.selectedFeatures.push(feature);this.highlight(feature);if(!this.handlers.feature.lastFeature){this.handlers.feature.lastFeature=layer.selectedFeatures[0];}
layer.events.triggerEvent("featureselected",{feature:feature});this.onSelect.call(this.scope,feature);}}},unselect:function(feature){var layer=feature.layer;this.unhighlight(feature);OpenLayers.Util.removeItem(layer.selectedFeatures,feature);layer.events.triggerEvent("featureunselected",{feature:feature});this.onUnselect.call(this.scope,feature);},selectBox:function(position){if(position instanceof OpenLayers.Bounds){var minXY=this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.left,position.bottom));var maxXY=this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.right,position.top));var bounds=new OpenLayers.Bounds(minXY.lon,minXY.lat,maxXY.lon,maxXY.lat);if(!this.multipleSelect()){this.unselectAll();}
var prevMultiple=this.multiple;this.multiple=true;var layers=this.layers||[this.layer];var layer;for(var l=0;l<layers.length;++l){layer=layers[l];for(var i=0,len=layer.features.length;i<len;++i){var feature=layer.features[i];if(!feature.getVisibility()){continue;}
if(this.geometryTypes==null||OpenLayers.Util.indexOf(this.geometryTypes,feature.geometry.CLASS_NAME)>-1){if(bounds.toGeometry().intersects(feature.geometry)){if(OpenLayers.Util.indexOf(layer.selectedFeatures,feature)==-1){this.select(feature);}}}}}
this.multiple=prevMultiple;}},setMap:function(map){this.handlers.feature.setMap(map);if(this.box){this.handlers.box.setMap(map);}
OpenLayers.Control.prototype.setMap.apply(this,arguments);},setLayer:function(layers){var isActive=this.active;this.unselectAll();this.deactivate();if(this.layers){this.layer.destroy();this.layers=null;}
this.initLayer(layers);this.handlers.feature.layer=this.layer;if(isActive){this.activate();}},CLASS_NAME:"OpenLayers.Control.SelectFeature"});OpenLayers.Geometry.Curve=OpenLayers.Class(OpenLayers.Geometry.MultiPoint,{componentTypes:["OpenLayers.Geometry.Point"],initialize:function(points){OpenLayers.Geometry.MultiPoint.prototype.initialize.apply(this,arguments);},getLength:function(){var length=0.0;if(this.components&&(this.components.length>1)){for(var i=1,len=this.components.length;i<len;i++){length+=this.components[i-1].distanceTo(this.components[i]);}}
return length;},getGeodesicLength:function(projection){var geom=this;if(projection){var gg=new OpenLayers.Projection("EPSG:4326");if(!gg.equals(projection)){geom=this.clone().transform(projection,gg);}}
var length=0.0;if(geom.components&&(geom.components.length>1)){var p1,p2;for(var i=1,len=geom.components.length;i<len;i++){p1=geom.components[i-1];p2=geom.components[i];length+=OpenLayers.Util.distVincenty({lon:p1.x,lat:p1.y},{lon:p2.x,lat:p2.y});}}
return length*1000;},CLASS_NAME:"OpenLayers.Geometry.Curve"});OpenLayers.Geometry.LineString=OpenLayers.Class(OpenLayers.Geometry.Curve,{initialize:function(points){OpenLayers.Geometry.Curve.prototype.initialize.apply(this,arguments);},removeComponent:function(point){if(this.components&&(this.components.length>2)){OpenLayers.Geometry.Collection.prototype.removeComponent.apply(this,arguments);}},intersects:function(geometry){var intersect=false;var type=geometry.CLASS_NAME;if(type=="OpenLayers.Geometry.LineString"||type=="OpenLayers.Geometry.LinearRing"||type=="OpenLayers.Geometry.Point"){var segs1=this.getSortedSegments();var segs2;if(type=="OpenLayers.Geometry.Point"){segs2=[{x1:geometry.x,y1:geometry.y,x2:geometry.x,y2:geometry.y}];}else{segs2=geometry.getSortedSegments();}
var seg1,seg1x1,seg1x2,seg1y1,seg1y2,seg2,seg2y1,seg2y2;outer:for(var i=0,len=segs1.length;i<len;++i){seg1=segs1[i];seg1x1=seg1.x1;seg1x2=seg1.x2;seg1y1=seg1.y1;seg1y2=seg1.y2;inner:for(var j=0,jlen=segs2.length;j<jlen;++j){seg2=segs2[j];if(seg2.x1>seg1x2){break;}
if(seg2.x2<seg1x1){continue;}
seg2y1=seg2.y1;seg2y2=seg2.y2;if(Math.min(seg2y1,seg2y2)>Math.max(seg1y1,seg1y2)){continue;}
if(Math.max(seg2y1,seg2y2)<Math.min(seg1y1,seg1y2)){continue;}
if(OpenLayers.Geometry.segmentsIntersect(seg1,seg2)){intersect=true;break outer;}}}}else{intersect=geometry.intersects(this);}
return intersect;},getSortedSegments:function(){var numSeg=this.components.length-1;var segments=new Array(numSeg),point1,point2;for(var i=0;i<numSeg;++i){point1=this.components[i];point2=this.components[i+1];if(point1.x<point2.x){segments[i]={x1:point1.x,y1:point1.y,x2:point2.x,y2:point2.y};}else{segments[i]={x1:point2.x,y1:point2.y,x2:point1.x,y2:point1.y};}}
function byX1(seg1,seg2){return seg1.x1-seg2.x1;}
return segments.sort(byX1);},splitWithSegment:function(seg,options){var edge=!(options&&options.edge===false);var tolerance=options&&options.tolerance;var lines=[];var verts=this.getVertices();var points=[];var intersections=[];var split=false;var vert1,vert2,point;var node,vertex,target;var interOptions={point:true,tolerance:tolerance};var result=null;for(var i=0,stop=verts.length-2;i<=stop;++i){vert1=verts[i];points.push(vert1.clone());vert2=verts[i+1];target={x1:vert1.x,y1:vert1.y,x2:vert2.x,y2:vert2.y};point=OpenLayers.Geometry.segmentsIntersect(seg,target,interOptions);if(point instanceof OpenLayers.Geometry.Point){if((point.x===seg.x1&&point.y===seg.y1)||(point.x===seg.x2&&point.y===seg.y2)||point.equals(vert1)||point.equals(vert2)){vertex=true;}else{vertex=false;}
if(vertex||edge){if(!point.equals(intersections[intersections.length-1])){intersections.push(point.clone());}
if(i===0){if(point.equals(vert1)){continue;}}
if(point.equals(vert2)){continue;}
split=true;if(!point.equals(vert1)){points.push(point);}
lines.push(new OpenLayers.Geometry.LineString(points));points=[point.clone()];}}}
if(split){points.push(vert2.clone());lines.push(new OpenLayers.Geometry.LineString(points));}
if(intersections.length>0){var xDir=seg.x1<seg.x2?1:-1;var yDir=seg.y1<seg.y2?1:-1;result={lines:lines,points:intersections.sort(function(p1,p2){return(xDir*p1.x-xDir*p2.x)||(yDir*p1.y-yDir*p2.y);})};}
return result;},split:function(target,options){var results=null;var mutual=options&&options.mutual;var sourceSplit,targetSplit,sourceParts,targetParts;if(target instanceof OpenLayers.Geometry.LineString){var verts=this.getVertices();var vert1,vert2,seg,splits,lines,point;var points=[];sourceParts=[];for(var i=0,stop=verts.length-2;i<=stop;++i){vert1=verts[i];vert2=verts[i+1];seg={x1:vert1.x,y1:vert1.y,x2:vert2.x,y2:vert2.y};targetParts=targetParts||[target];if(mutual){points.push(vert1.clone());}
for(var j=0;j<targetParts.length;++j){splits=targetParts[j].splitWithSegment(seg,options);if(splits){lines=splits.lines;if(lines.length>0){lines.unshift(j,1);Array.prototype.splice.apply(targetParts,lines);j+=lines.length-2;}
if(mutual){for(var k=0,len=splits.points.length;k<len;++k){point=splits.points[k];if(!point.equals(vert1)){points.push(point);sourceParts.push(new OpenLayers.Geometry.LineString(points));if(point.equals(vert2)){points=[];}else{points=[point.clone()];}}}}}}}
if(mutual&&sourceParts.length>0&&points.length>0){points.push(vert2.clone());sourceParts.push(new OpenLayers.Geometry.LineString(points));}}else{results=target.splitWith(this,options);}
if(targetParts&&targetParts.length>1){targetSplit=true;}else{targetParts=[];}
if(sourceParts&&sourceParts.length>1){sourceSplit=true;}else{sourceParts=[];}
if(targetSplit||sourceSplit){if(mutual){results=[sourceParts,targetParts];}else{results=targetParts;}}
return results;},splitWith:function(geometry,options){return geometry.split(this,options);},getVertices:function(nodes){var vertices;if(nodes===true){vertices=[this.components[0],this.components[this.components.length-1]];}else if(nodes===false){vertices=this.components.slice(1,this.components.length-1);}else{vertices=this.components.slice();}
return vertices;},distanceTo:function(geometry,options){var edge=!(options&&options.edge===false);var details=edge&&options&&options.details;var result,best={};var min=Number.POSITIVE_INFINITY;if(geometry instanceof OpenLayers.Geometry.Point){var segs=this.getSortedSegments();var x=geometry.x;var y=geometry.y;var seg;for(var i=0,len=segs.length;i<len;++i){seg=segs[i];result=OpenLayers.Geometry.distanceToSegment(geometry,seg);if(result.distance<min){min=result.distance;best=result;if(min===0){break;}}else{if(seg.x2>x&&((y>seg.y1&&y<seg.y2)||(y<seg.y1&&y>seg.y2))){break;}}}
if(details){best={distance:best.distance,x0:best.x,y0:best.y,x1:x,y1:y};}else{best=best.distance;}}else if(geometry instanceof OpenLayers.Geometry.LineString){var segs0=this.getSortedSegments();var segs1=geometry.getSortedSegments();var seg0,seg1,intersection,x0,y0;var len1=segs1.length;var interOptions={point:true};outer:for(var i=0,len=segs0.length;i<len;++i){seg0=segs0[i];x0=seg0.x1;y0=seg0.y1;for(var j=0;j<len1;++j){seg1=segs1[j];intersection=OpenLayers.Geometry.segmentsIntersect(seg0,seg1,interOptions);if(intersection){min=0;best={distance:0,x0:intersection.x,y0:intersection.y,x1:intersection.x,y1:intersection.y};break outer;}else{result=OpenLayers.Geometry.distanceToSegment({x:x0,y:y0},seg1);if(result.distance<min){min=result.distance;best={distance:min,x0:x0,y0:y0,x1:result.x,y1:result.y};}}}}
if(!details){best=best.distance;}
if(min!==0){if(seg0){result=geometry.distanceTo(new OpenLayers.Geometry.Point(seg0.x2,seg0.y2),options);var dist=details?result.distance:result;if(dist<min){if(details){best={distance:min,x0:result.x1,y0:result.y1,x1:result.x0,y1:result.y0};}else{best=dist;}}}}}else{best=geometry.distanceTo(this,options);if(details){best={distance:best.distance,x0:best.x1,y0:best.y1,x1:best.x0,y1:best.y0};}}
return best;},CLASS_NAME:"OpenLayers.Geometry.LineString"});OpenLayers.Geometry.LinearRing=OpenLayers.Class(OpenLayers.Geometry.LineString,{componentTypes:["OpenLayers.Geometry.Point"],initialize:function(points){OpenLayers.Geometry.LineString.prototype.initialize.apply(this,arguments);},addComponent:function(point,index){var added=false;var lastPoint=this.components.pop();if(index!=null||!point.equals(lastPoint)){added=OpenLayers.Geometry.Collection.prototype.addComponent.apply(this,arguments);}
var firstPoint=this.components[0];OpenLayers.Geometry.Collection.prototype.addComponent.apply(this,[firstPoint]);return added;},removeComponent:function(point){if(this.components.length>4){this.components.pop();OpenLayers.Geometry.Collection.prototype.removeComponent.apply(this,arguments);var firstPoint=this.components[0];OpenLayers.Geometry.Collection.prototype.addComponent.apply(this,[firstPoint]);}},move:function(x,y){for(var i=0,len=this.components.length;i<len-1;i++){this.components[i].move(x,y);}},rotate:function(angle,origin){for(var i=0,len=this.components.length;i<len-1;++i){this.components[i].rotate(angle,origin);}},resize:function(scale,origin,ratio){for(var i=0,len=this.components.length;i<len-1;++i){this.components[i].resize(scale,origin,ratio);}
return this;},transform:function(source,dest){if(source&&dest){for(var i=0,len=this.components.length;i<len-1;i++){var component=this.components[i];component.transform(source,dest);}
this.bounds=null;}
return this;},getCentroid:function(){if(this.components&&(this.components.length>2)){var sumX=0.0;var sumY=0.0;for(var i=0;i<this.components.length-1;i++){var b=this.components[i];var c=this.components[i+1];sumX+=(b.x+c.x)*(b.x*c.y-c.x*b.y);sumY+=(b.y+c.y)*(b.x*c.y-c.x*b.y);}
var area=-1*this.getArea();var x=sumX/(6*area);var y=sumY/(6*area);return new OpenLayers.Geometry.Point(x,y);}else{return null;}},getArea:function(){var area=0.0;if(this.components&&(this.components.length>2)){var sum=0.0;for(var i=0,len=this.components.length;i<len-1;i++){var b=this.components[i];var c=this.components[i+1];sum+=(b.x+c.x)*(c.y-b.y);}
area=-sum/2.0;}
return area;},getGeodesicArea:function(projection){var ring=this;if(projection){var gg=new OpenLayers.Projection("EPSG:4326");if(!gg.equals(projection)){ring=this.clone().transform(projection,gg);}}
var area=0.0;var len=ring.components&&ring.components.length;if(len>2){var p1,p2;for(var i=0;i<len-1;i++){p1=ring.components[i];p2=ring.components[i+1];area+=OpenLayers.Util.rad(p2.x-p1.x)*(2+Math.sin(OpenLayers.Util.rad(p1.y))+
Math.sin(OpenLayers.Util.rad(p2.y)));}
area=area*6378137.0*6378137.0/2.0;}
return area;},containsPoint:function(point){var approx=OpenLayers.Number.limitSigDigs;var digs=14;var px=approx(point.x,digs);var py=approx(point.y,digs);function getX(y,x1,y1,x2,y2){return(((x1-x2)*y)+((x2*y1)-(x1*y2)))/(y1-y2);}
var numSeg=this.components.length-1;var start,end,x1,y1,x2,y2,cx,cy;var crosses=0;for(var i=0;i<numSeg;++i){start=this.components[i];x1=approx(start.x,digs);y1=approx(start.y,digs);end=this.components[i+1];x2=approx(end.x,digs);y2=approx(end.y,digs);if(y1==y2){if(py==y1){if(x1<=x2&&(px>=x1&&px<=x2)||x1>=x2&&(px<=x1&&px>=x2)){crosses=-1;break;}}
continue;}
cx=approx(getX(py,x1,y1,x2,y2),digs);if(cx==px){if(y1<y2&&(py>=y1&&py<=y2)||y1>y2&&(py<=y1&&py>=y2)){crosses=-1;break;}}
if(cx<=px){continue;}
if(x1!=x2&&(cx<Math.min(x1,x2)||cx>Math.max(x1,x2))){continue;}
if(y1<y2&&(py>=y1&&py<y2)||y1>y2&&(py<y1&&py>=y2)){++crosses;}}
var contained=(crosses==-1)?1:!!(crosses&1);return contained;},intersects:function(geometry){var intersect=false;if(geometry.CLASS_NAME=="OpenLayers.Geometry.Point"){intersect=this.containsPoint(geometry);}else if(geometry.CLASS_NAME=="OpenLayers.Geometry.LineString"){intersect=geometry.intersects(this);}else if(geometry.CLASS_NAME=="OpenLayers.Geometry.LinearRing"){intersect=OpenLayers.Geometry.LineString.prototype.intersects.apply(this,[geometry]);}else{for(var i=0,len=geometry.components.length;i<len;++i){intersect=geometry.components[i].intersects(this);if(intersect){break;}}}
return intersect;},getVertices:function(nodes){return(nodes===true)?[]:this.components.slice(0,this.components.length-1);},CLASS_NAME:"OpenLayers.Geometry.LinearRing"});OpenLayers.Geometry.MultiLineString=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.LineString"],initialize:function(components){OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);},split:function(geometry,options){var results=null;var mutual=options&&options.mutual;var splits,sourceLine,sourceLines,sourceSplit,targetSplit;var sourceParts=[];var targetParts=[geometry];for(var i=0,len=this.components.length;i<len;++i){sourceLine=this.components[i];sourceSplit=false;for(var j=0;j<targetParts.length;++j){splits=sourceLine.split(targetParts[j],options);if(splits){if(mutual){sourceLines=splits[0];for(var k=0,klen=sourceLines.length;k<klen;++k){if(k===0&&sourceParts.length){sourceParts[sourceParts.length-1].addComponent(sourceLines[k]);}else{sourceParts.push(new OpenLayers.Geometry.MultiLineString([sourceLines[k]]));}}
sourceSplit=true;splits=splits[1];}
if(splits.length){splits.unshift(j,1);Array.prototype.splice.apply(targetParts,splits);break;}}}
if(!sourceSplit){if(sourceParts.length){sourceParts[sourceParts.length-1].addComponent(sourceLine.clone());}else{sourceParts=[new OpenLayers.Geometry.MultiLineString(sourceLine.clone())];}}}
if(sourceParts&&sourceParts.length>1){sourceSplit=true;}else{sourceParts=[];}
if(targetParts&&targetParts.length>1){targetSplit=true;}else{targetParts=[];}
if(sourceSplit||targetSplit){if(mutual){results=[sourceParts,targetParts];}else{results=targetParts;}}
return results;},splitWith:function(geometry,options){var results=null;var mutual=options&&options.mutual;var splits,targetLine,sourceLines,sourceSplit,targetSplit,sourceParts,targetParts;if(geometry instanceof OpenLayers.Geometry.LineString){targetParts=[];sourceParts=[geometry];for(var i=0,len=this.components.length;i<len;++i){targetSplit=false;targetLine=this.components[i];for(var j=0;j<sourceParts.length;++j){splits=sourceParts[j].split(targetLine,options);if(splits){if(mutual){sourceLines=splits[0];if(sourceLines.length){sourceLines.unshift(j,1);Array.prototype.splice.apply(sourceParts,sourceLines);j+=sourceLines.length-2;}
splits=splits[1];if(splits.length===0){splits=[targetLine.clone()];}}
for(var k=0,klen=splits.length;k<klen;++k){if(k===0&&targetParts.length){targetParts[targetParts.length-1].addComponent(splits[k]);}else{targetParts.push(new OpenLayers.Geometry.MultiLineString([splits[k]]));}}
targetSplit=true;}}
if(!targetSplit){if(targetParts.length){targetParts[targetParts.length-1].addComponent(targetLine.clone());}else{targetParts=[new OpenLayers.Geometry.MultiLineString([targetLine.clone()])];}}}}else{results=geometry.split(this);}
if(sourceParts&&sourceParts.length>1){sourceSplit=true;}else{sourceParts=[];}
if(targetParts&&targetParts.length>1){targetSplit=true;}else{targetParts=[];}
if(sourceSplit||targetSplit){if(mutual){results=[sourceParts,targetParts];}else{results=targetParts;}}
return results;},CLASS_NAME:"OpenLayers.Geometry.MultiLineString"});OpenLayers.Geometry.Polygon=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.LinearRing"],initialize:function(components){OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);},getArea:function(){var area=0.0;if(this.components&&(this.components.length>0)){area+=Math.abs(this.components[0].getArea());for(var i=1,len=this.components.length;i<len;i++){area-=Math.abs(this.components[i].getArea());}}
return area;},getGeodesicArea:function(projection){var area=0.0;if(this.components&&(this.components.length>0)){area+=Math.abs(this.components[0].getGeodesicArea(projection));for(var i=1,len=this.components.length;i<len;i++){area-=Math.abs(this.components[i].getGeodesicArea(projection));}}
return area;},containsPoint:function(point){var numRings=this.components.length;var contained=false;if(numRings>0){contained=this.components[0].containsPoint(point);if(contained!==1){if(contained&&numRings>1){var hole;for(var i=1;i<numRings;++i){hole=this.components[i].containsPoint(point);if(hole){if(hole===1){contained=1;}else{contained=false;}
break;}}}}}
return contained;},intersects:function(geometry){var intersect=false;var i,len;if(geometry.CLASS_NAME=="OpenLayers.Geometry.Point"){intersect=this.containsPoint(geometry);}else if(geometry.CLASS_NAME=="OpenLayers.Geometry.LineString"||geometry.CLASS_NAME=="OpenLayers.Geometry.LinearRing"){for(i=0,len=this.components.length;i<len;++i){intersect=geometry.intersects(this.components[i]);if(intersect){break;}}
if(!intersect){for(i=0,len=geometry.components.length;i<len;++i){intersect=this.containsPoint(geometry.components[i]);if(intersect){break;}}}}else{for(i=0,len=geometry.components.length;i<len;++i){intersect=this.intersects(geometry.components[i]);if(intersect){break;}}}
if(!intersect&&geometry.CLASS_NAME=="OpenLayers.Geometry.Polygon"){var ring=this.components[0];for(i=0,len=ring.components.length;i<len;++i){intersect=geometry.containsPoint(ring.components[i]);if(intersect){break;}}}
return intersect;},distanceTo:function(geometry,options){var edge=!(options&&options.edge===false);var result;if(!edge&&this.intersects(geometry)){result=0;}else{result=OpenLayers.Geometry.Collection.prototype.distanceTo.apply(this,[geometry,options]);}
return result;},CLASS_NAME:"OpenLayers.Geometry.Polygon"});OpenLayers.Geometry.Polygon.createRegularPolygon=function(origin,radius,sides,rotation){var angle=Math.PI*((1/sides)-(1/2));if(rotation){angle+=(rotation/180)*Math.PI;}
var rotatedAngle,x,y;var points=[];for(var i=0;i<sides;++i){rotatedAngle=angle+(i*2*Math.PI/sides);x=origin.x+(radius*Math.cos(rotatedAngle));y=origin.y+(radius*Math.sin(rotatedAngle));points.push(new OpenLayers.Geometry.Point(x,y));}
var ring=new OpenLayers.Geometry.LinearRing(points);return new OpenLayers.Geometry.Polygon([ring]);};OpenLayers.Format.KML=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{kml:"http://www.opengis.net/kml/2.2",gx:"http://www.google.com/kml/ext/2.2"},kmlns:"http://earth.google.com/kml/2.0",placemarksDesc:"No description available",foldersName:"OpenLayers export",foldersDesc:"Exported on "+new Date(),extractAttributes:true,extractStyles:false,extractTracks:false,trackAttributes:null,internalns:null,features:null,styles:null,styleBaseUrl:"",fetched:null,maxDepth:0,initialize:function(options){this.regExes={trimSpace:(/^\s*|\s*$/g),removeSpace:(/\s*/g),splitSpace:(/\s+/),trimComma:(/\s*,\s*/g),kmlColor:(/(\w{2})(\w{2})(\w{2})(\w{2})/),kmlIconPalette:(/root:\/\/icons\/palette-(\d+)(\.\w+)/),straightBracket:(/\$\[(.*?)\]/g)};this.externalProjection=new OpenLayers.Projection("EPSG:4326");OpenLayers.Format.XML.prototype.initialize.apply(this,[options]);},read:function(data){this.features=[];this.styles={};this.fetched={};var options={depth:0,styleBaseUrl:this.styleBaseUrl};return this.parseData(data,options);},parseData:function(data,options){if(typeof data=="string"){data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);}
var types=["Link","NetworkLink","Style","StyleMap","Placemark"];for(var i=0,len=types.length;i<len;++i){var type=types[i];var nodes=this.getElementsByTagNameNS(data,"*",type);if(nodes.length==0){continue;}
switch(type.toLowerCase()){case"link":case"networklink":this.parseLinks(nodes,options);break;case"style":if(this.extractStyles){this.parseStyles(nodes,options);}
break;case"stylemap":if(this.extractStyles){this.parseStyleMaps(nodes,options);}
break;case"placemark":this.parseFeatures(nodes,options);break;}}
return this.features;},parseLinks:function(nodes,options){if(options.depth>=this.maxDepth){return false;}
var newOptions=OpenLayers.Util.extend({},options);newOptions.depth++;for(var i=0,len=nodes.length;i<len;i++){var href=this.parseProperty(nodes[i],"*","href");if(href&&!this.fetched[href]){this.fetched[href]=true;var data=this.fetchLink(href);if(data){this.parseData(data,newOptions);}}}},fetchLink:function(href){var request=OpenLayers.Request.GET({url:href,async:false});if(request){return request.responseText;}},parseStyles:function(nodes,options){for(var i=0,len=nodes.length;i<len;i++){var style=this.parseStyle(nodes[i]);if(style){var styleName=(options.styleBaseUrl||"")+"#"+style.id;this.styles[styleName]=style;}}},parseKmlColor:function(kmlColor){var color=null;if(kmlColor){var matches=kmlColor.match(this.regExes.kmlColor);if(matches){color={color:'#'+matches[4]+matches[3]+matches[2],opacity:parseInt(matches[1],16)/255};}}
return color;},parseStyle:function(node){var style={};var types=["LineStyle","PolyStyle","IconStyle","BalloonStyle","LabelStyle"];var type,nodeList,geometry,parser;for(var i=0,len=types.length;i<len;++i){type=types[i];styleTypeNode=this.getElementsByTagNameNS(node,"*",type)[0];if(!styleTypeNode){continue;}
switch(type.toLowerCase()){case"linestyle":var kmlColor=this.parseProperty(styleTypeNode,"*","color");var color=this.parseKmlColor(kmlColor);if(color){style["strokeColor"]=color.color;style["strokeOpacity"]=color.opacity;}
var width=this.parseProperty(styleTypeNode,"*","width");if(width){style["strokeWidth"]=width;}
break;case"polystyle":var kmlColor=this.parseProperty(styleTypeNode,"*","color");var color=this.parseKmlColor(kmlColor);if(color){style["fillOpacity"]=color.opacity;style["fillColor"]=color.color;}
var fill=this.parseProperty(styleTypeNode,"*","fill");if(fill=="0"){style["fillColor"]="none";}
var outline=this.parseProperty(styleTypeNode,"*","outline");if(outline=="0"){style["strokeWidth"]="0";}
break;case"iconstyle":var scale=parseFloat(this.parseProperty(styleTypeNode,"*","scale")||1);var width=32*scale;var height=32*scale;var iconNode=this.getElementsByTagNameNS(styleTypeNode,"*","Icon")[0];if(iconNode){var href=this.parseProperty(iconNode,"*","href");if(href){var w=this.parseProperty(iconNode,"*","w");var h=this.parseProperty(iconNode,"*","h");var google="http://maps.google.com/mapfiles/kml";if(OpenLayers.String.startsWith(href,google)&&!w&&!h){w=64;h=64;scale=scale/2;}
w=w||h;h=h||w;if(w){width=parseInt(w)*scale;}
if(h){height=parseInt(h)*scale;}
var matches=href.match(this.regExes.kmlIconPalette);if(matches){var palette=matches[1];var file_extension=matches[2];var x=this.parseProperty(iconNode,"*","x");var y=this.parseProperty(iconNode,"*","y");var posX=x?x/32:0;var posY=y?(7-y/32):7;var pos=posY*8+posX;href="http://maps.google.com/mapfiles/kml/pal"
+palette+"/icon"+pos+file_extension;}
style["graphicOpacity"]=1;style["externalGraphic"]=href;}}
var hotSpotNode=this.getElementsByTagNameNS(styleTypeNode,"*","hotSpot")[0];if(hotSpotNode){var x=parseFloat(hotSpotNode.getAttribute("x"));var y=parseFloat(hotSpotNode.getAttribute("y"));var xUnits=hotSpotNode.getAttribute("xunits");if(xUnits=="pixels"){style["graphicXOffset"]=-x*scale;}
else if(xUnits=="insetPixels"){style["graphicXOffset"]=-width+(x*scale);}
else if(xUnits=="fraction"){style["graphicXOffset"]=-width*x;}
var yUnits=hotSpotNode.getAttribute("yunits");if(yUnits=="pixels"){style["graphicYOffset"]=-height+(y*scale)+1;}
else if(yUnits=="insetPixels"){style["graphicYOffset"]=-(y*scale)+1;}
else if(yUnits=="fraction"){style["graphicYOffset"]=-height*(1-y)+1;}}
style["graphicWidth"]=width;style["graphicHeight"]=height;break;case"balloonstyle":var balloonStyle=OpenLayers.Util.getXmlNodeValue(styleTypeNode);if(balloonStyle){style["balloonStyle"]=balloonStyle.replace(this.regExes.straightBracket,"${$1}");}
break;case"labelstyle":var kmlColor=this.parseProperty(styleTypeNode,"*","color");var color=this.parseKmlColor(kmlColor);if(color){style["fontColor"]=color.color;style["fontOpacity"]=color.opacity;}
break;default:}}
if(!style["strokeColor"]&&style["fillColor"]){style["strokeColor"]=style["fillColor"];}
var id=node.getAttribute("id");if(id&&style){style.id=id;}
return style;},parseStyleMaps:function(nodes,options){for(var i=0,len=nodes.length;i<len;i++){var node=nodes[i];var pairs=this.getElementsByTagNameNS(node,"*","Pair");var id=node.getAttribute("id");for(var j=0,jlen=pairs.length;j<jlen;j++){var pair=pairs[j];var key=this.parseProperty(pair,"*","key");var styleUrl=this.parseProperty(pair,"*","styleUrl");if(styleUrl&&key=="normal"){this.styles[(options.styleBaseUrl||"")+"#"+id]=this.styles[(options.styleBaseUrl||"")+styleUrl];}
if(styleUrl&&key=="highlight"){}}}},parseFeatures:function(nodes,options){var features=[];for(var i=0,len=nodes.length;i<len;i++){var featureNode=nodes[i];var feature=this.parseFeature.apply(this,[featureNode]);if(feature){if(this.extractStyles&&feature.attributes&&feature.attributes.styleUrl){feature.style=this.getStyle(feature.attributes.styleUrl,options);}
if(this.extractStyles){var inlineStyleNode=this.getElementsByTagNameNS(featureNode,"*","Style")[0];if(inlineStyleNode){var inlineStyle=this.parseStyle(inlineStyleNode);if(inlineStyle){feature.style=OpenLayers.Util.extend(feature.style,inlineStyle);}}}
if(this.extractTracks){var tracks=this.getElementsByTagNameNS(featureNode,this.namespaces.gx,"Track");if(tracks&&tracks.length>0){var track=tracks[0];var container={features:[],feature:feature};this.readNode(track,container);if(container.features.length>0){features.push.apply(features,container.features);}}}else{features.push(feature);}}else{throw"Bad Placemark: "+i;}}
this.features=this.features.concat(features);},readers:{"kml":{"when":function(node,container){container.whens.push(OpenLayers.Date.parse(this.getChildValue(node)));},"_trackPointAttribute":function(node,container){var name=node.nodeName.split(":").pop();container.attributes[name].push(this.getChildValue(node));}},"gx":{"Track":function(node,container){var obj={whens:[],points:[],angles:[]};if(this.trackAttributes){var name;obj.attributes={};for(var i=0,ii=this.trackAttributes.length;i<ii;++i){name=this.trackAttributes[i];obj.attributes[name]=[];if(!(name in this.readers.kml)){this.readers.kml[name]=this.readers.kml._trackPointAttribute;}}}
this.readChildNodes(node,obj);if(obj.whens.length!==obj.points.length){throw new Error("gx:Track with unequal number of when ("+obj.whens.length+") and gx:coord ("+obj.points.length+") elements.");}
var hasAngles=obj.angles.length>0;if(hasAngles&&obj.whens.length!==obj.angles.length){throw new Error("gx:Track with unequal number of when ("+obj.whens.length+") and gx:angles ("+obj.angles.length+") elements.");}
var feature,point,angles;for(var i=0,ii=obj.whens.length;i<ii;++i){feature=container.feature.clone();feature.fid=container.feature.fid||container.feature.id;point=obj.points[i];feature.geometry=point;if("z"in point){feature.attributes.altitude=point.z;}
if(this.internalProjection&&this.externalProjection){feature.geometry.transform(this.externalProjection,this.internalProjection);}
if(this.trackAttributes){for(var j=0,jj=this.trackAttributes.length;j<jj;++j){feature.attributes[name]=obj.attributes[this.trackAttributes[j]][i];}}
feature.attributes.when=obj.whens[i];feature.attributes.trackId=container.feature.id;if(hasAngles){angles=obj.angles[i];feature.attributes.heading=parseFloat(angles[0]);feature.attributes.tilt=parseFloat(angles[1]);feature.attributes.roll=parseFloat(angles[2]);}
container.features.push(feature);}},"coord":function(node,container){var str=this.getChildValue(node);var coords=str.replace(this.regExes.trimSpace,"").split(/\s+/);var point=new OpenLayers.Geometry.Point(coords[0],coords[1]);if(coords.length>2){point.z=parseFloat(coords[2]);}
container.points.push(point);},"angles":function(node,container){var str=this.getChildValue(node);var parts=str.replace(this.regExes.trimSpace,"").split(/\s+/);container.angles.push(parts);}}},parseFeature:function(node){var order=["MultiGeometry","Polygon","LineString","Point"];var type,nodeList,geometry,parser;for(var i=0,len=order.length;i<len;++i){type=order[i];this.internalns=node.namespaceURI?node.namespaceURI:this.kmlns;nodeList=this.getElementsByTagNameNS(node,this.internalns,type);if(nodeList.length>0){var parser=this.parseGeometry[type.toLowerCase()];if(parser){geometry=parser.apply(this,[nodeList[0]]);if(this.internalProjection&&this.externalProjection){geometry.transform(this.externalProjection,this.internalProjection);}}else{OpenLayers.Console.error(OpenLayers.i18n("unsupportedGeometryType",{'geomType':type}));}
break;}}
var attributes;if(this.extractAttributes){attributes=this.parseAttributes(node);}
var feature=new OpenLayers.Feature.Vector(geometry,attributes);var fid=node.getAttribute("id")||node.getAttribute("name");if(fid!=null){feature.fid=fid;}
return feature;},getStyle:function(styleUrl,options){var styleBaseUrl=OpenLayers.Util.removeTail(styleUrl);var newOptions=OpenLayers.Util.extend({},options);newOptions.depth++;newOptions.styleBaseUrl=styleBaseUrl;if(!this.styles[styleUrl]&&!OpenLayers.String.startsWith(styleUrl,"#")&&newOptions.depth<=this.maxDepth&&!this.fetched[styleBaseUrl]){var data=this.fetchLink(styleBaseUrl);if(data){this.parseData(data,newOptions);}}
var style=OpenLayers.Util.extend({},this.styles[styleUrl]);return style;},parseGeometry:{point:function(node){var nodeList=this.getElementsByTagNameNS(node,this.internalns,"coordinates");var coords=[];if(nodeList.length>0){var coordString=nodeList[0].firstChild.nodeValue;coordString=coordString.replace(this.regExes.removeSpace,"");coords=coordString.split(",");}
var point=null;if(coords.length>1){if(coords.length==2){coords[2]=null;}
point=new OpenLayers.Geometry.Point(coords[0],coords[1],coords[2]);}else{throw"Bad coordinate string: "+coordString;}
return point;},linestring:function(node,ring){var nodeList=this.getElementsByTagNameNS(node,this.internalns,"coordinates");var line=null;if(nodeList.length>0){var coordString=this.getChildValue(nodeList[0]);coordString=coordString.replace(this.regExes.trimSpace,"");coordString=coordString.replace(this.regExes.trimComma,",");var pointList=coordString.split(this.regExes.splitSpace);var numPoints=pointList.length;var points=new Array(numPoints);var coords,numCoords;for(var i=0;i<numPoints;++i){coords=pointList[i].split(",");numCoords=coords.length;if(numCoords>1){if(coords.length==2){coords[2]=null;}
points[i]=new OpenLayers.Geometry.Point(coords[0],coords[1],coords[2]);}else{throw"Bad LineString point coordinates: "+
pointList[i];}}
if(numPoints){if(ring){line=new OpenLayers.Geometry.LinearRing(points);}else{line=new OpenLayers.Geometry.LineString(points);}}else{throw"Bad LineString coordinates: "+coordString;}}
return line;},polygon:function(node){var nodeList=this.getElementsByTagNameNS(node,this.internalns,"LinearRing");var numRings=nodeList.length;var components=new Array(numRings);if(numRings>0){var ring;for(var i=0,len=nodeList.length;i<len;++i){ring=this.parseGeometry.linestring.apply(this,[nodeList[i],true]);if(ring){components[i]=ring;}else{throw"Bad LinearRing geometry: "+i;}}}
return new OpenLayers.Geometry.Polygon(components);},multigeometry:function(node){var child,parser;var parts=[];var children=node.childNodes;for(var i=0,len=children.length;i<len;++i){child=children[i];if(child.nodeType==1){var type=(child.prefix)?child.nodeName.split(":")[1]:child.nodeName;var parser=this.parseGeometry[type.toLowerCase()];if(parser){parts.push(parser.apply(this,[child]));}}}
return new OpenLayers.Geometry.Collection(parts);}},parseAttributes:function(node){var attributes={};var edNodes=node.getElementsByTagName("ExtendedData");if(edNodes.length){attributes=this.parseExtendedData(edNodes[0]);}
var child,grandchildren,grandchild;var children=node.childNodes;for(var i=0,len=children.length;i<len;++i){child=children[i];if(child.nodeType==1){grandchildren=child.childNodes;if(grandchildren.length>=1&&grandchildren.length<=3){var grandchild;switch(grandchildren.length){case 1:grandchild=grandchildren[0];break;case 2:var c1=grandchildren[0];var c2=grandchildren[1];grandchild=(c1.nodeType==3||c1.nodeType==4)?c1:c2;break;case 3:default:grandchild=grandchildren[1];break;}
if(grandchild.nodeType==3||grandchild.nodeType==4){var name=(child.prefix)?child.nodeName.split(":")[1]:child.nodeName;var value=OpenLayers.Util.getXmlNodeValue(grandchild);if(value){value=value.replace(this.regExes.trimSpace,"");attributes[name]=value;}}}}}
return attributes;},parseExtendedData:function(node){var attributes={};var i,len,data,key;var dataNodes=node.getElementsByTagName("Data");for(i=0,len=dataNodes.length;i<len;i++){data=dataNodes[i];key=data.getAttribute("name");var ed={};var valueNode=data.getElementsByTagName("value");if(valueNode.length){ed['value']=this.getChildValue(valueNode[0]);}
var nameNode=data.getElementsByTagName("displayName");if(nameNode.length){ed['displayName']=this.getChildValue(nameNode[0]);}
attributes[key]=ed;}
var simpleDataNodes=node.getElementsByTagName("SimpleData");for(i=0,len=simpleDataNodes.length;i<len;i++){var ed={};data=simpleDataNodes[i];key=data.getAttribute("name");ed['value']=this.getChildValue(data);ed['displayName']=key;attributes[key]=ed;}
return attributes;},parseProperty:function(xmlNode,namespace,tagName){var value;var nodeList=this.getElementsByTagNameNS(xmlNode,namespace,tagName);try{value=OpenLayers.Util.getXmlNodeValue(nodeList[0]);}catch(e){value=null;}
return value;},write:function(features){if(!(features instanceof Array)){features=[features];}
var kml=this.createElementNS(this.kmlns,"kml");var folder=this.createFolderXML();for(var i=0,len=features.length;i<len;++i){folder.appendChild(this.createPlacemarkXML(features[i]));}
kml.appendChild(folder);return OpenLayers.Format.XML.prototype.write.apply(this,[kml]);},createFolderXML:function(){var folder=this.createElementNS(this.kmlns,"Folder");if(this.foldersName){var folderName=this.createElementNS(this.kmlns,"name");var folderNameText=this.createTextNode(this.foldersName);folderName.appendChild(folderNameText);folder.appendChild(folderName);}
if(this.foldersDesc){var folderDesc=this.createElementNS(this.kmlns,"description");var folderDescText=this.createTextNode(this.foldersDesc);folderDesc.appendChild(folderDescText);folder.appendChild(folderDesc);}
return folder;},createPlacemarkXML:function(feature){var placemarkName=this.createElementNS(this.kmlns,"name");var name=feature.style&&feature.style.label?feature.style.label:feature.attributes.name||feature.id;placemarkName.appendChild(this.createTextNode(name));var placemarkDesc=this.createElementNS(this.kmlns,"description");var desc=feature.attributes.description||this.placemarksDesc;placemarkDesc.appendChild(this.createTextNode(desc));var placemarkNode=this.createElementNS(this.kmlns,"Placemark");if(feature.fid!=null){placemarkNode.setAttribute("id",feature.fid);}
placemarkNode.appendChild(placemarkName);placemarkNode.appendChild(placemarkDesc);var geometryNode=this.buildGeometryNode(feature.geometry);placemarkNode.appendChild(geometryNode);return placemarkNode;},buildGeometryNode:function(geometry){if(this.internalProjection&&this.externalProjection){geometry=geometry.clone();geometry.transform(this.internalProjection,this.externalProjection);}
var className=geometry.CLASS_NAME;var type=className.substring(className.lastIndexOf(".")+1);var builder=this.buildGeometry[type.toLowerCase()];var node=null;if(builder){node=builder.apply(this,[geometry]);}
return node;},buildGeometry:{point:function(geometry){var kml=this.createElementNS(this.kmlns,"Point");kml.appendChild(this.buildCoordinatesNode(geometry));return kml;},multipoint:function(geometry){return this.buildGeometry.collection.apply(this,[geometry]);},linestring:function(geometry){var kml=this.createElementNS(this.kmlns,"LineString");kml.appendChild(this.buildCoordinatesNode(geometry));return kml;},multilinestring:function(geometry){return this.buildGeometry.collection.apply(this,[geometry]);},linearring:function(geometry){var kml=this.createElementNS(this.kmlns,"LinearRing");kml.appendChild(this.buildCoordinatesNode(geometry));return kml;},polygon:function(geometry){var kml=this.createElementNS(this.kmlns,"Polygon");var rings=geometry.components;var ringMember,ringGeom,type;for(var i=0,len=rings.length;i<len;++i){type=(i==0)?"outerBoundaryIs":"innerBoundaryIs";ringMember=this.createElementNS(this.kmlns,type);ringGeom=this.buildGeometry.linearring.apply(this,[rings[i]]);ringMember.appendChild(ringGeom);kml.appendChild(ringMember);}
return kml;},multipolygon:function(geometry){return this.buildGeometry.collection.apply(this,[geometry]);},collection:function(geometry){var kml=this.createElementNS(this.kmlns,"MultiGeometry");var child;for(var i=0,len=geometry.components.length;i<len;++i){child=this.buildGeometryNode.apply(this,[geometry.components[i]]);if(child){kml.appendChild(child);}}
return kml;}},buildCoordinatesNode:function(geometry){var coordinatesNode=this.createElementNS(this.kmlns,"coordinates");var path;var points=geometry.components;if(points){var point;var numPoints=points.length;var parts=new Array(numPoints);for(var i=0;i<numPoints;++i){point=points[i];parts[i]=point.x+","+point.y;}
path=parts.join(" ");}else{path=geometry.x+","+geometry.y;}
var txtNode=this.createTextNode(path);coordinatesNode.appendChild(txtNode);return coordinatesNode;},CLASS_NAME:"OpenLayers.Format.KML"});OpenLayers.Geometry.MultiPolygon=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.Polygon"],initialize:function(components){OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);},CLASS_NAME:"OpenLayers.Geometry.MultiPolygon"});OpenLayers.Format.GeoJSON=OpenLayers.Class(OpenLayers.Format.JSON,{ignoreExtraDims:false,initialize:function(options){OpenLayers.Format.JSON.prototype.initialize.apply(this,[options]);},read:function(json,type,filter){type=(type)?type:"FeatureCollection";var results=null;var obj=null;if(typeof json=="string"){obj=OpenLayers.Format.JSON.prototype.read.apply(this,[json,filter]);}else{obj=json;}
if(!obj){OpenLayers.Console.error("Bad JSON: "+json);}else if(typeof(obj.type)!="string"){OpenLayers.Console.error("Bad GeoJSON - no type: "+json);}else if(this.isValidType(obj,type)){switch(type){case"Geometry":try{results=this.parseGeometry(obj);}catch(err){OpenLayers.Console.error(err);}
break;case"Feature":try{results=this.parseFeature(obj);results.type="Feature";}catch(err){OpenLayers.Console.error(err);}
break;case"FeatureCollection":results=[];switch(obj.type){case"Feature":try{results.push(this.parseFeature(obj));}catch(err){results=null;OpenLayers.Console.error(err);}
break;case"FeatureCollection":for(var i=0,len=obj.features.length;i<len;++i){try{results.push(this.parseFeature(obj.features[i]));}catch(err){results=null;OpenLayers.Console.error(err);}}
break;default:try{var geom=this.parseGeometry(obj);results.push(new OpenLayers.Feature.Vector(geom));}catch(err){results=null;OpenLayers.Console.error(err);}}
break;}}
return results;},isValidType:function(obj,type){var valid=false;switch(type){case"Geometry":if(OpenLayers.Util.indexOf(["Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon","Box","GeometryCollection"],obj.type)==-1){OpenLayers.Console.error("Unsupported geometry type: "+
obj.type);}else{valid=true;}
break;case"FeatureCollection":valid=true;break;default:if(obj.type==type){valid=true;}else{OpenLayers.Console.error("Cannot convert types from "+
obj.type+" to "+type);}}
return valid;},parseFeature:function(obj){var feature,geometry,attributes,bbox;attributes=(obj.properties)?obj.properties:{};bbox=(obj.geometry&&obj.geometry.bbox)||obj.bbox;try{geometry=this.parseGeometry(obj.geometry);}catch(err){throw err;}
feature=new OpenLayers.Feature.Vector(geometry,attributes);if(bbox){feature.bounds=OpenLayers.Bounds.fromArray(bbox);}
if(obj.id){feature.fid=obj.id;}
return feature;},parseGeometry:function(obj){if(obj==null){return null;}
var geometry,collection=false;if(obj.type=="GeometryCollection"){if(!(obj.geometries instanceof Array)){throw"GeometryCollection must have geometries array: "+obj;}
var numGeom=obj.geometries.length;var components=new Array(numGeom);for(var i=0;i<numGeom;++i){components[i]=this.parseGeometry.apply(this,[obj.geometries[i]]);}
geometry=new OpenLayers.Geometry.Collection(components);collection=true;}else{if(!(obj.coordinates instanceof Array)){throw"Geometry must have coordinates array: "+obj;}
if(!this.parseCoords[obj.type.toLowerCase()]){throw"Unsupported geometry type: "+obj.type;}
try{geometry=this.parseCoords[obj.type.toLowerCase()].apply(this,[obj.coordinates]);}catch(err){throw err;}}
if(this.internalProjection&&this.externalProjection&&!collection){geometry.transform(this.externalProjection,this.internalProjection);}
return geometry;},parseCoords:{"point":function(array){if(this.ignoreExtraDims==false&&array.length!=2){throw"Only 2D points are supported: "+array;}
return new OpenLayers.Geometry.Point(array[0],array[1]);},"multipoint":function(array){var points=[];var p=null;for(var i=0,len=array.length;i<len;++i){try{p=this.parseCoords["point"].apply(this,[array[i]]);}catch(err){throw err;}
points.push(p);}
return new OpenLayers.Geometry.MultiPoint(points);},"linestring":function(array){var points=[];var p=null;for(var i=0,len=array.length;i<len;++i){try{p=this.parseCoords["point"].apply(this,[array[i]]);}catch(err){throw err;}
points.push(p);}
return new OpenLayers.Geometry.LineString(points);},"multilinestring":function(array){var lines=[];var l=null;for(var i=0,len=array.length;i<len;++i){try{l=this.parseCoords["linestring"].apply(this,[array[i]]);}catch(err){throw err;}
lines.push(l);}
return new OpenLayers.Geometry.MultiLineString(lines);},"polygon":function(array){var rings=[];var r,l;for(var i=0,len=array.length;i<len;++i){try{l=this.parseCoords["linestring"].apply(this,[array[i]]);}catch(err){throw err;}
r=new OpenLayers.Geometry.LinearRing(l.components);rings.push(r);}
return new OpenLayers.Geometry.Polygon(rings);},"multipolygon":function(array){var polys=[];var p=null;for(var i=0,len=array.length;i<len;++i){try{p=this.parseCoords["polygon"].apply(this,[array[i]]);}catch(err){throw err;}
polys.push(p);}
return new OpenLayers.Geometry.MultiPolygon(polys);},"box":function(array){if(array.length!=2){throw"GeoJSON box coordinates must have 2 elements";}
return new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing([new OpenLayers.Geometry.Point(array[0][0],array[0][1]),new OpenLayers.Geometry.Point(array[1][0],array[0][1]),new OpenLayers.Geometry.Point(array[1][0],array[1][1]),new OpenLayers.Geometry.Point(array[0][0],array[1][1]),new OpenLayers.Geometry.Point(array[0][0],array[0][1])])]);}},write:function(obj,pretty){var geojson={"type":null};if(obj instanceof Array){geojson.type="FeatureCollection";var numFeatures=obj.length;geojson.features=new Array(numFeatures);for(var i=0;i<numFeatures;++i){var element=obj[i];if(!element instanceof OpenLayers.Feature.Vector){var msg="FeatureCollection only supports collections "+"of features: "+element;throw msg;}
geojson.features[i]=this.extract.feature.apply(this,[element]);}}else if(obj.CLASS_NAME.indexOf("OpenLayers.Geometry")==0){geojson=this.extract.geometry.apply(this,[obj]);}else if(obj instanceof OpenLayers.Feature.Vector){geojson=this.extract.feature.apply(this,[obj]);if(obj.layer&&obj.layer.projection){geojson.crs=this.createCRSObject(obj);}}
return OpenLayers.Format.JSON.prototype.write.apply(this,[geojson,pretty]);},createCRSObject:function(object){var proj=object.layer.projection.toString();var crs={};if(proj.match(/epsg:/i)){var code=parseInt(proj.substring(proj.indexOf(":")+1));if(code==4326){crs={"type":"OGC","properties":{"urn":"urn:ogc:def:crs:OGC:1.3:CRS84"}};}else{crs={"type":"EPSG","properties":{"code":code}};}}
return crs;},extract:{'feature':function(feature){var geom=this.extract.geometry.apply(this,[feature.geometry]);return{"type":"Feature","id":feature.fid==null?feature.id:feature.fid,"properties":feature.attributes,"geometry":geom};},'geometry':function(geometry){if(geometry==null){return null;}
if(this.internalProjection&&this.externalProjection){geometry=geometry.clone();geometry.transform(this.internalProjection,this.externalProjection);}
var geometryType=geometry.CLASS_NAME.split('.')[2];var data=this.extract[geometryType.toLowerCase()].apply(this,[geometry]);var json;if(geometryType=="Collection"){json={"type":"GeometryCollection","geometries":data};}else{json={"type":geometryType,"coordinates":data};}
return json;},'point':function(point){return[point.x,point.y];},'multipoint':function(multipoint){var array=[];for(var i=0,len=multipoint.components.length;i<len;++i){array.push(this.extract.point.apply(this,[multipoint.components[i]]));}
return array;},'linestring':function(linestring){var array=[];for(var i=0,len=linestring.components.length;i<len;++i){array.push(this.extract.point.apply(this,[linestring.components[i]]));}
return array;},'multilinestring':function(multilinestring){var array=[];for(var i=0,len=multilinestring.components.length;i<len;++i){array.push(this.extract.linestring.apply(this,[multilinestring.components[i]]));}
return array;},'polygon':function(polygon){var array=[];for(var i=0,len=polygon.components.length;i<len;++i){array.push(this.extract.linestring.apply(this,[polygon.components[i]]));}
return array;},'multipolygon':function(multipolygon){var array=[];for(var i=0,len=multipolygon.components.length;i<len;++i){array.push(this.extract.polygon.apply(this,[multipolygon.components[i]]));}
return array;},'collection':function(collection){var len=collection.components.length;var array=new Array(len);for(var i=0;i<len;++i){array[i]=this.extract.geometry.apply(this,[collection.components[i]]);}
return array;}},CLASS_NAME:"OpenLayers.Format.GeoJSON"});;
// $Id: openlayers.js,v 1.47.2.36 2010/08/06 20:35:15 tmcw Exp $
/*jslint white: false */
/*jslint forin: true */
/*global OpenLayers Drupal $ document jQuery window */

/**
 * @file
 * This file holds the main javascript API for OpenLayers. It is 
 * responsable for loading and displaying the map.
 *
 * @ingroup openlayers
 */

/**
 * This is a workaround for a bug involving IE and VML support.
 * See the Drupal Book page describing this problem:
 * http://drupal.org/node/613002
 */

document.namespaces;

Drupal.settings.openlayers = {};
Drupal.settings.openlayers.maps = {};

/**
 * Minimal OpenLayers map bootstrap.
 * All additional operations occur in additional Drupal behaviors.
 */
Drupal.behaviors.openlayers = function(context) {
  if (typeof(Drupal.settings.openlayers) === 'object' && Drupal.settings.openlayers.maps && !$(context).data('openlayers')) {
    $('.openlayers-map:not(.openlayers-processed)').each(function() {
      $(this).addClass('openlayers-processed');
      var map_id = $(this).attr('id');

      // Use try..catch for error handling.
      try {
        if (Drupal.settings.openlayers.maps[map_id]) {
          // Set OpenLayers language based on document language, 
          // rather than browser language
          OpenLayers.Lang.setCode($('html').attr('lang'));
  
          var map = Drupal.settings.openlayers.maps[map_id];
          
          $(this)
            // @TODO: move this into markup in theme function, doing this dynamically is a waste.
            .css('width', map.width)
            .css('height', map.height);
  
          var options = {};
          // This is necessary because the input JSON cannot contain objects
          options.projection = new OpenLayers.Projection('EPSG:' + map.projection);
          options.displayProjection = new OpenLayers.Projection('EPSG:' + map.displayProjection);

          // TODO: work around this scary code
          if (map.projection === '900913') {
            options.maxExtent = new OpenLayers.Bounds(
              -20037508.34, -20037508.34, 20037508.34, 20037508.34);
          }
          if (map.projection === '4326') {
            options.maxExtent = new OpenLayers.Bounds(-180, -90, 180, 90);
          }

          options.maxResolution = 1.40625;
          options.controls = [];
  
          // Change image, CSS, and proxy paths if specified
          if (map.image_path) {
            OpenLayers.ImgPath = Drupal.openlayers.relatePath(map.image_path, 
              Drupal.settings.basePath);
          }
          if (map.css_path) {
            options.theme = Drupal.openlayers.relatePath(map.css_path, 
              Drupal.settings.basePath);
          }
          if (map.proxy_host) {
            OpenLayers.ProxyHost = Drupal.openlayers.relatePath(map.proxy_host, 
              Drupal.settings.basePath);
          }
  
          // Initialize openlayers map
          var openlayers = new OpenLayers.Map(map.id, options);
  
          // Run the layer addition first
          Drupal.openlayers.addLayers(map, openlayers);
  
          // Attach data to map DOM object
          $(this).data('openlayers', {'map': map, 'openlayers': openlayers});
  
          // Finally, attach behaviors
          Drupal.attachBehaviors(this);
  
          if($.browser.msie) {
            Drupal.openlayers.redrawVectors();
          }
        }
      }
      catch(e) {
        if (typeof console != 'undefined') {
          console.log(e);
        }
        else {
          $(this).text('Error during map rendering: ' + e);
        }
      }
    });
  }
};

/**
 * Collection of helper methods.
 */
Drupal.openlayers = {

  /**
   * Determine path based on format.
   */
  'relatePath': function(path, basePath) {
    // Check for a full URL or an absolute path.
    if (path.indexOf('://') >= 0 || path.indexOf('/') == 0) {
      return path;
    }
    else {
      return basePath + path;
    }
  },

  /**
   * Redraw Vectors.
   * This is necessary because various version of IE cannot draw vectors on
   * $(document).ready()
   */
  'redrawVectors': function() {
    $(window).load(
      function() {
        var map;
        for(map in Drupal.settings.openlayers.maps) {
          $.each($('#'+map).data('openlayers').openlayers.getLayersByClass('OpenLayers.Layer.Vector'), 
            function(i, layer) {
              layer.redraw();
            }
          );
        }
      }
    );
  },

  /**
   * Add layers to the map
   *
   * @param map Drupal settings object for the map
   * @param openlayers OpenLayers Map Object
   */
  'addLayers': function(map, openlayers) {
    for (var name in map.layers) {
      var layer;      
      var options = map.layers[name];
      
      // Add reference to our layer ID
      options.drupalID = name;
      // Ensure that the layer handler is available
      if (options.layer_handler !== undefined && Drupal.openlayers.layer[options.layer_handler] !== undefined) {
        var layer = Drupal.openlayers.layer[options.layer_handler](map.layers[name].title, map, options);

        layer.visibility = !!(!map.layer_activated || map.layer_activated[name]);

        if (layer.isBaseLayer === false) {
          layer.displayInLayerSwitcher = (!map.layer_switcher || map.layer_switcher[name]);
        }

        if (map.center.wrapdateline === '1') {
          // TODO: move into layer specific settings
          layer.wrapDateLine = true;
        }

        openlayers.addLayer(layer);
      }
    }
    
    openlayers.setBaseLayer(openlayers.getLayersBy('drupalID', map.default_layer)[0]);
    
    // Zoom & center
    if (map.center.initial) {
      var center = OpenLayers.LonLat.fromString(map.center.initial.centerpoint).transform(
            new OpenLayers.Projection('EPSG:4326'), 
            new OpenLayers.Projection('EPSG:' + map.projection));
      var zoom = parseInt(map.center.initial.zoom, 10);
      openlayers.setCenter(center, zoom, false, false);
    }

    // Set the restricted extent if wanted.
    // Prevents the map from being panned outside of a specfic bounding box.
    if (typeof map.center.restrict !== 'undefined' && map.center.restrict.restrictextent) {
      openlayers.restrictedExtent = OpenLayers.Bounds.fromString(
          map.center.restrict.restrictedExtent);
    }
  },
  /**
   * Abstraction of OpenLayer's feature adding syntax to work with Drupal output.
   * Ideally this should be rolled into the PHP code, because we don't want to manually
   * parse WKT
   */
  'addFeatures': function(map, layer, features) {
    var newFeatures = [];

    // Go through features
    for (var key in features) {
      var feature = features[key];
      var newFeatureObject = this.objectFromFeature(feature);

      // If we have successfully extracted geometry add additional
      // properties and queue it for addition to the layer
      if (newFeatureObject) {
        var newFeatureSet = [];

        // Check to see if it is a new feature, or an array of new features.
        if (typeof(newFeatureObject[0]) === 'undefined'){
          newFeatureSet[0] = newFeatureObject;
        }
        else{
          newFeatureSet = newFeatureObject;
        }

        // Go through new features
        for (var i in newFeatureSet) {
          var newFeature = newFeatureSet[i];

          // Transform the geometry if the 'projection' property is different from the map projection
          if (feature.projection) {
            if (feature.projection !== map.projection){
              var featureProjection = new OpenLayers.Projection("EPSG:" + feature.projection);
              var mapProjection = new OpenLayers.Projection("EPSG:" + map.projection);
              newFeature.geometry.transform(featureProjection, mapProjection);
            }
          }

          // Add attribute data
          if (feature.attributes) {
            // Attributes belong to features, not single component geometries
            // of them. But we're creating a geometry for each component for
            // better performance and clustering support. Let's call these
            // "pseudofeatures".
            //
            // In order to identify the real feature each geometry belongs to
            // we then add a 'fid' parameter to the "pseudofeature".
            // NOTE: 'drupalFID' is only unique within a single layer.
            newFeature.attributes = feature.attributes;
            newFeature.data = feature.attributes;
            newFeature.drupalFID = key; 
          }

          // Add style information
          if (feature.style) {
            newFeature.style = jQuery.extend({}, OpenLayers.Feature.Vector.style['default'], feature.style);
          }

          // Push new features
          newFeatures.push(newFeature);
        }
      }
    }

    // Add new features if there are any
    if (newFeatures.length !== 0){
      layer.addFeatures(newFeatures);
    }
  },
  'getStyleMap': function(map, layername) {
    if (map.styles) {
      var stylesAdded = {};
      // Grab and map base styles.
      for (var style in map.styles) {
        stylesAdded[style] = new OpenLayers.Style(map.styles[style]);
      }
      // Implement layer-specific styles.
      if (map.layer_styles !== undefined && map.layer_styles[layername]) {
        var style = map.layer_styles[layername];
        stylesAdded['default'] = new OpenLayers.Style(map.styles[style]);
      }
      return new OpenLayers.StyleMap(stylesAdded);
    }
    // Default styles
    return new OpenLayers.StyleMap({
      'default': new OpenLayers.Style({
        pointRadius: 5,
        fillColor: "#ffcc66",
        strokeColor: "#ff9933",
        strokeWidth: 4,
        fillOpacity:0.5
      }),
      'select': new OpenLayers.Style({
        fillColor: "#66ccff",
        strokeColor: "#3399ff"
      })
    });
  },
  'objectFromFeature': function(feature) {
    var wktFormat = new OpenLayers.Format.WKT();
    // Extract geometry either from wkt property or lon/lat properties
    if (feature.wkt) {
      return wktFormat.read(feature.wkt);
    }
    else if (feature.lon) {
      return wktFormat.read("POINT(" + feature.lon + " " + feature.lat + ")");
    }
  }
};

Drupal.openlayers.layer = {};
;
if (Drupal.openlayers === undefined) {
  Drupal.openlayers = {};
}
Drupal.openlayers.layer = Drupal.openlayers.layer || {};

OpenLayers.Layer.MapBox = OpenLayers.Class(OpenLayers.Layer.TMS, {
    /*
     * Do not remove the MapBox or OpenLayers attribution from this code,
     * doing so is in violation of the terms of both licenses.
     */
    initialize: function (name, options) {
        var newArguments, // Arguments which will be automatically
                          // sent to the Layer.TMS constructor
            urls; // Multiple server URLs with the same contents 
                  // but distributed for performance
        mapbox_logo = "<a class='mapbox-branding' href='http://mapbox.com'></a> | <a href='http://mapbox.com/tos'>Terms of Service</a>";
        options.isBaseLayer = options.baselayer;
        options = OpenLayers.Util.extend({
            attribution: mapbox_logo,
            maxExtent: new OpenLayers.Bounds(
              -20037508, -20037508, 20037508, 20037508),
            maxResolution: 156543.0339,
            units: "m",
            type: "png",
            projection: "EPSG:900913",
            isBaseLayer: true,
            numZoomLevels: 19,
            displayOutsideMaxExtent: false,
            wrapDateLine: true,
            buffer: 0
        }, options);
        urls = (options.urls) ? options.urls : [
            "http://a.tile.mapbox.com/",
            "http://b.tile.mapbox.com/",
            "http://c.tile.mapbox.com/",
            "http://c.tile.mapbox.com/"
        ];
        if (options.osm) {
          options.attribution = "<a class='mapbox-branding' href='http://mapbox.com'></a> | <a href='http://mapbox.com/tos'>Terms of Service</a> | Data CCBYSA OSM"
        }
        newArguments = [name, urls, options];
        OpenLayers.Layer.TMS.prototype.initialize.apply(this, newArguments);
    },
    CLASS_NAME: "OpenLayers.Layer.MapBox"
});

/**
 * For OpenLayers 0.x and 2.x
 */
Drupal.openlayers.layer.MapBox = function (name, map, options) {
  var styleMap = Drupal.openlayers.getStyleMap(map, options.name);
  if (options.maxExtent !== undefined) {
    options.maxExtent = new OpenLayers.Bounds.fromArray(options.maxExtent);
  }
  if (options.type === undefined){
    options.type = "png";
  }
  options.projection = new OpenLayers.Projection('EPSG:'+options.projection);
  var layer = new OpenLayers.Layer.MapBox(name, options);
  layer.styleMap = styleMap;
  return layer;
}
;
// $Id: openlayers_views_vector.js,v 1.1.2.5 2010/03/25 14:40:55 tmcw Exp $

/**
 * OpenLayers Views Vector Layer Handler
 */
Drupal.openlayers.layer.openlayers_views_vector = function(title, map, options) {
  // Note, so that we do not pass all the features along to the Layer
  // options, we use the options.options to give to Layer
  options.options.drupalID = options.drupalID;
  
  // Create projection
  options.projection = new OpenLayers.Projection('EPSG:'+options.projection);
  // Get style map
  options.options.styleMap = Drupal.openlayers.getStyleMap(map, options.drupalID);
  // Create layer object
  var layer = new OpenLayers.Layer.Vector(title, options.options);
  
  // Add fetures if there are any
  if (options.features) {
    Drupal.openlayers.addFeatures(map, layer, options.features);
  }
  
  return layer;
};
;
// $Id: openlayers_behavior_attribution.js,v 1.1.2.3 2009/09/28 01:11:41 zzolo Exp $

/**
 * @file
 * JS Implementation of OpenLayers behavior.
 */

/**
 * Attribution Behavior
 */
Drupal.behaviors.openlayers_behavior_attribution = function(context) {
  var data = $(context).data('openlayers');
  if (data && data.map.behaviors['openlayers_behavior_attribution']) {
    // Add control
    var control = new OpenLayers.Control.Attribution();
    data.openlayers.addControl(control);
    control.activate();
  }
};
// $Id: openlayers_behavior_navigation.js,v 1.1.2.4 2010/04/06 15:34:38 tmcw Exp $

/**
 * @file
 * JS Implementation of OpenLayers behavior.
 */

/**
 * Navigation Behavior
 */
Drupal.behaviors.openlayers_behavior_navigation = function(context) {
  var data = $(context).data('openlayers');
  if (data && data.map.behaviors['openlayers_behavior_navigation']) {
    // Add control
    var options = {
      'zoomWheelEnabled': data.map.behaviors['openlayers_behavior_navigation'].zoomWheelEnabled
    };
    var control = new OpenLayers.Control.Navigation(options);
    data.openlayers.addControl(control);
    control.activate();
  }
}
;
// $Id: openlayers_behavior_dragpan.js,v 1.1.2.3 2009/09/28 01:11:41 zzolo Exp $

/**
 * @file
 * JS Implementation of OpenLayers behavior.
 */

/**
 * DragPan Behavior
 */
Drupal.behaviors.openlayers_behavior_dragpan = function(context) {
  var data = $(context).data('openlayers');
  if (data && data.map.behaviors['openlayers_behavior_dragpan']) {
    // Add control
    var control = new OpenLayers.Control.DragPan();
    data.openlayers.addControl(control);
    control.activate();
  }
}
;
// $Id: openlayers_behavior_panzoom.js,v 1.1.2.1 2010/01/25 21:24:14 tmcw Exp $

/**
 * @file
 * JS Implementation of OpenLayers behavior.
 */

/**
 * Pan Zoom Bar Behavior
 */
Drupal.behaviors.openlayers_behavior_panzoom = function(context) {
  var data = $(context).data('openlayers');
  if (data && data.map.behaviors['openlayers_behavior_panzoom']) {
    // Add control
    var control = new OpenLayers.Control.PanZoom();
    data.openlayers.addControl(control);
    control.activate();
  }
}
;
// $Id: openlayers_behavior_zoomtolayer.js,v 1.1.2.7 2010/05/22 22:36:45 zzolo Exp $

/**
 * OpenLayers Zoom to Layer Behavior
 */
Drupal.behaviors.openlayers_zoomtolayer = function(context) {
  var layerextent, layers, data = $(context).data('openlayers');
  if (data && data.map.behaviors['openlayers_behavior_zoomtolayer']) {
    map = data.openlayers;
    layers = map.getLayersBy('drupalID', 
      data.map.behaviors['openlayers_behavior_zoomtolayer'].zoomtolayer);
    
    // Go through selected layers to get full extent.
    for (var i in layers) {
      if (layers[i].features !== undefined) {
        layerextent = layers[i].getDataExtent();

        // Check for valid layer extent
        if (layerextent != null) {
          map.zoomToExtent(layerextent);
          
          // If unable to find width due to single point,
          // zoom in with point_zoom_level option.
          if (layerextent.getWidth() == 0.0) {
            map.zoomTo(data.map.behaviors['openlayers_behavior_zoomtolayer'].point_zoom_level);
          }
        }
      }
    }
  }
}
;
/**
 * Implementation of Drupal behavior.
 */
Drupal.behaviors.openlayers_plus_behavior_blockswitcher = function(context) {
  Drupal.OpenLayersPlusBlockswitcher.attach(context);
};

/**
 * Blockswitcher is **NOT** an OpenLayers control.
 */
Drupal.OpenLayersPlusBlockswitcher = {};
Drupal.OpenLayersPlusBlockswitcher.layerStates = [];

/**
 * Initializes the blockswitcher and attaches to DOM elements.
 */
Drupal.OpenLayersPlusBlockswitcher.attach = function(context) {
  var data = $(context).data('openlayers');
  if (data && data.map.behaviors.openlayers_plus_behavior_blockswitcher) {
    this.map = data.openlayers;
    this.overlay_style = (data.map.behaviors.openlayers_plus_behavior_blockswitcher.map.overlay_style) ? 
      data.map.behaviors.openlayers_plus_behavior_blockswitcher.map.overlay_style : 'checkbox';
    

    // If behavior has requested display inside of map, respect it.
    if (data.map.behaviors.openlayers_plus_behavior_blockswitcher.map.enabled == true) {
      var block = $(data.map.behaviors.openlayers_plus_behavior_blockswitcher.block);
      block.addClass(data.map.behaviors.openlayers_plus_behavior_blockswitcher.map.position);
      $('.block-title', block).click(function() {
        $(this).parents('div.block').toggleClass('expanded');
        $(this).siblings('div.block-content').toggle();
      });

      $(context).append(block);

      if (data.map.behaviors.openlayers_plus_behavior_blockswitcher.map.open == true) {
        $('.block-title', block).click();
      }
    }

    this.blockswitcher = $('div.openlayers-blockswitcher');

    // Don't propagate click events to the map
    // this doesn't catch events that are below the layer list
    $('div.openlayers-blockswitcher').mousedown(function(evt) {
      OpenLayers.Event.stop(evt);
    });

    data.openlayers.events.on({
      "addlayer": this.redraw,
      "changelayer": this.redraw,
      "removelayer": this.redraw,
      "changebaselayer": this.redraw,
      scope: this
    });

    this.redraw();
  }
};

/**
 * Checks if the layer state has changed since the last redraw() call.
 *
 * Returns:
 * {Boolean} The layer state changed since the last redraw() call.
 */
Drupal.OpenLayersPlusBlockswitcher.needsRedraw = function() {
  if ( !this.layerStates.length || (this.map.layers.length != this.layerStates.length) ) {
    return true;
  }
  for (var i=0, len=this.layerStates.length; i<len; i++) {
    var layerState = this.layerStates[i];
    var layer = this.map.layers[i];
    if ( (layerState.name != layer.name) || (layerState.inRange != layer.inRange) || (layerState.id != layer.id) || (layerState.visibility != layer.visibility) ) {
      return true;
    }
  }
  return false;
};

/**
 * Redraws the blockswitcher to reflect the current state of layers.
 */
Drupal.OpenLayersPlusBlockswitcher.redraw = function() {
  if (this.needsRedraw()) {
    // Clear out previous layers
    $('.layers.base .layers-content div', this.blockswitcher).remove();
    $('.layers.data .layers-content div', this.blockswitcher).remove();
    $('.layers.base', this.blockswitcher).hide();
    $('.layers.data', this.blockswitcher).hide();

    // Save state -- for checking layer if the map state changed.
    // We save this before redrawing, because in the process of redrawing
    // we will trigger more visibility changes, and we want to not redraw
    // and enter an infinite loop.
    var len = this.map.layers.length;
    this.layerStates = new Array(len);
    for (var i = 0; i < len; i++) {
      var layerState = this.map.layers[i];
      this.layerStates[i] = {'name': layerState.name, 'visibility': layerState.visibility, 'inRange': layerState.inRange, 'id': layerState.id};
    }

    var layers = this.map.layers.slice();
    for (i = 0, len = layers.length; i < len; i++) {
      var layer = layers[i];
      var baseLayer = layer.isBaseLayer;
      if (layer.displayInLayerSwitcher) {
        // Only check a baselayer if it is *the* baselayer, check data layers if they are visible
        var checked = baseLayer ? (layer === this.map.baseLayer) : layer.getVisibility();

        // Create input element
        var inputType = (baseLayer) ? "radio" : this.overlay_style;
        
        var inputElem = $('.factory .'+ inputType, this.blockswitcher).clone();

        // Append to container
        var container = baseLayer ? $('.layers.base', this.blockswitcher) : $('.layers.data', this.blockswitcher);
        container.show();
        $('.layers-content', container).append(inputElem);

        // Set label text
        $('label', inputElem).append((layer.title !== undefined) ? layer.title : layer.name);

        // Add states and click handler
        if (baseLayer) {
          $(inputElem)
            .click(function() { Drupal.OpenLayersPlusBlockswitcher.layerClick(this); })
            .data('layer', layer);
          if (checked) {
            $(inputElem).addClass('activated');
          }
        }
        else {
          if (this.overlay_style == 'checkbox') {
            $('input', inputElem)
              .click(function() { Drupal.OpenLayersPlusBlockswitcher.layerClick(this); })
              .data('layer', layer)
              .attr('disabled', !baseLayer && !layer.inRange)
              .attr('checked', checked);
          }
          else if(this.overlay_style == 'radio') {
            $(inputElem)
              .click(function() { Drupal.OpenLayersPlusBlockswitcher.layerClick(this); })
              .data('layer', layer)
              .attr('disabled', !layer.inRange);
            if (checked) {
              $(inputElem).addClass('activated');
            }
          }
          // Set key styles
          if (layer.styleMap) {
            css = this.styleMapToCSS(layer.styleMap);
            $('span.key', inputElem).css(css);
          }
        }
      }
    }
  }
};

/**
 * Click handler that activates or deactivates a layer.
 */
Drupal.OpenLayersPlusBlockswitcher.layerClick = function(element) {
  var layer = $(element).data('layer');
  if (layer.isBaseLayer) {
    $('.layers.base .layers-content .activated').removeClass('activated');
    $(element).addClass('activated');
    layer.map.setBaseLayer(layer);
  }
  else if (this.overlay_style == 'radio') {
    $('.layers.data .layers-content .activated').removeClass('activated');
    $.each(this.map.getLayersBy('isBaseLayer', false),
      function() {
        if(this.CLASS_NAME !== 'OpenLayers.Layer.Vector.RootContainer' &&
           this.displayInLayerSwitcher) {
          this.setVisibility(false);
        }
      }
    );
    layer.setVisibility(true);
    $(element).addClass('activated');
  }
  else {
    layer.setVisibility($(element).is(':checked'));
  }
};

/**
  * Parameters:
  * styleMap {OpenLayers.StyleMap}
  *
  * Returns:
  * {Object} An object with css properties and values that can be applied to an element
  *
  */
Drupal.OpenLayersPlusBlockswitcher.styleMapToCSS = function (styleMap) {
  css = {};
  default_style = styleMap.styles['default'].defaultStyle;
  if (default_style.fillColor === 'transparent' && typeof default_style.externalGraphic != 'undefined') {
    css['background-image'] = 'url('+default_style.externalGraphic+')';
    css['background-repeat'] = 'no-repeat';
    css['background-color'] = 'transparent';
    css.width = default_style.pointRadius * 2;
    css.height = default_style.pointRadius * 2;
  }
  else {
    css['background-color'] = default_style.fillColor;
  }
  if (default_style.strokeWidth > 0) {
    css['border-color'] = default_style.strokeColor;
  }
  return css;
};
;
/**
 * Implementation of Drupal behavior.
 */
Drupal.behaviors.openlayers_plus_behavior_scalepoints = function(context) {
  var data = $(context).data('openlayers');
  if (data && data.map.behaviors.openlayers_plus_behavior_scalepoints) {
    var styles = data.map.behaviors.openlayers_plus_behavior_scalepoints.styles;
    // Collect vector layers
    var vector_layers = [];
    for (var key in data.openlayers.layers) {
      var layer = data.openlayers.layers[key];
      if (layer.CLASS_NAME === 'OpenLayers.Layer.Vector') {
        var styleMap = layer.styleMap;
        styleMap.addUniqueValueRules("default", "weight", styles);
        layer.redraw();
        vector_layers.push(layer);
      }
    }
    /**
     * This attempts to fix a problem in IE7 in which points
     * are not displayed until the map is moved. 
     *
     * Since namespaces is filled neither on window.load nor
     * document.ready, and testing it is unsafe, this renders
     * map layers after 500 milliseconds.
     */
    if($.browser.msie) {
      setTimeout(function() {
        $.each(data.openlayers.getLayersByClass('OpenLayers.Layer.Vector'),
        function() {
          this.redraw();
        });
      }, 500);
    }
  }
};
;
/**
 * Implementation of Drupal behavior.
 */
Drupal.behaviors.openlayers_plus_behavior_tooltips = function(context) {
  Drupal.OpenLayersTooltips.attach(context);
};

Drupal.OpenLayersTooltips = {};

Drupal.OpenLayersTooltips.attach = function(context) {
  var data = $(context).data('openlayers');
  if (data && data.map.behaviors.openlayers_plus_behavior_tooltips) {
    // Options
    var select_method = 'select';
    if (data.map.behaviors.openlayers_plus_behavior_tooltips.positioned) {
      select_method = 'positionedSelect';
    }
    // Collect vector layers
    var vector_layers = [];
    for (var key in data.openlayers.layers) {
      var layer = data.openlayers.layers[key];
      if (layer.CLASS_NAME === 'OpenLayers.Layer.Vector') {
        vector_layers.push(layer);
      }
    }
    // Add control
    var control = new OpenLayers.Control.SelectFeature(vector_layers, {
      activeByDefault: true,
      highlightOnly: false,
      onSelect: Drupal.OpenLayersTooltips.select,
      onUnselect: Drupal.OpenLayersTooltips.unselect,
      multiple: false,
      hover: true,
      callbacks: {
        'click': Drupal.OpenLayersTooltips.click,
        'over': Drupal.OpenLayersTooltips[select_method],
        'out': Drupal.OpenLayersTooltips.unselect
      }
    });
    data.openlayers.addControl(control);
    control.activate();
  }
};

Drupal.OpenLayersTooltips.click = function(feature) {
  var html = '';
  if (feature.attributes.name) {
    html += feature.attributes.name;
  }
  if (feature.attributes.description) {
    html += feature.attributes.description;
  }
  // @TODO: Make this a behavior option and allow interaction with other
  // behaviors like the MN story popup.
  var link;
  if ($(html).is('a')) {
    link = $(html);
  }
  else if ($(html).children('a').size() > 0) {
    link = $(html).children('a')[0];
  }
  if (link) {
    var href = $(link).attr('href');
    if (Drupal.OpenLayersPermalink && Drupal.OpenLayersPermalink.addQuery) {
      href = Drupal.OpenLayersPermalink.addQuery(href);
    }
    window.location = href;
    return false;
  }
  return;
};

Drupal.OpenLayersTooltips.getToolTip = function(feature) {
  var text = "<div class='openlayers-tooltip'>";
  if (feature.attributes.name) {
    text += "<div class='openlayers-tooltip-name'>" + feature.attributes.name + "</div>";
  }
  if (feature.attributes.description) {
    text += "<div class='openlayers-tooltip-description'>" + feature.attributes.description + "</div>";
  }
  text += "</div>";
  return $(text);
}

Drupal.OpenLayersTooltips.select = function(feature) {
  var tooltip = Drupal.OpenLayersTooltips.getToolTip(feature);
  $(feature.layer.map.div).append(tooltip);
};

Drupal.OpenLayersTooltips.positionedSelect = function(feature) {
  var tooltip = Drupal.OpenLayersTooltips.getToolTip(feature);
  var point  = new OpenLayers.LonLat(feature.geometry.x, feature.geometry.y);
  var offset = feature.layer.getViewPortPxFromLonLat(point);
  $(tooltip).css({zIndex: '1000', position: 'absolute', left: offset.x, top: offset.y});
  $(feature.layer.map.div).css({position:'relative'}).append(tooltip);
};

Drupal.OpenLayersTooltips.unselect = function(feature) {
  $(feature.layer.map.div).children('div.openlayers-tooltip').fadeOut('fast', function() { $(this).remove(); });
};
;
// $Id: tao.js,v 1.1.2.1 2010/09/28 19:39:45 yhahn Exp $

Drupal.behaviors.tao = function (context) {
  $('fieldset.collapsible:not(.tao-processed) > legend > .fieldset-title').each(function() {
    var fieldset = $(this).parents('fieldset').eq(0);
    fieldset.addClass('tao-processed');

    // Expand any fieldsets containing errors.
    if ($('input.error, textarea.error, select.error', fieldset).size() > 0) {
      $(fieldset).removeClass('collapsed');
    }

    // Add a click handler for toggling fieldset state.
    $(this).click(function() {
      if (fieldset.is('.collapsed')) {
        $(fieldset).removeClass('collapsed').children('.fieldset-content').show();
      }
      else {
        $(fieldset).addClass('collapsed').children('.fieldset-content').hide();
      }
      return false;
    });
  });
};
;

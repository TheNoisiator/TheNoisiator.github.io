
(function($,Edge,compId){var _=null,y=true,n=false,e127='${_KAPSELNIK_2}',e129='${__03_De_Huilende_Rappers_-_Wat_Wij_Zullen}',e70='${_OOGLNIK_2DOOD}',e72='${_haarnik}',e134='${_OOGRNIK}',e80='${_Mondnik}',e125='${_oognik}',e81='${_kapselthijsframe}',x3='geo, sans-serif',e121='${_MONDNIK_2}',e126='${_OOGLMARTIJN_2}',e86='${_NeusnikCopy}',e88='${_NEUSTHIJS}',fs='font-size',e90='${_Oogthijs}',ta='text-align',x67='stage',e92='${_OOGRNIK_2}',rz='rotateZ',c='color',e95='${_MONDTHIJS_2}',x52='italic',x7='both',e96='${_NEUSTHIJS_2}',x1='amaranth, sans-serif',x105='@@0@@px @@1@@',e146='${_OOGLMARTIJN}',x4='baumans, sans-serif',x5='3.0.0',p='px',e113='${_MONDTHIJS_2Copy}',e110='${_OOGLTHIJS_2}',ql='linear',e123='${_OOGRNIK_2DOOD}',x50='120',x6='3.0.0.322',e69='${_Kapselnik_frameCopy}',e71='${_Kapselnik_frame}',b='block',e76='${_Neusthijs}',e133='${_OOGRNIKdood}',a='Base State',e78='${_OOGRMARTIJNCopy}',bsz='background-size',e79='${_NEUSMARTIJN_2Copy}',d='display',s='style',e145='${_KAPSELTHIJS2}',e144='${_SIB3}',e124='${_Oogmartijn}',e143='${_KAPSELTHIJS_2}',x142='rgba(136,115,115,1.00)',x120='visible',e82='${_ondergrond}',e141='${_Text}',e83='${_OOGLNIK_2}',e84='${_Mondthijs}',e140='${_OOGRNIK_2Copy}',e85='${_NEUSTHIJS_3}',e139='${_KAPSELNIK2}',e87='${_OOGLNIKDOOD}',e89='${_OOGLMARTIJNCopy}',bp='background-position',e137='${_NEUSMARTIJN_2}',bg='background-color',x104='@@0@@% @@1@@%',x117='auto',x2='nova-square, sans-serif',e118='${_KAPSELNIK_2Copy}',e135='${_OOGLTHIJS}',e132='${_OOGRTHIJS}',tp='top',e131='${_OOGRMARTIJN_2}',x51='400',e114='${_Mondmartijn}',e91='${_BG2}',lf='left',e128='${_Play}',e147='${_OOGRMARTIJN}',e122='${_MONDTHIJS}',e119='${_Neusnik_2}',e136='${_BG_2}',ov='overflow',x8='rgba(0,0,0,0)',e93='${_Neusnik}',e116='${_Stage}',g='image',r='deg',x115='rgba(255,255,255,1)',e112='${_OOGRTHIJSCopy}',e97='${_NEUSMARTIJN}',x75='rgba(0,0,0,0.82)',e77='${_OOGLNIK}',e109='${_MONDNIK}',e94='${_OOGLTHIJS_2Copy}',e107='${_neusnik}',e106='${_Pauze}',x='text',e98='${_Neusmartijn}',e99='${_geenhaarmartijn}',x68='pointer',h='height',e101='${_MONDMARTIJNCopy}',e100='${_OOGRTHIJS_2}',o='opacity',e102='${_Haarthijs}',e138='${_OOGLNIKCopy}',e103='${_MONDNIKCopy}',dt='Default Timeline',e130='${_Gradinet}',e108='${_MONDMARTIJN}',i='none',x30='98',l='normal',e111='${_MONDMARTIJN_2}',x74='justify',zx='scaleX',t='transform',w='width',x73='rgba(151,129,122,0.94)',ff='font-family';var im='images/';var g22='MONDTHIJS%202.png',g24='NEUSTHIJS%202.png',g43='OOGLMARTIJN%202.png',g15='OOGRTHIJS.png',g9='BG2.jpg',g34='MONDTHIJS.png',g37='KAPSELTHIJS%202.png',g36='KAPSELNIK2.png',g47='NEUSMARTIJN.png',g10='ondergrond.png',g35='NEUSTHIJS.png',g39='OOGRNIK.png',g33='OOGLTHIJS%202.png',g64='BG%202.jpg',g12='SIB3.png',g66='Play.png',g46='MONDMARTIJN%202.png',g11='Gradinet.png',g17='OOGRMARTIJN.png',g14='OOGLMARTIJN.png',g25='Neusnik.png',g41='OOGLNIK%202.png',g16='OOGLNIK.png',g38='kapselthijsframe.png',g18='OOGLTHIJS.png',g20='MONDMARTIJN.png',g27='KAPSELNIK%2022.png',g28='OOGLNIK3.png',g26='KAPSELTHIJS2.png',g32='OOGRNIK3.png',g19='OOGRNIK%202.png',g31='OOGRTHIJS%202.png',g13='Kapselnik%20frame.png',g65='Pauze.png',g23='NEUSMARTIJN%202.png',g48='Neusnik%202.png',g42='OOGLNIK2.png',g44='OOGRMARTIJN%202.png',g45='MONDNIK%202.png',g40='OOGRNIK2.png',g21='MONDNIK.png';var s62="Mond<br>Thijs",s60="Neus<br>Thijs<br>",s63="Oog<br>Thijs<br>",s61="Haar<br>Thijs<br>",s57="Geen haar<br>Martijn<br>",s56="Neus<br>Martijn<br>",s29="Latru",s49="Oog<br>Nik<br>",s54="Haar<br>Nik<br>",s55="Mond<br>Nik<br>",s59="Oog<br>Martijn<br>",s53="Neus<br>Nik<br>",s58="Mond<br>Martijn";var fonts={};fonts[x1]='<script src=\"http://use.edgefonts.net/amaranth:n7,i4,i7,n4:all.js\"></script>';fonts[x2]='<script src=\"http://use.edgefonts.net/nova-square:n4:all.js\"></script>';fonts[x3]='<script src=\"http://use.edgefonts.net/geo:i4,n4:all.js\"></script>';fonts[x4]='<script src=\"http://use.edgefonts.net/baumans:n4:all.js\"></script>';var P=Edge.P,T=Edge.T,A=Edge.A;var opts={};var resources=[];var symbols={"stage":{v:x5,mv:x5,b:x6,bS:a,stf:x7,cg:x7,iS:a,gpu:n,rI:n,cn:{dom:[{id:'BG2',t:g,r:['0px','0px','7106px','4737px','auto','auto'],f:[x8,im+g9,'0px','0px']},{id:'ondergrond',t:g,r:['0px','0px','7106px','4737px','auto','auto'],f:[x8,im+g10,'0px','0px']},{id:'Gradinet',v:i,t:g,r:['0px','0px','7106px','4737px','auto','auto'],f:[x8,im+g11,'0px','0px']},{id:'SIB3',t:g,r:['0px','0px','7106px','4737px','auto','auto'],f:[x8,im+g12,'0px','0px']},{id:'Kapselnik_frameCopy',t:g,tag:'img',r:['2632px','658px','2088px','1739px','auto','auto'],cu:['pointer'],f:[x8,im+g13,'0px','0px']},{id:'OOGLMARTIJN',v:b,t:g,tag:'img',r:['3699px','1257px','760px','573px','auto','auto'],cu:['pointer'],f:[x8,im+g14,'0px','0px']},{id:'OOGRTHIJS',v:b,t:g,tag:'img',r:['3735px','1298px','687px','560px','auto','auto'],cu:['pointer'],f:[x8,im+g15,'0px','0px']},{id:'OOGLNIKCopy',v:i,t:g,tag:'img',r:['3788px','1301px','597px','543px','auto','auto'],f:[x8,im+g16,'0px','0px']},{id:'OOGRMARTIJN',v:b,t:g,tag:'img',r:['2935px','1268px','625px','607px','auto','auto'],cu:['pointer'],f:[x8,im+g17,'0px','0px']},{id:'OOGLTHIJS',v:i,t:g,tag:'img',r:['2968px','1304px','614px','560px','auto','auto'],f:[x8,im+g18,'0px','0px']},{id:'OOGRNIK_2Copy',v:i,t:g,tag:'img',r:['3020px','1324px','536px','561px','auto','auto'],f:[x8,im+g19,'0px','0px']},{id:'MONDMARTIJN',t:g,tag:'img',r:['3207px','2007px','1012px','516px','auto','auto'],cu:['pointer'],f:[x8,im+g20,'0px','0px']},{id:'MONDNIKCopy',t:g,tag:'img',r:['41.7%','42.2%','21.4%','23.3%','auto','auto'],cu:['pointer'],f:[x8,im+g21,'50%','50%','1450px','auto']},{id:'MONDTHIJS_2',t:g,tag:'img',r:['3199px','1922px','987px','611px','auto','auto'],cu:['pointer'],f:[x8,im+g22,'0px','0px']},{id:'NEUSMARTIJN_2',v:b,t:g,tag:'img',r:['3354px','1304px','598px','840px','auto','auto'],cu:['pointer'],f:[x8,im+g23,'0px','0px']},{id:'NEUSTHIJS_2',t:g,tag:'img',r:['3415px','1432px','610px','673px','auto','auto'],cu:['pointer'],f:[x8,im+g24,'0px','0px']},{id:'NeusnikCopy',t:g,tag:'img',r:['3417px','1485px','508px','610px','auto','auto'],cu:['pointer'],f:[x8,im+g25,'0px','0px'],tf:[[],['-1']]},{id:'KAPSELTHIJS2',v:b,t:g,tag:'img',r:['4367px','510px','2723px','2734px','auto','auto'],cu:['pointer'],f:[x8,im+g26,'0px','0px']},{id:'KAPSELNIK_2',v:b,t:g,tag:'img',r:['4852px','694px','1878px','1701px','auto','auto'],f:[x8,im+g27,'0px','0px']},{id:'KAPSELNIK_2Copy',t:g,tag:'img',r:['4852px','694px','1878px','1701px','auto','auto'],cu:['pointer'],o:0.0019690040650407,f:[x8,im+g27,'0px','0px']},{id:'OOGLNIKDOOD',t:g,tag:'img',r:['5804px','1558px','562px','530px','auto','auto'],cu:['pointer'],f:[x8,im+g16,'0px','0px']},{id:'OOGLNIK',t:g,tag:'img',r:['5801px','1542px','567px','526px','auto','auto'],cu:['pointer'],f:[x8,im+g28,'0px','0px']},{id:'Text',v:i,t:x,r:['6657px','4544px','auto','auto','auto','auto'],text:s29,n:[x4,x30,"rgba(190,171,171,1.00)",l,i,""]},{id:'OOGRTHIJS_2',t:g,tag:'img',r:['5746px','1554px','687px','560px','auto','auto'],cu:['pointer'],f:[x8,im+g31,'0px','0px']},{id:'OOGRNIK_2DOOD',t:g,tag:'img',r:['5073px','1591px','514px','545px','auto','auto'],cu:['pointer'],f:[x8,im+g19,'0px','0px']},{id:'OOGRNIK_2',t:g,r:['5056px','1572px','547px','493px','auto','auto'],f:[x8,im+g32,'0px','0px']},{id:'OOGLTHIJS_2',t:g,tag:'img',r:['4950px','1545px','735px','536px','auto','auto'],cu:['pointer'],f:[x8,im+g33,'0px','0px']},{id:'OOGRMARTIJNCopy',t:g,tag:'img',r:['5004px','1526px','625px','607px','auto','auto'],cu:['pointer'],f:[x8,im+g17,'0px','0px']},{id:'OOGLMARTIJNCopy',t:g,tag:'img',r:['5701px','1519px','760px','573px','auto','auto'],cu:['pointer'],f:[x8,im+g14,'0px','0px']},{id:'MONDTHIJS',t:g,tag:'img',r:['5242px','2172px','987px','609px','auto','auto'],cu:['pointer'],f:[x8,im+g34,'0px','0px']},{id:'MONDNIK',t:g,tag:'img',r:['70.9%','48%','20.4%','21.7%','auto','auto'],cu:['pointer'],f:[x8,im+g21,'50%','50%','1450px','auto']},{id:'MONDMARTIJNCopy',t:g,tag:'img',r:['5231px','2265px','1012px','516px','auto','auto'],cu:['pointer'],f:[x8,im+g20,'0px','0px']},{id:'NEUSTHIJS',t:g,tag:'img',r:['5467px','1746px','574px','632px','auto','auto'],cu:['pointer'],f:[x8,im+g35,'0px','0px'],tf:[[],['-1']]},{id:'Neusnik',t:g,tag:'img',r:['5429px','1787px','508px','610px','auto','auto'],cu:['pointer'],f:[x8,im+g25,'0px','0px'],tf:[[],['-1']]},{id:'NEUSMARTIJN_2Copy',t:g,tag:'img',r:['5379px','1570px','598px','840px','auto','auto'],cu:['pointer'],f:[x8,im+g23,'0px','0px']},{id:'KAPSELNIK2',v:b,t:g,r:['0px','0px','3226px','3674px','auto','auto'],cu:['pointer'],o:1,f:[x8,im+g36,'0px','0px']},{id:'KAPSELTHIJS_2',v:i,t:g,tag:'img',r:['2397px','441px','2676px','2602px','auto','auto'],f:[x8,im+g37,'0px','0px']},{id:'Kapselnik_frame',t:g,tag:'img',r:['565px','784px','1788px','1739px','auto','auto'],cu:['pointer'],f:[x8,im+g13,'0px','0px']},{id:'kapselthijsframe',t:g,tag:'img',r:['88px','548px','2494px','2658px','auto','auto'],cu:['pointer'],f:[x8,im+g38,'0px','0px']},{id:'OOGRNIKdood',v:i,t:g,tag:'img',r:['852px','1544px','543px','552px','auto','auto'],f:[x8,im+g39,'0px','0px']},{id:'OOGRNIK',v:i,t:g,r:['852px','1544','547px','493px','auto','auto'],f:[x8,im+g40,'0px','0px']},{id:'OOGLNIK_2DOOD',t:g,tag:'img',r:['1590px','1545px','532px','524px','auto','auto'],cu:['pointer'],f:[x8,im+g41,'0px','0px']},{id:'OOGLNIK_2',t:g,tag:'img',r:['1590px','1545px','567px','526px','auto','auto'],f:[x8,im+g42,'0px','0px']},{id:'OOGLMARTIJN_2',t:g,tag:'img',r:['1543px','1511px','568px','491px','auto','auto'],cu:['pointer'],f:[x8,im+g43,'0px','0px']},{id:'OOGRMARTIJN_2',v:b,t:g,tag:'img',r:['825px','1538px','570px','464px','auto','auto'],cu:['pointer'],f:[x8,im+g44,'0px','0px']},{id:'OOGRTHIJSCopy',t:g,tag:'img',r:['1499px','1511px','687px','560px','auto','auto'],cu:['pointer'],f:[x8,im+g15,'0px','0px']},{id:'OOGLTHIJS_2Copy',t:g,tag:'img',r:['756px','1502px','735px','536px','auto','auto'],cu:['pointer'],f:[x8,im+g33,'0px','0px']},{id:'MONDNIK_2',t:g,tag:'img',r:['763px','2237px','1392px','915px','auto','auto'],cu:['pointer'],f:[x8,im+g45,'0px','0px']},{id:'MONDMARTIJN_2',t:g,tag:'img',r:['919px','2245px','1079px','823px','auto','auto'],cu:['pointer'],f:[x8,im+g46,'0px','0px']},{id:'MONDTHIJS_2Copy',t:g,tag:'img',r:['1102px','2227px','854px','536px','auto','auto'],cu:['pointer'],f:[x8,im+g22,'0px','0px']},{id:'NEUSMARTIJN',t:g,tag:'img',r:['0px','0px','624px','837px','auto','auto'],cu:['pointer'],o:1,f:[x8,im+g47,'0px','0px']},{id:'Neusnik_2',t:g,tag:'img',r:['53px','217px','506px','609px','auto','auto'],cu:['pointer'],o:1,f:[x8,im+g48,'0px','0px']},{id:'NEUSTHIJS_3',t:g,tag:'img',r:['1184px','1675px','579px','639px','auto','auto'],cu:['pointer'],f:[x8,im+g24,'0px','0px'],tf:[[],[],[],['-0.98387']]},{id:'oognik',t:x,r:['3494px','4372px','auto','auto','auto','auto'],text:s49,align:"justify",n:[x3,x50,"rgba(151,129,122,0.94)",x51,i,x52],textShadow:["rgba(0,0,0,0.82)",3,3,0]},{id:'neusnik',t:x,r:['3494px','4372px','auto','auto','auto','auto'],text:s53,align:"justify",n:[x3,x50,"rgba(151,129,122,0.94)",x51,i,x52],textShadow:["rgba(0,0,0,0.82)",3,3,0]},{id:'haarnik',t:x,r:['3494px','4372px','auto','auto','auto','auto'],text:s54,align:"justify",n:[x3,x50,"rgba(151,129,122,0.94)",x51,i,x52],textShadow:["rgba(0,0,0,0.82)",3,3,0]},{id:'Mondnik',t:x,r:['3494px','4372px','auto','auto','auto','auto'],text:s55,align:"justify",n:[x3,x50,"rgba(151,129,122,0.94)",x51,i,x52],textShadow:["rgba(0,0,0,0.82)",3,3,0]},{id:'Neusmartijn',t:x,r:['3494px','4372px','auto','auto','auto','auto'],text:s56,align:"justify",n:[x3,x50,"rgba(151,129,122,0.94)",x51,i,x52],textShadow:["rgba(0,0,0,0.82)",3,3,0]},{id:'geenhaarmartijn',t:x,r:['3494px','4372px','auto','auto','auto','auto'],text:s57,align:"justify",n:[x3,x50,"rgba(151,129,122,0.94)",x51,i,x52],textShadow:["rgba(0,0,0,0.82)",3,3,0]},{id:'Mondmartijn',t:x,r:['3494px','4372px','auto','auto','auto','auto'],text:s58,align:"justify",n:[x3,x50,"rgba(151,129,122,0.94)",x51,i,x52],textShadow:["rgba(0,0,0,0.82)",3,3,0]},{id:'Oogmartijn',t:x,r:['3494px','4372px','auto','auto','auto','auto'],text:s59,align:"justify",n:[x3,x50,"rgba(151,129,122,0.94)",x51,i,x52],textShadow:["rgba(0,0,0,0.82)",3,3,0]},{id:'Neusthijs',t:x,r:['3494px','4372px','auto','auto','auto','auto'],text:s60,align:"justify",n:[x3,x50,"rgba(151,129,122,0.94)",x51,i,x52],textShadow:["rgba(0,0,0,0.82)",3,3,0]},{id:'Haarthijs',t:x,r:['3494px','4372px','auto','auto','auto','auto'],text:s61,align:"justify",n:[x3,x50,"rgba(151,129,122,0.94)",x51,i,x52],textShadow:["rgba(0,0,0,0.82)",3,3,0]},{id:'Mondthijs',t:x,r:['3494px','4372px','auto','auto','auto','auto'],text:s62,align:"justify",n:[x3,x50,"rgba(151,129,122,0.94)",x51,i,x52],textShadow:["rgba(0,0,0,0.82)",3,3,0]},{id:'Oogthijs',t:x,r:['3494px','4372px','auto','auto','auto','auto'],text:s63,align:"justify",n:[x3,x50,"rgba(151,129,122,0.94)",x51,i,x52],textShadow:["rgba(0,0,0,0.82)",3,3,0]},{id:'BG_2',v:b,t:g,r:['0px','0px','7106px','4737px','auto','auto'],f:[x8,im+g64,'0px','0px']},{id:'Pauze',t:g,r:['149px','4425px','220px','220px','auto','auto'],f:[x8,im+g65,'0px','0px']},{id:'_03_De_Huilende_Rappers_-_Wat_Wij_Zullen',v:i,t:'audio',tag:'audio',r:['1593','3778','320px','45px','auto','auto'],lp:'loop',sr:['media/03.%20De%20Huilende%20Rappers%20-%20Wat%20Wij%20Zullen.mp3']},{id:'Play',v:i,t:g,r:['149px','4425px','220px','220px','auto','auto'],f:[x8,im+g66,'0px','0px']}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:133930,a:y,l:{"NT":0,"Intro":187},tt:[]}}}};var S1=symbols[x67];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e69).P(tp,658).P("cursor",x68).P(o,0,_,_,"").P(lf,2632,_,_,p).P(w,2088);A1.A(e70).P(tp,1545).P(lf,1590).P("cursor",x68);A1.A(e71).P(tp,784).P(o,0,_,_,"").P(lf,565,_,_,p).P("cursor",x68);A1.A(e72).P("textShadow.blur",0,"subproperty").P("textShadow.offsetH",3,"subproperty").P(c,x73,c).P("font-weight",400,_,_,"").P(lf,3494,_,_,p).P(fs,120).P(tp,4372).P(ta,x74).P(ff,x3).P("font-style",x52).P("textShadow.color",x75,"subproperty").P("text-decoration",i).P("textShadow.offsetV",3,"subproperty");A1.A(e76).P("textShadow.blur",0,"subproperty").P("textShadow.offsetH",3,"subproperty").P(c,x73,c).P("font-weight",400,_,_,"").P(lf,3494,_,_,p).P(fs,120).P(tp,4372).P(ta,x74).P("textShadow.offsetV",3,"subproperty").P("font-style",x52).P(ff,x3).P("text-decoration",i).P("textShadow.color",x75,"subproperty");A1.A(e77).P(tp,1542).P(lf,5801).P("cursor",x68);A1.A(e78).P(tp,1526).P(o,0,_,_,"").P(lf,5004,_,_,p).P("cursor",x68);A1.A(e79).P(tp,1570).P(o,0,_,_,"").P(lf,5379,_,_,p).P("cursor",x68);A1.A(e80).P("textShadow.blur",0,"subproperty").P("textShadow.offsetH",3,"subproperty").P(c,x73,c).P("font-weight",400,_,_,"").P(lf,3494,_,_,p).P(fs,120).P(tp,4372).P(ta,x74).P("textShadow.offsetV",3,"subproperty").P("font-style",x52).P(ff,x3).P("text-decoration",i).P("textShadow.color",x75,"subproperty");A1.A(e81).P(tp,548).P(o,0,_,_,"").P(lf,88,_,_,p).P("cursor",x68);A1.A(e82).P(lf,0).P(tp,0);A1.A(e83).P(lf,1590).P(tp,1545);A1.A(e84).P("textShadow.blur",0,"subproperty").P("textShadow.offsetH",3,"subproperty").P(c,x73,c).P("font-weight",400,_,_,"").P(lf,3494,_,_,p).P(fs,120).P(tp,4372).P(ta,x74).P("textShadow.offsetV",3,"subproperty").P("font-style",x52).P("textShadow.color",x75,"subproperty").P("text-decoration",i).P(ff,x3);A1.A(e85).P(tp,1675).P(zx,-0.98387,t,_,"").P(h,639,_,_,p).P(lf,1184).P("cursor",x68).P(w,579);A1.A(e86).P(tp,1485).P(rz,-1,t,_,r).P(o,0,_,_,"").P(lf,3417,_,_,p).P("cursor",x68);A1.A(e87).P(tp,1558).P(lf,5804).P("cursor",x68);A1.A(e88).P(tp,1746).P("cursor",x68).P(lf,5467).P(rz,-1,t,_,r);A1.A(e89).P(tp,1519).P(o,0,_,_,"").P(lf,5701,_,_,p).P("cursor",x68);A1.A(e90).P("textShadow.blur",0,"subproperty").P("textShadow.offsetH",3,"subproperty").P(c,x73,c).P("font-weight",400,_,_,"").P(lf,3494,_,_,p).P(fs,120).P(tp,4372).P(ta,x74).P(ff,x3).P("font-style",x52).P("textShadow.color",x75,"subproperty").P("text-decoration",i).P("textShadow.offsetV",3,"subproperty");A1.A(e91).P(lf,0).P(tp,0);A1.A(e92).P(lf,5056).P(tp,1572);A1.A(e93).P(tp,1787).P("cursor",x68).P(lf,5429).P(rz,-1,t,_,r);A1.A(e94).P(tp,1502).P(o,0,_,_,"").P(lf,756,_,_,p).P("cursor",x68);A1.A(e95).P(tp,1922).P(lf,3199).P("cursor",x68);A1.A(e96).P(tp,1432).P(lf,3415).P("cursor",x68);A1.A(e97).P(tp,1572).P(o,1,_,_,"").P(lf,1187,_,_,p).P("cursor",x68);A1.A(e98).P("textShadow.blur",0,"subproperty").P("textShadow.offsetH",3,"subproperty").P(c,x73,c).P("font-weight",400,_,_,"").P(lf,3494,_,_,p).P(fs,120).P(tp,4372).P(ta,x74).P(ff,x3).P("font-style",x52).P("textShadow.color",x75,"subproperty").P("text-decoration",i).P("textShadow.offsetV",3,"subproperty");A1.A(e99).P("textShadow.blur",0,"subproperty").P("textShadow.offsetH",3,"subproperty").P(c,x73,c).P("font-weight",400,_,_,"").P(lf,3494,_,_,p).P(fs,120).P(tp,4372).P(ta,x74).P("textShadow.offsetV",3,"subproperty").P("font-style",x52).P(ff,x3).P("text-decoration",i).P("textShadow.color",x75,"subproperty");A1.A(e100).P(tp,1554).P(lf,5746).P("cursor",x68);A1.A(e101).P(tp,2265).P(o,0,_,_,"").P(lf,5231,_,_,p).P("cursor",x68);A1.A(e102).P("textShadow.blur",0,"subproperty").P("textShadow.offsetH",3,"subproperty").P(c,x73,c).P("font-weight",400,_,_,"").P(lf,3494,_,_,p).P(fs,120).P(tp,4372).P(ta,x74).P("textShadow.color",x75,"subproperty").P("font-style",x52).P(ff,x3).P("text-decoration",i).P("textShadow.offsetV",3,"subproperty");A1.A(e103).P(tp,42.17,_,_,"%").P("cursor",x68).P(bp,[50,50],_,x104).P(bsz,[1450,'auto'],_,x105).P(h,23.27).P(o,0,_,_,"").P(lf,41.71,_,_,"%").P(w,21.38);A1.A(e106).P(h,220).P(tp,4425).P(lf,149).P(w,220);A1.A(e107).P("textShadow.blur",0,"subproperty").P("textShadow.offsetH",3,"subproperty").P(c,x73,c).P("font-weight",400,_,_,"").P(lf,3494,_,_,p).P(fs,120).P(tp,4372).P(ta,x74).P("textShadow.offsetV",3,"subproperty").P("font-style",x52).P("textShadow.color",x75,"subproperty").P("text-decoration",i).P(ff,x3);A1.A(e108).P(tp,2007).P(lf,3207).P("cursor",x68);A1.A(e109).P(tp,47.97,_,_,"%").P("cursor",x68).P(bsz,[1450,'auto'],_,x105).P(bp,[50,50],_,x104).P(lf,70.85);A1.A(e110).P(tp,1545).P(lf,4950).P("cursor",x68);A1.A(e111).P(tp,2245).P(lf,919).P("cursor",x68);A1.A(e112).P(tp,1511).P(o,0,_,_,"").P(lf,1499,_,_,p).P("cursor",x68);A1.A(e113).P(tp,2227).P("cursor",x68).P(h,536).P(o,0,_,_,"").P(lf,1102,_,_,p).P(w,854);A1.A(e114).P("textShadow.blur",0,"subproperty").P("textShadow.offsetH",3,"subproperty").P(c,x73,c).P("font-weight",400,_,_,"").P(lf,3494,_,_,p).P(fs,120).P(tp,4372).P(ta,x74).P("textShadow.color",x75,"subproperty").P("font-style",x52).P(ff,x3).P("text-decoration",i).P("textShadow.offsetV",3,"subproperty");A1.A(e116).P(bg,x115,c).P(ov,x117).P(h,4738).P(w,7106);A1.A(e118).P(tp,694).P(o,0,_,_,"").P(lf,4852,_,_,p).P("cursor",x68);A1.A(e119).P(tp,1753).P(ov,x120).P(o,1,_,_,"").P(lf,1247,_,_,p).P("cursor",x68);A1.A(e121).P(tp,2237).P("cursor",x68).P(lf,763).P(w,1392);A1.A(e122).P(tp,2172).P(lf,5242).P("cursor",x68);A1.A(e123).P(tp,1591).P(lf,5073).P("cursor",x68);A1.A(e124).P("textShadow.blur",0,"subproperty").P("textShadow.offsetH",3,"subproperty").P(c,x73,c).P("font-weight",400,_,_,"").P(lf,3494,_,_,p).P(fs,120).P(tp,4372).P(ta,x74).P("textShadow.offsetV",3,"subproperty").P("font-style",x52).P("textShadow.color",x75,"subproperty").P("text-decoration",i).P(ff,x3);A1.A(e125).P("textShadow.blur",0,"subproperty").P("textShadow.offsetH",3,"subproperty").P(c,x73,c).P("font-weight",400,_,_,"").P(lf,3494,_,_,p).P(fs,120).P(tp,4372).P(ta,x74).P("textShadow.color",x75,"subproperty").P("font-style",x52).P(ff,x3).P("text-decoration",i).P("textShadow.offsetV",3,"subproperty");A1.A(e126).P(tp,1511).P(lf,1543).P("cursor",x68);A1.A(e127).P(tp,694).P(lf,4852).P(d,b).T(0,i).T(1.783,i).T(2.4,i);A1.A(e128).P(tp,4425).P(h,220).P(lf,149).P(w,220).P(d,i).T(1.087,b);A1.A(e129).P("volume",0.1,_,_,"").T(0,0.1);A1.A(e130).P(tp,0).P(lf,0).P(d,i).T(0,b).P(o,0,_,_,"").T(0,1,2.5,ql);A1.A(e131).P(lf,825).P("cursor",x68).P(tp,1538).P(d,b).T(1.087,i).T(1.193,b).T(1.282,i);A1.A(e132).P(lf,3735).P("cursor",x68).P(tp,1298).P(d,b).T(1.087,i).T(1.233,b).T(1.65,i).T(2.384,i);A1.A(e133).P(tp,1544).P(lf,852).P(d,i).T(1.292,b).T(2.15,i).T(2.536,i);A1.A(e134).P(lf,852).P(d,i).T(1.282,b).T(2.14,i).T(2.526,i);A1.A(e135).P(tp,1304).P(lf,2968).P(d,i).T(1.4,b).T(2.337,i);A1.A(e136).P(tp,0).P(lf,0).P(d,b).T(1.087,i).P(o,1,_,_,"").T(0,0,1.087,ql);A1.A(e137).P(lf,3354).P("cursor",x68).P(tp,1304).P(d,b).T(1.087,i).T(1.65,b).T(2.337,i);A1.A(e138).P(tp,1301).P(h,543).P(o,0,_,_,"").P(lf,3788,_,_,p).P(w,597).P(d,i).T(2.354,b);A1.A(e139).P(tp,0).P(o,1,_,_,"").P(lf,0,_,_,p).P("cursor",x68).P(d,b).T(1.087,i).T(1.65,b).T(2.15,i);A1.A(e140).P(tp,1324).P(h,561).P(o,0,_,_,"").P(lf,3020,_,_,p).P(w,536).P(d,i).T(2.4,b);A1.A(e141).P(tp,4544).P(ff,x4).P(lf,6657).P(fs,98).P(c,x142,c).T(1.087,x142).P(d,i).T(1.087,b);A1.A(e143).P(tp,441).P(lf,2397).P(d,i).T(1.4,b).T(1.9,i);A1.A(e144).P(tp,0).P(lf,0).P(o,0,_,_,"").T(0,1,2.313,ql);A1.A(e145).P(lf,4367).P("cursor",x68).P(tp,510).P(d,b).T(0,b).T(1.292,b).T(1.783,i).T(2.5,i);A1.A(e146).P(lf,3699).P("cursor",x68).P(tp,1257).P(d,b).T(1.087,i).T(1.4,i).T(1.783,b).T(2.337,i);A1.A(e147).P(lf,2935).P("cursor",x68).P(tp,1268).P(d,b).T(1.087,i).T(1.783,b).T(2.15,i);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-31286401");
var wu="170";var e_=0,pd=1,n_=2;var Sp=1,i_=2,ki=3,_r=0,Un=1,ei=2,mr=0,zs=1,Uo=2,md=3,gd=4,r_=5,Vr=100,s_=101,o_=102,a_=103,l_=104,c_=200,h_=201,u_=202,f_=203,sh=204,oh=205,d_=206,p_=207,m_=208,g_=209,__=210,v_=211,x_=212,y_=213,M_=214,ah=0,lh=1,ch=2,Ws=3,hh=4,uh=5,fh=6,dh=7,bp=0,S_=1,b_=2,gr=0,w_=1,T_=2,E_=3,A_=4,C_=5,R_=6,P_=7;var wp=300,Xs=301,Ys=302,ph=303,mh=304,Sl=306,gh=1e3,Wr=1001,_h=1002,Yn=1003,I_=1004;var ba=1005;var Si=1006,Ac=1007;var Xr=1008;var Gi=1009,Tp=1010,Ep=1011,No=1012,Tu=1013,Yr=1014,bi=1015,zo=1016,Eu=1017,Au=1018,qs=1020,Ap=35902,Cp=1021,Rp=1022,pi=1023,Pp=1024,Ip=1025,Vs=1026,$s=1027,Cu=1028,Ru=1029,Lp=1030,Pu=1031;var Iu=1033,$a=33776,Za=33777,Ja=33778,Ka=33779,vh=35840,xh=35841,yh=35842,Mh=35843,Sh=36196,bh=37492,wh=37496,Th=37808,Eh=37809,Ah=37810,Ch=37811,Rh=37812,Ph=37813,Ih=37814,Lh=37815,Dh=37816,Uh=37817,Nh=37818,Oh=37819,Fh=37820,Bh=37821,Qa=36492,kh=36494,zh=36495,Dp=36283,Vh=36284,Hh=36285,Gh=36286;var ja=2300,Wh=2301,Cc=2302,_d=2400,vd=2401,xd=2402;var L_=3200,D_=3201;var U_=0,N_=1,dr="",Mn="srgb",Qs="srgb-linear",bl="linear",me="srgb";var ws=7680;var yd=519,O_=512,F_=513,B_=514,Up=515,k_=516,z_=517,V_=518,H_=519,Md=35044;var Sd="300 es",Vi=2e3,tl=2001,vr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Rc=Math.PI/180,Xh=180/Math.PI;function Vo(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[r&255]+cn[r>>8&255]+cn[r>>16&255]+cn[r>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function un(r,t,e){return Math.max(t,Math.min(e,r))}function G_(r,t){return(r%t+t)%t}function Pc(r,t,e){return(1-e)*r+e*t}function bo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Dn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var he=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],_=n[8],g=i[0],m=i[3],p=i[6],v=i[1],M=i[4],x=i[7],E=i[2],b=i[5],T=i[8];return s[0]=o*g+a*v+l*E,s[3]=o*m+a*M+l*b,s[6]=o*p+a*x+l*T,s[1]=c*g+h*v+f*E,s[4]=c*m+h*M+f*b,s[7]=c*p+h*x+f*T,s[2]=d*g+u*v+_*E,s[5]=d*m+u*M+_*b,s[8]=d*p+u*x+_*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,d=a*l-h*s,u=c*s-o*l,_=e*f+n*d+i*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=f*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=u*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ic.makeScale(t,e)),this}rotate(t){return this.premultiply(Ic.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ic.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ic=new Zt;function Np(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function el(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function W_(){let r=el("canvas");return r.style.display="block",r}var bd={};function Io(r){r in bd||(bd[r]=!0,console.warn(r))}function X_(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Y_(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function q_(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var oe={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(r.r=Hs(r.r),r.g=Hs(r.g),r.b=Hs(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===dr?bl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Hi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var wd=[.64,.33,.3,.6,.15,.06],Td=[.2126,.7152,.0722],Ed=[.3127,.329],Ad=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cd=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[Qs]:{primaries:wd,whitePoint:Ed,transfer:bl,toXYZ:Ad,fromXYZ:Cd,luminanceCoefficients:Td,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:wd,whitePoint:Ed,transfer:me,toXYZ:Ad,fromXYZ:Cd,luminanceCoefficients:Td,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}});var Ts,Yh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ts===void 0&&(Ts=el("canvas")),Ts.width=t.width,Ts.height=t.height;let n=Ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=el("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Hi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hi(e[n]/255)*255):e[n]=Hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$_=0,nl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Vo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Lc(i[o].image)):s.push(Lc(i[o]))}else s=Lc(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Lc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Yh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Z_=0,Nn=class r extends vr{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Wr,i=Wr,s=Si,o=Xr,a=pi,l=Gi,c=r.DEFAULT_ANISOTROPY,h=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Vo(),this.name="",this.source=new nl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gh:t.x=t.x-Math.floor(t.x);break;case Wr:t.x=t.x<0?0:1;break;case _h:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gh:t.y=t.y-Math.floor(t.y);break;case Wr:t.y=t.y<0?0:1;break;case _h:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=wp;Nn.DEFAULT_ANISOTROPY=1;var Ve=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,x=(u+1)/2,E=(p+1)/2,b=(h+d)/4,T=(f+g)/4,R=(_+m)/4;return M>x&&M>E?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=b/n,s=T/n):x>E?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=b/i,s=R/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=T/s,i=R/s),this.set(n,i,s,e),this}let v=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qh=class extends vr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Nn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new nl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wi=class extends qh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},il=class extends Nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $h=class extends Nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xr=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],d=s[o+0],u=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=u,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==d||c!==u||h!==_){let m=1-a,p=l*d+c*u+h*_+f*g,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let E=Math.sqrt(M),b=Math.atan2(E,p*v);m=Math.sin(m*b)/E,a=Math.sin(a*b)/E}let x=a*v;if(l=l*m+d*x,c=c*m+u*x,h=h*m+_*x,f=f*m+g*x,m===1-a){let E=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=E,c*=E,h*=E,f*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],d=s[o+1],u=s[o+2],_=s[o+3];return t[e]=a*_+h*f+l*u-c*d,t[e+1]=l*_+h*d+c*f-a*u,t[e+2]=c*_+h*u+a*d-l*f,t[e+3]=h*_-a*f-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),d=l(n/2),u=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*u*_,this._y=c*u*f-d*h*_,this._z=c*h*_+d*u*f,this._w=c*h*f-d*u*_;break;case"YXZ":this._x=d*h*f+c*u*_,this._y=c*u*f-d*h*_,this._z=c*h*_-d*u*f,this._w=c*h*f+d*u*_;break;case"ZXY":this._x=d*h*f-c*u*_,this._y=c*u*f+d*h*_,this._z=c*h*_+d*u*f,this._w=c*h*f-d*u*_;break;case"ZYX":this._x=d*h*f-c*u*_,this._y=c*u*f+d*h*_,this._z=c*h*_-d*u*f,this._w=c*h*f+d*u*_;break;case"YZX":this._x=d*h*f+c*u*_,this._y=c*u*f+d*h*_,this._z=c*h*_-d*u*f,this._w=c*h*f-d*u*_;break;case"XZY":this._x=d*h*f-c*u*_,this._y=c*u*f-d*h*_,this._z=c*h*_+d*u*f,this._w=c*h*f+d*u*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(o-i)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(s+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(s-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(un(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dc.copy(this).projectOnVector(t),this.sub(Dc)}reflect(t){return this.sub(Dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dc=new B,Rd=new xr,Xi=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ui):ui.fromBufferAttribute(s,o),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wa.copy(n.boundingBox)),wa.applyMatrix4(t.matrixWorld),this.union(wa)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),Ta.subVectors(this.max,wo),Es.subVectors(t.a,wo),As.subVectors(t.b,wo),Cs.subVectors(t.c,wo),ar.subVectors(As,Es),lr.subVectors(Cs,As),Ur.subVectors(Es,Cs);let e=[0,-ar.z,ar.y,0,-lr.z,lr.y,0,-Ur.z,Ur.y,ar.z,0,-ar.x,lr.z,0,-lr.x,Ur.z,0,-Ur.x,-ar.y,ar.x,0,-lr.y,lr.x,0,-Ur.y,Ur.x,0];return!Uc(e,Es,As,Cs,Ta)||(e=[1,0,0,0,1,0,0,0,1],!Uc(e,Es,As,Cs,Ta))?!1:(Ea.crossVectors(ar,lr),e=[Ea.x,Ea.y,Ea.z],Uc(e,Es,As,Cs,Ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ui=[new B,new B,new B,new B,new B,new B,new B,new B],ui=new B,wa=new Xi,Es=new B,As=new B,Cs=new B,ar=new B,lr=new B,Ur=new B,wo=new B,Ta=new B,Ea=new B,Nr=new B;function Uc(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Nr.fromArray(r,s);let a=i.x*Math.abs(Nr.x)+i.y*Math.abs(Nr.y)+i.z*Math.abs(Nr.z),l=t.dot(Nr),c=e.dot(Nr),h=n.dot(Nr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var J_=new Xi,To=new B,Nc=new B,yr=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):J_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;To.subVectors(t,this.center);let e=To.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(To,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(To.copy(t.center).add(Nc)),this.expandByPoint(To.copy(t.center).sub(Nc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ni=new B,Oc=new B,Aa=new B,cr=new B,Fc=new B,Ca=new B,Bc=new B,Oo=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ni.copy(this.origin).addScaledVector(this.direction,e),Ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Oc.copy(t).add(e).multiplyScalar(.5),Aa.copy(e).sub(t).normalize(),cr.copy(this.origin).sub(Oc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Aa),a=cr.dot(this.direction),l=-cr.dot(Aa),c=cr.lengthSq(),h=Math.abs(1-o*o),f,d,u,_;if(h>0)if(f=o*l-a,d=o*a-l,_=s*h,f>=0)if(d>=-_)if(d<=_){let g=1/h;f*=g,d*=g,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),u=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),u=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),u=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Oc).addScaledVector(Aa,d),u}intersectSphere(t,e){Ni.subVectors(t.center,this.origin);let n=Ni.dot(this.direction),i=Ni.dot(Ni)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ni)!==null}intersectTriangle(t,e,n,i,s){Fc.subVectors(e,t),Ca.subVectors(n,t),Bc.crossVectors(Fc,Ca);let o=this.direction.dot(Bc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cr.subVectors(this.origin,t);let l=a*this.direction.dot(Ca.crossVectors(cr,Ca));if(l<0)return null;let c=a*this.direction.dot(Fc.cross(cr));if(c<0||l+c>o)return null;let h=-a*cr.dot(Bc);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class r{constructor(t,e,n,i,s,o,a,l,c,h,f,d,u,_,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,f,d,u,_,g,m)}set(t,e,n,i,s,o,a,l,c,h,f,d,u,_,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Rs.setFromMatrixColumn(t,0).length(),s=1/Rs.setFromMatrixColumn(t,1).length(),o=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let d=o*h,u=o*f,_=a*h,g=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+_*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=_+u*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,u=l*f,_=c*h,g=c*f;e[0]=d+g*a,e[4]=_*a-u,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=u*a-_,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,u=l*f,_=c*h,g=c*f;e[0]=d-g*a,e[4]=-o*f,e[8]=_+u*a,e[1]=u+_*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,u=o*f,_=a*h,g=a*f;e[0]=l*h,e[4]=_*c-u,e[8]=d*c+g,e[1]=l*f,e[5]=g*c+d,e[9]=u*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,u=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-d*f,e[8]=_*f+u,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*f+_,e[10]=d-g*f}else if(t.order==="XZY"){let d=o*l,u=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+g,e[5]=o*h,e[9]=u*f-_,e[2]=_*f-u,e[6]=a*h,e[10]=g*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(K_,t,Q_)}lookAt(t,e,n){let i=this.elements;return Wn.subVectors(t,e),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),hr.crossVectors(n,Wn),hr.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),hr.crossVectors(n,Wn)),hr.normalize(),Ra.crossVectors(Wn,hr),i[0]=hr.x,i[4]=Ra.x,i[8]=Wn.x,i[1]=hr.y,i[5]=Ra.y,i[9]=Wn.y,i[2]=hr.z,i[6]=Ra.z,i[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],_=n[2],g=n[6],m=n[10],p=n[14],v=n[3],M=n[7],x=n[11],E=n[15],b=i[0],T=i[4],R=i[8],S=i[12],y=i[1],I=i[5],N=i[9],F=i[13],W=i[2],Z=i[6],X=i[10],Y=i[14],z=i[3],tt=i[7],P=i[11],at=i[15];return s[0]=o*b+a*y+l*W+c*z,s[4]=o*T+a*I+l*Z+c*tt,s[8]=o*R+a*N+l*X+c*P,s[12]=o*S+a*F+l*Y+c*at,s[1]=h*b+f*y+d*W+u*z,s[5]=h*T+f*I+d*Z+u*tt,s[9]=h*R+f*N+d*X+u*P,s[13]=h*S+f*F+d*Y+u*at,s[2]=_*b+g*y+m*W+p*z,s[6]=_*T+g*I+m*Z+p*tt,s[10]=_*R+g*N+m*X+p*P,s[14]=_*S+g*F+m*Y+p*at,s[3]=v*b+M*y+x*W+E*z,s[7]=v*T+M*I+x*Z+E*tt,s[11]=v*R+M*N+x*X+E*P,s[15]=v*S+M*F+x*Y+E*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*f-i*c*f-s*a*d+n*c*d+i*a*u-n*l*u)+g*(+e*l*u-e*c*d+s*o*d-i*o*u+i*c*h-s*l*h)+m*(+e*c*f-e*a*u-s*o*f+n*o*u+s*a*h-n*c*h)+p*(-i*a*h-e*l*f+e*a*d+i*o*f-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],_=t[12],g=t[13],m=t[14],p=t[15],v=f*m*c-g*d*c+g*l*u-a*m*u-f*l*p+a*d*p,M=_*d*c-h*m*c-_*l*u+o*m*u+h*l*p-o*d*p,x=h*g*c-_*f*c+_*a*u-o*g*u-h*a*p+o*f*p,E=_*f*l-h*g*l-_*a*d+o*g*d+h*a*m-o*f*m,b=e*v+n*M+i*x+s*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/b;return t[0]=v*T,t[1]=(g*d*s-f*m*s-g*i*u+n*m*u+f*i*p-n*d*p)*T,t[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*T,t[3]=(f*l*s-a*d*s-f*i*c+n*d*c+a*i*u-n*l*u)*T,t[4]=M*T,t[5]=(h*m*s-_*d*s+_*i*u-e*m*u-h*i*p+e*d*p)*T,t[6]=(_*l*s-o*m*s-_*i*c+e*m*c+o*i*p-e*l*p)*T,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*u+e*l*u)*T,t[8]=x*T,t[9]=(_*f*s-h*g*s-_*n*u+e*g*u+h*n*p-e*f*p)*T,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*p+e*a*p)*T,t[11]=(h*a*s-o*f*s-h*n*c+e*f*c+o*n*u-e*a*u)*T,t[12]=E*T,t[13]=(h*g*i-_*f*i+_*n*d-e*g*d-h*n*m+e*f*m)*T,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*m-e*a*m)*T,t[15]=(o*f*i-h*a*i+h*n*l-e*f*l-o*n*d+e*a*d)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,f=a+a,d=s*c,u=s*h,_=s*f,g=o*h,m=o*f,p=a*f,v=l*c,M=l*h,x=l*f,E=n.x,b=n.y,T=n.z;return i[0]=(1-(g+p))*E,i[1]=(u+x)*E,i[2]=(_-M)*E,i[3]=0,i[4]=(u-x)*b,i[5]=(1-(d+p))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(_+M)*T,i[9]=(m-v)*T,i[10]=(1-(d+g))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Rs.set(i[0],i[1],i[2]).length(),o=Rs.set(i[4],i[5],i[6]).length(),a=Rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],fi.copy(this);let c=1/s,h=1/o,f=1/a;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=h,fi.elements[5]*=h,fi.elements[6]*=h,fi.elements[8]*=f,fi.elements[9]*=f,fi.elements[10]*=f,e.setFromRotationMatrix(fi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Vi){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i),u,_;if(a===Vi)u=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===tl)u=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Vi){let l=this.elements,c=1/(e-t),h=1/(n-i),f=1/(o-s),d=(e+t)*c,u=(n+i)*h,_,g;if(a===Vi)_=(o+s)*f,g=-2*f;else if(a===tl)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Rs=new B,fi=new ye,K_=new B(0,0,0),Q_=new B(1,1,1),hr=new B,Ra=new B,Wn=new B,Pd=new ye,Id=new xr,Yi=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-un(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Id.setFromEuler(this),this.setFromQuaternion(Id,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yi.DEFAULT_ORDER="XYZ";var Fo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},j_=0,Ld=new B,Ps=new xr,Oi=new ye,Pa=new B,Eo=new B,t0=new B,e0=new xr,Dd=new B(1,0,0),Ud=new B(0,1,0),Nd=new B(0,0,1),Od={type:"added"},n0={type:"removed"},Is={type:"childadded",child:null},kc={type:"childremoved",child:null},ni=class r extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new B,e=new Yi,n=new xr,i=new B(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ye},normalMatrix:{value:new Zt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(Dd,t)}rotateY(t){return this.rotateOnAxis(Ud,t)}rotateZ(t){return this.rotateOnAxis(Nd,t)}translateOnAxis(t,e){return Ld.copy(t).applyQuaternion(this.quaternion),this.position.add(Ld.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dd,t)}translateY(t){return this.translateOnAxis(Ud,t)}translateZ(t){return this.translateOnAxis(Nd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pa.copy(t):Pa.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Eo,Pa,this.up):Oi.lookAt(Pa,Eo,this.up),this.quaternion.setFromRotationMatrix(Oi),i&&(Oi.extractRotation(i.matrixWorld),Ps.setFromRotationMatrix(Oi),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Od),Is.child=t,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(n0),kc.child=t,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Od),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,t,t0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),u=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ni.DEFAULT_UP=new B(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var di=new B,Fi=new B,zc=new B,Bi=new B,Ls=new B,Ds=new B,Fd=new B,Vc=new B,Hc=new B,Gc=new B,Wc=new Ve,Xc=new Ve,Yc=new Ve,Hr=class r{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),di.subVectors(t,e),i.cross(di);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){di.subVectors(i,e),Fi.subVectors(n,e),zc.subVectors(t,e);let o=di.dot(di),a=di.dot(Fi),l=di.dot(zc),c=Fi.dot(Fi),h=Fi.dot(zc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let d=1/f,u=(c*l-a*h)*d,_=(o*h-a*l)*d;return s.set(1-u-_,_,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Wc.setScalar(0),Xc.setScalar(0),Yc.setScalar(0),Wc.fromBufferAttribute(t,e),Xc.fromBufferAttribute(t,n),Yc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Wc,s.x),o.addScaledVector(Xc,s.y),o.addScaledVector(Yc,s.z),o}static isFrontFacing(t,e,n,i){return di.subVectors(n,e),Fi.subVectors(t,e),di.cross(Fi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),di.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;Ls.subVectors(i,n),Ds.subVectors(s,n),Vc.subVectors(t,n);let l=Ls.dot(Vc),c=Ds.dot(Vc);if(l<=0&&c<=0)return e.copy(n);Hc.subVectors(t,i);let h=Ls.dot(Hc),f=Ds.dot(Hc);if(h>=0&&f<=h)return e.copy(i);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ls,o);Gc.subVectors(t,s);let u=Ls.dot(Gc),_=Ds.dot(Gc);if(_>=0&&u<=_)return e.copy(s);let g=u*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Ds,a);let m=h*_-u*f;if(m<=0&&f-h>=0&&u-_>=0)return Fd.subVectors(s,i),a=(f-h)/(f-h+(u-_)),e.copy(i).addScaledVector(Fd,a);let p=1/(m+g+d);return o=g*p,a=d*p,e.copy(n).addScaledVector(Ls,o).addScaledVector(Ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function qc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var ae=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=G_(t,1),e=un(e,0,1),n=un(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=qc(o,s,t+1/3),this.g=qc(o,s,t),this.b=qc(o,s,t-1/3)}return oe.toWorkingColorSpace(this,i),this}setStyle(t,e=Mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){let n=Op[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return oe.fromWorkingColorSpace(hn.copy(this),t),Math.round(un(hn.r*255,0,255))*65536+Math.round(un(hn.g*255,0,255))*256+Math.round(un(hn.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(hn.copy(this),e);let n=hn.r,i=hn.g,s=hn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Mn){oe.fromWorkingColorSpace(hn.copy(this),t);let e=hn.r,n=hn.g,i=hn.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ur),this.setHSL(ur.h+t,ur.s+e,ur.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ur),t.getHSL(Ia);let n=Pc(ur.h,Ia.h,e),i=Pc(ur.s,Ia.s,e),s=Pc(ur.l,Ia.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new ae;ae.NAMES=Op;var i0=0,qr=class extends vr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Vo(),this.name="",this.blending=zs,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=oh,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==_r&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sh&&(n.blendSrc=this.blendSrc),this.blendDst!==oh&&(n.blendDst=this.blendDst),this.blendEquation!==Vr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},rl=class extends qr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var We=new B,La=new he,qn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Md,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)La.fromBufferAttribute(this,e),La.applyMatrix3(t),this.setXY(e,La.x,La.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Dn(e,this.array),n=Dn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Dn(e,this.array),n=Dn(n,this.array),i=Dn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Dn(e,this.array),n=Dn(n,this.array),i=Dn(i,this.array),s=Dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Md&&(t.usage=this.usage),t}};var sl=class extends qn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ol=class extends qn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fn=class extends qn{constructor(t,e,n){super(new Float32Array(t),e,n)}},r0=0,ti=new ye,$c=new ni,Us=new B,Xn=new Xi,Ao=new Xi,je=new B,wi=class r extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Np(t)?ol:sl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,n){return ti.makeTranslation(t,e,n),this.applyMatrix4(ti),this}scale(t,e,n){return ti.makeScale(t,e,n),this.applyMatrix4(ti),this}lookAt(t){return $c.lookAt(t),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fn(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Xn.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Ao.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(Xn.min,Ao.min),Xn.expandByPoint(je),je.addVectors(Xn.max,Ao.max),Xn.expandByPoint(je)):(Xn.expandByPoint(Ao.min),Xn.expandByPoint(Ao.max))}Xn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)je.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(je));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(Us.fromBufferAttribute(t,c),je.add(Us)),i=Math.max(i,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new B,l[R]=new B;let c=new B,h=new B,f=new B,d=new he,u=new he,_=new he,g=new B,m=new B;function p(R,S,y){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,y),d.fromBufferAttribute(s,R),u.fromBufferAttribute(s,S),_.fromBufferAttribute(s,y),h.sub(c),f.sub(c),u.sub(d),_.sub(d);let I=1/(u.x*_.y-_.x*u.y);isFinite(I)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(f,-u.y).multiplyScalar(I),m.copy(f).multiplyScalar(u.x).addScaledVector(h,-_.x).multiplyScalar(I),a[R].add(g),a[S].add(g),a[y].add(g),l[R].add(m),l[S].add(m),l[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let R=0,S=v.length;R<S;++R){let y=v[R],I=y.start,N=y.count;for(let F=I,W=I+N;F<W;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let M=new B,x=new B,E=new B,b=new B;function T(R){E.fromBufferAttribute(i,R),b.copy(E);let S=a[R];M.copy(S),M.sub(E.multiplyScalar(E.dot(S))).normalize(),x.crossVectors(b,S);let I=x.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,I)}for(let R=0,S=v.length;R<S;++R){let y=v[R],I=y.start,N=y.count;for(let F=I,W=I+N;F<W;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new B,s=new B,o=new B,a=new B,l=new B,c=new B,h=new B,f=new B;if(t)for(let d=0,u=t.count;d<u;d+=3){let _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),u=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?u=l[g]*a.data.stride+a.offset:u=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[u++]}return new qn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],f=s[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bd=new ye,Or=new Oo,Da=new yr,kd=new B,Ua=new B,Na=new B,Oa=new B,Zc=new B,Fa=new B,zd=new B,Ba=new B,bn=class extends ni{constructor(t=new wi,e=new rl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Fa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(Zc.fromBufferAttribute(f,t),o?Fa.addScaledVector(Zc,h):Fa.addScaledVector(Zc.sub(e),h))}e.add(Fa)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),Or.copy(t.ray).recast(t.near),!(Da.containsPoint(Or.origin)===!1&&(Or.intersectSphere(Da,kd)===null||Or.origin.distanceToSquared(kd)>(t.far-t.near)**2))&&(Bd.copy(s).invert(),Or.copy(t.ray).applyMatrix4(Bd),!(n.boundingBox!==null&&Or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Or)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],v=Math.max(m.start,u.start),M=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let x=v,E=M;x<E;x+=3){let b=a.getX(x),T=a.getX(x+1),R=a.getX(x+2);i=ka(this,p,t,n,c,h,f,b,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let m=_,p=g;m<p;m+=3){let v=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);i=ka(this,o,t,n,c,h,f,v,M,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],v=Math.max(m.start,u.start),M=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let x=v,E=M;x<E;x+=3){let b=x,T=x+1,R=x+2;i=ka(this,p,t,n,c,h,f,b,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let m=_,p=g;m<p;m+=3){let v=m,M=m+1,x=m+2;i=ka(this,o,t,n,c,h,f,v,M,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function s0(r,t,e,n,i,s,o,a){let l;if(t.side===Un?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===_r,a),l===null)return null;Ba.copy(a),Ba.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Ba);return c<e.near||c>e.far?null:{distance:c,point:Ba.clone(),object:r}}function ka(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Ua),r.getVertexPosition(l,Na),r.getVertexPosition(c,Oa);let h=s0(r,t,e,n,Ua,Na,Oa,zd);if(h){let f=new B;Hr.getBarycoord(zd,Ua,Na,Oa,f),i&&(h.uv=Hr.getInterpolatedAttribute(i,a,l,c,f,new he)),s&&(h.uv1=Hr.getInterpolatedAttribute(s,a,l,c,f,new he)),o&&(h.normal=Hr.getInterpolatedAttribute(o,a,l,c,f,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new B,materialIndex:0};Hr.getNormal(Ua,Na,Oa,d.normal),h.face=d,h.barycoord=f}return h}var Bo=class r extends wi{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,u=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(h,3)),this.setAttribute("uv",new fn(f,2));function _(g,m,p,v,M,x,E,b,T,R,S){let y=x/T,I=E/R,N=x/2,F=E/2,W=b/2,Z=T+1,X=R+1,Y=0,z=0,tt=new B;for(let P=0;P<X;P++){let at=P*I-F;for(let Pt=0;Pt<Z;Pt++){let Kt=Pt*y-N;tt[g]=Kt*v,tt[m]=at*M,tt[p]=W,c.push(tt.x,tt.y,tt.z),tt[g]=0,tt[m]=0,tt[p]=b>0?1:-1,h.push(tt.x,tt.y,tt.z),f.push(Pt/T),f.push(1-P/R),Y+=1}}for(let P=0;P<R;P++)for(let at=0;at<T;at++){let Pt=d+at+Z*P,Kt=d+at+Z*(P+1),$=d+(at+1)+Z*(P+1),et=d+(at+1)+Z*P;l.push(Pt,Kt,et),l.push(Kt,$,et),z+=6}a.addGroup(u,z,S),u+=z,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Zs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function yn(r){let t={};for(let e=0;e<r.length;e++){let n=Zs(r[e]);for(let i in n)t[i]=n[i]}return t}function o0(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Fp(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var a0={clone:Zs,merge:yn},l0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends qr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l0,this.fragmentShader=c0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=o0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},al=class extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fr=new B,Vd=new he,Hd=new he,Sn=class extends al{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fr.x,fr.y).multiplyScalar(-t/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-t/fr.z)}getViewSize(t,e){return this.getViewBounds(t,Vd,Hd),e.subVectors(Hd,Vd)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Rc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ns=-90,Os=1,Zh=class extends ni{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Sn(Ns,Os,t,e);i.layers=this.layers,this.add(i);let s=new Sn(Ns,Os,t,e);s.layers=this.layers,this.add(s);let o=new Sn(Ns,Os,t,e);o.layers=this.layers,this.add(o);let a=new Sn(Ns,Os,t,e);a.layers=this.layers,this.add(a);let l=new Sn(Ns,Os,t,e);l.layers=this.layers,this.add(l);let c=new Sn(Ns,Os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===tl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ll=class extends Nn{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Xs,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Jh=class extends Wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ll(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Si}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bo(5,5,5),s=new On({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:mr});s.uniforms.tEquirect.value=e;let o=new bn(i,s),a=e.minFilter;return e.minFilter===Xr&&(e.minFilter=Si),new Zh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},Jc=new B,h0=new B,u0=new Zt,zi=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Jc.subVectors(n,e).cross(h0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Jc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||u0.getNormalMatrix(t),i=this.coplanarPoint(Jc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fr=new yr,za=new B,cl=class{constructor(t=new zi,e=new zi,n=new zi,i=new zi,s=new zi,o=new zi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vi){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],d=i[7],u=i[8],_=i[9],g=i[10],m=i[11],p=i[12],v=i[13],M=i[14],x=i[15];if(n[0].setComponents(l-s,d-c,m-u,x-p).normalize(),n[1].setComponents(l+s,d+c,m+u,x+p).normalize(),n[2].setComponents(l+o,d+h,m+_,x+v).normalize(),n[3].setComponents(l-o,d-h,m-_,x-v).normalize(),n[4].setComponents(l-a,d-f,m-g,x-M).normalize(),e===Vi)n[5].setComponents(l+a,d+f,m+g,x+M).normalize();else if(e===tl)n[5].setComponents(a,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(t){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(za.x=i.normal.x>0?t.max.x:t.min.x,za.y=i.normal.y>0?t.max.y:t.min.y,za.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(za)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bp(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function f0(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=r.HALF_FLOAT:u=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=r.SHORT;else if(c instanceof Uint32Array)u=r.UNSIGNED_INT;else if(c instanceof Int32Array)u=r.INT;else if(c instanceof Int8Array)u=r.BYTE;else if(c instanceof Uint8Array)u=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((u,_)=>u.start-_.start);let d=0;for(let u=1;u<f.length;u++){let _=f[d],g=f[u];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,f[d]=g)}f.length=d+1;for(let u=0,_=f.length;u<_;u++){let g=f[u];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var $r=class r extends wi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,d=e/l,u=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let v=p*d-o;for(let M=0;M<c;M++){let x=M*f-s;_.push(x,-v,0),g.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let M=v+c*p,x=v+c*(p+1),E=v+1+c*(p+1),b=v+1+c*p;u.push(M,x,b),u.push(x,E,b)}this.setIndex(u),this.setAttribute("position",new fn(_,3)),this.setAttribute("normal",new fn(g,3)),this.setAttribute("uv",new fn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},d0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p0=`#ifdef USE_ALPHAHASH
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
#endif`,m0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x0=`#ifdef USE_AOMAP
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
#endif`,y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M0=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E0=`#ifdef USE_IRIDESCENCE
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
#endif`,A0=`#ifdef USE_BUMPMAP
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,O0=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,F0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,B0=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G0="gl_FragColor = linearToOutputTexel( gl_FragColor );",W0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,J0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tv=`#ifdef USE_GRADIENTMAP
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
}`,ev=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rv=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,sv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ov=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,uv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fv=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sv=`#if defined( USE_POINTS_UV )
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
#endif`,bv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ev=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Av=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cv=`#ifdef USE_MORPHTARGETS
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
#endif`,Rv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Iv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nv=`#ifdef USE_NORMALMAP
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
#endif`,Ov=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Jv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Kv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Qv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jv=`#ifdef USE_SKINNING
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
#endif`,tx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ex=`#ifdef USE_SKINNING
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
#endif`,nx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ox=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ax=`#ifdef USE_TRANSMISSION
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dx=`uniform sampler2D t2D;
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
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`#include <common>
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
}`,xx=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yx=`#define DISTANCE
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
}`,Mx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`uniform float scale;
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
}`,Tx=`uniform vec3 diffuse;
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
}`,Ex=`#include <common>
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Cx=`#define LAMBERT
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
}`,Rx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Px=`#define MATCAP
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
}`,Ix=`#define MATCAP
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
}`,Lx=`#define NORMAL
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
}`,Dx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ux=`#define PHONG
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
}`,Nx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ox=`#define STANDARD
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
}`,Fx=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Bx=`#define TOON
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
}`,kx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,zx=`uniform float size;
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
}`,Vx=`uniform vec3 diffuse;
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
}`,Hx=`#include <common>
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
}`,Gx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Wx=`uniform float rotation;
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
}`,Xx=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:d0,alphahash_pars_fragment:p0,alphamap_fragment:m0,alphamap_pars_fragment:g0,alphatest_fragment:_0,alphatest_pars_fragment:v0,aomap_fragment:x0,aomap_pars_fragment:y0,batching_pars_vertex:M0,batching_vertex:S0,begin_vertex:b0,beginnormal_vertex:w0,bsdfs:T0,iridescence_fragment:E0,bumpmap_pars_fragment:A0,clipping_planes_fragment:C0,clipping_planes_pars_fragment:R0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:I0,color_fragment:L0,color_pars_fragment:D0,color_pars_vertex:U0,color_vertex:N0,common:O0,cube_uv_reflection_fragment:F0,defaultnormal_vertex:B0,displacementmap_pars_vertex:k0,displacementmap_vertex:z0,emissivemap_fragment:V0,emissivemap_pars_fragment:H0,colorspace_fragment:G0,colorspace_pars_fragment:W0,envmap_fragment:X0,envmap_common_pars_fragment:Y0,envmap_pars_fragment:q0,envmap_pars_vertex:$0,envmap_physical_pars_fragment:sv,envmap_vertex:Z0,fog_vertex:J0,fog_pars_vertex:K0,fog_fragment:Q0,fog_pars_fragment:j0,gradientmap_pars_fragment:tv,lightmap_pars_fragment:ev,lights_lambert_fragment:nv,lights_lambert_pars_fragment:iv,lights_pars_begin:rv,lights_toon_fragment:ov,lights_toon_pars_fragment:av,lights_phong_fragment:lv,lights_phong_pars_fragment:cv,lights_physical_fragment:hv,lights_physical_pars_fragment:uv,lights_fragment_begin:fv,lights_fragment_maps:dv,lights_fragment_end:pv,logdepthbuf_fragment:mv,logdepthbuf_pars_fragment:gv,logdepthbuf_pars_vertex:_v,logdepthbuf_vertex:vv,map_fragment:xv,map_pars_fragment:yv,map_particle_fragment:Mv,map_particle_pars_fragment:Sv,metalnessmap_fragment:bv,metalnessmap_pars_fragment:wv,morphinstance_vertex:Tv,morphcolor_vertex:Ev,morphnormal_vertex:Av,morphtarget_pars_vertex:Cv,morphtarget_vertex:Rv,normal_fragment_begin:Pv,normal_fragment_maps:Iv,normal_pars_fragment:Lv,normal_pars_vertex:Dv,normal_vertex:Uv,normalmap_pars_fragment:Nv,clearcoat_normal_fragment_begin:Ov,clearcoat_normal_fragment_maps:Fv,clearcoat_pars_fragment:Bv,iridescence_pars_fragment:kv,opaque_fragment:zv,packing:Vv,premultiplied_alpha_fragment:Hv,project_vertex:Gv,dithering_fragment:Wv,dithering_pars_fragment:Xv,roughnessmap_fragment:Yv,roughnessmap_pars_fragment:qv,shadowmap_pars_fragment:$v,shadowmap_pars_vertex:Zv,shadowmap_vertex:Jv,shadowmask_pars_fragment:Kv,skinbase_vertex:Qv,skinning_pars_vertex:jv,skinning_vertex:tx,skinnormal_vertex:ex,specularmap_fragment:nx,specularmap_pars_fragment:ix,tonemapping_fragment:rx,tonemapping_pars_fragment:sx,transmission_fragment:ox,transmission_pars_fragment:ax,uv_pars_fragment:lx,uv_pars_vertex:cx,uv_vertex:hx,worldpos_vertex:ux,background_vert:fx,background_frag:dx,backgroundCube_vert:px,backgroundCube_frag:mx,cube_vert:gx,cube_frag:_x,depth_vert:vx,depth_frag:xx,distanceRGBA_vert:yx,distanceRGBA_frag:Mx,equirect_vert:Sx,equirect_frag:bx,linedashed_vert:wx,linedashed_frag:Tx,meshbasic_vert:Ex,meshbasic_frag:Ax,meshlambert_vert:Cx,meshlambert_frag:Rx,meshmatcap_vert:Px,meshmatcap_frag:Ix,meshnormal_vert:Lx,meshnormal_frag:Dx,meshphong_vert:Ux,meshphong_frag:Nx,meshphysical_vert:Ox,meshphysical_frag:Fx,meshtoon_vert:Bx,meshtoon_frag:kx,points_vert:zx,points_frag:Vx,shadow_vert:Hx,shadow_frag:Gx,sprite_vert:Wx,sprite_frag:Xx},_t={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Mi={basic:{uniforms:yn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:yn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ae(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:yn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:yn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:yn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new ae(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:yn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:yn([_t.points,_t.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:yn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:yn([_t.common,_t.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:yn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:yn([_t.sprite,_t.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:yn([_t.common,_t.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:yn([_t.lights,_t.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Mi.physical={uniforms:yn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var Va={r:0,b:0,g:0},Br=new Yi,Yx=new ye;function qx(r,t,e,n,i,s,o){let a=new ae(0),l=s===!0?0:1,c,h,f=null,d=0,u=null;function _(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function g(v){let M=!1,x=_(v);x===null?p(a,l):x&&x.isColor&&(p(x,1),M=!0);let E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,M){let x=_(M);x&&(x.isCubeTexture||x.mapping===Sl)?(h===void 0&&(h=new bn(new Bo(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Zs(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Br.copy(M.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(Br)),h.material.toneMapped=oe.getTransfer(x.colorSpace)!==me,(f!==x||d!==x.version||u!==r.toneMapping)&&(h.material.needsUpdate=!0,f=x,d=x.version,u=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new bn(new $r(2,2),new On({name:"BackgroundMaterial",uniforms:Zs(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=oe.getTransfer(x.colorSpace)!==me,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,u=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,M){v.getRGB(Va,Fp(r)),n.buffers.color.setClear(Va.r,Va.g,Va.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:g,addToRenderList:m}}function $x(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(y,I,N,F,W){let Z=!1,X=f(F,N,I);s!==X&&(s=X,c(s.object)),Z=u(y,F,N,W),Z&&_(y,F,N,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(y,I,N,F),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function f(y,I,N){let F=N.wireframe===!0,W=n[y.id];W===void 0&&(W={},n[y.id]=W);let Z=W[I.id];Z===void 0&&(Z={},W[I.id]=Z);let X=Z[F];return X===void 0&&(X=d(l()),Z[F]=X),X}function d(y){let I=[],N=[],F=[];for(let W=0;W<e;W++)I[W]=0,N[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:F,object:y,attributes:{},index:null}}function u(y,I,N,F){let W=s.attributes,Z=I.attributes,X=0,Y=N.getAttributes();for(let z in Y)if(Y[z].location>=0){let P=W[z],at=Z[z];if(at===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),P===void 0||P.attribute!==at||at&&P.data!==at.data)return!0;X++}return s.attributesNum!==X||s.index!==F}function _(y,I,N,F){let W={},Z=I.attributes,X=0,Y=N.getAttributes();for(let z in Y)if(Y[z].location>=0){let P=Z[z];P===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(P=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(P=y.instanceColor));let at={};at.attribute=P,P&&P.data&&(at.data=P.data),W[z]=at,X++}s.attributes=W,s.attributesNum=X,s.index=F}function g(){let y=s.newAttributes;for(let I=0,N=y.length;I<N;I++)y[I]=0}function m(y){p(y,0)}function p(y,I){let N=s.newAttributes,F=s.enabledAttributes,W=s.attributeDivisors;N[y]=1,F[y]===0&&(r.enableVertexAttribArray(y),F[y]=1),W[y]!==I&&(r.vertexAttribDivisor(y,I),W[y]=I)}function v(){let y=s.newAttributes,I=s.enabledAttributes;for(let N=0,F=I.length;N<F;N++)I[N]!==y[N]&&(r.disableVertexAttribArray(N),I[N]=0)}function M(y,I,N,F,W,Z,X){X===!0?r.vertexAttribIPointer(y,I,N,W,Z):r.vertexAttribPointer(y,I,N,F,W,Z)}function x(y,I,N,F){g();let W=F.attributes,Z=N.getAttributes(),X=I.defaultAttributeValues;for(let Y in Z){let z=Z[Y];if(z.location>=0){let tt=W[Y];if(tt===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor)),tt!==void 0){let P=tt.normalized,at=tt.itemSize,Pt=t.get(tt);if(Pt===void 0)continue;let Kt=Pt.buffer,$=Pt.type,et=Pt.bytesPerElement,vt=$===r.INT||$===r.UNSIGNED_INT||tt.gpuType===Tu;if(tt.isInterleavedBufferAttribute){let nt=tt.data,wt=nt.stride,At=tt.offset;if(nt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<z.locationSize;Vt++)p(z.location+Vt,nt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Vt=0;Vt<z.locationSize;Vt++)m(z.location+Vt);r.bindBuffer(r.ARRAY_BUFFER,Kt);for(let Vt=0;Vt<z.locationSize;Vt++)M(z.location+Vt,at/z.locationSize,$,P,wt*et,(At+at/z.locationSize*Vt)*et,vt)}else{if(tt.isInstancedBufferAttribute){for(let nt=0;nt<z.locationSize;nt++)p(z.location+nt,tt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let nt=0;nt<z.locationSize;nt++)m(z.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Kt);for(let nt=0;nt<z.locationSize;nt++)M(z.location+nt,at/z.locationSize,$,P,at*et,at/z.locationSize*nt*et,vt)}}else if(X!==void 0){let P=X[Y];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(z.location,P);break;case 3:r.vertexAttrib3fv(z.location,P);break;case 4:r.vertexAttrib4fv(z.location,P);break;default:r.vertexAttrib1fv(z.location,P)}}}}v()}function E(){R();for(let y in n){let I=n[y];for(let N in I){let F=I[N];for(let W in F)h(F[W].object),delete F[W];delete I[N]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;let I=n[y.id];for(let N in I){let F=I[N];for(let W in F)h(F[W].object),delete F[W];delete I[N]}delete n[y.id]}function T(y){for(let I in n){let N=n[I];if(N[y.id]===void 0)continue;let F=N[y.id];for(let W in F)h(F[W].object),delete F[W];delete N[y.id]}}function R(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function Zx(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(r.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let u=0;for(let _=0;_<f;_++)u+=h[_];e.update(u,n,1)}function l(c,h,f,d){if(f===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Jx(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==pi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let R=T===zo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Gi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==bi&&!R)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:u,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:E,maxSamples:b}}function Kx(r){let t=this,e=null,n=0,i=!1,s=!1,o=new zi,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){let _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||_===null||_.length===0||s&&!m)s?h(null):c();else{let v=s?0:n,M=v*4,x=p.clippingState||null;l.value=x,x=h(_,d,M,u);for(let E=0;E!==M;++E)x[E]=e[E];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,_){let g=f!==null?f.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=u+g*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=u;M!==g;++M,x+=4)o.copy(f[M]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Qx(r){let t=new WeakMap;function e(o,a){return a===ph?o.mapping=Xs:a===mh&&(o.mapping=Ys),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ph||a===mh)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Jh(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Kh=class extends al{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ks=4,Gd=[.125,.215,.35,.446,.526,.582],Gr=20,Kc=new Kh,Wd=new ae,Qc=null,jc=0,th=0,eh=!1,zr=(1+Math.sqrt(5))/2,Fs=1/zr,Xd=[new B(-zr,Fs,0),new B(zr,Fs,0),new B(-Fs,0,zr),new B(Fs,0,zr),new B(0,zr,-Fs),new B(0,zr,Fs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],hl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Qc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qc,jc,th),this._renderer.xr.enabled=eh,t.scissorTest=!1,Ha(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===Ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:zo,format:pi,colorSpace:Qs,depthBuffer:!1},i=Yd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yd(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jx(s)),this._blurMaterial=ty(s,t,e)}return i}_compileMaterial(t){let e=new bn(this._lodPlanes[0],t);this._renderer.compile(e,Kc)}_sceneToCubeUV(t,e,n,i){let a=new Sn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Wd),h.toneMapping=gr,h.autoClear=!1;let u=new rl({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),_=new bn(new Bo,u),g=!1,m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,g=!0):(u.color.copy(Wd),g=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let M=this._cubeSize;Ha(i,v*M,p>2?M:0,M,M),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Xs||t.mapping===Ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$d()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qd());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new bn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Ha(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Kc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Xd[(i-s-1)%Xd.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new bn(this._lodPlanes[i],c),d=c.uniforms,u=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*Gr-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):Gr;m>Gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gr}`);let p=[],v=0;for(let T=0;T<Gr;++T){let R=T/g,S=Math.exp(-R*R/2);p.push(S),T===0?v+=S:T<m&&(v+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;let x=this._sizeLods[i],E=3*x*(i>M-ks?i-M+ks:0),b=4*(this._cubeSize-x);Ha(e,E,b,3*x,2*x),l.setRenderTarget(e),l.render(f,Kc)}};function jx(r){let t=[],e=[],n=[],i=r,s=r-ks+1+Gd.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-ks?l=Gd[o-r+ks-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*u),M=new Float32Array(m*_*u),x=new Float32Array(p*_*u);for(let b=0;b<u;b++){let T=b%3*2/3-1,R=b>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];v.set(S,g*_*b),M.set(d,m*_*b);let y=[b,b,b,b,b,b];x.set(y,p*_*b)}let E=new wi;E.setAttribute("position",new qn(v,g)),E.setAttribute("uv",new qn(M,m)),E.setAttribute("faceIndex",new qn(x,p)),t.push(E),i>ks&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yd(r,t,e){let n=new Wi(r,t,e);return n.texture.mapping=Sl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ha(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function ty(r,t,e){let n=new Float32Array(Gr),i=new B(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function qd(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function $d(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Lu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ey(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ph||l===mh,h=l===Xs||l===Ys;if(c||h){let f=t.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new hl(r)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let u=a.image;return c&&u&&u.height>0||h&&u&&i(u)?(e===null&&(e=new hl(r)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ny(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Io("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function iy(r,t,e,n){let i={},s=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);for(let _ in d.morphAttributes){let g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}d.removeEventListener("dispose",o),delete i[d.id];let u=s.get(d);u&&(t.remove(u),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let _ in d)t.update(d[_],r.ARRAY_BUFFER);let u=f.morphAttributes;for(let _ in u){let g=u[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],r.ARRAY_BUFFER)}}function c(f){let d=[],u=f.index,_=f.attributes.position,g=0;if(u!==null){let v=u.array;g=u.version;for(let M=0,x=v.length;M<x;M+=3){let E=v[M+0],b=v[M+1],T=v[M+2];d.push(E,b,b,T,T,E)}}else if(_!==void 0){let v=_.array;g=_.version;for(let M=0,x=v.length/3-1;M<x;M+=3){let E=M+0,b=M+1,T=M+2;d.push(E,b,b,T,T,E)}}else return;let m=new(Np(d)?ol:sl)(d,1);m.version=g;let p=s.get(f);p&&t.remove(p),s.set(f,m)}function h(f){let d=s.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function ry(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*o),e.update(u,n,1)}function c(d,u,_){_!==0&&(r.drawElementsInstanced(n,u,s,d*o,_),e.update(u,n,_))}function h(d,u,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=u[p];e.update(m,n,1)}function f(d,u,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,u[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,s,d,0,g,0,_);let p=0;for(let v=0;v<_;v++)p+=u[v]*g[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function sy(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function oy(r,t,e){let n=new WeakMap,i=new Ve;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;u===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let x=a.attributes.position.count*M,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let b=new Float32Array(x*E*4*f),T=new il(b,x,E,f);T.type=bi,T.needsUpdate=!0;let R=M*4;for(let y=0;y<f;y++){let I=m[y],N=p[y],F=v[y],W=x*E*4*y;for(let Z=0;Z<I.count;Z++){let X=Z*R;u===!0&&(i.fromBufferAttribute(I,Z),b[W+X+0]=i.x,b[W+X+1]=i.y,b[W+X+2]=i.z,b[W+X+3]=0),_===!0&&(i.fromBufferAttribute(N,Z),b[W+X+4]=i.x,b[W+X+5]=i.y,b[W+X+6]=i.z,b[W+X+7]=0),g===!0&&(i.fromBufferAttribute(F,Z),b[W+X+8]=i.x,b[W+X+9]=i.y,b[W+X+10]=i.z,b[W+X+11]=F.itemSize===4?i.w:1)}}d={count:f,texture:T,size:new he(x,E)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let u=0;for(let g=0;g<c.length;g++)u+=c[g];let _=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function ay(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var ul=class extends Nn{constructor(t,e,n,i,s,o,a,l,c,h=Vs){if(h!==Vs&&h!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vs&&(n=Yr),n===void 0&&h===$s&&(n=qs),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Yn,this.minFilter=l!==void 0?l:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},kp=new Nn,Zd=new ul(1,1),zp=new il,Vp=new $h,Hp=new ll,Jd=[],Kd=[],Qd=new Float32Array(16),jd=new Float32Array(9),tp=new Float32Array(4);function js(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Jd[i];if(s===void 0&&(s=new Float32Array(i),Jd[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ze(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Je(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function wl(r,t){let e=Kd[t];e===void 0&&(e=new Int32Array(t),Kd[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function ly(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function cy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2fv(this.addr,t),Je(e,t)}}function hy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;r.uniform3fv(this.addr,t),Je(e,t)}}function uy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4fv(this.addr,t),Je(e,t)}}function fy(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;tp.set(n),r.uniformMatrix2fv(this.addr,!1,tp),Je(e,n)}}function dy(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;jd.set(n),r.uniformMatrix3fv(this.addr,!1,jd),Je(e,n)}}function py(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;Qd.set(n),r.uniformMatrix4fv(this.addr,!1,Qd),Je(e,n)}}function my(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function gy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2iv(this.addr,t),Je(e,t)}}function _y(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;r.uniform3iv(this.addr,t),Je(e,t)}}function vy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4iv(this.addr,t),Je(e,t)}}function xy(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function yy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2uiv(this.addr,t),Je(e,t)}}function My(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;r.uniform3uiv(this.addr,t),Je(e,t)}}function Sy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4uiv(this.addr,t),Je(e,t)}}function by(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Zd.compareFunction=Up,s=Zd):s=kp,e.setTexture2D(t||s,i)}function wy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Vp,i)}function Ty(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Hp,i)}function Ey(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||zp,i)}function Ay(r){switch(r){case 5126:return ly;case 35664:return cy;case 35665:return hy;case 35666:return uy;case 35674:return fy;case 35675:return dy;case 35676:return py;case 5124:case 35670:return my;case 35667:case 35671:return gy;case 35668:case 35672:return _y;case 35669:case 35673:return vy;case 5125:return xy;case 36294:return yy;case 36295:return My;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return Ey}}function Cy(r,t){r.uniform1fv(this.addr,t)}function Ry(r,t){let e=js(t,this.size,2);r.uniform2fv(this.addr,e)}function Py(r,t){let e=js(t,this.size,3);r.uniform3fv(this.addr,e)}function Iy(r,t){let e=js(t,this.size,4);r.uniform4fv(this.addr,e)}function Ly(r,t){let e=js(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Dy(r,t){let e=js(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Uy(r,t){let e=js(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Ny(r,t){r.uniform1iv(this.addr,t)}function Oy(r,t){r.uniform2iv(this.addr,t)}function Fy(r,t){r.uniform3iv(this.addr,t)}function By(r,t){r.uniform4iv(this.addr,t)}function ky(r,t){r.uniform1uiv(this.addr,t)}function zy(r,t){r.uniform2uiv(this.addr,t)}function Vy(r,t){r.uniform3uiv(this.addr,t)}function Hy(r,t){r.uniform4uiv(this.addr,t)}function Gy(r,t,e){let n=this.cache,i=t.length,s=wl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||kp,s[o])}function Wy(r,t,e){let n=this.cache,i=t.length,s=wl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Vp,s[o])}function Xy(r,t,e){let n=this.cache,i=t.length,s=wl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Hp,s[o])}function Yy(r,t,e){let n=this.cache,i=t.length,s=wl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||zp,s[o])}function qy(r){switch(r){case 5126:return Cy;case 35664:return Ry;case 35665:return Py;case 35666:return Iy;case 35674:return Ly;case 35675:return Dy;case 35676:return Uy;case 5124:case 35670:return Ny;case 35667:case 35671:return Oy;case 35668:case 35672:return Fy;case 35669:case 35673:return By;case 5125:return ky;case 36294:return zy;case 36295:return Vy;case 36296:return Hy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return Yy}}var Qh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ay(e.type)}},jh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qy(e.type)}},tu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},nh=/(\w+)(\])?(\[|\.)?/g;function ep(r,t){r.seq.push(t),r.map[t.id]=t}function $y(r,t,e){let n=r.name,i=n.length;for(nh.lastIndex=0;;){let s=nh.exec(n),o=nh.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ep(e,c===void 0?new Qh(a,r,t):new jh(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new tu(a),ep(e,f)),e=f}}}var Gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);$y(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function np(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Zy=37297,Jy=0;function Ky(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ip=new Zt;function Qy(r){oe._getMatrix(ip,oe.workingColorSpace,r);let t=`mat3( ${ip.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(r)){case bl:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function rp(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Ky(r.getShaderSource(t),o)}else return i}function jy(r,t){let e=Qy(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function tM(r,t){let e;switch(t){case w_:e="Linear";break;case T_:e="Reinhard";break;case E_:e="Cineon";break;case A_:e="ACESFilmic";break;case R_:e="AgX";break;case P_:e="Neutral";break;case C_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ga=new B;function eM(){oe.getLuminanceCoefficients(Ga);let r=Ga.x.toFixed(4),t=Ga.y.toFixed(4),e=Ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function iM(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rM(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Lo(r){return r!==""}function sp(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function op(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sM=/^[ \t]*#include +<([\w\d./]+)>/gm;function eu(r){return r.replace(sM,aM)}var oM=new Map;function aM(r,t){let e=Jt[t];if(e===void 0){let n=oM.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return eu(e)}var lM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ap(r){return r.replace(lM,cM)}function cM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function lp(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hM(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Sp?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===i_?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ki&&(t="SHADOWMAP_TYPE_VSM"),t}function uM(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Xs:case Ys:t="ENVMAP_TYPE_CUBE";break;case Sl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fM(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ys:t="ENVMAP_MODE_REFRACTION";break}return t}function dM(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case bp:t="ENVMAP_BLENDING_MULTIPLY";break;case S_:t="ENVMAP_BLENDING_MIX";break;case b_:t="ENVMAP_BLENDING_ADD";break}return t}function pM(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function mM(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=hM(e),c=uM(e),h=fM(e),f=dM(e),d=pM(e),u=nM(e),_=iM(s),g=i.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Lo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Lo).join(`
`),p.length>0&&(p+=`
`)):(m=[lp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),p=[lp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gr?"#define TONE_MAPPING":"",e.toneMapping!==gr?Jt.tonemapping_pars_fragment:"",e.toneMapping!==gr?tM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,jy("linearToOutputTexel",e.outputColorSpace),eM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lo).join(`
`)),o=eu(o),o=sp(o,e),o=op(o,e),a=eu(a),a=sp(a,e),a=op(a,e),o=ap(o),a=ap(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Sd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=v+m+o,x=v+p+a,E=np(i,i.VERTEX_SHADER,M),b=np(i,i.FRAGMENT_SHADER,x);i.attachShader(g,E),i.attachShader(g,b),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(I){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(E).trim(),W=i.getShaderInfoLog(b).trim(),Z=!0,X=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,E,b);else{let Y=rp(i,E,"vertex"),z=rp(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+Y+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||W==="")&&(X=!1);X&&(I.diagnostics={runnable:Z,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(E),i.deleteShader(b),R=new Gs(i,g),S=rM(i,g)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,Zy)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jy++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=b,this}var gM=0,nu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new iu(t),e.set(t,n)),n}},iu=class{constructor(t){this.id=gM++,this.code=t,this.usedTimes=0}};function _M(r,t,e,n,i,s,o){let a=new Fo,l=new nu,c=new Set,h=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures,u=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,I,N,F){let W=N.fog,Z=F.geometry,X=S.isMeshStandardMaterial?N.environment:null,Y=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),z=Y&&Y.mapping===Sl?Y.image.height:null,tt=_[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));let P=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,at=P!==void 0?P.length:0,Pt=0;Z.morphAttributes.position!==void 0&&(Pt=1),Z.morphAttributes.normal!==void 0&&(Pt=2),Z.morphAttributes.color!==void 0&&(Pt=3);let Kt,$,et,vt;if(tt){let xt=Mi[tt];Kt=xt.vertexShader,$=xt.fragmentShader}else Kt=S.vertexShader,$=S.fragmentShader,l.update(S),et=l.getVertexShaderID(S),vt=l.getFragmentShaderID(S);let nt=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),At=F.isInstancedMesh===!0,Vt=F.isBatchedMesh===!0,Qt=!!S.map,Ht=!!S.matcap,Lt=!!Y,D=!!S.aoMap,_e=!!S.lightMap,Ot=!!S.bumpMap,k=!!S.normalMap,Tt=!!S.displacementMap,ne=!!S.emissiveMap,Ct=!!S.metalnessMap,C=!!S.roughnessMap,w=S.anisotropy>0,G=S.clearcoat>0,j=S.dispersion>0,Q=S.iridescence>0,J=S.sheen>0,ft=S.transmission>0,lt=w&&!!S.anisotropyMap,mt=G&&!!S.clearcoatMap,Xt=G&&!!S.clearcoatNormalMap,it=G&&!!S.clearcoatRoughnessMap,ot=Q&&!!S.iridescenceMap,Ut=Q&&!!S.iridescenceThicknessMap,Dt=J&&!!S.sheenColorMap,yt=J&&!!S.sheenRoughnessMap,qt=!!S.specularMap,Nt=!!S.specularColorMap,se=!!S.specularIntensityMap,L=ft&&!!S.transmissionMap,ut=ft&&!!S.thicknessMap,q=!!S.gradientMap,K=!!S.alphaMap,ht=S.alphaTest>0,dt=!!S.alphaHash,Ft=!!S.extensions,le=gr;S.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(le=r.toneMapping);let Ne={shaderID:tt,shaderType:S.type,shaderName:S.name,vertexShader:Kt,fragmentShader:$,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:vt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Vt,batchingColor:Vt&&F._colorsTexture!==null,instancing:At,instancingColor:At&&F.instanceColor!==null,instancingMorph:At&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?r.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Qs,alphaToCoverage:!!S.alphaToCoverage,map:Qt,matcap:Ht,envMap:Lt,envMapMode:Lt&&Y.mapping,envMapCubeUVHeight:z,aoMap:D,lightMap:_e,bumpMap:Ot,normalMap:k,displacementMap:d&&Tt,emissiveMap:ne,normalMapObjectSpace:k&&S.normalMapType===N_,normalMapTangentSpace:k&&S.normalMapType===U_,metalnessMap:Ct,roughnessMap:C,anisotropy:w,anisotropyMap:lt,clearcoat:G,clearcoatMap:mt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:it,dispersion:j,iridescence:Q,iridescenceMap:ot,iridescenceThicknessMap:Ut,sheen:J,sheenColorMap:Dt,sheenRoughnessMap:yt,specularMap:qt,specularColorMap:Nt,specularIntensityMap:se,transmission:ft,transmissionMap:L,thicknessMap:ut,gradientMap:q,opaque:S.transparent===!1&&S.blending===zs&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:ht,alphaHash:dt,combine:S.combine,mapUv:Qt&&g(S.map.channel),aoMapUv:D&&g(S.aoMap.channel),lightMapUv:_e&&g(S.lightMap.channel),bumpMapUv:Ot&&g(S.bumpMap.channel),normalMapUv:k&&g(S.normalMap.channel),displacementMapUv:Tt&&g(S.displacementMap.channel),emissiveMapUv:ne&&g(S.emissiveMap.channel),metalnessMapUv:Ct&&g(S.metalnessMap.channel),roughnessMapUv:C&&g(S.roughnessMap.channel),anisotropyMapUv:lt&&g(S.anisotropyMap.channel),clearcoatMapUv:mt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:yt&&g(S.sheenRoughnessMap.channel),specularMapUv:qt&&g(S.specularMap.channel),specularColorMapUv:Nt&&g(S.specularColorMap.channel),specularIntensityMapUv:se&&g(S.specularIntensityMap.channel),transmissionMapUv:L&&g(S.transmissionMap.channel),thicknessMapUv:ut&&g(S.thicknessMap.channel),alphaMapUv:K&&g(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(k||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(Qt||K),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:wt,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Pt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,decodeVideoTexture:Qt&&S.map.isVideoTexture===!0&&oe.getTransfer(S.map.colorSpace)===me,decodeVideoTextureEmissive:ne&&S.emissiveMap.isVideoTexture===!0&&oe.getTransfer(S.emissiveMap.colorSpace)===me,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ei,flipSided:S.side===Un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ft&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&S.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function p(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)y.push(I),y.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(v(y,S),M(y,S),y.push(r.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function v(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let y=_[S.type],I;if(y){let N=Mi[y];I=a0.clone(N.uniforms)}else I=S.uniforms;return I}function E(S,y){let I;for(let N=0,F=h.length;N<F;N++){let W=h[N];if(W.cacheKey===y){I=W,++I.usedTimes;break}}return I===void 0&&(I=new mM(r,y,S,s),h.push(I)),I}function b(S){if(--S.usedTimes===0){let y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:E,releaseProgram:b,releaseShaderCache:T,programs:h,dispose:R}}function vM(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function xM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function cp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function hp(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f,d,u,_,g,m){let p=r[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},r[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),t++,p}function a(f,d,u,_,g,m){let p=o(f,d,u,_,g,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):e.push(p)}function l(f,d,u,_,g,m){let p=o(f,d,u,_,g,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):e.unshift(p)}function c(f,d){e.length>1&&e.sort(f||xM),n.length>1&&n.sort(d||cp),i.length>1&&i.sort(d||cp)}function h(){for(let f=t,d=r.length;f<d;f++){let u=r[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function yM(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new hp,r.set(n,[o])):i>=s.length?(o=new hp,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function MM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new ae};break;case"SpotLight":e={position:new B,direction:new B,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new B,halfWidth:new B,halfHeight:new B};break}return r[t.id]=e,e}}}function SM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var bM=0;function wM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function TM(r){let t=new MM,e=SM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let i=new B,s=new ye,o=new ye;function a(c){let h=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let u=0,_=0,g=0,m=0,p=0,v=0,M=0,x=0,E=0,b=0,T=0;c.sort(wM);for(let S=0,y=c.length;S<y;S++){let I=c[S],N=I.color,F=I.intensity,W=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=N.r*F,f+=N.g*F,d+=N.b*F;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],F);T++}else if(I.isDirectionalLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,z=e.get(I);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.directionalShadow[u]=z,n.directionalShadowMap[u]=Z,n.directionalShadowMatrix[u]=I.shadow.matrix,v++}n.directional[u]=X,u++}else if(I.isSpotLight){let X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(N).multiplyScalar(F),X.distance=W,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[g]=X;let Y=I.shadow;if(I.map&&(n.spotLightMap[E]=I.map,E++,Y.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[g]=Y.matrix,I.castShadow){let z=e.get(I);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.spotShadow[g]=z,n.spotShadowMap[g]=Z,x++}g++}else if(I.isRectAreaLight){let X=t.get(I);X.color.copy(N).multiplyScalar(F),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=X,m++}else if(I.isPointLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let Y=I.shadow,z=e.get(I);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=I.shadow.matrix,M++}n.point[_]=X,_++}else if(I.isHemisphereLight){let X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(F),X.groundColor.copy(I.groundColor).multiplyScalar(F),n.hemi[p]=X,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==u||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==M||R.numSpotShadows!==x||R.numSpotMaps!==E||R.numLightProbes!==T)&&(n.directional.length=u,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+E-b,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,R.directionalLength=u,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=M,R.numSpotShadows=x,R.numSpotMaps=E,R.numLightProbes=T,n.version=bM++)}function l(c,h){let f=0,d=0,u=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let M=c[p];if(M.isDirectionalLight){let x=n.directional[f];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(M.isSpotLight){let x=n.spot[u];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(M.isRectAreaLight){let x=n.rectArea[_];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function up(r){let t=new TM(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function EM(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new up(r),t.set(i,[a])):s>=o.length?(a=new up(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ru=class extends qr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=L_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},su=class extends qr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},AM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function RM(r,t,e){let n=new cl,i=new he,s=new he,o=new Ve,a=new ru({depthPacking:D_}),l=new su,c={},h=e.maxTextureSize,f={[_r]:Un,[Un]:_r,[ei]:ei},d=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:AM,fragmentShader:CM}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let _=new wi;_.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new bn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sp;let p=this.type;this.render=function(b,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let S=r.getRenderTarget(),y=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),N=r.state;N.setBlending(mr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let F=p!==ki&&this.type===ki,W=p===ki&&this.type!==ki;for(let Z=0,X=b.length;Z<X;Z++){let Y=b[Z],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let tt=z.getFrameExtents();if(i.multiply(tt),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/tt.x),i.x=s.x*tt.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/tt.y),i.y=s.y*tt.y,z.mapSize.y=s.y)),z.map===null||F===!0||W===!0){let at=this.type!==ki?{minFilter:Yn,magFilter:Yn}:{};z.map!==null&&z.map.dispose(),z.map=new Wi(i.x,i.y,at),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();let P=z.getViewportCount();for(let at=0;at<P;at++){let Pt=z.getViewport(at);o.set(s.x*Pt.x,s.y*Pt.y,s.x*Pt.z,s.y*Pt.w),N.viewport(o),z.updateMatrices(Y,at),n=z.getFrustum(),x(T,R,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===ki&&v(z,R),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,y,I)};function v(b,T){let R=t.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,u.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Wi(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(T,null,R,d,g,null),u.uniforms.shadow_pass.value=b.mapPass.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(T,null,R,u,g,null)}function M(b,T,R,S){let y=null,I=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)y=I;else if(y=R.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let N=y.uuid,F=T.uuid,W=c[N];W===void 0&&(W={},c[N]=W);let Z=W[F];Z===void 0&&(Z=y.clone(),W[F]=Z,T.addEventListener("dispose",E)),y=Z}if(y.visible=T.visible,y.wireframe=T.wireframe,S===ki?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let N=r.properties.get(y);N.light=R}return y}function x(b,T,R,S,y){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===ki)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);let F=t.update(b),W=b.material;if(Array.isArray(W)){let Z=F.groups;for(let X=0,Y=Z.length;X<Y;X++){let z=Z[X],tt=W[z.materialIndex];if(tt&&tt.visible){let P=M(b,tt,S,y);b.onBeforeShadow(r,b,T,R,F,P,z),r.renderBufferDirect(R,null,F,P,b,z),b.onAfterShadow(r,b,T,R,F,P,z)}}}else if(W.visible){let Z=M(b,W,S,y);b.onBeforeShadow(r,b,T,R,F,Z,null),r.renderBufferDirect(R,null,F,Z,b,null),b.onAfterShadow(r,b,T,R,F,Z,null)}}let N=b.children;for(let F=0,W=N.length;F<W;F++)x(N[F],T,R,S,y)}function E(b){b.target.removeEventListener("dispose",E);for(let R in c){let S=c[R],y=b.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var PM={[ah]:lh,[ch]:fh,[hh]:dh,[Ws]:uh,[lh]:ah,[fh]:ch,[dh]:hh,[uh]:Ws};function IM(r,t){function e(){let L=!1,ut=new Ve,q=null,K=new Ve(0,0,0,0);return{setMask:function(ht){q!==ht&&!L&&(r.colorMask(ht,ht,ht,ht),q=ht)},setLocked:function(ht){L=ht},setClear:function(ht,dt,Ft,le,Ne){Ne===!0&&(ht*=le,dt*=le,Ft*=le),ut.set(ht,dt,Ft,le),K.equals(ut)===!1&&(r.clearColor(ht,dt,Ft,le),K.copy(ut))},reset:function(){L=!1,q=null,K.set(-1,0,0,0)}}}function n(){let L=!1,ut=!1,q=null,K=null,ht=null;return{setReversed:function(dt){if(ut!==dt){let Ft=t.get("EXT_clip_control");ut?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);let le=ht;ht=null,this.setClear(le)}ut=dt},getReversed:function(){return ut},setTest:function(dt){dt?nt(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(dt){q!==dt&&!L&&(r.depthMask(dt),q=dt)},setFunc:function(dt){if(ut&&(dt=PM[dt]),K!==dt){switch(dt){case ah:r.depthFunc(r.NEVER);break;case lh:r.depthFunc(r.ALWAYS);break;case ch:r.depthFunc(r.LESS);break;case Ws:r.depthFunc(r.LEQUAL);break;case hh:r.depthFunc(r.EQUAL);break;case uh:r.depthFunc(r.GEQUAL);break;case fh:r.depthFunc(r.GREATER);break;case dh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=dt}},setLocked:function(dt){L=dt},setClear:function(dt){ht!==dt&&(ut&&(dt=1-dt),r.clearDepth(dt),ht=dt)},reset:function(){L=!1,q=null,K=null,ht=null,ut=!1}}}function i(){let L=!1,ut=null,q=null,K=null,ht=null,dt=null,Ft=null,le=null,Ne=null;return{setTest:function(xt){L||(xt?nt(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(xt){ut!==xt&&!L&&(r.stencilMask(xt),ut=xt)},setFunc:function(xt,Et,$t){(q!==xt||K!==Et||ht!==$t)&&(r.stencilFunc(xt,Et,$t),q=xt,K=Et,ht=$t)},setOp:function(xt,Et,$t){(dt!==xt||Ft!==Et||le!==$t)&&(r.stencilOp(xt,Et,$t),dt=xt,Ft=Et,le=$t)},setLocked:function(xt){L=xt},setClear:function(xt){Ne!==xt&&(r.clearStencil(xt),Ne=xt)},reset:function(){L=!1,ut=null,q=null,K=null,ht=null,dt=null,Ft=null,le=null,Ne=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},f={},d=new WeakMap,u=[],_=null,g=!1,m=null,p=null,v=null,M=null,x=null,E=null,b=null,T=new ae(0,0,0),R=0,S=!1,y=null,I=null,N=null,F=null,W=null,Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,Y=0,z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=Y>=2);let tt=null,P={},at=r.getParameter(r.SCISSOR_BOX),Pt=r.getParameter(r.VIEWPORT),Kt=new Ve().fromArray(at),$=new Ve().fromArray(Pt);function et(L,ut,q,K){let ht=new Uint8Array(4),dt=r.createTexture();r.bindTexture(L,dt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ft=0;Ft<q;Ft++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,ht):r.texImage2D(ut+Ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ht);return dt}let vt={};vt[r.TEXTURE_2D]=et(r.TEXTURE_2D,r.TEXTURE_2D,1),vt[r.TEXTURE_CUBE_MAP]=et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[r.TEXTURE_2D_ARRAY]=et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),vt[r.TEXTURE_3D]=et(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(r.DEPTH_TEST),o.setFunc(Ws),Ot(!1),k(pd),nt(r.CULL_FACE),D(mr);function nt(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function wt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function At(L,ut){return f[L]!==ut?(r.bindFramebuffer(L,ut),f[L]=ut,L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ut),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function Vt(L,ut){let q=u,K=!1;if(L){q=d.get(ut),q===void 0&&(q=[],d.set(ut,q));let ht=L.textures;if(q.length!==ht.length||q[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,Ft=ht.length;dt<Ft;dt++)q[dt]=r.COLOR_ATTACHMENT0+dt;q.length=ht.length,K=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,K=!0);K&&r.drawBuffers(q)}function Qt(L){return _!==L?(r.useProgram(L),_=L,!0):!1}let Ht={[Vr]:r.FUNC_ADD,[s_]:r.FUNC_SUBTRACT,[o_]:r.FUNC_REVERSE_SUBTRACT};Ht[a_]=r.MIN,Ht[l_]=r.MAX;let Lt={[c_]:r.ZERO,[h_]:r.ONE,[u_]:r.SRC_COLOR,[sh]:r.SRC_ALPHA,[__]:r.SRC_ALPHA_SATURATE,[m_]:r.DST_COLOR,[d_]:r.DST_ALPHA,[f_]:r.ONE_MINUS_SRC_COLOR,[oh]:r.ONE_MINUS_SRC_ALPHA,[g_]:r.ONE_MINUS_DST_COLOR,[p_]:r.ONE_MINUS_DST_ALPHA,[v_]:r.CONSTANT_COLOR,[x_]:r.ONE_MINUS_CONSTANT_COLOR,[y_]:r.CONSTANT_ALPHA,[M_]:r.ONE_MINUS_CONSTANT_ALPHA};function D(L,ut,q,K,ht,dt,Ft,le,Ne,xt){if(L===mr){g===!0&&(wt(r.BLEND),g=!1);return}if(g===!1&&(nt(r.BLEND),g=!0),L!==r_){if(L!==m||xt!==S){if((p!==Vr||x!==Vr)&&(r.blendEquation(r.FUNC_ADD),p=Vr,x=Vr),xt)switch(L){case zs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Uo:r.blendFunc(r.ONE,r.ONE);break;case md:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case zs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Uo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case md:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,M=null,E=null,b=null,T.set(0,0,0),R=0,m=L,S=xt}return}ht=ht||ut,dt=dt||q,Ft=Ft||K,(ut!==p||ht!==x)&&(r.blendEquationSeparate(Ht[ut],Ht[ht]),p=ut,x=ht),(q!==v||K!==M||dt!==E||Ft!==b)&&(r.blendFuncSeparate(Lt[q],Lt[K],Lt[dt],Lt[Ft]),v=q,M=K,E=dt,b=Ft),(le.equals(T)===!1||Ne!==R)&&(r.blendColor(le.r,le.g,le.b,Ne),T.copy(le),R=Ne),m=L,S=!1}function _e(L,ut){L.side===ei?wt(r.CULL_FACE):nt(r.CULL_FACE);let q=L.side===Un;ut&&(q=!q),Ot(q),L.blending===zs&&L.transparent===!1?D(mr):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?nt(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(L){y!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),y=L)}function k(L){L!==e_?(nt(r.CULL_FACE),L!==I&&(L===pd?r.cullFace(r.BACK):L===n_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),I=L}function Tt(L){L!==N&&(X&&r.lineWidth(L),N=L)}function ne(L,ut,q){L?(nt(r.POLYGON_OFFSET_FILL),(F!==ut||W!==q)&&(r.polygonOffset(ut,q),F=ut,W=q)):wt(r.POLYGON_OFFSET_FILL)}function Ct(L){L?nt(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function C(L){L===void 0&&(L=r.TEXTURE0+Z-1),tt!==L&&(r.activeTexture(L),tt=L)}function w(L,ut,q){q===void 0&&(tt===null?q=r.TEXTURE0+Z-1:q=tt);let K=P[q];K===void 0&&(K={type:void 0,texture:void 0},P[q]=K),(K.type!==L||K.texture!==ut)&&(tt!==q&&(r.activeTexture(q),tt=q),r.bindTexture(L,ut||vt[L]),K.type=L,K.texture=ut)}function G(){let L=P[tt];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ut(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(L){Kt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Kt.copy(L))}function yt(L){$.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function qt(L,ut){let q=c.get(ut);q===void 0&&(q=new WeakMap,c.set(ut,q));let K=q.get(L);K===void 0&&(K=r.getUniformBlockIndex(ut,L.name),q.set(L,K))}function Nt(L,ut){let K=c.get(ut).get(L);l.get(ut)!==K&&(r.uniformBlockBinding(ut,K,L.__bindingPointIndex),l.set(ut,K))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},tt=null,P={},f={},d=new WeakMap,u=[],_=null,g=!1,m=null,p=null,v=null,M=null,x=null,E=null,b=null,T=new ae(0,0,0),R=0,S=!1,y=null,I=null,N=null,F=null,W=null,Kt.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:nt,disable:wt,bindFramebuffer:At,drawBuffers:Vt,useProgram:Qt,setBlending:D,setMaterial:_e,setFlipSided:Ot,setCullFace:k,setLineWidth:Tt,setPolygonOffset:ne,setScissorTest:Ct,activeTexture:C,bindTexture:w,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:ot,texImage3D:Ut,updateUBOMapping:qt,uniformBlockBinding:Nt,texStorage2D:Xt,texStorage3D:it,texSubImage2D:J,texSubImage3D:ft,compressedTexSubImage2D:lt,compressedTexSubImage3D:mt,scissor:Dt,viewport:yt,reset:se}}function fp(r,t,e,n){let i=LM(n);switch(e){case Cp:return r*t;case Pp:return r*t;case Ip:return r*t*2;case Cu:return r*t/i.components*i.byteLength;case Ru:return r*t/i.components*i.byteLength;case Lp:return r*t*2/i.components*i.byteLength;case Pu:return r*t*2/i.components*i.byteLength;case Rp:return r*t*3/i.components*i.byteLength;case pi:return r*t*4/i.components*i.byteLength;case Iu:return r*t*4/i.components*i.byteLength;case $a:case Za:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ja:case Ka:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xh:case Mh:return Math.max(r,16)*Math.max(t,8)/4;case vh:case yh:return Math.max(r,8)*Math.max(t,8)/2;case Sh:case bh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case wh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Th:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Eh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ah:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Rh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ph:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Lh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Uh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Nh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Oh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Fh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Bh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Qa:case kh:case zh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Dp:case Vh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Hh:case Gh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function LM(r){switch(r){case Gi:case Tp:return{byteLength:1,components:1};case No:case Ep:case zo:return{byteLength:2,components:1};case Eu:case Au:return{byteLength:2,components:4};case Yr:case Tu:case bi:return{byteLength:4,components:1};case Ap:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function DM(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,w){return u?new OffscreenCanvas(C,w):el("canvas")}function g(C,w,G){let j=1,Q=Ct(C);if((Q.width>G||Q.height>G)&&(j=G/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let J=Math.floor(j*Q.width),ft=Math.floor(j*Q.height);f===void 0&&(f=_(J,ft));let lt=w?_(J,ft):f;return lt.width=J,lt.height=ft,lt.getContext("2d").drawImage(C,0,0,J,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+ft+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(C,w,G,j,Q=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=w;if(w===r.RED&&(G===r.FLOAT&&(J=r.R32F),G===r.HALF_FLOAT&&(J=r.R16F),G===r.UNSIGNED_BYTE&&(J=r.R8)),w===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.R8UI),G===r.UNSIGNED_SHORT&&(J=r.R16UI),G===r.UNSIGNED_INT&&(J=r.R32UI),G===r.BYTE&&(J=r.R8I),G===r.SHORT&&(J=r.R16I),G===r.INT&&(J=r.R32I)),w===r.RG&&(G===r.FLOAT&&(J=r.RG32F),G===r.HALF_FLOAT&&(J=r.RG16F),G===r.UNSIGNED_BYTE&&(J=r.RG8)),w===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.RG8UI),G===r.UNSIGNED_SHORT&&(J=r.RG16UI),G===r.UNSIGNED_INT&&(J=r.RG32UI),G===r.BYTE&&(J=r.RG8I),G===r.SHORT&&(J=r.RG16I),G===r.INT&&(J=r.RG32I)),w===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.RGB8UI),G===r.UNSIGNED_SHORT&&(J=r.RGB16UI),G===r.UNSIGNED_INT&&(J=r.RGB32UI),G===r.BYTE&&(J=r.RGB8I),G===r.SHORT&&(J=r.RGB16I),G===r.INT&&(J=r.RGB32I)),w===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),G===r.UNSIGNED_INT&&(J=r.RGBA32UI),G===r.BYTE&&(J=r.RGBA8I),G===r.SHORT&&(J=r.RGBA16I),G===r.INT&&(J=r.RGBA32I)),w===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),w===r.RGBA){let ft=Q?bl:oe.getTransfer(j);G===r.FLOAT&&(J=r.RGBA32F),G===r.HALF_FLOAT&&(J=r.RGBA16F),G===r.UNSIGNED_BYTE&&(J=ft===me?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(C,w){let G;return C?w===null||w===Yr||w===qs?G=r.DEPTH24_STENCIL8:w===bi?G=r.DEPTH32F_STENCIL8:w===No&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Yr||w===qs?G=r.DEPTH_COMPONENT24:w===bi?G=r.DEPTH_COMPONENT32F:w===No&&(G=r.DEPTH_COMPONENT16),G}function E(C,w){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Yn&&C.minFilter!==Si?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function b(C){let w=C.target;w.removeEventListener("dispose",b),R(w),w.isVideoTexture&&h.delete(w)}function T(C){let w=C.target;w.removeEventListener("dispose",T),y(w)}function R(C){let w=n.get(C);if(w.__webglInit===void 0)return;let G=C.source,j=d.get(G);if(j){let Q=j[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(C),Object.keys(j).length===0&&d.delete(G)}n.remove(C)}function S(C){let w=n.get(C);r.deleteTexture(w.__webglTexture);let G=C.source,j=d.get(G);delete j[w.__cacheKey],o.memory.textures--}function y(C){let w=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let Q=0;Q<w.__webglFramebuffer[j].length;Q++)r.deleteFramebuffer(w.__webglFramebuffer[j][Q]);else r.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)r.deleteFramebuffer(w.__webglFramebuffer[j]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let G=C.textures;for(let j=0,Q=G.length;j<Q;j++){let J=n.get(G[j]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(G[j])}n.remove(C)}let I=0;function N(){I=0}function F(){let C=I;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),I+=1,C}function W(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function Z(C,w){let G=n.get(C);if(C.isVideoTexture&&Tt(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){let j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(G,C,w);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+w)}function X(C,w){let G=n.get(C);if(C.version>0&&G.__version!==C.version){$(G,C,w);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+w)}function Y(C,w){let G=n.get(C);if(C.version>0&&G.__version!==C.version){$(G,C,w);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+w)}function z(C,w){let G=n.get(C);if(C.version>0&&G.__version!==C.version){et(G,C,w);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+w)}let tt={[gh]:r.REPEAT,[Wr]:r.CLAMP_TO_EDGE,[_h]:r.MIRRORED_REPEAT},P={[Yn]:r.NEAREST,[I_]:r.NEAREST_MIPMAP_NEAREST,[ba]:r.NEAREST_MIPMAP_LINEAR,[Si]:r.LINEAR,[Ac]:r.LINEAR_MIPMAP_NEAREST,[Xr]:r.LINEAR_MIPMAP_LINEAR},at={[O_]:r.NEVER,[H_]:r.ALWAYS,[F_]:r.LESS,[Up]:r.LEQUAL,[B_]:r.EQUAL,[V_]:r.GEQUAL,[k_]:r.GREATER,[z_]:r.NOTEQUAL};function Pt(C,w){if(w.type===bi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Si||w.magFilter===Ac||w.magFilter===ba||w.magFilter===Xr||w.minFilter===Si||w.minFilter===Ac||w.minFilter===ba||w.minFilter===Xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,tt[w.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,tt[w.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,tt[w.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,P[w.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,P[w.minFilter]),w.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,at[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Yn||w.minFilter!==ba&&w.minFilter!==Xr||w.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Kt(C,w){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",b));let j=w.source,Q=d.get(j);Q===void 0&&(Q={},d.set(j,Q));let J=W(w);if(J!==C.__cacheKey){Q[J]===void 0&&(Q[J]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[J].usedTimes++;let ft=Q[C.__cacheKey];ft!==void 0&&(Q[C.__cacheKey].usedTimes--,ft.usedTimes===0&&S(w)),C.__cacheKey=J,C.__webglTexture=Q[J].texture}return G}function $(C,w,G){let j=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=r.TEXTURE_3D);let Q=Kt(C,w),J=w.source;e.bindTexture(j,C.__webglTexture,r.TEXTURE0+G);let ft=n.get(J);if(J.version!==ft.__version||Q===!0){e.activeTexture(r.TEXTURE0+G);let lt=oe.getPrimaries(oe.workingColorSpace),mt=w.colorSpace===dr?null:oe.getPrimaries(w.colorSpace),Xt=w.colorSpace===dr||lt===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let it=g(w.image,!1,i.maxTextureSize);it=ne(w,it);let ot=s.convert(w.format,w.colorSpace),Ut=s.convert(w.type),Dt=M(w.internalFormat,ot,Ut,w.colorSpace,w.isVideoTexture);Pt(j,w);let yt,qt=w.mipmaps,Nt=w.isVideoTexture!==!0,se=ft.__version===void 0||Q===!0,L=J.dataReady,ut=E(w,it);if(w.isDepthTexture)Dt=x(w.format===$s,w.type),se&&(Nt?e.texStorage2D(r.TEXTURE_2D,1,Dt,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,Dt,it.width,it.height,0,ot,Ut,null));else if(w.isDataTexture)if(qt.length>0){Nt&&se&&e.texStorage2D(r.TEXTURE_2D,ut,Dt,qt[0].width,qt[0].height);for(let q=0,K=qt.length;q<K;q++)yt=qt[q],Nt?L&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,yt.width,yt.height,ot,Ut,yt.data):e.texImage2D(r.TEXTURE_2D,q,Dt,yt.width,yt.height,0,ot,Ut,yt.data);w.generateMipmaps=!1}else Nt?(se&&e.texStorage2D(r.TEXTURE_2D,ut,Dt,it.width,it.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,it.width,it.height,ot,Ut,it.data)):e.texImage2D(r.TEXTURE_2D,0,Dt,it.width,it.height,0,ot,Ut,it.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Nt&&se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,Dt,qt[0].width,qt[0].height,it.depth);for(let q=0,K=qt.length;q<K;q++)if(yt=qt[q],w.format!==pi)if(ot!==null)if(Nt){if(L)if(w.layerUpdates.size>0){let ht=fp(yt.width,yt.height,w.format,w.type);for(let dt of w.layerUpdates){let Ft=yt.data.subarray(dt*ht/yt.data.BYTES_PER_ELEMENT,(dt+1)*ht/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,dt,yt.width,yt.height,1,ot,Ft)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,yt.width,yt.height,it.depth,ot,yt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Dt,yt.width,yt.height,it.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,yt.width,yt.height,it.depth,ot,Ut,yt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,q,Dt,yt.width,yt.height,it.depth,0,ot,Ut,yt.data)}else{Nt&&se&&e.texStorage2D(r.TEXTURE_2D,ut,Dt,qt[0].width,qt[0].height);for(let q=0,K=qt.length;q<K;q++)yt=qt[q],w.format!==pi?ot!==null?Nt?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,yt.width,yt.height,ot,yt.data):e.compressedTexImage2D(r.TEXTURE_2D,q,Dt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?L&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,yt.width,yt.height,ot,Ut,yt.data):e.texImage2D(r.TEXTURE_2D,q,Dt,yt.width,yt.height,0,ot,Ut,yt.data)}else if(w.isDataArrayTexture)if(Nt){if(se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,Dt,it.width,it.height,it.depth),L)if(w.layerUpdates.size>0){let q=fp(it.width,it.height,w.format,w.type);for(let K of w.layerUpdates){let ht=it.data.subarray(K*q/it.data.BYTES_PER_ELEMENT,(K+1)*q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,ot,Ut,ht)}w.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ot,Ut,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Dt,it.width,it.height,it.depth,0,ot,Ut,it.data);else if(w.isData3DTexture)Nt?(se&&e.texStorage3D(r.TEXTURE_3D,ut,Dt,it.width,it.height,it.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ot,Ut,it.data)):e.texImage3D(r.TEXTURE_3D,0,Dt,it.width,it.height,it.depth,0,ot,Ut,it.data);else if(w.isFramebufferTexture){if(se)if(Nt)e.texStorage2D(r.TEXTURE_2D,ut,Dt,it.width,it.height);else{let q=it.width,K=it.height;for(let ht=0;ht<ut;ht++)e.texImage2D(r.TEXTURE_2D,ht,Dt,q,K,0,ot,Ut,null),q>>=1,K>>=1}}else if(qt.length>0){if(Nt&&se){let q=Ct(qt[0]);e.texStorage2D(r.TEXTURE_2D,ut,Dt,q.width,q.height)}for(let q=0,K=qt.length;q<K;q++)yt=qt[q],Nt?L&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,ot,Ut,yt):e.texImage2D(r.TEXTURE_2D,q,Dt,ot,Ut,yt);w.generateMipmaps=!1}else if(Nt){if(se){let q=Ct(it);e.texStorage2D(r.TEXTURE_2D,ut,Dt,q.width,q.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot,Ut,it)}else e.texImage2D(r.TEXTURE_2D,0,Dt,ot,Ut,it);m(w)&&p(j),ft.__version=J.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function et(C,w,G){if(w.image.length!==6)return;let j=Kt(C,w),Q=w.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+G);let J=n.get(Q);if(Q.version!==J.__version||j===!0){e.activeTexture(r.TEXTURE0+G);let ft=oe.getPrimaries(oe.workingColorSpace),lt=w.colorSpace===dr?null:oe.getPrimaries(w.colorSpace),mt=w.colorSpace===dr||ft===lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Xt=w.isCompressedTexture||w.image[0].isCompressedTexture,it=w.image[0]&&w.image[0].isDataTexture,ot=[];for(let K=0;K<6;K++)!Xt&&!it?ot[K]=g(w.image[K],!0,i.maxCubemapSize):ot[K]=it?w.image[K].image:w.image[K],ot[K]=ne(w,ot[K]);let Ut=ot[0],Dt=s.convert(w.format,w.colorSpace),yt=s.convert(w.type),qt=M(w.internalFormat,Dt,yt,w.colorSpace),Nt=w.isVideoTexture!==!0,se=J.__version===void 0||j===!0,L=Q.dataReady,ut=E(w,Ut);Pt(r.TEXTURE_CUBE_MAP,w);let q;if(Xt){Nt&&se&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ut,qt,Ut.width,Ut.height);for(let K=0;K<6;K++){q=ot[K].mipmaps;for(let ht=0;ht<q.length;ht++){let dt=q[ht];w.format!==pi?Dt!==null?Nt?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,dt.width,dt.height,Dt,dt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,qt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,dt.width,dt.height,Dt,yt,dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,qt,dt.width,dt.height,0,Dt,yt,dt.data)}}}else{if(q=w.mipmaps,Nt&&se){q.length>0&&ut++;let K=Ct(ot[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ut,qt,K.width,K.height)}for(let K=0;K<6;K++)if(it){Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ot[K].width,ot[K].height,Dt,yt,ot[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,ot[K].width,ot[K].height,0,Dt,yt,ot[K].data);for(let ht=0;ht<q.length;ht++){let Ft=q[ht].image[K].image;Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Ft.width,Ft.height,Dt,yt,Ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,qt,Ft.width,Ft.height,0,Dt,yt,Ft.data)}}else{Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Dt,yt,ot[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,Dt,yt,ot[K]);for(let ht=0;ht<q.length;ht++){let dt=q[ht];Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Dt,yt,dt.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,qt,Dt,yt,dt.image[K])}}}m(w)&&p(r.TEXTURE_CUBE_MAP),J.__version=Q.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function vt(C,w,G,j,Q,J){let ft=s.convert(G.format,G.colorSpace),lt=s.convert(G.type),mt=M(G.internalFormat,ft,lt,G.colorSpace),Xt=n.get(w),it=n.get(G);if(it.__renderTarget=w,!Xt.__hasExternalTextures){let ot=Math.max(1,w.width>>J),Ut=Math.max(1,w.height>>J);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,J,mt,ot,Ut,w.depth,0,ft,lt,null):e.texImage2D(Q,J,mt,ot,Ut,0,ft,lt,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),k(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,Q,it.__webglTexture,0,Ot(w)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,Q,it.__webglTexture,J),e.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(C,w,G){if(r.bindRenderbuffer(r.RENDERBUFFER,C),w.depthBuffer){let j=w.depthTexture,Q=j&&j.isDepthTexture?j.type:null,J=x(w.stencilBuffer,Q),ft=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=Ot(w);k(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,lt,J,w.width,w.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,lt,J,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,J,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ft,r.RENDERBUFFER,C)}else{let j=w.textures;for(let Q=0;Q<j.length;Q++){let J=j[Q],ft=s.convert(J.format,J.colorSpace),lt=s.convert(J.type),mt=M(J.internalFormat,ft,lt,J.colorSpace),Xt=Ot(w);G&&k(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,mt,w.width,w.height):k(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt,mt,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,mt,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function wt(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(w.depthTexture);j.__renderTarget=w,(!j.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z(w.depthTexture,0);let Q=j.__webglTexture,J=Ot(w);if(w.depthTexture.format===Vs)k(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(w.depthTexture.format===$s)k(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function At(C){let w=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){let j=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){let Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=j}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");wt(w.__webglFramebuffer,C)}else if(G){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=r.createRenderbuffer(),nt(w.__webglDepthbuffer[j],C,!1);else{let Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,J)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),nt(w.__webglDepthbuffer,C,!1);else{let j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,Q)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(C,w,G){let j=n.get(C);w!==void 0&&vt(j.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&At(C)}function Qt(C){let w=C.texture,G=n.get(C),j=n.get(w);C.addEventListener("dispose",T);let Q=C.textures,J=C.isWebGLCubeRenderTarget===!0,ft=Q.length>1;if(ft||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=w.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[lt]=[];for(let mt=0;mt<w.mipmaps.length;mt++)G.__webglFramebuffer[lt][mt]=r.createFramebuffer()}else G.__webglFramebuffer[lt]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let lt=0;lt<w.mipmaps.length;lt++)G.__webglFramebuffer[lt]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(ft)for(let lt=0,mt=Q.length;lt<mt;lt++){let Xt=n.get(Q[lt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&k(C)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let lt=0;lt<Q.length;lt++){let mt=Q[lt];G.__webglColorRenderbuffer[lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[lt]);let Xt=s.convert(mt.format,mt.colorSpace),it=s.convert(mt.type),ot=M(mt.internalFormat,Xt,it,mt.colorSpace,C.isXRRenderTarget===!0),Ut=Ot(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,ot,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,G.__webglColorRenderbuffer[lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),nt(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Pt(r.TEXTURE_CUBE_MAP,w);for(let lt=0;lt<6;lt++)if(w.mipmaps&&w.mipmaps.length>0)for(let mt=0;mt<w.mipmaps.length;mt++)vt(G.__webglFramebuffer[lt][mt],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,mt);else vt(G.__webglFramebuffer[lt],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(w)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let lt=0,mt=Q.length;lt<mt;lt++){let Xt=Q[lt],it=n.get(Xt);e.bindTexture(r.TEXTURE_2D,it.__webglTexture),Pt(r.TEXTURE_2D,Xt),vt(G.__webglFramebuffer,C,Xt,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,0),m(Xt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let lt=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(lt,j.__webglTexture),Pt(lt,w),w.mipmaps&&w.mipmaps.length>0)for(let mt=0;mt<w.mipmaps.length;mt++)vt(G.__webglFramebuffer[mt],C,w,r.COLOR_ATTACHMENT0,lt,mt);else vt(G.__webglFramebuffer,C,w,r.COLOR_ATTACHMENT0,lt,0);m(w)&&p(lt),e.unbindTexture()}C.depthBuffer&&At(C)}function Ht(C){let w=C.textures;for(let G=0,j=w.length;G<j;G++){let Q=w[G];if(m(Q)){let J=v(C),ft=n.get(Q).__webglTexture;e.bindTexture(J,ft),p(J),e.unbindTexture()}}}let Lt=[],D=[];function _e(C){if(C.samples>0){if(k(C)===!1){let w=C.textures,G=C.width,j=C.height,Q=r.COLOR_BUFFER_BIT,J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=n.get(C),lt=w.length>1;if(lt)for(let mt=0;mt<w.length;mt++)e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let mt=0;mt<w.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);let Xt=n.get(w[mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xt,0)}r.blitFramebuffer(0,0,G,j,0,0,G,j,Q,r.NEAREST),l===!0&&(Lt.length=0,D.length=0,Lt.push(r.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Lt.push(J),D.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Lt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),lt)for(let mt=0;mt<w.length;mt++){e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);let Xt=n.get(w[mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,Xt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let w=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Ot(C){return Math.min(i.maxSamples,C.samples)}function k(C){let w=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Tt(C){let w=o.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function ne(C,w){let G=C.colorSpace,j=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Qs&&G!==dr&&(oe.getTransfer(G)===me?(j!==pi||Q!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Ct(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=Vt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=k}function UM(r,t){function e(n,i=dr){let s,o=oe.getTransfer(i);if(n===Gi)return r.UNSIGNED_BYTE;if(n===Eu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Au)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ap)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Tp)return r.BYTE;if(n===Ep)return r.SHORT;if(n===No)return r.UNSIGNED_SHORT;if(n===Tu)return r.INT;if(n===Yr)return r.UNSIGNED_INT;if(n===bi)return r.FLOAT;if(n===zo)return r.HALF_FLOAT;if(n===Cp)return r.ALPHA;if(n===Rp)return r.RGB;if(n===pi)return r.RGBA;if(n===Pp)return r.LUMINANCE;if(n===Ip)return r.LUMINANCE_ALPHA;if(n===Vs)return r.DEPTH_COMPONENT;if(n===$s)return r.DEPTH_STENCIL;if(n===Cu)return r.RED;if(n===Ru)return r.RED_INTEGER;if(n===Lp)return r.RG;if(n===Pu)return r.RG_INTEGER;if(n===Iu)return r.RGBA_INTEGER;if(n===$a||n===Za||n===Ja||n===Ka)if(o===me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===$a)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===$a)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vh||n===xh||n===yh||n===Mh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===vh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sh||n===bh||n===wh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Sh||n===bh)return o===me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===wh)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Th||n===Eh||n===Ah||n===Ch||n===Rh||n===Ph||n===Ih||n===Lh||n===Dh||n===Uh||n===Nh||n===Oh||n===Fh||n===Bh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Th)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eh)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ah)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ch)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rh)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ph)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ih)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lh)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dh)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uh)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nh)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oh)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fh)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bh)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qa||n===kh||n===zh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Qa)return o===me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dp||n===Vh||n===Hh||n===Gh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Qa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Vh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var ou=class extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},pr=class extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}},NM={type:"move"},Do=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,_=.005;c.inputState.pinching&&d>u+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(NM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new pr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},OM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FM=`
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

}`,au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Nn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new On({vertexShader:OM,fragmentShader:FM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bn(new $r(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lu=class extends vr{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,_=null,g=new au,m=e.getContextAttributes(),p=null,v=null,M=[],x=[],E=new he,b=null,T=new Sn;T.viewport=new Ve;let R=new Sn;R.viewport=new Ve;let S=[T,R],y=new ou,I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=M[$];return et===void 0&&(et=new Do,M[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=M[$];return et===void 0&&(et=new Do,M[$]=et),et.getGripSpace()},this.getHand=function($){let et=M[$];return et===void 0&&(et=new Do,M[$]=et),et.getHandSpace()};function F($){let et=x.indexOf($.inputSource);if(et===-1)return;let vt=M[et];vt!==void 0&&(vt.update($.inputSource,$.frame,c||o),vt.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Z);for(let $=0;$<M.length;$++){let et=x[$];et!==null&&(x[$]=null,M[$].disconnect(et))}I=null,N=null,g.reset(),t.setRenderTarget(p),u=null,d=null,f=null,i=null,v=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(E),i.renderState.layers===void 0){let et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new Wi(u.framebufferWidth,u.framebufferHeight,{format:pi,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,vt=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?$s:Vs,vt=m.stencil?qs:Yr);let wt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:s};f=new XRWebGLBinding(i,e),d=f.createProjectionLayer(wt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Wi(d.textureWidth,d.textureHeight,{format:pi,type:Gi,depthTexture:new ul(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z($){for(let et=0;et<$.removed.length;et++){let vt=$.removed[et],nt=x.indexOf(vt);nt>=0&&(x[nt]=null,M[nt].disconnect(vt))}for(let et=0;et<$.added.length;et++){let vt=$.added[et],nt=x.indexOf(vt);if(nt===-1){for(let At=0;At<M.length;At++)if(At>=x.length){x.push(vt),nt=At;break}else if(x[At]===null){x[At]=vt,nt=At;break}if(nt===-1)break}let wt=M[nt];wt&&wt.connect(vt)}}let X=new B,Y=new B;function z($,et,vt){X.setFromMatrixPosition(et.matrixWorld),Y.setFromMatrixPosition(vt.matrixWorld);let nt=X.distanceTo(Y),wt=et.projectionMatrix.elements,At=vt.projectionMatrix.elements,Vt=wt[14]/(wt[10]-1),Qt=wt[14]/(wt[10]+1),Ht=(wt[9]+1)/wt[5],Lt=(wt[9]-1)/wt[5],D=(wt[8]-1)/wt[0],_e=(At[8]+1)/At[0],Ot=Vt*D,k=Vt*_e,Tt=nt/(-D+_e),ne=Tt*-D;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ne),$.translateZ(Tt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),wt[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let Ct=Vt+Tt,C=Qt+Tt,w=Ot-ne,G=k+(nt-ne),j=Ht*Qt/C*Ct,Q=Lt*Qt/C*Ct;$.projectionMatrix.makePerspective(w,G,j,Q,Ct,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function tt($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let et=$.near,vt=$.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),y.near=R.near=T.near=et,y.far=R.far=T.far=vt,(I!==y.near||N!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,N=y.far),T.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,y.layers.mask=T.layers.mask|R.layers.mask;let nt=$.parent,wt=y.cameras;tt(y,nt);for(let At=0;At<wt.length;At++)tt(wt[At],nt);wt.length===2?z(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),P($,y,nt)};function P($,et,vt){vt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(vt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Xh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let at=null;function Pt($,et){if(h=et.getViewerPose(c||o),_=et,h!==null){let vt=h.views;u!==null&&(t.setRenderTargetFramebuffer(v,u.framebuffer),t.setRenderTarget(v));let nt=!1;vt.length!==y.cameras.length&&(y.cameras.length=0,nt=!0);for(let At=0;At<vt.length;At++){let Vt=vt[At],Qt=null;if(u!==null)Qt=u.getViewport(Vt);else{let Lt=f.getViewSubImage(d,Vt);Qt=Lt.viewport,At===0&&(t.setRenderTargetTextures(v,Lt.colorTexture,d.ignoreDepthValues?void 0:Lt.depthStencilTexture),t.setRenderTarget(v))}let Ht=S[At];Ht===void 0&&(Ht=new Sn,Ht.layers.enable(At),Ht.viewport=new Ve,S[At]=Ht),Ht.matrix.fromArray(Vt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Vt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),At===0&&(y.matrix.copy(Ht.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),nt===!0&&y.cameras.push(Ht)}let wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")){let At=f.getDepthInformation(vt[0]);At&&At.isValid&&At.texture&&g.init(t,At,i.renderState)}}for(let vt=0;vt<M.length;vt++){let nt=x[vt],wt=M[vt];nt!==null&&wt!==void 0&&wt.update(nt,et,c||o)}at&&at($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}let Kt=new Bp;Kt.setAnimationLoop(Pt),this.setAnimationLoop=function($){at=$},this.dispose=function(){}}},kr=new Yi,BM=new ye;function kM(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Fp(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),M=v.envMap,x=v.envMapRotation;M&&(m.envMap.value=M,kr.copy(x),kr.x*=-1,kr.y*=-1,kr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),m.envMapRotation.value.setFromMatrix4(BM.makeRotationFromEuler(kr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zM(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let x=M.program;n.uniformBlockBinding(v,x)}function c(v,M){let x=i[v.id];x===void 0&&(_(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",m));let E=M.program;n.updateUBOMapping(v,E);let b=t.render.frame;s[v.id]!==b&&(d(v),s[v.id]=b)}function h(v){let M=f();v.__bindingPointIndex=M;let x=r.createBuffer(),E=v.__size,b=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,E,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,x),x}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let M=i[v.id],x=v.uniforms,E=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let b=0,T=x.length;b<T;b++){let R=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,y=R.length;S<y;S++){let I=R[S];if(u(I,b,S,E)===!0){let N=I.__offset,F=Array.isArray(I.value)?I.value:[I.value],W=0;for(let Z=0;Z<F.length;Z++){let X=F[Z],Y=g(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,N+W,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,W),W+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(v,M,x,E){let b=v.value,T=M+"_"+x;if(E[T]===void 0)return typeof b=="number"||typeof b=="boolean"?E[T]=b:E[T]=b.clone(),!0;{let R=E[T];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return E[T]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function _(v){let M=v.uniforms,x=0,E=16;for(let T=0,R=M.length;T<R;T++){let S=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,I=S.length;y<I;y++){let N=S[y],F=Array.isArray(N.value)?N.value:[N.value];for(let W=0,Z=F.length;W<Z;W++){let X=F[W],Y=g(X),z=x%E,tt=z%Y.boundary,P=z+tt;x+=tt,P!==0&&E-P<Y.storage&&(x+=E-P),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=Y.storage}}}let b=x%E;return b>0&&(x+=E-b),v.__size=x,v.__cache={},this}function g(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){let M=v.target;M.removeEventListener("dispose",m);let x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(let v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var fl=class{constructor(t={}){let{canvas:e=W_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let _=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=gr,this.toneMappingExposure=1;let x=this,E=!1,b=0,T=0,R=null,S=-1,y=null,I=new Ve,N=new Ve,F=null,W=new ae(0),Z=0,X=e.width,Y=e.height,z=1,tt=null,P=null,at=new Ve(0,0,X,Y),Pt=new Ve(0,0,X,Y),Kt=!1,$=new cl,et=!1,vt=!1,nt=new ye,wt=new ye,At=new B,Vt=new Ve,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function Lt(){return R===null?z:1}let D=n;function _e(A,U){return e.getContext(A,U)}try{let A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wu}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",dt,!1),D===null){let U="webgl2";if(D=_e(U,A),D===null)throw _e(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ot,k,Tt,ne,Ct,C,w,G,j,Q,J,ft,lt,mt,Xt,it,ot,Ut,Dt,yt,qt,Nt,se,L;function ut(){Ot=new ny(D),Ot.init(),Nt=new UM(D,Ot),k=new Jx(D,Ot,t,Nt),Tt=new IM(D,Ot),k.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),ne=new sy(D),Ct=new vM,C=new DM(D,Ot,Tt,Ct,k,Nt,ne),w=new Qx(x),G=new ey(x),j=new f0(D),se=new $x(D,j),Q=new iy(D,j,ne,se),J=new ay(D,Q,j,ne),Dt=new oy(D,k,C),it=new Kx(Ct),ft=new _M(x,w,G,Ot,k,se,it),lt=new kM(x,Ct),mt=new yM,Xt=new EM(Ot),Ut=new qx(x,w,G,Tt,J,u,l),ot=new RM(x,J,k),L=new zM(D,ne,k,Tt),yt=new Zx(D,Ot,ne),qt=new ry(D,Ot,ne),ne.programs=ft.programs,x.capabilities=k,x.extensions=Ot,x.properties=Ct,x.renderLists=mt,x.shadowMap=ot,x.state=Tt,x.info=ne}ut();let q=new lu(x,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=Ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(X,Y,!1))},this.getSize=function(A){return A.set(X,Y)},this.setSize=function(A,U,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,Y=U,e.width=Math.floor(A*z),e.height=Math.floor(U*z),V===!0&&(e.style.width=A+"px",e.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(X*z,Y*z).floor()},this.setDrawingBufferSize=function(A,U,V){X=A,Y=U,z=V,e.width=Math.floor(A*V),e.height=Math.floor(U*V),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(at)},this.setViewport=function(A,U,V,H){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,U,V,H),Tt.viewport(I.copy(at).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(Pt)},this.setScissor=function(A,U,V,H){A.isVector4?Pt.set(A.x,A.y,A.z,A.w):Pt.set(A,U,V,H),Tt.scissor(N.copy(Pt).multiplyScalar(z).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(A){Tt.setScissorTest(Kt=A)},this.setOpaqueSort=function(A){tt=A},this.setTransparentSort=function(A){P=A},this.getClearColor=function(A){return A.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(A=!0,U=!0,V=!0){let H=0;if(A){let O=!1;if(R!==null){let rt=R.texture.format;O=rt===Iu||rt===Pu||rt===Ru}if(O){let rt=R.texture.type,st=rt===Gi||rt===Yr||rt===No||rt===qs||rt===Eu||rt===Au,pt=Ut.getClearColor(),Mt=Ut.getClearAlpha(),Bt=pt.r,Wt=pt.g,bt=pt.b;st?(_[0]=Bt,_[1]=Wt,_[2]=bt,_[3]=Mt,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=Bt,g[1]=Wt,g[2]=bt,g[3]=Mt,D.clearBufferiv(D.COLOR,0,g))}else H|=D.COLOR_BUFFER_BIT}U&&(H|=D.DEPTH_BUFFER_BIT),V&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),mt.dispose(),Xt.dispose(),Ct.dispose(),w.dispose(),G.dispose(),J.dispose(),se.dispose(),L.dispose(),ft.dispose(),q.dispose(),q.removeEventListener("sessionstart",gt),q.removeEventListener("sessionend",Gt),Rt.stop()};function K(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let A=ne.autoReset,U=ot.enabled,V=ot.autoUpdate,H=ot.needsUpdate,O=ot.type;ut(),ne.autoReset=A,ot.enabled=U,ot.autoUpdate=V,ot.needsUpdate=H,ot.type=O}function dt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ft(A){let U=A.target;U.removeEventListener("dispose",Ft),le(U)}function le(A){Ne(A),Ct.remove(A)}function Ne(A){let U=Ct.get(A).programs;U!==void 0&&(U.forEach(function(V){ft.releaseProgram(V)}),A.isShaderMaterial&&ft.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,V,H,O,rt){U===null&&(U=Qt);let st=O.isMesh&&O.matrixWorld.determinant()<0,pt=Hn(A,U,V,H,O);Tt.setMaterial(H,st);let Mt=V.index,Bt=1;if(H.wireframe===!0){if(Mt=Q.getWireframeAttribute(V),Mt===void 0)return;Bt=2}let Wt=V.drawRange,bt=V.attributes.position,Yt=Wt.start*Bt,ce=(Wt.start+Wt.count)*Bt;rt!==null&&(Yt=Math.max(Yt,rt.start*Bt),ce=Math.min(ce,(rt.start+rt.count)*Bt)),Mt!==null?(Yt=Math.max(Yt,0),ce=Math.min(ce,Mt.count)):bt!=null&&(Yt=Math.max(Yt,0),ce=Math.min(ce,bt.count));let fe=ce-Yt;if(fe<0||fe===1/0)return;se.setup(O,H,pt,V,Mt);let Ge,de=yt;if(Mt!==null&&(Ge=j.get(Mt),de=qt,de.setIndex(Ge)),O.isMesh)H.wireframe===!0?(Tt.setLineWidth(H.wireframeLinewidth*Lt()),de.setMode(D.LINES)):de.setMode(D.TRIANGLES);else if(O.isLine){let It=H.linewidth;It===void 0&&(It=1),Tt.setLineWidth(It*Lt()),O.isLineSegments?de.setMode(D.LINES):O.isLineLoop?de.setMode(D.LINE_LOOP):de.setMode(D.LINE_STRIP)}else O.isPoints?de.setMode(D.POINTS):O.isSprite&&de.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)de.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))de.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let It=O._multiDrawStarts,Di=O._multiDrawCounts,pe=O._multiDrawCount,hi=Mt?j.get(Mt).bytesPerElement:1,bs=Ct.get(H).currentProgram.getUniforms();for(let Gn=0;Gn<pe;Gn++)bs.setValue(D,"_gl_DrawID",Gn),de.render(It[Gn]/hi,Di[Gn])}else if(O.isInstancedMesh)de.renderInstances(Yt,fe,O.count);else if(V.isInstancedBufferGeometry){let It=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Di=Math.min(V.instanceCount,It);de.renderInstances(Yt,fe,Di)}else de.render(Yt,fe)};function xt(A,U,V){A.transparent===!0&&A.side===ei&&A.forceSinglePass===!1?(A.side=Un,A.needsUpdate=!0,ve(A,U,V),A.side=_r,A.needsUpdate=!0,ve(A,U,V),A.side=ei):ve(A,U,V)}this.compile=function(A,U,V=null){V===null&&(V=A),p=Xt.get(V),p.init(U),M.push(p),V.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),A!==V&&A.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let H=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let rt=O.material;if(rt)if(Array.isArray(rt))for(let st=0;st<rt.length;st++){let pt=rt[st];xt(pt,V,O),H.add(pt)}else xt(rt,V,O),H.add(rt)}),M.pop(),p=null,H},this.compileAsync=function(A,U,V=null){let H=this.compile(A,U,V);return new Promise(O=>{function rt(){if(H.forEach(function(st){Ct.get(st).currentProgram.isReady()&&H.delete(st)}),H.size===0){O(A);return}setTimeout(rt,10)}Ot.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Et=null;function $t(A){Et&&Et(A)}function gt(){Rt.stop()}function Gt(){Rt.start()}let Rt=new Bp;Rt.setAnimationLoop($t),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(A){Et=A,q.setAnimationLoop(A),A===null?Rt.stop():Rt.start()},q.addEventListener("sessionstart",gt),q.addEventListener("sessionend",Gt),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,U,R),p=Xt.get(A,M.length),p.init(U),M.push(p),wt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(wt),vt=this.localClippingEnabled,et=it.init(this.clippingPlanes,vt),m=mt.get(A,v.length),m.init(),v.push(m),q.enabled===!0&&q.isPresenting===!0){let rt=x.xr.getDepthSensingMesh();rt!==null&&kt(rt,U,-1/0,x.sortObjects)}kt(A,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(tt,P),Ht=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ht&&Ut.addToRenderList(m,A),this.info.render.frame++,et===!0&&it.beginShadows();let V=p.state.shadowsArray;ot.render(V,A,U),et===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,O=m.transmissive;if(p.setupLights(),U.isArrayCamera){let rt=U.cameras;if(O.length>0)for(let st=0,pt=rt.length;st<pt;st++){let Mt=rt[st];jt(H,O,A,Mt)}Ht&&Ut.render(A);for(let st=0,pt=rt.length;st<pt;st++){let Mt=rt[st];ze(m,A,Mt,Mt.viewport)}}else O.length>0&&jt(H,O,A,U),Ht&&Ut.render(A),ze(m,A,U);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(x,A,U),se.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],et===!0&&it.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function kt(A,U,V,H){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$.intersectsSprite(A)){H&&Vt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(wt);let st=J.update(A),pt=A.material;pt.visible&&m.push(A,st,pt,V,Vt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$.intersectsObject(A))){let st=J.update(A),pt=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Vt.copy(A.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Vt.copy(st.boundingSphere.center)),Vt.applyMatrix4(A.matrixWorld).applyMatrix4(wt)),Array.isArray(pt)){let Mt=st.groups;for(let Bt=0,Wt=Mt.length;Bt<Wt;Bt++){let bt=Mt[Bt],Yt=pt[bt.materialIndex];Yt&&Yt.visible&&m.push(A,st,Yt,V,Vt.z,bt)}}else pt.visible&&m.push(A,st,pt,V,Vt.z,null)}}let rt=A.children;for(let st=0,pt=rt.length;st<pt;st++)kt(rt[st],U,V,H)}function ze(A,U,V,H){let O=A.opaque,rt=A.transmissive,st=A.transparent;p.setupLightsView(V),et===!0&&it.setGlobalState(x.clippingPlanes,V),H&&Tt.viewport(I.copy(H)),O.length>0&&Se(O,U,V),rt.length>0&&Se(rt,U,V),st.length>0&&Se(st,U,V),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function jt(A,U,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Wi(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?zo:Gi,minFilter:Xr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let rt=p.state.transmissionRenderTarget[H.id],st=H.viewport||I;rt.setSize(st.z,st.w);let pt=x.getRenderTarget();x.setRenderTarget(rt),x.getClearColor(W),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),Ht&&Ut.render(V);let Mt=x.toneMapping;x.toneMapping=gr;let Bt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),et===!0&&it.setGlobalState(x.clippingPlanes,H),Se(A,V,H),C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let bt=0,Yt=U.length;bt<Yt;bt++){let ce=U[bt],fe=ce.object,Ge=ce.geometry,de=ce.material,It=ce.group;if(de.side===ei&&fe.layers.test(H.layers)){let Di=de.side;de.side=Un,de.needsUpdate=!0,$e(fe,V,H,Ge,de,It),de.side=Di,de.needsUpdate=!0,Wt=!0}}Wt===!0&&(C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt))}x.setRenderTarget(pt),x.setClearColor(W,Z),Bt!==void 0&&(H.viewport=Bt),x.toneMapping=Mt}function Se(A,U,V){let H=U.isScene===!0?U.overrideMaterial:null;for(let O=0,rt=A.length;O<rt;O++){let st=A[O],pt=st.object,Mt=st.geometry,Bt=H===null?st.material:H,Wt=st.group;pt.layers.test(V.layers)&&$e(pt,U,V,Mt,Bt,Wt)}}function $e(A,U,V,H,O,rt){A.onBeforeRender(x,U,V,H,O,rt),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(x,U,V,H,A,rt),O.transparent===!0&&O.side===ei&&O.forceSinglePass===!1?(O.side=Un,O.needsUpdate=!0,x.renderBufferDirect(V,U,H,O,A,rt),O.side=_r,O.needsUpdate=!0,x.renderBufferDirect(V,U,H,O,A,rt),O.side=ei):x.renderBufferDirect(V,U,H,O,A,rt),A.onAfterRender(x,U,V,H,O,rt)}function ve(A,U,V){U.isScene!==!0&&(U=Qt);let H=Ct.get(A),O=p.state.lights,rt=p.state.shadowsArray,st=O.state.version,pt=ft.getParameters(A,O.state,rt,U,V),Mt=ft.getProgramCacheKey(pt),Bt=H.programs;H.environment=A.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(A.isMeshStandardMaterial?G:w).get(A.envMap||H.environment),H.envMapRotation=H.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Bt===void 0&&(A.addEventListener("dispose",Ft),Bt=new Map,H.programs=Bt);let Wt=Bt.get(Mt);if(Wt!==void 0){if(H.currentProgram===Wt&&H.lightsStateVersion===st)return ue(A,pt),Wt}else pt.uniforms=ft.getUniforms(A),A.onBeforeCompile(pt,x),Wt=ft.acquireProgram(pt,Mt),Bt.set(Mt,Wt),H.uniforms=pt.uniforms;let bt=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(bt.clippingPlanes=it.uniform),ue(A,pt),H.needsLights=xn(A),H.lightsStateVersion=st,H.needsLights&&(bt.ambientLightColor.value=O.state.ambient,bt.lightProbe.value=O.state.probe,bt.directionalLights.value=O.state.directional,bt.directionalLightShadows.value=O.state.directionalShadow,bt.spotLights.value=O.state.spot,bt.spotLightShadows.value=O.state.spotShadow,bt.rectAreaLights.value=O.state.rectArea,bt.ltc_1.value=O.state.rectAreaLTC1,bt.ltc_2.value=O.state.rectAreaLTC2,bt.pointLights.value=O.state.point,bt.pointLightShadows.value=O.state.pointShadow,bt.hemisphereLights.value=O.state.hemi,bt.directionalShadowMap.value=O.state.directionalShadowMap,bt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,bt.spotShadowMap.value=O.state.spotShadowMap,bt.spotLightMatrix.value=O.state.spotLightMatrix,bt.spotLightMap.value=O.state.spotLightMap,bt.pointShadowMap.value=O.state.pointShadowMap,bt.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Wt,H.uniformsList=null,Wt}function xe(A){if(A.uniformsList===null){let U=A.currentProgram.getUniforms();A.uniformsList=Gs.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function ue(A,U){let V=Ct.get(A);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Hn(A,U,V,H,O){U.isScene!==!0&&(U=Qt),C.resetTextureUnits();let rt=U.fog,st=H.isMeshStandardMaterial?U.environment:null,pt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Qs,Mt=(H.isMeshStandardMaterial?G:w).get(H.envMap||st),Bt=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Wt=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),bt=!!V.morphAttributes.position,Yt=!!V.morphAttributes.normal,ce=!!V.morphAttributes.color,fe=gr;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(fe=x.toneMapping);let Ge=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,de=Ge!==void 0?Ge.length:0,It=Ct.get(H),Di=p.state.lights;if(et===!0&&(vt===!0||A!==y)){let jn=A===y&&H.id===S;it.setState(H,A,jn)}let pe=!1;H.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Di.state.version||It.outputColorSpace!==pt||O.isBatchedMesh&&It.batching===!1||!O.isBatchedMesh&&It.batching===!0||O.isBatchedMesh&&It.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&It.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&It.instancing===!1||!O.isInstancedMesh&&It.instancing===!0||O.isSkinnedMesh&&It.skinning===!1||!O.isSkinnedMesh&&It.skinning===!0||O.isInstancedMesh&&It.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&It.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&It.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&It.instancingMorph===!1&&O.morphTexture!==null||It.envMap!==Mt||H.fog===!0&&It.fog!==rt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==it.numPlanes||It.numIntersection!==it.numIntersection)||It.vertexAlphas!==Bt||It.vertexTangents!==Wt||It.morphTargets!==bt||It.morphNormals!==Yt||It.morphColors!==ce||It.toneMapping!==fe||It.morphTargetsCount!==de)&&(pe=!0):(pe=!0,It.__version=H.version);let hi=It.currentProgram;pe===!0&&(hi=ve(H,U,O));let bs=!1,Gn=!1,Mo=!1,Te=hi.getUniforms(),yi=It.uniforms;if(Tt.useProgram(hi.program)&&(bs=!0,Gn=!0,Mo=!0),H.id!==S&&(S=H.id,Gn=!0),bs||y!==A){Tt.buffers.depth.getReversed()?(nt.copy(A.projectionMatrix),Y_(nt),q_(nt),Te.setValue(D,"projectionMatrix",nt)):Te.setValue(D,"projectionMatrix",A.projectionMatrix),Te.setValue(D,"viewMatrix",A.matrixWorldInverse);let sr=Te.map.cameraPosition;sr!==void 0&&sr.setValue(D,At.setFromMatrixPosition(A.matrixWorld)),k.logarithmicDepthBuffer&&Te.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Te.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,Gn=!0,Mo=!0)}if(O.isSkinnedMesh){Te.setOptional(D,O,"bindMatrix"),Te.setOptional(D,O,"bindMatrixInverse");let jn=O.skeleton;jn&&(jn.boneTexture===null&&jn.computeBoneTexture(),Te.setValue(D,"boneTexture",jn.boneTexture,C))}O.isBatchedMesh&&(Te.setOptional(D,O,"batchingTexture"),Te.setValue(D,"batchingTexture",O._matricesTexture,C),Te.setOptional(D,O,"batchingIdTexture"),Te.setValue(D,"batchingIdTexture",O._indirectTexture,C),Te.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Te.setValue(D,"batchingColorTexture",O._colorsTexture,C));let So=V.morphAttributes;if((So.position!==void 0||So.normal!==void 0||So.color!==void 0)&&Dt.update(O,V,hi),(Gn||It.receiveShadow!==O.receiveShadow)&&(It.receiveShadow=O.receiveShadow,Te.setValue(D,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(yi.envMap.value=Mt,yi.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(yi.envMapIntensity.value=U.environmentIntensity),Gn&&(Te.setValue(D,"toneMappingExposure",x.toneMappingExposure),It.needsLights&&we(yi,Mo),rt&&H.fog===!0&&lt.refreshFogUniforms(yi,rt),lt.refreshMaterialUniforms(yi,H,z,Y,p.state.transmissionRenderTarget[A.id]),Gs.upload(D,xe(It),yi,C)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Gs.upload(D,xe(It),yi,C),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Te.setValue(D,"center",O.center),Te.setValue(D,"modelViewMatrix",O.modelViewMatrix),Te.setValue(D,"normalMatrix",O.normalMatrix),Te.setValue(D,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let jn=H.uniformsGroups;for(let sr=0,or=jn.length;sr<or;sr++){let dd=jn[sr];L.update(dd,hi),L.bind(dd,hi)}}return hi}function we(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function xn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,U,V){Ct.get(A.texture).__webglTexture=U,Ct.get(A.depthTexture).__webglTexture=V;let H=Ct.get(A);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,U){let V=Ct.get(A);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,V=0){R=A,b=U,T=V;let H=!0,O=null,rt=!1,st=!1;if(A){let Mt=Ct.get(A);if(Mt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(Mt.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(Mt.__hasExternalTextures)C.rebindTextures(A,Ct.get(A.texture).__webglTexture,Ct.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let bt=A.depthTexture;if(Mt.__boundDepthTexture!==bt){if(bt!==null&&Ct.has(bt)&&(A.width!==bt.image.width||A.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}let Bt=A.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(st=!0);let Wt=Ct.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[U])?O=Wt[U][V]:O=Wt[U],rt=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?O=Ct.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?O=Wt[V]:O=Wt,I.copy(A.viewport),N.copy(A.scissor),F=A.scissorTest}else I.copy(at).multiplyScalar(z).floor(),N.copy(Pt).multiplyScalar(z).floor(),F=Kt;if(Tt.bindFramebuffer(D.FRAMEBUFFER,O)&&H&&Tt.drawBuffers(A,O),Tt.viewport(I),Tt.scissor(N),Tt.setScissorTest(F),rt){let Mt=Ct.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,V)}else if(st){let Mt=Ct.get(A.texture),Bt=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.__webglTexture,V||0,Bt)}S=-1},this.readRenderTargetPixels=function(A,U,V,H,O,rt,st){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&st!==void 0&&(pt=pt[st]),pt){Tt.bindFramebuffer(D.FRAMEBUFFER,pt);try{let Mt=A.texture,Bt=Mt.format,Wt=Mt.type;if(!k.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-H&&V>=0&&V<=A.height-O&&D.readPixels(U,V,H,O,Nt.convert(Bt),Nt.convert(Wt),rt)}finally{let Mt=R!==null?Ct.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(A,U,V,H,O,rt,st){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&st!==void 0&&(pt=pt[st]),pt){let Mt=A.texture,Bt=Mt.format,Wt=Mt.type;if(!k.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=A.width-H&&V>=0&&V<=A.height-O){Tt.bindFramebuffer(D.FRAMEBUFFER,pt);let bt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,bt),D.bufferData(D.PIXEL_PACK_BUFFER,rt.byteLength,D.STREAM_READ),D.readPixels(U,V,H,O,Nt.convert(Bt),Nt.convert(Wt),0);let Yt=R!==null?Ct.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,Yt);let ce=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await X_(D,ce,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,bt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,rt),D.deleteBuffer(bt),D.deleteSync(ce),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,U=null,V=0){A.isTexture!==!0&&(Io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,A=arguments[1]);let H=Math.pow(2,-V),O=Math.floor(A.image.width*H),rt=Math.floor(A.image.height*H),st=U!==null?U.x:0,pt=U!==null?U.y:0;C.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,st,pt,O,rt),Tt.unbindTexture()},this.copyTextureToTexture=function(A,U,V=null,H=null,O=0){A.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1],U=arguments[2],O=arguments[3]||0,V=null);let rt,st,pt,Mt,Bt,Wt,bt,Yt,ce,fe=A.isCompressedTexture?A.mipmaps[O]:A.image;V!==null?(rt=V.max.x-V.min.x,st=V.max.y-V.min.y,pt=V.isBox3?V.max.z-V.min.z:1,Mt=V.min.x,Bt=V.min.y,Wt=V.isBox3?V.min.z:0):(rt=fe.width,st=fe.height,pt=fe.depth||1,Mt=0,Bt=0,Wt=0),H!==null?(bt=H.x,Yt=H.y,ce=H.z):(bt=0,Yt=0,ce=0);let Ge=Nt.convert(U.format),de=Nt.convert(U.type),It;U.isData3DTexture?(C.setTexture3D(U,0),It=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(C.setTexture2DArray(U,0),It=D.TEXTURE_2D_ARRAY):(C.setTexture2D(U,0),It=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let Di=D.getParameter(D.UNPACK_ROW_LENGTH),pe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),hi=D.getParameter(D.UNPACK_SKIP_PIXELS),bs=D.getParameter(D.UNPACK_SKIP_ROWS),Gn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,fe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Mt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Bt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Wt);let Mo=A.isDataArrayTexture||A.isData3DTexture,Te=U.isDataArrayTexture||U.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let yi=Ct.get(A),So=Ct.get(U),jn=Ct.get(yi.__renderTarget),sr=Ct.get(So.__renderTarget);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,jn.__webglFramebuffer),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,sr.__webglFramebuffer);for(let or=0;or<pt;or++)Mo&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.get(A).__webglTexture,O,Wt+or),A.isDepthTexture?(Te&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.get(U).__webglTexture,O,ce+or),D.blitFramebuffer(Mt,Bt,rt,st,bt,Yt,rt,st,D.DEPTH_BUFFER_BIT,D.NEAREST)):Te?D.copyTexSubImage3D(It,O,bt,Yt,ce+or,Mt,Bt,rt,st):D.copyTexSubImage2D(It,O,bt,Yt,ce+or,Mt,Bt,rt,st);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Te?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(It,O,bt,Yt,ce,rt,st,pt,Ge,de,fe.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(It,O,bt,Yt,ce,rt,st,pt,Ge,fe.data):D.texSubImage3D(It,O,bt,Yt,ce,rt,st,pt,Ge,de,fe):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,bt,Yt,rt,st,Ge,de,fe.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,bt,Yt,fe.width,fe.height,Ge,fe.data):D.texSubImage2D(D.TEXTURE_2D,O,bt,Yt,rt,st,Ge,de,fe);D.pixelStorei(D.UNPACK_ROW_LENGTH,Di),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,hi),D.pixelStorei(D.UNPACK_SKIP_ROWS,bs),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Gn),O===0&&U.generateMipmaps&&D.generateMipmap(It),Tt.unbindTexture()},this.copyTextureToTexture3D=function(A,U,V=null,H=null,O=0){return A.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,H=arguments[1]||null,A=arguments[2],U=arguments[3],O=arguments[4]||0),Io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,U,V,H,O)},this.initRenderTarget=function(A){Ct.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),Tt.unbindTexture()},this.resetState=function(){b=0,T=0,R=null,Tt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var dl=class extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var cu=class extends Nn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Yn,h=Yn,f,d){super(null,o,a,l,c,h,i,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Js=class extends qn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Bs=new ye,dp=new ye,Wa=[],pp=new Xi,VM=new ye,Co=new bn,Ro=new yr,pl=class extends bn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Js(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,VM)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bs),pp.copy(t.boundingBox).applyMatrix4(Bs),this.boundingBox.union(pp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bs),Ro.copy(t.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Ro)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Co.geometry=this.geometry,Co.material=this.material,Co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(n),t.ray.intersectsSphere(Ro)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Bs),dp.multiplyMatrices(n,Bs),Co.matrixWorld=dp,Co.raycast(t,Wa);for(let o=0,a=Wa.length;o<a;o++){let l=Wa[o];l.instanceId=s,l.object=this,e.push(l)}Wa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Js(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new cu(new Float32Array(i*this.count),i,this.count,Cu,bi));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var hu=class extends qr{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ml=new B,gl=new B,mp=new ye,Po=new Oo,Xa=new yr,ih=new B,gp=new B,uu=class extends ni{constructor(t=new wi,e=new hu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)ml.fromBufferAttribute(e,i-1),gl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ml.distanceTo(gl);t.setAttribute("lineDistance",new fn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(i),Xa.radius+=s,t.ray.intersectsSphere(Xa)===!1)return;mp.copy(i).invert(),Po.copy(t.ray).applyMatrix4(mp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=u,m=_-1;g<m;g+=c){let p=h.getX(g),v=h.getX(g+1),M=Ya(this,t,Po,l,p,v);M&&e.push(M)}if(this.isLineLoop){let g=h.getX(_-1),m=h.getX(u),p=Ya(this,t,Po,l,g,m);p&&e.push(p)}}else{let u=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=u,m=_-1;g<m;g+=c){let p=Ya(this,t,Po,l,g,g+1);p&&e.push(p)}if(this.isLineLoop){let g=Ya(this,t,Po,l,_-1,u);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ya(r,t,e,n,i,s){let o=r.geometry.attributes.position;if(ml.fromBufferAttribute(o,i),gl.fromBufferAttribute(o,s),e.distanceSqToSegment(ml,gl,ih,gp)>n)return;ih.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(ih);if(!(l<t.near||l>t.far))return{distance:l,point:gp.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var _p=new B,vp=new B,_l=class extends uu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)_p.fromBufferAttribute(e,i),vp.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_p.distanceTo(vp);t.setAttribute("lineDistance",new fn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ko=class extends Nn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fu=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],d=n[i+1]-h,u=(o-h)/d;return(i+u)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new he:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new B,i=[],s=[],o=[],a=new B,l=new ye;for(let u=0;u<=t;u++){let _=u/t;i[u]=this.getTangentAt(_,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let u=1;u<=t;u++){if(s[u]=s[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(un(i[u-1].dot(i[u]),-1,1));s[u].applyMatrix4(l.makeRotationAxis(a,_))}o[u].crossVectors(i[u],s[u])}if(e===!0){let u=Math.acos(un(s[0].dot(s[t]),-1,1));u/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(u=-u);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],u*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function HM(r,t){let e=1-r;return e*e*e*t}function GM(r,t){let e=1-r;return 3*e*e*r*t}function WM(r,t){return 3*(1-r)*r*r*t}function XM(r,t){return r*r*r*t}function rh(r,t,e,n,i){return HM(r,t)+GM(r,e)+WM(r,n)+XM(r,i)}var vl=class extends fu{constructor(t=new B,e=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new B){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(rh(t,i.x,s.x,o.x,a.x),rh(t,i.y,s.y,o.y,a.y),rh(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}};function qa(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function YM(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Ks=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},du=class extends Ks{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_d,endingEnd:_d}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case vd:s=t,a=2*e-n;break;case xd:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vd:o=t,l=2*n-e;break;case xd:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,M=(-1-u)*m+(1.5+u)*g+.5*_,x=u*m-u*g;for(let E=0;E!==a;++E)s[E]=p*o[h+E]+v*o[c+E]+M*o[l+E]+x*o[f+E];return s}},pu=class extends Ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),f=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*h;return s}},mu=class extends Ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},mi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qa(e,this.TimeBufferType),this.values=qa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qa(t.times,Array),values:qa(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new du(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ja:e=this.InterpolantFactoryMethodDiscrete;break;case Wh:e=this.InterpolantFactoryMethodLinear;break;case Cc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ja;case this.InterpolantFactoryMethodLinear:return Wh;case this.InterpolantFactoryMethodSmooth:return Cc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&YM(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Cc,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let f=a*n,d=f-n,u=f+n;for(let _=0;_!==n;++_){let g=e[f+_];if(g!==e[d+_]||g!==e[u+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=Wh;var Zr=class extends mi{constructor(t,e,n){super(t,e,n)}};Zr.prototype.ValueTypeName="bool";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=ja;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var gu=class extends mi{};gu.prototype.ValueTypeName="color";var _u=class extends mi{};_u.prototype.ValueTypeName="number";var vu=class extends Ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)xr.slerpFlat(s,0,o,c-a,o,c,l);return s}},xl=class extends mi{InterpolantFactoryMethodLinear(t){return new vu(this.times,this.values,this.getValueSize(),t)}};xl.prototype.ValueTypeName="quaternion";xl.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends mi{constructor(t,e,n){super(t,e,n)}};Jr.prototype.ValueTypeName="string";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=ja;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var xu=class extends mi{};xu.prototype.ValueTypeName="vector";var yu=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],_=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return _}return null}}},qM=new yu,Mu=class{constructor(t){this.manager=t!==void 0?t:qM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Mu.DEFAULT_MATERIAL_NAME="__DEFAULT";var yl=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=xp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function xp(){return performance.now()}var Du="\\[\\]\\.:\\/",$M=new RegExp("["+Du+"]","g"),Uu="[^"+Du+"]",ZM="[^"+Du.replace("\\.","")+"]",JM=/((?:WC+[\/:])*)/.source.replace("WC",Uu),KM=/(WCOD+)?/.source.replace("WCOD",ZM),QM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uu),jM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uu),tS=new RegExp("^"+JM+KM+QM+jM+"$"),eS=["material","materials","bones","map"],Su=class{constructor(t,e,n){let i=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($M,"")}static parseTrackName(t){let e=tS.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);eS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Su;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var I1=new Float32Array(1);var yp=new ye,Ml=class{constructor(t,e,n=0,i=1/0){this.ray=new Oo(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yp),this}intersectObject(t,e=!0,n=[]){return bu(t,this,n,e),n.sort(Mp),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)bu(t[i],this,n,e);return n.sort(Mp),n}};function Mp(r,t){return r.distance-t.distance}function bu(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)bu(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wu);function qi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Jp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},eo={duration:.5,overwrite:!1,delay:0},ju,dn,Re,ri=1e8,be=1/ri,Hu=Math.PI*2,iS=Hu/4,rS=0,Kp=Math.sqrt,sS=Math.cos,oS=Math.sin,Ke=function(t){return typeof t=="string"},Oe=function(t){return typeof t=="function"},Zi=function(t){return typeof t=="number"},Ul=function(t){return typeof t>"u"},Ai=function(t){return typeof t=="object"},kn=function(t){return t!==!1},tf=function(){return typeof window<"u"},Tl=function(t){return Oe(t)||Ke(t)},Qp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pn=Array.isArray,Gu=/(?:-?\.?\d|\.)+/gi,ef=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,es=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Nu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nf=/[+-]=-?[.\d]+/,jp=/[^,'"\[\]\s]+/gi,aS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ie,Ti,Wu,rf,Zn={},Rl={},tm,em=function(t){return(Rl=ts(t,Zn))&&mn},Nl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},qo=function(t,e){return!e&&console.warn(t)},nm=function(t,e){return t&&(Zn[t]=e)&&Rl&&(Rl[t]=e)||Zn},$o=function(){return 0},lS={suppressEvents:!0,isStart:!0,kill:!1},El={suppressEvents:!0,kill:!1},cS={suppressEvents:!0},sf={},Sr=[],Xu={},im,Fn={},Ou={},Gp=30,Al=[],of="",af=function(t){var e=t[0],n,i;if(Ai(e)||Oe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Al.length;i--&&!Al[i].targetTest(e););n=Al[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new hf(t[i],n)))||t.splice(i,1);return t},br=function(t){return t._gsap||af(si(t))[0]._gsap},lf=function(t,e,n){return(n=t[e])&&Oe(n)?t[e]():Ul(n)&&t.getAttribute&&t.getAttribute(e)||n},wn=function(t,e){return(t=t.split(",")).forEach(e)||t},Fe=function(t){return Math.round(t*1e5)/1e5||0},tn=function(t){return Math.round(t*1e7)/1e7||0},ns=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},hS=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Pl=function(){var t=Sr.length,e=Sr.slice(0),n,i;for(Xu={},Sr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},rm=function(t,e,n,i){Sr.length&&!dn&&Pl(),t.render(e,n,i||dn&&e<0&&(t._initted||t._startAt)),Sr.length&&!dn&&Pl()},sm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(jp).length<2?e:Ke(t)?t.trim():t},om=function(t){return t},oi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},uS=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ts=function(t,e){for(var n in e)t[n]=e[n];return t},Wp=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ai(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Il=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Wo=function(t){var e=t.parent||Ie,n=t.keyframes?uS(pn(t.keyframes)):oi;if(kn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},fS=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},am=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Ol=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},wr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Kr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},dS=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Yu=function(t,e,n,i){return t._startAt&&(dn?t._startAt.revert(El):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},pS=function r(t){return!t||t._ts&&r(t.parent)},Xp=function(t){return t._repeat?no(t._tTime,t=t.duration()+t._rDelay)*t:0},no=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Ll=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Fl=function(t){return t._end=tn(t._start+(t._tDur/Math.abs(t._ts||t._rts||be)||0))},Bl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=tn(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Fl(t),n._dirty||Kr(n,t)),t},lm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ll(t.rawTime(),e),(!e._dur||Ko(0,e.totalDuration(),n)-e._tTime>be)&&e.render(n,!0)),Kr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-be}},Ei=function(t,e,n,i){return e.parent&&wr(e),e._start=tn((Zi(n)?n:n||t!==Ie?ii(t,n,e):t._time)+e._delay),e._end=tn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),am(t,e,"_first","_last",t._sort?"_start":0),qu(e)||(t._recent=e),i||lm(t,e),t._ts<0&&Bl(t,t._tTime),t},cm=function(t,e){return(Zn.ScrollTrigger||Nl("scrollTrigger",e))&&Zn.ScrollTrigger.create(e,t)},hm=function(t,e,n,i,s){if(df(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!dn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&im!==Bn.frame)return Sr.push(t),t._lazy=[s,i],1},mS=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},qu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},gS=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&mS(t)&&!(!t._initted&&qu(t))||(t._ts<0||t._dp._ts<0)&&!qu(t))?0:1,a=t._rDelay,l=0,c,h,f;if(a&&t._repeat&&(l=Ko(0,t._tDur,e),h=no(l,a),t._yoyo&&h&1&&(o=1-o),h!==no(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||dn||i||t._zTime===be||!e&&t._zTime){if(!t._initted&&hm(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?be:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Yu(t,e,n,!0),t._onUpdate&&!n&&$n(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&$n(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&wr(t,1),!n&&!dn&&($n(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},_S=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},io=function(t,e,n,i){var s=t._repeat,o=tn(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:tn(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Bl(t,t._tTime=t._tDur*a),t.parent&&Fl(t),n||Kr(t.parent,t),t},Yp=function(t){return t instanceof rn?Kr(t):io(t,t._dur)},vS={_start:0,endTime:$o,totalDuration:$o},ii=function r(t,e,n){var i=t.labels,s=t._recent||vS,o=t.duration()>=ri?s.endTime(!1):t._dur,a,l,c;return Ke(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(pn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Xo=function(t,e,n){var i=Zi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=kn(l.vars.inherit)&&l.parent;o.immediateRender=kn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new He(e[0],o,e[s+1])},Tr=function(t,e){return t||t===0?e(t):e},Ko=function(t,e,n){return n<t?t:n>e?e:n},sn=function(t,e){return!Ke(t)||!(e=aS.exec(t))?"":e[1]},xS=function(t,e,n){return Tr(n,function(i){return Ko(t,e,i)})},$u=[].slice,um=function(t,e){return t&&Ai(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ai(t[0]))&&!t.nodeType&&t!==Ti},yS=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ke(i)&&!e||um(i,1)?(s=n).push.apply(s,si(i)):n.push(i)})||n},si=function(t,e,n){return Re&&!e&&Re.selector?Re.selector(t):Ke(t)&&!n&&(Wu||!ro())?$u.call((e||rf).querySelectorAll(t),0):pn(t)?yS(t,n):um(t)?$u.call(t,0):t?[t]:[]},Zu=function(t){return t=si(t)[0]||qo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return si(e,n.querySelectorAll?n:n===t?qo("Invalid scope")||rf.createElement("div"):t)}},fm=function(t){return t.sort(function(){return .5-Math.random()})},dm=function(t){if(Oe(t))return t;var e=Ai(t)?t:{each:t},n=Qr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,f=i;return Ke(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(d,u,_){var g=(_||e).length,m=o[g],p,v,M,x,E,b,T,R,S;if(!m){if(S=e.grid==="auto"?0:(e.grid||[1,ri])[1],!S){for(T=-ri;T<(T=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],p=l?Math.min(S,g)*h-.5:i%S,v=S===ri?0:l?g*f/S-.5:i/S|0,T=0,R=ri,b=0;b<g;b++)M=b%S-p,x=v-(b/S|0),m[b]=E=c?Math.abs(c==="y"?x:M):Kp(M*M+x*x),E>T&&(T=E),E<R&&(R=E);i==="random"&&fm(m),m.max=T-R,m.min=R,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=sn(e.amount||e.each)||0,n=n&&g<0?Sm(n):n}return g=(m[d]-m.min)/m.max||0,tn(m.b+(n?n(g):g)*m.v)+m.u}},Ju=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=tn(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Zi(n)?0:sn(n))}},pm=function(t,e){var n=pn(t),i,s;return!n&&Ai(t)&&(i=n=t.radius||ri,t.values?(t=si(t.values),(s=!Zi(t[0]))&&(i*=i)):t=Ju(t.increment)),Tr(e,n?Oe(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ri,h=0,f=t.length,d,u;f--;)s?(d=t[f].x-a,u=t[f].y-l,d=d*d+u*u):d=Math.abs(t[f]-a),d<c&&(c=d,h=f);return h=!i||c<=i?t[h]:o,s||h===o||Zi(o)?h:h+sn(o)}:Ju(t))},mm=function(t,e,n,i){return Tr(pn(t)?!e:n===!0?!!(n=0):!i,function(){return pn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},MS=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},SS=function(t,e){return function(n){return t(parseFloat(n))+(e||sn(n))}},bS=function(t,e,n){return _m(t,e,0,1,n)},gm=function(t,e,n){return Tr(n,function(i){return t[~~e(i)]})},wS=function r(t,e,n){var i=e-t;return pn(t)?gm(t,r(0,t.length),e):Tr(n,function(s){return(i+(s-t)%i)%i+t})},TS=function r(t,e,n){var i=e-t,s=i*2;return pn(t)?gm(t,r(0,t.length-1),e):Tr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},so=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?jp:Gu),n+=t.substr(e,i-e)+mm(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},_m=function(t,e,n,i,s){var o=e-t,a=i-n;return Tr(s,function(l){return n+((l-t)/o*a||0)})},ES=function r(t,e,n,i){var s=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!s){var o=Ke(t),a={},l,c,h,f,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(pn(t)&&!pn(e)){for(h=[],f=t.length,d=f-2,c=1;c<f;c++)h.push(r(t[c-1],t[c]));f--,s=function(_){_*=f;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=ts(pn(t)?[]:{},t));if(!h){for(l in e)uf.call(a,t,l,"get",e[l]);s=function(_){return gf(_,a)||(o?t.p:t)}}}return Tr(n,s)},qp=function(t,e,n){var i=t.labels,s=ri,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},$n=function(t,e,n){var i=t.vars,s=i[e],o=Re,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Sr.length&&Pl(),a&&(Re=a),h=l?s.apply(c,l):s.call(c),Re=o,h},Ho=function(t){return wr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!dn),t.progress()<1&&$n(t,"onInterrupt"),t},to,vm=[],xm=function(t){if(t)if(t=!t.name&&t.default||t,tf()||t.headless){var e=t.name,n=Oe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:$o,render:gf,add:uf,kill:HS,modifier:VS,rawVars:0},o={targetTest:0,get:0,getSetter:kl,aliases:{},register:0};if(ro(),t!==i){if(Fn[e])return;oi(i,oi(Il(t,s),o)),ts(i.prototype,ts(s,Il(t,o))),Fn[i.prop=e]=i,t.targetTest&&(Al.push(i),sf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}nm(e,i),t.register&&t.register(mn,i,Tn)}else vm.push(t)},Me=255,Go={aqua:[0,Me,Me],lime:[0,Me,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Me],navy:[0,0,128],white:[Me,Me,Me],olive:[128,128,0],yellow:[Me,Me,0],orange:[Me,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Me,0,0],pink:[Me,192,203],cyan:[0,Me,Me],transparent:[Me,Me,Me,0]},Fu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Me+.5|0},ym=function(t,e,n){var i=t?Zi(t)?[t>>16,t>>8&Me,t&Me]:0:Go.black,s,o,a,l,c,h,f,d,u,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Go[t])i=Go[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Me,i&Me,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Me,t&Me]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Gu),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Fu(l+1/3,s,o),i[1]=Fu(l,s,o),i[2]=Fu(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(ef),n&&i.length<4&&(i[3]=1),i}else i=t.match(Gu)||Go.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Me,o=i[1]/Me,a=i[2]/Me,f=Math.max(s,o,a),d=Math.min(s,o,a),h=(f+d)/2,f===d?l=c=0:(u=f-d,c=h>.5?u/(2-f-d):u/(f+d),l=f===s?(o-a)/u+(o<a?6:0):f===o?(a-s)/u+2:(s-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Mm=function(t){var e=[],n=[],i=-1;return t.split($i).forEach(function(s){var o=s.match(es)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},$p=function(t,e,n){var i="",s=(t+i).match($i),o=e?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return t;if(s=s.map(function(d){return(d=ym(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Mm(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace($i,"1").split(es),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split($i),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},$i=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Go)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),AS=/hsl[a]?\(/,cf=function(t){var e=t.join(" "),n;if($i.lastIndex=0,$i.test(e))return n=AS.test(e),t[1]=$p(t[1],n),t[0]=$p(t[0],n,Mm(t[1])),!0},Zo,Bn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,d,u,_=function g(m){var p=r()-i,v=m===!0,M,x,E,b;if((p>t||p<0)&&(n+=p-e),i+=p,E=i-n,M=E-o,(M>0||v)&&(b=++f.frame,d=E-f.time*1e3,f.time=E=E/1e3,o+=M+(M>=s?4:s-M),x=1),v||(l=c(g)),x)for(u=0;u<a.length;u++)a[u](E,d,b,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){tm&&(!Wu&&tf()&&(Ti=Wu=window,rf=Ti.document||{},Zn.gsap=mn,(Ti.gsapVersions||(Ti.gsapVersions=[])).push(mn.version),em(Rl||Ti.GreenSockGlobals||!Ti.gsap&&Ti||{}),vm.forEach(xm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Zo=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Zo=0,c=$o},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,v){var M=p?function(x,E,b,T){m(x,E,b,T),f.remove(M)}:m;return f.remove(m),a[v?"unshift":"push"](M),ro(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&u>=p&&u--},_listeners:a},f}(),ro=function(){return!Zo&&Bn.wake()},ie={},CS=/^[\d.\-M][\d.\-,\s]/,RS=/["']/g,PS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(RS,"").trim():+c,i=l.substr(a+1).trim();return e},IS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},LS=function(t){var e=(t+"").split("("),n=ie[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[PS(e[1])]:IS(t).split(",").map(sm)):ie._CE&&CS.test(t)?ie._CE("",t):n},Sm=function(t){return function(e){return 1-t(1-e)}},bm=function r(t,e){for(var n=t._first,i;n;)n instanceof rn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Qr=function(t,e){return t&&(Oe(t)?t:ie[t]||LS(t))||e},is=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return wn(t,function(a){ie[a]=Zn[a]=s,ie[o=a.toLowerCase()]=n;for(var l in s)ie[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ie[a+"."+l]=s[l]}),s},wm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Bu=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Hu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*oS((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:wm(a);return s=Hu/s,l.config=function(c,h){return r(t,c,h)},l},ku=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:wm(n);return i.config=function(s){return r(t,s)},i};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;is(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ie.Linear.easeNone=ie.none=ie.Linear.easeIn;is("Elastic",Bu("in"),Bu("out"),Bu());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};is("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);is("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});is("Circ",function(r){return-(Kp(1-r*r)-1)});is("Sine",function(r){return r===1?1:-sS(r*iS)+1});is("Back",ku("in"),ku("out"),ku());ie.SteppedEase=ie.steps=Zn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-be;return function(a){return((i*Ko(0,o,a)|0)+s)*n}}};eo.ease=ie["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return of+=r+","+r+"Params,"});var hf=function(t,e){this.id=rS++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:lf,this.set=e?e.getSetter:kl},Jo=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,io(this,+e.duration,1,1),this.data=e.data,Re&&(this._ctx=Re,Re.data.push(this)),Zo||Bn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,io(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ro(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Bl(this,n),!s._dp||s.parent||lm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ei(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===be||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),rm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Xp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Xp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?no(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-be?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ll(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-be?0:this._rts,this.totalTime(Ko(-Math.abs(this._delay),this._tDur,s),i!==!1),Fl(this),dS(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ro(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==be&&(this._tTime-=be)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ei(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ll(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=cS);var i=dn;return dn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),dn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Yp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Yp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ii(this,n),kn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,kn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-be:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-be,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-be)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Oe(n)?n:om,a=function(){var c=i.then;i.then=null,Oe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Ho(this)},r}();oi(Jo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-be,_prom:0,_ps:!1,_rts:1});var rn=function(r){Jp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=kn(n.sortChildren),Ie&&Ei(n.parent||Ie,qi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&cm(qi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Xo(0,arguments,this),this},e.from=function(i,s,o){return Xo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Xo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Wo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new He(i,s,ii(this,o),1),this},e.call=function(i,s,o){return Ei(this,He.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new He(i,o,ii(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Wo(o).immediateRender=kn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,Wo(a).immediateRender=kn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:tn(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,u,_,g,m,p,v,M,x,E,b,T;if(this!==Ie&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,x=this._start,M=this._ts,p=!M,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=tn(h%m),h===l?(g=this._repeat,d=c):(g=~~(h/m),g&&g===h/m&&(d=c,g--),d>c&&(d=c)),E=no(this._tTime,m),!a&&this._tTime&&E!==g&&this._tTime-E*m-this._dur<=0&&(E=g),b&&g&1&&(d=c-d,T=1),g!==E&&!this._lock){var R=b&&E&1,S=R===(b&&g&1);if(g<E&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(T?0:tn(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&$n(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;bm(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=_S(this,tn(a),tn(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!g&&($n(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(u=this._first;u;){if(_=u._next,(u._act||d>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,s,o);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,s,o),d!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=-be);break}}u=_}else{u=this._last;for(var y=i<0?i:d;u;){if(_=u._prev,(u._act||y<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,s,o);if(u.render(u._ts>0?(y-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(y-u._start)*u._ts,s,o||dn&&(u._initted||u._startAt)),d!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=y?-be:be);break}}u=_}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-be)._zTime=d>=a?1:-1,this._ts))return this._start=x,Fl(this),this.render(i,s,o);this._onUpdate&&!s&&$n(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&wr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&($n(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Zi(s)||(s=ii(this,s,i)),!(i instanceof Jo)){if(pn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ke(i))return this.addLabel(i,s);if(Oe(i))i=He.delayedCall(0,i);else return this}return this!==i?Ei(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ri);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof He?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Ke(i)?this.removeLabel(i):Oe(i)?this.killTweensOf(i):(Ol(this,i),i===this._recent&&(this._recent=this._last),Kr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=tn(Bn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=ii(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=He.delayedCall(0,s||$o,o);return a.data="isPause",this._hasPause=1,Ei(this,a,ii(this,i))},e.removePause=function(i){var s=this._first;for(i=ii(this,i);s;)s._start===i&&s.data==="isPause"&&wr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Mr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=si(i),l=this._first,c=Zi(s),h;l;)l instanceof He?hS(l._targets,a)&&(c?(!Mr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=ii(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,u,_=He.to(o,oi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||be,onStart:function(){if(o.pause(),!u){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&io(_,m,0,1).render(_._time,!0,!0),u=1}h&&h.apply(_,f||[])}},s));return d?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,oi({startAt:{time:ii(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),qp(this,ii(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),qp(this,ii(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+be)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Kr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Kr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=ri,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ei(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;io(o,o===Ie&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ie._ts&&(rm(Ie,Ll(i,Ie)),im=Bn.frame),Bn.frame>=Gp){Gp+=zn.autoSleep||120;var s=Ie._first;if((!s||!s._ts)&&zn.autoSleep&&Bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Bn.sleep()}}},t}(Jo);oi(rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var DS=function(t,e,n,i,s,o,a){var l=new Tn(this._pt,t,e,0,1,mf,null,s),c=0,h=0,f,d,u,_,g,m,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=so(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),d=n.match(Nu)||[];f=Nu.exec(i);)_=f[0],g=i.substring(c,f.index),u?u=(u+1)%5:g.substr(-5)==="rgba("&&(u=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?ns(m,_)-m:parseFloat(_)-m,m:u&&u<4?Math.round:0},c=Nu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(nf.test(i)||p)&&(l.e=0),this._pt=l,l},uf=function(t,e,n,i,s,o,a,l,c,h){Oe(i)&&(i=i(s||0,t,o));var f=t[e],d=n!=="get"?n:Oe(f)?c?t[e.indexOf("set")||!Oe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,u=Oe(f)?c?BS:Am:pf,_;if(Ke(i)&&(~i.indexOf("random(")&&(i=so(i)),i.charAt(1)==="="&&(_=ns(d,i)+(sn(d)||0),(_||_===0)&&(i=_))),!h||d!==i||Ku)return!isNaN(d*i)&&i!==""?(_=new Tn(this._pt,t,e,+d||0,i-(d||0),typeof f=="boolean"?zS:Cm,0,u),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!f&&!(e in t)&&Nl(e,i),DS.call(this,t,e,d,i,u,l||zn.stringFilter,c))},US=function(t,e,n,i,s){if(Oe(t)&&(t=Yo(t,s,e,n,i)),!Ai(t)||t.style&&t.nodeType||pn(t)||Qp(t))return Ke(t)?Yo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Yo(t[a],s,e,n,i);return o},ff=function(t,e,n,i,s,o){var a,l,c,h;if(Fn[t]&&(a=new Fn[t]).init(s,a.rawVars?e[t]:US(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Tn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==to))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Mr,Ku,df=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,d=i.keyframes,u=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,v=p&&p.data==="nested"?p.vars.targets:m,M=t._overwrite==="auto"&&!ju,x=t.timeline,E,b,T,R,S,y,I,N,F,W,Z,X,Y;if(x&&(!d||!s)&&(s="none"),t._ease=Qr(s,eo.ease),t._yEase=f?Sm(Qr(f===!0?s:f,eo.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(N=m[0]?br(m[0]).harness:0,X=N&&i[N.prop],E=Il(i,sf),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!u?g.render(-1,!0):g.revert(h&&_?El:lS),g._lazy=0),o){if(wr(t._startAt=He.set(m,oi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&kn(l),startAt:null,delay:0,onUpdate:c&&function(){return $n(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn||!a&&!u)&&t._startAt.revert(El),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),T=oi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&kn(l),immediateRender:a,stagger:0,parent:p},E),X&&(T[N.prop]=X),wr(t._startAt=He.set(m,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn?t._startAt.revert(El):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,be,be);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&kn(l)||l&&!_,b=0;b<m.length;b++){if(S=m[b],I=S._gsap||af(m)[b]._gsap,t._ptLookup[b]=W={},Xu[I.id]&&Sr.length&&Pl(),Z=v===m?b:v.indexOf(S),N&&(F=new N).init(S,X||E,t,Z,v)!==!1&&(t._pt=R=new Tn(t._pt,S,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(z){W[z]=R}),F.priority&&(y=1)),!N||X)for(T in E)Fn[T]&&(F=ff(T,E,t,Z,S,v))?F.priority&&(y=1):W[T]=R=uf.call(t,S,T,"get",E[T],Z,v,0,i.stringFilter);t._op&&t._op[b]&&t.kill(S,t._op[b]),M&&t._pt&&(Mr=t,Ie.killTweensOf(S,W,t.globalTime(e)),Y=!t.parent,Mr=0),t._pt&&l&&(Xu[I.id]=1)}y&&_f(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,d&&e<=0&&x.render(ri,!0,!0)},NS=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,d,u;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,u=t._targets.length;u--;){if(h=d[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Ku=1,t.vars[e]="+=0",df(t,a),Ku=0,l?qo(e+" not eligible for reset"):1;c.push(h)}for(u=c.length;u--;)f=c[u],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Fe(n)+sn(f.e)),f.b&&(f.b=h.s+sn(f.b))},OS=function(t,e){var n=t[0]?br(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=ts({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},FS=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(pn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Yo=function(t,e,n,i,s){return Oe(t)?t.call(e,n,i,s):Ke(t)&&~t.indexOf("random(")?so(t):t},Tm=of+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Em={};wn(Tm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Em[r]=1});var He=function(r){Jp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Wo(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,u=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,v=i.parent||Ie,M=(pn(n)||Qp(n)?Zi(n[0]):"length"in i)?[n]:si(n),x,E,b,T,R,S,y,I;if(a._targets=M.length?af(M):qo("GSAP target "+n+" not found. https://gsap.com",!zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,_||d||Tl(c)||Tl(h)){if(i=a.vars,x=a.timeline=new rn({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:M}),x.kill(),x.parent=x._dp=qi(a),x._start=0,d||Tl(c)||Tl(h)){if(T=M.length,y=d&&dm(d),Ai(d))for(R in d)~Tm.indexOf(R)&&(I||(I={}),I[R]=d[R]);for(E=0;E<T;E++)b=Il(i,Em),b.stagger=0,p&&(b.yoyoEase=p),I&&ts(b,I),S=M[E],b.duration=+Yo(c,qi(a),E,S,M),b.delay=(+Yo(h,qi(a),E,S,M)||0)-a._delay,!d&&T===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),x.to(S,b,y?y(E,S,M):0),x._ease=ie.none;x.duration()?c=h=0:a.timeline=0}else if(_){Wo(oi(x.vars.defaults,{ease:"none"})),x._ease=Qr(_.ease||i.ease||"none");var N=0,F,W,Z;if(pn(_))_.forEach(function(X){return x.to(M,X,">")}),x.duration();else{b={};for(R in _)R==="ease"||R==="easeEach"||FS(R,_[R],b,_.easeEach);for(R in b)for(F=b[R].sort(function(X,Y){return X.t-Y.t}),N=0,E=0;E<F.length;E++)W=F[E],Z={ease:W.e,duration:(W.t-(E?F[E-1].t:0))/100*c},Z[R]=W.v,x.to(M,Z,N),N+=Z.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return u===!0&&!ju&&(Mr=qi(a),Ie.killTweensOf(M),Mr=0),Ei(v,qi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!_&&a._start===tn(v._time)&&kn(f)&&pS(qi(a))&&v.data!=="nested")&&(a._tTime=-be,a.render(Math.max(0,-h)||0)),m&&cm(qi(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-be&&!h?l:i<be?0:i,d,u,_,g,m,p,v,M,x;if(!c)gS(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=f,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,o);if(d=tn(f%g),f===l?(_=this._repeat,d=c):(_=~~(f/g),_&&_===tn(f/g)&&(d=c,_--),d>c&&(d=c)),p=this._yoyo&&_&1,p&&(x=this._yEase,d=c-d),m=no(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=f,this;_!==m&&(M&&this._yEase&&bm(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(tn(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(hm(this,h?i:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(d/c),this._from&&(this.ratio=v=1-v),d&&!a&&!s&&!_&&($n(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;M&&M.render(i<0?i:M._dur*M._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Yu(this,i,s,o),$n(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&$n(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Yu(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&wr(this,1),!s&&!(h&&!a)&&(f||a||p)&&($n(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Zo||Bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||df(this,c),h=this._ease(c/this._dur),NS(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Bl(this,0),this.parent||am(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ho(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Mr&&Mr.vars.overwrite!==!0)._first||Ho(this),this.parent&&o!==this.timeline.totalDuration()&&io(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?si(i):a,c=this._ptLookup,h=this._pt,f,d,u,_,g,m,p;if((!s||s==="all")&&fS(a,l))return s==="all"&&(this._pt=0),Ho(this);for(f=this._op=this._op||[],s!=="all"&&(Ke(s)&&(g={},wn(s,function(v){return g[v]=1}),s=g),s=OS(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(f[p]=s,_=d,u={}):(u=f[p]=f[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Ol(this,m,"_pt"),delete d[g]),u!=="all"&&(u[g]=1)}return this._initted&&!this._pt&&h&&Ho(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Xo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Xo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ie.killTweensOf(i,s,o)},t}(Jo);oi(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(r){He[r]=function(){var t=new rn,e=$u.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var pf=function(t,e,n){return t[e]=n},Am=function(t,e,n){return t[e](n)},BS=function(t,e,n,i){return t[e](i.fp,n)},kS=function(t,e,n){return t.setAttribute(e,n)},kl=function(t,e){return Oe(t[e])?Am:Ul(t[e])&&t.setAttribute?kS:pf},Cm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},zS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},mf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},gf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},VS=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},HS=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ol(this,e,"_pt"):e.dep||(n=1),e=i;return!n},GS=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},_f=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Tn=function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Cm,this.d=l||this,this.set=c||pf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=GS,this.m=n,this.mt=s,this.tween=i},r}();wn(of+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return sf[r]=1});Zn.TweenMax=Zn.TweenLite=He;Zn.TimelineLite=Zn.TimelineMax=rn;Ie=new rn({sortChildren:!1,defaults:eo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=cf;var jr=[],Cl={},WS=[],Zp=0,XS=0,zu=function(t){return(Cl[t]||WS).map(function(e){return e()})},Qu=function(){var t=Date.now(),e=[];t-Zp>2&&(zu("matchMediaInit"),jr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ti.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),zu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Zp=t,zu("matchMedia"))},Rm=function(){function r(e,n){this.selector=n&&Zu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=XS++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Oe(n)&&(s=i,i=n,n=Oe);var o=this,a=function(){var c=Re,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Zu(s)),Re=o,f=i.apply(o,arguments),Oe(f)&&o._r.push(f),Re=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===Oe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Re;Re=null,n(this),Re=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof He&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof rn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof He)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=jr.length;o--;)jr[o].id===this.id&&jr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),YS=function(){function r(e){this.contexts=[],this.scope=e,Re&&Re.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ai(n)||(n={matches:n});var o=new Rm(0,s||this.scope),a=o.conditions={},l,c,h;Re&&!o.selector&&(o.selector=Re.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Ti.matchMedia(n[c]),l&&(jr.indexOf(o)<0&&jr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Qu):l.addEventListener("change",Qu)));return h&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Dl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return xm(i)})},timeline:function(t){return new rn(t)},getTweensOf:function(t,e){return Ie.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ke(t)&&(t=si(t)[0]);var s=br(t||{}).get,o=n?om:sm;return n==="native"&&(n=""),t&&(e?o((Fn[e]&&Fn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Fn[a]&&Fn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=si(t),t.length>1){var i=t.map(function(h){return mn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}t=t[0]||{};var o=Fn[e],a=br(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var f=new o;to._pt=0,f.init(t,n?h+n:h,to,0,[t]),f.render(1,f),to._pt&&gf(1,to)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=mn.to(t,ts((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Ie.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Qr(t.ease,eo.ease)),Wp(eo,t||{})},config:function(t){return Wp(zn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Fn[a]&&!Zn[a]&&qo(e+" effect requires "+a+" plugin.")}),Ou[e]=function(a,l,c){return n(si(a),oi(l||{},s),c)},o&&(rn.prototype[e]=function(a,l,c){return this.add(Ou[e](a,Ai(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ie[t]=Qr(e)},parseEase:function(t,e){return arguments.length?Qr(t,e):ie},getById:function(t){return Ie.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new rn(t),i,s;for(n.smoothChildTiming=kn(t.smoothChildTiming),Ie.remove(n),n._dp=0,n._time=n._tTime=Ie._time,i=Ie._first;i;)s=i._next,(e||!(!i._dur&&i instanceof He&&i.vars.onComplete===i._targets[0]))&&Ei(n,i,i._start-i._delay),i=s;return Ei(Ie,n,0),n},context:function(t,e){return t?new Rm(t,e):Re},matchMedia:function(t){return new YS(t)},matchMediaRefresh:function(){return jr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Qu()},addEventListener:function(t,e){var n=Cl[t]||(Cl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Cl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:wS,wrapYoyo:TS,distribute:dm,random:mm,snap:pm,normalize:bS,getUnit:sn,clamp:xS,splitColor:ym,toArray:si,selector:Zu,mapRange:_m,pipe:MS,unitize:SS,interpolate:ES,shuffle:fm},install:em,effects:Ou,ticker:Bn,updateRoot:rn.updateRoot,plugins:Fn,globalTimeline:Ie,core:{PropTween:Tn,globals:nm,Tween:He,Timeline:rn,Animation:Jo,getCache:br,_removeLinkedListItem:Ol,reverting:function(){return dn},context:function(t){return t&&Re&&(Re.data.push(t),t._ctx=Re),Re},suppressOverwrites:function(t){return ju=t}}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Dl[r]=He[r]});Bn.add(rn.updateRoot);to=Dl.to({},{duration:0});var qS=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},$S=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=qS(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Vu=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ke(s)&&(l={},wn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}$S(a,s)}}}},mn=Dl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)dn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Vu("roundProps",Ju),Vu("modifiers"),Vu("snap",pm))||Dl;He.version=rn.version=mn.version="3.12.5";tm=1;tf()&&ro();var ZS=ie.Power0,JS=ie.Power1,KS=ie.Power2,QS=ie.Power3,jS=ie.Power4,tb=ie.Linear,eb=ie.Quad,nb=ie.Cubic,ib=ie.Quart,rb=ie.Quint,sb=ie.Strong,ob=ie.Elastic,ab=ie.Back,lb=ie.SteppedEase,cb=ie.Bounce,hb=ie.Sine,ub=ie.Expo,fb=ie.Circ;var Pm,Er,ao,wf,as,db,Im,Tf,pb=function(){return typeof window<"u"},Ki={},os=180/Math.PI,lo=Math.PI/180,oo=Math.atan2,Lm=1e8,Ef=/([A-Z])/g,mb=/(left|right|width|margin|padding|x)/i,gb=/[\s,\(]\S/,Ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},yf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},_b=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},vb=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},xb=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},km=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},zm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},yb=function(t,e,n){return t.style[e]=n},Mb=function(t,e,n){return t.style.setProperty(e,n)},Sb=function(t,e,n){return t._gsap[e]=n},bb=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},wb=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Tb=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Le="transform",Vn=Le+"Origin",Eb=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Ki&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ci[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Ji(i,a)}):this.tfm[t]=o.x?o[t]:Ji(i,t),t===Vn&&(this.tfm.zOrigin=o.zOrigin);else return Ci.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Le)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Vn,e,"")),t=Le}(s||e)&&this.props.push(t,e,s[t])},Vm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Ab=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Ef,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Tf(),(!s||!s.isStart)&&!n[Le]&&(Vm(n),i.zOrigin&&n[Vn]&&(n[Vn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Hm=function(t,e){var n={target:t,props:[],revert:Ab,save:Eb};return t._gsap||mn.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Gm,Mf=function(t,e){var n=Er.createElementNS?Er.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Er.createElement(t);return n&&n.style?n:Er.createElement(t)},Ri=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ef,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,co(e)||e,1)||""},Dm="O,Moz,ms,Ms,Webkit".split(","),co=function(t,e,n){var i=e||as,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Dm[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Dm[o]:"")+t},Sf=function(){pb()&&window.document&&(Pm=window,Er=Pm.document,ao=Er.documentElement,as=Mf("div")||{style:{}},db=Mf("div"),Le=co(Le),Vn=Le+"Origin",as.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Gm=!!co("perspective"),Tf=mn.core.reverting,wf=1)},vf=function r(t){var e=Mf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(ao.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ao.removeChild(e),this.style.cssText=s,o},Um=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Wm=function(t){var e;try{e=t.getBBox()}catch{e=vf.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===vf||(e=vf.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Um(t,["x","cx","x1"])||0,y:+Um(t,["y","cy","y1"])||0,width:0,height:0}:e},Xm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Wm(t))},ls=function(t,e){if(e){var n=t.style,i;e in Ki&&e!==Vn&&(e=Le),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Ef,"-$1").toLowerCase())):n.removeAttribute(e)}},Ar=function(t,e,n,i,s,o){var a=new Tn(t._pt,e,n,0,1,o?zm:km);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Nm={deg:1,rad:1,turn:1},Cb={grid:1,flex:1},Cr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=as.style,l=mb.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",u=i==="%",_,g,m,p;if(i===o||!s||Nm[i]||Nm[o])return s;if(o!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&Xm(t),(u||o==="%")&&(Ki[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Fe(u?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(d?o:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Er||!g.appendChild)&&(g=Er.body),m=g._gsap,m&&u&&m.width&&l&&m.time===Bn.time&&!m.uncache)return Fe(s/m.width*f);if(u&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=f+i,_=t[h],v?t.style[e]=v:ls(t,e)}else(u||o==="%")&&!Cb[Ri(g,"display")]&&(a.position=Ri(t,"position")),g===t&&(a.position="static"),g.appendChild(as),_=as[h],g.removeChild(as),a.position="absolute";return l&&u&&(m=br(g),m.time=Bn.time,m.width=g[h]),Fe(d?_*s/f:_&&s?f/_*s:0)},Ji=function(t,e,n,i){var s;return wf||Sf(),e in Ci&&e!=="transform"&&(e=Ci[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ki[e]&&e!=="transform"?(s=ta(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Vl(Ri(t,Vn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=zl[e]&&zl[e](t,e,n)||Ri(t,e)||lf(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Cr(t,e,s,n)+n:s},Rb=function(t,e,n,i){if(!n||n==="none"){var s=co(e,t,1),o=s&&Ri(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Ri(t,"borderTopColor"))}var a=new Tn(this._pt,t.style,e,0,1,mf),l=0,c=0,h,f,d,u,_,g,m,p,v,M,x,E;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=Ri(t,e)||i,g?t.style[e]=g:ls(t,e)),h=[n,i],cf(h),n=h[0],i=h[1],d=n.match(es)||[],E=i.match(es)||[],E.length){for(;f=es.exec(i);)m=f[0],v=i.substring(l,f.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(u=parseFloat(g)||0,x=g.substr((u+"").length),m.charAt(1)==="="&&(m=ns(u,m)+x),p=parseFloat(m),M=m.substr((p+"").length),l=es.lastIndex-M.length,M||(M=M||zn.units[e]||x,l===i.length&&(i+=M,a.e+=M)),x!==M&&(u=Cr(t,e,g,M)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:u,c:p-u,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?zm:km;return nf.test(i)&&(a.e=0),this._pt=a,a},Om={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Pb=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Om[n]||n,e[1]=Om[i]||i,e.join(" ")},Ib=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ki[a]&&(l=1,a=a==="transformOrigin"?Vn:Le),ls(n,a);l&&(ls(n,Le),o&&(o.svg&&n.removeAttribute("transform"),ta(n,1),o.uncache=1,Vm(i)))}},zl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Tn(t._pt,e,n,0,0,Ib);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},jo=[1,0,0,1,0,0],Ym={},qm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Fm=function(t){var e=Ri(t,Le);return qm(e)?jo:e.substr(7).match(ef).map(Fe)},Af=function(t,e){var n=t._gsap||br(t),i=t.style,s=Fm(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?jo:s):(s===jo&&!t.offsetParent&&t!==ao&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,ao.appendChild(t)),s=Fm(t),l?i.display=l:ls(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):ao.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},bf=function(t,e,n,i,s,o){var a=t._gsap,l=s||Af(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,u=l[0],_=l[1],g=l[2],m=l[3],p=l[4],v=l[5],M=e.split(" "),x=parseFloat(M[0])||0,E=parseFloat(M[1])||0,b,T,R,S;n?l!==jo&&(T=u*m-_*g)&&(R=x*(m/T)+E*(-g/T)+(g*v-m*p)/T,S=x*(-_/T)+E*(u/T)-(u*v-_*p)/T,x=R,E=S):(b=Wm(t),x=b.x+(~M[0].indexOf("%")?x/100*b.width:x),E=b.y+(~(M[1]||M[0]).indexOf("%")?E/100*b.height:E)),i||i!==!1&&a.smooth?(p=x-c,v=E-h,a.xOffset=f+(p*u+v*g)-p,a.yOffset=d+(p*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=E,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Vn]="0px 0px",o&&(Ar(o,a,"xOrigin",c,x),Ar(o,a,"yOrigin",h,E),Ar(o,a,"xOffset",f,a.xOffset),Ar(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+E)},ta=function(t,e){var n=t._gsap||new hf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Ri(t,Vn)||"0",h,f,d,u,_,g,m,p,v,M,x,E,b,T,R,S,y,I,N,F,W,Z,X,Y,z,tt,P,at,Pt,Kt,$,et;return h=f=d=g=m=p=v=M=x=0,u=_=1,n.svg=!!(t.getCTM&&Xm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Le]!=="none"?l[Le]:"")),i.scale=i.rotate=i.translate="none"),T=Af(t,n.svg),n.svg&&(n.uncache?(z=t.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),bf(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,T)),E=n.xOrigin||0,b=n.yOrigin||0,T!==jo&&(I=T[0],N=T[1],F=T[2],W=T[3],h=Z=T[4],f=X=T[5],T.length===6?(u=Math.sqrt(I*I+N*N),_=Math.sqrt(W*W+F*F),g=I||N?oo(N,I)*os:0,v=F||W?oo(F,W)*os+g:0,v&&(_*=Math.abs(Math.cos(v*lo))),n.svg&&(h-=E-(E*I+b*F),f-=b-(E*N+b*W))):(et=T[6],Kt=T[7],P=T[8],at=T[9],Pt=T[10],$=T[11],h=T[12],f=T[13],d=T[14],R=oo(et,Pt),m=R*os,R&&(S=Math.cos(-R),y=Math.sin(-R),Y=Z*S+P*y,z=X*S+at*y,tt=et*S+Pt*y,P=Z*-y+P*S,at=X*-y+at*S,Pt=et*-y+Pt*S,$=Kt*-y+$*S,Z=Y,X=z,et=tt),R=oo(-F,Pt),p=R*os,R&&(S=Math.cos(-R),y=Math.sin(-R),Y=I*S-P*y,z=N*S-at*y,tt=F*S-Pt*y,$=W*y+$*S,I=Y,N=z,F=tt),R=oo(N,I),g=R*os,R&&(S=Math.cos(R),y=Math.sin(R),Y=I*S+N*y,z=Z*S+X*y,N=N*S-I*y,X=X*S-Z*y,I=Y,Z=z),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),u=Fe(Math.sqrt(I*I+N*N+F*F)),_=Fe(Math.sqrt(X*X+et*et)),R=oo(Z,X),v=Math.abs(R)>2e-4?R*os:0,x=$?1/($<0?-$:$):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!qm(Ri(t,Le)),Y&&t.setAttribute("transform",Y))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(u*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Fe(u),n.scaleY=Fe(_),n.rotation=Fe(g)+a,n.rotationX=Fe(m)+a,n.rotationY=Fe(p)+a,n.skewX=v+a,n.skewY=M+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Vn]=Vl(c)),n.xOffset=n.yOffset=0,n.force3D=zn.force3D,n.renderTransform=n.svg?Db:Gm?$m:Lb,n.uncache=0,n},Vl=function(t){return(t=t.split(" "))[0]+" "+t[1]},xf=function(t,e,n){var i=sn(e);return Fe(parseFloat(e)+parseFloat(Cr(t,"x",n+"px",i)))+i},Lb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,$m(t,e)},rs="0deg",Qo="0px",ss=") ",$m=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,u=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,M=n.zOrigin,x="",E=p==="auto"&&t&&t!==1||p===!0;if(M&&(f!==rs||h!==rs)){var b=parseFloat(h)*lo,T=Math.sin(b),R=Math.cos(b),S;b=parseFloat(f)*lo,S=Math.cos(b),o=xf(v,o,T*S*-M),a=xf(v,a,-Math.sin(b)*-M),l=xf(v,l,R*S*-M+M)}m!==Qo&&(x+="perspective("+m+ss),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(E||o!==Qo||a!==Qo||l!==Qo)&&(x+=l!==Qo||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ss),c!==rs&&(x+="rotate("+c+ss),h!==rs&&(x+="rotateY("+h+ss),f!==rs&&(x+="rotateX("+f+ss),(d!==rs||u!==rs)&&(x+="skew("+d+", "+u+ss),(_!==1||g!==1)&&(x+="scale("+_+", "+g+ss),v.style[Le]=x||"translate(0, 0)"},Db=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,u=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,M=parseFloat(o),x=parseFloat(a),E,b,T,R,S;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=lo,c*=lo,E=Math.cos(l)*f,b=Math.sin(l)*f,T=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(h*=lo,S=Math.tan(c-h),S=Math.sqrt(1+S*S),T*=S,R*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),E*=S,b*=S)),E=Fe(E),b=Fe(b),T=Fe(T),R=Fe(R)):(E=f,R=d,b=T=0),(M&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(M=Cr(u,"x",o,"px"),x=Cr(u,"y",a,"px")),(_||g||m||p)&&(M=Fe(M+_-(_*E+g*T)+m),x=Fe(x+g-(_*b+g*R)+p)),(i||s)&&(S=u.getBBox(),M=Fe(M+i/100*S.width),x=Fe(x+s/100*S.height)),S="matrix("+E+","+b+","+T+","+R+","+M+","+x+")",u.setAttribute("transform",S),v&&(u.style[Le]=S)},Ub=function(t,e,n,i,s){var o=360,a=Ke(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?os:1),c=l-i,h=i+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Lm)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Lm)%o-~~(c/o)*o)),t._pt=d=new Tn(t._pt,e,n,i,c,_b),d.e=h,d.u="deg",t._props.push(n),d},Bm=function(t,e){for(var n in e)t[n]=e[n];return t},Nb=function(t,e,n){var i=Bm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,d,u,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Le]=e,a=ta(n,1),ls(n,Le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Le],o[Le]=e,a=ta(n,1),o[Le]=c);for(l in Ki)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(u=sn(c),_=sn(h),f=u!==_?Cr(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new Tn(t._pt,a,l,f,d-f,yf),t._pt.u=_||0,t._props.push(l));Bm(a,i)};wn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});zl[t>1?"border"+r:r]=function(a,l,c,h,f){var d,u;if(arguments.length<4)return d=o.map(function(_){return Ji(a,_,c)}),u=d.join(" "),u.split(d[0]).length===5?d[0]:u;d=(h+"").split(" "),u={},o.forEach(function(_,g){return u[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,u,f)}});var Cf={name:"css",register:Sf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,f,d,u,_,g,m,p,v,M,x,E,b,T,R;wf||Sf(),this.styles=this.styles||Hm(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Fn[g]&&ff(g,e,n,i,t,s)))){if(u=typeof h,_=zl[g],u==="function"&&(h=h.call(n,i,t,s),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=so(h)),_)_(this,t,g,h,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",$i.lastIndex=0,$i.test(c)||(m=sn(c),p=sn(h)),p?m!==p&&(c=Cr(t,g,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,i,s,0,0,g),o.push(g),R.push(g,0,a[g]);else if(u!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Ke(c)&&~c.indexOf("random(")&&(c=so(c)),sn(c+"")||c==="auto"||(c+=zn.units[g]||sn(Ji(t,g))||""),(c+"").charAt(1)==="="&&(c=Ji(t,g))):c=Ji(t,g),d=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),f=parseFloat(h),g in Ci&&(g==="autoAlpha"&&(d===1&&Ji(t,"visibility")==="hidden"&&f&&(d=0),R.push("visibility",0,a.visibility),Ar(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Ci[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in Ki,M){if(this.styles.save(g),x||(E=t._gsap,E.renderTransform&&!e.parseTransform||ta(t,e.parseTransform),b=e.smoothOrigin!==!1&&E.smooth,x=this._pt=new Tn(this._pt,a,Le,0,1,E.renderTransform,E,0,-1),x.dep=1),g==="scale")this._pt=new Tn(this._pt,E,"scaleY",E.scaleY,(v?ns(E.scaleY,v+f):f)-E.scaleY||0,yf),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Vn,0,a[Vn]),h=Pb(h),E.svg?bf(t,h,0,b,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==E.zOrigin&&Ar(this,E,"zOrigin",E.zOrigin,p),Ar(this,a,g,Vl(c),Vl(h)));continue}else if(g==="svgOrigin"){bf(t,h,1,b,0,this);continue}else if(g in Ym){Ub(this,E,g,d,v?ns(d,v+h):h);continue}else if(g==="smoothOrigin"){Ar(this,E,"smooth",E.smooth,h);continue}else if(g==="force3D"){E[g]=h;continue}else if(g==="transform"){Nb(this,h,t);continue}}else g in a||(g=co(g)||g);if(M||(f||f===0)&&(d||d===0)&&!gb.test(h)&&g in a)m=(c+"").substr((d+"").length),f||(f=0),p=sn(h)||(g in zn.units?zn.units[g]:m),m!==p&&(d=Cr(t,g,c,p)),this._pt=new Tn(this._pt,M?E:a,g,d,(v?ns(d,v+f):f)-d,!M&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?xb:yf),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=vb);else if(g in a)Rb.call(this,t,g,c,v?v+h:h);else if(g in t)this.add(t,g,c||t[g],v?v+h:h,i,s);else if(g!=="parseTransform"){Nl(g,h);continue}M||(g in a?R.push(g,0,a[g]):R.push(g,1,c||t[g])),o.push(g)}}T&&_f(this)},render:function(t,e){if(e.tween._time||!Tf())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ji,aliases:Ci,getSetter:function(t,e,n){var i=Ci[e];return i&&i.indexOf(",")<0&&(e=i),e in Ki&&e!==Vn&&(t._gsap.x||Ji(t,"x"))?n&&Im===n?e==="scale"?bb:Sb:(Im=n||{})&&(e==="scale"?wb:Tb):t.style&&!Ul(t.style[e])?yb:~e.indexOf("-")?Mb:kl(t,e)},core:{_removeProperty:ls,_getMatrix:Af}};mn.utils.checkPrefix=co;mn.core.getStyleSaver=Hm;(function(r,t,e,n){var i=wn(r+","+t+","+e,function(s){Ki[s]=1});wn(t,function(s){zn.units[s]="deg",Ym[s]=1}),Ci[i[13]]=r+","+t,wn(n,function(s){var o=s.split(":");Ci[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){zn.units[r]="px"});mn.registerPlugin(Cf);var ge=mn.registerPlugin(Cf)||mn,k1=ge.core.Tween;function Zm(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Ob(r,t,e){return t&&Zm(r.prototype,t),e&&Zm(r,e),r}var on,Wl,Fb,Jn,Rr,Pr,uo,Km,cs,na,Qm,Qi,gi,jm,tg=function(){return on||typeof window<"u"&&(on=window.gsap)&&on.registerPlugin&&on},eg=1,ho=[],te=[],_i=[],ia=Date.now,Rf=function(t,e){return e},Bb=function(){var t=na.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,te),i.push.apply(i,_i),te=n,_i=i,Rf=function(o,a){return e[o](a)}},tr=function(t,e){return~_i.indexOf(t)&&_i[_i.indexOf(t)+1][e]},ra=function(t){return!!~Qm.indexOf(t)},An=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},En=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Hl="scrollLeft",Gl="scrollTop",Pf=function(){return Qi&&Qi.isPressed||te.cache++},Xl=function(t,e){var n=function i(s){if(s||s===0){eg&&(Jn.history.scrollRestoration="manual");var o=Qi&&Qi.isPressed;s=i.v=Math.round(s)||(Qi&&Qi.iOS?1:0),t(s),i.cacheID=te.cache,o&&Rf("ss",s)}else(e||te.cache!==i.cacheID||Rf("ref"))&&(i.cacheID=te.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},gn={s:Hl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Xl(function(r){return arguments.length?Jn.scrollTo(r,Xe.sc()):Jn.pageXOffset||Rr[Hl]||Pr[Hl]||uo[Hl]||0})},Xe={s:Gl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:gn,sc:Xl(function(r){return arguments.length?Jn.scrollTo(gn.sc(),r):Jn.pageYOffset||Rr[Gl]||Pr[Gl]||uo[Gl]||0})},Cn=function(t,e){return(e&&e._ctx&&e._ctx.selector||on.utils.toArray)(t)[0]||(typeof t=="string"&&on.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},ji=function(t,e){var n=e.s,i=e.sc;ra(t)&&(t=Rr.scrollingElement||Pr);var s=te.indexOf(t),o=i===Xe.sc?1:2;!~s&&(s=te.push(t)-1),te[s+o]||An(t,"scroll",Pf);var a=te[s+o],l=a||(te[s+o]=Xl(tr(t,n),!0)||(ra(t)?i:Xl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=on.getProperty(t,"scrollBehavior")==="smooth"),l},Yl=function(t,e,n){var i=t,s=t,o=ia(),a=o,l=e||50,c=Math.max(500,l*3),h=function(_,g){var m=ia();g||m-o>l?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},d=function(_){var g=a,m=s,p=ia();return(_||_===0)&&_!==i&&h(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:h,reset:f,getVelocity:d}},ea=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Jm=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},ng=function(){na=on.core.globals().ScrollTrigger,na&&na.core&&Bb()},ig=function(t){return on=t||tg(),!Wl&&on&&typeof document<"u"&&document.body&&(Jn=window,Rr=document,Pr=Rr.documentElement,uo=Rr.body,Qm=[Jn,Rr,Pr,uo],Fb=on.utils.clamp,jm=on.core.context||function(){},cs="onpointerenter"in uo?"pointer":"mouse",Km=Be.isTouch=Jn.matchMedia&&Jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,gi=Be.eventTypes=("ontouchstart"in Pr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Pr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return eg=0},500),ng(),Wl=1),Wl};gn.op=Xe;te.cache=0;var Be=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Wl||ig(on)||console.warn("Please gsap.registerPlugin(Observer)"),na||ng();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,d=n.onStopDelay,u=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,v=n.onDrag,M=n.onPress,x=n.onRelease,E=n.onRight,b=n.onLeft,T=n.onUp,R=n.onDown,S=n.onChangeX,y=n.onChangeY,I=n.onChange,N=n.onToggleX,F=n.onToggleY,W=n.onHover,Z=n.onHoverEnd,X=n.onMove,Y=n.ignoreCheck,z=n.isNormalizer,tt=n.onGestureStart,P=n.onGestureEnd,at=n.onWheel,Pt=n.onEnable,Kt=n.onDisable,$=n.onClick,et=n.scrollSpeed,vt=n.capture,nt=n.allowClicks,wt=n.lockAxis,At=n.onLockAxis;this.target=a=Cn(a)||Pr,this.vars=n,u&&(u=on.utils.toArray(u)),i=i||1e-9,s=s||0,_=_||1,et=et||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Jn.getComputedStyle(uo).lineHeight)||22);var Vt,Qt,Ht,Lt,D,_e,Ot,k=this,Tt=0,ne=0,Ct=n.passive||!h,C=ji(a,gn),w=ji(a,Xe),G=C(),j=w(),Q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&gi[0]==="pointerdown",J=ra(a),ft=a.ownerDocument||Rr,lt=[0,0,0],mt=[0,0,0],Xt=0,it=function(){return Xt=ia()},ot=function(Et,$t){return(k.event=Et)&&u&&~u.indexOf(Et.target)||$t&&Q&&Et.pointerType!=="touch"||Y&&Y(Et,$t)},Ut=function(){k._vx.reset(),k._vy.reset(),Qt.pause(),f&&f(k)},Dt=function(){var Et=k.deltaX=Jm(lt),$t=k.deltaY=Jm(mt),gt=Math.abs(Et)>=i,Gt=Math.abs($t)>=i;I&&(gt||Gt)&&I(k,Et,$t,lt,mt),gt&&(E&&k.deltaX>0&&E(k),b&&k.deltaX<0&&b(k),S&&S(k),N&&k.deltaX<0!=Tt<0&&N(k),Tt=k.deltaX,lt[0]=lt[1]=lt[2]=0),Gt&&(R&&k.deltaY>0&&R(k),T&&k.deltaY<0&&T(k),y&&y(k),F&&k.deltaY<0!=ne<0&&F(k),ne=k.deltaY,mt[0]=mt[1]=mt[2]=0),(Lt||Ht)&&(X&&X(k),Ht&&(v(k),Ht=!1),Lt=!1),_e&&!(_e=!1)&&At&&At(k),D&&(at(k),D=!1),Vt=0},yt=function(Et,$t,gt){lt[gt]+=Et,mt[gt]+=$t,k._vx.update(Et),k._vy.update($t),c?Vt||(Vt=requestAnimationFrame(Dt)):Dt()},qt=function(Et,$t){wt&&!Ot&&(k.axis=Ot=Math.abs(Et)>Math.abs($t)?"x":"y",_e=!0),Ot!=="y"&&(lt[2]+=Et,k._vx.update(Et,!0)),Ot!=="x"&&(mt[2]+=$t,k._vy.update($t,!0)),c?Vt||(Vt=requestAnimationFrame(Dt)):Dt()},Nt=function(Et){if(!ot(Et,1)){Et=ea(Et,h);var $t=Et.clientX,gt=Et.clientY,Gt=$t-k.x,Rt=gt-k.y,kt=k.isDragging;k.x=$t,k.y=gt,(kt||Math.abs(k.startX-$t)>=s||Math.abs(k.startY-gt)>=s)&&(v&&(Ht=!0),kt||(k.isDragging=!0),qt(Gt,Rt),kt||m&&m(k))}},se=k.onPress=function(xt){ot(xt,1)||xt&&xt.button||(k.axis=Ot=null,Qt.pause(),k.isPressed=!0,xt=ea(xt),Tt=ne=0,k.startX=k.x=xt.clientX,k.startY=k.y=xt.clientY,k._vx.reset(),k._vy.reset(),An(z?a:ft,gi[1],Nt,Ct,!0),k.deltaX=k.deltaY=0,M&&M(k))},L=k.onRelease=function(xt){if(!ot(xt,1)){En(z?a:ft,gi[1],Nt,!0);var Et=!isNaN(k.y-k.startY),$t=k.isDragging,gt=$t&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Gt=ea(xt);!gt&&Et&&(k._vx.reset(),k._vy.reset(),h&&nt&&on.delayedCall(.08,function(){if(ia()-Xt>300&&!xt.defaultPrevented){if(xt.target.click)xt.target.click();else if(ft.createEvent){var Rt=ft.createEvent("MouseEvents");Rt.initMouseEvent("click",!0,!0,Jn,1,Gt.screenX,Gt.screenY,Gt.clientX,Gt.clientY,!1,!1,!1,!1,0,null),xt.target.dispatchEvent(Rt)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,f&&$t&&!z&&Qt.restart(!0),p&&$t&&p(k),x&&x(k,gt)}},ut=function(Et){return Et.touches&&Et.touches.length>1&&(k.isGesturing=!0)&&tt(Et,k.isDragging)},q=function(){return(k.isGesturing=!1)||P(k)},K=function(Et){if(!ot(Et)){var $t=C(),gt=w();yt(($t-G)*et,(gt-j)*et,1),G=$t,j=gt,f&&Qt.restart(!0)}},ht=function(Et){if(!ot(Et)){Et=ea(Et,h),at&&(D=!0);var $t=(Et.deltaMode===1?l:Et.deltaMode===2?Jn.innerHeight:1)*_;yt(Et.deltaX*$t,Et.deltaY*$t,0),f&&!z&&Qt.restart(!0)}},dt=function(Et){if(!ot(Et)){var $t=Et.clientX,gt=Et.clientY,Gt=$t-k.x,Rt=gt-k.y;k.x=$t,k.y=gt,Lt=!0,f&&Qt.restart(!0),(Gt||Rt)&&qt(Gt,Rt)}},Ft=function(Et){k.event=Et,W(k)},le=function(Et){k.event=Et,Z(k)},Ne=function(Et){return ot(Et)||ea(Et,h)&&$(k)};Qt=k._dc=on.delayedCall(d||.25,Ut).pause(),k.deltaX=k.deltaY=0,k._vx=Yl(0,50,!0),k._vy=Yl(0,50,!0),k.scrollX=C,k.scrollY=w,k.isDragging=k.isGesturing=k.isPressed=!1,jm(this),k.enable=function(xt){return k.isEnabled||(An(J?ft:a,"scroll",Pf),o.indexOf("scroll")>=0&&An(J?ft:a,"scroll",K,Ct,vt),o.indexOf("wheel")>=0&&An(a,"wheel",ht,Ct,vt),(o.indexOf("touch")>=0&&Km||o.indexOf("pointer")>=0)&&(An(a,gi[0],se,Ct,vt),An(ft,gi[2],L),An(ft,gi[3],L),nt&&An(a,"click",it,!0,!0),$&&An(a,"click",Ne),tt&&An(ft,"gesturestart",ut),P&&An(ft,"gestureend",q),W&&An(a,cs+"enter",Ft),Z&&An(a,cs+"leave",le),X&&An(a,cs+"move",dt)),k.isEnabled=!0,xt&&xt.type&&se(xt),Pt&&Pt(k)),k},k.disable=function(){k.isEnabled&&(ho.filter(function(xt){return xt!==k&&ra(xt.target)}).length||En(J?ft:a,"scroll",Pf),k.isPressed&&(k._vx.reset(),k._vy.reset(),En(z?a:ft,gi[1],Nt,!0)),En(J?ft:a,"scroll",K,vt),En(a,"wheel",ht,vt),En(a,gi[0],se,vt),En(ft,gi[2],L),En(ft,gi[3],L),En(a,"click",it,!0),En(a,"click",Ne),En(ft,"gesturestart",ut),En(ft,"gestureend",q),En(a,cs+"enter",Ft),En(a,cs+"leave",le),En(a,cs+"move",dt),k.isEnabled=k.isPressed=k.isDragging=!1,Kt&&Kt(k))},k.kill=k.revert=function(){k.disable();var xt=ho.indexOf(k);xt>=0&&ho.splice(xt,1),Qi===k&&(Qi=0)},ho.push(k),z&&ra(a)&&(Qi=k),k.enable(g)},Ob(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Be.version="3.12.5";Be.create=function(r){return new Be(r)};Be.register=ig;Be.getAll=function(){return ho.slice()};Be.getById=function(r){return ho.filter(function(t){return t.vars.id===r})[0]};tg()&&on.registerPlugin(Be);var St,mo,re,De,vi,Ee,Mg,lc,_a,ua,oa,ql,_n,fc,Bf,Pn,rg,sg,go,Sg,If,bg,Rn,kf,wg,Tg,Ir,zf,Xf,_o,Yf,cc,Vf,Lf,$l=1,vn=Date.now,Df=vn(),ci=0,aa=0,og=function(t,e,n){var i=Qn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},ag=function(t,e){return e&&(!Qn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},kb=function r(){return aa&&requestAnimationFrame(r)},lg=function(){return fc=1},cg=function(){return fc=0},Pi=function(t){return t},la=function(t){return Math.round(t*1e5)/1e5||0},Eg=function(){return typeof window<"u"},Ag=function(){return St||Eg()&&(St=window.gsap)&&St.registerPlugin&&St},ms=function(t){return!!~Mg.indexOf(t)},Cg=function(t){return(t==="Height"?Yf:re["inner"+t])||vi["client"+t]||Ee["client"+t]},Rg=function(t){return tr(t,"getBoundingClientRect")||(ms(t)?function(){return ac.width=re.innerWidth,ac.height=Yf,ac}:function(){return er(t)})},zb=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=tr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Cg(s):t["client"+s])||0}},Vb=function(t,e){return!e||~_i.indexOf(t)?Rg(t):function(){return ac}},Ii=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=tr(t,n))?o()-Rg(t)()[s]:ms(t)?(vi[n]||Ee[n])-Cg(i):t[n]-t["offset"+i])},Zl=function(t,e){for(var n=0;n<go.length;n+=3)(!e||~e.indexOf(go[n+1]))&&t(go[n],go[n+1],go[n+2])},Qn=function(t){return typeof t=="string"},Ln=function(t){return typeof t=="function"},ca=function(t){return typeof t=="number"},hs=function(t){return typeof t=="object"},sa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Uf=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},fo=Math.abs,Pg="left",Ig="top",qf="right",$f="bottom",fs="width",ds="height",fa="Right",da="Left",pa="Top",ma="Bottom",Ye="padding",ai="margin",xo="Width",Zf="Height",Qe="px",li=function(t){return re.getComputedStyle(t)},Hb=function(t){var e=li(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},hg=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},er=function(t,e){var n=e&&li(t)[Bf]!=="matrix(1, 0, 0, 1, 0, 0)"&&St.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},hc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Lg=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Gb=function(t){return function(e){return St.utils.snap(Lg(t),e)}},Jf=function(t){var e=St.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},Wb=function(t){return function(e,n){return Jf(Lg(t))(e,n.direction)}},Jl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},nn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},en=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Kl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},ug={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ql={toggleActions:"play",anticipatePin:0},uc={top:0,left:0,center:.5,bottom:1,right:1},ic=function(t,e){if(Qn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in uc?uc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},jl=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,d=s.indent,u=s.fontWeight,_=De.createElement("div"),g=ms(n)||tr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=g?Ee:n,v=t.indexOf("start")!==-1,M=v?c:h,x="border-color:"+M+";font-size:"+f+";color:"+M+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(x+=(i===Xe?qf:$f)+":"+(o+parseFloat(d))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=x,_.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],rc(_,0,i,v),_},rc=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+xo]=1,s["border"+a+xo]=0,s[n.p]=e+"px",St.set(t,s)},ee=[],Hf={},va,fg=function(){return vn()-ci>34&&(va||(va=requestAnimationFrame(nr)))},po=function(){(!Rn||!Rn.isPressed||Rn.startX>Ee.clientWidth)&&(te.cache++,Rn?va||(va=requestAnimationFrame(nr)):nr(),ci||_s("scrollStart"),ci=vn())},Nf=function(){Tg=re.innerWidth,wg=re.innerHeight},ha=function(){te.cache++,!_n&&!bg&&!De.fullscreenElement&&!De.webkitFullscreenElement&&(!kf||Tg!==re.innerWidth||Math.abs(re.innerHeight-wg)>re.innerHeight*.25)&&lc.restart(!0)},gs={},Xb=[],Dg=function r(){return en(zt,"scrollEnd",r)||us(!0)},_s=function(t){return gs[t]&&gs[t].map(function(e){return e()})||Xb},Kn=[],Ug=function(t){for(var e=0;e<Kn.length;e+=5)(!t||Kn[e+4]&&Kn[e+4].query===t)&&(Kn[e].style.cssText=Kn[e+1],Kn[e].getBBox&&Kn[e].setAttribute("transform",Kn[e+2]||""),Kn[e+3].uncache=1)},Kf=function(t,e){var n;for(Pn=0;Pn<ee.length;Pn++)n=ee[Pn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));cc=!0,e&&Ug(e),e||_s("revert")},Ng=function(t,e){te.cache++,(e||!In)&&te.forEach(function(n){return Ln(n)&&n.cacheID++&&(n.rec=0)}),Qn(t)&&(re.history.scrollRestoration=Xf=t)},In,ps=0,dg,Yb=function(){if(dg!==ps){var t=dg=ps;requestAnimationFrame(function(){return t===ps&&us(!0)})}},Og=function(){Ee.appendChild(_o),Yf=!Rn&&_o.offsetHeight||re.innerHeight,Ee.removeChild(_o)},pg=function(t){return _a(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},us=function(t,e){if(ci&&!t&&!cc){nn(zt,"scrollEnd",Dg);return}Og(),In=zt.isRefreshing=!0,te.forEach(function(i){return Ln(i)&&++i.cacheID&&(i.rec=i())});var n=_s("refreshInit");Sg&&zt.sort(),e||Kf(),te.forEach(function(i){Ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ee.slice(0).forEach(function(i){return i.refresh()}),cc=!1,ee.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Vf=1,pg(!0),ee.forEach(function(i){var s=Ii(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),pg(!1),Vf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),te.forEach(function(i){Ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Ng(Xf,1),lc.pause(),ps++,In=2,nr(2),ee.forEach(function(i){return Ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),In=zt.isRefreshing=!1,_s("refresh")},Gf=0,sc=1,ga,nr=function(t){if(t===2||!In&&!cc){zt.isUpdating=!0,ga&&ga.update(0);var e=ee.length,n=vn(),i=n-Df>=50,s=e&&ee[0].scroll();if(sc=Gf>s?-1:1,In||(Gf=s),i&&(ci&&!fc&&n-ci>200&&(ci=0,_s("scrollEnd")),oa=Df,Df=n),sc<0){for(Pn=e;Pn-- >0;)ee[Pn]&&ee[Pn].update(0,i);sc=1}else for(Pn=0;Pn<e;Pn++)ee[Pn]&&ee[Pn].update(0,i);zt.isUpdating=!1}va=0},Wf=[Pg,Ig,$f,qf,ai+ma,ai+fa,ai+pa,ai+da,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],oc=Wf.concat([fs,ds,"boxSizing","max"+xo,"max"+Zf,"position",ai,Ye,Ye+pa,Ye+fa,Ye+ma,Ye+da]),qb=function(t,e,n){vo(n);var i=t._gsap;if(i.spacerIsNative)vo(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Of=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Wf.length,o=e.style,a=t.style,l;s--;)l=Wf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[$f]=a[qf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[fs]=hc(t,gn)+Qe,o[ds]=hc(t,Xe)+Qe,o[Ye]=a[ai]=a[Ig]=a[Pg]="0",vo(i),a[fs]=a["max"+xo]=n[fs],a[ds]=a["max"+Zf]=n[ds],a[Ye]=n[Ye],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},$b=/([A-Z])/g,vo=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||St.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace($b,"-$1").toLowerCase())}},tc=function(t){for(var e=oc.length,n=t.style,i=[],s=0;s<e;s++)i.push(oc[s],n[oc[s]]);return i.t=t,i},Zb=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},ac={left:0,top:0},mg=function(t,e,n,i,s,o,a,l,c,h,f,d,u,_){Ln(t)&&(t=t(l)),Qn(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?ic("0"+t.substr(3),n):0));var g=u?u.time():0,m,p,v;if(u&&u.seek(0),isNaN(t)||(t=+t),ca(t))u&&(t=St.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,d,t)),a&&rc(a,n,i,!0);else{Ln(e)&&(e=e(l));var M=(t||"0").split(" "),x,E,b,T;v=Cn(e,l)||Ee,x=er(v)||{},(!x||!x.left&&!x.top)&&li(v).display==="none"&&(T=v.style.display,v.style.display="block",x=er(v),T?v.style.display=T:v.style.removeProperty("display")),E=ic(M[0],x[i.d]),b=ic(M[1]||"0",n),t=x[i.p]-c[i.p]-h+E+s-b,a&&rc(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var R=t+n,S=o._isStart;m="scroll"+i.d2,rc(o,R,i,S&&R>20||!S&&(f?Math.max(Ee[m],vi[m]):o.parentNode[m])<=R+1),f&&(c=er(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Qe))}return u&&v&&(m=er(v),u.seek(d),p=er(v),u._caScrollDist=m[i.p]-p[i.p],t=t/u._caScrollDist*d),u&&u.seek(g),u?t:Math.round(t)},Jb=/(webkit|moz|length|cssText|inset)/i,gg=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===Ee){t._stOrig=s.cssText,a=li(t);for(o in a)!+o&&!Jb.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;St.core.getCache(t).uncache=1,e.appendChild(t)}},Fg=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},ec=function(t,e,n){var i={};i[e.p]="+="+n,St.set(t,i)},_g=function(t,e){var n=ji(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,f){var d=o.tween,u=l.onComplete,_={};c=c||n();var g=Fg(n,c,function(){d.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+h*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){te.cache++,o.tween&&nr()},l.onComplete=function(){o.tween=0,u&&u.call(d)},d=o.tween=St.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},nn(t,"wheel",n.wheelHandler),zt.isTouch&&nn(t,"touchmove",n.wheelHandler),s},zt=function(){function r(e,n){mo||r.register(St)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),zf(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!aa){this.update=this.refresh=this.kill=Pi;return}n=hg(Qn(n)||ca(n)||n.nodeType?{trigger:n}:n,Ql);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,d=s.trigger,u=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,M=s.once,x=s.snap,E=s.pinReparent,b=s.pinSpacer,T=s.containerAnimation,R=s.fastScrollEnd,S=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?gn:Xe,I=!f&&f!==0,N=Cn(n.scroller||re),F=St.core.getCache(N),W=ms(N),Z=("pinType"in n?n.pinType:tr(N,"pinType")||W&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=I&&n.toggleActions.split(" "),z="markers"in n?n.markers:Ql.markers,tt=W?0:parseFloat(li(N)["border"+y.p2+xo])||0,P=this,at=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Pt=zb(N,W,y),Kt=Vb(N,W),$=0,et=0,vt=0,nt=ji(N,y),wt,At,Vt,Qt,Ht,Lt,D,_e,Ot,k,Tt,ne,Ct,C,w,G,j,Q,J,ft,lt,mt,Xt,it,ot,Ut,Dt,yt,qt,Nt,se,L,ut,q,K,ht,dt,Ft,le;if(P._startClamp=P._endClamp=!1,P._dir=y,m*=45,P.scroller=N,P.scroll=T?T.time.bind(T):nt,Qt=nt(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Sg=1,n.refreshPriority===-9999&&(ga=P)),F.tweenScroll=F.tweenScroll||{top:_g(N,Xe),left:_g(N,gn)},P.tweenTo=wt=F.tweenScroll[y.p],P.scrubDuration=function(gt){ut=ca(gt)&&gt,ut?L?L.duration(gt):L=St.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ut,paused:!0,onComplete:function(){return p&&p(P)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),Nt=0,l||(l=i.vars.id)),x&&((!hs(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Ee.style&&St.set(W?[Ee,vi]:N,{scrollBehavior:"auto"}),te.forEach(function(gt){return Ln(gt)&&gt.target===(W?De.scrollingElement||vi:N)&&(gt.smooth=!1)}),Vt=Ln(x.snapTo)?x.snapTo:x.snapTo==="labels"?Gb(i):x.snapTo==="labelsDirectional"?Wb(i):x.directional!==!1?function(gt,Gt){return Jf(x.snapTo)(gt,vn()-et<500?0:Gt.direction)}:St.utils.snap(x.snapTo),q=x.duration||{min:.1,max:2},q=hs(q)?ua(q.min,q.max):ua(q,q),K=St.delayedCall(x.delay||ut/2||.1,function(){var gt=nt(),Gt=vn()-et<500,Rt=wt.tween;if((Gt||Math.abs(P.getVelocity())<10)&&!Rt&&!fc&&$!==gt){var kt=(gt-Lt)/C,ze=i&&!I?i.totalProgress():kt,jt=Gt?0:(ze-se)/(vn()-oa)*1e3||0,Se=St.utils.clamp(-kt,1-kt,fo(jt/2)*jt/.185),$e=kt+(x.inertia===!1?0:Se),ve,xe,ue=x,Hn=ue.onStart,we=ue.onInterrupt,xn=ue.onComplete;if(ve=Vt($e,P),ca(ve)||(ve=$e),xe=Math.round(Lt+ve*C),gt<=D&&gt>=Lt&&xe!==gt){if(Rt&&!Rt._initted&&Rt.data<=fo(xe-gt))return;x.inertia===!1&&(Se=ve-kt),wt(xe,{duration:q(fo(Math.max(fo($e-ze),fo(ve-ze))*.185/jt/.05||0)),ease:x.ease||"power3",data:fo(xe-gt),onInterrupt:function(){return K.restart(!0)&&we&&we(P)},onComplete:function(){P.update(),$=nt(),i&&(L?L.resetTo("totalProgress",ve,i._tTime/i._tDur):i.progress(ve)),Nt=se=i&&!I?i.totalProgress():P.progress,v&&v(P),xn&&xn(P)}},gt,Se*C,xe-gt-Se*C),Hn&&Hn(P,wt.tween)}}else P.isActive&&$!==gt&&K.restart(!0)}).pause()),l&&(Hf[l]=P),d=P.trigger=Cn(d||u!==!0&&u),le=d&&d._gsap&&d._gsap.stRevert,le&&(le=le(P)),u=u===!0?d:Cn(u),Qn(a)&&(a={targets:d,className:a}),u&&(_===!1||_===ai||(_=!_&&u.parentNode&&u.parentNode.style&&li(u.parentNode).display==="flex"?!1:Ye),P.pin=u,At=St.core.getCache(u),At.spacer?w=At.pinState:(b&&(b=Cn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),At.spacerIsNative=!!b,b&&(At.spacerState=tc(b))),At.spacer=Q=b||De.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),At.pinState=w=tc(u)),n.force3D!==!1&&St.set(u,{force3D:!0}),P.spacer=Q=At.spacer,qt=li(u),it=qt[_+y.os2],ft=St.getProperty(u),lt=St.quickSetter(u,y.a,Qe),Of(u,Q,qt),j=tc(u)),z){ne=hs(z)?hg(z,ug):ug,k=jl("scroller-start",l,N,y,ne,0),Tt=jl("scroller-end",l,N,y,ne,0,k),J=k["offset"+y.op.d2];var Ne=Cn(tr(N,"content")||N);_e=this.markerStart=jl("start",l,Ne,y,ne,J,0,T),Ot=this.markerEnd=jl("end",l,Ne,y,ne,J,0,T),T&&(Ft=St.quickSetter([_e,Ot],y.a,Qe)),!Z&&!(_i.length&&tr(N,"fixedMarkers")===!0)&&(Hb(W?Ee:N),St.set([k,Tt],{force3D:!0}),Ut=St.quickSetter(k,y.a,Qe),yt=St.quickSetter(Tt,y.a,Qe))}if(T){var xt=T.vars.onUpdate,Et=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){P.update(0,0,1),xt&&xt.apply(T,Et||[])})}if(P.previous=function(){return ee[ee.indexOf(P)-1]},P.next=function(){return ee[ee.indexOf(P)+1]},P.revert=function(gt,Gt){if(!Gt)return P.kill(!0);var Rt=gt!==!1||!P.enabled,kt=_n;Rt!==P.isReverted&&(Rt&&(ht=Math.max(nt(),P.scroll.rec||0),vt=P.progress,dt=i&&i.progress()),_e&&[_e,Ot,k,Tt].forEach(function(ze){return ze.style.display=Rt?"none":"block"}),Rt&&(_n=P,P.update(Rt)),u&&(!E||!P.isActive)&&(Rt?qb(u,Q,w):Of(u,Q,li(u),ot)),Rt||P.update(Rt),_n=kt,P.isReverted=Rt)},P.refresh=function(gt,Gt,Rt,kt){if(!((_n||!P.enabled)&&!Gt)){if(u&&gt&&ci){nn(r,"scrollEnd",Dg);return}!In&&at&&at(P),_n=P,wt.tween&&!Rt&&(wt.tween.kill(),wt.tween=0),L&&L.pause(),g&&i&&i.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var ze=Pt(),jt=Kt(),Se=T?T.duration():Ii(N,y),$e=C<=.01,ve=0,xe=kt||0,ue=hs(Rt)?Rt.end:n.end,Hn=n.endTrigger||d,we=hs(Rt)?Rt.start:n.start||(n.start===0||!d?0:u?"0 0":"0 100%"),xn=P.pinnedContainer=n.pinnedContainer&&Cn(n.pinnedContainer,P),A=d&&Math.max(0,ee.indexOf(P))||0,U=A,V,H,O,rt,st,pt,Mt,Bt,Wt,bt,Yt,ce,fe;for(z&&hs(Rt)&&(ce=St.getProperty(k,y.p),fe=St.getProperty(Tt,y.p));U--;)pt=ee[U],pt.end||pt.refresh(0,1)||(_n=P),Mt=pt.pin,Mt&&(Mt===d||Mt===u||Mt===xn)&&!pt.isReverted&&(bt||(bt=[]),bt.unshift(pt),pt.revert(!0,!0)),pt!==ee[U]&&(A--,U--);for(Ln(we)&&(we=we(P)),we=og(we,"start",P),Lt=mg(we,d,ze,y,nt(),_e,k,P,jt,tt,Z,Se,T,P._startClamp&&"_startClamp")||(u?-.001:0),Ln(ue)&&(ue=ue(P)),Qn(ue)&&!ue.indexOf("+=")&&(~ue.indexOf(" ")?ue=(Qn(we)?we.split(" ")[0]:"")+ue:(ve=ic(ue.substr(2),ze),ue=Qn(we)?we:(T?St.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Lt):Lt)+ve,Hn=d)),ue=og(ue,"end",P),D=Math.max(Lt,mg(ue||(Hn?"100% 0":Se),Hn,ze,y,nt()+ve,Ot,Tt,P,jt,tt,Z,Se,T,P._endClamp&&"_endClamp"))||-.001,ve=0,U=A;U--;)pt=ee[U],Mt=pt.pin,Mt&&pt.start-pt._pinPush<=Lt&&!T&&pt.end>0&&(V=pt.end-(P._startClamp?Math.max(0,pt.start):pt.start),(Mt===d&&pt.start-pt._pinPush<Lt||Mt===xn)&&isNaN(we)&&(ve+=V*(1-pt.progress)),Mt===u&&(xe+=V));if(Lt+=ve,D+=ve,P._startClamp&&(P._startClamp+=ve),P._endClamp&&!In&&(P._endClamp=D||-.001,D=Math.min(D,Ii(N,y))),C=D-Lt||(Lt-=.01)&&.001,$e&&(vt=St.utils.clamp(0,1,St.utils.normalize(Lt,D,ht))),P._pinPush=xe,_e&&ve&&(V={},V[y.a]="+="+ve,xn&&(V[y.p]="-="+nt()),St.set([_e,Ot],V)),u&&!(Vf&&P.end>=Ii(N,y)))V=li(u),rt=y===Xe,O=nt(),mt=parseFloat(ft(y.a))+xe,!Se&&D>1&&(Yt=(W?De.scrollingElement||vi:N).style,Yt={style:Yt,value:Yt["overflow"+y.a.toUpperCase()]},W&&li(Ee)["overflow"+y.a.toUpperCase()]!=="scroll"&&(Yt.style["overflow"+y.a.toUpperCase()]="scroll")),Of(u,Q,V),j=tc(u),H=er(u,!0),Bt=Z&&ji(N,rt?gn:Xe)(),_?(ot=[_+y.os2,C+xe+Qe],ot.t=Q,U=_===Ye?hc(u,y)+C+xe:0,U&&(ot.push(y.d,U+Qe),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=U+Qe)),vo(ot),xn&&ee.forEach(function(Ge){Ge.pin===xn&&Ge.vars.pinSpacing!==!1&&(Ge._subPinOffset=!0)}),Z&&nt(ht)):(U=hc(u,y),U&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=U+Qe)),Z&&(st={top:H.top+(rt?O-Lt:Bt)+Qe,left:H.left+(rt?Bt:O-Lt)+Qe,boxSizing:"border-box",position:"fixed"},st[fs]=st["max"+xo]=Math.ceil(H.width)+Qe,st[ds]=st["max"+Zf]=Math.ceil(H.height)+Qe,st[ai]=st[ai+pa]=st[ai+fa]=st[ai+ma]=st[ai+da]="0",st[Ye]=V[Ye],st[Ye+pa]=V[Ye+pa],st[Ye+fa]=V[Ye+fa],st[Ye+ma]=V[Ye+ma],st[Ye+da]=V[Ye+da],G=Zb(w,st,E),In&&nt(0)),i?(Wt=i._initted,If(1),i.render(i.duration(),!0,!0),Xt=ft(y.a)-mt+C+xe,Dt=Math.abs(C-Xt)>1,Z&&Dt&&G.splice(G.length-2,2),i.render(0,!0,!0),Wt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),If(0)):Xt=C,Yt&&(Yt.value?Yt.style["overflow"+y.a.toUpperCase()]=Yt.value:Yt.style.removeProperty("overflow-"+y.a));else if(d&&nt()&&!T)for(H=d.parentNode;H&&H!==Ee;)H._pinOffset&&(Lt-=H._pinOffset,D-=H._pinOffset),H=H.parentNode;bt&&bt.forEach(function(Ge){return Ge.revert(!1,!0)}),P.start=Lt,P.end=D,Qt=Ht=In?ht:nt(),!T&&!In&&(Qt<ht&&nt(ht),P.scroll.rec=0),P.revert(!1,!0),et=vn(),K&&($=-1,K.restart(!0)),_n=0,i&&I&&(i._initted||dt)&&i.progress()!==dt&&i.progress(dt||0,!0).render(i.time(),!0,!0),($e||vt!==P.progress||T||g)&&(i&&!I&&i.totalProgress(T&&Lt<-.001&&!vt?St.utils.normalize(Lt,D,0):vt,!0),P.progress=$e||(Qt-Lt)/C===vt?0:vt),u&&_&&(Q._pinOffset=Math.round(P.progress*Xt)),L&&L.invalidate(),isNaN(ce)||(ce-=St.getProperty(k,y.p),fe-=St.getProperty(Tt,y.p),ec(k,y,ce),ec(_e,y,ce-(kt||0)),ec(Tt,y,fe),ec(Ot,y,fe-(kt||0))),$e&&!In&&P.update(),h&&!In&&!Ct&&(Ct=!0,h(P),Ct=!1)}},P.getVelocity=function(){return(nt()-Ht)/(vn()-oa)*1e3||0},P.endAnimation=function(){sa(P.callbackAnimation),i&&(L?L.progress(1):i.paused()?I||sa(i,P.direction<0,1):sa(i,i.reversed()))},P.labelToScroll=function(gt){return i&&i.labels&&(Lt||P.refresh()||Lt)+i.labels[gt]/i.duration()*C||0},P.getTrailing=function(gt){var Gt=ee.indexOf(P),Rt=P.direction>0?ee.slice(0,Gt).reverse():ee.slice(Gt+1);return(Qn(gt)?Rt.filter(function(kt){return kt.vars.preventOverlaps===gt}):Rt).filter(function(kt){return P.direction>0?kt.end<=Lt:kt.start>=D})},P.update=function(gt,Gt,Rt){if(!(T&&!Rt&&!gt)){var kt=In===!0?ht:P.scroll(),ze=gt?0:(kt-Lt)/C,jt=ze<0?0:ze>1?1:ze||0,Se=P.progress,$e,ve,xe,ue,Hn,we,xn,A;if(Gt&&(Ht=Qt,Qt=T?nt():kt,x&&(se=Nt,Nt=i&&!I?i.totalProgress():jt)),m&&u&&!_n&&!$l&&ci&&(!jt&&Lt<kt+(kt-Ht)/(vn()-oa)*m?jt=1e-4:jt===1&&D>kt+(kt-Ht)/(vn()-oa)*m&&(jt=.9999)),jt!==Se&&P.enabled){if($e=P.isActive=!!jt&&jt<1,ve=!!Se&&Se<1,we=$e!==ve,Hn=we||!!jt!=!!Se,P.direction=jt>Se?1:-1,P.progress=jt,Hn&&!_n&&(xe=jt&&!Se?0:jt===1?1:Se===1?2:3,I&&(ue=!we&&Y[xe+1]!=="none"&&Y[xe+1]||Y[xe],A=i&&(ue==="complete"||ue==="reset"||ue in i))),S&&(we||A)&&(A||f||!i)&&(Ln(S)?S(P):P.getTrailing(S).forEach(function(O){return O.endAnimation()})),I||(L&&!_n&&!$l?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",jt,i._tTime/i._tDur):(L.vars.totalProgress=jt,L.invalidate().restart())):i&&i.totalProgress(jt,!!(_n&&(et||gt)))),u){if(gt&&_&&(Q.style[_+y.os2]=it),!Z)lt(la(mt+Xt*jt));else if(Hn){if(xn=!gt&&jt>Se&&D+1>kt&&kt+1>=Ii(N,y),E)if(!gt&&($e||xn)){var U=er(u,!0),V=kt-Lt;gg(u,Ee,U.top+(y===Xe?V:0)+Qe,U.left+(y===Xe?0:V)+Qe)}else gg(u,Q);vo($e||xn?G:j),Dt&&jt<1&&$e||lt(mt+(jt===1&&!xn?Xt:0))}}x&&!wt.tween&&!_n&&!$l&&K.restart(!0),a&&(we||M&&jt&&(jt<1||!Lf))&&_a(a.targets).forEach(function(O){return O.classList[$e||M?"add":"remove"](a.className)}),o&&!I&&!gt&&o(P),Hn&&!_n?(I&&(A&&(ue==="complete"?i.pause().totalProgress(1):ue==="reset"?i.restart(!0).pause():ue==="restart"?i.restart(!0):i[ue]()),o&&o(P)),(we||!Lf)&&(c&&we&&Uf(P,c),X[xe]&&Uf(P,X[xe]),M&&(jt===1?P.kill(!1,1):X[xe]=0),we||(xe=jt===1?1:3,X[xe]&&Uf(P,X[xe]))),R&&!$e&&Math.abs(P.getVelocity())>(ca(R)?R:2500)&&(sa(P.callbackAnimation),L?L.progress(1):sa(i,ue==="reverse"?1:!jt,1))):I&&o&&!_n&&o(P)}if(yt){var H=T?kt/T.duration()*(T._caScrollDist||0):kt;Ut(H+(k._isFlipped?1:0)),yt(H)}Ft&&Ft(-kt/T.duration()*(T._caScrollDist||0))}},P.enable=function(gt,Gt){P.enabled||(P.enabled=!0,nn(N,"resize",ha),W||nn(N,"scroll",po),at&&nn(r,"refreshInit",at),gt!==!1&&(P.progress=vt=0,Qt=Ht=$=nt()),Gt!==!1&&P.refresh())},P.getTween=function(gt){return gt&&wt?wt.tween:L},P.setPositions=function(gt,Gt,Rt,kt){if(T){var ze=T.scrollTrigger,jt=T.duration(),Se=ze.end-ze.start;gt=ze.start+Se*gt/jt,Gt=ze.start+Se*Gt/jt}P.refresh(!1,!1,{start:ag(gt,Rt&&!!P._startClamp),end:ag(Gt,Rt&&!!P._endClamp)},kt),P.update()},P.adjustPinSpacing=function(gt){if(ot&&gt){var Gt=ot.indexOf(y.d)+1;ot[Gt]=parseFloat(ot[Gt])+gt+Qe,ot[1]=parseFloat(ot[1])+gt+Qe,vo(ot)}},P.disable=function(gt,Gt){if(P.enabled&&(gt!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Gt||L&&L.pause(),ht=0,At&&(At.uncache=1),at&&en(r,"refreshInit",at),K&&(K.pause(),wt.tween&&wt.tween.kill()&&(wt.tween=0)),!W)){for(var Rt=ee.length;Rt--;)if(ee[Rt].scroller===N&&ee[Rt]!==P)return;en(N,"resize",ha),W||en(N,"scroll",po)}},P.kill=function(gt,Gt){P.disable(gt,Gt),L&&!Gt&&L.kill(),l&&delete Hf[l];var Rt=ee.indexOf(P);Rt>=0&&ee.splice(Rt,1),Rt===Pn&&sc>0&&Pn--,Rt=0,ee.forEach(function(kt){return kt.scroller===P.scroller&&(Rt=1)}),Rt||In||(P.scroll.rec=0),i&&(i.scrollTrigger=null,gt&&i.revert({kill:!1}),Gt||i.kill()),_e&&[_e,Ot,k,Tt].forEach(function(kt){return kt.parentNode&&kt.parentNode.removeChild(kt)}),ga===P&&(ga=0),u&&(At&&(At.uncache=1),Rt=0,ee.forEach(function(kt){return kt.pin===u&&Rt++}),Rt||(At.spacer=0)),n.onKill&&n.onKill(P)},ee.push(P),P.enable(!1,!1),le&&le(P),i&&i.add&&!C){var $t=P.update;P.update=function(){P.update=$t,Lt||D||P.refresh()},St.delayedCall(.01,P.update),C=.01,Lt=D=0}else P.refresh();u&&Yb()},r.register=function(n){return mo||(St=n||Ag(),Eg()&&window.document&&r.enable(),mo=aa),mo},r.defaults=function(n){if(n)for(var i in n)Ql[i]=n[i];return Ql},r.disable=function(n,i){aa=0,ee.forEach(function(o){return o[i?"kill":"disable"](n)}),en(re,"wheel",po),en(De,"scroll",po),clearInterval(ql),en(De,"touchcancel",Pi),en(Ee,"touchstart",Pi),Jl(en,De,"pointerdown,touchstart,mousedown",lg),Jl(en,De,"pointerup,touchend,mouseup",cg),lc.kill(),Zl(en);for(var s=0;s<te.length;s+=3)Kl(en,te[s],te[s+1]),Kl(en,te[s],te[s+2])},r.enable=function(){if(re=window,De=document,vi=De.documentElement,Ee=De.body,St&&(_a=St.utils.toArray,ua=St.utils.clamp,zf=St.core.context||Pi,If=St.core.suppressOverwrites||Pi,Xf=re.history.scrollRestoration||"auto",Gf=re.pageYOffset,St.core.globals("ScrollTrigger",r),Ee)){aa=1,_o=document.createElement("div"),_o.style.height="100vh",_o.style.position="absolute",Og(),kb(),Be.register(St),r.isTouch=Be.isTouch,Ir=Be.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),kf=Be.isTouch===1,nn(re,"wheel",po),Mg=[re,De,vi,Ee],St.matchMedia?(r.matchMedia=function(l){var c=St.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},St.addEventListener("matchMediaInit",function(){return Kf()}),St.addEventListener("matchMediaRevert",function(){return Ug()}),St.addEventListener("matchMedia",function(){us(0,1),_s("matchMedia")}),St.matchMedia("(orientation: portrait)",function(){return Nf(),Nf})):console.warn("Requires GSAP 3.11.0 or later"),Nf(),nn(De,"scroll",po);var n=Ee.style,i=n.borderTopStyle,s=St.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=er(Ee),Xe.m=Math.round(o.top+Xe.sc())||0,gn.m=Math.round(o.left+gn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),ql=setInterval(fg,250),St.delayedCall(.5,function(){return $l=0}),nn(De,"touchcancel",Pi),nn(Ee,"touchstart",Pi),Jl(nn,De,"pointerdown,touchstart,mousedown",lg),Jl(nn,De,"pointerup,touchend,mouseup",cg),Bf=St.utils.checkPrefix("transform"),oc.push(Bf),mo=vn(),lc=St.delayedCall(.2,us).pause(),go=[De,"visibilitychange",function(){var l=re.innerWidth,c=re.innerHeight;De.hidden?(rg=l,sg=c):(rg!==l||sg!==c)&&ha()},De,"DOMContentLoaded",us,re,"load",us,re,"resize",ha],Zl(nn),ee.forEach(function(l){return l.enable(0,1)}),a=0;a<te.length;a+=3)Kl(en,te[a],te[a+1]),Kl(en,te[a],te[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Lf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ql)||(ql=i)&&setInterval(fg,i),"ignoreMobileResize"in n&&(kf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Zl(en)||Zl(nn,n.autoRefreshEvents||"none"),bg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Cn(n),o=te.indexOf(s),a=ms(s);~o&&te.splice(o,a?6:2),i&&(a?_i.unshift(re,i,Ee,i,vi,i):_i.unshift(s,i))},r.clearMatchMedia=function(n){ee.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Qn(n)?Cn(n):n).getBoundingClientRect(),a=o[s?fs:ds]*i||0;return s?o.right-a>0&&o.left+a<re.innerWidth:o.bottom-a>0&&o.top+a<re.innerHeight},r.positionInViewport=function(n,i,s){Qn(n)&&(n=Cn(n));var o=n.getBoundingClientRect(),a=o[s?fs:ds],l=i==null?a/2:i in uc?uc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/re.innerWidth:(o.top+l)/re.innerHeight},r.killAll=function(n){if(ee.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=gs.killAll||[];gs={},i.forEach(function(s){return s()})}},r}();zt.version="3.12.5";zt.saveStyles=function(r){return r?_a(r).forEach(function(t){if(t&&t.style){var e=Kn.indexOf(t);e>=0&&Kn.splice(e,5),Kn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),St.core.getCache(t),zf())}}):Kn};zt.revert=function(r,t){return Kf(!r,t)};zt.create=function(r,t){return new zt(r,t)};zt.refresh=function(r){return r?ha():(mo||zt.register())&&us(!0)};zt.update=function(r){return++te.cache&&nr(r===!0?2:0)};zt.clearScrollMemory=Ng;zt.maxScroll=function(r,t){return Ii(r,t?gn:Xe)};zt.getScrollFunc=function(r,t){return ji(Cn(r),t?gn:Xe)};zt.getById=function(r){return Hf[r]};zt.getAll=function(){return ee.filter(function(r){return r.vars.id!=="ScrollSmoother"})};zt.isScrolling=function(){return!!ci};zt.snapDirectional=Jf;zt.addEventListener=function(r,t){var e=gs[r]||(gs[r]=[]);~e.indexOf(t)||e.push(t)};zt.removeEventListener=function(r,t){var e=gs[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};zt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var f=[],d=[],u=St.delayedCall(i,function(){h(f,d),f=[],d=[]}).pause();return function(_){f.length||u.restart(!0),f.push(_.trigger),d.push(_),s<=f.length&&u.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Ln(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Ln(s)&&(s=s(),nn(zt,"refresh",function(){return s=t.batchMax()})),_a(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(zt.create(c))}),e};var vg=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Ff=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Be.isTouch?" pinch-zoom":""):"none",t===vi&&r(Ee,e)},nc={auto:1,scroll:1},Kb=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||St.core.getCache(s),a=vn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Ee&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(nc[(l=li(s)).overflowY]||nc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ms(s)&&(nc[(l=li(s)).overflowY]||nc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Bg=function(t,e,n,i){return Be.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Kb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&nn(De,Be.eventTypes[0],yg,!1,!0)},onDisable:function(){return en(De,Be.eventTypes[0],yg,!0)}})},Qb=/(input|label|select|textarea)/i,xg,yg=function(t){var e=Qb.test(t.target.tagName);(e||xg)&&(t._gsapAllow=!0,xg=e)},jb=function(t){hs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Cn(t.target)||vi,h=St.core.globals().ScrollSmoother,f=h&&h.get(),d=Ir&&(t.content&&Cn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),u=ji(c,Xe),_=ji(c,gn),g=1,m=(Be.isTouch&&re.visualViewport?re.visualViewport.scale*re.visualViewport.width:re.outerWidth)/re.innerWidth,p=0,v=Ln(i)?function(){return i(a)}:function(){return i||2.8},M,x,E=Bg(c,t.type,!0,s),b=function(){return x=!1},T=Pi,R=Pi,S=function(){l=Ii(c,Xe),R=ua(Ir?1:0,l),n&&(T=ua(0,Ii(c,gn))),M=ps},y=function(){d._gsap.y=la(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},I=function(){if(x){requestAnimationFrame(b);var z=la(a.deltaY/2),tt=R(u.v-z);if(d&&tt!==u.v+u.offset){u.offset=tt-u.v;var P=la((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",u.cacheID=te.cache,nr()}return!0}u.offset&&y(),x=!0},N,F,W,Z,X=function(){S(),N.isActive()&&N.vars.scrollY>l&&(u()>l?N.progress(1)&&u(l):N.resetTo("scrollY",l))};return d&&St.set(d,{y:"+=0"}),t.ignoreCheck=function(Y){return Ir&&Y.type==="touchmove"&&I(Y)||g>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},t.onPress=function(){x=!1;var Y=g;g=la((re.visualViewport&&re.visualViewport.scale||1)/m),N.pause(),Y!==g&&Ff(c,g>1.01?!0:n?!1:"x"),F=_(),W=u(),S(),M=ps},t.onRelease=t.onGestureStart=function(Y,z){if(u.offset&&y(),!z)Z.restart(!0);else{te.cache++;var tt=v(),P,at;n&&(P=_(),at=P+tt*.05*-Y.velocityX/.227,tt*=vg(_,P,at,Ii(c,gn)),N.vars.scrollX=T(at)),P=u(),at=P+tt*.05*-Y.velocityY/.227,tt*=vg(u,P,at,Ii(c,Xe)),N.vars.scrollY=R(at),N.invalidate().duration(tt).play(.01),(Ir&&N.vars.scrollY>=l||P>=l-1)&&St.to({},{onUpdate:X,duration:tt})}o&&o(Y)},t.onWheel=function(){N._ts&&N.pause(),vn()-p>1e3&&(M=0,p=vn())},t.onChange=function(Y,z,tt,P,at){if(ps!==M&&S(),z&&n&&_(T(P[2]===z?F+(Y.startX-Y.x):_()+z-P[1])),tt){u.offset&&y();var Pt=at[2]===tt,Kt=Pt?W+Y.startY-Y.y:u()+tt-at[1],$=R(Kt);Pt&&Kt!==$&&(W+=$-Kt),u($)}(tt||z)&&nr()},t.onEnable=function(){Ff(c,n?!1:"x"),zt.addEventListener("refresh",X),nn(re,"resize",X),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=_.smooth=!1),E.enable()},t.onDisable=function(){Ff(c,!0),en(re,"resize",X),zt.removeEventListener("refresh",X),E.kill()},t.lockAxis=t.lockAxis!==!1,a=new Be(t),a.iOS=Ir,Ir&&!u()&&u(1),Ir&&St.ticker.add(Pi),Z=a._dc,N=St.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Fg(u,u(),function(){return N.pause()})},onUpdate:nr,onComplete:Z.vars.onComplete}),a};zt.sort=function(r){return ee.sort(r||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};zt.observe=function(r){return new Be(r)};zt.normalizeScroll=function(r){if(typeof r>"u")return Rn;if(r===!0&&Rn)return Rn.enable();if(r===!1){Rn&&Rn.kill(),Rn=r;return}var t=r instanceof Be?r:jb(r);return Rn&&Rn.target===t.target&&Rn.kill(),ms(t.target)&&(Rn=t),t};zt.core={_getVelocityProp:Yl,_inputObserver:Bg,_scrollers:te,_proxies:_i,bridge:{ss:function(){ci||_s("scrollStart"),ci=vn()},ref:function(){return _n}}};Ag()&&St.registerPlugin(zt);function zg(r,t,e){return Math.max(r,Math.min(t,e))}var Qf=class{constructor(){this.isRunning=!1,this.value=0,this.from=0,this.to=0,this.currentTime=0}advance(t){var e;if(!this.isRunning)return;let n=!1;if(this.duration&&this.easing){this.currentTime+=t;let i=zg(0,this.currentTime/this.duration,1);n=i>=1;let s=n?1:this.easing(i);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=function(s,o,a,l){return function(h,f,d){return(1-d)*h+d*f}(s,o,1-Math.exp(-a*l))}(this.value,this.to,60*this.lerp,t),Math.round(this.value)===this.to&&(this.value=this.to,n=!0)):(this.value=this.to,n=!0);n&&this.stop(),(e=this.onUpdate)===null||e===void 0||e.call(this,this.value,n)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n,duration:i,easing:s,onStart:o,onUpdate:a}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,o?.(),this.onUpdate=a}},jf=class{constructor(t,e,{autoResize:n=!0,debounce:i=250}={}){this.wrapper=t,this.content=e,this.width=0,this.height=0,this.scrollHeight=0,this.scrollWidth=0,this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)},n&&(this.debouncedResize=function(o,a){let l;return function(...c){let h=this;clearTimeout(l),l=setTimeout(()=>{l=void 0,o.apply(h,c)},a)}}(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)===null||t===void 0||t.disconnect(),(e=this.contentResizeObserver)===null||e===void 0||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},dc=class{constructor(){this.events={}}emit(t,...e){var n;let i=this.events[t]||[];for(let s=0,o=i.length;s<o;s++)(n=i[s])===null||n===void 0||n.call(i,...e)}on(t,e){var n;return!((n=this.events[t])===null||n===void 0)&&n.push(e)||(this.events[t]=[e]),()=>{var i;this.events[t]=(i=this.events[t])===null||i===void 0?void 0:i.filter(s=>e!==s)}}off(t,e){var n;this.events[t]=(n=this.events[t])===null||n===void 0?void 0:n.filter(i=>e!==i)}destroy(){this.events={}}},kg=100/6,Lr={passive:!1},td=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){this.element=t,this.options=e,this.touchStart={x:0,y:0},this.lastDelta={x:0,y:0},this.window={width:0,height:0},this.emitter=new dc,this.onTouchStart=n=>{let{clientX:i,clientY:s}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=i,this.touchStart.y=s,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})},this.onTouchMove=n=>{let{clientX:i,clientY:s}=n.targetTouches?n.targetTouches[0]:n,o=-(i-this.touchStart.x)*this.options.touchMultiplier,a=-(s-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=i,this.touchStart.y=s,this.lastDelta={x:o,y:a},this.emitter.emit("scroll",{deltaX:o,deltaY:a,event:n})},this.onTouchEnd=n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})},this.onWheel=n=>{let{deltaX:i,deltaY:s,deltaMode:o}=n;i*=o===1?kg:o===2?this.window.width:1,s*=o===1?kg:o===2?this.window.height:1,i*=this.options.wheelMultiplier,s*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:n})},this.onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}},window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Lr),this.element.addEventListener("touchstart",this.onTouchStart,Lr),this.element.addEventListener("touchmove",this.onTouchMove,Lr),this.element.addEventListener("touchend",this.onTouchEnd,Lr)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Lr),this.element.removeEventListener("touchstart",this.onTouchStart,Lr),this.element.removeEventListener("touchmove",this.onTouchMove,Lr),this.element.removeEventListener("touchend",this.onTouchEnd,Lr)}},pc=class{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:n=t,smoothWheel:i=!0,syncTouch:s=!1,syncTouchLerp:o=.075,touchInertiaMultiplier:a=35,duration:l,easing:c=x=>Math.min(1,1.001-Math.pow(2,-10*x)),lerp:h=.1,infinite:f=!1,orientation:d="vertical",gestureOrientation:u="vertical",touchMultiplier:_=1,wheelMultiplier:g=1,autoResize:m=!0,prevent:p,virtualScroll:v,__experimental__naiveDimensions:M=!1}={}){this._isScrolling=!1,this._isStopped=!1,this._isLocked=!1,this._preventNextNativeScrollEvent=!1,this._resetVelocityTimeout=null,this.time=0,this.userData={},this.lastVelocity=0,this.velocity=0,this.direction=0,this.animate=new Qf,this.emitter=new dc,this.onPointerDown=x=>{x.button===1&&this.reset()},this.onVirtualScroll=x=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(x)===!1)return;let{deltaX:E,deltaY:b,event:T}=x;if(this.emitter.emit("virtual-scroll",{deltaX:E,deltaY:b,event:T}),T.ctrlKey)return;let R=T.type.includes("touch"),S=T.type.includes("wheel");if(this.isTouching=T.type==="touchstart"||T.type==="touchmove",this.options.syncTouch&&R&&T.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();let y=E===0&&b===0,I=this.options.gestureOrientation==="vertical"&&b===0||this.options.gestureOrientation==="horizontal"&&E===0;if(y||I)return;let N=T.composedPath();N=N.slice(0,N.indexOf(this.rootElement));let F=this.options.prevent;if(N.find(Y=>{var z,tt,P,at,Pt;return Y instanceof HTMLElement&&(typeof F=="function"&&F?.(Y)||((z=Y.hasAttribute)===null||z===void 0?void 0:z.call(Y,"data-lenis-prevent"))||R&&((tt=Y.hasAttribute)===null||tt===void 0?void 0:tt.call(Y,"data-lenis-prevent-touch"))||S&&((P=Y.hasAttribute)===null||P===void 0?void 0:P.call(Y,"data-lenis-prevent-wheel"))||((at=Y.classList)===null||at===void 0?void 0:at.contains("lenis"))&&!(!((Pt=Y.classList)===null||Pt===void 0)&&Pt.contains("lenis-stopped")))}))return;if(this.isStopped||this.isLocked)return void T.preventDefault();if(!(this.options.syncTouch&&R||this.options.smoothWheel&&S))return this.isScrolling="native",void this.animate.stop();T.preventDefault();let W=b;this.options.gestureOrientation==="both"?W=Math.abs(b)>Math.abs(E)?b:E:this.options.gestureOrientation==="horizontal"&&(W=E);let Z=R&&this.options.syncTouch,X=R&&T.type==="touchend"&&Math.abs(W)>5;X&&(W=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+W,Object.assign({programmatic:!1},Z?{lerp:X?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent)this._preventNextNativeScrollEvent=!1;else if(this.isScrolling===!1||this.isScrolling==="native"){let x=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-x,this.direction=Math.sign(this.animatedScroll-x),this.isScrolling="native",this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}},window.lenisVersion="1.1.13",t&&t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,eventsTarget:n,smoothWheel:i,syncTouch:s,syncTouchLerp:o,touchInertiaMultiplier:a,duration:l,easing:c,lerp:h,infinite:f,gestureOrientation:u,orientation:d,touchMultiplier:_,wheelMultiplier:g,autoResize:m,prevent:p,virtualScroll:v,__experimental__naiveDimensions:M},this.dimensions=new jf(t,e,{autoResize:m}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new td(n,{touchMultiplier:_,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){let e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:n=!1,lock:i=!1,duration:s=this.options.duration,easing:o=this.options.easing,lerp:a=this.options.lerp,onStart:l,onComplete:c,force:h=!1,programmatic:f=!0,userData:d}={}){if(!this.isStopped&&!this.isLocked||h){if(typeof t=="string"&&["top","left","start"].includes(t))t=0;else if(typeof t=="string"&&["bottom","right","end"].includes(t))t=this.limit;else{let u;if(typeof t=="string"?u=document.querySelector(t):t instanceof HTMLElement&&t?.nodeType&&(u=t),u){if(this.options.wrapper!==window){let g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}let _=u.getBoundingClientRect();t=(this.isHorizontal?_.left:_.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=e,t=Math.round(t),this.options.infinite?f&&(this.targetScroll=this.animatedScroll=this.scroll):t=zg(0,t,this.limit),t===this.targetScroll)return l?.(this),void(c==null||c(this));if(this.userData=d??{},n)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),void(this.userData={});f||(this.targetScroll=t),this.animate.fromTo(this.animatedScroll,t,{duration:s,easing:o,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(u,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=u-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=u,this.setScroll(this.scroll),f&&(this.targetScroll=u),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?function(e,n){return(e%n+n)%n}(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};ge.registerPlugin(zt);var ct=(r,t=document)=>t.querySelector(r),Ue=(r,t=document)=>[...t.querySelectorAll(r)],xi=matchMedia("(prefers-reduced-motion: reduce)").matches,t1=matchMedia("(hover: none)").matches,Dr=r=>"$"+r.toLocaleString("en-US"),Vg=r=>"$"+r.toLocaleString("en-US",{minimumFractionDigits:Number.isInteger(r)?0:2,maximumFractionDigits:2}),ld=[{id:"p1",name:"Gul organza set",fabric:"Organza, floral threadwork, 3 pieces",price:248,img:"look",pos:"50% 20%",col:"lawn",tag:"New",occ:["guest","party"],feel:"light",pal:"pastel",why:"Soft ivory organza with pink and sage flowers. Light enough to dance in all night."},{id:"p2",name:"Sabz chikan kurta",fabric:"Cotton lawn, chikankari",price:132,img:"lawn",pos:"50% 25%",col:"lawn",occ:["day","party"],feel:"light",pal:"pastel",why:"Featherweight lawn with white chikankari. Cool on the hottest days."},{id:"p3",name:"Anaar raw-silk set",fabric:"Raw silk, gota patti",price:286,img:"festive",pos:"50% 25%",col:"festive",tag:"Few left",occ:["party","guest"],feel:"rich",pal:"jewel",why:"Pomegranate raw silk edged in gold gota that catches every lamp in the room."},{id:"p4",name:"Shisha mirror dupatta",fabric:"Silk, hand mirror work",price:74,img:"mirror",pos:"50% 50%",col:"festive",occ:["party","day","guest"],feel:"rich",pal:"jewel",why:"One dupatta that turns a plain outfit festive. Hundreds of hand-set mirrors."},{id:"p5",name:"Neel block-print co-ord",fabric:"Cotton, hand block print",price:98,img:"pret",pos:"50% 30%",col:"pret",occ:["day"],feel:"light",pal:"indigo",why:"Cool cotton, easy to wash, and printed by hand in natural indigo."},{id:"p6",name:"Surkh zardozi lehenga",fabric:"Velvet, zardozi, made to order",price:2400,img:"bridal",pos:"50% 30%",col:"bridal",fitting:!0,occ:["bride"],feel:"rich",pal:"jewel",why:"Crimson velvet worked in gold zardozi over eight weeks, fitted to you."}],mc=[{id:"l1",name:"Gul organza kurta",note:"Ivory, pink and sage threadwork",price:164,pos:"50% 38%"},{id:"l2",name:"Scalloped organza dupatta",note:"Blush, embroidered edge",price:72,pos:"72% 58%"},{id:"l3",name:"Embroidered straight trousers",note:"Ivory cotton silk",price:48,pos:"45% 86%"},{id:"l4",name:"Embroidered juttis",note:"Hand-stitched leather",price:56,pos:"45% 98%"},{id:"l5",name:"Gold drop earrings",note:"Gold-plated silver",price:38,pos:"54% 10%"}],ir=Object.fromEntries([...ld,...mc.map(r=>({...r,img:"look"}))].map(r=>[r.id,r]));function e1(r,t,e){let n=document.createElement("canvas");n.width=t,n.height=e;let i=document.createElement("canvas");i.width=t/2,i.height=e/2;let s=n.getContext("2d"),o=i.getContext("2d");o.scale(.5,.5);let a=(()=>{let v=1234+r*99;return()=>(v=v*16807%2147483647)/2147483647})(),l=[{base:"#CFE5D6",a:"#FFFFFF",b:"#F2FBF4",gold:null},{base:"#8C1336",a:"#E7B558",b:"#F0C878",gold:"#E7B558"},{base:"#8A0C1C",a:"#E9C066",b:"#CFC8BA",gold:"#E9C066"},{base:"#22386A",a:"#EEF1F7",b:"#C9D3E8",gold:null},{base:"#B0185E",a:"#F29A1D",b:"#1F8A54",gold:"#E9C066"}][r],c=(v,M=0)=>{s.save(),v(s,!1),s.restore(),M>0&&(o.save(),v(o,!0,M),o.restore())};s.fillStyle=l.base,s.fillRect(0,0,t,e),o.fillStyle="#000",o.fillRect(0,0,t,e);let h=(v,M,x,E,b,T,R=0)=>{v.fillStyle=T;for(let S=0;S<b;S++){let y=R+S/b*Math.PI*2;v.beginPath(),v.ellipse(M+Math.cos(y)*E*.55,x+Math.sin(y)*E*.55,E*.5,E*.24,y,0,Math.PI*2),v.fill()}v.beginPath(),v.arc(M,x,E*.18,0,Math.PI*2),v.fill()},f=(v,M,x,E,b,T)=>{v.fillStyle=T,v.beginPath(),v.ellipse(M,x,E,E*.38,b,0,Math.PI*2),v.fill()},d=(v,M,x)=>{let E=0;for(let b=M*.5;b<e;b+=M,E++)for(let T=E%2?v:v*.5;T<t;T+=v)x(T,b,E)},u=t*.11;r===0&&c(v=>{d(64,76,(M,x,E)=>{if(!(M<u+10||M>t-u-10)){v.globalAlpha=.92,E%2?h(v,M,x,13,6,l.a,.3):(v.strokeStyle=l.a,v.lineWidth=1.6,v.beginPath(),v.moveTo(M-14,x+10),v.quadraticCurveTo(M,x-14,M+14,x+10),v.stroke(),f(v,M-9,x+2,6,-.9,l.a),f(v,M+9,x+2,6,.9,l.a),v.beginPath(),v.arc(M,x-4,2.4,0,7),v.fill()),v.fillStyle=l.b;for(let b=0;b<4;b++)v.beginPath(),v.arc(M+30*Math.cos(b*1.57+.78),x+30*Math.sin(b*1.57+.78),1.6,0,7),v.fill()}}),v.globalAlpha=.55,v.fillStyle="#fff",v.fillRect(0,0,u,e),v.fillRect(t-u,0,u,e),v.globalAlpha=1;for(let M=0;M<e;M+=30)h(v,u*.5,M+15,10,5,"#fff",M),h(v,t-u*.5,M+15,10,5,"#fff",M);v.strokeStyle="#fff",v.lineWidth=2;for(let M=0;M<e;M+=22)v.beginPath(),v.arc(u+2,M+11,9,-Math.PI/2,Math.PI/2),v.stroke(),v.beginPath(),v.arc(t-u-2,M+11,9,Math.PI/2,Math.PI*1.5),v.stroke()}),r===1&&c((v,M)=>{let x=M?"#fff":l.a;if(d(70,84,(E,b)=>{if(!(E<u+12||E>t-u-12)){h(v,E,b,14,6,x,a()*.3),v.fillStyle=x;for(let T=0;T<6;T++)v.beginPath(),v.arc(E+26*Math.cos(T*1.047),b+26*Math.sin(T*1.047),1.8,0,7),v.fill()}}),v.fillStyle=x,v.fillRect(0,0,u,e),v.fillRect(t-u,0,u,e),v.fillRect(0,0,t,46),v.fillRect(0,e-46,t,46),!M){v.strokeStyle=l.base,v.lineWidth=2.2;for(let E of[u*.5,t-u*.5]){v.beginPath();for(let b=0;b<=e;b+=4)v.lineTo(E+Math.sin(b*.06)*u*.22,b);v.stroke();for(let b=10;b<e;b+=52)f(v,E+Math.sin(b*.06)*u*.22+9,b,8,.6,l.base),f(v,E+Math.sin((b+26)*.06)*u*.22-9,b+26,8,-.6,l.base)}}},1),r===2&&c((v,M)=>{let x=M?"#fff":l.a,E=M?"#bbb":l.b;v.strokeStyle=x,v.lineWidth=3.2;let b=92,T=22,R=Math.PI*2/180;for(let S=u+b*.5;S<t-u;S+=b){for(let y of[1,-1]){v.beginPath();for(let I=0;I<=e;I+=3)v.lineTo(S+y*T*Math.sin(I*R),I);v.stroke()}for(let y=0;y<e;y+=90)h(v,S,y,16,8,x,.2),v.fillStyle=E,v.beginPath(),v.arc(S,y,3.5,0,7),v.fill();for(let y=45;y<e;y+=90)h(v,S+b*.5,y,9,5,E,0)}if(v.fillStyle=x,v.fillRect(0,0,u,e),v.fillRect(t-u,0,u,e),v.fillRect(0,0,t,60),v.fillRect(0,e-60,t,60),!M){v.fillStyle=l.base;for(let S=0;S<e;S+=26)v.beginPath(),v.arc(u,S+13,10,-Math.PI/2,Math.PI/2),v.fill(),v.beginPath(),v.arc(t-u,S+13,10,Math.PI/2,Math.PI*1.5),v.fill();for(let S=20;S<e;S+=40)h(v,u*.45,S,11,6,"#B8862F",0),h(v,t-u*.45,S,11,6,"#B8862F",0)}},1),r===3&&c(v=>{d(78,92,(M,x)=>{if(M<u+8||M>t-u-8)return;let E=()=>(a()-.5)*2.4;v.globalAlpha=.78+a()*.22,v.strokeStyle=l.a,v.fillStyle=l.a,v.lineWidth=3,v.beginPath(),v.moveTo(M+E(),x-22+E()),v.lineTo(M+18+E(),x+E()),v.lineTo(M+E(),x+22+E()),v.lineTo(M-18+E(),x+E()),v.closePath(),v.stroke(),v.beginPath(),v.arc(M,x,4.5,0,7),v.fill();for(let[b,T]of[[0,-32],[0,32],[-28,0],[28,0]])v.beginPath(),v.arc(M+b+E(),x+T+E(),2.4,0,7),v.fill()}),v.globalAlpha=.9,v.fillStyle=l.a;for(let M of[0,t-u]){v.fillRect(M+(M?0:u-4),0,4,e);for(let x=0;x<e;x+=24)v.beginPath(),v.moveTo(M+6,x),v.lineTo(M+u-10,x+12),v.lineTo(M+6,x+24),v.fill()}}),r===4&&c((v,M,x)=>{d(74,80,(E,b,T)=>{if(E<u+16||E>t-u-16)return;let R=T%3===0?l.a:T%3===1?l.b:l.gold;if(!M){v.fillStyle=R;for(let S=0;S<22;S++){let y=S/22*6.283;v.save(),v.translate(E+Math.cos(y)*17,b+Math.sin(y)*17),v.rotate(y),v.fillRect(-4,-1.3,8,2.6),v.restore()}for(let S=0;S<6;S++){let y=S/6*6.283+.5;f(v,E+Math.cos(y)*29,b+Math.sin(y)*29,5,y,l.a)}}v.fillStyle=M?"#fff":"#DDE6EC",v.beginPath(),v.arc(E,b,12,0,7),v.fill(),v.fillStyle=M?"#999":l.gold;for(let S=0;S<4;S++){let y=S*1.57+.78;v.beginPath(),v.arc(E+Math.cos(y)*34,b+Math.sin(y)*34,3.2,0,7),v.fill()}}),v.fillStyle=M?"#ddd":l.gold,v.fillRect(0,0,u*.35,e),v.fillRect(t-u*.35,0,u*.35,e),v.fillRect(0,0,t,40),v.fillRect(0,e-40,t,40);for(let E=18;E<e;E+=34){v.fillStyle=M?"#fff":"#DDE6EC";for(let b of[u*.7,t-u*.7])v.beginPath(),v.arc(b,E,7,0,7),v.fill()}},1);let _=s.getImageData(0,0,t,e),g=_.data;for(let v=0;v<g.length;v+=4){let M=v/4%t,x=v/4/t|0,E=(M&1^x&1?5:-5)+(a()-.5)*10;g[v]+=E,g[v+1]+=E,g[v+2]+=E}s.putImageData(_,0,0);let m=new ko(n);m.colorSpace=Mn,m.anisotropy=8;let p=new ko(i);return{map:m,mask:p}}var xc=ct("#stage"),xs,gc,yo,Ms,id,xa,yc,Mc,Li=[],Pe={a:4,b:4,m:0,target:4,prevTarget:4},qe={ndc:new he(-9,-9),moved:!1,speed:0,lastX:0,lastY:0},Ec=!0,n1=`
uniform float uTime, uAmp, uStr, uW, uL;
uniform vec2 uHit;
varying vec2 vUv; varying vec3 vN; varying vec3 vWPos; varying vec3 vT;
vec3 P(vec2 uv){
  float t = uTime, u = uv.x, v = uv.y;
  vec3 p = vec3((u - .5) * uW, (v - .5) * uL, 0.);
  float flutter = .35 + .65 * smoothstep(0., 1., 1. - v);
  float z = sin(v * 5.5 - t * 1.05 + u * 1.3) * .34
          + sin(v * 12.5 + t * 1.6 - u * 2.6) * .07
          + sin(u * 4.6 + v * 3.1 + t * .8) * .11;
  z *= uAmp * flutter;
  z += (u - .5) * sin(v * 3.6 + t * .55) * .9 * uAmp;        // twist along its length
  p.x += sin(v * 2.4 + t * .4) * .25 * uAmp;                 // lazy S-curve
  vec2 d = (uv - uHit) * vec2(uW, uL);
  float r = length(d);
  z += uStr * exp(-r * r * 2.2) * cos(r * 7. - t * 7.) * .42;  // finger ripple
  p.z += z;
  return p;
}
void main(){
  vUv = uv;
  vec3 p = P(uv);
  vec3 pu = P(uv + vec2(.004, 0.)), pv = P(uv + vec2(0., .002));
  vec3 n = normalize(cross(pu - p, pv - p));
  vN = normalize(mat3(modelMatrix) * n);
  vT = normalize(mat3(modelMatrix) * (pv - p));
  vec4 w = modelMatrix * vec4(p, 1.);
  vWPos = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,i1=`
uniform sampler2D uMapA, uMapB, uMaskA, uMaskB;
uniform float uMix, uTime, uOpacity, uWeave;
uniform vec3 uSheen;
varying vec2 vUv; varying vec3 vN; varying vec3 vWPos; varying vec3 vT;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main(){
  // fringe threads at both ends
  float endD = min(vUv.y, 1. - vUv.y);
  if (endD < .018 && fract(vUv.x * 70.) > .45) discard;
  // --- the cloth is woven: warp threads run down first, then the weft fills row by row ---
  float warpX = fract(vUv.x * 96.), warpI = floor(vUv.x * 96.);
  float rowI = floor(vUv.y * 420.);
  float warpLen = clamp((uWeave - hash(vec2(warpI, 3.)) * .3) / .4, 0., 1.);
  bool warpOn = warpX < .46 && (1. - vUv.y) < warpLen;
  float front = (uWeave - .32) / .62;
  float rowJit = (hash(vec2(rowI, 9.)) - .5) * .05 + (hash(vec2(floor(vUv.x * 12.), rowI)) - .5) * .02;
  bool weftOn = (1. - vUv.y) < front + rowJit;
  if (!weftOn && !warpOn) discard;
  // --- a new print is embroidered in, stitch by stitch, rather than cross-faded ---
  float sn = hash(vec2(floor(vUv.x * 40.), floor(vUv.y * 160.)));
  float sweep = (1. - vUv.y) * .3 + sn * .7;
  float mx = smoothstep(sweep - .05, sweep + .05, uMix * 1.1 - .05);
  vec3 base = mix(texture2D(uMapA, vUv).rgb, texture2D(uMapB, vUv).rgb, mx);
  float metal = mix(texture2D(uMaskA, vUv).r, texture2D(uMaskB, vUv).r, mx);
  vec3 N = normalize(vN); if (!gl_FrontFacing) N = -N;
  vec3 V = normalize(cameraPosition - vWPos);
  vec3 L1 = normalize(vec3(-.5, .75, .65)), L2 = normalize(vec3(.8, -.2, -.4));
  float wrap = max(dot(N, L1) * .6 + .4, 0.);
  float back = max(dot(N, L2), 0.) * .25;
  vec3 T = normalize(vT - N * dot(vT, N));
  vec3 H = normalize(L1 + V);
  float th = dot(T, H);
  float aniso = pow(sqrt(max(1. - th * th, 0.)), 70.);      // silk's long highlight across the weave
  float fres = pow(1. - max(dot(N, V), 0.), 3.);
  vec3 col = base * (wrap * .95 + .18) + base * back;
  col += aniso * .55 * mix(vec3(1.), base + .35, .45) + fres * uSheen * .45;
  // metallic thread
  float spec = pow(max(dot(N, H), 0.), 36.);
  vec3 goldCol = base * (.55 + wrap * .7) + spec * vec3(1., .86, .55) * 1.6 + aniso * .5;
  col = mix(col, goldCol, metal * .85);
  vec2 cell = floor(vUv * vec2(180., 720.));
  float g = step(.965, hash(cell)) * pow(.5 + .5 * sin(uTime * 3.2 + hash(cell + 7.) * 60.), 10.);
  col += g * metal * vec3(1.6, 1.35, 1.);
  if (!gl_FrontFacing) col *= .78;
  if (endD < .018) col = mix(col, base * .9, .4);
  if (!weftOn) col = base * (.7 + wrap * .5) + aniso * .3;                // bare warp threads
  float edgeGlow = smoothstep(.035, 0., abs((1. - vUv.y) - front - rowJit)) * step(uWeave, .995);
  col += vec3(1., .82, .5) * edgeGlow * .9;                                 // the shuttle line
  float seam = smoothstep(.06, 0., abs(mx - .5)) * step(.01, uMix) * step(uMix, .99);
  col += vec3(1., .86, .6) * seam * .35;
  gl_FragColor = vec4(col, uOpacity);
  #include <colorspace_fragment>
}`,r1=`
attribute vec4 aSeed; uniform float uTime;
varying float vGlint; varying vec2 vUv;
mat3 rotY(float a){ float c = cos(a), s = sin(a); return mat3(c,0.,-s, 0.,1.,0., s,0.,c); }
mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1.,0.,0., 0.,c,s, 0.,-s,c); }
void main(){
  vUv = uv;
  vec3 p = rotY(uTime * (.6 + aSeed.y) + aSeed.x * 20.) * rotX(aSeed.z * 6.) * position;
  vec3 off = instanceMatrix[3].xyz;
  off.y = mod(off.y + uTime * (.12 + aSeed.w * .18) + 4., 8.) - 4.;
  off.x += sin(uTime * .5 + aSeed.x * 10.) * .15;
  vGlint = pow(max(0., sin(uTime * (1.4 + aSeed.y * 2.) + aSeed.x * 30.)), 14.);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p + off, 1.);
}`,s1=`
uniform float uOpacity; varying float vGlint; varying vec2 vUv;
void main(){
  float r = length(vUv - .5);
  vec3 c = mix(vec3(.82, .62, .28), vec3(1., .95, .82), vGlint);
  float ring = smoothstep(.5, .44, r) * (.55 + .45 * smoothstep(.2, .45, r));
  gl_FragColor = vec4(c * (.45 + vGlint * 2.2), ring * uOpacity * (.35 + vGlint));
}`,o1=`
attribute float aT; attribute float aDelay; attribute vec3 aCol;
varying float vT; varying float vD; varying vec3 vCol;
void main(){ vT = aT; vD = aDelay; vCol = aCol; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,a1=`
uniform float uProg; varying float vT; varying float vD; varying vec3 vCol;
void main(){
  float p = clamp(uProg * 1.7 - vD, 0., 1.35);
  float a = smoothstep(p - .42, p, vT) * step(vT, p);
  if (a < .01) discard;
  gl_FragColor = vec4(vCol * (1. + smoothstep(p - .05, p, vT) * 1.5), a);
}`,rd,Sc;function l1(r){let e=[],n=[],i=[],s=[],o=[[.95,.7,.3],[.9,.2,.45],[1,.95,.9],[.95,.78,.4]];for(let c=0;c<r;c++){let h=new B((Math.random()-.5)*1.4,(Math.random()-.5)*5.6,0),f=Math.random()*Math.PI*2,d=4+Math.random()*4,u=new B(Math.cos(f)*d,Math.sin(f)*d*1.2,(Math.random()-.3)*5),_=u.clone().lerp(h,.33).add(new B((Math.random()-.5)*3,(Math.random()-.5)*3,Math.random()*2)),g=u.clone().lerp(h,.7).add(new B((Math.random()-.5)*2,(Math.random()-.5)*2,1.5)),p=new vl(u,_,g,h).getPoints(48),v=o[c%o.length],M=Math.random()*.6;for(let x=0;x<48;x++)e.push(...p[x].toArray(),...p[x+1].toArray()),n.push(x/48,(x+1)/48),i.push(M,M),s.push(...v,...v)}let a=new wi;a.setAttribute("position",new fn(e,3)),a.setAttribute("aT",new fn(n,1)),a.setAttribute("aDelay",new fn(i,1)),a.setAttribute("aCol",new fn(s,3)),Sc=new On({vertexShader:o1,fragmentShader:a1,transparent:!0,depthWrite:!1,blending:Uo,uniforms:{uProg:{value:0}}});let l=new _l(a,Sc);return l.frustumCulled=!1,l}var ya={v:1.4};function cd(r=1.9){!rd||xi||(ge.killTweensOf(ya),ya.v=0,ge.to(ya,{v:1.4,duration:r,ease:"power1.inOut"}))}function c1(){try{xs=new fl({canvas:xc,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{Ec=!1,xc.remove();return}let r=innerWidth<760;xs.setPixelRatio(Math.min(devicePixelRatio,r?1.75:2)),xs.setSize(innerWidth,innerHeight,!1),xs.outputColorSpace=Mn,gc=new dl,yo=new Sn(35,innerWidth/innerHeight,.1,60),yo.position.set(0,0,9);let t=r?384:512,e=t*4;for(let h=0;h<5;h++)Li.push(e1(h,t,e));Li.forEach(h=>xs.initTexture?.(h.map));let n=1.5,i=6;yc=new On({vertexShader:n1,fragmentShader:i1,transparent:!0,side:ei,depthWrite:!1,uniforms:{uTime:{value:0},uAmp:{value:xi?.35:1},uStr:{value:0},uHit:{value:new he(.5,.5)},uW:{value:n},uL:{value:i},uMix:{value:0},uOpacity:{value:0},uWeave:{value:0},uMapA:{value:Li[4].map},uMapB:{value:Li[4].map},uMaskA:{value:Li[4].mask},uMaskB:{value:Li[4].mask},uSheen:{value:new ae("#ffd9e8")}}});let s=new $r(n,i,r?36:56,r?150:230);id=new bn(s,yc),Ms=new pr,Ms.add(id),rd=l1(r?22:40),Ms.add(rd);let o=r?90:170,a=new $r(.075,.075);Mc=new On({vertexShader:r1,fragmentShader:s1,transparent:!0,depthWrite:!1,blending:Uo,side:ei,uniforms:{uTime:{value:0},uOpacity:{value:0}}}),xa=new pl(a,Mc,o);let l=new Float32Array(o*4),c=new ye;for(let h=0;h<o;h++)c.makeTranslation((Math.random()-.5)*4.5,(Math.random()-.5)*8,(Math.random()-.5)*3),xa.setMatrixAt(h,c),l.set([Math.random(),Math.random(),Math.random(),Math.random()],h*4);a.setAttribute("aSeed",new Js(l,4)),xa.frustumCulled=!1,gc.add(xa),gc.add(Ms)}var Hg={desktop:{hero:{p:[2.25,.1,0],r:[-.35,.45,-.62],s:1.05,o:1,so:1,w:1},collections:{p:[.6,.35,-3.2],r:[.25,.1,-1.38],s:1.3,o:.9,so:.6,w:1},craft:{p:[2.35,.15,0],r:[-.2,-.38,-.32],s:.95,o:1,so:.5,w:1},signup:{p:[0,.1,-2.2],r:[.12,0,-1.5],s:1.35,o:.95,so:.9,w:1},hide:{p:[.4,-.6,-1.4],r:[-.1,.2,-.9],s:1,o:1,so:0,w:0}},mobile:{hero:{p:[.3,1.75,0],r:[-.3,.3,-1.1],s:.5,o:1,so:.8,w:1},collections:{p:[0,2.9,-2],r:[.2,.1,-1.5],s:.6,o:.55,so:.5,w:1},craft:{p:[-.2,1.2,0],r:[-.2,-.3,-1.2],s:.5,o:1,so:.4,w:1},signup:{p:[0,2.35,-1.5],r:[.1,0,-1.5],s:.66,o:.9,so:.8,w:1},hide:{p:[0,.2,-1.2],r:[-.1,.2,-1.2],s:.6,o:1,so:0,w:0}}},Gg={hero:4,signup:1},Zg=0,_c=0,vs=!1,Ae={p:new B(2.25,.1,0),r:new B(-.35,.45,-.62),s:1,o:1,so:0,w:0},h1=()=>Ue("[data-scene]");function u1(){let r=innerHeight,t=r/2,e=innerWidth/innerHeight<.9?Hg.mobile:Hg.desktop,n=innerWidth/innerHeight<.9?1:Math.min(1,innerWidth/innerHeight/1.6),i={p:[0,0,0],r:[0,0,0],s:0,o:0,so:0,w:0},s=0,o=null,a=0;for(let h of h1()){let f=h.getBoundingClientRect();if(f.bottom<-r||f.top>r*2)continue;let d=t<f.top?(f.top-t)/r:t>f.bottom?(t-f.bottom)/r:0,u=Math.max(0,1-d/.55);if(!u)continue;let _=h.dataset.scene,g=e[_];i.p.forEach((m,p)=>{i.p[p]+=g.p[p]*u,i.r[p]+=g.r[p]*u}),i.s+=g.s*u,i.o+=g.o*u,i.so+=g.so*u,i.w+=g.w*u,s+=u,u>a&&(a=u,o=_)}if(!s)return{pose:e.hide,tex:null,scene:"hide"};let l=1/s,c={p:i.p.map(h=>h*l),r:i.r.map(h=>h*l),s:i.s*l,o:i.o*l,so:i.so*l,w:i.w*l};return c.p[0]*=n,c.w=e[o].w,{pose:c,scene:o}}function Wg(r,t,e){let n=yc.uniforms;n.uMapA.value=Li[r].map,n.uMaskA.value=Li[r].mask,n.uMapB.value=Li[t].map,n.uMaskB.value=Li[t].mask,n.uMix.value=e}var ed=[0,1,2,3];function f1(r,t){if(r==="collections"&&vs){let i=Math.min(Math.max(_c,0),2.999),s=Math.floor(i),o=i-s;o=o<.35?0:o>.65?1:(o-.35)/.3,Pe.a=ed[s],Pe.b=ed[s+1],Pe.m=o,Pe.target=o>.5?Pe.b:Pe.a,Wg(Pe.a,Pe.b,Pe.m);return}let e=Pe.target;r==="collections"?e=ed[0]:r==="craft"?e=Zg:r in Gg&&(e=Gg[r]);let n=Pe.m>.5?Pe.b:Pe.a;e!==Pe.target&&(Pe.a=n,Pe.b=e,Pe.m=Pe.a===e?1:0,Pe.target=e),Pe.m=Math.min(1,Pe.m+t*1.6),Wg(Pe.a,Pe.b,Pe.m)}var Xg=new Ml,ys=0,sd=new he(.5,.5);function Jg(r,t){let e=r/innerWidth*2-1,n=-(t/innerHeight)*2+1,i=r-qe.lastX,s=t-qe.lastY;qe.speed=Math.min(1,qe.speed+Math.hypot(i,s)/160),qe.lastX=r,qe.lastY=t,qe.ndc.set(e,n),qe.moved=!0}addEventListener("pointermove",r=>Jg(r.clientX,r.clientY),{passive:!0});addEventListener("touchmove",r=>{let t=r.touches[0];t&&Jg(t.clientX,t.clientY)},{passive:!0});addEventListener("touchstart",r=>{let t=r.touches[0];t&&(qe.lastX=t.clientX,qe.lastY=t.clientY)},{passive:!0});var od=new yl,vc=!0;function hd(){if(!vc)return;let r=od.getDelta(),t=Math.min(r,.1),e=od.elapsedTime,{pose:n,scene:i}=u1(),s=1-Math.pow(.0025,t);Ae.p.lerp(new B(...n.p),s),Ae.r.lerp(new B(...n.r),s),Ae.s+=(n.s-Ae.s)*s,Ae.o+=(n.o-Ae.o)*s,Ae.so+=(n.so-Ae.so)*s;let o=Ae.w;Ae.w+=(n.w-Ae.w)*(1-Math.pow(.12,t)),o<.25&&Ae.w>=.25&&ad&&cd(1.4);let a=qe.ndc.x>-2?qe.ndc.y*.08:0,l=qe.ndc.x>-2?qe.ndc.x*.12:0;if(Ms.position.copy(Ae.p),Ms.rotation.set(Ae.r.x-a,Ae.r.y+l,Ae.r.z),Ms.scale.setScalar(Ae.s),xa.position.set(Ae.p.x*.6,0,Ae.p.z-.5),qe.moved){qe.moved=!1,Xg.setFromCamera(qe.ndc,yo);let h=Xg.intersectObject(id,!1)[0];h&&h.uv&&(sd.lerp(h.uv,ys<.05?1:.35),ys=Math.min(1,ys+qe.speed*.9),Ae.w>.9&&(Yg+=qe.speed,Yg>30&&rr.find("silk")))}qe.speed*=.9,ys*=Math.pow(.25,t);let c=yc.uniforms;c.uTime.value=xi?e*.25:e,c.uStr.value=ys*(xi?.3:1),c.uHit.value.copy(sd),c.uOpacity.value=Ae.o,c.uWeave.value=xi?Ae.w>.5?1:0:Math.min(Ae.w,Ma.v),Sc&&(Sc.uniforms.uProg.value=ya.v),Mc.uniforms.uTime.value=e,Mc.uniforms.uOpacity.value=Ae.so*Ma.v*(xi?.4:1),f1(i,Math.min(r,.25)),xc.style.visibility=c.uWeave.value<.005&&ya.v>=1.4&&Ae.so*Ma.v<.01?"hidden":"visible",xc.style.visibility==="visible"&&xs.render(gc,yo),requestAnimationFrame(hd)}var Ma={v:0},ad=!1,Yg=0;function d1(){Ec&&(yo.aspect=innerWidth/innerHeight,yo.updateProjectionMatrix(),xs.setSize(innerWidth,innerHeight,!1))}addEventListener("resize",d1);document.addEventListener("visibilitychange",()=>{Ec&&(document.hidden?vc=!1:vc||(vc=!0,od.getDelta(),requestAnimationFrame(hd)))});var ln=null;function p1(){xi||(ln=new pc({lerp:.1,smoothWheel:!0}),ln.on("scroll",zt.update),ge.ticker.add(c=>ln.raf(c*1e3)),ge.ticker.lagSmoothing(0)),document.addEventListener("click",c=>{let h=c.target.closest('a[href^="#"]');if(!h)return;let f=h.getAttribute("href");if(f.length<2)return;let d=ct(f);if(d){if(c.preventDefault(),fd(),h.dataset.fitting!==void 0){ud();return}h.dataset.filter&&Qg(h.dataset.filter),ln?ln.scrollTo(d,{offset:f==="#top"?0:-10,duration:1.4}):d.scrollIntoView()}});let r=ct("#header"),t=0,e=ct("#navLens"),n=Ue("#nav a"),i=c=>{let h=n.find(f=>f.dataset.sec===c);if(!h){e.style.opacity=0;return}e.style.opacity=1,e.style.width=h.offsetWidth+"px",e.style.transform=`translateX(${h.offsetLeft}px)`};n.forEach(c=>{let h=ct("#"+c.dataset.sec);h&&zt.create({trigger:h,start:"top 50%",end:"bottom 50%",onToggle:f=>{f.isActive&&i(c.dataset.sec)}})}),zt.create({trigger:"#hero",start:"top top",end:"bottom 50%",onToggle:c=>{c.isActive&&i(null)}}),zt.create({trigger:"#signup",start:"top 50%",end:"bottom bottom",onToggle:c=>{c.isActive&&i(null)}});let s=ct("#headerGlass");s.addEventListener("pointermove",c=>{let h=s.getBoundingClientRect();s.style.setProperty("--gx",c.clientX-h.left+"px"),s.style.setProperty("--gy",c.clientY-h.top+"px")}),s.addEventListener("pointerleave",()=>{s.style.removeProperty("--gx"),s.style.removeProperty("--gy")}),zt.create({start:0,end:"max",onUpdate:c=>{let h=c.scroll();r.classList.toggle("is-scrolled",h>40),r.classList.toggle("is-hidden",h>400&&h>t+2&&!ct("#mobileMenu").classList.contains("is-open")),(h<t-2||h<400)&&r.classList.remove("is-hidden"),t=h}});let o=ct("#collTrack"),a=Ue(".coll-progress i"),l=ge.matchMedia();l.add("(min-width: 821px)",()=>{let c=()=>o.scrollWidth-innerWidth,h=ge.to(o,{x:()=>-c(),ease:"none",scrollTrigger:{trigger:"#collections",pin:".coll-pin",start:"top top",end:()=>"+="+c(),scrub:!0,invalidateOnRefresh:!0,onUpdate:f=>{_c=Math.max(0,(f.progress-.18)/.8200000000000001)*3,vs=f.progress>0&&f.progress<1||f.isActive,a.forEach((u,_)=>ge.set(u,{scaleX:Math.min(1,Math.max(0,_c+1-_))}))},onLeave:()=>{vs=!1},onLeaveBack:()=>{vs=!1}}});return Ue(".coll-img img").forEach(f=>ge.fromTo(f,{xPercent:6},{xPercent:-6,ease:"none",scrollTrigger:{trigger:f.closest(".coll-card"),containerAnimation:h,start:"left right",end:"right left",scrub:!0}})),()=>{vs=!1}}),l.add("(max-width: 820px)",()=>{let c=()=>{let f=o.scrollWidth-o.clientWidth;_c=f>0?o.scrollLeft/f*3:0};o.addEventListener("scroll",c,{passive:!0});let h=zt.create({trigger:"#collections",start:"top 60%",end:"bottom 40%",onToggle:f=>{vs=f.isActive,c()}});return()=>{o.removeEventListener("scroll",c),h.kill(),vs=!1}}),Ue("[data-bg]").forEach(c=>zt.create({trigger:c,start:"top 55%",end:"bottom 55%",onToggle:h=>{h.isActive&&document.body.classList.toggle("is-light",c.dataset.bg==="light")}})),Ue(".stitch-divider").forEach(c=>ge.fromTo(c,{clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 0% 0 0)",ease:"none",scrollTrigger:{trigger:c,start:"top 90%",end:"top 40%",scrub:!0}})),ge.fromTo("#studioMedia",{clipPath:"inset(12% 14% 12% 14% round 18px)"},{clipPath:"inset(0% 0% 0% 0% round 14px)",ease:"none",scrollTrigger:{trigger:"#studioMedia",start:"top 85%",end:"center 55%",scrub:!0}}),ge.fromTo("#studioMedia img",{scale:1.18},{scale:1,ease:"none",scrollTrigger:{trigger:"#studioMedia",start:"top bottom",end:"bottom top",scrub:!0}}),ge.fromTo(".foot-word",{xPercent:4},{xPercent:-4,ease:"none",scrollTrigger:{trigger:"footer",start:"top bottom",end:"bottom bottom",scrub:!0}})}function m1(){let r=["Chikankari","Gota patti","Mirror work","Zardozi","Block print","Phulkari","Tilla","Shadow work"],t='<svg viewBox="0 0 20 20" aria-hidden="true"><g fill="#F3B23A"><ellipse cx="10" cy="4.5" rx="2.4" ry="4.5"/><ellipse cx="10" cy="15.5" rx="2.4" ry="4.5"/><ellipse cx="4.5" cy="10" rx="4.5" ry="2.4"/><ellipse cx="15.5" cy="10" rx="4.5" ry="2.4"/></g><circle cx="10" cy="10" r="2.2" fill="#fff"/></svg>',e=r.map(l=>`<span>${l}${t}</span>`).join(""),n=ct("#marquee");if(n.innerHTML=e+e,xi)return;let i=0,s=0,o=0,a=()=>{o=n.scrollWidth/2};a(),addEventListener("resize",a),ge.ticker.add((l,c)=>{let h=ln?ln.velocity:0;s+=(Math.abs(h)*.6-s)*.08,i-=c/1e3*(60+s*22)*(h<-.5?-1:1),o&&(i=(i%o-o)%o),n.style.transform=`translate3d(${i}px,0,0) skewX(${Math.max(-8,Math.min(8,-h*.35))}deg)`})}var qg=new Set(["0"]);function g1(){let r=Ue(".tech-btn"),t=Ue(".craft-photo img"),e=n=>{r.forEach(i=>i.setAttribute("aria-selected",String(i===n))),Zg=+n.dataset.tech,t.forEach(i=>i.classList.toggle("is-on",i.dataset.key===n.dataset.img)),ys=Math.min(1,ys+.8),sd.set(.5,.5),cd(1.3),qg.add(n.dataset.tech),qg.size>=4&&rr.find("stitches")};r.forEach((n,i)=>{n.addEventListener("click",()=>e(n)),n.addEventListener("keydown",s=>{if(!["ArrowDown","ArrowUp"].includes(s.key))return;s.preventDefault();let o=r[(i+(s.key==="ArrowDown"?1:r.length-1))%r.length];o.focus(),e(o)})}),t1&&(ct("#touchHint").textContent="Touch and drag across the silk")}var an=[];try{an=JSON.parse(localStorage.getItem("resham-bag")||"[]").filter(r=>ir[r.id])}catch{an=[]}var Kg=()=>{try{localStorage.setItem("resham-bag",JSON.stringify(an))}catch{}};function bc(r,t="M",e=1,n=!1){let i=an.find(o=>o.id===r&&o.size===t);i?i.qty+=e:an.push({id:r,size:t,qty:e}),Kg(),Ss();let s=ct("#bagCount");s.classList.remove("bump"),s.offsetWidth,s.classList.add("bump"),n||Sa(`${ir[r].name} added to your bag`)}function Ss(){let r=ct("#bagList"),t=an.reduce((s,o)=>s+o.qty,0);ct("#bagCount").textContent=t;let e=an.reduce((s,o)=>s+ir[o.id].price*o.qty,0),n=Tc(),i=Math.round(e*n.percent)/100;if(ct("#bagSub").textContent=Dr(e),ct("#discRow").hidden=!n.percent,ct("#discLabel").textContent=n.percent?`${n.label} (${n.percent}%, ${n.code})`:"Discount",ct("#discAmt").textContent="\u2212"+Vg(i),ct("#bagTotal").textContent=Vg(e-i),!an.length){r.innerHTML='<li class="bag-empty">Your bag is empty. Everything in it stays here while you browse.</li>';return}r.innerHTML=an.map((s,o)=>{let a=ir[s.id];return`
    <li class="bag-line"><img src="img/${a.img}.webp" alt="" style="object-position:${a.pos||"50% 30%"}" width="76" height="95">
      <div><h3>${a.name}</h3><p>Size ${s.size}, ${Dr(a.price)} each</p>
        <div class="qty"><button aria-label="One fewer" data-dec="${o}">\u2212</button><span aria-live="polite">${s.qty}</span><button aria-label="One more" data-inc="${o}">+</button><button class="rm" data-rm="${o}">Remove</button></div></div></li>`}).join("")}function _1(){Ss();let r=ct("#drawer"),t=ct("#scrim"),e=()=>{r.classList.add("is-open"),r.setAttribute("aria-hidden","false"),t.classList.add("is-on"),ln?.stop(),setTimeout(()=>ct("#drawerClose").focus(),300)},n=()=>{r.classList.remove("is-open"),r.setAttribute("aria-hidden","true"),t.classList.remove("is-on"),ln?.start(),ct("#checkoutMsg").textContent=""};window.__openBag=e,ct("#codeForm").addEventListener("submit",i=>{i.preventDefault();let s=ct("#codeInput").value.trim().toUpperCase(),o=ct("#codeMsg");if(!s){o.textContent="Type a code, then press Apply.";return}s==="RESHAM15"?rr.count()===5?(ke.eggs=15,wc(),Ss(),o.textContent="RESHAM15 applied: 15% off."):o.textContent=`RESHAM15 unlocks once you find all five hidden threads. You have ${rr.count()} of 5.`:ke.voice&&s==="NOOR"+ke.voice?o.textContent=`${s} is already on your bag.`:o.textContent=`${s} isn't a code we recognise. Check the spelling and try again.`}),ct("#bagBtn").addEventListener("click",e),ct("#drawerClose").addEventListener("click",n),t.addEventListener("click",n),addEventListener("keydown",i=>{i.key==="Escape"&&(n(),fd())}),ct("#bagList").addEventListener("click",i=>{let s=i.target.closest("button");if(!s)return;let o=+(s.dataset.inc??s.dataset.dec??s.dataset.rm);s.dataset.inc?an[o].qty++:s.dataset.dec?(an[o].qty--,an[o].qty||an.splice(o,1)):s.dataset.rm&&an.splice(o,1),Kg(),Ss()}),ct("#checkout").addEventListener("click",()=>{let i=Tc();ct("#checkoutMsg").textContent=an.length?`Checkout is not connected in this preview, so no order was placed.${i.percent?` Your ${i.percent}% (${i.code}) would apply.`:""}`:"Add a piece to your bag first."})}var $g;function Sa(r){ct("#toastText").textContent=r;let t=ct("#toast");t.classList.add("is-on"),clearTimeout($g),$g=setTimeout(()=>t.classList.remove("is-on"),3200)}function v1(){let r=ct("#grid");r.innerHTML=ld.map(t=>`
    <article class="card" data-col="${t.col}">
      <div class="card-media">
        <img src="img/${t.img}.webp" alt="${t.name}, ${t.fabric.toLowerCase()}" loading="lazy" width="960" height="1200" style="object-position:${t.pos}">
        ${t.tag?`<span class="tag">${t.tag}</span>`:""}
        <button class="wish" aria-pressed="false" aria-label="Save ${t.name} to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg></button>
      </div>
      <div class="card-body">
        <h3>${t.name}</h3>
        <span class="fabric">${t.fabric}</span>
        <div class="card-row">
          <span class="price">${t.fitting?"From "+Dr(t.price):Dr(t.price)}</span>
          ${t.fitting?"":`<div class="sizes" role="group" aria-label="Size">${["XS","S","M","L","XL"].map(e=>`<button class="size" aria-pressed="${e==="M"}">${e}</button>`).join("")}</div>`}
        </div>
        <button class="btn ${t.fitting?"btn-line":"btn-rani"} btn-small add" data-id="${t.id}">${t.fitting?"Book a fitting":"Add to bag"}</button>
      </div>
    </article>`).join(""),r.addEventListener("click",t=>{let e=t.target.closest(".size");if(e){Ue(".size",e.parentElement).forEach(s=>s.setAttribute("aria-pressed",String(s===e)));return}let n=t.target.closest(".wish");if(n){let s=n.getAttribute("aria-pressed")!=="true";n.setAttribute("aria-pressed",String(s)),Sa(s?"Saved to your wishlist":"Removed from your wishlist");return}let i=t.target.closest(".add");if(i){let s=ir[i.dataset.id];if(s.fitting)return ud();let o=ct('.size[aria-pressed="true"]',i.closest(".card"))?.textContent||"M";bc(s.id,o)}}),Ue(".filters .chip").forEach(t=>t.addEventListener("click",()=>Qg(t.dataset.f)))}function Qg(r){Ue(".filters .chip").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.f===r))),Ue("#grid .card").forEach(t=>{t.hidden=!(r==="all"||t.dataset.col===r)}),zt.refresh()}function x1(){let r=ct("#lookItems");r.innerHTML=mc.map(n=>`
    <li class="look-item" data-id="${n.id}">
      <div class="look-thumb"><img src="img/look.webp" alt="" style="object-position:${n.pos};transform:scale(2.4)" loading="lazy" width="72" height="72"></div>
      <div><h3>${n.name}</h3><p>${n.note}</p></div>
      <div style="text-align:right"><div class="price">${Dr(n.price)}</div><button class="link" style="border:0;background:none;padding:0 0 3px;font-size:.88rem;margin-top:4px" data-add="${n.id}">Add</button></div>
    </li>`).join(""),ct("#lookTotal").textContent=Dr(mc.reduce((n,i)=>n+i.price,0));let t=Ue(".hotspot"),e=n=>{t.forEach(i=>i.setAttribute("aria-pressed",String(i.dataset.item===n))),Ue(".look-item").forEach(i=>i.classList.toggle("is-active",i.dataset.id===n))};t.forEach(n=>n.addEventListener("click",()=>e(n.dataset.item))),Ue(".look-item").forEach(n=>n.addEventListener("mouseenter",()=>e(n.dataset.id))),r.addEventListener("click",n=>{let i=n.target.closest("[data-add]");i&&(e(i.dataset.add),bc(i.dataset.add))}),ct("#addLook").addEventListener("click",()=>{mc.forEach(n=>bc(n.id,"M",1,!0)),Sa("The whole look is in your bag")}),e("l1")}function y1(){let r={occasion:"day",feel:"light",palette:"indigo"},t=Ue(".q"),e=()=>{let i=ld.map(a=>({p:a,s:(a.occ.includes(r.occasion)?4:0)+(a.feel===r.feel?1.2:0)+(a.pal===r.palette?1:0)+(a.occ[0]===r.occasion?.3:0)})).sort((a,l)=>l.s-a.s)[0].p,s=ct("#resImg");ge.to(s,{opacity:0,duration:.2,onComplete:()=>{s.src=`img/${i.img}.webp`,s.style.objectPosition=i.pos,s.alt=i.name,ge.to(s,{opacity:1,duration:.45})}}),ct("#resName").textContent=i.name,ct("#resWhy").textContent=i.why,ct("#resPrice").textContent=i.fitting?"From "+Dr(i.price):Dr(i.price);let o=ct("#resAdd");o.textContent=i.fitting?"Book a fitting":"Add to bag",o.dataset.id=i.id};t.forEach(n=>n.addEventListener("click",i=>{let s=i.target.closest(".chip");s&&(Ue(".chip",n).forEach(o=>o.setAttribute("aria-pressed",String(o===s))),r[n.dataset.q]=s.dataset.v,e())})),ct("#resAdd").addEventListener("click",n=>{let i=ir[n.currentTarget.dataset.id||"p5"];i.fitting?ud():bc(i.id)}),e()}function ud(){let r=ct("#fitting");ct("#fittingMsg").textContent="",r.showModal?r.showModal():r.setAttribute("open",""),ln?.stop()}function M1(){ct("#fitting").addEventListener("close",()=>ln?.start()),ct("#fittingForm").addEventListener("submit",t=>{if(t.submitter?.value==="cancel")return;t.preventDefault();let e=t.currentTarget;e.reportValidity()&&(ct("#fittingMsg").textContent=`Thank you, ${e.name.value.split(" ")[0]}. This preview isn't connected to a booking inbox yet, so the request wasn't sent.`)}),ct("#signupForm").addEventListener("submit",t=>{t.preventDefault();let e=ct("#email").value.trim();ct("#signupMsg").textContent=/.+@.+\..+/.test(e)?"You're almost on the list. This preview doesn't store emails yet, so nothing was sent.":"Enter an email address like name@example.com."}),ct("#toastBtn").addEventListener("click",()=>window.__openBag())}var jg=()=>ct("#mobileMenu");function fd(){let r=jg();r.classList.contains("is-open")&&(r.classList.remove("is-open"),r.setAttribute("aria-hidden","true"),ct("#menuBtn").setAttribute("aria-expanded","false"),ln?.start())}function S1(){ct("#menuBtn").addEventListener("click",()=>{let r=jg();r.classList.add("is-open"),r.setAttribute("aria-hidden","false"),ct("#menuBtn").setAttribute("aria-expanded","true"),ln?.stop(),ge.fromTo(Ue("a",r),{yPercent:60,opacity:0},{yPercent:0,opacity:1,stagger:.05,duration:.7,ease:"power3.out",delay:.15})}),ct("#menuClose").addEventListener("click",fd)}function b1(){let r=ct("#loader"),t=Ue(".hero h1 .line > span");if(xi){r.remove(),Ma.v=1,ad=!0;return}ge.set(t,{yPercent:110}),ge.set(".hero-sub, .hero-ctas, .hero-foot",{opacity:0});let e=ct("#loaderStitch"),n=ct("#loaderNeedle"),i=e.getTotalLength(),s={v:0};e.style.clipPath="inset(0 100% 0 0)",ge.timeline().to(s,{v:1,duration:1.25,ease:"power2.inOut",onUpdate:()=>{let a=e.getPointAtLength(s.v*i);n.setAttribute("cx",a.x),n.setAttribute("cy",a.y),e.style.clipPath=`inset(0 ${100-a.x/5.6}% 0 0)`}}).to("#loaderWord",{opacity:1,duration:.5},"-=.55").to(r,{clipPath:"inset(0 0 100% 0)",duration:.9,ease:"power3.inOut"},"+=.25").add(()=>r.remove()).add(()=>cd(2.1),"-=.75").to(Ma,{v:1,duration:2.6,ease:"power1.inOut",onComplete:()=>{ad=!0}},"-=.2").to(t,{yPercent:0,duration:1.1,ease:"power4.out",stagger:.1},"-=2.4").to(".hero-sub, .hero-ctas, .hero-foot",{opacity:1,duration:.8,stagger:.08},"-=.6")}var ke={voice:0,voiceReason:"",eggs:0};try{ke={...ke,...JSON.parse(localStorage.getItem("resham-discounts")||"{}")}}catch{}var wc=()=>{try{localStorage.setItem("resham-discounts",JSON.stringify(ke))}catch{}};function Tc(){return ke.eggs>=ke.voice&&ke.eggs?{percent:ke.eggs,code:"RESHAM15",label:"Hidden threads"}:ke.voice?{percent:ke.voice,code:"NOOR"+ke.voice,label:"From Noor"}:{percent:0,code:"",label:""}}var nd=[{id:"needle",name:"The golden needle",hint:"The needle by our name likes a few quick taps."},{id:"silk",name:"Silk whisper",hint:"The silk loves to be stroked. Keep going for a while."},{id:"stitches",name:"Every stitch",hint:"In the craft section, try each of the four stitches."},{id:"mirror",name:"The lost mirror",hint:"A tiny mirror glints somewhere in the shop-the-look photo."},{id:"signature",name:"Our signature",hint:"The giant word at the very bottom answers to five taps."}],w1='<svg viewBox="0 0 26 26" aria-hidden="true"><circle cx="13" cy="13" r="11" fill="#F3B23A"/><path d="M8 13.5l3.2 3.2L18 9.8" fill="none" stroke="#2A0F24" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',T1='<svg viewBox="0 0 26 26" aria-hidden="true"><circle cx="13" cy="13" r="10" fill="none" stroke="currentColor" stroke-opacity=".45" stroke-width="1.5" stroke-dasharray="3 3"/></svg>',rr=(()=>{let r=[];try{r=JSON.parse(localStorage.getItem("resham-eggs")||"[]").filter(i=>nd.some(s=>s.id===i))}catch{}let t=()=>{try{localStorage.setItem("resham-eggs",JSON.stringify(r))}catch{}},e=[innerWidth/2,innerHeight/2];addEventListener("pointerdown",i=>{e=[i.clientX,i.clientY]},{passive:!0,capture:!0});let n=()=>{let i=r.length,s=ct("#eggPill");s.hidden=i===0,ct("#eggCount").textContent=i===5?"All 5 threads found":`${i} of 5 hidden threads`,Ue(".spool i",s).forEach((o,a)=>o.classList.toggle("on",a<i)),ct("#eggList").innerHTML=nd.map(o=>{let a=r.includes(o.id);return`<li class="${a?"found":""}">${a?w1:T1}<div><b>${a?o.name:"Not found yet"}</b><span>${a?"Found.":o.hint}</span></div></li>`}).join(""),ct("#eggMirror")?.classList.toggle("found",r.includes("mirror"))};return{count:()=>r.length,has:i=>r.includes(i),find(i){if(r.includes(i))return;r.push(i),t(),n();let s=nd.find(o=>o.id===i);t_(...e),r.length===5?(ke.eggs=15,wc(),Ss(),setTimeout(E1,700)):Sa(`You found a hidden thread: ${s.name}. ${r.length} of 5.`)},init(){n(),r.length===5&&!ke.eggs&&(ke.eggs=15,wc());let i=ct("#eggPill"),s=ct("#eggSheet");i.addEventListener("click",()=>{let l=s.hidden;s.hidden=!l,i.setAttribute("aria-expanded",String(l))}),document.addEventListener("click",l=>{!s.hidden&&!l.target.closest("#eggSheet,#eggPill")&&(s.hidden=!0,i.setAttribute("aria-expanded","false"))});let o=[];ct("#needle").addEventListener("click",l=>{l.preventDefault(),l.stopPropagation();let c=performance.now();o=o.filter(f=>c-f<2e3),o.push(c);let h=ct("#needle");h.classList.add("spin"),setTimeout(()=>h.classList.remove("spin"),300),o.length>=3&&(rr.find("needle"),o=[])}),ct("#eggMirror").addEventListener("click",()=>rr.find("mirror"));let a=[];ct("#footWord").addEventListener("click",()=>{let l=performance.now();a=a.filter(c=>l-c<2500),a.push(l),ge.fromTo("#footWord",{scale:1},{scale:1.015,duration:.12,yoyo:!0,repeat:1}),a.length>=5&&(rr.find("signature"),a=[])}),ct("#rewardClose").addEventListener("click",()=>{ct("#reward").classList.remove("is-on"),ln?.start()})}}})();function t_(r,t){if(xi)return;let e="http://www.w3.org/2000/svg",n=document.createElementNS(e,"svg");n.setAttribute("class","thread-burst"),n.setAttribute("viewBox",`0 0 ${innerWidth} ${innerHeight}`);let i=["#F3B23A","#D01A66","#ffffff","#E9C066"];for(let s=0;s<16;s++){let o=s/16*Math.PI*2+Math.random()*.3,a=90+Math.random()*120,l=r+Math.cos(o)*a,c=t+Math.sin(o)*a,h=r+Math.cos(o+.9)*a*.5,f=t+Math.sin(o+.9)*a*.5,d=document.createElementNS(e,"path");d.setAttribute("d",`M${r} ${t} Q${h} ${f} ${l} ${c}`),d.setAttribute("fill","none"),d.setAttribute("stroke",i[s%4]),d.setAttribute("stroke-width",2),d.setAttribute("stroke-linecap","round"),n.appendChild(d);let u=d.getTotalLength();d.style.strokeDasharray=`${u*.4} ${u}`,d.style.strokeDashoffset=u*.4,ge.to(d,{strokeDashoffset:-u,duration:.9+Math.random()*.4,ease:"power2.out",delay:Math.random()*.1})}for(let s=0;s<10;s++){let o=document.createElementNS(e,"circle");o.setAttribute("cx",r),o.setAttribute("cy",t),o.setAttribute("r",3+Math.random()*3),o.setAttribute("fill",s%2?"#E8EEF2":"#F3B23A"),n.appendChild(o);let a=Math.random()*Math.PI*2,l=60+Math.random()*140;ge.to(o,{attr:{cx:r+Math.cos(a)*l,cy:t+Math.sin(a)*l+40},opacity:0,duration:1.2,ease:"power2.out"})}document.body.appendChild(n),setTimeout(()=>n.remove(),1600)}function E1(){let r=ct("#weaveSvg"),t=9,e=150/(t+1),n=o=>o%2?"#D01A66":"#F3B23A",i=o=>o%2?"#F9EAF0":"#E9C066",s="";for(let o=1;o<=t;o++)s+=`<line class="warp" x1="${o*e}" y1="10" x2="${o*e}" y2="140" stroke="${n(o)}" stroke-width="7" stroke-linecap="round"/>`;for(let o=1;o<=t;o++)s+=`<line class="weft" x1="10" y1="${o*e}" x2="140" y2="${o*e}" stroke="${i(o)}" stroke-width="7" stroke-linecap="round"/>`;for(let o=1;o<=t;o++)for(let a=1;a<=t;a++)(a+o)%2===0&&(s+=`<line class="over" data-row="${o}" x1="${a*e}" y1="${o*e-6}" x2="${a*e}" y2="${o*e+6}" stroke="${n(a)}" stroke-width="7"/>`);r.innerHTML=s,ct("#reward").classList.add("is-on"),ln?.stop(),xi||(ge.fromTo(Ue(".warp",r),{attr:{y2:10}},{attr:{y2:140},duration:.6,stagger:.05,ease:"power2.out"}),ge.fromTo(Ue(".weft",r),{attr:{x2:10}},{attr:{x2:140},duration:.45,stagger:.09,delay:.55,ease:"power1.inOut"}),Ue(".over",r).forEach(o=>ge.fromTo(o,{opacity:0},{opacity:1,duration:.15,delay:.55+(+o.dataset.row-1)*.09+.3}))),t_(innerWidth/2,innerHeight/2-80)}var A1="agent_7001m7aymmpaejgvxjavbj8e48dm",C1="https://cdn.jsdelivr.net/npm/@elevenlabs/client@1.36.0/dist/lib.iife.js";function R1(){let r=ct("#voiceFab"),t=ct("#voicePanel"),e=ct("#voiceLog"),n=ct("#voiceStatus"),i=ct("#voiceCall"),s=ct("#voiceMute"),o=ct("#voiceOrb"),a=null,l=!1,c=!1,h=0,f=(x,E)=>{let b=document.createElement("li");b.className=x,b.textContent=E,e.appendChild(b),e.scrollTop=e.scrollHeight},d=x=>{n.textContent=x},u=()=>{t.hidden=!1,r.classList.add("is-hidden"),e.children.length||f("ai","Hi, I'm Noor. Press Start talking and ask me anything, including whether there's a discount for you today.")},_=async()=>{if(t.hidden=!0,r.classList.remove("is-hidden"),a)try{await a.endSession()}catch{}},g=()=>window.ElevenLabsClient?Promise.resolve():new Promise((x,E)=>{let b=document.createElement("script");b.src=C1,b.onload=x,b.onerror=()=>E(new Error("sdk")),document.head.appendChild(b)}),m={collections:"#collections",craft:"#craft",shop_the_look:"#look",new_in:"#shop",makers:"#studio",outfit_finder:"#finder",journal:"#journal"},p={apply_discount:({percent:x,reason:E})=>{let b=Math.round(Number(x));if(!(b>=5&&b<=10))return"Refused: the website only accepts a voice discount from 5 to 10 percent.";if(ke.voice)return`Not applied: the shopper already has ${ke.voice} percent from you (code NOOR${ke.voice}). Only one voice discount per shopper.`;ke.voice=b,ke.voiceReason=String(E||"").slice(0,80),wc(),Ss(),f("sys",`${b}% added to your bag (code NOOR${b})`),Sa(`Noor added ${b}% off to your bag`);let T=Tc();return`Applied ${b} percent, code NOOR${b}.${T.code==="RESHAM15"?" Note: they already unlocked 15 percent from the hidden threads, and the bigger discount is the one used.":""}`},show_on_site:({section:x})=>{if(x==="bag")return window.__openBag(),"Opened the bag.";let E=ct(m[x]||"#top");return ln?ln.scrollTo(E,{offset:-10,duration:1.4}):E.scrollIntoView({behavior:"smooth"}),`Showing ${x.replace(/_/g," ")}.`},get_bag:()=>{let x=an.reduce((b,T)=>b+ir[T.id].price*T.qty,0),E=Tc();return JSON.stringify({items:an.map(b=>({name:ir[b.id].name,size:b.size,qty:b.qty,price:ir[b.id].price})),subtotal_usd:x,discount_applied:E.percent?`${E.percent}% (${E.code})`:"none",voice_discount_already_given:!!ke.voice,hidden_threads_found:rr.count(),hidden_threads_total:5})}},v=()=>{a=null,cancelAnimationFrame(h),o.style.removeProperty("--lvl"),delete t.dataset.mode,i.textContent="Start talking",s.disabled=!0,d("Call ended")};async function M(){if(!(a||l)){l=!0,i.textContent="Connecting\u2026";try{d("Waiting for your microphone\u2026");try{(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(b=>b.stop())}catch(E){throw E.msg="Noor needs your microphone. Allow microphone access for this site and try again. (Previews inside other apps may block it; the live site works.)",E}d("Connecting\u2026"),await g(),a=await window.ElevenLabsClient.Conversation.startSession({agentId:A1,clientTools:p,onConnect:()=>{d("Listening"),s.disabled=!1,i.textContent="End call"},onDisconnect:()=>{v(),f("sys","Call ended")},onMessage:E=>{E&&E.message&&f((E.role||E.source)==="user"?"user":"ai",E.message)},onModeChange:({mode:E})=>{t.dataset.mode=E,c||d(E==="speaking"?"Noor is speaking":"Listening")},onError:E=>{f("sys","Connection problem. Please try again."),console.warn("Noor:",E)}});let x=()=>{if(!a)return;let E=0;try{E=t.dataset.mode==="speaking"?a.getOutputVolume():a.getInputVolume()}catch{}o.style.setProperty("--lvl",(1+Math.min(.3,E*.9)).toFixed(3)),h=requestAnimationFrame(x)};x()}catch(x){a=null,d("Not connected"),i.textContent="Try again",f("sys",x.msg||"Noor couldn't connect. Please try again in a moment."),console.warn("Noor:",x)}finally{l=!1}}}r.addEventListener("click",u),ct("#voiceClose").addEventListener("click",_),i.addEventListener("click",async()=>{if(a){try{await a.endSession()}catch{}v()}else M()}),s.addEventListener("click",()=>{if(a){c=!c;try{a.setMicMuted(c)}catch{}s.textContent=c?"Unmute":"Mute",d(c?"Muted":"Listening")}})}function P1(){c1(),p1(),m1(),g1(),_1(),v1(),x1(),y1(),M1(),S1(),rr.init(),R1(),Ss(),Ec&&requestAnimationFrame(hd);let r=()=>{b1(),zt.refresh()};(document.fonts?.ready||Promise.resolve()).then(r),addEventListener("load",()=>zt.refresh())}P1();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/

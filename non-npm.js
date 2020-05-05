(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{61:function(e,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t,i=r(o(3)),n=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};t.get||t.set?Object.defineProperty(a,o,t):a[o]=e[o]}return a.default=e,a}(o(0));r(o(2)),r(o(114));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,a,o,i){t||(t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,r=arguments.length-3;if(a||0===r||(a={children:void 0}),a&&n)for(var s in n)void 0===a[s]&&(a[s]=n[s]);else a||(a=n||{});if(1===r)a.children=i;else if(r>1){for(var l=new Array(r),d=0;d<r;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:t,type:e,key:void 0===o?null:""+o,ref:null,props:a,_owner:null}}function l(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}function u(e,a){if(null==e)return{};var o,t,i=function(e,a){if(null==e)return{};var o,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(i[o]=e[o]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}const c=e=>{let{to:a}=e,o=u(e,["to"]);return a.includes("http")?n.default.createElement("a",d({},e,{href:a})):("#"===a[0]&&(a=i.default.join("/auto/","pages/non-npm.html")+a),n.default.createElement("a",d({},o,{href:a,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const t=new URL(i.default.join(window.location.origin,a));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(t),null,a),e.onClick();const n=new CustomEvent("changeLocation",{detail:t});return dispatchEvent(n),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const p=e=>{var a,o;return o=a=class extends n.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?n.default.createElement(e,this.props,this.props.children||null):null}},l(a,"defaultProps",{shouldLoad:!0}),o};p(()=>o.e(27).then(o.bind(null,115))),p(()=>o.e(27).then(o.bind(null,116)));var g=s("h1",{},void 0,"Non-npm Usage"),h=s("code",{},void 0,"auto"),v=s("code",{},void 0,"auto"),m=s("code",{},void 0,"auto"),f=s("code",{},void 0,"linux"),b=s("code",{},void 0,"osx"),y=s("code",{},void 0,"windows"),w=s("p",{},void 0,"Simply download the appropriate version for your operating system and make it executable."),P=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,s("span",{className:"hljs-comment"},void 0,"# Download a platform specific version of auto"),s("br",{}),"curl -vkL -o - https://github.com/intuit/auto/releases/download/v7.2.0/auto-linux.gz | gunzip > ~/auto",s("br",{}),s("span",{className:"hljs-comment"},void 0,"# Make auto executable"),s("br",{}),"chmod a+x ~/auto",s("br",{}))),N=s("code",{},void 0,"auto"),j=s("code",{},void 0,"auto"),k=s("p",{},void 0,"If you are on OSX you can install ",s("code",{},void 0,"auto")," with brew."),x=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,"brew tap intuit/auto https://github.com/intuit/auto",s("br",{}),"brew install auto",s("br",{}))),O=s("p",{},void 0,"To configure ",s("code",{},void 0,"auto")," to work with your project you will need to do two things"),L=s("code",{},void 0,"GH_TOKEN"),_=s("li",{},void 0,"Create an ",s("code",{},void 0,".autorc")," for your project"),C=s("code",{},void 0,".autorc"),E=s("code",{},void 0,"auto"),M=s("code",{},void 0,".autorc"),S=s("code",{},void 0,".autorc"),I=s("code",{},void 0,"shipit"),A=s("pre",{},void 0,s("code",{className:"language-json"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-attr"},void 0,'"name"'),": ",s("span",{className:"hljs-string"},void 0,'"Andrew Lisowski"'),",",s("br",{}),"  ",s("span",{className:"hljs-attr"},void 0,'"email"'),": ",s("span",{className:"hljs-string"},void 0,'"lisowski54@gmail.com"'),",",s("br",{}),"  ",s("span",{className:"hljs-attr"},void 0,'"plugins"'),": []",s("br",{}),"}",s("br",{}))),D=s("code",{},void 0,".autorc"),T=s("code",{},void 0,"git-tag"),U=s("code",{},void 0,"shipit"),H=s("pre",{},void 0,s("code",{className:"language-json"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-attr"},void 0,'"name"'),": ",s("span",{className:"hljs-string"},void 0,'"Andrew Lisowski"'),",",s("br",{}),"  ",s("span",{className:"hljs-attr"},void 0,'"email"'),": ",s("span",{className:"hljs-string"},void 0,'"lisowski54@gmail.com"'),",",s("br",{}),"  ",s("span",{className:"hljs-attr"},void 0,'"plugins"'),": [",s("span",{className:"hljs-string"},void 0,'"git-tag"'),"]",s("br",{}),"}",s("br",{}))),q=s("code",{},void 0,".autorc"),R=s("code",{},void 0,"shipit"),z=s("code",{},void 0,"repo"),G=s("code",{},void 0,"owner"),J=s("code",{},void 0,"name"),W=s("code",{},void 0,"email"),X=s("code",{},void 0,"pom.xml"),$=s("pre",{},void 0,s("code",{className:"language-json"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-attr"},void 0,'"plugins"'),": [",s("span",{className:"hljs-string"},void 0,'"maven"'),"]",s("br",{}),"}",s("br",{}))),F=s("p",{},void 0,"Now that you have ",s("code",{},void 0,"auto")," all set up you can use all of it's commands!"),K=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,"~/auto shipit",s("br",{}))),Y=s("code",{},void 0,"auto"),B=s("code",{},void 0,".env"),Q=s("p",{},void 0,"As stated above, all of the official plugins (the ones included in this repo/docs) are included in the binary version of ",s("code",{},void 0,"auto"),". However you might want to use an unofficial plugin or even write your own."),V=s("p",{},void 0,"One way to use unofficial plugins in a non-javascript project is to have a directory committed to your project where you store them."),Z=s("p",{},void 0,"You could:"),ee=s("ul",{},void 0,s("li",{},void 0,"Write your own custom plugins and store them in here"),s("li",{},void 0,"Copy a plugin from the internet")),ae=s("p",{},void 0,s("strong",{},void 0,s("code",{},void 0,".autorc"),":")),oe=s("pre",{},void 0,s("code",{className:"language-json"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-attr"},void 0,'"plugins"'),": [",s("span",{className:"hljs-string"},void 0,'"./plugins/custom-plugin.js"'),"]",s("br",{}),"}",s("br",{}))),te=s("p",{},void 0,"If you want to share your custom plugins between projects then you can host them on some SCM (ex: GitHub). A plugin just needs to consist of an ",s("code",{},void 0,"index.js")," that implements your plugin. (or it could be as complex as any NPM package)"),ie=s("p",{},void 0,"Edit your CI build to download these plugins when building."),ne=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,"mkdir plugins",s("br",{}),"git ",s("span",{className:"hljs-built_in"},void 0,"clone")," https://github.com/me/custom-plugin plugins/custom-plugin",s("br",{}))),re=s("p",{},void 0,s("strong",{},void 0,s("code",{},void 0,".autorc"),":")),se=s("pre",{},void 0,s("code",{className:"language-json"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-attr"},void 0,'"plugins"'),": [",s("span",{className:"hljs-string"},void 0,'"./plugins/custom-plugin"'),"]",s("br",{}),"}",s("br",{}))),le=s("p",{},void 0,"If distributed via NPM you could install those plugins globally through ",s("code",{},void 0,"npm"),":"),de=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,"npm i -g auto-plugin-my-custom-plugin",s("br",{}))),ue=s("p",{},void 0,s("strong",{},void 0,s("code",{},void 0,".autorc"),":")),ce=s("pre",{},void 0,s("code",{className:"language-json"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-attr"},void 0,'"plugins"'),": [",s("span",{className:"hljs-string"},void 0,'"my-custom-plugin"'),"]",s("br",{}),"}",s("br",{})));var pe=e=>s("div",{className:e.className},void 0,s("section",{},void 0,g,s("p",{},void 0,h," is typically distributed through ",s(c,{currentPage:e.currentPage,target:"_blank",to:"https://npmjs.com",className:"external-link"},void 0,"npm")," but you can use it with a variety of package management platforms."),s("h2",{id:"installation"},void 0,"Installation ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#installation","aria-hidden":"true"})),s("p",{},void 0,"If you're on some platform other than ",s(c,{currentPage:e.currentPage,target:"_blank",to:"https://npmjs.com",className:"external-link"},void 0,"npm")," it doesn't make sense to download ",v," through ",s(c,{currentPage:e.currentPage,target:"_blank",to:"https://npmjs.com",className:"external-link"},void 0,"npm"),". For these situations we package ",m," for all major operating systems (",f,", ",b,", ",y,")."),w,P,s("p",{},void 0,"This executable contains all of the official ",N," plugins so you do not have to download anything extra. This version of ",j," uses the ",s(c,{currentPage:e.currentPage,to:"/auto/plugins/git-tag/README.html"},void 0,"git-tag")," plugins as the default instead of ",s(c,{currentPage:e.currentPage,to:"/auto/plugins/npm/README.html"},void 0,"npm"),". If you specify any plugins this will be overridden."),s("h3",{id:"installation-via-brew-(osx)"},void 0,"Installation via brew (OSX) ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#installation-via-brew-(osx)","aria-hidden":"true"})),k,x,s("h2",{id:"configuration"},void 0,"Configuration ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#configuration","aria-hidden":"true"})),O,s("ol",{},void 0,s("li",{},void 0,"Create and configure a ",s(c,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/settings/tokens",className:"external-link"},void 0,L)," environment variable"),_),s("h3",{id:"making-an-.autorc"},void 0,"Making an ",C," ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#making-an-.autorc","aria-hidden":"true"})),s("p",{},void 0,"Using ",E," with any other package manager than ",s(c,{currentPage:e.currentPage,target:"_blank",to:"https://npmjs.com",className:"external-link"},void 0,"npm")," requires that you create an ",s(c,{currentPage:e.currentPage,to:"/auto/pages/autorc.html"},void 0,M)," at the root of your project."),s("ol",{},void 0,s("li",{},void 0,s("p",{},void 0,S," - No plugins, ",I," doesn't work. Enables ",s(c,{currentPage:e.currentPage,target:"_blank",to:"https://intuit.github.io/auto/pages/getting-started.html#detailed-setup",className:"external-link"},void 0,"advanced setup")),A),s("li",{},void 0,s("p",{},void 0,D," - ",T," plugin compatible with any platform. Enables ",s(c,{currentPage:e.currentPage,target:"_blank",to:"https://intuit.github.io/auto/pages/generated/shipit.html",className:"external-link"},void 0,U," usage")),H),s("li",{},void 0,s("p",{},void 0,q," - With package manager plugin. ",s(c,{currentPage:e.currentPage,target:"_blank",to:"https://intuit.github.io/auto/pages/generated/shipit.html",className:"external-link"},void 0,R)," works, some configuration picked up from package manager package definition files. In the following ",z,", ",G,", ",J,", and ",W," are picked up from the ",X),$)),s("h2",{id:"usage"},void 0,"Usage ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#usage","aria-hidden":"true"})),F,K,s("article",{className:"message column is-info"},void 0,s("div",{className:"message-body"},void 0,s("p",{},void 0,"ℹ️ Tip: Using ",Y," locally with an ",B," file is a great experience. See how ",s(c,{currentPage:e.currentPage,to:"./getting-started.md#local-.env"},void 0,"here"),"."))),s("h2",{id:"plugins"},void 0,"Plugins ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#plugins","aria-hidden":"true"})),Q,s("h4",{id:"local-plugins"},void 0,"Local Plugins ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#local-plugins","aria-hidden":"true"})),V,Z,ee,ae,oe,s("h4",{id:"hosted-plugins"},void 0,"Hosted Plugins ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#hosted-plugins","aria-hidden":"true"})),te,ie,ne,re,se,s("h4",{id:"npm-plugins"},void 0,"NPM Plugins ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#npm-plugins","aria-hidden":"true"})),le,de,ue,ce));a.default=pe,e.exports=a.default}}]);
//# sourceMappingURL=non-npm.js.map
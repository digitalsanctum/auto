(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{76:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o,r=d(t(3)),i=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};o.get||o.set?Object.defineProperty(a,t,o):a[t]=e[t]}return a.default=e,a}(t(0)),s=d(t(2)),n=d(t(114));function d(e){return e&&e.__esModule?e:{default:e}}function l(e,a,t,r){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,s=arguments.length-3;if(a||0===s||(a={children:void 0}),a&&i)for(var n in i)void 0===a[n]&&(a[n]=i[n]);else a||(a=i||{});if(1===s)a.children=r;else if(s>1){for(var d=new Array(s),l=0;l<s;l++)d[l]=arguments[l+3];a.children=d}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:a,_owner:null}}function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function h(){return(h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function u(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const p=e=>{let{to:a}=e,t=u(e,["to"]);return a.includes("http")?i.default.createElement("a",h({},e,{href:a})):("#"===a[0]&&(a=r.default.join("/auto/","pages/extras/shipit.html")+a),i.default.createElement("a",h({},t,{href:a,onClick:t=>{if(t.preventDefault(),"#"===e.to)return!1;const o=new URL(r.default.join(window.location.origin,a));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(o),null,a),e.onClick();const i=new CustomEvent("changeLocation",{detail:o});return dispatchEvent(i),!1}})))};p.defaultProps={href:"",onClick:()=>{}};const v={"../../images/default-auto.png":()=>t.e(13).then(t.t.bind(null,119,7)),"../../images/complete-auto.png":()=>t.e(12).then(t.t.bind(null,120,7)),"../../images/next-branch.png":()=>t.e(14).then(t.t.bind(null,121,7))};class g extends i.default.Component{constructor(...e){super(...e),c(this,"state",{image:null,ImageProvider:v[this.props.src]})}componentDidMount(){this.state.image||this.state.ImageProvider().then(e=>{this.setState({image:e.default})})}render(){let{image:e}=this.state;return e&&"object"==typeof e?i.default.createElement(n.default,h({},this.props,{className:(0,s.default)("image",this.props.className),src:e.src.src,width:e.src.width||e.width,height:e.src.height||e.height,placeholder:{lqip:e.preSrc},srcSet:e.src.images?e.src.images.map(e=>(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(a){c(e,a,t[a])})}return e})({},e,{src:e.path})):[{src:e.src,width:e.width}]})):l("img",{className:(0,s.default)("image",this.props.className),src:e})}}const m=e=>{var a,t;return t=a=class extends i.default.Component{constructor(...e){super(...e),c(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?i.default.createElement(e,this.props,this.props.children||null):null}},c(a,"defaultProps",{shouldLoad:!0}),t};m(()=>t.e(27).then(t.bind(null,115))),m(()=>t.e(27).then(t.bind(null,116)));var f=l("p",{},void 0,"Below is the basics steps auto takes when releasing your code through the ",l("code",{},void 0,"shipit")," command."),b=l("p",{},void 0,l(g,{src:"../../images/default-auto.png",alt:"The default shipit workflow"})),y=l("p",{},void 0,"You can customize how this pipeline operates with various flags. The following shows how those flags can effect the workflow."),w=l("p",{},void 0,l(g,{src:"../../images/complete-auto.png",alt:"The entire shipit workflow"})),P=l("code",{},void 0,"versionBranches"),j=l("code",{},void 0,"true"),N=l("p",{},void 0,"With this feature enabled ",l("code",{},void 0,"auto shipit")," will:"),k=l("ul",{},void 0,l("li",{},void 0,"Create a version branch when a ",l("code",{},void 0,"major")," happens (prefixed with ",l("code",{},void 0,"version-"),")"),l("li",{},void 0,"When ran from a ",l("code",{},void 0,"versionBranch")," make a release to that version")),O=l("p",{},void 0,"Now that you have a branch for an old major release, it is super easy to release patches to it! People can make PRs to the the ",l("code",{},void 0,"version-")," branch and once merged create a new release of that version."),x=l("p",{},void 0,"You can customize what the branch names will be by setting ",l("code",{},void 0,"versionBranches")," to a string."),B=l("pre",{},void 0,l("code",{className:"language-json"},void 0,"{",l("br",{}),"  ",l("span",{className:"hljs-attr"},void 0,'"versionBranches"'),": ",l("span",{className:"hljs-string"},void 0,'"Major-"'),l("br",{}),"}",l("br",{}))),S=l("p",{},void 0,"If you are interested in pre-releases (ex: ",l("code",{},void 0,"alpha"),", ",l("code",{},void 0,"beta"),", ",l("code",{},void 0,"next"),") ",l("code",{},void 0,"auto")," has the ability to publish pre-releases in various ways."),L=l("p",{},void 0,"The suggested way to create pre-releases is by managing 2 branches for your repo: ",l("code",{},void 0,"master")," and ",l("code",{},void 0,"next"),".",l("code",{},void 0,"master")," contains the ",l("code",{},void 0,"latest")," stable version of the code, and ",l("code",{},void 0,"next")," contains future updates."),C=l("code",{},void 0,"auto"),T=l("code",{},void 0,".autorc"),E=l("p",{},void 0,l(g,{src:"../../images/next-branch.png",alt:"Example git tree"})),R=l("p",{},void 0,"To update the ",l("code",{},void 0,"latest")," stable version simply merge your pre-release branch into your ",l("code",{},void 0,"baseBranch"),"."),M=l("code",{},void 0,"--only-graduate-with-release-label"),D=l("p",{},void 0,"If you use the ",l("code",{},void 0,"--only-graduate-with-release-label")," flag, you do not have to manage 2 branches. Instead you only have a ",l("code",{},void 0,"baseBranch")," and do all work and pull requests there.",l("code",{},void 0,"auto")," will only publish pre-releases when PRs are merged. To update the ",l("code",{},void 0,"latest")," stable version add the ",l("code",{},void 0,"released")," label to the PR."),I=l("p",{},void 0,"While this setup may be simpler, it restricts you from updating latest while development is happening for the pre-release. With 2 branches you can easily merge update to the latest release, with 1 this is not possible."),W=l("p",{},void 0,"Sometimes you might want to have more rigorous release lines. This can help test out bugs on a smaller set of users."),_=l("p",{},void 0,"One setup you could use to accomplish this is by creating 3 ",l("code",{},void 0,"prereleaseBranches")),q=l("pre",{},void 0,l("code",{className:"language-json"},void 0,"{",l("br",{}),"  ",l("span",{className:"hljs-attr"},void 0,'"prereleaseBranches"'),": [",l("span",{className:"hljs-string"},void 0,'"alpha"'),", ",l("span",{className:"hljs-string"},void 0,'"beta"'),", ",l("span",{className:"hljs-string"},void 0,'"rc"'),"]",l("br",{}),"}",l("br",{}))),Y=l("p",{},void 0,"You could then set you default to ",l("code",{},void 0,"alpha")," and ",l("code",{},void 0,"auto")," would publish updates merged to that branch under the ",l("code",{},void 0,"alpha")," release tag. When you are ready for the update to get used by more users just merge ",l("code",{},void 0,"alpha")," into ",l("code",{},void 0,"beta"),". This will publish a ",l("code",{},void 0,"beta")," release to the matching release tag. Repeat this same process when graduating to ",l("code",{},void 0,"rc")," or ",l("code",{},void 0,"latest"),"."),z=l("p",{},void 0,"Sometimes you are working on a large feature that requires a lot of work. Instead of making a giant PR with a bunch of updates, you can create a ",l("code",{},void 0,"prereleaseBranch")," to track the work."),A=l("pre",{},void 0,l("code",{className:"language-json"},void 0,"{",l("br",{}),"  ",l("span",{className:"hljs-attr"},void 0,'"prereleaseBranches"'),": [",l("span",{className:"hljs-string"},void 0,'"next"'),", ",l("span",{className:"hljs-string"},void 0,'"my-cool-feature"'),"]",l("br",{}),"}",l("br",{}))),G=l("p",{},void 0,"Now instead of just getting a canary version when merging into the ",l("code",{},void 0,"my-cool-feature")," branch, a prerelease version is published under the ",l("code",{},void 0,"my-cool-feature")," release tag! This enables other to consume just this line of work and enables your work to be more flexible.");var U=e=>l("div",{className:e.className},void 0,l("section",{},void 0,l("h2",{id:"release-pipeline"},void 0,"Release Pipeline ",l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#release-pipeline","aria-hidden":"true"})),f,b,y,w,l("h2",{id:"managing-old-major-versions"},void 0,"Managing Old Major Versions ",l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#managing-old-major-versions","aria-hidden":"true"})),l("p",{},void 0,"This command also has the ability to help you manage old major versions too! This feature is off by default, to enable set ",P," to ",j," in your ",l(p,{currentPage:e.currentPage,to:"/auto/pages/autorc.html#versionbranches"},void 0,".autorc"),"."),N,k,O,l("h3",{id:"customize-branch-prefix"},void 0,"Customize Branch Prefix ",l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#customize-branch-prefix","aria-hidden":"true"})),x,B,l("h2",{id:"prereleases"},void 0,"Prereleases ",l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#prereleases","aria-hidden":"true"})),S,l("p",{},void 0,"Read more about preparing you project for pre-releases ",l(p,{currentPage:e.currentPage,to:"/auto/pages/generated/next.html#setting-up-protected-branches"},void 0,"here"),"."),l("h3",{id:"strategies"},void 0,"Strategies ",l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#strategies","aria-hidden":"true"})),l("h4",{id:"%22next%22-branch-(default)"},void 0,'"next" Branch (default) ',l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#%22next%22-branch-(default)","aria-hidden":"true"})),L,l("p",{},void 0,"You can change what branches ",C," treats as pre-release branches in your ",l(p,{currentPage:e.currentPage,to:"/auto/pages/autorc.html#prerelease-branches"},void 0,T),"."),E,R,l("h4",{id:"without-%22next%22-branch-(--only-graduate-with-release-label)"},void 0,'Without "next" Branch (',M,") ",l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#without-%22next%22-branch-(--only-graduate-with-release-label)","aria-hidden":"true"})),D,I,l("h4",{id:"multiple-%22next%22-branches"},void 0,'Multiple "next" Branches ',l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#multiple-%22next%22-branches","aria-hidden":"true"})),W,_,q,Y,l("h4",{id:"feature-pre-releases"},void 0,"Feature Pre-releases ",l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#feature-pre-releases","aria-hidden":"true"})),z,A,G));a.default=U,e.exports=a.default},90:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o,r=d(t(3)),i=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};o.get||o.set?Object.defineProperty(a,t,o):a[t]=e[t]}return a.default=e,a}(t(0)),s=d(t(2)),n=d(t(114));function d(e){return e&&e.__esModule?e:{default:e}}function l(e,a,t,r){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,s=arguments.length-3;if(a||0===s||(a={children:void 0}),a&&i)for(var n in i)void 0===a[n]&&(a[n]=i[n]);else a||(a=i||{});if(1===s)a.children=r;else if(s>1){for(var d=new Array(s),l=0;l<s;l++)d[l]=arguments[l+3];a.children=d}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:a,_owner:null}}function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function h(){return(h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function u(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const p=e=>{let{to:a}=e,t=u(e,["to"]);return a.includes("http")?i.default.createElement("a",h({},e,{href:a})):("#"===a[0]&&(a=r.default.join("/auto/","pages/generated/shipit.html")+a),i.default.createElement("a",h({},t,{href:a,onClick:t=>{if(t.preventDefault(),"#"===e.to)return!1;const o=new URL(r.default.join(window.location.origin,a));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(o),null,a),e.onClick();const i=new CustomEvent("changeLocation",{detail:o});return dispatchEvent(i),!1}})))};p.defaultProps={href:"",onClick:()=>{}};const v={"../../images/default-auto.png":()=>t.e(13).then(t.t.bind(null,119,7)),"../../images/complete-auto.png":()=>t.e(12).then(t.t.bind(null,120,7)),"../../images/next-branch.png":()=>t.e(14).then(t.t.bind(null,121,7))};class g extends i.default.Component{constructor(...e){super(...e),c(this,"state",{image:null,ImageProvider:v[this.props.src]})}componentDidMount(){this.state.image||this.state.ImageProvider().then(e=>{this.setState({image:e.default})})}render(){let{image:e}=this.state;return e&&"object"==typeof e?i.default.createElement(n.default,h({},this.props,{className:(0,s.default)("image",this.props.className),src:e.src.src,width:e.src.width||e.width,height:e.src.height||e.height,placeholder:{lqip:e.preSrc},srcSet:e.src.images?e.src.images.map(e=>(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(a){c(e,a,t[a])})}return e})({},e,{src:e.path})):[{src:e.src,width:e.width}]})):l("img",{className:(0,s.default)("image",this.props.className),src:e})}}const m=e=>{var a,t;return t=a=class extends i.default.Component{constructor(...e){super(...e),c(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?i.default.createElement(e,this.props,this.props.children||null):null}},c(a,"defaultProps",{shouldLoad:!0}),t};m(()=>t.e(27).then(t.bind(null,115))),m(()=>t.e(27).then(t.bind(null,116)));var f=l("h1",{},void 0,l("code",{},void 0,"shipit")),b=l("p",{},void 0,"Context aware publishing."),y=l("ol",{},void 0,l("li",{},void 0,"call from base branch -> latest version released (LATEST)"),l("li",{},void 0,"call from prerelease branch -> prerelease version released (NEXT)"),l("li",{},void 0,"call from PR in CI -> canary version released (CANARY)"),l("li",{},void 0,"call locally when not on base/prerelease branch -> canary version released (CANARY)")),w=l("table",{},void 0,l("thead",{},void 0,l("tr",{},void 0,l("th",{},void 0,"Flag"),l("th",{},void 0,"Type"),l("th",{},void 0,"Description"))),l("tbody",{},void 0,l("tr",{},void 0,l("td",{},void 0,l("code",{},void 0,"--name")),l("td",{},void 0,"String"),l("td",{},void 0,"Git name to commit  with. Defaults to package definition for the platform")),l("tr",{},void 0,l("td",{},void 0,l("code",{},void 0,"--email")),l("td",{},void 0,"String"),l("td",{},void 0,"Git email to commit with. Defaults to package definition for the platform")),l("tr",{},void 0,l("td",{},void 0,l("code",{},void 0,"--only-publish-with-release-label")),l("td",{},void 0,"Boolean"),l("td",{},void 0,"Only bump version if 'release' label is on pull request")),l("tr",{},void 0,l("td",{},void 0,l("code",{},void 0,"--base-branch")),l("td",{},void 0,"String"),l("td",{},void 0,'Branch to treat as the "master" branch')),l("tr",{},void 0,l("td",{},void 0,l("code",{},void 0,"--dry-run"),", ",l("code",{},void 0,"-d")),l("td",{},void 0,"Boolean"),l("td",{},void 0,"Report what command will do but do not actually do anything")),l("tr",{},void 0,l("td",{},void 0,l("code",{},void 0,"--no-version-prefix")),l("td",{},void 0,"Boolean"),l("td",{},void 0,"Use the version as the tag without the 'v' prefix. WARNING: some plugins might need extra config to use this option (ex: npm)")),l("tr",{},void 0,l("td",{},void 0,l("code",{},void 0,"--prerelease")),l("td",{},void 0,"Boolean"),l("td",{},void 0,"Publish a prerelease on GitHub.")),l("tr",{},void 0,l("td",{},void 0,l("code",{},void 0,"--title")),l("td",{},void 0,"String"),l("td",{},void 0,"Override the title used in the addition to the CHANGELOG.md.")),l("tr",{},void 0,l("td",{},void 0,l("code",{},void 0,"--message"),", ",l("code",{},void 0,"-m")),l("td",{},void 0,"String"),l("td",{},void 0,"Message to commit the changelog with. Defaults to 'Update CHANGELOG.md [skip ci]'")),l("tr",{},void 0,l("td",{},void 0,l("code",{},void 0,"--quiet"),", ",l("code",{},void 0,"-q")),l("td",{},void 0,"Boolean"),l("td",{},void 0,"Print ",l("strong",{},void 0,"only")," the result of the command")),l("tr",{},void 0,l("td",{},void 0,l("code",{},void 0,"--no-changelog")),l("td",{},void 0,"Boolean"),l("td",{},void 0,"Skip creating the changelog")),l("tr",{},void 0,l("td",{},void 0,l("code",{},void 0,"--only-graduate-with-release-label")),l("td",{},void 0,"Boolean"),l("td",{},void 0,'Make auto publish prerelease versions when merging to master. Only PRs merged with "release" label will generate a "latest" release. Only use this flag if you do not want to maintain a prerelease branch, and instead only want to use master.')))),P=l("pre",{},void 0,l("code",{className:"language-sh"},void 0,"auto shipit",l("br",{}))),j=l("p",{},void 0,"You can configure some of the options for the ",l("code",{},void 0,"shipit")," command in the ",l("code",{},void 0,".autorc"),"."),N=l("ul",{},void 0,l("li",{},void 0,l("code",{},void 0,"prerelease")),l("li",{},void 0,l("code",{},void 0,"message")),l("li",{},void 0,l("code",{},void 0,"no-changelog")),l("li",{},void 0,l("code",{},void 0,"only-graduate-with-release-label"))),k=l("p",{},void 0,l("strong",{},void 0,"Example ",l("code",{},void 0,".autorc"),":")),O=l("pre",{},void 0,l("code",{className:"language-json"},void 0,"{",l("br",{}),"  ",l("span",{className:"hljs-attr"},void 0,'"shipit"'),": {",l("br",{}),"    ",l("span",{className:"hljs-attr"},void 0,'"prerelease"'),": ",l("span",{className:"hljs-literal"},void 0,"true"),",",l("br",{}),"    ",l("span",{className:"hljs-attr"},void 0,'"message"'),": ",l("span",{className:"hljs-string"},void 0,'"string"'),",",l("br",{}),"    ",l("span",{className:"hljs-attr"},void 0,'"noChangelog"'),": ",l("span",{className:"hljs-literal"},void 0,"true"),",",l("br",{}),"    ",l("span",{className:"hljs-attr"},void 0,'"onlyGraduateWithReleaseLabel"'),": ",l("span",{className:"hljs-literal"},void 0,"true"),l("br",{}),"  }",l("br",{}),"}",l("br",{}))),x=l("p",{},void 0,"Below is the basics steps auto takes when releasing your code through the ",l("code",{},void 0,"shipit")," command."),B=l("p",{},void 0,l(g,{src:"../../images/default-auto.png",alt:"The default shipit workflow"})),S=l("p",{},void 0,"You can customize how this pipeline operates with various flags. The following shows how those flags can effect the workflow."),L=l("p",{},void 0,l(g,{src:"../../images/complete-auto.png",alt:"The entire shipit workflow"})),C=l("code",{},void 0,"versionBranches"),T=l("code",{},void 0,"true"),E=l("p",{},void 0,"With this feature enabled ",l("code",{},void 0,"auto shipit")," will:"),R=l("ul",{},void 0,l("li",{},void 0,"Create a version branch when a ",l("code",{},void 0,"major")," happens (prefixed with ",l("code",{},void 0,"version-"),")"),l("li",{},void 0,"When ran from a ",l("code",{},void 0,"versionBranch")," make a release to that version")),M=l("p",{},void 0,"Now that you have a branch for an old major release, it is super easy to release patches to it! People can make PRs to the the ",l("code",{},void 0,"version-")," branch and once merged create a new release of that version."),D=l("p",{},void 0,"You can customize what the branch names will be by setting ",l("code",{},void 0,"versionBranches")," to a string."),I=l("pre",{},void 0,l("code",{className:"language-json"},void 0,"{",l("br",{}),"  ",l("span",{className:"hljs-attr"},void 0,'"versionBranches"'),": ",l("span",{className:"hljs-string"},void 0,'"Major-"'),l("br",{}),"}",l("br",{}))),W=l("p",{},void 0,"If you are interested in pre-releases (ex: ",l("code",{},void 0,"alpha"),", ",l("code",{},void 0,"beta"),", ",l("code",{},void 0,"next"),") ",l("code",{},void 0,"auto")," has the ability to publish pre-releases in various ways."),_=l("p",{},void 0,"The suggested way to create pre-releases is by managing 2 branches for your repo: ",l("code",{},void 0,"master")," and ",l("code",{},void 0,"next"),".",l("code",{},void 0,"master")," contains the ",l("code",{},void 0,"latest")," stable version of the code, and ",l("code",{},void 0,"next")," contains future updates."),q=l("code",{},void 0,"auto"),Y=l("code",{},void 0,".autorc"),z=l("p",{},void 0,l(g,{src:"../../images/next-branch.png",alt:"Example git tree"})),A=l("p",{},void 0,"To update the ",l("code",{},void 0,"latest")," stable version simply merge your pre-release branch into your ",l("code",{},void 0,"baseBranch"),"."),G=l("code",{},void 0,"--only-graduate-with-release-label"),U=l("p",{},void 0,"If you use the ",l("code",{},void 0,"--only-graduate-with-release-label")," flag, you do not have to manage 2 branches. Instead you only have a ",l("code",{},void 0,"baseBranch")," and do all work and pull requests there.",l("code",{},void 0,"auto")," will only publish pre-releases when PRs are merged. To update the ",l("code",{},void 0,"latest")," stable version add the ",l("code",{},void 0,"released")," label to the PR."),$=l("p",{},void 0,"While this setup may be simpler, it restricts you from updating latest while development is happening for the pre-release. With 2 branches you can easily merge update to the latest release, with 1 this is not possible."),F=l("p",{},void 0,"Sometimes you might want to have more rigorous release lines. This can help test out bugs on a smaller set of users."),H=l("p",{},void 0,"One setup you could use to accomplish this is by creating 3 ",l("code",{},void 0,"prereleaseBranches")),J=l("pre",{},void 0,l("code",{className:"language-json"},void 0,"{",l("br",{}),"  ",l("span",{className:"hljs-attr"},void 0,'"prereleaseBranches"'),": [",l("span",{className:"hljs-string"},void 0,'"alpha"'),", ",l("span",{className:"hljs-string"},void 0,'"beta"'),", ",l("span",{className:"hljs-string"},void 0,'"rc"'),"]",l("br",{}),"}",l("br",{}))),V=l("p",{},void 0,"You could then set you default to ",l("code",{},void 0,"alpha")," and ",l("code",{},void 0,"auto")," would publish updates merged to that branch under the ",l("code",{},void 0,"alpha")," release tag. When you are ready for the update to get used by more users just merge ",l("code",{},void 0,"alpha")," into ",l("code",{},void 0,"beta"),". This will publish a ",l("code",{},void 0,"beta")," release to the matching release tag. Repeat this same process when graduating to ",l("code",{},void 0,"rc")," or ",l("code",{},void 0,"latest"),"."),X=l("p",{},void 0,"Sometimes you are working on a large feature that requires a lot of work. Instead of making a giant PR with a bunch of updates, you can create a ",l("code",{},void 0,"prereleaseBranch")," to track the work."),K=l("pre",{},void 0,l("code",{className:"language-json"},void 0,"{",l("br",{}),"  ",l("span",{className:"hljs-attr"},void 0,'"prereleaseBranches"'),": [",l("span",{className:"hljs-string"},void 0,'"next"'),", ",l("span",{className:"hljs-string"},void 0,'"my-cool-feature"'),"]",l("br",{}),"}",l("br",{}))),Q=l("p",{},void 0,"Now instead of just getting a canary version when merging into the ",l("code",{},void 0,"my-cool-feature")," branch, a prerelease version is published under the ",l("code",{},void 0,"my-cool-feature")," release tag! This enables other to consume just this line of work and enables your work to be more flexible.");var Z=e=>l("div",{className:e.className},void 0,l("section",{},void 0,f,b,y,l("h2",{id:"options"},void 0,"Options ",l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#options","aria-hidden":"true"})),w,l("h2",{id:"examples"},void 0,"Examples ",l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#examples","aria-hidden":"true"})),P,l("h2",{id:"configurable-options"},void 0,"Configurable Options ",l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#configurable-options","aria-hidden":"true"})),j,N,k,O,l("h2",{id:"release-pipeline"},void 0,"Release Pipeline ",l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#release-pipeline","aria-hidden":"true"})),x,B,S,L,l("h2",{id:"managing-old-major-versions"},void 0,"Managing Old Major Versions ",l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#managing-old-major-versions","aria-hidden":"true"})),l("p",{},void 0,"This command also has the ability to help you manage old major versions too! This feature is off by default, to enable set ",C," to ",T," in your ",l(p,{currentPage:e.currentPage,to:"/auto/pages/autorc.html#versionbranches"},void 0,".autorc"),"."),E,R,M,l("h3",{id:"customize-branch-prefix"},void 0,"Customize Branch Prefix ",l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#customize-branch-prefix","aria-hidden":"true"})),D,I,l("h2",{id:"prereleases"},void 0,"Prereleases ",l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#prereleases","aria-hidden":"true"})),W,l("p",{},void 0,"Read more about preparing you project for pre-releases ",l(p,{currentPage:e.currentPage,to:"/auto/pages/generated/next.html#setting-up-protected-branches"},void 0,"here"),"."),l("h3",{id:"strategies"},void 0,"Strategies ",l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#strategies","aria-hidden":"true"})),l("h4",{id:"%22next%22-branch-(default)"},void 0,'"next" Branch (default) ',l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#%22next%22-branch-(default)","aria-hidden":"true"})),_,l("p",{},void 0,"You can change what branches ",q," treats as pre-release branches in your ",l(p,{currentPage:e.currentPage,to:"/auto/pages/autorc.html#prerelease-branches"},void 0,Y),"."),z,A,l("h4",{id:"without-%22next%22-branch-(--only-graduate-with-release-label)"},void 0,'Without "next" Branch (',G,") ",l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#without-%22next%22-branch-(--only-graduate-with-release-label)","aria-hidden":"true"})),U,$,l("h4",{id:"multiple-%22next%22-branches"},void 0,'Multiple "next" Branches ',l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#multiple-%22next%22-branches","aria-hidden":"true"})),F,H,J,V,l("h4",{id:"feature-pre-releases"},void 0,"Feature Pre-releases ",l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#feature-pre-releases","aria-hidden":"true"})),X,K,Q));a.default=Z,e.exports=a.default}}]);
//# sourceMappingURL=shipit.js.map
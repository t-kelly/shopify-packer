(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{132:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/ssl_1-a59b8bdfdae826e89845564ae656788b.png"},133:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/ssl_2-b93b3c515764be5b3e2f7c846497980a.png"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(90)),c={id:"ssl",title:"HTTPS & SSL",sidebar_label:"HTTPS & SSL",slug:"/ssl"},s={unversionedId:"ssl",id:"ssl",isDocsHomePage:!1,title:"HTTPS & SSL",description:"Packer uses a local server which compiles and serves theme JavaScript and CSS locally. By serving these assets locally, developers don't need to wait for them to be uploaded to Shopify servers to preview the changes they are making. When combined with Hot Module Reloading, developers see changes in their code reflected almost instantly.",source:"@site/docs\\ssl.md",slug:"/ssl",permalink:"/docs/ssl",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ssl.md",version:"current",sidebar_label:"HTTPS & SSL",sidebar:"someSidebar",previous:{title:"Commands",permalink:"/docs/commands"},next:{title:"Structure",permalink:"/docs/structure"}},i=[{value:"Accept default cert",id:"accept-default-cert",children:[]},{value:"Create self signed cert",id:"create-self-signed-cert",children:[]}],l={toc:i};function p(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Packer uses a local server which compiles and serves theme JavaScript and CSS locally. By serving these assets locally, developers don't need to wait for them to be uploaded to Shopify servers to preview the changes they are making. When combined with Hot Module Reloading, developers see changes in their code reflected almost instantly."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"For the local server to function properly you must have SSL setup properly."))),Object(o.b)("p",null,"Developers wanting to share an instance of their store with other developers are often confused when they see their store appear broken. Because CSS and JavaScript are being served locally, your theme won\u2019t function on any machine other than the one the Express server is currently running on."),Object(o.b)("p",null,"When SSL is not working your css/js will be blocked in the browser and\nthe site will appear broken. You can also see the requests being blocked\nin the network tab chrome developer tools. There are two methods for fixing this:"),Object(o.b)("h3",{id:"accept-default-cert"},"Accept default cert"),Object(o.b)("p",null,"This is the fastest method but will often have to be repeated"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run start/watch")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"When browser launches if there is a warning follow these steps"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Click advanced")),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{alt:"SSL Error",src:r(132).default})),Object(o.b)("ol",{parentName:"li",start:2},Object(o.b)("li",{parentName:"ol"},"Click proceed")),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{alt:"SSL Error 2",src:r(133).default})))),Object(o.b)("h3",{id:"create-self-signed-cert"},"Create self signed cert"),Object(o.b)("p",null,"Create a trusted, self-signed SSL certificate on your device so the\nassets, served via https, are never blocked. This takes longer and the\nsteps very depending on what OS you are using."),Object(o.b)("p",null,"Packer will look for the cert named ",Object(o.b)("inlineCode",{parentName:"p"},"localhost.cer"),"\nin ",Object(o.b)("inlineCode",{parentName:"p"},"~/.localhost_ssl")," for windows it will be in the users home directory"),Object(o.b)("p",null,"The certificate common name must match the ip you are using with packer.\nWhen your IP changes you will need to make a new cert"))}p.isMDXComponent=!0},90:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||o;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
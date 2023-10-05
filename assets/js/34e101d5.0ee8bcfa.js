"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[126],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return r?a.createElement(f,o(o({ref:t},l),{},{components:r})):a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2889:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const i={title:"About Hardened Images"},o=void 0,s={unversionedId:"security/about_hardened_images",id:"security/about_hardened_images",title:"About Hardened Images",description:"RKE2 hardened images are scanned for vulnerabilities at build time, and additional security protections have been added to decrease potential weaknesses:",source:"@site/docs/security/about_hardened_images.md",sourceDirName:"security",slug:"/security/about_hardened_images",permalink:"/docs-rke2/security/about_hardened_images",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/about_hardened_images.md",tags:[],version:"current",lastUpdatedAt:1696529735,formattedLastUpdatedAt:"Oct 5, 2023",frontMatter:{title:"About Hardened Images"},sidebar:"mySidebar",previous:{title:"Automated Upgrades",permalink:"/docs-rke2/upgrade/automated_upgrade"},next:{title:"CIS Hardening Guide",permalink:"/docs-rke2/security/hardening_guide"}},c={},d=[],l={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"RKE2 hardened images are scanned for vulnerabilities at build time, and additional security protections have been added to decrease potential weaknesses:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Images are not simply mirrored from upstream builds. The images are built from source on top of a hardened minimal base image, which is currently ",(0,n.kt)("a",{parentName:"li",href:"https://www.suse.com/products/base-container-images/"},"SLE Base Container Image (BCI)"),"."),(0,n.kt)("li",{parentName:"ul"},"Any binaries that are written in Go are compiled using a FIPS 140-2 compliant build process. For more information on this compiler, refer ",(0,n.kt)("a",{parentName:"li",href:"/docs-rke2/security/fips_support#use-of-fips-compatible-go-compiler"},"here"),".")),(0,n.kt)("p",null,"You will know if an image has been hardened as above by the image name. RKE2 publishes image lists with each release. Refer ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/releases/download/v1.23.14%2Brke2r1/rke2-images-all.linux-amd64.txt"},"here")," for an example of a published image list."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Currently, RKE2 hardened images are multi-architecture. Only the Linux AMD64 architecture is FIPS compliant. Windows and s390x architectures are not FIPS compliant.")))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[6890],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},583:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i="2. RPM support for RKE2",s={unversionedId:"adrs/rke2-rpm-support",id:"adrs/rke2-rpm-support",title:"2. RPM support for RKE2",description:"Date: 2022-01-20",source:"@site/docs/adrs/002-rke2-rpm-support.md",sourceDirName:"adrs",slug:"/adrs/rke2-rpm-support",permalink:"/docs-rke2/adrs/rke2-rpm-support",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/adrs/002-rke2-rpm-support.md",tags:[],version:"current",lastUpdatedAt:1672962031,formattedLastUpdatedAt:"Jan 5, 2023",sidebarPosition:2,frontMatter:{}},l={},p=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2-rpm-support-for-rke2"},"2. RPM support for RKE2"),(0,o.kt)("p",null,"Date: 2022-01-20"),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"Accepted"),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"RKE2 publishes RPMs for distribution of RKE2 through the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-packaging"},"https://github.com/rancher/rke2-packaging")," repository. These RPMs are built using automated calls to ",(0,o.kt)("inlineCode",{parentName:"p"},"rpmbuild")," and corresponding GPG signing/publishing plugins, and publish RPMs to the ",(0,o.kt)("inlineCode",{parentName:"p"},"rpm.rancher.io"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"rpm-testing.rancher.io")," S3-backed buckets."),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"Until a more robust RPM building/mechanism is established for RKE2, we will not add any new platforms for RPM publishing beyond the existing CentOS/RHEL 7 and 8 RPMs that are published. We will publish selinux policy RPMs for new platforms as needed, and ensure the selinux RPMs are compatible with the tarball installation method for the platform in question."),(0,o.kt)("p",null,"This decision can be re-evaluated in the future if a more robust RPM publishing technique/platform is developed/made available. "),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("p",null,"The only supported installation method for all platforms except CentOS 7/8 with selinux support will be a combination of the use of a tarball install in conjunction with an selinux policy RPM."))}c.isMDXComponent=!0}}]);
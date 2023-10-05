"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[2438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"SELinux"},o=void 0,l={unversionedId:"security/selinux",id:"security/selinux",title:"SELinux",description:"RKE2 can be run on SELinux-enabled systems which is the default when installed on CentOS/RHEL 7 &amp; 8.",source:"@site/docs/security/selinux.md",sourceDirName:"security",slug:"/security/selinux",permalink:"/docs-rke2/security/selinux",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/selinux.md",tags:[],version:"current",lastUpdatedAt:1696529735,formattedLastUpdatedAt:"Oct 5, 2023",frontMatter:{title:"SELinux"},sidebar:"mySidebar",previous:{title:"Default Pod Security Standards",permalink:"/docs-rke2/security/pod_security_standards"},next:{title:"Secrets Encryption",permalink:"/docs-rke2/security/secrets_encryption"}},s={},c=[{value:"Custom Context Labels",id:"custom-context-labels",level:4},{value:"Configuration",id:"configuration",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"RKE2 can be run on SELinux-enabled systems which is the default when installed on CentOS/RHEL 7 ","&"," 8.\nThe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-selinux"},"policy")," supporting this is a specialization of the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/container-selinux"},"container-selinux")," policy for containerd. It accounts\nfor the non-standard location(s) which containerd is installed and places persistent and ephemeral state."),(0,a.kt)("h4",{id:"custom-context-labels"},"Custom Context Labels"),(0,a.kt)("p",null,"RKE2 runs control-plane services as static pods which require access to multiple\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/container-selinux/blob/RHEL7.5/container.te#L59"},(0,a.kt)("inlineCode",{parentName:"a"},"container_var_lib_t")),"\nlocations. The ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," container must be able to read-write under ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/db")," and read,\nalong with ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-controller-manager"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-scheduler"),", from ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/tls"),".\nTo make this work without over-privileging, e.g.,\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/container-selinux/blob/RHEL7.5/container.te#L47-L49"},(0,a.kt)("inlineCode",{parentName:"a"},"spc_t")),", the RKE2 SELinux policy\nintroduces the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-selinux/blob/v0.3.latest.1/rke2.te#L15-L21"},(0,a.kt)("inlineCode",{parentName:"a"},"rke2_service_db_t"))," and\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-selinux/blob/v0.3.latest.1/rke2.te#L9-L13"},(0,a.kt)("inlineCode",{parentName:"a"},"rke2_service_t"))," context labels for\nread-write and read-only access, respectively. These labels will only be applied to the RKE2 control-plane static pods.  "),(0,a.kt)("h4",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"RKE2 support for SELinux amounts to a single configuration item, the ",(0,a.kt)("inlineCode",{parentName:"p"},"--selinux")," boolean flag. This is a pass-through\nto the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containerd/cri/blob/release/1.4/docs/config.md"},(0,a.kt)("inlineCode",{parentName:"a"},"enable_selinux")," boolean in the cri section of the containerd/cri toml"),".\nIf RKE2 was installed via tarball then SELinux will not be enabled without additional configuration. The recommended\nmethod to configure such is via an entry in the RKE2 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml"),", e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# /etc/rancher/rke2/config.yaml is the default location\nselinux: true\n")),(0,a.kt)("p",null,"This is equivalent to passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"--selinux")," flag to ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 server")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 agent")," command-line or setting the\n",(0,a.kt)("inlineCode",{parentName:"p"},"RKE2_SELINUX=true")," environment variable."))}d.isMDXComponent=!0}}]);
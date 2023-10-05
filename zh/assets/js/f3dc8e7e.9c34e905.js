"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[7989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,c=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={title:"\u914d\u7f6e\u9009\u9879"},i=void 0,o={unversionedId:"install/configuration",id:"install/configuration",title:"\u914d\u7f6e\u9009\u9879",description:"\u914d\u7f6e\u6587\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install/configuration.md",sourceDirName:"install",slug:"/install/configuration",permalink:"/docs-rke2/zh/install/configuration",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/configuration.md",tags:[],version:"current",lastUpdatedAt:1696529735,formattedLastUpdatedAt:"2023\u5e7410\u67085\u65e5",frontMatter:{title:"\u914d\u7f6e\u9009\u9879"},sidebar:"mySidebar",previous:{title:"\u8981\u6c42",permalink:"/docs-rke2/zh/install/requirements"},next:{title:"\u7f51\u7edc\u9009\u9879",permalink:"/docs-rke2/zh/install/network_options"}},p={},s=[{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u591a\u4e2a\u914d\u7f6e\u6587\u4ef6",id:"\u591a\u4e2a\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u914d\u7f6e Linux \u5b89\u88c5\u811a\u672c",id:"\u914d\u7f6e-linux-\u5b89\u88c5\u811a\u672c",level:2},{value:"\u914d\u7f6e Windows \u5b89\u88c5\u811a\u672c",id:"\u914d\u7f6e-windows-\u5b89\u88c5\u811a\u672c",level:2},{value:"\u5176\u4ed6 Windows \u5b89\u88c5\u811a\u672c\u4f7f\u7528\u793a\u4f8b",id:"\u5176\u4ed6-windows-\u5b89\u88c5\u811a\u672c\u4f7f\u7528\u793a\u4f8b",level:3},{value:"\u5b89\u88c5\u6700\u65b0\u7248\u672c\u800c\u4e0d\u662f\u7a33\u5b9a\u7248",id:"\u5b89\u88c5\u6700\u65b0\u7248\u672c\u800c\u4e0d\u662f\u7a33\u5b9a\u7248",level:4},{value:"\u4f7f\u7528 Tar \u5b89\u88c5\u65b9\u6cd5\u5b89\u88c5\u6700\u65b0\u7248\u672c",id:"\u4f7f\u7528-tar-\u5b89\u88c5\u65b9\u6cd5\u5b89\u88c5\u6700\u65b0\u7248\u672c",level:4},{value:"\u76f4\u63a5\u8fd0\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6",id:"\u76f4\u63a5\u8fd0\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6",level:2},{value:"\u66f4\u591a\u4fe1\u606f",id:"\u66f4\u591a\u4fe1\u606f",level:2}],d={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,"\u914d\u7f6e RKE2 \u7684\u4e3b\u8981\u65b9\u6cd5\u662f\u4f7f\u7528\u5b83\u7684\u914d\u7f6e\u6587\u4ef6\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u884c\u53c2\u6570\u548c\u73af\u5883\u53d8\u91cf\uff0c\u4f46 RKE2 \u4f5c\u4e3a systemd \u670d\u52a1\u5b89\u88c5\uff0c\u56e0\u6b64\u8fd9\u4e9b\u65b9\u6cd5\u8f83\u4e3a\u590d\u6742\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRKE2 \u5c06\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/config.yaml")," YAML \u6587\u4ef6\u4e2d\u7684\u503c\u6765\u542f\u52a8\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"RKE2 \u914d\u7f6e\u6587\u4ef6\u9700\u8981\u624b\u52a8\u521b\u5efa\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u7279\u6743\u7528\u6237\u8eab\u4efd\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"touch /etc/rancher/rke2/config.yaml")," \u6765\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002")),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," \u914d\u7f6e\u6587\u4ef6\u7684\u57fa\u672c\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'write-kubeconfig-mode: "0644"\ntls-san:\n  - "foo.local"\nnode-label:\n  - "foo=bar"\n  - "something=amazing"\ndebug: true\n')),(0,r.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u53c2\u6570\u76f4\u63a5\u6620\u5c04\u5230 CLI \u53c2\u6570\uff0c\u53ef\u91cd\u590d\u7684 CLI \u53c2\u6570\u5448\u73b0\u4e3a YAML \u5217\u8868\u3002\u5e03\u5c14\u6807\u5fd7\u5728 YAML \u6587\u4ef6\u4e2d\u8868\u793a\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u5c55\u793a\u4e86\u4e00\u4e2a\u4ec5\u4f7f\u7528 CLI \u53c2\u6570\u7684\u76f8\u540c\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'rke2 server \\\n  --write-kubeconfig-mode "0644"    \\\n  --tls-san "foo.local"             \\\n  --node-label "foo=bar"            \\\n  --node-label "something=amazing"  \\\n  --debug\n')),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u548c CLI \u53c2\u6570\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u503c\u5c06\u4ece\u4e24\u4e2a\u6765\u6e90\u52a0\u8f7d\uff0c\u4f46 CLI \u53c2\u6570\u5c06\u4f18\u5148\u3002 \u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"--node-label")," \u7b49\u53ef\u91cd\u590d\u53c2\u6570\uff0cCLI \u53c2\u6570\u5c06\u8986\u76d6\u5217\u8868\u4e2d\u7684\u6240\u6709\u503c\u3002"),(0,r.kt)("p",null,"\u6700\u540e\uff0c\u914d\u7f6e\u6587\u4ef6\u7684\u4f4d\u7f6e\u53ef\u4ee5\u901a\u8fc7 CLI \u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"--config FILE, -c FILE")," \u6216\u8005\u73af\u5883\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"$RKE2_CONFIG_FILE")," \u6765\u6539\u53d8\u3002"),(0,r.kt)("h3",{id:"\u591a\u4e2a\u914d\u7f6e\u6587\u4ef6"},"\u591a\u4e2a\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("admonition",{title:"\u7248\u672c",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/releases/tag/v1.21.2%2Brke2r1"},"v1.21.2+rke2r1")," \u8d77\u53ef\u7528")),(0,r.kt)("p",null,"\u652f\u6301\u591a\u4e2a\u914d\u7f6e\u6587\u4ef6\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u914d\u7f6e\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/config.yaml")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/config.yaml.d/*.yaml")," \u6309\u5b57\u6bcd\u987a\u5e8f\u52a0\u8f7d\u3002\u5c06\u4f7f\u7528\u7ed9\u5b9a\u952e\u7684\u6700\u540e\u4e00\u4e2a\u503c\u3002\u5207\u7247\u4f1a\u88ab\u66ff\u6362\u3002"),(0,r.kt)("p",null,"\u591a\u4e2a\u914d\u7f6e\u6587\u4ef6\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# config.yaml\ntoken: boop\nnode-label:\n  - foo=bar\n  - bar=baz\n\n\n# config.yaml.d/test1.yaml\nwrite-kubeconfig-mode: 600\n\n\n# config.yaml.d/test2.yaml\nwrite-kubeconfig-mode: 777\nnode-label:\n  - other=what\n  - foo=three\n\n")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u6700\u7ec8\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"write-kubeconfig-mode: 777\ntoken: boop\nnode-label:\n  - other=what\n  - foo=three\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e-linux-\u5b89\u88c5\u811a\u672c"},"\u914d\u7f6e Linux \u5b89\u88c5\u811a\u672c"),(0,r.kt)("p",null,"\u5982",(0,r.kt)("a",{parentName:"p",href:"/docs-rke2/zh/install/quickstart"},"\u5feb\u901f\u5165\u95e8\u6307\u5357"),"\u4e2d\u6240\u8ff0\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://get.rke2.io"},"https://get.rke2.io")," \u4e0a\u63d0\u4f9b\u7684\u5b89\u88c5\u811a\u672c\u5c06 RKE2 \u5b89\u88c5\u4e3a\u670d\u52a1\u3002"),(0,r.kt)("p",null,"\u6b64\u547d\u4ee4\u6700\u7b80\u5355\u7684\u5f62\u5f0f\u662f\u4ee5 root \u7528\u6237\u8eab\u4efd\u6216\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo")," \u8fd0\u884c\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# curl -sfL https://get.rke2.io | sudo sh -\ncurl -sfL https://get.rke2.io | sh -\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4e2d\u56fd\u7528\u6237\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u52a0\u901f\u5b89\u88c5\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"curl -sfL https://rancher-mirror.rancher.cn/rke2/install.sh | INSTALL_RKE2_MIRROR=cn sh -\n"))),(0,r.kt)("p",null,"\u4f7f\u7528\u8be5\u65b9\u6cd5\u5b89\u88c5 RKE2 \u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\u6765\u914d\u7f6e\u5b89\u88c5\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INSTALL_RKE2_VERSION")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ece GitHub \u4e0b\u8f7d\u7684 RKE2 \u7248\u672c\u3002\u5982\u679c\u672a\u6307\u5b9a\uff0c\u5c06\u5c1d\u8bd5\u4ece ",(0,r.kt)("inlineCode",{parentName:"td"},"stable")," channel \u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u3002\u5982\u679c\u5728\u57fa\u4e8e RPM \u7684\u7cfb\u7edf\u4e0a\u5b89\u88c5\u5e76\u4e14 ",(0,r.kt)("inlineCode",{parentName:"td"},"stable")," channel \u4e2d\u4e0d\u5b58\u5728\u6240\u9700\u7684\u7248\u672c\uff0c\u5219\u4e5f\u5e94\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},"INSTALL_RKE2_CHANNEL"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INSTALL_RKE2_TYPE")),(0,r.kt)("td",{parentName:"tr",align:null},'\u8981\u521b\u5efa\u7684 systemd \u670d\u52a1\u7c7b\u578b\uff0c\u53ef\u4ee5\u662f "server" \u6216 "agent"\uff0c\u9ed8\u8ba4\u503c\u662f "server"\u3002')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INSTALL_RKE2_CHANNEL_URL")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u83b7\u53d6 RKE2 \u4e0b\u8f7d URL \u7684 Channel URL\u3002\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"https://update.rke2.io/v1-release/channels"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INSTALL_RKE2_CHANNEL")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u83b7\u53d6 RKE2 \u4e0b\u8f7d URL \u7684 Channel\u3002\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"stable"),"\u3002\u53ef\u9009\u9879\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"stable"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"latest"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"testing"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INSTALL_RKE2_METHOD")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b89\u88c5\u65b9\u6cd5\u3002\u9ed8\u8ba4\u662f\u57fa\u4e8e RPM \u7684\u7cfb\u7edf ",(0,r.kt)("inlineCode",{parentName:"td"},"rpm"),"\uff0c\u6240\u6709\u5176\u4ed6\u7cfb\u7edf\u90fd\u662f ",(0,r.kt)("inlineCode",{parentName:"td"},"tar"),"\u3002")))),(0,r.kt)("p",null,"\u8fd9\u4e2a\u5b89\u88c5\u811a\u672c\u5f88\u7b80\u5355\uff0c\u4f1a\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6839\u636e\u4ee5\u4e0a\u53c2\u6570\u83b7\u53d6\u9700\u8981\u5b89\u88c5\u7684\u7248\u672c\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u53c2\u6570\uff0c\u5c06\u4f7f\u7528\u6700\u65b0\u7684\u5b98\u65b9\u7248\u672c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u786e\u5b9a\u5e76\u6267\u884c\u5b89\u88c5\u65b9\u6cd5\u3002\u6709\u4e24\u79cd\u65b9\u6cd5\uff1arpm \u548c tar\u3002\u5982\u679c\u8bbe\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"INSTALL_RKE2_METHOD")," \u53d8\u91cf\uff0c\u5c06\u9075\u5b88\u8be5\u53d8\u91cf\uff0c\u5426\u5219\uff0c\u5c06\u5728\u4f7f\u7528\u6b64\u5305\u7ba1\u7406\u7cfb\u7edf\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"rpm"),"\u3002\u5728\u5176\u4ed6\u7cfb\u7edf\u4e0a\u5c06\u4f7f\u7528 tar\u3002\u5982\u679c\u4f7f\u7528 tar\uff0c\u811a\u672c\u5c06\u7b80\u5355\u5730\u89e3\u538b\u7f29\u6240\u9700\u7248\u672c\u7684 tar \u5305\u3002\u5982\u679c\u4f7f\u7528 rpm\uff0c\u5c06\u8bbe\u7f6e\u4e00\u4e2a yum \u4ed3\u5e93\uff0c\u5e76\u4f7f\u7528 yum \u5b89\u88c5 rpm\u3002")),(0,r.kt)("h2",{id:"\u914d\u7f6e-windows-\u5b89\u88c5\u811a\u672c"},"\u914d\u7f6e Windows \u5b89\u88c5\u811a\u672c"),(0,r.kt)("admonition",{title:"\u7248\u672c",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4ece v1.21.3+rke2r1 \u5f00\u59cb\uff0cWindows \u652f\u6301\u5904\u4e8e\u8bd5\u9a8c\u9636\u6bb5\u3002")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Windows \u652f\u6301\u8981\u6c42\u9009\u62e9 Calico \u4f5c\u4e3a RKE2 \u96c6\u7fa4\u7684 CNI\u3002")),(0,r.kt)("p",null,"\u6b63\u5982",(0,r.kt)("a",{parentName:"p",href:"/docs-rke2/zh/install/quickstart"},"\u5feb\u901f\u5165\u95e8\u6307\u5357"),"\u4e2d\u6240\u8ff0\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4f4d\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/blob/master/install.ps1"},"https://github.com/rancher/rke2/blob/master/install.ps1")," \u7684\u5b89\u88c5\u811a\u672c\u5728 Windows Agent \u8282\u70b9\u4e0a\u5b89\u88c5 RKE2\u3002"),(0,r.kt)("p",null,"\u6b64\u547d\u4ee4\u7684\u6700\u7b80\u5355\u5f62\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-WebRequest -Uri https://raw.githubusercontent.com/rancher/rke2/master/install.ps1 -Outfile install.ps1\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u8be5\u65b9\u6cd5\u5b89\u88c5 Windows RKE2 agent \u65f6\uff0c\u4f60\u53ef\u4ee5\u4f20\u5165\u4ee5\u4e0b\u53c2\u6570\u914d\u7f6e\u5b89\u88c5\u811a\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'SYNTAX\n\ninstall.ps1 [[-Channel] <String>] [[-Method] <String>] [[-Type] <String>] [[-Version] <String>] [[-TarPrefix] <String>] [-Commit] [[-AgentImagesDir] <String>] [[-ArtifactPath] <String>] [[-ChannelUrl] <String>] [<CommonParameters>]\n\nOPTIONS\n\n-Channel           Channel to use for fetching RKE2 download URL (Default: "stable")\n-Method            The installation method to use. Currently tar or choco installation supported. (Default: "tar")\n-Type              Type of RKE2 service. Only the "agent" type is supported on Windows. (Default: "agent")\n-Version           Version of rke2 to download from Github\n-TarPrefix         Installation prefix when using the tar installation method. (Default: `C:/usr/local` unless `C:/usr/local` is read-only or has a dedicated mount point, in which case `C:/opt/rke2` is used instead)\n-Commit            (experimental/agent) Commit of RKE2 to download from temporary cloud storage. If set, this forces `--Method=tar`. Intended for development purposes only.\n-AgentImagesDir    Installation path for airgap images when installing from CI commit. (Default: `C:/var/lib/rancher/rke2/agent/images`)\n-ArtifactPath      If set, the install script will use the local path for sourcing the `rke2.windows-$SUFFIX` and `sha256sum-$ARCH.txt` files rather than the downloading the files from GitHub. Disabled by default.\n')),(0,r.kt)("h3",{id:"\u5176\u4ed6-windows-\u5b89\u88c5\u811a\u672c\u4f7f\u7528\u793a\u4f8b"},"\u5176\u4ed6 Windows \u5b89\u88c5\u811a\u672c\u4f7f\u7528\u793a\u4f8b"),(0,r.kt)("h4",{id:"\u5b89\u88c5\u6700\u65b0\u7248\u672c\u800c\u4e0d\u662f\u7a33\u5b9a\u7248"},"\u5b89\u88c5\u6700\u65b0\u7248\u672c\u800c\u4e0d\u662f\u7a33\u5b9a\u7248"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-WebRequest -Uri https://raw.githubusercontent.com/rancher/rke2/master/install.ps1 -Outfile install.ps1\n./install.ps1 -Channel Latest\n")),(0,r.kt)("h4",{id:"\u4f7f\u7528-tar-\u5b89\u88c5\u65b9\u6cd5\u5b89\u88c5\u6700\u65b0\u7248\u672c"},"\u4f7f\u7528 Tar \u5b89\u88c5\u65b9\u6cd5\u5b89\u88c5\u6700\u65b0\u7248\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-WebRequest -Uri https://raw.githubusercontent.com/rancher/rke2/master/install.ps1 -Outfile install.ps1\n./install.ps1 -Channel Latest -Method Tar\n")),(0,r.kt)("h2",{id:"\u76f4\u63a5\u8fd0\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6"},"\u76f4\u63a5\u8fd0\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6"),(0,r.kt)("p",null,"\u5982\u524d\u6240\u8ff0\uff0c\u5b89\u88c5\u811a\u672c\u4e3b\u8981\u4e0e\u5c06 RKE2 \u914d\u7f6e\u4e3a\u670d\u52a1\u8fd0\u884c\u6709\u5173\u3002\u5982\u679c\u4f60\u9009\u62e9\u4e0d\u4f7f\u7528\u8be5\u811a\u672c\uff0c\u53ea\u9700\u4ece\u6211\u4eec\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/k3s/releases/latest"},"releases \u9875\u9762"),"\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5c06\u6587\u4ef6\u653e\u5728\u4f60\u7684\u8def\u5f84\u4e0a\u5e76\u6267\u884c\u5373\u53ef\u8fd0\u884c RKE2\u3002\u91cd\u8981\u547d\u4ee4\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rke2 server")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd0\u884c RKE2 management server\uff0c\u5b83\u8fd8\u5c06\u542f\u52a8 Kubernetes control plane \u7ec4\u4ef6\uff0c\u4f8b\u5982 API Server\u3001controller-manager \u548c scheduler\u3002\u4ec5\u5728 Linux \u4e0a\u652f\u6301\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rke2 agent")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd0\u884c RKE2 Node Agent\u3002\u8fd9\u5c06\u4f7f RKE2 \u4f5c\u4e3a Worker \u8282\u70b9\u8fd0\u884c\uff0c\u540c\u65f6\u542f\u52a8 Kubernetes \u8282\u70b9\u670d\u52a1 ",(0,r.kt)("inlineCode",{parentName:"td"},"kubelet")," \u548c ",(0,r.kt)("inlineCode",{parentName:"td"},"kube-proxy"),"\u3002\u5728 Linux \u548c Windows \u4e0a\u652f\u6301\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rke2 --help")),(0,r.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u547d\u4ee4\u5217\u8868\u6216\u67d0\u4e2a\u547d\u4ee4\u7684\u5e2e\u52a9")))),(0,r.kt)("h2",{id:"\u66f4\u591a\u4fe1\u606f"},"\u66f4\u591a\u4fe1\u606f"),(0,r.kt)("p",null,"\u5173\u4e8e\u914d\u7f6e RKE2 Server \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/docs-rke2/zh/reference/server_config"},"Server \u914d\u7f6e\u53c2\u8003"),"\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e\u914d\u7f6e RKE2 Agent \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/docs-rke2/zh/reference/linux_agent_config"},"Agent \u914d\u7f6e\u53c2\u8003")),(0,r.kt)("p",null,"\u6709\u5173\u914d\u7f6e RKE2 Windows Agent \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/docs-rke2/zh/reference/windows_agent_config"},"Windows Agent \u914d\u7f6e\u53c2\u8003"),"\u3002"))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[2416],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(r),m=c,d=s["".concat(i,".").concat(m)]||s[m]||k[m]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:c,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9610:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(7462),c=(r(7294),r(3905));const a={title:"\u96c6\u7fa4\u8bbf\u95ee"},l=void 0,o={unversionedId:"cluster_access",id:"cluster_access",title:"\u96c6\u7fa4\u8bbf\u95ee",description:"/etc/rancher/rke2/rke2.yaml \u4e2d\u5b58\u50a8\u7684 kubeconfig \u6587\u4ef6\u7528\u4e8e\u914d\u7f6e\u5bf9 Kubernetes \u96c6\u7fa4\u7684\u8bbf\u95ee\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cluster_access.md",sourceDirName:".",slug:"/cluster_access",permalink:"/docs-rke2/zh/cluster_access",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/cluster_access.md",tags:[],version:"current",lastUpdatedAt:1696529735,formattedLastUpdatedAt:"2023\u5e7410\u67085\u65e5",frontMatter:{title:"\u96c6\u7fa4\u8bbf\u95ee"},sidebar:"mySidebar",previous:{title:"\u67b6\u6784",permalink:"/docs-rke2/zh/architecture"},next:{title:"Etcd \u5907\u4efd\u4e0e\u6062\u590d",permalink:"/docs-rke2/zh/backup_restore"}},i={},p=[{value:"\u4f7f\u7528 kubectl \u4ece\u5916\u90e8\u8bbf\u95ee\u96c6\u7fa4",id:"\u4f7f\u7528-kubectl-\u4ece\u5916\u90e8\u8bbf\u95ee\u96c6\u7fa4",level:3}],u={toc:p},s="wrapper";function k(e){let{components:t,...r}=e;return(0,c.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/rke2.yaml")," \u4e2d\u5b58\u50a8\u7684 kubeconfig \u6587\u4ef6\u7528\u4e8e\u914d\u7f6e\u5bf9 Kubernetes \u96c6\u7fa4\u7684\u8bbf\u95ee\u3002\n\u5982\u679c\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86\u4e0a\u6e38\u7684 Kubernetes \u547d\u4ee4\u884c\u5de5\u5177\uff08\u5982 kubectl \u6216 helm)\uff0c\u4f60\u9700\u8981\u7528\u6b63\u786e\u7684 kubeconfig \u8def\u5f84\u914d\u7f6e\u5b83\u4eec\u3002\n\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5bfc\u51fa ",(0,c.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," \u73af\u5883\u53d8\u91cf\u6216\u8c03\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"--kubeconfig")," \u547d\u4ee4\u884c\u6807\u5fd7\u6765\u5b8c\u6210\u3002\n\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b\u793a\u4f8b\u3002"),(0,c.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u67d0\u4e9b\u5de5\u5177\uff08\u4f8b\u5982 kubectl\uff09\u9ed8\u8ba4\u5b89\u88c5\u5728 ",(0,c.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/bin")," \u4e2d\u3002"),(0,c.kt)("p",null,"\u4f7f\u7528 KUBECONFIG \u73af\u5883\u53d8\u91cf\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"export KUBECONFIG=/etc/rancher/rke2/rke2.yaml\nkubectl get pods --all-namespaces\nhelm ls --all-namespaces\n")),(0,c.kt)("p",null,"\u6216\u8005\u5728\u547d\u4ee4\u4e2d\u6307\u5b9a kubeconfig \u6587\u4ef6\u7684\u4f4d\u7f6e\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml get pods --all-namespaces\nhelm --kubeconfig /etc/rancher/rke2/rke2.yaml ls --all-namespaces\n")),(0,c.kt)("h3",{id:"\u4f7f\u7528-kubectl-\u4ece\u5916\u90e8\u8bbf\u95ee\u96c6\u7fa4"},"\u4f7f\u7528 kubectl \u4ece\u5916\u90e8\u8bbf\u95ee\u96c6\u7fa4"),(0,c.kt)("p",null,"\u5c06 ",(0,c.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/rke2.yaml")," \u590d\u5236\u5230\u4f4d\u4e8e\u96c6\u7fa4\u5916\u90e8\u7684\u4e3b\u673a\u4e0a\u7684 ",(0,c.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),"\u3002\u7136\u540e\u5c06 ",(0,c.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," \u66ff\u6362\u4e3a RKE2 server \u7684 IP \u6216\u4e3b\u673a\u540d\u3002\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"kubectl")," \u6765\u7ba1\u7406 RKE2 \u96c6\u7fa4\u3002"))}k.isMDXComponent=!0}}]);
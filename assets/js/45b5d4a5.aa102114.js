"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[8141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Networking"},i=void 0,l={unversionedId:"networking",id:"networking",title:"Networking",description:"This page explains how CoreDNS and the Nginx-Ingress controller work within RKE2.",source:"@site/docs/networking.md",sourceDirName:".",slug:"/networking",permalink:"/networking",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/networking.md",tags:[],version:"current",lastUpdatedAt:1671564441,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"Networking"},sidebar:"mySidebar",previous:{title:"Etcd Backup and Restore",permalink:"/backup_restore"},next:{title:"Helm Integration",permalink:"/helm"}},s={},c=[{value:"CoreDNS",id:"coredns",level:2},{value:"NodeLocal DNSCache",id:"nodelocal-dnscache",level:3},{value:"Nginx Ingress Controller",id:"nginx-ingress-controller",level:2},{value:"Nodes Without a Hostname",id:"nodes-without-a-hostname",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page explains how CoreDNS and the Nginx-Ingress controller work within RKE2."),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/install/network_options"},"Installation Network Options")," page for details on Canal configuration options, or how to set up your own CNI."),(0,o.kt)("p",null,"For information on which ports need to be opened for RKE2, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/install/requirements"},"Installation Requirements"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#coredns"},"CoreDNS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#nginx-ingress-controller"},"Nginx Ingress Controller")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#nodes-without-a-hostname"},"Nodes Without a Hostname"))),(0,o.kt)("h2",{id:"coredns"},"CoreDNS"),(0,o.kt)("p",null,"CoreDNS is deployed by default when starting the server. To disable, run each server with ",(0,o.kt)("inlineCode",{parentName:"p"},"disable: rke2-coredns")," option in your configuration file."),(0,o.kt)("p",null,"If you don't install CoreDNS, you will need to install a cluster DNS provider yourself."),(0,o.kt)("p",null,"CoreDNS is deployed with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-incubator/cluster-proportional-autoscaler"},"autoscaler")," by default. To disable it or change its config, use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/helm/#customizing-packaged-components-with-helmchartconfig"},"HelmChartConfig")," resource."),(0,o.kt)("h3",{id:"nodelocal-dnscache"},"NodeLocal DNSCache"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/nodelocaldns/"},"NodeLocal DNSCache")," improves the performance by running a dns caching agent on each node. To activate this feature, apply the following HelmChartConfig:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-coredns\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    nodelocal:\n      enabled: true\n")),(0,o.kt)("p",null,"The helm controller will redeploy coredns with the new config. Please be aware that nodelocal modifies the iptables of the node to intercept DNS traffic. Therefore, activating and then deactivating this feature without redeploying, will cause the DNS service to stop working."),(0,o.kt)("p",null,"Note that NodeLocal DNSCache must be deployed in ipvs mode if kube-proxy is using that mode. To deploy it in this mode, apply the following HelmChartConfig:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-coredns\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    nodelocal:\n      enabled: true\n      ipvs: true\n")),(0,o.kt)("h2",{id:"nginx-ingress-controller"},"Nginx Ingress Controller"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/ingress-nginx"},"nginx-ingress")," is an Ingress controller powered by NGINX that uses a ConfigMap to store the NGINX configuration."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"nginx-ingress")," is deployed by default when starting the server. Ports 80 and 443 will be bound by the ingress controller in its default configuration, making these unusable for HostPort or NodePort services in the cluster."),(0,o.kt)("p",null,"Configuration options can be specified by creating a ",(0,o.kt)("a",{parentName:"p",href:"/helm#customizing-packaged-components-with-helmchartconfig"},"HelmChartConfig manifest")," to customize the ",(0,o.kt)("inlineCode",{parentName:"p"},"rke2-ingress-nginx")," HelmChart values. For example, a HelmChartConfig at ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/manifests/rke2-ingress-nginx-config.yaml")," with the following contents sets ",(0,o.kt)("inlineCode",{parentName:"p"},"use-forwarded-headers")," to ",(0,o.kt)("inlineCode",{parentName:"p"},'"true"')," in the ConfigMap storing the NGINX config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# /var/lib/rancher/rke2/server/manifests/rke2-ingress-nginx-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-ingress-nginx\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    controller:\n      config:\n        use-forwarded-headers: "true"\n')),(0,o.kt)("p",null,"For more information, refer to the official ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/ingress-nginx/tree/9c0a39636da11b7e262ddf0b4548c79ae9fa1667/charts/ingress-nginx#configuration"},"nginx-ingress Helm Configuration Parameters"),"."),(0,o.kt)("p",null,"To disable the NGINX ingress controller, start each server with the ",(0,o.kt)("inlineCode",{parentName:"p"},"disable: rke2-ingress-nginx")," option in your configuration file."),(0,o.kt)("h2",{id:"nodes-without-a-hostname"},"Nodes Without a Hostname"),(0,o.kt)("p",null,'Some cloud providers, such as Linode, will create machines with "localhost" as the hostname and others may not have a hostname set at all. This can cause problems with domain name resolution. You can run RKE2 with the ',(0,o.kt)("inlineCode",{parentName:"p"},"node-name")," parameter and this will pass the node name to resolve this issue."))}u.isMDXComponent=!0}}]);
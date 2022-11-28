"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[660],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),i=n(6010),r="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),i=n(7294),r=n(6010),o=n(2389),l=n(7392),s=n(7094),u=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,o=e.lazy,m=e.block,d=e.defaultValue,h=e.values,f=e.groupId,k=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==w&&!v.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),y=N.tabGroupChoices,C=N.setTabGroupChoices,I=(0,i.useState)(w),T=I[0],x=I[1],E=[],M=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var O=y[f];null!=O&&O!==T&&v.some((function(e){return e.value===O}))&&x(O)}var R=function(e){var t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==T&&(M(t),x(a),null!=f&&C(f,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,i=E.indexOf(e.currentTarget)+1;n=null!=(a=E[i])?a:E[0];break;case"ArrowLeft":var r,o=E.indexOf(e.currentTarget)-1;n=null!=(r=E[o])?r:E[E.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},k)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:R,onClick:R},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,i.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,o.Z)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}},9838:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(5488),l=n(5162),s=["components"],u={title:"Network Options"},c=void 0,p={unversionedId:"install/network_options",id:"install/network_options",title:"Network Options",description:"RKE2 requires a CNI plugin to connect pods and services. The Canal CNI plugin is the default and has been supported since the beginning. Starting with RKE2 v1.21, there are two extra supported CNI plugins: Calico and Cilium. All CNI",source:"@site/docs/install/network_options.md",sourceDirName:"install",slug:"/install/network_options",permalink:"/install/network_options",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/network_options.md",tags:[],version:"current",lastUpdatedAt:1669155923,formattedLastUpdatedAt:"11/22/2022",frontMatter:{title:"Network Options"},sidebar:"mySidebar",previous:{title:"Configuration Options",permalink:"/install/configuration"},next:{title:"High Availability",permalink:"/install/ha"}},m={},d=[{value:"Install a CNI plugin",id:"install-a-cni-plugin",level:2},{value:"Dual-stack configuration",id:"dual-stack-configuration",level:2},{value:"IPv6 setup",id:"ipv6-setup",level:2},{value:"Using Multus",id:"using-multus",level:2},{value:"Using Multus with Cilium",id:"using-multus-with-cilium",level:2},{value:"Using Multus with the containernetworking plugins",id:"using-multus-with-the-containernetworking-plugins",level:2},{value:"Using Multus with the Whereabouts CNI",id:"using-multus-with-the-whereabouts-cni",level:2},{value:"Using Multus with SR-IOV (experimental)",id:"using-multus-with-sr-iov-experimental",level:2}],h={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"RKE2 requires a CNI plugin to connect pods and services. The Canal CNI plugin is the default and has been supported since the beginning. Starting with RKE2 v1.21, there are two extra supported CNI plugins: Calico and Cilium. All CNI\nplugins get installed via a helm chart after the main components are up and running and can be customized by modifying the helm chart options."),(0,r.kt)("p",null,"This page focuses on the network options available when setting up RKE2:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#install-a-cni-plugin"},"Install a CNI plugin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dual-stack-configuration"},"Dual-stack configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#using-multus"},"Using Multus"))),(0,r.kt)("h2",{id:"install-a-cni-plugin"},"Install a CNI plugin"),(0,r.kt)("p",null,"The next tabs inform how to deploy each CNI plugin and override the default options:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Canal CNI plugin",default:!0,mdxType:"TabItem"},"Canal means using Flannel for inter-node traffic and Calico for intra-node traffic and network policies. By default, it will use vxlan encapsulation to create an overlay network among nodes. Canal is deployed by default in RKE2 and thus nothing must be configured to activate it. To override the default Canal options you should create a HelmChartConfig resource. The HelmChartConfig resource must match the name and namespace of its corresponding HelmChart. For example to override the flannel interface, you can apply the following config:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# /var/lib/rancher/rke2/server/manifests/rke2-canal-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-canal\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    flannel:\n      iface: "eth1"\n')),(0,r.kt)("p",null,"Starting with RKE2 v1.23 it is possible to use flannel's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flannel-io/flannel/blob/master/Documentation/backends.md#wireguard"},"wireguard backend")," for in-kernel WireGuard encapsulation and encryption (",(0,r.kt)("a",{parentName:"p",href:"https://www.wireguard.com/install/"},"Users of kernels < 5.6 need to install a module"),"). This can be achieved using the following config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# /var/lib/rancher/rke2/server/manifests/rke2-canal-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-canal\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    flannel:\n      backend: "wireguard"\n')),(0,r.kt)("p",null,"After that, please restart the canal daemonset to use the newer config by executing: ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl rollout restart ds rke2-canal -n kube-system"),"    "),(0,r.kt)("p",null,"For more information about the full options of the Canal config please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-charts/blob/main-source/packages/rke2-canal/charts/values.yaml"},"rke2-charts"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Canal requires the iptables or xtables-nft package to be installed on the node."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Canal is currently not supported on clusters with Windows nodes."))),(0,r.kt)("p",null,"Please check ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rke2.io/known_issues/"},"Known issues and Limitations")," if you experience IP allocation problems ")),(0,r.kt)(l.Z,{value:"Cilium CNI plugin",default:!0,mdxType:"TabItem"},"Starting with RKE2 v1.21, Cilium can be deployed as the CNI plugin. To do so, pass `cilium` as the value of the `--cni` flag. To override the default options, please use a HelmChartConfig resource. The HelmChartConfig resource must match the name and namespace of its corresponding HelmChart. For example, to enable eni:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# /var/lib/rancher/rke2/server/manifests/rke2-cilium-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-cilium\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    eni:\n      enabled: true\n")),(0,r.kt)("p",null,"For more information about values available in the Cilium chart, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-charts/blob/main/charts/rke2-cilium/rke2-cilium/1.12.301/values.yaml"},"rke2-charts repository")),(0,r.kt)("p",null,"Cilium includes advanced features to fully replace kube-proxy and implement the routing of services using eBPF instead of iptables. It is not recommended to replace kube-proxy by Cilium if your kernel is not v5.8 or newer, as important bug fixes and features will be missing. To activate this mode, deploy rke2 with the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable-kube-proxy")," and the following cilium configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# /var/lib/rancher/rke2/server/manifests/rke2-cilium-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-cilium\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    kubeProxyReplacement: strict\n    k8sServiceHost: <KUBE_API_SERVER_IP>\n    k8sServicePort: <KUBE_API_SERVER_PORT>\n    cni:\n      chainingMode: "none"\n')),(0,r.kt)("p",null,"For more information, please check the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cilium.io/en/v1.12/gettingstarted/kubeproxy-free/"},"upstream docs")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Cilium is currently not supported in the Windows installation of RKE2")))),(0,r.kt)(l.Z,{value:"Calico CNI plugin",default:!0,mdxType:"TabItem"},"Starting with RKE2 v1.21, Calico can be deployed as the CNI plugin. To do so, pass `calico` as the value of the `--cni` flag. To override the default options, please use a HelmChartConfig resource. The HelmChartConfig resource must match the name and namespace of its corresponding HelmChart. For example, to change the mtu:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# /var/lib/rancher/rke2/server/manifests/rke2-calico-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-calico\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    installation:\n      calicoNetwork:\n        mtu: 9000\n")),(0,r.kt)("p",null,"For more information about values available for the Calico chart, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-charts/blob/main/charts/rke2-calico/rke2-calico/v3.24.102/values.yaml"},"rke2-charts repository")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Calico requires the iptables or xtables-nft package  to be installed on the node."))))),(0,r.kt)("h2",{id:"dual-stack-configuration"},"Dual-stack configuration"),(0,r.kt)("p",null,"IPv4/IPv6 dual-stack networking enables the allocation of both IPv4 and IPv6 addresses to Pods and Services. It is supported in RKE2 since v1.21, stable since v1.23 but not activated by default. To activate it correctly, both RKE2 and the chosen CNI plugin must be configured accordingly. To configure RKE2 in dual-stack mode, in the control-plane nodes, you must set a valid IPv4/IPv6 dual-stack cidr for pods and services. Moreover, in both control-plane and worker nodes, you must set a dual-stack node-ip, which includes the IPv4 and IPv6 address of the node. To do so, use the flags ",(0,r.kt)("inlineCode",{parentName:"p"},"--cluster-cidr"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--service-cidr")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--node-ip")," for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--cluster-cidr 10.42.0.0/16,2001:cafe:42:0::/56\n--service-cidr 10.43.0.0/16,2001:cafe:42:1::/112\n--node-ip 10.0.10.40,2001:d091:a6f:4691:58c6:8609:a6d5:d1c3\n")),(0,r.kt)("p",null,"Each CNI plugin requires a different configuration for dual-stack:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Canal CNI plugin",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Canal automatically detects the RKE2 configuration for dual-stack and does not need any extra configuration. Dual-stack is currently not supported in the windows installations of RKE2.")),(0,r.kt)(l.Z,{value:"Cilium CNI plugin",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Cilium automatically detects the RKE2 configuration for dual-stack and does not need any extra configuration.")),(0,r.kt)(l.Z,{value:"Calico CNI plugin",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Calico automatically detects the RKE2 configuration for dual-stack and does not need any extra configuration. When deployed in dual-stack mode, it creates two different ippool resources. Note that when using dual-stack, calico leverages BGP instead of VXLAN encapsulation. Dual-stack and BGP are currently not supported in the windows installations of RKE2."))),(0,r.kt)("h2",{id:"ipv6-setup"},"IPv6 setup"),(0,r.kt)("p",null,"In case of IPv6 only configuration RKE2 needs to use ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," to access the liveness URL of the ETCD pod; check that your operating system configures ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," file correctly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"::1       localhost\n")),(0,r.kt)("h2",{id:"using-multus"},"Using Multus"),(0,r.kt)("p",null,"Starting with RKE2 v1.21 it is possible to deploy the Multus CNI meta-plugin. Note that this is for advanced users."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni"},"Multus CNI")," is a CNI plugin that enables attaching multiple network interfaces to pods. Multus does not replace CNI plugins, instead it acts as a CNI plugin multiplexer. Multus is useful in certain use cases, especially when pods are network intensive and require extra network interfaces that support dataplane acceleration techniques such as SR-IOV."),(0,r.kt)("p",null,"Multus can not be deployed standalone. It always requires at least one conventional CNI plugin that fulfills the Kubernetes cluster network requirements. That CNI plugin becomes the default for Multus, and will be used to provide the primary interface for all pods."),(0,r.kt)("p",null,"To enable Multus, pass ",(0,r.kt)("inlineCode",{parentName:"p"},"multus")," as the first value to the ",(0,r.kt)("inlineCode",{parentName:"p"},"--cni")," flag, followed by the name of the plugin you want to use alongside Multus (or ",(0,r.kt)("inlineCode",{parentName:"p"},"none")," if you will provide your own default plugin). Note that multus must always be in the\nfirst position of the list. For example, to use Multus with ",(0,r.kt)("inlineCode",{parentName:"p"},"canal")," as the default plugin you could specify ",(0,r.kt)("inlineCode",{parentName:"p"},"--cni=multus,canal")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--cni=multus --cni=canal"),"."),(0,r.kt)("p",null,"For more information about Multus, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni/tree/master/docs"},"multus-cni")," documentation."),(0,r.kt)("h2",{id:"using-multus-with-cilium"},"Using Multus with Cilium"),(0,r.kt)("p",null,"To use Cilium with Multus the ",(0,r.kt)("inlineCode",{parentName:"p"},"exclusive")," config needs to be disabled.\nYou can do this by using the following HelmChartConfig:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# /var/lib/rancher/rke2/server/manifests/rke2-cilium-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-cilium\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    cni:\n      exclusive: false\n")),(0,r.kt)("h2",{id:"using-multus-with-the-containernetworking-plugins"},"Using Multus with the containernetworking plugins"),(0,r.kt)("p",null,"Any CNI plugin can be used as secondary CNI plugin for Multus to provide additional network interfaces attached to a pod. However, it is most common to use the CNI plugins maintained by the containernetworking team (bridge, host-device,\nmacvlan, etc) as secondary CNI plugins for Multus. These containernetworking plugins are automatically deployed when installing Multus. For more information about these plugins, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current"},"containernetworking plugins")," documentation."),(0,r.kt)("p",null,"To use any of these plugins, a proper NetworkAttachmentDefinition object will need to be created to define the configuration of the secondary network. The definition is then referenced by pod annotations, which Multus will use to provide extra interfaces to that pod. An example using the macvlan cni plugin with Mu is available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni/blob/master/docs/quickstart.md#storing-a-configuration-as-a-custom-resource"},"in the multus-cni repo"),"."),(0,r.kt)("h2",{id:"using-multus-with-the-whereabouts-cni"},"Using Multus with the Whereabouts CNI"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/whereabouts"},"Whereabouts")," is an IP Address Management (IPAM) CNI plugin that assigns IP addresses cluster-wide.\nStarting with RKE2 1.22, RKE2 includes the option to use Whereabouts with Multus to manage the IP addresses of the additional interfaces created through Multus.\nIn order to do this, you need to use ",(0,r.kt)("a",{parentName:"p",href:"/helm#customizing-packaged-components-with-helmchartconfig"},"HelmChartConfig")," to configure the Multus CNI to use Whereabouts."),(0,r.kt)("p",null,"You can do this by using the following HelmChartConfig:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# /var/lib/rancher/rke2/server/manifests/rke2-multus-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-multus\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    rke2-whereabouts:\n      enabled: true\n")),(0,r.kt)("p",null,"This will configure the chart for Multus to use ",(0,r.kt)("inlineCode",{parentName:"p"},"rke2-whereabouts")," as a dependency."),(0,r.kt)("p",null,"If you want to customize the Whereabouts image, this is possible like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# /var/lib/rancher/rke2/server/manifests/rke2-multus-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-multus\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    rke2-whereabouts:\n      enabled: true\n      image:\n        repository: ghcr.io/k8snetworkplumbingwg/whereabouts\n        tag: latest-amd64\n")),(0,r.kt)("p",null,"NOTE: You should write this file before starting rke2."),(0,r.kt)("h2",{id:"using-multus-with-sr-iov-experimental"},"Using Multus with SR-IOV (experimental)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please note this is an experimental feature introduced with v1.21.2+rke2r1.")),(0,r.kt)("p",null,"Using the SR-IOV CNI with Multus can help with data-plane acceleration use cases, providing an extra interface in the pod that can achieve very high throughput. SR-IOV will not work in all environments, and there are several requirements\nthat must be fulfilled to consider the node as SR-IOV capable:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Physical NIC must support SR-IOV (e.g. by checking /sys/class/net/$NIC/device/sriov_totalvfs)"),(0,r.kt)("li",{parentName:"ul"},"The host operating system must activate IOMMU virtualization"),(0,r.kt)("li",{parentName:"ul"},"The host operating system includes drivers capable of doing sriov (e.g. i40e, vfio-pci, etc)")),(0,r.kt)("p",null,"The SR-IOV CNI plugin cannot be used as the default CNI plugin for Multus; it must be deployed alongside both Multus and a traditional CNI plugin. The SR-IOV CNI helm chart can be found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-charts")," Helm repo. For more information see ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.x/en/helm-charts/"},"Rancher Helm Charts documentation"),"."),(0,r.kt)("p",null,"After installing the SR-IOV CNI chart, the SR-IOV operator will be deployed. Then, the user must specify what nodes in the cluster are SR-IOV capable by labeling them with ",(0,r.kt)("inlineCode",{parentName:"p"},"feature.node.kubernetes.io/network-sriov.capable=true"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl label node $NODE-NAME feature.node.kubernetes.io/network-sriov.capable=true\n")),(0,r.kt)("p",null,"Once labeled, the sriov-network-config Daemonset will deploy a pod to the node to collect information about the network interfaces. That information is available through the ",(0,r.kt)("inlineCode",{parentName:"p"},"sriovnetworknodestates")," Custom Resource Definition. A couple of\nminutes after the deployment, there will be one ",(0,r.kt)("inlineCode",{parentName:"p"},"sriovnetworknodestates")," resource per node, with the name of the node as the resource name."),(0,r.kt)("p",null,"For more information about how to use the SR-IOV operator, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/sriov-network-operator/blob/master/doc/quickstart.md#configuration"},"sriov-network-operator")))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[4849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||k[m]||l;return n?r.createElement(d,p(p({ref:t},c),{},{components:n})):r.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<l;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u5b89\u88c5\u65b9\u6cd5"},p=void 0,i={unversionedId:"install/methods",id:"install/methods",title:"\u5b89\u88c5\u65b9\u6cd5",description:"\u91cd\u8981\uff1a\u5982\u679c\u4f60\u7684\u8282\u70b9\u5b89\u88c5\u5e76\u542f\u7528\u4e86 NetworkManager\uff0c\u8bf7\u786e\u4fdd\u5c06\u5176\u914d\u7f6e\u4e3a\u5ffd\u7565 CNI \u7ba1\u7406\u7684\u63a5\u53e3\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install/methods.md",sourceDirName:"install",slug:"/install/methods",permalink:"/docs-rke2/zh/install/methods",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/methods.md",tags:[],version:"current",lastUpdatedAt:1696529735,formattedLastUpdatedAt:"2023\u5e7410\u67085\u65e5",frontMatter:{title:"\u5b89\u88c5\u65b9\u6cd5"},sidebar:"mySidebar",previous:{title:"\u9ad8\u53ef\u7528",permalink:"/docs-rke2/zh/install/ha"},next:{title:"Containerd \u955c\u50cf\u4ed3\u5e93\u914d\u7f6e",permalink:"/docs-rke2/zh/install/containerd_registry_configuration"}},o={},s=[{value:"Tarball",id:"tarball",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:4},{value:"RPM",id:"rpm",level:3},{value:"\u4ed3\u5e93",id:"\u4ed3\u5e93",level:4},{value:"Enterprise Linux 7",id:"enterprise-linux-7",level:4},{value:"Enterprise Linux 8",id:"enterprise-linux-8",level:4},{value:"\u5b89\u88c5",id:"\u5b89\u88c5-1",level:4},{value:"\u624b\u52a8",id:"\u624b\u52a8",level:3}],c={toc:s},u="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u91cd\u8981"),"\uff1a\u5982\u679c\u4f60\u7684\u8282\u70b9\u5b89\u88c5\u5e76\u542f\u7528\u4e86 NetworkManager\uff0c\u8bf7",(0,a.kt)("a",{parentName:"p",href:"/docs-rke2/zh/known_issues#networkmanager"},"\u786e\u4fdd\u5c06\u5176\u914d\u7f6e\u4e3a\u5ffd\u7565 CNI \u7ba1\u7406\u7684\u63a5\u53e3"),"\u3002"),(0,a.kt)("p",null,"RKE2 \u53ef\u4ee5\u901a\u8fc7\u591a\u79cd\u65b9\u5f0f\u5b89\u88c5\u5230\u7cfb\u7edf\u4e2d\uff0c\u5176\u4e2d\u4e24\u79cd\u662f\u9996\u9009\u548c\u53d7\u652f\u6301\u7684\u65b9\u6cd5\u3002\u8fd9\u4e24\u79cd\u65b9\u6cd5\u5206\u522b\u662f tarball \u548c RPM\u3002\u5feb\u901f\u5165\u95e8\u4e2d\u63d0\u5230\u7684\u5b89\u88c5\u811a\u672c\u662f\u5bf9\u8fd9\u4e24\u79cd\u65b9\u6cd5\u7684\u4e00\u79cd\u5c01\u88c5\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u4ef6\u66f4\u8be6\u7ec6\u5730\u89e3\u91ca\u4e86\u8fd9\u4e9b\u5b89\u88c5\u65b9\u6cd5\u3002"),(0,a.kt)("h3",{id:"tarball"},"Tarball"),(0,a.kt)("p",null,"\u8981\u5b89\u88c5 RKE2\uff0c\u4f60\u9996\u5148\u9700\u8981\u83b7\u5f97\u5b89\u88c5\u811a\u672c\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u591a\u79cd\u65b9\u5f0f\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u4f60\u53ef\u4ee5\u83b7\u5f97\u811a\u672c\u5e76\u7acb\u5373\u5f00\u59cb\u5b89\u88c5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# curl -sfL https://get.rke2.io | sudo sh -\ncurl -sfL https://get.rke2.io | sh -\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4e2d\u56fd\u7528\u6237\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u52a0\u901f\u5b89\u88c5\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"curl -sfL https://rancher-mirror.rancher.cn/rke2/install.sh | INSTALL_RKE2_MIRROR=cn sh -\n"))),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4e0b\u8f7d\u5b89\u88c5\u811a\u672c\u5e76\u6dfb\u52a0\u53ef\u6267\u884c\u6743\u9650\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.rke2.io --output install.sh\nchmod +x install.sh\n")),(0,a.kt)("h4",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u5b89\u88c5\u6700\u65b0\u7684 RKE2 \u7248\u672c\uff0c\u4e0d\u9700\u8981\u5176\u4ed6\u9650\u5b9a\u7b26\u3002\u4f46\u662f\uff0c\u5982\u679c\u4f60\u60f3\u6307\u5b9a\u4e00\u4e2a\u7248\u672c\uff0c\u4f60\u9700\u8981\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"INSTALL_RKE2_CHANNEL")," \u73af\u5883\u53d8\u91cf\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"INSTALL_RKE2_CHANNEL=latest ./install.sh\n")),(0,a.kt)("p",null,"\u5b89\u88c5\u811a\u672c\u88ab\u6267\u884c\u65f6\uff0c\u5b83\u4f1a\u5224\u65ad\u7cfb\u7edf\u7684\u7c7b\u578b\u3002\u5982\u679c\u4f7f\u7528\u662f RPM \u7684\u64cd\u4f5c\u7cfb\u7edf\uff08\u6bd4\u5982 CentOS \u6216 RHEL\uff09\uff0c\u5b83\u5c06\u6267\u884c\u57fa\u4e8e RPM \u7684\u5b89\u88c5\uff0c\u5426\u5219\u811a\u672c\u4f1a\u9ed8\u8ba4\u4e3a tarball\u3002\u4e0b\u9762\u4ecb\u7ecd\u4e86\u57fa\u4e8e RPM \u7684\u5b89\u88c5\u3002"),(0,a.kt)("p",null,"\u4e0b\u6765\uff0c\u5b89\u88c5\u811a\u672c\u4e0b\u8f7d tarball\uff0c\u901a\u8fc7\u6bd4\u8f83 SHA256 \u54c8\u5e0c\u503c\u8fdb\u884c\u9a8c\u8bc1\uff0c\u6700\u540e\u5c06\u5185\u5bb9\u63d0\u53d6\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local"),"\u3002\u5982\u679c\u9700\u8981\uff0c\u64cd\u4f5c\u8005\u53ef\u4ee5\u5728\u5b89\u88c5\u540e\u81ea\u7531\u79fb\u52a8\u6587\u4ef6\u3002\u8fd9\u4e2a\u64cd\u4f5c\u53ea\u662f\u63d0\u53d6 tarball\uff0c\u5e76\u6ca1\u6709\u505a\u5176\u4ed6\u7cfb\u7edf\u7684\u4fee\u6539\u3002"),(0,a.kt)("p",null,"Tarball \u7ed3\u6784/\u5185\u5bb9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"bin - \u5305\u542b RKE2 \u53ef\u6267\u884c\u6587\u4ef6\u4ee5\u53ca ",(0,a.kt)("inlineCode",{parentName:"li"},"rke2-killall.sh")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"rke2-uninstall.sh")," \u811a\u672c"),(0,a.kt)("li",{parentName:"ul"},"lib - \u5305\u542b server \u548c agent systemd \u5355\u5143\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"share - \u5305\u542b RKE2 \u8bb8\u53ef\u8bc1\u4ee5\u53ca RKE2 \u5728 CIS \u6a21\u5f0f\u4e0b\u8fd0\u884c\u65f6\u4f7f\u7528\u7684 sysctl \u914d\u7f6e\u6587\u4ef6")),(0,a.kt)("p",null,"\u8981\u8fdb\u4e00\u6b65\u914d\u7f6e\u7cfb\u7edf\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/docs-rke2/zh/reference/server_config"},"server")," \u6216 ",(0,a.kt)("a",{parentName:"p",href:"/docs-rke2/zh/reference/linux_agent_config"},"agent")," \u6587\u6863\u3002"),(0,a.kt)("h3",{id:"rpm"},"RPM"),(0,a.kt)("p",null,"\u8981\u542f\u52a8 RPM \u7684\u5b89\u88c5\u8fc7\u7a0b\uff0c\u4f60\u9700\u8981\u83b7\u5f97\u4e0a\u9762\u63d0\u5230\u7684\u5b89\u88c5\u811a\u672c\u3002\u8be5\u811a\u672c\u5c06\u68c0\u67e5\u4f60\u7684\u7cfb\u7edf\u662f\u5426\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"rpm"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"yum")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"dnf"),"\uff0c\u5982\u679c\u5b58\u5728\u4efb\u4f55\u4e00\u4e2a\uff0c\u5b83\u4f1a\u786e\u5b9a\u7cfb\u7edf\u662f\u57fa\u4e8e Redhat \u7684\uff0c\u5e76\u4e14\u542f\u52a8 RPM \u5b89\u88c5\u8fc7\u7a0b\u3002"),(0,a.kt)("p",null,"\u5b89\u88c5\u6587\u4ef6\u65f6\u4f7f\u7528\u524d\u7f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr")," \u800c\u4e0d\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local"),"\u3002"),(0,a.kt)("h4",{id:"\u4ed3\u5e93"},"\u4ed3\u5e93"),(0,a.kt)("p",null,"RKE2 \u7684\u7b7e\u540d RPM \u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"rpm-testing.rancher.io")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"rpm.rancher.io")," RPM \u4ed3\u5e93\u4e2d\u53d1\u5e03\u3002\u5982\u679c\u4f60\u5728\u652f\u6301 RPM \u7684\u8282\u70b9\u4e0a\u8fd0\u884c ",(0,a.kt)("a",{parentName:"p",href:"https://get.rke2.io"},"https://get.rke2.io")," \u811a\u672c\uff0c\u5b83\u5c06\u9ed8\u8ba4\u4f7f\u7528\u8fd9\u4e9b RPM \u4ed3\u5e93\u3002\u4f60\u4e5f\u53ef\u4ee5\u81ea\u884c\u5b89\u88c5\u5b83\u4eec\u3002"),(0,a.kt)("p",null,"RPM \u63d0\u4f9b ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," \u5355\u5143\u6765\u7ba1\u7406 ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2"),"\uff0c\u4f46\u9700\u8981\u5728\u9996\u6b21\u542f\u52a8\u670d\u52a1\u4e4b\u524d\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u914d\u7f6e\u3002"),(0,a.kt)("h4",{id:"enterprise-linux-7"},"Enterprise Linux 7"),(0,a.kt)("p",null,"\u8981\u4f7f\u7528 RPM \u4ed3\u5e93\uff0c\u5728 CentOS 7 \u6216 RHEL 7 \u7cfb\u7edf\u4e0a\u8fd0\u884c\u4ee5\u4e0b bash \u4ee3\u7801\u7247\u6bb5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF > /etc/yum.repos.d/rancher-rke2-1-18-latest.repo\n[rancher-rke2-common-latest]\nname=Rancher RKE2 Common Latest\nbaseurl=https://rpm.rancher.io/rke2/latest/common/centos/7/noarch\nenabled=1\ngpgcheck=1\ngpgkey=https://rpm.rancher.io/public.key\n\n[rancher-rke2-1-18-latest]\nname=Rancher RKE2 1.18 Latest\nbaseurl=https://rpm.rancher.io/rke2/latest/1.18/centos/7/x86_64\nenabled=1\ngpgcheck=1\ngpgkey=https://rpm.rancher.io/public.key\nEOF\n")),(0,a.kt)("h4",{id:"enterprise-linux-8"},"Enterprise Linux 8"),(0,a.kt)("p",null,"\u8981\u4f7f\u7528 RPM \u4ed3\u5e93\uff0c\u5728 CentOS 8 \u6216 RHEL 8 \u7cfb\u7edf\u4e0a\u8fd0\u884c\u4ee5\u4e0b bash \u4ee3\u7801\u7247\u6bb5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF > /etc/yum.repos.d/rancher-rke2-1-18-latest.repo\n[rancher-rke2-common-latest]\nname=Rancher RKE2 Common Latest\nbaseurl=https://rpm.rancher.io/rke2/latest/common/centos/8/noarch\nenabled=1\ngpgcheck=1\ngpgkey=https://rpm.rancher.io/public.key\n\n[rancher-rke2-1-18-latest]\nname=Rancher RKE2 1.18 Latest\nbaseurl=https://rpm.rancher.io/rke2/latest/1.18/centos/8/x86_64\nenabled=1\ngpgcheck=1\ngpgkey=https://rpm.rancher.io/public.key\nEOF\n")),(0,a.kt)("h4",{id:"\u5b89\u88c5-1"},"\u5b89\u88c5"),(0,a.kt)("p",null,"\u914d\u7f6e\u4ed3\u5e93\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u4efb\u4e00\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yum -y install rke2-server\n")),(0,a.kt)("p",null,"\u6216\u8005"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yum -y install rke2-agent\n")),(0,a.kt)("p",null,"RPM \u5c06\u5b89\u88c5\u76f8\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-server.service")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-agent.service")," systemd \u5355\u5143\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl start rke2-server")," \u8fdb\u884c\u8c03\u7528\u3002\u8bf7\u786e\u4fdd\u5728\u542f\u52a8\u4e4b\u524d\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2"),"\uff0c\u53ef\u4ee5\u6309\u7167\u4e0b\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u914d\u7f6e\u6587\u4ef6"),"\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,a.kt)("h3",{id:"\u624b\u52a8"},"\u624b\u52a8"),(0,a.kt)("p",null,"RKE2 \u4e8c\u8fdb\u5236\u6587\u4ef6\u662f\u9759\u6001\u7f16\u8bd1\u548c\u94fe\u63a5\u7684\uff0c\u8fd9\u4f7f\u5f97 RKE2 \u4e8c\u8fdb\u5236\u6587\u4ef6\u53ef\u4ee5\u8de8 Linux \u53d1\u884c\u7248\u79fb\u690d\uff0c\u800c\u65e0\u9700\u62c5\u5fc3\u4f9d\u8d56\u6027\u95ee\u9898\u3002\u6700\u7b80\u5355\u7684\u5b89\u88c5\u65b9\u6cd5\u662f\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u786e\u4fdd\u6587\u4ef6\u53ef\u6267\u884c\uff0c\u7136\u540e\u5c06\u5176\u590d\u5236\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"${PATH}"),"\uff0c\u901a\u5e38\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),"\u3002\u7b2c\u4e00\u6b21\u6267\u884c\u540e\uff0cRKE2 \u5c06\u521b\u5efa\u6240\u6709\u5fc5\u8981\u7684\u76ee\u5f55\u548c\u6587\u4ef6\u3002\u8981\u8fdb\u4e00\u6b65\u914d\u7f6e\u7cfb\u7edf\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/docs-rke2/zh/install/configuration"},"\u914d\u7f6e\u6587\u4ef6"),"\u6587\u6863\u3002"))}k.isMDXComponent=!0}}]);
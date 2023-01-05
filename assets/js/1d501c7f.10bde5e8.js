"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[5329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,h=d["".concat(s,".").concat(k)]||d[k]||c[k]||l;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={title:"Quick Start"},i=void 0,o={unversionedId:"install/quickstart",id:"install/quickstart",title:"Quick Start",description:"This guide will help you quickly launch a cluster with default options.",source:"@site/docs/install/quickstart.md",sourceDirName:"install",slug:"/install/quickstart",permalink:"/docs-rke2/install/quickstart",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/quickstart.md",tags:[],version:"current",lastUpdatedAt:1672962031,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{title:"Quick Start"},sidebar:"mySidebar",previous:{title:"Introduction",permalink:"/docs-rke2/"},next:{title:"Requirements",permalink:"/docs-rke2/install/requirements"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Server Node Installation",id:"server-node-installation",level:3},{value:"1. Run the installer",id:"1-run-the-installer",level:4},{value:"2. Enable the rke2-server service",id:"2-enable-the-rke2-server-service",level:4},{value:"3. Start the service",id:"3-start-the-service",level:4},{value:"4. Follow the logs, if you like",id:"4-follow-the-logs-if-you-like",level:4},{value:"Linux Agent (Worker) Node Installation",id:"linux-agent-worker-node-installation",level:3},{value:"1. Run the installer",id:"1-run-the-installer-1",level:4},{value:"2. Enable the rke2-agent service",id:"2-enable-the-rke2-agent-service",level:4},{value:"3. Configure the rke2-agent service",id:"3-configure-the-rke2-agent-service",level:4},{value:"4. Start the service",id:"4-start-the-service",level:4},{value:"Windows Agent (Worker) Node Installation",id:"windows-agent-worker-node-installation",level:3},{value:"0. Prepare the Windows Agent Node",id:"0-prepare-the-windows-agent-node",level:4},{value:"1. Download the Install Script",id:"1-download-the-install-script",level:4},{value:"2. Configure the rke2-agent for Windows",id:"2-configure-the-rke2-agent-for-windows",level:4},{value:"3. Configure PATH",id:"3-configure-path",level:4},{value:"4. Run the Installer",id:"4-run-the-installer",level:4},{value:"5. Start the Windows RKE2 Service",id:"5-start-the-windows-rke2-service",level:4}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide will help you quickly launch a cluster with default options."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"New to Kubernetes? The official Kubernetes docs already have some great tutorials outlining the basics ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"here"),".")),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Make sure your environment fulfills the ",(0,a.kt)("a",{parentName:"p",href:"/docs-rke2/install/requirements"},"requirements."),"\nIf NetworkManager is installed and enabled on your hosts, ",(0,a.kt)("a",{parentName:"p",href:"/docs-rke2/known_issues#networkmanager"},"ensure that it is configured to ignore CNI-managed interfaces."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For RKE2 versions 1.21 and higher, if the host kernel supports ",(0,a.kt)("a",{parentName:"p",href:"https://apparmor.net/"},"AppArmor"),", the AppArmor tools (usually available via the ",(0,a.kt)("inlineCode",{parentName:"p"},"apparmor-parser")," package) must also be present prior to installing RKE2.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The RKE2 installation process must be run as the root user or through ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo"),"."))),(0,a.kt)("h3",{id:"server-node-installation"},"Server Node Installation"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"RKE2 provides an installation script that is a convenient way to install it as a service on systemd based systems. This script is available at ",(0,a.kt)("a",{parentName:"p",href:"https://get.rke2.io."},"https://get.rke2.io.")," To install RKE2 using this method do the following:"),(0,a.kt)("h4",{id:"1-run-the-installer"},"1. Run the installer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.rke2.io | sh -\n")),(0,a.kt)("p",null,"This will install the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-server")," service and the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2")," binary onto your machine. Due to its nature, It will fail unless it runs as the root user or through ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo"),"."),(0,a.kt)("h4",{id:"2-enable-the-rke2-server-service"},"2. Enable the rke2-server service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable rke2-server.service\n")),(0,a.kt)("h4",{id:"3-start-the-service"},"3. Start the service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl start rke2-server.service\n")),(0,a.kt)("h4",{id:"4-follow-the-logs-if-you-like"},"4. Follow the logs, if you like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"journalctl -u rke2-server -f\n")),(0,a.kt)("p",null,"After running this installation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"rke2-server")," service will be installed. The ",(0,a.kt)("inlineCode",{parentName:"li"},"rke2-server")," service will be configured to automatically restart after node reboots or if the process crashes or is killed."),(0,a.kt)("li",{parentName:"ul"},"Additional utilities will be installed at ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/rke2/bin/"),". They include: ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"crictl"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"ctr"),". Note that these are not on your path by default."),(0,a.kt)("li",{parentName:"ul"},"Two cleanup scripts will be installed to the path at ",(0,a.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/rke2"),". They are: ",(0,a.kt)("inlineCode",{parentName:"li"},"rke2-killall.sh")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"rke2-uninstall.sh"),"."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"kubeconfig")," file will be written to ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/rancher/rke2/rke2.yaml"),"."),(0,a.kt)("li",{parentName:"ul"},"A token that can be used to register other server or agent nodes will be created at ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/rke2/server/node-token"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If you are adding additional server nodes, you must have an odd number in total. An odd number is needed to maintain quorum. See the ",(0,a.kt)("a",{parentName:"p",href:"/docs-rke2/install/ha"},"High Availability documentation")," for more details."),(0,a.kt)("h3",{id:"linux-agent-worker-node-installation"},"Linux Agent (Worker) Node Installation"),(0,a.kt)("p",null,"The steps on this section requires root level access or ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo")," to work."),(0,a.kt)("h4",{id:"1-run-the-installer-1"},"1. Run the installer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'curl -sfL https://get.rke2.io | INSTALL_RKE2_TYPE="agent" sh -\n')),(0,a.kt)("p",null,"This will install the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-agent")," service and the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2")," binary onto your machine. Due to its nature, It will fail unless it runs as the root user or through ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo"),"."),(0,a.kt)("h4",{id:"2-enable-the-rke2-agent-service"},"2. Enable the rke2-agent service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable rke2-agent.service\n")),(0,a.kt)("h4",{id:"3-configure-the-rke2-agent-service"},"3. Configure the rke2-agent service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p /etc/rancher/rke2/\nvim /etc/rancher/rke2/config.yaml\n")),(0,a.kt)("p",null,"Content for config.yaml:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"server: https://<server>:9345\ntoken: <token from server node>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," The ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 server")," process listens on port ",(0,a.kt)("inlineCode",{parentName:"p"},"9345")," for new nodes to register. The Kubernetes API is still served on port ",(0,a.kt)("inlineCode",{parentName:"p"},"6443"),", as normal."),(0,a.kt)("h4",{id:"4-start-the-service"},"4. Start the service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl start rke2-agent.service\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Follow the logs, if you like")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"journalctl -u rke2-agent -f\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Each machine must have a unique hostname. If your machines do not have unique hostnames, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"node-name")," parameter in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," file and provide a value with a valid and unique hostname for each node."),(0,a.kt)("p",null,"To read more about the config.yaml file, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs-rke2/install/configuration#configuration-file"},"Install Options documentation.")),(0,a.kt)("h3",{id:"windows-agent-worker-node-installation"},"Windows Agent (Worker) Node Installation"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Windows Support is currently Experimental as of v1.21.3+rke2r1"),"\n",(0,a.kt)("strong",{parentName:"p"},"Windows Support requires choosing Calico as the CNI for the RKE2 cluster")),(0,a.kt)("h4",{id:"0-prepare-the-windows-agent-node"},"0. Prepare the Windows Agent Node"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note")," The Windows Server Containers feature needs to be enabled for the RKE2 agent to work."),(0,a.kt)("p",null,"Open a new Powershell window with Administrator privileges"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'powershell -Command "Start-Process PowerShell -Verb RunAs"\n')),(0,a.kt)("p",null,"In the new Powershell window, run the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Enable-WindowsOptionalFeature -Online -FeatureName containers \u2013All\n")),(0,a.kt)("p",null,"This will require a reboot for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Containers")," feature to properly function."),(0,a.kt)("h4",{id:"1-download-the-install-script"},"1. Download the Install Script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-WebRequest -Uri https://raw.githubusercontent.com/rancher/rke2/master/install.ps1 -Outfile install.ps1\n")),(0,a.kt)("p",null,"This script will download the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2.exe")," Windows binary onto your machine."),(0,a.kt)("h4",{id:"2-configure-the-rke2-agent-for-windows"},"2. Configure the rke2-agent for Windows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'New-Item -Type Directory c:/etc/rancher/rke2 -Force\nSet-Content -Path c:/etc/rancher/rke2/config.yaml -Value @"\nserver: https://<server>:9345\ntoken: <token from server node>\n"@\n')),(0,a.kt)("p",null,"To read more about the config.yaml file, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs-rke2/install/configuration#configuration-file"},"Install Options documentation.")),(0,a.kt)("h4",{id:"3-configure-path"},"3. Configure PATH"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PATH+=";c:\\var\\lib\\rancher\\rke2\\bin;c:\\usr\\local\\bin"\n\n[Environment]::SetEnvironmentVariable(\n    "Path",\n    [Environment]::GetEnvironmentVariable("Path", [EnvironmentVariableTarget]::Machine) + ";c:\\var\\lib\\rancher\\rke2\\bin;c:\\usr\\local\\bin",\n    [EnvironmentVariableTarget]::Machine)\n')),(0,a.kt)("h4",{id:"4-run-the-installer"},"4. Run the Installer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"./install.ps1\n")),(0,a.kt)("h4",{id:"5-start-the-windows-rke2-service"},"5. Start the Windows RKE2 Service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"rke2.exe agent service --add\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Each machine must have a unique hostname. "),(0,a.kt)("p",null,"If you would prefer to use CLI parameters only instead, run the binary with the desired parameters. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"rke2.exe agent --token <> --server <>\n")))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[9878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=u(n),c=i,h=g["".concat(s,".").concat(c)]||g[c]||d[c]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={title:"Configuration Options"},l=void 0,o={unversionedId:"install/configuration",id:"install/configuration",title:"Configuration Options",description:"This page focuses on the configuration options available when setting up RKE2:",source:"@site/docs/install/configuration.md",sourceDirName:"install",slug:"/install/configuration",permalink:"/install/configuration",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/configuration.md",tags:[],version:"current",lastUpdatedAt:1671564441,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"Configuration Options"},sidebar:"mySidebar",previous:{title:"Requirements",permalink:"/install/requirements"},next:{title:"Network Options",permalink:"/install/network_options"}},s={},u=[{value:"Configuring the Linux Installation Script",id:"configuring-the-linux-installation-script",level:3},{value:"Configuring the Windows Installation Script",id:"configuring-the-windows-installation-script",level:3},{value:"Other Windows Installation Script Usage Examples",id:"other-windows-installation-script-usage-examples",level:3},{value:"Install the Latest Version Instead of Stable",id:"install-the-latest-version-instead-of-stable",level:4},{value:"Install the Latest Version using Tar Installation Method",id:"install-the-latest-version-using-tar-installation-method",level:4},{value:"Configuring RKE2 Server Nodes",id:"configuring-rke2-server-nodes",level:3},{value:"Configuring Linux RKE2 Agent Nodes",id:"configuring-linux-rke2-agent-nodes",level:3},{value:"Configuring Windows RKE2 Agent Nodes",id:"configuring-windows-rke2-agent-nodes",level:3},{value:"Configuration File",id:"configuration-file",level:3},{value:"Configuring when Running the Binary Directly",id:"configuring-when-running-the-binary-directly",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page focuses on the configuration options available when setting up RKE2:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuring-the-linux-installation-script"},"Configuring the Linux installation script")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuring-the-windows-installation-script"},"Configuring the Windows installation script")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuring-rke2-server-nodes"},"Configuring RKE2 server nodes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuring-linux-rke2-agent-nodes"},"Configuring Linux RKE2 agent nodes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuring-windows-rke2-agent-nodes"},"Configuring Windows RKE2 agent nodes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuration-file"},"Using the configuration file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuring-when-running-the-binary-directly"},"Configuring when running the binary directly"))),(0,i.kt)("p",null,"The primary way to configure RKE2 is through its ",(0,i.kt)("a",{parentName:"p",href:"#configuration-file"},"config file"),". Command line arguments and environment variables are also available, but RKE2 is installed as a systemd service and thus these are not as easy to leverage."),(0,i.kt)("h3",{id:"configuring-the-linux-installation-script"},"Configuring the Linux Installation Script"),(0,i.kt)("p",null,"As mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"/install/quickstart"},"Quick-Start Guide"),", you can use the installation script available at ",(0,i.kt)("a",{parentName:"p",href:"https://get.rke2.io"},"https://get.rke2.io")," to install RKE2 as a service."),(0,i.kt)("p",null,"The simplest form of this command is running, as root user or through ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo"),", as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# curl -sfL https://get.rke2.io | sudo sh -\ncurl -sfL https://get.rke2.io | sh -\n")),(0,i.kt)("p",null,"When using this method to install RKE2, the following environment variables can be used to configure the installation:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_RKE2_VERSION")),(0,i.kt)("td",{parentName:"tr",align:null},"Version of RKE2 to download from GitHub. Will attempt to download the latest release from the ",(0,i.kt)("inlineCode",{parentName:"td"},"stable")," channel if not specified. ",(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_RKE2_CHANNEL")," should also be set if installing on an RPM-based system and the desired version does not exist in the ",(0,i.kt)("inlineCode",{parentName:"td"},"stable")," channel.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_RKE2_TYPE")),(0,i.kt)("td",{parentName:"tr",align:null},'Type of systemd service to create, can be either "server" or "agent" Default is "server".')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_RKE2_CHANNEL_URL")),(0,i.kt)("td",{parentName:"tr",align:null},"Channel URL for fetching RKE2 download URL. Defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"https://update.rke2.io/v1-release/channels"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_RKE2_CHANNEL")),(0,i.kt)("td",{parentName:"tr",align:null},"Channel to use for fetching RKE2 download URL. Defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"stable"),". Options include: ",(0,i.kt)("inlineCode",{parentName:"td"},"stable"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"latest"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"testing"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_RKE2_METHOD")),(0,i.kt)("td",{parentName:"tr",align:null},"Method of installation to use. Default is on RPM-based systems ",(0,i.kt)("inlineCode",{parentName:"td"},"rpm"),", all else ",(0,i.kt)("inlineCode",{parentName:"td"},"tar"),".")))),(0,i.kt)("p",null,"This installation script is straight-forward and will do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Obtain the desired version to install based on the above parameters. If no parameters are supplied, the latest official release will be used."),(0,i.kt)("li",{parentName:"ol"},"Determine and execute the installation method. There are two methods: rpm and tar. If the ",(0,i.kt)("inlineCode",{parentName:"li"},"INSTALL_RKE2_METHOD")," variable is set, that will be respected, Otherwise, ",(0,i.kt)("inlineCode",{parentName:"li"},"rpm")," will be used on operating systems that use this package management system. On all other systems, tar will be used. In the case of the tar method, the script will simply unpack the tar archive associated with the desired release. In the case of rpm, a yum repository will be set up and the rpm will be installed using yum.")),(0,i.kt)("h3",{id:"configuring-the-windows-installation-script"},"Configuring the Windows Installation Script"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Windows Support is currently Experimental as of v1.21.3+rke2r1"),"\n",(0,i.kt)("strong",{parentName:"p"},"Windows Support requires choosing Calico as the CNI for the RKE2 cluster")),(0,i.kt)("p",null,"As mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"/install/quickstart"},"Quick-Start Guide"),", you can use the installation script available at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/blob/master/install.ps1"},"https://github.com/rancher/rke2/blob/master/install.ps1")," to install RKE2 on a Windows Agent Node."),(0,i.kt)("p",null,"The simplest form of this command is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-WebRequest -Uri https://raw.githubusercontent.com/rancher/rke2/master/install.ps1 -Outfile install.ps1\n")),(0,i.kt)("p",null,"When using this method to install the Windows RKE2 agent, the following parameters can be passed to configure the installation script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'SYNTAX\n\ninstall.ps1 [[-Channel] <String>] [[-Method] <String>] [[-Type] <String>] [[-Version] <String>] [[-TarPrefix] <String>] [-Commit] [[-AgentImagesDir] <String>] [[-ArtifactPath] <String>] [[-ChannelUrl] <String>] [<CommonParameters>]\n\nOPTIONS\n\n-Channel           Channel to use for fetching RKE2 download URL (Default: "stable")\n-Method            The installation method to use. Currently tar or choco installation supported. (Default: "tar")\n-Type              Type of RKE2 service. Only the "agent" type is supported on Windows. (Default: "agent")\n-Version           Version of rke2 to download from Github\n-TarPrefix         Installation prefix when using the tar installation method. (Default: `C:/usr/local` unless `C:/usr/local` is read-only or has a dedicated mount point, in which case `C:/opt/rke2` is used instead)\n-Commit            (experimental/agent) Commit of RKE2 to download from temporary cloud storage. If set, this forces `--Method=tar`. Intended for development purposes only.\n-AgentImagesDir    Installation path for airgap images when installing from CI commit. (Default: `C:/var/lib/rancher/rke2/agent/images`)\n-ArtifactPath      If set, the install script will use the local path for sourcing the `rke2.windows-$SUFFIX` and `sha256sum-$ARCH.txt` files rather than the downloading the files from GitHub. Disabled by default.\n')),(0,i.kt)("h3",{id:"other-windows-installation-script-usage-examples"},"Other Windows Installation Script Usage Examples"),(0,i.kt)("h4",{id:"install-the-latest-version-instead-of-stable"},"Install the Latest Version Instead of Stable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-WebRequest -Uri https://raw.githubusercontent.com/rancher/rke2/master/install.ps1 -Outfile install.ps1\n./install.ps1 -Channel Latest\n")),(0,i.kt)("h4",{id:"install-the-latest-version-using-tar-installation-method"},"Install the Latest Version using Tar Installation Method"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-WebRequest -Uri https://raw.githubusercontent.com/rancher/rke2/master/install.ps1 -Outfile install.ps1\n./install.ps1 -Channel Latest -Method Tar\n")),(0,i.kt)("h3",{id:"configuring-rke2-server-nodes"},"Configuring RKE2 Server Nodes"),(0,i.kt)("p",null,"For details on configuring the RKE2 server, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/reference/server_config"},"server configuration reference.")),(0,i.kt)("h3",{id:"configuring-linux-rke2-agent-nodes"},"Configuring Linux RKE2 Agent Nodes"),(0,i.kt)("p",null,"For details on configuring the RKE2 agent, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/reference/linux_agent_config"},"agent configuration reference.")),(0,i.kt)("h3",{id:"configuring-windows-rke2-agent-nodes"},"Configuring Windows RKE2 Agent Nodes"),(0,i.kt)("p",null,"For details on configuring the RKE2 Windows agent, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/reference/windows_agent_config"},"Windows agent configuration reference.")),(0,i.kt)("h3",{id:"configuration-file"},"Configuration File"),(0,i.kt)("p",null,"By default, RKE2 will launch with the values present in the YAML file located at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/config.yaml"),"."),(0,i.kt)("p",null,"An example of a basic ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," config file is below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'write-kubeconfig-mode: "0644"\ntls-san:\n  - "foo.local"\nnode-label:\n  - "foo=bar"\n  - "something=amazing"\n')),(0,i.kt)("p",null,"The configuration file parameters map directly to CLI arguments, with repeatable CLI arguments being represented as YAML lists."),(0,i.kt)("p",null,"An identical configuration using solely CLI arguments is shown below to demonstrate this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'rke2 server \\\n  --write-kubeconfig-mode "0644"    \\\n  --tls-san "foo.local"             \\\n  --node-label "foo=bar"            \\\n  --node-label "something=amazing"\n')),(0,i.kt)("p",null,"It is also possible to use both a configuration file and CLI arguments.  In these situations, values will be loaded from both sources, but CLI arguments will take precedence.  For repeatable arguments such as ",(0,i.kt)("inlineCode",{parentName:"p"},"--node-label"),", the CLI arguments will overwrite all values in the list."),(0,i.kt)("p",null,"Finally, the location of the config file can be changed either through the cli argument ",(0,i.kt)("inlineCode",{parentName:"p"},"--config FILE, -c FILE"),", or the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"$RKE2_CONFIG_FILE"),"."),(0,i.kt)("h3",{id:"configuring-when-running-the-binary-directly"},"Configuring when Running the Binary Directly"),(0,i.kt)("p",null,"As stated, the installation script is primarily concerned with configuring RKE2 to run as a service. If you choose to not use the script, you can run RKE2 simply by downloading the binary from our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/releases/latest"},"release page"),", placing it on your path, and executing it. The RKE2 binary supports the following commands:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rke2 server")),(0,i.kt)("td",{parentName:"tr",align:null},"Run the RKE2 management server, which will also launch the Kubernetes control plane components such as the API server, controller-manager, and scheduler. Only Supported on Linux.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rke2 agent")),(0,i.kt)("td",{parentName:"tr",align:null},"Run the RKE2 node agent. This will cause RKE2 to run as a worker node, launching the Kubernetes node services ",(0,i.kt)("inlineCode",{parentName:"td"},"kubelet")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"kube-proxy"),". Supported on Linux and Windows.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rke2 help")),(0,i.kt)("td",{parentName:"tr",align:null},"Shows a list of commands or help for one command")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rke2 server")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rke2 agent")," commands have additional configuration options that can be viewed with ",(0,i.kt)("inlineCode",{parentName:"p"},"rke2 server --help")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"rke2 agent --help"),"."))}d.isMDXComponent=!0}}]);
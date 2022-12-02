"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Anatomy of a Next Generation Kubernetes Distribution",sidebar_label:"Architecture",weight:204},l=void 0,o={unversionedId:"architecture",id:"architecture",title:"Anatomy of a Next Generation Kubernetes Distribution",description:"Architecture Overview",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/architecture",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/architecture.md",tags:[],version:"current",lastUpdatedAt:1670002699,formattedLastUpdatedAt:"Dec 2, 2022",frontMatter:{title:"Anatomy of a Next Generation Kubernetes Distribution",sidebar_label:"Architecture",weight:204},sidebar:"mySidebar",previous:{title:"Secrets Encryption",permalink:"/security/secrets_encryption"},next:{title:"Cluster Access",permalink:"/cluster_access"}},s={},p=[{value:"Architecture Overview",id:"architecture-overview",level:3},{value:"Process Lifecycle",id:"process-lifecycle",level:3},{value:"Content Bootstrap",id:"content-bootstrap",level:4},{value:"Initialize Server",id:"initialize-server",level:4},{value:"Prepare Components",id:"prepare-components",level:5},{value:"<code>kube-apiserver</code>",id:"kube-apiserver",level:6},{value:"<code>kube-controller-manager</code>",id:"kube-controller-manager",level:6},{value:"<code>kube-scheduler</code>",id:"kube-scheduler",level:6},{value:"Start Cluster",id:"start-cluster",level:5},{value:"<code>etcd</code>",id:"etcd",level:6},{value:"<code>helm-controller</code>",id:"helm-controller",level:6},{value:"Initialize Agent",id:"initialize-agent",level:4},{value:"Container Runtime",id:"container-runtime",level:5},{value:"<code>containerd</code>",id:"containerd",level:6},{value:"Node Agent",id:"node-agent",level:5},{value:"<code>kubelet</code>",id:"kubelet",level:6},{value:"Server Charts",id:"server-charts",level:5},{value:"Daemon Process",id:"daemon-process",level:4}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"architecture-overview"},"Architecture Overview"),(0,a.kt)("p",null,"With RKE2 we take lessons learned from developing and maintaining our lightweight ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io",title:"Production-Grade Container Orchestration"},"Kubernetes"),"\ndistribution, ",(0,a.kt)("a",{parentName:"p",href:"https://k3s.io",title:"K3s - Lightweight Kubernetes"},"K3s"),", and apply them to build an enterprise-ready distribution with ",(0,a.kt)("a",{parentName:"p",href:"https://k3s.io",title:"K3s - Lightweight Kubernetes"},"K3s")," ease-of-use.\nWhat this means is that RKE2 is, at its simplest, a single binary to be installed and configured on all nodes expected\nto participate in the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io",title:"Production-Grade Container Orchestration"},"Kubernetes")," cluster. Once started, RKE2 is then able to bootstrap and supervise\nrole-appropriate agents per node while sourcing needed content from the network."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture Overview",src:n(5669).Z,title:"RKE2 Architecture Overview",width:"1016",height:"371"})),(0,a.kt)("p",null,"RKE2 brings together a number of Open Source technologies to make this all work:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://k3s.io",title:"K3s - Lightweight Kubernetes"},"K3s"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/helm-controller",title:"Helm Chart CRD"},"Helm Controller")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io",title:"Production-Grade Container Orchestration"},"K8s"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-apiserver",title:"Kube API Server"},"API Server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-controller-manager",title:"Kube Controller Manager"},"Controller Manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/tree/master/cmd/kubelet",title:"Kubelet"},"Kubelet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-scheduler",title:"Kube Scheduler"},"Scheduler")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-proxy",title:"Kube Proxy"},"Proxy")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://etcd.io",title:"A distributed, reliable key-value store for the most critical data of a distributed system"},"etcd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/opencontainers/runc",title:"CLI tool for spawning and running containers according to the OCI specification"},"runc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://containerd.io",title:"An open and reliable container runtime"},"containerd"),"/",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/cri-api",title:"Container Runtime Interface"},"cri")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/containernetworking/cni",title:"Container Network Interface"},"CNI"),": Canal (",(0,a.kt)("a",{parentName:"li",href:"https://docs.projectcalico.org/about/about-calico",title:"Project Calico"},"Calico")," ","&"," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/coreos/flannel",title:"A network fabric for containers, designed for Kubernetes"},"Flannel"),"), ",(0,a.kt)("a",{parentName:"li",href:"https://cilium.io",title:"eBPF-based Networking, Observability, and Security"},"Cilium")," or ",(0,a.kt)("a",{parentName:"li",href:"https://docs.projectcalico.org/about/about-calico",title:"Project Calico"},"Calico")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://coredns.io",title:"DNS and Service Discovery"},"CoreDNS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx",title:"NGINX Ingress Controller for Kubernetes"},"NGINX Ingress Controller")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/metrics-server",title:"Cluster-wide aggregator of resource usage data"},"Metrics Server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh",title:"The Kubernetes Package Manager"},"Helm"))),(0,a.kt)("p",null,"All of these, except the NGINX Ingress Controller, are compiled and statically linked with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/golang/go/tree/dev.boringcrypto/misc/boring",title:"Go+BoringCrypto"},"Go+BoringCrypto"),"."),(0,a.kt)("h3",{id:"process-lifecycle"},"Process Lifecycle"),(0,a.kt)("h4",{id:"content-bootstrap"},"Content Bootstrap"),(0,a.kt)("p",null,"RKE2 sources binaries and manifests to run both ",(0,a.kt)("em",{parentName:"p"},"server")," and ",(0,a.kt)("em",{parentName:"p"},"agent")," nodes from the RKE2 Runtime image.\nThis means RKE2 scans ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/agent/images/*.tar")," for the ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/rancher/rke2-runtime/tags"},(0,a.kt)("inlineCode",{parentName:"a"},"rancher/rke2-runtime")),"\nimage (with a tag correlating to the output of ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 --version"),") by default and if it cannot be found, attempts to pull\nit from the network (a.k.a. Docker Hub). RKE2 then extracts ",(0,a.kt)("inlineCode",{parentName:"p"},"/bin/")," from the image, flattening it into\n",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/data/${RKE2_DATA_KEY}/bin")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"${RKE2_DATA_KEY}")," represents a unique string identifying the\nimage."),(0,a.kt)("p",null,"For RKE2 to work as expected the runtime image must minimally provide:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"containerd"))," (the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/cri-api",title:"Container Runtime Interface"},"CRI"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"containerd-shim"))," (shims wrap ",(0,a.kt)("inlineCode",{parentName:"li"},"runc")," tasks and do not stop when ",(0,a.kt)("inlineCode",{parentName:"li"},"containerd")," does)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"containerd-shim-runc-v1"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"containerd-shim-runc-v2"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"kubelet"))," (the Kubernetes node agent)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"runc"))," (the OCI runtime)")),(0,a.kt)("p",null,"The following ops tooling is also provided by the runtime image:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"ctr"))," (low level ",(0,a.kt)("inlineCode",{parentName:"li"},"containerd")," maintenance and inspection)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"crictl"))," (low level CRI maintenance and inspection)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"kubectl"))," (kubernetes cluster maintenance and inspection)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"socat"))," (needed by ",(0,a.kt)("inlineCode",{parentName:"li"},"containerd")," for port-forwarding)")),(0,a.kt)("p",null,"After the binaries have been extracted RKE2 will then extract charts from the image\ninto the ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/manifests")," directory."),(0,a.kt)("h4",{id:"initialize-server"},"Initialize Server"),(0,a.kt)("p",null,"In the embedded K3s engine servers are specialized agent processes which means that the following startup will be\ndeferred until the node container runtime has started."),(0,a.kt)("h5",{id:"prepare-components"},"Prepare Components"),(0,a.kt)("h6",{id:"kube-apiserver"},(0,a.kt)("inlineCode",{parentName:"h6"},"kube-apiserver")),(0,a.kt)("p",null,"Pull the ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," image, if not present already, and spin up a goroutine to wait for ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd"),"\nand then write the static pod definition in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/agent/pod-manifests/"),"."),(0,a.kt)("h6",{id:"kube-controller-manager"},(0,a.kt)("inlineCode",{parentName:"h6"},"kube-controller-manager")),(0,a.kt)("p",null,"Pull the ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," image, if not present already, and spin up a goroutine to wait for ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver"),"\nand then write the static pod definition in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/agent/pod-manifests/"),"."),(0,a.kt)("h6",{id:"kube-scheduler"},(0,a.kt)("inlineCode",{parentName:"h6"},"kube-scheduler")),(0,a.kt)("p",null,"Pull the ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-scheduler")," image, if not present already, and spin up a goroutine to wait for ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver"),"\nand then write the static pod definition in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/agent/pod-manifests/"),"."),(0,a.kt)("h5",{id:"start-cluster"},"Start Cluster"),(0,a.kt)("p",null,"Spin up an HTTP server in a goroutine to listen for other cluster servers/agents then initialize/join the cluster."),(0,a.kt)("h6",{id:"etcd"},(0,a.kt)("inlineCode",{parentName:"h6"},"etcd")),(0,a.kt)("p",null,"Pull the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," image, if not present already, and spin up a goroutine to wait for the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet"),"\nand then write the static pod definition in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/agent/pod-manifests/"),"."),(0,a.kt)("h6",{id:"helm-controller"},(0,a.kt)("inlineCode",{parentName:"h6"},"helm-controller")),(0,a.kt)("p",null,"Spin up the goroutine to start the embedded ",(0,a.kt)("inlineCode",{parentName:"p"},"helm-controller")," after waiting for ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," to be ready."),(0,a.kt)("h4",{id:"initialize-agent"},"Initialize Agent"),(0,a.kt)("p",null,"The agent process entry point. For server processes the embedded K3s engine invokes this directly."),(0,a.kt)("h5",{id:"container-runtime"},"Container Runtime"),(0,a.kt)("h6",{id:"containerd"},(0,a.kt)("inlineCode",{parentName:"h6"},"containerd")),(0,a.kt)("p",null,"Spawn the ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd")," process and listen for termination. If ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd")," exits then the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2")," process will also exit."),(0,a.kt)("h5",{id:"node-agent"},"Node Agent"),(0,a.kt)("h6",{id:"kubelet"},(0,a.kt)("inlineCode",{parentName:"h6"},"kubelet")),(0,a.kt)("p",null,"Spawn and supervise the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet")," process. If ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet")," exits then ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2")," will attempt to restart it.\nOnce the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet")," is running it will start any available static pods. For servers this means that ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," will start, in succession, allowing the remaining components started via static pod\nto connect to the ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," and begin their processing."),(0,a.kt)("h5",{id:"server-charts"},"Server Charts"),(0,a.kt)("p",null,"On server nodes, the ",(0,a.kt)("inlineCode",{parentName:"p"},"helm-controller")," can now apply to the cluster any charts found in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/manifests"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"rke2-canal.yaml or rke2-cilium.yaml (daemonset, bootstrap)"),(0,a.kt)("li",{parentName:"ul"},"rke2-coredns.yaml (deployment, bootstrap)"),(0,a.kt)("li",{parentName:"ul"},"rke2-ingress-nginx.yaml (deployment)"),(0,a.kt)("li",{parentName:"ul"},"rke2-kube-proxy.yaml (daemonset, bootstrap)"),(0,a.kt)("li",{parentName:"ul"},"rke2-metrics-server.yaml (deployment)")),(0,a.kt)("h4",{id:"daemon-process"},"Daemon Process"),(0,a.kt)("p",null,"The RKE2 process will now run indefinitely until it receives a SIGTERM or SIGKILL or if the ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd")," process exits."))}u.isMDXComponent=!0},5669:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/overview-783b5a0a7e319dc96a2db8473dc83f3d.png"}}]);
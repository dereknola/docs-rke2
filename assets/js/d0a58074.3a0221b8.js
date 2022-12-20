"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[4553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"CIS Hardening Guide"},o=void 0,s={unversionedId:"security/hardening_guide",id:"security/hardening_guide",title:"CIS Hardening Guide",description:"This document provides prescriptive guidance for hardening a production installation of RKE2. It outlines the configurations and controls required to address Kubernetes benchmark controls from the Center for Internet Security (CIS).",source:"@site/docs/security/hardening_guide.md",sourceDirName:"security",slug:"/security/hardening_guide",permalink:"/security/hardening_guide",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/hardening_guide.md",tags:[],version:"current",lastUpdatedAt:1671564441,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"CIS Hardening Guide"},sidebar:"mySidebar",previous:{title:"About Hardened Images",permalink:"/security/about_hardened_images"},next:{title:"CIS 1.6 Self-Assessment Guide",permalink:"/security/cis_self_assessment16"}},l={},c=[{value:"Host-level requirements",id:"host-level-requirements",level:2},{value:"Ensure <code>protect-kernel-defaults</code> is set",id:"ensure-protect-kernel-defaults-is-set",level:3},{value:"Ensure etcd is configured properly",id:"ensure-etcd-is-configured-properly",level:3},{value:"Setting up hosts",id:"setting-up-hosts",level:3},{value:"Set kernel parameters",id:"set-kernel-parameters",level:4},{value:"Create the etcd user",id:"create-the-etcd-user",level:4},{value:"Kubernetes runtime requirements",id:"kubernetes-runtime-requirements",level:2},{value:"<code>PodSecurityPolicies</code>",id:"podsecuritypolicies",level:3},{value:"<code>NetworkPolicies</code>",id:"networkpolicies",level:3},{value:"Configure <code>default</code> service account",id:"configure-default-service-account",level:3},{value:"API Server audit configuration",id:"api-server-audit-configuration",level:3},{value:"Known issues",id:"known-issues",level:2},{value:"Control  1.1.12",id:"control--1112",level:3},{value:"Control 5.1.5",id:"control-515",level:3},{value:"Control 5.3.2",id:"control-532",level:3},{value:"RKE2 configuration",id:"rke2-configuration",level:2},{value:"Conclusion",id:"conclusion",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=u("Tabs"),p=u("TabItem"),h={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document provides prescriptive guidance for hardening a production installation of RKE2. It outlines the configurations and controls required to address Kubernetes benchmark controls from the Center for Internet Security (CIS)."),(0,r.kt)("p",null,"For more details about evaluating a hardened cluster against the official CIS benchmark, refer to the CIS Benchmark ",(0,r.kt)("a",{parentName:"p",href:"/security/cis_self_assessment123"},"Self-Assessment Guide v1.23"),", or ",(0,r.kt)("a",{parentName:"p",href:"/security/cis_self_assessment16"},"Self-Assessment Guide v1.6")," for RKE2 versions prior to v1.25."),(0,r.kt)("p",null,'RKE2 is designed to be "hardened by default" and pass the majority of the Kubernetes CIS controls without modification. There are a few notable exceptions to this that require manual intervention to fully pass the CIS Benchmark:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"RKE2 will not modify the host operating system. Therefore, you, the operator, must make a few host-level modifications."),(0,r.kt)("li",{parentName:"ol"},"Certain CIS controls for Network Policies and Pod Security Standards (or Pod Security Policies (PSP) on RKE2 versions prior to v1.25) will restrict the functionality of the cluster. You must opt into having RKE2 configure these for you.")),(0,r.kt)("p",null,"To help ensure these above requirements are met, RKE2 can be started with the ",(0,r.kt)("inlineCode",{parentName:"p"},"profile")," flag set to ",(0,r.kt)("inlineCode",{parentName:"p"},"cis-1.23"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"cis-1.6"),". This flag generally does the following:"),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(p,{value:"v1.25 and Newer",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Checks that host-level requirements have been met. If they haven't, RKE2 will exit with a fatal error describing the unmet requirements.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Applies network policies that allow the cluster to pass associated controls.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configures the Pod Security Admission Controller to enforce restricted mode in all namespaces, with the exception of the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cis-operator-system"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"tigera-operator")," namespaces.\nThese namespaces are exempted to allow system pods to run without restrictions, which is required for proper operation of the cluster.\nFor more information on the default Pod Security Admission configurations, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/blob/v1.25.4+rke2r1/pkg/rke2/psa.go#L40-L78"},"pkg/rke2/psa.go"),".\nFor more information about Pod Security Standards, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/"},"official documentation"),"."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The only valid value for the profile flag is ",(0,r.kt)("inlineCode",{parentName:"p"},"cis-1.23"),". It accepts a string value to allow for other profiles in the future."))),(0,r.kt)(p,{value:"v1.24 and Older",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Checks that host-level requirements have been met. If they haven't, RKE2 will exit with a fatal error describing the unmet requirements."),(0,r.kt)("li",{parentName:"ol"},"Configures runtime pod security policies and network policies that allow the cluster to pass associated controls.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The only valid values for the profile flag are ",(0,r.kt)("inlineCode",{parentName:"p"},"cis-1.5")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"cis-1.6"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The self-assessment guide for CIS v1.5 (",(0,r.kt)("inlineCode",{parentName:"p"},"cis-1.5"),") was removed from this documentation, since this version is applicable only to Kubernetes v1.15 that is not supported anymore. The profile, however, is still available in RKE2.")))),(0,r.kt)("p",null,"The following section outlines the specific actions that are taken when the ",(0,r.kt)("inlineCode",{parentName:"p"},"profile")," flag is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"cis-1.6")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"cis-1.23"),"."),(0,r.kt)("h2",{id:"host-level-requirements"},"Host-level requirements"),(0,r.kt)("p",null,"There are two areas of host-level requirements: kernel parameters and etcd process/directory configuration. These are outlined in this section."),(0,r.kt)("h3",{id:"ensure-protect-kernel-defaults-is-set"},"Ensure ",(0,r.kt)("inlineCode",{parentName:"h3"},"protect-kernel-defaults")," is set"),(0,r.kt)("p",null,"This is a kubelet flag that will cause the kubelet to exit if the required kernel parameters are unset or are set to values that are different from the kubelet's defaults."),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"profile")," flag is set, RKE2 will set the flag to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"!!! note\n",(0,r.kt)("inlineCode",{parentName:"p"},"protect-kernel-defaults")," is exposed as a top-level flag for RKE2. If you have set ",(0,r.kt)("inlineCode",{parentName:"p"},"profile"),' to "cis-1.x" and ',(0,r.kt)("inlineCode",{parentName:"p"},"protect-kernel-defaults")," to false explicitly, RKE2 will exit with an error."),(0,r.kt)("p",null,"RKE2 will also check the same kernel parameters that the kubelet does and exit with an error following the same rules as the kubelet. This is done as a convenience to help the operator more quickly and easily identify what kernel parameters are violating the kubelet defaults."),(0,r.kt)("h3",{id:"ensure-etcd-is-configured-properly"},"Ensure etcd is configured properly"),(0,r.kt)("p",null,"The CIS Benchmark requires that the etcd data directory be owned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," user and group. This implicitly requires the etcd process run as the host-level ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd"),' user. To achieve this, RKE2 takes several steps when started with a valid "cis-1.x" profile:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check that the ",(0,r.kt)("inlineCode",{parentName:"li"},"etcd")," user and group exists on the host. If they don't, exit with an error."),(0,r.kt)("li",{parentName:"ol"},"Create etcd's data directory with ",(0,r.kt)("inlineCode",{parentName:"li"},"etcd")," as the user and group owner."),(0,r.kt)("li",{parentName:"ol"},"Ensure the etcd process is run as the ",(0,r.kt)("inlineCode",{parentName:"li"},"etcd")," user and group by setting the etcd static pod's ",(0,r.kt)("inlineCode",{parentName:"li"},"SecurityContext")," appropriately.")),(0,r.kt)("h3",{id:"setting-up-hosts"},"Setting up hosts"),(0,r.kt)("p",null,"This section gives you the commands necessary to configure your host to meet the above requirements."),(0,r.kt)("h4",{id:"set-kernel-parameters"},"Set kernel parameters"),(0,r.kt)("p",null,"When RKE2 is installed, it creates a sysctl config file to set the required parameters appropriately. However, it does not automatically configure the host to use this configuration. You must do this manually. The location of the config file depends on the installation method used."),(0,r.kt)("p",null,"If RKE2 was installed via RPM, YUM, or DNF (the default on OSes that use RPMs, such as CentOS), run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cp -f /usr/share/rke2/rke2-cis-sysctl.conf /etc/sysctl.d/60-rke2-cis.conf\nsudo systemctl restart systemd-sysctl\n")),(0,r.kt)("p",null,"If RKE2 was installed via the tarball (the default on OSes that do not use RPMs, such as Ubuntu), run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cp -f /usr/local/share/rke2/rke2-cis-sysctl.conf /etc/sysctl.d/60-rke2-cis.conf\nsudo systemctl restart systemd-sysctl\n")),(0,r.kt)("p",null,"If your system lacks the ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd-sysctl.service")," and/or the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.d")," directory, you will want to make sure the sysctls are applied at boot by running the following command during start-up:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo sysctl -p /usr/local/share/rke2/rke2-cis-sysctl.conf\n")),(0,r.kt)("p",null,"Please perform this step only on fresh installations, before actually using RKE2 to deploy Kubernetes. Many Kubernetes components, including CNI plugins, set up their own sysctls. Restarting the ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd-sysctl")," service on a running Kubernetes cluster can result in unexpected side-effects."),(0,r.kt)("h4",{id:"create-the-etcd-user"},"Create the etcd user"),(0,r.kt)("p",null,"On some Linux distributions, the ",(0,r.kt)("inlineCode",{parentName:"p"},"useradd")," command will not create a group. The ",(0,r.kt)("inlineCode",{parentName:"p"},"-U")," flag is included below to account for that. This flag tells ",(0,r.kt)("inlineCode",{parentName:"p"},"useradd")," to create a group with the same name as the user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo useradd -r -c "etcd user" -s /sbin/nologin -M etcd -U\n')),(0,r.kt)("h2",{id:"kubernetes-runtime-requirements"},"Kubernetes runtime requirements"),(0,r.kt)("p",null,"The runtime requirements to pass the CIS Benchmark are centered around pod security and network policies. These are outlined in this section."),(0,r.kt)("h3",{id:"podsecuritypolicies"},(0,r.kt)("inlineCode",{parentName:"h3"},"PodSecurityPolicies")),(0,r.kt)("p",null,"RKE2 always runs with the ",(0,r.kt)("inlineCode",{parentName:"p"},"PodSecurityPolicy")," admission controller turned on. However, when it is ",(0,r.kt)("strong",{parentName:"p"},"not"),' started with a valid "cis-1.x" profile, RKE2 will put an unrestricted policy in place that allows Kubernetes to run as though the ',(0,r.kt)("inlineCode",{parentName:"p"},"PodSecurityPolicy")," admission controller was not enabled."),(0,r.kt)("p",null,'When ran with a valid "cis-1.x" profile, RKE2 will put a much more restrictive set of policies in place. These policies meet the requirements outlined in section 5.2 of the CIS Benchmark.'),(0,r.kt)("p",null,"!!! note\nThe Kubernetes control plane components and critical additions such as CNI, DNS, and Ingress are ran as pods in the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace. Therefore, this namespace will have a policy that is less restrictive so that these components can run properly."),(0,r.kt)("h3",{id:"networkpolicies"},(0,r.kt)("inlineCode",{parentName:"h3"},"NetworkPolicies")),(0,r.kt)("p",null,'When ran with a valid "cis-1.x" profile, RKE2 will put ',(0,r.kt)("inlineCode",{parentName:"p"},"NetworkPolicies")," in place that passes the CIS Benchmark for Kubernetes' built-in namespaces. These namespaces are: ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-public"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-node-lease"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"NetworkPolicy")," used will only allow pods within the same namespace to talk to each other. The notable exception to this is that it allows DNS requests to be resolved."),(0,r.kt)("p",null,"!!! note\nOperators must manage network policies as normal for additional namespaces that are created."),(0,r.kt)("h3",{id:"configure-default-service-account"},"Configure ",(0,r.kt)("inlineCode",{parentName:"h3"},"default")," service account"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Set ",(0,r.kt)("inlineCode",{parentName:"strong"},"automountServiceAccountToken")," to ",(0,r.kt)("inlineCode",{parentName:"strong"},"false")," for ",(0,r.kt)("inlineCode",{parentName:"strong"},"default")," service accounts")),(0,r.kt)("p",null,"Kubernetes provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," service account which is used by cluster workloads where no specific service account is assigned to the pod. Where access to the Kubernetes API from a pod is required, a specific service account should be created for that pod, and rights granted to that service account. The ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," service account should be configured such that it does not provide a service account token and does not have any explicit rights assignments."),(0,r.kt)("p",null,"For each namespace including ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system")," on a standard RKE2 install, the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," service account must include this value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"automountServiceAccountToken: false\n")),(0,r.kt)("p",null,"For namespaces created by the cluster operator, the following script and configuration file can be used to configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," service account."),(0,r.kt)("p",null,"The configuration below must be saved to a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"account_update.yaml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: default\nautomountServiceAccountToken: false\n")),(0,r.kt)("p",null,"Create a bash script file called ",(0,r.kt)("inlineCode",{parentName:"p"},"account_update.sh"),". Be sure to ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo chmod +x account_update.sh")," so the script has execute permissions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash -e\n\nfor namespace in $(kubectl get namespaces -A -o=jsonpath="{.items[*][\'metadata.name\']}"); do\n  echo -n "Patching namespace $namespace - "\n  kubectl patch serviceaccount default -n ${namespace} -p "$(cat account_update.yaml)"\ndone\n')),(0,r.kt)("p",null,"Execute this script to apply the ",(0,r.kt)("inlineCode",{parentName:"p"},"account_update.yaml")," configuration to ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," service account in all namespaces."),(0,r.kt)("h3",{id:"api-server-audit-configuration"},"API Server audit configuration"),(0,r.kt)("p",null,"CIS requirements 1.2.22 to 1.2.25 are related to configuring audit logs for the API Server. When RKE2 is started with the ",(0,r.kt)("inlineCode",{parentName:"p"},"profile")," flag set, it will automatically configure hardened ",(0,r.kt)("inlineCode",{parentName:"p"},"--audit-log-")," parameters in the API Server to pass those CIS checks."),(0,r.kt)("p",null,"RKE2's default audit policy is configured to not log requests in the API Server. This is done to allow cluster operators flexibility to customize an audit policy that suits their auditing requirements and needs, as these are specific to each users' environment and policies."),(0,r.kt)("p",null,"A default audit policy is created by RKE2 when started with the ",(0,r.kt)("inlineCode",{parentName:"p"},"profile")," flag set. The policy is defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/audit-policy.yaml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: audit.k8s.io/v1\nkind: Policy\nmetadata:\n  creationTimestamp: null\nrules:\n- level: None\n")),(0,r.kt)("p",null,"To start logging requests to the API Server, at least ",(0,r.kt)("inlineCode",{parentName:"p"},"level")," parameter must be modified, for example, to ",(0,r.kt)("inlineCode",{parentName:"p"},"Metadata"),". Detailed information about policy configuration for the API server can be found in the Kubernetes ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/debug-application-cluster/audit/"},"documentation"),"."),(0,r.kt)("p",null,"After adapting the audit policy, RKE2 must be restarted to load the new configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl restart rke2-server.service\n")),(0,r.kt)("p",null,"API Server audit logs will be written to ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/logs/audit.log"),"."),(0,r.kt)("h2",{id:"known-issues"},"Known issues"),(0,r.kt)("p",null,"The following are controls that RKE2 currently does not pass. Each gap will be explained and whether it can be passed through manual operator intervention or if it will be addressed in a future release."),(0,r.kt)("h3",{id:"control--1112"},"Control  1.1.12"),(0,r.kt)("p",null,"Ensure that the etcd data directory ownership is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd:etcd"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rationale"),"\netcd is a highly-available key-value store used by Kubernetes deployments for persistent storage of all of its REST API objects. This data directory should be protected from any unauthorized reads or writes. It should be owned by ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd:etcd"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Remediation"),"\nThis can be remediated by creating an ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," user and group as described above."),(0,r.kt)("h3",{id:"control-515"},"Control 5.1.5"),(0,r.kt)("p",null,"Ensure that default service accounts are not actively used"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rationale")," Kubernetes provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," service account which is used by cluster workloads where no specific service account is assigned to the pod."),(0,r.kt)("p",null,"Where access to the Kubernetes API from a pod is required, a specific service account should be created for that pod, and rights granted to that service account."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," service account should be configured such that it does not provide a service account token and does not have any explicit rights assignments."),(0,r.kt)("p",null,"This can be remediated by updating the ",(0,r.kt)("inlineCode",{parentName:"p"},"automountServiceAccountToken")," field to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," service account in each namespace."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Remediation"),"\nYou can manually update this field on service accounts in your cluster to pass the control as described above."),(0,r.kt)("h3",{id:"control-532"},"Control 5.3.2"),(0,r.kt)("p",null,"Ensure that all Namespaces have Network Policies defined"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rationale"),"\nRunning different applications on the same Kubernetes cluster creates a risk of one compromised application attacking a neighboring application. Network segmentation is important to ensure that containers can communicate only with those they are supposed to. A network policy is a specification of how selections of pods are allowed to communicate with each other and other network endpoints."),(0,r.kt)("p",null,"Network Policies are namespace scoped. When a network policy is introduced to a given namespace, all traffic not allowed by the policy is denied. However, if there are no network policies in a namespace all traffic will be allowed into and out of the pods in that namespace."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Remediation"),"\nThis can be remediated by starting RKE2 with the ",(0,r.kt)("inlineCode",{parentName:"p"},"profile")," flag set in the configuration file. An example can be found below."),(0,r.kt)("h2",{id:"rke2-configuration"},"RKE2 configuration"),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(p,{value:"v1.25 and Newer",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Below is the minimum necessary configuration needed for hardening RKE2 to pass CIS v1.23 hardened profile ",(0,r.kt)("inlineCode",{parentName:"p"},"rke2-cis-1.23-profile-hardened")," available in Rancher."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'profile: "cis-1.23"           # CIS 4.2.6, 5.2.1, 5.2.8, 5.2.9, 5.3.2\n'))),(0,r.kt)(p,{value:"v1.24 and Older",mdxType:"TabItem"},(0,r.kt)("p",null,"Below is the minimum necessary configuration needed for hardening RKE2 to pass CIS v1.6 hardened profile ",(0,r.kt)("inlineCode",{parentName:"p"},"rke2-cis-1.6-profile-hardened")," available in Rancher."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'profile: "cis-1.6"           # CIS 4.2.6, 5.2.1, 5.2.8, 5.2.9, 5.3.2\n')))),(0,r.kt)("p",null,"The configuration file must be named ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," and placed in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2"),". The directory needs to be created prior to installing RKE2."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"If you have followed this guide, your RKE2 cluster will be configured to pass the CIS Kubernetes Benchmark. You can review our CIS Benchmark Self-Assessment Guide ",(0,r.kt)("a",{parentName:"p",href:"/security/cis_self_assessment16"},"v1.6")," or ",(0,r.kt)("a",{parentName:"p",href:"/security/cis_self_assessment123"},"v1.23")," to understand how we verified each of the benchmarks and how you can do the same on your cluster."))}m.isMDXComponent=!0}}]);
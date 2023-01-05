"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"mySidebar":[{"type":"link","label":"Introduction","href":"/docs-rke2/","docId":"introduction"},{"type":"category","label":"Installation","items":[{"type":"link","label":"Quick Start","href":"/docs-rke2/install/quickstart","docId":"install/quickstart"},{"type":"link","label":"Requirements","href":"/docs-rke2/install/requirements","docId":"install/requirements"},{"type":"link","label":"Configuration Options","href":"/docs-rke2/install/configuration","docId":"install/configuration"},{"type":"link","label":"Network Options","href":"/docs-rke2/install/network_options","docId":"install/network_options"},{"type":"link","label":"High Availability","href":"/docs-rke2/install/ha","docId":"install/ha"},{"type":"link","label":"Installation Methods","href":"/docs-rke2/install/methods","docId":"install/methods"},{"type":"link","label":"Containerd Registry Configuration","href":"/docs-rke2/install/containerd_registry_configuration","docId":"install/containerd_registry_configuration"},{"type":"link","label":"Air-Gap Install","href":"/docs-rke2/install/airgap","docId":"install/airgap"},{"type":"link","label":"Windows Air-Gap Install","href":"/docs-rke2/install/windows_airgap","docId":"install/windows_airgap"},{"type":"link","label":"Linux Uninstall","href":"/docs-rke2/install/linux_uninstall","docId":"install/linux_uninstall"},{"type":"link","label":"Windows Uninstall","href":"/docs-rke2/install/windows_uninstall","docId":"install/windows_uninstall"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Upgrades","items":[{"type":"link","label":"Overview","href":"/docs-rke2/upgrade/","docId":"upgrade/upgrade"},{"type":"link","label":"Manual Upgrades","href":"/docs-rke2/upgrade/manual_upgrade","docId":"upgrade/manual_upgrade"},{"type":"link","label":"Automated Upgrades","href":"/docs-rke2/upgrade/automated_upgrade","docId":"upgrade/automated_upgrade"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Security","items":[{"type":"link","label":"About Hardened Images","href":"/docs-rke2/security/about_hardened_images","docId":"security/about_hardened_images"},{"type":"link","label":"CIS Hardening Guide","href":"/docs-rke2/security/hardening_guide","docId":"security/hardening_guide"},{"type":"link","label":"CIS 1.6 Self-Assessment Guide","href":"/docs-rke2/security/cis_self_assessment16","docId":"security/cis_self_assessment16"},{"type":"link","label":"CIS 1.23 Self-Assessment Guide","href":"/docs-rke2/security/cis_self_assessment123","docId":"security/cis_self_assessment123"},{"type":"link","label":"FIPS 140-2 Enablement","href":"/docs-rke2/security/fips_support","docId":"security/fips_support"},{"type":"link","label":"Default Policy Configuration","href":"/docs-rke2/security/pod_security_policies","docId":"security/pod_security_policies"},{"type":"link","label":"Default Pod Security Standards","href":"/docs-rke2/security/pod_security_standards","docId":"security/pod_security_standards"},{"type":"link","label":"SELinux","href":"/docs-rke2/security/selinux","docId":"security/selinux"},{"type":"link","label":"Secrets Encryption","href":"/docs-rke2/security/secrets_encryption","docId":"security/secrets_encryption"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Architecture","href":"/docs-rke2/architecture","docId":"architecture"},{"type":"link","label":"Cluster Access","href":"/docs-rke2/cluster_access","docId":"cluster_access"},{"type":"link","label":"Etcd Backup and Restore","href":"/docs-rke2/backup_restore","docId":"backup_restore"},{"type":"link","label":"Networking","href":"/docs-rke2/networking","docId":"networking"},{"type":"link","label":"Helm Integration","href":"/docs-rke2/helm","docId":"helm"},{"type":"link","label":"Advanced Options and Configuration","href":"/docs-rke2/advanced","docId":"advanced"},{"type":"category","label":"Reference","items":[{"type":"link","label":"Agent Configuration Reference","href":"/docs-rke2/reference/linux_agent_config","docId":"reference/linux_agent_config"},{"type":"link","label":"Server Configuration Reference","href":"/docs-rke2/reference/server_config","docId":"reference/server_config"},{"type":"link","label":"Subcommands","href":"/docs-rke2/reference/subcommands","docId":"reference/subcommands"},{"type":"link","label":"Windows Agent Configuration Reference","href":"/docs-rke2/reference/windows_agent_config","docId":"reference/windows_agent_config"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Known Issues and Limits","href":"/docs-rke2/known_issues","docId":"known_issues"}]},"docs":{"adrs/record-architecture-decisions":{"id":"adrs/record-architecture-decisions","title":"1. Record architecture decisions","description":"Date: 2022-01-26"},"adrs/rke2-rpm-sle-support":{"id":"adrs/rke2-rpm-sle-support","title":"3. RPM SLE support for RKE2","description":"Date: 2022-01-27"},"adrs/rke2-rpm-support":{"id":"adrs/rke2-rpm-support","title":"2. RPM support for RKE2","description":"Date: 2022-01-20"},"advanced":{"id":"advanced","title":"Advanced Options and Configuration","description":"This section contains advanced information describing the different ways you can run and manage RKE2.","sidebar":"mySidebar"},"architecture":{"id":"architecture","title":"Anatomy of a Next Generation Kubernetes Distribution","description":"Architecture Overview","sidebar":"mySidebar"},"backup_restore":{"id":"backup_restore","title":"Etcd Backup and Restore","description":"In this section, you\'ll learn how to create backups of the rke2 cluster data and to restore the cluster from backup.","sidebar":"mySidebar"},"cluster_access":{"id":"cluster_access","title":"Cluster Access","description":"The kubeconfig file stored at /etc/rancher/rke2/rke2.yaml is used to configure access to the Kubernetes cluster.","sidebar":"mySidebar"},"helm":{"id":"helm","title":"Helm Integration","description":"Helm is the package management tool of choice for Kubernetes. Helm charts provide templating syntax for Kubernetes YAML manifest documents. With Helm we can create configurable deployments instead of just using static files. For more information about creating your own catalog of deployments, check out the docs at https://helm.sh/docs/intro/quickstart/.","sidebar":"mySidebar"},"install/airgap":{"id":"install/airgap","title":"Air-Gap Install","description":"Important: If your node has NetworkManager installed and enabled, ensure that it is configured to ignore CNI-managed interfaces.","sidebar":"mySidebar"},"install/configuration":{"id":"install/configuration","title":"Configuration Options","description":"This page focuses on the configuration options available when setting up RKE2:","sidebar":"mySidebar"},"install/containerd_registry_configuration":{"id":"install/containerd_registry_configuration","title":"Containerd Registry Configuration","description":"Containerd can be configured to connect to private registries and use them to pull private images on each node.","sidebar":"mySidebar"},"install/ha":{"id":"install/ha","title":"High Availability","description":"This section describes how to install a high availability (HA) RKE2 cluster. An HA RKE2 cluster consists of:","sidebar":"mySidebar"},"install/linux_uninstall":{"id":"install/linux_uninstall","title":"Linux Uninstall","description":"Uninstalling RKE2 deletes the cluster data and all of the scripts.","sidebar":"mySidebar"},"install/methods":{"id":"install/methods","title":"Installation Methods","description":"Important: If your node has NetworkManager installed and enabled, ensure that it is configured to ignore CNI-managed interfaces.","sidebar":"mySidebar"},"install/network_options":{"id":"install/network_options","title":"Network Options","description":"RKE2 requires a CNI plugin to connect pods and services. The Canal CNI plugin is the default and has been supported since the beginning. Starting with RKE2 v1.21, there are two extra supported CNI plugins: Calico and Cilium. All CNI","sidebar":"mySidebar"},"install/quickstart":{"id":"install/quickstart","title":"Quick Start","description":"This guide will help you quickly launch a cluster with default options.","sidebar":"mySidebar"},"install/requirements":{"id":"install/requirements","title":"Requirements","description":"RKE2 is very lightweight, but has some minimum requirements as outlined below.","sidebar":"mySidebar"},"install/windows_airgap":{"id":"install/windows_airgap","title":"Windows Air-Gap Install","description":"Windows Support is currently Experimental as of v1.21.3+rke2r1","sidebar":"mySidebar"},"install/windows_uninstall":{"id":"install/windows_uninstall","title":"Windows Uninstall","description":"Note:  Uninstalling the RKE2 Windows Agent deletes all of the node data.","sidebar":"mySidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"RKE2, also known as RKE Government, is Rancher\'s next-generation Kubernetes distribution.","sidebar":"mySidebar"},"known_issues":{"id":"known_issues","title":"Known Issues and Limitations","description":"This section contains current known issues and limitations with rke2. If you come across issues with rke2 not documented here, please open a new issue here.","sidebar":"mySidebar"},"networking":{"id":"networking","title":"Networking","description":"This page explains how CoreDNS and the Nginx-Ingress controller work within RKE2.","sidebar":"mySidebar"},"reference/linux_agent_config":{"id":"reference/linux_agent_config","title":"Agent Configuration Reference","description":"This is a reference to all parameters that can be used to configure the rke2 agent. Note that while this is a reference to the command line arguments, the best way to configure RKE2 is using the configuration file.","sidebar":"mySidebar"},"reference/server_config":{"id":"reference/server_config","title":"Server Configuration Reference","description":"This is a reference to all parameters that can be used to configure the rke2 server. Note that while this is a reference to the command line arguments, the best way to configure RKE2 is using the configuration file.","sidebar":"mySidebar"},"reference/subcommands":{"id":"reference/subcommands","title":"Subcommands","description":"The rke2 binary comes packaged with multiple subcommands. This page gives information on the options that come with those.","sidebar":"mySidebar"},"reference/windows_agent_config":{"id":"reference/windows_agent_config","title":"Windows Agent Configuration Reference","description":"This is a reference to all parameters that can be used to configure the Windows RKE2 agent.","sidebar":"mySidebar"},"security/about_hardened_images":{"id":"security/about_hardened_images","title":"About Hardened Images","description":"RKE2 hardened images are scanned for vulnerabilities at build time, and additional security protections have been added to decrease potential weaknesses:","sidebar":"mySidebar"},"security/cis_self_assessment123":{"id":"security/cis_self_assessment123","title":"CIS 1.23 Self-Assessment Guide","description":"CIS Kubernetes Benchmark v1.23 - RKE2","sidebar":"mySidebar"},"security/cis_self_assessment16":{"id":"security/cis_self_assessment16","title":"CIS 1.6 Self-Assessment Guide","description":"CIS Kubernetes Benchmark v1.6 - RKE2 v1.20","sidebar":"mySidebar"},"security/fips_support":{"id":"security/fips_support","title":"FIPS 140-2 Enablement","description":"FIPS 140-2 is a U.S. Federal Government security standard used to approve cryptographic modules. This document explains how RKE2 is built with FIPS validated cryptographic libraries.","sidebar":"mySidebar"},"security/hardening_guide":{"id":"security/hardening_guide","title":"CIS Hardening Guide","description":"This document provides prescriptive guidance for hardening a production installation of RKE2. It outlines the configurations and controls required to address Kubernetes benchmark controls from the Center for Internet Security (CIS).","sidebar":"mySidebar"},"security/pod_security_policies":{"id":"security/pod_security_policies","title":"Default Policy Configuration","description":"This document describes how RKE2 configures PodSecurityPolicies and NetworkPolicies in order to be secure-by-default while also providing operators with maximum configuration flexibility.","sidebar":"mySidebar"},"security/pod_security_standards":{"id":"security/pod_security_standards","title":"Default Pod Security Standards","description":"This document describes how RKE2 configures PodSecurityStandards and NetworkPolicies in order to be secure-by-default while also providing operators with maximum configuration flexibility.","sidebar":"mySidebar"},"security/secrets_encryption":{"id":"security/secrets_encryption","title":"Secrets Encryption","description":"Secrets Encryption Config","sidebar":"mySidebar"},"security/selinux":{"id":"security/selinux","title":"SELinux","description":"RKE2 can be run on SELinux-enabled systems which is the default when installed on CentOS/RHEL 7 &amp; 8.","sidebar":"mySidebar"},"upgrade/automated_upgrade":{"id":"upgrade/automated_upgrade","title":"Automated Upgrades","description":"Overview","sidebar":"mySidebar"},"upgrade/manual_upgrade":{"id":"upgrade/manual_upgrade","title":"Manual Upgrades","description":"You can upgrade rke2 by using the installation script, or by manually installing the binary of the desired version.","sidebar":"mySidebar"},"upgrade/upgrade":{"id":"upgrade/upgrade","title":"Upgrading RKE2 Clusters","description":"This section describes how to upgrade your rke2 cluster.","sidebar":"mySidebar"}}}')}}]);
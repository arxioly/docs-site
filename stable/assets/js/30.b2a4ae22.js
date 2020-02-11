(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{264:function(e,t,a){e.exports=a.p+"assets/img/Error.68cb8744.png"},346:function(e,t,a){"use strict";a.r(t);var s=a(3),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"troubleshooting-api-ml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-api-ml"}},[e._v("#")]),e._v(" Troubleshooting API ML")]),e._v(" "),s("p",[e._v("As an API Mediation Layer user, you may encounter problems with how the API ML functions. This article presents known API ML issues and their solutions.")]),e._v(" "),s("h2",{attrs:{id:"enable-api-ml-debug-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-api-ml-debug-mode"}},[e._v("#")]),e._v(" Enable API ML Debug Mode")]),e._v(" "),s("p",[e._v("Use debug mode to activate the following functions:")]),e._v(" "),s("ul",[s("li",[e._v("Display additional debug messages for API ML")]),e._v(" "),s("li",[e._v("Enable changing log level for individual code components")])]),e._v(" "),s("p",[s("strong",[e._v("Important:")]),e._v(" We highly recommend that you enable debug mode only when you want to troubleshoot issues.\nDisable debug mode when you are not troubleshooting. Running in debug mode while operating API ML can adversely affect\nits performance and create large log files that consume a large volume of disk space.")]),e._v(" "),s("p",[s("strong",[e._v("Follow these steps:")])]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Open the file "),s("code",[e._v("<Zowe install directory>/components/api-mediation/bin/start.sh")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Find the API Mediation Layer service, for which you want to enable the debug mode: discovery, catalog, or gateway.")])]),e._v(" "),s("li",[s("p",[e._v("Find the line that contains the "),s("code",[e._v("LOG_LEVEL=")]),e._v(" parameter and set the value to "),s("code",[e._v("debug")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" LOG_LEVEL=debug\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Restart Zowe™.")]),e._v(" "),s("p",[e._v("You have enabled the debug mode.")])]),e._v(" "),s("li",[s("p",[e._v("(Optional) Reproduce a bug that causes issues and review debug messages. If you are unable to resolve the issue, create an issue "),s("a",{attrs:{href:"https://github.com/zowe/api-layer/issues/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Disable the debug mode. Find the "),s("code",[e._v("LOG_LEVEL")]),e._v(" parameter, and change its current value to the default "),s("code",[e._v("LOG_LEVEL=")]),e._v(" one:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("LOG_LEVEL=\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Restart Zowe.")]),e._v(" "),s("p",[e._v("You have disabled the debug mode.")])])]),e._v(" "),s("h2",{attrs:{id:"change-the-log-level-of-individual-code-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-the-log-level-of-individual-code-components"}},[e._v("#")]),e._v(" Change the Log Level of Individual Code Components")]),e._v(" "),s("p",[e._v("You can change the log level of a particular code component of the API ML internal service at run time.")]),e._v(" "),s("p",[s("strong",[e._v("Follow these steps:")])]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Enable API ML Debug Mode as described in Enable API ML Debug Mode.\nThis activates the application/loggers endpoints in each API ML internal service (Gateway, Discovery Service, and Catalog).")])]),e._v(" "),s("li",[s("p",[e._v("List the available loggers of a service by issuing the GET request for the given service URL:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("GET scheme://hostname:port/application/loggers\n")])])]),s("p",[e._v("Where:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("scheme")])]),e._v(" "),s("p",[e._v("API ML service scheme (http or https)")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("hostname")])]),e._v(" "),s("p",[e._v("API ML service hostname")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("port")])]),e._v(" "),s("p",[e._v("TCP port where API ML service listens on. The port is defined by the configuration parameter MFS_GW_PORT for the Gateway,\nMFS_DS_PORT for the Discovery Service (by default, set to gateway port + 1), and MFS_AC_PORT for the Catalog\n(by default, set to gateway port + 2).")])])]),e._v(" "),s("p",[s("strong",[e._v("Exception:")]),e._v(" For the catalog you will able to get list the available loggers by issuing the GET request for the given service URL:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("GET [gateway-scheme]://[gateway-hostname]:[gateway-port]/api/v1/apicatalog/application/loggers\n")])])]),s("p",[s("strong",[e._v("Tip:")]),e._v(" One way to issue REST calls is to use the http command in the free HTTPie tool: https://httpie.org/.")]),e._v(" "),s("p",[s("strong",[e._v("Example:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('HTTPie command:\nhttp GET https://lpar.ca.com:10000/application/loggers\n\nOutput:\n{"levels":["OFF","ERROR","WARN","INFO","DEBUG","TRACE"],\n "loggers":{\n   "ROOT":{"configuredLevel":"INFO","effectiveLevel":"INFO"},\n   "com":{"configuredLevel":null,"effectiveLevel":"INFO"},\n   "com.ca":{"configuredLevel":null,"effectiveLevel":"INFO"},\n   ...\n }\n}\n')])])])]),e._v(" "),s("li",[s("p",[e._v("Alternatively, you extract the configuration of a specific logger using the extended "),s("strong",[e._v("GET")]),e._v(" request:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("GET scheme://hostname:port/application/loggers/{name}\n")])])]),s("p",[e._v("Where:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("{name}")])]),e._v(" "),s("p",[e._v("is the logger name")])])])]),e._v(" "),s("li",[s("p",[e._v("Change the log level of the given component of the API ML internal service. Use the POST request for the given service URL:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("POST scheme://hostname:port/application/loggers/{name}\n")])])]),s("p",[e._v("The POST request requires a new log level parameter value that is provided in the request body:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n\n"configuredLevel": "level"\n\n}\n')])])]),s("p",[e._v("Where:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("level")])]),e._v(" "),s("p",[e._v("is the new log level: "),s("strong",[e._v("OFF")]),e._v(", "),s("strong",[e._v("ERROR")]),e._v(", "),s("strong",[e._v("WARN")]),e._v(", "),s("strong",[e._v("INFO")]),e._v(", "),s("strong",[e._v("DEBUG")]),e._v(", "),s("strong",[e._v("TRACE")])])])]),e._v(" "),s("p",[s("strong",[e._v("Example:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("http POST https://hostname:port/application/loggers/org.zowe.apiml.enable.model configuredLevel=WARN\n")])])])])]),e._v(" "),s("h2",{attrs:{id:"known-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known Issues")]),e._v(" "),s("h3",{attrs:{id:"api-ml-stops-accepting-connections-after-z-os-tcp-ip-stack-is-recycled"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-ml-stops-accepting-connections-after-z-os-tcp-ip-stack-is-recycled"}},[e._v("#")]),e._v(" API ML stops accepting connections after z/OS TCP/IP stack is recycled")]),e._v(" "),s("p",[s("strong",[e._v("Symptom:")])]),e._v(" "),s("p",[e._v("When z/OS TCP/IP stack is restarted, it is possible that the internal services of API Mediation Layer\n(Gateway, Catalog, and Discovery Service) stop accepting all incoming connections, go into a continuous loop,\nand write a numerous error messages in the log.")]),e._v(" "),s("p",[s("strong",[e._v("Sample message:")])]),e._v(" "),s("p",[e._v("The following message is a typical error message displayed in STDOUT:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("2018-Sep-12 12:17:22.850. org.apache.tomcat.util.net.NioEndpoint -- Socket accept failed java.io.IOException: EDC5122I Input/output error.\n\n.at sun.nio.ch.ServerSocketChannelImpl.accept0(Native Method) ~.na:1.8.0.\n.at sun.nio.ch.ServerSocketChannelImpl.accept(ServerSocketChannelImpl.java:478) ~.na:1.8.0.\n.at sun.nio.ch.ServerSocketChannelImpl.accept(ServerSocketChannelImpl.java:287) ~.na:1.8.0.\n.at org.apache.tomcat.util.net.NioEndpoint$Acceptor.run(NioEndpoint.java:455) ~.tomcat-coyote-8.5.29.jar!/:8.5.29.\n.at java.lang.Thread.run(Thread.java:811) .na:2.9 (12-15-2017).\n")])])]),s("p",[s("strong",[e._v("Solution:")])]),e._v(" "),s("p",[e._v("Restart API Mediation Layer.")]),e._v(" "),s("p",[s("strong",[e._v("Tip:")]),e._v("  To prevent this issue from occurring, it is strongly recommended not to restart the TCP/IP stack while API ML is running.")]),e._v(" "),s("h3",{attrs:{id:"sec0002-error-when-logging-in-to-api-catalog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sec0002-error-when-logging-in-to-api-catalog"}},[e._v("#")]),e._v(" SEC0002 error when logging in to API Catalog")]),e._v(" "),s("p",[e._v("SEC0002 error typically appears when users fail to log in to API Catalog. The following image shows the API Catalog login page with the SEC0002 error.")]),e._v(" "),s("img",{attrs:{src:a(264),alt:"SEC0002 Error",title:"SEC0002 Error",width:"450",height:"350"}}),e._v(" "),s("p",[e._v("The error is caused by failed z/OSMF authentication. To determine the reason authentication failed, open the ZWESVSTC joblog and look for a message that contains "),s("code",[e._v("ZosmfAuthenticationProvider")]),e._v(". The following is an example of the message that contains "),s("code",[e._v("ZosmfAuthenticationProvider")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("2019-08-05 11:25:03.431 ERROR 5 --- .0.0-7552-exec-3. c.c.m.s.l.ZosmfAuthenticationProvider    : Can not access z/OSMF service. Uri 'https://ABC12.slv.broadcom.net:1443' returned: I/O error on GET request for \"https://ABC12.slv.broadcom.net:1443/zosmf/info\": ... \n")])])]),s("p",[e._v("Check the rest of the message, and identify the cause of the problem. The following list provides the possible reasons and solutions for the z/OSMF authentication issue:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#connection-refused"}},[e._v("Connection refused")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#missing-z/osmf-host-name-in-subject-alternative-names"}},[e._v("Missing z/OSMF host name in subject alternative names")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#invalid-z/osmf-host-name-in-subject-alternative-names"}},[e._v("Invalid z/OSMF host name in subject alternative names")])])]),e._v(" "),s("h4",{attrs:{id:"connection-refused"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connection-refused"}},[e._v("#")]),e._v(" Connection refused")]),e._v(" "),s("p",[e._v("In the following message, failure to connect to API Catalog occurs when connection is refused:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Connect to ABC12.slv.broadcom.net:1443 .ABC12.slv.broadcom.net/127.0.0.1. failed: EDC8128I Connection refused.; nested exception is org.apache.http.conn.HttpHostConnectException: \n")])])]),s("p",[e._v("The reason for the refused connection message is either invalid z/OSMF configuration or z/OSMF being unavailable. The preceding message indicates that z/OSMF is not on the 127.0.0.1:1443 interface.")]),e._v(" "),s("p",[s("strong",[e._v("Solution:")])]),e._v(" "),s("h4",{attrs:{id:"configure-z-osmf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-z-osmf"}},[e._v("#")]),e._v(" Configure z/OSMF")]),e._v(" "),s("p",[e._v("Make sure that z/OSMF is running and is on 127.0.0.1:1443 interface, and try to log in to API Catalog again. If you get the same error message, change z/OSMF configuration.")]),e._v(" "),s("p",[s("strong",[e._v("Follow these steps:")])]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Locate the z/OSMF PARMLIB member IZUPRMxx.")]),e._v(" "),s("p",[e._v("For example, locate IZUPRM00 member in SYS1.PARMLIB.")])]),e._v(" "),s("li",[s("p",[e._v("Change the current "),s("code",[e._v("HOSTNAME")]),e._v(" configuration to "),s("code",[e._v("HOSTNAME('*')")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Change the current "),s("code",[e._v("HTTP_SSL_PORT")]),e._v(" configuration to "),s("code",[e._v("HTTP_SSL_PORT('1443')")]),e._v(".")]),e._v(" "),s("p",[s("strong",[e._v("Important!")]),e._v(" If you change the port in the z/OSMF configuration file, all your applications lose connection to z/OSMF.")])])]),e._v(" "),s("p",[e._v("For more information, see "),s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua300/izuconfig_IZUPRMxx.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Syntax rules for IZUPRMxx"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("If changing the z/OSMF configuration does not fix the issue, reconfigure Zowe.")]),e._v(" "),s("p",[s("strong",[e._v("Follow these steps:")])]),e._v(" "),s("ol",[s("li",[e._v("Open "),s("code",[e._v(".zowe_profile")]),e._v(" in the home directory of the user who installed Zowe.")]),e._v(" "),s("li",[e._v("Modify the value of the "),s("code",[e._v("ZOWE_ZOSMF_PORT")]),e._v(" variable.")]),e._v(" "),s("li",[e._v("Reinstall Zowe.")])]),e._v(" "),s("h4",{attrs:{id:"missing-z-osmf-host-name-in-subject-alternative-names"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#missing-z-osmf-host-name-in-subject-alternative-names"}},[e._v("#")]),e._v(" Missing z/OSMF host name in subject alternative names")]),e._v(" "),s("p",[e._v("In following message, failure to connect to API Catalog is caused by a missing z/OSMF host name in the subject alternative names:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Certificate for <ABC12.slv.broadcom.net> doesn't match any of the subject alternative names: ..; nested exception is javax.net.ssl.SSLPeerUnverifiedException: Certificate for <ABC12.slv.broadcom.net> doesn't match any of the subject alternative names: ..\n")])])]),s("p",[s("strong",[e._v("Solutions:")])]),e._v(" "),s("p",[e._v("Fix the missing z/OSMF host name in subject alternative names using the following methods:")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" Apply the insecure fix only if you use API Catalog for testing purposes.")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#Secure-fix"}},[e._v("Secure fix")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#insecure-fix"}},[e._v("Insecure fix")])])]),e._v(" "),s("h4",{attrs:{id:"secure-fix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#secure-fix"}},[e._v("#")]),e._v(" Secure fix")]),e._v(" "),s("p",[s("strong",[e._v("Follow these steps:")])]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Obtain a valid certificate for z/OSMF and place it in the z/OSMF keyring. For more information, see "),s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua300/izuconfig_KeyringAndCertificate.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configure the z/OSMF Keyring and Certificate"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Navigate to "),s("code",[e._v("$ZOWE_RUNTIME/components/api-mediation")]),e._v(" and run the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("scripts/apiml_cm.sh --action trust-zosmf \n")])])]),s("p",[e._v("2a. (Optional) If you do not use the default z/OSMF userid (IZUSVR) and keyring (IZUKeyring.IZUDFLT), issue the following command:")]),e._v(" "),s("pre",[s("code",[e._v("scripts/apiml_cm.sh --action trust-zosmf--zosmf-userid **ZOSMF_USER** --zosmf-keyring **ZOSMF_KEYRING**\n")])]),e._v(" "),s("p",[e._v("where;")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("--zosmf-keyring")]),e._v(" and "),s("code",[e._v("--zosmf-userid")]),e._v(" - options that override the default userid and keyring accordingly.")])])])]),e._v(" "),s("h4",{attrs:{id:"insecure-fix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#insecure-fix"}},[e._v("#")]),e._v(" Insecure fix")]),e._v(" "),s("p",[s("strong",[e._v("Follow these steps:")])]),e._v(" "),s("ol",[s("li",[e._v("Set the value of the "),s("code",[e._v("VERIFY_CERTIFICATES")]),e._v(" property to "),s("code",[e._v("false")]),e._v(" in "),s("code",[e._v("$ZOWE_RUNTIME/scripts/internal/run-zowe.sh")]),e._v(" to disable verification of certificates in Zowe.")]),e._v(" "),s("li",[e._v("Reinstall Zowe.")])]),e._v(" "),s("h4",{attrs:{id:"invalid-z-osmf-host-name-in-subject-alternative-names"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#invalid-z-osmf-host-name-in-subject-alternative-names"}},[e._v("#")]),e._v(" Invalid z/OSMF host name in subject alternative names")]),e._v(" "),s("p",[e._v("In the following message, failure to connect to API Catalog is caused by an invalid z/OSMF host name in the subject alternative names:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Certificate for <ABC12.slv.broadcom.net> doesn't match any of the subject alternative names: [abc12.ca.com, abc12, localhost, abc12-slck, abc12-slck.ca.com, abc12-slck1, abc12-slck1.ca.com, abc12-slck2, abc12-slck2.ca.com, usilabc12, usilabc12.ca.com]; \nnested exception is javax.net.ssl.SSLPeerUnverifiedException: Certificate for <ABC12.slv.broadcom.net> doesn't match any of the subject alternative names: [abc12.ca.com, abc12, localhost, abc12-slck, abc12-slck.ca.com, abc12-slck1, abc12-slck1.ca.com, abc12-slck2, abc12-slck2.ca.com, usilabc12, usilabc12.ca.com]\n")])])]),s("p",[s("strong",[e._v("Solutions:")])]),e._v(" "),s("p",[e._v("Fix the invalid z/OSMF host name in the subject alternative names using the following methods:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#request-a-new-certificate"}},[e._v("Request a new certificate")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#change-the-zowe_explorer_host-variable"}},[e._v("Change the ZOWE_EXPLORER_HOST variable")])])]),e._v(" "),s("h4",{attrs:{id:"request-a-new-certificate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-a-new-certificate"}},[e._v("#")]),e._v(" Request a new certificate")]),e._v(" "),s("p",[e._v("Request a new certificate that contains a valid z/OSMF host name in the subject alternative names.")]),e._v(" "),s("h4",{attrs:{id:"change-the-zowe-explorer-host-variable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-the-zowe-explorer-host-variable"}},[e._v("#")]),e._v(" Change the ZOWE_EXPLORER_HOST variable")]),e._v(" "),s("p",[e._v("Change "),s("code",[e._v("ZOWE_EXPLORER_HOST")]),e._v(" variable to fix the issue.")]),e._v(" "),s("p",[s("strong",[e._v("Follow these steps:")])]),e._v(" "),s("ol",[s("li",[e._v("Open .zowe_profile in the home directory of the user who installed Zowe.")]),e._v(" "),s("li",[e._v("Change  "),s("code",[e._v("ZOWE_EXPLORER_HOST")]),e._v(" to a host name from the subject alternative names of the z/OSMF certificate. For example, issue the following command:"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("export ZOWE_EXPLORER_HOST=SAN (change this to the correct one > in the code block).\n")])])])]),e._v(" "),s("li",[e._v("Reinstall Zowe.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);
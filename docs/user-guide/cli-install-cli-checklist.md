# Installation checklist

To plan your Zowe CLI installation, review the following checklist.

This checklist summarizes the required steps for a base installation (first-time installation) in the order you should perform them. The checklist includes a brief description of the steps, with links to the comprehensive information required for the installation. The checklist also identifies the roles that are typically required to complete the step, which enables the pre-installation planning team (systems programmer, security administrator, and so on) to focus on the tasks for which they are responsible.

## Address the prerequisites

| Step        | Description | Role       | Status      |
| ----------- | ----------- | ---------- | ----------- |
| Review the Zowe CLI information roadmap | [Learn about how Zowe interacts with other Zowe components](../getting-started/user-roadmap-zowe-cli.md) | System administrator, security administrator | Complete, TBD, NA |
| Review the release notes| [Read about new features and enhancements included with this release of Zowe CLI](../getting-started/rlease-notes/v1.27.md) | System administrator, security administrator | Complete, TBD, NA || Review the Zowe CLI installation methods | [Determine the installation package to use to install CLI](cli-installcli.md) | System programmer, security administrator | Complete, TBD, NA |
| Address the requirements | [Install the client-side and host-side software, and ensure that there is sufficient free disk space](systemrequirements-cli.md) | System administrator | Complete, TBD, NA |
| (Optional) Install API Mediation Layer | [Install the Zowe Runtime, which includes API Mediation Layer](../user-guide/install-zos.md) | Complete, TBD, NA |
| Install z/OSMF | [Follow the steps to install z/OSMF](https://www.ibm.com/docs/en/zos/2.3.0?topic=configuration-setting-up-zosmf-first-time) | System programmer, system administrator, security administrator | Complete, TBD, NA |
| Determine the profile types that you want to use | [Learn about how to use team profiles](../user-guide/cli-using-configuring-global-profiles.md) | System programmer, system administrator, security administrator | Complete, TBD, NA |

You are now ready to install Zowe CLI!
## Install Zowe CLI

| Step        | Description | Role       | Status      |
| ----------- | ----------- | ---------- | ----------- |
| Install Zowe CLI | [Install Zowe CLI from an online registry or a local package](../user-guide/cli-installcli.md) | System programmer | Complete, TBD, NA |
| (Optional) Install Zowe CLI plug-ins| [Install Zowe CLI plug-ins from an online registry or a local package](cli-installplugins.md) | System programmer | Complete, TBD, NA |

You are now ready to configure Zowe CLI!
## Configure Zowe CLI

| Step        | Description | Role       | Status      |
| ----------- | ----------- | ---------- | ----------- |
| Configure Zowe profiles | Learn how to configure Zowe [team prifiles](../user-guide/cli-using-configuring-global-profiles.md) and [user profiles](../user-guide/cli-using-using-profiles.md) | System administrator, system programmer | Complete, TBD, NA |
| Configure daemon mode | [Learn how to configure Zowe CLI to run as persistent background process (daemon)](../user-guide/cli-using-daemon-mode.md) | System administrator, system programmer | Complete, TBD, NA |

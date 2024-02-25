---
slug: /software-engineering/software-deployment
id: software-deployment
title: Software Deployment
description: Software Deployment
---

**Main Source :**

- **[Software release life cycle - Wikipedia](https://en.wikipedia.org/wiki/Software_release_life_cycle)**
- **[Deployment environment - Wikipedia](https://en.wikipedia.org/wiki/Deployment_environment)**
- **[Software Deployment Process: A Complete Guide 2023 - Linkedin](https://www.linkedin.com/pulse/software-deployment-process-complete-guide-2023-newwavevn)**

A software is written in programming languages and goes through the [building process](/software-engineering/build-and-package-management#software-build), which turn the source code into executable program. **Software Deployment** is the process of releasing and installing software applications or updates onto target computer systems or devices.

Depending on the type of the software, different steps are involved during the installation. Installing a program on desktop with different OSes, web, mobile, or cloud server are all different.

### Release Lifecycle

There are several stages of releasing software :

- **Pre-alpha** : Early stage of development and the software is still being designed and built. It usually involves basic prototyping and proof of concept work, and the software may not have all planned features implemented.
- **Alpha** : The first phase of actual software development. Software is being tested, and it's in early testing phase. Some developers team or selected group of users are involved in the testing process. The testing approach is usually [white-box testing technique](/software-engineering/software-testing#box-approaches).
- **Beta** : A more advanced testing phase, tested by a larger group users. The beta testing process can be closed, where the testers are chosen group, while the open beta is typically open for anyone interested. The software may still have some issues, but it is generally more stable and closer to the final release compared to the alpha stage.
- **Release Candidate (RC)** : Release candidate is a version that could potentially become the final release. It is keep being tested and refined with user feedback.
- **Release to Manufacturing (RTM)** : A version of the software that is considered ready for production deployment. The software is being prepared for mass distribution or installation on customer systems.
- **General Availability (GA)** : Stage at which the software is officially released and made available to the public or the target audience.
- **Production** : Final stage in which software is already deployed and used in a live production environment. The software is being actively used by end-users or customers for its intended purpose.

### Feature Toggling

After the software is released to production, there is a technique, which is called **feature toggling** that allows developers to control the availability of specific features or functionality within the app.

One of the purpose of feature toggling is to gather feedback of new functionality from some subset of the user. This will help us gather feedback and potentially improve if there are issues.

Feature toggling can be implemented easily with conditional statement. We could have a variable, such as `enableLogging`, which will toggle the ability for the program to log. We will wrap the section of codes that setup for logging mechanism.

It could be like this :

```kotlin
fun main() {
    val enableLogging = false
    if (enableLogging) {
        val logger = Logger()
        val app = App(logger)
    } else {
        val app = App(null)
        // null object won't be used
    }
    // Use app, all the application logic here...
}
```

Another technique is **canary release**, which involves making separate app version for the enabled feature and the original version. Canary version is typically released to a small subset of users. By doing this, any issues or bugs with the new release can be identified and addressed before rolling it out to a wider audience.

### Deployment Environment

Deployment environment is a specific infrastructure or system where software are deployed and made available for use.

Some types of environment :

- **Development** : Environment used by developers during the development phase of the software. It typically mirrors the production environment to allow developers to test and debug the application. Development environments often have additional tools and configurations, such as ability to debug or log.
- **Testing/QA** : Environment for testing and quality assurance purposes. It is used to perform various types of testing, including functional testing, integration testing, performance testing, and user acceptance testing.
- **Staging or Model** : Pre-production environment that exactly resembles the production environment. It is used to validate the application's behavior and performance in a real environment, such as using a real remote server than [localhost](/computer-networking/server#localhost).
- **Production** : Live environment where the application is made available to end-users or customers. It is the environment in which the application operates on a daily basis and serves actual user traffic.

### Deployment Process

Several steps involved in the deployment process :

- **[Build](<(/software-engineering/build-and-package-management#software-build)>)** : As mentioned before, it is necessary to build the necessary artifact and packaging them into a deployable format.
- **Infrastructure Setup** : Set up the target deployment environment, including servers, networking, databases, etc. This step may involve provisioning virtual machines, configuring containers, or setting up cloud services to create the necessary infrastructure.
- **Configuration** : Configure the deployment environment with the required settings and parameters. This includes configuring environment-specific variables, connection strings, or API keys.
- **Deploy** : Perform the deployment by transferring the artifacts to the target environment. This can be done using file transfer protocols (uploading it) or [version control systems](/software-engineering/version-control). Deployment is done in specific strategy explained below.

#### Deployment Strategy

The process of deployment to production may require restart and downtime for users. An ideal strategy is to deploy it in **zero downtime**, which keep the application available and accessible to users throughout the deployment process. The deployment happens gradually, updating the application to a single instance (in the case of cloud server) or to a fraction of users first.

Other way to instantly update to all instance or all users is keeping two separate and identical environment. The technique is called **blue/green deployment**, where we maintain blue as the live environment, and the green as the new version or update environment. When updating the application, we will switch the traffic or update the DNS to redirect user traffic from the blue environment to the green environment.

### DevOps

DevOps is the set of practices that aims to bridge the gap between software development (Dev) and IT operations (Ops). Dev is typically associated with development or the making of software, while IT operations are associated with the management of infrastructure, deployment, and maintaining the environment.

One practice of DevOps involves automating the deployment process, ensuring that the developer writing code is not concerned with deployment and can instead focus on improving the application.

#### CI/CD

**Continuous improvement and continuous deployment (CI/CD)** is the process of continuously improving and deploying the software. It is the practice that is applied on DevOps to automate and streamline the software delivery pipeline. Many platform, such as GitHub Actions is used for CI/CD process.

- **Continuous Integration (CI)** : CI is a development practice that involves frequently integrating code changes from multiple developers into a shared repository. Developer can use [version control system](/software-engineering/version-control), such as Git to manage and track code changes. Whenever code changes are committed to the repository, an automated build process can be triggered to compile the code, run unit tests, and generate build artifacts.
- **Continuous Delivery (CD)** : CD focuses on automating the entire software release process up to the point of deployment. For example, GitHub Actions, specifically the GitHub Workflow, allows us to define a deployment pipeline. It is a stages and actions that will be executed whenever a particular event happened. For example, a common pipeline would be defining a task to build, test, package, and deploy the application whenever code is pushed to the main branch.

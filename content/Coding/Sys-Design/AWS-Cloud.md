---
created:
  - " 07-20-2026 19:09"
tags:
---


## Types:
### Compute
- *EC2* - AWS Elastic Compute Cloud
- *Lightsail* - Amazon Lightsail (**simplified VPS**)
- *Lambda* - Amazon Lambda (**serverless**)
- *Fargate* - Managed serverless computer for containers. For heavier duty tasks than lambda (no 15 min limit, and variable compute/memory)

#### Orchestrators - schedule containers
- *ECS* - Elastic Container Service (**Amazon k8s**)
- *EKS* - Elastic **Kubernetes** Service (specifically k8s)
### Storage
- *S3* - AWS Simple Storage Service (**files/blobs**, accessible over HTTP)
- *EBS* - Elastic Block Store  (**EC2 hard drive**)

### Database
- *RDS* - Amazon Relational Database Service. Managed relational databases (**SQL**)
- *DynamoDB* - managed **NoSQL**

### Networking
- *VPC* - Amazon Virtual Private Cloud. Private network within AWS. **Subnet**
- *Route 53* - DNS
- *CloudFront* - CDN

### Identity/Security
- *IAM* - Identity and Access Management - controls who/what can do what

### Messaging/Integration
- *SQS* - Amazon Simple Queue Service. **message queue**. Similar to: RabbitMQ, Azure Service Bus
- *SNS* - Amazon Simple Notification Service. **pub/sub**. Similar to: Azure Event Grid
- *SES* - transactional emails

### Monitoring
- *CloudWatch* - logging, metrics, alarms

### IAC (infra-as-code)
- *CloudFormation* - AWS native infrastructure-as-code (Terraform on AWS)

### Auth
- *Cognito* - user pools / identity
---
tags:
  - Atlassian/Schema
  - Business-Value
  - CRM-Link
schema: Products and Customers
source: CRM / Project Data
---
# 🏢 Products and Customers
> [!ABSTRACT] Scope
> This schema bridges the gap between IT infrastructure and business outcomes. It tracks the products the organization provides and the external or internal customers who consume them.
---
## 🏗️ Object Type Hierarchy
### 1. Market Offerings
- **Products**: The core items or services provided (e.g., "SaaS Platform," "Managed IT Services").
- **Product Versions**: Specific releases or tiers (e.g., "v2.0," "Enterprise Tier").
### 2. Client Registry
- **Customers**: The organizations or entities purchasing the products.
- **Points of Contact**: Key stakeholders at the customer organization.
- **Client Environments**: Dedicated instances or specific setups for a customer.
---
## 🛠️ Configuration & AQL Strategy
> [!TIP] Impact Analysis
> By linking Customers to their specific Environments, you can instantly see which VIP clients are affected when an AWS resource in the **Imported Assets** schema goes down.
> **AQL Goal:** `objectType = "Customers" AND "Environment"."Status" = "Incident"`
### 🔍 Business Impact Matrix

| Object | Key Attributes | Reference Target |
| :--- | :--- | :--- |
| **Product** | Product Lead, Roadmap Link | **People (Owner)** |
| **Customer** | SLA Tier, Contract Value | **Vendor & Licenses** |
| **Environment** | URL, Region, Support Level | **IT Assets (App)** |
| **Contact** | Role, Communication Prefs | **Customer (Org)** |

---
## 📋 Ongoing Tasks
- [ ] **CRM Sync**: Establish a one-way sync from the CRM to ensure **Customer** names and tiers are current.
- [ ] **SLA Mapping**: Define the relationship between **SLA Tiers** and the priority of linked Jira tickets.
- [ ] **Environment Audit**: Map every production instance in **IT Assets** to at least one **Product** or **Customer**.
- [ ] **VIP Alerts**: Configure automation to flag any ticket raised by a "Tier 1 Customer" contact.
---
## 🕸️ Relationship Topology
```mermaid
graph TD
    PC[Products]
    CU[Customers]
    CE[Client Environments]
    IA[IT Assets]
    VL[Vendor & Licenses]
    CE --> CU
    CE --> PC
    CE --> IA
    CU --> VL
    PC --> IA
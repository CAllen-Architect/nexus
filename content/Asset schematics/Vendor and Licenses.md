---
tags:
  - Atlassian/Schema
  - Procurement
  - Licensing
schema: Vendor and Licenses
source: Finance / Manual Entry
---
# 📜 Vendor and Licenses
> [!ABSTRACT] Scope
> This schema tracks the financial and contractual lifecycle of the IT stack. It bridges the gap between third-party entities, legal agreements, and the actual software seats assigned to users.
---
## 🏗️ Object Type Hierarchy
### 1. External Entities
- **Vendors**: The parent companies (e.g., Microsoft, Atlassian, Adobe).
- **Support Contacts**: Key account managers or technical support aliases.
### 2. Contracts & Legal
- **Contracts / MSAs**: The master agreements and legal documents.
- **Maintenance Agreements**: Specific support-only renewals.
### 3. Licensing (The "Seats")
- **License Keys**: Specific alphanumeric codes or activation files.
- **Subscriptions**: Cloud-based recurring seats (e.g., Jira Premium, M365 E5).
- **Entitlements**: The mapping of how many seats are "Owned" vs. "Deployed."
---
## 🛠️ Configuration & AQL Strategy
> [!TIP] Renewal Automation
> Use the **Date** attribute for `Expiration Date` to drive JSM automation.
> **AQL Example:** `objectType = "Subscriptions" AND "Expiration Date" < now("+30d")`
### 🔍 Financial Tracking Matrix

| Object | Key Attributes | Reference Target |
| :--- | :--- | :--- |
| **Vendor** | Website, Tier (Critical/Non) | N/A |
| **Contract** | Start/End Date, Value | **Vendor** |
| **License** | Quantity, SKU, Cost | **IT Assets (App)** |
| **Subscription** | Billing Cycle, Owner | **People (Manager)** |

---
## 📋 Ongoing Tasks
- [ ] **Contract Upload**: Migrate PDF copies of MSAs into the `Attachment` field of the **Contracts** object.
- [ ] **Seat Audit**: Run a comparison between "Licenses Owned" and "People Assigned" (via EntraID sync) to identify over-spend.
- [ ] **Renewal Calendar**: Create a Jira dashboard using AQL to show all contract expirations for the next 90 days.
- [ ] **Vendor Cleanup**: Consolidate duplicate vendor entries (e.g., "Amazon" vs "AWS") into a single Parent Vendor object.
---
## 🕸️ Relationship Topology
```mermaid
graph TD
    V[Vendors]
    C[Contracts]
    L[Licenses/Subscriptions]
    IA[IT Assets]
    P[People]
    C --> V
    L --> C
    L --> IA
    L --> P
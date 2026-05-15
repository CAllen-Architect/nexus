---
tags:
  - AI
  - Rovo
  - Copilot
  - Strategy
  - Enterprise-Architecture
status: Concept
publish: true
---
>[!ABSTRACT] Choose your Adventure.
>In our example we're using Copilot, but you could replace it with Gemini if you're using an all google stack for "The Executive Assistant" Layer.

# 🤖 Dual-AI System: Rovo + Copilot
> [!ABSTRACT] Executive Concept
> Integrating **Atlassian Rovo** and **Microsoft 365 Copilot** to create a unified intelligence layer. Rovo manages the "Internal Truth" (Jira/Assets), while Copilot manages the "Communication & Productivity" layer (M365).
---
## 🏗️ Operational Roles
### 1. Atlassian Rovo (The Librarian)
- **Domain**: Jira, Confluence, Assets, Slack/GitHub integrations.
- **Strength**: Understanding the **Teamwork Graph**. It knows *who* owns a server and *why* a ticket was closed in 2018.
- **Key Task**: Surfacing "Shadow Knowledge" trapped in 10 years of Assets technical debt.
### 2. M365 Copilot (The Executive Assistant)
- **Domain**: Outlook, Teams, Excel, Word.
- **Strength**: Synthesis of communication. It knows *what* was said in the morning meeting and *how* to draft the vendor email.
- **Key Task**: Drafting reports based on data exports and managing meeting follow-ups for the IT Implementation team.
---
## 🛠️ Configuration & AQL Strategy
> [!TIP] The Intelligence Bridge
> Use **Atlassian Rovo Agents** to fetch real-time Asset data and pipe it into **Copilot** via the Microsoft Graph Connectors. This allows Copilot to answer questions like "What is the budget impact of our expiring Microsoft licenses?" using data lived in Assets.
### 🔍 AI Responsibility Matrix

| Capability | Primary AI | Secondary AI | Data Source |
| :--- | :--- | :--- | :--- |
| **Asset Discovery** | Rovo | Copilot (via Sync) | Assets Schema |
| **Meeting Minutes** | Copilot | Rovo (via Action Items) | Teams / Outlook |
| **Technical Docs** | Rovo | Copilot | Confluence |
| **Project Status** | Rovo | Copilot | Jira |

---
## 📋 Ongoing Tasks
- [ ] **Connector Setup**: Explore the **Microsoft Graph Connector for Confluence** to let Copilot "read" your Rovo-curated docs.
- [ ] **Agent Design**: Build a Rovo Agent specifically for "Asset Debt Cleanup" to identify unlinked objects.
- [ ] **Security Review**: Ensure the **EntraID** permissions are tight, as both AIs will respect the permissions of the user.
- [ ] **Prompt Library**: Create a shared Obsidian note for "Dual-AI Prompts" that switch between the two systems.
---
## 🕸️ Relationship Topology
```mermaid
graph LR
    subgraph "Atlassian Intelligence (Rovo)"
    IA[IT Assets]
    C[Confluence]
    J[Jira]
    end
    subgraph "Microsoft Intelligence (Copilot)"
    T[Teams]
    O[Outlook]
    E[Excel]
    end
    R((Rovo)) ---|Teamwork Graph| IA
    R --- C
    R --- J
    CP((Copilot)) ---|Microsoft Graph| T
    CP --- O
    CP --- E
    R <-->|Graph Connectors| CP
    
    style R fill:#0052CC,color:#fff
    style CP fill:#00A4EF,color:#fff
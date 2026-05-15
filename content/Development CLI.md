---
tags:
  - DevEx
  - AI-CLI
  - Rovo-Dev
  - GitHub-Copilot
  - Claude-Code
status: Evaluation
---
# ⌨️ The AI CLI Frontier: Rovo Dev vs. Copilot vs. Claude
> [!ABSTRACT] Context
> Comparing the terminal-based AI agents. The goal is to determine which CLI best handles the "Digital Archaeology" of our 10+ year legacy codebase and Assets schema.
---
## 🏗️ The Contenders
### 1. Atlassian Rovo Dev (The Context King)
- **Primary Strength**: Deep integration with the **Teamwork Graph**.
- **CLI Power**: It can pull context from Jira tickets and Confluence specs directly into the terminal.
- **Killer Use Case**: "Rovo, refactor this module based on the architecture requirements in [Jira-123]."
### 2. GitHub Copilot CLI / Terminal (The Native)
- **Primary Strength**: Ubiquity within the GitHub/VS Code ecosystem.
- **CLI Power**: Focuses on shell command generation and localized code explanation.
- **Killer Use Case**: "How do I bulk-update these legacy AWS tags using the CLI?" (Microsoft's answer to Rovo's automation).
### 3. Claude Code (The Reasoning Engine)
- **Primary Strength**: High-logic reasoning and long-context window.
- **CLI Power**: Excellent for complex refactoring across multiple files.
- **Killer Use Case**: Analyzing 10 years of legacy C# or Python scripts to find security vulnerabilities.
---
## 🛠️ Configuration & AQL Strategy
> [!TIP] The "Triple-Threat" Workflow
> Use **Claude Code** for the heavy refactoring logic, **Rovo Dev** to ensure the changes match the Jira documentation, and **Copilot CLI** to handle the deployment and shell-level automation.
### 🔍 AI Developer Matrix

| Feature | Rovo Dev | GitHub Copilot | Claude Code |
| :--- | :--- | :--- | :--- |
| **Org Context** | High (Atlassian Stack) | Medium (Repo level) | Low (Context-dependent) |
| **CLI Speed** | Fast (Action-oriented) | Instant (Terminal-native) | Moderate (Thoughtful) |
| **Logic/Refactor** | Good | Moderate | **Superior** |
| **Jira/Docs Link** | **Native** | Via Extensions | Manual Paste |

---
## 📋 Ongoing Tasks
- [ ] **Beta Enrollment**: Ensure the IT Architecture team has access to the **Rovo Dev** early access program.
- [ ] **Benchmarking**: Run a trial refactoring a "Legacy Module" using all three tools to compare output quality.
- [ ] **Tool Rationalization**: Determine if we can consolidate to two tools to save on licensing (e.g., Rovo + Copilot).
- [ ] **Security Protocol**: Verify that Claude Code's terminal access respects our internal data governance policies.
---
## 🕸️ Relationship Topology
```mermaid
graph TD
    subgraph "Terminal / CLI"
    RC[Rovo Dev CLI]
    CC[Claude Code]
    GC[GitHub Copilot CLI]
    end
    subgraph "Knowledge Base"
    JS[Jira/Assets]
    GH[GitHub Repos]
    DOC[Confluence/Docs]
    end
    RC -->|Reads| JS
    RC -->|Reads| DOC
    GC -->|Writes| GH
    CC -->|Refactors| GH
    
    style RC fill:#0052CC,color:#fff
    style GC fill:#24292e,color:#fff
    style CC fill:#d97757,color:#fff
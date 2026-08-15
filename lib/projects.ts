import type { Project } from '@/types';

export const ALL_PROJECTS: Project[] = [
  // ── ML & AI ───────────────────────────────────────────────────────
  {
    id: 'propensity-scoring',
    title: 'Buyer Propensity Scoring System',
    area: 'ML & Predictive Analytics',
    domain: 'ML & AI',
    featured: true,
    githubUrl: 'https://github.com/sdrohit/buyer-propensity-scoring',
    shortDescription:
      'Built an end-to-end propensity scoring engine on a complex synthetic 185K-row multi-table B2B SaaS dataset. Random Forest selected over XGBoost and LightGBM on AUC-PR (0.444) for imbalanced targets. SHAP explainability surfaces that product breadth and integration depth are the strongest conversion drivers. Hot-tier accounts (top 25%) convert at 80.6% vs. 26.5% baseline — a 3× lift that directly reduces AE cost-per-deal.',
    tags: ['Python', 'Random Forest', 'SHAP', 'Scikit-learn', 'LightGBM', 'XGBoost'],
    detail: `## Buyer Propensity Scoring System

**Domain:** Enterprise B2B SaaS
**Objective:** Rank 3,500 trial accounts by conversion likelihood so sales teams can focus effort on the highest-value opportunities.

---

### Business Problem

SaaS Account Executives treating all trials with equal effort waste capacity on low-intent accounts. This model surfaces which trials deserve immediate, high-touch outreach — and which should go to self-serve nurture.

---

### Dataset

Synthetic multi-table CRM + product usage data designed to mirror real B2B SaaS complexity:

| Table | Rows | Description |
|---|---|---|
| accounts | 5,000 | Firmographics, plan, tier |
| contacts | 16,151 | Roles, seniority, LinkedIn status |
| interactions | 159,002 | Events, channels, intent signals |
| trials | 3,500 | Usage metrics, NPS, conversion label |
| deals | 2,213 | Pipeline stage, ARR, decision makers |

**Target:** \`converted\` (binary) — 26.5% base rate (intentionally imbalanced)
**Key design choice:** Structural missing values are predictive signals (NPS only exists post-trial; API calls only for activated accounts). Missing ≠ noise.

---

### Feature Engineering — 44 Features

- **Product engagement:** features_used_count, activation_rate, seats_utilisation, integrations_configured, api_calls_total
- **Interaction signals:** high_intent_events, interaction_density, multi_channel_reach
- **Relationship graph:** champion × economic buyer interaction term, linkedin_connected_pct
- **Structural missingness flags:** nps_missing, api_never_activated, revenue_band_missing
- **Firmographics:** employee_count, plan_type, account_tier, industry (label-encoded)

---

### Model Selection

Four models evaluated — 80/20 stratified split, random_state=42.
**Primary metric: AUC-PR** (not AUC-ROC) — correct choice for imbalanced targets.

| Model | AUC-ROC | AUC-PR |
|---|---|---|
| Logistic Regression | 0.667 | 0.409 |
| **Random Forest** | **0.673** | **0.444** ✓ |
| XGBoost | 0.632 | 0.388 |
| LightGBM | 0.646 | 0.398 |

Threshold optimised to **0.45** for sales prioritisation use case.

---

### SHAP Feature Importance

| Rank | Feature | Business Interpretation |
|---|---|---|
| #1 | features_used_count | Breadth of product adoption → stickiness |
| #2 | integrations_configured | Ecosystem lock-in → high switching cost |
| #3 | nps_score | Post-trial satisfaction predicts renewal intent |
| #4 | activation_rate | Team-wide rollout vs. lone champion trial |
| #5 | seats_utilisation | Depth of daily usage across licensed seats |

Beeswarm insight: High NPS has the widest positive SHAP spread; low NPS is the strongest negative veto signal.

---

### Tier Scoring — All 3,500 Accounts

| Tier | Accounts | Avg Score | Actual Conversion |
|---|---|---|---|
| 🔴 Hot | 876 (25%) | 74.4 | **80.6%** |
| 🟠 Warm | 1,225 (35%) | 49.6 | 14.3% |
| 🔵 Cold | 1,399 (40%) | 23.7 | 3.4% |

---

### Business Impact

- **3.0× lift** in conversion rate for Hot-tier vs. unscored baseline (26.5%)
- Top 25% of accounts capture **~72% of all conversions**
- Enables ~50% reduction in AE cost-per-closed-deal by eliminating cold volume
- Output (\`scored_buyers.csv\`) is directly ingestible into Salesforce / HubSpot / Outreach for automated sequencing`,
  },
  {
    id: 'churn-prediction',
    title: 'Churn Prediction & Survival Analysis',
    area: 'ML & Predictive Analytics',
    domain: 'ML & AI',
    featured: true,
    shortDescription:
      'Combined binary churn classification with Kaplan-Meier survival curves and Cox Proportional Hazards modelling to predict both who will churn and when — enabling proactive retention interventions timed to individual customer risk windows.',
    tags: ['Python', 'Survival Analysis', 'XGBoost', 'Scikit-learn', 'SHAP'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'pipeline-forecasting',
    title: 'Revenue Pipeline Forecasting Model',
    area: 'ML & Predictive Analytics',
    domain: 'ML & AI',
    shortDescription:
      'Replaced gut-feel quarterly commit calls with an ML-based pipeline forecast model, producing probabilistic revenue estimates by segment, rep, and product line — with confidence intervals that surface sandbagging and pipeline risk early.',
    tags: ['Python', 'XGBoost', 'Time Series', 'Scikit-learn', 'SQL'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'employee-attrition',
    title: 'Employee Attrition Prediction',
    area: 'ML & People Analytics',
    domain: 'ML & AI',
    shortDescription:
      'Identified drivers of voluntary employee attrition across 5,000 synthetic HR records using gradient boosting and SHAP — enabling People teams to target retention interventions on flight-risk segments before resignation.',
    tags: ['Python', 'Random Forest', 'SHAP', 'HR Analytics', 'Scikit-learn'],
    detail: '[Placeholder — full case study coming]',
  },

  // ── Marketing ──────────────────────────────────────────────────────
  {
    id: 'geo-lift',
    title: 'Geo-Lift Incrementality Testing Framework',
    area: 'Marketing Measurement Science',
    domain: 'Marketing',
    featured: true,
    shortDescription:
      'Designed a matched-market geo-lift testing system to measure the true incrementality of digital campaigns, moving attribution beyond last-click to causal measurement using synthetic control and permutation testing.',
    tags: ['Python', 'Causal Inference', 'Synthetic Control', 'Statistics'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'mta-engine',
    title: 'Multi-Touch Attribution Engine',
    area: 'Marketing Analytics',
    domain: 'Marketing',
    shortDescription:
      'Replaced last-touch attribution with a Shapley value + Markov chain MTA model, surfacing hidden upper-funnel touchpoint value across the full customer journey and re-allocating media budget toward highest-incrementality channels.',
    tags: ['SQL', 'Python', 'Shapley Values', 'Markov Chain'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'funnel-analysis',
    title: 'Customer Journey Funnel Analysis & Storytelling Report',
    area: 'Data Storytelling & BI',
    domain: 'Marketing',
    featured: true,
    shortDescription:
      'Built an end-to-end funnel analysis from anonymous to authenticated user journeys, packaged as a stakeholder-ready narrative report that directly informed product and marketing strategy.',
    tags: ['GA4', 'BigQuery', 'Python', 'Data Narrative'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'growth-analytics',
    title: 'Growth Analytics Initiative',
    area: 'Business Analytics & Strategy',
    domain: 'Marketing',
    shortDescription:
      'Decomposed ARR growth into acquisition, activation, expansion, and churn components using growth accounting — quantifying each lever and finding that activation-rate improvement had 3× the ARR impact of new logo acquisition.',
    tags: ['Python', 'SQL', 'BigQuery', 'Growth Accounting'],
    detail: '[Placeholder — full case study coming]',
  },

  // ── BI & Finance ───────────────────────────────────────────────────
  {
    id: 'cac-ltv',
    title: 'CAC / LTV & Unit Economics Analysis',
    area: 'Financial Analytics',
    domain: 'BI & Finance',
    featured: true,
    shortDescription:
      'Built a segment-level CAC/LTV model decomposing acquisition cost across channels and computing cohort-based LTV — surfacing which customer segments are structurally profitable and which are subsidised by blended averages.',
    tags: ['Python', 'SQL', 'Cohort Analysis', 'Financial Modelling'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'exec-dashboard',
    title: 'Executive Marketing Dashboard Ecosystem',
    area: 'Business Intelligence & Reporting',
    domain: 'BI & Finance',
    featured: true,
    shortDescription:
      'Designed and delivered a suite of executive-facing dashboards replacing weekly ad hoc reporting — enabling self-serve analytics adoption across marketing and sales leadership and reducing analyst ad hoc load by 60%.',
    tags: ['Power BI', 'DAX', 'GA4', 'SQL'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'self-serve-analytics',
    title: 'Self-Serve Analytics Adoption Framework',
    area: 'Data Strategy & Governance',
    domain: 'BI & Finance',
    shortDescription:
      'Designed and deployed a semantic data layer enabling non-technical stakeholders to answer 80% of recurring data questions without analyst involvement — built on dbt-modelled warehouse tables and a governed Looker instance.',
    tags: ['dbt', 'BigQuery', 'Looker', 'SQL', 'Data Governance'],
    detail: '[Placeholder — full case study coming]',
  },

  // ── Product ────────────────────────────────────────────────────────
  {
    id: 'plg-pql',
    title: 'Product-Led Growth & PQL Scoring',
    area: 'Product Analytics',
    domain: 'Product',
    shortDescription:
      'Built a Product Qualified Lead (PQL) scoring engine that identifies free-to-paid conversion signals from product usage telemetry — enabling sales to prioritise inbound product-led accounts before they request a demo.',
    tags: ['Python', 'SQL', 'Scikit-learn', 'Product Analytics'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'north-star',
    title: 'Feature Adoption & North Star Metric Framework',
    area: 'Product Analytics',
    domain: 'Product',
    shortDescription:
      'Designed a north star metric framework mapping feature adoption milestones to long-term retention outcomes — identifying the 3 product actions most predictive of 90-day retention and aligning the product org around a single measurable north star.',
    tags: ['Python', 'SQL', 'BigQuery', 'Product Analytics'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'cohort-retention',
    title: 'Cohort Retention Analysis',
    area: 'Product Analytics',
    domain: 'Product',
    shortDescription:
      'Built cohort retention curves segmented by acquisition channel, plan type, and onboarding flow — revealing that API-activated accounts retain 2.4× better than UI-only users at 12 months and directly informing the onboarding redesign.',
    tags: ['Python', 'SQL', 'Cohort Analysis', 'Matplotlib'],
    detail: '[Placeholder — full case study coming]',
  },

  // ── Sales ──────────────────────────────────────────────────────────
  {
    id: 'win-loss',
    title: 'Win/Loss Analysis Engine',
    area: 'Sales Analytics',
    domain: 'Sales',
    shortDescription:
      'Automated win/loss analysis across 2,000+ closed deals using deal metadata and CRM signals — surfacing competitive loss patterns and the account characteristics most predictive of beating top competitors in head-to-head evaluations.',
    tags: ['Python', 'SQL', 'NLP', 'Scikit-learn'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'sales-performance',
    title: 'Sales Rep Performance & Quota Analytics',
    area: 'Sales Analytics',
    domain: 'Sales',
    shortDescription:
      'Built a rep-level performance analytics system tracking quota attainment distribution, ramp curves, and activity-to-outcome ratios — enabling data-driven coaching prioritisation and bottom-up capacity planning for the sales org.',
    tags: ['SQL', 'Python', 'Power BI', 'Sales Operations'],
    detail: '[Placeholder — full case study coming]',
  },

  // ── Experimentation ────────────────────────────────────────────────
  {
    id: 'ab-testing',
    title: 'A/B Testing Framework & Statistical Power Analysis',
    area: 'Experimentation & Causal Inference',
    domain: 'Experimentation',
    featured: true,
    shortDescription:
      'Built a reusable experimentation framework with pre-experiment power calculation, sequential testing guardrails, and Bayesian updating — standardising how the organisation runs and interprets product and marketing experiments.',
    tags: ['Python', 'Statistics', 'Bayesian A/B', 'Power Analysis'],
    detail: '[Placeholder — full case study coming]',
  },

  // ── Customer ───────────────────────────────────────────────────────
  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation & ICP Analysis',
    area: 'Customer & Market Intelligence',
    domain: 'Customer',
    featured: true,
    shortDescription:
      'Applied RFM + behavioural clustering to segment 10,000+ customers into 6 actionable personas — defining the Ideal Customer Profile (ICP) that informed territory design, outbound targeting, and product roadmap prioritisation.',
    tags: ['Python', 'K-Means', 'SQL', 'Scikit-learn', 'RFM Analysis'],
    detail: '[Placeholder — full case study coming]',
  },
];

export const FEATURED_PROJECTS = ALL_PROJECTS.filter((p) => p.featured);

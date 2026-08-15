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
      'ML propensity scoring engine on 185K-row multi-table B2B SaaS data. Hot-tier accounts convert at 80.6% vs. 26.5% baseline — a 3× lift. SHAP-explained Random Forest, AUC-PR optimised.',
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
      'Kaplan-Meier + Cox PH survival analysis predicting who will churn and when — enabling retention interventions timed to individual risk windows.',
    tags: ['Python', 'Survival Analysis', 'XGBoost', 'Scikit-learn', 'SHAP'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'pipeline-forecasting',
    title: 'Revenue Pipeline Forecasting Model',
    area: 'ML & Predictive Analytics',
    domain: 'ML & AI',
    shortDescription:
      'ML pipeline forecast replacing gut-feel commit calls with probabilistic revenue estimates by segment, rep, and product line.',
    tags: ['Python', 'XGBoost', 'Time Series', 'Scikit-learn', 'SQL'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'employee-attrition',
    title: 'Employee Attrition Prediction',
    area: 'ML & People Analytics',
    domain: 'ML & AI',
    shortDescription:
      'SHAP-explained gradient boosting model identifying the drivers of voluntary attrition — targeting flight-risk employees before resignation.',
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
      'Matched-market incrementality framework using synthetic control and permutation testing — moving beyond last-click to true causal measurement.',
    tags: ['Python', 'Causal Inference', 'Synthetic Control', 'Statistics'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'mta-engine',
    title: 'Multi-Touch Attribution Engine',
    area: 'Marketing Analytics',
    domain: 'Marketing',
    shortDescription:
      'Shapley value + Markov chain MTA model surfacing hidden upper-funnel value and re-allocating budget toward highest-incrementality channels.',
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
      'End-to-end funnel from anonymous to authenticated journeys, packaged as a stakeholder narrative report that informed product and marketing strategy.',
    tags: ['GA4', 'BigQuery', 'Python', 'Data Narrative'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'growth-analytics',
    title: 'Growth Analytics Initiative',
    area: 'Business Analytics & Strategy',
    domain: 'Marketing',
    shortDescription:
      'ARR growth decomposed into acquisition, activation, expansion, and churn levers — finding activation improvement had 3× the impact of new logo acquisition.',
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
      'Segment-level CAC/LTV model surfacing which cohorts are structurally profitable vs. subsidised by blended averages.',
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
      'Executive dashboard suite replacing weekly ad hoc reporting — 60% reduction in analyst request volume, self-serve adoption across marketing and sales leadership.',
    tags: ['Power BI', 'DAX', 'GA4', 'SQL'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'self-serve-analytics',
    title: 'Self-Serve Analytics Adoption Framework',
    area: 'Data Strategy & Governance',
    domain: 'BI & Finance',
    shortDescription:
      'Semantic data layer on dbt + Looker enabling non-technical stakeholders to answer 80% of data questions without analyst involvement.',
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
      'PQL scoring engine identifying free-to-paid conversion signals from usage telemetry — enabling sales to prioritise product-led accounts before they request a demo.',
    tags: ['Python', 'SQL', 'Scikit-learn', 'Product Analytics'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'north-star',
    title: 'Feature Adoption & North Star Metric Framework',
    area: 'Product Analytics',
    domain: 'Product',
    shortDescription:
      'North star metric framework mapping feature adoption to 90-day retention — identifying the 3 product actions that matter most.',
    tags: ['Python', 'SQL', 'BigQuery', 'Product Analytics'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'cohort-retention',
    title: 'Cohort Retention Analysis',
    area: 'Product Analytics',
    domain: 'Product',
    shortDescription:
      'Cohort retention curves by channel, plan, and onboarding flow — API-activated accounts retain 2.4× better at 12 months.',
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
      'Automated win/loss analysis across 2,000+ deals — surfacing competitive loss patterns and the firmographic signals that predict beating top competitors.',
    tags: ['Python', 'SQL', 'NLP', 'Scikit-learn'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'sales-performance',
    title: 'Sales Rep Performance & Quota Analytics',
    area: 'Sales Analytics',
    domain: 'Sales',
    shortDescription:
      'Rep-level attainment distribution, ramp curves, and activity ratios — enabling data-driven coaching and bottom-up capacity planning.',
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
      'Reusable A/B testing framework with power calculation, sequential testing guardrails, and Bayesian updating — standardising experiment design and interpretation.',
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
      'RFM + behavioural clustering across 10,000+ customers into 6 personas — defining the ICP that shaped territory design, outbound targeting, and roadmap priority.',
    tags: ['Python', 'K-Means', 'SQL', 'Scikit-learn', 'RFM Analysis'],
    detail: '[Placeholder — full case study coming]',
  },
];

export const FEATURED_PROJECTS = ALL_PROJECTS.filter((p) => p.featured);

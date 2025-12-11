import migrationDynamicsIcon from "../assets/logos/Dynamics365_scalable.svg";
import upgradeIcon from "../assets/logos/Dynamics365_scalable.svg";
import archiveIcon from "../assets/logos/Dynamics365_scalable.svg";
import timesheetIcon from "../assets/logos/powerapp.png";
import fixedAssetsIcon from "../assets/logos/powerapp.png";
import azureDevOpsIcon from "../assets/logos/icons8-azure-48.png";
// import migrationDynamicsIcon from "../assets/logos/Dynamics365_scalable.svg";

export const productsData = {
  "d365-data-migration": {
    title: "Microsoft Dynamics 365 Data Migration Solution",
    sidebarActive: "Microsoft Dynamics 365 Data Migration Solution",
    heroImage: migrationDynamicsIcon,
    category: "Data Migration",

    blocks: [
      // HERO
      {
        type: "hero",
        heading: "Microsoft Dynamics 365 Data Migration Solution",
        subheading:
          "De-risk your Dynamics 365 transformation with predictable, automated, end-to-end migration.",
        button: "Migrate With Confidence",
        link: "/contact",
      },

      // SECTION 1
      {
        type: "section-title",
        title: "The Future of Migration Is Predictable",
      },
      {
        type: "paragraph",
        text: "Turn your Dynamics 365 migration into a controlled, repeatable, low-risk process. Every major digital initiative depends on clean, reliable, and well-governed data. For organizations moving to Dynamics 365, the largest barrier is not the platform—but the uncertainty of data migration.",
      },
      {
        type: "paragraph",
        text: "Our automated migration engine removes uncertainty and provides the one thing leaders rarely get during transformation: confidence.",
      },
      {
        type: "highlight",
        bg: "#00255d",
        textColor: "#ffffff",
        text: "Key Promise: A proven, automated, multi-cycle migration process that keeps your business running smoothly while you modernize.",
      },

      // SECTION 2
      {
        type: "section-title",
        title: "The Real Business Risk Behind Migration",
      },
      {
        type: "paragraph",
        text: "What’s at stake isn’t just data—it’s operational continuity. Business leaders face significant challenges during digital transformation:",
      },
      {
        type: "bullets",
        items: [
          "Multi-entity, multi-phase D365 deployments",
          "Multiple legacy systems with inconsistent data",
          "Evolving business requirements",
          "Hidden data quality issues",
          "Overrun timelines and budget pressures",
          "38% of all migrations exceed cost or schedule due to ad-hoc methods",
        ],
      },
      {
        type: "paragraph",
        text: "Your business shouldn’t be one of them. We turn your highest-risk migration phase into your most controlled one.",
      },

      // SECTION 3
      {
        type: "section-title",
        title: "A Predictable Migration Engine Built for Enterprise Leaders",
      },
      {
        type: "paragraph",
        text: "Engineered to give executives what they need—control, transparency, and reliable outcomes.",
      },
      {
        type: "paragraph",
        text: "Core Capabilities",
      },
      {
        type: "tiles",
        tiles: [
          {
            icon: "FiArrowRight",
            title: "Automated Data Extraction, Transformation & Mapping",
            description:
              "Seamlessly extract, transform, and map data across systems with zero manual intervention.",
          },
          {
            icon: "BiCheckCircle",
            title: "Continuous Validation & Error Detection",
            description:
              "Real-time validation ensures data integrity at every step of the migration process.",
          },
          {
            icon: "MdOutlineRestartAlt",
            title: "Rollback & Recovery Safeguards",
            description:
              "Business protection through comprehensive rollback and recovery mechanisms for peace of mind.",
          },
          {
            icon: "MdOutlineDashboard",
            title: "Real-Time Dashboards & Leadership Visibility",
            description:
              "Full transparency with executive dashboards providing real-time migration insights.",
          },
          {
            icon: "FiDatabase",
            title: "Support for Complex Data Models",
            description:
              "Handle multi-entity structures, hierarchies, and complex data models effortlessly.",
          },
          {
            icon: "FiLink",
            title: "Legacy System Integration",
            description:
              "Seamless integration with existing legacy systems for smooth transitions.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "A single migration engine powering every cycle—repeatable, measurable, reliable.",
      },

      // SECTION 4
      {
        type: "section-title",
        title: "The Business Impact",
      },
      {
        type: "bullets",
        items: [
          "Reduced risk and minimized business disruption",
          "Shorter timelines and faster realization of D365 value",
          "Lower migration cost through automation and repeatability",
          "Improved accuracy and higher-quality reporting",
          "Scalability for enterprise, global, or high-volume scenarios",
        ],
      },

      // SECTION 5
      {
        type: "section-title",
        title: "How the Journey Works",
      },
      {
        type: "paragraph",
        text: "A clean, visual roadmap for your leadership team.",
      },
      {
        type: "journey",
        phases: [
          {
            title: "Assessment & Planning",
            description: "Define scope, entities, systems, and readiness",
          },
          {
            title: "Data Extraction & Mapping",
            description: "Align your legacy data with D365 data models",
          },
          {
            title: "Automated Validation & Testing",
            description: "Automated checks ensure accuracy early",
          },
          {
            title: "Complete Migration Execution",
            description:
              "End-to-end automated deployment with rollback protection",
          },
          {
            title: "Post-Migration Support",
            description:
              "Stabilization, verification, and transition guidance after go-live",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Clear phases. Clear progress. Clear outcomes.",
      },

      // SECTION 6
      {
        type: "section-title",
        title: "The LGSTech Difference",
      },
      {
        type: "paragraph",
        text: "Where others rely on manual methods, we rely on proven methodology and automation.",
      },
      {
        type: "features",
        columns: [
          {
            icon: "FiCompass",
            title: "BIDM Methodology",
            subtitle: "Business Integrated Data Migration",
            description:
              "A proprietary, proven framework that aligns migration work with real business processes—not just technical fields.",
          },
          {
            icon: "FiUsers",
            title: "Expert Migration Specialists",
            subtitle: "Experienced Professionals",
            description:
              "Our teams are experienced professionals trained specifically in complex D365 migrations, ensuring continuity and quality from start to finish.",
          },
          {
            icon: "FiRocket",
            title: "DM REVOLVE",
            subtitle: "Automated Execution Platform",
            description:
              "Purpose-built to operationalize our methodology, DM REVOLVE runs your migration end-to-end and even nightly, providing repeatable cycles, continuous improvement, and predictable go-live confidence.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Together, these three pillars create a scalable migration system designed for enterprise reliability.",
      },

      // CTA BLOCK
      {
        type: "cta",
        text: "Ready to Migrate with Confidence?",
        button: "Unlock the Migration Engine",
        link: "/contact",
      },
    ],
  },

  "AX2012-upgrade": {
  title: "AX2012 to Dynamics 365 Upgrade Solution",
  sidebarActive: "AX2012 to Dynamics 365 Upgrade Solution",
  heroImage: upgradeIcon,
  category: "Data Migration",

  blocks: [
    // HERO
    {
      type: "hero",
      heading: "Modernize AX2012 with a Confident Move to Dynamics 365",
      subheading: "Unlock performance, security, and scalability in one move.",
      button: "Start Your Upgrade Journey",
      link: "/contact"
    },

    // SECTION 1
    {
      type: "section-title",
      title: "Why Move from AX2012 to Dynamics 365"
    },
    {
      type: "paragraph",
      text: "Upgrading from AX2012 is more than a version change—it’s a strategic step that strengthens security, boosts performance, and unlocks modern cloud capabilities to help your business grow."
    },

    {
  type: "tiles",
  tiles: [
    {
      icon: "FiShield",
      title: "Stronger Security & Continuous Updates",
      description:
        "AX2012 is unsupported, increasing security and operational risks. Dynamics 365 delivers ongoing updates, enterprise-grade security, and compliance support. Eliminates dependency on manual patches and outdated infrastructure."
    },
    {
      icon: "FiCloud",
      title: "Cloud Scalability & Anywhere Access",
      description:
        "Scale infrastructure on demand—no hardware required. Access applications from any device, browser, or location. Remove the burden of managing backups, servers, and disaster recovery."
    },
    {
      icon: "FiBarChart2",
      title: "Modern Experience & Better Business Insights",
      description:
        "Faster, cleaner interface designed for efficiency and productivity. Built-in analytics, improved financial and compliance capabilities, and reduced reliance on heavy customizations. Supports better decision-making and collaboration across departments."
    },
    {
      icon: "FiDollarSign",
      title: "Lower Total Cost of Ownership",
      description:
        "Replaces costly hardware and maintenance with predictable subscription pricing. Reduces IT overhead and long-term infrastructure investments."
    },
    {
      icon: "FiTrendingUp",
      title: "Future-Proof ERP Foundation",
      description:
        "Continuous enhancements, AI-driven insights, and automation tools allow Dynamics 365 to evolve with your organization. Deep integration with the Microsoft ecosystem enables innovation and long-term scalability."
    }
  ]
},


    // SECTION 2
    {
      type: "section-title",
      title: "Our Proven Upgrade Process"
    },
    {
      type: "paragraph",
      text: "Leveraging years of hands-on experience, we guide your organization through a structured, predictable, and low-risk upgrade journey. Every step is designed to minimize disruption, ensure accuracy, and maximize the value of your new Dynamics 365 environment."
    },

    // Steps in Order
    {
  type: "timelineAlternate",
  stages: [
    {
      number: 1,
      icon: "FiClipboard",
      title: "Assessment & Planning",
      description:
        "Review AX2012 environment: customizations, integrations, data, and third-party add-ons. Define what will be migrated, modernized, or retired. Develop a detailed project plan covering timelines, risks, and cutover strategy."
    },
    {
      number: 2,
      icon: "FiSettings",
      title: "Environment Preparation",
      description:
        "Provision Dynamics 365 sandboxes. Clean, organize, and validate source data. Refactor legacy customizations for cloud compatibility."
    },
    {
      number: 3,
      icon: "FiRefreshCcw",
      title: "Migration & Upgrade",
      description:
        "Convert existing code and migrate master/transactional data. Validate accuracy through structured data checks. Conduct functional, integration, and user-acceptance testing."
    },
    {
      number: 4,
      icon: "FiPlayCircle",
      title: "Cutover & Go-Live",
      description:
        "Execute a mock cutover to fine-tune timing and reduce risks. Migrate final data, switch users, and validate business processes."
    },
    {
      number: 5,
      icon: "FiTrendingUp",
      title: "Post-Upgrade Support",
      description:
        "Provide hypercare, performance monitoring, and user training. Continuous optimization ensures smooth operations and future scalability."
    }
  ]
}
,

    // SECTION 3 — Partner of Choice
    {
      type: "section-title",
      title: "What Makes Us the Upgrade Partner of Choice"
    },
    {
      type: "paragraph",
      text: "Upgrading from AX2012 demands technical mastery, strategic foresight, and a partner who understands your business inside out. With years of proven experience, we deliver reliable, efficient, and enterprise-grade Dynamics 365 outcomes—ensuring your upgrade is smooth, predictable, and positioned for long-term success."
    },

    {
  type: "tiles-bullet",
  tiles: [
    {
      title: "Seamless Data & Configuration Migration",
      bullets: [
        "Every data entity, configuration, and business rule is migrated accurately and efficiently.",
        "Structured validation cycles minimize errors, reduce rework, and ensure readiness from day one."
      ]
    },
    {
      title: "Expert Custom Code Modernization",
      bullets: [
        "Analyze, refactor, and modernize AX2012 customizations using Dynamics 365 best practices.",
        "Reduce technical debt, improve system performance, and ensure long-term maintainability."
      ]
    },
    {
      title: "Performance-Driven Upgrade",
      bullets: [
        "Optimize environments, integrations, and workloads for faster, smoother operations.",
        "Minimize downtime and maximize business continuity throughout the transition."
      ]
    },
    {
      title: "Change Management & User Enablement",
      bullets: [
        "Role-based training and hands-on guidance boost adoption and team confidence.",
        "Ensure employees fully leverage Dynamics 365 capabilities from day one."
      ]
    },
    {
      title: "Post-Upgrade Hypercare & Continuous Optimization",
      bullets: [
        "Continuous monitoring, issue resolution, and ongoing system improvements.",
        "Keep Dynamics 365 evolving with your business, delivering long-term value beyond go-live."
      ]
    }
  ]
}
,

    // SECTION 4 — Benefits
    {
      type: "section-title",
      title: "Business Benefits We Promise"
    },
    {
      type: "bullets",
      items: [
        "Minimized Business Disruption through controlled multi-cycle upgrade methodology.",
        "Enhanced Security & Compliance with ongoing updates and enterprise security.",
        "Operational Efficiency & Scalable Performance with streamlined cloud processes.",
        "Future-Proof ERP Foundation powered by AI, automation, and Microsoft ecosystem integration.",
        "Predictable, Expert-Guided Upgrade with low-risk, iterative execution.",
        "Enterprise-Grade Risk Management & Leadership Visibility with dashboards and milestone reporting."
      ]
    },

    // CTA
    {
  type: "cta",
  text: "Transform AX2012 Into a Modern Dynamics 365 Platform",
  description:
    "Your upgrade shouldn’t be a leap of faith—it's a controlled, confident step forward. Partner with experts who deliver accuracy, performance, and long-term success.",
  button: "Upgrade to Dynamics 365 Today",
  link: "/contact"
}

  ]
},

  "Legacy-application": {
    title: "Legacy Application to Fabric Data Archive Solution",
    sidebarActive: "Legacy Application to Fabric Data Archive Solution",
    heroImage: archiveIcon,
    category: "Data Migration",
    blocks: [
      {
        type: "hero",
        heading: "Legacy Application to Fabric Data Archive Solution",
        subheading:
          "Archive legacy datasets into Microsoft Fabric with compression & searchable retention.",
        button: "Learn More",
        link: "/Legacy-application",
      },
      {
        type: "section-title",
        title: "Overview",
      },
      {
        type: "paragraph",
        text: "Efficiently archive your legacy application data into Microsoft Fabric, leveraging compression and searchable retention for long-term storage and compliance.",
      },
      {
        type: "section-title",
        title: "Key Features",
      },
      {
        type: "bullets",
        items: [
          "Data compression and deduplication",
          "Searchable and indexed archives",
          "Compliance with retention policies",
          "Integration with Fabric ecosystem",
          "Automated archiving workflows",
        ],
      },
      {
        type: "section-title",
        title: "Benefits",
      },
      {
        type: "bullets",
        items: [
          "Reduced storage costs",
          "Improved data accessibility",
          "Regulatory compliance assurance",
          "Enhanced data lifecycle management",
          "Scalable cloud-based archiving",
        ],
      },
      {
        type: "section-title",
        title: "How It Works",
      },
      {
        type: "steps",
        steps: [
          "Data assessment and classification",
          "Archive strategy development",
          "Migration and compression",
          "Indexing and search setup",
          "Monitoring and maintenance",
        ],
      },
      {
        type: "highlight",
        bg: "#00255d",
        textColor: "#ffffff",
        text: "Secure and efficient archiving for your legacy data with Microsoft Fabric.",
      },
      {
        type: "cta",
        text: "Archive Your Data Now",
        button: "Contact Us",
        link: "/contact",
      },
    ],
  },
  "NAXT2012-to-NAXT365": {
    title: "NAXT 2012 to NAXT365 Upgrade Solution",
    sidebarActive: "NAXT 2012 to NAXT365 Upgrade Solution",
    heroImage: migrationDynamicsIcon,
    category: "Data Migration",
    blocks: [
      {
        type: "hero",
        heading: "NAXT 2012 to NAXT365 Upgrade Solution",
        subheading:
          "Built on Dynamics 365; unified DMS solution for rental, sales, service, and finance.",
        button: "Learn More",
        link: "/NAXT2012-to-NAXT365",
      },
      {
        type: "section-title",
        title: "Overview",
      },
      {
        type: "paragraph",
        text: "Upgrade your NAXT 2012 system to NAXT365, a unified Document Management Solution (DMS) built on Dynamics 365, covering rental, sales, service, and finance operations.",
      },
      {
        type: "section-title",
        title: "Key Features",
      },
      {
        type: "bullets",
        items: [
          "Unified document management",
          "Integration with Dynamics 365",
          "Multi-industry support (rental, sales, service, finance)",
          "Automated workflows",
          "Enhanced security and compliance",
        ],
      },
      {
        type: "section-title",
        title: "Benefits",
      },
      {
        type: "bullets",
        items: [
          "Streamlined operations across departments",
          "Improved document accessibility",
          "Cost savings through automation",
          "Better decision-making with integrated data",
          "Future-ready with cloud capabilities",
        ],
      },
      {
        type: "section-title",
        title: "How It Works",
      },
      {
        type: "steps",
        steps: [
          "System assessment and requirements gathering",
          "Data migration and configuration",
          "Workflow setup and testing",
          "User training and deployment",
          "Post-upgrade support and optimization",
        ],
      },
      {
        type: "highlight",
        bg: "#00255d",
        textColor: "#ffffff",
        text: "Elevate your DMS with NAXT365 on Dynamics 365.",
      },
      {
        type: "cta",
        text: "Upgrade to NAXT365",
        button: "Contact Us",
        link: "/contact",
      },
    ],
  },
  "timesheeet-management": {
    title: "Timesheet Management Solution",
    sidebarActive: "Timesheet Management Solution",
    heroImage: timesheetIcon,
    category: "Power Apps Solutions",
    blocks: [
      {
        type: "hero",
        heading: "Timesheet Management Solution",
        subheading:
          "Track time, auto-approve workflows, integrate with billing effortlessly.",
        button: "Learn More",
        link: "/timesheeet-management",
      },
      {
        type: "section-title",
        title: "Overview",
      },
      {
        type: "paragraph",
        text: "Manage timesheets efficiently with automated tracking, approval workflows, and seamless integration with billing systems using Power Apps.",
      },
      {
        type: "section-title",
        title: "Key Features",
      },
      {
        type: "bullets",
        items: [
          "Automated time tracking",
          "Configurable approval workflows",
          "Billing system integration",
          "Mobile-friendly interface",
          "Reporting and analytics",
        ],
      },
      {
        type: "section-title",
        title: "Benefits",
      },
      {
        type: "bullets",
        items: [
          "Increased productivity and accuracy",
          "Reduced administrative overhead",
          "Faster billing cycles",
          "Better project profitability insights",
          "Compliance with time-tracking standards",
        ],
      },
      {
        type: "section-title",
        title: "How It Works",
      },
      {
        type: "steps",
        steps: [
          "Setup and configuration",
          "User training and adoption",
          "Workflow automation",
          "Integration with billing",
          "Monitoring and adjustments",
        ],
      },
      {
        type: "highlight",
        bg: "#00255d",
        textColor: "#ffffff",
        text: "Streamline your time management with our Power Apps solution.",
      },
      {
        type: "cta",
        text: "Implement Timesheet Management",
        button: "Contact Us",
        link: "/contact",
      },
    ],
  },
  "fixed-assests-stock": {
    title: "Fixed Assets Stocktake Solution",
    sidebarActive: "Fixed Assets Stocktake Solution",
    heroImage: fixedAssetsIcon,
    category: "Power Apps Solutions",
    blocks: [
      {
        type: "hero",
        heading: "Fixed Assets Stocktake Solution",
        subheading:
          "Audit & reconcile fixed assets using mobile-based inventory checks.",
        button: "Learn More",
        link: "/fixed-assests-stock",
      },
      {
        type: "section-title",
        title: "Overview",
      },
      {
        type: "paragraph",
        text: "Conduct efficient fixed asset audits and reconciliations with our mobile-based solution, ensuring accurate inventory management.",
      },
      {
        type: "section-title",
        title: "Key Features",
      },
      {
        type: "bullets",
        items: [
          "Mobile inventory scanning",
          "Real-time reconciliation",
          "Barcode and RFID support",
          "Automated reporting",
          "Integration with asset management systems",
        ],
      },
      {
        type: "section-title",
        title: "Benefits",
      },
      {
        type: "bullets",
        items: [
          "Faster and more accurate audits",
          "Reduced manual errors",
          "Cost savings on physical inventories",
          "Improved asset visibility",
          "Compliance with accounting standards",
        ],
      },
      {
        type: "section-title",
        title: "How It Works",
      },
      {
        type: "steps",
        steps: [
          "Asset registration and setup",
          "Mobile app deployment",
          "Field auditing and scanning",
          "Data reconciliation and reporting",
          "Continuous monitoring",
        ],
      },
      {
        type: "highlight",
        bg: "#00255d",
        textColor: "#ffffff",
        text: "Revolutionize your fixed asset management with mobile technology.",
      },
      {
        type: "cta",
        text: "Start Your Asset Audit",
        button: "Contact Us",
        link: "/contact",
      },
    ],
  },
  "Azure-devops-project-management": {
    title: "Azure DevOps Toolkit for D365 Project Management",
    sidebarActive: "Azure DevOps Toolkit for D365 Project Management",
    heroImage: azureDevOpsIcon,
    category: "Azure DevOps Solutions",
    blocks: [
      {
        type: "hero",
        heading: "Azure DevOps Toolkit for D365 Project Management",
        subheading:
          "Integrated pipelines, governance & release orchestration built for Dynamics 365.",
        button: "Learn More",
        link: "/Azure-devops-project-management",
      },
      {
        type: "section-title",
        title: "Overview",
      },
      {
        type: "paragraph",
        text: "Enhance Dynamics 365 project management with our Azure DevOps Toolkit, featuring integrated pipelines, governance, and release orchestration.",
      },
      {
        type: "section-title",
        title: "Key Features",
      },
      {
        type: "bullets",
        items: [
          "CI/CD pipelines for Dynamics 365",
          "Automated testing and deployment",
          "Governance and compliance tools",
          "Release orchestration",
          "Integration with Azure services",
        ],
      },
      {
        type: "section-title",
        title: "Benefits",
      },
      {
        type: "bullets",
        items: [
          "Accelerated development cycles",
          "Improved code quality and reliability",
          "Enhanced collaboration",
          "Reduced deployment risks",
          "Scalable project management",
        ],
      },
      {
        type: "section-title",
        title: "How It Works",
      },
      {
        type: "steps",
        steps: [
          "Toolkit setup and configuration",
          "Pipeline creation and integration",
          "Governance policy implementation",
          "Release planning and execution",
          "Monitoring and optimization",
        ],
      },
      {
        type: "highlight",
        bg: "#00255d",
        textColor: "#ffffff",
        text: "Power your Dynamics 365 projects with Azure DevOps excellence.",
      },
      {
        type: "cta",
        text: "Adopt Azure DevOps Toolkit",
        button: "Contact Us",
        link: "/contact",
      },
    ],
  },
};

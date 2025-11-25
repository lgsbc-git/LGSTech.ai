import migrationDynamicsIcon from "../assets/logos/Dynamics365_scalable.svg";
import upgradeIcon from "../assets/logos/Dynamics365_scalable.svg";
import archiveIcon from "../assets/logos/Dynamics365_scalable.svg";
import timesheetIcon from "../assets/logos/powerapp.png";
import fixedAssetsIcon from "../assets/logos/powerapp.png";
import azureDevOpsIcon from "../assets/logos/icons8-azure-48.png";

export const products = [
  {
    category: "Data Migration",
    items: [
      {
        name: "Microsoft Dynamics 365 Data Migration Solution",
        logo: migrationDynamicsIcon,
        desc: "End-to-end migration to Dynamics 365 with validation, rollback and automation.",
        route: "/d365-data-migration-product",
      },
      {
        name: "AX2012 to Dynamics 365 Upgrade Solution",
        logo: upgradeIcon,
        desc: "Smooth upgrade path from AX2012 to Dynamics 365 with quality and minimal downtime.",
        route: "/AX2012-upgrade-product",
      },
      {
        name: "Legacy Application to Fabric Data Archive Solution",
        logo: archiveIcon,
        desc: "Archive legacy datasets into Microsoft Fabric with compression & searchable retention.",
        route: "/Legacy-application-product",
      },
      {
        name: "NAXT 2012 to NAXT365 Upgrade Solution",
        logo: migrationDynamicsIcon,
        desc: "Built on Dynamics 365; unified DMS solution for rental, sales, service, and finance.",
        route: "/NAXT2012-to-NAXT365-product",
      },
    ],
  },

  {
    category: "PowerApp",
    items: [
      {
        name: "Timesheet Management Solution",
        logo: timesheetIcon,
        desc: "Track time, auto-approve workflows, integrate with billing effortlessly.",
        route: "/timesheeet-management-product",
      },
      {
        name: "Fixed Assets Stocktake Solution",
        logo: fixedAssetsIcon,
        desc: "Audit & reconcile fixed assets using mobile-based inventory checks.",
        route: "/fixed-assests-stock-product",
      },
    ],
  },

  {
    category: "Project Management",
    items: [
      {
        name: "Azure DevOps Toolkit for D365 Project Management",
        logo: azureDevOpsIcon,
        desc: "Integrated pipelines, governance & release orchestration built for Dynamics 365.",
        route: "/Azure-devops-project-management-product",
      },
    ],
  },
];

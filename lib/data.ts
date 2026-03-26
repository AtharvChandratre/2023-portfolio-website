import React from "react";
import {AiOutlineAmazon} from "react-icons/ai";
import { SiGoldmansachs } from "react-icons/si";
import { SiDoordash } from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Teaching",
    hash: "#teaching",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const teachingData = [
  {
    title: "Intro to Computer Science",
    subtitle: "CS 124: University of Illinois",
    description: "Teaching Assistant for CS 124: Introduction to Computer Science at the University of Illinois. Was a TA for four semesters.",
    dates: "Aug 2022 - May 2024"
  },
  {
    title: "Basics of Blockchain",
    subtitle: "Course Instructor at BlueLearn",
    description: "Designed and taught the Basics of Blockchain course two times to over 60 students across India.",
    youtube: "https://www.youtube.com/playlist?list=PL0SgGcCGLo6pGoegbBISsUQUF3khP4Nme&themeRefresh=1",
    dates: "May 2021 - Jun 2021"
  },
  {
    title: "Basics of Blockchain",
    subtitle: "Course Instructor at BlueLearn",
    description: "Had the highest student retention of any course on the platform and received overwhelmingly positive student feedback both times.",
    youtube: "https://www.youtube.com/playlist?list=PL0SgGcCGLo6qRVo49RBAe-2J67U3tOyzd",
    dates: "Mar 2021 - Apr 2021"
  },
  {
    title: "Intro to Blockchain",
    subtitle: "Course Instructor, BITS Pilani Goa",
    description: "Designed and taught this course twice to over 50 students. Demonstrated the highest student retention of any course in CTE, 2019. ",
    dates: "Aug 2020 - Dec 2020",
    certificate: "https://drive.google.com/file/d/1PZehNyd4FtUJeQJnWShGuLNiNz7QWPbN/view"
  },
  {
    title: "Intro to Blockchain",
    subtitle: "Course Instructor, BITS Pilani Goa",
    description: "Designed the course to teach concepts about blockchains, like Basic Cryptography, Merkle Trees, how Bitcoin works under the hood, Consesus Mechanisms and Smart Contracts.",
    dates: "Aug 2019 - Dec 2019",
    certificate: "https://drive.google.com/file/d/1pft_K3O1kvWzM0cpwz632Kb1r1qCenR_/view"
  },
  {
    title: "Object Oriented Programming",
    subtitle: "CS 213: BITS Pilani",
    description: "Designed the problem statements for the weekly 2-hour long OOP lab and contributed to examination answer-script correction. My performance was given a rating of 'Excellent'.",
    dates: "Mar 2021 - Apr 2021",
    certificate: "https://drive.google.com/file/d/18hmni4lUMXwLN8m87M4J8IjvSrQhmfGs/view"
  },
] as const;

type ExperienceItem = {
  title: string;
  location: string;
  description: string;
  bullets?: readonly string[];
  icon: React.ReactElement;
  tags: readonly string[];
  date: string;
};

export const experiencesData = [
  {
    title: "DoorDash - Software Engineer II",
    location: "San Francisco, CA",
    description:
        "Migrated ~1,000 QPS authorization/permission service from Elasticsearch to CockroachDB, cutting latency 62% (351ms → 131ms) and eliminating a recurring incident class tied to substantial ads revenue risk. Architected an Elasticsearch source-of-truth + distributed CDC indexing pipeline for campaign state and delivered a rebuild/backfill system that indexed 14.3M campaigns, improving throughput 26× (150 → 3,900 campaigns/sec) and reducing rebuild time 95% (26 hrs → 1.5 hrs). Optimized Elasticsearch infrastructure footprint to reduce cloud spend by $60K/year, including 52.6% production and 83.2% staging infra cost reductions, by right-sizing clusters based on cost/performance benchmarking while maintaining reliability targets.",
    bullets: [
      "Migrated a ~1,000 QPS authorization/permission service from Elasticsearch to CockroachDB, cutting latency 62% (351ms → 131ms) and eliminating a recurring incident class tied to substantial ads revenue risk.",
      "Architected an Elasticsearch source-of-truth + distributed CDC indexing pipeline for campaign state.",
      "Delivered a rebuild/backfill system that indexed 14.3M campaigns, improving throughput 26× (150 → 3,900 campaigns/sec) and reducing rebuild time 95% (26 hrs → 1.5 hrs).",
      "Optimized Elasticsearch infrastructure footprint to reduce cloud spend by $60K/year, including 52.6% production and 83.2% staging infra cost reductions. Right-sized clusters based on cost/performance benchmarking while maintaining reliability targets.",
    ],
    icon: React.createElement(SiDoordash),
    tags: ["Kotlin", "Elasticsearch", "CockroachDB", "Kafka", "AWS"],
    date: "Jul 2024 - Present",
  },
  {
    title: "Goldman Sachs - Software Engineer Intern",
    location: "New York, NY",
    description:
      "Developed a Kafka Message Correction Platform to address invalid messages, improving message accuracy and reducing rollbacks by 70%. Leveraged MongoDB Atlas as the platform backend and implemented a comprehensive archival system for storing corrected events and metadata for future auditing.",
    bullets: [
      "Developed a Kafka Message Correction Platform to address invalid messages, improving message accuracy and reducing rollbacks by 70%.",
      "Leveraged MongoDB Atlas as the platform backend.",
      "Implemented a comprehensive archival system for storing corrected events and metadata for future auditing.",
    ],
    icon: React.createElement(SiGoldmansachs),
    tags: ["React", "Next.js", "Node.js", "Kafka", "MongoDB", "Spring Boot"],
    date: "Jun 2023 - Aug 2023",
  },
  {
    title: "Goldman Sachs - Software Engineer",
    location: "Bengaluru, India",
    description:
        "Built user-facing dashboards to display investment banker deal information. Implemented a multi-project CI/CD strategy for multiple projects. Wrote applications to extract and massage data from data warehouses.",
    bullets: [
      "Built user-facing dashboards to display investment banker deal information.",
      "Implemented a multi-project CI/CD strategy for multiple projects.",
      "Wrote applications to extract and massage data from data warehouses.",
    ],
    icon: React.createElement(SiGoldmansachs),
    tags: ["React", "MongoDB", "Spring Boot", "ElasticSearch", "Spark", "Hadoop", "Kubernetes (K8s)", "Gitlab CI/CD"],
    date: "Jul 2021 - Jun 2022",
  },
  {
    title: "Amazon - Software Engineer Intern",
    location: "Bengaluru, India",
    description:
        "Developed and deployed an AI-driven customer support chatbot. This reduced Amazon Prime customer query turnaround time by up to 90%. The system reduced support staff workload by 16%.",
    bullets: [
      "Developed and deployed an AI-driven customer support chatbot.",
      "This reduced Amazon Prime customer query turnaround time by up to 90%. The system reduced support staff workload by 16%.",
    ],
    icon: React.createElement(AiOutlineAmazon),
    tags: ["AWS Lex", "Lambda", "DynamoDB", "AWS Amplify", "SQL", "Angular", "AWS Cloudformation"],
    date: "Jan 2021 - Jun 2021",
  },
] satisfies ExperienceItem[];

export const projectsData = [
  {
    title: "DoViz",
    subtitle: "Intervention-Centric Causal Inference Visualization",
    dates: "Jan 2024 — May 2024",
    description:
      "Built DoViz, an interactive causal inference system that lets users simulate interventions, condition on confounders, and compare counterfactual scenarios with quantile-based visualizations. Built an end-to-end experimentation pipeline on AWS SageMaker for reproducible training, versioning, and deployment, and served low-latency real-time inference endpoints to power an interactive React client.",
    tags: ["React", "AWS SageMaker", "PyTorch", "Causal Inference"],
    pdf: "https://drive.google.com/file/d/1hVxWUQCdlfDXtGSQ3jIxMk0PW0Y5jV-e/view?usp=drive_link",
  },
  {
    title: "Generative Storywriter",
    subtitle: "LLMs & Illustration Synthesis",
    dates: "Aug 2023 — Dec 2023",
    description:
      "Built a full-stack generative story application using GPT-3.5 for narrative generation and DALL-E for illustration synthesis. Implemented a backend pipeline that produces structured story outputs, splits them into page-level segments, launches parallel image generation jobs, and assembles the final storybook with response caching and structured logging across LLM API calls.",
    tags: ["OpenAI API", "DALL-E", "Node.js"],
    pdf: "https://drive.google.com/file/d/19Ae7zWj3RSO2TarQVyupQaTucXjAdbfk/view?usp=drive_link",
  },
  {
    title: "KeyClass",
    subtitle: "Weak Supervision for Clinical Text",
    dates: "Jan 2023 — May 2023",
    description:
      "Implemented the KeyClass multi-label architecture for weakly supervised clinical note classification using only class descriptions. Built an end-to-end NLP data pipeline on MIMIC-III (ingestion, preprocessing, and construction of multi-label training datasets) and benchmarked model reproducibility under constrained compute resources.",
    tags: ["PyTorch", "NLP", "MIMIC-III"],
    pdf: "https://drive.google.com/file/d/1U6FxiqU5T7LE2ZymJ8zod4NSKZWt54AO/view?usp=drive_link",
  },
  {
    title: "Open Source Contributions",
    description:
        "Contributed to AsyncAPI, OpenCollective, and Taiga UI. Multiple pull requests have been merged into the main branch. Wrote code to perform GitHub Actions integrations, End to End Testing, and enhancing front-end components.",
    tags: ["GitHub Actions", "TypeScript", "YAML", "Git", "Cypress", "Playwright", "Selenium"],
  },
  {
    title: "Learn 2 Earn: Certificate Gated Job Application System",
    description:
        "Built a website where a user can only apply to certain jobs if they possess the certificates required by the jobs. The job applications on the website are token-gated by the certificates, allowing users to only apply if owners of them.",
    tags: ["React", "Next.js", "Solidity", "Foundry", "Hardhat", "EthersJS", "Metamask"],
  },
  {
    title: "Distributed Systems in Rust",
    description:
        "Built a fault-tolerant key-value store based on a custom implementation of the Raft consensus algorithm in Rust.",
    tags: ["Rust", "Bash", "Shell Scripting", "Multithreading", "Distributed Systems"],
    github: "https://github.com/AtharvChandratre/talent-plan",
  },
  {
    title: "Proof of Authority Ethereum TestNet Using Docker",
    description: "Implementated a multi-node local private network. Built a faucet and block explorer as well, with the front-end written in React. Containerization was done using Docker.",
    tags: ["Docker", "Docker Compose", "Ethereum", "Solidity", "React"],
    github: "https://github.com/AtharvChandratre/Proof-of-Authority-Test-Network-using-Docker"
  },
  {
    title: "Blockchain Based Raspberry Pi Mesh Network",
    description:
      "Analyzed transaction and block propagation latencies within a private blockchain network of Raspberry Pis in a mesh configuration. Researched the correlation between these latencies and the number of Raspberry Pi nodes in the network.",
    tags: ["Solidity", "Docker", "Wireshark", "Raspberry Pi"],
    ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3800557",
  },
  {
    title: "Blockchain Based Intellectual Property Management",
    description: "Developed an Intellectual Property Management system using blockchain-based smart contracts written in Solidity. Evaluated its ability to expedite resolution of ownership conflicts and legal issues that arise in Intellectual Property.",
    tags: ["Solidity"],
    ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3800734",
  },
  {
    title: "Blockchain Based Course Feedback System",
    description: "Designed a feedback system for University courses based on Solidity smart contracts deployed to Ethereum's test network. Assessed its ability to report immmutable, secure and bias-agnostic feedback by keeping feedback provider identities confidential.",
    tags: ["React", "Solidity"],
    ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3762332",
    github: "https://github.com/AtharvChandratre/CourseFeedbackSystem"
  }
] as const;

export type SkillsCategory = {
  name: string;
  skills: readonly string[];
};

export const skillsCategoriesData = [
  {
    name: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "C", "SQL", "Bash", "Rust", "Kotlin"],
  },
  {
    name: "Web & Frameworks",
    skills: ["HTML", "CSS", "React", "Next.js", "GraphQL", "Flask", "Django", "Node.js"],
  },
  {
    name: "Data & Databases",
    skills: ["Kafka", "MongoDB", "MongoDB Atlas", "CockroachDB", "ElasticSearch", "Snowflake", "DynamoDB", "Postgres"],
  },
  {
    name: "ML & AI",
    skills: ["AWS SageMaker", "PyTorch", "Causal Inference", "AI Agent Development"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Azure", "GCP", "Lambda", "Lex", "Git", "Docker", "Jenkins", "Kubernetes (K8s)", "GitLab CI/CD", "CI/CD", "Linux"],
  },
] as const satisfies readonly SkillsCategory[];

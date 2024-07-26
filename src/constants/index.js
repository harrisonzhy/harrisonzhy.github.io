// EFF5EF
// EB644D
// D37194
// 875949
// 2C2C3C
import {
  gmail,
  linkedin,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  resume,
  github,
  raytheon,
  csail,
  edgecompute,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experiences",
  },
  {
    id: "project",
    title: "Projects",
  },
];

const services = [
  {
    title: "GitHub",
    icon: github,
    link: "https://github.com/itsharrisonzhang",
  },
  {
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/itsharrisonzhang/",
  },
  {
    title: "Email",
    icon: gmail,
    link: "mailto:itsharrisonzhang@gmail.com",
  },
  {
    title: "Resume",
    icon: resume,
    link: "",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "AI Engineer Intern",
    company_name: "AMD",
    date: "Incoming Sep 2024",

    points: [
      "Research and development of sparsity schemes on SOTA LLM accelerators.",
    ]
  },
  {
    title: "Software Engineer Intern",
    company_name: "Nightwing (Raytheon CODEX)",
    date: "Jun 2024 - Aug 2024",

    points: [
      "Developed Windows decoy file system kernel driver to intercept & redirect I/O packets, deceiving root-level attackers.",
      "Architected and scaled the end-to-end filter driver stack to handle a suite of 9,500+ real and decoy file mappings.",
      "Building proprietary tooling to probe router firmware attack surfaces through SNMP and enable traffic espionage.",
      "Decreased ensemble build time 25x by creating “Knot” framework to integrate build chains for 31,000 components.",
    ]

  },
  {
    title: "Researcher",
    company_name: "MIT Computer Science and Artificial Intelligence Laboratory (CSAIL)",
    company_description: "Computation Structures Group",
    date: "Jan 2024 - Present",
    points: [
      "Leading team of 3 undergrads to build low latency inference methods for deep learning recommendation systems.",
      "Developing fast multicore embedding lookup engine on GPU, culminating in 6,000+ LOC in C++, CUDA, PyTorch.",
      "Achieved 32% speedup and 29% memory saving over SOTA on FAIR benchmarks, scalable to multi-model GPUs.",
      "Exploring latency-accuracy tradeoff with Facebook Folly for quantization, sharded caching, lock-free algorithms.",
    ],
  },
  {
    title: "Researcher",
    company_name: "Harvard Edge Computing Lab",
    date: "May 2023 - Dec 2023",
    points: [
      "Developed software platform to accelerate AR/VR machine learning apps using Google’s FPGA ISA playground.",
      "Built the de-facto build system and debugger tool now used by 30+ researchers, reducing setup and downtime by 35%.",
      "As second team member, compiled first versions of project firmware (ARM) and engineered core DNN architectures.",
      "Led project migration past prototyping by deploying universal templates to interface open-source ML models.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Chickadee OS",
    description:
      "A multicore operating system with buddy and slab memory allocation, process hierarchy, CPU scheduler, virtual file system API, (fault tolerant, journaling) asynchronous disk file system, and KVM support via Intel VT-x virtualization.",
    tags: [
      {
        name: "C++",
        color: "violet-text-gradient",
      },
      {
        name: "OS-Internals",
        color: "blue-text-gradient",
      },
      {
        name: "Virtualization",
        color: "green-text-gradient",
      },
    ],
    source_code_link: "",
  },
  {
    name: "RenderWRLD",
    description:
      "A multicore GPU ray tracer and simulation engine, integrating Lambert diffusion, path tracing and ambient occlusion algorithms to achieve high-fidelity images and interactions.",
    tags: [
      {
        name: "C++",
        color: "violet-text-gradient",
      },
      {
        name: "CUDA",
        color: "blue-text-gradient",
      },
      {
        name: "Graphics",
        color: "green-text-gradient",
      },
    ],
    source_code_link: "",
  },
  {
    name: "Oasis",
    description:
      "A decentralized, anonymous, and gamified Web3 social media platform prioritizing authentic community discussion. Leverages fine-tuned LLM agents to help users enforce community guidelines.",
      tags: [
      {
        name: "React",
        color: "violet-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "AI/ML",
        color: "green-text-gradient",
      },
    ],
    source_code_link: "",
  },
  {
    name: "Alcolyze",
    description:
      "A user application to conduct personalized sobriety testing using semantic segmentation.",
    tags: [
      {
        name: "PyTorch",
        color: "violet-text-gradient",
      },
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "Vision",
        color: "green-text-gradient",
      },
    ],
    source_code_link: "",
  },
  {
    name: "Biomimetic Butterfly",
    description:
      "A robotic butterfly that actually flies. Constructed from carbon fiber, calibrated using ANSYS fluid simulation and controlled by custom firmware.",
    tags: [
      {
        name: "Robotics",
        color: "violet-text-gradient",
      },
      {
        name: "Embedded-Systems",
        color: "blue-text-gradient",
      },
      {
        name: "Robotics",
        color: "green-text-gradient",
      },
    ],
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };

export const Projects: Projects[] = [
  {
    title: "",
    description:
      " AI-driven inventory management system that helps users manage stockouts with realtime data analytics",
    image: "/inventory.png",
    techUsed: [
      "React",
      "GraphQL",
      "TypeScript",
      "Flask",
      "Supabase",
      "Tailwind",
      "PostgreSQL",
      "Prisma",
    ],
    liveLink: "https://walmart-frontend-three.vercel.app/",
    githubLink: "https://github.com/hskhanduja03/Walmart-frontend",
  },
];

interface Projects{
    title:string
    liveLink:string
    githubLink:string
    description:string
    image:string
    techUsed:string[]
}
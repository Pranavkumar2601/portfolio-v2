export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "development",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Flask",
      "Angular",
      ".Net",
      "React",
      "Node",
      "Next",
      "Flutter",
    ],
  },
  {
    category: "database",
    skills: ["SQL", "MySQL", "PostgreSQL", "AWS RDS"],
  },
  {
    category: "languages",
    skills: ["Python", "C", "Java", "C#", "Typescript", "Dart"],
  },
  {
    category: "mlFrameworks",
    skills: [
      "Numpy",
      "Pandas",
      "Scikit-learn",
      "Seaborn",
      "Random Forest",
      "KNN",
      "Decision Tree",
      "Matplotlib",
    ],
  },
  {
    category: "others",
    skills: [
      "Machine learning",
      "Agile Methodology",
      "Git",
      "Prompt Engineering",
      "Android Development",
    ],
  },
];

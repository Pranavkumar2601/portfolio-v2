import { modernColors } from "./education";

export interface ResearchData {
  id: number;
  title: string;
  journal: string;
  volume: string;
  date: string;
  doi: string;
  authors: string[];
  abstract: string;
  keywords: string[];
  methodology: string[];
  results: string[];
  impact: string;
  citations: string;
  downloads: string;
  color: string;
}

export const researchData: ResearchData[] = [
  {
    id: 1,
    title:
      "Beyond The Boundary: Cricket Player Selection Using Performance Analytics",
    journal: "International Journal of Computer Applications-Springer",
    volume: "",
    date: "November 2024",
    doi: "N/A",
    authors: [
      process.env.NEXT_PUBLIC_OWNER_NAME || "Pranav Kumar",
      "MS. Samyuktha B",
    ],
    abstract:
      "This research presents a comprehensive machine learning approach to optimize cricket player selection through advanced performance analytics. The study leverages historical player data, statistical analysis, and predictive modeling to provide data-driven recommendations for team composition and player substitutions during matches.",
    keywords: [
      "Machine Learning",
      "Sports Analytics",
      "Cricket",
      "Performance Analysis",
      "Data Mining",
    ],
    methodology: [
      "Data Collection from multiple cricket databases",
      "Feature Engineering and Statistical Analysis",
      "Machine Learning Model Development (Random Forest, KNN, Decision Trees)",
      "Performance Evaluation and Validation",
      "Real-time Recommendation System Implementation",
    ],
    results: [
      "Achieved 87% accuracy in player performance prediction",
      "Reduced team selection time by 60%",
      "Improved match outcome prediction by 23%",
      "Successfully deployed on AWS EC2 with real-time capabilities",
    ],
    impact: "High",
    citations: "N/A",
    downloads: "N/A",
    color: modernColors.secondary,
  },
];

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
      "An Optimized Approach of Player Selection in Cricket Using Performance Analytics",
    journal: "International Journal of Computer Applications-Springer",
    volume:
      "Advances in Communication and Applications,Proceedings of ERCICA 2024, Volume 2  Conference proceedings © 2025",
    date: "30 July 2025",
    doi: "https://doi.org/10.1007/978-981-96-4679-1_4",
    authors: [
      process.env.NEXT_PUBLIC_OWNER_NAME || "Pranav Kumar",
      "MS. S. D. Kumta",
    ],
    abstract:
      "Selecting players’ is one of the most crucial tasks for a team in sports like cricket. A player’s performance depends on several factors like playing conditions, venue of matches, climate, etc. The most difficult situation that comes during the match is to find the substitute when a player is injured or ill on the field. The important factor that needs to be considered in this situation is the previous performances of the player with an opposition team in all the matches. To identify the best substitute, we have used the K-nearest neighbor classifier and random forest classifier model. The study concludes that K-nearest neighbor classifier model suits best for decision-making and performance analysis of the players with an accuracy of 94%.",
    keywords: [
      "Machine Learning",
      "Sports Analytics",
      "Cricket",
      "Performance Analysis",
      "Cricket · Player performance",
      "Prediction",
      "One day internationals (ODI)",
      "K nearest neighbors(KNN) algorithm",
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

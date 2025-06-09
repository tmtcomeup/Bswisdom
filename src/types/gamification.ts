export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  points: number;
  progress: number;
  maxProgress: number;
  completed: boolean;
  reward?: Reward;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  type: 'discount' | 'credit' | 'bonus' | 'feature';
  value: number | string;
  claimed: boolean;
}

export interface UserLevel {
  level: number;
  title: string;
  points: number;
  requiredPoints: number;
  benefits: string[];
  icon: string;
}

export interface UserStats {
  totalPoints: number;
  currentLevel: UserLevel;
  achievements: Achievement[];
  rewards: Reward[];
}
export interface ReferralUser {
  id: string;
  name: string;
  email: string;
  referralCode: string;
  earnings: number;
  referralCount: number;
}

export interface ReferralStats {
  totalEarnings: number;
  pendingEarnings: number;
  totalReferrals: number;
  activeReferrals: number;
}
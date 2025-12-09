export type RoundDto = {
  id: string;
  startTime: string;
  endTime: string;
  totalScore: number;
  createdAt: string;
};

export type RoundsResponse = {
  data: RoundDto[];
  pagination: {
    limit: number;
    nextCursor: string | null;
    hasMore: boolean;
  };
};

export type RoundDetail = {
  round: {
    id: string;
    startTime: string;
    endTime: string;
    totalScore: number;
    createdAt: string;
  };
  topStats: Array<{
    taps: number;
    score: number;
    user: { username: string };
  }>;
  myStats: {
    taps: number;
    score: number;
  };
};

export type TapResponse = {
  taps: number;
  score: number;
};

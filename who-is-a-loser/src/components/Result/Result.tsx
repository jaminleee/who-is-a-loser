import React from "react";

interface ResultProps {
  winner: string;
}

const Result: React.FC<ResultProps> = ({ winner }) => {
  return (
    <div>
      <h2>결과: 가장 많이 선택된 사람은 {winner}!</h2>
    </div>
  );
};

export default Result;

import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import MainScreen from "./pages/Main/Main";
import PlayerName from "./components/PlayerName/PlayerName";
import Question from "./components/Question/Question";
import Result from "./components/Result/Result";
import { QuestionList } from "./const/questions";
import Layout from "./Layout";
import PlayerCountScreen from "./pages/PlayerCount/PlayerCount";

export default function Router() {
  const [playerCount, setPlayerCount] = useState(0);
  const [players, setPlayers] = useState<string[]>([]);
  const [votes, setVotes] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentRound, setCurrentRound] = useState(0);
  const navigate = useNavigate();

  // 시작할 때 모든 질문과 투표 라운드를 초기화
  const startQuestionRound = () => {
    setVotes(Array(playerCount).fill(0));
    setCurrentRound(0);
    generateNextQuestion(); // 첫 번째 질문 설정
  };

  // 다음 질문을 설정하는 함수
  const generateNextQuestion = () => {
    const randomQuestion =
      QuestionList[Math.floor(Math.random() * QuestionList.length)];
    setCurrentQuestion(randomQuestion);
    console.log("Generated question:", randomQuestion); // 디버깅용 로그
  };

  // 플레이어에게 투표하고 다음 질문으로 넘어가는 함수
  const handleVote = (playerIndex: number) => {
    // 투표를 업데이트
    const newVotes = [...votes];
    newVotes[playerIndex] += 1;
    setVotes(newVotes);

    // 현재 라운드를 증가시키고, 마지막 라운드인지 확인
    setCurrentRound((prevRound) => {
      const nextRound = prevRound + 1;
      if (nextRound >= playerCount) {
        // 마지막 라운드가 끝난 경우 결과 페이지로 이동
        navigate("/result");
      } else {
        // 마지막 라운드가 아닌 경우 다음 질문 생성
        generateNextQuestion();
      }
      return nextRound;
    });
  };

  // 결과를 가져오는 함수
  const getResult = () => {
    const maxVotes = Math.max(...votes);
    const winnerIndex = votes.indexOf(maxVotes);
    return players[winnerIndex];
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<MainScreen onStart={() => setPlayerCount(2)} />}
        />
        <Route
          path="player-count"
          element={<PlayerCountScreen onNext={setPlayerCount} />}
        />
        <Route
          path="player-name"
          element={
            <PlayerName
              playerCount={playerCount}
              onNamesSubmit={(names) => {
                setPlayers(names);
                startQuestionRound();
                navigate("/questions");
              }}
            />
          }
        />
        <Route
          path="questions"
          element={
            <Question
              question={currentQuestion}
              players={players}
              onVote={handleVote}
              isLastQuestion={currentRound >= playerCount}
              currentRound={currentRound}
              totalRounds={playerCount}
            />
          }
        />
        <Route path="result" element={<Result winner={getResult()} />} />
      </Route>
    </Routes>
  );
}

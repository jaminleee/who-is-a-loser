import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import StartScreen from "./components/StartScreen/StartScreen";
import PlayerCount from "./components/PlayerCount/PlayerCount";
import PlayerName from "./components/PlayerName/PlayerName";
import Question from "./components/Question/Question";
import Result from "./components/Result/Result";

function App() {
  const [playerCount, setPlayerCount] = useState(0);
  const [players, setPlayers] = useState<string[]>([]);
  const [votes, setVotes] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentRound, setCurrentRound] = useState(0);
  const navigate = useNavigate();

  const questions = [
    "밑잔 확인 함",
    "술잔 양 확인함",
    "혼자 계속 핸드폰 확인함",
    "쿨한척함",
    "술잔 손으로 가림",
    "말이 너무 김",
    "인당 몇잔씩 마셧는지 계산함",
    "방금 마셨는데 또 마시냐함",
    "변명함",
    "술잔보고 갸웃거림",
    "입 튀어나와서 인정함",
    "온갖 핑계로 술 뺌",
    "핑계댐",
    "핸드폰이 접힘",
    "부들거림",
    "후배한테 시킴",
    "학번으로 선배질함",
    "스토리 올림",
    "생일로 나이 가름",
    "생색냄",
  ];

  // 시작할 때 모든 질문과 투표 라운드를 초기화
  const startQuestionRound = () => {
    setVotes(Array(playerCount).fill(0));
    setCurrentRound(0);
    generateNextQuestion(); // 첫 번째 질문 설정
  };

  // 다음 질문을 설정하는 함수
  const generateNextQuestion = () => {
    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];
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
      <Route
        path="/"
        element={<StartScreen onStart={() => setPlayerCount(2)} />}
      />
      <Route
        path="/player-count"
        element={<PlayerCount onNext={(count) => setPlayerCount(count)} />}
      />
      <Route
        path="/player-name"
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
        path="/questions"
        element={
          <Question
            question={currentQuestion}
            players={players}
            onVote={handleVote}
            isLastQuestion={currentRound >= playerCount} // 마지막 질문 여부 전달
            currentRound={currentRound}
            totalRounds={playerCount}
          />
        }
      />
      <Route path="/result" element={<Result winner={getResult()} />} />
    </Routes>
  );
}

export default App;

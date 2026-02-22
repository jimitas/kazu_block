import * as se from "src/components/se";
import { Block } from "src/components/Block";
import { useState, useRef, useEffect } from "react";
import { useCheckAnswer } from "src/hooks/useCheckAnswer";
import { PutText } from "src/components/PutText";
import { BtnQuestion } from "src/components/PutButton/btnQuestion";
import { BtnCheck } from "src/components/PutButton/btnCheck";
import { BtnNum } from "src/components/PutButton/btnNum";
import Layout from "src/components/Layout";

const NUM_1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const NUM_2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

type Mode = 1 | 2 | 3;
type Difficulty = "1-5" | "1-10" | "11-20" | "1-20";

const MODE_LABELS: { label: string; mode: Mode }[] = [
  { label: "なんこならべたかな？", mode: 1 },
  { label: "ならべたかずはいくつ？", mode: 2 },
  { label: "ならべよう", mode: 3 },
];

const DIFFICULTIES: { label: string; value: Difficulty }[] = [
  { label: "１〜５", value: "1-5" },
  { label: "１〜１０", value: "1-10" },
  { label: "１１〜２０", value: "11-20" },
  { label: "１〜２０", value: "1-20" },
];

const INIT_TEXT: Record<Mode, string> = {
  1: "ぶろっくをならべて「たしかめ」をおそう",
  2: "「もんだい」をおそう",
  3: "「もんだい」をおそう",
};

export default function Block1() {
  const { sendRight, sendWrong } = useCheckAnswer();
  const el_text = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<Mode>(1);
  const [difficulty, setDifficulty] = useState<Difficulty>("1-10");
  const [questionNum, setQuestionNum] = useState<number | null>(null);
  const [autoCount, setAutoCount] = useState<number>(0);
  const [countInArea, setCountInArea] = useState<number>(0);

  useEffect(() => {
    el_text.current!.innerHTML = INIT_TEXT[1];
  }, []);

  // 難易度から出題範囲を取得
  const getRange = () => {
    if (difficulty === "1-5")   return { min: 1, max: 5 };
    if (difficulty === "1-10")  return { min: 1, max: 10 };
    if (difficulty === "11-20") return { min: 11, max: 20 };
    return { min: 1, max: 20 };
  };

  // モード切り替え
  const changeMode = (m: Mode) => {
    se.set.play();
    setMode(m);
    setQuestionNum(null);
    setAutoCount(0);
    el_text.current!.innerHTML = INIT_TEXT[m];
  };

  // 問題を出す（mode 2・3 共通）
  const giveQuestion = () => {
    se.pi.play();
    const { min, max } = getRange();
    const n = Math.floor(Math.random() * (max - min + 1) + min);
    setQuestionNum(n);

    if (mode === 2) {
      // 上段に自動配置、下段なし
      setAutoCount(n);
      el_text.current!.innerHTML = "ぶろっくは　なんこ　ならんでいるかな？";
    } else {
      // mode 3: 上段は空のまま、児童が並べる
      setAutoCount(0);
      el_text.current!.innerHTML = `<span style="color:blue;">${n}</span>こ　ならべましょう`;
    }
  };

  // たしかめ（mode 1: カウント表示、mode 3: 正誤判定）
  const checkCount = () => {
    if (mode === 1) {
      se.seikai1.play();
      el_text.current!.innerHTML =
        `いま<span style="color:red;">${countInArea}</span>こ　ならんでいるよ`;
      return;
    }
    // mode 3
    if (questionNum === null) {
      se.alertSound.play();
      el_text.current!.innerHTML = "「もんだい」をおしてください";
      return;
    }
    if (countInArea === questionNum) {
      sendRight(el_text);
      setQuestionNum(null);
    } else {
      sendWrong(el_text);
    }
  };

  // 数字ボタン（mode 2）
  const checkAnswerNum = (myAnswer: number) => {
    if (questionNum === null) {
      se.alertSound.play();
      el_text.current!.innerHTML = "「もんだい」をおしてください";
      return;
    }
    if (myAnswer === questionNum) {
      sendRight(el_text);
      setQuestionNum(null);
    } else {
      sendWrong(el_text);
    }
  };

  return (
    <Layout title="ぶろっく">

      {/* モード選択トグル */}
      <div className="flex flex-wrap justify-center gap-2 my-3">
        {MODE_LABELS.map(({ label, mode: m }) => (
          <button
            key={m}
            onClick={() => changeMode(m)}
            className={`font-bold px-3 py-2 rounded-lg border-2 text-sm md:text-base transition-colors
              ${mode === m
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-blue-500 border-blue-300 hover:bg-blue-50"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 難易度選択（mode 2・3 のみ） */}
      {(mode === 2 || mode === 3) && (
        <div className="flex flex-wrap justify-center gap-4 my-2">
          {DIFFICULTIES.map(({ label, value }) => (
            <label
              key={value}
              className="flex items-center gap-1 cursor-pointer text-sm md:text-base font-bold"
            >
              <input
                type="radio"
                name="difficulty"
                value={value}
                checked={difficulty === value}
                onChange={() => { se.set.play(); setDifficulty(value); }}
                className="w-4 h-4"
              />
              {label}
            </label>
          ))}
        </div>
      )}

      {/* アクションボタン */}
      <div className="flex flex-wrap justify-center items-center">
        {(mode === 2 || mode === 3) && (
          <BtnQuestion handleEvent={giveQuestion} />
        )}
        {(mode === 1 || mode === 3) && (
          <BtnCheck handleEvent={checkCount} btnText="たしかめ" />
        )}
      </div>

      <PutText el_text={el_text}></PutText>

      <div className="place">
        <Block
          autoCount={autoCount}
          lowerEnabled={mode !== 2}
          onCountChange={setCountInArea}
        />
      </div>

      {/* 数字ボタン（mode 2 のみ） */}
      {mode === 2 && (
        <>
          <BtnNum ITEM={NUM_1} handleEvent={checkAnswerNum} />
          <BtnNum ITEM={NUM_2} handleEvent={checkAnswerNum} />
        </>
      )}

    </Layout>
  );
}

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
  const [showToast, setShowToast] = useState<boolean>(true);

  // ── コインシステム ──
  const coinPalletRef = useRef<HTMLDivElement>(null);
  const [coinCount, setCoinCount] = useState(0);
  const hasAnsweredRef = useRef(false); // 1問につき初回正解のみコイン付与

  // ページ読み込み時に localStorage からコインを復元（アニメなし）
  useEffect(() => {
    el_text.current!.innerHTML = INIT_TEXT[1];
    const saved = localStorage.getItem("coinCount");
    const count = saved ? parseInt(saved, 10) : 0;
    for (let i = 0; i < count; i++) {
      const img = document.createElement("img");
      img.src = "/coin.png";
      img.alt = "コイン";
      img.style.width = "clamp(35px, 5vw, 50px)";
      coinPalletRef.current?.appendChild(img);
    }
    setCoinCount(count);
  }, []);

  // コインを1枚追加（アニメーションあり）
  const addCoin = () => {
    const img = document.createElement("img");
    img.src = "/coin.png";
    img.alt = "コイン";
    img.className = "coin-animate";
    img.style.width = "clamp(35px, 5vw, 50px)";
    coinPalletRef.current?.appendChild(img);
    const saved = localStorage.getItem("coinCount");
    const count = saved ? parseInt(saved, 10) : 0;
    localStorage.setItem("coinCount", String(count + 1));
    setCoinCount(count + 1);
  };

  // コインリセット（掛け算の確認問題付き）
  const resetCoins = () => {
    se.set.play();
    const num1 = Math.floor(Math.random() * 90) + 10;
    const num2 = Math.floor(Math.random() * 9) + 1;
    const correct = num1 * num2;
    const ans = prompt(
      `コインをリセットするには　けいさんもんだいに　こたえてください。\n\n${num1} × ${num2} = ?`
    );
    if (ans === null) return;
    if (parseInt(ans, 10) === correct) {
      localStorage.removeItem("coinCount");
      if (coinPalletRef.current) coinPalletRef.current.innerHTML = "";
      setCoinCount(0);
      se.seikai1.play();
      alert("せいかい！　コインをリセットしました。");
    } else {
      se.alertSound.play();
      alert(`ちがいます。こたえは　${correct}　でした。`);
    }
  };

  const closeToast = () => {
    se.set.play();
    setShowToast(false);
  };

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
    hasAnsweredRef.current = false;
    el_text.current!.innerHTML = INIT_TEXT[m];
  };

  // 問題を出す（mode 2・3 共通）
  const giveQuestion = () => {
    se.pi.play();
    const { min, max } = getRange();
    const n = Math.floor(Math.random() * (max - min + 1) + min);
    setQuestionNum(n);

    hasAnsweredRef.current = false;
    if (mode === 2) {
      setAutoCount(n);
      el_text.current!.innerHTML = "ぶろっくは　なんこ　ならんでいるかな？";
    } else {
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
      if (!hasAnsweredRef.current) {
        addCoin();
        hasAnsweredRef.current = true;
      }
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
      if (!hasAnsweredRef.current) {
        addCoin();
        hasAnsweredRef.current = true;
      }
      sendRight(el_text);
      setQuestionNum(null);
    } else {
      sendWrong(el_text);
    }
  };

  return (
    <Layout title="ぶろっく">

      {/* 起動時トースト */}
      {showToast && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl w-[90vw] max-w-md p-6 mx-4">

            {/* タイトル */}
            <h2 className="text-center text-xl md:text-2xl font-bold text-blue-600 mb-4">
              🎯 ぶろっくのつかいかた
            </h2>

            {/* できること */}
            <p className="text-center text-sm md:text-base text-gray-600 mb-4">
              ぶろっくをならべながら　かずをまなぼう！<br />
              したの３つのモードからえらんでね。
            </p>

            {/* 3モードの説明 */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 bg-blue-50 rounded-xl p-3">
                <span className="text-2xl">①</span>
                <div>
                  <div className="font-bold text-blue-700">なんこならべたかな？</div>
                  <div className="text-sm text-gray-600">ぶろっくをならべて「たしかめ」をおすと　いまなんこならんでいるか　おしえてくれるよ</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-green-50 rounded-xl p-3">
                <span className="text-2xl">②</span>
                <div>
                  <div className="font-bold text-green-700">ならべたかずはいくつ？</div>
                  <div className="text-sm text-gray-600">「もんだい」をおすと　ぶろっくがならぶよ。なんこならんでいるか　すうじボタンでこたえよう</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-orange-50 rounded-xl p-3">
                <span className="text-2xl">③</span>
                <div>
                  <div className="font-bold text-orange-700">ならべよう</div>
                  <div className="text-sm text-gray-600">「もんだい」をおすと　「○こならべましょう」ともんだいがでるよ。はこからぶろっくをうごかしてならべよう</div>
                </div>
              </div>
            </div>

            {/* はじめるボタン */}
            <button
              onClick={closeToast}
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 active:translate-y-0.5 text-white font-bold text-lg rounded-xl shadow-md transition-colors"
            >
              はじめる！
            </button>
          </div>
        </div>
      )}

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

      {/* コインエリア */}
      <div className="flex items-center gap-3 mx-auto my-4 px-4 py-3 rounded-xl bg-amber-50 border-2 border-amber-300"
           style={{ width: "max(44vw, 440px)" }}>
        <div
          ref={coinPalletRef}
          className="flex flex-wrap gap-1 flex-1 min-h-[44px] items-center"
        ></div>
        <div className="text-right">
          <div className="text-xs text-amber-700 font-bold">{coinCount}まい</div>
          <button
            onClick={resetCoins}
            className="mt-1 text-xs px-2 py-1 bg-red-400 hover:bg-red-500 text-white rounded-lg font-bold transition-colors"
          >
            リセット
          </button>
        </div>
      </div>

    </Layout>
  );
}

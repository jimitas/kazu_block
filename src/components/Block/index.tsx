import React, { useEffect, useState, useRef, useCallback } from "react";
import * as se from "src/components/se";
import styles from "src/components/Block/Block.module.css";

import { useDragDrop } from "src/hooks/useDragDrop";
import { BtnSpace } from "src/components/PutButton/btnSpace";
import { BtnUndo } from "src/components/PutButton/btnUndo";

const divColor = ["#ff8082", "#005aff", "#ff8082", "#005aff"];

interface BlockProps {
  autoCount: number;
  lowerEnabled?: boolean;
  onCountChange?: (count: number) => void;
}

export function Block(props: BlockProps) {
  const el_upper = useRef<HTMLDivElement>(null);
  const el_lower = useRef<HTMLDivElement>(null);
  const [resetKey, setResetKey] = useState(0);

  const onCountChangeRef = useRef(props.onCountChange);
  onCountChangeRef.current = props.onCountChange;

  // 上エリアのブロック数を数えてコールバック呼び出し
  const notifyCount = useCallback(() => {
    const count = el_upper.current?.querySelectorAll(".draggable-elem").length ?? 0;
    onCountChangeRef.current?.(count);
  }, []);

  const { dragStart, dragOver, dropEnd, touchStart, touchMove, touchEnd } =
    useDragDrop(notifyCount);

  const resetTable = () => {
    setResetKey((k) => k + 1);
    se.seikai1.play();
  };

  const upperLeft  = Math.min(props.autoCount, 10);
  const upperRight = Math.max(0, props.autoCount - 10);
  const lowerEnabled = props.lowerEnabled !== false;
  const lowerLeft  = lowerEnabled ? 10 : 0;
  const lowerRight = lowerEnabled ? 10 : 0;

  useEffect(() => {
    // テーブルを生成してコンテナに追加する
    const createTables = (
      container: HTMLDivElement,
      counts: number[],
      colorOffset: number
    ) => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      for (let i = 0; i < counts.length; i++) {
        const TBL = document.createElement("table");
        container.appendChild(TBL);
        for (let j = 0; j < 2; j++) {
          const tr = document.createElement("tr");
          TBL.appendChild(tr);
          for (let k = 0; k < 5; k++) {
            const td = document.createElement("td");
            td.className = "droppable-elem";
            tr.appendChild(td);
            if (j * 5 + k < counts[i]) {
              let colorIndex = i + colorOffset;
              let touchStartFlag = false;
              const div = document.createElement("div");
              div.className = "draggable-elem";
              div.setAttribute("draggable", "true");
              td.appendChild(div);
              div.style.backgroundColor = divColor[colorIndex];
              const colorChange = (e: MouseEvent | TouchEvent) => {
                se.pi.play();
                colorIndex++;
                const target = e.target as HTMLElement;
                target.style.transform =
                  target.style.transform == "rotateY(180deg)"
                    ? "rotateY(0deg)"
                    : "rotateY(180deg)";
                div.style.backgroundColor = divColor[colorIndex % 2];
              };
              const touchStartEvent = () => {
                touchStartFlag === false
                  ? (touchStartFlag = true)
                  : (touchStartFlag = false);
                setTimeout(() => { touchStartFlag = false; }, 150);
              };
              const touchEndEvent = (e: TouchEvent) => {
                touchStartFlag === true ? colorChange(e) : null;
              };
              div.addEventListener("click", colorChange, false);
              div.addEventListener("dragstart", dragStart, false);
              div.addEventListener("dragover", dragOver, false);
              div.addEventListener("drop", dropEnd, false);
              div.addEventListener("touchstart", touchStart, false);
              div.addEventListener("touchstart", touchStartEvent, false);
              div.addEventListener("touchmove", touchMove, false);
              div.addEventListener("touchend", touchEnd, false);
              div.addEventListener("touchend", touchEndEvent, false);
            }
          }
        }
      }
    };

    if (el_upper.current) createTables(el_upper.current, [upperLeft, upperRight], 0);
    if (el_lower.current) createTables(el_lower.current, [lowerLeft, lowerRight], 2);

    onCountChangeRef.current?.(upperLeft + upperRight);
  }, [resetKey, upperLeft, upperRight, lowerLeft, lowerRight, dragStart, dragOver, dropEnd, touchStart, touchMove, touchEnd]);

  return (
    <div className="flex justify-center flex-wrap items-end">
      <BtnSpace />
      <div
        onDragStart={(e) => dragStart(e.nativeEvent)}
        onDragOver={(e) => dragOver(e.nativeEvent)}
        onDrop={(e) => dropEnd(e.nativeEvent)}
      >
        {/* 上エリア: ならべるところ */}
        <div ref={el_upper} className={styles.upperArea}></div>

        {/* 仕切りラベル */}
        <div className={styles.separator}>ぶろっくのはこ</div>

        {/* 下エリア: 木箱 */}
        <div className={styles.woodBox}>
          <div ref={el_lower} className={styles.lowerGrid}></div>
        </div>
      </div>
      <BtnUndo handleEvent={resetTable} />
    </div>
  );
}

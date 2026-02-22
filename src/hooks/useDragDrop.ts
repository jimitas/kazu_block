import { useCallback } from "react";
import * as se from "src/components/se";

// グローバルスコープでdragged変数を管理（複数コンポーネント間で共有しないように注意）
let globalDragged: HTMLElement | null = null;

export const useDragDrop = (onDropCallback?: () => void) => {
  // ドラッグ開始の操作
  const dragStart = useCallback(function dragStart(e: DragEvent) {
    const target = e.target as HTMLElement;
    if (target.draggable === true) {
      globalDragged = target;
    }
  }, []);

  // ドラッグ中の操作
  const dragOver = useCallback(function dragOver(e: DragEvent) {
    e.preventDefault();
  }, []);

  // ドラッグ終了後の操作
  const dropEnd = useCallback(function dropEnd(e: DragEvent) {
    e.preventDefault();
    const target = e.target as HTMLElement;

    // droppable-elemクラスを持つ要素を探す（バブリング対応）
    let dropTarget = target;
    let attempts = 0;
    while (dropTarget && attempts < 5) {
      if (dropTarget.className && dropTarget.className.match(/droppable-elem/)) {
        break;
      }
      dropTarget = dropTarget.parentElement as HTMLElement;
      attempts++;
    }

    if (dropTarget && dropTarget.className.match(/droppable-elem/) && globalDragged) {
      // 親要素が存在する場合のみremoveChild
      if (globalDragged.parentNode) {
        globalDragged.parentNode.removeChild(globalDragged);
      }

      // 元の要素を直接移動（cloneNodeを使うとイベントリスナーが失われる）
      dropTarget.appendChild(globalDragged);
      se.pi.play();

      // グローバル変数をクリア
      globalDragged = null;

      // コールバック関数を実行（コンポーネント固有の処理）
      if (onDropCallback) {
        onDropCallback();
      }
    }
  }, [onDropCallback]);

  // タッチ開始の操作
  const touchStart = useCallback(function touchStart(e: TouchEvent) {
    e.preventDefault();
  }, []);

  // ドラッグ中の操作
  const touchMove = useCallback(function touchMove(e: TouchEvent) {
    e.preventDefault();
    const draggedElem = e.target as HTMLElement;
    const touch = e.changedTouches[0];
    draggedElem.style.position = "fixed";
    draggedElem.style.top = touch.pageY - window.pageYOffset - draggedElem.offsetHeight / 2 + "px";
    draggedElem.style.left = touch.pageX - window.pageXOffset - draggedElem.offsetWidth / 2 + "px";
  }, []);

  // ドラッグ終了後の操作
  const touchEnd = useCallback(function touchEnd(e: TouchEvent) {
    e.preventDefault();
    const droppedElem = e.target as HTMLElement;
    droppedElem.style.position = "";
    droppedElem.style.top = "";
    droppedElem.style.left = "";
    const touch = e.changedTouches[0];
    const newParentElem = document.elementFromPoint(
      touch.pageX - window.pageXOffset,
      touch.pageY - window.pageYOffset
    ) as HTMLElement | null;

    if (newParentElem && newParentElem.className.match(/droppable-elem/)) {
      newParentElem.appendChild(droppedElem);
      se.pi.play();
      // グローバル変数もクリア
      globalDragged = null;
      // コールバック関数を実行（コンポーネント固有の処理）
      if (onDropCallback) {
        onDropCallback();
      }
    }
  }, [onDropCallback]);

  return { dragStart, dragOver, dropEnd, touchStart, touchMove, touchEnd };
};

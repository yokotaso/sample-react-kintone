import React from "react";
import ReactDOM from "react-dom";
kintone.events.on("app.record.index.show", (ev) => {
  const root = kintone.app.getHeaderMenuSpaceElement();
  ReactDOM.render(<App />, root);
  return ev;
});

// Question1. 
// Appという名前のコンポーネントを作成する

// Question2. 
// Appの中にボタンとダイアログを@kintone/kintone-ui-componentに配置する

// Question3.
// Appコンポーネントにプロパティを追加する。
// Appコンポーネントのプロパティをダイアログのタイトルに表示する

// Question4.
// Appコンポーネントでボタンがクリックされた回数を管理できるようにする
// ヒント: unstatedを使う

// Question5.
// ボタンをクリックするとダイアログが表示され、
// ダイアログのボタンをクリックするとダイアログが閉まる
// Appコンポーネントを作成する
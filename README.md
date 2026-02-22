# たしざん１（数図ブロック付き）

小学生向けの**たしざん**を数図ブロックで視覚的に学べるWebアプリケーションです。ドラッグ&ドロップ対応で、手を動かしながら楽しく学習できます。

![たしざん練習アプリ](https://img.shields.io/badge/算数-たしざん（ブロック）-blue) ![対象学年](https://img.shields.io/badge/対象-小学1〜2年生-green) ![ライセンス](https://img.shields.io/badge/license-MIT-orange)

## 🎯 対象

- **小学1〜2年生**を主な対象とした算数学習アプリ
- たしざんを視覚的に理解したい児童
- 学校や家庭での自主学習、宿題サポートに最適
- タブレット（iPad等）での使用を推奨

## ✨ 主な機能

### 📚 4つの難易度レベル

1. **10までの かず** - 基礎レベル
   - 1+1 から 9+1 までの足し算
   - 足し算の基本を学習

2. **10+□, □+10** - 標準レベル
   - 10に数を足す計算
   - 繰り上がりの基礎を理解

3. **1□+□, □+1□** - 応用レベル
   - 10の位のある足し算
   - 繰り上がりのある計算を練習

4. **20までの かず** - 発展レベル
   - 20までの様々な足し算
   - 総合的な足し算スキルを向上

### 🧩 数図ブロック機能

数図ブロックは、たし算を視覚的に理解するための教材です。

**特徴:**
- **10個のマス**を持つブロック
- **ドラッグ&ドロップ**で自由に移動
- **クリック/タップ**で表裏を返せる（色が変わる）
- **マウス・タッチ操作**の両方に対応
- ブロックを動かしながら数の概念を理解

**使い方:**
- ブロックをドラッグして配置
- クリック/タップで裏返し（色変更）
- 視覚的に数を確認しながら計算

### 🎮 直感的な操作

- **問題の自動生成** - ランダムな問題を出題
- **手動入力** - 自分で問題を入力可能
- **セットボタン** - 手動入力した問題を確定
- **こたえをみる機能** - わからない時の学習サポート
- **もどるボタン** - 入力をやり直せる

### 🎵 音声フィードバック

- 正解時の効果音
- 不正解時のフィードバック音
- 操作時の効果音
- 直感的な学習体験

### 📱 レスポンシブデザイン

- **タブレット最適化** - iPadなどで快適に使用
- デスクトップ・タブレット・スマホ対応
- 画面サイズに応じた自動調整
- どこでも学習できる

## 🚀 使い方

### 基本的な流れ

1. **難易度を選択**
   - プルダウンメニューから学習したいレベルを選択

2. **問題を準備**
   - **「もんだい」ボタン**: ランダムな問題を自動生成
   - **手動入力**: 左の数・右の数を入力して「セット」ボタンをクリック

3. **数図ブロックで考える**
   - ブロックをドラッグ&ドロップで配置
   - クリック/タップで裏返し
   - 視覚的に数を確認

4. **答えを入力**
   - 答えの欄に数字を入力
   - 「答え合わせ」ボタンをクリック

5. **結果確認**
   - 正解すると次の問題へ
   - わからない時は「こたえをみる」で学習

### ボタン説明

| ボタン | 機能 |
|--------|------|
| **もんだい** | ランダムな問題を自動生成 |
| **セット** | 手動入力した問題を確定 |
| **答え合わせ** | 入力した答えをチェック |
| **こたえをみる** | 正解を表示 |
| **もどる** | 入力をやり直す |
| **0〜20の数字** | 答えの入力 |

## 🛠️ 技術仕様

### 使用技術

#### フロントエンド
- **Next.js 15.5.3** - Reactフレームワーク
- **React 18.2.0** - UIライブラリ
- **TypeScript 5.1.6** - 型安全な開発
- **Tailwind CSS 3.4.17** - ユーティリティファーストCSS

#### ライブラリ
- **Howler.js 2.2.3** - Web Audio API ベースの音声ライブラリ
- **FontAwesome 6.4.2** - アイコンライブラリ

### ファイル構成

```
tashizan_1/
├── src/
│   ├── components/
│   │   ├── Block/
│   │   │   ├── index.tsx          # 数図ブロックコンポーネント
│   │   │   └── Block.module.css   # ブロックスタイル
│   │   ├── Layout/
│   │   │   └── index.tsx          # レイアウト・SEO対策
│   │   ├── PutButton/
│   │   │   ├── btnNum.tsx         # 数字ボタン
│   │   │   ├── btnQuestion.tsx    # 問題ボタン
│   │   │   ├── btnSet.tsx         # セットボタン
│   │   │   ├── btnCheck.tsx       # 答え合わせボタン
│   │   │   ├── btnShowAnswer.tsx  # こたえをみるボタン
│   │   │   ├── btnUndo.tsx        # もどるボタン
│   │   │   └── btnSpace.tsx       # スペースボタン
│   │   ├── PutSelect/
│   │   │   └── index.tsx          # 難易度セレクト
│   │   ├── PutShiki/
│   │   │   ├── index.tsx          # 式表示コンポーネント
│   │   │   └── PutShiki.module.css
│   │   ├── PutText/
│   │   │   └── index.tsx          # メッセージ表示
│   │   └── se/
│   │       └── index.ts           # 効果音管理
│   ├── hooks/
│   │   ├── useCheckAnswer.tsx     # 正誤判定ロジック
│   │   └── useDragDrop.ts         # ドラッグ&ドロップロジック
│   ├── pages/
│   │   ├── _app.tsx               # Next.js App
│   │   └── index.tsx              # メインページ
│   └── styles/
│       └── globals.css            # グローバルスタイル
├── public/
│   └── Sounds/
│       ├── pi.mp3                 # 開始音
│       ├── set.mp3                # セット音
│       ├── seikai.mp3             # 正解音
│       ├── right.mp3              # 確認音
│       ├── reset.mp3              # リセット音
│       └── alert.mp3              # アラート音
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

### 主な機能の実装

#### 1. 数図ブロックのドラッグ&ドロップ
カスタムフック `useDragDrop` を使用：
```typescript
// マウス操作とタッチ操作の両方に対応
const { handleMouseDown, handleTouchStart } = useDragDrop();
```

#### 2. ブロックの裏返し機能
クリック/タップでブロックの色を変更：
```typescript
// CSSクラスの切り替えで表裏を表現
const handleClick = () => {
  setIsFlipped(!isFlipped);
};
```

#### 3. 問題生成アルゴリズム
難易度に応じたランダム問題生成：
```typescript
// 例: 10までのたしざん
answer = Math.floor(Math.random() * 10 + 1);
left_value = Math.floor(Math.random() * (answer + 1));
right_value = answer - left_value;
```

#### 4. 正誤判定
カスタムフック `useCheckAnswer` で正誤判定：
- 正解時: 効果音再生 + メッセージ表示
- 不正解時: フィードバック音 + 再チャレンジ

#### 5. 効果音管理
Howler.jsを使用した音声管理：
- 各アクションに対応した効果音
- ブラウザ互換性の高い音声再生

### レスポンシブブレークポイント

Tailwind CSSのデフォルトブレークポイント：
- **〜640px**: スマホ（sm未満）
- **640px〜768px**: 小型タブレット（sm）
- **768px〜1024px**: タブレット（md）
- **1024px〜**: デスクトップ（lg）

### ブラウザ対応

- Google Chrome (推奨)
- Safari (iOS Safari含む)
- Microsoft Edge
- Firefox

## 📦 セットアップ・起動方法

### 1. リポジトリのクローン
```bash
git clone https://github.com/jimitas/tashizan1.git
cd tashizan1
```

### 2. 依存関係のインストール
```bash
npm install
```

### 3. 開発サーバーの起動
```bash
npm run dev
```

### 4. ブラウザでアクセス
```
http://localhost:3000
```

## 🏗️ ビルド・デプロイ

### 本番ビルド
```bash
npm run build
npm start
```

### 静的エクスポート（静的サイトとして）
`next.config.js`に以下を追加：
```javascript
module.exports = {
  output: 'export',
}
```
```bash
npm run build
```

## 🎨 カスタマイズ

### ブロックの数を変更
`src/components/Block/index.tsx` を編集：
```typescript
// ブロックの個数を変更（デフォルト: 10）
const BLOCK_SIZE = 10;
```

### 効果音の変更
`public/Sounds/` フォルダ内のmp3ファイルを差し替え

### 難易度の追加
`src/pages/index.tsx` の `ITEM` 配列と問題生成ロジックを編集

## 🔧 トラブルシューティング

### ドラッグ&ドロップが動作しない
- タッチ操作の場合、画面のスクロールが干渉している可能性があります
- ブラウザを最新版に更新してください
- JavaScriptが有効になっているか確認してください

### ブロックが表示されない
- CSSモジュールが正しく読み込まれているか確認
- ブラウザのキャッシュをクリアしてください

### 音が鳴らない
- ブラウザの音声がミュートになっていないか確認
- モバイルブラウザでは初回タップ後に音声が有効化されます
- ブラウザの自動再生ポリシーにより制限される場合があります

### 開発サーバーが起動しない
```bash
# node_modulesを削除して再インストール
rm -rf node_modules
npm install
```

## 🌟 今後の改善予定

- [ ] 問題履歴の保存
- [ ] 正答率の記録・グラフ表示
- [ ] ブロックの色カスタマイズ
- [ ] アニメーション効果の追加
- [ ] PWA化（オフライン対応）
- [ ] 引き算の練習モード追加

## 📄 ライセンス

MIT License

## 👨‍💻 開発者

開発: Jimitas
GitHub: [https://github.com/jimitas](https://github.com/jimitas)

## 🙏 謝辞

- Next.js チーム - Reactフレームワーク
- Tailwind CSS チーム - CSSフレームワーク
- Howler.js - 音声ライブラリ
- FontAwesome - アイコンライブラリ
- Claude (Anthropic) - コード生成支援

---

## 📈 SEO キーワード

小学生 算数, たしざん, 足し算 練習, 数図ブロック, 算数 アプリ, 学習アプリ, 無料 教育, 小学1年生 算数, 小学2年生 算数, ドラッグ&ドロップ, 視覚的学習, オンライン学習, タブレット学習, 算数ゲーム, 教育ゲーム, 自主学習, 宿題サポート, Web教材

**Keywords**: addition practice, drag and drop, visual learning, number blocks, elementary school math, Japanese education app, tablet learning app

---

⭐ このプロジェクトが役に立った場合は、GitHubでスターをお願いします！

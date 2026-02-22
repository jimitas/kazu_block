import React from "react";
import Head from "next/head";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        {/* Google Analytics - 必要に応じてIDを設定 */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script> */}

        {/* 基本メタタグ */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        {/* SEO対策: タイトル */}
        <title>たしざん練習アプリ（数図ブロック付き）【無料】小学1〜2年生の算数学習に最適 - jimitas.com</title>

        {/* SEO対策: メタディスクリプション */}
        <meta name="description" content="数図ブロックでたしざんを視覚的に学べる無料アプリ。小学1〜2年生向けの足し算を、ドラッグ&ドロップ対応の数図ブロックで直感的に練習できます。10までのかず、10+□・□+10、1□+□・□+1□、20までのかずの4つの難易度レベル。ブロックをクリック/タップで裏返し、ドラッグで移動可能。効果音付きで楽しく学習。タブレット最適化対応。ブラウザで今すぐ使える算数学習ツール。" />

        {/* SEO対策: キーワード */}
        <meta name="keywords" content="たしざん練習アプリ,数図ブロック,たしざん アプリ 無料,足し算 練習,小学生 算数,算数 たしざん,小学1年生 算数,小学2年生 算数,算数 学習アプリ,ドラッグアンドドロップ,視覚的学習,オンライン学習,jimitas.com" />

        {/* SEO対策: 著者 */}
        <meta name="author" content="jimitas.com" />

        {/* SEO対策: 言語 */}
        <meta httpEquiv="content-language" content="ja" />

        <meta name="robots" content="index, follow" />
        <meta name="language" content="Japanese" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jimitas.com/tashizan_1/" />
        <meta property="og:title" content="たしざん練習アプリ（数図ブロック付き）【無料】小学1〜2年生の算数学習に最適 | jimitas.com" />
        <meta property="og:description" content="数図ブロックでたしざんを視覚的に学べる無料アプリ。小学1〜2年生向けの足し算を、ドラッグ&ドロップ対応の数図ブロックで直感的に練習。10までのかず、10+□、1□+□、20までのかずの4つの難易度レベル。効果音付きで楽しく学習。" />
        <meta property="og:site_name" content="jimitas.com" />
        <meta property="og:locale" content="ja_JP" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jimitas.com/tashizan_1/" />
        <meta property="twitter:title" content="たしざん練習アプリ（数図ブロック付き）【無料】小学1〜2年生の算数学習に最適" />
        <meta property="twitter:description" content="数図ブロックでたしざんを視覚的に学べる無料アプリ。小学1〜2年生向けの足し算を、ドラッグ&ドロップ対応の数図ブロックで直感的に練習。効果音付きで楽しく学習。" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://jimitas.com/tashizan_1/" />

        {/* モバイル対応 */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="たしざん（ブロック）" />

        {/* 構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "たしざん練習アプリ（数図ブロック付き）",
              "alternateName": "たしざん１（数図ブロック付き）",
              "description": "数図ブロックでたしざんを視覚的に学べる無料の学習アプリ。小学1〜2年生向けの足し算を、ドラッグ&ドロップ対応の数図ブロックで直感的に練習できます。10までのかず、10+□・□+10、1□+□・□+1□、20までのかずの4つの難易度レベル。ブロックをクリック/タップで裏返し、ドラッグで移動可能。効果音付きで楽しく学習。タブレット最適化対応。ブラウザで今すぐ使える算数学習ツール。",
              "url": "https://jimitas.com/tashizan_1/",
              "applicationCategory": "EducationalApplication",
              "applicationSubCategory": "算数学習アプリ",
              "operatingSystem": "Web Browser",
              "browserRequirements": "HTML5対応ブラウザ",
              "inLanguage": "ja",
              "educationalLevel": "小学1〜2年生",
              "teaches": "足し算、たしざん、数図ブロック",
              "learningResourceType": "インタラクティブ学習アプリ",
              "interactivityType": "active",
              "isAccessibleForFree": true,
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "JPY",
                "availability": "https://schema.org/InStock"
              },
              "publisher": {
                "@type": "Organization",
                "name": "jimitas.com",
                "url": "https://jimitas.com"
              },
              "author": {
                "@type": "Organization",
                "name": "jimitas.com"
              },
              "keywords": "たしざん練習アプリ, 数図ブロック, たしざん アプリ 無料, 足し算 練習, 小学生 算数, 算数 たしざん, 小学1年生 算数, 小学2年生 算数, ドラッグアンドドロップ, 視覚的学習",
              "audience": {
                "@type": "EducationalAudience",
                "educationalRole": "student",
                "audienceType": "小学生"
              },
              "featureList": [
                "数図ブロックによる視覚的学習",
                "ドラッグ&ドロップ対応",
                "クリック/タップで裏返し機能",
                "4つの難易度レベル",
                "問題の自動生成と手動入力",
                "効果音付きで楽しく学習",
                "タブレット・スマホ最適化対応",
                "無料で使える",
                "インストール不要"
              ]
            })
          }}
        />

        {/* パンくずリスト構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "ホーム",
                  "item": "https://jimitas.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "たしざん練習アプリ（数図ブロック付き）",
                  "item": "https://jimitas.com/tashizan_1/"
                }
              ]
            })
          }}
        />

        {/* FAQ構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "たしざん練習アプリ（数図ブロック付き）は無料で使えますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "はい、完全無料でご利用いただけます。インストールも不要で、ブラウザで今すぐお使いいただけます。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "どの学年の学習に適していますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "小学1年生から2年生の算数学習に最適です。10までのかず、10+□・□+10、1□+□・□+1□、20までのかずの4つの難易度レベルがあり、お子様のレベルに合わせて練習できます。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "数図ブロックとは何ですか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "数図ブロックは、たし算を視覚的に理解するための教材です。各ブロックは10個のマスを持ち、ドラッグ&ドロップで並べ替え可能です。クリック/タップで表裏を返すことができ、タッチデバイスにも対応しています。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "スマートフォンやタブレットでも使えますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "はい、レスポンシブデザインを採用しているため、パソコン、タブレット、スマートフォンのどれでも快適にご利用いただけます。特にタブレットでの学習に最適化されています。タッチ操作にも対応しており、指でドラッグ&ドロップできます。"
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <div className="body flex flex-col min-h-screen">
        <header className="text-center mt-4 md:mt-6 lg:mt-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">➕ 算数　たしざん練習アプリ（数図ブロック付き） 🧮</h1>
        </header>
        <main className="container mx-auto flex-grow mt-4 md:mt-6 lg:mt-8">
          <div className="mt-5 text-xl md:text-2xl lg:text-3xl text-center font-bold">{title}</div>
          <div>{children}</div>
        </main>
        <footer className="bg-gray-100 mt-8 py-4">
          <p className="text-center text-sm md:text-base px-4 mb-2">
            小学1年生から2年生向けのたしざん練習アプリです。数図ブロックで視覚的に学習できます。
            <span className="text-blue-600 font-bold"> ✨ ドラッグ&ドロップでブロックを移動</span>できるので、
            手を動かしながら楽しく取り組めます。10までのかず、10+□、1□+□、20までのかずの4つの難易度レベルで幅広くサポート。
          </p>
          <p className="text-center text-sm md:text-base">
            地味に助かる学習コンテンツ：
            <a href="https://jimitas.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">
              jimitas.com
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;

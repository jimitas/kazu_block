import React from "react";
import Head from "next/head";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        {/* 基本メタタグ */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        {/* SEO: タイトル */}
        <title>ぶろっく【無料】小学1年生の算数・かずの学習に最適 | ぶろっくでかずをかぞえよう - jimitas.com</title>

        {/* SEO: メタディスクリプション */}
        <meta name="description" content="かずのがくしゅうを楽しく学べる無料アプリ。小学1年生向けにぶろっくを並べながら数の概念を視覚的に学習できます。3つのモード（なんこならべたかな・ならべたかずはいくつ・ならべよう）で段階的に学習。正解するとコインが貯まるゲーミフィケーション機能で楽しく学習。難易度は4段階（1〜5、1〜10、11〜20、1〜20）。タブレット・スマホ最適化対応。ブラウザで今すぐ使える算数学習ツール。" />

        {/* SEO: キーワード */}
        <meta name="keywords" content="ぶろっく,数図ブロック,かずのがくしゅう,かず アプリ 無料,小学生 算数,小学1年生 算数,数の概念,ブロック 算数,かずを数える,数える練習,算数 学習アプリ,ドラッグアンドドロップ,視覚的学習,オンライン学習,jimitas.com" />

        {/* SEO: 著者 */}
        <meta name="author" content="jimitas.com" />

        {/* SEO: 言語 */}
        <meta httpEquiv="content-language" content="ja" />
        <meta name="language" content="Japanese" />

        <meta name="robots" content="index, follow" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jimitas.com/kazu_block/" />
        <meta property="og:title" content="ぶろっく【無料】小学1年生の算数・かずの学習に最適 | jimitas.com" />
        <meta property="og:description" content="かずのがくしゅうを楽しく学べる無料アプリ。小学1年生向けにぶろっくを並べながら数の概念を視覚的に学習。3つのモードで段階的に学習。コインが貯まるゲーミフィケーション要素で楽しく学習。" />
        <meta property="og:site_name" content="jimitas.com" />
        <meta property="og:locale" content="ja_JP" />

        {/* Twitter Card */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jimitas.com/kazu_block/" />
        <meta property="twitter:title" content="ぶろっく【無料】小学1年生の算数・かずの学習に最適" />
        <meta property="twitter:description" content="かずのがくしゅうを楽しく学べる無料アプリ。小学1年生向けにぶろっくを並べながら数の概念を視覚的に学習。3つのモードで段階的に学習。" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://jimitas.com/kazu_block/" />

        {/* モバイル対応 */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ぶろっく" />

        {/* 構造化データ: WebApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "ぶろっく",
              "alternateName": "かずのがくしゅうアプリ（ぶろっく）",
              "description": "かずのがくしゅうを楽しく学べる無料アプリ。小学1年生向けにぶろっくを並べながら数の概念を視覚的に学習できます。3つのモード（なんこならべたかな・ならべたかずはいくつ・ならべよう）で段階的に学習。正解するとコインが貯まるゲーミフィケーション機能付き。",
              "url": "https://jimitas.com/kazu_block/",
              "applicationCategory": "EducationalApplication",
              "applicationSubCategory": "算数学習アプリ",
              "operatingSystem": "Web Browser",
              "browserRequirements": "HTML5対応ブラウザ",
              "inLanguage": "ja",
              "educationalLevel": "小学1年生",
              "teaches": "数の概念、かずを数える、ぶろっくを並べる、数の大きさ",
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
              "keywords": "ぶろっく, 数図ブロック, かずのがくしゅう, 小学1年生 算数, 数の概念, かずを数える, 算数 学習アプリ",
              "audience": {
                "@type": "EducationalAudience",
                "educationalRole": "student",
                "audienceType": "小学生"
              },
              "featureList": [
                "3つの学習モード（なんこならべたかな・ならべたかずはいくつ・ならべよう）",
                "ドラッグ&ドロップでぶろっくを自由に移動",
                "4段階の難易度選択（1〜5、1〜10、11〜20、1〜20）",
                "正解するとコインが貯まるゲーミフィケーション機能",
                "クリック/タップでぶろっくの色を変える",
                "リセットボタンで初期配置に戻る",
                "タブレット・スマホのタッチ操作に対応",
                "ブラウザで今すぐ使える・インストール不要",
                "無料で使える"
              ]
            })
          }}
        />

        {/* 構造化データ: BreadcrumbList */}
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
                  "name": "ぶろっく",
                  "item": "https://jimitas.com/kazu_block/"
                }
              ]
            })
          }}
        />

        {/* 構造化データ: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "ぶろっくアプリは無料で使えますか？",
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
                    "text": "小学1年生の4月入学当初から使える、数の概念を学ぶためのアプリです。難易度は1〜5、1〜10、11〜20、1〜20の4段階から選べます。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "どんな学習ができますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "3つのモードがあります。①なんこならべたかな：自由にぶろっくを並べて数を確かめる。②ならべたかずはいくつ：並んだぶろっくの数を答えるクイズ。③ならべよう：指定された数だけぶろっくを並べる練習。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "スマートフォンやタブレットでも使えますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "はい、タブレット・スマートフォンのタッチ操作に対応しています。指でぶろっくをドラッグ&ドロップして並べることができます。"
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <div className="body flex flex-col min-h-screen">
        <header className="text-center mt-4 md:mt-6 lg:mt-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">ぶろっく</h1>
        </header>
        <main className="container mx-auto flex-grow mt-4 md:mt-6 lg:mt-8">
          <div>{children}</div>
        </main>
        <footer className="bg-gray-100 mt-8 py-4">
          <p className="text-center text-sm md:text-base px-4 mb-2">
            小学1年生向けのかずのがくしゅうアプリです。ぶろっくを並べながら数の概念を視覚的に学習できます。
            <span className="text-blue-600 font-bold"> ✨ ドラッグ&ドロップでぶろっくを移動</span>できるので、
            手を動かしながら楽しく取り組めます。
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

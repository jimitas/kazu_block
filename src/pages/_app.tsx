import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// jimitas.com 移行案内バナー（将来削除予定）
function MigrationBanner() {
  return (
    <div style={{
      background: '#fff3cd',
      borderBottom: '2px solid #ffc107',
      padding: '10px 16px',
      textAlign: 'center',
      fontFamily: 'system-ui,-apple-system,sans-serif',
      fontSize: '14px',
      color: '#856404',
      lineHeight: 1.5,
    }}>
      📢 このアプリは{' '}
      <a href="https://jimitas.com/suuzu-block" style={{
        color: '#0d6efd',
        textDecoration: 'underline',
        fontWeight: 'bold',
      }}>jimitas.com</a>
      {' '}に集約しました。今後はそちらをご利用ください。
      <small style={{
        display: 'block',
        opacity: 0.75,
        fontSize: '12px',
        marginTop: '2px',
      }}>（このページは将来削除予定です）</small>
    </div>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MigrationBanner />
      <Component {...pageProps} />
    </>
  )
}

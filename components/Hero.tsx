import ColorRevealCursor from './ColorRevealCursor'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* 背景画像（モノクロ） */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/city.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // 画像をモノクロにし、少し暗くして、コントラストを上げる
          filter: 'grayscale(100%) brightness(50%) contrast(120%)' 
        }}
      />
      
      {/* カーソル追従でカラー表示 */}
      <ColorRevealCursor />
      
      {/* オーバーレイ（必要であれば追加で暗くする） */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      
      {/* コンテンツ */}
      <div className="relative z-10 text-white px-4 w-full mx-auto mt-16 flex flex-col items-center">
        <div className="font-bold tracking-wider uppercase leading-none text-center w-full" style={{ fontFamily: 'DIN, DIN Alternate, Arial, sans-serif', fontSize: 'clamp(3rem, 12vw, 20rem)' }}>
          BUILT
        </div>
        <div className="font-bold tracking-wider leading-none -mt-8 md:-mt-12 lg:-mt-16 text-center w-full" style={{ fontFamily: 'DIN, DIN Alternate, Arial, sans-serif', fontSize: 'clamp(3rem, 12vw, 20rem)' }}>
          ×
        </div>
        <div className="font-bold tracking-wider uppercase leading-none -mt-8 md:-mt-12 lg:-mt-16 text-center w-full" style={{ fontFamily: 'DIN, DIN Alternate, Arial, sans-serif', fontSize: 'clamp(3rem, 12vw, 20rem)' }}>
          TECHNOLOGY
        </div>
      </div>
    </section>
  )
}

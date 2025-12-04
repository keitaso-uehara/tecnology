import Link from 'next/link';

export default function Header() {
	return (
		<header className="w-full bg-white py-5 px-6 md:px-12 flex items-center justify-between fixed top-0 z-50 shadow-sm">
			<div className="flex items-center gap-3">
				{/* ロゴマーク - CSS/SVGで再現 */}
				<div className="relative w-9 h-9 flex-shrink-0">
					<svg viewBox="0 0 40 40" className="w-full h-full">
						{/* メインの円（破線） - 黒っぽいグレー */}
						<circle cx="20" cy="20" r="14" stroke="#1f2937" strokeWidth="5" fill="none" strokeDasharray="6 5" transform="rotate(-45 20 20)" />
						{/* 右上のアクセント（赤） - 三角形っぽく */}
						<path d="M28 6 L36 14 L28 14 Z" fill="#dc2626" />
					</svg>
				</div>
				<span className="text-2xl font-bold tracking-wider text-gray-900 font-sans">Affectory</span>
			</div>

			<nav className="hidden md:flex items-center gap-8 font-bold text-sm text-gray-900">
				<Link href="#" className="hover:text-gray-600 transition-colors">
					事業内容
				</Link>
				<Link href="#" className="hover:text-gray-600 transition-colors">
					事例
				</Link>
				<Link href="#" className="hover:text-gray-600 transition-colors">
					お知らせ
				</Link>
				<Link href="#" className="hover:text-gray-600 transition-colors">
					企業情報
				</Link>
				<Link href="#" className="hover:text-gray-600 transition-colors">
					お問い合わせ
				</Link>
			</nav>

			{/* モバイル用メニューアイコン（簡易） */}
			<button className="md:hidden text-gray-900">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
			</button>
		</header>
	);
}

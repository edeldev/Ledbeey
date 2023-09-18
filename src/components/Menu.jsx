import Link from "next/link"

function Menu({setMenu}) {
  return (
    <div className="menu__nav">
        <Link href="/lujo" onClick={() => setMenu(false)}>Ledbeey Lujo</Link>
        <Link href="/elegancia" onClick={() => setMenu(false)}>Ledbeey Elegante</Link>
        <Link href="/diseno-moderno" onClick={() => setMenu(false)}>Ledbeey Diseño Moderno</Link>
        <Link href="/brillante" onClick={() => setMenu(false)}>Ledbeey Brillante</Link>
        <Link href="/estilo-minimalista" onClick={() => setMenu(false)}>Ledbeey Estilo Minimalista</Link>
        <Link href="/estilo-futurista" onClick={() => setMenu(false)}>Ledbeey Futurista</Link>
        <Link href="/year" onClick={() => setMenu(false)}>Ledbeey Year</Link>
        <hr />
        <a href="#ledbeey" onClick={() => setMenu(false)}>Colección Ledbeey</a>
        <a href="#edeldev" onClick={() => setMenu(false)}>Colección Edeldev</a>
        <a href="#nft" onClick={() => setMenu(false)}>Colección Nfts</a>
        <details>
            <summary>Social Media</summary>
            <div>
                <a href="https://www.instagram.com/ledbeey/" target="_blank">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=100094724646752" target="_blank">Facebook</a>
                <a href="https://www.tiktok.com/@ledbeey" target="_blank">TikTok</a>
            </div>
        </details>
    </div>
  )
}

export default Menu

import Link from "next/link";

const BADGE_IMG = "/images/logo.png";

const locations = [
  { name: "Gold Coast (Upper Coomera)", href: "https://kansaikarategoldcoast.com.au" },
  { name: "Sumner Park / Springfield / Moggill", href: "https://www.kansaikarate.com.au" },
  { name: "Willawong", href: "https://kansaikaratewillawong.com.au" },
  { name: "Clayfield", href: "https://www.karateclayfield.com" },
];

export default function Footer() {
  return (
    <footer className="bg-[#4A6DA0] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BADGE_IMG} alt="Kansai Karate Academy" className="w-20 mb-4" />
          <h3 className="text-[#FFB800] font-bold text-lg mb-2">Kansai Karate Tarragindi</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Traditional Shitoryu Shukokai karate for kids, teens and adults in Tarragindi, Brisbane.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-white/90">Contact Us:</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <a href="tel:0480566172" className="hover:text-[#FFB800] transition-colors">
                📞 0480 566 172
              </a>
            </li>
            <li>
              <a href="mailto:jason@kansaikaratetarragindi.com.au" className="hover:text-[#FFB800] transition-colors">
                ✉️ jason@kansaikaratetarragindi.com.au
              </a>
            </li>
            <li className="text-white/60">
              📍 Wellers Hill Bowls Club<br />
              34 Esher St, Tarragindi QLD 4121
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-semibold mb-3 text-white/90">Programs</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link href="/programs/little-lions" className="hover:text-[#FFB800] transition-colors">Little Lions (Ages 5–7)</Link></li>
            <li><Link href="/programs/juniors" className="hover:text-[#FFB800] transition-colors">Juniors (Ages 8–12)</Link></li>
            <li><Link href="/programs/teens" className="hover:text-[#FFB800] transition-colors">Teens Karate (13–17)</Link></li>
            <li><Link href="/programs/adults" className="hover:text-[#FFB800] transition-colors">Adult Karate</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold mb-3 text-white/90">Follow Us</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61584025310463"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFB800] transition-colors"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/kansaikaratetarragindi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFB800] transition-colors"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Other Kansai Locations */}
        <div>
          <h4 className="font-semibold mb-3 text-white/90">Other Kansai Karate Locations:</h4>
          <ul className="space-y-2 text-sm text-white/60">
            {locations.map((loc) => (
              <li key={loc.name}>
                <a
                  href={loc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFB800] transition-colors"
                >
                  {loc.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
        <p>© {new Date().getFullYear()} Kansai Karate Tarragindi. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white/70">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white/70">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}

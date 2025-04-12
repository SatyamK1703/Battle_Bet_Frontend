export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">BattleBets</h2>
              <p className="text-sm">
                The premier platform for BGMI and PUBG esports betting. Place bets on your favorite teams and tournaments.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Matches', 'Tournaments', 'Leaderboard', 'News'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Games */}
            <div>
              <h3 className="text-white font-semibold mb-4">Games</h3>
              <ul className="space-y-2">
                {['BGMI', 'PUBG', 'PUBG Mobile', 'PUBG: New State'].map((game) => (
                  <li key={game}>
                    <a href="#" className="hover:text-white transition-colors">
                      {game}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {['Help Center', 'FAQ', 'Contact Us', 'Terms of Service'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 BattleBets. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
import { useState } from 'react';
import { Trophy, CalendarDays, Users, Gamepad2, ChevronRight, Sword, Shield, Info } from 'lucide-react';

export default function TournamentBanner() {
  const [showDetails, setShowDetails] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [teamName, setTeamName] = useState('');

  const toggleDetails = () => setShowDetails(!showDetails);
  const handleRegistration = () => {
    if (teamName) {
      alert(`Team ${teamName} registered successfully!`);
      setIsRegistering(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-xl overflow-hidden 
      hover:transform hover:scale-[1.005] transition-all duration-300 group">
      
      {/* Animated Tournament Banner */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1636325780255-4159d2801864?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=400" 
          alt="BGMI Tournament"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 via-cyan-800/20 to-transparent" />
        
        <button className="absolute top-3 right-3 bg-cyan-400/90 text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold 
          flex items-center gap-1 hover:bg-cyan-300 transition-colors shadow-lg">
          <Info size={16} /> Featured Event 
        </button>
      </div>

      <div className="p-6 space-y-6">
        {/* Animated Header Section */}
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-cyan-400 animate-pulse">
              BGMI Masters Season 5
            </h2>
            <p className="text-gray-300 text-sm flex items-center gap-2">
              <Sword size={16} className="text-cyan-400" />
              <span className="hover:text-cyan-300 transition-colors">Squad TPP Tournament</span>
              <Shield size={16} className="text-cyan-400" />
            </p>
          </div>
          <div className="bg-cyan-400 p-2 rounded-lg hover:bg-cyan-300 transition-colors cursor-pointer">
            <Gamepad2 className="text-gray-900 w-7 h-7" />
          </div>
        </div>

        {/* Interactive Description */}
        <div className="space-y-4">
          <div className="relative overflow-hidden">
            <p className={`text-gray-300 text-sm transition-all duration-500 ${
              showDetails ? 'max-h-[500px]' : 'max-h-20'
            }`}>
              {showDetails ? 
                `Join the ultimate BGMI showdown! Compete against the best squads in India. Season 5 features:
                - New exclusive maps
                - Special weapon skins rewards
                - Celebrity guest appearances
                - National finals qualification for top 10 teams
                - Daily leaderboard challenges` : 
                `Join the ultimate BGMI showdown! Compete against the best squads in India. Season 5 features new maps, special rewards, and celebrity appearances...`
              }
            </p>
            <button 
              onClick={toggleDetails}
              className="text-cyan-400 text-sm font-medium flex items-center gap-1 mt-2 hover:text-cyan-300"
            >
              {showDetails ? 'Show Less' : 'Read More'} 
              <ChevronRight className={`transition-transform ${showDetails ? 'rotate-90' : ''}`} size={16} />
            </button>
          </div>
        </div>

        {/* Glowing Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg hover:bg-gray-750 transition-colors">
            <CalendarDays className="text-cyan-400 w-6 h-6" />
            <div>
              <p className="text-gray-300 text-xs">Start Date</p>
              <p className="text-white font-medium">15 Aug 2024</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg hover:bg-gray-750 transition-colors">
            <Trophy className="text-cyan-400 w-6 h-6" />
            <div>
              <p className="text-gray-300 text-xs">Prize Pool</p>
              <p className="text-white font-medium">₹2,00,000</p>
            </div>
          </div>
        </div>

        {/* Registration Section with Animation */}
        <div className="bg-gray-800 rounded-xl p-4 space-y-4 hover:shadow-cyan-500/10 hover:shadow-lg transition-all">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-300 text-sm">Registration Ends</p>
              <p className="text-cyan-400 font-bold text-xl">2D : 14H : 32M</p>
            </div>
            <div className="text-right">
              <p className="text-gray-300 text-sm">Teams Registered</p>
              <p className="text-white font-medium">420/500</p>
            </div>
          </div>

          {isRegistering ? (
            <div className="flex gap-2 animate-fadeIn">
              <input
                type="text"
                placeholder="Enter Team Name"
                className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
              <button
                onClick={handleRegistration}
                className="bg-cyan-400 hover:bg-cyan-300 text-gray-900 px-6 py-3 rounded-lg 
                  font-semibold text-sm transition-colors flex items-center gap-2"
              >
                Submit
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <button className="bg-cyan-400 hover:bg-cyan-300 text-gray-900 px-6 py-3 rounded-lg 
                font-semibold flex-1 transition-colors flex items-center justify-center gap-2">
                Explore Tournament
                <ChevronRight size={16} />
              </button>
              <button
                onClick={() => setIsRegistering(true)}
                className="bg-gray-900 hover:bg-cyan-400 hover:text-gray-900 px-6 py-3 rounded-lg 
                  font-semibold transition-colors border border-cyan-400 text-cyan-400"
              >
                Register Team
              </button>
            </div>
          )}
        </div>

        {/* Animated Rules Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-300 text-sm hover:text-cyan-300 transition-colors">
            <Shield className="text-cyan-400 w-4 h-4" />
            TPP Mode | Custom Room
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-sm hover:text-cyan-300 transition-colors">
            <Shield className="text-cyan-400 w-4 h-4" />
            Asia Server | Erangel Only
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-sm hover:text-cyan-300 transition-colors">
            <Shield className="text-cyan-400 w-4 h-4" />
            Minimum Level 40 Required
          </div>
        </div>
      </div>
    </div>
  );
}
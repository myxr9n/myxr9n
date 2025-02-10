"use client"

import { Instagram, DiscIcon as Discord, ArrowUpRight, Clock } from "lucide-react"
import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white perspective-1000">
      {/* Background grid effect */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDMzIiBvcGFjaXR5PSIwLjIiPjxwYXRoIGQ9Ik0wIDIwaDIwTTAgMGgyME0wIDEwaDIwTTEwIDBoMHYyMGgweiIvPjwvZz48L3N2Zz4=')] opacity-20" />

      <div className="relative max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-4">
            <Image
              src="https://sjc.microlink.io/Sk82D3MLdbP1E4FPBHKamwciqmbS5wzC8fqbmDPKI0bgowCSvNtUGEnPiVzqrn3HZXbeqSCRpnvsHfUe3LvMzw.jpeg"
              alt="Profile"
              width={64}
              height={64}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                SZYMOOL
                <span className="text-xs bg-red-500/20 text-red-500 px-2 py-1 rounded">OFFLINE</span>
              </h1>
              <p className="text-gray-400 text-sm">Business enquiries: kontakt@szymool.pl</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="bg-black/50 border border-[#0f0f0f] rounded-lg p-3">
              <div className="text-[#00ff00] font-bold">KICK</div>
              <div className="text-xs text-gray-400">EVERYDAY 20:00 CEST</div>
            </div>
            <a href="#" className="hover:text-[#00ff00] transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-[#00ff00] transition-colors">
              <Discord className="w-6 h-6" />
            </a>
          </div>
        </header>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          <div className="bg-black/50 border border-[#0f0f0f] rounded-lg p-6 relative overflow-hidden">
            <div>
              <div className="text-[#00ff00] text-2xl font-bold">$10,000</div>
              <div className="text-xl font-bold mb-2">MONTHLY</div>
              <div className="text-xl font-bold flex items-center gap-2 mb-4">
                STAKE WAGER RACE <span className="text-2xl">🚀</span>
              </div>
              <p className="text-gray-400 mb-6">Take part in a monthly wager race and win up to $2,000.</p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                Ends in 8d 8h
              </div>
            </div>
            <button className="absolute bottom-6 right-6 hover:text-[#00ff00] transition-colors">
              <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-black/50 border border-[#0f0f0f] rounded-lg p-6 relative">
            <div className="text-xl font-bold flex items-center gap-2 mb-4">
              CASINO & BONUSES
              <br />
              INSTRUCTIONS 📚
            </div>
            <p className="text-gray-400 mb-6">Learn about how to get access to casino, get bonuses etc.</p>
            <button className="absolute bottom-6 right-6 hover:text-[#00ff00] transition-colors">
              <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-black/50 border border-[#0f0f0f] rounded-lg p-6 relative">
            <div>
              <div className="text-xl font-bold flex items-center gap-2 mb-4">
                GET <span className="text-[#00ff00]">FREE MONEY</span>
                <br />
                ON X 🎁
              </div>
              <p className="text-gray-400 mb-6">Take part in giveaways and win free money everyday!</p>
            </div>
            <button className="absolute bottom-6 right-6 hover:text-[#00ff00] transition-colors">
              <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Recommendations */}
        <div className="text-center mb-8">
          <h2 className="text-2xl">
            Recommended by <span className="text-[#00ff00] font-bold">SZYMOOL</span>
          </h2>
        </div>

        <div className="bg-black/50 border border-[#0f0f0f] rounded-lg p-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-1">
              <Image
                src="https://sjc.microlink.io/Sk82D3MLdbP1E4FPBHKamwciqmbS5wzC8fqbmDPKI0bgowCSvNtUGEnPiVzqrn3HZXbeqSCRpnvsHfUe3LvMzw.jpeg"
                alt="Casino Preview"
                width={400}
                height={300}
                className="rounded-lg w-full"
              />
            </div>
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">100+50 FREE SPINS, 100% DEPOSIT BONUS</h3>

              <div className="mb-6">
                <h4 className="text-gray-400 mb-2">Top features</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-[#00ff00]">✓</span>
                    Deposits with credit cards, crypto & BLiK!
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00ff00]">✓</span>
                    100% Deposit Bonus
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00ff00]">✓</span>
                    100+50 Free Spins
                  </li>
                </ul>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <div className="text-gray-400 mb-1">Minimum deposit</div>
                  <div className="text-2xl font-bold">---</div>
                </div>
                <button className="bg-[#00ff00] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#00ff00]/90 transition-colors">
                  CLAIM BONUSES <ArrowUpRight className="inline w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


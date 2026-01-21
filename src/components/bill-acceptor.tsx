"use client"

export function BillAcceptor() {
  return (
    <div className="relative">
      {/* Main acceptor body */}
      <div className="relative w-48 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 rounded-lg shadow-2xl border border-zinc-600 overflow-hidden">
        {/* Yellow label */}
        <div className="bg-yellow-400 py-1.5 px-3 text-center">
          <span className="text-xs font-bold text-zinc-900 tracking-wide">ACCEPTS $1 BILLS</span>
        </div>

        {/* Bill slot area */}
        <div className="p-4 flex flex-col items-center">
          {/* Bill slot */}
          <div className="relative w-full">
            {/* Slot housing */}
            <div className="w-full h-4 bg-zinc-950 rounded-sm border border-zinc-600 shadow-inner flex items-center justify-center">
              <div className="w-[90%] h-1 bg-zinc-800 rounded-full" />
            </div>

            {/* $1 bill partially inserted */}
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-[85%] rotate-1">
              <div className="relative bg-gradient-to-r from-green-700 via-green-600 to-green-700 rounded-sm shadow-lg border border-green-800 p-2 h-16">
                {/* Bill details */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-green-900/50 font-serif text-3xl font-bold">$1</span>
                </div>
                {/* Bill texture */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 2px,
                    rgba(0,0,0,0.1) 2px,
                    rgba(0,0,0,0.1) 4px
                  )`,
                  }}
                />
                {/* Bill border pattern */}
                <div className="absolute inset-1 border border-green-500/30 rounded-sm" />
              </div>
            </div>
          </div>

          {/* Insert instruction */}
          <div className="mt-3 flex items-center gap-2 text-zinc-400">
            <span className="text-[10px] font-medium tracking-wide">INSERT BILL HERE</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* LED indicator */}
        <div className="absolute top-10 right-2 w-2 h-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50 animate-pulse" />
      </div>

      {/* Shadow under the acceptor */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/20 rounded-full blur-md" />
    </div>
  )
}

/**
 * Realistic mini-website mockups rendered in pure CSS.
 * Each variant is a self-contained "screenshot" with its own palette
 * (a website screenshot doesn't follow our site's light/dark theme).
 * Text/blocks scale with the card via container-query units (cqw).
 */

// Font-size helpers (scale with the card width)
const T = {
  hero: "text-[clamp(13px,5.5cqw,38px)]",
  h: "text-[clamp(8px,3cqw,20px)]",
  label: "text-[clamp(5px,2cqw,12px)]",
  tiny: "text-[clamp(4px,1.5cqw,9px)]",
};

// A skeleton text bar
function Bar({
  w = "w-full",
  className = "",
}: {
  w?: string;
  className?: string;
}) {
  return (
    <span
      className={`block h-[clamp(1.5px,0.9cqw,6px)] rounded-full ${w} ${className}`}
    />
  );
}

function NavDots({ color }: { color: string }) {
  return (
    <div className="flex items-center gap-[1.2cqw]">
      <Bar w="w-[6cqw]" className={color} />
      <Bar w="w-[6cqw]" className={color} />
      <Bar w="w-[6cqw]" className={color} />
    </div>
  );
}

function Restaurant() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#1d130b] via-[#140d07] to-[#080503] p-[5%] text-white">
      <div className="flex items-center justify-between">
        <span className={`${T.h} font-serif tracking-wide text-orange-400`}>
          Savory
        </span>
        <NavDots color="bg-white/30" />
        <span
          className={`${T.tiny} rounded-full border border-orange-400/60 px-[2.5cqw] py-[0.8cqw] text-orange-300`}
        >
          Reserve
        </span>
      </div>

      <div className="mt-[8%] flex items-center justify-between gap-[4%]">
        <div className="max-w-[58%]">
          <div className={`${T.hero} font-serif font-semibold leading-[1.05]`}>
            Fine Dining
            <br />
            <span className="text-orange-400">Redefined.</span>
          </div>
          <div className="mt-[5%] space-y-[1.6cqw]">
            <Bar w="w-[90%]" className="bg-white/20" />
            <Bar w="w-[70%]" className="bg-white/15" />
          </div>
          <span
            className={`${T.tiny} mt-[6%] inline-block rounded-full bg-orange-500 px-[4cqw] py-[1.6cqw] font-semibold text-black`}
          >
            Book a Table
          </span>
        </div>
        <div className="aspect-square w-[34%] rounded-full bg-gradient-to-br from-orange-300 via-orange-500 to-red-700 shadow-[0_10px_40px_rgba(249,115,22,0.4)]" />
      </div>

      <div className="absolute inset-x-[5%] bottom-[5%] flex gap-[3%]">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex-1 rounded-[1.5cqw] bg-white/[0.06] p-[2.5cqw]"
          >
            <div className="aspect-[4/3] w-full rounded-[1cqw] bg-gradient-to-br from-orange-400/40 to-red-500/20" />
            <Bar w="w-[80%]" className="mt-[2cqw] bg-white/25" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Fitness() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a] p-[5%] text-white">
      <div className="absolute -right-[10%] -top-[20%] h-[80%] w-[55%] -rotate-12 bg-gradient-to-b from-lime-400/30 to-transparent blur-[2cqw]" />
      <div className="relative flex items-center justify-between">
        <span className={`${T.h} font-extrabold italic tracking-tight`}>
          PULSE<span className="text-lime-400">FIT</span>
        </span>
        <NavDots color="bg-white/30" />
        <span
          className={`${T.tiny} rounded-[1cqw] bg-lime-400 px-[3cqw] py-[1cqw] font-bold text-black`}
        >
          JOIN NOW
        </span>
      </div>

      <div className="relative mt-[9%]">
        <div className={`${T.hero} font-extrabold uppercase leading-[0.92] tracking-tight`}>
          Transform
          <br />
          Your <span className="text-lime-400">Body</span>
        </div>
        <div className="mt-[5%] space-y-[1.6cqw]">
          <Bar w="w-[55%]" className="bg-white/20" />
          <Bar w="w-[40%]" className="bg-white/15" />
        </div>
      </div>

      <div className="absolute inset-x-[5%] bottom-[6%] flex gap-[3%]">
        {[
          ["500+", "Members"],
          ["20", "Trainers"],
          ["50+", "Classes"],
        ].map(([n, l]) => (
          <div
            key={l}
            className="flex-1 rounded-[1.5cqw] border border-lime-400/20 bg-white/[0.04] px-[2.5cqw] py-[2cqw]"
          >
            <div className={`${T.h} font-extrabold text-lime-400`}>{n}</div>
            <div className={`${T.tiny} text-white/50`}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hospital() {
  return (
    <div className="absolute inset-0 bg-[#f5f9ff] p-[5%] text-slate-800">
      <div className="flex items-center justify-between">
        <span className={`${T.h} font-bold text-sky-600`}>
          ✚ MediCare
        </span>
        <NavDots color="bg-slate-300" />
        <span
          className={`${T.tiny} rounded-full bg-sky-600 px-[3cqw] py-[1.2cqw] font-semibold text-white`}
        >
          Book Appointment
        </span>
      </div>

      <div className="mt-[8%] flex items-center justify-between gap-[4%]">
        <div className="max-w-[55%]">
          <div className={`${T.hero} font-bold leading-[1.05] text-slate-900`}>
            Your Health,
            <br />
            <span className="text-sky-600">Our Priority.</span>
          </div>
          <div className="mt-[5%] space-y-[1.6cqw]">
            <Bar w="w-[90%]" className="bg-slate-200" />
            <Bar w="w-[75%]" className="bg-slate-200" />
          </div>
        </div>
        <div className="aspect-[4/3] w-[38%] rounded-[2cqw] bg-gradient-to-br from-sky-200 to-blue-400" />
      </div>

      <div className="absolute inset-x-[5%] bottom-[5%] flex gap-[3%]">
        {["Cardiology", "Neurology", "Dental"].map((d) => (
          <div
            key={d}
            className="flex-1 rounded-[1.5cqw] bg-white p-[2.5cqw] shadow-[0_4px_14px_rgba(2,132,199,0.12)]"
          >
            <div className="mb-[1.6cqw] aspect-square w-[6cqw] rounded-full bg-sky-100" />
            <div className={`${T.tiny} font-semibold text-slate-700`}>{d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Travel() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#ecfeff] to-white p-[5%] text-slate-800">
      <div className="flex items-center justify-between">
        <span className={`${T.h} font-bold text-teal-600`}>Wanderly</span>
        <span
          className={`${T.tiny} flex items-center gap-[2cqw] rounded-full bg-white px-[3cqw] py-[1.2cqw] text-slate-400 shadow-sm`}
        >
          Search destinations… <span className="text-teal-500">⌕</span>
        </span>
      </div>

      <div className="mt-[6%]">
        <div className={`${T.h} font-extrabold text-slate-900`}>
          Explore the <span className="text-teal-500">World</span>
        </div>
      </div>

      <div className="absolute inset-x-[5%] bottom-[6%] flex gap-[3.5%]">
        {[
          ["Bali", "₹42,000", "from-cyan-300 to-teal-500"],
          ["Paris", "₹68,000", "from-sky-300 to-indigo-400"],
          ["Dubai", "₹35,000", "from-amber-300 to-orange-500"],
        ].map(([city, price, grad]) => (
          <div
            key={city}
            className="flex-1 overflow-hidden rounded-[1.8cqw] bg-white shadow-[0_6px_18px_rgba(13,148,136,0.15)]"
          >
            <div className={`aspect-[5/3] w-full bg-gradient-to-br ${grad}`} />
            <div className="flex items-center justify-between p-[2cqw]">
              <span className={`${T.tiny} font-semibold text-slate-700`}>
                {city}
              </span>
              <span className={`${T.tiny} font-bold text-teal-600`}>
                {price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="absolute inset-0 flex bg-[#0b0e1a] text-white">
      {/* sidebar */}
      <div className="flex w-[16%] flex-col items-center gap-[3cqw] border-r border-white/5 bg-white/[0.02] py-[5%]">
        <div className="aspect-square w-[5cqw] rounded-[1cqw] bg-violet-500" />
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`aspect-square w-[4cqw] rounded-[1cqw] ${
              i === 0 ? "bg-violet-400/80" : "bg-white/10"
            }`}
          />
        ))}
      </div>

      {/* main */}
      <div className="flex-1 p-[4%]">
        <div className="flex items-center justify-between">
          <div>
            <Bar w="w-[24cqw]" className="bg-white/30" />
            <Bar w="w-[16cqw]" className="mt-[1.4cqw] bg-white/10" />
          </div>
          <div className="aspect-square w-[6cqw] rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500" />
        </div>

        {/* stat cards */}
        <div className="mt-[5%] flex gap-[3%]">
          {[
            ["Revenue", "₹8.2L", "text-violet-300"],
            ["Users", "12.4k", "text-emerald-300"],
            ["Growth", "+24%", "text-sky-300"],
          ].map(([l, v, c]) => (
            <div
              key={l}
              className="flex-1 rounded-[1.5cqw] border border-white/5 bg-white/[0.03] p-[2.4cqw]"
            >
              <div className={`${T.tiny} text-white/40`}>{l}</div>
              <div className={`${T.h} font-bold ${c}`}>{v}</div>
            </div>
          ))}
        </div>

        {/* chart */}
        <div className="mt-[4%] rounded-[1.5cqw] border border-white/5 bg-white/[0.03] p-[2.4cqw]">
          <Bar w="w-[20cqw]" className="bg-white/20" />
          <div className="mt-[2.5cqw] flex h-[16cqw] items-end gap-[1.6cqw]">
            {[40, 65, 50, 80, 55, 90, 70, 100, 60].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 rounded-t-[0.6cqw] bg-gradient-to-t from-violet-500/40 to-fuchsia-400"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Agency() {
  return (
    <div className="absolute inset-0 bg-[#0c0c0d] p-[5%] text-white">
      <div className="flex items-center justify-between">
        <span className={`${T.h} font-bold tracking-tight`}>Atelier°</span>
        <NavDots color="bg-white/30" />
        <span className={`${T.tiny} text-white/50`}>Let&apos;s talk →</span>
      </div>

      <div className="mt-[7%] flex items-end justify-between">
        <div className={`${T.hero} font-bold leading-[0.95] tracking-tight`}>
          We Create
          <br />
          <span className="bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
            Bold Brands.
          </span>
        </div>
        <Bar w="w-[18%]" className="mb-[2cqw] bg-white/15" />
      </div>

      <div className="absolute inset-x-[5%] bottom-[5%] grid grid-cols-3 gap-[3%]">
        {[
          "from-fuchsia-500/70 to-pink-600/40",
          "from-violet-500/60 to-indigo-600/40",
          "from-rose-400/60 to-orange-500/40",
        ].map((g, i) => (
          <div
            key={i}
            className={`aspect-[4/3] rounded-[1.5cqw] bg-gradient-to-br ${g}`}
          />
        ))}
      </div>
    </div>
  );
}

const MAP = {
  restaurant: Restaurant,
  fitness: Fitness,
  hospital: Hospital,
  travel: Travel,
  dashboard: Dashboard,
  agency: Agency,
} as const;

export type MockupVariant = keyof typeof MAP;

export default function ProjectMockup({ variant }: { variant: MockupVariant }) {
  const Comp = MAP[variant] ?? Restaurant;
  return (
    <div
      className="absolute inset-0 select-none"
      style={{ containerType: "inline-size" }}
      aria-hidden
    >
      <Comp />
    </div>
  );
}

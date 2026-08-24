export default function AnnouncementBar() {
  return (
    <div className="bg-[#18181B] text-amber-400 text-xs py-2 px-4 text-center font-medium border-b border-white/10 flex flex-wrap justify-center items-center gap-2 md:gap-3">
      <span>🔥 Lunch Special: $23 Wood-Fired Pizzas (Fri–Sun, 12pm–3pm)</span>
      <span className="hidden md:inline text-white/30">|</span>
      <span className="text-gray-200">
        Open 7 Days: <strong className="text-amber-400">Mon–Thu 5pm–9pm</strong>, <strong className="text-amber-400">Fri–Sun 12pm–9pm</strong>
      </span>
    </div>
  );
}

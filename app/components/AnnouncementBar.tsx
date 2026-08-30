import { OPENING_HOURS_SHORT } from "@/app/config/constants";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#18181B] text-amber-400 text-xs py-2 px-4 text-center font-medium border-b border-white/10 flex flex-wrap justify-center items-center gap-2 md:gap-3">
      <span>🔥 Lunch Special: $23 Wood-Fired Pizzas </span>
      <span className="hidden md:inline text-white/30">|</span>
      <span className="text-gray-200">
        Open 7 Days:{" "}
        {OPENING_HOURS_SHORT.map((entry, i) => (
          <span key={entry.days}>
            <strong className="text-amber-400">
              {entry.days} {entry.hours}
            </strong>
            {i < OPENING_HOURS_SHORT.length - 1 ? ", " : ""}
          </span>
        ))}
      </span>
    </div>
  );
}

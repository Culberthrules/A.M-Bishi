/**
 * SlidingBanner Component
 * Thin, auto-scrolling marquee bar at the very top of the page displaying
 * the three trust badges: "01 — AMA BISHI LTD", "Lab Verified", "100% Lab-Tested Lots".
 */
const SlidingBanner = () => {
  const items = [
    '01 — AMA BISHI LTD',
    'Lab Verified',
    '100% Lab-Tested Lots',
  ];

  // Duplicate content for seamless loop
  const renderItems = () =>
    items.map((item, i) => (
      <span key={i} className="flex items-center gap-2 whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-cream-200">
          {item}
        </span>
      </span>
    ));

  return (
    <div className="bg-forest-950 border-b border-white/10 overflow-hidden relative z-[60]">
      <div className="marquee-container flex py-1.5">
        <div className="marquee-track flex items-center gap-8 px-4">
          {renderItems()}
          {renderItems()}
          {renderItems()}
          {renderItems()}
          {renderItems()}
          {renderItems()}
        </div>
      </div>
    </div>
  );
};

export default SlidingBanner;

const Pill = ({ color, label }: { color: any, label: string }) => {
  // JIT compiler needs the classes formed beforehand so creating an object with full class names to make the classes and styling available on the browser
  const classes: Record<string, { bg: string; text: string; ring: string; fill: string }> = {
    pink: {
      bg: "bg-pink-200",
      text: "text-pink-900",
      ring: "ring-pink-900",
      fill: "fill-pink-900",
    },
    red: {
      bg: "bg-red-200",
      text: "text-red-900",
      ring: "ring-red-900",
      fill: "fill-red-900",
    },
    yellow: {
      bg: "bg-yellow-200",
      text: "text-yellow-900",
      ring: "ring-yellow-900",
      fill: "fill-yellow-900",
    },
    slate: {
      bg: "bg-slate-200",
      text: "text-slate-900",
      ring: "ring-slate-900",
      fill: "fill-slate-900",
    },
    green: {
      bg: "bg-green-200",
      text: "text-green-900",
      ring: "ring-green-900",
      fill: "fill-green-900",
    },
    purple: {
      bg: "bg-purple-200",
      text: "text-purple-900",
      ring: "ring-purple-900",
      fill: "fill-purple-900",
    }
  };
  const currentClass = classes[color as any] || classes.pink;
  return (
    <span className={`inline-flex items-center rounded-md ${currentClass.bg} ${currentClass.ring} ${currentClass.text} px-2 py-1 text-xs font-medium ring-1 ring-inset`}>
      <svg className={`${currentClass.fill} mr-1 w-1.5 h-1.5`} viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
      {label}
    </span>
  );
};

export default Pill;
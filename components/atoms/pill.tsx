const Pill = ({color, label} : {color: string, label: string}) => {
  return (
    <span className={`inline-flex items-center rounded-md bg-${color}-50 px-2 py-1 text-xs font-medium text--${color}-600 ring-1 ring-inset ring--${color}-500/10`}>
      <svg className={`fill-${color}-600 w-1.5 h-1.5`} viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
      {label}
    </span>
  );
};

export default Pill;
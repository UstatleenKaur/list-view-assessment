// Loader component for a single row of issue
const LoadingIssueElement = () => (
  <div className="flex py-2 px-3 w-full mx-auto  border-b-2 border-b-gray-800">
    <div className="animate-pulse flex w-full space-x-4">
      <div className="flex gap-4 grow items-center">
        <div className="h-2 w-8 bg-slate-700 rounded col-span-1"></div>
        <div className="h-2 w-1/2 bg-slate-700 rounded col-span-5"></div>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-6 w-20 bg-slate-700 rounded col-span-2"></div>
        <div className="h-6 w-20 bg-slate-700 rounded col-span-2"></div>
        <div className="rounded-full bg-slate-700 h-8 w-8"></div>
      </div>
    </div>
  </div>
);

export default LoadingIssueElement;
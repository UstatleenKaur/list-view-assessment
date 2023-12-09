import LoadingIssueElement from "../atoms/loading-issue-element";

const LoadingIssues = ({ totalItems = 5 }: { totalItems?: number }) => {
  return (
    <div className="flex flex-col w-full">
      {([...Array(totalItems)]).map((_, i) => (
        <LoadingIssueElement key={i} />
      ))}
    </div>
  );
};

export default LoadingIssues;
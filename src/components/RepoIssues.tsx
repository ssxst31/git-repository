import { useState } from "react";

import RepoIssueCard from "components/RepoIssueCard";
import PaginationWrapper from "components/PaginationWrapper";
import useRepoIssues from "hooks/useRepoIssues";

interface RepoIssuesProps {
  loginId: string;
  repository: string;
  onContactClick: () => void;
}

const DEFAULT_PAGE_SIZE = 3;

function RepoIssues({ loginId, repository, onContactClick }: RepoIssuesProps) {
  const [page, setPage] = useState<number>(1);
  const issues = useRepoIssues(loginId, repository);

  const offset = (page - 1) * DEFAULT_PAGE_SIZE;
  const limit = (page - 1) * DEFAULT_PAGE_SIZE + DEFAULT_PAGE_SIZE;

  const handlePageChange = (page: number) => {
    onContactClick();
    setPage(page);
  };

  if (!issues) return <></>;

  return (
    <div>
      {issues.slice(offset, limit).map((issue: any) => (
        <RepoIssueCard issue={issue} key={issue.id} />
      ))}
      {issues.length > DEFAULT_PAGE_SIZE && (
        <PaginationWrapper
          activePage={page}
          totalPages={Math.ceil(issues.length / 3)}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default RepoIssues;

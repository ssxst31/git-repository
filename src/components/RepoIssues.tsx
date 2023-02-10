import { useState } from "react";

import RepoIssueCard from "components/RepoIssueCard";
import PaginationWrapper from "components/PaginationWrapper";
import useRepoIssues from "hooks/useRepoIssues";

interface RepoIssuesProps {
  loginId: string;
  repository: string;
}

const DEFAULT_PAGE_SIZE = 3;

function RepoIssues({ loginId, repository }: RepoIssuesProps) {
  const [page, setPage] = useState<number>(1);
  const issues = useRepoIssues(loginId, repository);

  const offset = (page - 1) * DEFAULT_PAGE_SIZE;
  const limit = (page - 1) * DEFAULT_PAGE_SIZE + DEFAULT_PAGE_SIZE;

  const handlePageChange = (page: any) => {
    setPage(page);
  };

  if (!issues) return <></>;

  return (
    <>
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
    </>
  );
}

export default RepoIssues;

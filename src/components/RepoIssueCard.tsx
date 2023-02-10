import Avatar from "components/Avatar";

interface RepoIssueCardProps {
  issue: any;
}

function RepoIssueCard({ issue }: RepoIssueCardProps) {
  return (
    <>
      <div className="flex pb-2 border-b border-gray-200 border-solid">
        <div className="shadow-2xl shadow-slate-900">
          <Avatar src={issue.user.avatar_url} />
        </div>
        <div className="flex items-center">
          <div className="mr-2 font-medium">{issue.user.login}</div>
          <div className="text-xs text-stone-300">
            commented {issue.created_at}
          </div>
        </div>
      </div>
      <div className="py-6 whitespace-pre-wrap ">{issue.body}</div>
    </>
  );
}

export default RepoIssueCard;

import Pagination from "react-js-pagination";

interface PaginationWrapperProps {
  totalPages: number;
  onPageChange: any;
  activePage: number;
}

function PaginationWrapper({
  totalPages,
  onPageChange,
  activePage,
}: PaginationWrapperProps) {
  return (
    <Pagination
      activePage={activePage}
      itemsCountPerPage={1}
      totalItemsCount={totalPages}
      pageRangeDisplayed={5}
      onChange={onPageChange}
      itemClass="text-black inline-flex w-4 h-4 cursor-pointer border-black border border-solid  items-center justify-center m-1 p-3 hover:text-red-500 hover:border-red-500 rounded-sm"
      linkClass="item-link inline-block cursor-pointer"
      activeClass="text-red-500 inline-block hover:text-red-500 border-red-500"
      activeLinkClass="active-link inline-block text-red-500 hover:text-red-500"
    />
  );
}

export default PaginationWrapper;

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
      itemClass="text-red-200 inline-flex w-8 h-8  cursor-pointer border-red-400 border border-solid  items-center justify-center"
      linkClass="item-link inline-block cursor-pointer "
      activeClass="text-black inline-block"
      activeLinkClass="active-link inline-block"
    />
  );
}

export default PaginationWrapper;

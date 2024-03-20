import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination"
import { TextSmall } from "./ui/texts"


const PageButtons = ({ totalPages = 10, currentPage = 1, className, onNext = () => { }, onPrevious = () => { } }) => {
  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious className={`${(currentPage === 1) ? 'pointer-events-none' : ''}`} role="button" onClick={onPrevious} />
        </PaginationItem>

        <PaginationItem>
          <TextSmall>{`${currentPage} of ${totalPages}`}</TextSmall>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext className={`${(currentPage === totalPages) ? 'pointer-events-none' : ''}`} role="button" onClick={onNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PageButtons
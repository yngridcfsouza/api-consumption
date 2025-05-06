import { PaginationContainer } from './styles';

import Button from '../Button';

export default function Pagination({ currentPage, onPageChange, hasNext }) {
  return (
    <PaginationContainer>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        Anterior
      </Button>
      <span>Página {currentPage + 1}</span>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNext}
      >
        Próxima
      </Button>
    </PaginationContainer>
  );
}

import { FilterBlockContainer } from "./style";

const FilterBlock = () => {
  return (
    <FilterBlockContainer>
      <div className="content__text">
        <span>{`Show me `}</span> <span className="bold">all work</span>
      </div>
      <div className="content__text">
        <span>{`in `}</span> <span className="bold">all industries</span>
      </div>
    </FilterBlockContainer>
  );
};

export default FilterBlock;

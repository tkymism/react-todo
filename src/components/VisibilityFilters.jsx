import React from "react";
import cx from "classnames";
import { VISIBILITY_FILTERS } from "../constants";

const VisibilityFilters = ({ activeFilter, setFilter }) => (
  <div className="visibility-filters">
    { Object.keys(VISIBILITY_FILTERS).map(filterKey => 
      <VisibilityFilter 
        currentFilter={VISIBILITY_FILTERS[filterKey]}
        activeFilter={activeFilter} 
        setFilter={setFilter} />
    )}
  </div>
)

const VisibilityFilter = ({currentFilter, activeFilter, setFilter}) => (
  <span
    key={`visibility-filter-${currentFilter}`}
    className={cx("filter", currentFilter === activeFilter && "filter--active")}
    onClick={() => { setFilter(currentFilter);}} >
    {currentFilter}
  </span>
)

export default VisibilityFilters;

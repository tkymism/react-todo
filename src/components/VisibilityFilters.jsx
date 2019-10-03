import React from 'react'
import VisibilityTab from './VisibilityTab'
import { VISIBILITY_FILTERS } from '../constants'

const VisibilityFilters = ({ activeFilter, setFilter }) => (
  <div className='visibility-filters'>
    { Object.keys(VISIBILITY_FILTERS).map(filterKey => 
      <VisibilityTab 
        key={`visibility-filter-${filterKey}`}
        currentFilter={VISIBILITY_FILTERS[filterKey]}
        activeFilter={activeFilter} 
        setFilter={setFilter} />
    )}
  </div>
)

export default VisibilityFilters
import React from 'react'
import cx from 'classnames'

const VisibilityTab = ({currentFilter, activeFilter, setFilter}) => (
    <span
      className={cx('filter', currentFilter === activeFilter && 'filter--active')}
      onClick={() => { setFilter(currentFilter) }} >
      {currentFilter}
    </span>
)

export default VisibilityTab
  
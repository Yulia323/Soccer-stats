export const BtnPager = props => (
    !props.lastPage && props.length
        ?
        <button className='btn-add-more' onClick={() => props.setCurrentPage(props.currentPage + 1)}>Show more</button>
        : <></>);

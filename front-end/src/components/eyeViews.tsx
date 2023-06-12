function EyeView(props: {
    numReviews?: number
    caption?: string
  }) {
    const { numReviews, caption } = props
    return <div className="rating">
        <span>
            <i className="fa fa-eye" aria-hidden="true"
            />
        </span>

        {/* <span>
            <i className={
                rating >=2 
                ? 'fas fa-star' 
                : rating >= 1.5 
                ? 'fas fa-star-haft-alt' 
                : 'far fa-star'
            }
            />
        </span>

        <span>
         <i
           className={
             rating >= 3
               ? 'fas fa-star'
               : rating >= 2.5
               ? 'fas fa-star-half-alt'
               : 'far fa-star'
           }
         />
       </span>

       <span>
         <i
           className={
             rating >= 4
               ? 'fas fa-star'
               : rating >= 3.5
               ? 'fas fa-star-half-alt'
               : 'far fa-star'
           }
         />
       </span>

       <span>
         <i
           className={
             rating >= 5
               ? 'fas fa-star'
               : rating >= 4.5
               ? 'fas fa-star-half-alt'
               : 'far fa-star'
           }
         />
       </span> */}

       {caption ? (
         <span>{caption}</span>
       ) : numReviews != 0 ? (
         <span>{' ' + numReviews + ' reviews'}</span>
       ) : (
         ''
       )}
    </div>
  }

  export default EyeView
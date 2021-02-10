import React from 'react';

const ImageHelper = ({product}) => {

    const imageurl = product ? product.image : `https://www.freepik.com/free-vector/error-404-concept-landing-page_5060708.htm`;

    return(
        <div className="rounded border border-success p-2">
            <img className="mb-3 rounded"
                alt=""
                src={imageurl}
                style={{maxHeight:"100%",maxWidth:"100%"}} 
            />
        </div>
    )
}

export default ImageHelper;
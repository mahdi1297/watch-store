import React from 'react'

const SkeletonLoading = () => {

    return (
        <div className='skeleton_loader-container'>
            {[1, 2, 3, 4].map((l: any) => (
                <div key={l} className="c-item">
                    <div className="c-item__top">
                        <div className="c-skeleton-square" />
                    </div>
                    <div className="c-item__center">
                        <h3>
                            <div className="c-skeleton-line" />
                            <div className="c-skeleton-line" />
                        </h3>
                    </div>
                    <div className="c-item__bottom">
                        <div className="c-skeleton-line" />
                        <div className="c-skeleton-line" />
                    </div>
                    <div className="c-item__add">
                        <div className="c-skeleton-square" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkeletonLoading
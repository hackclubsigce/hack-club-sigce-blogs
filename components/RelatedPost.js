import React from 'react'
import Link from 'next/link'
const RelatedPost = ({ title, desc, link }) => {
    return (
        <Link href={link}>
            <span className="card mb-4">
                <div className="card-header text-center">{title}</div>
                <div className="card-body" style={{ padding: '10px 30px' }}>
                    {desc}
                </div>
            </span>
        </Link>
    )
}

export default RelatedPost
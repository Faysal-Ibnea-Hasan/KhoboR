import React from 'react'

const NewsItem =(props)=> {


    
        let { title, description, imgUrl, newsId, author, date, source } = props
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={
                        {display:"flex",justifyContent:'flex-end',position:"absolute",right:"0"}
                    }>

                    <span className="badge rounded-pill bg-success">
                        {source}

                    </span>
                    </div>
                    <img src={!imgUrl ? "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7bc526f2c367dbb8cbf94d5573e6843b.jpg" : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-success">Last updated by {!author ? "Unknown" : author} on {new Date(date).toLocaleTimeString()}</small></p>

                        <a href={newsId} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}
export default NewsItem

import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'





const Newscomponent = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [totalResults, setTotalResults] = useState(0)
    const [page, setPage] = useState(1)

    const capitalizeFirstLetter = (str) => {


        // converting first letter to uppercase
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

        return capitalized;
    }
    // document.title=`${this.capitalizeFirstLetter(this.props.Category)} - KhoboR`
    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.Category}&apiKey=7dd95f6bc48847c493f6151e02fcb9e2&page=1&pageSize=${props.PageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(70);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
        props.setProgress(100);
        
        
        
    }
    useEffect(() => {
        updateNews();
    }, []);
    
    
    
    const handlePrevClick = async () => {
        console.log("prev")
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.Category}&apiKey=7dd95f6bc48847c493f6151e02fcb9e2&page=${page-1}&pageSize=${props.PageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parseData = await data.json();
        setLoading(false);
        setPage(page-1);
        setArticles(parseData.articles);
    }
    


    const handleNextClick = async () => {
        
        if (page + 1 > Math.ceil(totalResults / 9)) {
            
        }
        else {
            
            
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.Category}&apiKey=7dd95f6bc48847c493f6151e02fcb9e2&page=${page+1}&pageSize=${props.PageSize}`;
            setLoading(true)
            setPage(page+1);
            let data = await fetch(url);
            let parseData = await data.json();
            setLoading(false);
            setArticles(parseData.articles);
            
            
        }
    }
    
    
    
    
    return (
        <div className='container my-3' >
        <h1 className='text-center' style={{marginTop:"90px"}}>{capitalizeFirstLetter(props.Category)} - Top Headlines </h1>
        {loading && <Spinner />}

        <div className="row">
            {articles && articles.map((element) => {
                
                return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 70) : ""} imgUrl={element.urlToImage} newsId={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
            })}


        </div>
        <div className="container d-flex justify-content-between">

            <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&#8592;Previous</button>
            <button type="button" className="btn btn-dark" onClick={handleNextClick}>Next&#8594;</button>

        </div>

    </div>
)
}



Newscomponent.defaultProps = {
    country: "in",
    PageSize: 8,
    Category: "general"
}
Newscomponent.propTypes = {
    country: PropTypes.string,
    PageSize: PropTypes.number,
    Category: PropTypes.string

}
export default Newscomponent

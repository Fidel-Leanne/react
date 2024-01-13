import { useEffect } from "react"; 
import { useState } from "react"
import NewsItems from "./newsItems"



const NewsBoard= ({category})=>{

    const [articles, setArticles]= useState([])
    useEffect(()=>{
        console.log(import.meta.env.VITE_API_KEY);

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles))
    },[category])
    return (
        <div>
          <h2 className="text-center">
            Latest <span className="badge bg-success">News</span>
          </h2>
          {articles && articles.map((news, index) => (
            <NewsItems
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))}
        </div>
      );
      
}

export default NewsBoard
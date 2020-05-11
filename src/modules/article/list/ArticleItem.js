import React from 'react';
import { 
    Col 
} from 'antd';
import { Link } from 'react-router-dom';

const ArticleItem = props => {
    const { 
        articles = [], 
        colWidth = 8 
    } = props;

    const article = articles.length !== 0 && articles.map((article, key) => {
        const { 
            ArticleId,
            Title, 
            Thumbnail,
            Photo,
            Point = 0,
            DateCreated,
            Author = null,
            TotalComment = 0
        } = article;

        const { 
            Name, 
            Avatar 
        } = Author;

        return  <Col className="section-article-item" key={key} span={colWidth}>
                    <Link className='section-article-item--mask' to={`/article/${ArticleId}`} title={Title}>
                        <figure className="section-article-item__photo">
                            <img alt={Title} src={Photo} title={Title} />    
                        </figure>
                        <h5 className="section-article-item__title">{Title}</h5>
                    </Link>
                    <div className='section-article-item--attribution'>
                        <span className='section-article-item__author'>
                            <img className='section-article-item__author-avatar' alt={Name} src={Avatar} /> 
                            <span className='section-article-item__author-name'>{Name}</span>
                        </span>
                        <span className='section-article-item__date-create'><i className="far fa-clock"/> { moment.unix(DateCreated).format('DD-MM-YYYY') }</span>
                        <span className=''><i className="far fa-heart"/> {Point}</span>
                        <span className=''><i className="far fa-comment"></i> {TotalComment}</span>
                    </div>
        </Col>
    });

    return article;
};
export default ArticleItem;
import React from 'react';
import { getArticle, getArticlesFeatured } from '../ArticleDataJson';
import { 
    Row, 
    Col, 
    Input, 
    Comment,
    Tooltip,
    Avatar as AvatarCustom
} from 'antd';
import ArticleItem from '../list/ArticleItem';
const { TextArea } = Input;

class ArticleDetailContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderComment = () => {
        const { match: { params } } = this.props;
        const { ArticleId } = params;
        const article = getArticle(ArticleId);
        const comments = article.Comment || [];
        console.log('comments -> ', comments);
        const comment = comments.length !== 0 && comments.map( (comment, key) => {
            const { 
                User, 
                Content, 
                Time 
            } = comment;
            const { 
                Name, 
                Avatar 
            } = User;

            return  <Comment
                        key={key}
                        author={Name}
                        avatar={
                            <AvatarCustom
                                src={Avatar}
                                alt={Name}
                            />
                        }
                        content={Content}
                        datetime={
                            <Tooltip title={ moment.unix(Time).format('YYYY-MM-DD HH:mm:ss') }>
                                <span>{ moment.unix(Time).fromNow() }</span>
                            </Tooltip>
                        }/>
        });

        return  <Row className='section-article-comment'>
                    <Col span={24} className='section-article-comment__textarea'>
                        <TextArea placeholder='Nhập bình luận...'/>
                    </Col>
                    <Col span={24} className='section-article-comment__list'>
                        { comment }
                    </Col>
        </Row>
    }

    renderArticle = () => {
        return  <Col span={16} className='section-article-detail-main'>
                    { this.renderArticleDetail() }
                    { this.renderComment() }
        </Col>
    }

    renderArticleDetail = () => {
        const { match: { params } } = this.props;
        const { ArticleId } = params;
        const article = getArticle(ArticleId);

        const { 
            Title, 
            Thumbnail,
            Photo,
            Point = 0,
            DateCreated,
            Author = null,
            TotalComment = 0,
            Description = ''
        } = article;
        const comments = article.Comment || [];
        const { 
            Name, 
            Avatar 
        } = Author;

        return  <Row className='section-article-detail'>
                    <h2 className='section-article-detail__title'>{Title}</h2>
                    <figure className='section-article-detail__image'>
                        <img src={Photo} title={Title} alt={Title} />
                    </figure>
                    <div className='section-article-detail__desc'>
                        { Description() }
                    </div>
                    <div className='section-article-item'>
                        <div className='section-article-item--attribution'>
                            <span className='section-article-item__author'>
                                <img className='section-article-item__author-avatar' alt={Name} src={Avatar} /> 
                                <span className='section-article-item__author-name'>{Name}</span>
                            </span>
                            <span className='section-article-item__date-create'><i className="far fa-clock"/> <span className='hidden-mobile'>Đăng ngày:</span> { moment.unix(DateCreated).format('DD-MM-YYYY') }</span>
                            <span><i className="far fa-heart"/> {Point} <span className='hidden-mobile'>point</span></span>
                            <span><i className="far fa-comment"></i> {TotalComment} <span className='hidden-mobile'>bình luận</span></span>
                        </div>
                    </div>
        </Row>
    }

    renderArticleFeatured = () => {
        const articles = getArticlesFeatured();
        return  <Col span={8} className="section-article-sidebar">
                    <h3 className="section-article-sidebar__title">Bài viết nổi bật</h3>
                    <ArticleItem articles={articles} colWidth={24}/>
        </Col>
    }

    render() {
        return  <Row gutter={[32, 32]} className='section-article-detail'>
                    { this.renderArticle() }
                    { this.renderArticleFeatured() }
                </Row>
    }
}

export default ArticleDetailContainer;
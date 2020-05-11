import React from 'react';
import { 
    getArticles 
} from '../ArticleDataJson';
import { 
    Row,
    Form,
    Select 
} from 'antd';
import { 
    PaginationAntd 
} from 'components/elements/pagination';
import ArticleItem from './ArticleItem';
const { Option } = Select;

const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

class ArticleListContainer extends React.Component{
    constructor(props) {
        super(props);

        const keyword = getUrlParameter('keyword');
        this.state = {
            request: {
                page: 1,
                perPage: 12,
                keyword,
                order: 'asc',
                sortBy: 'Title'
            }
        }
    }

    onValuesChange = (value, values) => {
        this.setState({ 
            request: {
                ...this.state.request,
                ...values
            }
        });
    }

    renderToolFilter = () => {
        const { keyword = '' } = this.state.request;
        return  <div className="d-flex section-tool-filter">
                    <h3 className="section-article-main__title">{ keyword.length === 0 ? 'Mới nhất' : keyword }</h3>
                    <Form 
                        layout="inline"
                        initialValues={this.state.request}
                        className='section-article-filter' 
                        onValuesChange={this.onValuesChange}>
                            <Form.Item 
                                name="sortBy"
                                label='Sắp xếp theo'>
                                    <Select>
                                        <Option value='Title'>Tên bài viết</Option>
                                        <Option value='DateCreated'>Ngày đăng</Option>
                                        <Option value='Point'>Đánh giá</Option>
                                    </Select>
                            </Form.Item>
                            <Form.Item 
                                label='Thứ tự'
                                name="order">
                                    <Select>
                                        <Option value='asc'>Tăng dần</Option>
                                        <Option value='desc'>Giảm dần</Option>
                                    </Select>
                            </Form.Item>
                    </Form>
                </div>
    }

    renderPagination = () => {
        const articleData = getArticles(this.state.request);
        const { perPage } = this.state.request;
        const { 
            pagination: { 
                total, 
                page
            } 
        } = articleData;
        return  <PaginationAntd pagination={{
                    total,
                    showSizeChanger: false,
                    defaultCurrent: page,
                    defaultPageSize: perPage,
                    pageSize: perPage,
                    pageSizeOptions: ['6', '12', '24', '48'],
                    onChange: (page, perPage) => this.setState({
                        request: {
                            ...this.state.request,
                            page,
                            perPage
                        }
                    }),
                    onShowSizeChange: (page, perPage) => this.setState({
                        request: {
                            ...this.state.request,
                            page,
                            perPage
                        }
                    }) }}/>
    }

    renderArticles = () => {
        const articleData = getArticles(this.state.request);
        const { 
            articles = [] 
        } = articleData;
        return <Row gutter={[32, 32]} className='section-article-main'><ArticleItem articles={articles}/></Row>
    }

    render() {
        return  <React.Fragment>
                    { this.renderToolFilter() }
                    { this.renderArticles() }
                    { this.renderPagination() }
        </React.Fragment>
    }
}

export default ArticleListContainer;
import React from 'react';
import { Pagination } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

class PaginationAntd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageSize: 20
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(page = this.state.page, pageSize = this.state.pageSize) {
    const { pagination: { onChange: onChangePage } } = this.props;
    if (onChangePage) {
      onChangePage(page, pageSize);
    }
    this.setState({ page, pageSize });
  }

  itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a className='section-pagination-antd__prev'><LeftOutlined /></a>;
    }
    if (type === 'next') {
      return <a className='section-pagination-antd__next'><RightOutlined /></a>;
    }
    if (type === 'page') {
      return <a className='section-pagination-antd__item'>{originalElement.props.children || ''}</a>;
    }
    return originalElement;
  }

  render() {
    const { pagination = {} } = this.props;
    const total = lodash.get(pagination, 'total', 0);
    return total > 0 && <React.Fragment>
      <Pagination 
        hideOnSinglePage={true} 
        className="section-pagination-antd" 
        {...{
        itemRender: this.itemRender,
        onChange: this.onChange,
        showSizeChanger: true,
        //showTotal: (total, range) => <div className="section-pagination-antd__label">{range[0]} - {range[1]} trong {total} phần tử</div>,
        pageSizeOptions: ['10', '20', '50', '100'],
        ...pagination
      }} />
    </React.Fragment>;
  }
}

export default PaginationAntd;

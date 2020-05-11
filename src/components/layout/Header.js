import React from 'react';
import { 
    Menu, 
    Dropdown, 
    Button
} from 'antd';
import { 
    Link, 
    Redirect 
} from 'react-router-dom';

import { getAuthorize, logout } from 'modules/authorize/AuthorizeDataJson';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            toogleMenu: false
        }
    }

    // Tạm thời reload lại trang => Sau khi xong, redirect dạng SPA
    onSearch = (keyword = '') => window.location.href = `/article?keyword=${keyword}`;

    renderAccount = () => {
        const authorize = getAuthorize() || null;
        let isLogin = false;
        let fullname = null;
        let avatar = null;
        if(authorize && Object.keys(authorize).length !== 0) { 
            isLogin = true;
            fullname = authorize.fullname || '';
            avatar = authorize.avatar || '';
        }
        
        return <div className='header__account'>
                { isLogin ? <Dropdown overlay={
                                () => <Menu>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" onClick={() => logout()}>
                                            Đăng xuất
                                        </a>
                                    </Menu.Item>
                                </Menu>
                                } placement="bottomCenter">
                                    <Button className='btn-reset p-0 section-select-user'>
                                        <span className='section-select-user__avatar'><img src={avatar} /></span> 
                                        <span className='section-select-user__name'>{fullname}</span>
                                    </Button>
                    </Dropdown> : <React.Fragment>
                        <a href='/register' className='header__btn-register' onClick={() => alert('Chức năng đang được xây dựng')}>Đăng ký</a>
                        <a href='/login' className='header__btn-login'>Đăng nhập</a>
                    </React.Fragment>
                }
    </div>
    }

    render() {
        return  <header className={`header ${this.state.toogleMenu ? 'open' : 'close'}`}>
                    <div className='header-wrapper'>
                        <Link to='' className='header__logo'>
                            <h1><span className="big">H</span><span className="small">alocom</span></h1>
                        </Link>

                        <div className='header-content'>

                            {/* search */}
                            <div className="section-search">
                                <input
                                    type="text"
                                    className="text-search"
                                    placeholder='Nhập từ khóa tìm kiếm...'
                                    onChange={ e => this.setState({ keyword: e.target.value }) }
                                    onKeyDown={(e) => {
                                        if (e.keyCode === 13) this.setState({ keyword: e.target.value }, () => this.onSearch(this.state.keyword))
                                    }}
                                    value={this.state.keyword}
                                />
                                <Button onClick={ () => this.onSearch(this.state.keyword) }>
                                    <i className="fa fa-search" aria-hidden="true" />
                                </Button>
                            </div>

                            <div className="section-menu">
                                <Link to='/gioi-thieu' title='Giới thiệu'>Giới thiệu</Link>
                                <Link to='/dich-vu' title='Dịch vụ'>Dịch vụ</Link>
                                <Link to='/tin-tuc' title='Tin tức'>Tin tức</Link>
                            </div>

                            {/* menu */}
                        </div>

                        {/* account */}
                        { this.renderAccount() }

                        {/* toogle */}
                        { this.state.toogleMenu ? 
                            <Button onClick={ () => this.setState({ toogleMenu: false })} className='header__toogle'>
                                <i className='fas fa-times' aria-hidden="true" />
                            </Button> 
                                : 
                            <Button onClick={ () => this.setState({ toogleMenu: true })} className='header__toogle'>
                                <i className='fas fa-bars' aria-hidden="true" />
                            </Button>}          
                    </div>
        </header>
    }
}
export default Header;
import React from 'react';
import { Form, Input, Button } from 'antd';
import { 
  LoginOutlined,
  UserAddOutlined
} from '@ant-design/icons';
import { 
  login 
} from '../AuthorizeDataJson';

class AuthorizeLoginContainer extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        isLogin: false, 
        request: {
          username: 'thanhtam.it2779',
          password: '123456'
        }
      }
    }

    onFinish = values => {
      this.setState({
        request: {
          ...this.state.request,
          ...values
        }
      }, () => {
        const { username, password } = this.state.request;
        const isLogin = login(username, password);
        if(isLogin) window.location.href = ''; // Tạm thời reload lại trang
      });
    };

    static getDerivedStateFromProps(props, state) {
      return null;
    }
  
    render() {

      return <main className='section-login'>
        <aside className='section-login__sideshow'>
          <div>
            <h1>HALOCOM</h1>
            <h2>What we do the best?</h2>
            <p>There are close to 65 millions online users in Viet Nam scattered in a sea of websites and platforms engaging in different online activities. This has made precise targeting more important than ever</p>
          </div>
        </aside>
        <section className='section-login__form'>
          <div>
          <h3>Đăng nhập hệ thống</h3>
          <Form 
            className='w-100 section-form'
            name="LoginForm"
            initialValues={this.state.request}
            onFinish={this.onFinish}>
            <Form.Item
              className='section-form__item'
              hasFeedback 
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Nhập địa chỉ email...',
                },
              ]}>
                <Input size="large" prefix={ <span className="section-form__item__icon"><i className="far fa-envelope" /></span> } className="section-form__item__input" placeholder='Tên đăng nhập'/>
            </Form.Item>
            <Form.Item
              className='section-form__item'
              hasFeedback 
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Nhập mật khẩu...',
                },
              ]}>
                <Input.Password size="large" prefix={ <span className="section-form__item__icon"><i className="fas fa-unlock"/></span> } className="section-form__item__input" placeholder='Mật khẩu'/>
            </Form.Item>
            <Form.Item className='section-form__item'>
              <Button type="primary" htmlType="submit" className='w-100' size='middle'>
                <LoginOutlined/> Đăng nhập
              </Button>
            </Form.Item>
          </Form>
          <p style={{textAlign: 'center', margin: '10px 0'}}>hoặc</p>
          <Button type="primary" danger className='w-100' size='middle' onClick={() => alert('Chức năng đang được xây dựng')}>
            <UserAddOutlined /> Đăng ký
          </Button>
          </div>
        </section>
      </main> 
    }
}

export default AuthorizeLoginContainer;

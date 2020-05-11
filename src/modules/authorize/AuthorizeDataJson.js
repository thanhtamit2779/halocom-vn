const user = {
    id: 1,
    username: 'thanhtam.it2779',
    fullname: 'Bùi Thanh Tâm',
    birthday: '1994-07-27',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/muridrahhal/128.jpg'
}

const login = (username, password) => {
    sessionStorage.removeItem('Authorization');
    if(username === 'thanhtam.it2779' && password === '123456') { 
        sessionStorage.setItem('Authorization', JSON.stringify({
            isLogin: true,
            ...user
        }));
        return true;
    }
    return false;
}

const  logout = () => {
    return sessionStorage.removeItem('Authorization');
}

const getAuthorize = () => {
    let Authorize = sessionStorage.getItem("Authorization");
    if(Authorize) Authorize = JSON.parse(Authorize) || null;
    return Authorize;
}

export { 
    login,
    logout,
    getAuthorize
}
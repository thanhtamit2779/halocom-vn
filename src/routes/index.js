import React from 'react';
import { Route } from "react-router-dom";
import { ArticleListContainer } from 'modules/article/list';
import { ArticleDetailContainer } from 'modules/article/detail';
import { AuthorizeLoginContainer } from 'modules/authorize/login';

const Routes = () => <React.Fragment>
    <Route path="/" exact component={ArticleListContainer} />
    <Route path="/article" exact component={ArticleListContainer} />
    <Route path='/article/:ArticleId' exact component={ArticleDetailContainer} />
    <Route path="/login" exact component={AuthorizeLoginContainer} />
</React.Fragment>

export default Routes;
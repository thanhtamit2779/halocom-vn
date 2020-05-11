import { makeRequestAction } from 'actions/apiActions';
import { API } from 'configs';
import { 
    GET_ARTICLES
} from './ArticleType';

const baseUrl = API.BASE_URL;
export const getArticles = (params={}) => makeRequestAction({
    type: GET_ARTICLES,
    payload: params,
    request: {
        url : `${baseUrl}/articles?api_token=3890373c582eab33b3df62edb6ddc046`,
        data: params
    }
});
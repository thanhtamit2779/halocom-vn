import React from 'react';
import Photo from 'public/images/article.jpg';

// Tạo bài viết
const createArticle = () => {
    const articles = [];
    const currentDateTimestamp = ~~((new Date().getTime()) / 1000);
    for (let i = 1; i <= 50; i++) {
        const AuthorId = ~~(50 / i);
        const article = {
            ArticleId: i,
            Title: `Tại sao lại sử dụng nó ${i}?`,
            Thumbnail: require('public/modules/article/images/' + AuthorId + '.png'),
            Photo: require('public/modules/article/images/' + AuthorId + '.png'),
            Description: () => <React.Fragment>
                                <p>Nó đến từ đâu {i}</p>
                                <p>Trái với quan điểm chung của số đông, Lorem Ipsum không phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi. Một giáo sư của trường Hampden-Sydney College (bang Virginia - Mỹ) quan tâm tới một trong những từ la-tinh khó hiểu nhất, "consectetur", trích từ một đoạn của Lorem Ipsum, và đã nghiên cứu tất cả các ứng dụng của từ này trong văn học cổ điển, để từ đó tìm ra nguồn gốc không thể chối cãi của Lorem Ipsum. Thật ra, nó được tìm thấy trong các đoạn 1.10.32 và 1.10.33 của "De Finibus Bonorum et Malorum" (Đỉnh tối thượng của Cái Tốt và Cái Xấu) viết bởi Cicero vào năm 45 trước Công Nguyên. Cuốn sách này là một luận thuyết đạo lí rất phổ biến trong thời kì Phục Hưng. Dòng đầu tiên của Lorem Ipsum, "Lorem ipsum dolor sit amet..." được trích từ một câu trong đoạn thứ 1.10.32.</p>
                          </React.Fragment>,
            Point: ~~(50 / i * 2),
            DateCreated: currentDateTimestamp - i,
            AuthorId
        }
        articles.push(article);
    }
    return articles;
}

// Tạo bình luận
const createComment = () => {
    const comments = [];
    const date = ~~((new Date().getTime()) / 1000);
    for (let i = 1; i <= 150; i++) {
        const ArticleId = ~~(150 / (2 * i));
        const UserId = ~~(150 / (2 * i));
        const comment = {
            CommentId: i,
            Content: `Làm thế nào để có nó ${i}`,
            ArticleId,
            UserId,
            Time: date - (2 * i)
        }
        comments.push(comment);
    }
    return comments;
}

// Tác giả
const authors = [
    {
        AuthorId: 1,
        Name: "Chandler Jerde",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/edobene/128.jpg"
    },
    {
        AuthorId: 2,
        Name: "Christelle Collins",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/hoangloi/128.jpg"
    },
    {
        AuthorId: 3,
        Name: "Arjun Wisoky",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/gu5taf/128.jpg"
    },
    {
        AuthorId: 4,
        Name: "Katelin Stehr",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/muridrahhal/128.jpg"
    },
    {
        AuthorId: 5,
        Name: "Davon Hills",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/primozcigler/128.jpg"
    },
    {
        AuthorId: 6,
        Name: "Forest Ziemann",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/nehfy/128.jpg"
    },
    {
        AuthorId: 7,
        Name: "Annalise Gutmann",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mattsapii/128.jpg"
    },
    {
        AuthorId: 8,
        Name: "Elmo Hackett",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/anaami/128.jpg"
    },
    {
        AuthorId: 9,
        Name: "Kelton Rice",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jeremiespoken/128.jpg"
    },
    {
        AuthorId: 10,
        Name: "Ashlee Ledner IV",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bluefx_/128.jpg"
    },
    {
        AuthorId: 11,
        Name: "Fannie DuBuque",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/toddrew/128.jpg"
    },
    {
        AuthorId: 12,
        Name: "Edwin Stark",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rez___a/128.jpg"
    },
    {
        AuthorId: 13,
        Name: "Dr. Domingo McLaughlin",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/waghner/128.jpg"
    },
    {
        AuthorId: 14,
        Name: "Mina Jenkins",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/guiiipontes/128.jpg"
    },
    {
        AuthorId: 15,
        Name: "Ambrose Jacobs",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/claudioguglieri/128.jpg"
    },
    {
        AuthorId: 16,
        Name: "Gage Kassulke IV",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/_yardenoon/128.jpg"
    },
    {
        AuthorId: 17,
        Name: "Maritza Watsica",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/harry_sistalam/128.jpg"
    },
    {
        AuthorId: 18,
        Name: "Fred Dicki",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dawidwu/128.jpg"
    },
    {
        AuthorId: 19,
        Name: "Noble Brekke",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jamiebrittain/128.jpg"
    },
    {
        AuthorId: 20,
        Name: "Avis Kuhic",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/llun/128.jpg"
    },
    {
        AuthorId: 21,
        Name: "Brown Thiel",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/balintorosz/128.jpg"
    },
    {
        AuthorId: 22,
        Name: "Eveline Reynolds",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kosmar/128.jpg"
    },
    {
        AuthorId: 23,
        Name: "Christine Gulgowski",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/nateschulte/128.jpg"
    },
    {
        AuthorId: 24,
        Name: "Wyatt Dibbert",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/thierrymeier_/128.jpg"
    },
    {
        AuthorId: 25,
        Name: "Mrs. Yessenia Nolan",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/j2deme/128.jpg"
    },
    {
        AuthorId: 26,
        Name: "Lorine Trantow",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/longlivemyword/128.jpg"
    },
    {
        AuthorId: 27,
        Name: "Erik Bradtke",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/louis_currie/128.jpg"
    },
    {
        AuthorId: 28,
        Name: "Stewart Upton",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg"
    },
    {
        AuthorId: 29,
        Name: "Marion Ruecker Sr.",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/8d3k/128.jpg"
    },
    {
        AuthorId: 30,
        Name: "Oral Braun",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mactopus/128.jpg"
    },
    {
        AuthorId: 31,
        Name: "Moises Schultz",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/sovesove/128.jpg"
    },
    {
        AuthorId: 32,
        Name: "Tabitha Borer",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rikas/128.jpg"
    },
    {
        AuthorId: 33,
        Name: "Rocio Kilback",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dmitriychuta/128.jpg"
    },
    {
        AuthorId: 34,
        Name: "Natasha Emard",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ahmetalpbalkan/128.jpg"
    },
    {
        AuthorId: 35,
        Name: "Reese Herman",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/madebybrenton/128.jpg"
    },
    {
        AuthorId: 36,
        Name: "Tracy Hane",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dannol/128.jpg"
    },
    {
        AuthorId: 37,
        Name: "Hudson Goodwin",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jedbridges/128.jpg"
    },
    {
        AuthorId: 38,
        Name: "Isabell Bergnaum",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ninjad3m0/128.jpg"
    },
    {
        AuthorId: 39,
        Name: "Mekhi Kub",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marlinjayakody/128.jpg"
    },
    {
        AuthorId: 40,
        Name: "Vicky McClure",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/falling_soul/128.jpg"
    },
    {
        AuthorId: 41,
        Name: "Korey Cole",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/_pedropinho/128.jpg"
    },
    {
        AuthorId: 42,
        Name: "Elta Botsford",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/wtrsld/128.jpg"
    },
    {
        AuthorId: 43,
        Name: "Georgianna Zboncak",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/laasli/128.jpg"
    },
    {
        AuthorId: 44,
        Name: "Aron Grimes",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_garcia/128.jpg"
    },
    {
        AuthorId: 45,
        Name: "Joesph Parker",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/justme_timothyg/128.jpg"
    },
    {
        AuthorId: 46,
        Name: "Rowland Ankunding",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/cherif_b/128.jpg"
    },
    {
        AuthorId: 47,
        Name: "Kyleigh Yundt",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/nicoleglynn/128.jpg"
    },
    {
        AuthorId: 48,
        Name: "Brennan Willms",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/martip07/128.jpg"
    },
    {
        AuthorId: 49,
        Name: "Russel Fahey",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/AM_Kn2/128.jpg"
    },
    {
        AuthorId: 50,
        Name: "Sidney Gutkowski",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/alterchuca/128.jpg"
    }
];

// Thành viên
const users = [
    {
        UserId: 1,
        Name: "Araceli60",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/m_kalibry/128.jpg"
    },
    {
        UserId: 2,
        Name: "Ewald.Yost61",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/angelcreative/128.jpg"
    },
    {
        UserId: 3,
        Name: "Abbie.Emmerich23",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/akashsharma39/128.jpg"
    },
    {
        UserId: 4,
        Name: "Jennyfer_Von3",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/gabrielrosser/128.jpg"
    },
    {
        UserId: 5,
        Name: "Violet_Koelpin52",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/benoitboucart/128.jpg"
    },
    {
        UserId: 6,
        Name: "Shaylee.Rau",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
    },
    {
        UserId: 7,
        Name: "Alia.Breitenberg",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/nbirckel/128.jpg"
    },
    {
        UserId: 8,
        Name: "Donnie90",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/deeenright/128.jpg"
    },
    {
        UserId: 9,
        Name: "Deion.Goodwin22",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ernestsemerda/128.jpg"
    },
    {
        UserId: 10,
        Name: "Maynard0",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/tumski/128.jpg"
    },
    {
        UserId: 11,
        Name: "Clotilde_Emmerich",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/joemdesign/128.jpg"
    },
    {
        UserId: 12,
        Name: "Drew12",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/twittypork/128.jpg"
    },
    {
        UserId: 13,
        Name: "Dax.Zemlak84",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rahmeen/128.jpg"
    },
    {
        UserId: 14,
        Name: "Tobin91",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/itskawsar/128.jpg"
    },
    {
        UserId: 15,
        Name: "Reed47",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/victorerixon/128.jpg"
    },
    {
        UserId: 16,
        Name: "Brycen.Simonis",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/travishines/128.jpg"
    },
    {
        UserId: 17,
        Name: "Amy.Stanton84",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/heyimjuani/128.jpg"
    },
    {
        UserId: 18,
        Name: "Vickie71",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/larrybolt/128.jpg"
    },
    {
        UserId: 19,
        Name: "Gaylord73",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kumarrajan12123/128.jpg"
    },
    {
        UserId: 20,
        Name: "Deonte_Franecki82",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mgonto/128.jpg"
    },
    {
        UserId: 21,
        Name: "Randi_Bernier",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jervo/128.jpg"
    },
    {
        UserId: 22,
        Name: "Jody62",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ismail_biltagi/128.jpg"
    },
    {
        UserId: 23,
        Name: "Abbigail_Luettgen15",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/lewisainslie/128.jpg"
    },
    {
        UserId: 24,
        Name: "Samara_Anderson58",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/polarity/128.jpg"
    },
    {
        UserId: 25,
        Name: "Pierre_Grant38",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mirfanqureshi/128.jpg"
    },
    {
        UserId: 26,
        Name: "Kristy55",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/geobikas/128.jpg"
    },
    {
        UserId: 27,
        Name: "Roxane.Douglas",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg"
    },
    {
        UserId: 28,
        Name: "Elmore.Flatley",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/nbirckel/128.jpg"
    },
    {
        UserId: 29,
        Name: "Rupert81",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/gearpixels/128.jpg"
    },
    {
        UserId: 30,
        Name: "Romaine_Breitenberg",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/cadikkara/128.jpg"
    },
    {
        UserId: 31,
        Name: "Zella79",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mastermindesign/128.jpg"
    },
    {
        UserId: 32,
        Name: "Lorena.Tillman49",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bruno_mart/128.jpg"
    },
    {
        UserId: 33,
        Name: "Summer36",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/juamperro/128.jpg"
    },
    {
        UserId: 34,
        Name: "Alessia_Brakus23",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/exentrich/128.jpg"
    },
    {
        UserId: 35,
        Name: "Kristofer55",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/eugeneeweb/128.jpg"
    },
    {
        UserId: 36,
        Name: "Easter.Macejkovic92",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/flexrs/128.jpg"
    },
    {
        UserId: 37,
        Name: "Shanelle77",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/emmeffess/128.jpg"
    },
    {
        UserId: 38,
        Name: "Garrick_Johns49",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/danthms/128.jpg"
    },
    {
        UserId: 39,
        Name: "Nedra.Bogisich59",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/flashmurphy/128.jpg"
    },
    {
        UserId: 40,
        Name: "Lavonne71",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/coreyginnivan/128.jpg"
    },
    {
        UserId: 41,
        Name: "Vladimir_Vandervort10",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kinday/128.jpg"
    },
    {
        UserId: 42,
        Name: "Weston66",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/VMilescu/128.jpg"
    },
    {
        UserId: 43,
        Name: "Jeanette.Jacobi18",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg"
    },
    {
        UserId: 44,
        Name: "Jeanette18",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/hgharrygo/128.jpg"
    },
    {
        UserId: 45,
        Name: "Pauline.Brekke24",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/supervova/128.jpg"
    },
    {
        UserId: 46,
        Name: "Angelo30",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vovkasolovev/128.jpg"
    },
    {
        UserId: 47,
        Name: "Maddison_Conroy",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/terpimost/128.jpg"
    },
    {
        UserId: 48,
        Name: "Clifton.Hand47",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/smalonso/128.jpg"
    },
    {
        UserId: 49,
        Name: "Jimmy_Effertz",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ehsandiary/128.jpg"
    },
    {
        UserId: 50,
        Name: "Vickie.Boehm7",
        Avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/longlivemyword/128.jpg"
    }
];

const ordering = (key, order = 'asc') => {
    return function (a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }

        const varA = (typeof a[key] === 'string') ?
            a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ?
            b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order == 'desc') ? (comparison * -1) : comparison
        );
    };
}

export const getArticles = (request = {}) => {
    // Request từ server
    const {
        page = 1,
        perPage = 10,
        keyword,
        order,
        sortBy
    } = request;

    // Khởi tạo
    const comments = createComment();
    let articles = createArticle();

    // Filter dữ liệu
    if (keyword.length !== 0) {
        articles = articles.filter(article => {
            const {
                Title,
                Description
            } = article;

            const searchTitle = Title.toLowerCase().includes(keyword.toLowerCase());
            const searchDescription = Description.toLowerCase().includes(keyword.toLowerCase());
            if (searchTitle || searchDescription) return article;
        });
    }

    const total = articles.length;
    const offsetStart = (page - 1) * perPage;
    const offsetEnd = offsetStart + perPage;
    articles = articles.slice(offsetStart, offsetEnd);

    // Map dữ liệu
    articles && articles.length !== 0 && articles.map(v => {
        const { ArticleId, AuthorId } = v;
        const commentData = comments.filter(v => v.ArticleId === ArticleId) || [];
        v.Author = authors.find(v => v.AuthorId === AuthorId) || {};
        v.Comment = commentData;
        v.TotalComment = commentData.length;
        return v;
    });

    // Sắp sếp => Mặc định sắp sếp field Title, thứ tự tăng dần
    articles.sort(ordering(sortBy, order));

    return {
        articles,
        pagination: {
            total,
            page,
            perPage
        }
    }
} 

export const getArticle = (ArticleId = null) => {
    if(!ArticleId) return false;

    // Khởi tạo
    const articles = createArticle();
    const comments = createComment();

    // Map dữ liệu
    const commentData = comments.filter(v => v.ArticleId == ArticleId) || [];
    commentData.length !== 0 && commentData.map(comment => {
        const { UserId } = comment;
        comment.User = users.find(v => v.UserId === UserId);
        return comment;
    })

    // Chi tiết bài viết
    const article = articles.find(v => v.ArticleId == ArticleId);
    const { AuthorId } = article;
    article.Author = authors.find(v => v.AuthorId === AuthorId) || {};
    article.Comment = commentData;
    article.TotalComment = commentData.length;

    return article;
}

export const getArticlesFeatured = () => {
    const comments = createComment();
    let articles = createArticle();
    articles = articles.slice(0, 5);

    // Map dữ liệu
    articles && articles.length !== 0 && articles.map(v => {
        const { ArticleId, AuthorId } = v;
        const commentData = comments.filter(v => v.ArticleId === ArticleId) || [];
        v.Author = authors.find(v => v.AuthorId === AuthorId) || {};
        v.Comment = commentData;
        v.TotalComment = commentData.length;
        return v;
    });

    return articles;
}
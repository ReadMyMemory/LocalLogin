exports.renderProfile = (req, res) => {
    res.render('profile', { title: '내 정보 - savvy' });
};

exports.renderJoin = (req, res) => {
    res.render('join', { title: '회원가입 - savvy' });
};

exports.renderMain = (req, res, next) => {
    const twits = [];
    res.render('layout', {
        title: 'savvy',
    });
};
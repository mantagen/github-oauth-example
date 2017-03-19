const qs = require('querystring');

const welcome = require('./handlers/welcome');

module.exports = [{
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '.',
            redirectToSlash: true,
            index: true
        }
    }
},{
    method: 'GET',
    path: '/login',
    handler: (req, reply) => {
        const query = qs.stringify({
            client_id: process.env.CLIENT_ID,
            redirect_uri: process.env.BASE_URL + '/welcome',
            scope: 'user',
        });
        reply.redirect('https://github.com/login/oauth/authorize?' + query);
    }
},{
    method: 'GET',
    path: '/welcome',
    handler: welcome,
}]

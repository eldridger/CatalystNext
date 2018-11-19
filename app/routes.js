module.exports = {
    '/': { page: '/'},
    '/about': { page: '/about' },
    '/find-team': { page: '/findteam' },
    '/register': { page: '/register' },
    '/login': { page: '/login' },

    '/p/hello-nextjs': { page: '/post', query: { title: "Hello Next.js" } },
    '/p/learn-nextjs': { page: '/post', query: { title: "Learn Next.js is awesome" } },
    '/p/deploy-nextjs': { page: '/post', query: { title: "Deploy apps with Zeit" } },
    '/p/exporting-pages': { page: '/post', query: { title: "Learn to Export HTML Pages" } }
}
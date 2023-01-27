const AUTH = {
    oauth : '/oauth/token'
}

const PROJECTS = {
    add : '/projects',
    list: '/user/projects',
    edit: (id) => `/projects/${id}`,
    delete: (id) => `/projects/${id}`,
}

export{
    AUTH,
    PROJECTS
}
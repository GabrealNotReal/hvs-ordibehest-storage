import { createRouter , createWebHistory } from 'vue-router';

import authentication from './components/authenticationPage.vue'
import mainPage from './components/mainPage.vue'
import secondTable from './components/tabs/tables/secondTable.vue'

const routes = [
    {
        path: "/",
        component: authentication,
        name: "authentication",
    },
    {
        path: "/mainpage",
        component: mainPage,
        name: "mainTable",
    },
    {
        path: "/secondTable",
        component: secondTable,
        name: "secondTable",
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
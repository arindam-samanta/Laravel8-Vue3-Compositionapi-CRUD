import { createRouter, createWebHistory } from "vue-router";
import CompanyIndex from "../components/companies/company_index";
import CompanyCreate from "../components/companies/company_create";
import CompanyEdit from "../components/companies/company_edit";

const routes = [
    {
        path: "/dashboard",
        component: CompanyIndex,
        name: "CompanyIndex",
    },
    {
        path: "/companies/create",
        component: CompanyCreate,
        name: "CompanyCreate",
    },
    {
        path: "/companies/:id/edit",
        component: CompanyEdit,
        name: "CompanyEdit",
        props:true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

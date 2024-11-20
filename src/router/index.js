import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    { path: "/", component: () => import("../components/Home.vue") },
    { path: "/register", component: () => import("../components/Register.vue") },
    { path: "/sign-in", component: () => import("../components/SignIn.vue") },
    { 
        path: "/feed", 
        component: () => import("../components/Feed.vue"),
        meta: { requiresAuth: true },
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});


const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            getAuth(),
            (user) => {
                unsubscribe(); 
                resolve(user); 
            },
            (error) => {
                unsubscribe();
                reject(error); 
            }
        );
    });
};


router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        try {
            const user = await getCurrentUser();
            if (user) {
                next(); 
            } else {
                console.warn("No tienes acceso a esta página.");
                next("/sign-in"); 
            }
        } catch (error) {
            console.error("Error al verificar el usuario:", error);
            next("/sign-in");
        }
    } else {
        next(); 
    }
});

export default router;

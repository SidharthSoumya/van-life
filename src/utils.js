import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"))
    const pathName = new URL(request.url).pathname;
    
    if (!isLoggedIn) {
        throw redirect(`/login?message=You must login first&redirectTo=${pathName}`)
    }
}

export var isLoggedIn = false;

export function setLoginStatus() {
    isLoggedIn = JSON.parse(localStorage.getItem("loggedin"))
}
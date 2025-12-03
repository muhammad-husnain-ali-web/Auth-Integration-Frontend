const API_URL = import.meta.env.VITE_HOST;

export async function register(form) {
    let r = await fetch(`${API_URL}/auth/register`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
    })
    let res = await r.json();
    return res
}

export async function login(form) {
    let r = await fetch(`${API_URL}/auth/login`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include"
    })
    let res = await r.json();
    return res
}

export async function userFound() {
    let r = await fetch(`${API_URL}/auth/me`, {
        credentials: "include"
    })
    let res = await r.json();
    return res
}

export async function logout() {
    let r = await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include"
    });
    let res = await r.json();
    return res
}

export async function getProductsByCategory(category) {
    let r = await fetch(`${API_URL}/product/${category}`, {
        credentials: "include"
    })
    let res = await r.json();
    return res
}

export async function getCategory() {
    let r = await fetch(`${API_URL}/category`, {
        credentials: "include"
    })
    let res = await r.json();
    return res
}
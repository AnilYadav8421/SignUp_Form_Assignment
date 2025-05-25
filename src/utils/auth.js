export const signup = (name, email, password) => {
    const user = { name, email };
    localStorage.setItem('user', JSON.stringify(user));
};

export const login = (email, password) => {
    const user = { email };
    localStorage.setItem('user', JSON.stringify(user));
};

export const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

export const logout = () => {
    localStorage.removeItem('user');
};

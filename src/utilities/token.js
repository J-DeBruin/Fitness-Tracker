const TOKEN_KEY = "token";

export default {
    getToken: function() {
        return localStorage.getItem(TOKEN_KEY);
    },

    storeToken: function(token) {
        localStorage.setItem(TOKEN_KEY, token);
    },

    removeToken: function() {
        localStorage.removeItem(TOKEN_KEY);
    }
}
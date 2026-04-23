/** В dev Vite проксирует `/api` → backend (`vite.config.js`). В проде задайте VITE_API_BASE. */
const BASE = import.meta.env.VITE_API_BASE ?? "/api";

/**
 * Обработка параметров запроса и проверка статуса
 */
const handleResponse = async (response) => {
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }
    try {
        return await response.json();
    } catch (error) {
        console.error("Failed to parse JSON response:", error);
        throw new Error("Invalid JSON response from server");
    }
};

export const api = {
    /**
     * GET запрос
     * @param {string} url - путь API
     * @returns {Promise} результат запроса
     */
    get: (url) => {
        return fetch(`${BASE}${url}`)
            .then(handleResponse)
            .catch(error => {
                console.error("GET request failed:", error);
                throw error;
            });
    },

    /**
     * POST запрос
     * @param {string} url - путь API
     * @param {object} data - данные для отправки
     * @returns {Promise} результат запроса
     */
    post: (url, data) => {
        return fetch(`${BASE}${url}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(handleResponse)
            .catch(error => {
                console.error("POST request failed:", error);
                throw error;
            });
    },

    /**
     * PUT запрос
     * @param {string} url - путь API
     * @param {object} data - данные для обновления
     * @returns {Promise} результат запроса
     */
    put: (url, data) => {
        return fetch(`${BASE}${url}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(handleResponse)
            .catch(error => {
                console.error("PUT request failed:", error);
                throw error;
            });
    },

    /**
     * DELETE запрос
     * @param {string} url - путь API
     * @returns {Promise} результат запроса
     */
    delete: (url) => {
        return fetch(`${BASE}${url}`, { method: "DELETE" })
            .then(handleResponse)
            .catch(error => {
                console.error("DELETE request failed:", error);
                throw error;
            });
    }
};
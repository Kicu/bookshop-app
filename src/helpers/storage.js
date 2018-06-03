const localStorage = window.localStorage;

const storage = {
    save(key, data) {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData)
    },
    get(key) {
        const serializedData = localStorage.getItem(key);
        if (!serializedData) {
            return undefined;
        }

        return JSON.parse(serializedData);
    }
};

export default storage;

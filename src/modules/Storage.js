const getPhones = () => {
    let storedPhones = JSON.parse(localStorage.getItem('phones'));
    return storedPhones !== null ? storedPhones : [];
};

const savePhones = phones => {
    localStorage.setItem("phones", JSON.stringify(phones));
};

export default { getPhones, savePhones };

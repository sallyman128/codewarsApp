const fetchCodewars = async () => {
    const url = "https://www.codewars.com/api/v1/users/sallyman128/";
    const resp = await fetch(url);
    const data = await resp.json();
    return data
}

export {fetchCodewars}
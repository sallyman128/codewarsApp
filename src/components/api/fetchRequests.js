const fetchCodewars = async (username) => {
    const url = `https://www.codewars.com/api/v1/users/${username}/`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data
}

export {fetchCodewars}
export default async function getData(){
    let res = await fetch("https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=5&difficulty=medium");
    let data = await res.json();
    console.log(data);
    return data
}


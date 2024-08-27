require('dotenv').config()
const express = require('express')
const app = express();

const PORT = 3000

const githubData = {
    "login": "harsh100000",
    "id": 87386901,
    "node_id": "MDQ6VXNlcjg3Mzg2OTAx",
    "avatar_url": "https://avatars.githubusercontent.com/u/87386901?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/harsh100000",
    "html_url": "https://github.com/harsh100000",
    "followers_url": "https://api.github.com/users/harsh100000/followers",
    "following_url": "https://api.github.com/users/harsh100000/following{/other_user}",
    "gists_url": "https://api.github.com/users/harsh100000/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/harsh100000/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/harsh100000/subscriptions",
    "organizations_url": "https://api.github.com/users/harsh100000/orgs",
    "repos_url": "https://api.github.com/users/harsh100000/repos",
    "events_url": "https://api.github.com/users/harsh100000/events{/privacy}",
    "received_events_url": "https://api.github.com/users/harsh100000/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Harsh Vardhan Gautam",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "IT Engineer\r\nKIET (Ghaziabad)",
    "twitter_username": null,
    "public_repos": 33,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2021-07-13T17:10:41Z",
    "updated_at": "2024-08-27T17:36:11Z"
  }

app.get('/',(req,res)=>{
    res.send("Hello World harsh");
})

app.get('/login',(req,res)=>{
    res.send("Hello Login");
})
app.get('/signup',(req,res)=>{
    res.send("<h1>Sign up here</h1>");
})

app.get('/github', (req,res)=>{
    res.json(githubData);
})

app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})
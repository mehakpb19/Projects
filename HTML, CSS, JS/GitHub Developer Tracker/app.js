class Search {
    constructor() {
        document.querySelector('input').addEventListener('input',debounce((e,...args)=> {
            if (e.value !== '') {
                this.getuser(e.value)
            }
        },1000))
    }
    async getuser(username){
        try{
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=3`)
        ]);

        const userdata = await userRes.json();
        userdata.repo = await repoRes.json();    
        let profile = new User(userdata);
        console.log(profile);
    }
    catch(err){
        console.log(err);
    }
    }
}
class User {
    constructor(user) {
        this.username  = user.name;
        if (user.bio === null) {
            this.bio ="No bio yet";
        }else{
            this.bio = user.bio;
        }
        this.dp = user.avatar_url;
        this.followers =user.followers;
        this.following = user.following;
        this.repo = user.public_repos;
        this.latestrapo = [];
        user.repo.forEach(e => {
            let obj = {name:e.name,url: e.html_url};     
            this.latestrapo.push(obj);       
        });
    }   
}
function debounce(fnc,delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer =setTimeout(() => {
            fnc(this,...args);
        }, delay);
    }
}
let search = new Search();
class Search {
  constructor() {
    const allowedChars = /^[a-zA-Z0-9-]+$/;
    document.querySelector("input").addEventListener(
      "input",
      debounce((e, ...args) => {
        if (e.value !== "" && allowedChars.test(e.value)) {
          this.getuser(e.value);
        }
      }, 1000),
    );
  }
  async getuser(username) {
    try {
      const [userRes, repoRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(
          `https://api.github.com/users/${username}/repos?sort=pushed&per_page=3`,
        ),
      ]);
      if (!userRes.ok) {
        throw { status: userRes.status };
      }
      const userdata = await userRes.json();
      userdata.repo = await repoRes.json();
      let profile = new User(userdata);
      console.log(profile);
      this.updateUI(profile);
    } catch (err) {
      let main = document.querySelector("main");
      main.textContent = "";
      if (!err.status) {
        let eror = document.createElement("h1");
        eror.textContent = `Please Try after Sometime`;
        main.append(eror);
      } else {
        let eror = document.createElement("h1");
        eror.textContent = `${err.status}: User not found`;
        main.append(eror);
      }
    }
  }
  updateUI(data) {
    let space = document.createDocumentFragment();
    let main = document.querySelector("main");
    main.innerHTML = "";

    const profileDiv = document.createElement("div");
    profileDiv.className = "profile";

    const img = document.createElement("img");
    img.src = data.dp;
    img.alt = "No Profile pic Found";
    img.className = "profile-pic";
    profileDiv.appendChild(img);

    const h1 = document.createElement("h1");
    h1.textContent = data.username;
    profileDiv.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = data.bio;
    profileDiv.appendChild(p);

    const containerDiv = document.createElement("div");
    containerDiv.className = "container";

    const followingDiv = document.createElement("div");
    const H4 = document.createElement("h4");
    H4.textContent = data.following;
    followingDiv.appendChild(H4);
    followingDiv.appendChild(document.createTextNode("Following"));
    containerDiv.appendChild(followingDiv);

    const followersDiv = document.createElement("div");
    const followersH4 = document.createElement("h4");
    followersH4.textContent = data.followers;
    followersDiv.appendChild(followersH4);
    followersDiv.appendChild(document.createTextNode("Followers"));
    containerDiv.appendChild(followersDiv);

    const reposDiv = document.createElement("div");
    const reposH4 = document.createElement("h4");

    reposH4.textContent = data.repo;
    reposDiv.appendChild(reposH4);
    reposDiv.appendChild(document.createTextNode("Repos"));
    containerDiv.appendChild(reposDiv);

    profileDiv.appendChild(containerDiv);

    const latestReposH4 = document.createElement("h4");
    latestReposH4.textContent = "Latest Repos";
    profileDiv.appendChild(latestReposH4);

    const hr = document.createElement("hr");
    profileDiv.appendChild(hr);

    for (let i = 0; i < data.latestrapo.length; i++) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = data.latestrapo[i].name;
      btn.addEventListener("click", () => {
        window.open(data.latestrapo[i].url, "_blank");
      });
      profileDiv.appendChild(btn);
    }

    space.append(profileDiv);
    main.append(space);
  }
}
class User {
  constructor(user) {
    this.username = user.name;
    if (user.bio === null) {
      this.bio = "No bio yet";
    } else {
      this.bio = user.bio;
    }
    this.dp = user.avatar_url;
    this.followers = user.followers;
    this.following = user.following;
    this.repo = user.public_repos;
    this.latestrapo = [];
    user.repo.forEach((e) => {
      let obj = { name: e.name, url: e.html_url };
      this.latestrapo.push(obj);
    });
  }
}
function debounce(fnc, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fnc(this, ...args);
    }, delay);
  };
}
let search = new Search();

window.onload = function() {


// fetch('https://api.npoint.io/00439ada556eb3b171e0') // fetching from URI of endpoint
fetch('res/data/posts.json') // fetching locally
    .then((response) => response.json())
    .then(json => {
        console.log(json);
        let posts_container = document.getElementsByClassName("posts-container")[0]

        //Sorteerimine
        json.sort((a, b) => new Date(b.created.replace('.', ',')) - new Date(a.created.replace('.', ',')));

        for (let i = 0; i < json.length; i++){
            let post = document.createElement("article");
            post.classList.add("post")
            // header
            let header = document.createElement("header");
            let user = document.createElement("span");
            let user_icon = document.createElement("span");
            user_icon.textContent = "👤";
            let user_name = document.createElement("span")
            user_name.textContent = json[i].user;
            user.append(user_icon, user_name)
            let date = document.createElement("time")
            date.textContent = json[i].created;
            header.append(user, date)

            // body
            let post_body = document.createElement("div");
            post_body.classList.add("postitus")
            let image_source = json[i].image;
            if (image_source != null) {
                console.log("image?")
                let image = document.createElement("img")
                image.src = json[i].image
                post_body.append(image)
            }
            let message = document.createElement("p");
            message.textContent = json[i].message
            let like = document.createElement("p")
            like.textContent = "👍"
            post_body.append(message, like)
            post.append(header, post_body)
            posts_container.append(post)
        }
    })
}
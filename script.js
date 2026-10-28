fetch("posts.json")
    .then(response => response.json())
    .then(posts => {
        let container = document.getElementById("posts-container");

        posts.forEach(post => {
            let article = document.createElement("article");

            let header = document.createElement("div");
            header.className = "post-header";

            let author = document.createElement("p");
            author.textContent = post.author;
            header.appendChild(author);

            let date = document.createElement("p");
            date.textContent = post.date;
            header.appendChild(date);

            article.appendChild(header);

            let text = document.createElement("p");
            text.textContent = post.text;
            article.appendChild(text);

            if (post.image) {
                let image = document.createElement("img");
                image.src = post.image;
                image.alt = "Post image";
                image.className = "post-image";
                article.appendChild(image);
            }

            container.appendChild(article);
        });
    })
    .catch(error => {
        console.log("Error loading posts:", error);
    });

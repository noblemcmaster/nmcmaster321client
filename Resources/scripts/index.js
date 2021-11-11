function getPosts(){
    const allPostsApiUrl = "https://localhost:5001/api/posts";

    fetch(allPostsApiUrl).then(function(response){
        return response.json();
    }).then(function(json){
        let html = "<table class=\"halfpage\">"
        html += "<tr>";
        json.forEach((Post)=>{
            html += "<tr><td><div class=\"avatar\"></div>" + Post.text + "</td>";
            html += "<td><button onclick=\"showModal(" + Post.id + ",\'" + Post.text + "')\">Edit</button></td>";
            html += "<td><button onclick=\"deletePosts(" + Post.id + ")\">Delete</button></td></tr>";
        });
        html += "</table>";
        document.getElementById("posts").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}

function addPost(){
    const postAddPostURL = "https://localhost:5001/api/posts";
    const postText = document.getElementById("text").value;

    fetch(postAddPostURL, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            text: postText,
        })
    })
    .then((response)=>{
        console.log(response);
        getPosts();
    })
}

function deletePosts(id){
    const postDeletePostURL = "https://localhost:5001/api/posts/" + id;

    fetch(postDeletePostURL, {
        method: "DELETE",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response)=>{
        console.log(response);
        getPosts();
    })
}
function showModal(id, text){
    var modal = document.getElementById("editmodal");
    document.getElementById("updatepost").value = text;
    document.getElementById("updatesubmit").setAttribute('onclick', 'edpost('+id+')');
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[0];
}

function closeModal(){
    var modal = document.getElementById("editmodal");
    modal.style.display = "none";
}

window.onclick = function(event){
    var modal = document.getElementById("editmodal");
    if(event.target == modal)
    {
        modal.style.display = "none";
    }
}

function edpost(id){
    const postEditPostURL = "https://localhost:5001/api/posts/" + id;
    let oldpost = document.getElementById("updatepost").value;
    let newpost = {
        Id: id,
        Text:oldpost
    };
    fetch(postEditPostURL, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(newpost)
    })
    .then((response)=>{
        console.log(response);
        getPosts();
    })
}
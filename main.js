
// show all post
function fetchPost() {
  
      
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw Error("Can't fetch data");
        }
        return response.json();
      })
      .then((json) => {
          console.log(json);
        const posts = json
          .map((post) => {
            return `
              <div class="post">
                    <h3 class="post-title">${post.title}</h3>
                    <p>${post.body}</p>
                    <button onClick=singlePost(${post.id})>see more</button>
                </div>
              `;
          })
          .join("");
        console.log(
          posts
        );
        document.getElementById("post").insertAdjacentHTML("afterbegin", posts);

      })
    
  .catch ((error) => {
    console.log(error);
  })
}

fetchPost();


// show single post
function singlePost(id) {
  fetch("https://jsonplaceholder.typicode.com/posts/?");
}





// async function fetchPost() {
//     try {

//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//          console.log(response);
//     } catch (error){
//         console.log(error);
//     }
// }


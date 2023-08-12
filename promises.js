const posts = [{
    title:"Post 1",
    body:"This is Post 1"
},{title:"Post 2",body:"This is Post 2"},
{
    title:"Post 3",body : "This is Post 3"},{title:"Post 4",body:"This is post 4"}];
function createPost(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.push(post);
            resolve(new Date());
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Date().getTime());
        }, 1000);
    });
}

function deletePost() {
  return new Promise((resolve) => {
        setTimeout(() => {
            //console.log(`Post deleted: ${post.title}`);
            let deleted =posts.pop()
            resolve(deleted);
        }, 1000);
    });
}

function main() {
    
    

    const postPromise = createPost({ title: 'Post Five', body: 'This is Post Five' });
    const activityPromise = updateLastUserActivityTime();

    Promise.all([postPromise, activityPromise])
        .then(([post, lastActivityTime]) => {
          //  posts.push(post);
            console.log('Before creating post, lastActivityTime :',post)
            console.log(`User's last activity time: ${lastActivityTime}`);
          /*  return Promise.all([createPost({ title: 'Post Two', body: 'This is Post Two' }), updateLastUserActivityTime()]);*/
          deletePost(posts)  .then((deletedPost) => {
            console.log(`Deleted post: ${deletedPost.title}`);
        })
        .catch((error) => {
            console.error("An error occurred:", error);
        })
        
    
     });
}

main();

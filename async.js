const posts = [{
    title: "Post 1",
    body: "This is Post 1"
}, {
    title: "Post 2",
    body: "This is Post 2"
}, {
    title: "Post 3",
    body: "This is Post 3"
}, {
    title: "Post 4",
    body: "This is post 4"
}];

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
            let deleted = posts.pop();
            resolve(deleted);
        }, 1000);
    });
}

async function main() {
    try {
        const post = await createPost({ title: 'Post Five', body: 'This is Post Five' });
        const lastActivityTime = await updateLastUserActivityTime();

        console.log('Before creating post, lastActivityTime:', post);
        console.log(`User's last activity time: ${lastActivityTime}`);

        const deletedPost = await deletePost();
        console.log(`Deleted post: ${deletedPost.title}`);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

main();

document.addEventListener('DOMContentLoaded', function() {
    const blogPost = {
        title: "404",
        author_and_date: "Hey! How did you get here?",
        content: `
            <p>
                This is the default page for any 404 errors that come from 
                blog posts. What were you looking for?<br>
            </p>
            <img src="assets/BLOG/404cat.jpeg" alt="404cat" width="300">
            <p><i>
                If refreshing the page does not resolve the issue<br>
                please go to the home page
            </i></p>
        `
    };

    document.getElementById('post-title').textContent = blogPost.title;
    document.getElementById('post-content').innerHTML = blogPost.content;
    document.getElementById('Author-date').innerHTML = blogPost.author_and_date;
});
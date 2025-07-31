    const blogPost = {
        title: "Introductions",
        author_and_date: "Wren Earl ~ 13/05/2025",
        content: `
            <p>
                Hello readers, hope you are all well, and welcome to my first blog post :)
            </p>

            <p>
                My name is Wren, I am a computer science university student as well as an aspiring machine learning and database developer. I mainly work and have a heavy preference for C++, however I have experience in python [3 and 2.7], R, Matlab, SQL and bash scripting. 
            </p>

            <p>
                I am still new to the development industry <i>[well, not really in the development industry at all, unfortunately (~_~;)]</i> so at this stage so most of my experience has been from small pet projects and attempting to automate tasks in both my IT service desk job and home life.
            </p>

            <p>
                I made this website to do three things:
                    <br><b>&emsp;1)</b> Let me ramble about stuff, the usual blog stuff
                    <br><b>&emsp;2)</b> Teach myself front end webdev over time
                    <br><b>&emsp;3)</b> Give myself motivation to do more pet projects
            </p>

            <p>
                In its current state, my website has a few issues here and there, and that is perfectly okay! This is very much a website I am using to learn and document my progress as a developer. At the moment I know that there are a few issues I am yet to resolve in loading javascript <i>[such as the blog posts (•‿•#)]</i> as well as the mobile view, but I am working on these and learning along the way!
            </p>

            <p>
                As for the pet projects, one big thing for me is motivation to do projects, I can find it hard to start a new project because I want it to be perfect, or something that I can use for something. It's the very reason I struggle with platforms like <i>leetcode</i> and <i>codecademy</i>, I'm not programming something that I can directly relate to/use, or I'm not programming something that I directly find interesting on its own[not to say that they are bad in the slightest]. I would much prefer to make something for either myself or others to use, this way it teaches me the concept and I hold myself to a higher standard as it is something I am proud to call my own little creation. Expect to see updates on my work In my blog posts page, and any projects that I have been working on that I think are in a functional enough state on my projects page.
            </p>

            <p>
                With this concept in mind, I want to learn as much as I can and be proud of what I make, and how better to do that than to show off my creations to whoever is interested enough to look, be that family, friends or future employers. So, from the bottom of my heart, thank you for taking the time to read my little introduction post, it truly means a lot. 
            </p>

            <div align="center" class="contentcube botonly"></div> 

            <h2>My To Do List</h2>
            <i>My top three things I want to work on!</i>
                    <h3><b>&emsp;1)</b> Work out how to make a comment system for the blog / project posts</h3>
                    <h3><b>&emsp;2)</b> Resolve the graphical issues on mobile platforms on the website</h3>
                    <h3><b>&emsp;3)</b> Start to teach myself c#.net [gotta find myself a project]</h3>

            <div align="center" class="contentcube botonly"></div>

            <h2>Song To Give A Listen</h2>
            <i>A song that I think is pretty good and should be given a listen</i>
            <p><a href="https://youtu.be/A-qW8qwIKJk?si=TM8Ll_7-p_nb8PpK"><i>methyl ethyl ~ obscura </i></a></p>
        `
    };

    document.getElementById('post-title').textContent = blogPost.title;
    document.getElementById('post-content').innerHTML = blogPost.content;
    document.getElementById('Author-date').innerHTML = blogPost.author_and_date;
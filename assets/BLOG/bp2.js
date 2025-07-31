    const blogPost = {
        title: "Learning C# through simulated ants",
        author_and_date: "Wren Earl ~ 21/06/2025",
        content: `
            <p>
                Hello again, readers, welcome to post number two! This time the post is <b>actually about development!</b>
            </p>

            <p>
                As of late, <b>I have been looking for more work</b>, specifically in development. Development is what I want to do.
                <br> I want to invent and make tools and programs for people to use. I like seeing people get use out of something I have done or made; 
                <b>it's truly a warm feeling knowing someone out there has been helped by something you have created.</b> I hope someday
                I can make something to help the medical industry, I'm way too squeamish to be a doctor (;>_<).
            </p>

            <p>
                After a bunch of looking around, both online and in person, I haven't gotten too far job-wise, however I have come away
                with some information. I learned that <u>the development industry is looking for a few things that I haven't learned yet.</u> The
                main take was that I needed:<br>
                    <p><b>&emsp;1)</b> To learn web service hosting (e.g.: AWS and Azure)</p>
                    <p><b>&emsp;2)</b> To learn c#.net </p>
                    <p><b>&emsp;3)</b> To learn more about JS frameworks (eg: React)</p>
            </p>

            <p>
                I was told with these, I could improve my ability in full-stack development and update myself on what a developer needs
                in today's day and age.
            </p>

            <br>
            <h3><i>"So... what are you going to do about it?"</i></h3>
            <br> 
            <h3><i>"I'm going to make ants"</i></h3>
            <br>
            <h3><i>"What does that mean?"</i></h3>
            <br>

            <p>
                Well, it means <b>I am going to tackle each of the three points in pet projects</b>, so I can have fun while learning them! 
                JS frameworks I think I will use on this site as I improve it over time, so this leaves web service hosting and c#. 
            </p> 

            <p>
                From what I have read about c#.net, it is a strongly typed language that focuses on object orientation, 
                cross-platform versatility with the .net framework, decent memory management, and fast performance 
                as a compiled language. I believe the aforementioned points contribute strongly to c#'s presence in most of
                the development industry.
.           </p>

            <br>
            <h3><i>"You still haven't answered what the ants are..."</i></h3>

            <div align="center" class="projectorblogimg">
                <img src="assets/BLOG/b2assets/whatisants.png" alt="blog2 pic">
            </div>

            <p>
                <b>"ANTS"</b> is a project of mine that I was working on originally in C++ to teach myself forms of another form of
                reinforcement learning, in this case "<b>S</b>tate-<b>A</b>ction-<b>R</b>eward-<b>S</b>tate-<b>A</b>ction" or <i>SARSA</i> learning.
                <br>The program simulates simple territorial creatures that have five main goals.

                    <p><b>&emsp;1)</b> To <b>maximize</b> territory held</p>
                    <p><b>&emsp;2)</b> To <b>minimize</b> territory lost</p>
                    <p><b>&emsp;3)</b> To capture food to <b>increase</b> units available</p>
                    <p><b>&emsp;4)</b> To <b>decrease</b> opponent unit availability</p>
                    <p><b>&emsp;5)</b> To <b>survive</b></p>

                I have specifically gone with <i>SARSA</i> learning to train ANTS for its focus on being cautious, learning and monitoring
                on individual actions taken in object states rather than making generalized modifications on all actions.
            </p>

            <div align="center" class="projectorblogimg">
                <img src="assets/BLOG/b2assets/SARSAunderstanding.png" alt="blog2 pic">
            </div>

            <p>
                Through applying learning rates, rewards, and estimating future directions and movements, <i>SARSA</i> learning is able to learn in a more
                careful manner, as opposed to q learning which performs tests and modifications towards the end of the iteration, resulting in
                faster initial learning of policies and potential solutions, but may struggle with finding more attunes policies due to not performing
                individual testing. 
            </p>

            <p>
                <u>PLEASE TAKE NOTE THAT THIS IS MY BASE UNDERSTANDING OF THE TOPIC!!!</u>
            </p>

            <p>
                I am still learning SARSA, as well as <i>model-free</i> reinforcement learning in general, it is my most recent obsession. I will show more understanding
                by my next update, likely have a little bit more to show with the ANTS in general. I have a flight for work and some time to kill while waiting to move
                things into my new home, so should be good. I have a small c++ base with none of the learning, just the initialization of the ants as 
                objects, so I have to make that c#. 
            </p>

            <div align="center" class="contentcube botonly"></div> 
            <h2>My To Do List</h2>
            <i>My top three things I want to work on!</i>
                    <h3><b>&emsp;1)</b> Translate old ANTS code from c++ to c#</h3>
                    <h3><b>&emsp;2)</b> Learn more about SARSA model free learning and how it can apply to ANTS</h3>
                    <h3><b>&emsp;3)</b> Still have to make a comment system on the blog posts</h3>

            <div align="center" class="contentcube botonly"></div>

            <h2>Song To Give A Listen</h2>
            <i>A song that I think is pretty good and should be given a listen</i>
            <p><a href="https://www.youtube.com/watch?v=LC5FQOmyVoI"><i>Goodshirt ~ Sophie </i></a></p>
        `
    };

    document.getElementById('post-title').textContent = blogPost.title;
    document.getElementById('post-content').innerHTML = blogPost.content;
    document.getElementById('Author-date').innerHTML = blogPost.author_and_date;
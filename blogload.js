    // Get the query string (the part after '?')
    const params = new URLSearchParams(window.location.search);
    const post = params.get('post');
    const scriptName = post ? `assets/BLOG/${post}.js` : 'assets/BLOG/404.js';
    const script = document.createElement('script');
    script.src = scriptName; 
    document.body.appendChild(script);
    script.onerror = function() {
        console.error(`Failed to load script: ${scriptName}... Attempting to load 404.js`);
        const fallbackScript = document.createElement('script');
        fallbackScript.src = 'assets/BLOG/404.js';
        document.body.appendChild(fallbackScript);
        console.log(`loaded: ${scriptName}... should be: 404.js`);
    }

<h1>Movies</h1>

<p>The app keeps users and movies. Guests should be able to register and login. Logged-in users should be able to view
    all movies, create movies, buy tickets for the movies, see details about a movie and logout. Logged-in users should
    also be able to edit or delete the movies they have created. There should also be a section where users can see
    only the movies they have created.</p>

<p>Web application (SPA) the used technologies are:</p>
<ul>
    <li>HTML5</li>
    <li>JavaScript</li>
    <li>AJAX</li>
    <li>REST </li>
    <li>JSON with cloud-based backend (Kinvey) </li>
</ul>

<p>Used libraries like:</p>
<ul>
    <li>jQuery</li>
    <li>Handlebars </li>
    <li>Sammy </li>
</ul>

<h2>Getting Started:</h2>
<p>In order to run the project you just need to add APP_KEY and APP_SECRET which is located in kinvey.json and after
    that run npm install.</p>
<p>![Capture](https://user-images.githubusercontent.com/28908397/58367740-313ce700-7eeb-11e9-8b37-ca5438e8fd9a.JPG)</p>

<h2>Set up Kinvey:</h2>
<p>Register at Kinvey.com and create an application to keep your data in the cloud.
    Create a collection called movies. Each movie has a title, description, imageURL, tickets and genres (array).
</p>

<p>![Kenvey1](https://user-images.githubusercontent.com/28908397/55902270-d158de00-5bd3-11e9-8607-26488582a385.JPG)
</p>

<p>In order to be able to keep track of the tickets of each movie, you need to allow all users to edit this collection. So go to the properties of the collection:</p>
<p>![Capture](https://user-images.githubusercontent.com/28908397/58367656-98a66700-7eea-11e9-8e01-202a08c8b14a.JPG)
    </p>

    <p>Then go to permissions and edit them to look like this:</p>
    <p>![Capture](https://user-images.githubusercontent.com/28908397/58367671-b4117200-7eea-11e9-9dd6-555d73d78140.JPG)
        </p>

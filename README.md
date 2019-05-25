<h1>Movies</h1>


![movies-demo-min](https://user-images.githubusercontent.com/28908397/58368000-110f2700-7eef-11e9-8d38-3f678ab004e9.gif)


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
<p>In order to run the project you just need to add APP_KEY and APP_SECRET which is located in kinvey.json and after that run npm install.</p>
<img src="https://user-images.githubusercontent.com/28908397/58368017-5af80d00-7eef-11e9-808b-cc565fbd35bf.JPG" alt="kinvey">

	
<h2>Set up Kinvey:</h2>
<p>Register at Kinvey.com and create an application to keep your data in the cloud.
    Create a collection called movies. Each movie has a title, description, imageURL, tickets and genres (array).
</p>

![Kenvey1](https://user-images.githubusercontent.com/28908397/55902270-d158de00-5bd3-11e9-8607-26488582a385.JPG)


<p>In order to be able to keep track of the tickets of each movie, you need to allow all users to edit this collection. So go to the properties of the collection:</p>
 <img src="![Capture](https://user-images.githubusercontent.com/28908397/58368064-47997180-7ef0-11e9-8645-6ea9850378d2.JPG)
" alt="kinvey">
    

    <p>Then go to permissions and edit them to look like this:</p>
 <img src="https://user-images.githubusercontent.com/28908397/58368047-f8ebd780-7eef-11e9-9bb8-d74d8bdddcb8.JPG" alt="kinvey">


    
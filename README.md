# Strange Attractor Generator

React App built to visualize chaotic attractors in multiple perspectives using p5.

Users can adjust the parameters used to define the chaotic systems, as well as the initial position, number of iterations and change-in-time (ie delta) time constant (for 3d attractors).

The set of 2D attractors come with multiple sample parameter sets to help demonstrate a few interesting shapes the systems are capable or producing. The 3D attractors come with the ability to view the system in any 2D perspective, as well a 3D line render (ie lines render rather than points) where the user can see the development of the system over time from the initial position, as well as view it from different angles by adjusting the camera position on the canvas.

The following 2D attractors are available:
* Peter De Jong
* Clifford
* Svennson
* Bedhead
* Fractel Dream (4 variations)
* Hopalong (2 variations)
* Gumowski-Mira
* Symmetric Icon
* Gingerbread Man
* Henon
* Quadrup Two
* Tinkerbell
* Bogdanov
* Duffering
* Ikeda

The following 3D attractors are available:
* Thomas
* Lorenz
* Aizawa
* Dadras
* Chen
* Lorenz 84
* Rossler
* Halvorsen
* Rabinovich-Fabrikant
* Three-Scroll Unified Chaotic System
* Sprott
* Four-Wing

If the parameters/initial values set by the user result in some invalid value within the sequence of iterations (some x<sub>n+1</sub> or y<sub>n+1</sub> may be invalid if a parameter set is NaN or it is x<sub>n+1</sub> or y<sub>n+1</sub> reaches infinity (10<sup>1000</sup> in JS)), then the attractor will not render and the user will see a grey screen.

# Running the project
Simply clone the repo, navigate to repo directory on local machine, install dependencies with `npm install` and start development server with `npm start`, which is configured to host the app on `localhost:3000`.














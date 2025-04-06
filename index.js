const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 5000;

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      return callback(null, origin);
    },

    credentials: true,
  })
);

app.use(express.json());


app.get("/projects", (req, res) => {
    const projects = [
      {
        id: 1,
        title: "Travel Agency Website",
        description:
          "This was a project I did for a travel agency. I used HTML CSS to create a responsive website.",
        imageUrl:
          "https://i.pinimg.com/736x/eb/7a/6f/eb7a6f571264754a1eecf91c6a32fba1.jpg",
        detailsUrl:
          "https://i.pinimg.com/736x/4d/c7/25/4dc72587450d9a52e0914a85c43deda6.jpg",
        technology: "HTML, CSS",
        LiveLink: "https://travel-agency-project-peach.vercel.app/",
        Github: "https://github.com/Mamunur-Roshid99/Travel-Agency-Project",
      },
      {
        id: 2,
        title: "Comfea",
        description:
          "This was a project I did for a Comfea Website. I used HTML CSS and JavaScript to create a responsive website.",
        imageUrl:
          "https://i.pinimg.com/736x/23/93/6b/23936b845fb786059339d48bb3618345.jpg",
        detailsUrl:
          "https://i.pinimg.com/736x/0f/35/3b/0f353b409f06b6a0bb143174f87ff894.jpg",
        technology: "HTML, CSS, JAVASCRIPT",
        LiveLink: "https://comfea.vercel.app/",
        Github: "https://github.com/Mamunur-Roshid99/Comfea-website",
      },
      {
        id: 3,
        title: "Nexcent",
        description:
          "This was a project I did for a Nexcent Website. I used HTML, Tailwind CSS, JavaScript and React to create a responsive website.",
        imageUrl:
          "https://i.pinimg.com/736x/3e/52/58/3e52585767cc17da215c557c17e5d0d5.jpg",
        detailsUrl:
          "https://i.pinimg.com/736x/6b/db/31/6bdb31a4e8fb884a895d4f827eaec3db.jpg",
        technology: "HTML, Tailwind CSS, JavaScript, React",
        LiveLink: "https://nexcent-beige.vercel.app/",
        Github: "https://github.com/Mamunur-Roshid99/Nexcent-Website",
      },
      {
        id: 4,
        title: "News Website",
        description:
          "This was a project I did for a News Website. I used HTML, Tailwind CSS and React.js to create a responsive website.",
        imageUrl:
          "blob:https://www.pinterest.com/ffce2a7c-4c4b-48f6-a594-577d8e5b603f",
        detailsUrl:
          "https://i.pinimg.com/736x/66/fa/df/66fadffd972e35321e3c687db2d8e625.jpg",
        technology: "HTML, Tailwind CSS, React.js",
        LiveLink: "https://github.com/Mamunur-Roshid99/News-Website",
        Github: "https://github.com/Mamunur-Roshid99/News-Website",
      },
      {
        id: 5,
        title: "Airbnb Clone Website",
        description:
          "This was a project I did for a travel agency. I used HTML,Tailwind CSS to create a responsive website.",
        imageUrl:
          "https://i.pinimg.com/736x/a5/44/a6/a544a645adea1070932b83d64bcfed97.jpg",
        detailsUrl:
          "https://i.pinimg.com/736x/38/97/58/3897588052dd69c1bde07711f195f486.jpg",
        technology: "HTML, Tailwind CSS",
        LiveLink:
          "https://mamunur-roshid99.github.io/Airbnb-landing-page-clone/",
        Github: "https://github.com/Mamunur-Roshid99/Airbnb-landing-page-clone",
      },
    ];

    res.json(projects);
})

app.get("/", (req, res) => {
    res.send("Hello, World!");
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
})
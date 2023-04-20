const categories = document.querySelectorAll(".categories div");
const image = document.querySelector(".image");
const text = document.querySelector(".text");

const data = [
  {
    name: "web-design",
    image: "./images/web-design.png",
    text: "web-design - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente ipsam sunt sint quaerat, exercitationem animi assumenda, voluptates",
  },
  {
    name: "graphic-design",
    image: "./images/graphic-design.jpg",
    text: "graphic-design - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente ipsam sunt sint quaerat, exercitationem animi assumenda, voluptates",
  },
  {
    name: "online-support",
    image: "./images/online-support.jpg",
    text: "online-support - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente ipsam sunt sint quaerat, exercitationem animi assumenda, voluptates",
  },
  {
    name: "app-design",
    image: "./images/app-design.jpg",
    text: "app-design - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente ipsam sunt sint quaerat, exercitationem animi assumenda, voluptates",
  },
  {
    name: "online-marketing",
    image: "./images/online-marketing.jpg",
    text: "online-marketing - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente ipsam sunt sint quaerat, exercitationem animi assumenda, voluptates",
  },
  {
    name: "seo-services",
    image: "./images/seo-services.jpg",
    text: "seo-services - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente ipsam sunt sint quaerat, exercitationem animi assumenda, voluptates",
  },
];

categories.forEach((category) => {
  category.addEventListener("click", () => {
    const categ = category.classList[0];
    // console.log(categ);
    // console.log(data.filter((item) => item.name == categ)[0].image);
    image.src = data.filter((item) => item.name == categ)[0].image;
    text.textContent = data.filter((item) => item.name == categ)[0].text;
    categories.forEach((category) => {
      category.classList.remove("active");
    });
    category.classList.add("active");
  });
});

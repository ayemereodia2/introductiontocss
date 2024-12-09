const dataSource = [
    {image: "./images/brazil.jpg", title:"Rio de Janiero, Brazil", description:"A city of vibrant energy, Samba and stunning landscape."},
    {image: "./images/paris.jpg", title:"Paris, France", description:"The city know for its Iconic landmarks, art and romance."},
    {image: "./images/japan.jpg", title:"Kyoto, Japan", description:"A serene city blending ancient tradition with natural beauty."}

];
const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

document.body.onload = () => {

  const backBtn = styleButton(document.getElementById("backward-btn-view"));
  const forwardBtn = styleButton(document.getElementById("forward-btn-view"));
  addOptions(dataSource);
  const photoContainer = document.getElementById("photo-roll");
  photoContainer.style.display = "flex";
  photoContainer.style.flexDirection = "row";
  photoContainer.style.gap = "5px"
  photoContainer.style.flex = "3 300px";
  photoContainer.style.flexWrap = "wrap";
  photoContainer.style.justifyContent = "center";

  dataSource.forEach(item => {
    const photoDiv = createDivContainer();
    const image = styleImage(item.image);
    photoDiv.append(image);

    const topHeading = stlyeHeading(item.title);
    photoDiv.append(topHeading);

    const topDescription = styleDesciption(item.description);
    photoDiv.append(topDescription);

    const button = styleViewButton();
    photoDiv.append(button);

    photoContainer.appendChild(photoDiv);
  })

};

function styleImage(source) {
    const image = document.createElement("img");
    image.style.objectFit = "cover";
    image.style.objectPosition = "center";
    image.style.width = "100%";
    image.style.height = "200px";
    image.src = source;
    image.style.borderRadius = "15px";
    return image;
}

function stlyeHeading(title) {
    const topHeading = document.createElement("h4");
    topHeading.textContent = title;
    topHeading.style.fontWeight = "bold";
    topHeading.style.marginTop = "0.5em";
    topHeading.style.marginBottom = "-0.5em";
    return topHeading;
}

function createDivContainer() {
    const photoDiv = document.createElement("div");
    photoDiv.style.display = "flex";
    photoDiv.style.flexDirection = "column";
    photoDiv.style.width = "200px";
    photoDiv.style.borderColor = "black";
    photoDiv.style.borderWidth = "1px";
    photoDiv.style.alignItems = "left";
    photoDiv.style.gap = "0px";
    return photoDiv;
}

function styleDesciption(description) {
    const topDescription = document.createElement("h5");
    topDescription.textContent = description;
    topDescription.style.textAlign = "left";
    topDescription.style.fontWeight = "normal";
    topDescription.style.marginTop = "1rem";
    topDescription.style.marginBottom = "1rem";
    return topDescription;
}

function styleViewButton() {
    const button = document.createElement("button");
    button.style.width = "120px";
    button.style.height = "32px";
    button.style.borderRadius = "15px";
    button.textContent = "Visit Now";
    button.textAlign = "center";
    button.style.cursor = "pointer";
    button.style.borderWidth = 0;


    const updateButtonStyle = () => {
        if (colorSchemeQuery.matches) {
            // Dark mode
            button.style.backgroundColor = "white";
            button.style.color = "black";
        } else {
            // Light mode
            button.style.backgroundColor = "black";
            button.style.color = "white";
        }
    };

    updateButtonStyle();
    colorSchemeQuery.addEventListener("change", updateButtonStyle);

    return button;
}

function styleButton(backBtn) {
    backBtn.style.backgroundColor = "black";
    backBtn.style.color = "white";
    backBtn.style.borderColor = "black";
    backBtn.style.borderWidth = 0;
    backBtn.style.width = "25px";
    backBtn.style.height = "22px";
    backBtn.style.borderRadius = "5px";
    backBtn.style.cursor = "pointer";
  }

  function addOptions(items){
    const element = document.getElementById("select-options");
    items.forEach((value, index) => {
        const option = document.createElement("option");
        option.value = `${index + 1}`;
        option.textContent = `${index + 1}`;
        element.append(option)
    });
  }
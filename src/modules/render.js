const render = (city, id) => {
  const parent = document.querySelector(".container");
  let existingDiv = document.getElementById(`box${id}`);
  if (existingDiv) {
    existingDiv.innerHTML = `
        <h3 class="card-title" id="description${id}"></h3>
        <h5 class="card-title" id="max_temp${id}"></h5>
        <h5 class="card-title"id="min_temp${id}"></h5>
        <h5 class="card-title"id="humidity${id}"></h5>
        <h5 class="card-title"id="speed${id}"></h5>
      `;
  } else {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `<div class="card-header" > 
          <h3 class="align-items-center">
            <h2 id="country${id}"></h2></div>
        <div class="card-body" id="box${id}">
          <h3 class="card-title" id="description${id}"></h3>
          <h5 class="card-title" id="max_temp${id}"></h5>
          <h5 class="card-title"id="min_temp${id}"></h5>
          <h5 class="card-title"id="humidity${id}"></h5>
          <h5 class="card-title"id="speed${id}"></h5>
        </div>`;
    parent.append(div);
  }
};
export { render };

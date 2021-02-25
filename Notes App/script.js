const addbtn = document.getElementById("addnote");

addbtn.addEventListener("click", () => addnewnote());

function addnewnote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
        `;

  const editbtn = note.querySelector(".edit");
  const deletebtn = note.querySelector(".delete");
  const TextArea = note.querySelector("textarea");
  const main = note.querySelector(".main");

  TextArea.value = text;
  main.innerHTML = marked(text);

  deletebtn.addEventListener("click", () => {
    note.remove();
  });

  editbtn.addEventListener("click", () => {
    TextArea.classList.toggle("hidden");
    main.classList.toggle("hidden");
  });

  TextArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
  });

  document.body.appendChild(note);
}

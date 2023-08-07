function loader(){
    const div = document.createElement("div");
    div.innerHTML="Loading...";
    document.querySelector(".output").append(div);
}
export default loader
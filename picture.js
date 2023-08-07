function picture(url,title){
    const div=document.createElement("div");
    div.classList.add("picture");
    const img=document.createElement("img");
    img.setAttribute("src",url);

    const caption=document.createElement("div");
    caption.innerHTML=title;

    div.append(img);
    div.append(caption);

    document.querySelector(".output").innerHTML="";
    document.querySelector(".output").append(div);
}
export default picture
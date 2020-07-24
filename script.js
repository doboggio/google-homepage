var query = "";
function googleSearch(){
    query = document.getElementById("searchfield").value;
    query = query.trim();
    query = query.replace(" ", "+");
    query = escape(query);
    if(query==="") query = "nothing";
    url = "https://www.google.com/search?q="+query;
    window.open(url, "_blank");
}
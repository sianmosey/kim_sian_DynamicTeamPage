function fetch_info(i) {
    let profile = ["images/SIAN2.svg", "images/SIAN3.svg"];
    let name = [
        "SIAN", "SIAN KIM"
    ];
    let status = ["designer", "developer"];
    document.getElementById("profile").src = profile[i];
    document.getElementById("name").innerHTML = name[i];
    document.getElementById("status").innerHTML = status[i];
    "Hello, I'm Sian Kim. I am interested in design and have never worked as a designer, but I have learned art related to design since I was younger. So I could still be interested in design. I can handle Photoshop programs, illustration programs, and xd programs, and I like to visualize and display what I think through pictures. I didn't know much about coding until I went to Fanshawe College, but now I am studying with interest." 

}
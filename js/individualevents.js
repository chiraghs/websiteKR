var db = firebase.database();

function to_register(e_name){
    var name = document.getElementById("name").value;
    var usn = document.getElementById("usn").value;
    var branch = document.getElementById("branch").value;
    var mobnum = document.getElementById("mobnum").value;

    savetodb(e_name,name,usn,branch,mobnum);
}

function savetodb(e_name,name,usn,branch,mobnum){
    var save1 = db.ref("Individual_Events").child(e_name).push();
    save1.set({
        Name : name,
        Usn : usn,
        Branch : branch,
        Mob : mobnum
    });    

}
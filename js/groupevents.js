var db = firebase.database();

function to_register(e_name){
    
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var name3 = document.getElementById("name3").value;
    var name4 = document.getElementById("name4").value;
    var usn = document.getElementById("usn").value;
    var branch = document.getElementById("branch").value;
    var mobnum = document.getElementById("mobnum").value;

    savetodb(e_name,name1,name2,name3,name4,usn,branch,mobnum);
}

function savetodb(e_name,name1,name2,name3,name4,usn,branch,mobnum){
    var save = db.ref("Group_Events").child(e_name).push();
    save.set({
        Name1 : name1,
        Name2 : name2,
        Name3 : name3,
        Name4 : name4,
        Usn : usn,
        Branch : branch,
        Mob : mobnum
    });    

}
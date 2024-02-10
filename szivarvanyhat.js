//var oplist=["rambio.html","bravabio.html","floresbio.html","zerobio.html","nokkbio.html","ianabio.html","dokkabio.html","sledgebio.html","thatcherbio.html","lionbio.html"];
//ram brava flores zero nokk iana dokka sledge thatcher lion 
//tubarao pulse kaid bandit mozzie ela azami warden aruni castle

function swiccs()
{
    document.addEventListener('click',function(kattint){
        kattinta = kattint.target.id;
        var ezmi = document.getElementById(kattinta);
        var valami = ezmi.id;
        var url = valami+".html";
    
        window.location.href = url;
        
    });

    
}
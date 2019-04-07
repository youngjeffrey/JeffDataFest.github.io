$(document).ready(function() {
    
    $("#button").click(function() {
        var trainingsession = $("input[name='training']:checked").val();
        var duration = parseFloat($("#duration").val());
        var dailyload = parseFloat($("#dailyload").val());
        var acuteload = parseFloat($("#acuteload").val());
        var desire = parseFloat(document.getElementById("myRange").value);
        var irritability = parseFloat(document.getElementById("myRange2").value);
        var sleephours = parseFloat($("#sleephours").val());
        var nutrition = $("input[name='nutrition']:checked").val();
        var d1, d2, d3, d4, d5, n1, n2, n3;
        var result;
        var predicteddistance;
        
        if(trainingsession == "mobility") {
            d1 = -0.2547484;
            d2 = 0;
            d3 = 0;
            d4 = 0;
            d5 = 0;
        } else if(trainingsession == "recovery") {
            d1 = 0;
            d2 = 0;
            d3 = 0;
            d4 = 0;
            d5 = 0;
        } else if(trainingsession == "skills") {
            d1 = 0;
            d2 = 0;
            d3 = 0.0992754;
            d4 = 0;
            d5 = 0;
        } else if(trainingsession == "speed") {
            d1 = 0;
            d2 = 0;
            d3 = 0;
            d4 = 0.3493084;
            d5 = 0;
        } else if(trainingsession == "strength") {
            d1 = 0;
            d2 = 0;
            d3 = 0;
            d4 = 0;
            d5 = -0.5380476;
        }
        
        if(nutrition == "poor") {
            n1 = -1.2706848;
            n2 = 0;
            n3 = 0;
        } else if(nutrition == "okay") {
            n1 = 0;
            n2 = -0.471413;
            n3 = 0;
        } else if(nutrition == "excellent") {
            n1 = 0;
            n2 = 0;
            n3 = 0;
        }
        
        result = parseFloat(d1 + d2 + d3 + d4 + d5 + n1 + n2 + n3 + 0.005667*duration - 0.0008567*dailyload + 0.0009757*acuteload - 0.4051021*desire + 0.2635822*irritability - .139520*sleephours + 1.5865047);
        predicteddistance = parseFloat(result*148.012 + 566.1347)
        predicteddistance2 = predicteddistance.toFixed(2);
        var status;
        
        if(result <= -0.44) {
            status = "POOR";
            status.fontcolor("red");
        } else if(result <= 0.44 && result > -0.44) {
            status = "FAIR";
            status.fontcolor("yellow");
        } else {
            status = "EXCELLENT";
            status.fontcolor("green");
        }
        
        document.getElementById("results").innerHTML = predicteddistance2 + " meters";
        
        document.getElementById("resultsstatus").innerHTML = "STATUS";
        document.getElementById("resultsstatus2").innerHTML = status;
    });
    
});

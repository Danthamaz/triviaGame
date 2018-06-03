$(document).ready(function() {
// cloned initial Div in case needed to reset any HTML additions through JS
    var divClone = $("section").clone();
// Hide all content in mainDiv until start button is pushed
    $(".mainDiv").hide();
// Function below is performed when start button is clicked:
    $(".startButton").on("click", function() {
        // console.log("yes!")
        $(".startButton").hide();
        $("section").css({
            "background-color": "#D3D3D3",
            "border": "2px",
            "border-style": "solid",
            "border-color": "#BF0A30"
         });
        $(".mainDiv").show();
    });
});
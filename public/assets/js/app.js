$(".complete").on("click", function() {
    let taskID = $(this).attr("id");
    console.log(taskID)

    $.ajax({
        url: "/",
        type: "PUT",
        data: { id: taskID },
        success: console.log("task deleted")


    });

});
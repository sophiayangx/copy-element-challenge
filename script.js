// hints!
// 1. find the element in index.html that you want to copy
// 2. select it somehow (by class . or id #)
// 3. google 'jquery copy element'
// 4. copy the element and add the new element to the element list (google 'jquery add element to div')
// 5. how do you repeat this multiple times, for multiple colors??? There is a nice data structure for this kind of thing.

var elementsList = $("#elements-list");
var element = $(".elements");

$("element").clone().appendTo(elementsList);
$(element).clone().appendTo(elementsList);
$(element).clone().appendTo(elementsList);

var color = ["red", "green", "yellow", "cornsilk", "Pink", "white", "lightpink", "pink", "coral"];

//color[0];

(".element").style.color = "blue"
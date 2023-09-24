function openImagePopup() {
    var imageSource = "Periodic_Table_Printable_Full_Size_Landscape.png";
    var popup = window.open("", "ImagePopup", "width=fit,height=auto");
    popup.document.write("<html><head><title>Enlarged Image</title></head><body>");
    popup.document.write("<img src='" + imageSource + "' alt='Enlarged Image' style='width:100%; height:auto;'>");
    popup.document.write("</body></html>");
  }

function scrollToText() {
    var textSection = document.getElementById("p1");
    textSection.scrollIntoView({ behavior: "smooth" });
}

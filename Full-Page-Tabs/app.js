function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default
    let tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    // Remove the backgroundColor of all the tabs 
    tablinks = document.getElementsByClassName('tablink');
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    // Show the specific tab content 
    document.getElementById(pageName).style.display = 'block';

    // Add the specific color to the backgroundColor of the tab content
    elmnt.style.backgroundColor = color;

}

document.getElementById('defaultOpen').click();
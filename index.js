let browser = prompt("Enter browser name!")
if (browser == 'Edge') {

} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert('Okay we support these browsers too');
} else {

}

switch (browser) {
    case "Edge":
        alert("You've got the Edge!");
        break;
    case "Chrome":
        alert('Okay we support these browsers too');
        break;
    case "Firefox":
        alert('Okay we support these browsers too');
        break;
    case "Safari":
        alert('Okay we support these browsers too');
        break;
    case "Opera":
        alert('Okay we support these browsers too');
        break;
    default:
        alert('We hope that this page looks ok!');
        break;
}
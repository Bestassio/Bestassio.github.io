/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

{'x': -65, 'z': 75, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Hub', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': 471, 'z': 1313, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'End', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': 1048, 'z': 1357, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Mesa/dessert', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': -94, 'z': 410, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Froglight farm', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': 166, 'z': 410, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Ghast farm', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': -55, 'z': 144, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Magma cube farm', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': -257, 'z': 10, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Gold farm', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': 8700, 'z': 8700, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': "Kitty & Wolf's portal", 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'}
    ]
}

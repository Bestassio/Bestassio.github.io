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

        // Example 1: Simple marker
        {
            x: -200,
            z: -200,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        // Example 2: Marker with text
        {
            x: 0,
            z: 0,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Marker with text",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        // Example 3: Text only
        {
            x: 200,
            z: 200,
            text: "Text only", 
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 50px Calibri,sans serif",
        },

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [
{'x': -501, 'z': -5999, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Bestas', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': -485, 'z': -5893, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Ian', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': -750, 'z': -6055, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Cosmic', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': -934, 'z': -6713, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': "Bestas's big build start", 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': -1409, 'z': -5377, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Guardian farm', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': 1116, 'z': -5493, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Saru', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': -74, 'z': 12, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Spawn', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': -340, 'z': -240, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Eimas', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': 512, 'z': 136, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Reaper/Devil_x', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': 945, 'z': 719, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Lunar', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': -1869, 'z': 141, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Zerleodon swamp base', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': -1890, 'z': -35, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Slime farm', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': -1403, 'z': 2878, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': "Cosmic's mushroom base", 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': 1737, 'z': 10506, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Pillager outpost', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': 2448, 'z': 10375, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Raid farm', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': 3208, 'z': 10525, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Creeper farm', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': 2472, 'z': 10843, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': "MrsO's base", 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': 1263, 'z': 13567, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'Guardian farm', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': 1054, 'z': 13590, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': 'cactus farm', 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'},
{'x': 69666, 'z': 69666, 'image': 'custom.pin.png', 'imageAnchor': [0.5, 1], 'imageScale': 0.2, 'text': "Kitty & Wolf's base", 'textColor': 'red', 'offsetX': 0, 'offsetY': 20, 'font': 'bold 20px Calibri, sans-serif'}
    ]
}

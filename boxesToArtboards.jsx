/**
* @@@BUILDINFO@@@ boxesToArtboards.jsx !Version! Sat Jun 10 2017 17:31:47 GMT-0400
*/
/*
|   ****************************************
|   Convert Stroked Rectangles to Artboards
|   ****************************************
|
|   CREATED BY: Jacey Rae Harris
|   rzkharris@gmail.com
|
*/
$.bp(app.documents < 1)

var items = app.activeDocument.activeLayer.pathItems
var stWidth = 0.5
var fColor = [0, 100, 0, 0]

function compareCMYK(cmykColor, compareArray) {
    if(
    cmykColor.cyan == compareArray[0] &&
    cmykColor.magenta == compareArray[1] &&
    cmykColor.yellow == compareArray[2] &&
    cmykColor.black == compareArray[3]
        ){
            return true
            }
        else{
            return false
            }
    }

function findBoxes(strokeWid, strokeCol) {
    $.writeln(items.length)
    for( i = 0; i < items.length; i++){
        if(compareCMYK (items[i].strokeColor, strokeCol) && items[i].strokeWidth == strokeWid) {
            app.activeDocument.artboards.add(items[i].geometricBounds)
            }
        }
    if(app.activeDocument.artboards.length > 1) {
        app.activeDocument.artboards[0].remove()
        }
    }

findBoxes (stWidth, fColor)

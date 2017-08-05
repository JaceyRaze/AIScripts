/**
* @@@BUILDINFO@@@ rasterToPlusMinus.jsx !Version! Sat Aug 05 2017 12:22:43 GMT-0400
*/

/**
    This script requires an image to begin.
    Take the image and use the Mosaic feature to created pixels found under Object -> Create Object Mosaic
    Warning, this can take a considerable amount of time to run on large images. I would suggest using images
        smaller than ~200 x 200 pixels.
    
        » Requires you to caluclate the dimension of each pixel beforehand, removed teh "//" from the below comment
            and input your number, you can easily find this after you do the mosaic by just dividing the width of the
            image by how many pixels you used.
        » Make sure to select and ungroup your mosiac when ready to run.
        » Everything is in points. to conver from inches divide by 72.
        » This script can take forever on large images. I haven't done any optimization it was only a proof of concept
        » Illustrator scripting will not allow us to gather any pixel data directly from the image this is why the mosaic
            is used. The script esseentially replaces boxes with the new shape.
        » I can polish this up if anyone finds it useful just leave a comment on the GitHub

    Thank you

    RAE
*/

//var dimensionOfpixels = (width * 72) / pixels

function placeSym(location, symbolName) {
    var sym = app.activeDocument.activeLayer.symbolItems.add(app.activeDocument.symbols[symbolName])
        sym.position = location
    }
function moveLocation(start, dx, dy){
    var fin = []
    
    fin[0] = start[0] + dx
    fin[1] = start[1] + dy
    
    return fin
    }

function createPlusOrMinus (location, type, fc, size) {
    
    var dim = 6.018972 //dimensionOfpixels                                            
    var minus = app.activeDocument.activeLayer.pathItems.add()
        minus.setEntirePath([ 
            moveLocation(location, 0, -dim * 0.375), 
            moveLocation(location, dim, -dim * 0.375), 
            moveLocation(location, dim, -dim * 0.625), 
            moveLocation(location, 0, -dim * 0.625)
            ])
            
        minus.closed = true
        minus.filled = true
        minus.fillColor = fc
        //minus.resize(size, size)
        
        if(type === "PLUS"){
            var plus = minus.duplicate( minus.parent, ElementPlacement.PLACEATBEGINNING)
            plus.rotate(90)
            }
        }

function replacePixels(){
    var sel = app.activeDocument.selection
    var name = ""
    
    for(i = 0; i < sel.length; i++){
        var fcolor = sel[i].fillColor;
        var sizeFactor = sel[i].fillColor.black
        
        if(Math.round(Math.random())) {
            createPlusOrMinus(sel[i].position, "PLUS", fcolor, sizeFactor)
            }
        else{
            createPlusOrMinus(sel[i].position, "MINUS", fcolor, sizeFactor)
            }
        }
    }

replacePixels ();
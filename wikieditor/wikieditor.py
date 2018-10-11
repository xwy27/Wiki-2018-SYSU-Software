import os,sys
from flask import *

app = Flask(__name__)

path="..\\"
def getAllFiles():
    files = {
        "CSS" : [],
        "JS" : [],
        "Pages" : [],
        "Index" : {
            "local" : "index.html",
            "edit" : "http://2018.igem.org/wiki/index.php?title=Team:SYSU-Software&action=edit",
            "raw" : ""
        }
    }
    for dirpath,dirnames,filenames in os.walk(path):
        for file in filenames:
                fullpath=os.path.join(dirpath,file)
                if ".git" not in fullpath and "wikieditor" not in fullpath:
                    if "\\css\\" in fullpath :
                        tmpEdit = fullpath.replace(path, "http://2018.igem.org/wiki/index.php?title=Template:SYSU-Software/statics/") + "&action=edit"
                        tmpEdit = tmpEdit.replace("\\", "/")
                        tmpRaw = fullpath.replace(path, "http://2018.igem.org/wiki/index.php?title=Template:SYSU-Software/statics/") + "&action=raw&ctype=text/css"
                        tmpRaw = tmpRaw.replace("\\", "/")
                        files["CSS"].append({
                            "local" : fullpath,
                            "edit" : tmpEdit,
                            "raw" : tmpRaw
                        })
                    if "\\js\\" in fullpath :
                        tmpEdit = fullpath.replace(path, "http://2018.igem.org/wiki/index.php?title=Template:SYSU-Software/statics/") + "&action=edit"
                        tmpEdit = tmpEdit.replace("\\", "/")
                        tmpRaw = fullpath.replace(path, "http://2018.igem.org/wiki/index.php?title=Template:SYSU-Software/statics/") + "&action=raw&ctype=text/javascript"
                        tmpRaw = tmpRaw.replace("\\", "/")
                        files["JS"].append({
                            "local" : fullpath,
                            "edit" : tmpEdit,
                            "raw" : tmpRaw
                        })
                    if "\\html\\" in fullpath :
                        tmpEdit = fullpath.replace(path, "http://2018.igem.org/wiki/index.php?title=Template:SYSU-Software/statics/") + "&action=edit"
                        tmpEdit = tmpEdit.replace("\\", "/")
                        tmpRaw = fullpath.replace(path, "http://2018.igem.org/wiki/index.php?title=Template:SYSU-Software/statics/") + "&action=raw&ctype=text/html"
                        tmpRaw = tmpRaw.replace("\\", "/")
                        files["Pages"].append({
                            "local" : fullpath,
                            "edit" : tmpEdit,
                            "raw" : tmpRaw
                        })
    return files

@app.route('/')
def wikieditor():
    files = getAllFiles()
    return render_template('index.html', files=files)

if __name__ == '__main__':
    app.run(debug=True, port=8099, threaded=True)
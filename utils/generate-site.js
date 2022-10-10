const { rejects } = require("assert")
const fs = require("fs")
const { resolve } = require("path")

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, err => {
            // if error reject the promise and send the error to the promise's .catch() method
            // return out of the function here to make sure the promise dosent accidentaly execute the resolve() function as well
            if (err) {
                reject(err)
                return
            }

            // if everything went well, resolve the promise and send the successful data to the .then() method
            resolve({
                ok: true,
                message: "File Created"
            })
        })
    })
}

const copyFiles = () => {
    return new Promise((resolve, reject) => {
        if(err){
            reject(err)
            return
        }

        resolve({
            ok: true,
            message: "File Copied"
        })
    })
}

modeule.exports = {writeFile,copyFiles}
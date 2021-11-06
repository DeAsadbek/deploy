const multer = require("multer");
const path = require("path");

//multer settings
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        // cd(null, Math.random().toString.slice(-5) + path.extname(file.originalname));
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
// img to uploads folder
const uploads = multer({
    storage,
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== ".jpg" && ext !== ".png" && ext !== ".jpeg" && ext !== ".jfif") {
            const err = new Error("Xatolik bor")
            err.code = 404
            return cb(err);
        }
        cb(null, true);
    },
    preservePath: true
});
//multer settings

module.exports = uploads;
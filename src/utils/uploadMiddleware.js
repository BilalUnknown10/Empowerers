import multer from "multer";
import { promisify } from "util";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Change "file" to "image" to match frontend
const uploadMiddleware = promisify(upload.single("image"));

export default uploadMiddleware;

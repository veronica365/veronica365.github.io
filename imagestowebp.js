// Importing required libraries
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const prompt = require("prompt-sync")();

// Define output and input directories
const OUTPUT_DIR = "./assets/formatdimages";
const INPUT_DIR = "./assets/images";

// Prompt user for a new file name pattern
// const nPattern = prompt("Rename files to (none for the inital name):");

// If output directory exists, remove it and its contents
if (fs.existsSync(OUTPUT_DIR)) {
  fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
}

// Create the output directory
fs.mkdirSync(OUTPUT_DIR);

// Define a function to convert image files to WebP format
let imgs = ["cruise-moto.png","bookstore.png","me.jpeg","logo.png","math-magic.png","budget-buddy.png"];
const convertToWebp = (img) => {
  // Define the name of the new WebP file
  const imgName = path.parse(img).name;
  // Use sharp to convert the image to WebP format and save it to the output directory
  sharp(`${INPUT_DIR}/${img}`).webp().toFile(`${OUTPUT_DIR}/${imgName}.webp`);
};

// Read the input directory and filter for image files (PNG, JPG, JPEG)
fs.readdir(INPUT_DIR, (err, files) => {
  imgs = files.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return ext === ".png" || ext === ".jpg" || ext === ".jpeg";
  });
  // For each image file found, call the convertToWebp function
  imgs.forEach((img, i) => convertToWebp(img));
});

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

class ImageThumbsPlugin {
    constructor(options = {}) {
        this.inputDir = options.inputDir || "images";
        this.outputDir = options.outputDir || "images/thumbs";
        this.maxWidth = options.maxWidth || 680;
    }

    apply(compiler) {
        compiler.hooks.thisCompilation.tap("ImageThumbsPlugin", (compilation) => {
            compilation.hooks.processAssets.tapPromise(
                {
                    name: "ImageThumbsPlugin",
                    stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
                },
                async () => {
                    const inputDir = path.resolve(compiler.context, this.inputDir);
                    const files = fs.readdirSync(inputDir);
                    const validExts = [".jpg", ".jpeg", ".JPG"];

                    for (const file of files) {
                        const ext = path.extname(file);
                        if (!validExts.includes(ext)) continue;

                        const inputPath = path.join(inputDir, file);

                        try {
                            const image = sharp(inputPath);
                            const metadata = await image.metadata();

                            let buffer;

                            if (metadata.width > this.maxWidth) {
                                buffer = await image
                                    .rotate()
                                    .resize({ width: this.maxWidth })
                                    .jpeg({ quality: 80 })
                                    .toBuffer();
                            } else {
                                buffer = fs.readFileSync(inputPath);
                            }

                            const outputPath = path.posix.join(
                                this.outputDir,
                                file
                            );

                            compilation.emitAsset(
                                outputPath,
                                new compiler.webpack.sources.RawSource(buffer)
                            );

                            console.log(`[thumbs] ${file}`);
                        } catch (err) {
                            console.error(`[thumbs] Error processing ${file}:`, err);
                        }
                    }
                }
            );
        });
    }
}

module.exports = ImageThumbsPlugin;

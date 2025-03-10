const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const ico = require('sharp-ico');

const sizes = [16, 32, 64, 192, 512];
const inputSvg = path.join(__dirname, '../public/logo.svg');
const outputDir = path.join(__dirname, '../public');

async function generateIcons() {
  try {
    // Generate PNG files for all sizes
    const pngPromises = sizes.map(async size => {
      console.log(`Generating ${size}x${size} icon...`);
      const outputName = size === 192 ? 'logo192.png' : 
                        size === 512 ? 'logo512.png' : 
                        `favicon-${size}x${size}.png`;
      
      await sharp(inputSvg)
        .resize(size, size)
        .png()
        .toFile(path.join(outputDir, outputName));
    });

    await Promise.all(pngPromises);

    // Generate favicon.ico with multiple sizes (16x16 and 32x32)
    console.log('Generating favicon.ico...');
    const favicon16 = await sharp(inputSvg)
      .resize(16, 16)
      .png()
      .toBuffer();
    
    const favicon32 = await sharp(inputSvg)
      .resize(32, 32)
      .png()
      .toBuffer();

    const icoBuffer = await ico.encode([favicon16, favicon32]);
    fs.writeFileSync(path.join(outputDir, 'favicon.ico'), icoBuffer);

    console.log('Icon generation complete!');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons(); 
import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

const inputDir = './public/images';
const files = readdirSync(inputDir);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

  const inputPath = join(inputDir, file);
  const outputName = basename(file, ext) + '.webp';
  const outputPath = join(inputDir, outputName);

  const beforeSize = statSync(inputPath).size;

  await sharp(inputPath)
    .webp({ quality: 85 })
    .toFile(outputPath);

  const afterSize = statSync(outputPath).size;
  const saved = (((beforeSize - afterSize) / beforeSize) * 100).toFixed(1);
  console.log(`✅ ${file} → ${outputName} | ${(beforeSize/1024/1024).toFixed(2)}MB → ${(afterSize/1024/1024).toFixed(2)}MB (saved ${saved}%)`);
}

console.log('\n🎉 تم ضغط جميع الصور بنجاح!');

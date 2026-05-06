#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script helps optimize images in the public directory by:
 * 1. Converting images to modern formats (WebP, AVIF)
 * 2. Optimizing image quality and file size
 * 3. Generating responsive image variants
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  // Directories to process
  directories: [
    'public/images',
    'public/logos',
    'public/banks logo',
    'public/lottie'
  ],
  // Supported formats
  supportedFormats: ['.png', '.jpg', '.jpeg'],
  // Quality settings (0-100)
  quality: {
    webp: 80,
    avif: 75,
    png: 85
  },
  // File size limits (in bytes)
  maxFileSize: {
    logo: 50000,      // 50KB for logos
    hero: 500000,     // 500KB for hero images
    general: 200000   // 200KB for general images
  }
};

function checkFileSize(filePath) {
  const stats = fs.statSync(filePath);
  const fileSize = stats.size;
  
  // Determine file type and appropriate size limit
  let sizeLimit = config.maxFileSize.general;
  if (filePath.includes('logo') || filePath.includes('favicon')) {
    sizeLimit = config.maxFileSize.logo;
  } else if (filePath.includes('hero')) {
    sizeLimit = config.maxFileSize.hero;
  }
  
  return {
    size: fileSize,
    sizeKB: Math.round(fileSize / 1024),
    isOptimized: fileSize <= sizeLimit,
    recommended: fileSize > sizeLimit
  };
}

function analyzeImages() {
  console.log('🔍 Analyzing image files...\n');
  
  let totalFiles = 0;
  let totalSize = 0;
  let largeFiles = [];
  
  config.directories.forEach(dir => {
    if (!fs.existsSync(dir)) {
      console.log(`⚠️  Directory not found: ${dir}`);
      return;
    }
    
    console.log(`📁 Processing ${dir}:`);
    
    const files = fs.readdirSync(dir);
    const imageFiles = files.filter(file => 
      config.supportedFormats.some(ext => file.toLowerCase().endsWith(ext))
    );
    
    imageFiles.forEach(file => {
      const filePath = path.join(dir, file);
      const analysis = checkFileSize(filePath);
      
      totalFiles++;
      totalSize += analysis.size;
      
      const status = analysis.isOptimized ? '✅' : '⚠️';
      const recommendation = analysis.recommended ? ' (Needs optimization)' : '';
      
      console.log(`  ${status} ${file}: ${analysis.sizeKB}KB${recommendation}`);
      
      if (analysis.recommended) {
        largeFiles.push({
          file: filePath,
          size: analysis.sizeKB,
          type: filePath.includes('logo') ? 'logo' : 
                filePath.includes('hero') ? 'hero' : 'general'
        });
      }
    });
    
    console.log('');
  });
  
  console.log(`📊 Summary:`);
  console.log(`  Total files: ${totalFiles}`);
  console.log(`  Total size: ${Math.round(totalSize / 1024)}KB`);
  console.log(`  Files needing optimization: ${largeFiles.length}`);
  
  if (largeFiles.length > 0) {
    console.log('\n🔧 Optimization Recommendations:');
    largeFiles.forEach(({ file, size, type }) => {
      const maxSize = config.maxFileSize[type] / 1024;
      console.log(`  • ${path.basename(file)}: ${size}KB → Target: <${maxSize}KB`);
      
      // Specific recommendations
      if (type === 'logo') {
        console.log(`    → Convert to SVG vector format or compress PNG`);
      } else if (type === 'hero') {
        console.log(`    → Use WebP format with quality 75-80`);
      } else {
        console.log(`    → Use WebP format with quality 80`);
      }
    });
  }
  
  return largeFiles;
}

// Generate optimization commands
function generateOptimizationCommands(files) {
  console.log('\n🛠️  Optimization Commands:');
  console.log('(Install imagemagick first: brew install imagemagick)\n');
  
  files.forEach(({ file, type }) => {
    const basename = path.basename(file, path.extname(file));
    const dir = path.dirname(file);
    
    if (type === 'logo') {
      // For logos, suggest PNG optimization
      console.log(`# Optimize ${path.basename(file)}`);
      console.log(`convert "${file}" -quality ${config.quality.png} -strip "${dir}/${basename}-optimized.png"`);
    } else {
      // For other images, suggest WebP conversion
      console.log(`# Convert ${path.basename(file)} to WebP`);
      console.log(`convert "${file}" -quality ${config.quality.webp} -strip "${dir}/${basename}.webp"`);
    }
    console.log('');
  });
}

// Main execution
if (require.main === module) {
  console.log('🚀 Cred2Tech Image Optimization Tool\n');
  
  const largeFiles = analyzeImages();
  
  if (largeFiles.length > 0) {
    generateOptimizationCommands(largeFiles);
    
    console.log('💡 Tips for manual optimization:');
    console.log('1. Use online tools like TinyPNG for PNG compression');
    console.log('2. Convert logos to SVG format for better scalability');
    console.log('3. Use WebP format for photographs and complex images');
    console.log('4. Consider lazy loading for below-the-fold images');
    console.log('5. Use appropriate image dimensions (don\'t serve larger than needed)');
  } else {
    console.log('🎉 All images are optimized!');
  }
}

module.exports = { analyzeImages, generateOptimizationCommands };

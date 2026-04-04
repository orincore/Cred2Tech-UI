const fs = require('fs');

function makeSharp(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Array of class strings to remove entirely
  const toRemove = [
    /rounded-2xl/g,
    /rounded-xl/g,
    /rounded-lg/g,
    /rounded-md/g,
    /rounded-sm/g,
    /rounded-3xl/g,
    /rounded-\[24px\]/g,
    /rounded-\[100px\]/g
  ];
  
  toRemove.forEach(regex => {
    content = content.replace(regex, '');
  });

  // Specifically remove rounded-full from buttons and nav items
  // Buttons usually have px- or py- followed by rounded-full
  content = content.replace(/rounded-full/g, (match, offset, string) => {
    // Look at surrounding 50 characters to see if it's a dot (w-2, w-4, etc.)
    const surrounding = string.substring(Math.max(0, offset - 30), offset + 30);
    if (surrounding.includes('w-2 h-2') || surrounding.includes('w-4 h-4') || surrounding.includes('w-[300px] h-[300px]') || surrounding.includes('absolute top-0 right-0 w-[300px] h-[300px]')) {
      return 'rounded-full'; // keep it
    }
    return ''; // remove it
  });

  // Clean up any double spaces left behind
  content = content.replace(/  +/g, ' ');
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
}

makeSharp('app/page.tsx');
makeSharp('app/components/Header.tsx');

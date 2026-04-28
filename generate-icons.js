const fs = require('fs');

const file1 = fs.readFileSync('C:\\Users\\MAS DIVO\\.gemini\\antigravity\\brain\\ef56dead-bbfb-4d10-9bfd-028944c6190d\\.system_generated\\steps\\843\\output.txt', 'utf8');
const file2 = fs.readFileSync('C:\\Users\\MAS DIVO\\.gemini\\antigravity\\brain\\ef56dead-bbfb-4d10-9bfd-028944c6190d\\.system_generated\\steps\\849\\output.txt', 'utf8');

const combined = file1 + '\n' + file2;
const sections = combined.split('## ');

let iconsTsx = `import React from 'react';\n\n`;

for (let i = 1; i < sections.length; i++) {
  const section = sections[i];
  const nameLineEnd = section.indexOf('\n');
  const rawName = section.substring(0, nameLineEnd).trim();
  
  // Format name
  const componentName = rawName
    .replace(/^[^:]+:/, '')
    .split('-')
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join('') + 'Icon';

  const svgStart = section.indexOf('<svg');
  const svgEnd = section.indexOf('</svg>') + 6;
  
  if (svgStart !== -1 && svgEnd !== -1) {
    let svgStr = section.substring(svgStart, svgEnd);
    
    // Reactify attributes
    svgStr = svgStr.replace(/fill-rule/g, 'fillRule');
    svgStr = svgStr.replace(/clip-rule/g, 'clipRule');
    svgStr = svgStr.replace(/stroke-width/g, 'strokeWidth');
    svgStr = svgStr.replace(/stroke-linecap/g, 'strokeLinecap');
    svgStr = svgStr.replace(/stroke-linejoin/g, 'strokeLinejoin');
    svgStr = svgStr.replace(/opacity="/g, 'fillOpacity="');
    
    // add props to svg
    svgStr = svgStr.replace('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>');
    
    iconsTsx += `export const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => (\n  ${svgStr}\n);\n\n`;
  }
}

fs.writeFileSync('components/icons.tsx', iconsTsx);
console.log('icons.tsx generated successfully!');

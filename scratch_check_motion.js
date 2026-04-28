const motion = require('motion');
console.log('Motion keys:', Object.keys(motion));
try {
  const motionReact = require('motion/react');
  console.log('Motion/React keys:', Object.keys(motionReact));
} catch (e) {
  console.log('Motion/React not found');
}

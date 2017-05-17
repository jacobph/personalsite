
/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

const faces = [
  'ᕙ(⇀‸↼‶)ᕗ',
  '~(˘▾˘~)',
  'ʕ•ᴥ•ʔ',
  '(ᵔᴥᵔ)',
  '\\ (•◡•) /', //gotta escape that first forwardslash
];

function makeNewFace(i) {
  const newFace = faces[i];
  document.querySelector('.peeking').innerText = newFace;
}

const face = getRandomInt(0, faces.length - 1);
makeNewFace(face);


if (document.querySelector('.jacob')) {
  document.querySelector('.jacob').onblur = function () {
    this.innerHTML = 'Jacob';
  };
}

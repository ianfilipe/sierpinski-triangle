const body = document.body;

const triangle = document.querySelector('.triangle');

const leftBase = document.querySelector('.left-base');
const vertex = document.querySelector('.vertex');
const rightBase = document.querySelector('.right-base');

const leftBaseCoord = {
  top: leftBase.getBoundingClientRect().top,
  right: leftBase.getBoundingClientRect().right,
  bottom: leftBase.getBoundingClientRect().bottom,
  left: leftBase.getBoundingClientRect().left
}

const vertexCoord = {
  top: vertex.getBoundingClientRect().top,
  right: vertex.getBoundingClientRect().right,
  bottom: vertex.getBoundingClientRect().bottom,
  left: vertex.getBoundingClientRect().left
}

const rightBaseCoord = {
  top: rightBase.getBoundingClientRect().top,
  right: rightBase.getBoundingClientRect().right,
  bottom: rightBase.getBoundingClientRect().bottom,
  left: rightBase.getBoundingClientRect().left
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const onClick = () => {

  let lastTop;
  let lastRight;
  let lastBottom;
  let lastLeft;

  for (let index = 0; index < 5000; index++) {

    // generate Point element
    const point = document.createElement('div');
    point.className = 'point';
    point.style.position = 'absolute';

    if (index === 0) {

      point.style.top = getRandomInt(1, 1001) + 'px';
      point.style.right = getRandomInt(1, 1001) + 'px';
      // point.style.bottom = getRandomInt(1, 101) + 'px';
      // point.style.left = getRandomInt(1, 101) + 'px';


    } else {

      let randomPoint = getRandomInt(1, 4);

      if (randomPoint === 1) {
        console.log('entrei no 1');
        point.style.bottom = (leftBaseCoord.bottom - lastBottom) / 2 + 'px';
        point.style.left = (leftBaseCoord.left + lastLeft) / 2 + 'px';
      }

      if (randomPoint === 2) {
        console.log('entrei no 2');
        point.style.top = (lastTop - vertexCoord.top) / 2 + 'px';
        point.style.left = (vertexCoord.left + lastLeft) / 2 + 'px';
      }

      if (randomPoint === 3) {
        console.log('entrei no 3');
        point.style.bottom = (rightBaseCoord.bottom - lastBottom) / 2 + 'px';
        point.style.left = (rightBaseCoord.left + lastLeft) / 2 + 'px';
      }

    }

    // append Point into Body
    triangle.appendChild(point);

    // set Coord of the last point generated
    lastTop = point.getBoundingClientRect().top;
    lastRight = point.getBoundingClientRect().right;
    lastBottom = point.getBoundingClientRect().bottom;
    lastLeft = point.getBoundingClientRect().left;

    console.log('lastTop: ' + lastTop);
    console.log('lastRight: ' + lastRight);
    console.log('lastBottom: ' + lastBottom);
    console.log('lastLeft: ' + lastLeft);

    console.log(index)
  }
}
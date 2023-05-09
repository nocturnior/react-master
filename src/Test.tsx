interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) => {
  `Hello ${playerObj.name}! ur ${playerObj.age}`;
};

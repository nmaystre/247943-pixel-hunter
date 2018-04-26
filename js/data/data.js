export const headerData = {
  timer: 0,
  lives: 3
};

export const gameData = [
  {
    "type": `two-of-two`,
    "question": `Угадайте для каждого изображения фото или рисунок?`,
    "answers": [
      {
        "image": {
          "url": `http://placehold.it/468x458`,
          "width": 468,
          "height": 458
        },
        "type": `photo`
      },
      {
        "image": {
          "url": `http://placehold.it/468x458`,
          "width": 468,
          "height": 458
        },
        "type": `painting`
      }
    ]
  },
  {
    "type": `tinder-like`,
    "question": `Угадай, фото или рисунок?`,
    "answers": [
      {
        "image": {
          "url": `http://placehold.it/705x455`,
          "width": 705,
          "height": 455
        },
        "type": `photo`
      }
    ]
  },
  {
    "type": `one-of-three`,
    "question": `Найдите рисунок среди изображений`,
    "answers": [
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `photo`
      },
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `painting`
      },
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `photo`
      }
    ]
  },
  {
    "type": `one-of-three`,
    "question": `Найдите фото среди изображений`,
    "answers": [
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `painting`
      },
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `painting`
      },
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `photo`
      }
    ]
  }
];

export let gameStats = [
  {
    answered: true,
    correct: true,
    speed: `fast`
  },
  {
    answered: true,
    correct: true,
    speed: `normal`
  },
  {
    answered: true,
    correct: true,
    speed: `slow`
  },
  {
    answered: true,
    correct: false,
    speed: `normal`
  },
  {
    answered: false,
    correct: false,
    speed: `normal`
  }
];

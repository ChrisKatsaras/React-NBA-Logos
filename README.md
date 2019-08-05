# React NBA Logos
![npm](https://img.shields.io/npm/v/react-nba-logos)  

> React components for NBA team logos  

![image](https://user-images.githubusercontent.com/11506653/61015562-1ff45080-a35a-11e9-9b5c-4a824268c3aa.png)  

## Install

```shell
$ npm install react-nba-logos
```

## Usage

```js
import React from 'react';
import { TOR } from 'react-nba-logos';

const Example = () => {
  return <TOR />; // Loads the Toronto Raptors logo
};

export default Example;
```

or include all icons

```js
import React from 'react';
import * as NBAIcons from 'react-nba-logos';

const Example = () => {
  return <NBAIcons.TOR />; // Loads the Toronto Raptors logo
};

export default Example;
```

## Configuration

Size can be easily configured (Default of 100px)

```js
import React from 'react';
import { TOR } from 'react-nba-logos';

const Example = () => {
  return (
    <div>
      <TOR size={60} />
      <TOR /> // Default of 100px
      <TOR size={140} />
    </div>
  );
};

export default Example;
```

Results in

<img width="324" alt="Screen Shot 2019-07-11 at 5 50 31 PM" src="https://user-images.githubusercontent.com/11506653/61087786-a2394f00-a404-11e9-8e7b-d4361a834ad4.png">

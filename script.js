// DOM manipulation in JS

// create div
// const div = document.createElement('div');

// adds one style
// div.style.color = 'blue';

// adds many styles
// div.style.cssText = 'color: blue, background: gray';

// basically the same as the two above
// div.setAttribute('style', 'color: blue; background: gray');

// if id exists update it to 'theDiv' else create an id with value "theDiv"
// div.setAttribute('id', 'theDiv');

// returns value of specified attribute ['theDiv']
// div.getAttribute('id');

//removes specified attribute
// div.removeAttribute('id');

// adds class 'new' to div
// div.classList.add('new');

// removes class 'new' from div
// div.classList.remove('new');

// if div doesn't have class 'active', adds it; otherwise removes it
// div.classList.toggle('active');

// creates a text node 'Hello World!' and inserts it in div
// div.textContent = 'Hello World!';

// renders the html inside div
// div.innerHTML = '<span>Hello World!</span>';

// all at once

const container = document.querySelector('#container');

const content = document.createElement('div');

// content.style.border = '1px solid black';
content.style.cssText = 'padding: 10px; border: 10px outset black';

content.classList.add('content');

content.textContent = `Don't over think it quick win can we parallel path and lean into that problem i have a hard stop in an hour and half. The horse is out of the barn quick win, for it just needs more cowbell let's schedule a standup during the sprint to review our kpis we need to make the new version clean and sexy, for feed the algorithm big data. Can we take this offline golden goose we need a recap by eod, cob or whatever comes first and circle back so cannibalize, nor blue sky thinking draw a line in the sand. Game-plan today shall be a cloudy day, thanks to blue sky thinking, we can now deploy our new ui to the cloud to be inspired is to become creative, innovative and energized we want this philosophy to trickle down to all our stakeholders we need to have a Come to Jesus meeting with Phil about his attitude tribal knowledge so deploy to production but bottleneck mice.`;

container.appendChild(content);

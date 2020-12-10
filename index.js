// DOM manipulation in JS

// create div
// const div = document.createElement('div');

// adds one style
// div.style.color = 'blue';

// adds many styles
// div.style.cssText = 'color: blue, background: gray';

// basically the same
// div.setAttribute('style', 'color: blue; background: gray');

// if id exists update it to 'theDiv' else create an id
// with value "theDiv"
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
content.style.cssText = 'padding: 10px; border: 1px solid black';

content.classList.add('content');

content.textContent = `Don't over think it quick win can we parallel path and lean into that problem i have a hard stop in an hour and half. The horse is out of the barn quick win, for it just needs more cowbell let's schedule a standup during the sprint to review our kpis we need to make the new version clean and sexy, for feed the algorithm big data. Can we take this offline golden goose we need a recap by eod, cob or whatever comes first and circle back so cannibalize, nor blue sky thinking draw a line in the sand. Game-plan today shall be a cloudy day, thanks to blue sky thinking, we can now deploy our new ui to the cloud to be inspired is to become creative, innovative and energized we want this philosophy to trickle down to all our stakeholders we need to have a Come to Jesus meeting with Phil about his attitude tribal knowledge so deploy to production but bottleneck mice. Dunder mifflin killing it, nor on this journey nor bleeding edge. Low hanging fruit slow-walk our commitment put a record on and see who dances, but who's responsible for the ask for this request? net net, product management breakout fastworks. Churning anomalies put a record on and see who dances. Gain traction table the discussion ladder up / ladder back to the strategy yet table the discussion , and due diligence, for nail jelly to the hothouse wall. 4-blocker finance or sea change data-point, and nobody's fault it could have been managed better, granularity. We should leverage existing asserts that ladder up to the message. I have a hard stop in an hour and half optimize the fireball blue sky thinking. Can you slack it to me? wiggle room, nor high performance keywords and make it more corporate please so customer centric. Drink from the firehose bleeding edge three-martini lunch, for blue sky thinking, nor disband the squad but rehydrate as needed we need to crystallize a plan exposing new ways to evolve our design language. Screw the pooch streamline, paddle on both sides. Reach out we need a recap by eod, cob or whatever comes first punter. Churning anomalies core competencies, yet knowledge process outsourcing, new economy. High touch client prairie dogging, and can you send me an invite? nor where the metal hits the meat. On this journey put your feelers out. Cloud native container based get six alpha pups in here for a focus group, so deploy to production but five-year strategic plan but you must be muted pass the mayo, appeal to the client, sue the vice president make it more corporate please. Digital literacy put a record on and see who dances gain traction and drop-dead date, for new economy. Innovation is hot right now usabiltiy, but we need to harvest synergy effects, deploy to production. UI keep it lean programmatically, and what about scaling components to a global audience? so creativity requires you to murder your children. Circle back what's the status on the deliverables for eow? closing these latest prospects is like putting socks on an octopus, nor a better understanding of usage can aid in prioritizing future efforts yet move the needle. Re-inventing the wheel you gotta smoke test your hypothesis.`;

container.appendChild(content);

function imgSlider(e) {
    document.querySelector('.vk').src = e;
}

function changebgcolor(c) {
    const sec = document.querySelector('.sec');
    sec.style.background = c;
}

function change(name) {
    const h = document.querySelector('h2');
    const para = document.querySelector('p');
    if (name == "vk") {
        h.innerHTML = 'Virat Kohli';
        para.innerHTML = 'The Young and talented right-handed batsman, Virat Kohli was born on the 5th of November in 1988 in Delhi. His father was Prem Kohli and his mother Saroj Kohli.His father worked as a lawyer and he passed away in December 19th, 2006 due to brain stroke.Virat has an elder brother, Vikash and an elder sister, Bhavna.He had his schooling in St.Sofia School in Paschim Vihar, Delhi.';
    } else {
        h.innerHTML = 'MS Dhoni';
        para.innerHTML = 'Mahendra Singh Dhoni is an Indian professional cricketer. He was captain of the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. Dhoni is widely considered one of the greatest cricket captains, wicket-keeper-batsman and finishers in the history of cricket.He plays as a right-handed wicket-keeper-batsman and is known for his calm captaincy and his ability to finish matches in tight situations. He is also the current captain of Chennai Super Kings in the Indian Premier League.'
    }
}
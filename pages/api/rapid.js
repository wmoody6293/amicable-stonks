
export default function Rapid(req, res) {
  switch (req.method) {
    case 'POST':
      try {
        let { search } = req.body;
        // console.log('in rapid.js searcher', search);
        const params = new URLSearchParams({ s: search, r: 'json' });

        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
          }
        };

        // const ex = new URL(`https://${options.headers['X-RapidAPI-Host']}/?s=Avengers%20Endgame&r=json&page=1`);
        // console.log('retrieves the params', ex.search);
        const url = new URL(`https://${options.headers['X-RapidAPI-Host']}/?${params}`);
        // console.log('retrieves the params', url.search);
        const postRapid = async function() {
          const response = await fetch(url, options);
          // console.log('response', response, 'response');
          const data = await response.json();
          console.log('data', data, 'data');
          res.status(200).json({ results: data.Search });
        };

        const bonus = Number(process.env.BONUS);

        if (bonus > 0) {
          setTimeout(postRapid, 100);
          process.env.BONUS = '' + (bonus - 1);
        } else { throw Error('TOO SOON'); }

        return 'at end?';
        // return validation, check for invalid inputs status(422).json({ alert: '?' })
      } catch (reason) {
        console.log('ERROR in rapid.js', reason);
      }

    default:
      // return res.status().json();
  }
};

/*
? : query string begins
= : value separator
& : parameter separator


*/
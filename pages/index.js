import Navtabs from '../components/navtabs';

setInterval(() => {
  console.log('process.env.BONUS ALERT');
  process.env.BONUS ??= ('' + 0);

  const bonus = Number(process.env.BONUS);
  const isBad = (bonus >= 1000);
  if (!isBad) process.env.BONUS = '' + (bonus + 1);
}, 86400);


function HomePage() {
  return (
    <div>
      {/* Welcome to Next.js! */}
      <Navtabs />
    </div>
  );
}

export default HomePage;
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// URL = "https://hack-club-sigce-blogs.web.app/js/json/content.json";

async function handler(req, res){
  let response = await fetch('https://hack-club-sigce-blogs.web.app/js/json/content.json');
  let data = await response.json();
  let finalData;
  for (let i = 0; i < data.items.length; i++) {
    if (Number(data.items[i].id) === Number(req.query.id))  {
      finalData = data.items[i];
    }
  }
  res.json({data: finalData});


}

export default handler;
export default async (req, context) => {
  // URLからクエリパラメータ (?name=xxx) を取得する
  const url = new URL(req.url);
  const name = url.searchParams.get("name") || "ゲスト";
  
  // Netlifyの環境変数から値を取得する
  const coffeeMessage = process.env.COFFEE_MESSAGE || "";

  // 返却するデータ
  const data = {
    message: `こんにちは、${name}さん！${coffeeMessage}`,
    time: new Date().toISOString()
  };

  // JSON形式でレスポンスを返す
  return Response.json(data, {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
};

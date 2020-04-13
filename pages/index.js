import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <div>
      <h2>このアプリについて</h2>
      <p>
        Covid-19 Viewerは、日本のCovid-19に関する情報を閲覧できるアプリです。
      </p>
      <p>データは以下のサイトより使用させていただいております。</p>
      <a href="https://toyokeizai.net/sp/visual/tko/covid19/">
        東洋経済ONLINE 新型コロナウイルス国内感染の状況
      </a>
    </div>
    <div>
      <h3>運営費について</h3>
      <p>
        このアプリは広告・課金のどちらも行っておらず、利用者からの金銭を受け取っておりません。
      </p>
      <p>
        もし、私の活動を支援してくださる方は、以下のリンクより募金していただけると幸いです。
      </p>
      <a href="https://kyash.me/payments/JttV0ZEH90185UYLJmqBBQ5T8Pgw">
        Kyashで作者に500円を送る
      </a>
      <div>
        <img src="/kyash.png" alt="kyash qr code" width="200"></img>
      </div>
    </div>
    <div>
      <h3>作者について</h3>
      <p>@osamtimizer</p>
      <div>
        <a href="https://twitter.com/osamtimizer">Twitter</a>
      </div>
      <div>
        <a href="https://osamtimizer.hatenablog.com/">Blog</a>
      </div>
    </div>
  </Layout>
);

export default Index;

import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <div>
      <h2>このアプリについて</h2>
      <p>
        Covid-19 Viewerは、日本のCovid-19に関する情報を閲覧できるアプリです。
      </p>
      <p>
        このアプリは、広く一般に公開されている情報を表示するためのものであり、特定の人物や団体を批判したり、作者を含む特定の人物や団体の意見を主張するものではありません。
      </p>
      <p>
        また、感染症により亡くなられた方に哀悼の意を表するとともに、感染症対策のために活動してくださっている全ての方々に敬意を表します。
      </p>
      <h2>表示されているデータついて</h2>
      <p>データは以下のサイトより使用させていただいております。</p>
      <a href="https://toyokeizai.net/sp/visual/tko/covid19/">
        東洋経済ONLINE 新型コロナウイルス国内感染の状況
      </a>
    </div>
    <div>
      <h3>運営費について</h3>
      <p>このアプリは広告の表示・課金のどちらも行っていません。</p>
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

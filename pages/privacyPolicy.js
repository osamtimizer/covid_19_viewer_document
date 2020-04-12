import Link from "next/link";
import Layout from "../components/Layout";

const PrivacyPolicy = () => (
  <Layout>
    <h2>プライバシーポリシー</h2>
    <div>
      <p>
        本アプリケーションでは、利用状況データを収集するツールとしてFirebase(Google
        Inc.)を使用しています。
      </p>
      <p>
        そのため、Firebaseが利用者の情報を自動的に取得する場合があります。
        取得する情報、利用目的、第三者への提供等につきましては、以下のGoogleプライバシーポリシーのリンクをご覧ください。
      </p>
      <a href="https://policies.google.com/privacy?hl=ja">
        Google プライバシーポリシー
      </a>
    </div>
  </Layout>
);

export default PrivacyPolicy;

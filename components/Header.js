import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Header = () => {
  return (
    <div>
      <div>
        <h1>Covid-19 Viewer</h1>
      </div>
      <Link href="/">
        <a style={linkStyle}>このアプリについて</a>
      </Link>
      <Link href="/privacyPolicy">
        <a style={linkStyle}>プライバシーポリシー</a>
      </Link>
    </div>
  );
};

export default Header;

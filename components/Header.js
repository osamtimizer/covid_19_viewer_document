import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>このアプリについて</a>
      </Link>
      <Link href="/privacy_policy">
        <a style={linkStyle}>プライバシーポリシー</a>
      </Link>
    </div>
  );
};

export default Header;

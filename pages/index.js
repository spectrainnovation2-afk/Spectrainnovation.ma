import Image from 'next/image';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#fff'
    }}>
      <Image src="/logo.png" alt="Logo" width={280} height={280} />
      <h1 style={{ marginTop: 24, fontSize: '2rem', color: '#333' }}>
        Under Maintenance
      </h1>
    </div>
  );
}

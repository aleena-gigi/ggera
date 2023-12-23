import NavBar from '../components/NavBar';
import './globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
        <NavBar/>
        {children}
      </div>
  )
}

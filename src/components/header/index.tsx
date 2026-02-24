import { useData } from '@/context/data-context'

const Header = () => {
  const data = useData()
  console.log(data)

  return <div>Header</div>
}

export default Header

import { useData } from '@/context/data-context'

const Summary = () => {
  const { data } = useData()
  console.log(data)

  return <div>Resumo</div>
}

export default Summary

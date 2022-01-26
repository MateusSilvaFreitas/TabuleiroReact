import Tabuleiro from "../components/tabuleiro"

export default function Home() {
  return (
    <div  style={{marginTop:"10vh"}}>
      <Tabuleiro linhas={8} colunas={8}/>
    </div>
  )
}

import './App.css';
import Dados from './Components/Dados'
import Lotacao from './Components/Lotacao'
import { Query } from 'react-apollo'
import { USER_QUERY, LOTACAO } from './Apollo/queries'

function App() {
  return (
    <div className="App">
      <h1>Dashboard de Usuário</h1>
      <Query query={USER_QUERY}>
        {({loading, data}) => {
          if(loading)return (<h1>loading...</h1>)
          return(
            <Dados
            id = {data.usuario.id}
            nome = {data.usuario.nome}
            genero = {data.usuario.genero}
            documento = {data.usuario.documento}
            telefone = {data.usuario.contato.telefone}
            email = {data.usuario.contato.email}
            cargo = {data.usuario.cargo.descricao}
           />
          )
        }}
      </Query>
      <Query query={LOTACAO}>
          {({loading, data}) => {
            if(loading)return (<h1>loading...</h1>)
            return(              
              <Lotacao 
                idForo={data.usuario.lotacao_principal.id_foro}
                descForo={data.usuario.lotacao_principal.descricao}
                municipio={data.usuario.lotacao_principal.foro.municipio.nome}
              />
          )
        }}
      </Query>
    </div>
  );
}

export default App;
